import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0)

  const handleClick1 = () => {
    setCounter(counter + 1)
  }
  const handleClick2 = () => {
    setCounter(counter - 1)
  }

  return (
    <div className="App">
      <h1 style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontSize: "100px",
        position: "absolute",
        top: "-15%",
      }}> INCREMENT & Decrement
      <div style={{
        fontSize:"75px",
        position: "relative",
        top: "10vh"
      }}>{counter}</div>
      <button style={{
        fontSize: "60px",
        position: "relative",
        top: "20vh",
        borderRadius: "8px",
        backgroundColor: "green",
        color: "white"
      }} onClick={handleClick1}>Increment</button>
      <button style={{
        fontSize: "60px",
        position: "relative",
        top: "20vh",
        borderRadius: "8px",
        backgroundColor: "green",
        color: "white"
      }} onClick={handleClick2}>Decrement</button>
      </h1>
    </div>
  );
}

export default App;
                                                                                                                                