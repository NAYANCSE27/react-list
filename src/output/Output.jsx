import "./Output.css";

function Output({ list }) {
  return (
    <div className="table__value">
      {console.log(list)}
      <ul>
        {list.map((info, ind) => {
            return <li key={ind}>{info}</li>;
          })
        }
      </ul>
    </div>
  );
}

export default Output;
