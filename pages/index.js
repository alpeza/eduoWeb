import LandingPage from "../components/landingpage";
import { fetchAllAPI } from "../lib/api";

export async function getStaticProps() {
  // Run API calls in parallel
  const [landingRes ] = await Promise.all([fetchAllAPI("/landing-page")]);
  return {
    props: {
      landingdata: landingRes.data.attributes,
    },
    revalidate: 1,
  };
}

export default function Home({ landingdata }) {
  return (
    <LandingPage data={landingdata} ></LandingPage>
  );
}
