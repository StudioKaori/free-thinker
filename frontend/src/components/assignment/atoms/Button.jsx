export default function Button({ id, buttonStyle, content, onClick, disabled }) {

    return (
        <button 
            id={id}
            className={`btn m-1 ${buttonStyle}`} 
            onClick={onClick}
            disabled={disabled}
        >
            {content}
        </button>
    );
}
