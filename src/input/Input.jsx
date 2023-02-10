import "./Input.css";

function Input(){
    return (
        <div className="input__value">
            <input
              type="text"
              autoComplete="off"
              placeholder="Enter name"
              name="name"
              value={inputdata.name}
              onChange={changehandle}
            />
            <button onClick={changevalue}>Submit</button>
        </div>
    );
}

export default Input;