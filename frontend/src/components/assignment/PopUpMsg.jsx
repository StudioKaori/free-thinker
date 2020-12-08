import '../../css/assignment/popUpMsg.css'

// Pop up message, can be used for "Saved" or "Error" for example
export default function PopUpMsg({message}) {

    return (
        <div className="pop-up-message"> 
            <div className="pop-up-content">
                {message}
            </div>
        </div>
    );
}
