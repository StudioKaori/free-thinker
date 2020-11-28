export default function Button({ style, content, onClick }) {

    return (
        <button className={`btn btn-sm btn-primary m-1 ${style}`} onClick={onClick}>
            {content}
        </button>
    );
}
