import React from 'react';

const Week = ({ dateMonday,addSubtractWeek }) => {
    return (
        <div>
            <button id="subtractButton" onClick={addSubtractWeek}>PRECEDENTE</button>
            Semaine du {dateMonday.format("DD-MM-YYYY")} au {dateMonday.clone().format("DD-MM-YYYY")}
            <button id="addButton" onClick={addSubtractWeek}>SUIVANTE</button>
        </div>
    );
};

export default Week;