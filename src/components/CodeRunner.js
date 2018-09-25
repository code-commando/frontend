import React, { Component, Fragment } from 'react';
import NavBar from './NavBar';
import HeaderBar from './HeaderBar';
import MonacoEditor from 'react-monaco-editor';

// const main = {
//   background: '#D6D6D6',
//   minHeight: '100vh',
//   height: '100%',
//   width: '100%',
//   textAlign: 'center',
// };
const editorFormat = {
  textAlign: 'left',
};
export default class CodeRunner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: '',
      options: {},
    };
  }
  editorWillMount(monaco) {
    monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
      schemas: [
        {
          uri: 'http://myserver/foo-schema.json',
          schema: {
            type: 'object',
            properties: {
              p1: {
                enum: ['v1', 'v2'],
              },
              p2: {
                $ref: 'http://myserver/bar-schema.json',
              },
            },
          },
        },
      ],
    });
  }

  editorDidMount(editor, monaco) {
    // const model = this.refs.monaco.editor.getModel();
    console.log('monaco', monaco);
    console.log('editorDidMount', editor);
    editor.focus();

    //
  }
  onChange(event) {
    // let newState = { ...this.state.code };
    // newState[event.target.name] = event.target.value;
    // this.setState(newState);
    // this.setState({ code: event.target.value });
    console.log('onChange', event);
  }

  render() {
    return (
      <Fragment>
        <div>
          <HeaderBar />
          <NavBar />
          <h1>Code runner</h1>
          <MonacoEditor
            style={editorFormat}
            width="800"
            height="600"
            language="javascript"
            theme="vs-dark"
            value={this.state.code}
            onChange={this.onChange.bind(this)}
            editorDidMount={this.editorDidMount.bind(this)}
          />
        </div>
      </Fragment>
    );
  }
}

// handleClick = event => {
//   event.preventDefault();
//   let githubURL = 'https://github.com/login/oauth/authorize';

//   let options = {
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
