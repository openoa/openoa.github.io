"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[12],{3768:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>d});var r=a(3821);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),s=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},o=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},k="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),k=s(a),m=n,d=k["".concat(c,".").concat(m)]||k[m]||u[m]||l;return a?r.createElement(d,i(i({ref:t},o),{},{components:a})):r.createElement(d,i({ref:t},o))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[k]="string"==typeof e?e:n,i[1]=p;for(var s=2;s<l;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},294:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var r=a(7651),n=(a(3821),a(3768));const l={title:"\u4ecb\u7ecd",sidebar_position:1},i="\u7b80\u4ecb",p={unversionedId:"readme",id:"readme",title:"\u4ecb\u7ecd",description:"OpenOA\u5f8b\u5e08\u534f\u540c\u662f\u4e13\u7528\u4e8e\u5f8b\u5e08\u4e8b\u52a1\u6240\u6216\u6cd5\u5f8b\u54a8\u516c\u53f8\u7684\u514d\u8d39\u6cd5\u5f8b\u534f\u540c\u529e\u516c\u89e3\u51b3\u65b9\u6848\u3002",source:"@site/docs/readme.md",sourceDirName:".",slug:"/",permalink:"/docs/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\u4ecb\u7ecd",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"\u5feb\u901f\u5f00\u59cb",permalink:"/docs/getting-started"}},c={},s=[{value:"\u7279\u70b9",id:"\u7279\u70b9",level:2},{value:"\u81ea\u4e3b\u53ef\u63a7",id:"\u81ea\u4e3b\u53ef\u63a7",level:3},{value:"\u514d\u8d39",id:"\u514d\u8d39",level:3},{value:"\u6761\u4ef6\u5f00\u6e90",id:"\u6761\u4ef6\u5f00\u6e90",level:3},{value:"\u8def\u7ebf\u56fe",id:"\u8def\u7ebf\u56fe",level:2}],o={toc:s};function k(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"OpenOA\u5f8b\u5e08\u534f\u540c"),"\u662f\u4e13\u7528\u4e8e",(0,n.kt)("strong",{parentName:"p"},"\u5f8b\u5e08\u4e8b\u52a1\u6240"),"\u6216",(0,n.kt)("strong",{parentName:"p"},"\u6cd5\u5f8b\u54a8\u516c\u53f8"),"\u7684\u514d\u8d39\u6cd5\u5f8b\u534f\u540c\u529e\u516c\u89e3\u51b3\u65b9\u6848\u3002"),(0,n.kt)("p",null,"\u73b0\u5982\u4eca\u5e02\u9762\u4e0a\u5404\u79cdOA\u534f\u540c\u529e\u516c\u8f6f\u4ef6\u591a\u79cd\u591a\u6837\uff0c\u4e13\u95e8\u9488\u5bf9\u6cd5\u5f8b\u884c\u4e1a\u7684OA\u7cfb\u7edf\u4e5f\u4e0d\u5c11\u3002\u524d\u8005\u5927\u591a\u529f\u80fd\u7e41\u591a\uff0c\u5b66\u4e60\u6210\u672c\u3001\u8f6f\u4ef6\u8d39\u7528\u90fd\u6bd4\u8f83\u9ad8\u6602\u3002\u540e\u8005\u529f\u80fd\u76f8\u5bf9\u7b26\u5408\u6cd5\u5f8b\u884c\u4e1a\uff0c\u4f46\u5404\u6709\u4fa7\u91cd\u70b9\u3002"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u8d44\u6e90\u5e73\u8861"),"\uff0c\u5bf9\u4e8e\u4eba\u529b\u6210\u672c\u8f83\u4e3a\u9ad8\u6602\u7684\u6cd5\u5f8b\u884c\u4e1a\u5f88\u91cd\u8981\uff0c\u6709\u52a9\u4e8e\u65f6\u95f4\u548c\u4eba\u624d\u80fd\u529b\u7684\u5408\u7406\u914d\u7f6e\u548c\u4f18\u5316\uff0c\u80fd\u628a\u66f4\u591a\u65f6\u95f4\u6295\u5165\u4e8e\u6cd5\u5f8b\u4eba\u7684\u6838\u5fc3\u7ade\u4e89\u529b\uff1a\u5546\u4e1a\u8d21\u732e\u529b\u548c\u804c\u4e1a\u5f71\u54cd\u529b\u3002"),(0,n.kt)("p",null,"\u5bf9\u4e8e\u5f8b\u6240\u53ef\u4ee5\u964d\u4f4e\u603b\u4eba\u529b\u6210\u672c\uff0c\u5e76\u63d0\u9ad8\u6cd5\u5f8b\u670d\u52a1\u8d28\u91cf\u3002"),(0,n.kt)("p",null,"\u5bf9\u4e8e\u5f8b\u5e08\u56e2\u961f\u5219\u91cd\u8981\u4ef7\u503c\u662f\u5e73\u8861\u6848\u6e90\u98ce\u9669\u548c\u52b3\u52a8\u8d1f\u62c5\u3002"),(0,n.kt)("p",null,"\u6b64\u65f6",(0,n.kt)("strong",{parentName:"p"},"OpenOA\u5f8b\u5e08\u534f\u540c"),"\u4f5c\u4e3a\u4e00\u4e2a\u5b8c\u5168\u514d\u8d39\uff0c\u6ce8\u91cd",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"/docs/basic-tutorial/process"},"\u6d41\u7a0b\u6807\u51c6\u5316")),"\u3001",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"/docs/basic-tutorial/case"},"\u6848\u4ef6\u7cbe\u7ec6\u5316")),"\u3001",(0,n.kt)("strong",{parentName:"p"},"\u529f\u80fd\u53ef\u6269\u5c55"),"\u7684\u7ba1\u7406\u5e73\u53f0\uff0c\u5c31\u975e\u5e38\u503c\u5f97\u4e00\u8bd5\u3002"),(0,n.kt)("h2",{id:"\u7279\u70b9"},"\u7279\u70b9"),(0,n.kt)("h3",{id:"\u81ea\u4e3b\u53ef\u63a7"},"\u81ea\u4e3b\u53ef\u63a7"),(0,n.kt)("p",null,"\u638c\u63a7",(0,n.kt)("strong",{parentName:"p"},"\u6570\u636e\u9690\u79c1"),"\u548c",(0,n.kt)("strong",{parentName:"p"},"\u6570\u636e\u5b89\u5168"),"\u7684\u79c1\u6709\u5316\u90e8\u7f72\uff0c\u53ef\u81ea\u4e3b\u9009\u62e9\u5b89\u88c5\u4e8e\u516c\u53f8\u670d\u52a1\u5668\u6216\u666e\u901a\u4e2a\u4eba\u7535\u8111(\u4e86\u89e3",(0,n.kt)("a",{parentName:"p",href:"/docs/advanced-guide/extranet-access"},"\u5916\u7f51\u8bbf\u95ee"),")\uff0c\u4e5f\u53ef\u90e8\u7f72\u5230",(0,n.kt)("a",{parentName:"p",href:"https://www.aliyun.com/minisite/goods?userCode=0tgztadw"},"\u963f\u91cc\u4e91"),"\u6216",(0,n.kt)("a",{parentName:"p",href:"https://cloud.tencent.com/act/cps/redirect?redirect=2446&cps_key=4e85513c571419e53788abdbc8d258ca"},"\u817e\u8baf\u4e91"),"\u7b49\u4e91\u670d\u52a1\u5668\u3002"),(0,n.kt)("h3",{id:"\u514d\u8d39"},"\u514d\u8d39"),(0,n.kt)("p",null,"OpenOA\u53ca\u5176\u884d\u751f\u4ea7\u54c1\u91c7\u7528\u300a\u5fc5\u6e90\u8bb8\u53ef\u8bc1\u300b\u514d\u8d39\u7248\u3002\u5f8b\u5e08\u4e8b\u52a1\u6240\u6216\u6cd5\u5f8b\u54a8\u8be2\u516c\u53f8\u7b49\u6700\u7ec8\u7528\u6237\uff0c\u81ea\u52a8\u6388\u4e88\u8be5\u7248\u672c\u53f7\u4e0b\u7684\u8f6f\u4ef6\u4f7f\u7528\u6743\uff0c\u53ef\u5728\u5185\u90e8\u5546\u4e1a\u4f7f\u7528\uff0c\u5b8c\u5168\u514d\u8d39\u4e14\u65e0\u671f\u9650\u3002"),(0,n.kt)("h3",{id:"\u6761\u4ef6\u5f00\u6e90"},"\u6761\u4ef6\u5f00\u6e90"),(0,n.kt)("p",null,"\u4e0d\u540c\u4e8e\u901a\u5e38\u610f\u4e49\u4e0a\u7684\u5f00\u6e90\uff08\u5f00\u653e\u7a0b\u5e8f\u6e90\u4ee3\u7801\uff09\uff0c\u672c\u8f6f\u4ef6\u7684\u6700\u7ec8\u7528\u6237\u5982\u9700\u7d22\u53d6\u7a0b\u5e8f\u6e90\u4ee3\u7801\uff0c\u7d2f\u8ba1\u8d2d\u4e70\u670d\u52a1\u91d1\u989d\u9700\u5230\u8fbe\u4e00\u5b9a\u6570\u989d\uff082023\u5e74\u6807\u51c624000\u5143\u4eba\u6c11\u5e01\uff09\uff0c\u8d2d\u4e70\u670d\u52a1\u5305\u542b\u672c\u8f6f\u4ef6\u7684\u54a8\u8be2\u3001\u57f9\u8bad\u3001\u5b9e\u65bd\u3001\u6258\u7ba1\u3001\u5b9a\u5236\u5f00\u53d1\u3001\u6350\u8d60\u7b49\u3002"),(0,n.kt)("p",null,"\u8fd9\u79cd\u201c\u5148\u514d\u8d39\uff0c\u540e\u5f00\u6e90\u201d\u7684\u5fc5\u6e90\u6a21\u5f0f\uff0c\u610f\u5728\u4f7f\u6700\u7ec8\u7528\u6237\u548c\u8f6f\u4ef6\u5f00\u53d1\u65b9\u53cc\u65b9\u826f\u6027\u53d1\u5c55\uff0c\u5c24\u5176\u662f\u9632\u6b62\u8f6f\u4ef6\u7528\u6237\u88ab\u8f6f\u4ef6\u5f00\u53d1\u5546\u7ed1\u67b6\u540e\u9762\u4e34\u8fdb\u9000\u4e24\u96be\u3002\u6700\u7ec8\u5e73\u8861\u8fd9\u4e09\u65b9\u9762\uff1a\u6700\u7ec8\u7528\u6237\u7684\u6295\u8d44\u4fdd\u62a4\u3001\u672c\u8f6f\u4ef6\u540e\u7eed\u5347\u7ea7\u5b8c\u5584\u6210\u672c\u3001\u7b2c\u4e09\u65b9\u7684\u6076\u6027\u7ade\u4e89\u3002"),(0,n.kt)("p",null,"\u8be6\u89c1",(0,n.kt)("a",{parentName:"p",href:"https://byapps.github.io"},"\u300a\u5fc5\u6e90\u8bb8\u53ef\u8bc1\u300b")),(0,n.kt)("h2",{id:"\u8def\u7ebf\u56fe"},"\u8def\u7ebf\u56fe"),(0,n.kt)("ul",{className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","\u6848\u4ef6\u7ba1\u7406"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","\u6848\u4ef6\u7ba1\u7406\uff1a\u5728\u65e5\u7a0b\u65e5\u5386\u4e2d\u540c\u6b65\u663e\u793a\u5f00\u5ead\u3001\u7acb\u6848\u3001\u5224\u51b3"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","\u5168\u90e8\u6c11\u4e8b\u5211\u4e8b\u884c\u653f\u6848\u7531\u57fa\u7840\u8d44\u6599"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","\u5168\u56fd\u6cd5\u9662\u57fa\u7840\u8d44\u6599"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","\u6848\u4ef6\u9644\u4ef6"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","\u7535\u5b50\u5377\u5b97"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","\u6a21\u677f\u6587\u4e66\u53ca\u6253\u5370"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","\u6d41\u7a0b\u7ba1\u7406\u4e0e\u6807\u51c6\u5316\u6d41\u7a0b"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","\u53ef\u89c6\u5316\u6cd5\u5f8b\u670d\u52a1\u62a5\u544a"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","\u5de5\u4f5c\u91cf\u65e5\u5386"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","\u5c0f\u7a0b\u5e8f\u7aef"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","\u624b\u673a\u7aef"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","\u7f51\u9875\u7aef")),(0,n.kt)("p",null,"OpenOA\u5728\u4e0d\u65ad\u5b8c\u5584\u4e2d\uff0c\u8bf7\u63d0\u4f9b\u5b9d\u8d35\u610f\u89c1\u6216\u5efa\u8bae\u3002\u4f46\u51fa\u4e8e\u5546\u4e1a\u7cfb\u7edf\u7a33\u5b9a\u6027\u8003\u8651\uff0c\u4e0d\u4f1a\u9891\u7e41\u66f4\u65b0\u8fed\u4ee3\u3002"))}k.isMDXComponent=!0}}]);