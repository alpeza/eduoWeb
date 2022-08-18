import React, { Component } from 'react';
import parse from "html-react-parser";
import Container from "./container";

const replaceRules = {
    "<h1>": '<h1 class="justify-center text-center text-4xl font-bold leading-snug tracking-tight text-tca3 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">',
    "<h2>": '<p class="justify-center text-center py-5 text-xl leading-normal text-tcb7 lg:text-xl xl:text-2xl dark:text-tcb7">',
    "<h3>": '<p class="text-justify py-4 text-xl leading-normal text-tca20 lg:text-xl xl:text-xl dark:text-gray-300">'
}

class FreeText extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: props.content.text
        }
    }

    proccessText() {
        Object.entries(replaceRules).forEach(entry => {
            const [key, value] = entry;
            this.state.text = this.state.text.replaceAll(key, value)
        });
        console.log(this.state.text)
        return parse(this.state.text)
    }

    render() {
        return (
            <div>
                <Container>
                    {this.proccessText()}
                </Container>
            </div>
        );
    }
}

export default FreeText;
