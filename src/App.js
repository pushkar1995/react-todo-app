import "./App.css";
import Header from "./components/header";
import TodosLogic from "./components/todosLogic"
import React from "react";

function App() {
  return (
    <div className="wrapper">
      <div className="todos">
        <Header />
        <TodosLogic />
      </div>
    </div>
  );
}

export default App;