import { useState } from "react";
import "./App.css";

let App = () => {

  let [val1, setVal1] = useState()
  let [val2, setVal2] = useState()

  let [ans,setAns] = useState();

  let [msg, setMsg] = useState("");


  const validate = (e) => {
    if (val1 === "") {     
      setMsg("ERROR!  Num 1 cannot be empty");
      setAns("");
      return;
    }
    else if (val2 === "") {
      setMsg("ERROR! Num 2 cannot be empty");
      setAns("");
      return;
    }
    const num1Val = Number(val1);
    const num2Val = Number(val2);
    let resultVal = "";
  
    if (isNaN(num1Val) || isNaN(num2Val)) {
      setMsg("ERROR! Input cannot be empty");
    } else {
      switch (e.target.innerText) {
        case "+":
          resultVal = num1Val + num2Val;
          break;
        case "-":
          resultVal = num1Val - num2Val;
          break;
        case "*":
          resultVal = num1Val * num2Val;
          break;
        case "/":
          resultVal = num1Val / num2Val;
          break;
        default:
          return;
      }
  
      setAns(resultVal);
      setMsg("Success!");
      
    }
  };



  return (
  <div className="calculator">
    <h1>React Calculator</h1>

    <div className="input-fields">
      <input type="text" placeholder="NUM 1" onChange={(event)=>{setVal1(event.target.value)}}/>
      <input type="text" placeholder="NUM 2" onChange={(event)=>{setVal2(event.target.value)}}/>
    </div>

    <div className="buttons">
      <button onClick={validate}> + </button>
      <button onClick={validate}> - </button>
      <button onClick={validate}> * </button>
      <button onClick={validate}> / </button>
    </div>

    <div>
      <div className={msg.includes("Success") ? "success" : "error"}>{msg.split('!')[0]}</div>
      <div>{msg.split('!')[1]}</div>
    </div>
    <div className='res'>{ans === "" ? "" : <p> Result : {ans}</p> }</div>

  </div>
  );
}

export default App;
