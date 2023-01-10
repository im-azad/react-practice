import React, { useState } from 'react';

function AddTask({ tasks }) {
    const [text, setText] = useState('');
    console.log(text);
    return (
        <>
            <input
                type="text"
                placeholder="Add task"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button onClick={() => {}}>Add</button>
        </>
    );
}

export default AddTask;
