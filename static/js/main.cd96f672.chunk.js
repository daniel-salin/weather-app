(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,a){e.exports=a(69)},34:function(e,t,a){},35:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(23),o=a.n(i),c=(a(34),a(3)),l=a(8),s=a(9),u=a(11),m=a(10),d=a(12),p=(a(35),a(13)),h=a(71),g=a(24),y=a(25),E=a(2);function f(){var e=Object(g.a)(["\n    position: absolute;\n    background: white;\n    display: inline-block;\n    margin: 0 auto;\n    border-color: red;\n  "]);return f=function(){return e},e}var b=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).loadingStyle=Object(E.css)(f()),a.handleSubmit=function(e){e.preventDefault();var t=document.querySelector("input");a.props.searchForPosition(t.value)},a.useMyPosition=function(e){e.preventDefault(),a.props.geoLocation()},a.state={loading:!1},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.loading!==e.loading&&this.setState(Object(c.a)({},this.state,{loading:this.props.loading}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"container py-2"},r.a.createElement("div",{className:"row"},r.a.createElement("form",{className:"p-2",onSubmit:this.handleSubmit},r.a.createElement("input",{type:"text",autoComplete:"off",placeholder:"Search by city",required:!0}),r.a.createElement("button",{className:"btn",type:"submit"},r.a.createElement("i",{className:"fas fa-2x fa-search-location"}))),r.a.createElement("button",{className:"btn",onClick:this.useMyPosition},r.a.createElement("i",{className:"far fa-2x fa-compass"})),r.a.createElement(y.PacmanLoader,{css:this.loadingStyle,size:20,color:"#3165e0",loading:this.state.loading})))}}]),t}(r.a.Component),v=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleClick=function(e,t){var n=a.props.getWeather;e.preventDefault(),n("units=si",t),n("units=us",t)},a.state={queryLocationHits:""},a.handleClick=a.handleClick.bind(Object(p.a)(Object(p.a)(a))),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.queryLocationHits!==e.queryLocationHits&&this.setState(Object(c.a)({},this.state,{queryLocationHits:this.props.queryLocationHits}))}},{key:"render",value:function(){var e=this,t=this.props,a=t.convertUnits,n=t.unitType,i=t.searchForPosition,o=t.geoLocation,c=t.position,l=t.loading,s=this.state.queryLocationHits;return r.a.createElement("header",null,r.a.createElement("nav",{style:{position:"relative"},className:"navbar navbar-expand-lg navbar-dark bg-dark"},r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item px-3 pt-2"},r.a.createElement(h.a,{to:"/today",className:"text-light",activeStyle:{fontWeight:"bold",color:"red"}},"Prognosis- today")),r.a.createElement("li",{className:"nav-item px-3 pt-2"},r.a.createElement(h.a,{to:"/five",className:"text-light",activeStyle:{fontWeight:"bold",color:"red"}},"Prognosis- 5 day")),r.a.createElement("li",{className:"nav-item px-3 pt-2"},r.a.createElement(h.a,{to:"/week",className:"text-light",activeStyle:{fontWeight:"bold",color:"red"}},"Prognosis- week")))),r.a.createElement("button",{style:{position:"absolute",top:"8px",right:"16px"},className:"btn btn-primary btn-sm",onClick:a},"Metric"===n?"To American":"To Metric")),r.a.createElement("div",{className:"bg-secondary text-light text-center p-1"},r.a.createElement("h5",{className:"m-0 p-0"},c.address)),r.a.createElement(b,{searchForPosition:i,geoLocation:o,loading:l}),""!==s?r.a.createElement("div",{className:"container"},r.a.createElement("h5",null,"Match found!",r.a.createElement("button",{className:"btn","data-toggle":"collapse","data-target":"#search-results","aria-expanded":"true","aria-controls":"collapseExample"},r.a.createElement("i",{className:"fas fa-lg fa-arrow-alt-circle-down mx-2"}))),r.a.createElement("div",{className:"collapse mb-2",id:"search-results"},r.a.createElement("div",{className:"card card-body"},r.a.createElement("h5",null,"Did you mean..."),r.a.createElement("ul",{className:"p-0 m-0",style:{listStyleType:"none"}},s.map(function(t){return r.a.createElement("li",{key:t.address,className:"d-inline-flex ml-1 mb-2 badge badge-primary",style:{maxWidth:"250px"},onClick:function(a){return e.handleClick(a,t)}},r.a.createElement("p",{className:"text-truncate p-1 m-0"},t.city,"?"))}))))):null)}}]),t}(r.a.Component),w=a(72),O=a(27),N=a(65)(window),S=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).selectIcon=function(){switch(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"clear-day"){case"clear-day":return N.CLEAR_DAY;case"clear-night":return N.CLEAR_NIGHT;case"rain":return N.RAIN;case"snow":return N.SNOW;case"sleet":return N.SLEET;case"wind":return N.WIND;case"fog":return N.FOG;case"cloudy":return N.CLOUDY;case"partly-cloudy-day":return N.PARTLY_CLOUDY_DAY;case"partly-cloudy-night":return N.PARTLY_CLOUDY_NIGHT;default:return N.CLEAR_DAY}},a.ref=r.a.createRef(),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},"large"===this.props.size?r.a.createElement("div",null,r.a.createElement("canvas",{ref:this.ref,width:"80",height:"80"}),r.a.createElement("h5",null,this.props.desc)):"small"===this.props.size?r.a.createElement("div",null,r.a.createElement("canvas",{ref:this.ref,width:"40",height:"40"}),r.a.createElement("p",null,this.props.desc)):r.a.createElement("canvas",{ref:this.ref,width:"300",height:"300"}))}},{key:"componentDidMount",value:function(){var e=this.selectIcon(this.props.icon),t=new N({color:"black"});t.add(this.ref.current,e),t.play()}}]),t}(r.a.Component);function j(e){var t=e.weather,a=e.unitType;return r.a.createElement("div",{className:"m-0 p-2 row text-center bg-primary text-light"},r.a.createElement("div",{className:"col-sm-4 col-xs-4 text-center",style:{fontSize:"2em",alignSelf:"center"}},t.temperature," ","Metric"===a?"\xb0C":"\xb0F"),r.a.createElement("div",{className:"col-sm-4 col-xs-4",style:{fontSize:"2em",alignSelf:"center"}},r.a.createElement(S,{desc:t.summary,size:"large",icon:t.icon})),r.a.createElement("div",{className:"col-sm-4 col-xs-12 text-center",style:{alignSelf:"center"}},r.a.createElement("ul",{className:"text-left",style:{listStyleType:"none"}},r.a.createElement("li",null,"Wind Speed: ",t.windSpeed," ","Metric"===a?"m/s":"mph"),r.a.createElement("li",null,"Humidity: ",(100*t.humidity).toFixed(0),"%"))))}function x(e){var t=e.weather,a=e.unitType;return r.a.createElement("section",null,r.a.createElement(j,{unitType:a,weather:t.currently}),r.a.createElement("h5",{className:"p-2 m-0 bg-warning text-dark text-center"},t.hourly.summary),r.a.createElement("div",{className:"p-2 bg-secondary text-light mx-auto",style:{overflowX:"scroll"}},r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",{className:"text-center"},r.a.createElement("th",null,"Time"),r.a.createElement("th",null,"Desc."),r.a.createElement("th",null,"Temperature"),r.a.createElement("th",null,"Feels"),r.a.createElement("th",null,"Humidity"),r.a.createElement("th",null,"Percip"),r.a.createElement("th",null,"Wind"))),r.a.createElement("tbody",null,t.hourly.data.map(function(e){return t.hourly.data.indexOf(e)%3===0&&t.hourly.data.indexOf(e)<25?r.a.createElement("tr",{key:e.time,className:"text-center"},r.a.createElement("td",null,r.a.createElement("div",{className:"row"},r.a.createElement("span",{className:"mx-auto"},new Date(1e3*e.time).toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit"}))),r.a.createElement("div",{className:"row"},r.a.createElement("span",{className:"mx-auto"},new Date(1e3*e.time).toLocaleDateString(navigator.language,{weekday:"short"})))),r.a.createElement("td",null,r.a.createElement(S,{desc:e.summary,size:"small",icon:e.icon})),r.a.createElement("td",null,e.temperature,"Metric"===a?"\xb0C":"\xb0F"),r.a.createElement("td",null,e.apparentTemperature,"Metric"===a?"\xb0C":"\xb0F"),r.a.createElement("td",null,(100*e.humidity).toFixed(0),"%"),r.a.createElement("td",null,(100*e.precipProbability).toFixed(0),"%"),r.a.createElement("td",null,e.windSpeed," ","Metric"===a?"m/s":"mph")):null})))))}function k(e){var t=e.weather,a=t.daily,n=t.currently,i=e.unitType,o=e.prognosisType;return r.a.createElement("section",null,r.a.createElement(j,{unitType:i,weather:n}),r.a.createElement("div",{className:"bg-secondary"},r.a.createElement("h4",{className:"p-2 bg-warning text-center"},a.summary),r.a.createElement("div",{className:"row p-3"},a.data.map(function(e){new Date(1e3*e.time).toLocaleDateString(navigator.language,{weekday:"long",year:"numeric",month:"2-digit",day:"2-digit"});var t=new Date(1e3*e.sunriseTime).toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit"}),n=new Date(1e3*e.sunsetTime).toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit"});return a.data.indexOf(e)<5&&"fiveDay"===o?r.a.createElement("div",{key:e.time.toString(),className:"col-lg-3 col-md-6 col-sm-12"},r.a.createElement("div",{style:{minHeight:"410px"},className:"card w-100 m-1 bg-info p-2"},r.a.createElement("p",null,e.summary),r.a.createElement("p",null,"Humidity: ",(100*e.humidity).toFixed(0),"%"),r.a.createElement("p",null,"Temperature High: ",e.temperatureHigh,"Metric"===i?"\xb0C":"\xb0F"),r.a.createElement("p",null,"Temperature Low: ",e.temperatureLow,"Metric"===i?"\xb0C":"\xb0F"),r.a.createElement("p",null,"Sunrise: ",t),r.a.createElement("p",null,"Sunset: ",n),r.a.createElement(S,{size:"small",icon:e.icon}))):"week"===o?r.a.createElement("div",{key:e.time.toString(),className:"col-lg-3 col-md-6 col-sm-12"},r.a.createElement("div",{style:{minHeight:"410px"},className:"card w-100 m-1 bg-info p-2"},r.a.createElement("p",null,e.summary),r.a.createElement("p",null,"Humidity: ",(100*e.humidity).toFixed(0),"%"),r.a.createElement("p",null,"Temperature High: ",e.temperatureHigh,"Metric"===i?"\xb0C":"\xb0F"),r.a.createElement("p",null,"Temperature Low: ",e.temperatureLow,"Metric"===i?"\xb0C":"\xb0F"),r.a.createElement("p",null,"Sunrise: ",t),r.a.createElement("p",null,"Sunset: ",n),r.a.createElement(S,{size:"small",icon:e.icon}))):void 0}))))}var T=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.weather,a=e.unitType;return r.a.createElement("main",{className:"mb-2"},r.a.createElement(w.a,null,r.a.createElement(O.a,{exact:!0,path:"/",render:function(){return r.a.createElement(x,{unitType:a,weather:t})}}),r.a.createElement(O.a,{path:"/today",render:function(){return r.a.createElement(x,{unitType:a,weather:t})}}),r.a.createElement(O.a,{path:"/five",render:function(){return r.a.createElement(k,{prognosisType:"fiveDay",unitType:a,weather:t})}}),r.a.createElement(O.a,{path:"/week",render:function(){return r.a.createElement(k,{prognosisType:"week",unitType:a,weather:t})}})))}}]),t}(r.a.Component);function L(){return r.a.createElement("footer",{className:"text-center bg-dark text-light p-3"},r.a.createElement("a",{className:"text-light mt-2",href:" https://darksky.net/poweredby/"},"Powered by Dark Sky"))}var C=function(e){return function(t){function a(e){var t;return Object(l.a)(this,a),(t=Object(u.a)(this,Object(m.a)(a).call(this,e))).convertCoords=function(e,a){var n="".concat(e,",").concat(a),r="https://api.opencagedata.com/geocode/v1/json?q=".concat(n,"&key=").concat("edc374fea64844bbb30a0f63069fefdd","&pretty=1");fetch(r).then(function(e){if(e.ok)return e.json();throw new Error("Connection to OpenCage API failed")}).then(function(e){return t.setState(Object(c.a)({},t.state,{position:Object(c.a)({},t.state.position,{address:e.results[0].formatted})})),!0}).catch(function(e){return console.log("There was an error: ",e.message)})},t.searchForPosition=function(e,a){var n="https://api.opencagedata.com/geocode/v1/json?q=".concat(null===e?a:e,"&key=").concat("edc374fea64844bbb30a0f63069fefdd","&pretty=1");fetch(n).then(function(e){if(e.ok)return e.json();throw new Error("Connection to OpenCage API failed")}).then(function(a){null===e&&a.results.length>1?t.setState(Object(c.a)({},t.state,{position:a.results.formatted})):(t.handleQueryPositions(a.results),t.setState(Object(c.a)({},t.state,{queryPosition:a.results[0].components})))}).catch(function(e){return console.log("There was an error: ",e.message)})},t.handleQueryPositions=function(e){var a=[];e.map(function(e){var t={city:e.formatted,geo:{latitude:e.geometry.lat,longitude:e.geometry.lng}};return a.push(t)}),t.setState(Object(c.a)({},t.state,{queryLocationHits:a}))},t.getWeather=function(e,a){t.setState(Object(c.a)({},t.state,{loading:!0}));var n,r,i=e;null===a?(n=t.state.position.latitude,r=t.state.position.longitude):(n=a.geo.latitude,r=a.geo.longitude,t.setState(Object(c.a)({},t.state,{position:Object(c.a)({},t.state.position,{address:a.city})})));var o="".concat("https://cors-anywhere.herokuapp.com","/").concat("https://api.darksky.net","/").concat("forecast","/").concat("9b80bc403010ba20b653fd2f09cce6fa","/").concat(n,",").concat(r,"?").concat(i);console.log(o),fetch(o).then(function(e){if(e.ok)return e.json();throw new Error("Connection to DarkSky API failed")}).then(function(e){"units=si"===i?t.setState(Object(c.a)({},t.state,{weatherSI:e,loading:"complete"})):t.setState(Object(c.a)({},t.state,{weatherUS:e,loading:"complete"}))}).catch(function(e){return console.log("There was an error: ",e.message)})},t.state={queryLocationHits:"",position:"",weatherSI:"",weatherUS:"",loading:!1},t.geoLocation=t.geoLocation.bind(Object(p.a)(Object(p.a)(t))),t.getWeather=t.getWeather.bind(Object(p.a)(Object(p.a)(t))),t.searchForPosition=t.searchForPosition.bind(Object(p.a)(Object(p.a)(t))),t}return Object(d.a)(a,t),Object(s.a)(a,[{key:"componentDidMount",value:function(){this.geoLocation()}},{key:"geoLocation",value:function(){var e=this;window.navigator.geolocation&&window.navigator.geolocation.getCurrentPosition(function(t){var a=t.coords.latitude.toFixed(3),n=t.coords.longitude.toFixed(3);e.convertCoords(a,n);var r={latitude:a,longitude:n};e.setState(Object(c.a)({},e.state,{position:r})),e.getWeather("units=si",null),e.getWeather("units=us",null)},function(t){e.setState(Object(c.a)({},e.state,{position:"NA"}))},{enableHighAccuracy:!0,timeout:5e3,maximumAge:0})}},{key:"render",value:function(){var t=this.state,a=t.position,n=t.weatherSI,i=t.weatherUS,o=t.queryLocationHits,c=t.loading;return r.a.createElement(e,Object.assign({},this.props,{position:a,weatherSI:n,weatherUS:i,searchForPosition:this.searchForPosition,geoLocation:this.geoLocation,queryLocationHits:o,getWeather:this.getWeather,loading:c}))}}]),a}(r.a.Component)}(function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).convertUnits=function(){"Metric"===a.state.unitType?a.setState(Object(c.a)({},a.state,{weather:a.props.weatherUS,unitType:"American"})):a.setState(Object(c.a)({},a.state,{weather:a.props.weatherSI,unitType:"Metric"}))},a.state={unitType:"",weather:""},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.weatherSI!==e.weatherSI&&this.setState(Object(c.a)({},this.state,{weather:this.props.weatherSI,unitType:"Metric",queryLocationHits:this.props.queryLocationHits}))}},{key:"render",value:function(){var e=this.props,t=e.position,a=e.weatherSI,n=e.searchForPosition;if(window.navigator){if(""===t)return r.a.createElement("div",{className:"container bg-primary text-light"},r.a.createElement("h1",null,"LOADING ART GOES HERE"),r.a.createElement("p",null,"Please hold while we're acquiring your position"));if("NA"===t)return r.a.createElement("div",{className:"container bg-danger text-light"},r.a.createElement("h1",null,"FAILED TO ACQUIRE POSITION"),r.a.createElement("p",null,"Please hold while we're acquiring your position"));if(""===a)return r.a.createElement("div",{className:"container bg-primary text-light"},r.a.createElement("h1",null,"LOADING WEATHER"),r.a.createElement(S,null));if(""===this.state.weather)return r.a.createElement("div",{className:"container bg-primary text-light"},r.a.createElement("h1",null,"CORRECTING STATE"));var i=this.state,o=i.weather,c=i.unitType,l=this.props,s=l.queryLocationHits,u=l.getWeather,m=l.position,d=l.loading,p=l.geoLocation;return r.a.createElement("div",null,r.a.createElement(v,{position:m,unitType:c,convertUnits:this.convertUnits,searchForPosition:n,geoLocation:p,queryLocationHits:s,getWeather:u,loading:d}),r.a.createElement(T,{unitType:c,weather:o}),r.a.createElement(L,null))}return r.a.createElement("div",{className:"container bg-danger text-light"},r.a.createElement("h1",null,"It appears your browser does not support the Geolocation-API"))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var P=a(70);a(66).config(),o.a.render(r.a.createElement(P.a,{basename:"/weather-app"},r.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[28,1,2]]]);
//# sourceMappingURL=main.cd96f672.chunk.js.map