import { fetchAPI } from "../../lib/api";
import ComponentDispatcher from "../../components/componentDispatcher";
import Footerx from "../../components/footerx";
import { motion } from "framer-motion";
import Navbarx from "../../components/navbarx";

  export default function portfolio(params){
    const variants = {
      hidden: { opacity: 0, x: 0, y: -100 },
      enter: { opacity: 1, x: 0, y: 0 },
      exit: { opacity: 0, x: 0, y: 100 },
  }
      return (
          <>
          <Navbarx/>
          <motion.main
            variants={variants} // Pass the variant object into Framer Motion 
            initial="hidden" // Set the initial state to variants.hidden
            animate="enter" // Animated state to variants.enter
            exit="exit" // Exit state (used later) to variants.exit
            transition={{ type: 'linear' }} // Set the transition to linear
            className=""
          >
          <ComponentDispatcher response={params.response}></ComponentDispatcher>
          <Footerx/>
          </motion.main>
          </>
      )
  }
  
  export async function getStaticPaths() {
    const portfolio = await fetchAPI("/pages",{fields: ['ppath']})
    const vpaths = {
        paths:  portfolio.data.map( (d) => ({
          params: { page: d.attributes.ppath.toString() }
        })),
        fallback: false, 
      }
    return vpaths
  }
  
  export async function getStaticProps({ params }) {
      const [resp] = await Promise.all([
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
          response: resp,
        },
        revalidate: 1,
      };
    }