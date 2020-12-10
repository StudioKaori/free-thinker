import FileUploader from "../common/FileUploader";

export default function Profile({ registerPhotoToDB, closeDMPopup }) {
  return (
    <div className="form-group">
      <br />
      <br />
      <FileUploader registerPhotoToDB={registerPhotoToDB} />
      <br />
      <br />
      <button className="btn btn-info" onClick={closeDMPopup}>
        CLOSE
      </button>
    </div>
  );
}
