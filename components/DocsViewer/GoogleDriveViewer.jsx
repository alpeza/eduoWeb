import React, { Component } from 'react';
import Container from "../container";
import { getIcon } from "../../lib/iconlib";
import merge from "merge"
/**
 * Configuración del iframe de los ficheros
 */
const fileConfigs = [
    {
        type: 'presentation',
        regex: /https:\/\/docs\.google\.com\/presentation\/d\/e\/([a-zA-Z0-9_.-]*)/,
        embed: 'https://docs.google.com/presentation/d/e/{id}/embed?start=false&loop=false&delayms=3000',
        props: {
            frameborder: "0",
            width: "100%",
            height: "503px",
            allowfullscreen: "true",
            mozallowfullscreen: "true",
            webkitallowfullscreen: "true",
        }
    },
    {
        type: 'document',
        regex: /https:\/\/docs\.google\.com\/document\/d\/e\/([a-zA-Z0-9_.-]*)/,
        embed: 'https://docs.google.com/document/d/e/{id}/pub?embedded=true',
        props: {
            frameborder: "0",
            width: "100%",
            height: "749",
        }
    },
    {
        type: 'spreadsheet',
        regex: /https:\/\/docs\.google\.com\/spreadsheets\/d\/e\/([a-zA-Z0-9_.-]*)/,
        embed: 'https://docs.google.com/spreadsheets/d/e/{id}/pubhtml?widget=true&amp;headers=false',
        props: {
            frameborder: "0",
            width: "100%",
            height: "749",
        }
    },
    {
        type: 'file',
        regex: /https:\/\/drive\.google\.com\/file\/d\/([a-zA-Z0-9_.-]*)/,
        embed: 'https://drive.google.com/file/d/{id}/preview',
        props: {
            frameborder: "0",
            width: "100%",
            height: "749",
        }
    }
]


class GoogleDriveViewer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: props.content.url,
            userProps: this.getUserProps(props.content.properties),
            displayLinkUrl: props.content.displayLinkUrl,
            displayLink: props.content.displayLink,
            embedUrl: '',
            props: {},
        };
        this.fileDispatcher();
    }

    getUserProps(properties) {
        var new_props = {};
        properties.forEach(e => {
            new_props[e.key] = e.value
        });
        return new_props;
    }

    fileDispatcher() {
        const { url, userProps } = this.state;
        fileConfigs.forEach(fconfig => {
            let fileId = url.match(fconfig.regex);
            if (fileId) {
                this.state.embedUrl = fconfig.embed.replace('{id}', fileId[1]);
                this.state.props = merge(fconfig.props, userProps);
            }
        });
        if (this.state.embedUrl == '') console.error("Error: No se ha podido clasificar la url : " + this.state.url);
    }

    render() {
        const { embedUrl, props, displayLink, displayLinkUrl } = this.state;
        return (
            <Container>
                <div className="w-full max-w-4xl mx-auto overflow-hidden lg:mb-20 rounded-2xl ">
                    {displayLink &&
                        <a href={displayLinkUrl ? displayLinkUrl : embedUrl} target="_blank" className="flex space-x-1 items-center px-0 py-2 text-tcb7 hover:text-tcb6">
                            <div>Abrir enlace</div>  <div className="h-5 w-5"> {getIcon("ArrowCircleRightIcon")}</div>
                        </a>
                    }
                    <iframe src={embedUrl} {...props}></iframe>
                </div>
            </Container>
        );
    }
}

export default GoogleDriveViewer;
