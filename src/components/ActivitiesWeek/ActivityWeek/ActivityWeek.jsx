import React from 'react';

import styles from './ActivityWeek.module.css'

const ActivityWeek = ({ activity, datesWeek, handleInputValue, datasByInput, datas }) => {
let found;
let id;

    return (<div container={styles.container}>

        {activity}{datesWeek.map((date, index) => {
             id = activity + '_' + date.format('DD-MM-YYYY')
             found = datas.find(element => {
                console.log({element})
                return element.id === id
            })
            console.log(found)
            return (<input
                id={id}
                onChange={(e) => handleInputValue(e, activity, date)}
                key={index}
                value={found ? found.value : ''} 
                />)
        })}

    </div>)
}

    

export default ActivityWeek;