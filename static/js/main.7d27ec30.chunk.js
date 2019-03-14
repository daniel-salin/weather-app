(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){e.exports=a(35)},26:function(e,t,a){},27:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(17),c=a.n(i),o=(a(26),a(3)),l=a(7),s=a(8),u=a(10),m=a(9),h=a(11),p=(a(27),a(6)),d=a(37);function g(e){return r.a.createElement("div",{className:"container p-2"},r.a.createElement("form",{className:"",onSubmit:function(t){t.preventDefault();var a=document.querySelector("input");e.searchForPosition(a.value)}},r.a.createElement("input",{type:"text",autoComplete:"off",placeholder:"Search by city",required:!0}),r.a.createElement("button",{className:"btn btn-primary mx-2",type:"submit"},"Search")))}var y=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleClick=function(e,t){var n=a.props.getWeather;e.preventDefault(),n("units=si",t),n("units=us",t)},a.state={queryLocationHits:"",location:""},a.handleClick=a.handleClick.bind(Object(p.a)(Object(p.a)(a))),a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.queryLocationHits!==e.queryLocationHits&&this.setState(Object(o.a)({},this.state,{queryLocationHits:this.props.queryLocationHits}))}},{key:"render",value:function(){var e=this,t=this.props,a=t.convertUnits,n=t.unitType,i=t.searchForPosition,c=t.position,o=this.state.queryLocationHits;return r.a.createElement("header",null,r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item px-3 pt-2"},r.a.createElement(d.a,{to:"/today",className:"text-light",activeStyle:{fontWeight:"bold",color:"red"}},"Prognosis- today")),r.a.createElement("li",{className:"nav-item px-3 pt-2"},r.a.createElement(d.a,{to:"/week",className:"text-light",activeStyle:{fontWeight:"bold",color:"red"}},"Prognosis- week")),r.a.createElement("li",{className:"nav-item px-3"},r.a.createElement("button",{className:"btn btn-primary btn-small",onClick:a},"Metric"===n?"Display American":"Display Metric")))),r.a.createElement("div",{className:"text-light align-right"},c.address)),r.a.createElement(g,{searchForPosition:i}),""!==o?r.a.createElement("div",{className:"container"},r.a.createElement("h5",null,"Did you mean..."),r.a.createElement("ul",{style:{listStyleType:"none"}},o.map(function(t){return r.a.createElement("li",{className:"d-inline-flex ml-2 badge badge-primary",onClick:function(a){return e.handleClick(a,t)}}," ",t.city,"?")}))):null)}}]),t}(r.a.Component),E=a(38),b=a(19),f=a(31)(window),v=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).selectIcon=function(e){switch(e){case"clear-day":return f.CLEAR_DAY;case"clear-night":return f.CLEAR_NIGHT;case"rain":return f.RAIN;case"snow":return f.SNOW;case"sleet":return f.SLEET;case"wind":return f.WIND;case"fog":return f.FOG;case"cloudy":return f.CLOUDY;case"partly-cloudy-day":return f.PARTLY_CLOUDY_DAY;case"partly-cloudy-night":return f.PARTLY_CLOUDY_NIGHT;default:return f.CLEAR_DAY}},a.ref=r.a.createRef(),a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},"large"===this.props.size?r.a.createElement("canvas",{ref:this.ref,width:"100",height:"100"}):r.a.createElement("canvas",{ref:this.ref,width:"64",height:"64"}))}},{key:"componentDidMount",value:function(){var e=this.selectIcon(this.props.icon),t=new f({color:"white"});t.add(this.ref.current,e),t.play()}}]),t}(r.a.Component);function w(e){var t=e.weather,a=e.unitType;return r.a.createElement("div",{className:"row text-center bg-primary text-light"},r.a.createElement("div",{className:"col-md-4 text-center",style:{fontSize:"3em"}},t.temperature," ","Metric"===a?"\xb0C":"\xb0F"),r.a.createElement("div",{className:"col-md-4 col-sm-12"},r.a.createElement("ul",{className:"p-3 text-center",style:{listStyleType:"none"}},r.a.createElement("li",null,r.a.createElement("h4",null,t.summary)),r.a.createElement("li",null,"Wind Speed: ",t.windSpeed," ","Metric"===a?"m/s":"mph"),r.a.createElement("li",null,"Humidity: ",(100*t.humidity).toFixed(0),"%"))),r.a.createElement("div",{className:"col-md-4 col-sm-12"},r.a.createElement(v,{size:"large",icon:t.icon})))}function O(e){var t=e.weather,a=e.unitType;return r.a.createElement("section",null,r.a.createElement(w,{unitType:a,weather:t.currently}),r.a.createElement("div",{className:"bg-secondary text-light"},r.a.createElement("h4",{className:"p-2 bg-warning text-dark text-center"},t.hourly.summary),r.a.createElement("table",{className:"table p-3"},r.a.createElement("thead",null,r.a.createElement("tr",{className:"text-center"},r.a.createElement("th",{scope:"col"},"Hour"),r.a.createElement("th",{scope:"col"},"Weather"),r.a.createElement("th",{scope:"col"},"Description"),r.a.createElement("th",{scope:"col"},"Temperature"),r.a.createElement("th",{scope:"col"},"Apparent temperature"),r.a.createElement("th",{scope:"col"},"Humidity"))),r.a.createElement("tbody",null,t.hourly.data.map(function(e){return t.hourly.data.indexOf(e)%3===0&&t.hourly.data.indexOf(e)<25?r.a.createElement("tr",{key:e.time,className:"text-center"},r.a.createElement("td",null,r.a.createElement("div",{className:"row"},r.a.createElement("span",{className:"mx-auto"},new Date(1e3*e.time).toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit"}))),r.a.createElement("div",{className:"row"},r.a.createElement("span",{className:"mx-auto"},new Date(1e3*e.time).toLocaleDateString(navigator.language,{weekday:"short"})))),r.a.createElement("td",null,r.a.createElement(v,{size:"small",icon:e.icon})),r.a.createElement("td",null,e.summary),r.a.createElement("td",null,e.temperature,"Metric"===a?"\xb0C":"\xb0F"),r.a.createElement("td",null,e.apparentTemperature,"Metric"===a?"\xb0C":"\xb0F"),r.a.createElement("td",null,(100*e.humidity).toFixed(0),"%")):null})))))}function N(e){var t=e.weather,a=t.daily,n=t.currently,i=e.unitType;return r.a.createElement("section",null,r.a.createElement(w,{unitType:i,weather:n}),r.a.createElement("div",{className:"bg-secondary"},r.a.createElement("h4",{className:"p-2 bg-warning text-center"},a.summary),r.a.createElement("div",{className:"row p-3"},a.data.map(function(e){var t=new Date(1e3*e.time).toLocaleDateString(navigator.language,{weekday:"long",year:"numeric",month:"2-digit",day:"2-digit"}),a=new Date(1e3*e.sunriseTime).toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit"}),n=new Date(1e3*e.sunsetTime).toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit"});return r.a.createElement("div",{key:e.time.toString(),className:"col-lg-3 col-md-6 col-sm-12"},r.a.createElement("div",{style:{minHeight:"410px"},className:"card w-100 m-1 bg-info p-2"},r.a.createElement("h5",null,t),r.a.createElement("p",null,e.summary),r.a.createElement("p",null,"Humidity: ",(100*e.humidity).toFixed(0),"%"),r.a.createElement("p",null,"Temperature High: ",e.temperatureHigh,"Metric"===i?"\xb0C":"\xb0F"),r.a.createElement("p",null,"Temperature Low: ",e.temperatureLow,"Metric"===i?"\xb0C":"\xb0F"),r.a.createElement("p",null,"Sunrise: ",a),r.a.createElement("p",null,"Sunset: ",n),r.a.createElement(v,{size:"small",icon:e.icon})))}))))}var j=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.weather,a=e.unitType;return r.a.createElement("main",null,r.a.createElement(E.a,null,r.a.createElement(b.a,{exact:!0,path:"/",render:function(){return r.a.createElement(O,{unitType:a,weather:t})}}),r.a.createElement(b.a,{path:"/today",render:function(){return r.a.createElement(O,{unitType:a,weather:t})}}),r.a.createElement(b.a,{path:"/week",render:function(){return r.a.createElement(N,{unitType:a,weather:t})}})))}}]),t}(r.a.Component);function S(){return r.a.createElement("footer",{className:"text-center bg-dark text-light p-3"},r.a.createElement("a",{className:"text-light mt-2",href:" https://darksky.net/poweredby/"},"Powered by Dark Sky"))}var k=function(e){return function(t){function a(e){var t;return Object(l.a)(this,a),(t=Object(u.a)(this,Object(m.a)(a).call(this,e))).convertCoords=function(e,a){var n="".concat(e,",").concat(a),r="https://api.opencagedata.com/geocode/v1/json?q=".concat(n,"&key=").concat("edc374fea64844bbb30a0f63069fefdd","&pretty=1");fetch(r).then(function(e){if(e.ok)return e.json();throw new Error("Connection to OpenCage API failed")}).then(function(e){t.setState(Object(o.a)({},t.state,{position:Object(o.a)({},t.state.position,{address:e.results[0].formatted})}))}).catch(function(e){return console.log("There was an error: ",e.message)})},t.searchForPosition=function(e,a){var n="https://api.opencagedata.com/geocode/v1/json?q=".concat(null===e?a:e,"&key=").concat("edc374fea64844bbb30a0f63069fefdd","&pretty=1");fetch(n).then(function(e){if(e.ok)return e.json();throw new Error("Connection to OpenCage API failed")}).then(function(a){null===e&&a.results.length>1?t.setState(Object(o.a)({},t.state,{position:a.results.formatted})):(t.handleQueryPositions(a.results),t.setState(Object(o.a)({},t.state,{queryPosition:a.results[0].components})))}).catch(function(e){return console.log("There was an error: ",e.message)})},t.handleQueryPositions=function(e){var a=[];e.map(function(e){var t={city:e.formatted,geo:{latitude:e.geometry.lat,longitude:e.geometry.lng}};return a.push(t)}),t.setState(Object(o.a)({},t.state,{queryLocationHits:a}))},t.getWeather=function(e,a){var n,r,i=e;null===a?(n=t.state.position.latitude,r=t.state.position.longitude):(n=a.geo.latitude,r=a.geo.longitude,t.setState(Object(o.a)({},t.state,{position:Object(o.a)({},t.state.position,{address:a.city})})));var c="".concat("https://cors-anywhere.herokuapp.com","/").concat("https://api.darksky.net","/").concat("forecast","/").concat("9b80bc403010ba20b653fd2f09cce6fa","/").concat(n,",").concat(r,"?").concat(i);fetch(c).then(function(e){if(e.ok)return e.json();throw new Error("Connection to DarkSky API failed")}).then(function(e){"units=si"===i?t.setState(Object(o.a)({},t.state,{weatherSI:e})):t.setState(Object(o.a)({},t.state,{weatherUS:e}))}).catch(function(e){return console.log("There was an error: ",e.message)})},t.state={queryLocationHits:"",position:"",weatherSI:"",weatherUS:""},t.geoLocation=t.geoLocation.bind(Object(p.a)(Object(p.a)(t))),t.getWeather=t.getWeather.bind(Object(p.a)(Object(p.a)(t))),t.searchForPosition=t.searchForPosition.bind(Object(p.a)(Object(p.a)(t))),t}return Object(h.a)(a,t),Object(s.a)(a,[{key:"componentDidMount",value:function(){this.geoLocation()}},{key:"geoLocation",value:function(){var e=this;window.navigator.geolocation&&window.navigator.geolocation.getCurrentPosition(function(t){var a=t.coords.latitude.toFixed(3),n=t.coords.longitude.toFixed(3);e.convertCoords(a,n);var r={latitude:a,longitude:n};e.setState(Object(o.a)({},e.state,{position:r})),e.getWeather("units=si",null),e.getWeather("units=us",null)},function(t){e.setState(Object(o.a)({},e.state,{position:"NA"}))},{enableHighAccuracy:!0,timeout:4e3,maximumAge:0})}},{key:"render",value:function(){var t=this.state,a=t.position,n=t.weatherSI,i=t.weatherUS,c=t.queryLocationHits;return r.a.createElement(e,Object.assign({},this.props,{position:a,weatherSI:n,weatherUS:i,searchForPosition:this.searchForPosition,queryLocationHits:c,getWeather:this.getWeather}))}}]),a}(r.a.Component)}(function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).convertUnits=function(){"Metric"===a.state.unitType?a.setState(Object(o.a)({},a.state,{weather:a.props.weatherUS,unitType:"American"})):a.setState(Object(o.a)({},a.state,{weather:a.props.weatherSI,unitType:"Metric"}))},a.state={unitType:"",weather:""},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.weatherSI!==e.weatherSI&&this.setState(Object(o.a)({},this.state,{weather:this.props.weatherSI,unitType:"Metric",queryLocationHits:this.props.queryLocationHits}))}},{key:"render",value:function(){var e=this.props,t=e.position,a=e.weatherSI,n=e.searchForPosition;if(window.navigator){if(""===t)return r.a.createElement("div",{className:"container bg-primary text-light"},r.a.createElement("h1",null,"LOADING ART GOES HERE"),r.a.createElement("p",null,"Please hold while we're acquiring your position"));if(""===a)return r.a.createElement("div",{className:"container bg-primary text-light"},r.a.createElement("h1",null,"LOADING WEATHER"));if(""===this.state.weather)return r.a.createElement("div",{className:"container bg-primary text-light"},r.a.createElement("h1",null,"CORRECTING STATE"));var i=this.state,c=i.weather,o=i.unitType,l=this.props,s=l.queryLocationHits,u=l.getWeather,m=l.position;return r.a.createElement("div",null,r.a.createElement(y,{position:m,unitType:o,convertUnits:this.convertUnits,searchForPosition:n,queryLocationHits:s,getWeather:u}),r.a.createElement(j,{unitType:o,weather:c}),r.a.createElement(S,null))}return r.a.createElement("div",{className:"container bg-danger text-light"},r.a.createElement("h1",null,"It appears your browser does not support the Geolocation-API"))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var T=a(36);a(32).config(),c.a.render(r.a.createElement(T.a,{basename:"/weather-app"},r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,1,2]]]);
//# sourceMappingURL=main.7d27ec30.chunk.js.map