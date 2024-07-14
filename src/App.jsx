import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";
import DisplayCalc from "./Components/DisplayCalc";
import ButtonDisplay from "./Components/ButtonDisplay";

function App() {
  const [calVal, setCalVal] = useState([""])
  function onButtonClick(btnPassed){
    if(btnPassed === "C"){
      setCalVal("")
    }
    else if(btnPassed === "="){
      let val = eval(calVal)
      setCalVal(val)
    }
    else {
    const newDisplayValue = calVal + btnPassed
     setCalVal(newDisplayValue)
    }
  }
  return (
    <>
      <div className="container">
        <DisplayCalc displayValue={calVal}/>
        <ButtonDisplay onButtonClick={onButtonClick}/>
      </div>
    </>
  );
}

export default App;
