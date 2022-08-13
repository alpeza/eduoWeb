import CHeader from "../../components/common";
import { fetchAllAPI,fetchAPI } from "../../lib/api";
import Article from "../../components/article";
import Footerx from "../../components/footerx";
const qs = require('qs');

  export default function portfolio(params){
      return (
          <>
          <CHeader landingData={params.landingData}></CHeader>
          <Article content={params.portfolio}></Article>
          <Footerx/>
          </>
      )
  }
  
  
  export async function getStaticPaths() {
    const portfolio = await fetchAPI("/portfolios",{fields: ['id']})
    return {
        paths:  portfolio.data.map( (d) => ({
          params: { pid: d.id.toString() }
        })),
        fallback: false, // can also be true or 'blocking'
      }
  }
  
  
  export async function getStaticProps({ params }) {
      const landingData = await fetchAllAPI("/landing-page");
      const portfolio = await fetchAllAPI("/portfolios",{
        populate: '*',
        filters: {
          id: {
            $eq: params.pid,
          },
        },
      }, {
        encodeValuesOnly: true, 
      });

      return {
        props: {
          landingData: landingData.data.attributes,
          portfolio: portfolio.data[0].attributes,
        },
        revalidate: 1,
      };
    }