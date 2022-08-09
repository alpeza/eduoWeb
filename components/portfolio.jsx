import React from "react";
import { getStrapiURL } from "../lib/api";

/**
 * Item del portfolio
 */
class PortfolioItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.content,
            counter: 0 
        };
    }
    render() {
      return (
        <div class="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
        <a href="#" class="w-full block h-full">
            <img alt="blog photo" src={ getStrapiURL(this.state.data.descriptor.miniature.data.attributes.url) } class="max-h-40 w-full object-cover"/>
            <div class="bg-white dark:bg-gray-800 w-full p-4">
                <p class="text-indigo-500 text-md font-medium">
                    { this.state.data.descriptor.type}
                </p>
                <p class="text-gray-800 dark:text-white text-xl font-medium mb-2">
                    { this.state.data.title}
                </p>
                <p class="text-gray-400 dark:text-gray-300 font-light text-md">
                    { this.state.data.descriptor.description}
                </p>
                <div class="flex items-center mt-4">
                    <a href="#" class="block relative">
                        <img alt="profil" src={ getStrapiURL(this.state.data.descriptor.editor.data.attributes.editor.profileimage.data.attributes.url) } class="mx-auto object-cover rounded-full h-10 w-10 "/>
                    </a>
                    <div class="flex flex-col justify-between ml-4 text-sm">
                        <p class="text-gray-800 dark:text-white">
                            { this.state.data.descriptor.editor.data.attributes.editor.alias }
                        </p>
                        <p class="text-gray-400 dark:text-gray-300">
                            { this.state.data.publishedAt }
                        </p>
                    </div>
                </div>
            </div>
        </a>
    </div>
      );
    }
}


export default class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            counter: 0,
            items: props.pitems
        };
    }
    render() {
      return (
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
        
            {this.state.items.map(d => (<PortfolioItem content={d.attributes}> </PortfolioItem>))} 
       
        </div>
      );
    }
}