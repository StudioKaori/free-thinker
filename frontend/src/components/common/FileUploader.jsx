import React, { useState, useEffect } from "react";

import firebase, { storage } from "../../firebase/firebase";

// =====================================================================
export default function FileUpload({ registerPhotoToDB }) {
  const [image, setImage] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const handleImage = (event) => {
    const image = event.target.files[0];
    setImage(image);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (image === "") {
      console.log("Please select file");
    }

    // upload
    const uploadTask = storage.ref(`/images/${image.name}`).put(image);
    uploadTask.on(
      firebase.storage.TaskEvent.STATE_CHANGED,
      next,
      error,
      complete
    );
  };
  const next = (snapshot) => {
    // show progress
    const percent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log(percent + "% done");
    console.log(snapshot);
  };
  const error = (error) => {
    // error
    console.log(error);
  };
  const complete = () => {
    // get file name after upload
    storage
      .ref("images")
      .child(image.name)
      .getDownloadURL()
      .then((fireBaseUrl) => {
        setImageUrl(fireBaseUrl);

        //for register photo to DB
        registerPhotoToDB(fireBaseUrl);
      });
  };

  // for fileuploader
  const [status, setStatus] = useState(0);
  useEffect(() => {
    if (imageUrl !== "") {
      setStatus(1);
    }
  }, [imageUrl]);

  return (
    <div className="App">
      <h6>Upload Image</h6>
      <form onSubmit={onSubmit}>
        <input type="file" onChange={handleImage} />
        <button>Upload</button>
      </form>
      {status === 1 ? (
        <img src={imageUrl} alt="uploaded" className="profile-img-preview" />
      ) : null}
    </div>
  );
}
