export default function Button({ buttonStyle, content, onClick, disabled }) {

    return (
        <button 
            className={`btn m-1 ${buttonStyle}`} 
            onClick={onClick}
            disabled={disabled}
        >
            {content}
        </button>
    );
}
