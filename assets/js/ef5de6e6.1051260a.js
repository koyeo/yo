"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[369],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return d}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),u=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},p=function(e){var r=u(e.components);return n.createElement(s.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),f=u(t),d=o,m=f["".concat(s,".").concat(d)]||f[d]||l[d]||i;return t?n.createElement(m,c(c({ref:r},p),{},{components:t})):n.createElement(m,c({ref:r},p))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,c=new Array(i);c[0]=f;var a={};for(var s in r)hasOwnProperty.call(r,s)&&(a[s]=r[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var u=2;u<i;u++)c[u]=t[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},2943:function(e,r,t){t.r(r),t.d(r,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return l}});var n=t(7462),o=t(3366),i=(t(7294),t(3905)),c=["components"],a={sidebar_position:1},s="\u670d\u52a1\u5668",u={unversionedId:"config/server",id:"config/server",title:"\u670d\u52a1\u5668",description:"",source:"@site/docs/config/server.md",sourceDirName:"config",slug:"/config/server",permalink:"/docs/config/server",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/config/server.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"run",permalink:"/docs/cli/run"},next:{title:"\u73af\u5883\u53d8\u91cf",permalink:"/docs/config/env"}},p={},l=[],f={toc:l};function d(e){var r=e.components,t=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u670d\u52a1\u5668"},"\u670d\u52a1\u5668"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"version: 1.0\nservers:\n  server_1:                         # \u670d\u52a1\u5668\u6807\u8bc6\uff0c \u53ef\u4ee5\u5728 dploy \u4efb\u52a1\u4e2d\uff0cuse \u4f7f\u7528\n    comment: \u7b2c\u4e00\u53f0\u670d\u52a1\u5668             # \u5907\u6ce8\n    host: 192.168.1.5               # \u670d\u52a1\u5668\u5730\u5740\n    port: 2222                      # \u7aef\u53e3\uff0c\u9ed8\u8ba4\u4f7f\u7528 22\n    user: root                      # \u670d\u52a1\u5668\u7528\u6237\u540d\n    password: 123456                # \u670d\u52a1\u5668\u5bc6\u7801\uff0c\u53ef\u4ee5\u7531 identity_file \u9009\u578b\u66ff\u4ee3\n    identity_file: ~/.ssh/id_rsa    # \u670d\u52a1\u79c1\u94a5\u8ba4\u8bc1\u6587\u4ef6\uff0c \u9ed8\u8ba4\u4f7f\u7528 ~/.ssh/id_rsa\n")))}d.isMDXComponent=!0}}]);