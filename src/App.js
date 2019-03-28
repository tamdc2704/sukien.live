import React, { Component } from 'react';
import './App.css';
import ExamContainer from './exams'
import ManagementController from './results/components/ManagementController';
import data from './data.json'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ExamContainer />
        <ManagementController data={data}/>
      </div>
    );
  }
}

export default App;
