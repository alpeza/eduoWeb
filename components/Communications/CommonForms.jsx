import React from "react";
import { getStrapiURL } from "../../lib/api";
import $ from "jquery";

export const loadCSS = () => {
    $(".customForm label").addClass("block mb-2 text-sm text-gray-600 dark:text-gray-400")
    $(".customForm input").addClass("text-gray-600 w-full px-3 py-2 placeholder-gray-300 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring")
    $(".customForm textarea").addClass("text-gray-600 w-full px-3 py-2 placeholder-gray-300 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring")
    $(".btn-info").addClass("w-full px-3 py-4 text-white bg-tcb6 rounded-md focus:bg-tcb7 focus:outline-none")
}

export const getUISchema = (uiSchema) => {
    Object.keys(uiSchema).forEach(key => {
        uiSchema[key]['classNames'] = "customForm";
    });
    return uiSchema;
}

export const sendFormToStrapi = async (key, formData) => {
    const res = await fetch(getStrapiURL('/api/forms'), {
        method: 'POST',
        mode: 'cors',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            data: {
                name: key,
                content: formData
            }
        })
    }).catch(error => {
        console.error('There was an error!', error);
    });;
    const data = await res.json();
    return data;
};