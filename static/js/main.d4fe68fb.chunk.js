(this.webpackJsonpgithublense=this.webpackJsonpgithublense||[]).push([[0],{34:function(e,t,c){},35:function(e,t,c){},56:function(e,t,c){},65:function(e,t,c){"use strict";c.r(t);var s,n,a=c(1),r=c.n(a),i=c(27),j=c.n(i),l=(c(34),c(6)),b=(c(35),c(9)),o=c.n(b),d=c(13),h=c(10),u=c(14),O=c.n(u),x=Object(a.createContext)(),m="SEARCH_USERS",p="GET_USER",g="CLEAR_USERS",f="GET_REPOS",v="SET_LOADING",N="SET_ALERT",_="REMOVE_ALERT",E=function(e,t){switch(t.type){case m:return Object(l.a)(Object(l.a)({},e),{},{users:t.payload,loading:!1});case p:return Object(l.a)(Object(l.a)({},e),{},{user:t.payload,loading:!1});case f:return Object(l.a)(Object(l.a)({},e),{},{repos:t.payload,loading:!1});case g:return Object(l.a)(Object(l.a)({},e),{},{users:[]});case v:return Object(l.a)(Object(l.a)({},e),{},{loading:!0});default:return{state:e}}},T=c(0);s=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_GITHUB_CLIENT_ID:"2f6335c05344d608820d",REACT_APP_GITHUB_CLIENT_SECRET:"fffa5069aade79c88f392cfd3429fd96baa503c7"}).GITHUB_CLIENT_ID,n=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_GITHUB_CLIENT_ID:"2f6335c05344d608820d",REACT_APP_GITHUB_CLIENT_SECRET:"fffa5069aade79c88f392cfd3429fd96baa503c7"}).GITHUB_CLIENT_SECRET;var S=function(e){var t=Object(a.useReducer)(E,{users:[],user:{},repos:[],loading:!1}),c=Object(h.a)(t,2),r=c[0],i=c[1],j=function(){var e=Object(d.a)(o.a.mark((function e(t){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(),e.next=3,O.a.get("https://api.github.com/search/users?q=".concat(t,"&client_id=").concat(s,"&client?secret=").concat(n));case 3:c=e.sent,i({type:m,payload:c.data.items});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Object(d.a)(o.a.mark((function e(t){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(),e.next=3,O.a.get("https://api.github.com/users/".concat(t,"?client_id=").concat(s,"&client?secret=").concat(n));case 3:c=e.sent,i({type:p,payload:c.data});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(d.a)(o.a.mark((function e(t){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(),e.next=3,O.a.get("https://api.github.com/users/".concat(t,"/repos?per_page=5&sort=created:asc&client_id=").concat(s,"&client?secret=").concat(n));case 3:c=e.sent,i({type:f,payload:c.data});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){return i({type:v})};return Object(T.jsx)(x.Provider,{value:{users:r.users,user:r.user,repos:r.repos,loading:r.loading,searchUsers:j,getUser:l,getUserrepos:b,clearUsers:function(){return i({type:g})}},children:e.children})},y=Object(a.createContext)(),C=function(e,t){switch(t.type){case N:return t.payload;case _:return null;default:return e}},k=function(e){var t=Object(a.useReducer)(C,null),c=Object(h.a)(t,2),s=c[0],n=c[1];return Object(T.jsx)(y.Provider,{value:{alert:s,setAlert:function(e,t){n({type:N,payload:{msg:e,type:t}}),setTimeout((function(){return n({type:_})}),2e3)}},children:e.children})},w=c(7),A=c(2),R=(c(56),function(e){return Object(T.jsx)("nav",{className:"navbar",children:Object(T.jsxs)("div",{className:"navbar-content",children:[Object(T.jsx)("i",{id:"navbar-icon",className:e.icon}),Object(T.jsx)(w.b,{to:"/",children:Object(T.jsx)("div",{className:"navbar-btn",children:e.home})}),Object(T.jsx)(w.b,{to:"/About",children:Object(T.jsx)("div",{className:"navbar-btn",children:e.about})})]})})});R.defaultProps={home:"Home",about:"About",useer:"User",icon:"fa fa-github"};var U=R;function H(e){return Object(T.jsx)("div",{className:"brand-name",children:e.title})}var F=c.p+"static/media/spinner34.5b35cef0.gif",L=function(){return Object(T.jsxs)("div",{className:"container",children:[Object(T.jsx)("p",{id:"mining",children:"Mining..."}),Object(T.jsx)("img",{src:F,alt:"Loading...",style:{width:"200px",margin:"auto"}})]})},P=c(8),I=c.n(P),G=function(e){var t=e.repo,c=Object(a.useContext)(x).user.login;return Object(T.jsx)("div",{className:"badge",children:Object(T.jsxs)("a",{className:"links",href:"https://github.com/".concat(c,"/").concat(t.name),children:[t.name," "]})})};G.propType={repo:I.a.object.isRequired};var D=G,B=function(){return Object(a.useContext)(x).repos.map((function(e){return Object(T.jsx)(D,{repo:e},e.id)}))};function M(e){var t=e.match,c=Object(a.useContext)(x);Object(a.useEffect)((function(){c.getUser(t.params.login),c.getUserrepos(t.params.login)}),[]);var s=c.user,n=s.name,r=s.avatar_url,i=s.company,j=s.location,l=s.bio,b=s.blog,o=s.login,d=s.html_url,h=s.followers,u=s.following,O=s.public_repos,m=s.public_gists,p=s.hireable;if("SushantPhalke"===o)var g=!0;return c.loading?Object(T.jsxs)(T.Fragment,{children:[Object(T.jsxs)("div",{className:"brand-and-nav",children:[Object(T.jsx)(U,{home:"Home",about:"About Me",icon:"fa fa-github"}),Object(T.jsx)(H,{title:"GitHub Lense"})]}),Object(T.jsx)("div",{className:"user-container",children:Object(T.jsx)(L,{})})]}):Object(T.jsxs)(T.Fragment,{children:[Object(T.jsxs)("div",{className:"brand-and-nav",children:[Object(T.jsx)(U,{home:"Home",about:"About Me",icon:"fa fa-github"}),Object(T.jsx)(H,{title:"GitHub Lense"})]}),Object(T.jsx)(w.b,{to:"/",children:Object(T.jsx)("div",{className:"back2home",children:"Back To Home"})}),Object(T.jsxs)("div",{className:"user-container",children:[Object(T.jsxs)("div",{className:"user-card-left",children:[Object(T.jsx)("img",{src:r,alt:"img is not avilable",className:"round-img",style:{width:"150px"}}),Object(T.jsxs)("h3",{children:["Name : ",n]}),g?Object(T.jsxs)("h3",{children:["Username : ",o," ",Object(T.jsx)("br",{}),"\ud83d\udd30Developer of GitHub Lense"," "]}):Object(T.jsxs)("h3",{children:[" Username: ",o]}),Object(T.jsxs)("h5",{children:[Object(T.jsx)("div",{className:"badge badge-success",children:Object(T.jsxs)("a",{href:"https://github.com/".concat(o,"?tab=followers"),children:[" ","\ud83d\udef0",h," Followers"," "]})}),Object(T.jsx)("br",{}),Object(T.jsx)("div",{className:"badge badge-success",children:Object(T.jsxs)("a",{href:"https://github.com/".concat(o,"?tab=following"),children:[" ","\ud83c\udfa6",u," Following"," "]})}),Object(T.jsx)("br",{}),Object(T.jsxs)("div",{className:"badge badge-dark",children:["Hireable ",p?Object(T.jsx)(T.Fragment,{children:": \u2714 "}):Object(T.jsx)(T.Fragment,{children:": \u274c "})]}),Object(T.jsx)("br",{})]}),Object(T.jsxs)("h4",{children:["Location : ",j]}),Object(T.jsx)("h3",{children:"Recent Repositories "}),Object(T.jsx)(B,{repos:c.repos})]}),Object(T.jsxs)("div",{className:"user-card-right",children:[Object(T.jsxs)("ul",{children:[Object(T.jsx)("li",{children:l&&Object(T.jsxs)(a.Fragment,{children:[Object(T.jsx)("h3",{children:"Bio"}),Object(T.jsx)("p",{children:l})]})}),Object(T.jsx)("li",{children:i&&Object(T.jsxs)(a.Fragment,{children:[Object(T.jsx)("h3",{children:"Company"}),Object(T.jsx)("p",{children:i})]})}),Object(T.jsx)("li",{children:b&&Object(T.jsxs)(a.Fragment,{children:[Object(T.jsx)("h3",{children:"Blog"}),Object(T.jsxs)("a",{href:b,className:"links",children:[" ",Object(T.jsx)("p",{children:b})]})]})}),Object(T.jsx)("li",{children:O&&Object(T.jsxs)(a.Fragment,{children:[Object(T.jsx)("h3",{children:"Public Repositories"}),Object(T.jsx)("p",{children:O})]})}),Object(T.jsx)("li",{children:m&&Object(T.jsxs)(a.Fragment,{children:[Object(T.jsx)("h3",{children:"Public Gists"}),Object(T.jsx)("p",{children:m})]})}),Object(T.jsx)("li",{children:Object(T.jsx)("a",{href:d,className:"btn btn-dark btn-sm my-2",children:"View On Github"})})]}),Object(T.jsx)("p",{align:"center",children:Object(T.jsx)("img",{width:"100",src:"https://github-readme-stats.vercel.app/api/top-langs/?username=".concat(o,"&langs_count=10&layout=compact&theme=tokyonight"),alt:"".concat(n," most used Languages")})}),Object(T.jsx)("p",{align:"center",children:Object(T.jsx)("img",{width:"100",src:"https://github-readme-stats.vercel.app/api?username=".concat(o,"&theme=dark&show_icons=true"),alt:"".concat(n," github stats")})})]})]})]})}var K=function(){var e=Object(a.useContext)(y).alert;return null!==e&&Object(T.jsxs)("div",{id:"alertmsg",className:"alert alert-".concat(e.type),children:[Object(T.jsx)("i",{className:"fa fa-info-circle"})," ",e.msg]})},W=c.p+"static/media/search34.29e3b455.gif",V=function(e){return Object(T.jsx)("div",{className:"user-container",children:Object(T.jsx)("img",{src:W,alt:"Use Search Bar....",style:{width:"200px",margin:"auto",justifyContent:"center",textAlign:"center"}})})};function q(e){var t=Object(a.useContext)(x),c=Object(a.useContext)(y),s=Object(a.useState)(""),n=Object(h.a)(s,2),r=n[0],i=n[1];return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)("div",{className:"search-console",children:Object(T.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault(),""===r?c.setAlert("Username Field should not be blank","light"):(t.searchUsers(r),i(""))},children:[Object(T.jsx)("input",{id:"username-input",type:"text",name:"text",value:r,placeholder:"Enter Github Username...",onChange:function(e){i(e.target.value)}}),Object(T.jsx)("input",{type:"submit",value:"Search",className:"btn btn-dark"}),t.users.length>0&&Object(T.jsx)("button",{className:"btn btn-dark",onClick:t.clearUsers,children:"Clear"})]})}),0===t.users.length&&Object(T.jsx)("div",{children:Object(T.jsx)(V,{})})]})}var J=function(e){var t=e.user,c=t.login,s=t.avatar_url;t.html_url;return Object(T.jsxs)("div",{className:"card text-center",children:[Object(T.jsx)("img",{src:s,alt:"img is not avilable",className:"round-img",style:{width:"60px"}}),Object(T.jsx)("h3",{children:c}),Object(T.jsx)(w.b,{to:"/user/".concat(c),className:"btn btn-dark btn-sm my-1",children:"More"})]})};J.propType={user:I.a.array};var X=J,z=function(){var e=Object(a.useContext)(x),t=e.loading,c=e.users;return t?Object(T.jsx)("div",{className:"user-container",children:Object(T.jsx)(L,{})}):Object(T.jsx)("div",{className:"grid-3",children:c.map((function(e){return Object(T.jsx)(X,{user:e},e.id)}))})};function Q(){return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsxs)("div",{className:"brand-and-nav",children:[Object(T.jsx)(U,{home:"Home",about:"About Me",icon:"fa fa-github"}),Object(T.jsx)(H,{title:"GitHub Lense"}),Object(T.jsxs)("div",{className:"search-users",children:[Object(T.jsx)(K,{}),Object(T.jsx)(q,{})]})]}),Object(T.jsx)("div",{className:"user-container",children:Object(T.jsx)(z,{})})]})}var Y=c.p+"static/media/sushant_photo.123bce68.jpg";function Z(){return Object(T.jsx)("div",{children:Object(T.jsxs)("div",{className:"user-container",children:[Object(T.jsxs)("div",{id:"name",children:[Object(T.jsx)("hr",{}),Object(T.jsx)("h1",{children:"Sushant Phalke"}),Object(T.jsx)("hr",{})]}),Object(T.jsxs)("div",{className:"about-container",children:[Object(T.jsxs)("div",{id:"childdiv1",children:["\ud83c\udf10 Computer science Engineer ",Object(T.jsx)("br",{}),"\ud83d\udd30 Government College of Engineering ",Object(T.jsx)("br",{}),"\ud83d\udd2f Full Stack Developer ",Object(T.jsx)("br",{}),"\ud83c\udff0 UI / UX Designer"]}),Object(T.jsx)("div",{id:"childdiv2",children:Object(T.jsx)("div",{className:"details",children:Object(T.jsx)("img",{id:"photo",src:Y,alt:""})})}),Object(T.jsxs)("div",{id:"childdiv3",children:[Object(T.jsxs)("p",{align:"center",className:"card my-3",children:[Object(T.jsx)("a",{href:"https://www.linkedin.com/in/sushantphalke/",children:Object(T.jsx)("i",{id:"navbar-icon",className:"fa fa-linkedin",alt:"linkedin"})}),Object(T.jsx)("a",{href:"https://twitter.com/Sushant57204067",children:Object(T.jsx)("i",{id:"navbar-icon",className:"fa fa-twitter",alt:"twitter"})}),Object(T.jsx)("a",{href:"https://telegram.me/sushantphalke",children:Object(T.jsx)("i",{id:"navbar-icon",className:"fa fa-telegram",alt:"telegram"})})]}),Object(T.jsxs)("div",{className:"user-card-right",children:[Object(T.jsx)("p",{align:"center",children:Object(T.jsx)("img",{width:"100",src:"https://github-readme-stats.vercel.app/api/top-langs/?username=SushantPhalke&langs_count=10&layout=compact&theme=tokyonight",alt:"Sushant's most used Languages"})}),Object(T.jsx)("p",{align:"center",children:Object(T.jsx)("img",{width:"100",src:"https://github-readme-stats.vercel.app/api?username=sushantphalke&theme=dark&show_icons=true",alt:"Susahnt's github stats"})})]})]})]})]})})}function $(){return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsxs)("div",{className:"brand-and-nav",children:[Object(T.jsx)(U,{home:"Home",about:"About Me",icon:"fa fa-github"}),Object(T.jsx)(H,{title:"GitHub Lense"})]}),Object(T.jsx)("div",{className:"about-card",children:Object(T.jsx)(Z,{})})]})}function ee(){return Object(T.jsxs)(T.Fragment,{children:[" ",Object(T.jsxs)("div",{className:"user-container ",children:[Object(T.jsx)("h1",{children:"Not Found !!!!!"}),Object(T.jsx)("h4",{children:"The page you looking for does not exist...... "}),Object(T.jsxs)("h4",{children:["Search insted ",Object(T.jsx)(w.b,{className:"links badge",to:"/",children:Object(T.jsx)("strong",{children:"Home"})})," or",Object(T.jsxs)(w.b,{className:"links badge",to:"/About",children:[" ",Object(T.jsx)("strong",{children:"About"})]})," "]})]})]})}var te=function(){return Object(T.jsx)(S,{children:Object(T.jsx)(k,{children:Object(T.jsx)(w.a,{children:Object(T.jsx)("div",{className:"App",children:Object(T.jsxs)(A.c,{children:[Object(T.jsx)(A.a,{exact:!0,path:"/",children:Object(T.jsx)(Q,{})}),Object(T.jsx)(A.a,{exact:!0,path:"/Home",children:Object(T.jsx)(Q,{})}),Object(T.jsx)(A.a,{path:"/About",children:Object(T.jsx)($,{})}),Object(T.jsx)(A.a,{exact:!0,path:"/user/:login",render:function(e){return Object(T.jsx)(M,Object(l.a)({},e))}}),Object(T.jsx)(A.a,{component:ee})]})})})})})},ce=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,66)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),s(e),n(e),a(e),r(e)}))};j.a.render(Object(T.jsx)(r.a.StrictMode,{children:Object(T.jsx)(te,{})}),document.getElementById("root")),ce()}},[[65,1,2]]]);
//# sourceMappingURL=main.d4fe68fb.chunk.js.map