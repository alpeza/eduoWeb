import React from "react";
import Head from "next/head";
import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import { Disclosure } from "@headlessui/react";
import { getStrapiURL, composeStrapiQuery } from "../lib/api";

export default class Navbarx extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      ico: '',
      navigation: [],
      metaInfo: {}
    };
    this.fetchData()
  }

  fetchData() {
    fetch(composeStrapiQuery('/navbar', {
      populate: ['ico', 'Links.pages', 'Links.Links', 'metaInfo', 'metaInfo.icon'],
      fields: ['Name']
    }))
      .then((res) => res.json())
      .then((data) => {
        let larr = []
        try {
          this.setState({ metaInfo: data.data.attributes.metaInfo })
          data.data.attributes.Links.pages.data.map(e => {
            larr.push({
              id: e.id,
              Link: "/pages/" + e.attributes.ppath,
              Text: e.attributes.pname
            })
          });
          data.data.attributes.Links.Links.map(e => {
            larr.push({
              id: e.id,
              Link: e.url,
              Text: e.DisplayName
            })
          });
          this.setState({
            name: data.data.attributes.Name,
            ico: getStrapiURL(data.data.attributes.ico.data.attributes.url),
            navigation: larr
          })
        } catch (error) {
          console.error(error)
        }
      })
  }
  // <link rel="icon" href={metaInfo.icon.data.attributes.url} />
  render() {
    const { name, ico, navigation, metaInfo } = this.state;
    return (
      <>
        <Head>
          <title>{metaInfo.Title}</title>
          <meta
            name={metaInfo.metaName}
            content={metaInfo.metaContent}
          />
          <link rel="icon" href={getStrapiURL(metaInfo.icon?.data.attributes.url)} />
        </Head>
        <div className="w-full">
          <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
            {/* Logo  */}
            <Disclosure>
              {({ open }) => (
                <>
                  <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                    <Link href="/">
                      <a className="flex items-center space-x-2 text-2xl font-medium text-tcb6 dark:text-tca1">
                        <span>
                          {ico && (
                            <img
                              src={ico}
                              alt=""
                              width="32"
                              height="32"
                              className="w-8"
                            />
                          )}
                        </span>
                        <span style={{ "font-size": "1.5em" }} class="font-GrandHotel">{name}</span>
                      </a>
                    </Link>

                    <Disclosure.Button
                      aria-label="Toggle Menu"
                      className="px-2 py-1 ml-auto text-tca20 rounded-md lg:hidden hover:text-tcb6 focus:text-tcb6 focus:bg-tcb4 focus:outline-none dark:text-gray-300 dark:focus:bg-tcc9">
                      <svg
                        className="w-6 h-6 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24">
                        {open && (
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                          />
                        )}
                        {!open && (
                          <path
                            fillRule="evenodd"
                            d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                          />
                        )}
                      </svg>
                    </Disclosure.Button>

                    <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                      <>
                        {navigation.map(data => (

                          <a href={data.Link} className="w-full px-4 py-2 -ml-4 text-tca20 rounded-md dark:text-gray-300 hover:text-tcb6 focus:text-tcb6 focus:bg-tcb4 dark:focus:bg-tca3 focus:outline-none dark:focus:bg-tcc9">
                            {data.Text}
                          </a>

                        ))}

                      </>
                    </Disclosure.Panel>
                  </div>
                </>
              )}
            </Disclosure>

            {/* menu  */}
            <div className="hidden text-center lg:flex lg:items-center">
              <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
                {navigation.map(data => (
                  <li className="mr-3 nav__item" key={data.Link}>

                    <a href={data.Link} className="inline-block px-4 py-2 text-lg font-normal text-tca3 no-underline rounded-md dark:text-gray-200 hover:text-tcb6 focus:text-tcb6 focus:bg-tcb4 focus:outline-none dark:focus:bg-tca3">
                      {data.Text}
                    </a>

                  </li>
                ))}
              </ul>
            </div>

            <div className="hidden mr-3 space-x-4 lg:flex nav__item">
              {/*
          <Link href="/">
            <a className="px-6 py-2 text-white bg-tcb7 rounded-md md:ml-5">
              Get Started
            </a>
            </Link>*/}

              <ThemeChanger />
            </div>
          </nav>
        </div>
      </>
    );
  }
}
