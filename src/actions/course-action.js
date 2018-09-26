//action creators
import superagent from 'superagent';

export const FETCH_COURSE='FETCH_COURSE';
export const POST_COURSE='POST_COURSE';


let apiURL = 'http://localhost:3000/api/v1';
// let fetchCourseURL = 

export const fetchCourseInfo = (course) => ({
  type: FETCH_COURSE,
  payload: course,
});

export const postCourseInfo = () => {
  type: POST_COURSE,
  payload: 
}


// Thunk action returns a function that dispatches an action.

export const fetchCourseThunk = () => {
  return dispatch => {

    let course = {

      dayNumber : 4,
      classCode: '401n5',
      lectureTitle: '03: Asynchronous Callbacks',
      labTitle: 'Lab 04: Bitmap Transformer',
      lectureLink: 'https://github.com/codefellows/seattle-javascript-401n5/blob/master/06-tcp-server/README.md',
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



export const postCourse = () => {
  return dispatch => {
    superagent
      .post(`${apiURL}/classes`)
      .auth()
      .then(response => {
        console.log('post course', response);
      });
  };
};