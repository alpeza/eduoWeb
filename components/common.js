import Head from "next/head";
import Navbar from "./navbar";


export default function PageHeader(props) {
  return (
    <>
      <Head>
        <title>Nextly - Free Nextjs & TailwindCSS Landing Page Template</title>
        <meta
          name="description"
          content="Nextly is a free landing page template built with next.js & Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar content={props.landingData.Navbar}/>
    </>
  );
}

