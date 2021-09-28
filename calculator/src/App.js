import logo from './logo.svg';
import './App.css';



function NumberButtons() {
  return <>
  <div className="Numbers">
  <div className = "numberButton" id="seven"></div>
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

function FunctionButtons() {
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

function Display() {
  return <>
  <div className="Display">
  <span>0</span>
  </div>
  </>
}

function App() {
  return (
    <div className="App">
      <span>React Calculator</span>
      <div className="Border">
        <Display/>
        <NumberButtons/>
        <FunctionButtons/>
      </div>
    </div>
  );
}

export default App;
