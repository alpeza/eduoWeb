import React, { Component } from 'react';
import parse from "html-react-parser";
import Container from "./container";


class FreeText extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: props.content.text
        }

    }

    replacer(tag, text) {
        console.log("Procesando: " + tag + " -> " + text)
        if (tag === 'h1') {
            return <h1 className="justify-center text-center text-4xl font-bold leading-snug tracking-tight text-tca3 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">{text}</h1>;
        } else if (tag === 'h2') {
            return <p className="justify-center text-center py-5 text-xl leading-normal text-tcb7 lg:text-xl xl:text-2xl dark:text-tcb7">{text}</p>
        } else if (tag == 'p') {
            return <p className="py-4 text-lg leading-normal text-tca20 lg:text-xl xl:text-xl dark:text-gray-300">{text}</p>
        }
    }

    proccessText() {
        return parse(this.state.text, {
            replace: domNode => {
                if ('name' in domNode && 'children' in domNode) {
                    try {
                        var content = domNode.children[0].data;
                        var tag = domNode.name
                        return this.replacer(tag, content)
                    } catch (error) {
                        console.error("Error processing text:")
                        console.error(domNode)
                    }
                }
            }
        });
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
