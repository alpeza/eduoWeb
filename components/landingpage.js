import Head from "next/head";
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
import ModelViewer from "./3DViewer/ModelViewer";
import Navbarx from "./navbarx";
import Footerx from "./footerx";

function LandingPage(props) {
  return (
    <>
      <ParallaxProvider>
      <Head>
        <title>{props.data.MetaInfo.Title}</title>
        <meta
          name={props.data.MetaInfo.metaName}
          content={props.data.MetaInfo.metaContent}
        />
        <link rel="icon" href={props.data.MetaInfo.icon.data.attributes.url} />
      </Head>
     
      <Navbarx></Navbarx>
      <Hero content={props.data.Hero} />
      <ModelViewer scale="2.5" 
        position = {[0, -3, 0]} 
        modelPath={"./globo.glb"} 
        orbitControls = {false} 
        rotation = {[-0.3, 0, 0]} />

      <SectionTitle
        pretitle= {props.data.Section1.Header}
        title={props.data.Section1.Title}>
        {props.data.Section1.Subtitle}
      </SectionTitle>
      <Benefits data={Benefit(props.data.Section2)} />
      <Benefits imgPos="right" data={Benefit(props.data.Section3)} />
      <SectionTitle
        pretitle={props.data.Section4.Head}
        title={props.data.Section4.Title}>
        {props.data.Section4.Text}
      </SectionTitle>
     
      <Video content={props.data.Section4} />
      <SectionTitle
        pretitle={props.data.Section5.Title.Head}
        title={props.data.Section5.Title.Title}>
        {props.data.Section5.Title.Text}
      </SectionTitle>
      <Testimonials content={props.data.Section5.Testimonials} />
      <SectionTitle pretitle={props.data.Section6.Header.Head} title={props.data.Section6.Header.Title}>
      {props.data.Section6.Header.Text}
      </SectionTitle>
      <Faq content={props.data.Section6.Acordeon} />
      <Cta content={props.data.Section7} />
      { /*<Footer content={props} />*/ }
      <Footerx/>
      <PopupWidget />
      </ParallaxProvider>
    </>
  );
}

export default LandingPage