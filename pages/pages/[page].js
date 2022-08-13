import CHeader from "../../components/common";
import { fetchAllAPI,fetchAPI } from "../../lib/api";
import ComponentDispatcher from "../../components/componentDispatcher";
import Footerx from "../../components/footerx";
const qs = require('qs');

  export default function portfolio(params){
      return (
          <>
          <CHeader landingData={params.landingData}></CHeader>
          <ComponentDispatcher response={params.response}></ComponentDispatcher>
          <Footerx/>
          </>
      )
  }
  
  
  export async function getStaticPaths() {
    const portfolio = await fetchAPI("/pages",{fields: ['ppath']})
    return {
        paths:  portfolio.data.map( (d) => ({
          params: { page: d.attributes.ppath.toString() }
        })),
        fallback: false, 
      }
  }
  
  export async function getStaticProps({ params }) {
      const [landingData,resp] = await Promise.all([
        fetchAllAPI("/landing-page"),
        fetchAPI("/pages",{
            populate: 'deep,30',
            filters: {
              ppath : {
                $eq: params.page,
              },
            },
          }, {
            encodeValuesOnly: true, 
          })
      ])
      return {
        props: {
          landingData: landingData.data.attributes,
          response: resp,
        },
        revalidate: 1,
      };
    }