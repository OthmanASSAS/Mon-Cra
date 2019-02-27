import React from 'react';

const InputAddActivity = ({handleActivity,submitActivity, activity}) => {
    return (
        <div>
            <form type="submit" onSubmit={submitActivity}>
                <input type="text" value={activity} onChange={handleActivity}/>
                <input type="submit" value="Ajouter"/>
            </form>
        </div>
    );
};

export default InputAddActivity;