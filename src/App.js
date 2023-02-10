import { useState } from "react";

import Input from "./input/Input";
import Output from "./output/Output";

import "./App.css";

function App() {
  // const [inputarray, setInputarray] = useState([]);

  // const [inputdata, setInputdata] = useState({
  //   name: "",
  //   fame: "",
  // });

  // function changehandle(e) {
  //   setInputdata({ ...inputdata, [e.target.name]: e.target.value });
  // }

  // let { name, fame } = inputdata;
  // function changevalue() {
  //   setInputarray([...inputarray, { name, fame }]);
  //   setInputdata({ name: "", fame: "" });
  // }

  return (
    <div className="App">
      <Input />
      <Output />
    </div>
  );
}

export default App;
