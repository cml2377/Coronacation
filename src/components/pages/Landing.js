import React, { Component } from 'react';
import SignIn from '../SignIn';
import Profile from '../Profile';

export default class Landing extends Component {
    render() {
        return (
            <div>
                {/* Landing shows either SignIn page or Profile */}
                Landing page
                <SignIn />
                <Profile />
            </div>
        )
    }
}