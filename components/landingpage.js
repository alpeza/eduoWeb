import Head from "next/head";
import Hero from "./hero";
import Navbar from "./navbar";
import SectionTitle from "./sectionTitle";

import Video from "./video";
import Benefits from "./benefits";
import Footer from "./footer";
import Testimonials from "./testimonials";
import Cta from "./cta";
import Faq from "./faq";
import PopupWidget from "./popupWidget";
import { Benefit } from "./benefit";
import { ParallaxProvider } from 'react-scroll-parallax';

function LandingPage(props) {
    console.log(props)
  return (
    <>
      <ParallaxProvider>
      <Head>
        <title>Nextly - Free Nextjs & TailwindCSS Landing Page Template</title>
        <meta
          name="description"
          content="Nextly is a free landing page template built with next.js & Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar content={props.data.Navbar}/>
      <Hero content={props.data.Hero} />
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
      <Footer />
      <PopupWidget />
      </ParallaxProvider>
    </>
  );
}

export default LandingPage