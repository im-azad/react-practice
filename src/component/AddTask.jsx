import React, { useState } from 'react';

function AddTask({ onAddTasks }) {
    const [text, setText] = useState('');
    return (
        <>
            <input
                type="text"
                placeholder="Add task"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button
                onClick={() => {
                    onAddTasks(text);
                    setText('');
                }}
            >
                Add
            </button>
        </>
    );
}

export default AddTask;
