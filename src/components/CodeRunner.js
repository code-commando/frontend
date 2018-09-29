import React, { Component, Fragment } from 'react';
import superagent from 'superagent';
import style from '../style/style.js';
import cookies from 'react-cookies';
import { login } from '../actions/login-action.js';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import NavBar from './NavBar';
import HeaderBar from './HeaderBar';
import MonacoEditor from 'react-monaco-editor';

class CodeRunner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: '',
      codeResult: '',
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
        let codeResult = '';
        if (data.body.error) {
          if (obj.language === 'javascript') {
            console.log('data.body.error1', data.body.error);
            codeResult = JSON.stringify(data.body.error);
          } else {
            codeResult = data.body.error;
            console.log('data.body.error2', data.body.error);
          }
        } else if (data.body.return && !data.body.log) {
          codeResult = data.body.return;
        } else {
          codeResult = data.body.output;
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
    const makeWrapFly = {
      width: '485px',
    };
    const makeLeftFly = {
      width: '240px',
      height: '123px',
      float: 'left',
    };

    const makeRightFly = {
      width: '240px',
      height: '123px',
      float: 'right',
    };

    // // const code = this.state.code;
    // // const options = {
    // //   selectOnLineNumbers:, true

    if (cookies.load('token')) {
      // console.log(cookies.load('token'));
      return (
        <Fragment>
          <style.NavBar />

          <HeaderBar />
          <NavBar />
          <h1>Code runner</h1>
          <div id="wrap" style={makeWrapFly}>
            <div className="left" style={makeLeftFly}>
              <MonacoEditor
                name="code"
                ref="monaco"
                width="200"
                height="200"
                language="javascript"
                theme="vs-dark"
                value={this.state.code}
                onChange={this.onChange}
                editorDidMount={this.editorDidMount.bind(this)}
                editorWillMount={this.editorWillMount.bind(this)}
              />
              <button onClick={this.handleOnClick}>run code</button>
            </div>
            <div className="right" style={makeRightFly}>
              <textarea className="output" value={this.state.codeResult} />
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
