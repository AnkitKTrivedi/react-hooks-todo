import {addItem, completeItem, removeItem} from "./Utils";


test('addItem should add todo to the list', () => {
    const startTodos = [
        {  text: 'one', isCompleted: false },
        {  text: 'two', isCompleted: false }
    ];

    const newTodo = {text: 'three', isCompleted: false };

    const expected = [
        { text: 'three', isCompleted: false },
        { text: 'one', isCompleted: false },
        {  text: 'two', isCompleted: false }
    ];

    const result = addItem(startTodos, newTodo);

    expect(result).toEqual(expected);
});


test('addItem should not mutate the existing todo array', () => {
    const startTodos = [
        {  text: 'one', isCompleted: false },
        {  text: 'two', isCompleted: false }
    ];

    const newTodo = { id: 3, text: 'three', isCompleted: false };

    const expected = [
        {  text: 'one', isCompleted: false },
        {  text: 'two', isCompleted: false },
        {  text: 'three', isCompleted: false }
    ];

    const result = addItem(startTodos, newTodo);

    expect(result).not.toBe(startTodos);
});

test('completeItem should toggle isComplete prop of a todo', () => {
    const startTodo = [{  text: 'one', isCompleted: false }];
    const expected = [{  text: 'one', isCompleted: true }];

    const result = completeItem(startTodo, 0);

    expect(result).toEqual(expected)
});

test('completeItem should not mutate todo', () => {
    const startTodo = [{  text: 'one', isCompleted: false }];
    const result = completeItem(startTodo, 0);

    expect(result).not.toBe(startTodo);
});


test('removeItem should remove todo from todos by index ', () => {
    const startTodos = [
        {  text: 'one', isCompleted: false },
        {  text: 'two', isCompleted: false },
        {  text: 'three', isCompleted: false}
    ];

    const expected = [
        {  text: 'one', isCompleted: false },
        { text: 'three', isCompleted: false}
    ];

    const result = removeItem(startTodos, 1);

    expect(result).toEqual(expected);
});

test('removeItem by id should not mutate', () => {
    const startTodos = [
        {  text: 'one', isCompleted: false },
        {  text: 'two', isCompleted: false },
        { text: 'three', isCompleted: false}
    ];

    const expected = [
        {  text: 'one', isCompleted: false },
        {text: 'three', isCompleted: false}
    ];

    const result = removeItem(startTodos, 1);

    expect(result).not.toBe(expected)
});
