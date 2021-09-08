import React, { useState } from 'react';

const NewTaskInput = ({ onSubmit }) => {

    const [newItem, setNewItem] = useState('');

    function setNewTask({target}) {
        setNewItem(target.value);
    }

    function submit(e) {
        e.preventDefault();
        onSubmit(newItem);
    }

    return (
        <div>
            <form onSubmit={submit}>
            <input
            className="all-input"
            placeholder="Add your fav countries"
            onChange={setNewTask}
            />
            <button class="btn-add" type="submit">
            Add
            </button>
            </form>
        </div>
    )
};

export default NewTaskInput;