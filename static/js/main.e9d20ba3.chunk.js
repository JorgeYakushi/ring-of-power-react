(this["webpackJsonpring-of-power-client"]=this["webpackJsonpring-of-power-client"]||[]).push([[0],{28:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n(19),s=n.n(o),i=(n(28),n(8)),a=n(2),r=n(23),u=n(7),l="401443293564-80rhc66onvqaf7g73ibrk93o6uci5c1a.apps.googleusercontent.com",j="AIzaSyDnGCHStLetIN8L7Df7DK8-TgPc8A6iXCM",b=n(13);var p=function(e,t){var n=Object(c.useState)((function(){return function(e,t){return JSON.parse(localStorage.getItem(e)||"{}")||t}(e,t)})),o=Object(u.a)(n,2),s=o[0],i=o[1];return Object(c.useEffect)((function(){localStorage.setItem(e,JSON.stringify(s))}),[e,s]),[s,i]},g=n(1),h=l;var f=function(){var e=p("YoutubeLocal",{}),t=Object(u.a)(e,2),n=(t[0],t[1],Object(a.f)()),c=Object(b.useGoogleLogout)({clientId:h,onLogoutSuccess:function(e){localStorage.clear(),n.push("/login")},onFailure:function(){console.log("Handle failure cases")}}).signOut;return Object(g.jsxs)("button",{onClick:c,className:"button",children:[Object(g.jsx)("img",{src:"icons/google.svg",alt:"google login",className:"icon"}),Object(g.jsx)("span",{className:"buttonText",children:"Sign out"})]})},O=function(e){var t=e.videos;return Object(c.useEffect)((function(){})),Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("div",{className:"",children:t.items.map((function(e,t){var n,c;return Object(g.jsxs)("a",{className:"video",href:"https://www.youtube.com/watch?v="+e.contentDetails.videoId,children:[Object(g.jsx)("img",{src:(null===(n=e.snippet.thumbnails.maxres)||void 0===n?void 0:n.url)||(null===(c=e.snippet.thumbnails.high)||void 0===c?void 0:c.url),alt:e.snippet.title}),Object(g.jsx)("p",{className:"video__title",children:e.snippet.title}),Object(g.jsxs)("p",{children:[e.snippet.channelTitle," - ",e.snippet.publishedAt]})]})}))})})},d=function(){var e=Object(c.useState)((function(){var e=JSON.parse(localStorage.getItem("YoutubeLocal")||"{}");return 0!==Object.keys(e).length&&(console.log(e),e)})),t=Object(u.a)(e,2),n=t[0],o=(t[1],Object(c.useState)({})),s=Object(u.a)(o,2),i=(s[0],s[1]),l=Object(c.useState)([]),b=Object(u.a)(l,2),p=b[0],h=b[1];if(Object(c.useEffect)((function(){n&&m().then((function(e){i(e),console.log(e),e.items.map((function(e){e.contentDetails.newItemCount>0&&d(e.snippet.resourceId.channelId).then((function(e){h((function(t){return[].concat(Object(r.a)(t),[e])}))}))}))}))}),[]),!n)return Object(g.jsx)(a.a,{to:"/login"});var d=function(e){var t="UU"+e.substring(2),c="https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails%2Cstatus&playlistId=".concat(t,"&key=").concat(j," HTTP/1.1"),o={crossDomain:!0,method:"GET",headers:new Headers({Authorization:"Bearer "+n.accessToken,Accept:"application/json"})};return fetch(c,o).then((function(e){return e.json()})).then((function(e){return e}))},m=function(){var e="https://youtube.googleapis.com/youtube/v3/subscriptions?part=snippet%2CcontentDetails&mine=true&key=".concat(j),t={crossDomain:!0,method:"GET",headers:new Headers({Authorization:"Bearer "+n.accessToken,Accept:"application/json"})};return fetch(e,t).then((function(e){return e.json()})).then((function(e){return e}))};return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(f,{}),Object(g.jsx)("div",{className:"",children:n.profileObj.name}),p.map((function(e,t){return Object(g.jsx)(O,{videos:e},t)}))]})},m=function(){return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("div",{className:"",children:Object(g.jsx)(f,{})})})},x=function(){return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("div",{className:"",children:"Twitch"})})},v=n(17),w=n.n(v),S=n(22),I=l,y=function(){var e=p("YoutubeLocal",{}),t=Object(u.a)(e,2),n=(t[0],t[1]),c=Object(a.f)();var o=Object(b.useGoogleLogin)({onSuccess:function(e){n(e),function(e){var t=1e3*(e.tokenObj.expires_in||3300),n=function(){var c=Object(S.a)(w.a.mark((function c(){var o;return w.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,e.reloadAuthResponse();case 2:o=c.sent,t=1e3*(o.expires_in||3300),console.log("newAuthRes:",o),localStorage.setItem("authToken",o.id_token),setTimeout(n,t);case 7:case"end":return c.stop()}}),c)})));return function(){return c.apply(this,arguments)}}();setTimeout(n,t)}(e),c.push("/")},onFailure:function(e){console.log("Login failed: res:",e),alert("Failed to login. \ud83d\ude22 Please ping this to repo owner twitter.com/sivanesh_fiz")},clientId:I,isSignedIn:!0,accessType:"offline",scope:"https://www.googleapis.com/auth/youtube"}),s=o.signIn;return Object(g.jsxs)("button",{onClick:s,className:"button",children:[Object(g.jsx)("img",{src:"icons/google.svg",alt:"google login",className:"icon"}),Object(g.jsx)("span",{className:"buttonText",children:"Sign in with Google"})]})},N=function(){return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("div",{className:"",children:Object(g.jsx)(y,{})})})},T=function(){return Object(g.jsxs)(i.a,{children:[Object(g.jsx)(a.b,{exact:!0,path:"/",component:d}),Object(g.jsx)(a.b,{exact:!0,path:"/twitch",component:x}),Object(g.jsx)(a.b,{exact:!0,path:"/youtube",component:m}),Object(g.jsx)(a.b,{exact:!0,path:"/login",component:N})]})};var k=function(){return Object(g.jsx)("div",{children:Object(g.jsx)(T,{})})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,37)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),o(e),s(e),i(e)}))};s.a.render(Object(g.jsx)(i.a,{basename:"/ring-of-power-react",children:Object(g.jsx)(k,{})}),document.getElementById("root")),F()}},[[36,1,2]]]);
//# sourceMappingURL=main.e9d20ba3.chunk.js.map