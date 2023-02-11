import "./Output.css";

function Output({ list }) {
  return (
    <div className="table__value">
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
