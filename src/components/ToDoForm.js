import * as React from 'react';


    const ToDoForm: React.FC = ({addTodoItem}) => {
    const [value, setValue] = React.useState("");

    const onItemAdd = e => {
        e.preventDefault();
        if (!value) return;
        addTodoItem(value);
        setValue("");
    };

    return (
        <form >
            <input
                type="text"
                className="input"
                value={value}
                placeholder={'Enter your todo here.'}
                onChange={e => setValue(e.target.value)}
            />
            <button className="add" onClick={onItemAdd}>Add</button>
        </form>
    );
};

export default ToDoForm;
