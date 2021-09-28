(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{19:function(e,t,n){"use strict";(function(e){var c=n(4),a=n.n(c),s=n(5),i=n(3),r=n(1),l=n(0);t.a=function(t){var n=t.image,c=Object(r.useState)(!1),o=Object(i.a)(c,2),j=o[0],d=o[1],u=e.from(n.imgData),m=new Blob([u],{type:n.imgType}),b=URL.createObjectURL(m);console.log("imageUrl:",b);var p=function(){var e=Object(s.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!("clipboard"in navigator)){e.next=6;break}return e.next=3,navigator.clipboard.writeText(t);case 3:return e.abrupt("return",e.sent);case 6:return e.abrupt("return",document.execCommand("copy",!0,t));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(l.jsxs)("div",{className:"item image",children:[Object(l.jsx)("img",{src:b,alt:"gallery image"}),Object(l.jsxs)("div",{className:"item-overlay",children:[Object(l.jsx)("h3",{className:"item-title",children:n.fileName}),Object(l.jsxs)("ul",{className:"item-list",children:[Object(l.jsxs)("li",{children:[Object(l.jsx)("span",{className:"item-key",children:"size:"}),Object(l.jsxs)("span",{children:[(n.fileSize/1048576).toFixed(2)," MB"]})]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("span",{className:"item-key",children:"source:"}),Object(l.jsx)("span",{children:n.imgSource})]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("span",{className:"item-key",children:"uploaded at:"}),Object(l.jsx)("span",{children:new Date(n.uploadedAt).toDateString()})]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("span",{className:"item-key",children:"dimensions:"}),Object(l.jsxs)("span",{children:[n.imgWidth," x ",n.imgHeight]})]})]}),Object(l.jsxs)("div",{className:"item-desc",children:[Object(l.jsx)("h3",{children:"Description"}),Object(l.jsx)("p",{children:n.imgDesc})]}),j?Object(l.jsx)("span",{className:"item-link",children:"Copied"}):Object(l.jsx)("img",{src:"./images/link.svg",className:"item-link",alt:"",onClick:function(){p(b).then((function(){d(!0),setTimeout((function(){d(!1)}),1500)})).catch((function(e){console.log(e)}))}})]})]})}}).call(this,n(46).Buffer)},24:function(e,t,n){},45:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(18),i=n.n(s),r=(n(24),n(4)),l=n.n(r),o=n(5),j=n(3),d=n(6),u=n.n(d),m=(n(45),n(7)),b=n(19),p=n(0),g=function(e){e.isOpen;var t=e.setIsOpen,n=e.images;return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{className:"gallery",children:[Object(p.jsx)("div",{className:"item open-modal",onClick:function(){t(!0)},children:Object(p.jsx)(m.a,{})}),n.length>0?n.map((function(e,t){return Object(p.jsx)(b.a,{image:e},t)})):Object(p.jsx)("h3",{children:"No images to display"})]})})},h=function(e){var t=e.isOpen,n=e.setIsOpen,a=(e.setImages,Object(c.useState)(null)),s=Object(j.a)(a,2),i=s[0],r=s[1],d=Object(c.useState)(""),b=Object(j.a)(d,2),g=b[0],h=b[1],O=Object(c.useState)(""),x=Object(j.a)(O,2),f=x[0],v=x[1],y=Object(c.useState)(""),N=Object(j.a)(y,2),k=N[0],w=N[1],S=Object(c.useState)(!1),C=Object(j.a)(S,2),D=C[0],I=C[1],F=Object(c.useRef)(null),T=function(e){return new Promise((function(t,n){var c=new FileReader;c.readAsDataURL(e),c.onloadend=function(){var e=new Image;e.src=c.result,e.onload=function(){var n=String(e.naturalWidth),c=String(e.naturalHeight);t({imgWidth:n,imgHeight:c})}},c.onerror=function(){n(Error("getImageDimension failed"))}}))},L=function(){r(null),n(!1),w(""),v(""),I(!1)},R=function(){var e=Object(o.a)(l.a.mark((function e(t){var n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,T(i);case 3:return n=e.sent,(c=new FormData).append("file",i),c.append("imgType",g),c.append("imgHeight",null===n||void 0===n?void 0:n.imgHeight),c.append("imgWidth",null===n||void 0===n?void 0:n.imgWidth),c.append("imgDesc",k),e.prev=10,e.next=13,u.a.post("http://localhost:5000/images/upload",c,{headers:{"Content-Type":"multipart/form-data"}});case 13:e.sent,window.location.reload(),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(10),console.log(e.t0);case 20:L();case 21:case"end":return e.stop()}}),e,null,[[10,17]])})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsx)("div",{className:"modal-overlay",style:{display:t?"block":"none"},children:Object(p.jsxs)("div",{className:"modal-content",children:[Object(p.jsx)("h3",{children:"New Image"}),Object(p.jsx)("input",{ref:F,type:"file",name:"file",style:{display:"none"},onChange:function(e){console.log("onchange called");var t=e.currentTarget.files[0];if(t&&["image/png","image/jpeg","image/jpg"].includes(t.type)){r(t),h(t.type),console.log(t);var n=new FileReader;n.readAsDataURL(t),n.onloadend=function(){v(n.result)}}else I(!0),console.log("selected file is not allowed")}}),Object(p.jsxs)("div",{className:"add-image-box",children:[Object(p.jsx)("div",{className:"add-image-icon",onClick:function(){var e;null===(e=F.current)||void 0===e||e.click()},children:f?Object(p.jsx)("img",{src:f,width:"100px",alt:"image preview"}):Object(p.jsx)(m.a,{})}),Object(p.jsx)("p",{children:Object(p.jsx)("small",{style:{color:D?"red":"inherit"},children:"Only jpg or png"})})]}),Object(p.jsxs)("div",{className:"desc",children:[Object(p.jsx)("p",{children:"Description"}),Object(p.jsx)("textarea",{onChange:function(e){return w(e.target.value)},value:k,name:"desc",cols:40,rows:8})]}),Object(p.jsxs)("div",{className:"modal-footer",children:[Object(p.jsxs)("small",{children:["By uploading an image, you accept our ",Object(p.jsx)("span",{children:"Terms"})]}),Object(p.jsx)("button",{className:"modal-btn",onClick:R,disabled:null===i,children:"Save"})]}),Object(p.jsx)("div",{className:"modal-close",onClick:function(){L()},children:"X"})]})})},O=function(){return Object(p.jsx)("nav",{children:Object(p.jsxs)("div",{className:"container nav",children:[Object(p.jsx)("img",{src:"./images/lime.svg",alt:"Lime logo",className:"logo"}),Object(p.jsx)("h1",{className:"brand",children:"LimeCRM"})]})})},x=function(){var e=Object(c.useState)(!1),t=Object(j.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)([]),i=Object(j.a)(s,2),r=i[0],d=i[1];Object(c.useEffect)((function(){m()}),[]);var m=function(){var e=Object(o.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.get("http://localhost:5000/images");case 3:t=e.sent,d(t.data),console.log("results:",t.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("Something totally broke",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{className:"app",children:[Object(p.jsx)(O,{}),Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)("h1",{className:"heading",children:"Uploaded Images"}),Object(p.jsx)(g,{isOpen:n,setIsOpen:a,images:r})]}),Object(p.jsx)(h,{isOpen:n,setIsOpen:a,setImages:d})]})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,53)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),s(e),i(e)}))};i.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(x,{})}),document.getElementById("root")),f()}},[[52,1,2]]]);
//# sourceMappingURL=main.93f436da.chunk.js.map