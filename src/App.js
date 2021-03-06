import React, { Component } from "react";

import moment from "moment";

import "./App.css";
import Week from "./components/Week/Week";
import SearchBar from "./components/SearchBar/SearchBar";
import InputAddActivity from "./components/InputAddActivity/InputAddActivity";
import ActivitiesWeek from "./components/ActivitiesWeek/ActivitiesWeek";
import Alert from "./components/Alert/Alert.jsx";
import HeaderCra from './components/HeaderCra/HeaderCra.jsx';

class App extends Component {
  state = {
    dateMonday: moment().day("Monday"),
    datesWeek: [],
    activity: "",
    activities: ["RTT", "Maladie"],

    datasByInput: {
      id: "",
      activity: "",
      date: "",
      value: ""
    },
    datas: [],

    alertMessage: "",
    toggleAlert: false
  };

  componentDidMount() {
    this.generateDatesWeek();
  }

  deleteActivity = (e, activity) => {
    let activities = this.state.activities;
    let newActivities = activities.filter(element => element !== activity);
    console.log(activity);
    this.setState({ activities: newActivities });
  };

  handleInputValue = (e, activity, date) => {
    const value = e.target.value;
    const id = e.target.id;
    const newDate = date.format("DD-MM-YYYY");

    let newDatasByInput = {
      id,
      activity,
      date: newDate,
      value
    };

    let newDatas = this.state.datas;

    let foundDatasByInputInDatas = newDatas.find(element => {
      return element.id === newDatasByInput.id;
    });
    if (!foundDatasByInputInDatas) {
      newDatas.push(newDatasByInput);
      this.setState({ datasByInput: newDatasByInput, datas: newDatas });
    } else {
      let datasFiltered = newDatas.filter(
        element => element.id !== foundDatasByInputInDatas.id
      );
      datasFiltered.push(newDatasByInput);
      this.setState({ datasByInput: newDatasByInput, datas: datasFiltered });
    }
  };

  generateDatesWeek = () => {
    let datesWeek = [];

    for (let i = 0; i <= 4; i++) {
      // datesWeek.push(this.state.dateMonday.clone().add(i,'Days'))
      datesWeek = [...datesWeek, this.state.dateMonday.clone().add(i, "Days")];
    }

    this.setState({ datesWeek });
  };

  addSubtractWeek = e => {
    const idButton = e.target.id;
    const newDateMonday = this.state.dateMonday;

    if (idButton === "subtractButton") {
      newDateMonday.subtract(7, "days");
    } else {
      newDateMonday.add(7, "days");
    }
    this.setState({ dateMonday: newDateMonday });
    this.generateDatesWeek();
  };

  handleActivity = e => {
  this.setState({activity:e.target.value, alertMessage:'',toggleAlert:false})
  
}

  

  submitActivity = e => {
    e.preventDefault();

    const {activity, activities} = this.state;
    const isExist = activities.includes(activity);
   
    if(!activity){
      this.setState({alertMessage:'Veuillez saisir le champ', toggleAlert:true});
      
    }else if(isExist){
      this.setState({alertMessage:"Cette activité existe déjà", toggleAlert:true});
    }else{
     const newActivities = [...activities, activity];
     this.setState({activities:newActivities, activity:''});
    }

  };

  render() {
    console.log(this.state);
    return (
      <div className="App">
      <HeaderCra/>
        <Week
          dateMonday={this.state.dateMonday}
          addSubtractWeek={this.addSubtractWeek}
        />
        <SearchBar />
        <InputAddActivity
          submitActivity={this.submitActivity}
          handleActivity={this.handleActivity}
          activity={this.state.activity}
        />
        {this.state.toggleAlert ? (
          <Alert alertMessage={this.state.alertMessage} />
        ) : null}
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
