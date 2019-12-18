import React from 'react';
import PropTypes from 'prop-types';
import studentShape from '../../helpers/propz/studentShape';
import './GraveStone.scss';

class GraveStone extends React.Component {
  static propTypes = {
    codingDead: PropTypes.arrayOf(studentShape.studentShape),
  }

  render() {
    const { student } = this.props;

    return (
<div className="card-deadStudent text-center">
    <h5 className="card-title">{student.firstName} {student.lastName}</h5>
  <div className="card-body">
  </div>
</div>
    );
  }
}

export default GraveStone;
