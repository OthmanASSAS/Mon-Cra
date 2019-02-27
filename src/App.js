import React, { Component } from 'react';

import moment from 'moment';

import './App.css';
import Week from './components/Week/Week';
import SearchBar from './components/SearchBar/SearchBar';
import InputAddActivity from './components/InputAddActivity/InputAddActivity';
import ActivitiesWeek from './components/ActivitiesWeek/ActivitiesWeek';

class App extends Component {

    state = {
        dateMonday: moment().day('Monday'),
        datesWeek:[],
        activity: '',
        activities: ['RTT', 'Maladie']


    }

    componentDidMount(){
        this.generateDatesWeek()
    }

    generateDatesWeek = () => {
        const dateMonday=this.state.dateMonday.clone()
        
        let datesWeek=[this.state.dateMonday];
        for (let i = 0; i <= 3; i++) {
            
            datesWeek = [...datesWeek, dateMonday.add(1, 'Days').clone()]
        }
        console.log({datesWeek});
        this.setState({datesWeek})
    }
    

    addSubtractWeek = (e) => {
        const idButton = e.target.id
        const newDateMonday = this.state.dateMonday

        if (idButton === 'subtractButton') {
            newDateMonday.subtract(7, 'days')
        } else {
            newDateMonday.add(7, 'days')
        }
        this.setState({ dateMonday: newDateMonday })
    }

    handleActivity = (e) => {
        this.setState({ activity: e.target.value })
        console.log(this.state.activity);

    }

    submitActivity = (e) => {
        e.preventDefault()
        let newActivities = [...this.state.activities]
        newActivities = [...newActivities, this.state.activity]
        this.setState({ activities: newActivities, activity: '' })

    }



    render() {
        return (
            <div className="App">
                <Week
                    dateMonday={this.state.dateMonday}
                    addSubtractWeek={this.addSubtractWeek}
                />
                <SearchBar />
                <InputAddActivity
                    submitActivity={this.submitActivity}
                    handleActivity={this.handleActivity}
                    activity={this.state.activity} />
                <ActivitiesWeek 
                    activities={this.state.activities}
                    datesWeek={this.state.datesWeek}
                />
            </div>
        );
    }
}

export default App;
