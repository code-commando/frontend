
import superagent from 'superagent';
import cookies from 'react-cookies';

export const FETCH_COURSE='FETCH_COURSE';
export const POST_COURSE='POST_COURSE';

let apiURL = 'http://api.commando.ccs.net/api/v1';


export const fetchCourseInfo = (course) => ({
  type: FETCH_COURSE,
  payload: course,
});

export const postCourseInfo = (course) => ({
  type: POST_COURSE,
  payload: course,
});




export const fetchCourseThunk = () => {
  return dispatch => {

    let course = {

      dayNumber : 4,
      classCode: '401n5',
      lectureTitle: '03: Asynchronous Callbacks',
      labTitle: 'Lab 04: Bitmap Transformer',
      lectureLink: 'https://github.com/codefellows/seattle-javascript-401n5/blob/master/06-tcp-server/README.md',
      labLink: 'https://github.com/codefellows-seattle-javascript-401n5/04-data-modeling-and-binary',
    };


    
    dispatch(fetchCourseInfo(course));
  };
};



export const postCourse = (classCode, githubRepo) => {
  return dispatch => {
    superagent
      .post(`${apiURL}/classes`)
      .set({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${cookies.load('token')}` })
      .send({classCode, githubRepo})
      .then(response => {
        console.log('post course', response);
      });
  };
};