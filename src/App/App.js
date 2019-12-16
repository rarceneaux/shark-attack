/* eslint-disable max-len */
import React from 'react';
// import logo from './logo.svg';
// filter the students here in App.js where the state exists
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import studentData from '../helpers/data/studentsData';

import SharkTank from '../components/SharkTank/SharkTank';
import Graveyard from '../components/Graveyard/Graveyard';
import GraveStone from '../components/GraveStone/GraveStone';

class App extends React.Component {
  state = {
    students: [],
  }

  componentDidMount() {
    const students = studentData.livingStudents();
    this.setState({ students });
  }

  filterStudent = (students) => {
    const studentsA = students[Math.floor(Math.random() * students.length)];
  }

  // filterStudentEvent = (e) => {
  //   const { student } = studentData.livingStudents();
  //   e.preventDefault();
  //   filterStudent();
  // }

  theyDead = (studentId) => {
    studentData.dearlyBeloved(studentId);
    const students = studentData.livingStudents();
    this.setState({ students });
  }

  restingPlace = (studentId) => {
    studentData.followTheLight(studentId);
    const students = studentData.livingStudents();
    this.setState({ students });
  }

  render() {
    return (
    <div className="App">
  <button onClick={this.filterStudentEvent} className='btn btn-outline-dark'>SHARK <span role="img" aria-label="Shark">🦈</span>ATTACK</button>
      <SharkTank e10students={this.state.students} />
      <Graveyard daStudents={this.state.students} theyDead={this.theyDead} />
      {/* <GraveStone theCodingDead={this.state.dead} /> */}
    </div>
    );
  }
}

export default App;
