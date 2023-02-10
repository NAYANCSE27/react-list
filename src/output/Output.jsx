import "./Output.css";

function Output(){
    return( 
      <div className="table__value">
        list.map(function(item)
          return (<li>{item}</li>);
        )
      </div>
    );
}

export default Output;