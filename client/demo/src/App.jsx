import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import todoApi from "./api/todoApi";

function App() {
  const [lists, setLists] = useState();
  async function getAll() {
    const res = await todoApi.getAll();
    setLists(res);
  }

  useEffect(() => {
    getAll();
  }, []);
  return (
    <>
      <h1>ToDoリスト</h1>
      <ul>
        {lists.map((elem, index) => (
          <li key={index}>
            <input type="checkbox" id={`checkbox-${index}`} />
            <label htmlFor={`checkbox-${index}`}>{elem.task}</label>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
