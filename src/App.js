import './App.css';
import React from 'react';
import Header from './components/header';
import TodosLogic from './components/todosLogic';

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
