import React, { Component } from 'react';
import Link from "next/link";
import { getStrapiURL,composeStrapiQuery } from "../lib/api";

class Footerx extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          ico: '',
          navigation: []
        };
        this.fetchData()
    }
    fetchData() {
        fetch(composeStrapiQuery('/navbar',{
          populate: ['ico','Links.pages','Links.Links'], 
          fields: ['Name']
        }))
          .then((res) => res.json())
          .then((data) => {
             let larr = []
             data.data.attributes.Links.pages.data.map( e => {
              larr.push({
                id: e.id,
                Link: "/pages/" + e.attributes.ppath,
                Text: e.attributes.pname
               })
            });
            data.data.attributes.Links.Links.map( e => {
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
          })
      }

    render() {
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
                          <img
                            src="/img/logo.svg"
                            alt="N"
                            width="32"
                            height="32"
                            className="w-8"
                          />
                        </span>
                        <span>Nextly</span>
                      </a>
                    </Link>
                  </div>
      
                  <div className="max-w-md mt-4 text-tca20 dark:text-gray-400">
                    Nextly is a free landing page & marketing website
                    template for startups and indie projects. Its built with
                    Next.js & TailwindCSS. And its completely open-source.
                  </div>
      
                  <div className="mt-5">
                    <a
                      href="https://vercel.com/?utm_source=web3templates&utm_campaign=oss"
                      target="_blank"
                      rel="noopener"
                      className="relative block w-44">
                      <Image
                        src="/img/vercel.svg"
                        layout="responsive"
                        alt="Powered by Vercel"
                        width="212"
                        height="44"
                      />
                    </a>
                  </div>
                </div>
      
                <div>
                  <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
                    {navigation.map((item, index) => (
                      <Link key={index} href="/">
                        <a className="w-full px-4 py-2 text-tca20 rounded-md dark:text-gray-300 hover:text-tcb6 focus:text-tcb6 focus:bg-tcb4 focus:outline-none dark:focus:bg-tcc9">
                          {item}
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
                    {legal.map((item, index) => (
                      <Link key={index} href="/">
                        <a className="w-full px-4 py-2 text-tca20 rounded-md dark:text-gray-300 hover:text-tcb6 focus:text-tcb6 focus:bg-tcb4 focus:outline-none dark:focus:bg-tcc9">
                          {item}
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="">
                  <div>Follow us</div>
                  <div className="flex mt-5 space-x-5 text-gray-400 dark:text-tca20">
                    <a
                      href="https://twitter.com/web3templates"
                      target="_blank"
                      rel="noopener">
                      <span className="sr-only">Twitter</span>
                      <Twitter />
                    </a>
                    <a
                      href="https://facebook.com/web3templates"
                      target="_blank"
                      rel="noopener">
                      <span className="sr-only">Facebook</span>
                      <Facebook />
                    </a>
                    <a
                      href="https://instagram.com/web3templates"
                      target="_blank"
                      rel="noopener">
                      <span className="sr-only">Instagram</span>
                      <Instagram />
                    </a>
                    <a
                      href="https://linkedin.com/"
                      target="_blank"
                      rel="noopener">
                      <span className="sr-only">Linkedin</span>
                      <Linkedin />
                    </a>
                  </div>
                </div>
              </div>
      
              <div className="my-10 text-sm text-center text-gray-600 dark:text-gray-400">
                Copyright © {new Date().getFullYear()}. Made with ♥ by{" "}
                <a
                  href="https://web3templates.com/"
                  target="_blank"
                  rel="noopener">
                  Web3Templates.
                </a>{" "}
                Illustrations from{" "}
                <a
                  href="https://www.glazestock.com/"
                  target="_blank"
                  rel="noopener ">
                  Glazestock
                </a>
              </div>
            </Container>
            {/* Do not remove this */}
            <Backlink />
          </div>
        );
    }
}

export default Footerx;
