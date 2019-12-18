import React from 'react';
import './LiveStudent.scss';
import PropTypes from 'prop-types';
import studentShape from '../../helpers/propz/studentShape';

class LiveStudent extends React.Component {
  static propTypes = {
    studentList: PropTypes.arrayOf(studentShape.studentShape),
  }

  render() {
    const { student } = this.props;

    return (
<div className="card-livingStudent text-center">
    <h5 className="card-title">{student.firstName} {student.lastName}</h5>
  <div className="card-body">
  </div>
</div>
    );
  }
}

export default LiveStudent;
