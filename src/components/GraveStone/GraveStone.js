import React from 'react';
import Proptypes from 'prop-types';

import './GraveStone.scss';

import studentShape from '../../helpers/propz/studentShape';
import Graveyard from '../Graveyard/Graveyard';

class GraveStone extends React.Component {
  static propTypes = {
    theCodingDead: Proptypes.arrayOf(studentShape.studentShape),
  }

  render() {
    const dead = this.props.theCodingDead;

    // const dead = deadStudents.map((student) => <Graveyard key={student.id} student={student}/>);

    return (
      <div className="card text-center">
    <h5 className="card-title">{dead} </h5>
  <div className="card-body">
  </div>
</div>
    );
  }
}

export default GraveStone;
