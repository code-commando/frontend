
// import React, { Component, Fragment } from 'react';


// import style from '../style/style.js';
// import cookies from 'react-cookies';
// import {login} from '../actions/login-action.js';
// import {Redirect} from 'react-router-dom';
// import {connect} from 'react-redux';


// import NavBar from './NavBar';
// import HeaderBar from './HeaderBar';
// import MonacoEditor from 'react-monaco-editor';

// // const main = {
// //   background: '#D6D6D6',
// //   minHeight: '100vh',
// //   height: '100%',
// //   width: '100%',
// //   textAlign: 'center',
// // };
// // const editorFormat = {
// //   textAlign: 'left',
// // };
// class CodeRunner extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       code: '',
//       options: {},
//     };
//   }
//   editorWillMount(editor, monaco) {
//     console.log('editor mounnted', editor, monaco);
//     // const model = this.refs.monaco.editor.getModel();
//     // const value = model.getValue();
//     // console.log('value', value);
//     // console.log(editor);
//     //   monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
//     //     schemas: [
//     //       {
//     //         uri: 'http://myserver/foo-schema.json',
//     //         schema: {
//     //           type: 'object',
//     //           properties: {
//     //             p1: {
//     //               enum: ['v1', 'v2'],
//     //             },
//     //             p2: {
//     //               $ref: 'http://myserver/bar-schema.json',
//     //             },
//     //           },
//     //         },
//     //       },
//     //     ],
//     //   });
//     // }
//   }
//   editorDidMount(editor, monaco) {
//     console.log('editorDidMount', editor);
//     editor.focus();
//   }
//   onChange(newValue, e) {
//     console.log('onChange', newValue, e);
//   }

//   // editorDidMount(editor, monaco) {
//   //   // const model = this.refs.monaco.editor.getModel();
//   //   console.log('monaco', monaco);
//   //   console.log('editorDidMount', editor);
//   //   editor.focus();

//   //   //
//   // }
//   // onChange(event) {
//   //   // let newState = { ...this.state.code };
//   //   // newState[event.target.name] = event.target.value;
//   //   // this.setState(newState);
//   //   // this.setState({ code: event.target.value });
//   //   console.log('onChange', event);
//   // }
//   handleOnClick(event) {
//     event.preventDefault();
//     console.log('run code');
//   }

//   // // const code = this.state.code;
//   // // const options = {
//   // //   selectOnLineNumbers: true,
//   // const makeNeat = {
//   //   textAlign: 'left',
  

  
  
//   componentDidMount() {
//     document.title = 'Code Runner';
//     if(cookies.load('token')) {
//       this.props.login();
//     }
//   }

//   render() {
//     const code = this.state.code;
//     const options = {
//       selectOnLineNumbers: true,
//     };
    
//     if(cookies.load('token')) {
//       return (
//         <Fragment>

//           <style.NavBar />

//           <div>
//             <h1>Code runner</h1>
//             <MonacoEditor
//               ref="monaco"
//               // style={makeNeat}
//               width="500"
//               height="500"
//               language="javascript"
//               theme="vs-dark"
//               value={this.state.code}
//               onChange={this.onChange.bind(this)}
//               editorDidMount={this.editorDidMount.bind(this)}
//               editorWillMount={this.editorWillMount.bind(this)}
//             />
//             <button onClick={this.handleOnClick}>run code</button>
//           </div>
//         </Fragment>
//       );
//     }
//     else {
//       return <Redirect to='/signin'/>;

//     }
//   }
// }

// const mapStateToProps = state => ({
//   loggedIn: state.loginReducer.loggedIn,
// });

// const mapDispatchToProps = { login };

// export default connect(mapStateToProps, mapDispatchToProps)(CodeRunner);

//   handleClick(event) {
//     event.preventDefault();
//     let githubURL = 'https://github.com/login/oauth/authorize';

//     let options = {
//     // local
//     client_id: 'd6c0defbd80f3979493a',
//     //live
//     // client_id: 'f749977a8455b627dc56',
//     redirect_uri: 'http://localhost:3000/oauth',
//     // redirect_uri: 'https://code-commando.herokuapp.com/oauth',
//     scope: 'read:user repo',
//     state: 'autumn',
//     allow_signup: 'true',
//   };
//   let QueryString = Object.keys(options)
//     .map(key => {
//       return `${key}=` + encodeURIComponent(options[key]);
//     })
//     .join('&');

//   let authURL = `${githubURL}?${QueryString}`;

//   window.location = authURL;
// };

import React, { Component, Fragment } from 'react';
import superagent from 'superagent';
import style from '../style/style.js';
import cookies from 'react-cookies';
import { login } from '../actions/login-action.js';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import MonacoEditor from 'react-monaco-editor';
// import 'bootstrap/dist/css/bootstrap.min.css';

class CodeRunner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: '',
      codeResult: [],
      options: {},
    };

    this.onChange = this.onChange.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  editorWillMount(editor, monaco) {
    console.log('editor mounnted', editor, monaco);
  }
  editorDidMount(editor, monaco) {
    console.log('editorDidMount', editor);
    console.log(monaco);
    editor.focus();
  }
  onChange(code) {
    console.log('target', code);
    this.setState({
      code,
    });
  }
  handleOnClearOutput(event) {
    this.setState({
      ...this.state,
      codeResult: [],
    });
  }
  handleOnClick(event) {
    event.preventDefault();
    console.log('run code');
    const token = cookies.load('token');
    const classCode = '401n5';
    let obj = {};
    obj.code = this.state.code;
    obj.day = 2;
    obj.language = 'javascript';
    obj.event = 'run';
    superagent
      .post(`http://api.commando.ccs.net/api/v1/code?classCode=${classCode}`)
      .auth(token, { type: 'bearer' })
      .send(obj)
      .then(data => {
        console.log('this is the body', data.body);
        let codeResult = [];
        if (data.body.error) {
          if (obj.language === 'javascript') {
            console.log('data.body.error1', data.body.error);
            codeResult = [JSON.stringify(data.body.error)];
          } else {
            codeResult = [data.body.error];
            console.log('data.body.error2', data.body.error);
          }
        } else if (data.body.return && !data.body.log) {
          codeResult = [...codeResult, data.body.return];
        } else {
          codeResult = [...codeResult, data.body.output];
        }
        this.setState({ codeResult });
      });
  }

  componentDidMount() {
    document.title = 'Code Runner';
    if (cookies.load('token')) {
      this.props.login();
    }
  }

  render() {
    const updatedAnswers = this.state.codeResult.map((answer, index) => {
      return (
        <li key={index} style={makeOutputFly}>
          {answer}
        </li>
      );
    });

    // const makeWrapFly = {
    //   width: '485px',
    // };
    // const makeLeftFly = {
    //   width: '240px',
    //   height: '123px',
    //   float: 'left',
    // };

    const makeRightFly = {
      height: '300px',
      border: '1px solid black',
      overflowY: 'scroll',
      width: '40%',
      float: 'left',
      // marginLeft: '0',
    };
    const makeListFly = {
      margin: '0',
      padding: '5px',
      listStyleType: 'none',
      overflowX: 'hidden',
    };
    const makeOutputFly = {
      fontSize: 'small',
      wordWrap: 'break-word',
    };
<<<<<<< HEAD
    const monacoStyle = {
      textAlign: 'left',
    };
=======
    
    const monacoStyle = {
      textAlign: 'left',
      width: '40%',
      float: 'left',
      // marginRight: '0',
      marginLeft: '10%',
      // margin: 'auto',
      height: '300px',
    };

    const containerWidth = {
      width: '90%',
      margin: 'auto',
    };

    const blockOut = {
      display: 'inline-block',
      width: '100%',
    };

>>>>>>> 89564958f9703b237a88c940d4363d0ba1f2b937
    // // const code = this.state.code;
    // // const options = {
    // //   selectOnLineNumbers:, true

    if (cookies.load('token')) {
      // console.log(cookies.load('token'));
      return (
        <Fragment>
          <style.NavBar />
          <div className="container" style={containerWidth}>
            <div className="row">
              <h1>Code runner</h1>
            </div>

<<<<<<< HEAD
            <div className="row">
              <div className="col-md-6">
                <div className="row" style={monacoStyle}>
=======
            <div className="row" style={blockOut}>
              <div className="col-md-6" style={monacoStyle}>
                <div className="row">
>>>>>>> 89564958f9703b237a88c940d4363d0ba1f2b937
                  <MonacoEditor
                    name="code"
                    ref="monaco"
                    height="300"
                    language="javascript"
                    theme="vs-dark"
                    value={this.state.code}
                    onChange={this.onChange}
                    editorDidMount={this.editorDidMount.bind(this)}
                    editorWillMount={this.editorWillMount.bind(this)}
                  />
                </div>

                <div className="row" style={{ marginTop: '10px' }}>
                  <button
                    onClick={this.handleOnClick}
                    type="button"
                    className="btn btn-primary btn-sm"
                    data-toggle="button"
                    aria-pressed="false"
                    autoComplete="off"
                  >
                    Run Code
                  </button>
                  <button
                    onClick={this.handleOnClearOutput.bind(this)}
                    type="button"
                    className="btn btn-danger btn-sm"
                    data-toggle="button"
                    aria-pressed="false"
                    autoComplete="off"
                  >
                    Clear Output
                  </button>
                </div>
              </div>
              <div className="col-md-6">
                <div style={makeRightFly}>
                  <ul style={makeListFly}>{updatedAnswers}</ul>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      );
    } else {
      return <Redirect to="/signin" />;
    }
  }
}

const mapStateToProps = state => ({
  loggedIn: state.loginReducer.loggedIn,
});

const mapDispatchToProps = { login };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CodeRunner);
