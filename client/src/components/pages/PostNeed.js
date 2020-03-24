import React, { Component } from 'react';

export default class PostNeed extends Component {
    render() {
        return (
            <div>
                Request form-- this is a list like the to-do list, with a bunch of items requested.

                When logged, the post will contain the user who requested the items, the items themselves, the general location (zipcode) and date created.
            </div>
        )
    }
}