import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import todoApi from "./api/todoApi";

function App() {
  const [lists, setLists] = useState([]);

  async function getAll() {
    console.log("ここは通ってますか?");
    const res = await todoApi.getAll();
    console.log("res", res.data);
    await setLists(res.data); //axiosはres.dataに格納されている
  }

  useEffect(() => {
    getAll();
  }, []);
  return (
    <>
      <h1>ToDoリスト</h1>
      <link rel="icon" href="data:,"></link>
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
