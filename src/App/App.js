import React from 'react';
// import logo from './logo.svg';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import studentData from '../helpers/data/studentsData';

class App extends React.Component {
  state = {
    students: [],
  }

  componentDidMount() {
    const students = studentData.livingStudents();
    this.setState({ students });
  }

  render() {
    return (
    <div className="App">
      <h1> Shark Attack </h1>
    </div>
    );
  }
}

export default App;
