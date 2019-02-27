import React from 'react';

import styles from './ActivityWeek.module.css'

const ActivityWeek = ({ activity, datesWeek }) => {
    return (
        <div container={styles.container}>
            {activity}{datesWeek.map((date, index) => <input key={index} value={date.format('DD-MM-YYYY')}/>)}
        </div>
    );
};

export default ActivityWeek;