import React from 'react';

const ActivitiesWeek = ({activities,datesWeek}) => {
    const renderInputsbyDate = datesWeek.map(date =><input value={date.format('DD-MM-YYYY')}/>)
    return (
        <div>
          {  activities.map(activity=>{
              return <div>{activity} {renderInputsbyDate}</div>
          })}

        </div>
    );
};

export default ActivitiesWeek;