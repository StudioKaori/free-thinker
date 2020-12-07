import '../../css/assignment/popUpMsg.css'

export default function PopUpMsg({message}) {

    console.log(message)

    return (
        <div className="pop-up-message"> 
            <div className="pop-up-content">
                {message}
            </div>
        </div>
    );
}
