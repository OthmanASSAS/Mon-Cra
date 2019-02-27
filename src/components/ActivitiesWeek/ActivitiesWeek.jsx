import React from 'react';

import styles from './ActivitiesWeek.module.css'

import ActivityWeek from './ActivityWeek/ActivityWeek'


const ActivitiesWeek = ({ activities, datesWeek }) => {

    return (
        <div >
            {activities.map((activity, index) => <ActivityWeek key={index} activity={activity} datesWeek={datesWeek} />)}


        </div>
    );
};

export default ActivitiesWeek;