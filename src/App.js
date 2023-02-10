import './App.css';
import { useState } from 'react';

function App() {
  const [inputarray, setInputarray] = useState([])

  const [inputdata, setInputdata] = useState({
    name: "",
    fame: ""
  })

  function changehandle(e) {
    setInputdata({ ...inputdata, [e.target.name]: e.target.value })
  }

  let {name, fame} = inputdata;
  function changevalue(){
      setInputarray([...inputarray,{name, fame}])
      setInputdata({name:"", fame:""})
  }

  return (
    <div className="App">
      <input type="text" autoComplete='off' placeholder='Enter name' name='name' value={inputdata.name} onChange={changehandle} /> <br />
      <input type="text" autoComplete='off' placeholder='Enter fame' name='fame' value={inputdata.fame} onChange={changehandle} />
      <button onClick={changevalue}>Submit</button>

      <table border={2} width="50%" cellPadding={10}>
        <tbody>
            <tr>
                <td>Name</td>
                <td>Fame</td>
            </tr>
            {
                inputarray.map((info, ind)=>{
                  return(
                      <tr key={ind}>
                        <td>{info.name}</td>
                        <td>{info.fame}</td>
                      </tr>
                  )
                })
            }
          </tbody>
      </table>
    </div>
  );
}

export default App;
