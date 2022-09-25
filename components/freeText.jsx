import React, { Component } from 'react';
import parse from "html-react-parser";
import Container from "./container";
import $ from 'jquery';


const replaceRules = [
    {
        regex: /<h1>/g,
        replace: '<h1 class="justify-center text-center text-4xl font-bold leading-snug tracking-tight text-tca3 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">'
    },
    {
        regex: /<h2>/g,
        replace: '<p class="justify-center text-center py-5 text-xl leading-normal text-tcb7 lg:text-xl xl:text-2xl dark:text-tcb7">'
    },
    {
        regex: /<h3>/g,
        replace: '<p class="text-justify py-4 text-xl leading-normal text-tca20 lg:text-xl xl:text-xl dark:text-gray-300">'
    }
]




class FreeText extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: props.content.text
        }
    }

 
    proccessText() {
        replaceRules.forEach(e => {
            if (e.regex != "$jq")
                this.state.text = this.state.text.replaceAll(e.regex, e.replace)
        });
        return parse(this.state.text)
    }

    render() {
        return (
            <div>
                <Container>
                    <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
                        {this.proccessText()}
                    </div>
                </Container>
            </div>
        );
    }
}

export default FreeText;
