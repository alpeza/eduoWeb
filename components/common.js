import Head from "next/head";
import Navbar from "./navbar";
import Navbarx from "./navbarx";


export default function CHeader(props) {
  return (
    <>
      <Head>
        <title>{props.landingData.MetaInfo.Title}</title>
        <meta
          name={props.landingData.MetaInfo.metaName}
          content={props.landingData.MetaInfo.metaContent}
        />
        <link rel="icon" href={props.landingData.MetaInfo.icon.data.attributes.url} />
      </Head>
      <Navbarx></Navbarx>
    </>
  );
}


