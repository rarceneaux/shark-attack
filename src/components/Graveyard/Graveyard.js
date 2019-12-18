import React from 'react';

import PropTypes from 'prop-types';

import GraveStone from '../GraveStone/GraveStone';
import studentShape from '../../helpers/propz/studentShape';

import './Graveyard.scss';

class Graveyard extends React.Component {
  static propTypes = {
    dearlyBeloved: PropTypes.arrayOf(studentShape.studentShape),
  }

  render() {
    const { dearlyBeloved } = this.props;

    const tombstone = dearlyBeloved.map((student) => <GraveStone key={student.id} student={student}/>);

    return (
      <div className="Graveyard row d-flex justify-content-center">
        <h1>The Coding Dead</h1>
        {tombstone}
      </div>
    );
  }
}

export default Graveyard;
