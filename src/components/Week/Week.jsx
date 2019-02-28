import React from 'react';
import styles from './Week.module.css'

const Week = ({ dateMonday, addSubtractWeek }) => {
    return (
        <div>
            <button id="subtractButton" className={styles.button} onClick={addSubtractWeek}>PRECEDENTE</button>
            <span className={styles.currentWeek}>
                Semaine du {dateMonday.format("DD-MM-YYYY")} au {dateMonday.clone().add(6, 'Days').format("DD-MM-YYYY")}
            </span>
            <button id="addButton" className={styles.button} onClick={addSubtractWeek}>SUIVANTE</button>
        </div>
    );
};

export default Week;