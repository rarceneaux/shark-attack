import React from 'react';
// import logo from './logo.svg';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import studentData from '../helpers/data/studentsData';

import SharkTank from '../components/SharkTank/SharkTank';

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
      <h1> Shark Attack React </h1>
      <SharkTank e10students={this.state.students} />
    </div>
    );
  }
}

export default App;
