(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{82:function(e,n,t){},83:function(e,n,t){"use strict";t.r(n);var a,r,o,i,c,s=t(0),l=t.n(s),p=t(15),u=t.n(p),h=t(4),d=t(5),g=t(7),b=t(6),m=t(11),x=(t(40),t(30)),f=t(8),j=t(9),y=j.a.header(a||(a=Object(f.a)(['\n  top: 0;\n  left: 0;\n  position: sticky;\n  z-index: 1100;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  color: #fff;\n  background-color: #3f51b5;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n  .SearchForm {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    max-width: 600px;\n    background-color: #fff;\n    border-radius: 3px;\n    overflow: hidden;\n  }\n  .SearchForm-button {\n    display: inline-block;\n    width: 48px;\n    height: 48px;\n    border: 0;\n    background-image: url("https://image.flaticon.com/icons/svg/149/149852.svg");\n    background-size: 40%;\n    background-repeat: no-repeat;\n    background-position: center;\n    opacity: 0.6;\n    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    cursor: pointer;\n    outline: none;\n  }\n\n  .SearchForm-button:hover {\n    opacity: 1;\n  }\n\n  .SearchForm-button-label {\n    position: absolute;\n    width: 1px;\n    height: 1px;\n    padding: 0;\n    overflow: hidden;\n    clip: rect(0, 0, 0, 0);\n    white-space: nowrap;\n    clip-path: inset(50%);\n    border: 0;\n  }\n\n  .SearchForm-input {\n    display: inline-block;\n    width: 100%;\n    font: inherit;\n    font-size: 20px;\n    border: none;\n    outline: none;\n    padding-left: 4px;\n    padding-right: 4px;\n  }\n\n  .SearchForm-input::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n']))),v=t(1),O=function(e){Object(g.a)(t,e);var n=Object(b.a)(t);function t(){var e;Object(h.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=n.call.apply(n,[this].concat(r))).state={searchQuery:""},e.handleInputChange=function(n){var t=n.target,a=t.value,r=t.name;e.setState(Object(x.a)({},r,a))},e.handelSubmit=function(n){n.preventDefault(),""!==e.state.searchQuery.trim("")?e.props.onSubmit(e.state.searchQuery):m.b.error("Enter search query")},e}return Object(d.a)(t,[{key:"render",value:function(){return Object(v.jsx)(y,{children:Object(v.jsxs)("form",{onSubmit:this.handelSubmit,className:"SearchForm",children:[Object(v.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(v.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(v.jsx)("input",{onChange:this.handleInputChange,value:this.state.searchQuery,name:"searchQuery",className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}}]),t}(s.Component),w=O,k=t(10),S=t.n(k),I=t(17),M=t(12),C=function(e){Object(g.a)(t,e);var n=Object(b.a)(t);function t(){var e;Object(h.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=n.call.apply(n,[this].concat(r))).onImgClick=function(n){e.props.toggleModal(n.target.getAttribute("image"))},e}return Object(d.a)(t,[{key:"render",value:function(){var e=this;return Object(v.jsx)(v.Fragment,{children:this.props.galleryList.map((function(n){return Object(v.jsx)("li",{className:"ImageGalleryItem",children:Object(v.jsx)("img",{src:n.smallImg,alt:"",className:"ImageGalleryItem-image",onClick:e.onImgClick,image:n.bigImg})},n.id)}))})}}]),t}(s.Component),L=C,z=j.a.ul(r||(r=Object(f.a)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  grid-gap: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 30px 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n  .ImageGalleryItem {\n    border-radius: 2px;\n    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n  }\n\n  .ImageGalleryItem-image {\n    width: 100%;\n    height: 260px;\n    object-fit: cover;\n    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  }\n\n  .ImageGalleryItem-image:hover {\n    transform: scale(1.03);\n    cursor: zoom-in;\n  }\n\n  .Overlay {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: rgba(0, 0, 0, 0.8);\n    z-index: 1200;\n  }\n\n  .Modal {\n    max-width: calc(100vw - 48px);\n    max-height: calc(100vh - 24px);\n  }\n"]))),F=j.a.button(o||(o=Object(f.a)(["\n  padding: 8px 16px;\n  margin-bottom: 30px;\n  margin-left: 50%;\n  transform: translate(-50%);\n  border-radius: 2px;\n  background-color: #3f51b5;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  text-align: center;\n  display: inline-block;\n  color: #fff;\n  border: 0;\n  text-decoration: none;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 18px;\n  line-height: 24px;\n  font-style: normal;\n  font-weight: 500;\n  min-width: 180px;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n\n  &:hover,\n  &:focus {\n    background-color: #303f9f;\n  }\n"]))),Q=j.a.div(i||(i=Object(f.a)(["\n  width: 40px;\n  margin-left: 50%;\n  transform: translate(-50%);\n\n  margin-bottom: 30px;\n"]))),E=t(34),N=t.n(E),A=function(){var e=Object(M.a)(S.a.mark((function e(n,t){var a,r;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.get("".concat("https://pixabay.com/api","/?q=").concat(t,"&page=").concat(n,"&key=").concat("23271163-2ca32ba12cffdc2e109d4f4b6","&image_type=photo&orientation=horizontal&per_page=12"));case 3:return a=e.sent,r=D(a.data),e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n,t){return e.apply(this,arguments)}}(),D=function(e){var n=e.hits,t=e.total;return{normalizeData:n.map((function(e){return{id:e.id,smallImg:e.webformatURL,bigImg:e.largeImageURL}})),total:t}},G=(t(61),t(35)),P=t.n(G),q=function(e){Object(g.a)(t,e);var n=Object(b.a)(t);function t(){var e;Object(h.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=n.call.apply(n,[this].concat(r))).state={page:1,gallery:[],isLoading:!1,totalPage:1},e.onLoadMoreClick=Object(M.a)(S.a.mark((function n(){var t,a;return S.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.setState({isLoading:!0}),n.next=3,A(e.state.page+1,e.props.searchQuery.trim(""));case 3:t=n.sent,a=t.normalizeData,e.setState({page:e.state.page+1,gallery:[].concat(Object(I.a)(e.state.gallery),Object(I.a)(a)),isLoading:!1}),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"});case 7:case"end":return n.stop()}}),n)}))),e}return Object(d.a)(t,[{key:"componentDidUpdate",value:function(){var e=Object(M.a)(S.a.mark((function e(n,t){var a,r;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.searchQuery!==this.props.searchQuery){e.next=2;break}return e.abrupt("return");case 2:return this.setState({page:1,isLoading:!0,gallery:[]}),e.next=5,A(1,this.props.searchQuery.trim(""));case 5:if(a=e.sent,r=a.normalizeData,this.setState({gallery:Object(I.a)(r),isLoading:!1,total:a.total,totalPage:Math.ceil(a.total/12)}),0!==this.state.gallery.length){e.next=12;break}return m.b.error("Please enter valid search query"),this.setState({totalPage:1}),e.abrupt("return");case 12:case"end":return e.stop()}}),e,this)})));return function(n,t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(z,{children:Object(v.jsx)(L,{galleryList:this.state.gallery,toggleModal:this.props.toggleModal})}),this.state.isLoading&&Object(v.jsx)(Q,{children:Object(v.jsx)(P.a,{type:"Oval",color:"#3f51b5",height:40,width:40})}),this.state.page!==this.state.totalPage&&!this.state.isLoading&&Object(v.jsx)(F,{type:"button",onClick:this.onLoadMoreClick,className:"Button",children:"Load More"})]})}}]),t}(s.Component),H=q,U=j.a.div(c||(c=Object(f.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 1200;\n\n  .Modal {\n    max-width: calc(100vw - 48px);\n    max-height: calc(100vh - 24px);\n  }\n"]))),B=document.querySelector("body"),J=function(e){Object(g.a)(t,e);var n=Object(b.a)(t);function t(){var e;Object(h.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=n.call.apply(n,[this].concat(r))).state={},e.onHandleEscape=function(n){return"Escape"===n.code&&e.props.toggleModal()},e.onOverlayClick=function(n){return n.target===n.currentTarget&&e.props.toggleModal()},e}return Object(d.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.onHandleEscape),B.style.overflow="hidden"}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.onHandleEscape),B.style.overflow="auto"}},{key:"render",value:function(){return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(U,{onClick:this.onOverlayClick,children:Object(v.jsx)("div",{className:"Modal",children:Object(v.jsx)("img",{src:this.props.image,alt:""})})})})}}]),t}(s.Component),R=J,T=function(e){Object(g.a)(t,e);var n=Object(b.a)(t);function t(){var e;Object(h.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=n.call.apply(n,[this].concat(r))).state={searchQuery:"",isModalOpen:!1,bigImg:""},e.onSubmitSearch=function(n){e.setState({searchQuery:n})},e.toggleModal=function(n){e.setState((function(e){return{isModalOpen:!e.isModalOpen,bigImg:n}}))},e}return Object(d.a)(t,[{key:"render",value:function(){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(w,{onSubmit:this.onSubmitSearch}),Object(v.jsx)(H,{searchQuery:this.state.searchQuery,toggleModal:this.toggleModal}),Object(v.jsx)(m.a,{theme:"colored",autoClose:3e3}),this.state.isModalOpen&&Object(v.jsx)(R,{image:this.state.bigImg,toggleModal:this.toggleModal})]})}}]),t}(s.Component),_=T;t(82);u.a.render(Object(v.jsx)(l.a.StrictMode,{children:Object(v.jsx)(_,{})}),document.getElementById("root"))}},[[83,1,2]]]);
//# sourceMappingURL=main.fad3b322.chunk.js.map