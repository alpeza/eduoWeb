import CHeader from "../../components/common";
import { fetchAllAPI } from "../../lib/api";
import Portfolio from "../../components/portfolio";
import Footerx from "../../components/footerx";

export default function portfolio(params){
    return (
        <>
        <CHeader landingData={params.landingData}></CHeader>
        <div class="w-full p-12">
        <div class="header flex items-end justify-between mb-12">
        <div class="title">
            <p class="text-4xl font-bold dark:text-gray-100 text-gray-800 mb-4">
                { params.title.data.attributes.title.title}
            </p>
            <p class="text-2xl font-light dark:text-gray-300 text-gray-400">
                { params.title.data.attributes.title.subtitle}
            </p>
        </div>

        </div>
        <Portfolio pitems={params.portfolio}></Portfolio>
    </div>

        <Footerx/>
        </>
    )
}


export async function getStaticProps({ params }) {
    const landingData = await fetchAllAPI("/landing-page");
    const portfolio = await fetchAllAPI("/portfolios");
    const title = await fetchAllAPI("/portfolio-page");
    return {
      props: {
        landingData: landingData.data.attributes,
        portfolio: portfolio.data,
        title: title
      },
      revalidate: 1,
    };
  }