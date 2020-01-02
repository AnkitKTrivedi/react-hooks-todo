import * as React from 'react';
import "./App.css";
import ToDoForm from '../src/components/ToDoForm';
import ToDoList from "./components/ToDoList";
import {setItem, addItemInExitingList} from "./storage/LocalStorage";
import {getToDoList} from "./utils/Utils";


  const App: React.FC = () => {
  const [todos, setTodos] = React.useState([]);

  const addTodoItem = text => {
    const newTodos = [...todos, { text }];
    addItemInExitingList('todoList', {text});
    setTodos(newTodos);
  };

  const completeTodoItem = index => {
    const newTodos = [...getToDoList()];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setItem('todoList', JSON.stringify(newTodos));
    setTodos(newTodos);
  };

  const removeTodoItem = index => {
    const newTodos = [...getToDoList()];
    newTodos.splice(index, 1);
    setItem('todoList', JSON.stringify(newTodos));
    setTodos(newTodos);
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
