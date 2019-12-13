import React from 'react';
import './SharkTank.scss';
// import PropTypes from 'prop-types';

class SharkTank extends React.Component {
  render() {
    const e10 = this.props.e10students;

    const studentCards = e10.map((student) => <div key={student.id}>{student.firstName} {student.lastName}</div>);

    return (
      <div className="SharkTank">
       <h1>SharkTank</h1>
        {studentCards}
        {/* <img src=""></img> */}
      </div>
    );
  }
}

export default SharkTank;
