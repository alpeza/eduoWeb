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



export default class ComponentDispatcher extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            response: props.response,
            elmarr: []
        };
        this.engine()
    }
    //<Hero content={props.data.Hero} />  "landing-assets.hero"
    //<Video content={props.data.Section4} />  "landing-assets.card-video"
    //<Testimonials content={props.data.Section5.Testimonials} /> 
    //<Faq content={props.data.Section6.Acordeon} />
    //<Cta content={props.data.Section7} />

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