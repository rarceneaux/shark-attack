import React from 'react';
import './SharkTank.scss';
import PropTypes from 'prop-types';

import LiveStudent from '../LiveStudent/LiveStudent';
import studentShape from '../../helpers/propz/studentShape';
import studentsData from '../../helpers/data/studentsData';


class SharkTank extends React.Component {
  static propTypes = {
    livingStudents: PropTypes.arrayOf(studentShape.studentShape),
    sharkAttack: PropTypes.func,
  }

    sharkAttackEvent = (e) => {
      const students = studentsData.livingStudents();
      if (students.length > 0) {
        const { sharkAttack } = this.props;
        e.preventDefault();
        sharkAttack();
      }
    }

    render() {
      const classRoster = this.props.livingStudents;
      const { sharkAttackEvent } = this.props;

      const studentCards = classRoster.map((student) => <LiveStudent key={student.id} student={student} sharkAttackEvent={sharkAttackEvent}/>);

      return (
      <div className="sharkTank">
        <h1>Shark Tank</h1>
        <button onClick={this.sharkAttackEvent}className='btn btn-outline-dark'>SHARK <span role="img" aria-label="Shark">🦈</span>ATTACK</button>
        <div className="SharkTank row d-flex justify-content-center">
          {studentCards}
        </div>
      </div>
      );
    }
}

export default SharkTank;
