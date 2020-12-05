export default function Input({label, value, onChange}) {

    return (
        <div className="input-group mb-1" >
            <input type="text" value={value} onChange={onChange} />
        </div>
    );
}
