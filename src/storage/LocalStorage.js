const setItem = (key, value) => {
  localStorage.setItem(key, value)
};
const getItem = key => localStorage.getItem(key);

const addItemInExitingList = (key, value) => {
    let todoList = getItem(key);
    todoList = JSON.parse(todoList);
    todoList = todoList ? todoList :  [];
    todoList.push(value);
    setItem(key, JSON.stringify(todoList));
};

export {
    setItem,
    getItem,
    addItemInExitingList
}
