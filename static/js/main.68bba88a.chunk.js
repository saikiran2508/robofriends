(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(4),a=n.n(s),o=(n(13),n(5)),i=n(6),h=n(8),l=n(7),b=n(0),d=function(e){var t=e.name,n=e.email,c=e.id;return Object(b.jsxs)("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw-2 shadow-5 tc",children:[Object(b.jsx)("img",{src:"https://robohash.org/".concat(c,"?size=200x200"),alt:"robo img"}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:t}),Object(b.jsx)("p",{children:n})]})]})},u=function(e){var t=e.robots;return Object(b.jsx)("div",{children:t.map((function(e,n){return Object(b.jsx)(d,{id:t[n].id,name:t[n].name,email:t[n].email},n)}))})},j=(n(3),function(e){var t=e.searchChange;return Object(b.jsx)("div",{className:"pa2",children:Object(b.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t})})}),f=(n(15),function(e){return Object(b.jsx)("div",{style:{overflowY:"scroll",border:"1px solid black",height:"500px"},children:e.children})}),g=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchField:t.target.value})},e.state={robots:[],searchField:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchField,c=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return t.length?Object(b.jsxs)("div",{className:"tc",children:[Object(b.jsx)("h1",{className:"f1",children:"ROBOFRIENDS"}),Object(b.jsx)(j,{searchChange:this.onSearchChange}),Object(b.jsx)(f,{children:Object(b.jsx)(u,{robots:c})})]}):Object(b.jsx)("h1",{children:"Loading"})}}]),n}(r.a.Component),O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))};a.a.render(Object(b.jsx)(g,{}),document.getElementById("root")),O()}},[[16,1,2]]]);
//# sourceMappingURL=main.68bba88a.chunk.js.map