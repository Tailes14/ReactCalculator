import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react'
import { getSuggestedQuery } from '@testing-library/dom';

/*
function NumberButtons(value, setValue) {

  const handleClick = (event) => {
    setValue(7)
  }

  return <>
  <div className="Numbers">
  <button onClick={() =>setValue(value+1)}></button>
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
*/
/*
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
*/

function Display(value) {
  let tempVal = Object.values(value)

  return <>
  <div className="Display">
  <span>{tempVal}</span>
  </div>
  </>
}



function App() {
  const [currValue, setCurrValue] = useState(0)
  const [prevInput, setPrevInput] = useState(null)
  const [symbol, setSymbol] = useState()
  const [temp, setTemp] = useState(0)

  // couldnt get a function for individual buttons to get setValue to work, so just defining them all App
  // taking care of number assingments
  const handleNumberClick = (button) => {
    const id = button.target.id

    if (id === 'zero') {
      setCurrValue(0)
    } else if (id === 'one') {
      setCurrValue(1)
    } else if (id === 'two') {
      setCurrValue(2)
    } else if (id === 'three') {
      setCurrValue(3)
    } else if (id === 'four') {
      setCurrValue(4)
    } else if (id === 'five') {
      setCurrValue(5)
    } else if (id === 'six') {
      setCurrValue(6)
    } else if (id === 'seven') {
      setCurrValue(7)
    } else if (id === 'eight') {
      setCurrValue(8)
    } else if (id === 'nine') {
      setCurrValue(9)
    }

  }

  const handleFunctionClick = (button) => {
    const id = button.target.id

    // setting first number entered into prevValue
    // storing the symbol used to use later with equal sign
    if (id === 'clear') {
      setPrevInput(0)
      setCurrValue(0)
    } else if (id === 'division') {
      setSymbol('/')
      setPrevInput(currValue)
    } else if (id === 'multiplication') {
      setSymbol('*')
      setPrevInput(currValue)
    } else if (id === 'minus') {
      setSymbol('-')
      setPrevInput(currValue)
    } else if (id === 'addition') {
      setSymbol('+')
      setPrevInput(currValue)
    }
  }

  const handleEqualClick = (button) => {
    if (symbol === '+') {
      setCurrValue(prevInput + currValue)
    } else if (symbol === '-') {
      setCurrValue(prevInput - currValue)
    } else if (symbol === '*') {
      setCurrValue(prevInput * currValue)
    } else if (symbol === '/') {
      setCurrValue((prevInput / currValue).toFixed(2))
    }
  }

  return (
    <div className="App">
      <span>React Calculator</span>
      <div className="Border">
        <Display value={currValue}/>
        <div className="Numbers">
          <div className = "numberButton" id="seven" onClick={handleNumberClick}></div>
          <div className = "numberButton" id="eight" onClick={handleNumberClick}></div>
          <div className = "numberButton" id="nine" onClick={handleNumberClick}></div>
          <div className = "numberButton" id="four" onClick={handleNumberClick}></div>
          <div className = "numberButton" id="five" onClick={handleNumberClick}></div>
          <div className = "numberButton" id="six" onClick={handleNumberClick}></div>
          <div className = "numberButton" id="one" onClick={handleNumberClick}></div>
          <div className = "numberButton" id="two" onClick={handleNumberClick}></div>
          <div className = "numberButton" id="three" onClick={handleNumberClick}></div>
          <div className = "numberButtonZero" id="zero" onClick={handleNumberClick}></div>
          <div className = "numberButton" id="decimal" onClick={handleNumberClick}></div>
        </div>
        <div className="Functions">
          <div className = "functionButton" id="clear" onClick={handleFunctionClick}></div>
          <div className = "functionButton" id="division" onClick={handleFunctionClick}></div>
          <div className = "functionButton" id="multiplication" onClick={handleFunctionClick}></div>
          <div className = "functionButton" id="minus" onClick={handleFunctionClick}></div>
          <div className = "functionButton" id="addition" onClick={handleFunctionClick}></div>
          <div className = "functionButton" id="equal" onClick={handleEqualClick}></div>
        </div>
      </div>
    </div>
  );
}

export default App;
