import Image from "next/image";
import Container from "./container";
import { getStrapiURL } from "../lib/api";
import { Parallax } from 'react-scroll-parallax';

/*
import { getStrapiURL } from "../lib/api";
const herourl = getStrapiURL(props.content.Image.data[0].attributes.url)
*/

export default function Hero(props) {
  const herourl = getStrapiURL(props.content.Image.data[0].attributes.url)
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <Parallax speed={1}>
            
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-tca3 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              {props.content.Title}
            </h1>
           
            </Parallax>
            <p className="py-5 text-xl leading-normal text-tca20 lg:text-xl xl:text-2xl dark:text-gray-300">
            {props.content.Subtitle}
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              {props.content.LBText == "" && (
              <a
                href="https://web3templates.com/templates/nextly-landing-page-template-for-startups"
                target="_blank"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-tcb7 rounded-md ">
                {props.content.LBText}
              </a>
              )}
              {props.content.RBText == "" && (
              <a
                href="https://github.com/web3templates/nextly-template/"
                target="_blank"
                rel="noopener"
                className="flex items-center space-x-2 text-tca20 dark:text-gray-400">
                <span> {props.content.RBText}</span>
              </a>
              )}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Parallax speed={-8}>
              <Image
                src={herourl}
                width={props.content.Image.data[0].attributes.width}
                height={props.content.Image.data[0].attributes.height}
                alt="Hero Illustration"
                layout="intrinsic"
                loading="eager"
                //placeholder="blur"
              />
            </Parallax>
          </div>
        </div>
      </Container>

    </>
  );
}
