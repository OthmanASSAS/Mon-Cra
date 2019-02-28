import React from 'react';

import styles from './ActivityWeek.module.css';
import iconRemove from '../../../assets/icones/delete-button.svg'

const ActivityWeek = ({ activity, datesWeek, handleInputValue, datasByInput, datas,deleteActivity }) => {

    let found;
    let id;


    return (<div className={styles.container}>

        <span>{activity}</span>{datesWeek.map((date, index) => {
            id = activity + '_' + date.format('DD-MM-YYYY')
            found = datas.find(element => {

                return element.id === id
            })

            return (<input
                id={id}
                onChange={(e) => handleInputValue(e, activity, date)}
                key={index}
                value={found ? found.value : ''}
            />)
        })}<span onClick={(e)=>deleteActivity(e,activity)}><img src={iconRemove} alt='remove' className={styles.iconRemove} /></span>

    </div>)
}



export default ActivityWeek;