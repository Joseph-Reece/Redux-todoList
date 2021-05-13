import React from 'react';
import { useSelector } from 'react-redux';
import './App.css'
import Input from './components/input/input';
import TodoItem from './components/todoItem/todoItem';
import {selectTodoList} from './features/todoSlice'



function App() {
  const todoList = useSelector(selectTodoList)
  return (
    <div className="app">
      <div className="app__container">
        <h2>Todo List</h2>
        <div className="app__todoContainer">
          {
            todoList.map((todo, idx) => (
              <TodoItem
                content={todo.item}
                status={todo.done}
                id={todo.id}
                key={idx}
              />

            ))
          }
        </div>
        
        <Input />
      </div>
    </div>
  );
}

export default App;
