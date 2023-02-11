import Input from "./input/Input";
import { useState } from "react";
import Output from "./output/Output";

import "./App.css";

function App() {
  // const [newMessage, setNewMessage] = useState('');
  const [listMessage, setListMessage] = useState([]);
  return (
    <div className="App">
      <Input listMessage={listMessage} setListMessage={setListMessage} />
      <Output listMessage={listMessage} setListMessage={setListMessage} />
    </div>
  );
}

export default App;
