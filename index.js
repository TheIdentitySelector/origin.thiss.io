!function(n,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("index",[],t):"object"==typeof exports?exports.index=t():n.index=t()}(this,(function(){return function(n){function t(t){for(var r,a,l=t[0],c=t[1],u=t[2],p=0,g=[];p<l.length;p++)a=l[p],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&g.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(n[r]=c[r]);for(s&&s(t);g.length;)g.shift()();return i.push.apply(i,u||[]),e()}function e(){for(var n,t=0;t<i.length;t++){for(var e=i[t],r=!0,l=1;l<e.length;l++){var c=e[l];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),n=a(a.s=e[0]))}return n}var r={},o={5:0},i=[];function a(t){if(r[t])return r[t].exports;var e=r[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,a),e.l=!0,e.exports}a.m=n,a.c=r,a.d=function(n,t,e){a.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},a.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},a.t=function(n,t){if(1&t&&(n=a(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(a.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var r in n)a.d(e,r,function(t){return n[t]}.bind(null,r));return e},a.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return a.d(t,"a",t),t},a.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},a.p="/";var l=this.webpackJsonp_name_=this.webpackJsonp_name_||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var s=c;return i.push([17,0,2]),e()}({17:function(n,t,e){n.exports=e(18)},18:function(n,t,e){"use strict";e.r(t);var r=e(4);e(12);window.onload=function(){r.DiscoveryComponent.render({loginHandlerURL:"https://use.thiss.io/ds/?target=https://google.com&return=/&entityID=https://ra21.mnt.se/shibboleth",backgroundColor:"#e9ecef"},"#login")}},4:function(n,t,e){"use strict";e.r(t),e.d(t,"DiscoveryComponent",(function(){return i}));var r=e(10),o=e(6),i=r.create({tag:"thiss-component",url:{thiss:"https://use.thiss.io/cta/"},defaultEnv:"thiss",dimensions:{width:"350px",height:"80px"},defaultLogLevel:"error",autoResize:{width:!0,height:!0},contexts:{iframe:!0,popup:!1},backgroundColor:"#FFFFFF",color:"#0079ff",prerenderTemplate:function(n){var t=n.document.createElement("html");return t.innerHTML=o(),t}})},6:function(module,exports,__webpack_require__){module.exports=function(obj){obj||(obj={});var __t,__p="";with(obj)__p+='<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <style>\n        :root {\n          --white: #ffffff;\n          --text-grey: #444444;\n          --warm-grey: #767676;\n          --white-two: #f6f6f6;\n          --footer-grey: #ebebeb;\n          --primary-blue: #0079ff;\n          --white-50: rgba(255, 255, 255, 0.5);\n          --white-three: #e6e6e6;\n        }\n        body {\n            box-sizing: border-box;\n            padding: 0;\n            margin: 0;\n        }\n        .ra21CTALoadingContainer {\n            width: 350px;\n            height: 80px;\n            float: top;\n        }\n        .ra21CTAMain {\n            max-height: 60px;\n            max-width: 350px;\n            align: top;\n            float: bottom;\n            font-family: \'Helvetica\', sans-serif;\n            font-size: 12px;\n            font-weight: normal;\n            font-style: normal;\n            font-stretch: normal;\n            line-height: 1.67;\n            letter-spacing: normal;\n            text-align: center;\n            background-color: var(--primary-blue);\n            border-radius: 5px;\n        }\n\n        .ra21-button {\n          background-color: var(--primary-blue);\n          border-radius: 5px;\n          color: var(--warm-grey);\n          cursor: pointer;\n          display: flex;\n          margin-bottom: 5px;\n          padding: 10px;\n          text-decoration: none;\n        }\n\n        .ra21-button-logo-wrap {\n            text-align: center;\n            /* width: 50px; */\n            max-width: 50px;\n            height: 100%;\n            border-right: 1px solid #FFFFFF;\n            padding: 5px 12px 5px 7px;\n        }\n\n        .ra21-button-logo {\n          width: 30px;\n          vertical-align: middle;\n        }\n\n        .ra21-button-text {\n          padding-left: 10px;\n          text-align: center;\n          width: 85%;\n          color: var(--white);\n        }\n\n        .ra21-button-text-primary {\n          font-family: \'Helvetica\', sans-serif;\n          font-size: 14px;\n          font-weight: 700;\n          font-style: normal;\n          font-stretch: normal;\n          line-height: 1.4;\n          letter-spacing: normal;\n        }\n\n        .ra21-button-text-secondary {\n          /* Zep */\n          font-family: \'Helvetica\', sans-serif;\n          font-size: 13px;\n          font-weight: normal;\n          font-style: normal;\n          font-stretch: normal;\n          line-height: 1.4;\n          letter-spacing: normal;\n        }\n\n        .ra21-access-text {\n          cursor: pointer;\n          text-align: center;\n\n          /* Zep */\n          font-family: \'Helvetica\', sans-serif;\n          font-size: 13px;\n          font-weight: normal;\n          font-style: normal;\n          font-stretch: normal;\n          line-height: 1.46;\n          letter-spacing: normal;\n          color: var(--primary-blue);\n        }\n        .align-items-center {\n            -ms-flex-align: center!important;\n            align-items: center!important;\n        }\n        .justify-content-center {\n            -ms-flex-pack: center!important;\n            justify-content: center!important;\n        }\n        .d-flex { display: flex!important; }\n    </style>\n</head>\n<body>\n    <div class="ra21CTALoadingContainer">\n        <div class="ra21CTAMain ra21-button">\n            <div class="ra21CTAiconButton ra21CTAbutton ra21-button-logo-wrap">\n                <img class="ra21CTAicon ra21-button-logo" src="'+(null==(__t=__webpack_require__(7))?"":__t)+'">\n            </div>\n            <div class="identityprovider d-flex justify-content-center align-items-center ra21CTAbutton text-truncate ra21-button-text">\n                <div class="ra21CTAbuttonLabel ra21-button-text-primary text-truncate">\n                </div>\n            </div>\n        </div>\n    </div>\n</body>\n</html>';return __p}},7:function(n,t){n.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAyNTMuODggMjUzLjk5IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNTMuODggMjUzLjk5OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CjxnPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTM3LjU4LDk3Ljc2aDE3OC43M2M1LjcsMCwxMC42OC0zLjU2LDEyLjQ2LTguOWMxLjQyLTUuMzQtMC4zNi0xMS4wNC00Ljk5LTE0LjI0bC04OS4zNy02NC4wOQoJCWMtNC42My0zLjItMTAuNjgtMy4yLTE0Ljk1LDBMMzAuMTEsNzQuNjFjLTMuMiwyLjQ5LTUuMzQsNi4wNS01LjM0LDEwLjMzQzI0Ljc3LDkyLjA2LDMwLjQ2LDk3Ljc2LDM3LjU4LDk3Ljc2eiBNMTI2Ljk1LDM2Ljg3CgkJbDQ5LjQ5LDM1LjI1SDc3LjQ2TDEyNi45NSwzNi44N3oiLz4KCTxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMTA5LjQ1LDE4NS40IDEwOS44NSwxMjcuODIgODAuMjUsMTEzLjU1IDgwLjI1LDE5OS42NyAJIi8+Cgk8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjE3NC4xOSwxOTkuMjYgMTc0LjE5LDExNC4zNyAxNDQuOTksMTI4LjY0IDE0NC45OSwxODYuMjEgCSIvPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTI0Mi4wNywyMjYuNDJjLTAuMDEsMC0wLjAzLDAtMC4wNCwwaC0xMC43NXYtMTAuNzRjMC0zLjcxLTMuMDEtNi43Mi02LjcyLTYuNzJsLTEwLjEsMHYtODYuMjEKCQljMC04LjItNi43MS0xNC45LTE0LjktMTQuOWMtOC4yLDAtMTQuOSw2LjcxLTE0LjksMTQuOXY4Ni4yMWwtMTE1LjQyLTAuMDJ2LTg2LjE5YzAtOC4yLTYuNzEtMTQuOS0xNC45LTE0LjkKCQljLTguMiwwLTE0LjksNi43MS0xNC45LDE0Ljl2ODYuMThsLTEwLjA4LDBjLTMuNzEsMC02LjcyLDMuMDEtNi43Miw2LjcydjEwLjc0SDExLjg2Yy0zLjcxLDAtNi43MiwzLjAxLTYuNzIsNi43MnYxMS42OGgyNDMuNjIKCQl2LTExLjYzQzI0OC43NywyMjkuNDUsMjQ1Ljc4LDIyNi40MywyNDIuMDcsMjI2LjQyeiIvPgo8L2c+Cjwvc3ZnPgo="}})}));