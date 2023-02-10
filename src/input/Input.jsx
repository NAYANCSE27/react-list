import { useState } from "react";
import "./Input.css";

function Input(){
    const [newMessage, setNewMessage] = useState('');
    const [listMessage, setListMessage] = useState([]);
    return (
        <div className="input__value">
            <input
              type="text"
              autoComplete="off"
              placeholder="Enter Activity"
            />
            <button>Add</button>
        </div>
    );
}

export default Input;