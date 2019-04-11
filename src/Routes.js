import React from 'react';
import {Switch, Route} from 'react-router-dom';
import RecapCra from './components/RecapCra/RecapCra'


const Routes = (props) => {
    return (
<Switch>

    <Route exact component={RecapCra} path='recapcra'></Route>
</Switch>
    )
}

export default Routes