import logo from './logo.svg';
import './App.css';



function NumberButtons() {
  return <>
  <div className="Numbers">
  <div className = "numberButton" id="one"></div>
    <div className = "numberButton"></div>
    <div className = "numberButton"></div>
    <div className = "numberButton"></div>
    <div className = "numberButton"></div>
    <div className = "numberButton"></div>
    <div className = "numberButton"></div>
    <div className = "numberButton"></div>
    <div className = "numberButton"></div>
    <div className = "numberButtonZero"></div>
    <div className = "numberButton"></div>
  </div>
  </>
}

function FunctionButtons() {
  return <>
  <div className="Functions">
    <div className = "functionButton"></div>
    <div className = "functionButton"></div>
    <div className = "functionButton"></div>
    <div className = "functionButton"></div>
    <div className = "functionButton"></div>
    <div className = "functionButton"></div>
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
