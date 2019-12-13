import React from 'react';
import './LiveStudent.scss';

class LiveStudent extends React.Component {
  render() {
    const { student } = this.props;

    return (
<div className="card">
  <div className="card-body">
      <h5 className="card-title">{student.firstName}</h5>
  </div>
</div>
    );
  }
}

export default LiveStudent;
