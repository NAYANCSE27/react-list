import "./Output.css";

function Output({list}){
    return( 
      <div className="table__value">
        {console.log(list)}
        {
          list.map((item) =>{
            return <li>{item}</li>;
          }
        )}
      </div>
    );
}

export default Output;