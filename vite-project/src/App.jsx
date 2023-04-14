import { useState } from "react";
import "./App.css";

function App() {
  const [masterCount, setMasterCount] = useState(0);
  function updateLocalCount() {
    setMasterCount((prevCount) => prevCount + 1);
  }
  return (
    <div className="App">
      <button onClick={updateLocalCount}>{masterCount}</button>
      <Child masterCount={masterCount} />
      <Child masterCount={masterCount} />
      ...
    </div>
  );
}

function Child({ masterCount }) {
  const [childCount, setChildCount] = useState(0);
  function updateChildCount() {
    setChildCount((prevCount) => prevCount + 1);
  }
  return <button onClick={updateChildCount}>{masterCount + childCount}</button>;
}

export default App;

/*
This is a simple React application that consists of an App component and a Child component.

The App component renders a button that displays the value of the masterCount state variable, which is initialized to 0 using the useState hook. When the button is clicked, the updateLocalCount function is called, which increments the value of masterCount by 1 using the setMasterCount function.

The App component also renders two instances of the Child component, passing the masterCount state variable as a prop to each instance. The Child component also uses the useState hook to initialize a childCount state variable to 0, and renders a button that displays the sum of masterCount and childCount. When the button is clicked, the updateChildCount function is called, which increments the value of childCount by 1 using the setChildCount function.

Overall, this application demonstrates how state can be managed and passed between parent and child components in a React application using the useState hook and props.
 */
