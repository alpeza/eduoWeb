import { getStrapiURL } from "../lib/api";
import { Parallax } from "react-parallax";
import { isMobile } from 'react-device-detect';
import FreeText from "./freeText";

//"background-image": "url('" + herourl + "')", "background-repeat": "no-repeat", "background-position": "center", "background-size": "100%", "background-position-y": "0px"

export default function SquareCard(props) {
    const herourl = getStrapiURL(props.content.Image.data?.attributes.url)

    return (
        <>
            <a href={props.content.links.length > 0 ? props.content.links[0].url : "#"}>
                <Parallax bgImage={herourl} strength={props.content.Parallax} blur={isMobile ? { min: -5, max: 8 } : 0} >
                    <div className={"flex w-full"} style={{ height: `${isMobile ? props.content.ScreenHeight / 2 : props.content.ScreenHeight}vh` }}>
                        <div className="w-full">
                            <h3 className={`mt-14 text-center text-3xl font-bold leading-snug tracking-tight lg:leading-tight lg:text-4xl ${props.content.isDarkImage ? "text-white" : "text-tca3"}`}>
                                {props.content.STitle}
                            </h3>
                            <div className="text-center">
                                <div class={`grid ${isMobile ? "grid-cols-12 gap-1" : "grid-cols-3 gap-2"}`}>
                                    <div class={`${isMobile ? "col-start-2 col-end-12" : "col-start-2 col-end-3"}`}>
                                        <p className={`text-center py-4 text-lg leading-normal lg:text-xl xl:text-xl ${props.content.isDarkImage ? "text-white" : "text-tca3"}`}>
                                            {props.content.SSubtitle}
                                        </p>
                                        <div class={`grid grid-cols-${props.content.links.length}`}>
                                            {
                                                props.content.links.map(({ DisplayName, url }) =>
                                                    <div><a className={`${props.content.isDarkImage ? "text-tcb6" : "text-tcb7"}`} href={url}>{DisplayName + " >"} </a></div>
                                                )
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {props.content.freetext &&
                                <FreeText content={props.content.freetext}></FreeText>
                            }
                        </div>
                    </div>
                </Parallax>
            </a>
        </>
    );
}
