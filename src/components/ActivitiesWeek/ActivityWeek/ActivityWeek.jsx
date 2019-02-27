import React from 'react';

import styles from './ActivityWeek.module.css'

const ActivityWeek = ({ activity, datesWeek,handleInputValue,datasByInput }) => {
    console.log({datasByInput})
    
    return (
        <div container={styles.container}>
            {activity}{datesWeek.map((date, index) => <input
                id={activity + '_' + date.format('DD-MM-YYYY')}
                onChange={(e)=>handleInputValue(e,activity,date)}
                key={index}
                value={datasByInput.value} />)}
        </div>
    );
};

export default ActivityWeek;