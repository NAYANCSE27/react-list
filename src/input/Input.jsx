import { useState } from "react";
import Output from "../output/Output";
import "./Input.css";

function Input(){
    const [newMessage, setNewMessage] = useState('');
    const [listMessage, setListMessage] = useState([]);

    function handleOnChange(event){
        setNewMessage(event.target.value);
    }
    function handleOnClick(){
        setListMessage(newMessage);
    }

    return (
        <div className="input__value">
            <input
              type="text"
              autoComplete="off"
              placeholder="Enter Activity"
              onChange={handleOnChange}
            />
            <button onClick={handleOnClick}>Add</button>

            <Output list={listMessage}/>
        </div>
    );
}

export default Input;