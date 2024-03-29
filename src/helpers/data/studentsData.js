// Each student object should have the following keys: id, firstName, lastName, isDead
// The isDead key should be set to false for everyone on load

const students = [
  {
    id: 'student1',
    firstName: 'Raymond',
    lastName: 'Arceneaux',
    isDead: false,
  },
  {
    id: 'student2',
    firstName: 'Alesha',
    lastName: 'Reed',
    isDead: false,
  },
  {
    id: 'student3',
    firstName: 'Ashley',
    lastName: 'Claiborne',
    isDead: false,
  },
  {
    id: 'student4',
    firstName: 'Charity',
    lastName: 'Bunyon',
    isDead: false,
  },
  {
    id: 'student5',
    firstName: 'Connor',
    lastName: 'Sullivan',
    isDead: false,
  },
  {
    id: 'student6',
    firstName: 'Crystal',
    lastName: 'Broach',
    isDead: false,
  },
  {
    id: 'student7',
    firstName: 'Denise',
    lastName: 'Baker',
    isDead: false,
  },
  {
    id: 'student8',
    firstName: 'Emilee',
    lastName: 'Mitchell',
    isDead: false,
  },
  {
    id: 'student9',
    firstName: 'Evan',
    lastName: 'Grabenstein',
    isDead: false,
  },
  {
    id: 'student10',
    firstName: 'Gabriel',
    lastName: 'Seals',
    isDead: false,
  },
  {
    id: 'student11',
    firstName: 'Ivan',
    lastName: 'Phelps',
    isDead: false,
  },
  {
    id: 'student12',
    firstName: 'Jacob',
    lastName: 'Best-Wittenberg',
    isDead: false,
  },
  {
    id: 'student13',
    firstName: 'Jamie',
    lastName: 'Phillips',
    isDead: false,
  },
  {
    id: 'student14',
    firstName: 'Jasmine',
    lastName: 'Williams',
    isDead: false,
  },
  {
    id: 'student15',
    firstName: 'John',
    lastName: 'Key',
    isDead: false,
  },
  {
    id: 'student16',
    firstName: 'John',
    lastName: 'Thielman',
    isDead: false,
  },
  {
    id: 'student17',
    firstName: 'John',
    lastName: 'Johnson',
    isDead: false,
  },
  {
    id: 'student18',
    firstName: 'Kelsey',
    lastName: 'Creel',
    isDead: false,
  },
  {
    id: 'student19',
    firstName: 'Laura',
    lastName: 'Collins',
    isDead: false,
  },
  {
    id: 'student20',
    firstName: 'Maggie',
    lastName: 'Greene',
    isDead: false,
  },
  {
    id: 'student21',
    firstName: 'Maria',
    lastName: 'Brock',
    isDead: false,
  },
  {
    id: 'student22',
    firstName: 'Monica',
    lastName: 'Djunaidi',
    isDead: false,
  },
  {
    id: 'student23',
    firstName: 'Randy',
    lastName: 'Tate',
    isDead: false,
  },
];

const getStudents = () => students;

const livingStudents = () => {
  const liveStudents = [];
  students.forEach((student) => {
    if (student.isDead === false) {
      liveStudents.push(student);
    }
  });
  return liveStudents;
};

const dearlyBeloved = () => {
  const deadStudents = [];
  students.forEach((student) => {
    if (student.isDead === true) {
      deadStudents.push(student);
    }
  });
  return deadStudents;
};

const followTheLight = (studentId) => {
  const selectedStudent = students.find((student) => student.id === studentId);
  selectedStudent.isDead = true;
};

export default {
  livingStudents,
  dearlyBeloved,
  followTheLight,
  getStudents,
};
