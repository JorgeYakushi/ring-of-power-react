(this["webpackJsonpring-of-power-client"]=this["webpackJsonpring-of-power-client"]||[]).push([[0],{28:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n.n(c),s=n(19),i=n.n(s),a=(n(28),n(9)),r=n(2),u=n(23),l=n(7),j="401443293564-80rhc66onvqaf7g73ibrk93o6uci5c1a.apps.googleusercontent.com",b="AIzaSyDnGCHStLetIN8L7Df7DK8-TgPc8A6iXCM",p=n(13);var g=function(e,t){var n=Object(c.useState)((function(){return function(e,t){return JSON.parse(localStorage.getItem(e)||"{}")||t}(e,t)})),o=Object(l.a)(n,2),s=o[0],i=o[1];return Object(c.useEffect)((function(){localStorage.setItem(e,JSON.stringify(s))}),[e,s]),[s,i]},h=n(1),f=j;var O=function(){var e=g("YoutubeLocal",{}),t=Object(l.a)(e,2),n=(t[0],t[1],Object(r.f)()),c=Object(p.useGoogleLogout)({clientId:f,onLogoutSuccess:function(e){localStorage.clear(),n.push("/login")},onFailure:function(){console.log("Handle failure cases")}}).signOut;return Object(h.jsxs)("button",{onClick:c,className:"button",children:[Object(h.jsx)("img",{src:"icons/google.svg",alt:"google login",className:"icon"}),Object(h.jsx)("span",{className:"buttonText",children:"Sign out"})]})},d=function(e){var t=e.videos;return Object(c.useEffect)((function(){})),Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{className:"",children:t.items.map((function(e,t){var n,c;return Object(h.jsxs)("a",{href:"https://www.youtube.com/watch?v="+e.contentDetails.videoId,children:[Object(h.jsx)("img",{src:(null===(n=e.snippet.thumbnails.maxres)||void 0===n?void 0:n.url)||(null===(c=e.snippet.thumbnails.high)||void 0===c?void 0:c.url),alt:e.snippet.title}),Object(h.jsx)("p",{className:"video__title",children:e.snippet.title}),Object(h.jsxs)("p",{children:[e.snippet.channelTitle," - ",e.snippet.publishedAt]})]})}))})})},m=function(){var e=Object(c.useState)((function(){var e=JSON.parse(localStorage.getItem("YoutubeLocal")||"{}");return 0!==Object.keys(e).length&&(console.log(e),e)})),t=Object(l.a)(e,2),n=t[0],o=(t[1],Object(c.useState)({})),s=Object(l.a)(o,2),i=(s[0],s[1]),a=Object(c.useState)([]),j=Object(l.a)(a,2),p=j[0],g=j[1];if(Object(c.useEffect)((function(){n&&m().then((function(e){i(e),console.log(e),e.items.map((function(e){e.contentDetails.newItemCount>0&&f(e.snippet.resourceId.channelId).then((function(e){g((function(t){return[].concat(Object(u.a)(t),[e])}))}))}))}))}),[]),!n)return Object(h.jsx)(r.a,{to:"/login"});var f=function(e){var t="UU"+e.substring(2),c="https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails%2Cstatus&playlistId=".concat(t,"&key=").concat(b," HTTP/1.1"),o={crossDomain:!0,method:"GET",headers:new Headers({Authorization:"Bearer "+n.accessToken,Accept:"application/json"})};return fetch(c,o).then((function(e){return e.json()})).then((function(e){return e}))},m=function(){var e="https://youtube.googleapis.com/youtube/v3/subscriptions?part=snippet%2CcontentDetails&mine=true&key=".concat(b),t={crossDomain:!0,method:"GET",headers:new Headers({Authorization:"Bearer "+n.accessToken,Accept:"application/json"})};return fetch(e,t).then((function(e){return e.json()})).then((function(e){return e}))};return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(O,{}),Object(h.jsx)("div",{className:"",children:n.profileObj.name}),p.map((function(e,t){return Object(h.jsx)(d,{videos:e},t)}))]})},x=function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{className:"",children:Object(h.jsx)(O,{})})})},v=function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{className:"",children:"Twitch"})})},w=n(17),S=n.n(w),I=n(22),y=j,T=function(){var e=g("YoutubeLocal",{}),t=Object(l.a)(e,2),n=(t[0],t[1]),c=Object(r.f)();var o=Object(p.useGoogleLogin)({onSuccess:function(e){n(e),function(e){var t=1e3*(e.tokenObj.expires_in||3300),n=function(){var c=Object(I.a)(S.a.mark((function c(){var o;return S.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,e.reloadAuthResponse();case 2:o=c.sent,t=1e3*(o.expires_in||3300),console.log("newAuthRes:",o),localStorage.setItem("authToken",o.id_token),setTimeout(n,t);case 7:case"end":return c.stop()}}),c)})));return function(){return c.apply(this,arguments)}}();setTimeout(n,t)}(e),c.push("/")},onFailure:function(e){console.log("Login failed: res:",e),alert("Failed to login. \ud83d\ude22 Please ping this to repo owner twitter.com/sivanesh_fiz")},clientId:y,isSignedIn:!0,accessType:"offline",scope:"https://www.googleapis.com/auth/youtube"}),s=o.signIn;return Object(h.jsxs)("button",{onClick:s,className:"button",children:[Object(h.jsx)("img",{src:"icons/google.svg",alt:"google login",className:"icon"}),Object(h.jsx)("span",{className:"buttonText",children:"Sign in with Google"})]})},N=function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{className:"",children:Object(h.jsx)(T,{})})})},k=function(){return Object(h.jsxs)(a.a,{children:[Object(h.jsx)(r.b,{exact:!0,path:"/",component:m}),Object(h.jsx)(r.b,{exact:!0,path:"/twitch",component:v}),Object(h.jsx)(r.b,{exact:!0,path:"/youtube",component:x}),Object(h.jsx)(r.b,{exact:!0,path:"/login",component:N})]})};var F=function(){return Object(h.jsx)("div",{children:Object(h.jsx)(k,{})})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,37)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),o(e),s(e),i(e)}))};i.a.render(Object(h.jsx)(o.a.StrictMode,{children:Object(h.jsx)(F,{})}),document.getElementById("root")),C()}},[[36,1,2]]]);
//# sourceMappingURL=main.76ee01bd.chunk.js.map