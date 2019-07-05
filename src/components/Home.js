import Thoughts from './../data/thoughts';

import React, { Component } from 'react'
import PostPreviewList from './posts/PostPreviewList';

export default class componentName extends Component {
    
    constructor (props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <PostPreviewList postPreviewList = { Thoughts } />
            </div>
        )
    }
}
