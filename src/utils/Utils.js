import {getItem} from "../storage/LocalStorage";

const getToDoList = () => {
    let todoList = getItem('todoList');
    todoList = JSON.parse(todoList);
    todoList = todoList ? todoList :  [];
    return todoList;
};



const completeItem = (list, index) => {
    list[index]['isCompleted'] = !list[index].isCompleted;
    return [...list];
};
const removeItem = (list, index) => {
     list.splice(index, 1);
    return [...list]
};

const addItem = (list, item) => {
  return [item, ...list];
};

export {
    getToDoList,
    removeItem,
    completeItem,
    addItem
}
