import React, { Component } from 'react';

export default class Landing extends Component {
    render() {
        return (
            <div>
                {/* Landing shows a button to either SignIn page or SignUp */}
                Landing page
                <button className="uk-button uk-button-default uk-button-large">Sign In</button>

                <button className="uk-button uk-button-secondary uk-button-large">Sign Up</button>
            </div>
        )
    }
}