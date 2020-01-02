import {getItem} from "../storage/LocalStorage";

const getToDoList = () => {
    let todoList = getItem('todoList');
    todoList = JSON.parse(todoList);
    todoList = todoList ? todoList :  [];
    return todoList;
};

export {
    getToDoList
}
