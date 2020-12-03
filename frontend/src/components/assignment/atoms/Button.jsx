export default function Button({ buttonStyle, content, onClick }) {

    return (
        <button className={`btn m-1 ${buttonStyle}`} onClick={onClick}>
            {content}
        </button>
    );
}
