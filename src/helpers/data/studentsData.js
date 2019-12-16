// Each student object should have the following keys: id, firstName, lastName, isDead
// The isDead key should be set to false for everyone on load

const students = [
  {
    id: 'student1',
    firstName: 'Raymond',
    lastName: 'Arceneaux',
    isDead: false,
    img: 'https://img1.wsimg.com/isteam/ip/b11d58fa-2b9e-47b0-b4ba-a33bacfaed92/Screen%20Shot%202019-09-16%20at%2012.41.30%20AM.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25',
  },
  {
    id: 'student2',
    firstName: 'Alesha',
    lastName: 'Reed',
    isDead: false,
    img: '',
  },
  {
    id: 'student3',
    firstName: 'Ashley',
    lastName: 'Claiborne',
    isDead: false,
    img: '',
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
    isDead: true,
  },
];

const livingStudents = () => students;

const dearlyBeloved = (studentId) => {
  students.forEach((response) => {
    if (response.id === studentId) {
      response.isDead = true;
    }
  });
};

const followTheLight = (studentId) => {
  students.forEach((response) => {
    if (response.id === studentId) {
      response.isDead = true;
    }
  });
};

export default { livingStudents, dearlyBeloved, followTheLight };
