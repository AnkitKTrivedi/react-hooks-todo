import * as React from 'react';
import "./App.css";
import ToDoForm from '../src/components/ToDoForm';
import ToDoList from "./components/ToDoList";
import {setItem} from "./storage/LocalStorage";
import {getToDoList, removeItem, completeItem, addItem} from "./utils/Utils";

const TODO_LIST_KEY = 'todoList';

  const App: React.FC = () => {
  const [todos, setTodos] = React.useState([]);

  const addTodoItem = text => {
    let newTodoItems = [...getToDoList()];
    newTodoItems = addItem(newTodoItems,{text});
    setItem(TODO_LIST_KEY, newTodoItems);
    setTodos(newTodoItems);
  };

  const completeTodoItem = index => {
    let newTodoItems = [...getToDoList()];
    newTodoItems = completeItem(newTodoItems, index);
    setItem(TODO_LIST_KEY, newTodoItems);
    setTodos(newTodoItems);
  };

  const removeTodoItem = index => {
    let newTodoItems = [...getToDoList()];
    newTodoItems = removeItem(newTodoItems,index);
    setItem(TODO_LIST_KEY, newTodoItems);
    setTodos(newTodoItems);
  };

  return (
      <div className="app">
        <h3> Todo App</h3>
        <ToDoForm addTodoItem={addTodoItem} />
        <ToDoList completeTodoItem={completeTodoItem} removeTodoItem={removeTodoItem} />
      </div>
  );
};

export default App;
