import * as React from 'react';

// Declare your Prop Typing here;
type UserMessageProps = { message: string };

// A simple example of a stateless component using typescript to manage Prop Typing
const UserMessage: React.SFC<UserMessageProps> = ({ message }) => <div>{message}</div>;

export default UserMessage;