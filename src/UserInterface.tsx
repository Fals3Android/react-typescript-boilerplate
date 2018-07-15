import * as React from 'react';
import { UserMessage } from './UserMessage';

// Declare Prop Types
type UIProps = { title: string };
type UIState = { input: string };

// Pass Prop Types via React.Component interface <Props, State>
export default class UserInterface extends React.Component<UIProps, UIState> {
    constructor(props) {
        super(props);
        this.state = {
            input: 'Please Begin typing a message above'
        }
    }

    updateMessage = (e) => {
        this.setState({ input: e.target.value });
    }

    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <input onChange={this.updateMessage}></input>
                <UserMessage message={this.state.input} />
            </div>
        );
    }
}