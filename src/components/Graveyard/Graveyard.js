/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import GraveStone from '../GraveStone/GraveStone';

import './Graveyard.scss';

import studentShape from '../../helpers/propz/studentShape';

class Graveyard extends React.Component {
  static propTypes = {
    daStudents: PropTypes.arrayOf(studentShape.studentShape),
    theyDead: PropTypes.func,
  }

  render() {
    const e10 = this.props.daStudents;
    const { theyDead } = this.props;

    const studentTombStones = e10.map((student) => <GraveStone key={student.id} student={student} theyDead={theyDead}/>);
    // const studentTombStones = e10.map((student) => student.firstName);
    console.log('test', studentTombStones);

    return (
    <div className="Graveyard">
    {/* <div className="Graveyard row d-flex justify-content-center"> */}
    <h1>Graveyard</h1>
    {/* <GraveStone studentTombStones={studentTombStones}/> */}
    <GraveStone/>

    </div>
    );
  }
}

export default Graveyard;
