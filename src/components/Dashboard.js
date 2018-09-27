import React, { Component, Fragment } from 'react';
import NavBar from './NavBar.js';
import HeaderBar from './HeaderBar.js';
import Roster from './Roster.js';
import { connect } from 'react-redux';
import { fetchCourseThunk } from '../actions/course-action.js';
import style from '../style/style.js';

// const main = {
//   display: 'inline-block',
//   background: 'black',
//   textAlign: 'center',
//   minHeight: '100vh',
//   width: '100%',
// };

// const outerContainer = {
//   height: '75%',
//   minHeight: '130vh',
//   background: '#929495',
// };

const innerContainer = {
  display: 'inline-block',
  height: '70vh',
  width: '90%',
  // float: 'right',
  paddingBottom: '5vh',
};

const title = {
  color: '#181818',
  textAlign: 'center',
  marginLeft: '5%',
};

//for teacher text box
const bottomLeft = {
  display: 'inline-block',
  border: '1px solid black',
  background: '#F0F3F4',
  fontSize: '1.5vw',
  height: '50vh',
  width: '45%',
  // marginTop: '5vh',
  paddingTop: '2vh',
};

const bottomRight = {
  display: 'inline-block',
  height: '25vh',
  width: '30%',
  float: 'right',
  marginRight: '10%',
  marginTop: '5vh',
};

const enBiggen = {
  fontSize: '22pt',
};

// const openButtonStyle = {
//   // display: 'block',
//   marginTop: '25vh',
//   marginLeft: '2vw',
//   float: 'left',
//   height: '20vh',
//   width: '7%',
//   borderStyle: 'solid',
//   borderWidth: '3px',
//   borderColor: 'black',
//   color: 'black',
//   borderRadius: '15%',
//   boxShadow: '5px 10px #5C534C',
// };

// const closeButtonStyle = {
//   display: 'block',
//   height: '5.5vh',
//   width: '11vw',
//   borderStyle: 'solid',
//   borderWidth: '5px',
//   borderColor: '#1E1E1E',
//   borderRadius: '17%',
//   boxShadow: '4px 4px 13px #D5D5D5',
//   marginTop: '1vh',
//   marginLeft: 'auto',
//   marginRight: 'auto',
//   marginBottom: '2.5vh',
//   fontSize: '2.2vh',
// };

// const sidebarBox = {
//   // display: 'inline-block',
//   marginRight: '2%',
//   height: '100%',
//   float: 'left',
//   textAlign: 'left',
//   borderStyle: 'solid',
//   borderWidth: '5px',
//   borderColor: '#1E1E1E',
//   background: '#333333',
//   color: '#C4C4C4',
//   width: '20vw',
//   padding: '5px',
// };


// const rosterStyle = {
//   display: 'inline-block',
//   borderStyle: 'solid',
//   borderColor: 'blue',
//   borderWidth: '5px',
// };

// function OpenSidebar(props) {
//   return (
//     <button style={openButtonStyle} onClick={props.onClick}>Roster</button>
//   );
// }

// function CloseSidebar(props) {
//   return (
//     <button style={closeButtonStyle} onClick={props.onClick}>close sidebar</button>
//   );
// }

const textArea = {
  width: '90%',
  height: '300px',
};

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.handleOpenSidebar = this.handleOpenSidebar.bind(this);
    this.handleCloseSidebar = this.handleCloseSidebar.bind(this);

    this.state = { open: false };
  }

  componentDidMount() {
    this.props.fetchCourseThunk();
  }

  handleOpenSidebar() {
    this.setState({ open: true });
  }
  handleCloseSidebar() {
    this.setState({ open: false });
  }
  render() {
    // let sidebar;
    // if (this.state.open) {
    //   sidebar = (
    //     <Fragment>
    //       <div style={sidebarBox}>
    //         <CloseSidebar onClick={this.handleCloseSidebar} />
    //         <Roster style={rosterStyle}></Roster>
    //       </div>
    //     </Fragment>
    //   );
    // } else {
    //   sidebar = <OpenSidebar onClick={this.handleOpenSidebar} />;
    // }

    return (
      <Fragment>
        <style.NavBar />
        <div>
          {/* <div>{sidebar}</div> */}
          <h1>{this.props.course.classCode}</h1>
          <div className='innerContainer' style={innerContainer}>
            <h1 style={title}>Day {this.props.course.dayNumber}</h1>
            <div type='bottom left' style={bottomLeft} >
              <form>
                Notes
                <textarea style={textArea} name='notes'>Topics for the Day</textarea>
              </form>
            </div>
            <div type="bottom right" style={bottomRight} >
              <ul>
                <li style={enBiggen}>Lecture: <a href={this.props.course.lectureLink}>{this.props.course.lectureTitle}</a></li>
                <li style={enBiggen}>Lab: <a href={this.props.course.labLink}>{this.props.course.labTitle}</a></li>
                <li style={enBiggen}>Canvas</li>
              </ul>
            </div>
          </div>
          {/* </div> */}
        </div>
        {/* </div> */}
        {/* </div> */}
      </Fragment>
    );
  }
}

const mapDispatchToProps = { fetchCourseThunk };

const mapStateToProps = state => ({
  course: state.courseReducer,
});
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
