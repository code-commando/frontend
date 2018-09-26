//action creators
import superagent from 'superagent';

export const FETCH_COURSE='FETCH_COURSE';


// let apiURL = 'http://localhost:3000/api/v1/roster';
// let fetchCourseURL = 

export const fetchCourseInfo = (course) => ({
  type: FETCH_COURSE,
  payload: course,
});


// Thunk action returns a function that dispatches an action.

export const fetchCourseThunk = () => {
  return dispatch => {

    let course = {

      dayNumber : 4,
      classCode: '401n5',
      lectureTitle: '03: Asynchronous Callbacks',
      labTitle: 'Lab 04: Bitmap Transformer',
      lectureLink: 'http://placecage.com/200/200',
      labLink: 'http://placekitten.com/200/200',
    };


    
    dispatch(fetchCourseInfo(course));
    // superagent
    //   .get(`${apiURL}/random?classCode=401n5`)
    //   .then(student => {
    //     console.log('student', student);
    //     dispatch(randomStudent(student.body));
    //   });
  };
};
