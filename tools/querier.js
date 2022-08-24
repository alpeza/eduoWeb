const qs = require('qs');
var requestify = require('requestify');

function querier(page,q){
  let hq = `http://localhost:1337/api/${page}?${q}`
  requestify.get(hq)
    .then(function(response) {
      console.log("*****************************************************")
      console.log(hq)
      console.log("-----------------------------------------------------")
      console.dir(response.getBody(), {depth: null, colors: true});
      console.log("-----------------------------------------------------")
      return response.getBody();
    })
    .fail(function (response) {
      console.log("*****************************************************")
      console.log(hq)
      console.log("-----------------------------------------------------")
      console.log('response Error', response.getCode());
      console.log("-----------------------------------------------------")
    });
}

/*
querier( 'portfolios',qs.stringify({
  populate: '*',
  filters: {
    id: {
      $eq: '1',
    },
  },
}, {
  encodeValuesOnly: true, // prettify URL
}));


var qr=querier( 'portfolios',qs.stringify({
  fields: ['id'],
}, {
  encodeValuesOnly: true, // prettify URL
}))


function processa(response){
  console.log("Rendering ...")
  response.data[0].attributes.content.forEach(element => {
      if(element["__component"] == "landing-assets.card-left-text"){
        console.log("Elemento de tipo 1")
      }else if(element["__component"] == "landing-assets.card-right-text"){
        console.log("Elemento de tipo 2")
      }else {
        console.log("Elemento no encontrado")
      }
  });
}

requestify.get('http://localhost:1337/api/pages?populate=deep,30')
.then(function(response) {
  //console.dir(response.getBody(), {depth: null, colors: true});
  processa(response.getBody())
})
.fail(function (response) {
  console.log('response Error', response.getCode());
});



var qr=querier( 'pages',qs.stringify({
  fields: ['Title'],
}, {
  encodeValuesOnly: true, // prettify URL
}))

var qr=querier( 'pages',qs.stringify({
  populate: 'deep,30',
  filters: {
    Title: {
      $eq: 'pepee',
    },
  },
}, {
  encodeValuesOnly: true, // prettify URL
}))



var qr=querier( 'navbar',qs.stringify({
  populate: ['ico','Links.pages','Links.Links'], 
  fields: ['Name']
}, {
  encodeValuesOnly: true, // prettify URL
}))


var qr=querier( 'footer',qs.stringify({
  populate: ['otherlinks.pages','otherlinks.Links','otherlinks.social','powered'], 
  fields: ['brandtext']
}, {
  encodeValuesOnly: true, // prettify URL
}))


var qr=querier( 'home',qs.stringify({
  populate: 'deep,30',
}, {
  encodeValuesOnly: true, // prettify URL
}))


function procesa2(info){
  //console.dir(info, {depth: null, colors: true});
  info.data[0].attributes.pcontent.forEach(element => {
    if( element['__component'] == 'landing-assets.carousel'){
      console.dir(element, {depth: null, colors: true});
      let imgArr = []
      element.images.data.forEach(image => {
        imgArr.push(image.attributes.url)
      })
     
      console.log(imgArr)
    }
  });
  console.log(imgArr)
}

requestify.get('http://localhost:1337/api/pages?'+qs.stringify({
  populate: 'deep,30',
  filters: {
    ppath: {
      $eq: 'demoassets',
    },
  },
}))
.then(function(response) {
  procesa2(response.getBody())
})
.fail(function (response) {
  console.log('response Error', response.getCode());
});




function procesa2(info){
  console.dir(info, {depth: null, colors: true});
  info.data[0].attributes.pcontent.forEach(element => {
    if( element['__component'].match('landing-assets.free-text')){
      console.dir(element, {depth: null, colors: true});
    }
  });
}

requestify.get('http://localhost:1337/api/pages?'+qs.stringify({
  populate: 'deep,30',
  filters: {
    ppath: {
      $eq: 'demoassets',
    },
  },
}))
.then(function(response) {
  procesa2(response.getBody())
})
.fail(function (response) {
  console.log('response Error', response.getCode());
});


var qr=querier( 'pages',qs.stringify({
  populate: 'deep,30',
  filters: {
    pname: {
      $eq: 'home',
    },
  },
}, {
  encodeValuesOnly: true, 
}))
*/



function procesa2(info){
  console.dir(info, {depth: null, colors: true});
  info.data[0].attributes.pcontent.forEach(element => {
    if( element['__component'].match('landing-assets.free-text')){
      console.dir(element, {depth: null, colors: true});
    }
  });
}

requestify.get('http://localhost:1337/api/pages?'+qs.stringify({
  populate: 'deep,30',
  filters: {
    ppath: {
      $eq: 'marketing',
    },
  },
}))
.then(function(response) {
  procesa2(response.getBody())
})
.fail(function (response) {
  console.log('response Error', response.getCode());
});