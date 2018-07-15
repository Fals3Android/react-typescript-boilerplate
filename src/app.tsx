import * as React from 'react';
import * as ReactDOM from 'react-dom';
import UserMessage from './UserMessage';

ReactDOM.render(
    <UserMessage message="A simple example of a stateless component using typescript." />,
    document.getElementById('root')
);