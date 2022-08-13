import React, { Component } from 'react';
import Link from "next/link";
import Image from "next/image";
import Container from "./container";
import { getStrapiURL, composeStrapiQuery } from "../lib/api";
import { getStrapiMediaInfo } from "../lib/media";
import { getSVG } from "../lib/svg";
//layout="responsive" alt={poweredUrl.alt} width={poweredUrl.width} height={poweredUrl.height}
class Footerx extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      ico: "",
      brandtext: "",
      socialLinks: [],
      navLinks: [],
      otherLinks: [],
      poweredUrl: {}
    };
    this.fetchNavBarData()
    this.fetchFooterData()
  }

  getLinks(data, mountPath = "") {
    let larr = []
    try {
      data.pages.data.map(e => {
        larr.push({
          id: e.id,
          Link: mountPath + e.attributes.ppath,
          Text: e.attributes.pname
        })
      });
      data.Links.map(e => {
        larr.push({
          id: e.id,
          Link: e.url,
          Text: e.DisplayName
        })
      });
    } catch (error) {
      console.error(error)
    }
    return larr;
  }

  getSocialLinks(data) {
    let sarr = []
    data.social.map(e => {
      sarr.push({
        id: e.id,
        socialnetwork: e.socialnetwork,
        socialIcon: getSVG(e.socialnetwork),
        url: e.url,
        foottext: ""
      })
    });
    return sarr
  }

  textProcessor(text) {
    var nt = text ? text.replace(/\{(year)\}/g, new Date().getFullYear()) : "";
    return nt
  }

  fetchNavBarData() {
    fetch(composeStrapiQuery('/navbar', {
      populate: ['ico', 'Links.pages', 'Links.Links'],
      fields: ['Name']
    }))
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          name: data.data?.attributes.Name,
          ico: getStrapiURL(data.data?.attributes.ico.data.attributes.url),
          navLinks: this.getLinks(data.data?.attributes.Links, '/pages/')
        })
      })
  }

  fetchFooterData() {
    fetch(composeStrapiQuery('/footer', {
      populate: ['otherlinks.pages', 'otherlinks.Links', 'otherlinks.social', 'powered'],
      fields: ['brandtext', 'foottext']
    }))
      .then((res) => res.json())
      .then((data) => {
        //console.dir(data, { depth: null, colors: true });
        //console.log(getStrapiMediaInfo(data.data.attributes.powered))
        this.setState({
          brandtext: data.data?.attributes.brandtext,
          otherLinks: this.getLinks(data.data.attributes.otherlinks),
          socialLinks: this.getSocialLinks(data.data.attributes.otherlinks),
          poweredUrl: getStrapiMediaInfo(data.data.attributes.powered),
          foottext: data.data.attributes.foottext,
        })
      })
  }

  render() {
    const { name, ico, navLinks, brandtext, otherLinks, socialLinks, poweredUrl, foottext } = this.state;
    return (
      <div className="relative">
        <Container>
          <div className="grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto mt-5 border-t border-gray-100 dark:border-trueGray-700 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <div>
                {" "}
                <Link href="/">
                  <a className="flex items-center space-x-2 text-2xl font-medium text-tcb6 dark:text-tca1">
                    <span>
                      {ico && (
                        < img
                          src={ico}
                          alt=""
                          width="32"
                          height="32"
                          className="w-8"
                        />
                      )}
                    </span>
                    <span>{name}</span>
                  </a>
                </Link>
              </div>

              <div className="max-w-md mt-4 text-tca20 dark:text-gray-400">
                {brandtext}
              </div>

              <div className="mt-5">

                <a href="#" className="relative block w-44">
                  {poweredUrl.url && (
                    <Image src={poweredUrl.url} layout="responsive" alt={poweredUrl.alt} width={poweredUrl.width} height={poweredUrl.height} />)
                  }
                </a>
              </div>
            </div>

            <div>
              <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
                {navLinks.map((item, index) => (
                  <Link key={index} href={item.Link}>
                    <a className="w-full px-4 py-2 text-tca20 rounded-md dark:text-gray-300 hover:text-tcb6 focus:text-tcb6 focus:bg-tcb4 focus:outline-none dark:focus:bg-tcc9">
                      {item.Text}
                    </a>
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
                {otherLinks.map((item, index) => (
                  <Link key={index} href={item.Link}>
                    <a className="w-full px-4 py-2 text-tca20 rounded-md dark:text-gray-300 hover:text-tcb6 focus:text-tcb6 focus:bg-tcb4 focus:outline-none dark:focus:bg-tcc9">
                      {item.Text}
                    </a>
                  </Link>
                ))}
              </div>
            </div>
            <div className="">
              {socialLinks.length > 0 ? (<div>Networks</div>) : <></>}
              <div className="flex mt-5 space-x-5 text-gray-400 dark:text-tca20">
                {socialLinks.map((item, index) => (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener">
                    <span className="sr-only">{item.socialnetwork}</span>
                    {item.socialIcon}
                  </a>
                ))}

              </div>
            </div>
          </div>

          <div className="my-10 text-sm text-center text-gray-600 dark:text-gray-400">
            {this.textProcessor(foottext)}
          </div>
        </Container>
        {/* Do not remove this */}

      </div>
    );
  }
}

export default Footerx;
