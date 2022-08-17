import React from "react";
import Hero from "./hero";
import SectionTitle from "./sectionTitle";

import Video from "./video";
import Benefits from "./benefits";
import Testimonials from "./testimonials";
import Cta from "./cta";
import Faq from "./faq";
import PopupWidget from "./popupWidget";
import { Benefit } from "./benefit";
import { ParallaxProvider } from 'react-scroll-parallax';
import { getStrapiURL } from "../lib/api";
import ModelViewer from "./3DViewer/ModelViewer";
import Carousel from "./carousel";

export default class ComponentDispatcher extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            response: props.response,
            elmarr: []
        };
        this.engine()
    }

    //<Testimonials content={props.data.Section5.Testimonials} /> 

    engine() {
        this.state.response.data[0].attributes.pcontent.forEach(element => {
            if (element["__component"] == "landing-assets.card-left-text") {
                this.state.elmarr.push(<Benefits imgPos="left" data={Benefit(element)} />)
            } else if (element["__component"] == "landing-assets.card-right-text") {
                this.state.elmarr.push(<Benefits imgPos="right" data={Benefit(element)} />)
            } else if (element["__component"] == "landing-assets.hero") {
                this.state.elmarr.push(<Hero content={element} />)
            } else if (element["__component"] == "landing-assets.card-video") {
                this.state.elmarr.push(<SectionTitle pretitle={element.Head} title={element.Title}>{element.Text}</SectionTitle>)
                this.state.elmarr.push(<Video content={element} />)
            } else if (element["__component"] == "landing-assets.acordeon-card") {
                this.state.elmarr.push(<SectionTitle pretitle={element.Header.Head} title={element.Header.Title}>{element.Header.Text}</SectionTitle>)
                this.state.elmarr.push(<Faq content={element.Acordeon} />)
            } else if (element["__component"] == "landing-assets.card-video") {
                this.state.elmarr.push(<SectionTitle pretitle={element.Head} title={element.Title}>{element.Text}</SectionTitle>)
                this.state.elmarr.push(<Video content={element.videoUrl} />)
            } else if (element["__component"] == "landing-assets.cta") {
                this.state.elmarr.push(<Cta content={element} />)
            } else if (element["__component"] == "landing-assets.carousel") {
                /* ==== Carousel ==== */
                let imgArr = [];
                element.images.data.forEach(image => {
                    imgArr.push(getStrapiURL(image.attributes.url))
                })
                this.state.elmarr.push(<Carousel images={imgArr}></Carousel>)

            } else if (element["__component"] == "landing-assets.model-viewer") {
                /* ==== model-viewer ==== */
                this.state.elmarr.push(<ModelViewer
                    scale={element.config.model.scale}
                    style={element.style}
                    lights={element.config.lights}
                    position={element.config.model.position}
                    modelPath={getStrapiURL(element.Model.data.attributes.url)}
                    orbitControls={element.config.orbitControls}
                    rotation={element.config.model.rotation}
                    rotateAnimation={element.config.model.rotateAnimation}
                />)
            } else {
                console.error("No se ha encontrado el elemento" + element["__component"])
            }
        })
    }


    render() {
        return (
            <>
                <ParallaxProvider>
                    {this.state.elmarr}
                </ParallaxProvider>
            </>);
    }
}