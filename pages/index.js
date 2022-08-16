import { fetchAPI } from "../lib/api";
import ComponentDispatcher from "../components/componentDispatcher";
import Footerx from "../components/footerx";
import Navbarx from "../components/navbarx";


export default function Home({ response }) {
  return (
    <>
    <Navbarx/>
    <ComponentDispatcher response={response}></ComponentDispatcher>
    <Footerx/>    
    </>
  );
}

export async function getStaticProps() {
  const [resp] = await Promise.all([
    fetchAPI("/home",{
      populate: 'deep,30',
    })
  ])
  var newStruct={data : []}
  newStruct.data.push(resp.data.attributes.MainPage.page.data)
  return {
    props: {
      response: newStruct
    },
    revalidate: 1,
  };
}