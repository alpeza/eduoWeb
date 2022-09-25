import React, { Component } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
//https://codesandbox.io/s/kc8tr?file=/src/App.js:215-235
class Navsladebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            linklist: props.content.links
        }
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

export default Navsladebar;
