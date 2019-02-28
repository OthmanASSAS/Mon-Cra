import React from 'react';
import styles from'./InputAddActivity.module.css'

import plusButton from '../../assets/icones/plus-button.svg'

const InputAddActivity = ({handleActivity,submitActivity, activity}) => {
    
    return (
        <div>
            <form className={styles.form} type="submit" onSubmit={submitActivity}>
                <input type="text" value={activity} onChange={handleActivity}/>
                <button type="submit">Ajouter</button>
               
            </form>
        </div>
    );
};

export default InputAddActivity;