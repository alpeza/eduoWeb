import React, { Component } from 'react';
import Container from './container';
import $ from "jquery";

class Thinckerframe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projectid: props.content.url.match(/https:\/\/www\.tinkercad\.com\/things\/(\w+)/)[1],
            isMenu: props.content.menu,
            autoplay: props.content.autoplay,
        };

    }

    componentDidMount() {
        //TODO
    }

    render() {
        const { projectid } = this.state;
        return (
            <div>
                <Container>
                    <div className="flex flex-wrap items-center justify-between w-full max-w-4xl mx-auto text-white bg-tcb7 lg:flex-nowrap rounded-xl">
                        <iframe width="100%" height="460" src={"https://www.tinkercad.com/embed/" + projectid + "?editbtn=1"}
                            frameborder="0"
                            marginwidth="0"
                            marginheight="0"
                            scrolling="no">
                        </iframe>
                    </div>
                </Container>
            </div >
        );
    }
}

export default Thinckerframe;
