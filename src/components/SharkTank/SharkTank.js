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
    // This is how I am passing props to this component e10students needs to be the same in App.js in the sharktank component 
    const nss10 = this.props.e10students;
    // console.log(nss10);

    const studentCards = nss10.map((student) => <LiveStudent key={student.id} student={student}/>);

    return (
      <div className="Attack">
      {/* <button className='btn btn-outline-dark'>SHARK <span role="img" aria-label="Shark">🦈</span>ATTACK</button> */}
      <div className="SharkTank row d-flex justify-content-center">
        {/* <LiveStudent/> */}
        {studentCards}
      </div>
      </div>
    );
  }
}

export default SharkTank;
