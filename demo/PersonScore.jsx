import React, { memo, useState } from 'react';

const PersonScore = ({ name = 'petras', score = 10 }) => {
    const [checked, setChecked] = useState(false)

    return (
        <div className="person-score">    
            <h1>{name}</h1>
            <h5>{score}</h5>
            <input
                type="checkbox"
                checked={checked}
                onClick={() => setChecked(!checked)}
            />
        </div>
    )
};

export default memo(PersonScore);