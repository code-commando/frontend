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
      textAlign: 'left',
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
    const runCodeButton = {
      // display: 'block',
      margin: 'auto',
      marginTop: '10px',
      background: '#D23833',
      color: 'white',
      boxShadow: '3px 5px 8px black',
      borderRadius: '5px',
      fontSize: '16px',
    };
    const outputButton = {
      // display: 'inline-block',
      margin: 'auto',
      marginTop: '10px',
      background: '#D23833',
      color: 'white',
      boxShadow: '3px 5px 8px black',
      borderRadius: '5px',
      fontSize: '16px',
    };
    const buttonWrapperStyle = {
      marginTop: '10px',
      display: 'inline',
      // flexDirection: 'row',
      // justifyContent: 'left',
    };

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
              <h1>Code Runner</h1>
            </div>

            <div className="row" style={blockOut}>
              <div className="col-md-6" style={monacoStyle}>
                <div className="row">
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

                <div className="row" style={buttonWrapperStyle}>
                  <button
                    onClick={this.handleOnClick}
                    type="button"
                    className="btn btn-primary btn-sm"
                    data-toggle="button"
                    aria-pressed="false"
                    autoComplete="off"
                    style={runCodeButton}
                  >
                    Run Code
                  </button>
                  <button
                    onClick={this.handleOnClearOutput.bind(this)}
                    type="button"
                    className="output"
                    data-toggle="button"
                    aria-pressed="false"
                    autoComplete="off"
                    style={outputButton}
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
