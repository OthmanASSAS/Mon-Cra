import React from 'react';

import styles from './ActivitiesWeek.module.css'

import ActivityWeek from './ActivityWeek/ActivityWeek'


const ActivitiesWeek = ({ activities, datesWeek, handleInputValue,datasByInput, datas }) => {

    return (
        <div >
            {activities.map((activity, index) => <ActivityWeek
                key={index}
                activity={activity}
                datesWeek={datesWeek}
                handleInputValue={handleInputValue}
                datasByInput={datasByInput}
                datas={datas}
                />)}


        </div>
    );
};

export default ActivitiesWeek;