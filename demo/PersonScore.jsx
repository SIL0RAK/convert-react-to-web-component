import React, { memo } from 'react';

const PersonScore = ({ name = 'petras', score = 10 }) => (
    <div>
        <h1>{name}</h1>
        <h5>{score}</h5>
    </div>
);

export default memo(PersonScore);