import React, { Component } from 'react';
import Container from "../container";
import $ from 'jquery';
import { getStrapiURL } from "../../lib/api";
import { isMobile } from 'react-device-detect';

const imStyle = { "filter": "drop-shadow(10px 10px 10px rgba(0,0,0,0.5))", "height": isMobile ? "50%" : "70%", "width": "auto", "margin-left": "auto", "margin-right": "auto", "display": "block" }

const matrixDimension = isMobile ? [3, 2] : [3, 4];


class Steam extends Component {
    constructor(props) {
        super(props);
        this.state = {
            props: props,
            imageMatrix: []
        };
    }


    componentDidMount() {
        const interval = setInterval(() => {
            const { imageMatrix } = this.state;
            var nimage = this.getRandomInt(imageMatrix.length);
            var npos = this.getRandomInt(matrixDimension[0] * matrixDimension[1]);
            //console.log("#tweak" + npos + " -> " + this.state.imageMatrix[nimage]);
            $("#tweak" + npos).fadeOut("slow", function () {
                $("#tweak" + npos).attr("src", imageMatrix[nimage]);
                $("#tweak" + npos).fadeIn("slow");
            });
        }, 1000);
    }

    getImages() {
        let retArr = [];
        var ic = 0;
        this.state.props.content.Images.data.forEach(im => {
            if (ic < matrixDimension[0] * matrixDimension[1]) {
                retArr.push(<div><img id={"tweak" + ic} style={imStyle} src={im.attributes.url}></img></div>);
                ic++;
            }
            this.state.imageMatrix.push(im.attributes.url);
        });
        return retArr;
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    //{ "transform": "rotateX(-60deg) rotateY(0deg) rotateZ(+45deg)" }
    render() {
        const { props } = this.state
        return (
            <>
                <Container className="flex flex-wrap">
                    <div className="flex items-center w-full lg:w-1/2">
                        <div className="max-w-2xl mb-8">
                            <h1 className="text-4xl font-bold leading-snug tracking-tight text-tca3 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
                                {props.content.STitle}
                            </h1>

                            <p className="py-5 text-xl leading-normal text-tca20 lg:text-xl xl:text-2xl dark:text-gray-300">
                                {props.content.SSubTitle}
                            </p>

                            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
                                {props.content.links.length > 0 && (
                                    <a
                                        href={props.content.links[0].url}
                                        target="_blank"
                                        rel="noopener"
                                        className="px-8 py-4 text-lg font-medium text-center text-white bg-tcb7 rounded-md ">
                                        {props.content.links[0].DisplayName}
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center w-full lg:w-1/2" style={{}}>
                        <div class="grid grid-cols-3 gap-3" style={{ "z-index": "-100", "height": isMobile ? "50vh" : "80vh", 'overflow-y': 'scroll', "scale": "1" }}>
                            {this.getImages()}
                        </div>
                    </div>
                </Container>
            </>
        );
    }
}

export default Steam;
