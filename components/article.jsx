import React from "react";
import { getStrapiURL } from "../lib/api";

export default class Article extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            content: props.content
        };
    }
    render() {
      return (
        <>
        <div class="w-full p-12">
        <div class="header flex items-end justify-between mb-12">
        <div class="title">
            <p class="text-4xl font-bold dark:text-gray-100 text-gray-800 mb-4">
                {this.state.content.descriptor.title}
            </p>
            <p class="text-2xl font-light dark:text-gray-300 text-gray-400">
            {this.state.content.descriptor.type} {this.state.content.publishedAt}
            </p>
        </div>
        </div>
    </div>
        </>
      );
    }
}