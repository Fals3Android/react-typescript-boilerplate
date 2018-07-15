import * as React from 'react';
import * as ReactDOM from 'react-dom';
import UserInterface from './UserInterface';

const introduction = "Here is a simple react boilerplate that leverages typescript";

ReactDOM.render(
    <UserInterface title={introduction} />,
    document.getElementById('root')
);