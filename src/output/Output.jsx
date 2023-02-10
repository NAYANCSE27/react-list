import "./Output.css";

function Output(){
    return( 
      <div className="table__value">
      <table border={2} width="50%" cellPadding={10}>
        <tbody>
          <tr>
            <td>Name</td>
            <td>Fame</td>
          </tr>
          {inputarray.map((info, ind) => {
            return (
              <tr key={ind}>
                <td>{info.name}</td>
                <td>{info.fame}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
    );
}

export default Output;