import React, { memo, useState } from 'react';

const PersonScore = ({ personName = 'petras', score = 10 }) => {
    const [checked, setChecked] = useState(false)

    return (
        <div className="person-score">    
            <h1>{personName}</h1>
            <h5>{score}</h5>
            <input
                type="checkbox"
                checked={checked}
                onChange={() => setChecked(!checked)}
            />
        </div>
    )
};

export default memo(PersonScore);