/* eslint-disable max-len */
import React from 'react';
// filter the students here in App.js where the state exists
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import SharkTank from '../components/SharkTank/SharkTank';
import Graveyard from '../components/Graveyard/Graveyard';
import studentsData from '../helpers/data/studentsData';

class App extends React.Component {
  state = {
    livingStudents: [],
    deadStudents: [],
  }

  componentDidMount() {
    const livingStudents = studentsData.livingStudents();
    const deadStudents = studentsData.dearlyBeloved();
    this.setState({ livingStudents, deadStudents });
  }

  sharkAttack = () => {
    let livingStudents = studentsData.livingStudents();
    const selectedStudent = livingStudents[Math.floor(Math.random() * livingStudents.length)];
    const selectedStudentId = selectedStudent.id;
    studentsData.followTheLight(selectedStudentId);
    const deadStudents = studentsData.dearlyBeloved();
    livingStudents = studentsData.livingStudents();
    this.setState({ livingStudents, deadStudents });
  }

  render() {
    return (
    <div className="App">
      <div className="contain">
      <SharkTank livingStudents={this.state.livingStudents} sharkAttack={this.sharkAttack}/>
      <Graveyard dearlyBeloved={this.state.deadStudents} />
      </div>
    </div>
    );
  }
}

export default App;
