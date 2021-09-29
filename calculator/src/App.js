import logo from './logo.svg';
import './App.css';
import {useState} from 'react'




function NumberButtons(value, setValue) {

  const handleClick = (event) => {
    setValue = event.target.id
    console.log(setValue)
    value = setValue
  }

  return <>
  <div className="Numbers">
  <div className = "numberButton" id="seven" onClick={handleClick}></div>
    <div className = "numberButton" id="eight"></div>
    <div className = "numberButton" id="nine"></div>
    <div className = "numberButton" id="four"></div>
    <div className = "numberButton" id="five"></div>
    <div className = "numberButton" id="six"></div>
    <div className = "numberButton" id="one"></div>
    <div className = "numberButton" id="two"></div>
    <div className = "numberButton" id="three"></div>
    <div className = "numberButtonZero" id="zero"></div>
    <div className = "numberButton" id="decimal"></div>
  </div>
  </>
}

function FunctionButtons(setValue) {
  return <>
  <div className="Functions">
    <div className = "functionButton" id="clear"></div>
    <div className = "functionButton" id="division"></div>
    <div className = "functionButton" id="multiplication"></div>
    <div className = "functionButton" id="minus"></div>
    <div className = "functionButton" id="addition"></div>
    <div className = "functionButton" id="equal"></div>
  </div>
  </>
}

function Display(value) {
  console.log(value)
  let tempVal = 0

  return <>
  <div className="Display">
  <span>{tempVal}</span>
  </div>
  </>
}

function App() {
  const [value, setValue] = useState("0")
  return (
    <div className="App">
      <span>React Calculator</span>
      <div className="Border">
        <Display value={value}/>
        <NumberButtons setValue={setValue}/>
        <FunctionButtons setValue={setValue}/>
      </div>
    </div>
  );
}

export default App;
