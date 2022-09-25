import React, { Component } from 'react';
import { getStrapiURL } from "../../lib/api";

class ShopCard extends Component {
    constructor(props) {
        super(props);
        const { id, ctitle, tags, description, meta, price, currency, icon } = props.content.attributes.product
        this.state = {
            id: id,
            ctitle: ctitle,
            tags: tags,
            description: description,
            meta: meta,
            price: price,
            currency: currency,
            icon: getStrapiURL(icon.data.attributes.url)
        };
    }
    render() {
        const { id, ctitle, tags, description, meta, price, currency, icon } = this.state;
        return (
            <div>
                <div class="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
                    <a href="#" class="w-full block h-full">
                        <img alt="blog photo" src={icon} class="max-h-40 w-full object-cover" />
                        <div class="bg-white dark:bg-tcc10 w-full p-4">
                            <p class="text-tcb7 text-md font-medium">
                                {tags}
                            </p>
                            <p class="text-gray-800 dark:text-white text-xl font-medium mb-2">
                                {ctitle}
                            </p>
                            <p class="text-gray-400 dark:text-gray-300 font-light text-md">
                                {description}
                            </p>
                            <div class="grid grid-cols-6 gap-4">
                                <div class="col-end-7 col-span-2">
                                    <p class="text-tcb7  text-xl">
                                        {price}
                                        <span class="text-gray-400 dark:text-gray-300">{currency}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        );
    }
}

export default ShopCard;
