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
        datesWeek: [],
        activity: '',
        activities: ['RTT', 'Maladie'],
        datasByInput: {
            id: '',
            activity: '',
            date: '',
            value: ''
        },
        datas: []


    }

    componentDidMount() {
        this.generateDatesWeek()
    }

    deleteActivity = (e,activity)=>{
       let activities = this.state.activities;
       let newActivities = activities.filter(element=>element!== activity)
        console.log(activity);
        this.setState({activities:newActivities})
    }

    handleInputValue = (e, activity, date) => {
        const value = e.target.value;
        const id = e.target.id
        const newDate = date.format("DD-MM-YYYY")

        let newDatasByInput = { id, activity, date: newDate, value }
       
       
        let newDatas = this.state.datas;

        let foundDatasByInputInDatas = newDatas.find(element => {
            return element.id === newDatasByInput.id
        })
        if (!foundDatasByInputInDatas) {
           
            newDatas.push(newDatasByInput);
            this.setState({ datasByInput:newDatasByInput, datas: newDatas })
        } else {
            
            let datasFiltered = newDatas.filter(element => element.id !== foundDatasByInputInDatas.id)
            datasFiltered.push(newDatasByInput);
            this.setState({datasByInput:newDatasByInput, datas: datasFiltered })
        }

    }

 

    generateDatesWeek = () => {
        let datesWeek = []
       
        for (let i = 0; i <= 4; i++) {

            // datesWeek.push(this.state.dateMonday.clone().add(i,'Days'))
            datesWeek = [...datesWeek, this.state.dateMonday.clone().add(i, 'Days')]
        }
       
        this.setState({ datesWeek })
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
        this.generateDatesWeek()
    }

    handleActivity = (e) => {
        this.setState({ activity: e.target.value })


    }
    

    submitActivity = (e) => {
        e.preventDefault()
        if (this.state.activity) {

            let newActivities = [...this.state.activities]
            newActivities = [...newActivities, this.state.activity]
            this.setState({ activities: newActivities, activity: '' })
        }

    }



    render() {
        console.log(this.state)
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
                    handleInputValue={this.handleInputValue}
                    datasByInput={this.state.datasByInput}
                    datas={this.state.datas}
                    deleteActivity={this.deleteActivity}
                />
            </div>
        );
    }
}

export default App;
