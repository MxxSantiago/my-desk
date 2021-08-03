import React, { useEffect, useState } from 'react'

export const BoardSection = () => {
    const boardData = () => JSON.parse(localStorage.getItem('board')) || [''];

    const [state, setState] = useState(boardData);

    useEffect(() => {
        localStorage.setItem('board', JSON.stringify(state));
    }, [state]);

    return (
        <textarea 
            className="form-control board" 
            placeholder="Type something.."
            value={state}
            onChange={event => setState(event.target.value)}
        />
    );
};
