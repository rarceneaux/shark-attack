import React from 'react';
import './SharkTank.scss';
import PropTypes from 'prop-types';
import LiveStudent from '../LiveStudent/LiveStudent';

import studentShape from '../../helpers/propz/studentShape';


class SharkTank extends React.Component {
  static propTypes = {
    e10students: PropTypes.arrayOf(studentShape.studentShape),
  }

  render() {
    const e10 = this.props.e10students;

    const studentCards = e10.map((student) => <LiveStudent key={student.id} student={student}/>);

    return (
      <div className="SharkTank row d-flex justify-content-center">
       {/* <h1>SharkTank</h1> */}
        {studentCards}
        {/* <img src=""></img> */}
      </div>
    );
  }
}

export default SharkTank;
