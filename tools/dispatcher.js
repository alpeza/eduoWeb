///https:\/\/docs\.google\.com\/document\/d\/(\w+)/

const fileConfigs = [
    { 
        type: 'ppt', 
        regex: /https:\/\/docs\.google\.com\/presentation\/d\/e\/([a-zA-Z0-9_.-]*)/,
        embed: 'https://docs.google.com/presentation/d/e/{id}/embed?start=false&loop=false&delayms=3000" frameborder="0" width="1280" height="749" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"'
    },
    { 
        type: 'doc', 
        regex: 'https:\/\/docs\.google\.com\/document\/d\/e\/([a-zA-Z0-9_.-]*)',
        embed: 'https://docs.google.com/document/d/e/{id}/pub?embedded=true'
    },
    { 
        type: 'file', 
        regex: /https:\/\/drive\.google\.com\/file\/d\/(\w+)/,
        embed: 'https://drive.google.com/file/d/{id}/preview'
    }
]


function fileDispatcher(url) {
    let src= ''
    fileConfigs.forEach(fconfig => {
        fileId = url.match(fconfig.regex);
        src = fileId ? fconfig.embed.replace('{id}', fileId[1]) : "";
    });
    return src;
}



/*
fileDispatcher('https://docs.google.com/presentation/d/e/2PACX-1vRExiPpsrqfPO0VrTnnRSz43yEQ54qGCGapGh-kpv72uVr0JkvbJzjcG9r9qymSVA/pub?start=false&loop=false&delayms=3000')
fileDispatcher('https://docs.google.com/document/d/1rnnNhyE_laNaCYAJs1QL4CxCHMDi81PFXGAog1QytMM/edit?usp=sharing')
fileDispatcher('https://drive.google.com/file/d/1aDCFkegSLaNZrcTaei1Cjb12XvELOxmU/view?usp=sharing')
*/

properties = [
    { id: 1, key: 'height', value: '749' },
    { id: 2, key: 'width', value: '100%' }
]


var new_props = {};
properties.forEach(e => {
    new_props[e.key] = e.value
});