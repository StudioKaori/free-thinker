export default function Input({label, value, onChange}) {

    return (
        <div className="input-group mb-1" >
            <div className="input-group-prepend">
                <label className="input-group-text">{label}</label>
            </div>
            <input type="text" placeholder={value} onChange={onChange} />
        </div>
    );
}
