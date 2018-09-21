import React, { Component, Fragment } from 'react';

export default class NavBar extends Component {
    render() {
        return(
            <React.Fragment>
                <ul className='navbar'>
                    <li><a href='/courses'>My Classes</a></li>
                    <li><a href='/quiz'>Quiz</a></li>
                    <li><a href='/dashboard'>Slides</a></li>
                    <li><a href='/coderunner'>Repl</a></li>
                    <li>SignOut</li>
                </ul>
            </React.Fragment>
        )
    }
} 