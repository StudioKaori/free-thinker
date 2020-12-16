import FileUploader from "../common/FileUploader";

// ========================================================================
// Profile pop up to upload picture
export default function Profile({ registerPhotoToDB, closePopupWindow }) {
  return (
    <div className="form-group">
      <br />
      <br />
      <FileUploader registerPhotoToDB={registerPhotoToDB} />
      <br />
      <br />
      <button className="btn btn-info" onClick={closePopupWindow}>
        CLOSE
      </button>
    </div>
  );
}
