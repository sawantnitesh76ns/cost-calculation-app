(this["webpackJsonpcost-calculation-table-app"]=this["webpackJsonpcost-calculation-table-app"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),a=n(8),l=n.n(a),h=(n(14),n(3)),s=n(4),d=n(6),o=n(5),r=(n(15),n(2)),j=(n(16),n(9)),u=n.n(j),b=n(0),O=function(e){Object(d.a)(n,e);var t=Object(o.a)(n);function n(e){var c;return Object(h.a)(this,n),(c=t.call(this,e)).throttledHandleWindowResize=function(){return u()((function(){c.setState({isMobile:window.innerWidth<480})}),200)},c.state={data:[{length:8,height:8,one:60,count:1},{length:12,height:12,one:85,count:2},{length:12,height:16,one:115,two:140,count:3},{length:16,height:20,one:150,two:175,three:200,count:4},{length:18,height:24,one:195,two:225,three:255,four:285,count:5},{length:20,height:30,one:150,two:175,three:200,four:255,five:255,count:6},{length:24,height:36,one:150,two:175,three:200,four:255,five:255,additional:30,count:7},{length:30,height:40,one:150,two:175,three:200,four:255,five:255,additional:30,count:8},{length:"0",height:"0",one:"0",two:"0",three:"0",four:"0",five:"0",additional:"0",count:9}],beforeSubmit:!0,afterSubmit:!1,isMobile:!1},c.handleChangesInHight=c.handleChangesInHight.bind(Object(r.a)(c)),c.handleChangesInLength=c.handleChangesInLength.bind(Object(r.a)(c)),c.tbody=c.tbody.bind(Object(r.a)(c)),c.handleOptionChange=c.handleOptionChange.bind(Object(r.a)(c)),c.throttledHandleWindowResize=c.throttledHandleWindowResize.bind(Object(r.a)(c)),c}return Object(s.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.throttledHandleWindowResize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.throttledHandleWindowResize)}},{key:"handleChangesInLength",value:function(e){var t=this.state.data;t[8].length=e.target.value,this.setState({data:t})}},{key:"handleChangesInHight",value:function(e){var t=this.state.data;t[8].height=e.target.value,this.setState({data:t})}},{key:"calculateValues",value:function(e,t,n){"string"===typeof e&&"string"===typeof t&&(e=parseInt(e),t=parseInt(t));var c=0,i=e*t*.9375,a=e*t;switch(!0){case a<=150&&a>0:switch(!0){case 1===n:c=i;break;default:c=0}break;case a<=250&&a>=150:switch(!0){case 1===n:c=i;break;case 2===n:c=i+25*n;break;default:c=0}break;case a<=350&&a>=251:switch(!0){case 1===n:c=i;break;case 2===n||3===n:c=i+25*n;break;default:c=0}break;case a<600&&a>=351:switch(!0){case 1===n:c=i;break;case 2===n||3===n||4===n:c=i+25*n;break;default:c=0}break;case a<=1e5&&a>=600:switch(!0){case 1===n:c=i;break;case 2===n||3===n||4===n||5===n:c=i+25*n;break;default:c=0}break;default:c=0}return c}},{key:"handleOptionChange",value:function(e){console.log(document.getElementById("default").value=e.target.value),document.getElementById("default").innerHTML=e.target.value;for(var t=this.state.data,n=parseInt(e.target.value),c=0;c<t.length;c++){var i=t[c].length,a=t[c].height;"string"===typeof i&&"string"===typeof a&&(i=parseInt(i),a=parseInt(a)),t[c].additional=i*a>600?30*n:0}this.setState({data:t})}},{key:"tbody",value:function(){var e=this;return this.state.data.map((function(t){return Object(b.jsxs)("tr",{children:[Object(b.jsxs)("td",{children:[9!==t.count&&Object(b.jsxs)("div",{children:[t.length,Object(b.jsx)("span",{children:'"'}),Object(b.jsx)("span",{children:"X"}),t.height,Object(b.jsx)("span",{children:'"'})]}),9===t.count&&Object(b.jsx)("div",{children:Object(b.jsxs)("form",{children:[Object(b.jsx)("input",{type:"text",maxLength:"4",size:"4",onChange:e.handleChangesInLength}),Object(b.jsx)("span",{children:'"'}),Object(b.jsx)("span",{children:"X"}),Object(b.jsx)("input",{type:"text",maxLength:"4",size:"4",onChange:e.handleChangesInHight}),Object(b.jsx)("span",{children:'"'})]})})]}),Object(b.jsx)("td",{children:t.one&&Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:"$"}),e.calculateValues(t.length,t.height,1)]})}),Object(b.jsx)("td",{children:t.two&&Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:"$"}),e.calculateValues(t.length,t.height,2)]})}),Object(b.jsx)("td",{children:t.three&&Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:"$"}),e.calculateValues(t.length,t.height,3)]})}),Object(b.jsx)("td",{children:t.four&&Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:"$"}),e.calculateValues(t.length,t.height,4)]})}),Object(b.jsx)("td",{children:t.five&&Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:"$"}),e.calculateValues(t.length,t.height,5)]})}),Object(b.jsx)("td",{children:t.additional&&Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:"+$"}),t.additional]})})]},t.count)}))}},{key:"render",value:function(){return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("div",{children:Object(b.jsx)("h1",{className:"text-center",children:"COST CALCULATION"})}),Object(b.jsx)("div",{children:Object(b.jsxs)("table",{cellSpacing:"0",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{cellSpacing:"0",children:[Object(b.jsx)("th",{children:"SIZE"}),Object(b.jsx)("th",{children:"ONE"}),Object(b.jsx)("th",{children:"three"}),Object(b.jsx)("th",{children:"THREE"}),Object(b.jsx)("th",{children:"FOUR"}),Object(b.jsx)("th",{children:"FIVE"}),Object(b.jsxs)("th",{children:["For Each Additional Subject",Object(b.jsx)("br",{}),Object(b.jsxs)("select",{id:"personOptions",value:"1",onChange:this.handleOptionChange,children:[Object(b.jsx)("option",{id:"default",value:"none",selected:!0,children:"Select an no of additional Subject "}),Object(b.jsx)("option",{value:"2",children:"2"}),Object(b.jsx)("option",{value:"3",children:"3"}),Object(b.jsx)("option",{value:"4",children:"4"}),Object(b.jsx)("option",{value:"5",children:"5"}),Object(b.jsx)("option",{value:"6",children:"6"}),Object(b.jsx)("option",{value:"7",children:"7"}),Object(b.jsx)("option",{value:"8",children:"8"}),Object(b.jsx)("option",{value:"9",children:"9"}),Object(b.jsx)("option",{value:"10",children:"10"}),Object(b.jsx)("option",{value:"11",children:"11"}),Object(b.jsx)("option",{value:"12",children:"12"}),Object(b.jsx)("option",{value:"13",children:"13"}),Object(b.jsx)("option",{value:"14",children:"14"}),Object(b.jsx)("option",{value:"15",children:"15"}),Object(b.jsx)("option",{value:"16",children:"16"}),Object(b.jsx)("option",{value:"17",children:"17"}),Object(b.jsx)("option",{value:"18",children:"18"}),Object(b.jsx)("option",{value:"19",children:"19"}),Object(b.jsx)("option",{value:"20",children:"20"})]})]})]})}),Object(b.jsx)("tbody",{children:this.tbody()})]})})]})}}]),n}(c.Component),g=function(e){Object(d.a)(n,e);var t=Object(o.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(b.jsx)(O,{})}}]),n}(c.Component),x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,l=t.getTTFB;n(e),c(e),i(e),a(e),l(e)}))};l.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(g,{})}),document.getElementById("root")),x()}},[[19,1,2]]]);
//# sourceMappingURL=main.b9032a7f.chunk.js.map