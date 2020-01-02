import * as React from 'react';
import {getToDoList} from "../utils/Utils";



const ToDoList : React.FC = ({completeTodoItem, removeTodoItem}) => {
    let todoList = getToDoList();

    return(
        todoList.length ?
            <div className="todo-list">
                {todoList.map((todo, index) => (
                    <ToDoItem
                        key={index}
                        index={index}
                        todo={todo}
                        completeTodo={completeTodoItem}
                        removeTodo={removeTodoItem}
                    />
                ))}

            </div>
            : null
    )
};


const ToDoItem = ({ todo, index, completeTodo, removeTodo }) => {
    return (
        <div
            className="todo"
            style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
        >
            {todo.text}

            <div>
                <button  className="complete" onClick={() => completeTodo(index)}>Complete</button>
                <button className="cross" onClick={() => removeTodo(index)}>x</button>
            </div>
        </div>
    );
};

export default ToDoList;
