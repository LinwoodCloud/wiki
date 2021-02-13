(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{112:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),b=l(n),u=r,m=b["".concat(o,".").concat(u)]||b[u]||d[u]||i;return n?a.a.createElement(m,c(c({ref:t},s),{},{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},84:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),i=(n(0),n(112)),o={title:"Part"},c={unversionedId:"dev-doctor/backend/api/part",id:"dev-doctor/backend/api/part",isDocsHomePage:!1,title:"Part",description:"Example",source:"@site/docs/dev-doctor/backend/api/part.md",slug:"/dev-doctor/backend/api/part",permalink:"/docs/dev-doctor/backend/api/part",editUrl:"https://github.com/LinwoodCloud/website/edit/master/docs/dev-doctor/backend/api/part.md",version:"current",sidebar:"dev-doctor",previous:{title:"Course",permalink:"/docs/dev-doctor/backend/api/course"},next:{title:"Item",permalink:"/docs/dev-doctor/backend/api/item/overview"}},p=[{value:"Example",id:"example",children:[{value:"JSON",id:"json",children:[]},{value:"YAML",id:"yaml",children:[]}]},{value:"Options",id:"options",children:[]}],s={toc:p};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("h3",{id:"json"},"JSON"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"<course>/<part>/config.json")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "Part 1",\n  "description": "This is a description",\n  "assets": [],\n  "items": [\n    {\n      "name": "Welcome",\n      "description": "Welcome to the course",\n      "type": "video",\n      "source": "youtube",\n      "url": "ScMzIvxBSi4"\n    },\n    {\n      "name": "Text",\n      "type": "text",\n      "text": "Here you can write something. Markdown is supported!\\n"\n    },\n    {\n      "name": "Quiz",\n      "time": 600,\n      "type": "quiz",\n      "questions": [\n        {\n          "title": "Question 1 title",\n          "description": "Question 1 description",\n          "evaluation": "An evaluation",\n          "answers": [\n            {\n              "name": "A"\n            },\n            {\n              "name": "B"\n            },\n            {\n              "name": "C",\n              "points": 5,\n              "correct": true\n            },\n            {\n              "name": "D",\n              "points": 2,\n              "correct": true\n            }\n          ]\n        },\n        {\n          "title": "Question 2 title",\n          "description": "Question 2 description",\n          "evaluation": "An evaluation for question 2",\n          "answers": [\n            {\n              "name": "A",\n              "correct": true\n            },\n            {\n              "name": "B",\n              "correct": true\n            },\n            {\n              "name": "C"\n            },\n            {\n              "name": "D"\n            }\n          ]\n        }\n      ]\n    }\n  ]\n}\n')),Object(i.b)("h3",{id:"yaml"},"YAML"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"<course>/<part>/config.yml")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"# The name of the current part. The name will stand on the sidebar\nname: Part 1\n\n# Optional: The description of the part\ndescription: This is a description\n\n# Assets which will be cached if the user is offline. The assets need to be in the asset directory\nassets: []\n\n# The content of the part.\nitems:\n- name: Welcome\n  description: Welcome to the course\n  type: video\n  source: youtube\n  url: ScMzIvxBSi4\n- name: Text\n  type: text\n  text: >\n    Here you can write something. Markdown is supported!\n- name: Quiz\n  # Optional: Max time in seconds (here: 10 minutes)\n  time: 600\n  type: quiz\n  questions:\n  - title: Question 1 title\n    description: Question 1 description\n    evaluation: An evaluation\n    answers:\n    - name: A\n    - name: B\n    - name: C\n      points: 5\n      correct: true\n    - name: D\n      points: 2\n      correct: true\n  - title: Question 2 title\n    description: Question 2 description\n    evaluation: An evaluation for question 2\n    answers:\n    - name: A\n      correct: true\n    - name: B\n      correct: true\n    - name: C\n    - name: D\n")),Object(i.b)("h2",{id:"options"},"Options"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Name"),Object(i.b)("th",{parentName:"tr",align:"center"},"Type"),Object(i.b)("th",{parentName:"tr",align:"center"},"Required"),Object(i.b)("th",{parentName:"tr",align:"center"},"Since"),Object(i.b)("th",{parentName:"tr",align:"right"},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"name"),Object(i.b)("td",{parentName:"tr",align:"center"},"String"),Object(i.b)("td",{parentName:"tr",align:"center"},"true"),Object(i.b)("td",{parentName:"tr",align:"center"},"0.1"),Object(i.b)("td",{parentName:"tr",align:"right"},"The name of the current part. It will show up in the app bar and in the drawer.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"description"),Object(i.b)("td",{parentName:"tr",align:"center"},"String"),Object(i.b)("td",{parentName:"tr",align:"center"},"false"),Object(i.b)("td",{parentName:"tr",align:"center"},"1.1"),Object(i.b)("td",{parentName:"tr",align:"right"},"This will be shown in the drawer.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"assets"),Object(i.b)("td",{parentName:"tr",align:"center"},"Array<String",">"),Object(i.b)("td",{parentName:"tr",align:"center"},"true"),Object(i.b)("td",{parentName:"tr",align:"center"},"0.1"),Object(i.b)("td",{parentName:"tr",align:"right"},"The assets (like images, videos, ...) filee names in the assets folder in the current directory")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},"items"),Object(i.b)("td",{parentName:"tr",align:"center"},"Array<",Object(i.b)("a",{parentName:"td",href:"item/overview"},"Item"),">"),Object(i.b)("td",{parentName:"tr",align:"center"},"true"),Object(i.b)("td",{parentName:"tr",align:"center"},"0.1"),Object(i.b)("td",{parentName:"tr",align:"right"},"A list of items in the current part.")))))}l.isMDXComponent=!0}}]);