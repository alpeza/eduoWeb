import React, { Component } from 'react';
import { Disclosure, Transition } from "@headlessui/react";
import Form from "react-jsonschema-form";
import validator from "react-jsonschema-form";
import { loadCSS, getUISchema, sendFormToStrapi } from "./CommonForms";
import ReactLoading from 'react-loading';

class SendQuestions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formSchema: props.content.form.common_forms.data[0].attributes.form.JSONSchema,
            uiSchema: props.content.form.common_forms.data[0].attributes.form.UISchema,
            key: props.content.form.name,
            cftitle: props.content.cftitle,
            cfsubtitle: props.content.cfsubtitle,
            formstate: "nothing"
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit({ formData }, e) {
        e.preventDefault();
        this.setState({ formstate: "sending" })
        const resp = await sendFormToStrapi(this.state.key, formData)
        console.log(resp);
        if ("data" in resp) {
            this.setState({ formstate: "sended" })
        } else {
            this.setState({ formstate: "failed" })
        }
    }

    render() {
        const { formSchema, uiSchema, formstate, cftitle, cfsubtitle } = this.state;
        return (
            <div>
                <Disclosure>
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="fixed z-40 flex items-center justify-center transition duration-300 bg-tcb6 rounded-full shadow-lg right-5 bottom-5 w-14 h-14 focus:outline-none hover:bg-tcb7 focus:bg-tcb7 ease">
                                <span className="sr-only">Widget</span>
                                <Transition
                                    show={!open}
                                    enter="transition duration-200 transform ease"
                                    enterFrom="opacity-0 -rotate-45 scale-75"
                                    leave="transition duration-100 transform ease"
                                    leaveTo="opacity-0 -rotate-45"
                                    className="absolute w-6 h-6 text-white">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round">
                                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                    </svg>{" "}
                                </Transition>

                                <Transition
                                    show={open}
                                    enter="transition duration-200 transform ease"
                                    enterFrom="opacity-0 rotate-45 scale-75"
                                    leave="transition duration-100 transform ease"
                                    leaveTo="opacity-0 rotate-45"
                                    className="absolute w-6 h-6 text-white">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round">
                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                    </svg>{" "}
                                </Transition>
                            </Disclosure.Button>
                            <Transition
                                className="fixed  z-50 bottom-[100px] top-0 right-0  left-0 sm:top-auto sm:right-5 sm:left-auto"
                                enter="transition duration-200 transform ease"
                                enterFrom="opacity-0 translate-y-5"
                                leave="transition duration-200 transform ease"
                                leaveTo="opacity-0 translate-y-5">
                                <Disclosure.Panel className=" flex flex-col  overflow-hidden left-0 h-full w-full sm:w-[350px] min-h-[250px] sm:h-[600px] border border-gray-300 dark:border-gray-800 bg-white shadow-2xl rounded-md sm:max-h-[calc(100vh-120px)]">
                                    <div className="flex flex-col items-center justify-center h-32 p-5 bg-tcb7">
                                        <h3 className="text-lg text-white">{cftitle}</h3>
                                        <p className="text-white opacity-50 text-center">
                                            {cfsubtitle}
                                        </p>
                                    </div>
                                    <div className="flex-grow h-full p-6 overflow-auto bg-tca2 ">
                                        {formstate == "sending" &&
                                            <div className="flex flex-col items-center justify-center h-32 p-5">
                                                <ReactLoading type="bubbles" color="#0d9488" />
                                            </div>
                                        }
                                        {formstate == "nothing" &&
                                            <div className="mb-4">
                                                <Form schema={formSchema}
                                                    uiSchema={getUISchema(uiSchema)}
                                                    validator={validator}
                                                    onSubmit={this.handleSubmit}
                                                    onError={console.log("errors")} />
                                                {loadCSS()}
                                            </div>
                                        }
                                        {formstate == "sended" &&
                                            <div className="flex flex-col items-center justify-center h-32 p-5">
                                                <h3 className="text-lg text-black text-center">El mensaje se ha enviado correctamente 😊</h3>
                                            </div>
                                        }
                                        {formstate == "failed" &&
                                            <div className="flex flex-col items-center justify-center h-32 p-5">
                                                <h3 className="text-lg text-black text-center">Algo salió mal en el envío, inténtelo más tarde 😔</h3>
                                            </div>
                                        }
                                    </div>
                                </Disclosure.Panel>
                            </Transition>
                        </>
                    )}
                </Disclosure>
            </div>
        );
    }
}

export default SendQuestions;
