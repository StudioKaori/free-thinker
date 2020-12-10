import '../../css/assignment/popUpMsg.css'

// Pop up message, can be used for "Saved" or "Error" for example
export default function PopUpMsg({type, message}) {

    return (
        <div className={`message-${type} pop-up-message`}> 
            <div className="pop-up-content">
                {message}
            </div>
        </div>
    );
}
