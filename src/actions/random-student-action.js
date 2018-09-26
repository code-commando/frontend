//action creators
// import superagent from 'superagent';

export const RANDOM_STUDENT='RANDOM_STUDENT';


// let apiURL = 'http://localhost:3000/api/v1/roster';

export const randomStudent = (student) => ({
  type: RANDOM_STUDENT,
  payload: student,
});


// Thunk action returns a function that dispatches an action.


const roster = ['Brittany Bolstad',
  'Anna Boyatyuk',
  'Tyler Confalone',
  'Autumn Curtis',
  'Khoa Huynh',
  'Phillip Kim',
  'Michael Lennerblom',
  'Josh McClung',
  'James McDaniel',
  'Aaron Meade',
  'Haley Mendoza',
  'Madhu Rebbana',
  'Maxwell Rediker',
  'Richard Tae',
  'Tama Rushin',
  'Ariel Altaras'];

export const randomStudentThunk = () => {
  return dispatch => {

    const rando = Math.floor(Math.random() * roster.length);

    let studentInfo = {
      'count': 1,
      'results':roster[rando],
      'classCode': '401n5',
    };

    dispatch(randomStudent(studentInfo));

    // superagent
    //   .get(`${apiURL}/random?classCode=401n5`)
    //   .then(student => {
    //     console.log('student', student);
    //     dispatch(randomStudent(student.body));
    //   });
  };
};
