/**
 * @file
 * A replacement for Modernizr touch events detection.
 */

document.documentElement.classList.add(
  'ontouchstart' in window ||
    (window.DocumentTouch && document instanceof window.DocumentTouch)
    ? 'touchevents'
    : 'no-touchevents',
);
;
/*! jQuery v3.6.3 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,y=n.hasOwnProperty,a=y.toString,l=a.call(Object),v={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},x=function(e){return null!=e&&e===e.window},S=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||S).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.6.3",E=function(e,t){return new E.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}E.fn=E.prototype={jquery:f,constructor:E,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=E.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return E.each(this,e)},map:function(n){return this.pushStack(E.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(E.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(E.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},E.extend=E.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(E.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||E.isPlainObject(n)?n:{},i=!1,a[t]=E.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},E.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=y.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?E.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:v}),"function"==typeof Symbol&&(E.fn[Symbol.iterator]=t[Symbol.iterator]),E.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,S,y,s,c,v,E="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),j=function(e,t){return e===t&&(l=!0),0},D={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",$=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,S)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&v(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!y||!y.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ve(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=E)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{if(d.cssSupportsSelector&&!CSS.supports("selector(:is("+c+"))"))throw new Error;return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===E&&e.removeAttribute("id")}}}return g(t.replace(B,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[E]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ye(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ve(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,S=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.cssSupportsSelector=ce(function(){return CSS.supports("selector(*)")&&C.querySelectorAll(":is(:jqfake)")&&!CSS.supports("selector(:is(*,:jqfake))")}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=E,!C.getElementsByName||!C.getElementsByName(E).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&S){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&S){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&S)return t.getElementsByClassName(e)},s=[],y=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+E+"'></a><select id='"+E+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&y.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||y.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+E+"-]").length||y.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||y.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||y.push(":checked"),e.querySelectorAll("a#"+E+"+*").length||y.push(".#.+[+~]"),e.querySelectorAll("\\\f"),y.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&y.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&y.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&y.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),y.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),d.cssSupportsSelector||y.push(":has"),y=y.length&&new RegExp(y.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),v=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType&&e.documentElement||e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},j=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&v(p,e)?-1:t==C||t.ownerDocument==p&&v(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&S&&!N[t+" "]&&(!s||!s.test(t))&&(!y||!y.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),v(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&D.call(b.attrHandle,t.toLowerCase())?n(e,t,!S):void 0;return void 0!==r?r:d.attributes||!S?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(j),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace($," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,y){var v="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===y?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=v!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(v){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[E]||(a[E]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[E]||(a[E]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[E]||(a[E]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=y)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[E]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace(B,"$1"));return s[E]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=S?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ye(function(){return[0]}),last:ye(function(e,t){return[t-1]}),eq:ye(function(e,t,n){return[n<0?n+t:n]}),even:ye(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ye(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ye(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ye(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[E]||(e[E]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,y,v,e){return y&&!y[E]&&(y=Ce(y)),v&&!v[E]&&(v=Ce(v,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?v||(e?d:l||y)?[]:t:f;if(g&&g(f,p,n,r),y){i=Te(p,u),y(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(v||d){if(v){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);v(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=v?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),v?v(null,t,p,r):H.apply(t,p)})}function Se(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[E]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(B,"$1"),t,s<n&&Se(e.slice(s,n)),n<r&&Se(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(B," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,y,v,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Se(t[n]))[E]?i.push(a):o.push(a);(a=A(e,(y=o,m=0<(v=i).length,x=0<y.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!S);while(s=y[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=v[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+v.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&S&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ve(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!S,n,!t||ee.test(e)&&ve(t.parentNode)||t),n},d.sortStable=E.split("").sort(j).join("")===E,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);E.find=d,E.expr=d.selectors,E.expr[":"]=E.expr.pseudos,E.uniqueSort=E.unique=d.uniqueSort,E.text=d.getText,E.isXMLDoc=d.isXML,E.contains=d.contains,E.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&E(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=E.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?E.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?E.grep(e,function(e){return e===n!==r}):"string"!=typeof n?E.grep(e,function(e){return-1<i.call(n,e)!==r}):E.filter(n,e,r)}E.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?E.find.matchesSelector(r,e)?[r]:[]:E.find.matches(e,E.grep(t,function(e){return 1===e.nodeType}))},E.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(E(e).filter(function(){for(t=0;t<r;t++)if(E.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)E.find(e,i[t],n);return 1<r?E.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&k.test(e)?E(e):e||[],!1).length}});var D,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(E.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||D,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof E?t[0]:t,E.merge(this,E.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:S,!0)),N.test(r[1])&&E.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=S.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(E):E.makeArray(e,this)}).prototype=E.fn,D=E(S);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}E.fn.extend({has:function(e){var t=E(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(E.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&E(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&E.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?E.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(E(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(E.uniqueSort(E.merge(this.get(),E(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),E.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),E.merge([],e.childNodes))}},function(r,i){E.fn[r]=function(e,t){var n=E.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=E.filter(t,n)),1<this.length&&(H[r]||E.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}E.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},E.each(e.match(P)||[],function(e,t){n[t]=!0}),n):E.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){E.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return E.each(arguments,function(e,t){var n;while(-1<(n=E.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<E.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},E.extend({Deferred:function(e){var o=[["notify","progress",E.Callbacks("memory"),E.Callbacks("memory"),2],["resolve","done",E.Callbacks("once memory"),E.Callbacks("once memory"),0,"resolved"],["reject","fail",E.Callbacks("once memory"),E.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return E.Deferred(function(r){E.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){E.Deferred.exceptionHook&&E.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(E.Deferred.getStackHook&&(t.stackTrace=E.Deferred.getStackHook()),C.setTimeout(t))}}return E.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?E.extend(e,a):a}},s={};return E.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=E.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;E.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},E.readyException=function(e){C.setTimeout(function(){throw e})};var F=E.Deferred();function $(){S.removeEventListener("DOMContentLoaded",$),C.removeEventListener("load",$),E.ready()}E.fn.ready=function(e){return F.then(e)["catch"](function(e){E.readyException(e)}),this},E.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--E.readyWait:E.isReady)||(E.isReady=!0)!==e&&0<--E.readyWait||F.resolveWith(S,[E])}}),E.ready.then=F.then,"complete"===S.readyState||"loading"!==S.readyState&&!S.documentElement.doScroll?C.setTimeout(E.ready):(S.addEventListener("DOMContentLoaded",$),C.addEventListener("load",$));var B=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)B(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(E(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=E.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||E.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!E.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}E.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),E.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):B(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),E.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,E.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=E.queue(e,t),r=n.length,i=n.shift(),o=E._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){E.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:E.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),E.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?E.queue(this[0],t):void 0===n?this:this.each(function(){var e=E.queue(this,t,n);E._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&E.dequeue(this,t)})},dequeue:function(e){return this.each(function(){E.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=E.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=S.documentElement,ie=function(e){return E.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return E.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===E.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return E.css(e,t,"")},u=s(),l=n&&n[3]||(E.cssNumber[t]?"":"px"),c=e.nodeType&&(E.cssNumber[t]||"px"!==l&&+u)&&te.exec(E.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)E.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,E.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=E.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}E.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?E(this).show():E(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=S.createDocumentFragment().appendChild(S.createElement("div")),(fe=S.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),v.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",v.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",v.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ye(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?E.merge([e],n):n}function ve(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,v.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))E.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+E.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;E.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<E.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ye(f.appendChild(o),"script"),l&&ve(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^([^.]*)(?:\.(.+)|)/;function we(){return!0}function Te(){return!1}function Ce(e,t){return e===function(){try{return S.activeElement}catch(e){}}()==("focus"===t)}function Se(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Se(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Te;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return E().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=E.guid++)),e.each(function(){E.event.add(this,t,i,r,n)})}function Ee(e,i,o){o?(Y.set(e,i,!1),E.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(E.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n&&n.value}else r.length&&(Y.set(this,i,{value:E.event.trigger(E.extend(r[0],E.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&E.event.add(e,i,we)}E.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&E.find.matchesSelector(re,i),n.guid||(n.guid=E.guid++),(u=y.events)||(u=y.events=Object.create(null)),(a=y.handle)||(a=y.handle=function(e){return"undefined"!=typeof E&&E.event.triggered!==e.type?E.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=be.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=E.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=E.event.special[d]||{},c=E.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&E.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),E.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=Y.hasData(e)&&Y.get(e);if(y&&(u=y.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=be.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=E.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.handle)||E.removeEvent(e,d,y.handle),delete u[d])}else for(d in u)E.event.remove(e,d+t[l],n,r,!0);E.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=E.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=E.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=E.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((E.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<E(i,this).index(l):E.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(E.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[E.expando]?e:new E.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ee(t,"click",we),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ee(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},E.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},E.Event=function(e,t){if(!(this instanceof E.Event))return new E.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?we:Te,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&E.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[E.expando]=!0},E.Event.prototype={constructor:E.Event,isDefaultPrevented:Te,isPropagationStopped:Te,isImmediatePropagationStopped:Te,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=we,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=we,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=we,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},E.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},E.event.addProp),E.each({focus:"focusin",blur:"focusout"},function(t,e){E.event.special[t]={setup:function(){return Ee(this,t,Ce),!1},trigger:function(){return Ee(this,t),!0},_default:function(e){return Y.get(e.target,t)},delegateType:e}}),E.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){E.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||E.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),E.fn.extend({on:function(e,t,n,r){return Se(this,e,t,n,r)},one:function(e,t,n,r){return Se(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,E(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Te),this.each(function(){E.event.remove(this,e,n,t)})}});var ke=/<script|<style|<link/i,Ae=/checked\s*(?:[^=]|=\s*.checked.)/i,Ne=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function je(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&E(e).children("tbody")[0]||e}function De(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function qe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Le(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)E.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=E.extend({},o),Q.set(t,a))}}function He(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!v.checkClone&&Ae.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),He(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=E.map(ye(e,"script"),De)).length;c<f;c++)u=e,c!==p&&(u=E.clone(u,!0,!0),s&&E.merge(a,ye(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,E.map(a,qe),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&E.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?E._evalUrl&&!u.noModule&&E._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(Ne,""),u,l))}return n}function Oe(e,t,n){for(var r,i=t?E.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||E.cleanData(ye(r)),r.parentNode&&(n&&ie(r)&&ve(ye(r,"script")),r.parentNode.removeChild(r));return e}E.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(v.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||E.isXMLDoc(e)))for(a=ye(c),r=0,i=(o=ye(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ye(e),a=a||ye(c),r=0,i=o.length;r<i;r++)Le(o[r],a[r]);else Le(e,c);return 0<(a=ye(c,"script")).length&&ve(a,!f&&ye(e,"script")),c},cleanData:function(e){for(var t,n,r,i=E.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?E.event.remove(n,r):E.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),E.fn.extend({detach:function(e){return Oe(this,e,!0)},remove:function(e){return Oe(this,e)},text:function(e){return B(this,function(e){return void 0===e?E.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return He(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||je(this,e).appendChild(e)})},prepend:function(){return He(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=je(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(E.cleanData(ye(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return E.clone(this,e,t)})},html:function(e){return B(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!ke.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=E.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(E.cleanData(ye(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return He(this,arguments,function(e){var t=this.parentNode;E.inArray(this,n)<0&&(E.cleanData(ye(this)),t&&t.replaceChild(e,this))},n)}}),E.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){E.fn[e]=function(e){for(var t,n=[],r=E(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),E(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Pe=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Re=/^--/,Me=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Ie=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},We=new RegExp(ne.join("|"),"i"),Fe="[\\x20\\t\\r\\n\\f]",$e=new RegExp("^"+Fe+"+|((?:^|[^\\\\])(?:\\\\.)*)"+Fe+"+$","g");function Be(e,t,n){var r,i,o,a,s=Re.test(t),u=e.style;return(n=n||Me(e))&&(a=n.getPropertyValue(t)||n[t],s&&a&&(a=a.replace($e,"$1")||void 0),""!==a||ie(e)||(a=E.style(e,t)),!v.pixelBoxStyles()&&Pe.test(a)&&We.test(t)&&(r=u.width,i=u.minWidth,o=u.maxWidth,u.minWidth=u.maxWidth=u.width=a,a=n.width,u.width=r,u.minWidth=i,u.maxWidth=o)),void 0!==a?a+"":a}function _e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=S.createElement("div"),l=S.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",v.clearCloneStyle="content-box"===l.style.backgroundClip,E.extend(v,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=S.createElement("table"),t=S.createElement("tr"),n=S.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=parseInt(r.height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===t.offsetHeight,re.removeChild(e)),a}}))}();var ze=["Webkit","Moz","ms"],Ue=S.createElement("div").style,Xe={};function Ve(e){var t=E.cssProps[e]||Xe[e];return t||(e in Ue?e:Xe[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=ze.length;while(n--)if((e=ze[n]+t)in Ue)return e}(e)||e)}var Ge=/^(none|table(?!-c[ea]).+)/,Ye={position:"absolute",visibility:"hidden",display:"block"},Qe={letterSpacing:"0",fontWeight:"400"};function Je(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ke(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=E.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=E.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=E.css(e,"border"+ne[a]+"Width",!0,i))):(u+=E.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=E.css(e,"border"+ne[a]+"Width",!0,i):s+=E.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Ze(e,t,n){var r=Me(e),i=(!v.boxSizingReliable()||n)&&"border-box"===E.css(e,"boxSizing",!1,r),o=i,a=Be(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Pe.test(a)){if(!n)return a;a="auto"}return(!v.boxSizingReliable()&&i||!v.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===E.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===E.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Ke(e,t,n||(i?"border":"content"),o,r,a)+"px"}function et(e,t,n,r,i){return new et.prototype.init(e,t,n,r,i)}E.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Be(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Re.test(t),l=e.style;if(u||(t=Ve(s)),a=E.cssHooks[t]||E.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(E.cssNumber[s]?"":"px")),v.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Re.test(t)||(t=Ve(s)),(a=E.cssHooks[t]||E.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Be(e,t,r)),"normal"===i&&t in Qe&&(i=Qe[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),E.each(["height","width"],function(e,u){E.cssHooks[u]={get:function(e,t,n){if(t)return!Ge.test(E.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Ze(e,u,n):Ie(e,Ye,function(){return Ze(e,u,n)})},set:function(e,t,n){var r,i=Me(e),o=!v.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===E.css(e,"boxSizing",!1,i),s=n?Ke(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Ke(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=E.css(e,u)),Je(0,t,s)}}}),E.cssHooks.marginLeft=_e(v.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Be(e,"marginLeft"))||e.getBoundingClientRect().left-Ie(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),E.each({margin:"",padding:"",border:"Width"},function(i,o){E.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(E.cssHooks[i+o].set=Je)}),E.fn.extend({css:function(e,t){return B(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Me(e),i=t.length;a<i;a++)o[t[a]]=E.css(e,t[a],!1,r);return o}return void 0!==n?E.style(e,t,n):E.css(e,t)},e,t,1<arguments.length)}}),((E.Tween=et).prototype={constructor:et,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||E.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(E.cssNumber[n]?"":"px")},cur:function(){var e=et.propHooks[this.prop];return e&&e.get?e.get(this):et.propHooks._default.get(this)},run:function(e){var t,n=et.propHooks[this.prop];return this.options.duration?this.pos=t=E.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):et.propHooks._default.set(this),this}}).init.prototype=et.prototype,(et.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=E.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){E.fx.step[e.prop]?E.fx.step[e.prop](e):1!==e.elem.nodeType||!E.cssHooks[e.prop]&&null==e.elem.style[Ve(e.prop)]?e.elem[e.prop]=e.now:E.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=et.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},E.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},E.fx=et.prototype.init,E.fx.step={};var tt,nt,rt,it,ot=/^(?:toggle|show|hide)$/,at=/queueHooks$/;function st(){nt&&(!1===S.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(st):C.setTimeout(st,E.fx.interval),E.fx.tick())}function ut(){return C.setTimeout(function(){tt=void 0}),tt=Date.now()}function lt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ct(e,t,n){for(var r,i=(ft.tweeners[t]||[]).concat(ft.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ft(o,e,t){var n,a,r=0,i=ft.prefilters.length,s=E.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=tt||ut(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:E.extend({},e),opts:E.extend(!0,{specialEasing:{},easing:E.easing._default},t),originalProperties:e,originalOptions:t,startTime:tt||ut(),duration:t.duration,tweens:[],createTween:function(e,t){var n=E.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=E.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=ft.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(E._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return E.map(c,ct,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),E.fx.timer(E.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}E.Animation=E.extend(ft,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],ft.tweeners[n]=ft.tweeners[n]||[],ft.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),y=Y.get(e,"fxshow");for(r in n.queue||(null==(a=E._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,E.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],ot.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!y||void 0===y[r])continue;g=!0}d[r]=y&&y[r]||E.style(e,r)}if((u=!E.isEmptyObject(t))||!E.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=y&&y.display)&&(l=Y.get(e,"display")),"none"===(c=E.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=E.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===E.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(y?"hidden"in y&&(g=y.hidden):y=Y.access(e,"fxshow",{display:l}),o&&(y.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)E.style(e,r,d[r])})),u=ct(g?y[r]:0,r,p),r in y||(y[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?ft.prefilters.unshift(e):ft.prefilters.push(e)}}),E.speed=function(e,t,n){var r=e&&"object"==typeof e?E.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return E.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in E.fx.speeds?r.duration=E.fx.speeds[r.duration]:r.duration=E.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&E.dequeue(this,r.queue)},r},E.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=E.isEmptyObject(t),o=E.speed(e,n,r),a=function(){var e=ft(this,E.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=E.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&at.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||E.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=E.timers,o=n?n.length:0;for(t.finish=!0,E.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),E.each(["toggle","show","hide"],function(e,r){var i=E.fn[r];E.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(lt(r,!0),e,t,n)}}),E.each({slideDown:lt("show"),slideUp:lt("hide"),slideToggle:lt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){E.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),E.timers=[],E.fx.tick=function(){var e,t=0,n=E.timers;for(tt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||E.fx.stop(),tt=void 0},E.fx.timer=function(e){E.timers.push(e),E.fx.start()},E.fx.interval=13,E.fx.start=function(){nt||(nt=!0,st())},E.fx.stop=function(){nt=null},E.fx.speeds={slow:600,fast:200,_default:400},E.fn.delay=function(r,e){return r=E.fx&&E.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},rt=S.createElement("input"),it=S.createElement("select").appendChild(S.createElement("option")),rt.type="checkbox",v.checkOn=""!==rt.value,v.optSelected=it.selected,(rt=S.createElement("input")).value="t",rt.type="radio",v.radioValue="t"===rt.value;var pt,dt=E.expr.attrHandle;E.fn.extend({attr:function(e,t){return B(this,E.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){E.removeAttr(this,e)})}}),E.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?E.prop(e,t,n):(1===o&&E.isXMLDoc(e)||(i=E.attrHooks[t.toLowerCase()]||(E.expr.match.bool.test(t)?pt:void 0)),void 0!==n?null===n?void E.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=E.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!v.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),pt={set:function(e,t,n){return!1===t?E.removeAttr(e,n):e.setAttribute(n,n),n}},E.each(E.expr.match.bool.source.match(/\w+/g),function(e,t){var a=dt[t]||E.find.attr;dt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=dt[o],dt[o]=r,r=null!=a(e,t,n)?o:null,dt[o]=i),r}});var ht=/^(?:input|select|textarea|button)$/i,gt=/^(?:a|area)$/i;function yt(e){return(e.match(P)||[]).join(" ")}function vt(e){return e.getAttribute&&e.getAttribute("class")||""}function mt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}E.fn.extend({prop:function(e,t){return B(this,E.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[E.propFix[e]||e]})}}),E.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&E.isXMLDoc(e)||(t=E.propFix[t]||t,i=E.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=E.find.attr(e,"tabindex");return t?parseInt(t,10):ht.test(e.nodeName)||gt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),v.optSelected||(E.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),E.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){E.propFix[this.toLowerCase()]=this}),E.fn.extend({addClass:function(t){var e,n,r,i,o,a;return m(t)?this.each(function(e){E(this).addClass(t.call(this,e,vt(this)))}):(e=mt(t)).length?this.each(function(){if(r=vt(this),n=1===this.nodeType&&" "+yt(r)+" "){for(o=0;o<e.length;o++)i=e[o],n.indexOf(" "+i+" ")<0&&(n+=i+" ");a=yt(n),r!==a&&this.setAttribute("class",a)}}):this},removeClass:function(t){var e,n,r,i,o,a;return m(t)?this.each(function(e){E(this).removeClass(t.call(this,e,vt(this)))}):arguments.length?(e=mt(t)).length?this.each(function(){if(r=vt(this),n=1===this.nodeType&&" "+yt(r)+" "){for(o=0;o<e.length;o++){i=e[o];while(-1<n.indexOf(" "+i+" "))n=n.replace(" "+i+" "," ")}a=yt(n),r!==a&&this.setAttribute("class",a)}}):this:this.attr("class","")},toggleClass:function(t,n){var e,r,i,o,a=typeof t,s="string"===a||Array.isArray(t);return m(t)?this.each(function(e){E(this).toggleClass(t.call(this,e,vt(this),n),n)}):"boolean"==typeof n&&s?n?this.addClass(t):this.removeClass(t):(e=mt(t),this.each(function(){if(s)for(o=E(this),i=0;i<e.length;i++)r=e[i],o.hasClass(r)?o.removeClass(r):o.addClass(r);else void 0!==t&&"boolean"!==a||((r=vt(this))&&Y.set(this,"__className__",r),this.setAttribute&&this.setAttribute("class",r||!1===t?"":Y.get(this,"__className__")||""))}))},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+yt(vt(n))+" ").indexOf(t))return!0;return!1}});var xt=/\r/g;E.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,E(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=E.map(t,function(e){return null==e?"":e+""})),(r=E.valHooks[this.type]||E.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=E.valHooks[t.type]||E.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(xt,""):null==e?"":e:void 0}}),E.extend({valHooks:{option:{get:function(e){var t=E.find.attr(e,"value");return null!=t?t:yt(E.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=E(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=E.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<E.inArray(E.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),E.each(["radio","checkbox"],function(){E.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<E.inArray(E(e).val(),t)}},v.checkOn||(E.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),v.focusin="onfocusin"in C;var bt=/^(?:focusinfocus|focusoutblur)$/,wt=function(e){e.stopPropagation()};E.extend(E.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||S],d=y.call(e,"type")?e.type:e,h=y.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||S,3!==n.nodeType&&8!==n.nodeType&&!bt.test(d+E.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[E.expando]?e:new E.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:E.makeArray(t,[e]),c=E.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,bt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||S)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),E.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,wt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,wt),E.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=E.extend(new E.Event,n,{type:e,isSimulated:!0});E.event.trigger(r,null,t)}}),E.fn.extend({trigger:function(e,t){return this.each(function(){E.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return E.event.trigger(e,t,n,!0)}}),v.focusin||E.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){E.event.simulate(r,e.target,E.event.fix(e))};E.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var Tt=C.location,Ct={guid:Date.now()},St=/\?/;E.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||E.error("Invalid XML: "+(n?E.map(n.childNodes,function(e){return e.textContent}).join("\n"):e)),t};var Et=/\[\]$/,kt=/\r?\n/g,At=/^(?:submit|button|image|reset|file)$/i,Nt=/^(?:input|select|textarea|keygen)/i;function jt(n,e,r,i){var t;if(Array.isArray(e))E.each(e,function(e,t){r||Et.test(n)?i(n,t):jt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)jt(n+"["+t+"]",e[t],r,i)}E.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!E.isPlainObject(e))E.each(e,function(){i(this.name,this.value)});else for(n in e)jt(n,e[n],t,i);return r.join("&")},E.fn.extend({serialize:function(){return E.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=E.prop(this,"elements");return e?E.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!E(this).is(":disabled")&&Nt.test(this.nodeName)&&!At.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=E(this).val();return null==n?null:Array.isArray(n)?E.map(n,function(e){return{name:t.name,value:e.replace(kt,"\r\n")}}):{name:t.name,value:n.replace(kt,"\r\n")}}).get()}});var Dt=/%20/g,qt=/#.*$/,Lt=/([?&])_=[^&]*/,Ht=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ot=/^(?:GET|HEAD)$/,Pt=/^\/\//,Rt={},Mt={},It="*/".concat("*"),Wt=S.createElement("a");function Ft(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function $t(t,i,o,a){var s={},u=t===Mt;function l(e){var r;return s[e]=!0,E.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function Bt(e,t){var n,r,i=E.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&E.extend(!0,e,r),e}Wt.href=Tt.href,E.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Tt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":It,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":E.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Bt(Bt(e,E.ajaxSettings),t):Bt(E.ajaxSettings,e)},ajaxPrefilter:Ft(Rt),ajaxTransport:Ft(Mt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,y=E.ajaxSetup({},t),v=y.context||y,m=y.context&&(v.nodeType||v.jquery)?E(v):E.event,x=E.Deferred(),b=E.Callbacks("once memory"),w=y.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Ht.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(y.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),y.url=((e||y.url||Tt.href)+"").replace(Pt,Tt.protocol+"//"),y.type=t.method||t.type||y.method||y.type,y.dataTypes=(y.dataType||"*").toLowerCase().match(P)||[""],null==y.crossDomain){r=S.createElement("a");try{r.href=y.url,r.href=r.href,y.crossDomain=Wt.protocol+"//"+Wt.host!=r.protocol+"//"+r.host}catch(e){y.crossDomain=!0}}if(y.data&&y.processData&&"string"!=typeof y.data&&(y.data=E.param(y.data,y.traditional)),$t(Rt,y,t,T),h)return T;for(i in(g=E.event&&y.global)&&0==E.active++&&E.event.trigger("ajaxStart"),y.type=y.type.toUpperCase(),y.hasContent=!Ot.test(y.type),f=y.url.replace(qt,""),y.hasContent?y.data&&y.processData&&0===(y.contentType||"").indexOf("application/x-www-form-urlencoded")&&(y.data=y.data.replace(Dt,"+")):(o=y.url.slice(f.length),y.data&&(y.processData||"string"==typeof y.data)&&(f+=(St.test(f)?"&":"?")+y.data,delete y.data),!1===y.cache&&(f=f.replace(Lt,"$1"),o=(St.test(f)?"&":"?")+"_="+Ct.guid+++o),y.url=f+o),y.ifModified&&(E.lastModified[f]&&T.setRequestHeader("If-Modified-Since",E.lastModified[f]),E.etag[f]&&T.setRequestHeader("If-None-Match",E.etag[f])),(y.data&&y.hasContent&&!1!==y.contentType||t.contentType)&&T.setRequestHeader("Content-Type",y.contentType),T.setRequestHeader("Accept",y.dataTypes[0]&&y.accepts[y.dataTypes[0]]?y.accepts[y.dataTypes[0]]+("*"!==y.dataTypes[0]?", "+It+"; q=0.01":""):y.accepts["*"]),y.headers)T.setRequestHeader(i,y.headers[i]);if(y.beforeSend&&(!1===y.beforeSend.call(v,T,y)||h))return T.abort();if(u="abort",b.add(y.complete),T.done(y.success),T.fail(y.error),c=$t(Mt,y,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,y]),h)return T;y.async&&0<y.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},y.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(y,T,n)),!i&&-1<E.inArray("script",y.dataTypes)&&E.inArray("json",y.dataTypes)<0&&(y.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(y,s,T,i),i?(y.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(E.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(E.etag[f]=u)),204===e||"HEAD"===y.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(v,[o,l,T]):x.rejectWith(v,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,y,i?o:a]),b.fireWith(v,[T,l]),g&&(m.trigger("ajaxComplete",[T,y]),--E.active||E.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return E.get(e,t,n,"json")},getScript:function(e,t){return E.get(e,void 0,t,"script")}}),E.each(["get","post"],function(e,i){E[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),E.ajax(E.extend({url:e,type:i,dataType:r,data:t,success:n},E.isPlainObject(e)&&e))}}),E.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),E._evalUrl=function(e,t,n){return E.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){E.globalEval(e,t,n)}})},E.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=E(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){E(this).wrapInner(n.call(this,e))}):this.each(function(){var e=E(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){E(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){E(this).replaceWith(this.childNodes)}),this}}),E.expr.pseudos.hidden=function(e){return!E.expr.pseudos.visible(e)},E.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},E.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var _t={0:200,1223:204},zt=E.ajaxSettings.xhr();v.cors=!!zt&&"withCredentials"in zt,v.ajax=zt=!!zt,E.ajaxTransport(function(i){var o,a;if(v.cors||zt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(_t[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),E.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),E.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return E.globalEval(e),e}}}),E.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),E.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=E("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),S.head.appendChild(r[0])},abort:function(){i&&i()}}});var Ut,Xt=[],Vt=/(=)\?(?=&|$)|\?\?/;E.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Xt.pop()||E.expando+"_"+Ct.guid++;return this[e]=!0,e}}),E.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Vt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Vt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Vt,"$1"+r):!1!==e.jsonp&&(e.url+=(St.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||E.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?E(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Xt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),v.createHTMLDocument=((Ut=S.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Ut.childNodes.length),E.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(v.createHTMLDocument?((r=(t=S.implementation.createHTMLDocument("")).createElement("base")).href=S.location.href,t.head.appendChild(r)):t=S),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&E(o).remove(),E.merge([],i.childNodes)));var r,i,o},E.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=yt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&E.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?E("<div>").append(E.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},E.expr.pseudos.animated=function(t){return E.grep(E.timers,function(e){return t===e.elem}).length},E.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=E.css(e,"position"),c=E(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=E.css(e,"top"),u=E.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,E.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},E.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){E.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===E.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===E.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=E(e).offset()).top+=E.css(e,"borderTopWidth",!0),i.left+=E.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-E.css(r,"marginTop",!0),left:t.left-i.left-E.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===E.css(e,"position"))e=e.offsetParent;return e||re})}}),E.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;E.fn[t]=function(e){return B(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),E.each(["top","left"],function(e,n){E.cssHooks[n]=_e(v.pixelPosition,function(e,t){if(t)return t=Be(e,n),Pe.test(t)?E(e).position()[n]+"px":t})}),E.each({Height:"height",Width:"width"},function(a,s){E.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){E.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return B(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?E.css(e,t,i):E.style(e,t,n,i)},s,n?e:void 0,n)}})}),E.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){E.fn[t]=function(e){return this.on(t,e)}}),E.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),E.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){E.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Gt=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;E.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||E.guid++,i},E.holdReady=function(e){e?E.readyWait++:E.ready(!0)},E.isArray=Array.isArray,E.parseJSON=JSON.parse,E.nodeName=A,E.isFunction=m,E.isWindow=x,E.camelCase=X,E.type=w,E.now=Date.now,E.isNumeric=function(e){var t=E.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},E.trim=function(e){return null==e?"":(e+"").replace(Gt,"$1")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return E});var Yt=C.jQuery,Qt=C.$;return E.noConflict=function(e){return C.$===E&&(C.$=Qt),e&&C.jQuery===E&&(C.jQuery=Yt),E},"undefined"==typeof e&&(C.jQuery=C.$=E),E});
;
/**
 * @file
 * Parse inline JSON and initialize the drupalSettings global object.
 */

(function () {
  // Use direct child elements to harden against XSS exploits when CSP is on.
  const settingsElement = document.querySelector(
    'head > script[type="application/json"][data-drupal-selector="drupal-settings-json"], body > script[type="application/json"][data-drupal-selector="drupal-settings-json"]',
  );

  /**
   * Variable generated by Drupal with all the configuration created from PHP.
   *
   * @global
   *
   * @type {object}
   */
  window.drupalSettings = {};

  if (settingsElement !== null) {
    window.drupalSettings = JSON.parse(settingsElement.textContent);
  }
})();
;
/**
 * @file
 * Defines the Drupal JavaScript API.
 */

/**
 * A jQuery object, typically the return value from a `$(selector)` call.
 *
 * Holds an HTMLElement or a collection of HTMLElements.
 *
 * @typedef {object} jQuery
 *
 * @prop {number} length=0
 *   Number of elements contained in the jQuery object.
 */

/**
 * Variable generated by Drupal that holds all translated strings from PHP.
 *
 * Content of this variable is automatically created by Drupal when using the
 * Interface Translation module. It holds the translation of strings used on
 * the page.
 *
 * This variable is used to pass data from the backend to the frontend. Data
 * contained in `drupalSettings` is used during behavior initialization.
 *
 * @global
 *
 * @var {object} drupalTranslations
 */

/**
 * Global Drupal object.
 *
 * All Drupal JavaScript APIs are contained in this namespace.
 *
 * @global
 *
 * @namespace
 */
window.Drupal = { behaviors: {}, locale: {} };

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it in an anonymous closure.
(function (
  Drupal,
  drupalSettings,
  drupalTranslations,
  console,
  Proxy,
  Reflect,
) {
  /**
   * Helper to rethrow errors asynchronously.
   *
   * This way Errors bubbles up outside of the original callstack, making it
   * easier to debug errors in the browser.
   *
   * @param {Error|string} error
   *   The error to be thrown.
   */
  Drupal.throwError = function (error) {
    setTimeout(() => {
      throw error;
    }, 0);
  };

  /**
   * Custom error thrown after attach/detach if one or more behaviors failed.
   * Initializes the JavaScript behaviors for page loads and Ajax requests.
   *
   * @callback Drupal~behaviorAttach
   *
   * @param {HTMLDocument|HTMLElement} context
   *   An element to detach behaviors from.
   * @param {?object} settings
   *   An object containing settings for the current context. It is rarely used.
   *
   * @see Drupal.attachBehaviors
   */

  /**
   * Reverts and cleans up JavaScript behavior initialization.
   *
   * @callback Drupal~behaviorDetach
   *
   * @param {HTMLDocument|HTMLElement} context
   *   An element to attach behaviors to.
   * @param {object} settings
   *   An object containing settings for the current context.
   * @param {string} trigger
   *   One of `'unload'`, `'move'`, or `'serialize'`.
   *
   * @see Drupal.detachBehaviors
   */

  /**
   * @typedef {object} Drupal~behavior
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Function run on page load and after an Ajax call.
   * @prop {Drupal~behaviorDetach} [detach]
   *   Function run when content is serialized or removed from the page.
   */

  /**
   * Holds all initialization methods.
   *
   * @namespace Drupal.behaviors
   *
   * @type {Object.<string, Drupal~behavior>}
   */

  /**
   * Defines a behavior to be run during attach and detach phases.
   *
   * Attaches all registered behaviors to a page element.
   *
   * Behaviors are event-triggered actions that attach to page elements,
   * enhancing default non-JavaScript UIs. Behaviors are registered in the
   * {@link Drupal.behaviors} object using the method 'attach' and optionally
   * also 'detach'.
   *
   * {@link Drupal.attachBehaviors} is added below to the `jQuery.ready` event
   * and therefore runs on initial page load. Developers implementing Ajax in
   * their solutions should also call this function after new page content has
   * been loaded, feeding in an element to be processed, in order to attach all
   * behaviors to the new content.
   *
   * Behaviors should use `var elements =
   * once('behavior-name', selector, context);` to ensure the behavior is
   * attached only once to a given element. (Doing so enables the reprocessing
   * of given elements, which may be needed on occasion despite the ability to
   * limit behavior attachment to a particular element.)
   *
   * @example
   * Drupal.behaviors.behaviorName = {
   *   attach: function (context, settings) {
   *     // ...
   *   },
   *   detach: function (context, settings, trigger) {
   *     // ...
   *   }
   * };
   *
   * @param {HTMLDocument|HTMLElement} [context=document]
   *   An element to attach behaviors to.
   * @param {object} [settings=drupalSettings]
   *   An object containing settings for the current context. If none is given,
   *   the global {@link drupalSettings} object is used.
   *
   * @see Drupal~behaviorAttach
   * @see Drupal.detachBehaviors
   *
   * @throws {Drupal~DrupalBehaviorError}
   */
  Drupal.attachBehaviors = function (context, settings) {
    context = context || document;
    settings = settings || drupalSettings;
    const behaviors = Drupal.behaviors;
    // Execute all of them.
    Object.keys(behaviors || {}).forEach((i) => {
      if (typeof behaviors[i].attach === 'function') {
        // Don't stop the execution of behaviors in case of an error.
        try {
          behaviors[i].attach(context, settings);
        } catch (e) {
          Drupal.throwError(e);
        }
      }
    });
  };

  /**
   * Detaches registered behaviors from a page element.
   *
   * Developers implementing Ajax in their solutions should call this function
   * before page content is about to be removed, feeding in an element to be
   * processed, in order to allow special behaviors to detach from the content.
   *
   * Such implementations should use `once.filter()` and `once.remove()` to find
   * elements with their corresponding `Drupal.behaviors.behaviorName.attach`
   * implementation, i.e. `once.remove('behaviorName', selector, context)`,
   * to ensure the behavior is detached only from previously processed elements.
   *
   * @param {HTMLDocument|HTMLElement} [context=document]
   *   An element to detach behaviors from.
   * @param {object} [settings=drupalSettings]
   *   An object containing settings for the current context. If none given,
   *   the global {@link drupalSettings} object is used.
   * @param {string} [trigger='unload']
   *   A string containing what's causing the behaviors to be detached. The
   *   possible triggers are:
   *   - `'unload'`: The context element is being removed from the DOM.
   *   - `'move'`: The element is about to be moved within the DOM (for example,
   *     during a tabledrag row swap). After the move is completed,
   *     {@link Drupal.attachBehaviors} is called, so that the behavior can undo
   *     whatever it did in response to the move. Many behaviors won't need to
   *     do anything simply in response to the element being moved, but because
   *     IFRAME elements reload their "src" when being moved within the DOM,
   *     behaviors bound to IFRAME elements (like WYSIWYG editors) may need to
   *     take some action.
   *   - `'serialize'`: When an Ajax form is submitted, this is called with the
   *     form as the context. This provides every behavior within the form an
   *     opportunity to ensure that the field elements have correct content
   *     in them before the form is serialized. The canonical use-case is so
   *     that WYSIWYG editors can update the hidden textarea to which they are
   *     bound.
   *
   * @throws {Drupal~DrupalBehaviorError}
   *
   * @see Drupal~behaviorDetach
   * @see Drupal.attachBehaviors
   */
  Drupal.detachBehaviors = function (context, settings, trigger) {
    context = context || document;
    settings = settings || drupalSettings;
    trigger = trigger || 'unload';
    const behaviors = Drupal.behaviors;
    // Execute all of them.
    Object.keys(behaviors || {}).forEach((i) => {
      if (typeof behaviors[i].detach === 'function') {
        // Don't stop the execution of behaviors in case of an error.
        try {
          behaviors[i].detach(context, settings, trigger);
        } catch (e) {
          Drupal.throwError(e);
        }
      }
    });
  };

  /**
   * Encodes special characters in a plain-text string for display as HTML.
   *
   * @param {string} str
   *   The string to be encoded.
   *
   * @return {string}
   *   The encoded string.
   *
   * @ingroup sanitization
   */
  Drupal.checkPlain = function (str) {
    str = str
      .toString()
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
    return str;
  };

  /**
   * Replaces placeholders with sanitized values in a string.
   *
   * @param {string} str
   *   A string with placeholders.
   * @param {object} args
   *   An object of replacements pairs to make. Incidences of any key in this
   *   array are replaced with the corresponding value. Based on the first
   *   character of the key, the value is escaped and/or themed:
   *    - `'!variable'`: inserted as is.
   *    - `'@variable'`: escape plain text to HTML ({@link Drupal.checkPlain}).
   *    - `'%variable'`: escape text and theme as a placeholder for user-
   *      submitted content ({@link Drupal.checkPlain} +
   *      `{@link Drupal.theme}('placeholder')`).
   *
   * @return {string}
   *   The formatted string.
   *
   * @see Drupal.t
   */
  Drupal.formatString = function (str, args) {
    // Keep args intact.
    const processedArgs = {};
    // Transform arguments before inserting them.
    Object.keys(args || {}).forEach((key) => {
      switch (key.charAt(0)) {
        // Escaped only.
        case '@':
          processedArgs[key] = Drupal.checkPlain(args[key]);
          break;

        // Pass-through.
        case '!':
          processedArgs[key] = args[key];
          break;

        // Escaped and placeholder.
        default:
          processedArgs[key] = Drupal.theme('placeholder', args[key]);
          break;
      }
    });

    return Drupal.stringReplace(str, processedArgs, null);
  };

  /**
   * Replaces substring.
   *
   * The longest keys will be tried first. Once a substring has been replaced,
   * its new value will not be searched again.
   *
   * @param {string} str
   *   A string with placeholders.
   * @param {object} args
   *   Key-value pairs.
   * @param {Array|null} keys
   *   Array of keys from `args`. Internal use only.
   *
   * @return {string}
   *   The replaced string.
   */
  Drupal.stringReplace = function (str, args, keys) {
    if (str.length === 0) {
      return str;
    }

    // If the array of keys is not passed then collect the keys from the args.
    if (!Array.isArray(keys)) {
      keys = Object.keys(args || {});

      // Order the keys by the character length. The shortest one is the first.
      keys.sort((a, b) => a.length - b.length);
    }

    if (keys.length === 0) {
      return str;
    }

    // Take next longest one from the end.
    const key = keys.pop();
    const fragments = str.split(key);

    if (keys.length) {
      for (let i = 0; i < fragments.length; i++) {
        // Process each fragment with a copy of remaining keys.
        fragments[i] = Drupal.stringReplace(fragments[i], args, keys.slice(0));
      }
    }

    return fragments.join(args[key]);
  };

  /**
   * Translates strings to the page language, or a given language.
   *
   * See the documentation of the server-side t() function for further details.
   *
   * @param {string} str
   *   A string containing the English text to translate.
   * @param {Object.<string, string>} [args]
   *   An object of replacements pairs to make after translation. Incidences
   *   of any key in this array are replaced with the corresponding value.
   *   See {@link Drupal.formatString}.
   * @param {object} [options]
   *   Additional options for translation.
   * @param {string} [options.context='']
   *   The context the source string belongs to.
   *
   * @return {string}
   *   The formatted string.
   *   The translated string.
   */
  Drupal.t = function (str, args, options) {
    options = options || {};
    options.context = options.context || '';

    // Fetch the localized version of the string.
    if (
      typeof drupalTranslations !== 'undefined' &&
      drupalTranslations.strings &&
      drupalTranslations.strings[options.context] &&
      drupalTranslations.strings[options.context][str]
    ) {
      str = drupalTranslations.strings[options.context][str];
    }

    if (args) {
      str = Drupal.formatString(str, args);
    }
    return str;
  };

  /**
   * Returns the URL to a Drupal page.
   *
   * @param {string} path
   *   Drupal path to transform to URL.
   *
   * @return {string}
   *   The full URL.
   */
  Drupal.url = function (path) {
    return drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + path;
  };

  /**
   * Returns the passed in URL as an absolute URL.
   *
   * @param {string} url
   *   The URL string to be normalized to an absolute URL.
   *
   * @return {string}
   *   The normalized, absolute URL.
   *
   * @see https://github.com/angular/angular.js/blob/v1.4.4/src/ng/urlUtils.js
   * @see https://grack.com/blog/2009/11/17/absolutizing-url-in-javascript
   * @see https://github.com/jquery/jquery-ui/blob/1.11.4/ui/tabs.js#L53
   */
  Drupal.url.toAbsolute = function (url) {
    const urlParsingNode = document.createElement('a');

    // Decode the URL first; this is required by IE <= 6. Decoding non-UTF-8
    // strings may throw an exception.
    try {
      url = decodeURIComponent(url);
    } catch (e) {
      // Empty.
    }

    urlParsingNode.setAttribute('href', url);

    // IE <= 7 normalizes the URL when assigned to the anchor node similar to
    // the other browsers.
    return urlParsingNode.cloneNode(false).href;
  };

  /**
   * Returns true if the URL is within Drupal's base path.
   *
   * @param {string} url
   *   The URL string to be tested.
   *
   * @return {boolean}
   *   `true` if local.
   *
   * @see https://github.com/jquery/jquery-ui/blob/1.11.4/ui/tabs.js#L58
   */
  Drupal.url.isLocal = function (url) {
    // Always use browser-derived absolute URLs in the comparison, to avoid
    // attempts to break out of the base path using directory traversal.
    let absoluteUrl = Drupal.url.toAbsolute(url);
    let { protocol } = window.location;

    // Consider URLs that match this site's base URL but use HTTPS instead of HTTP
    // as local as well.
    if (protocol === 'http:' && absoluteUrl.indexOf('https:') === 0) {
      protocol = 'https:';
    }
    let baseUrl = `${protocol}//${
      window.location.host
    }${drupalSettings.path.baseUrl.slice(0, -1)}`;

    // Decoding non-UTF-8 strings may throw an exception.
    try {
      absoluteUrl = decodeURIComponent(absoluteUrl);
    } catch (e) {
      // Empty.
    }
    try {
      baseUrl = decodeURIComponent(baseUrl);
    } catch (e) {
      // Empty.
    }

    // The given URL matches the site's base URL, or has a path under the site's
    // base URL.
    return absoluteUrl === baseUrl || absoluteUrl.indexOf(`${baseUrl}/`) === 0;
  };

  /**
   * Formats a string containing a count of items.
   *
   * This function ensures that the string is pluralized correctly. Since
   * {@link Drupal.t} is called by this function, make sure not to pass
   * already-localized strings to it.
   *
   * See the documentation of the server-side
   * \Drupal\Core\StringTranslation\TranslationInterface::formatPlural()
   * function for more details.
   *
   * @param {number} count
   *   The item count to display.
   * @param {string} singular
   *   The string for the singular case. Please make sure it is clear this is
   *   singular, to ease translation (e.g. use "1 new comment" instead of "1
   *   new"). Do not use @count in the singular string.
   * @param {string} plural
   *   The string for the plural case. Please make sure it is clear this is
   *   plural, to ease translation. Use @count in place of the item count, as in
   *   "@count new comments".
   * @param {object} [args]
   *   An object of replacements pairs to make after translation. Incidences
   *   of any key in this array are replaced with the corresponding value.
   *   See {@link Drupal.formatString}.
   *   Note that you do not need to include @count in this array.
   *   This replacement is done automatically for the plural case.
   * @param {object} [options]
   *   The options to pass to the {@link Drupal.t} function.
   *
   * @return {string}
   *   A translated string.
   */
  Drupal.formatPlural = function (count, singular, plural, args, options) {
    args = args || {};
    args['@count'] = count;

    const pluralDelimiter = drupalSettings.pluralDelimiter;
    const translations = Drupal.t(
      singular + pluralDelimiter + plural,
      args,
      options,
    ).split(pluralDelimiter);
    let index = 0;

    // Determine the index of the plural form.
    if (
      typeof drupalTranslations !== 'undefined' &&
      drupalTranslations.pluralFormula
    ) {
      index =
        count in drupalTranslations.pluralFormula
          ? drupalTranslations.pluralFormula[count]
          : drupalTranslations.pluralFormula.default;
    } else if (args['@count'] !== 1) {
      index = 1;
    }

    return translations[index];
  };

  /**
   * Encodes a Drupal path for use in a URL.
   *
   * For aesthetic reasons slashes are not escaped.
   *
   * @param {string} item
   *   Unencoded path.
   *
   * @return {string}
   *   The encoded path.
   */
  Drupal.encodePath = function (item) {
    return window.encodeURIComponent(item).replace(/%2F/g, '/');
  };

  /**
   * Triggers deprecation error.
   *
   * Deprecation errors are only triggered if deprecation errors haven't
   * been suppressed.
   *
   * @param {Object} deprecation
   *   The deprecation options.
   * @param {string} deprecation.message
   *   The deprecation message.
   *
   * @see https://www.drupal.org/core/deprecation#javascript
   */
  Drupal.deprecationError = ({ message }) => {
    if (
      drupalSettings.suppressDeprecationErrors === false &&
      typeof console !== 'undefined' &&
      console.warn
    ) {
      console.warn(`[Deprecation] ${message}`);
    }
  };

  /**
   * Triggers deprecation error when object property is being used.
   *
   * @param {Object} deprecation
   *   The deprecation options.
   * @param {Object} deprecation.target
   *   The targeted object.
   * @param {string} deprecation.deprecatedProperty
   *   A key of the deprecated property.
   * @param {string} deprecation.message
   *   The deprecation message.
   * @returns {Object}
   *
   * @see https://www.drupal.org/core/deprecation#javascript
   */
  Drupal.deprecatedProperty = ({ target, deprecatedProperty, message }) => {
    // Proxy and Reflect are not supported by all browsers. Unsupported browsers
    // are ignored since this is a development feature.
    if (!Proxy || !Reflect) {
      return target;
    }

    return new Proxy(target, {
      get: (target, key, ...rest) => {
        if (key === deprecatedProperty) {
          Drupal.deprecationError({ message });
        }
        return Reflect.get(target, key, ...rest);
      },
    });
  };

  /**
   * Generates the themed representation of a Drupal object.
   *
   * All requests for themed output must go through this function. It examines
   * the request and routes it to the appropriate theme function. If the current
   * theme does not provide an override function, the generic theme function is
   * called.
   *
   * @example
   * <caption>To retrieve the HTML for text that should be emphasized and
   * displayed as a placeholder inside a sentence.</caption>
   * Drupal.theme('placeholder', text);
   *
   * @namespace
   *
   * @param {function} func
   *   The name of the theme function to call.
   * @param {...args}
   *   Additional arguments to pass along to the theme function.
   *
   * @return {string|object|HTMLElement|jQuery}
   *   Any data the theme function returns. This could be a plain HTML string,
   *   but also a complex object.
   */
  Drupal.theme = function (func, ...args) {
    if (func in Drupal.theme) {
      return Drupal.theme[func](...args);
    }
  };

  /**
   * Formats text for emphasized display in a placeholder inside a sentence.
   *
   * @param {string} str
   *   The text to format (plain-text).
   *
   * @return {string}
   *   The formatted text (html).
   */
  Drupal.theme.placeholder = function (str) {
    return `<em class="placeholder">${Drupal.checkPlain(str)}</em>`;
  };
})(
  Drupal,
  window.drupalSettings,
  window.drupalTranslations,
  window.console,
  window.Proxy,
  window.Reflect,
);
;
// Allow other JavaScript libraries to use $.
if (window.jQuery) {
  jQuery.noConflict();
}

// Class indicating that JS is enabled; used for styling purpose.
document.documentElement.className += ' js';

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it in an anonymous closure.
(function (Drupal, drupalSettings) {
  /**
   * Calls callback when document ready.
   *
   * @param {function} callback
   *   The function to be called on document ready.
   */
  const domReady = (callback) => {
    const listener = () => {
      callback();
      document.removeEventListener('DOMContentLoaded', listener);
    };
    if (document.readyState !== 'loading') {
      setTimeout(callback, 0);
    } else {
      document.addEventListener('DOMContentLoaded', listener);
    }
  };

  // Attach all behaviors.
  domReady(() => {
    Drupal.attachBehaviors(document, drupalSettings);
  });
})(Drupal, window.drupalSettings);
;
/*! jQuery Migrate v1.4.1 | (c) jQuery Foundation and other contributors | jquery.org/license */
"undefined"==typeof jQuery.migrateMute&&(jQuery.migrateMute=!0),function(a,b,c){function d(c){var d=b.console;f[c]||(f[c]=!0,a.migrateWarnings.push(c),d&&d.warn&&!a.migrateMute&&(d.warn("JQMIGRATE: "+c),a.migrateTrace&&d.trace&&d.trace()))}function e(b,c,e,f){if(Object.defineProperty)try{return void Object.defineProperty(b,c,{configurable:!0,enumerable:!0,get:function(){return d(f),e},set:function(a){d(f),e=a}})}catch(g){}a._definePropertyBroken=!0,b[c]=e}a.migrateVersion="1.4.1";var f={};a.migrateWarnings=[],a.migrateTrace===c&&(a.migrateTrace=!0),a.migrateReset=function(){f={},a.migrateWarnings.length=0},"BackCompat"===document.compatMode&&d("jQuery is not compatible with Quirks Mode");var g=a("<input/>",{size:1}).attr("size")&&a.attrFn,h=a.attr,i=a.attrHooks.value&&a.attrHooks.value.get||function(){return null},j=a.attrHooks.value&&a.attrHooks.value.set||function(){return c},k=/^(?:input|button)$/i,l=/^[238]$/,m=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,n=/^(?:checked|selected)$/i;e(a,"attrFn",g||{},"jQuery.attrFn is deprecated"),a.attr=function(b,e,f,i){var j=e.toLowerCase(),o=b&&b.nodeType;return i&&(h.length<4&&d("jQuery.fn.attr( props, pass ) is deprecated"),b&&!l.test(o)&&(g?e in g:a.isFunction(a.fn[e])))?a(b)[e](f):("type"===e&&f!==c&&k.test(b.nodeName)&&b.parentNode&&d("Can't change the 'type' of an input or button in IE 6/7/8"),!a.attrHooks[j]&&m.test(j)&&(a.attrHooks[j]={get:function(b,d){var e,f=a.prop(b,d);return f===!0||"boolean"!=typeof f&&(e=b.getAttributeNode(d))&&e.nodeValue!==!1?d.toLowerCase():c},set:function(b,c,d){var e;return c===!1?a.removeAttr(b,d):(e=a.propFix[d]||d,e in b&&(b[e]=!0),b.setAttribute(d,d.toLowerCase())),d}},n.test(j)&&d("jQuery.fn.attr('"+j+"') might use property instead of attribute")),h.call(a,b,e,f))},a.attrHooks.value={get:function(a,b){var c=(a.nodeName||"").toLowerCase();return"button"===c?i.apply(this,arguments):("input"!==c&&"option"!==c&&d("jQuery.fn.attr('value') no longer gets properties"),b in a?a.value:null)},set:function(a,b){var c=(a.nodeName||"").toLowerCase();return"button"===c?j.apply(this,arguments):("input"!==c&&"option"!==c&&d("jQuery.fn.attr('value', val) no longer sets properties"),void(a.value=b))}};var o,p,q=a.fn.init,r=a.find,s=a.parseJSON,t=/^\s*</,u=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,v=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,w=/^([^<]*)(<[\w\W]+>)([^>]*)$/;a.fn.init=function(b,e,f){var g,h;return b&&"string"==typeof b&&!a.isPlainObject(e)&&(g=w.exec(a.trim(b)))&&g[0]&&(t.test(b)||d("$(html) HTML strings must start with '<' character"),g[3]&&d("$(html) HTML text after last tag is ignored"),"#"===g[0].charAt(0)&&(d("HTML string cannot start with a '#' character"),a.error("JQMIGRATE: Invalid selector string (XSS)")),e&&e.context&&e.context.nodeType&&(e=e.context),a.parseHTML)?q.call(this,a.parseHTML(g[2],e&&e.ownerDocument||e||document,!0),e,f):(h=q.apply(this,arguments),b&&b.selector!==c?(h.selector=b.selector,h.context=b.context):(h.selector="string"==typeof b?b:"",b&&(h.context=b.nodeType?b:e||document)),h)},a.fn.init.prototype=a.fn,a.find=function(a){var b=Array.prototype.slice.call(arguments);if("string"==typeof a&&u.test(a))try{document.querySelector(a)}catch(c){a=a.replace(v,function(a,b,c,d){return"["+b+c+'"'+d+'"]'});try{document.querySelector(a),d("Attribute selector with '#' must be quoted: "+b[0]),b[0]=a}catch(e){d("Attribute selector with '#' was not fixed: "+b[0])}}return r.apply(this,b)};var x;for(x in r)Object.prototype.hasOwnProperty.call(r,x)&&(a.find[x]=r[x]);a.parseJSON=function(a){return a?s.apply(this,arguments):(d("jQuery.parseJSON requires a valid JSON string"),null)},a.uaMatch=function(a){a=a.toLowerCase();var b=/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||a.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},a.browser||(o=a.uaMatch(navigator.userAgent),p={},o.browser&&(p[o.browser]=!0,p.version=o.version),p.chrome?p.webkit=!0:p.webkit&&(p.safari=!0),a.browser=p),e(a,"browser",a.browser,"jQuery.browser is deprecated"),a.boxModel=a.support.boxModel="CSS1Compat"===document.compatMode,e(a,"boxModel",a.boxModel,"jQuery.boxModel is deprecated"),e(a.support,"boxModel",a.support.boxModel,"jQuery.support.boxModel is deprecated"),a.sub=function(){function b(a,c){return new b.fn.init(a,c)}a.extend(!0,b,this),b.superclass=this,b.fn=b.prototype=this(),b.fn.constructor=b,b.sub=this.sub,b.fn.init=function(d,e){var f=a.fn.init.call(this,d,e,c);return f instanceof b?f:b(f)},b.fn.init.prototype=b.fn;var c=b(document);return d("jQuery.sub() is deprecated"),b},a.fn.size=function(){return d("jQuery.fn.size() is deprecated; use the .length property"),this.length};var y=!1;a.swap&&a.each(["height","width","reliableMarginRight"],function(b,c){var d=a.cssHooks[c]&&a.cssHooks[c].get;d&&(a.cssHooks[c].get=function(){var a;return y=!0,a=d.apply(this,arguments),y=!1,a})}),a.swap=function(a,b,c,e){var f,g,h={};y||d("jQuery.swap() is undocumented and deprecated");for(g in b)h[g]=a.style[g],a.style[g]=b[g];f=c.apply(a,e||[]);for(g in b)a.style[g]=h[g];return f},a.ajaxSetup({converters:{"text json":a.parseJSON}});var z=a.fn.data;a.fn.data=function(b){var e,f,g=this[0];return!g||"events"!==b||1!==arguments.length||(e=a.data(g,b),f=a._data(g,b),e!==c&&e!==f||f===c)?z.apply(this,arguments):(d("Use of jQuery.fn.data('events') is deprecated"),f)};var A=/\/(java|ecma)script/i;a.clean||(a.clean=function(b,c,e,f){c=c||document,c=!c.nodeType&&c[0]||c,c=c.ownerDocument||c,d("jQuery.clean() is deprecated");var g,h,i,j,k=[];if(a.merge(k,a.buildFragment(b,c).childNodes),e)for(i=function(a){return!a.type||A.test(a.type)?f?f.push(a.parentNode?a.parentNode.removeChild(a):a):e.appendChild(a):void 0},g=0;null!=(h=k[g]);g++)a.nodeName(h,"script")&&i(h)||(e.appendChild(h),"undefined"!=typeof h.getElementsByTagName&&(j=a.grep(a.merge([],h.getElementsByTagName("script")),i),k.splice.apply(k,[g+1,0].concat(j)),g+=j.length));return k});var B=a.event.add,C=a.event.remove,D=a.event.trigger,E=a.fn.toggle,F=a.fn.live,G=a.fn.die,H=a.fn.load,I="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",J=new RegExp("\\b(?:"+I+")\\b"),K=/(?:^|\s)hover(\.\S+|)\b/,L=function(b){return"string"!=typeof b||a.event.special.hover?b:(K.test(b)&&d("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"),b&&b.replace(K,"mouseenter$1 mouseleave$1"))};a.event.props&&"attrChange"!==a.event.props[0]&&a.event.props.unshift("attrChange","attrName","relatedNode","srcElement"),a.event.dispatch&&e(a.event,"handle",a.event.dispatch,"jQuery.event.handle is undocumented and deprecated"),a.event.add=function(a,b,c,e,f){a!==document&&J.test(b)&&d("AJAX events should be attached to document: "+b),B.call(this,a,L(b||""),c,e,f)},a.event.remove=function(a,b,c,d,e){C.call(this,a,L(b)||"",c,d,e)},a.each(["load","unload","error"],function(b,c){a.fn[c]=function(){var a=Array.prototype.slice.call(arguments,0);return"load"===c&&"string"==typeof a[0]?H.apply(this,a):(d("jQuery.fn."+c+"() is deprecated"),a.splice(0,0,c),arguments.length?this.bind.apply(this,a):(this.triggerHandler.apply(this,a),this))}}),a.fn.toggle=function(b,c){if(!a.isFunction(b)||!a.isFunction(c))return E.apply(this,arguments);d("jQuery.fn.toggle(handler, handler...) is deprecated");var e=arguments,f=b.guid||a.guid++,g=0,h=function(c){var d=(a._data(this,"lastToggle"+b.guid)||0)%g;return a._data(this,"lastToggle"+b.guid,d+1),c.preventDefault(),e[d].apply(this,arguments)||!1};for(h.guid=f;g<e.length;)e[g++].guid=f;return this.click(h)},a.fn.live=function(b,c,e){return d("jQuery.fn.live() is deprecated"),F?F.apply(this,arguments):(a(this.context).on(b,this.selector,c,e),this)},a.fn.die=function(b,c){return d("jQuery.fn.die() is deprecated"),G?G.apply(this,arguments):(a(this.context).off(b,this.selector||"**",c),this)},a.event.trigger=function(a,b,c,e){return c||J.test(a)||d("Global events are undocumented and deprecated"),D.call(this,a,b,c||document,e)},a.each(I.split("|"),function(b,c){a.event.special[c]={setup:function(){var b=this;return b!==document&&(a.event.add(document,c+"."+a.guid,function(){a.event.trigger(c,Array.prototype.slice.call(arguments,1),b,!0)}),a._data(this,c,a.guid++)),!1},teardown:function(){return this!==document&&a.event.remove(document,c+"."+a._data(this,c)),!1}}}),a.event.special.ready={setup:function(){this===document&&d("'ready' event is deprecated")}};var M=a.fn.andSelf||a.fn.addBack,N=a.fn.find;if(a.fn.andSelf=function(){return d("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),M.apply(this,arguments)},a.fn.find=function(a){var b=N.apply(this,arguments);return b.context=this.context,b.selector=this.selector?this.selector+" "+a:a,b},a.Callbacks){var O=a.Deferred,P=[["resolve","done",a.Callbacks("once memory"),a.Callbacks("once memory"),"resolved"],["reject","fail",a.Callbacks("once memory"),a.Callbacks("once memory"),"rejected"],["notify","progress",a.Callbacks("memory"),a.Callbacks("memory")]];a.Deferred=function(b){var c=O(),e=c.promise();return c.pipe=e.pipe=function(){var b=arguments;return d("deferred.pipe() is deprecated"),a.Deferred(function(d){a.each(P,function(f,g){var h=a.isFunction(b[f])&&b[f];c[g[1]](function(){var b=h&&h.apply(this,arguments);b&&a.isFunction(b.promise)?b.promise().done(d.resolve).fail(d.reject).progress(d.notify):d[g[0]+"With"](this===e?d.promise():this,h?[b]:arguments)})}),b=null}).promise()},c.isResolved=function(){return d("deferred.isResolved is deprecated"),"resolved"===c.state()},c.isRejected=function(){return d("deferred.isRejected is deprecated"),"rejected"===c.state()},b&&b.call(c,c),c}}}(jQuery,window);;
/**
* bootstrap.js v3.0.0 by @fat and @mdo
* Copyright 2013 Twitter Inc.
* http://www.apache.org/licenses/LICENSE-2.0
*/
if (!jQuery) { throw new Error("Bootstrap requires jQuery") }

/* ========================================================================
 * Bootstrap: transition.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#transitions
 * ========================================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
  // ============================================================

  function transitionEnd() {
    var el = document.createElement('bootstrap')

    var transEndEventNames = {
      'WebkitTransition' : 'webkitTransitionEnd'
    , 'MozTransition'    : 'transitionend'
    , 'OTransition'      : 'oTransitionEnd otransitionend'
    , 'transition'       : 'transitionend'
    }

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] }
      }
    }
  }

  // http://blog.alexmaccaw.com/css-transitions
  $.fn.emulateTransitionEnd = function (duration) {
    var called = false, $el = this
    $(this).one($.support.transition.end, function () { called = true })
    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
    setTimeout(callback, duration)
    return this
  }

  $(function () {
    $.support.transition = transitionEnd()
  })

}(window.jQuery);

/* ========================================================================
 * Bootstrap: alert.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#alerts
 * ========================================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // ALERT CLASS DEFINITION
  // ======================

  var dismiss = '[data-dismiss="alert"]'
  var Alert   = function (el) {
    $(el).on('click', dismiss, this.close)
  }

  Alert.prototype.close = function (e) {
    var $this    = $(this)
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = $(selector)

    if (e) e.preventDefault()

    if (!$parent.length) {
      $parent = $this.hasClass('alert') ? $this : $this.parent()
    }

    $parent.trigger(e = $.Event('close.bs.alert'))

    if (e.isDefaultPrevented()) return

    $parent.removeClass('in')

    function removeElement() {
      $parent.trigger('closed.bs.alert').remove()
    }

    $.support.transition && $parent.hasClass('fade') ?
      $parent
        .one($.support.transition.end, removeElement)
        .emulateTransitionEnd(150) :
      removeElement()
  }


  // ALERT PLUGIN DEFINITION
  // =======================

  var old = $.fn.alert

  $.fn.alert = function (option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.alert')

      if (!data) $this.data('bs.alert', (data = new Alert(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  $.fn.alert.Constructor = Alert


  // ALERT NO CONFLICT
  // =================

  $.fn.alert.noConflict = function () {
    $.fn.alert = old
    return this
  }


  // ALERT DATA-API
  // ==============

  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)

}(window.jQuery);

/* ========================================================================
 * Bootstrap: button.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#buttons
 * ========================================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // BUTTON PUBLIC CLASS DEFINITION
  // ==============================

  var Button = function (element, options) {
    this.$element = $(element)
    this.options  = $.extend({}, Button.DEFAULTS, options)
  }

  Button.DEFAULTS = {
    loadingText: 'loading...'
  }

  Button.prototype.setState = function (state) {
    var d    = 'disabled'
    var $el  = this.$element
    var val  = $el.is('input') ? 'val' : 'html'
    var data = $el.data()

    state = state + 'Text'

    if (!data.resetText) $el.data('resetText', $el[val]())

    $el[val](data[state] || this.options[state])

    // push to event loop to allow forms to submit
    setTimeout(function () {
      state == 'loadingText' ?
        $el.addClass(d).attr(d, d) :
        $el.removeClass(d).removeAttr(d);
    }, 0)
  }

  Button.prototype.toggle = function () {
    var $parent = this.$element.closest('[data-toggle="buttons"]')

    if ($parent.length) {
      var $input = this.$element.find('input')
        .prop('checked', !this.$element.hasClass('active'))
        .trigger('change')
      if ($input.prop('type') === 'radio') $parent.find('.active').removeClass('active')
    }

    this.$element.toggleClass('active')
  }


  // BUTTON PLUGIN DEFINITION
  // ========================

  var old = $.fn.button

  $.fn.button = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.button')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.button', (data = new Button(this, options)))

      if (option == 'toggle') data.toggle()
      else if (option) data.setState(option)
    })
  }

  $.fn.button.Constructor = Button


  // BUTTON NO CONFLICT
  // ==================

  $.fn.button.noConflict = function () {
    $.fn.button = old
    return this
  }


  // BUTTON DATA-API
  // ===============

  $(document).on('click.bs.button.data-api', '[data-toggle^=button]', function (e) {
    var $btn = $(e.target)
    if (!$btn.hasClass('btn')) $btn = $btn.closest('.btn')
    $btn.button('toggle')
    e.preventDefault()
  })

}(window.jQuery);

/* ========================================================================
 * Bootstrap: carousel.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#carousel
 * ========================================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // CAROUSEL CLASS DEFINITION
  // =========================

  var Carousel = function (element, options) {
    this.$element    = $(element)
    this.$indicators = this.$element.find('.carousel-indicators')
    this.options     = options
    this.paused      =
    this.sliding     =
    this.interval    =
    this.$active     =
    this.$items      = null

    this.options.pause == 'hover' && this.$element
      .on('mouseenter', $.proxy(this.pause, this))
      .on('mouseleave', $.proxy(this.cycle, this))
  }

  Carousel.DEFAULTS = {
    interval: 5000
  , pause: 'hover'
  , wrap: true
  }

  Carousel.prototype.cycle =  function (e) {
    e || (this.paused = false)

    this.interval && clearInterval(this.interval)

    this.options.interval
      && !this.paused
      && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))

    return this
  }

  Carousel.prototype.getActiveIndex = function () {
    this.$active = this.$element.find('.item.active')
    this.$items  = this.$active.parent().children()

    return this.$items.index(this.$active)
  }

  Carousel.prototype.to = function (pos) {
    var that        = this
    var activeIndex = this.getActiveIndex()

    if (pos > (this.$items.length - 1) || pos < 0) return

    if (this.sliding)       return this.$element.one('slid', function () { that.to(pos) })
    if (activeIndex == pos) return this.pause().cycle()

    return this.slide(pos > activeIndex ? 'next' : 'prev', $(this.$items[pos]))
  }

  Carousel.prototype.pause = function (e) {
    e || (this.paused = true)

    if (this.$element.find('.next, .prev').length && $.support.transition.end) {
      this.$element.trigger($.support.transition.end)
      this.cycle(true)
    }

    this.interval = clearInterval(this.interval)

    return this
  }

  Carousel.prototype.next = function () {
    if (this.sliding) return
    return this.slide('next')
  }

  Carousel.prototype.prev = function () {
    if (this.sliding) return
    return this.slide('prev')
  }

  Carousel.prototype.slide = function (type, next) {
    var $active   = this.$element.find('.item.active')
    var $next     = next || $active[type]()
    var isCycling = this.interval
    var direction = type == 'next' ? 'left' : 'right'
    var fallback  = type == 'next' ? 'first' : 'last'
    var that      = this

    if (!$next.length) {
      if (!this.options.wrap) return
      $next = this.$element.find('.item')[fallback]()
    }

    this.sliding = true

    isCycling && this.pause()

    var e = $.Event('slide.bs.carousel', { relatedTarget: $next[0], direction: direction })

    if ($next.hasClass('active')) return

    if (this.$indicators.length) {
      this.$indicators.find('.active').removeClass('active')
      this.$element.one('slid', function () {
        var $nextIndicator = $(that.$indicators.children()[that.getActiveIndex()])
        $nextIndicator && $nextIndicator.addClass('active')
      })
    }

    if ($.support.transition && this.$element.hasClass('slide')) {
      this.$element.trigger(e)
      if (e.isDefaultPrevented()) return
      $next.addClass(type)
      $next[0].offsetWidth // force reflow
      $active.addClass(direction)
      $next.addClass(direction)
      $active
        .one($.support.transition.end, function () {
          $next.removeClass([type, direction].join(' ')).addClass('active')
          $active.removeClass(['active', direction].join(' '))
          that.sliding = false
          setTimeout(function () { that.$element.trigger('slid') }, 0)
        })
        .emulateTransitionEnd(600)
    } else {
      this.$element.trigger(e)
      if (e.isDefaultPrevented()) return
      $active.removeClass('active')
      $next.addClass('active')
      this.sliding = false
      this.$element.trigger('slid')
    }

    isCycling && this.cycle()

    return this
  }


  // CAROUSEL PLUGIN DEFINITION
  // ==========================

  var old = $.fn.carousel

  $.fn.carousel = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.carousel')
      var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option)
      var action  = typeof option == 'string' ? option : options.slide

      if (!data) $this.data('bs.carousel', (data = new Carousel(this, options)))
      if (typeof option == 'number') data.to(option)
      else if (action) data[action]()
      else if (options.interval) data.pause().cycle()
    })
  }

  $.fn.carousel.Constructor = Carousel


  // CAROUSEL NO CONFLICT
  // ====================

  $.fn.carousel.noConflict = function () {
    $.fn.carousel = old
    return this
  }


  // CAROUSEL DATA-API
  // =================

  $(document).on('click.bs.carousel.data-api', '[data-slide], [data-slide-to]', function (e) {
    var $this   = $(this), href
    var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) //strip for ie7
    var options = $.extend({}, $target.data(), $this.data())
    var slideIndex = $this.attr('data-slide-to')
    if (slideIndex) options.interval = false

    $target.carousel(options)

    if (slideIndex = $this.attr('data-slide-to')) {
      $target.data('bs.carousel').to(slideIndex)
    }

    e.preventDefault()
  })

  $(window).on('load', function () {
    $('[data-ride="carousel"]').each(function () {
      var $carousel = $(this)
      $carousel.carousel($carousel.data())
    })
  })

}(window.jQuery);

/* ========================================================================
 * Bootstrap: collapse.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#collapse
 * ========================================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // COLLAPSE PUBLIC CLASS DEFINITION
  // ================================

  var Collapse = function (element, options) {
    this.$element      = $(element)
    this.options       = $.extend({}, Collapse.DEFAULTS, options)
    this.transitioning = null

    if (this.options.parent) this.$parent = $(this.options.parent)
    if (this.options.toggle) this.toggle()
  }

  Collapse.DEFAULTS = {
    toggle: true
  }

  Collapse.prototype.dimension = function () {
    var hasWidth = this.$element.hasClass('width')
    return hasWidth ? 'width' : 'height'
  }

  Collapse.prototype.show = function () {
    if (this.transitioning || this.$element.hasClass('in')) return

    var startEvent = $.Event('show.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var actives = this.$parent && this.$parent.find('> .panel > .in')

    if (actives && actives.length) {
      var hasData = actives.data('bs.collapse')
      if (hasData && hasData.transitioning) return
      actives.collapse('hide')
      hasData || actives.data('bs.collapse', null)
    }

    var dimension = this.dimension()

    this.$element
      .removeClass('collapse')
      .addClass('collapsing')
      [dimension](0)

    this.transitioning = 1

    var complete = function () {
      this.$element
        .removeClass('collapsing')
        .addClass('in')
        [dimension]('auto')
      this.transitioning = 0
      this.$element.trigger('shown.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    var scrollSize = $.camelCase(['scroll', dimension].join('-'))

    this.$element
      .one($.support.transition.end, $.proxy(complete, this))
      .emulateTransitionEnd(350)
      [dimension](this.$element[0][scrollSize])
  }

  Collapse.prototype.hide = function () {
    if (this.transitioning || !this.$element.hasClass('in')) return

    var startEvent = $.Event('hide.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var dimension = this.dimension()

    this.$element
      [dimension](this.$element[dimension]())
      [0].offsetHeight

    this.$element
      .addClass('collapsing')
      .removeClass('collapse')
      .removeClass('in')

    this.transitioning = 1

    var complete = function () {
      this.transitioning = 0
      this.$element
        .trigger('hidden.bs.collapse')
        .removeClass('collapsing')
        .addClass('collapse')
    }

    if (!$.support.transition) return complete.call(this)

    this.$element
      [dimension](0)
      .one($.support.transition.end, $.proxy(complete, this))
      .emulateTransitionEnd(350)
  }

  Collapse.prototype.toggle = function () {
    this[this.$element.hasClass('in') ? 'hide' : 'show']()
  }


  // COLLAPSE PLUGIN DEFINITION
  // ==========================

  var old = $.fn.collapse

  $.fn.collapse = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.collapse')
      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.collapse.Constructor = Collapse


  // COLLAPSE NO CONFLICT
  // ====================

  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old
    return this
  }


  // COLLAPSE DATA-API
  // =================

  $(document).on('click.bs.collapse.data-api', '[data-toggle=collapse]', function (e) {
    var $this   = $(this), href
    var target  = $this.attr('data-target')
        || e.preventDefault()
        || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') //strip for ie7
    var $target = $(target)
    var data    = $target.data('bs.collapse')
    var option  = data ? 'toggle' : $this.data()
    var parent  = $this.attr('data-parent')
    var $parent = parent && $(parent)

    if (!data || !data.transitioning) {
      if ($parent) $parent.find('[data-toggle=collapse][data-parent="' + parent + '"]').not($this).addClass('collapsed')
      $this[$target.hasClass('in') ? 'addClass' : 'removeClass']('collapsed')
    }

    $target.collapse(option)
  })

}(window.jQuery);

/* ========================================================================
 * Bootstrap: dropdown.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#dropdowns
 * ========================================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // DROPDOWN CLASS DEFINITION
  // =========================

  var backdrop = '.dropdown-backdrop'
  var toggle   = '[data-toggle=dropdown]'
  var Dropdown = function (element) {
    var $el = $(element).on('click.bs.dropdown', this.toggle)
  }

  Dropdown.prototype.toggle = function (e) {
    var $this = $(this)

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    clearMenus()

    if (!isActive) {
      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
        // if mobile we we use a backdrop because click events don't delegate
        $('<div class="dropdown-backdrop"/>').insertAfter($(this)).on('click', clearMenus)
      }

      $parent.trigger(e = $.Event('show.bs.dropdown'))

      if (e.isDefaultPrevented()) return

      $parent
        .toggleClass('open')
        .trigger('shown.bs.dropdown')

      $this.focus()
    }

    return false
  }

  Dropdown.prototype.keydown = function (e) {
    if (!/(38|40|27)/.test(e.keyCode)) return

    var $this = $(this)

    e.preventDefault()
    e.stopPropagation()

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    if (!isActive || (isActive && e.keyCode == 27)) {
      if (e.which == 27) $parent.find(toggle).focus()
      return $this.click()
    }

    var $items = $('[role=menu] li:not(.divider):visible a', $parent)

    if (!$items.length) return

    var index = $items.index($items.filter(':focus'))

    if (e.keyCode == 38 && index > 0)                 index--                        // up
    if (e.keyCode == 40 && index < $items.length - 1) index++                        // down
    if (!~index)                                      index=0

    $items.eq(index).focus()
  }

  function clearMenus() {
    $(backdrop).remove()
    $(toggle).each(function (e) {
      var $parent = getParent($(this))
      if (!$parent.hasClass('open')) return
      $parent.trigger(e = $.Event('hide.bs.dropdown'))
      if (e.isDefaultPrevented()) return
      $parent.removeClass('open').trigger('hidden.bs.dropdown')
    })
  }

  function getParent($this) {
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && /#/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
    }

    var $parent = selector && $(selector)

    return $parent && $parent.length ? $parent : $this.parent()
  }


  // DROPDOWN PLUGIN DEFINITION
  // ==========================

  var old = $.fn.dropdown

  $.fn.dropdown = function (option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('dropdown')

      if (!data) $this.data('dropdown', (data = new Dropdown(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  $.fn.dropdown.Constructor = Dropdown


  // DROPDOWN NO CONFLICT
  // ====================

  $.fn.dropdown.noConflict = function () {
    $.fn.dropdown = old
    return this
  }


  // APPLY TO STANDARD DROPDOWN ELEMENTS
  // ===================================

  $(document)
    .on('click.bs.dropdown.data-api', clearMenus)
    .on('click.bs.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
    .on('click.bs.dropdown.data-api'  , toggle, Dropdown.prototype.toggle)
    .on('keydown.bs.dropdown.data-api', toggle + ', [role=menu]' , Dropdown.prototype.keydown)

}(window.jQuery);

/* ========================================================================
 * Bootstrap: modal.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#modals
 * ========================================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // MODAL CLASS DEFINITION
  // ======================

  var Modal = function (element, options) {
    this.options   = options
    this.$element  = $(element)
    this.$backdrop =
    this.isShown   = null

    if (this.options.remote) this.$element.load(this.options.remote)
  }

  Modal.DEFAULTS = {
      backdrop: true
    , keyboard: true
    , show: true
  }

  Modal.prototype.toggle = function (_relatedTarget) {
    return this[!this.isShown ? 'show' : 'hide'](_relatedTarget)
  }

  Modal.prototype.show = function (_relatedTarget) {
    var that = this
    var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })

    this.$element.trigger(e)

    if (this.isShown || e.isDefaultPrevented()) return

    this.isShown = true

    this.escape()

    this.$element.on('click.dismiss.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))

    this.backdrop(function () {
      var transition = $.support.transition && that.$element.hasClass('fade')

      if (!that.$element.parent().length) {
        that.$element.appendTo(document.body) // don't move modals dom position
      }

      that.$element.show()

      if (transition) {
        that.$element[0].offsetWidth // force reflow
      }

      that.$element
        .addClass('in')
        .attr('aria-hidden', false)

      that.enforceFocus()

      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })

      transition ?
        that.$element.find('.modal-dialog') // wait for modal to slide in
          .one($.support.transition.end, function () {
            that.$element.focus().trigger(e)
          })
          .emulateTransitionEnd(300) :
        that.$element.focus().trigger(e)
    })
  }

  Modal.prototype.hide = function (e) {
    if (e) e.preventDefault()

    e = $.Event('hide.bs.modal')

    this.$element.trigger(e)

    if (!this.isShown || e.isDefaultPrevented()) return

    this.isShown = false

    this.escape()

    $(document).off('focusin.bs.modal')

    this.$element
      .removeClass('in')
      .attr('aria-hidden', true)
      .off('click.dismiss.modal')

    $.support.transition && this.$element.hasClass('fade') ?
      this.$element
        .one($.support.transition.end, $.proxy(this.hideModal, this))
        .emulateTransitionEnd(300) :
      this.hideModal()
  }

  Modal.prototype.enforceFocus = function () {
    $(document)
      .off('focusin.bs.modal') // guard against infinite focus loop
      .on('focusin.bs.modal', $.proxy(function (e) {
        if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
          this.$element.focus()
        }
      }, this))
  }

  Modal.prototype.escape = function () {
    if (this.isShown && this.options.keyboard) {
      this.$element.on('keyup.dismiss.bs.modal', $.proxy(function (e) {
        e.which == 27 && this.hide()
      }, this))
    } else if (!this.isShown) {
      this.$element.off('keyup.dismiss.bs.modal')
    }
  }

  Modal.prototype.hideModal = function () {
    var that = this
    this.$element.hide()
    this.backdrop(function () {
      that.removeBackdrop()
      that.$element.trigger('hidden.bs.modal')
    })
  }

  Modal.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove()
    this.$backdrop = null
  }

  Modal.prototype.backdrop = function (callback) {
    var that    = this
    var animate = this.$element.hasClass('fade') ? 'fade' : ''

    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate

      this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />')
        .appendTo(document.body)

      this.$element.on('click.dismiss.modal', $.proxy(function (e) {
        if (e.target !== e.currentTarget) return
        this.options.backdrop == 'static'
          ? this.$element[0].focus.call(this.$element[0])
          : this.hide.call(this)
      }, this))

      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

      this.$backdrop.addClass('in')

      if (!callback) return

      doAnimate ?
        this.$backdrop
          .one($.support.transition.end, callback)
          .emulateTransitionEnd(150) :
        callback()

    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('in')

      $.support.transition && this.$element.hasClass('fade')?
        this.$backdrop
          .one($.support.transition.end, callback)
          .emulateTransitionEnd(150) :
        callback()

    } else if (callback) {
      callback()
    }
  }


  // MODAL PLUGIN DEFINITION
  // =======================

  var old = $.fn.modal

  $.fn.modal = function (option, _relatedTarget) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.modal')
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option](_relatedTarget)
      else if (options.show) data.show(_relatedTarget)
    })
  }

  $.fn.modal.Constructor = Modal


  // MODAL NO CONFLICT
  // =================

  $.fn.modal.noConflict = function () {
    $.fn.modal = old
    return this
  }


  // MODAL DATA-API
  // ==============

  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this   = $(this)
    var href    = $this.attr('href')
    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) //strip for ie7
    var option  = $target.data('modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

    e.preventDefault()

    $target
      .modal(option, this)
      .one('hide', function () {
        $this.is(':visible') && $this.focus()
      })
  })

  $(document)
    .on('show.bs.modal',  '.modal', function () { $(document.body).addClass('modal-open') })
    .on('hidden.bs.modal', '.modal', function () { $(document.body).removeClass('modal-open') })

}(window.jQuery);

/* ========================================================================
 * Bootstrap: tooltip.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // TOOLTIP PUBLIC CLASS DEFINITION
  // ===============================

  var Tooltip = function (element, options) {
    this.type       =
    this.options    =
    this.enabled    =
    this.timeout    =
    this.hoverState =
    this.$element   = null

    this.init('tooltip', element, options)
  }

  Tooltip.DEFAULTS = {
    animation: true
  , placement: 'top'
  , selector: false
  , template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
  , trigger: 'hover focus'
  , title: ''
  , delay: 0
  , html: false
  , container: false
  }

  Tooltip.prototype.init = function (type, element, options) {
    this.enabled  = true
    this.type     = type
    this.$element = $(element)
    this.options  = this.getOptions(options)

    var triggers = this.options.trigger.split(' ')

    for (var i = triggers.length; i--;) {
      var trigger = triggers[i]

      if (trigger == 'click') {
        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
      } else if (trigger != 'manual') {
        var eventIn  = trigger == 'hover' ? 'mouseenter' : 'focus'
        var eventOut = trigger == 'hover' ? 'mouseleave' : 'blur'

        this.$element.on(eventIn  + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
      }
    }

    this.options.selector ?
      (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
      this.fixTitle()
  }

  Tooltip.prototype.getDefaults = function () {
    return Tooltip.DEFAULTS
  }

  Tooltip.prototype.getOptions = function (options) {
    options = $.extend({}, this.getDefaults(), this.$element.data(), options)

    if (options.delay && typeof options.delay == 'number') {
      options.delay = {
        show: options.delay
      , hide: options.delay
      }
    }

    return options
  }

  Tooltip.prototype.getDelegateOptions = function () {
    var options  = {}
    var defaults = this.getDefaults()

    this._options && $.each(this._options, function (key, value) {
      if (defaults[key] != value) options[key] = value
    })

    return options
  }

  Tooltip.prototype.enter = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget)[this.type](this.getDelegateOptions()).data('bs.' + this.type)

    clearTimeout(self.timeout)

    self.hoverState = 'in'

    if (!self.options.delay || !self.options.delay.show) return self.show()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'in') self.show()
    }, self.options.delay.show)
  }

  Tooltip.prototype.leave = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget)[this.type](this.getDelegateOptions()).data('bs.' + this.type)

    clearTimeout(self.timeout)

    self.hoverState = 'out'

    if (!self.options.delay || !self.options.delay.hide) return self.hide()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'out') self.hide()
    }, self.options.delay.hide)
  }

  Tooltip.prototype.show = function () {
    var e = $.Event('show.bs.'+ this.type)

    if (this.hasContent() && this.enabled) {
      this.$element.trigger(e)

      if (e.isDefaultPrevented()) return

      var $tip = this.tip()

      this.setContent()

      if (this.options.animation) $tip.addClass('fade')

      var placement = typeof this.options.placement == 'function' ?
        this.options.placement.call(this, $tip[0], this.$element[0]) :
        this.options.placement

      var autoToken = /\s?auto?\s?/i
      var autoPlace = autoToken.test(placement)
      if (autoPlace) placement = placement.replace(autoToken, '') || 'top'

      $tip
        .detach()
        .css({ top: 0, left: 0, display: 'block' })
        .addClass(placement)

      this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)

      var pos          = this.getPosition()
      var actualWidth  = $tip[0].offsetWidth
      var actualHeight = $tip[0].offsetHeight

      if (autoPlace) {
        var $parent = this.$element.parent()

        var orgPlacement = placement
        var docScroll    = document.documentElement.scrollTop || document.body.scrollTop
        var parentWidth  = this.options.container == 'body' ? window.innerWidth  : $parent.outerWidth()
        var parentHeight = this.options.container == 'body' ? window.innerHeight : $parent.outerHeight()
        var parentLeft   = this.options.container == 'body' ? 0 : $parent.offset().left

        placement = placement == 'bottom' && pos.top   + pos.height  + actualHeight - docScroll > parentHeight  ? 'top'    :
                    placement == 'top'    && pos.top   - docScroll   - actualHeight < 0                         ? 'bottom' :
                    placement == 'right'  && pos.right + actualWidth > parentWidth                              ? 'left'   :
                    placement == 'left'   && pos.left  - actualWidth < parentLeft                               ? 'right'  :
                    placement

        $tip
          .removeClass(orgPlacement)
          .addClass(placement)
      }

      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)

      this.applyPlacement(calculatedOffset, placement)
      this.$element.trigger('shown.bs.' + this.type)
    }
  }

  Tooltip.prototype.applyPlacement = function(offset, placement) {
    var replace
    var $tip   = this.tip()
    var width  = $tip[0].offsetWidth
    var height = $tip[0].offsetHeight

    // manually read margins because getBoundingClientRect includes difference
    var marginTop = parseInt($tip.css('margin-top'), 10)
    var marginLeft = parseInt($tip.css('margin-left'), 10)

    // we must check for NaN for ie 8/9
    if (isNaN(marginTop))  marginTop  = 0
    if (isNaN(marginLeft)) marginLeft = 0

    offset.top  = offset.top  + marginTop
    offset.left = offset.left + marginLeft

    $tip
      .offset(offset)
      .addClass('in')

    // check to see if placing tip in new offset caused the tip to resize itself
    var actualWidth  = $tip[0].offsetWidth
    var actualHeight = $tip[0].offsetHeight

    if (placement == 'top' && actualHeight != height) {
      replace = true
      offset.top = offset.top + height - actualHeight
    }

    if (/bottom|top/.test(placement)) {
      var delta = 0

      if (offset.left < 0) {
        delta       = offset.left * -2
        offset.left = 0

        $tip.offset(offset)

        actualWidth  = $tip[0].offsetWidth
        actualHeight = $tip[0].offsetHeight
      }

      this.replaceArrow(delta - width + actualWidth, actualWidth, 'left')
    } else {
      this.replaceArrow(actualHeight - height, actualHeight, 'top')
    }

    if (replace) $tip.offset(offset)
  }

  Tooltip.prototype.replaceArrow = function(delta, dimension, position) {
    this.arrow().css(position, delta ? (50 * (1 - delta / dimension) + "%") : '')
  }

  Tooltip.prototype.setContent = function () {
    var $tip  = this.tip()
    var title = this.getTitle()

    $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
    $tip.removeClass('fade in top bottom left right')
  }

  Tooltip.prototype.hide = function () {
    var that = this
    var $tip = this.tip()
    var e    = $.Event('hide.bs.' + this.type)

    function complete() {
      if (that.hoverState != 'in') $tip.detach()
    }

    this.$element.trigger(e)

    if (e.isDefaultPrevented()) return

    $tip.removeClass('in')

    $.support.transition && this.$tip.hasClass('fade') ?
      $tip
        .one($.support.transition.end, complete)
        .emulateTransitionEnd(150) :
      complete()

    this.$element.trigger('hidden.bs.' + this.type)

    return this
  }

  Tooltip.prototype.fixTitle = function () {
    var $e = this.$element
    if ($e.attr('title') || typeof($e.attr('data-original-title')) != 'string') {
      $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
    }
  }

  Tooltip.prototype.hasContent = function () {
    return this.getTitle()
  }

  Tooltip.prototype.getPosition = function () {
    var el = this.$element[0]
    return $.extend({}, (typeof el.getBoundingClientRect == 'function') ? el.getBoundingClientRect() : {
      width: el.offsetWidth
    , height: el.offsetHeight
    }, this.$element.offset())
  }

  Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
    return placement == 'bottom' ? { top: pos.top + pos.height,   left: pos.left + pos.width / 2 - actualWidth / 2  } :
           placement == 'top'    ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2  } :
           placement == 'left'   ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
        /* placement == 'right' */ { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width   }
  }

  Tooltip.prototype.getTitle = function () {
    var title
    var $e = this.$element
    var o  = this.options

    title = $e.attr('data-original-title')
      || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

    return title
  }

  Tooltip.prototype.tip = function () {
    return this.$tip = this.$tip || $(this.options.template)
  }

  Tooltip.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow')
  }

  Tooltip.prototype.validate = function () {
    if (!this.$element[0].parentNode) {
      this.hide()
      this.$element = null
      this.options  = null
    }
  }

  Tooltip.prototype.enable = function () {
    this.enabled = true
  }

  Tooltip.prototype.disable = function () {
    this.enabled = false
  }

  Tooltip.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled
  }

  Tooltip.prototype.toggle = function (e) {
    var self = e ? $(e.currentTarget)[this.type](this.getDelegateOptions()).data('bs.' + this.type) : this
    self.tip().hasClass('in') ? self.leave(self) : self.enter(self)
  }

  Tooltip.prototype.destroy = function () {
    this.hide().$element.off('.' + this.type).removeData('bs.' + this.type)
  }


  // TOOLTIP PLUGIN DEFINITION
  // =========================

  var old = $.fn.tooltip

  $.fn.tooltip = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.tooltip')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.tooltip', (data = new Tooltip(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.tooltip.Constructor = Tooltip


  // TOOLTIP NO CONFLICT
  // ===================

  $.fn.tooltip.noConflict = function () {
    $.fn.tooltip = old
    return this
  }

}(window.jQuery);

/* ========================================================================
 * Bootstrap: popover.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#popovers
 * ========================================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // POPOVER PUBLIC CLASS DEFINITION
  // ===============================

  var Popover = function (element, options) {
    this.init('popover', element, options)
  }

  if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js')

  Popover.DEFAULTS = $.extend({} , $.fn.tooltip.Constructor.DEFAULTS, {
    placement: 'right'
  , trigger: 'click'
  , content: ''
  , template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  })


  // NOTE: POPOVER EXTENDS tooltip.js
  // ================================

  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype)

  Popover.prototype.constructor = Popover

  Popover.prototype.getDefaults = function () {
    return Popover.DEFAULTS
  }

  Popover.prototype.setContent = function () {
    var $tip    = this.tip()
    var title   = this.getTitle()
    var content = this.getContent()

    $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
    $tip.find('.popover-content')[this.options.html ? 'html' : 'text'](content)

    $tip.removeClass('fade top bottom left right in')

    // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
    // this manually by checking the contents.
    if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide()
  }

  Popover.prototype.hasContent = function () {
    return this.getTitle() || this.getContent()
  }

  Popover.prototype.getContent = function () {
    var $e = this.$element
    var o  = this.options

    return $e.attr('data-content')
      || (typeof o.content == 'function' ?
            o.content.call($e[0]) :
            o.content)
  }

  Popover.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find('.arrow')
  }

  Popover.prototype.tip = function () {
    if (!this.$tip) this.$tip = $(this.options.template)
    return this.$tip
  }


  // POPOVER PLUGIN DEFINITION
  // =========================

  var old = $.fn.popover

  $.fn.popover = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.popover')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.popover', (data = new Popover(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.popover.Constructor = Popover


  // POPOVER NO CONFLICT
  // ===================

  $.fn.popover.noConflict = function () {
    $.fn.popover = old
    return this
  }

}(window.jQuery);

/* ========================================================================
 * Bootstrap: scrollspy.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#scrollspy
 * ========================================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // SCROLLSPY CLASS DEFINITION
  // ==========================

  function ScrollSpy(element, options) {
    var href
    var process  = $.proxy(this.process, this)

    this.$element       = $(element).is('body') ? $(window) : $(element)
    this.$body          = $('body')
    this.$scrollElement = this.$element.on('scroll.bs.scroll-spy.data-api', process)
    this.options        = $.extend({}, ScrollSpy.DEFAULTS, options)
    this.selector       = (this.options.target
      || ((href = $(element).attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) //strip for ie7
      || '') + ' .nav li > a'
    this.offsets        = $([])
    this.targets        = $([])
    this.activeTarget   = null

    this.refresh()
    this.process()
  }

  ScrollSpy.DEFAULTS = {
    offset: 10
  }

  ScrollSpy.prototype.refresh = function () {
    var offsetMethod = this.$element[0] == window ? 'offset' : 'position'

    this.offsets = $([])
    this.targets = $([])

    var self     = this
    var $targets = this.$body
      .find(this.selector)
      .map(function () {
        var $el   = $(this)
        var href  = $el.data('target') || $el.attr('href')
        var $href = /^#\w/.test(href) && $(href)

        return ($href
          && $href.length
          && [[ $href[offsetMethod]().top + (!$.isWindow(self.$scrollElement.get(0)) && self.$scrollElement.scrollTop()), href ]]) || null
      })
      .sort(function (a, b) { return a[0] - b[0] })
      .each(function () {
        self.offsets.push(this[0])
        self.targets.push(this[1])
      })
  }

  ScrollSpy.prototype.process = function () {
    var scrollTop    = this.$scrollElement.scrollTop() + this.options.offset
    var scrollHeight = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight
    var maxScroll    = scrollHeight - this.$scrollElement.height()
    var offsets      = this.offsets
    var targets      = this.targets
    var activeTarget = this.activeTarget
    var i

    if (scrollTop >= maxScroll) {
      return activeTarget != (i = targets.last()[0]) && this.activate(i)
    }

    for (i = offsets.length; i--;) {
      activeTarget != targets[i]
        && scrollTop >= offsets[i]
        && (!offsets[i + 1] || scrollTop <= offsets[i + 1])
        && this.activate( targets[i] )
    }
  }

  ScrollSpy.prototype.activate = function (target) {
    this.activeTarget = target

    $(this.selector)
      .parents('.active')
      .removeClass('active')

    var selector = this.selector
      + '[data-target="' + target + '"],'
      + this.selector + '[href="' + target + '"]'

    var active = $(selector)
      .parents('li')
      .addClass('active')

    if (active.parent('.dropdown-menu').length)  {
      active = active
        .closest('li.dropdown')
        .addClass('active')
    }

    active.trigger('activate')
  }


  // SCROLLSPY PLUGIN DEFINITION
  // ===========================

  var old = $.fn.scrollspy

  $.fn.scrollspy = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.scrollspy')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.scrollspy', (data = new ScrollSpy(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.scrollspy.Constructor = ScrollSpy


  // SCROLLSPY NO CONFLICT
  // =====================

  $.fn.scrollspy.noConflict = function () {
    $.fn.scrollspy = old
    return this
  }


  // SCROLLSPY DATA-API
  // ==================

  $(window).on('load', function () {
    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this)
      $spy.scrollspy($spy.data())
    })
  })

}(window.jQuery);

/* ========================================================================
 * Bootstrap: tab.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#tabs
 * ========================================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // TAB CLASS DEFINITION
  // ====================

  var Tab = function (element) {
    this.element = $(element)
  }

  Tab.prototype.show = function () {
    var $this    = this.element
    var $ul      = $this.closest('ul:not(.dropdown-menu)')
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
    }

    if ($this.parent('li').hasClass('active')) return

    var previous = $ul.find('.active:last a')[0]
    var e        = $.Event('show.bs.tab', {
      relatedTarget: previous
    })

    $this.trigger(e)

    if (e.isDefaultPrevented()) return

    var $target = $(selector)

    this.activate($this.parent('li'), $ul)
    this.activate($target, $target.parent(), function () {
      $this.trigger({
        type: 'shown.bs.tab'
      , relatedTarget: previous
      })
    })
  }

  Tab.prototype.activate = function (element, container, callback) {
    var $active    = container.find('> .active')
    var transition = callback
      && $.support.transition
      && $active.hasClass('fade')

    function next() {
      $active
        .removeClass('active')
        .find('> .dropdown-menu > .active')
        .removeClass('active')

      element.addClass('active')

      if (transition) {
        element[0].offsetWidth // reflow for transition
        element.addClass('in')
      } else {
        element.removeClass('fade')
      }

      if (element.parent('.dropdown-menu')) {
        element.closest('li.dropdown').addClass('active')
      }

      callback && callback()
    }

    transition ?
      $active
        .one($.support.transition.end, next)
        .emulateTransitionEnd(150) :
      next()

    $active.removeClass('in')
  }


  // TAB PLUGIN DEFINITION
  // =====================

  var old = $.fn.tab

  $.fn.tab = function ( option ) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.tab')

      if (!data) $this.data('bs.tab', (data = new Tab(this)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.tab.Constructor = Tab


  // TAB NO CONFLICT
  // ===============

  $.fn.tab.noConflict = function () {
    $.fn.tab = old
    return this
  }


  // TAB DATA-API
  // ============

  $(document).on('click.bs.tab.data-api', '[data-toggle="tab"], [data-toggle="pill"]', function (e) {
    e.preventDefault()
    $(this).tab('show')
  })

}(window.jQuery);

/* ========================================================================
 * Bootstrap: affix.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#affix
 * ========================================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // AFFIX CLASS DEFINITION
  // ======================

  var Affix = function (element, options) {
    this.options = $.extend({}, Affix.DEFAULTS, options)
    this.$window = $(window)
      .on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this))
      .on('click.bs.affix.data-api',  $.proxy(this.checkPositionWithEventLoop, this))

    this.$element = $(element)
    this.affixed  =
    this.unpin    = null

    this.checkPosition()
  }

  Affix.RESET = 'affix affix-top affix-bottom'

  Affix.DEFAULTS = {
    offset: 0
  }

  Affix.prototype.checkPositionWithEventLoop = function () {
    setTimeout($.proxy(this.checkPosition, this), 1)
  }

  Affix.prototype.checkPosition = function () {
    if (!this.$element.is(':visible')) return

    var scrollHeight = $(document).height()
    var scrollTop    = this.$window.scrollTop()
    var position     = this.$element.offset()
    var offset       = this.options.offset
    var offsetTop    = offset.top
    var offsetBottom = offset.bottom

    if (typeof offset != 'object')         offsetBottom = offsetTop = offset
    if (typeof offsetTop == 'function')    offsetTop    = offset.top()
    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom()

    var affix = this.unpin   != null && (scrollTop + this.unpin <= position.top) ? false :
                offsetBottom != null && (position.top + this.$element.height() >= scrollHeight - offsetBottom) ? 'bottom' :
                offsetTop    != null && (scrollTop <= offsetTop) ? 'top' : false

    if (this.affixed === affix) return
    if (this.unpin) this.$element.css('top', '')

    this.affixed = affix
    this.unpin   = affix == 'bottom' ? position.top - scrollTop : null

    this.$element.removeClass(Affix.RESET).addClass('affix' + (affix ? '-' + affix : ''))

    if (affix == 'bottom') {
      this.$element.offset({ top: document.body.offsetHeight - offsetBottom - this.$element.height() })
    }
  }


  // AFFIX PLUGIN DEFINITION
  // =======================

  var old = $.fn.affix

  $.fn.affix = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.affix')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.affix', (data = new Affix(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.affix.Constructor = Affix


  // AFFIX NO CONFLICT
  // =================

  $.fn.affix.noConflict = function () {
    $.fn.affix = old
    return this
  }


  // AFFIX DATA-API
  // ==============

  $(window).on('load', function () {
    $('[data-spy="affix"]').each(function () {
      var $spy = $(this)
      var data = $spy.data()

      data.offset = data.offset || {}

      if (data.offsetBottom) data.offset.bottom = data.offsetBottom
      if (data.offsetTop)    data.offset.top    = data.offsetTop

      $spy.affix(data)
    })
  })

}(window.jQuery);
;
/*!
 * imagesLoaded PACKAGED v3.1.8
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

(function(){function e(){}function t(e,t){for(var n=e.length;n--;)if(e[n].listener===t)return n;return-1}function n(e){return function(){return this[e].apply(this,arguments)}}var i=e.prototype,r=this,o=r.EventEmitter;i.getListeners=function(e){var t,n,i=this._getEvents();if("object"==typeof e){t={};for(n in i)i.hasOwnProperty(n)&&e.test(n)&&(t[n]=i[n])}else t=i[e]||(i[e]=[]);return t},i.flattenListeners=function(e){var t,n=[];for(t=0;e.length>t;t+=1)n.push(e[t].listener);return n},i.getListenersAsObject=function(e){var t,n=this.getListeners(e);return n instanceof Array&&(t={},t[e]=n),t||n},i.addListener=function(e,n){var i,r=this.getListenersAsObject(e),o="object"==typeof n;for(i in r)r.hasOwnProperty(i)&&-1===t(r[i],n)&&r[i].push(o?n:{listener:n,once:!1});return this},i.on=n("addListener"),i.addOnceListener=function(e,t){return this.addListener(e,{listener:t,once:!0})},i.once=n("addOnceListener"),i.defineEvent=function(e){return this.getListeners(e),this},i.defineEvents=function(e){for(var t=0;e.length>t;t+=1)this.defineEvent(e[t]);return this},i.removeListener=function(e,n){var i,r,o=this.getListenersAsObject(e);for(r in o)o.hasOwnProperty(r)&&(i=t(o[r],n),-1!==i&&o[r].splice(i,1));return this},i.off=n("removeListener"),i.addListeners=function(e,t){return this.manipulateListeners(!1,e,t)},i.removeListeners=function(e,t){return this.manipulateListeners(!0,e,t)},i.manipulateListeners=function(e,t,n){var i,r,o=e?this.removeListener:this.addListener,s=e?this.removeListeners:this.addListeners;if("object"!=typeof t||t instanceof RegExp)for(i=n.length;i--;)o.call(this,t,n[i]);else for(i in t)t.hasOwnProperty(i)&&(r=t[i])&&("function"==typeof r?o.call(this,i,r):s.call(this,i,r));return this},i.removeEvent=function(e){var t,n=typeof e,i=this._getEvents();if("string"===n)delete i[e];else if("object"===n)for(t in i)i.hasOwnProperty(t)&&e.test(t)&&delete i[t];else delete this._events;return this},i.removeAllListeners=n("removeEvent"),i.emitEvent=function(e,t){var n,i,r,o,s=this.getListenersAsObject(e);for(r in s)if(s.hasOwnProperty(r))for(i=s[r].length;i--;)n=s[r][i],n.once===!0&&this.removeListener(e,n.listener),o=n.listener.apply(this,t||[]),o===this._getOnceReturnValue()&&this.removeListener(e,n.listener);return this},i.trigger=n("emitEvent"),i.emit=function(e){var t=Array.prototype.slice.call(arguments,1);return this.emitEvent(e,t)},i.setOnceReturnValue=function(e){return this._onceReturnValue=e,this},i._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},i._getEvents=function(){return this._events||(this._events={})},e.noConflict=function(){return r.EventEmitter=o,e},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return e}):"object"==typeof module&&module.exports?module.exports=e:this.EventEmitter=e}).call(this),function(e){function t(t){var n=e.event;return n.target=n.target||n.srcElement||t,n}var n=document.documentElement,i=function(){};n.addEventListener?i=function(e,t,n){e.addEventListener(t,n,!1)}:n.attachEvent&&(i=function(e,n,i){e[n+i]=i.handleEvent?function(){var n=t(e);i.handleEvent.call(i,n)}:function(){var n=t(e);i.call(e,n)},e.attachEvent("on"+n,e[n+i])});var r=function(){};n.removeEventListener?r=function(e,t,n){e.removeEventListener(t,n,!1)}:n.detachEvent&&(r=function(e,t,n){e.detachEvent("on"+t,e[t+n]);try{delete e[t+n]}catch(i){e[t+n]=void 0}});var o={bind:i,unbind:r};"function"==typeof define&&define.amd?define("eventie/eventie",o):e.eventie=o}(this),function(e,t){"function"==typeof define&&define.amd?define(["eventEmitter/EventEmitter","eventie/eventie"],function(n,i){return t(e,n,i)}):"object"==typeof exports?module.exports=t(e,require("wolfy87-eventemitter"),require("eventie")):e.imagesLoaded=t(e,e.EventEmitter,e.eventie)}(window,function(e,t,n){function i(e,t){for(var n in t)e[n]=t[n];return e}function r(e){return"[object Array]"===d.call(e)}function o(e){var t=[];if(r(e))t=e;else if("number"==typeof e.length)for(var n=0,i=e.length;i>n;n++)t.push(e[n]);else t.push(e);return t}function s(e,t,n){if(!(this instanceof s))return new s(e,t);"string"==typeof e&&(e=document.querySelectorAll(e)),this.elements=o(e),this.options=i({},this.options),"function"==typeof t?n=t:i(this.options,t),n&&this.on("always",n),this.getImages(),a&&(this.jqDeferred=new a.Deferred);var r=this;setTimeout(function(){r.check()})}function f(e){this.img=e}function c(e){this.src=e,v[e]=this}var a=e.jQuery,u=e.console,h=u!==void 0,d=Object.prototype.toString;s.prototype=new t,s.prototype.options={},s.prototype.getImages=function(){this.images=[];for(var e=0,t=this.elements.length;t>e;e++){var n=this.elements[e];"IMG"===n.nodeName&&this.addImage(n);var i=n.nodeType;if(i&&(1===i||9===i||11===i))for(var r=n.querySelectorAll("img"),o=0,s=r.length;s>o;o++){var f=r[o];this.addImage(f)}}},s.prototype.addImage=function(e){var t=new f(e);this.images.push(t)},s.prototype.check=function(){function e(e,r){return t.options.debug&&h&&u.log("confirm",e,r),t.progress(e),n++,n===i&&t.complete(),!0}var t=this,n=0,i=this.images.length;if(this.hasAnyBroken=!1,!i)return this.complete(),void 0;for(var r=0;i>r;r++){var o=this.images[r];o.on("confirm",e),o.check()}},s.prototype.progress=function(e){this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded;var t=this;setTimeout(function(){t.emit("progress",t,e),t.jqDeferred&&t.jqDeferred.notify&&t.jqDeferred.notify(t,e)})},s.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";this.isComplete=!0;var t=this;setTimeout(function(){if(t.emit(e,t),t.emit("always",t),t.jqDeferred){var n=t.hasAnyBroken?"reject":"resolve";t.jqDeferred[n](t)}})},a&&(a.fn.imagesLoaded=function(e,t){var n=new s(this,e,t);return n.jqDeferred.promise(a(this))}),f.prototype=new t,f.prototype.check=function(){var e=v[this.img.src]||new c(this.img.src);if(e.isConfirmed)return this.confirm(e.isLoaded,"cached was confirmed"),void 0;if(this.img.complete&&void 0!==this.img.naturalWidth)return this.confirm(0!==this.img.naturalWidth,"naturalWidth"),void 0;var t=this;e.on("confirm",function(e,n){return t.confirm(e.isLoaded,n),!0}),e.check()},f.prototype.confirm=function(e,t){this.isLoaded=e,this.emit("confirm",this,t)};var v={};return c.prototype=new t,c.prototype.check=function(){if(!this.isChecked){var e=new Image;n.bind(e,"load",this),n.bind(e,"error",this),e.src=this.src,this.isChecked=!0}},c.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},c.prototype.onload=function(e){this.confirm(!0,"onload"),this.unbindProxyEvents(e)},c.prototype.onerror=function(e){this.confirm(!1,"onerror"),this.unbindProxyEvents(e)},c.prototype.confirm=function(e,t){this.isConfirmed=!0,this.isLoaded=e,this.emit("confirm",this,t)},c.prototype.unbindProxyEvents=function(e){n.unbind(e.target,"load",this),n.unbind(e.target,"error",this)},s});;
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */;
/**
 * Owl Carousel v2.3.0
 * Copyright 2013-2017 David Deutsch
 * Licensed under  ()
 */
/**
 * Owl carousel
 * @version 2.1.6
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 * @todo Lazy Load Icon
 * @todo prevent animationend bubling
 * @todo itemsScaleUp
 * @todo Test Zepto
 * @todo stagePadding calculate wrong active classes
 */
;(function($, window, document, undefined) {

	/**
	 * Creates a carousel.
	 * @class The Owl Carousel.
	 * @public
	 * @param {HTMLElement|jQuery} element - The element to create the carousel for.
	 * @param {Object} [options] - The options
	 */
	function Owl(element, options) {

		/**
		 * Current settings for the carousel.
		 * @public
		 */
		this.settings = null;

		/**
		 * Current options set by the caller including defaults.
		 * @public
		 */
		this.options = $.extend({}, Owl.Defaults, options);

		/**
		 * Plugin element.
		 * @public
		 */
		this.$element = $(element);

		/**
		 * Proxied event handlers.
		 * @protected
		 */
		this._handlers = {};

		/**
		 * References to the running plugins of this carousel.
		 * @protected
		 */
		this._plugins = {};

		/**
		 * Currently suppressed events to prevent them from being retriggered.
		 * @protected
		 */
		this._supress = {};

		/**
		 * Absolute current position.
		 * @protected
		 */
		this._current = null;

		/**
		 * Animation speed in milliseconds.
		 * @protected
		 */
		this._speed = null;

		/**
		 * Coordinates of all items in pixel.
		 * @todo The name of this member is missleading.
		 * @protected
		 */
		this._coordinates = [];

		/**
		 * Current breakpoint.
		 * @todo Real media queries would be nice.
		 * @protected
		 */
		this._breakpoint = null;

		/**
		 * Current width of the plugin element.
		 */
		this._width = null;

		/**
		 * All real items.
		 * @protected
		 */
		this._items = [];

		/**
		 * All cloned items.
		 * @protected
		 */
		this._clones = [];

		/**
		 * Merge values of all items.
		 * @todo Maybe this could be part of a plugin.
		 * @protected
		 */
		this._mergers = [];

		/**
		 * Widths of all items.
		 */
		this._widths = [];

		/**
		 * Invalidated parts within the update process.
		 * @protected
		 */
		this._invalidated = {};

		/**
		 * Ordered list of workers for the update process.
		 * @protected
		 */
		this._pipe = [];

		/**
		 * Current state information for the drag operation.
		 * @todo #261
		 * @protected
		 */
		this._drag = {
			time: null,
			target: null,
			pointer: null,
			stage: {
				start: null,
				current: null
			},
			direction: null
		};

		/**
		 * Current state information and their tags.
		 * @type {Object}
		 * @protected
		 */
		this._states = {
			current: {},
			tags: {
				'initializing': [ 'busy' ],
				'animating': [ 'busy' ],
				'dragging': [ 'interacting' ]
			}
		};

		$.each([ 'onResize', 'onThrottledResize' ], $.proxy(function(i, handler) {
			this._handlers[handler] = $.proxy(this[handler], this);
		}, this));

		$.each(Owl.Plugins, $.proxy(function(key, plugin) {
			this._plugins[key.charAt(0).toLowerCase() + key.slice(1)]
				= new plugin(this);
		}, this));

		$.each(Owl.Workers, $.proxy(function(priority, worker) {
			this._pipe.push({
				'filter': worker.filter,
				'run': $.proxy(worker.run, this)
			});
		}, this));

		this.setup();
		this.initialize();
	}

	/**
	 * Default options for the carousel.
	 * @public
	 */
	Owl.Defaults = {
		items: 3,
		loop: false,
		center: false,
		rewind: false,

		mouseDrag: true,
		touchDrag: true,
		pullDrag: true,
		freeDrag: false,

		margin: 0,
		stagePadding: 0,

		merge: false,
		mergeFit: true,
		autoWidth: false,

		startPosition: 0,
		rtl: false,

		smartSpeed: 250,
		fluidSpeed: false,
		dragEndSpeed: false,

		responsive: {},
		responsiveRefreshRate: 200,
		responsiveBaseElement: window,

		fallbackEasing: 'swing',

		info: false,

		nestedItemSelector: false,
		itemElement: 'div',
		stageElement: 'div',

		refreshClass: 'owl-refresh',
		loadedClass: 'owl-loaded',
		loadingClass: 'owl-loading',
		rtlClass: 'owl-rtl',
		responsiveClass: 'owl-responsive',
		dragClass: 'owl-drag',
		itemClass: 'owl-item',
		stageClass: 'owl-stage',
		stageOuterClass: 'owl-stage-outer',
		grabClass: 'owl-grab'
	};

	/**
	 * Enumeration for width.
	 * @public
	 * @readonly
	 * @enum {String}
	 */
	Owl.Width = {
		Default: 'default',
		Inner: 'inner',
		Outer: 'outer'
	};

	/**
	 * Enumeration for types.
	 * @public
	 * @readonly
	 * @enum {String}
	 */
	Owl.Type = {
		Event: 'event',
		State: 'state'
	};

	/**
	 * Contains all registered plugins.
	 * @public
	 */
	Owl.Plugins = {};

	/**
	 * List of workers involved in the update process.
	 */
	Owl.Workers = [ {
		filter: [ 'width', 'settings' ],
		run: function() {
			this._width = this.$element.width();
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			cache.current = this._items && this._items[this.relative(this._current)];
		}
	}, {
		filter: [ 'items', 'settings' ],
		run: function() {
			this.$stage.children('.cloned').remove();
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			var margin = this.settings.margin || '',
				grid = !this.settings.autoWidth,
				rtl = this.settings.rtl,
				css = {
					'width': 'auto',
					'margin-left': rtl ? margin : '',
					'margin-right': rtl ? '' : margin
				};

			!grid && this.$stage.children().css(css);

			cache.css = css;
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			var width = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
				merge = null,
				iterator = this._items.length,
				grid = !this.settings.autoWidth,
				widths = [];

			cache.items = {
				merge: false,
				width: width
			};

			while (iterator--) {
				merge = this._mergers[iterator];
				merge = this.settings.mergeFit && Math.min(merge, this.settings.items) || merge;

				cache.items.merge = merge > 1 || cache.items.merge;

				widths[iterator] = !grid ? this._items[iterator].width() : width * merge;
			}

			this._widths = widths;
		}
	}, {
		filter: [ 'items', 'settings' ],
		run: function() {
			var clones = [],
				items = this._items,
				settings = this.settings,
				// TODO: Should be computed from number of min width items in stage
				view = Math.max(settings.items * 2, 4),
				size = Math.ceil(items.length / 2) * 2,
				repeat = settings.loop && items.length ? settings.rewind ? view : Math.max(view, size) : 0,
				append = '',
				prepend = '';

			repeat /= 2;

			while (repeat > 0) {
				// Switch to only using appended clones
				clones.push(this.normalize(clones.length / 2, true));
				append = append + items[clones[clones.length - 1]][0].outerHTML;
				clones.push(this.normalize(items.length - 1 - (clones.length - 1) / 2, true));
				prepend = items[clones[clones.length - 1]][0].outerHTML + prepend;
				repeat -= 1;
			}

			this._clones = clones;

			$(append).addClass('cloned').appendTo(this.$stage);
			$(prepend).addClass('cloned').prependTo(this.$stage);
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function() {
			var rtl = this.settings.rtl ? 1 : -1,
				size = this._clones.length + this._items.length,
				iterator = -1,
				previous = 0,
				current = 0,
				coordinates = [];

			while (++iterator < size) {
				previous = coordinates[iterator - 1] || 0;
				current = this._widths[this.relative(iterator)] + this.settings.margin;
				coordinates.push(previous + current * rtl);
			}

			this._coordinates = coordinates;
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function() {
			var padding = this.settings.stagePadding,
				coordinates = this._coordinates,
				css = {
					'width': Math.ceil(Math.abs(coordinates[coordinates.length - 1])) + padding * 2,
					'padding-left': padding || '',
					'padding-right': padding || ''
				};

			this.$stage.css(css);
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			var iterator = this._coordinates.length,
				grid = !this.settings.autoWidth,
				items = this.$stage.children();

			if (grid && cache.items.merge) {
				while (iterator--) {
					cache.css.width = this._widths[this.relative(iterator)];
					items.eq(iterator).css(cache.css);
				}
			} else if (grid) {
				cache.css.width = cache.items.width;
				items.css(cache.css);
			}
		}
	}, {
		filter: [ 'items' ],
		run: function() {
			this._coordinates.length < 1 && this.$stage.removeAttr('style');
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			cache.current = cache.current ? this.$stage.children().index(cache.current) : 0;
			cache.current = Math.max(this.minimum(), Math.min(this.maximum(), cache.current));
			this.reset(cache.current);
		}
	}, {
		filter: [ 'position' ],
		run: function() {
			this.animate(this.coordinates(this._current));
		}
	}, {
		filter: [ 'width', 'position', 'items', 'settings' ],
		run: function() {
			var rtl = this.settings.rtl ? 1 : -1,
				padding = this.settings.stagePadding * 2,
				begin = this.coordinates(this.current()) + padding,
				end = begin + this.width() * rtl,
				inner, outer, matches = [], i, n;

			for (i = 0, n = this._coordinates.length; i < n; i++) {
				inner = this._coordinates[i - 1] || 0;
				outer = Math.abs(this._coordinates[i]) + padding * rtl;

				if ((this.op(inner, '<=', begin) && (this.op(inner, '>', end)))
					|| (this.op(outer, '<', begin) && this.op(outer, '>', end))) {
					matches.push(i);
				}
			}

			this.$stage.children('.active').removeClass('active');
			this.$stage.children(':eq(' + matches.join('), :eq(') + ')').addClass('active');

			this.$stage.children('.center').removeClass('center');
			if (this.settings.center) {
				this.$stage.children().eq(this.current()).addClass('center');
			}
		}
	} ];

	/**
	 * Initializes the carousel.
	 * @protected
	 */
	Owl.prototype.initialize = function() {
		this.enter('initializing');
		this.trigger('initialize');

		this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl);

		if (this.settings.autoWidth && !this.is('pre-loading')) {
			var imgs, nestedSelector, width;
			imgs = this.$element.find('img');
			nestedSelector = this.settings.nestedItemSelector ? '.' + this.settings.nestedItemSelector : undefined;
			width = this.$element.children(nestedSelector).width();

			if (imgs.length && width <= 0) {
				this.preloadAutoWidthImages(imgs);
			}
		}

		this.$element.addClass(this.options.loadingClass);

		// create stage
		this.$stage = $('<' + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>')
			.wrap('<div class="' + this.settings.stageOuterClass + '"/>');

		// append stage
		this.$element.append(this.$stage.parent());

		// append content
		this.replace(this.$element.children().not(this.$stage.parent()));

		// check visibility
		if (this.$element.is(':visible')) {
			// update view
			this.refresh();
		} else {
			// invalidate width
			this.invalidate('width');
		}

		this.$element
			.removeClass(this.options.loadingClass)
			.addClass(this.options.loadedClass);

		// register event handlers
		this.registerEventHandlers();

		this.leave('initializing');
		this.trigger('initialized');
	};

	/**
	 * Setups the current settings.
	 * @todo Remove responsive classes. Why should adaptive designs be brought into IE8?
	 * @todo Support for media queries by using `matchMedia` would be nice.
	 * @public
	 */
	Owl.prototype.setup = function() {
		var viewport = this.viewport(),
			overwrites = this.options.responsive,
			match = -1,
			settings = null;

		if (!overwrites) {
			settings = $.extend({}, this.options);
		} else {
			$.each(overwrites, function(breakpoint) {
				if (breakpoint <= viewport && breakpoint > match) {
					match = Number(breakpoint);
				}
			});

			settings = $.extend({}, this.options, overwrites[match]);
			if (typeof settings.stagePadding === 'function') {
				settings.stagePadding = settings.stagePadding();
			}
			delete settings.responsive;

			// responsive class
			if (settings.responsiveClass) {
				this.$element.attr('class',
					this.$element.attr('class').replace(new RegExp('(' + this.options.responsiveClass + '-)\\S+\\s', 'g'), '$1' + match)
				);
			}
		}

		this.trigger('change', { property: { name: 'settings', value: settings } });
		this._breakpoint = match;
		this.settings = settings;
		this.invalidate('settings');
		this.trigger('changed', { property: { name: 'settings', value: this.settings } });
	};

	/**
	 * Updates option logic if necessery.
	 * @protected
	 */
	Owl.prototype.optionsLogic = function() {
		if (this.settings.autoWidth) {
			this.settings.stagePadding = false;
			this.settings.merge = false;
		}
	};

	/**
	 * Prepares an item before add.
	 * @todo Rename event parameter `content` to `item`.
	 * @protected
	 * @returns {jQuery|HTMLElement} - The item container.
	 */
	Owl.prototype.prepare = function(item) {
		var event = this.trigger('prepare', { content: item });

		if (!event.data) {
			event.data = $('<' + this.settings.itemElement + '/>')
				.addClass(this.options.itemClass).append(item)
		}

		this.trigger('prepared', { content: event.data });

		return event.data;
	};

	/**
	 * Updates the view.
	 * @public
	 */
	Owl.prototype.update = function() {
		var i = 0,
			n = this._pipe.length,
			filter = $.proxy(function(p) { return this[p] }, this._invalidated),
			cache = {};

		while (i < n) {
			if (this._invalidated.all || $.grep(this._pipe[i].filter, filter).length > 0) {
				this._pipe[i].run(cache);
			}
			i++;
		}

		this._invalidated = {};

		!this.is('valid') && this.enter('valid');
	};

	/**
	 * Gets the width of the view.
	 * @public
	 * @param {Owl.Width} [dimension=Owl.Width.Default] - The dimension to return.
	 * @returns {Number} - The width of the view in pixel.
	 */
	Owl.prototype.width = function(dimension) {
		dimension = dimension || Owl.Width.Default;
		switch (dimension) {
			case Owl.Width.Inner:
			case Owl.Width.Outer:
				return this._width;
			default:
				return this._width - this.settings.stagePadding * 2 + this.settings.margin;
		}
	};

	/**
	 * Refreshes the carousel primarily for adaptive purposes.
	 * @public
	 */
	Owl.prototype.refresh = function() {
		this.enter('refreshing');
		this.trigger('refresh');

		this.setup();

		this.optionsLogic();

		this.$element.addClass(this.options.refreshClass);

		this.update();

		this.$element.removeClass(this.options.refreshClass);

		this.leave('refreshing');
		this.trigger('refreshed');
	};

	/**
	 * Checks window `resize` event.
	 * @protected
	 */
	Owl.prototype.onThrottledResize = function() {
		window.clearTimeout(this.resizeTimer);
		this.resizeTimer = window.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate);
	};

	/**
	 * Checks window `resize` event.
	 * @protected
	 */
	Owl.prototype.onResize = function() {
		if (!this._items.length) {
			return false;
		}

		if (this._width === this.$element.width()) {
			return false;
		}

		if (!this.$element.is(':visible')) {
			return false;
		}

		this.enter('resizing');

		if (this.trigger('resize').isDefaultPrevented()) {
			this.leave('resizing');
			return false;
		}

		this.invalidate('width');

		this.refresh();

		this.leave('resizing');
		this.trigger('resized');
	};

	/**
	 * Registers event handlers.
	 * @todo Check `msPointerEnabled`
	 * @todo #261
	 * @protected
	 */
	Owl.prototype.registerEventHandlers = function() {
		if ($.support.transition) {
			this.$stage.on($.support.transition.end + '.owl.core', $.proxy(this.onTransitionEnd, this));
		}

		if (this.settings.responsive !== false) {
			this.on(window, 'resize', this._handlers.onThrottledResize);
		}

		if (this.settings.mouseDrag) {
			this.$element.addClass(this.options.dragClass);
			this.$stage.on('mousedown.owl.core', $.proxy(this.onDragStart, this));
			this.$stage.on('dragstart.owl.core selectstart.owl.core', function() { return false });
		}

		if (this.settings.touchDrag){
			this.$stage.on('touchstart.owl.core', $.proxy(this.onDragStart, this));
			this.$stage.on('touchcancel.owl.core', $.proxy(this.onDragEnd, this));
		}
	};

	/**
	 * Handles `touchstart` and `mousedown` events.
	 * @todo Horizontal swipe threshold as option
	 * @todo #261
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onDragStart = function(event) {
		var stage = null;

		if (event.which === 3) {
			return;
		}

		if ($.support.transform) {
			stage = this.$stage.css('transform').replace(/.*\(|\)| /g, '').split(',');
			stage = {
				x: stage[stage.length === 16 ? 12 : 4],
				y: stage[stage.length === 16 ? 13 : 5]
			};
		} else {
			stage = this.$stage.position();
			stage = {
				x: this.settings.rtl ?
					stage.left + this.$stage.width() - this.width() + this.settings.margin :
					stage.left,
				y: stage.top
			};
		}

		if (this.is('animating')) {
			$.support.transform ? this.animate(stage.x) : this.$stage.stop()
			this.invalidate('position');
		}

		this.$element.toggleClass(this.options.grabClass, event.type === 'mousedown');

		this.speed(0);

		this._drag.time = new Date().getTime();
		this._drag.target = $(event.target);
		this._drag.stage.start = stage;
		this._drag.stage.current = stage;
		this._drag.pointer = this.pointer(event);

		$(document).on('mouseup.owl.core touchend.owl.core', $.proxy(this.onDragEnd, this));

		$(document).one('mousemove.owl.core touchmove.owl.core', $.proxy(function(event) {
			var delta = this.difference(this._drag.pointer, this.pointer(event));

			$(document).on('mousemove.owl.core touchmove.owl.core', $.proxy(this.onDragMove, this));

			if (Math.abs(delta.x) < Math.abs(delta.y) && this.is('valid')) {
				return;
			}

			event.preventDefault();

			this.enter('dragging');
			this.trigger('drag');
		}, this));
	};

	/**
	 * Handles the `touchmove` and `mousemove` events.
	 * @todo #261
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onDragMove = function(event) {
		var minimum = null,
			maximum = null,
			pull = null,
			delta = this.difference(this._drag.pointer, this.pointer(event)),
			stage = this.difference(this._drag.stage.start, delta);

		if (!this.is('dragging')) {
			return;
		}

		event.preventDefault();

		if (this.settings.loop) {
			minimum = this.coordinates(this.minimum());
			maximum = this.coordinates(this.maximum() + 1) - minimum;
			stage.x = (((stage.x - minimum) % maximum + maximum) % maximum) + minimum;
		} else {
			minimum = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum());
			maximum = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum());
			pull = this.settings.pullDrag ? -1 * delta.x / 5 : 0;
			stage.x = Math.max(Math.min(stage.x, minimum + pull), maximum + pull);
		}

		this._drag.stage.current = stage;

		this.animate(stage.x);
	};

	/**
	 * Handles the `touchend` and `mouseup` events.
	 * @todo #261
	 * @todo Threshold for click event
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onDragEnd = function(event) {
		var delta = this.difference(this._drag.pointer, this.pointer(event)),
			stage = this._drag.stage.current,
			direction = delta.x > 0 ^ this.settings.rtl ? 'left' : 'right';

		$(document).off('.owl.core');

		this.$element.removeClass(this.options.grabClass);

		if (delta.x !== 0 && this.is('dragging') || !this.is('valid')) {
			this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed);
			this.current(this.closest(stage.x, delta.x !== 0 ? direction : this._drag.direction));
			this.invalidate('position');
			this.update();

			this._drag.direction = direction;

			if (Math.abs(delta.x) > 3 || new Date().getTime() - this._drag.time > 300) {
				this._drag.target.one('click.owl.core', function() { return false; });
			}
		}

		if (!this.is('dragging')) {
			return;
		}

		this.leave('dragging');
		this.trigger('dragged');
	};

	/**
	 * Gets absolute position of the closest item for a coordinate.
	 * @todo Setting `freeDrag` makes `closest` not reusable. See #165.
	 * @protected
	 * @param {Number} coordinate - The coordinate in pixel.
	 * @param {String} direction - The direction to check for the closest item. Ether `left` or `right`.
	 * @return {Number} - The absolute position of the closest item.
	 */
	Owl.prototype.closest = function(coordinate, direction) {
		var position = -1,
			pull = 30,
			width = this.width(),
			coordinates = this.coordinates();

		if (!this.settings.freeDrag) {
			// check closest item
			$.each(coordinates, $.proxy(function(index, value) {
				// on a left pull, check on current index
				if (direction === 'left' && coordinate > value - pull && coordinate < value + pull) {
					position = index;
				// on a right pull, check on previous index
				// to do so, subtract width from value and set position = index + 1
				} else if (direction === 'right' && coordinate > value - width - pull && coordinate < value - width + pull) {
					position = index + 1;
				} else if (this.op(coordinate, '<', value)
					&& this.op(coordinate, '>', coordinates[index + 1] || value - width)) {
					position = direction === 'left' ? index + 1 : index;
				}
				return position === -1;
			}, this));
		}

		if (!this.settings.loop) {
			// non loop boundries
			if (this.op(coordinate, '>', coordinates[this.minimum()])) {
				position = coordinate = this.minimum();
			} else if (this.op(coordinate, '<', coordinates[this.maximum()])) {
				position = coordinate = this.maximum();
			}
		}

		return position;
	};

	/**
	 * Animates the stage.
	 * @todo #270
	 * @public
	 * @param {Number} coordinate - The coordinate in pixels.
	 */
	Owl.prototype.animate = function(coordinate) {
		var animate = this.speed() > 0;

		this.is('animating') && this.onTransitionEnd();

		if (animate) {
			this.enter('animating');
			this.trigger('translate');
		}

		if ($.support.transform3d && $.support.transition) {
			this.$stage.css({
				transform: 'translate3d(' + coordinate + 'px,0px,0px)',
				transition: (this.speed() / 1000) + 's'
			});
		} else if (animate) {
			this.$stage.animate({
				left: coordinate + 'px'
			}, this.speed(), this.settings.fallbackEasing, $.proxy(this.onTransitionEnd, this));
		} else {
			this.$stage.css({
				left: coordinate + 'px'
			});
		}
	};

	/**
	 * Checks whether the carousel is in a specific state or not.
	 * @param {String} state - The state to check.
	 * @returns {Boolean} - The flag which indicates if the carousel is busy.
	 */
	Owl.prototype.is = function(state) {
		return this._states.current[state] && this._states.current[state] > 0;
	};

	/**
	 * Sets the absolute position of the current item.
	 * @public
	 * @param {Number} [position] - The new absolute position or nothing to leave it unchanged.
	 * @returns {Number} - The absolute position of the current item.
	 */
	Owl.prototype.current = function(position) {
		if (position === undefined) {
			return this._current;
		}

		if (this._items.length === 0) {
			return undefined;
		}

		position = this.normalize(position);

		if (this._current !== position) {
			var event = this.trigger('change', { property: { name: 'position', value: position } });

			if (event.data !== undefined) {
				position = this.normalize(event.data);
			}

			this._current = position;

			this.invalidate('position');

			this.trigger('changed', { property: { name: 'position', value: this._current } });
		}

		return this._current;
	};

	/**
	 * Invalidates the given part of the update routine.
	 * @param {String} [part] - The part to invalidate.
	 * @returns {Array.<String>} - The invalidated parts.
	 */
	Owl.prototype.invalidate = function(part) {
		if ($.type(part) === 'string') {
			this._invalidated[part] = true;
			this.is('valid') && this.leave('valid');
		}
		return $.map(this._invalidated, function(v, i) { return i });
	};

	/**
	 * Resets the absolute position of the current item.
	 * @public
	 * @param {Number} position - The absolute position of the new item.
	 */
	Owl.prototype.reset = function(position) {
		position = this.normalize(position);

		if (position === undefined) {
			return;
		}

		this._speed = 0;
		this._current = position;

		this.suppress([ 'translate', 'translated' ]);

		this.animate(this.coordinates(position));

		this.release([ 'translate', 'translated' ]);
	};

	/**
	 * Normalizes an absolute or a relative position of an item.
	 * @public
	 * @param {Number} position - The absolute or relative position to normalize.
	 * @param {Boolean} [relative=false] - Whether the given position is relative or not.
	 * @returns {Number} - The normalized position.
	 */
	Owl.prototype.normalize = function(position, relative) {
		var n = this._items.length,
			m = relative ? 0 : this._clones.length;

		if (!this.isNumeric(position) || n < 1) {
			position = undefined;
		} else if (position < 0 || position >= n + m) {
			position = ((position - m / 2) % n + n) % n + m / 2;
		}

		return position;
	};

	/**
	 * Converts an absolute position of an item into a relative one.
	 * @public
	 * @param {Number} position - The absolute position to convert.
	 * @returns {Number} - The converted position.
	 */
	Owl.prototype.relative = function(position) {
		position -= this._clones.length / 2;
		return this.normalize(position, true);
	};

	/**
	 * Gets the maximum position for the current item.
	 * @public
	 * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
	 * @returns {Number}
	 */
	Owl.prototype.maximum = function(relative) {
		var settings = this.settings,
			maximum = this._coordinates.length,
			iterator,
			reciprocalItemsWidth,
			elementWidth;

		if (settings.loop) {
			maximum = this._clones.length / 2 + this._items.length - 1;
		} else if (settings.autoWidth || settings.merge) {
			iterator = this._items.length;
			if (iterator) {
				reciprocalItemsWidth = this._items[--iterator].width();
				elementWidth = this.$element.width();
				while (iterator--) {
					reciprocalItemsWidth += this._items[iterator].width() + this.settings.margin;
					if (reciprocalItemsWidth > elementWidth) {
						break;
					}
				}
			}
			maximum = iterator + 1;
		} else if (settings.center) {
			maximum = this._items.length - 1;
		} else {
			maximum = this._items.length - settings.items;
		}

		if (relative) {
			maximum -= this._clones.length / 2;
		}

		return Math.max(maximum, 0);
	};

	/**
	 * Gets the minimum position for the current item.
	 * @public
	 * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
	 * @returns {Number}
	 */
	Owl.prototype.minimum = function(relative) {
		return relative ? 0 : this._clones.length / 2;
	};

	/**
	 * Gets an item at the specified relative position.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
	 */
	Owl.prototype.items = function(position) {
		if (position === undefined) {
			return this._items.slice();
		}

		position = this.normalize(position, true);
		return this._items[position];
	};

	/**
	 * Gets an item at the specified relative position.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
	 */
	Owl.prototype.mergers = function(position) {
		if (position === undefined) {
			return this._mergers.slice();
		}

		position = this.normalize(position, true);
		return this._mergers[position];
	};

	/**
	 * Gets the absolute positions of clones for an item.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @returns {Array.<Number>} - The absolute positions of clones for the item or all if no position was given.
	 */
	Owl.prototype.clones = function(position) {
		var odd = this._clones.length / 2,
			even = odd + this._items.length,
			map = function(index) { return index % 2 === 0 ? even + index / 2 : odd - (index + 1) / 2 };

		if (position === undefined) {
			return $.map(this._clones, function(v, i) { return map(i) });
		}

		return $.map(this._clones, function(v, i) { return v === position ? map(i) : null });
	};

	/**
	 * Sets the current animation speed.
	 * @public
	 * @param {Number} [speed] - The animation speed in milliseconds or nothing to leave it unchanged.
	 * @returns {Number} - The current animation speed in milliseconds.
	 */
	Owl.prototype.speed = function(speed) {
		if (speed !== undefined) {
			this._speed = speed;
		}

		return this._speed;
	};

	/**
	 * Gets the coordinate of an item.
	 * @todo The name of this method is missleanding.
	 * @public
	 * @param {Number} position - The absolute position of the item within `minimum()` and `maximum()`.
	 * @returns {Number|Array.<Number>} - The coordinate of the item in pixel or all coordinates.
	 */
	Owl.prototype.coordinates = function(position) {
		var multiplier = 1,
			newPosition = position - 1,
			coordinate;

		if (position === undefined) {
			return $.map(this._coordinates, $.proxy(function(coordinate, index) {
				return this.coordinates(index);
			}, this));
		}

		if (this.settings.center) {
			if (this.settings.rtl) {
				multiplier = -1;
				newPosition = position + 1;
			}

			coordinate = this._coordinates[position];
			coordinate += (this.width() - coordinate + (this._coordinates[newPosition] || 0)) / 2 * multiplier;
		} else {
			coordinate = this._coordinates[newPosition] || 0;
		}

		coordinate = Math.ceil(coordinate);

		return coordinate;
	};

	/**
	 * Calculates the speed for a translation.
	 * @protected
	 * @param {Number} from - The absolute position of the start item.
	 * @param {Number} to - The absolute position of the target item.
	 * @param {Number} [factor=undefined] - The time factor in milliseconds.
	 * @returns {Number} - The time in milliseconds for the translation.
	 */
	Owl.prototype.duration = function(from, to, factor) {
		if (factor === 0) {
			return 0;
		}

		return Math.min(Math.max(Math.abs(to - from), 1), 6) * Math.abs((factor || this.settings.smartSpeed));
	};

	/**
	 * Slides to the specified item.
	 * @public
	 * @param {Number} position - The position of the item.
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.to = function(position, speed) {
		var current = this.current(),
			revert = null,
			distance = position - this.relative(current),
			direction = (distance > 0) - (distance < 0),
			items = this._items.length,
			minimum = this.minimum(),
			maximum = this.maximum();

		if (this.settings.loop) {
			if (!this.settings.rewind && Math.abs(distance) > items / 2) {
				distance += direction * -1 * items;
			}

			position = current + distance;
			revert = ((position - minimum) % items + items) % items + minimum;

			if (revert !== position && revert - distance <= maximum && revert - distance > 0) {
				current = revert - distance;
				position = revert;
				this.reset(current);
			}
		} else if (this.settings.rewind) {
			maximum += 1;
			position = (position % maximum + maximum) % maximum;
		} else {
			position = Math.max(minimum, Math.min(maximum, position));
		}

		this.speed(this.duration(current, position, speed));
		this.current(position);

		if (this.$element.is(':visible')) {
			this.update();
		}
	};

	/**
	 * Slides to the next item.
	 * @public
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.next = function(speed) {
		speed = speed || false;
		this.to(this.relative(this.current()) + 1, speed);
	};

	/**
	 * Slides to the previous item.
	 * @public
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.prev = function(speed) {
		speed = speed || false;
		this.to(this.relative(this.current()) - 1, speed);
	};

	/**
	 * Handles the end of an animation.
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onTransitionEnd = function(event) {

		// if css2 animation then event object is undefined
		if (event !== undefined) {
			event.stopPropagation();

			// Catch only owl-stage transitionEnd event
			if ((event.target || event.srcElement || event.originalTarget) !== this.$stage.get(0)) {
				return false;
			}
		}

		this.leave('animating');
		this.trigger('translated');
	};

	/**
	 * Gets viewport width.
	 * @protected
	 * @return {Number} - The width in pixel.
	 */
	Owl.prototype.viewport = function() {
		var width;
		if (this.options.responsiveBaseElement !== window) {
			width = $(this.options.responsiveBaseElement).width();
		} else if (window.innerWidth) {
			width = window.innerWidth;
		} else if (document.documentElement && document.documentElement.clientWidth) {
			width = document.documentElement.clientWidth;
		} else {
			console.warn('Can not detect viewport width.');
		}
		return width;
	};

	/**
	 * Replaces the current content.
	 * @public
	 * @param {HTMLElement|jQuery|String} content - The new content.
	 */
	Owl.prototype.replace = function(content) {
		this.$stage.empty();
		this._items = [];

		if (content) {
			content = (content instanceof jQuery) ? content : $(content);
		}

		if (this.settings.nestedItemSelector) {
			content = content.find('.' + this.settings.nestedItemSelector);
		}

		content.filter(function() {
			return this.nodeType === 1;
		}).each($.proxy(function(index, item) {
			item = this.prepare(item);
			this.$stage.append(item);
			this._items.push(item);
			this._mergers.push(item.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
		}, this));

		this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0);

		this.invalidate('items');
	};

	/**
	 * Adds an item.
	 * @todo Use `item` instead of `content` for the event arguments.
	 * @public
	 * @param {HTMLElement|jQuery|String} content - The item content to add.
	 * @param {Number} [position] - The relative position at which to insert the item otherwise the item will be added to the end.
	 */
	Owl.prototype.add = function(content, position) {
		var current = this.relative(this._current);

		position = position === undefined ? this._items.length : this.normalize(position, true);
		content = content instanceof jQuery ? content : $(content);

		this.trigger('add', { content: content, position: position });

		content = this.prepare(content);

		if (this._items.length === 0 || position === this._items.length) {
			this._items.length === 0 && this.$stage.append(content);
			this._items.length !== 0 && this._items[position - 1].after(content);
			this._items.push(content);
			this._mergers.push(content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
		} else {
			this._items[position].before(content);
			this._items.splice(position, 0, content);
			this._mergers.splice(position, 0, content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
		}

		this._items[current] && this.reset(this._items[current].index());

		this.invalidate('items');

		this.trigger('added', { content: content, position: position });
	};

	/**
	 * Removes an item by its position.
	 * @todo Use `item` instead of `content` for the event arguments.
	 * @public
	 * @param {Number} position - The relative position of the item to remove.
	 */
	Owl.prototype.remove = function(position) {
		position = this.normalize(position, true);

		if (position === undefined) {
			return;
		}

		this.trigger('remove', { content: this._items[position], position: position });

		this._items[position].remove();
		this._items.splice(position, 1);
		this._mergers.splice(position, 1);

		this.invalidate('items');

		this.trigger('removed', { content: null, position: position });
	};

	/**
	 * Preloads images with auto width.
	 * @todo Replace by a more generic approach
	 * @protected
	 */
	Owl.prototype.preloadAutoWidthImages = function(images) {
		images.each($.proxy(function(i, element) {
			this.enter('pre-loading');
			element = $(element);
			$(new Image()).one('load', $.proxy(function(e) {
				element.attr('src', e.target.src);
				element.css('opacity', 1);
				this.leave('pre-loading');
				!this.is('pre-loading') && !this.is('initializing') && this.refresh();
			}, this)).attr('src', element.attr('src') || element.attr('data-src') || element.attr('data-src-retina'));
		}, this));
	};

	/**
	 * Destroys the carousel.
	 * @public
	 */
	Owl.prototype.destroy = function() {

		this.$element.off('.owl.core');
		this.$stage.off('.owl.core');
		$(document).off('.owl.core');

		if (this.settings.responsive !== false) {
			window.clearTimeout(this.resizeTimer);
			this.off(window, 'resize', this._handlers.onThrottledResize);
		}

		for (var i in this._plugins) {
			this._plugins[i].destroy();
		}

		this.$stage.children('.cloned').remove();

		this.$stage.unwrap();
		this.$stage.children().contents().unwrap();
		this.$stage.children().unwrap();
		this.$stage.remove();
		this.$element
			.removeClass(this.options.refreshClass)
			.removeClass(this.options.loadingClass)
			.removeClass(this.options.loadedClass)
			.removeClass(this.options.rtlClass)
			.removeClass(this.options.dragClass)
			.removeClass(this.options.grabClass)
			.attr('class', this.$element.attr('class').replace(new RegExp(this.options.responsiveClass + '-\\S+\\s', 'g'), ''))
			.removeData('owl.carousel');
	};

	/**
	 * Operators to calculate right-to-left and left-to-right.
	 * @protected
	 * @param {Number} [a] - The left side operand.
	 * @param {String} [o] - The operator.
	 * @param {Number} [b] - The right side operand.
	 */
	Owl.prototype.op = function(a, o, b) {
		var rtl = this.settings.rtl;
		switch (o) {
			case '<':
				return rtl ? a > b : a < b;
			case '>':
				return rtl ? a < b : a > b;
			case '>=':
				return rtl ? a <= b : a >= b;
			case '<=':
				return rtl ? a >= b : a <= b;
			default:
				break;
		}
	};

	/**
	 * Attaches to an internal event.
	 * @protected
	 * @param {HTMLElement} element - The event source.
	 * @param {String} event - The event name.
	 * @param {Function} listener - The event handler to attach.
	 * @param {Boolean} capture - Wether the event should be handled at the capturing phase or not.
	 */
	Owl.prototype.on = function(element, event, listener, capture) {
		if (element.addEventListener) {
			element.addEventListener(event, listener, capture);
		} else if (element.attachEvent) {
			element.attachEvent('on' + event, listener);
		}
	};

	/**
	 * Detaches from an internal event.
	 * @protected
	 * @param {HTMLElement} element - The event source.
	 * @param {String} event - The event name.
	 * @param {Function} listener - The attached event handler to detach.
	 * @param {Boolean} capture - Wether the attached event handler was registered as a capturing listener or not.
	 */
	Owl.prototype.off = function(element, event, listener, capture) {
		if (element.removeEventListener) {
			element.removeEventListener(event, listener, capture);
		} else if (element.detachEvent) {
			element.detachEvent('on' + event, listener);
		}
	};

	/**
	 * Triggers a public event.
	 * @todo Remove `status`, `relatedTarget` should be used instead.
	 * @protected
	 * @param {String} name - The event name.
	 * @param {*} [data=null] - The event data.
	 * @param {String} [namespace=carousel] - The event namespace.
	 * @param {String} [state] - The state which is associated with the event.
	 * @param {Boolean} [enter=false] - Indicates if the call enters the specified state or not.
	 * @returns {Event} - The event arguments.
	 */
	Owl.prototype.trigger = function(name, data, namespace, state, enter) {
		var status = {
			item: { count: this._items.length, index: this.current() }
		}, handler = $.camelCase(
			$.grep([ 'on', name, namespace ], function(v) { return v })
				.join('-').toLowerCase()
		), event = $.Event(
			[ name, 'owl', namespace || 'carousel' ].join('.').toLowerCase(),
			$.extend({ relatedTarget: this }, status, data)
		);

		if (!this._supress[name]) {
			$.each(this._plugins, function(name, plugin) {
				if (plugin.onTrigger) {
					plugin.onTrigger(event);
				}
			});

			this.register({ type: Owl.Type.Event, name: name });
			this.$element.trigger(event);

			if (this.settings && typeof this.settings[handler] === 'function') {
				this.settings[handler].call(this, event);
			}
		}

		return event;
	};

	/**
	 * Enters a state.
	 * @param name - The state name.
	 */
	Owl.prototype.enter = function(name) {
		$.each([ name ].concat(this._states.tags[name] || []), $.proxy(function(i, name) {
			if (this._states.current[name] === undefined) {
				this._states.current[name] = 0;
			}

			this._states.current[name]++;
		}, this));
	};

	/**
	 * Leaves a state.
	 * @param name - The state name.
	 */
	Owl.prototype.leave = function(name) {
		$.each([ name ].concat(this._states.tags[name] || []), $.proxy(function(i, name) {
			this._states.current[name]--;
		}, this));
	};

	/**
	 * Registers an event or state.
	 * @public
	 * @param {Object} object - The event or state to register.
	 */
	Owl.prototype.register = function(object) {
		if (object.type === Owl.Type.Event) {
			if (!$.event.special[object.name]) {
				$.event.special[object.name] = {};
			}

			if (!$.event.special[object.name].owl) {
				var _default = $.event.special[object.name]._default;
				$.event.special[object.name]._default = function(e) {
					if (_default && _default.apply && (!e.namespace || e.namespace.indexOf('owl') === -1)) {
						return _default.apply(this, arguments);
					}
					return e.namespace && e.namespace.indexOf('owl') > -1;
				};
				$.event.special[object.name].owl = true;
			}
		} else if (object.type === Owl.Type.State) {
			if (!this._states.tags[object.name]) {
				this._states.tags[object.name] = object.tags;
			} else {
				this._states.tags[object.name] = this._states.tags[object.name].concat(object.tags);
			}

			this._states.tags[object.name] = $.grep(this._states.tags[object.name], $.proxy(function(tag, i) {
				return $.inArray(tag, this._states.tags[object.name]) === i;
			}, this));
		}
	};

	/**
	 * Suppresses events.
	 * @protected
	 * @param {Array.<String>} events - The events to suppress.
	 */
	Owl.prototype.suppress = function(events) {
		$.each(events, $.proxy(function(index, event) {
			this._supress[event] = true;
		}, this));
	};

	/**
	 * Releases suppressed events.
	 * @protected
	 * @param {Array.<String>} events - The events to release.
	 */
	Owl.prototype.release = function(events) {
		$.each(events, $.proxy(function(index, event) {
			delete this._supress[event];
		}, this));
	};

	/**
	 * Gets unified pointer coordinates from event.
	 * @todo #261
	 * @protected
	 * @param {Event} - The `mousedown` or `touchstart` event.
	 * @returns {Object} - Contains `x` and `y` coordinates of current pointer position.
	 */
	Owl.prototype.pointer = function(event) {
		var result = { x: null, y: null };

		event = event.originalEvent || event || window.event;

		event = event.touches && event.touches.length ?
			event.touches[0] : event.changedTouches && event.changedTouches.length ?
				event.changedTouches[0] : event;

		if (event.pageX) {
			result.x = event.pageX;
			result.y = event.pageY;
		} else {
			result.x = event.clientX;
			result.y = event.clientY;
		}

		return result;
	};

	/**
	 * Determines if the input is a Number or something that can be coerced to a Number
	 * @protected
	 * @param {Number|String|Object|Array|Boolean|RegExp|Function|Symbol} - The input to be tested
	 * @returns {Boolean} - An indication if the input is a Number or can be coerced to a Number
	 */
	Owl.prototype.isNumeric = function(number) {
		return !isNaN(parseFloat(number));
	};

	/**
	 * Gets the difference of two vectors.
	 * @todo #261
	 * @protected
	 * @param {Object} - The first vector.
	 * @param {Object} - The second vector.
	 * @returns {Object} - The difference.
	 */
	Owl.prototype.difference = function(first, second) {
		return {
			x: first.x - second.x,
			y: first.y - second.y
		};
	};

	/**
	 * The jQuery Plugin for the Owl Carousel
	 * @todo Navigation plugin `next` and `prev`
	 * @public
	 */
	$.fn.owlCarousel = function(option) {
		var args = Array.prototype.slice.call(arguments, 1);

		return this.each(function() {
			var $this = $(this),
				data = $this.data('owl.carousel');

			if (!data) {
				data = new Owl(this, typeof option == 'object' && option);
				$this.data('owl.carousel', data);

				$.each([
					'next', 'prev', 'to', 'destroy', 'refresh', 'replace', 'add', 'remove'
				], function(i, event) {
					data.register({ type: Owl.Type.Event, name: event });
					data.$element.on(event + '.owl.carousel.core', $.proxy(function(e) {
						if (e.namespace && e.relatedTarget !== this) {
							this.suppress([ event ]);
							data[event].apply(this, [].slice.call(arguments, 1));
							this.release([ event ]);
						}
					}, data));
				});
			}

			if (typeof option == 'string' && option.charAt(0) !== '_') {
				data[option].apply(data, args);
			}
		});
	};

	/**
	 * The constructor for the jQuery Plugin
	 * @public
	 */
	$.fn.owlCarousel.Constructor = Owl;

})(window.Zepto || window.jQuery, window, document);

/**
 * AutoRefresh Plugin
 * @version 2.1.0
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the auto refresh plugin.
	 * @class The Auto Refresh Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var AutoRefresh = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Refresh interval.
		 * @protected
		 * @type {number}
		 */
		this._interval = null;

		/**
		 * Whether the element is currently visible or not.
		 * @protected
		 * @type {Boolean}
		 */
		this._visible = null;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoRefresh) {
					this.watch();
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, AutoRefresh.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	AutoRefresh.Defaults = {
		autoRefresh: true,
		autoRefreshInterval: 500
	};

	/**
	 * Watches the element.
	 */
	AutoRefresh.prototype.watch = function() {
		if (this._interval) {
			return;
		}

		this._visible = this._core.$element.is(':visible');
		this._interval = window.setInterval($.proxy(this.refresh, this), this._core.settings.autoRefreshInterval);
	};

	/**
	 * Refreshes the element.
	 */
	AutoRefresh.prototype.refresh = function() {
		if (this._core.$element.is(':visible') === this._visible) {
			return;
		}

		this._visible = !this._visible;

		this._core.$element.toggleClass('owl-hidden', !this._visible);

		this._visible && (this._core.invalidate('width') && this._core.refresh());
	};

	/**
	 * Destroys the plugin.
	 */
	AutoRefresh.prototype.destroy = function() {
		var handler, property;

		window.clearInterval(this._interval);

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.AutoRefresh = AutoRefresh;

})(window.Zepto || window.jQuery, window, document);

/**
 * Lazy Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the lazy plugin.
	 * @class The Lazy Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Lazy = function(carousel) {

		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Already loaded items.
		 * @protected
		 * @type {Array.<jQuery>}
		 */
		this._loaded = [];

		/**
		 * Event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel change.owl.carousel resized.owl.carousel': $.proxy(function(e) {
				if (!e.namespace) {
					return;
				}

				if (!this._core.settings || !this._core.settings.lazyLoad) {
					return;
				}

				if ((e.property && e.property.name == 'position') || e.type == 'initialized') {
					var settings = this._core.settings,
						n = (settings.center && Math.ceil(settings.items / 2) || settings.items),
						i = ((settings.center && n * -1) || 0),
						position = (e.property && e.property.value !== undefined ? e.property.value : this._core.current()) + i,
						clones = this._core.clones().length,
						load = $.proxy(function(i, v) { this.load(v) }, this);

					while (i++ < n) {
						this.load(clones / 2 + this._core.relative(position));
						clones && $.each(this._core.clones(this._core.relative(position)), load);
						position++;
					}
				}
			}, this)
		};

		// set the default options
		this._core.options = $.extend({}, Lazy.Defaults, this._core.options);

		// register event handler
		this._core.$element.on(this._handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	Lazy.Defaults = {
		lazyLoad: false
	};

	/**
	 * Loads all resources of an item at the specified position.
	 * @param {Number} position - The absolute position of the item.
	 * @protected
	 */
	Lazy.prototype.load = function(position) {
		var $item = this._core.$stage.children().eq(position),
			$elements = $item && $item.find('.owl-lazy');

		if (!$elements || $.inArray($item.get(0), this._loaded) > -1) {
			return;
		}

		$elements.each($.proxy(function(index, element) {
			var $element = $(element), image,
				url = (window.devicePixelRatio > 1 && $element.attr('data-src-retina')) || $element.attr('data-src');

			this._core.trigger('load', { element: $element, url: url }, 'lazy');

			if ($element.is('img')) {
				$element.one('load.owl.lazy', $.proxy(function() {
					$element.css('opacity', 1);
					this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
				}, this)).attr('src', url);
			} else {
				image = new Image();
				image.onload = $.proxy(function() {
					$element.css({
						'background-image': 'url("' + url + '")',
						'opacity': '1'
					});
					this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
				}, this);
				image.src = url;
			}
		}, this));

		this._loaded.push($item.get(0));
	};

	/**
	 * Destroys the plugin.
	 * @public
	 */
	Lazy.prototype.destroy = function() {
		var handler, property;

		for (handler in this.handlers) {
			this._core.$element.off(handler, this.handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Lazy = Lazy;

})(window.Zepto || window.jQuery, window, document);

/**
 * AutoHeight Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the auto height plugin.
	 * @class The Auto Height Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var AutoHeight = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel refreshed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoHeight) {
					this.update();
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoHeight && e.property.name == 'position'){
					this.update();
				}
			}, this),
			'loaded.owl.lazy': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoHeight
					&& e.element.closest('.' + this._core.settings.itemClass).index() === this._core.current()) {
					this.update();
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, AutoHeight.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	AutoHeight.Defaults = {
		autoHeight: false,
		autoHeightClass: 'owl-height'
	};

	/**
	 * Updates the view.
	 */
	AutoHeight.prototype.update = function() {
		var start = this._core._current,
			end = start + this._core.settings.items,
			visible = this._core.$stage.children().toArray().slice(start, end),
			heights = [],
			maxheight = 0;

		$.each(visible, function(index, item) {
			heights.push($(item).height());
		});

		maxheight = Math.max.apply(null, heights);

		this._core.$stage.parent()
			.height(maxheight)
			.addClass(this._core.settings.autoHeightClass);
	};

	AutoHeight.prototype.destroy = function() {
		var handler, property;

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.AutoHeight = AutoHeight;

})(window.Zepto || window.jQuery, window, document);

/**
 * Video Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the video plugin.
	 * @class The Video Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Video = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Cache all video URLs.
		 * @protected
		 * @type {Object}
		 */
		this._videos = {};

		/**
		 * Current playing item.
		 * @protected
		 * @type {jQuery}
		 */
		this._playing = null;

		/**
		 * All event handlers.
		 * @todo The cloned content removale is too late
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace) {
					this._core.register({ type: 'state', name: 'playing', tags: [ 'interacting' ] });
				}
			}, this),
			'resize.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.video && this.isInFullScreen()) {
					e.preventDefault();
				}
			}, this),
			'refreshed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.is('resizing')) {
					this._core.$stage.find('.cloned .owl-video-frame').remove();
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name === 'position' && this._playing) {
					this.stop();
				}
			}, this),
			'prepared.owl.carousel': $.proxy(function(e) {
				if (!e.namespace) {
					return;
				}

				var $element = $(e.content).find('.owl-video');

				if ($element.length) {
					$element.css('display', 'none');
					this.fetch($element, $(e.content));
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Video.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);

		this._core.$element.on('click.owl.video', '.owl-video-play-icon', $.proxy(function(e) {
			this.play(e);
		}, this));
	};

	/**
	 * Default options.
	 * @public
	 */
	Video.Defaults = {
		video: false,
		videoHeight: false,
		videoWidth: false
	};

	/**
	 * Gets the video ID and the type (YouTube/Vimeo/vzaar only).
	 * @protected
	 * @param {jQuery} target - The target containing the video data.
	 * @param {jQuery} item - The item containing the video.
	 */
	Video.prototype.fetch = function(target, item) {
			var type = (function() {
					if (target.attr('data-vimeo-id')) {
						return 'vimeo';
					} else if (target.attr('data-vzaar-id')) {
						return 'vzaar'
					} else {
						return 'youtube';
					}
				})(),
				id = target.attr('data-vimeo-id') || target.attr('data-youtube-id') || target.attr('data-vzaar-id'),
				width = target.attr('data-width') || this._core.settings.videoWidth,
				height = target.attr('data-height') || this._core.settings.videoHeight,
				url = target.attr('href');

		if (url) {

			/*
					Parses the id's out of the following urls (and probably more):
					https://www.youtube.com/watch?v=:id
					https://youtu.be/:id
					https://vimeo.com/:id
					https://vimeo.com/channels/:channel/:id
					https://vimeo.com/groups/:group/videos/:id
					https://app.vzaar.com/videos/:id

					Visual example: https://regexper.com/#(http%3A%7Chttps%3A%7C)%5C%2F%5C%2F(player.%7Cwww.%7Capp.)%3F(vimeo%5C.com%7Cyoutu(be%5C.com%7C%5C.be%7Cbe%5C.googleapis%5C.com)%7Cvzaar%5C.com)%5C%2F(video%5C%2F%7Cvideos%5C%2F%7Cembed%5C%2F%7Cchannels%5C%2F.%2B%5C%2F%7Cgroups%5C%2F.%2B%5C%2F%7Cwatch%5C%3Fv%3D%7Cv%5C%2F)%3F(%5BA-Za-z0-9._%25-%5D*)(%5C%26%5CS%2B)%3F
			*/

			id = url.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/);

			if (id[3].indexOf('youtu') > -1) {
				type = 'youtube';
			} else if (id[3].indexOf('vimeo') > -1) {
				type = 'vimeo';
			} else if (id[3].indexOf('vzaar') > -1) {
				type = 'vzaar';
			} else {
				throw new Error('Video URL not supported.');
			}
			id = id[6];
		} else {
			throw new Error('Missing video URL.');
		}

		this._videos[url] = {
			type: type,
			id: id,
			width: width,
			height: height
		};

		item.attr('data-video', url);

		this.thumbnail(target, this._videos[url]);
	};

	/**
	 * Creates video thumbnail.
	 * @protected
	 * @param {jQuery} target - The target containing the video data.
	 * @param {Object} info - The video info object.
	 * @see `fetch`
	 */
	Video.prototype.thumbnail = function(target, video) {
		var tnLink,
			icon,
			path,
			dimensions = video.width && video.height ? 'style="width:' + video.width + 'px;height:' + video.height + 'px;"' : '',
			customTn = target.find('img'),
			srcType = 'src',
			lazyClass = '',
			settings = this._core.settings,
			create = function(path) {
				icon = '<div class="owl-video-play-icon"></div>';

				if (settings.lazyLoad) {
					tnLink = '<div class="owl-video-tn ' + lazyClass + '" ' + srcType + '="' + path + '"></div>';
				} else {
					tnLink = '<div class="owl-video-tn" style="opacity:1;background-image:url(' + path + ')"></div>';
				}
				target.after(tnLink);
				target.after(icon);
			};

		// wrap video content into owl-video-wrapper div
		target.wrap('<div class="owl-video-wrapper"' + dimensions + '></div>');

		if (this._core.settings.lazyLoad) {
			srcType = 'data-src';
			lazyClass = 'owl-lazy';
		}

		// custom thumbnail
		if (customTn.length) {
			create(customTn.attr(srcType));
			customTn.remove();
			return false;
		}

		if (video.type === 'youtube') {
			path = "//img.youtube.com/vi/" + video.id + "/hqdefault.jpg";
			create(path);
		} else if (video.type === 'vimeo') {
			$.ajax({
				type: 'GET',
				url: '//vimeo.com/api/v2/video/' + video.id + '.json',
				jsonp: 'callback',
				dataType: 'jsonp',
				success: function(data) {
					path = data[0].thumbnail_large;
					create(path);
				}
			});
		} else if (video.type === 'vzaar') {
			$.ajax({
				type: 'GET',
				url: '//vzaar.com/api/videos/' + video.id + '.json',
				jsonp: 'callback',
				dataType: 'jsonp',
				success: function(data) {
					path = data.framegrab_url;
					create(path);
				}
			});
		}
	};

	/**
	 * Stops the current video.
	 * @public
	 */
	Video.prototype.stop = function() {
		this._core.trigger('stop', null, 'video');
		this._playing.find('.owl-video-frame').remove();
		this._playing.removeClass('owl-video-playing');
		this._playing = null;
		this._core.leave('playing');
		this._core.trigger('stopped', null, 'video');
	};

	/**
	 * Starts the current video.
	 * @public
	 * @param {Event} event - The event arguments.
	 */
	Video.prototype.play = function(event) {
		var target = $(event.target),
			item = target.closest('.' + this._core.settings.itemClass),
			video = this._videos[item.attr('data-video')],
			width = video.width || '100%',
			height = video.height || this._core.$stage.height(),
			html;

		if (this._playing) {
			return;
		}

		this._core.enter('playing');
		this._core.trigger('play', null, 'video');

		item = this._core.items(this._core.relative(item.index()));

		this._core.reset(item.index());

		if (video.type === 'youtube') {
			html = '<iframe width="' + width + '" height="' + height + '" src="//www.youtube.com/embed/' +
				video.id + '?autoplay=1&rel=0&v=' + video.id + '" frameborder="0" allowfullscreen></iframe>';
		} else if (video.type === 'vimeo') {
			html = '<iframe src="//player.vimeo.com/video/' + video.id +
				'?autoplay=1" width="' + width + '" height="' + height +
				'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
		} else if (video.type === 'vzaar') {
			html = '<iframe frameborder="0"' + 'height="' + height + '"' + 'width="' + width +
				'" allowfullscreen mozallowfullscreen webkitAllowFullScreen ' +
				'src="//view.vzaar.com/' + video.id + '/player?autoplay=true"></iframe>';
		}

		$('<div class="owl-video-frame">' + html + '</div>').insertAfter(item.find('.owl-video'));

		this._playing = item.addClass('owl-video-playing');
	};

	/**
	 * Checks whether an video is currently in full screen mode or not.
	 * @todo Bad style because looks like a readonly method but changes members.
	 * @protected
	 * @returns {Boolean}
	 */
	Video.prototype.isInFullScreen = function() {
		var element = document.fullscreenElement || document.mozFullScreenElement ||
				document.webkitFullscreenElement;

		return element && $(element).parent().hasClass('owl-video-frame');
	};

	/**
	 * Destroys the plugin.
	 */
	Video.prototype.destroy = function() {
		var handler, property;

		this._core.$element.off('click.owl.video');

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Video = Video;

})(window.Zepto || window.jQuery, window, document);

/**
 * Animate Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the animate plugin.
	 * @class The Navigation Plugin
	 * @param {Owl} scope - The Owl Carousel
	 */
	var Animate = function(scope) {
		this.core = scope;
		this.core.options = $.extend({}, Animate.Defaults, this.core.options);
		this.swapping = true;
		this.previous = undefined;
		this.next = undefined;

		this.handlers = {
			'change.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name == 'position') {
					this.previous = this.core.current();
					this.next = e.property.value;
				}
			}, this),
			'drag.owl.carousel dragged.owl.carousel translated.owl.carousel': $.proxy(function(e) {
				if (e.namespace) {
					this.swapping = e.type == 'translated';
				}
			}, this),
			'translate.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn)) {
					this.swap();
				}
			}, this)
		};

		this.core.$element.on(this.handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	Animate.Defaults = {
		animateOut: false,
		animateIn: false
	};

	/**
	 * Toggles the animation classes whenever an translations starts.
	 * @protected
	 * @returns {Boolean|undefined}
	 */
	Animate.prototype.swap = function() {

		if (this.core.settings.items !== 1) {
			return;
		}

		if (!$.support.animation || !$.support.transition) {
			return;
		}

		this.core.speed(0);

		var left,
			clear = $.proxy(this.clear, this),
			previous = this.core.$stage.children().eq(this.previous),
			next = this.core.$stage.children().eq(this.next),
			incoming = this.core.settings.animateIn,
			outgoing = this.core.settings.animateOut;

		if (this.core.current() === this.previous) {
			return;
		}

		if (outgoing) {
			left = this.core.coordinates(this.previous) - this.core.coordinates(this.next);
			previous.one($.support.animation.end, clear)
				.css( { 'left': left + 'px' } )
				.addClass('animated owl-animated-out')
				.addClass(outgoing);
		}

		if (incoming) {
			next.one($.support.animation.end, clear)
				.addClass('animated owl-animated-in')
				.addClass(incoming);
		}
	};

	Animate.prototype.clear = function(e) {
		$(e.target).css( { 'left': '' } )
			.removeClass('animated owl-animated-out owl-animated-in')
			.removeClass(this.core.settings.animateIn)
			.removeClass(this.core.settings.animateOut);
		this.core.onTransitionEnd();
	};

	/**
	 * Destroys the plugin.
	 * @public
	 */
	Animate.prototype.destroy = function() {
		var handler, property;

		for (handler in this.handlers) {
			this.core.$element.off(handler, this.handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Animate = Animate;

})(window.Zepto || window.jQuery, window, document);

/**
 * Autoplay Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author Artus Kolanowski
 * @author David Deutsch
 * @author Tom De Caluwé
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the autoplay plugin.
	 * @class The Autoplay Plugin
	 * @param {Owl} scope - The Owl Carousel
	 */
	var Autoplay = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * The autoplay timeout id.
		 * @type {Number}
		 */
		this._call = null;

		/**
		 * Depending on the state of the plugin, this variable contains either
		 * the start time of the timer or the current timer value if it's
		 * paused. Since we start in a paused state we initialize the timer
		 * value.
		 * @type {Number}
		 */
		this._time = 0;

		/**
		 * Stores the timeout currently used.
		 * @type {Number}
		 */
		this._timeout = 0;

		/**
		 * Indicates whenever the autoplay is paused.
		 * @type {Boolean}
		 */
		this._paused = true;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name === 'settings') {
					if (this._core.settings.autoplay) {
						this.play();
					} else {
						this.stop();
					}
				} else if (e.namespace && e.property.name === 'position' && this._paused) {
					// Reset the timer. This code is triggered when the position
					// of the carousel was changed through user interaction.
					this._time = 0;
				}
			}, this),
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoplay) {
					this.play();
				}
			}, this),
			'play.owl.autoplay': $.proxy(function(e, t, s) {
				if (e.namespace) {
					this.play(t, s);
				}
			}, this),
			'stop.owl.autoplay': $.proxy(function(e) {
				if (e.namespace) {
					this.stop();
				}
			}, this),
			'mouseover.owl.autoplay': $.proxy(function() {
				if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
					this.pause();
				}
			}, this),
			'mouseleave.owl.autoplay': $.proxy(function() {
				if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
					this.play();
				}
			}, this),
			'touchstart.owl.core': $.proxy(function() {
				if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
					this.pause();
				}
			}, this),
			'touchend.owl.core': $.proxy(function() {
				if (this._core.settings.autoplayHoverPause) {
					this.play();
				}
			}, this)
		};

		// register event handlers
		this._core.$element.on(this._handlers);

		// set default options
		this._core.options = $.extend({}, Autoplay.Defaults, this._core.options);
	};

	/**
	 * Default options.
	 * @public
	 */
	Autoplay.Defaults = {
		autoplay: false,
		autoplayTimeout: 5000,
		autoplayHoverPause: false,
		autoplaySpeed: false
	};

	/**
	 * Transition to the next slide and set a timeout for the next transition.
	 * @private
	 * @param {Number} [speed] - The animation speed for the animations.
	 */
	Autoplay.prototype._next = function(speed) {
		this._call = window.setTimeout(
			$.proxy(this._next, this, speed),
			this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()
		);

		if (this._core.is('busy') || this._core.is('interacting') || document.hidden) {
			return;
		}
		this._core.next(speed || this._core.settings.autoplaySpeed);
	}

	/**
	 * Reads the current timer value when the timer is playing.
	 * @public
	 */
	Autoplay.prototype.read = function() {
		return new Date().getTime() - this._time;
	};

	/**
	 * Starts the autoplay.
	 * @public
	 * @param {Number} [timeout] - The interval before the next animation starts.
	 * @param {Number} [speed] - The animation speed for the animations.
	 */
	Autoplay.prototype.play = function(timeout, speed) {
		var elapsed;

		if (!this._core.is('rotating')) {
			this._core.enter('rotating');
		}

		timeout = timeout || this._core.settings.autoplayTimeout;

		// Calculate the elapsed time since the last transition. If the carousel
		// wasn't playing this calculation will yield zero.
		elapsed = Math.min(this._time % (this._timeout || timeout), timeout);

		if (this._paused) {
			// Start the clock.
			this._time = this.read();
			this._paused = false;
		} else {
			// Clear the active timeout to allow replacement.
			window.clearTimeout(this._call);
		}

		// Adjust the origin of the timer to match the new timeout value.
		this._time += this.read() % timeout - elapsed;

		this._timeout = timeout;
		this._call = window.setTimeout($.proxy(this._next, this, speed), timeout - elapsed);
	};

	/**
	 * Stops the autoplay.
	 * @public
	 */
	Autoplay.prototype.stop = function() {
		if (this._core.is('rotating')) {
			// Reset the clock.
			this._time = 0;
			this._paused = true;

			window.clearTimeout(this._call);
			this._core.leave('rotating');
		}
	};

	/**
	 * Pauses the autoplay.
	 * @public
	 */
	Autoplay.prototype.pause = function() {
		if (this._core.is('rotating') && !this._paused) {
			// Pause the clock.
			this._time = this.read();
			this._paused = true;

			window.clearTimeout(this._call);
		}
	};

	/**
	 * Destroys the plugin.
	 */
	Autoplay.prototype.destroy = function() {
		var handler, property;

		this.stop();

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.autoplay = Autoplay;

})(window.Zepto || window.jQuery, window, document);

/**
 * Navigation Plugin
 * @version 2.1.0
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {
	'use strict';

	/**
	 * Creates the navigation plugin.
	 * @class The Navigation Plugin
	 * @param {Owl} carousel - The Owl Carousel.
	 */
	var Navigation = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Indicates whether the plugin is initialized or not.
		 * @protected
		 * @type {Boolean}
		 */
		this._initialized = false;

		/**
		 * The current paging indexes.
		 * @protected
		 * @type {Array}
		 */
		this._pages = [];

		/**
		 * All DOM elements of the user interface.
		 * @protected
		 * @type {Object}
		 */
		this._controls = {};

		/**
		 * Markup for an indicator.
		 * @protected
		 * @type {Array.<String>}
		 */
		this._templates = [];

		/**
		 * The carousel element.
		 * @type {jQuery}
		 */
		this.$element = this._core.$element;

		/**
		 * Overridden methods of the carousel.
		 * @protected
		 * @type {Object}
		 */
		this._overrides = {
			next: this._core.next,
			prev: this._core.prev,
			to: this._core.to
		};

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'prepared.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.dotsData) {
					this._templates.push('<div class="' + this._core.settings.dotClass + '">' +
						$(e.content).find('[data-dot]').addBack('[data-dot]').attr('data-dot') + '</div>');
				}
			}, this),
			'added.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.dotsData) {
					this._templates.splice(e.position, 0, this._templates.pop());
				}
			}, this),
			'remove.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.dotsData) {
					this._templates.splice(e.position, 1);
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name == 'position') {
					this.draw();
				}
			}, this),
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace && !this._initialized) {
					this._core.trigger('initialize', null, 'navigation');
					this.initialize();
					this.update();
					this.draw();
					this._initialized = true;
					this._core.trigger('initialized', null, 'navigation');
				}
			}, this),
			'refreshed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._initialized) {
					this._core.trigger('refresh', null, 'navigation');
					this.update();
					this.draw();
					this._core.trigger('refreshed', null, 'navigation');
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Navigation.Defaults, this._core.options);

		// register event handlers
		this.$element.on(this._handlers);
	};

	/**
	 * Default options.
	 * @public
	 * @todo Rename `slideBy` to `navBy`
	 */
	Navigation.Defaults = {
		nav: false,
		navText: [
			'<span aria-label="' + 'prev' + '">&#x2039;</span>',
			'<span aria-label="' + 'next' + '">&#x203a;</span>'
		],
		navSpeed: false,
		navElement: 'div role="presentation"',
		navContainer: false,
		navContainerClass: 'owl-nav',
		navClass: [
			'owl-prev',
			'owl-next'
		],
		slideBy: 1,
		dotClass: 'owl-dot',
		dotsClass: 'owl-dots',
		dots: true,
		dotsEach: false,
		dotsData: false,
		dotsSpeed: false,
		dotsContainer: false
	};

	/**
	 * Initializes the layout of the plugin and extends the carousel.
	 * @protected
	 */
	Navigation.prototype.initialize = function() {
		var override,
			settings = this._core.settings;

		// create DOM structure for relative navigation
		this._controls.$relative = (settings.navContainer ? $(settings.navContainer)
			: $('<div>').addClass(settings.navContainerClass).appendTo(this.$element)).addClass('disabled');

		this._controls.$previous = $('<' + settings.navElement + '>')
			.addClass(settings.navClass[0])
			.html(settings.navText[0])
			.prependTo(this._controls.$relative)
			.on('click', $.proxy(function(e) {
				this.prev(settings.navSpeed);
			}, this));
		this._controls.$next = $('<' + settings.navElement + '>')
			.addClass(settings.navClass[1])
			.html(settings.navText[1])
			.appendTo(this._controls.$relative)
			.on('click', $.proxy(function(e) {
				this.next(settings.navSpeed);
			}, this));

		// create DOM structure for absolute navigation
		if (!settings.dotsData) {
			this._templates = [ $('<div>')
				.addClass(settings.dotClass)
				.append($('<span>'))
				.prop('outerHTML') ];
		}

		this._controls.$absolute = (settings.dotsContainer ? $(settings.dotsContainer)
			: $('<div>').addClass(settings.dotsClass).appendTo(this.$element)).addClass('disabled');

		this._controls.$absolute.on('click', 'div', $.proxy(function(e) {
			var index = $(e.target).parent().is(this._controls.$absolute)
				? $(e.target).index() : $(e.target).parent().index();

			e.preventDefault();

			this.to(index, settings.dotsSpeed);
		}, this));

		/*$el.on('focusin', function() {
			$(document).off(".carousel");

			$(document).on('keydown.carousel', function(e) {
				if(e.keyCode == 37) {
					$el.trigger('prev.owl')
				}
				if(e.keyCode == 39) {
					$el.trigger('next.owl')
				}
			});
		});*/

		// override public methods of the carousel
		for (override in this._overrides) {
			this._core[override] = $.proxy(this[override], this);
		}
	};

	/**
	 * Destroys the plugin.
	 * @protected
	 */
	Navigation.prototype.destroy = function() {
		var handler, control, property, override;

		for (handler in this._handlers) {
			this.$element.off(handler, this._handlers[handler]);
		}
		for (control in this._controls) {
			if (control === '$relative' && settings.navContainer) {
				this._controls[control].html('');
			} else {
				this._controls[control].remove();
			}
		}
		for (override in this.overides) {
			this._core[override] = this._overrides[override];
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	/**
	 * Updates the internal state.
	 * @protected
	 */
	Navigation.prototype.update = function() {
		var i, j, k,
			lower = this._core.clones().length / 2,
			upper = lower + this._core.items().length,
			maximum = this._core.maximum(true),
			settings = this._core.settings,
			size = settings.center || settings.autoWidth || settings.dotsData
				? 1 : settings.dotsEach || settings.items;

		if (settings.slideBy !== 'page') {
			settings.slideBy = Math.min(settings.slideBy, settings.items);
		}

		if (settings.dots || settings.slideBy == 'page') {
			this._pages = [];

			for (i = lower, j = 0, k = 0; i < upper; i++) {
				if (j >= size || j === 0) {
					this._pages.push({
						start: Math.min(maximum, i - lower),
						end: i - lower + size - 1
					});
					if (Math.min(maximum, i - lower) === maximum) {
						break;
					}
					j = 0, ++k;
				}
				j += this._core.mergers(this._core.relative(i));
			}
		}
	};

	/**
	 * Draws the user interface.
	 * @todo The option `dotsData` wont work.
	 * @protected
	 */
	Navigation.prototype.draw = function() {
		var difference,
			settings = this._core.settings,
			disabled = this._core.items().length <= settings.items,
			index = this._core.relative(this._core.current()),
			loop = settings.loop || settings.rewind;

		this._controls.$relative.toggleClass('disabled', !settings.nav || disabled);

		if (settings.nav) {
			this._controls.$previous.toggleClass('disabled', !loop && index <= this._core.minimum(true));
			this._controls.$next.toggleClass('disabled', !loop && index >= this._core.maximum(true));
		}

		this._controls.$absolute.toggleClass('disabled', !settings.dots || disabled);

		if (settings.dots) {
			difference = this._pages.length - this._controls.$absolute.children().length;

			if (settings.dotsData && difference !== 0) {
				this._controls.$absolute.html(this._templates.join(''));
			} else if (difference > 0) {
				this._controls.$absolute.append(new Array(difference + 1).join(this._templates[0]));
			} else if (difference < 0) {
				this._controls.$absolute.children().slice(difference).remove();
			}

			this._controls.$absolute.find('.active').removeClass('active');
			this._controls.$absolute.children().eq($.inArray(this.current(), this._pages)).addClass('active');
		}
	};

	/**
	 * Extends event data.
	 * @protected
	 * @param {Event} event - The event object which gets thrown.
	 */
	Navigation.prototype.onTrigger = function(event) {
		var settings = this._core.settings;

		event.page = {
			index: $.inArray(this.current(), this._pages),
			count: this._pages.length,
			size: settings && (settings.center || settings.autoWidth || settings.dotsData
				? 1 : settings.dotsEach || settings.items)
		};
	};

	/**
	 * Gets the current page position of the carousel.
	 * @protected
	 * @returns {Number}
	 */
	Navigation.prototype.current = function() {
		var current = this._core.relative(this._core.current());
		return $.grep(this._pages, $.proxy(function(page, index) {
			return page.start <= current && page.end >= current;
		}, this)).pop();
	};

	/**
	 * Gets the current succesor/predecessor position.
	 * @protected
	 * @returns {Number}
	 */
	Navigation.prototype.getPosition = function(successor) {
		var position, length,
			settings = this._core.settings;

		if (settings.slideBy == 'page') {
			position = $.inArray(this.current(), this._pages);
			length = this._pages.length;
			successor ? ++position : --position;
			position = this._pages[((position % length) + length) % length].start;
		} else {
			position = this._core.relative(this._core.current());
			length = this._core.items().length;
			successor ? position += settings.slideBy : position -= settings.slideBy;
		}

		return position;
	};

	/**
	 * Slides to the next item or page.
	 * @public
	 * @param {Number} [speed=false] - The time in milliseconds for the transition.
	 */
	Navigation.prototype.next = function(speed) {
		$.proxy(this._overrides.to, this._core)(this.getPosition(true), speed);
	};

	/**
	 * Slides to the previous item or page.
	 * @public
	 * @param {Number} [speed=false] - The time in milliseconds for the transition.
	 */
	Navigation.prototype.prev = function(speed) {
		$.proxy(this._overrides.to, this._core)(this.getPosition(false), speed);
	};

	/**
	 * Slides to the specified item or page.
	 * @public
	 * @param {Number} position - The position of the item or page.
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 * @param {Boolean} [standard=false] - Whether to use the standard behaviour or not.
	 */
	Navigation.prototype.to = function(position, speed, standard) {
		var length;

		if (!standard && this._pages.length) {
			length = this._pages.length;
			$.proxy(this._overrides.to, this._core)(this._pages[((position % length) + length) % length].start, speed);
		} else {
			$.proxy(this._overrides.to, this._core)(position, speed);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Navigation = Navigation;

})(window.Zepto || window.jQuery, window, document);

/**
 * Hash Plugin
 * @version 2.1.0
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {
	'use strict';

	/**
	 * Creates the hash plugin.
	 * @class The Hash Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Hash = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Hash index for the items.
		 * @protected
		 * @type {Object}
		 */
		this._hashes = {};

		/**
		 * The carousel element.
		 * @type {jQuery}
		 */
		this.$element = this._core.$element;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.startPosition === 'URLHash') {
					$(window).trigger('hashchange.owl.navigation');
				}
			}, this),
			'prepared.owl.carousel': $.proxy(function(e) {
				if (e.namespace) {
					var hash = $(e.content).find('[data-hash]').addBack('[data-hash]').attr('data-hash');

					if (!hash) {
						return;
					}

					this._hashes[hash] = e.content;
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name === 'position') {
					var current = this._core.items(this._core.relative(this._core.current())),
						hash = $.map(this._hashes, function(item, hash) {
							return item === current ? hash : null;
						}).join();

					if (!hash || window.location.hash.slice(1) === hash) {
						return;
					}

					window.location.hash = hash;
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Hash.Defaults, this._core.options);

		// register the event handlers
		this.$element.on(this._handlers);

		// register event listener for hash navigation
		$(window).on('hashchange.owl.navigation', $.proxy(function(e) {
			var hash = window.location.hash.substring(1),
				items = this._core.$stage.children(),
				position = this._hashes[hash] && items.index(this._hashes[hash]);

			if (position === undefined || position === this._core.current()) {
				return;
			}

			this._core.to(this._core.relative(position), false, true);
		}, this));
	};

	/**
	 * Default options.
	 * @public
	 */
	Hash.Defaults = {
		URLhashListener: false
	};

	/**
	 * Destroys the plugin.
	 * @public
	 */
	Hash.prototype.destroy = function() {
		var handler, property;

		$(window).off('hashchange.owl.navigation');

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Hash = Hash;

})(window.Zepto || window.jQuery, window, document);

/**
 * Support Plugin
 *
 * @version 2.1.0
 * @author Vivid Planet Software GmbH
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	var style = $('<support>').get(0).style,
		prefixes = 'Webkit Moz O ms'.split(' '),
		events = {
			transition: {
				end: {
					WebkitTransition: 'webkitTransitionEnd',
					MozTransition: 'transitionend',
					OTransition: 'oTransitionEnd',
					transition: 'transitionend'
				}
			},
			animation: {
				end: {
					WebkitAnimation: 'webkitAnimationEnd',
					MozAnimation: 'animationend',
					OAnimation: 'oAnimationEnd',
					animation: 'animationend'
				}
			}
		},
		tests = {
			csstransforms: function() {
				return !!test('transform');
			},
			csstransforms3d: function() {
				return !!test('perspective');
			},
			csstransitions: function() {
				return !!test('transition');
			},
			cssanimations: function() {
				return !!test('animation');
			}
		};

	function test(property, prefixed) {
		var result = false,
			upper = property.charAt(0).toUpperCase() + property.slice(1);

		$.each((property + ' ' + prefixes.join(upper + ' ') + upper).split(' '), function(i, property) {
			if (style[property] !== undefined) {
				result = prefixed ? property : true;
				return false;
			}
		});

		return result;
	}

	function prefixed(property) {
		return test(property, true);
	}

	if (tests.csstransitions()) {
		/* jshint -W053 */
		$.support.transition = new String(prefixed('transition'))
		$.support.transition.end = events.transition.end[ $.support.transition ];
	}

	if (tests.cssanimations()) {
		/* jshint -W053 */
		$.support.animation = new String(prefixed('animation'))
		$.support.animation.end = events.animation.end[ $.support.animation ];
	}

	if (tests.csstransforms()) {
		/* jshint -W053 */
		$.support.transform = new String(prefixed('transform'));
		$.support.transform3d = tests.csstransforms3d();
	}

})(window.Zepto || window.jQuery, window, document);
;
/* perfect-scrollbar v0.6.7 */
!function t(e,n,r){function o(l,s){if(!n[l]){if(!e[l]){var a="function"==typeof require&&require;if(!s&&a)return a(l,!0);if(i)return i(l,!0);var c=new Error("Cannot find module '"+l+"'");throw c.code="MODULE_NOT_FOUND",c}var u=n[l]={exports:{}};e[l][0].call(u.exports,function(t){var n=e[l][1][t];return o(n?n:t)},u,u.exports,t,e,n,r)}return n[l].exports}for(var i="function"==typeof require&&require,l=0;l<r.length;l++)o(r[l]);return o}({1:[function(t,e,n){"use strict";function r(t){t.fn.perfectScrollbar=function(e){return this.each(function(){if("object"==typeof e||"undefined"==typeof e){var n=e;i.get(this)||o.initialize(this,n)}else{var r=e;"update"===r?o.update(this):"destroy"===r&&o.destroy(this)}return t(this)})}}var o=t("../main"),i=t("../plugin/instances");if("function"==typeof define&&define.amd)define(["jquery"],r);else{var l=window.jQuery?window.jQuery:window.$;"undefined"!=typeof l&&r(l)}e.exports=r},{"../main":7,"../plugin/instances":18}],2:[function(t,e,n){"use strict";function r(t,e){var n=t.className.split(" ");n.indexOf(e)<0&&n.push(e),t.className=n.join(" ")}function o(t,e){var n=t.className.split(" "),r=n.indexOf(e);r>=0&&n.splice(r,1),t.className=n.join(" ")}n.add=function(t,e){t.classList?t.classList.add(e):r(t,e)},n.remove=function(t,e){t.classList?t.classList.remove(e):o(t,e)},n.list=function(t){return t.classList?Array.prototype.slice.apply(t.classList):t.className.split(" ")}},{}],3:[function(t,e,n){"use strict";function r(t,e){return window.getComputedStyle(t)[e]}function o(t,e,n){return"number"==typeof n&&(n=n.toString()+"px"),t.style[e]=n,t}function i(t,e){for(var n in e){var r=e[n];"number"==typeof r&&(r=r.toString()+"px"),t.style[n]=r}return t}var l={};l.e=function(t,e){var n=document.createElement(t);return n.className=e,n},l.appendTo=function(t,e){return e.appendChild(t),t},l.css=function(t,e,n){return"object"==typeof e?i(t,e):"undefined"==typeof n?r(t,e):o(t,e,n)},l.matches=function(t,e){return"undefined"!=typeof t.matches?t.matches(e):"undefined"!=typeof t.matchesSelector?t.matchesSelector(e):"undefined"!=typeof t.webkitMatchesSelector?t.webkitMatchesSelector(e):"undefined"!=typeof t.mozMatchesSelector?t.mozMatchesSelector(e):"undefined"!=typeof t.msMatchesSelector?t.msMatchesSelector(e):void 0},l.remove=function(t){"undefined"!=typeof t.remove?t.remove():t.parentNode&&t.parentNode.removeChild(t)},l.queryChildren=function(t,e){return Array.prototype.filter.call(t.childNodes,function(t){return l.matches(t,e)})},e.exports=l},{}],4:[function(t,e,n){"use strict";var r=function(t){this.element=t,this.events={}};r.prototype.bind=function(t,e){"undefined"==typeof this.events[t]&&(this.events[t]=[]),this.events[t].push(e),this.element.addEventListener(t,e,!1)},r.prototype.unbind=function(t,e){var n="undefined"!=typeof e;this.events[t]=this.events[t].filter(function(r){return n&&r!==e?!0:(this.element.removeEventListener(t,r,!1),!1)},this)},r.prototype.unbindAll=function(){for(var t in this.events)this.unbind(t)};var o=function(){this.eventElements=[]};o.prototype.eventElement=function(t){var e=this.eventElements.filter(function(e){return e.element===t})[0];return"undefined"==typeof e&&(e=new r(t),this.eventElements.push(e)),e},o.prototype.bind=function(t,e,n){this.eventElement(t).bind(e,n)},o.prototype.unbind=function(t,e,n){this.eventElement(t).unbind(e,n)},o.prototype.unbindAll=function(){for(var t=0;t<this.eventElements.length;t++)this.eventElements[t].unbindAll()},o.prototype.once=function(t,e,n){var r=this.eventElement(t),o=function(t){r.unbind(e,o),n(t)};r.bind(e,o)},e.exports=o},{}],5:[function(t,e,n){"use strict";e.exports=function(){function t(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return function(){return t()+t()+"-"+t()+"-"+t()+"-"+t()+"-"+t()+t()+t()}}()},{}],6:[function(t,e,n){"use strict";var r=t("./class"),o=t("./dom");n.toInt=function(t){return parseInt(t,10)||0},n.clone=function(t){if(null===t)return null;if("object"==typeof t){var e={};for(var n in t)e[n]=this.clone(t[n]);return e}return t},n.extend=function(t,e){var n=this.clone(t);for(var r in e)n[r]=this.clone(e[r]);return n},n.isEditable=function(t){return o.matches(t,"input,[contenteditable]")||o.matches(t,"select,[contenteditable]")||o.matches(t,"textarea,[contenteditable]")||o.matches(t,"button,[contenteditable]")},n.removePsClasses=function(t){for(var e=r.list(t),n=0;n<e.length;n++){var o=e[n];0===o.indexOf("ps-")&&r.remove(t,o)}},n.outerWidth=function(t){return this.toInt(o.css(t,"width"))+this.toInt(o.css(t,"paddingLeft"))+this.toInt(o.css(t,"paddingRight"))+this.toInt(o.css(t,"borderLeftWidth"))+this.toInt(o.css(t,"borderRightWidth"))},n.startScrolling=function(t,e){r.add(t,"ps-in-scrolling"),"undefined"!=typeof e?r.add(t,"ps-"+e):(r.add(t,"ps-x"),r.add(t,"ps-y"))},n.stopScrolling=function(t,e){r.remove(t,"ps-in-scrolling"),"undefined"!=typeof e?r.remove(t,"ps-"+e):(r.remove(t,"ps-x"),r.remove(t,"ps-y"))},n.env={isWebKit:"WebkitAppearance"in document.documentElement.style,supportsTouch:"ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch,supportsIePointer:null!==window.navigator.msMaxTouchPoints}},{"./class":2,"./dom":3}],7:[function(t,e,n){"use strict";var r=t("./plugin/destroy"),o=t("./plugin/initialize"),i=t("./plugin/update");e.exports={initialize:o,update:i,destroy:r}},{"./plugin/destroy":9,"./plugin/initialize":17,"./plugin/update":21}],8:[function(t,e,n){"use strict";e.exports={maxScrollbarLength:null,minScrollbarLength:null,scrollXMarginOffset:0,scrollYMarginOffset:0,stopPropagationOnClick:!0,suppressScrollX:!1,suppressScrollY:!1,swipePropagation:!0,useBothWheelAxes:!1,useKeyboard:!0,useSelectionScroll:!1,wheelPropagation:!1,wheelSpeed:1}},{}],9:[function(t,e,n){"use strict";var r=t("../lib/dom"),o=t("../lib/helper"),i=t("./instances");e.exports=function(t){var e=i.get(t);e&&(e.event.unbindAll(),r.remove(e.scrollbarX),r.remove(e.scrollbarY),r.remove(e.scrollbarXRail),r.remove(e.scrollbarYRail),o.removePsClasses(t),i.remove(t))}},{"../lib/dom":3,"../lib/helper":6,"./instances":18}],10:[function(t,e,n){"use strict";function r(t,e){function n(t){return t.getBoundingClientRect()}var r=window.Event.prototype.stopPropagation.bind;e.settings.stopPropagationOnClick&&e.event.bind(e.scrollbarY,"click",r),e.event.bind(e.scrollbarYRail,"click",function(r){var i=o.toInt(e.scrollbarYHeight/2),a=e.railYRatio*(r.pageY-window.scrollY-n(e.scrollbarYRail).top-i),c=e.railYRatio*(e.railYHeight-e.scrollbarYHeight),u=a/c;0>u?u=0:u>1&&(u=1),s(t,"top",(e.contentHeight-e.containerHeight)*u),l(t),r.stopPropagation()}),e.settings.stopPropagationOnClick&&e.event.bind(e.scrollbarX,"click",r),e.event.bind(e.scrollbarXRail,"click",function(r){var i=o.toInt(e.scrollbarXWidth/2),a=e.railXRatio*(r.pageX-window.scrollX-n(e.scrollbarXRail).left-i),c=e.railXRatio*(e.railXWidth-e.scrollbarXWidth),u=a/c;0>u?u=0:u>1&&(u=1),s(t,"left",(e.contentWidth-e.containerWidth)*u-e.negativeScrollAdjustment),l(t),r.stopPropagation()})}var o=t("../../lib/helper"),i=t("../instances"),l=t("../update-geometry"),s=t("../update-scroll");e.exports=function(t){var e=i.get(t);r(t,e)}},{"../../lib/helper":6,"../instances":18,"../update-geometry":19,"../update-scroll":20}],11:[function(t,e,n){"use strict";function r(t,e){function n(n){var o=r+n*e.railXRatio,i=e.scrollbarXRail.getBoundingClientRect().left+e.railXRatio*(e.railXWidth-e.scrollbarXWidth);0>o?e.scrollbarXLeft=0:o>i?e.scrollbarXLeft=i:e.scrollbarXLeft=o;var s=l.toInt(e.scrollbarXLeft*(e.contentWidth-e.containerWidth)/(e.containerWidth-e.railXRatio*e.scrollbarXWidth))-e.negativeScrollAdjustment;c(t,"left",s)}var r=null,o=null,s=function(e){n(e.pageX-o),a(t),e.stopPropagation(),e.preventDefault()},u=function(){l.stopScrolling(t,"x"),e.event.unbind(e.ownerDocument,"mousemove",s)};e.event.bind(e.scrollbarX,"mousedown",function(n){o=n.pageX,r=l.toInt(i.css(e.scrollbarX,"left"))*e.railXRatio,l.startScrolling(t,"x"),e.event.bind(e.ownerDocument,"mousemove",s),e.event.once(e.ownerDocument,"mouseup",u),n.stopPropagation(),n.preventDefault()})}function o(t,e){function n(n){var o=r+n*e.railYRatio,i=e.scrollbarYRail.getBoundingClientRect().top+e.railYRatio*(e.railYHeight-e.scrollbarYHeight);0>o?e.scrollbarYTop=0:o>i?e.scrollbarYTop=i:e.scrollbarYTop=o;var s=l.toInt(e.scrollbarYTop*(e.contentHeight-e.containerHeight)/(e.containerHeight-e.railYRatio*e.scrollbarYHeight));c(t,"top",s)}var r=null,o=null,s=function(e){n(e.pageY-o),a(t),e.stopPropagation(),e.preventDefault()},u=function(){l.stopScrolling(t,"y"),e.event.unbind(e.ownerDocument,"mousemove",s)};e.event.bind(e.scrollbarY,"mousedown",function(n){o=n.pageY,r=l.toInt(i.css(e.scrollbarY,"top"))*e.railYRatio,l.startScrolling(t,"y"),e.event.bind(e.ownerDocument,"mousemove",s),e.event.once(e.ownerDocument,"mouseup",u),n.stopPropagation(),n.preventDefault()})}var i=t("../../lib/dom"),l=t("../../lib/helper"),s=t("../instances"),a=t("../update-geometry"),c=t("../update-scroll");e.exports=function(t){var e=s.get(t);r(t,e),o(t,e)}},{"../../lib/dom":3,"../../lib/helper":6,"../instances":18,"../update-geometry":19,"../update-scroll":20}],12:[function(t,e,n){"use strict";function r(t,e){function n(n,r){var o=t.scrollTop;if(0===n){if(!e.scrollbarYActive)return!1;if(0===o&&r>0||o>=e.contentHeight-e.containerHeight&&0>r)return!e.settings.wheelPropagation}var i=t.scrollLeft;if(0===r){if(!e.scrollbarXActive)return!1;if(0===i&&0>n||i>=e.contentWidth-e.containerWidth&&n>0)return!e.settings.wheelPropagation}return!0}var r=!1;e.event.bind(t,"mouseenter",function(){r=!0}),e.event.bind(t,"mouseleave",function(){r=!1});var i=!1;e.event.bind(e.ownerDocument,"keydown",function(a){if((!a.isDefaultPrevented||!a.isDefaultPrevented())&&r){var c=document.activeElement?document.activeElement:e.ownerDocument.activeElement;if(c){for(;c.shadowRoot;)c=c.shadowRoot.activeElement;if(o.isEditable(c))return}var u=0,d=0;switch(a.which){case 37:u=-30;break;case 38:d=30;break;case 39:u=30;break;case 40:d=-30;break;case 33:d=90;break;case 32:d=a.shiftKey?90:-90;break;case 34:d=-90;break;case 35:d=a.ctrlKey?-e.contentHeight:-e.containerHeight;break;case 36:d=a.ctrlKey?t.scrollTop:e.containerHeight;break;default:return}s(t,"top",t.scrollTop-d),s(t,"left",t.scrollLeft+u),l(t),i=n(u,d),i&&a.preventDefault()}})}var o=t("../../lib/helper"),i=t("../instances"),l=t("../update-geometry"),s=t("../update-scroll");e.exports=function(t){var e=i.get(t);r(t,e)}},{"../../lib/helper":6,"../instances":18,"../update-geometry":19,"../update-scroll":20}],13:[function(t,e,n){"use strict";function r(t,e){function n(n,r){var o=t.scrollTop;if(0===n){if(!e.scrollbarYActive)return!1;if(0===o&&r>0||o>=e.contentHeight-e.containerHeight&&0>r)return!e.settings.wheelPropagation}var i=t.scrollLeft;if(0===r){if(!e.scrollbarXActive)return!1;if(0===i&&0>n||i>=e.contentWidth-e.containerWidth&&n>0)return!e.settings.wheelPropagation}return!0}function r(t){var e=t.deltaX,n=-1*t.deltaY;return("undefined"==typeof e||"undefined"==typeof n)&&(e=-1*t.wheelDeltaX/6,n=t.wheelDeltaY/6),t.deltaMode&&1===t.deltaMode&&(e*=10,n*=10),e!==e&&n!==n&&(e=0,n=t.wheelDelta),[e,n]}function i(e,n){var r=t.querySelector("textarea:hover");if(r){var o=r.scrollHeight-r.clientHeight;if(o>0&&!(0===r.scrollTop&&n>0||r.scrollTop===o&&0>n))return!0;var i=r.scrollLeft-r.clientWidth;if(i>0&&!(0===r.scrollLeft&&0>e||r.scrollLeft===i&&e>0))return!0}return!1}function a(a){if(o.env.isWebKit||!t.querySelector("select:focus")){var u=r(a),d=u[0],p=u[1];i(d,p)||(c=!1,e.settings.useBothWheelAxes?e.scrollbarYActive&&!e.scrollbarXActive?(p?s(t,"top",t.scrollTop-p*e.settings.wheelSpeed):s(t,"top",t.scrollTop+d*e.settings.wheelSpeed),c=!0):e.scrollbarXActive&&!e.scrollbarYActive&&(d?s(t,"left",t.scrollLeft+d*e.settings.wheelSpeed):s(t,"left",t.scrollLeft-p*e.settings.wheelSpeed),c=!0):(s(t,"top",t.scrollTop-p*e.settings.wheelSpeed),s(t,"left",t.scrollLeft+d*e.settings.wheelSpeed)),l(t),c=c||n(d,p),c&&(a.stopPropagation(),a.preventDefault()))}}var c=!1;"undefined"!=typeof window.onwheel?e.event.bind(t,"wheel",a):"undefined"!=typeof window.onmousewheel&&e.event.bind(t,"mousewheel",a)}var o=t("../../lib/helper"),i=t("../instances"),l=t("../update-geometry"),s=t("../update-scroll");e.exports=function(t){var e=i.get(t);r(t,e)}},{"../../lib/helper":6,"../instances":18,"../update-geometry":19,"../update-scroll":20}],14:[function(t,e,n){"use strict";function r(t,e){e.event.bind(t,"scroll",function(){i(t)})}var o=t("../instances"),i=t("../update-geometry");e.exports=function(t){var e=o.get(t);r(t,e)}},{"../instances":18,"../update-geometry":19}],15:[function(t,e,n){"use strict";function r(t,e){function n(){var t=window.getSelection?window.getSelection():document.getSelection?document.getSelection():"";return 0===t.toString().length?null:t.getRangeAt(0).commonAncestorContainer}function r(){c||(c=setInterval(function(){return i.get(t)?(s(t,"top",t.scrollTop+u.top),s(t,"left",t.scrollLeft+u.left),void l(t)):void clearInterval(c)},50))}function a(){c&&(clearInterval(c),c=null),o.stopScrolling(t)}var c=null,u={top:0,left:0},d=!1;e.event.bind(e.ownerDocument,"selectionchange",function(){t.contains(n())?d=!0:(d=!1,a())}),e.event.bind(window,"mouseup",function(){d&&(d=!1,a())}),e.event.bind(window,"mousemove",function(e){if(d){var n={x:e.pageX,y:e.pageY},i={left:t.offsetLeft,right:t.offsetLeft+t.offsetWidth,top:t.offsetTop,bottom:t.offsetTop+t.offsetHeight};n.x<i.left+3?(u.left=-5,o.startScrolling(t,"x")):n.x>i.right-3?(u.left=5,o.startScrolling(t,"x")):u.left=0,n.y<i.top+3?(i.top+3-n.y<5?u.top=-5:u.top=-20,o.startScrolling(t,"y")):n.y>i.bottom-3?(n.y-i.bottom+3<5?u.top=5:u.top=20,o.startScrolling(t,"y")):u.top=0,0===u.top&&0===u.left?a():r()}})}var o=t("../../lib/helper"),i=t("../instances"),l=t("../update-geometry"),s=t("../update-scroll");e.exports=function(t){var e=i.get(t);r(t,e)}},{"../../lib/helper":6,"../instances":18,"../update-geometry":19,"../update-scroll":20}],16:[function(t,e,n){"use strict";function r(t,e,n,r){function s(n,r){var o=t.scrollTop,i=t.scrollLeft,l=Math.abs(n),s=Math.abs(r);if(s>l){if(0>r&&o===e.contentHeight-e.containerHeight||r>0&&0===o)return!e.settings.swipePropagation}else if(l>s&&(0>n&&i===e.contentWidth-e.containerWidth||n>0&&0===i))return!e.settings.swipePropagation;return!0}function a(e,n){l(t,"top",t.scrollTop-n),l(t,"left",t.scrollLeft-e),i(t)}function c(){Y=!0}function u(){Y=!1}function d(t){return t.targetTouches?t.targetTouches[0]:t}function p(t){return t.targetTouches&&1===t.targetTouches.length?!0:t.pointerType&&"mouse"!==t.pointerType&&t.pointerType!==t.MSPOINTER_TYPE_MOUSE?!0:!1}function f(t){if(p(t)){w=!0;var e=d(t);b.pageX=e.pageX,b.pageY=e.pageY,g=(new Date).getTime(),null!==y&&clearInterval(y),t.stopPropagation()}}function h(t){if(!Y&&w&&p(t)){var e=d(t),n={pageX:e.pageX,pageY:e.pageY},r=n.pageX-b.pageX,o=n.pageY-b.pageY;a(r,o),b=n;var i=(new Date).getTime(),l=i-g;l>0&&(m.x=r/l,m.y=o/l,g=i),s(r,o)&&(t.stopPropagation(),t.preventDefault())}}function v(){!Y&&w&&(w=!1,clearInterval(y),y=setInterval(function(){return o.get(t)?Math.abs(m.x)<.01&&Math.abs(m.y)<.01?void clearInterval(y):(a(30*m.x,30*m.y),m.x*=.8,void(m.y*=.8)):void clearInterval(y)},10))}var b={},g=0,m={},y=null,Y=!1,w=!1;n&&(e.event.bind(window,"touchstart",c),e.event.bind(window,"touchend",u),e.event.bind(t,"touchstart",f),e.event.bind(t,"touchmove",h),e.event.bind(t,"touchend",v)),r&&(window.PointerEvent?(e.event.bind(window,"pointerdown",c),e.event.bind(window,"pointerup",u),e.event.bind(t,"pointerdown",f),e.event.bind(t,"pointermove",h),e.event.bind(t,"pointerup",v)):window.MSPointerEvent&&(e.event.bind(window,"MSPointerDown",c),e.event.bind(window,"MSPointerUp",u),e.event.bind(t,"MSPointerDown",f),e.event.bind(t,"MSPointerMove",h),e.event.bind(t,"MSPointerUp",v)))}var o=t("../instances"),i=t("../update-geometry"),l=t("../update-scroll");e.exports=function(t,e,n){var i=o.get(t);r(t,i,e,n)}},{"../instances":18,"../update-geometry":19,"../update-scroll":20}],17:[function(t,e,n){"use strict";var r=t("../lib/class"),o=t("../lib/helper"),i=t("./instances"),l=t("./update-geometry"),s=t("./handler/click-rail"),a=t("./handler/drag-scrollbar"),c=t("./handler/keyboard"),u=t("./handler/mouse-wheel"),d=t("./handler/native-scroll"),p=t("./handler/selection"),f=t("./handler/touch");e.exports=function(t,e){e="object"==typeof e?e:{},r.add(t,"ps-container");var n=i.add(t);n.settings=o.extend(n.settings,e),s(t),a(t),u(t),d(t),n.settings.useSelectionScroll&&p(t),(o.env.supportsTouch||o.env.supportsIePointer)&&f(t,o.env.supportsTouch,o.env.supportsIePointer),n.settings.useKeyboard&&c(t),l(t)}},{"../lib/class":2,"../lib/helper":6,"./handler/click-rail":10,"./handler/drag-scrollbar":11,"./handler/keyboard":12,"./handler/mouse-wheel":13,"./handler/native-scroll":14,"./handler/selection":15,"./handler/touch":16,"./instances":18,"./update-geometry":19}],18:[function(t,e,n){"use strict";function r(t){var e=this;e.settings=d.clone(a),e.containerWidth=null,e.containerHeight=null,e.contentWidth=null,e.contentHeight=null,e.isRtl="rtl"===s.css(t,"direction"),e.isNegativeScroll=function(){var e=t.scrollLeft,n=null;return t.scrollLeft=-1,n=t.scrollLeft<0,t.scrollLeft=e,n}(),e.negativeScrollAdjustment=e.isNegativeScroll?t.scrollWidth-t.clientWidth:0,e.event=new c,e.ownerDocument=t.ownerDocument||document,e.scrollbarXRail=s.appendTo(s.e("div","ps-scrollbar-x-rail"),t),e.scrollbarX=s.appendTo(s.e("div","ps-scrollbar-x"),e.scrollbarXRail),e.scrollbarXActive=null,e.scrollbarXWidth=null,e.scrollbarXLeft=null,e.scrollbarXBottom=d.toInt(s.css(e.scrollbarXRail,"bottom")),e.isScrollbarXUsingBottom=e.scrollbarXBottom===e.scrollbarXBottom,e.scrollbarXTop=e.isScrollbarXUsingBottom?null:d.toInt(s.css(e.scrollbarXRail,"top")),e.railBorderXWidth=d.toInt(s.css(e.scrollbarXRail,"borderLeftWidth"))+d.toInt(s.css(e.scrollbarXRail,"borderRightWidth")),s.css(e.scrollbarXRail,"display","block"),e.railXMarginWidth=d.toInt(s.css(e.scrollbarXRail,"marginLeft"))+d.toInt(s.css(e.scrollbarXRail,"marginRight")),s.css(e.scrollbarXRail,"display",""),e.railXWidth=null,e.railXRatio=null,e.scrollbarYRail=s.appendTo(s.e("div","ps-scrollbar-y-rail"),t),e.scrollbarY=s.appendTo(s.e("div","ps-scrollbar-y"),e.scrollbarYRail),e.scrollbarYActive=null,e.scrollbarYHeight=null,e.scrollbarYTop=null,e.scrollbarYRight=d.toInt(s.css(e.scrollbarYRail,"right")),e.isScrollbarYUsingRight=e.scrollbarYRight===e.scrollbarYRight,e.scrollbarYLeft=e.isScrollbarYUsingRight?null:d.toInt(s.css(e.scrollbarYRail,"left")),e.scrollbarYOuterWidth=e.isRtl?d.outerWidth(e.scrollbarY):null,e.railBorderYWidth=d.toInt(s.css(e.scrollbarYRail,"borderTopWidth"))+d.toInt(s.css(e.scrollbarYRail,"borderBottomWidth")),s.css(e.scrollbarYRail,"display","block"),e.railYMarginHeight=d.toInt(s.css(e.scrollbarYRail,"marginTop"))+d.toInt(s.css(e.scrollbarYRail,"marginBottom")),s.css(e.scrollbarYRail,"display",""),e.railYHeight=null,e.railYRatio=null}function o(t){return"undefined"==typeof t.dataset?t.getAttribute("data-ps-id"):t.dataset.psId}function i(t,e){"undefined"==typeof t.dataset?t.setAttribute("data-ps-id",e):t.dataset.psId=e}function l(t){"undefined"==typeof t.dataset?t.removeAttribute("data-ps-id"):delete t.dataset.psId}var s=t("../lib/dom"),a=t("./default-setting"),c=t("../lib/event-manager"),u=t("../lib/guid"),d=t("../lib/helper"),p={};n.add=function(t){var e=u();return i(t,e),p[e]=new r(t),p[e]},n.remove=function(t){delete p[o(t)],l(t)},n.get=function(t){return p[o(t)]}},{"../lib/dom":3,"../lib/event-manager":4,"../lib/guid":5,"../lib/helper":6,"./default-setting":8}],19:[function(t,e,n){"use strict";function r(t,e){return t.settings.minScrollbarLength&&(e=Math.max(e,t.settings.minScrollbarLength)),t.settings.maxScrollbarLength&&(e=Math.min(e,t.settings.maxScrollbarLength)),e}function o(t,e){var n={width:e.railXWidth};e.isRtl?n.left=e.negativeScrollAdjustment+t.scrollLeft+e.containerWidth-e.contentWidth:n.left=t.scrollLeft,e.isScrollbarXUsingBottom?n.bottom=e.scrollbarXBottom-t.scrollTop:n.top=e.scrollbarXTop+t.scrollTop,l.css(e.scrollbarXRail,n);var r={top:t.scrollTop,height:e.railYHeight};e.isScrollbarYUsingRight?e.isRtl?r.right=e.contentWidth-(e.negativeScrollAdjustment+t.scrollLeft)-e.scrollbarYRight-e.scrollbarYOuterWidth:r.right=e.scrollbarYRight-t.scrollLeft:e.isRtl?r.left=e.negativeScrollAdjustment+t.scrollLeft+2*e.containerWidth-e.contentWidth-e.scrollbarYLeft-e.scrollbarYOuterWidth:r.left=e.scrollbarYLeft+t.scrollLeft,l.css(e.scrollbarYRail,r),l.css(e.scrollbarX,{left:e.scrollbarXLeft,width:e.scrollbarXWidth-e.railBorderXWidth}),l.css(e.scrollbarY,{top:e.scrollbarYTop,height:e.scrollbarYHeight-e.railBorderYWidth})}var i=t("../lib/class"),l=t("../lib/dom"),s=t("../lib/helper"),a=t("./instances"),c=t("./update-scroll");e.exports=function(t){var e=a.get(t);e.containerWidth=t.clientWidth,e.containerHeight=t.clientHeight,e.contentWidth=t.scrollWidth,e.contentHeight=t.scrollHeight;var n;t.contains(e.scrollbarXRail)||(n=l.queryChildren(t,".ps-scrollbar-x-rail"),n.length>0&&n.forEach(function(t){l.remove(t)}),l.appendTo(e.scrollbarXRail,t)),t.contains(e.scrollbarYRail)||(n=l.queryChildren(t,".ps-scrollbar-y-rail"),n.length>0&&n.forEach(function(t){l.remove(t)}),l.appendTo(e.scrollbarYRail,t)),!e.settings.suppressScrollX&&e.containerWidth+e.settings.scrollXMarginOffset<e.contentWidth?(e.scrollbarXActive=!0,e.railXWidth=e.containerWidth-e.railXMarginWidth,e.railXRatio=e.containerWidth/e.railXWidth,e.scrollbarXWidth=r(e,s.toInt(e.railXWidth*e.containerWidth/e.contentWidth)),e.scrollbarXLeft=s.toInt((e.negativeScrollAdjustment+t.scrollLeft)*(e.railXWidth-e.scrollbarXWidth)/(e.contentWidth-e.containerWidth))):(e.scrollbarXActive=!1,e.scrollbarXWidth=0,e.scrollbarXLeft=0,t.scrollLeft=0),!e.settings.suppressScrollY&&e.containerHeight+e.settings.scrollYMarginOffset<e.contentHeight?(e.scrollbarYActive=!0,e.railYHeight=e.containerHeight-e.railYMarginHeight,e.railYRatio=e.containerHeight/e.railYHeight,e.scrollbarYHeight=r(e,s.toInt(e.railYHeight*e.containerHeight/e.contentHeight)),e.scrollbarYTop=s.toInt(t.scrollTop*(e.railYHeight-e.scrollbarYHeight)/(e.contentHeight-e.containerHeight))):(e.scrollbarYActive=!1,e.scrollbarYHeight=0,e.scrollbarYTop=0,c(t,"top",0)),e.scrollbarXLeft>=e.railXWidth-e.scrollbarXWidth&&(e.scrollbarXLeft=e.railXWidth-e.scrollbarXWidth),e.scrollbarYTop>=e.railYHeight-e.scrollbarYHeight&&(e.scrollbarYTop=e.railYHeight-e.scrollbarYHeight),o(t,e),i[e.scrollbarXActive?"add":"remove"](t,"ps-active-x"),i[e.scrollbarYActive?"add":"remove"](t,"ps-active-y")}},{"../lib/class":2,"../lib/dom":3,"../lib/helper":6,"./instances":18,"./update-scroll":20}],20:[function(t,e,n){"use strict";var r,o,i=t("./instances"),l=document.createEvent("Event"),s=document.createEvent("Event"),a=document.createEvent("Event"),c=document.createEvent("Event"),u=document.createEvent("Event"),d=document.createEvent("Event"),p=document.createEvent("Event"),f=document.createEvent("Event"),h=document.createEvent("Event"),v=document.createEvent("Event");l.initEvent("ps-scroll-up",!0,!0),s.initEvent("ps-scroll-down",!0,!0),a.initEvent("ps-scroll-left",!0,!0),c.initEvent("ps-scroll-right",!0,!0),u.initEvent("ps-scroll-y",!0,!0),d.initEvent("ps-scroll-x",!0,!0),p.initEvent("ps-x-reach-start",!0,!0),f.initEvent("ps-x-reach-end",!0,!0),h.initEvent("ps-y-reach-start",!0,!0),v.initEvent("ps-y-reach-end",!0,!0),e.exports=function(t,e,n){if("undefined"==typeof t)throw"You must provide an element to the update-scroll function";if("undefined"==typeof e)throw"You must provide an axis to the update-scroll function";if("undefined"==typeof n)throw"You must provide a value to the update-scroll function";if("top"===e&&0>=n)return t.scrollTop=0,void t.dispatchEvent(h);if("left"===e&&0>=n)return t.scrollLeft=0,void t.dispatchEvent(p);var b=i.get(t);return"top"===e&&n>b.contentHeight-b.containerHeight?(t.scrollTop=b.contentHeight-b.containerHeight,void t.dispatchEvent(v)):"left"===e&&n>b.contentWidth-b.containerWidth?(t.scrollLeft=b.contentWidth-b.containerWidth,void t.dispatchEvent(f)):(r||(r=t.scrollTop),o||(o=t.scrollLeft),"top"===e&&r>n&&t.dispatchEvent(l),"top"===e&&n>r&&t.dispatchEvent(s),"left"===e&&o>n&&t.dispatchEvent(a),"left"===e&&n>o&&t.dispatchEvent(c),"top"===e&&(t.scrollTop=r=n,t.dispatchEvent(u)),void("left"===e&&(t.scrollLeft=o=n,t.dispatchEvent(d))))}},{"./instances":18}],21:[function(t,e,n){"use strict";var r=t("../lib/dom"),o=t("../lib/helper"),i=t("./instances"),l=t("./update-geometry");e.exports=function(t){var e=i.get(t);e&&(e.negativeScrollAdjustment=e.isNegativeScroll?t.scrollWidth-t.clientWidth:0,r.css(e.scrollbarXRail,"display","block"),r.css(e.scrollbarYRail,"display","block"),e.railXMarginWidth=o.toInt(r.css(e.scrollbarXRail,"marginLeft"))+o.toInt(r.css(e.scrollbarXRail,"marginRight")),e.railYMarginHeight=o.toInt(r.css(e.scrollbarYRail,"marginTop"))+o.toInt(r.css(e.scrollbarYRail,"marginBottom")),r.css(e.scrollbarXRail,"display","none"),r.css(e.scrollbarYRail,"display","none"),l(t),r.css(e.scrollbarXRail,"display",""),r.css(e.scrollbarYRail,"display",""))}},{"../lib/dom":3,"../lib/helper":6,"./instances":18,"./update-geometry":19}]},{},[1]);;
/*!
 * Theia Sticky Sidebar v1.7.0
 * https://github.com/WeCodePixels/theia-sticky-sidebar
 *
 * Glues your website's sidebars, making them permanently visible while scrolling.
 *
 * Copyright 2013-2016 WeCodePixels and other contributors
 * Released under the MIT license
 */

(function ($) {
    $.fn.theiaStickySidebar = function (options) {
        var defaults = {
            'containerSelector': '',
            'additionalMarginTop': 0,
            'additionalMarginBottom': 0,
            'updateSidebarHeight': true,
            'minWidth': 0,
            'disableOnResponsiveLayouts': true,
            'sidebarBehavior': 'modern',
            'defaultPosition': 'relative',
            'namespace': 'TSS'
        };
        options = $.extend(defaults, options);

        // Validate options
        options.additionalMarginTop = parseInt(options.additionalMarginTop) || 0;
        options.additionalMarginBottom = parseInt(options.additionalMarginBottom) || 0;

        tryInitOrHookIntoEvents(options, this);

        // Try doing init, otherwise hook into window.resize and document.scroll and try again then.
        function tryInitOrHookIntoEvents(options, $that) {
            var success = tryInit(options, $that);

            if (!success) {
                console.log('TSS: Body width smaller than options.minWidth. Init is delayed.');

                $(document).on('scroll.' + options.namespace, function (options, $that) {
                    return function (evt) {
                        var success = tryInit(options, $that);

                        if (success) {
                            $(this).unbind(evt);
                        }
                    };
                }(options, $that));
                $(window).on('resize.' + options.namespace, function (options, $that) {
                    return function (evt) {
                        var success = tryInit(options, $that);

                        if (success) {
                            $(this).unbind(evt);
                        }
                    };
                }(options, $that))
            }
        }

        // Try doing init if proper conditions are met.
        function tryInit(options, $that) {
            if (options.initialized === true) {
                return true;
            }

            if ($('body').width() < options.minWidth) {
                return false;
            }

            init(options, $that);

            return true;
        }

        // Init the sticky sidebar(s).
        function init(options, $that) {
            options.initialized = true;

            // Add CSS
            var existingStylesheet = $('#theia-sticky-sidebar-stylesheet-' + options.namespace);
            if (existingStylesheet.length === 0) {
                $('head').append($('<style id="theia-sticky-sidebar-stylesheet-' + options.namespace + '">.theiaStickySidebar:after {content: ""; display: table; clear: both;}</style>'));
            }

            $that.each(function () {
                var o = {};

                o.sidebar = $(this);

                // Save options
                o.options = options || {};

                // Get container
                o.container = $(o.options.containerSelector);
                if (o.container.length == 0) {
                    o.container = o.sidebar.parent();
                }

                // Create sticky sidebar
                o.sidebar.parents().css('-webkit-transform', 'none'); // Fix for WebKit bug - https://code.google.com/p/chromium/issues/detail?id=20574
                o.sidebar.css({
                    'position': o.options.defaultPosition,
                    'overflow': 'visible',
                    // The "box-sizing" must be set to "content-box" because we set a fixed height to this element when the sticky sidebar has a fixed position.
                    '-webkit-box-sizing': 'border-box',
                    '-moz-box-sizing': 'border-box',
                    'box-sizing': 'border-box'
                });

                // Get the sticky sidebar element. If none has been found, then create one.
                o.stickySidebar = o.sidebar.find('.theiaStickySidebar');
                if (o.stickySidebar.length == 0) {
                    // Remove <script> tags, otherwise they will be run again when added to the stickySidebar.
                    var javaScriptMIMETypes = /(?:text|application)\/(?:x-)?(?:javascript|ecmascript)/i;
                    o.sidebar.find('script').filter(function (index, script) {
                        return script.type.length === 0 || script.type.match(javaScriptMIMETypes);
                    }).remove();

                    o.stickySidebar = $('<div>').addClass('theiaStickySidebar').append(o.sidebar.children());
                    o.sidebar.append(o.stickySidebar);
                }

                // Get existing top and bottom margins and paddings
                o.marginBottom = parseInt(o.sidebar.css('margin-bottom'));
                o.paddingTop = parseInt(o.sidebar.css('padding-top'));
                o.paddingBottom = parseInt(o.sidebar.css('padding-bottom'));

                // Add a temporary padding rule to check for collapsable margins.
                var collapsedTopHeight = o.stickySidebar.offset().top;
                var collapsedBottomHeight = o.stickySidebar.outerHeight();
                o.stickySidebar.css('padding-top', 1);
                o.stickySidebar.css('padding-bottom', 1);
                collapsedTopHeight -= o.stickySidebar.offset().top;
                collapsedBottomHeight = o.stickySidebar.outerHeight() - collapsedBottomHeight - collapsedTopHeight;
                if (collapsedTopHeight == 0) {
                    o.stickySidebar.css('padding-top', 0);
                    o.stickySidebarPaddingTop = 0;
                }
                else {
                    o.stickySidebarPaddingTop = 1;
                }

                if (collapsedBottomHeight == 0) {
                    o.stickySidebar.css('padding-bottom', 0);
                    o.stickySidebarPaddingBottom = 0;
                }
                else {
                    o.stickySidebarPaddingBottom = 1;
                }

                // We use this to know whether the user is scrolling up or down.
                o.previousScrollTop = null;

                // Scroll top (value) when the sidebar has fixed position.
                o.fixedScrollTop = 0;

                // Set sidebar to default values.
                resetSidebar();

                o.onScroll = function (o) {
                    // Stop if the sidebar isn't visible.
                    if (!o.stickySidebar.is(":visible")) {
                        return;
                    }

                    // Stop if the window is too small.
                    if ($('body').width() < o.options.minWidth) {
                        resetSidebar();
                        return;
                    }

                    // Stop if the sidebar width is larger than the container width (e.g. the theme is responsive and the sidebar is now below the content)
                    if (o.options.disableOnResponsiveLayouts) {
                        var sidebarWidth = o.sidebar.outerWidth(o.sidebar.css('float') == 'none');

                        if (sidebarWidth + 50 > o.container.width()) {
                            resetSidebar();
                            return;
                        }
                    }

                    var scrollTop = $(document).scrollTop();
                    var position = 'static';

                    // If the user has scrolled down enough for the sidebar to be clipped at the top, then we can consider changing its position.
                    if (scrollTop >= o.sidebar.offset().top + (o.paddingTop - o.options.additionalMarginTop)) {
                        // The top and bottom offsets, used in various calculations.
                        var offsetTop = o.paddingTop + options.additionalMarginTop;
                        var offsetBottom = o.paddingBottom + o.marginBottom + options.additionalMarginBottom;

                        // All top and bottom positions are relative to the window, not to the parent elemnts.
                        var containerTop = o.sidebar.offset().top;
                        var containerBottom = o.sidebar.offset().top + getClearedHeight(o.container);

                        // The top and bottom offsets relative to the window screen top (zero) and bottom (window height).
                        var windowOffsetTop = 0 + options.additionalMarginTop;
                        var windowOffsetBottom;

                        var sidebarSmallerThanWindow = (o.stickySidebar.outerHeight() + offsetTop + offsetBottom) < $(window).height();
                        if (sidebarSmallerThanWindow) {
                            windowOffsetBottom = windowOffsetTop + o.stickySidebar.outerHeight();
                        }
                        else {
                            windowOffsetBottom = $(window).height() - o.marginBottom - o.paddingBottom - options.additionalMarginBottom;
                        }

                        var staticLimitTop = containerTop - scrollTop + o.paddingTop;
                        var staticLimitBottom = containerBottom - scrollTop - o.paddingBottom - o.marginBottom;

                        var top = o.stickySidebar.offset().top - scrollTop;
                        var scrollTopDiff = o.previousScrollTop - scrollTop;

                        // If the sidebar position is fixed, then it won't move up or down by itself. So, we manually adjust the top coordinate.
                        if (o.stickySidebar.css('position') == 'fixed') {
                            if (o.options.sidebarBehavior == 'modern') {
                                top += scrollTopDiff;
                            }
                        }

                        if (o.options.sidebarBehavior == 'stick-to-top') {
                            top = options.additionalMarginTop;
                        }

                        if (o.options.sidebarBehavior == 'stick-to-bottom') {
                            top = windowOffsetBottom - o.stickySidebar.outerHeight();
                        }

                        if (scrollTopDiff > 0) { // If the user is scrolling up.
                            top = Math.min(top, windowOffsetTop);
                        }
                        else { // If the user is scrolling down.
                            top = Math.max(top, windowOffsetBottom - o.stickySidebar.outerHeight());
                        }

                        top = Math.max(top, staticLimitTop);

                        top = Math.min(top, staticLimitBottom - o.stickySidebar.outerHeight());

                        // If the sidebar is the same height as the container, we won't use fixed positioning.
                        var sidebarSameHeightAsContainer = o.container.height() == o.stickySidebar.outerHeight();

                        if (!sidebarSameHeightAsContainer && top == windowOffsetTop) {
                            position = 'fixed';
                        }
                        else if (!sidebarSameHeightAsContainer && top == windowOffsetBottom - o.stickySidebar.outerHeight()) {
                            position = 'fixed';
                        }
                        else if (scrollTop + top - o.sidebar.offset().top - o.paddingTop <= options.additionalMarginTop) {
                            // Stuck to the top of the page. No special behavior.
                            position = 'static';
                        }
                        else {
                            // Stuck to the bottom of the page.
                            position = 'absolute';
                        }
                    }

                    /*
                     * Performance notice: It's OK to set these CSS values at each resize/scroll, even if they don't change.
                     * It's way slower to first check if the values have changed.
                     */
                    if (position == 'fixed') {
                        var scrollLeft = $(document).scrollLeft();

                        o.stickySidebar.css({
                            'position': 'fixed',
                            'width': getWidthForObject(o.stickySidebar) + 'px',
                            'transform': 'translateY(' + top + 'px)',
                            'left': (o.sidebar.offset().left + parseInt(o.sidebar.css('padding-left')) - scrollLeft) + 'px',
                            'top': '0px'
                        });
                    }
                    else if (position == 'absolute') {
                        var css = {};

                        if (o.stickySidebar.css('position') != 'absolute') {
                            css.position = 'absolute';
                            css.transform = 'translateY(' + (scrollTop + top - o.sidebar.offset().top - o.stickySidebarPaddingTop - o.stickySidebarPaddingBottom) + 'px)';
                            css.top = '0px';
                        }

                        css.width = getWidthForObject(o.stickySidebar) + 'px';
                        css.left = '';

                        o.stickySidebar.css(css);
                    }
                    else if (position == 'static') {
                        resetSidebar();
                    }

                    if (position != 'static') {
                        if (o.options.updateSidebarHeight == true) {
                            o.sidebar.css({
                                'min-height': o.stickySidebar.outerHeight() + o.stickySidebar.offset().top - o.sidebar.offset().top + o.paddingBottom
                            });
                        }
                    }

                    o.previousScrollTop = scrollTop;
                };

                // Initialize the sidebar's position.
                o.onScroll(o);

                // Recalculate the sidebar's position on every scroll and resize.
                $(document).on('scroll.' + o.options.namespace, function (o) {
                    return function () {
                        o.onScroll(o);
                    };
                }(o));
                $(window).on('resize.' + o.options.namespace, function (o) {
                    return function () {
                        o.stickySidebar.css({'position': 'static'});
                        o.onScroll(o);
                    };
                }(o));

                // Recalculate the sidebar's position every time the sidebar changes its size.
                if (typeof ResizeSensor !== 'undefined') {
                    new ResizeSensor(o.stickySidebar[0], function (o) {
                        return function () {
                            o.onScroll(o);
                        };
                    }(o));
                }

                // Reset the sidebar to its default state
                function resetSidebar() {
                    o.fixedScrollTop = 0;
                    o.sidebar.css({
                        'min-height': '1px'
                    });
                    o.stickySidebar.css({
                        'position': 'static',
                        'width': '',
                        'transform': 'none'
                    });
                }

                // Get the height of a div as if its floated children were cleared. Note that this function fails if the floats are more than one level deep.
                function getClearedHeight(e) {
                    var height = e.height();

                    e.children().each(function () {
                        height = Math.max(height, $(this).height());
                    });

                    return height;
                }
            });
        }

        function getWidthForObject(object) {
            var width;

            try {
                width = object[0].getBoundingClientRect().width;
            }
            catch (err) {
            }

            if (typeof width === "undefined") {
                width = object.width();
            }

            return width;
        }

        return this;
    }
})(jQuery);;
/*!
Waypoints - 4.0.0
Copyright © 2011-2015 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blog/master/licenses.txt
*/
!function(){"use strict";function t(o){if(!o)throw new Error("No options passed to Waypoint constructor");if(!o.element)throw new Error("No element option passed to Waypoint constructor");if(!o.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+e,this.options=t.Adapter.extend({},t.defaults,o),this.element=this.options.element,this.adapter=new t.Adapter(this.element),this.callback=o.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=t.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=t.Context.findOrCreateByElement(this.options.context),t.offsetAliases[this.options.offset]&&(this.options.offset=t.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),i[this.key]=this,e+=1}var e=0,i={};t.prototype.queueTrigger=function(t){this.group.queueTrigger(this,t)},t.prototype.trigger=function(t){this.enabled&&this.callback&&this.callback.apply(this,t)},t.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete i[this.key]},t.prototype.disable=function(){return this.enabled=!1,this},t.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},t.prototype.next=function(){return this.group.next(this)},t.prototype.previous=function(){return this.group.previous(this)},t.invokeAll=function(t){var e=[];for(var o in i)e.push(i[o]);for(var n=0,r=e.length;r>n;n++)e[n][t]()},t.destroyAll=function(){t.invokeAll("destroy")},t.disableAll=function(){t.invokeAll("disable")},t.enableAll=function(){t.invokeAll("enable")},t.refreshAll=function(){t.Context.refreshAll()},t.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},t.viewportWidth=function(){return document.documentElement.clientWidth},t.adapters=[],t.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},t.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=t}(),function(){"use strict";function t(t){window.setTimeout(t,1e3/60)}function e(t){this.element=t,this.Adapter=n.Adapter,this.adapter=new this.Adapter(t),this.key="waypoint-context-"+i,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},t.waypointContextKey=this.key,o[t.waypointContextKey]=this,i+=1,this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}var i=0,o={},n=window.Waypoint,r=window.onload;e.prototype.add=function(t){var e=t.options.horizontal?"horizontal":"vertical";this.waypoints[e][t.key]=t,this.refresh()},e.prototype.checkEmpty=function(){var t=this.Adapter.isEmptyObject(this.waypoints.horizontal),e=this.Adapter.isEmptyObject(this.waypoints.vertical);t&&e&&(this.adapter.off(".waypoints"),delete o[this.key])},e.prototype.createThrottledResizeHandler=function(){function t(){e.handleResize(),e.didResize=!1}var e=this;this.adapter.on("resize.waypoints",function(){e.didResize||(e.didResize=!0,n.requestAnimationFrame(t))})},e.prototype.createThrottledScrollHandler=function(){function t(){e.handleScroll(),e.didScroll=!1}var e=this;this.adapter.on("scroll.waypoints",function(){(!e.didScroll||n.isTouch)&&(e.didScroll=!0,n.requestAnimationFrame(t))})},e.prototype.handleResize=function(){n.Context.refreshAll()},e.prototype.handleScroll=function(){var t={},e={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var i in e){var o=e[i],n=o.newScroll>o.oldScroll,r=n?o.forward:o.backward;for(var s in this.waypoints[i]){var a=this.waypoints[i][s],l=o.oldScroll<a.triggerPoint,h=o.newScroll>=a.triggerPoint,p=l&&h,u=!l&&!h;(p||u)&&(a.queueTrigger(r),t[a.group.id]=a.group)}}for(var c in t)t[c].flushTriggers();this.oldScroll={x:e.horizontal.newScroll,y:e.vertical.newScroll}},e.prototype.innerHeight=function(){return this.element==this.element.window?n.viewportHeight():this.adapter.innerHeight()},e.prototype.remove=function(t){delete this.waypoints[t.axis][t.key],this.checkEmpty()},e.prototype.innerWidth=function(){return this.element==this.element.window?n.viewportWidth():this.adapter.innerWidth()},e.prototype.destroy=function(){var t=[];for(var e in this.waypoints)for(var i in this.waypoints[e])t.push(this.waypoints[e][i]);for(var o=0,n=t.length;n>o;o++)t[o].destroy()},e.prototype.refresh=function(){var t,e=this.element==this.element.window,i=e?void 0:this.adapter.offset(),o={};this.handleScroll(),t={horizontal:{contextOffset:e?0:i.left,contextScroll:e?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:e?0:i.top,contextScroll:e?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};for(var r in t){var s=t[r];for(var a in this.waypoints[r]){var l,h,p,u,c,d=this.waypoints[r][a],f=d.options.offset,w=d.triggerPoint,y=0,g=null==w;d.element!==d.element.window&&(y=d.adapter.offset()[s.offsetProp]),"function"==typeof f?f=f.apply(d):"string"==typeof f&&(f=parseFloat(f),d.options.offset.indexOf("%")>-1&&(f=Math.ceil(s.contextDimension*f/100))),l=s.contextScroll-s.contextOffset,d.triggerPoint=y+l-f,h=w<s.oldScroll,p=d.triggerPoint>=s.oldScroll,u=h&&p,c=!h&&!p,!g&&u?(d.queueTrigger(s.backward),o[d.group.id]=d.group):!g&&c?(d.queueTrigger(s.forward),o[d.group.id]=d.group):g&&s.oldScroll>=d.triggerPoint&&(d.queueTrigger(s.forward),o[d.group.id]=d.group)}}return n.requestAnimationFrame(function(){for(var t in o)o[t].flushTriggers()}),this},e.findOrCreateByElement=function(t){return e.findByElement(t)||new e(t)},e.refreshAll=function(){for(var t in o)o[t].refresh()},e.findByElement=function(t){return o[t.waypointContextKey]},window.onload=function(){r&&r(),e.refreshAll()},n.requestAnimationFrame=function(e){var i=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||t;i.call(window,e)},n.Context=e}(),function(){"use strict";function t(t,e){return t.triggerPoint-e.triggerPoint}function e(t,e){return e.triggerPoint-t.triggerPoint}function i(t){this.name=t.name,this.axis=t.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),o[this.axis][this.name]=this}var o={vertical:{},horizontal:{}},n=window.Waypoint;i.prototype.add=function(t){this.waypoints.push(t)},i.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},i.prototype.flushTriggers=function(){for(var i in this.triggerQueues){var o=this.triggerQueues[i],n="up"===i||"left"===i;o.sort(n?e:t);for(var r=0,s=o.length;s>r;r+=1){var a=o[r];(a.options.continuous||r===o.length-1)&&a.trigger([i])}}this.clearTriggerQueues()},i.prototype.next=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints),o=i===this.waypoints.length-1;return o?null:this.waypoints[i+1]},i.prototype.previous=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints);return i?this.waypoints[i-1]:null},i.prototype.queueTrigger=function(t,e){this.triggerQueues[e].push(t)},i.prototype.remove=function(t){var e=n.Adapter.inArray(t,this.waypoints);e>-1&&this.waypoints.splice(e,1)},i.prototype.first=function(){return this.waypoints[0]},i.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},i.findOrCreate=function(t){return o[t.axis][t.name]||new i(t)},n.Group=i}(),function(){"use strict";function t(t){this.$element=e(t)}var e=window.jQuery,i=window.Waypoint;e.each(["innerHeight","innerWidth","off","offset","on","outerHeight","outerWidth","scrollLeft","scrollTop"],function(e,i){t.prototype[i]=function(){var t=Array.prototype.slice.call(arguments);return this.$element[i].apply(this.$element,t)}}),e.each(["extend","inArray","isEmptyObject"],function(i,o){t[o]=e[o]}),i.adapters.push({name:"jquery",Adapter:t}),i.Adapter=t}(),function(){"use strict";function t(t){return function(){var i=[],o=arguments[0];return t.isFunction(arguments[0])&&(o=t.extend({},arguments[1]),o.handler=arguments[0]),this.each(function(){var n=t.extend({},o,{element:this});"string"==typeof n.context&&(n.context=t(this).closest(n.context)[0]),i.push(new e(n))}),i}}var e=window.Waypoint;window.jQuery&&(window.jQuery.fn.waypoint=t(window.jQuery)),window.Zepto&&(window.Zepto.fn.waypoint=t(window.Zepto))}();

(function ($) {
  'use strict'

  var $ = window.jQuery
  var Waypoint = window.Waypoint

  function Sticky(options) {
    this.options = $.extend({}, Waypoint.defaults, Sticky.defaults, options)
    this.element = this.options.element
    this.$element = $(this.element)
    this.createWrapper()
    this.createWaypoint()
  }

  Sticky.prototype.createWaypoint = function() {
    var originalHandler = this.options.handler

    this.waypoint = new Waypoint($.extend({}, this.options, {
      element: this.wrapper,
      handler: $.proxy(function(direction) {
        var shouldBeStuck = this.options.direction.indexOf(direction) > -1
        var wrapperHeight = shouldBeStuck ? this.$element.outerHeight(true) : ''

        this.$wrapper.height(wrapperHeight)
        this.$element.toggleClass(this.options.stuckClass, shouldBeStuck)

        if (originalHandler) {
          originalHandler.call(this, direction)
        }
      }, this)
    }))
  }

  Sticky.prototype.createWrapper = function() {
    if (this.options.wrapper) {
      this.$element.wrap(this.options.wrapper)
    }
    this.$wrapper = this.$element.parent()
    this.wrapper = this.$wrapper[0]
  }

  Sticky.prototype.destroy = function() {
    if (this.$element.parent()[0] === this.wrapper) {
      this.waypoint.destroy()
      this.$element.removeClass(this.options.stuckClass)
      if (this.options.wrapper) {
        this.$element.unwrap()
      }
    }
  }
$(document).ready(function(){
  Sticky.defaults = {
    wrapper: '<div class="sticky-wrapper" />',
    stuckClass: 'stuck',
    direction: 'down right'
  }
  Waypoint.Sticky = Sticky
});
})(jQuery);;
/*
 * jQuery.appear
 * https://github.com/bas2k/jquery.appear/
 * http://code.google.com/p/jquery-appear/
 *
 * Copyright (c) 2009 Michael Hixson
 * Copyright (c) 2012 Alexander Brovikov
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 */
(function($) {
	$.fn.appear = function(fn, options) {

		var settings = $.extend({

			//arbitrary data to pass to fn
			data: undefined,

			//call fn only on the first appear?
			one: true,

			// X & Y accuracy
			accX: 0,
			accY: 0

		}, options);

		return this.each(function() {

			var t = $(this);

			//whether the element is currently visible
			t.appeared = false;

			if (!fn) {

				//trigger the custom event
				t.trigger('appear', settings.data);
				return;
			}

			var w = $(window);

			//fires the appear event when appropriate
			var check = function() {

				//is the element hidden?
				if (!t.is(':visible')) {

					//it became hidden
					t.appeared = false;
					return;
				}

				//is the element inside the visible window?
				var a = w.scrollLeft();
				var b = w.scrollTop();
				var o = t.offset();
				var x = o.left;
				var y = o.top;

				var ax = settings.accX;
				var ay = settings.accY;
				var th = t.height();
				var wh = w.height();
				var tw = t.width();
				var ww = w.width();

				if (y + th + ay >= b &&
					y <= b + wh + ay &&
					x + tw + ax >= a &&
					x <= a + ww + ax) {

					//trigger the custom event
					if (!t.appeared) t.trigger('appear', settings.data);

				} else {

					//it scrolled out of view
					t.appeared = false;
				}
			};

			//create a modified fn with some additional logic
			var modifiedFn = function() {

				//mark the element as visible
				t.appeared = true;

				//is this supposed to happen only once?
				if (settings.one) {

					//remove the check
					w.unbind('scroll', check);
					var i = $.inArray(check, $.fn.appear.checks);
					if (i >= 0) $.fn.appear.checks.splice(i, 1);
				}

				//trigger the original fn
				fn.apply(this, arguments);
			};

			//bind the modified fn to the element
			if (settings.one) t.one('appear', settings.data, modifiedFn);
			else t.bind('appear', settings.data, modifiedFn);

			//check whenever the window scrolls
			w.scroll(check);

			//check whenever the dom changes
			$.fn.appear.checks.push(check);

			//check now
			(check)();
		});
	};

	//keep a queue of appearance checks
	$.extend($.fn.appear, {

		checks: [],
		timeout: null,

		//process the queue
		checkAll: function() {
			var length = $.fn.appear.checks.length;
			if (length > 0) while (length--) ($.fn.appear.checks[length])();
		},

		//check the queue asynchronously
		run: function() {
			if ($.fn.appear.timeout) clearTimeout($.fn.appear.timeout);
			$.fn.appear.timeout = setTimeout($.fn.appear.checkAll, 20);
		}
	});

	//run checks when these methods are called
	$.each(['append', 'prepend', 'after', 'before', 'attr',
		'removeAttr', 'addClass', 'removeClass', 'toggleClass',
		'remove', 'css', 'show', 'hide'], function(i, n) {
		var old = $.fn[n];
		if (old) {
			$.fn[n] = function() {
				var r = old.apply(this, arguments);
				$.fn.appear.run();
				return r;
			}
		}
	});

})(jQuery);;
(function ($) {
	$.fn.countTo = function (options) {
		options = options || {};
		
		return $(this).each(function () {
			// set options for current element
			var settings = $.extend({}, $.fn.countTo.defaults, {
				from:            $(this).data('from'),
				to:              $(this).data('to'),
				speed:           $(this).data('speed'),
				refreshInterval: $(this).data('refresh-interval'),
				decimals:        $(this).data('decimals')
			}, options);
			
			// how many times to update the value, and how much to increment the value on each update
			var loops = Math.ceil(settings.speed / settings.refreshInterval),
				increment = (settings.to - settings.from) / loops;
			
			// references & variables that will change with each update
			var self = this,
				$self = $(this),
				loopCount = 0,
				value = settings.from,
				data = $self.data('countTo') || {};
			
			$self.data('countTo', data);
			
			// if an existing interval can be found, clear it first
			if (data.interval) {
				clearInterval(data.interval);
			}
			data.interval = setInterval(updateTimer, settings.refreshInterval);
			
			// initialize the element with the starting value
			render(value);
			
			function updateTimer() {
				value += increment;
				loopCount++;
				
				render(value);
				
				if (typeof(settings.onUpdate) == 'function') {
					settings.onUpdate.call(self, value);
				}
				
				if (loopCount >= loops) {
					// remove the interval
					$self.removeData('countTo');
					clearInterval(data.interval);
					value = settings.to;
					
					if (typeof(settings.onComplete) == 'function') {
						settings.onComplete.call(self, value);
					}
				}
			}
			
			function render(value) {
				var formattedValue = settings.formatter.call(self, value, settings);
				$self.html(formattedValue);
			}
		});
	};
	
	$.fn.countTo.defaults = {
		from: 0,               // the number the element should start at
		to: 0,                 // the number the element should end at
		speed: 1000,           // how long it should take to count between the target numbers
		refreshInterval: 100,  // how often the element should be updated
		decimals: 0,           // the number of decimal places to show
		formatter: formatter,  // handler for formatting the value before rendering
		onUpdate: null,        // callback method for every time the element is updated
		onComplete: null       // callback method for when the element finishes updating
	};
	
	function formatter(value, settings) {
		return value.toFixed(settings.decimals);
	}
}(jQuery));;
/*!
 * Masonry PACKAGED v3.1.5
 * Cascading grid layout library
 * http://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */

!function(a){function b(){}function c(a){function c(b){b.prototype.option||(b.prototype.option=function(b){a.isPlainObject(b)&&(this.options=a.extend(!0,this.options,b))})}function e(b,c){a.fn[b]=function(e){if("string"==typeof e){for(var g=d.call(arguments,1),h=0,i=this.length;i>h;h++){var j=this[h],k=a.data(j,b);if(k)if(a.isFunction(k[e])&&"_"!==e.charAt(0)){var l=k[e].apply(k,g);if(void 0!==l)return l}else f("no such method '"+e+"' for "+b+" instance");else f("cannot call methods on "+b+" prior to initialization; attempted to call '"+e+"'")}return this}return this.each(function(){var d=a.data(this,b);d?(d.option(e),d._init()):(d=new c(this,e),a.data(this,b,d))})}}if(a){var f="undefined"==typeof console?b:function(a){console.error(a)};return a.bridget=function(a,b){c(b),e(a,b)},a.bridget}}var d=Array.prototype.slice;"function"==typeof define&&define.amd?define("jquery-bridget/jquery.bridget",["jquery"],c):c(a.jQuery)}(window),function(a){function b(b){var c=a.event;return c.target=c.target||c.srcElement||b,c}var c=document.documentElement,d=function(){};c.addEventListener?d=function(a,b,c){a.addEventListener(b,c,!1)}:c.attachEvent&&(d=function(a,c,d){a[c+d]=d.handleEvent?function(){var c=b(a);d.handleEvent.call(d,c)}:function(){var c=b(a);d.call(a,c)},a.attachEvent("on"+c,a[c+d])});var e=function(){};c.removeEventListener?e=function(a,b,c){a.removeEventListener(b,c,!1)}:c.detachEvent&&(e=function(a,b,c){a.detachEvent("on"+b,a[b+c]);try{delete a[b+c]}catch(d){a[b+c]=void 0}});var f={bind:d,unbind:e};"function"==typeof define&&define.amd?define("eventie/eventie",f):"object"==typeof exports?module.exports=f:a.eventie=f}(this),function(a){function b(a){"function"==typeof a&&(b.isReady?a():f.push(a))}function c(a){var c="readystatechange"===a.type&&"complete"!==e.readyState;if(!b.isReady&&!c){b.isReady=!0;for(var d=0,g=f.length;g>d;d++){var h=f[d];h()}}}function d(d){return d.bind(e,"DOMContentLoaded",c),d.bind(e,"readystatechange",c),d.bind(a,"load",c),b}var e=a.document,f=[];b.isReady=!1,"function"==typeof define&&define.amd?(b.isReady="function"==typeof requirejs,define("doc-ready/doc-ready",["eventie/eventie"],d)):a.docReady=d(a.eventie)}(this),function(){function a(){}function b(a,b){for(var c=a.length;c--;)if(a[c].listener===b)return c;return-1}function c(a){return function(){return this[a].apply(this,arguments)}}var d=a.prototype,e=this,f=e.EventEmitter;d.getListeners=function(a){var b,c,d=this._getEvents();if(a instanceof RegExp){b={};for(c in d)d.hasOwnProperty(c)&&a.test(c)&&(b[c]=d[c])}else b=d[a]||(d[a]=[]);return b},d.flattenListeners=function(a){var b,c=[];for(b=0;b<a.length;b+=1)c.push(a[b].listener);return c},d.getListenersAsObject=function(a){var b,c=this.getListeners(a);return c instanceof Array&&(b={},b[a]=c),b||c},d.addListener=function(a,c){var d,e=this.getListenersAsObject(a),f="object"==typeof c;for(d in e)e.hasOwnProperty(d)&&-1===b(e[d],c)&&e[d].push(f?c:{listener:c,once:!1});return this},d.on=c("addListener"),d.addOnceListener=function(a,b){return this.addListener(a,{listener:b,once:!0})},d.once=c("addOnceListener"),d.defineEvent=function(a){return this.getListeners(a),this},d.defineEvents=function(a){for(var b=0;b<a.length;b+=1)this.defineEvent(a[b]);return this},d.removeListener=function(a,c){var d,e,f=this.getListenersAsObject(a);for(e in f)f.hasOwnProperty(e)&&(d=b(f[e],c),-1!==d&&f[e].splice(d,1));return this},d.off=c("removeListener"),d.addListeners=function(a,b){return this.manipulateListeners(!1,a,b)},d.removeListeners=function(a,b){return this.manipulateListeners(!0,a,b)},d.manipulateListeners=function(a,b,c){var d,e,f=a?this.removeListener:this.addListener,g=a?this.removeListeners:this.addListeners;if("object"!=typeof b||b instanceof RegExp)for(d=c.length;d--;)f.call(this,b,c[d]);else for(d in b)b.hasOwnProperty(d)&&(e=b[d])&&("function"==typeof e?f.call(this,d,e):g.call(this,d,e));return this},d.removeEvent=function(a){var b,c=typeof a,d=this._getEvents();if("string"===c)delete d[a];else if(a instanceof RegExp)for(b in d)d.hasOwnProperty(b)&&a.test(b)&&delete d[b];else delete this._events;return this},d.removeAllListeners=c("removeEvent"),d.emitEvent=function(a,b){var c,d,e,f,g=this.getListenersAsObject(a);for(e in g)if(g.hasOwnProperty(e))for(d=g[e].length;d--;)c=g[e][d],c.once===!0&&this.removeListener(a,c.listener),f=c.listener.apply(this,b||[]),f===this._getOnceReturnValue()&&this.removeListener(a,c.listener);return this},d.trigger=c("emitEvent"),d.emit=function(a){var b=Array.prototype.slice.call(arguments,1);return this.emitEvent(a,b)},d.setOnceReturnValue=function(a){return this._onceReturnValue=a,this},d._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},d._getEvents=function(){return this._events||(this._events={})},a.noConflict=function(){return e.EventEmitter=f,a},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return a}):"object"==typeof module&&module.exports?module.exports=a:this.EventEmitter=a}.call(this),function(a){function b(a){if(a){if("string"==typeof d[a])return a;a=a.charAt(0).toUpperCase()+a.slice(1);for(var b,e=0,f=c.length;f>e;e++)if(b=c[e]+a,"string"==typeof d[b])return b}}var c="Webkit Moz ms Ms O".split(" "),d=document.documentElement.style;"function"==typeof define&&define.amd?define("get-style-property/get-style-property",[],function(){return b}):"object"==typeof exports?module.exports=b:a.getStyleProperty=b}(window),function(a){function b(a){var b=parseFloat(a),c=-1===a.indexOf("%")&&!isNaN(b);return c&&b}function c(){for(var a={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},b=0,c=g.length;c>b;b++){var d=g[b];a[d]=0}return a}function d(a){function d(a){if("string"==typeof a&&(a=document.querySelector(a)),a&&"object"==typeof a&&a.nodeType){var d=f(a);if("none"===d.display)return c();var e={};e.width=a.offsetWidth,e.height=a.offsetHeight;for(var k=e.isBorderBox=!(!j||!d[j]||"border-box"!==d[j]),l=0,m=g.length;m>l;l++){var n=g[l],o=d[n];o=h(a,o);var p=parseFloat(o);e[n]=isNaN(p)?0:p}var q=e.paddingLeft+e.paddingRight,r=e.paddingTop+e.paddingBottom,s=e.marginLeft+e.marginRight,t=e.marginTop+e.marginBottom,u=e.borderLeftWidth+e.borderRightWidth,v=e.borderTopWidth+e.borderBottomWidth,w=k&&i,x=b(d.width);x!==!1&&(e.width=x+(w?0:q+u));var y=b(d.height);return y!==!1&&(e.height=y+(w?0:r+v)),e.innerWidth=e.width-(q+u),e.innerHeight=e.height-(r+v),e.outerWidth=e.width+s,e.outerHeight=e.height+t,e}}function h(a,b){if(e||-1===b.indexOf("%"))return b;var c=a.style,d=c.left,f=a.runtimeStyle,g=f&&f.left;return g&&(f.left=a.currentStyle.left),c.left=b,b=c.pixelLeft,c.left=d,g&&(f.left=g),b}var i,j=a("boxSizing");return function(){if(j){var a=document.createElement("div");a.style.width="200px",a.style.padding="1px 2px 3px 4px",a.style.borderStyle="solid",a.style.borderWidth="1px 2px 3px 4px",a.style[j]="border-box";var c=document.body||document.documentElement;c.appendChild(a);var d=f(a);i=200===b(d.width),c.removeChild(a)}}(),d}var e=a.getComputedStyle,f=e?function(a){return e(a,null)}:function(a){return a.currentStyle},g=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"];"function"==typeof define&&define.amd?define("get-size/get-size",["get-style-property/get-style-property"],d):"object"==typeof exports?module.exports=d(require("get-style-property")):a.getSize=d(a.getStyleProperty)}(window),function(a,b){function c(a,b){return a[h](b)}function d(a){if(!a.parentNode){var b=document.createDocumentFragment();b.appendChild(a)}}function e(a,b){d(a);for(var c=a.parentNode.querySelectorAll(b),e=0,f=c.length;f>e;e++)if(c[e]===a)return!0;return!1}function f(a,b){return d(a),c(a,b)}var g,h=function(){if(b.matchesSelector)return"matchesSelector";for(var a=["webkit","moz","ms","o"],c=0,d=a.length;d>c;c++){var e=a[c],f=e+"MatchesSelector";if(b[f])return f}}();if(h){var i=document.createElement("div"),j=c(i,"div");g=j?c:f}else g=e;"function"==typeof define&&define.amd?define("matches-selector/matches-selector",[],function(){return g}):window.matchesSelector=g}(this,Element.prototype),function(a){function b(a,b){for(var c in b)a[c]=b[c];return a}function c(a){for(var b in a)return!1;return b=null,!0}function d(a){return a.replace(/([A-Z])/g,function(a){return"-"+a.toLowerCase()})}function e(a,e,f){function h(a,b){a&&(this.element=a,this.layout=b,this.position={x:0,y:0},this._create())}var i=f("transition"),j=f("transform"),k=i&&j,l=!!f("perspective"),m={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend",transition:"transitionend"}[i],n=["transform","transition","transitionDuration","transitionProperty"],o=function(){for(var a={},b=0,c=n.length;c>b;b++){var d=n[b],e=f(d);e&&e!==d&&(a[d]=e)}return a}();b(h.prototype,a.prototype),h.prototype._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},h.prototype.handleEvent=function(a){var b="on"+a.type;this[b]&&this[b](a)},h.prototype.getSize=function(){this.size=e(this.element)},h.prototype.css=function(a){var b=this.element.style;for(var c in a){var d=o[c]||c;b[d]=a[c]}},h.prototype.getPosition=function(){var a=g(this.element),b=this.layout.options,c=b.isOriginLeft,d=b.isOriginTop,e=parseInt(a[c?"left":"right"],10),f=parseInt(a[d?"top":"bottom"],10);e=isNaN(e)?0:e,f=isNaN(f)?0:f;var h=this.layout.size;e-=c?h.paddingLeft:h.paddingRight,f-=d?h.paddingTop:h.paddingBottom,this.position.x=e,this.position.y=f},h.prototype.layoutPosition=function(){var a=this.layout.size,b=this.layout.options,c={};b.isOriginLeft?(c.left=this.position.x+a.paddingLeft+"px",c.right=""):(c.right=this.position.x+a.paddingRight+"px",c.left=""),b.isOriginTop?(c.top=this.position.y+a.paddingTop+"px",c.bottom=""):(c.bottom=this.position.y+a.paddingBottom+"px",c.top=""),this.css(c),this.emitEvent("layout",[this])};var p=l?function(a,b){return"translate3d("+a+"px, "+b+"px, 0)"}:function(a,b){return"translate("+a+"px, "+b+"px)"};h.prototype._transitionTo=function(a,b){this.getPosition();var c=this.position.x,d=this.position.y,e=parseInt(a,10),f=parseInt(b,10),g=e===this.position.x&&f===this.position.y;if(this.setPosition(a,b),g&&!this.isTransitioning)return void this.layoutPosition();var h=a-c,i=b-d,j={},k=this.layout.options;h=k.isOriginLeft?h:-h,i=k.isOriginTop?i:-i,j.transform=p(h,i),this.transition({to:j,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},h.prototype.goTo=function(a,b){this.setPosition(a,b),this.layoutPosition()},h.prototype.moveTo=k?h.prototype._transitionTo:h.prototype.goTo,h.prototype.setPosition=function(a,b){this.position.x=parseInt(a,10),this.position.y=parseInt(b,10)},h.prototype._nonTransition=function(a){this.css(a.to),a.isCleaning&&this._removeStyles(a.to);for(var b in a.onTransitionEnd)a.onTransitionEnd[b].call(this)},h.prototype._transition=function(a){if(!parseFloat(this.layout.options.transitionDuration))return void this._nonTransition(a);var b=this._transn;for(var c in a.onTransitionEnd)b.onEnd[c]=a.onTransitionEnd[c];for(c in a.to)b.ingProperties[c]=!0,a.isCleaning&&(b.clean[c]=!0);if(a.from){this.css(a.from);var d=this.element.offsetHeight;d=null}this.enableTransition(a.to),this.css(a.to),this.isTransitioning=!0};var q=j&&d(j)+",opacity";h.prototype.enableTransition=function(){this.isTransitioning||(this.css({transitionProperty:q,transitionDuration:this.layout.options.transitionDuration}),this.element.addEventListener(m,this,!1))},h.prototype.transition=h.prototype[i?"_transition":"_nonTransition"],h.prototype.onwebkitTransitionEnd=function(a){this.ontransitionend(a)},h.prototype.onotransitionend=function(a){this.ontransitionend(a)};var r={"-webkit-transform":"transform","-moz-transform":"transform","-o-transform":"transform"};h.prototype.ontransitionend=function(a){if(a.target===this.element){var b=this._transn,d=r[a.propertyName]||a.propertyName;if(delete b.ingProperties[d],c(b.ingProperties)&&this.disableTransition(),d in b.clean&&(this.element.style[a.propertyName]="",delete b.clean[d]),d in b.onEnd){var e=b.onEnd[d];e.call(this),delete b.onEnd[d]}this.emitEvent("transitionEnd",[this])}},h.prototype.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(m,this,!1),this.isTransitioning=!1},h.prototype._removeStyles=function(a){var b={};for(var c in a)b[c]="";this.css(b)};var s={transitionProperty:"",transitionDuration:""};return h.prototype.removeTransitionStyles=function(){this.css(s)},h.prototype.removeElem=function(){this.element.parentNode.removeChild(this.element),this.emitEvent("remove",[this])},h.prototype.remove=function(){if(!i||!parseFloat(this.layout.options.transitionDuration))return void this.removeElem();var a=this;this.on("transitionEnd",function(){return a.removeElem(),!0}),this.hide()},h.prototype.reveal=function(){delete this.isHidden,this.css({display:""});var a=this.layout.options;this.transition({from:a.hiddenStyle,to:a.visibleStyle,isCleaning:!0})},h.prototype.hide=function(){this.isHidden=!0,this.css({display:""});var a=this.layout.options;this.transition({from:a.visibleStyle,to:a.hiddenStyle,isCleaning:!0,onTransitionEnd:{opacity:function(){this.isHidden&&this.css({display:"none"})}}})},h.prototype.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},h}var f=a.getComputedStyle,g=f?function(a){return f(a,null)}:function(a){return a.currentStyle};"function"==typeof define&&define.amd?define("outlayer/item",["eventEmitter/EventEmitter","get-size/get-size","get-style-property/get-style-property"],e):(a.Outlayer={},a.Outlayer.Item=e(a.EventEmitter,a.getSize,a.getStyleProperty))}(window),function(a){function b(a,b){for(var c in b)a[c]=b[c];return a}function c(a){return"[object Array]"===l.call(a)}function d(a){var b=[];if(c(a))b=a;else if(a&&"number"==typeof a.length)for(var d=0,e=a.length;e>d;d++)b.push(a[d]);else b.push(a);return b}function e(a,b){var c=n(b,a);-1!==c&&b.splice(c,1)}function f(a){return a.replace(/(.)([A-Z])/g,function(a,b,c){return b+"-"+c}).toLowerCase()}function g(c,g,l,n,o,p){function q(a,c){if("string"==typeof a&&(a=h.querySelector(a)),!a||!m(a))return void(i&&i.error("Bad "+this.constructor.namespace+" element: "+a));this.element=a,this.options=b({},this.constructor.defaults),this.option(c);var d=++r;this.element.outlayerGUID=d,s[d]=this,this._create(),this.options.isInitLayout&&this.layout()}var r=0,s={};return q.namespace="outlayer",q.Item=p,q.defaults={containerStyle:{position:"relative"},isInitLayout:!0,isOriginLeft:!0,isOriginTop:!0,isResizeBound:!0,isResizingContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}},b(q.prototype,l.prototype),q.prototype.option=function(a){b(this.options,a)},q.prototype._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),b(this.element.style,this.options.containerStyle),this.options.isResizeBound&&this.bindResize()},q.prototype.reloadItems=function(){this.items=this._itemize(this.element.children)},q.prototype._itemize=function(a){for(var b=this._filterFindItemElements(a),c=this.constructor.Item,d=[],e=0,f=b.length;f>e;e++){var g=b[e],h=new c(g,this);d.push(h)}return d},q.prototype._filterFindItemElements=function(a){a=d(a);for(var b=this.options.itemSelector,c=[],e=0,f=a.length;f>e;e++){var g=a[e];if(m(g))if(b){o(g,b)&&c.push(g);for(var h=g.querySelectorAll(b),i=0,j=h.length;j>i;i++)c.push(h[i])}else c.push(g)}return c},q.prototype.getItemElements=function(){for(var a=[],b=0,c=this.items.length;c>b;b++)a.push(this.items[b].element);return a},q.prototype.layout=function(){this._resetLayout(),this._manageStamps();var a=void 0!==this.options.isLayoutInstant?this.options.isLayoutInstant:!this._isLayoutInited;this.layoutItems(this.items,a),this._isLayoutInited=!0},q.prototype._init=q.prototype.layout,q.prototype._resetLayout=function(){this.getSize()},q.prototype.getSize=function(){this.size=n(this.element)},q.prototype._getMeasurement=function(a,b){var c,d=this.options[a];d?("string"==typeof d?c=this.element.querySelector(d):m(d)&&(c=d),this[a]=c?n(c)[b]:d):this[a]=0},q.prototype.layoutItems=function(a,b){a=this._getItemsForLayout(a),this._layoutItems(a,b),this._postLayout()},q.prototype._getItemsForLayout=function(a){for(var b=[],c=0,d=a.length;d>c;c++){var e=a[c];e.isIgnored||b.push(e)}return b},q.prototype._layoutItems=function(a,b){function c(){d.emitEvent("layoutComplete",[d,a])}var d=this;if(!a||!a.length)return void c();this._itemsOn(a,"layout",c);for(var e=[],f=0,g=a.length;g>f;f++){var h=a[f],i=this._getItemLayoutPosition(h);i.item=h,i.isInstant=b||h.isLayoutInstant,e.push(i)}this._processLayoutQueue(e)},q.prototype._getItemLayoutPosition=function(){return{x:0,y:0}},q.prototype._processLayoutQueue=function(a){for(var b=0,c=a.length;c>b;b++){var d=a[b];this._positionItem(d.item,d.x,d.y,d.isInstant)}},q.prototype._positionItem=function(a,b,c,d){d?a.goTo(b,c):a.moveTo(b,c)},q.prototype._postLayout=function(){this.resizeContainer()},q.prototype.resizeContainer=function(){if(this.options.isResizingContainer){var a=this._getContainerSize();a&&(this._setContainerMeasure(a.width,!0),this._setContainerMeasure(a.height,!1))}},q.prototype._getContainerSize=k,q.prototype._setContainerMeasure=function(a,b){if(void 0!==a){var c=this.size;c.isBorderBox&&(a+=b?c.paddingLeft+c.paddingRight+c.borderLeftWidth+c.borderRightWidth:c.paddingBottom+c.paddingTop+c.borderTopWidth+c.borderBottomWidth),a=Math.max(a,0),this.element.style[b?"width":"height"]=a+"px"}},q.prototype._itemsOn=function(a,b,c){function d(){return e++,e===f&&c.call(g),!0}for(var e=0,f=a.length,g=this,h=0,i=a.length;i>h;h++){var j=a[h];j.on(b,d)}},q.prototype.ignore=function(a){var b=this.getItem(a);b&&(b.isIgnored=!0)},q.prototype.unignore=function(a){var b=this.getItem(a);b&&delete b.isIgnored},q.prototype.stamp=function(a){if(a=this._find(a)){this.stamps=this.stamps.concat(a);for(var b=0,c=a.length;c>b;b++){var d=a[b];this.ignore(d)}}},q.prototype.unstamp=function(a){if(a=this._find(a))for(var b=0,c=a.length;c>b;b++){var d=a[b];e(d,this.stamps),this.unignore(d)}},q.prototype._find=function(a){return a?("string"==typeof a&&(a=this.element.querySelectorAll(a)),a=d(a)):void 0},q.prototype._manageStamps=function(){if(this.stamps&&this.stamps.length){this._getBoundingRect();for(var a=0,b=this.stamps.length;b>a;a++){var c=this.stamps[a];this._manageStamp(c)}}},q.prototype._getBoundingRect=function(){var a=this.element.getBoundingClientRect(),b=this.size;this._boundingRect={left:a.left+b.paddingLeft+b.borderLeftWidth,top:a.top+b.paddingTop+b.borderTopWidth,right:a.right-(b.paddingRight+b.borderRightWidth),bottom:a.bottom-(b.paddingBottom+b.borderBottomWidth)}},q.prototype._manageStamp=k,q.prototype._getElementOffset=function(a){var b=a.getBoundingClientRect(),c=this._boundingRect,d=n(a),e={left:b.left-c.left-d.marginLeft,top:b.top-c.top-d.marginTop,right:c.right-b.right-d.marginRight,bottom:c.bottom-b.bottom-d.marginBottom};return e},q.prototype.handleEvent=function(a){var b="on"+a.type;this[b]&&this[b](a)},q.prototype.bindResize=function(){this.isResizeBound||(c.bind(a,"resize",this),this.isResizeBound=!0)},q.prototype.unbindResize=function(){this.isResizeBound&&c.unbind(a,"resize",this),this.isResizeBound=!1},q.prototype.onresize=function(){function a(){b.resize(),delete b.resizeTimeout}this.resizeTimeout&&clearTimeout(this.resizeTimeout);var b=this;this.resizeTimeout=setTimeout(a,100)},q.prototype.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},q.prototype.needsResizeLayout=function(){var a=n(this.element),b=this.size&&a;return b&&a.innerWidth!==this.size.innerWidth},q.prototype.addItems=function(a){var b=this._itemize(a);return b.length&&(this.items=this.items.concat(b)),b},q.prototype.appended=function(a){var b=this.addItems(a);b.length&&(this.layoutItems(b,!0),this.reveal(b))},q.prototype.prepended=function(a){var b=this._itemize(a);if(b.length){var c=this.items.slice(0);this.items=b.concat(c),this._resetLayout(),this._manageStamps(),this.layoutItems(b,!0),this.reveal(b),this.layoutItems(c)}},q.prototype.reveal=function(a){var b=a&&a.length;if(b)for(var c=0;b>c;c++){var d=a[c];d.reveal()}},q.prototype.hide=function(a){var b=a&&a.length;if(b)for(var c=0;b>c;c++){var d=a[c];d.hide()}},q.prototype.getItem=function(a){for(var b=0,c=this.items.length;c>b;b++){var d=this.items[b];if(d.element===a)return d}},q.prototype.getItems=function(a){if(a&&a.length){for(var b=[],c=0,d=a.length;d>c;c++){var e=a[c],f=this.getItem(e);f&&b.push(f)}return b}},q.prototype.remove=function(a){a=d(a);var b=this.getItems(a);if(b&&b.length){this._itemsOn(b,"remove",function(){this.emitEvent("removeComplete",[this,b])});for(var c=0,f=b.length;f>c;c++){var g=b[c];g.remove(),e(g,this.items)}}},q.prototype.destroy=function(){var a=this.element.style;a.height="",a.position="",a.width="";for(var b=0,c=this.items.length;c>b;b++){var d=this.items[b];d.destroy()}this.unbindResize(),delete this.element.outlayerGUID,j&&j.removeData(this.element,this.constructor.namespace)},q.data=function(a){var b=a&&a.outlayerGUID;return b&&s[b]},q.create=function(a,c){function d(){q.apply(this,arguments)}return Object.create?d.prototype=Object.create(q.prototype):b(d.prototype,q.prototype),d.prototype.constructor=d,d.defaults=b({},q.defaults),b(d.defaults,c),d.prototype.settings={},d.namespace=a,d.data=q.data,d.Item=function(){p.apply(this,arguments)},d.Item.prototype=new p,g(function(){for(var b=f(a),c=h.querySelectorAll(".js-"+b),e="data-"+b+"-options",g=0,k=c.length;k>g;g++){var l,m=c[g],n=m.getAttribute(e);try{l=n&&JSON.parse(n)}catch(o){i&&i.error("Error parsing "+e+" on "+m.nodeName.toLowerCase()+(m.id?"#"+m.id:"")+": "+o);continue}var p=new d(m,l);j&&j.data(m,a,p)}}),j&&j.bridget&&j.bridget(a,d),d},q.Item=p,q}var h=a.document,i=a.console,j=a.jQuery,k=function(){},l=Object.prototype.toString,m="object"==typeof HTMLElement?function(a){return a instanceof HTMLElement}:function(a){return a&&"object"==typeof a&&1===a.nodeType&&"string"==typeof a.nodeName},n=Array.prototype.indexOf?function(a,b){return a.indexOf(b)}:function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1};"function"==typeof define&&define.amd?define("outlayer/outlayer",["eventie/eventie","doc-ready/doc-ready","eventEmitter/EventEmitter","get-size/get-size","matches-selector/matches-selector","./item"],g):a.Outlayer=g(a.eventie,a.docReady,a.EventEmitter,a.getSize,a.matchesSelector,a.Outlayer.Item)}(window),function(a){function b(a,b){var d=a.create("masonry");return d.prototype._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns();var a=this.cols;for(this.colYs=[];a--;)this.colYs.push(0);this.maxY=0},d.prototype.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var a=this.items[0],c=a&&a.element;this.columnWidth=c&&b(c).outerWidth||this.containerWidth}this.columnWidth+=this.gutter,this.cols=Math.floor((this.containerWidth+this.gutter)/this.columnWidth),this.cols=Math.max(this.cols,1)},d.prototype.getContainerWidth=function(){var a=this.options.isFitWidth?this.element.parentNode:this.element,c=b(a);this.containerWidth=c&&c.innerWidth},d.prototype._getItemLayoutPosition=function(a){a.getSize();var b=a.size.outerWidth%this.columnWidth,d=b&&1>b?"round":"ceil",e=Math[d](a.size.outerWidth/this.columnWidth);e=Math.min(e,this.cols);for(var f=this._getColGroup(e),g=Math.min.apply(Math,f),h=c(f,g),i={x:this.columnWidth*h,y:g},j=g+a.size.outerHeight,k=this.cols+1-f.length,l=0;k>l;l++)this.colYs[h+l]=j;return i},d.prototype._getColGroup=function(a){if(2>a)return this.colYs;for(var b=[],c=this.cols+1-a,d=0;c>d;d++){var e=this.colYs.slice(d,d+a);b[d]=Math.max.apply(Math,e)}return b},d.prototype._manageStamp=function(a){var c=b(a),d=this._getElementOffset(a),e=this.options.isOriginLeft?d.left:d.right,f=e+c.outerWidth,g=Math.floor(e/this.columnWidth);g=Math.max(0,g);var h=Math.floor(f/this.columnWidth);h-=f%this.columnWidth?0:1,h=Math.min(this.cols-1,h);for(var i=(this.options.isOriginTop?d.top:d.bottom)+c.outerHeight,j=g;h>=j;j++)this.colYs[j]=Math.max(i,this.colYs[j])},d.prototype._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var a={height:this.maxY};return this.options.isFitWidth&&(a.width=this._getContainerFitWidth()),a},d.prototype._getContainerFitWidth=function(){for(var a=0,b=this.cols;--b&&0===this.colYs[b];)a++;return(this.cols-a)*this.columnWidth-this.gutter},d.prototype.needsResizeLayout=function(){var a=this.containerWidth;return this.getContainerWidth(),a!==this.containerWidth},d}var c=Array.prototype.indexOf?function(a,b){return a.indexOf(b)}:function(a,b){for(var c=0,d=a.length;d>c;c++){var e=a[c];if(e===b)return c}return-1};"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size"],b):a.Masonry=b(a.Outlayer,a.getSize)}(window);;
/*!
 * Isotope PACKAGED v2.0.1
 * Filter & sort magical layouts
 * http://isotope.metafizzy.co
 */

(function(t){function e(){}function i(t){function i(e){e.prototype.option||(e.prototype.option=function(e){t.isPlainObject(e)&&(this.options=t.extend(!0,this.options,e))})}function n(e,i){t.fn[e]=function(n){if("string"==typeof n){for(var s=o.call(arguments,1),a=0,u=this.length;u>a;a++){var p=this[a],h=t.data(p,e);if(h)if(t.isFunction(h[n])&&"_"!==n.charAt(0)){var f=h[n].apply(h,s);if(void 0!==f)return f}else r("no such method '"+n+"' for "+e+" instance");else r("cannot call methods on "+e+" prior to initialization; "+"attempted to call '"+n+"'")}return this}return this.each(function(){var o=t.data(this,e);o?(o.option(n),o._init()):(o=new i(this,n),t.data(this,e,o))})}}if(t){var r="undefined"==typeof console?e:function(t){console.error(t)};return t.bridget=function(t,e){i(e),n(t,e)},t.bridget}}var o=Array.prototype.slice;"function"==typeof define&&define.amd?define("jquery-bridget/jquery.bridget",["jquery"],i):i(t.jQuery)})(window),function(t){function e(e){var i=t.event;return i.target=i.target||i.srcElement||e,i}var i=document.documentElement,o=function(){};i.addEventListener?o=function(t,e,i){t.addEventListener(e,i,!1)}:i.attachEvent&&(o=function(t,i,o){t[i+o]=o.handleEvent?function(){var i=e(t);o.handleEvent.call(o,i)}:function(){var i=e(t);o.call(t,i)},t.attachEvent("on"+i,t[i+o])});var n=function(){};i.removeEventListener?n=function(t,e,i){t.removeEventListener(e,i,!1)}:i.detachEvent&&(n=function(t,e,i){t.detachEvent("on"+e,t[e+i]);try{delete t[e+i]}catch(o){t[e+i]=void 0}});var r={bind:o,unbind:n};"function"==typeof define&&define.amd?define("eventie/eventie",r):"object"==typeof exports?module.exports=r:t.eventie=r}(this),function(t){function e(t){"function"==typeof t&&(e.isReady?t():r.push(t))}function i(t){var i="readystatechange"===t.type&&"complete"!==n.readyState;if(!e.isReady&&!i){e.isReady=!0;for(var o=0,s=r.length;s>o;o++){var a=r[o];a()}}}function o(o){return o.bind(n,"DOMContentLoaded",i),o.bind(n,"readystatechange",i),o.bind(t,"load",i),e}var n=t.document,r=[];e.isReady=!1,"function"==typeof define&&define.amd?(e.isReady="function"==typeof requirejs,define("doc-ready/doc-ready",["eventie/eventie"],o)):t.docReady=o(t.eventie)}(this),function(){function t(){}function e(t,e){for(var i=t.length;i--;)if(t[i].listener===e)return i;return-1}function i(t){return function(){return this[t].apply(this,arguments)}}var o=t.prototype,n=this,r=n.EventEmitter;o.getListeners=function(t){var e,i,o=this._getEvents();if(t instanceof RegExp){e={};for(i in o)o.hasOwnProperty(i)&&t.test(i)&&(e[i]=o[i])}else e=o[t]||(o[t]=[]);return e},o.flattenListeners=function(t){var e,i=[];for(e=0;t.length>e;e+=1)i.push(t[e].listener);return i},o.getListenersAsObject=function(t){var e,i=this.getListeners(t);return i instanceof Array&&(e={},e[t]=i),e||i},o.addListener=function(t,i){var o,n=this.getListenersAsObject(t),r="object"==typeof i;for(o in n)n.hasOwnProperty(o)&&-1===e(n[o],i)&&n[o].push(r?i:{listener:i,once:!1});return this},o.on=i("addListener"),o.addOnceListener=function(t,e){return this.addListener(t,{listener:e,once:!0})},o.once=i("addOnceListener"),o.defineEvent=function(t){return this.getListeners(t),this},o.defineEvents=function(t){for(var e=0;t.length>e;e+=1)this.defineEvent(t[e]);return this},o.removeListener=function(t,i){var o,n,r=this.getListenersAsObject(t);for(n in r)r.hasOwnProperty(n)&&(o=e(r[n],i),-1!==o&&r[n].splice(o,1));return this},o.off=i("removeListener"),o.addListeners=function(t,e){return this.manipulateListeners(!1,t,e)},o.removeListeners=function(t,e){return this.manipulateListeners(!0,t,e)},o.manipulateListeners=function(t,e,i){var o,n,r=t?this.removeListener:this.addListener,s=t?this.removeListeners:this.addListeners;if("object"!=typeof e||e instanceof RegExp)for(o=i.length;o--;)r.call(this,e,i[o]);else for(o in e)e.hasOwnProperty(o)&&(n=e[o])&&("function"==typeof n?r.call(this,o,n):s.call(this,o,n));return this},o.removeEvent=function(t){var e,i=typeof t,o=this._getEvents();if("string"===i)delete o[t];else if(t instanceof RegExp)for(e in o)o.hasOwnProperty(e)&&t.test(e)&&delete o[e];else delete this._events;return this},o.removeAllListeners=i("removeEvent"),o.emitEvent=function(t,e){var i,o,n,r,s=this.getListenersAsObject(t);for(n in s)if(s.hasOwnProperty(n))for(o=s[n].length;o--;)i=s[n][o],i.once===!0&&this.removeListener(t,i.listener),r=i.listener.apply(this,e||[]),r===this._getOnceReturnValue()&&this.removeListener(t,i.listener);return this},o.trigger=i("emitEvent"),o.emit=function(t){var e=Array.prototype.slice.call(arguments,1);return this.emitEvent(t,e)},o.setOnceReturnValue=function(t){return this._onceReturnValue=t,this},o._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},o._getEvents=function(){return this._events||(this._events={})},t.noConflict=function(){return n.EventEmitter=r,t},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return t}):"object"==typeof module&&module.exports?module.exports=t:this.EventEmitter=t}.call(this),function(t){function e(t){if(t){if("string"==typeof o[t])return t;t=t.charAt(0).toUpperCase()+t.slice(1);for(var e,n=0,r=i.length;r>n;n++)if(e=i[n]+t,"string"==typeof o[e])return e}}var i="Webkit Moz ms Ms O".split(" "),o=document.documentElement.style;"function"==typeof define&&define.amd?define("get-style-property/get-style-property",[],function(){return e}):"object"==typeof exports?module.exports=e:t.getStyleProperty=e}(window),function(t){function e(t){var e=parseFloat(t),i=-1===t.indexOf("%")&&!isNaN(e);return i&&e}function i(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0,i=s.length;i>e;e++){var o=s[e];t[o]=0}return t}function o(t){function o(t){if("string"==typeof t&&(t=document.querySelector(t)),t&&"object"==typeof t&&t.nodeType){var o=r(t);if("none"===o.display)return i();var n={};n.width=t.offsetWidth,n.height=t.offsetHeight;for(var h=n.isBorderBox=!(!p||!o[p]||"border-box"!==o[p]),f=0,d=s.length;d>f;f++){var l=s[f],c=o[l];c=a(t,c);var y=parseFloat(c);n[l]=isNaN(y)?0:y}var m=n.paddingLeft+n.paddingRight,g=n.paddingTop+n.paddingBottom,v=n.marginLeft+n.marginRight,_=n.marginTop+n.marginBottom,I=n.borderLeftWidth+n.borderRightWidth,L=n.borderTopWidth+n.borderBottomWidth,z=h&&u,S=e(o.width);S!==!1&&(n.width=S+(z?0:m+I));var b=e(o.height);return b!==!1&&(n.height=b+(z?0:g+L)),n.innerWidth=n.width-(m+I),n.innerHeight=n.height-(g+L),n.outerWidth=n.width+v,n.outerHeight=n.height+_,n}}function a(t,e){if(n||-1===e.indexOf("%"))return e;var i=t.style,o=i.left,r=t.runtimeStyle,s=r&&r.left;return s&&(r.left=t.currentStyle.left),i.left=e,e=i.pixelLeft,i.left=o,s&&(r.left=s),e}var u,p=t("boxSizing");return function(){if(p){var t=document.createElement("div");t.style.width="200px",t.style.padding="1px 2px 3px 4px",t.style.borderStyle="solid",t.style.borderWidth="1px 2px 3px 4px",t.style[p]="border-box";var i=document.body||document.documentElement;i.appendChild(t);var o=r(t);u=200===e(o.width),i.removeChild(t)}}(),o}var n=t.getComputedStyle,r=n?function(t){return n(t,null)}:function(t){return t.currentStyle},s=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"];"function"==typeof define&&define.amd?define("get-size/get-size",["get-style-property/get-style-property"],o):"object"==typeof exports?module.exports=o(require("get-style-property")):t.getSize=o(t.getStyleProperty)}(window),function(t,e){function i(t,e){return t[a](e)}function o(t){if(!t.parentNode){var e=document.createDocumentFragment();e.appendChild(t)}}function n(t,e){o(t);for(var i=t.parentNode.querySelectorAll(e),n=0,r=i.length;r>n;n++)if(i[n]===t)return!0;return!1}function r(t,e){return o(t),i(t,e)}var s,a=function(){if(e.matchesSelector)return"matchesSelector";for(var t=["webkit","moz","ms","o"],i=0,o=t.length;o>i;i++){var n=t[i],r=n+"MatchesSelector";if(e[r])return r}}();if(a){var u=document.createElement("div"),p=i(u,"div");s=p?i:r}else s=n;"function"==typeof define&&define.amd?define("matches-selector/matches-selector",[],function(){return s}):window.matchesSelector=s}(this,Element.prototype),function(t){function e(t,e){for(var i in e)t[i]=e[i];return t}function i(t){for(var e in t)return!1;return e=null,!0}function o(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}function n(t,n,r){function a(t,e){t&&(this.element=t,this.layout=e,this.position={x:0,y:0},this._create())}var u=r("transition"),p=r("transform"),h=u&&p,f=!!r("perspective"),d={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend",transition:"transitionend"}[u],l=["transform","transition","transitionDuration","transitionProperty"],c=function(){for(var t={},e=0,i=l.length;i>e;e++){var o=l[e],n=r(o);n&&n!==o&&(t[o]=n)}return t}();e(a.prototype,t.prototype),a.prototype._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},a.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},a.prototype.getSize=function(){this.size=n(this.element)},a.prototype.css=function(t){var e=this.element.style;for(var i in t){var o=c[i]||i;e[o]=t[i]}},a.prototype.getPosition=function(){var t=s(this.element),e=this.layout.options,i=e.isOriginLeft,o=e.isOriginTop,n=parseInt(t[i?"left":"right"],10),r=parseInt(t[o?"top":"bottom"],10);n=isNaN(n)?0:n,r=isNaN(r)?0:r;var a=this.layout.size;n-=i?a.paddingLeft:a.paddingRight,r-=o?a.paddingTop:a.paddingBottom,this.position.x=n,this.position.y=r},a.prototype.layoutPosition=function(){var t=this.layout.size,e=this.layout.options,i={};e.isOriginLeft?(i.left=this.position.x+t.paddingLeft+"px",i.right=""):(i.right=this.position.x+t.paddingRight+"px",i.left=""),e.isOriginTop?(i.top=this.position.y+t.paddingTop+"px",i.bottom=""):(i.bottom=this.position.y+t.paddingBottom+"px",i.top=""),this.css(i),this.emitEvent("layout",[this])};var y=f?function(t,e){return"translate3d("+t+"px, "+e+"px, 0)"}:function(t,e){return"translate("+t+"px, "+e+"px)"};a.prototype._transitionTo=function(t,e){this.getPosition();var i=this.position.x,o=this.position.y,n=parseInt(t,10),r=parseInt(e,10),s=n===this.position.x&&r===this.position.y;if(this.setPosition(t,e),s&&!this.isTransitioning)return this.layoutPosition(),void 0;var a=t-i,u=e-o,p={},h=this.layout.options;a=h.isOriginLeft?a:-a,u=h.isOriginTop?u:-u,p.transform=y(a,u),this.transition({to:p,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},a.prototype.goTo=function(t,e){this.setPosition(t,e),this.layoutPosition()},a.prototype.moveTo=h?a.prototype._transitionTo:a.prototype.goTo,a.prototype.setPosition=function(t,e){this.position.x=parseInt(t,10),this.position.y=parseInt(e,10)},a.prototype._nonTransition=function(t){this.css(t.to),t.isCleaning&&this._removeStyles(t.to);for(var e in t.onTransitionEnd)t.onTransitionEnd[e].call(this)},a.prototype._transition=function(t){if(!parseFloat(this.layout.options.transitionDuration))return this._nonTransition(t),void 0;var e=this._transn;for(var i in t.onTransitionEnd)e.onEnd[i]=t.onTransitionEnd[i];for(i in t.to)e.ingProperties[i]=!0,t.isCleaning&&(e.clean[i]=!0);if(t.from){this.css(t.from);var o=this.element.offsetHeight;o=null}this.enableTransition(t.to),this.css(t.to),this.isTransitioning=!0};var m=p&&o(p)+",opacity";a.prototype.enableTransition=function(){this.isTransitioning||(this.css({transitionProperty:m,transitionDuration:this.layout.options.transitionDuration}),this.element.addEventListener(d,this,!1))},a.prototype.transition=a.prototype[u?"_transition":"_nonTransition"],a.prototype.onwebkitTransitionEnd=function(t){this.ontransitionend(t)},a.prototype.onotransitionend=function(t){this.ontransitionend(t)};var g={"-webkit-transform":"transform","-moz-transform":"transform","-o-transform":"transform"};a.prototype.ontransitionend=function(t){if(t.target===this.element){var e=this._transn,o=g[t.propertyName]||t.propertyName;if(delete e.ingProperties[o],i(e.ingProperties)&&this.disableTransition(),o in e.clean&&(this.element.style[t.propertyName]="",delete e.clean[o]),o in e.onEnd){var n=e.onEnd[o];n.call(this),delete e.onEnd[o]}this.emitEvent("transitionEnd",[this])}},a.prototype.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(d,this,!1),this.isTransitioning=!1},a.prototype._removeStyles=function(t){var e={};for(var i in t)e[i]="";this.css(e)};var v={transitionProperty:"",transitionDuration:""};return a.prototype.removeTransitionStyles=function(){this.css(v)},a.prototype.removeElem=function(){this.element.parentNode.removeChild(this.element),this.emitEvent("remove",[this])},a.prototype.remove=function(){if(!u||!parseFloat(this.layout.options.transitionDuration))return this.removeElem(),void 0;var t=this;this.on("transitionEnd",function(){return t.removeElem(),!0}),this.hide()},a.prototype.reveal=function(){delete this.isHidden,this.css({display:""});var t=this.layout.options;this.transition({from:t.hiddenStyle,to:t.visibleStyle,isCleaning:!0})},a.prototype.hide=function(){this.isHidden=!0,this.css({display:""});var t=this.layout.options;this.transition({from:t.visibleStyle,to:t.hiddenStyle,isCleaning:!0,onTransitionEnd:{opacity:function(){this.isHidden&&this.css({display:"none"})}}})},a.prototype.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},a}var r=t.getComputedStyle,s=r?function(t){return r(t,null)}:function(t){return t.currentStyle};"function"==typeof define&&define.amd?define("outlayer/item",["eventEmitter/EventEmitter","get-size/get-size","get-style-property/get-style-property"],n):(t.Outlayer={},t.Outlayer.Item=n(t.EventEmitter,t.getSize,t.getStyleProperty))}(window),function(t){function e(t,e){for(var i in e)t[i]=e[i];return t}function i(t){return"[object Array]"===f.call(t)}function o(t){var e=[];if(i(t))e=t;else if(t&&"number"==typeof t.length)for(var o=0,n=t.length;n>o;o++)e.push(t[o]);else e.push(t);return e}function n(t,e){var i=l(e,t);-1!==i&&e.splice(i,1)}function r(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()}function s(i,s,f,l,c,y){function m(t,i){if("string"==typeof t&&(t=a.querySelector(t)),!t||!d(t))return u&&u.error("Bad "+this.constructor.namespace+" element: "+t),void 0;this.element=t,this.options=e({},this.constructor.defaults),this.option(i);var o=++g;this.element.outlayerGUID=o,v[o]=this,this._create(),this.options.isInitLayout&&this.layout()}var g=0,v={};return m.namespace="outlayer",m.Item=y,m.defaults={containerStyle:{position:"relative"},isInitLayout:!0,isOriginLeft:!0,isOriginTop:!0,isResizeBound:!0,isResizingContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}},e(m.prototype,f.prototype),m.prototype.option=function(t){e(this.options,t)},m.prototype._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),e(this.element.style,this.options.containerStyle),this.options.isResizeBound&&this.bindResize()},m.prototype.reloadItems=function(){this.items=this._itemize(this.element.children)},m.prototype._itemize=function(t){for(var e=this._filterFindItemElements(t),i=this.constructor.Item,o=[],n=0,r=e.length;r>n;n++){var s=e[n],a=new i(s,this);o.push(a)}return o},m.prototype._filterFindItemElements=function(t){t=o(t);for(var e=this.options.itemSelector,i=[],n=0,r=t.length;r>n;n++){var s=t[n];if(d(s))if(e){c(s,e)&&i.push(s);for(var a=s.querySelectorAll(e),u=0,p=a.length;p>u;u++)i.push(a[u])}else i.push(s)}return i},m.prototype.getItemElements=function(){for(var t=[],e=0,i=this.items.length;i>e;e++)t.push(this.items[e].element);return t},m.prototype.layout=function(){this._resetLayout(),this._manageStamps();var t=void 0!==this.options.isLayoutInstant?this.options.isLayoutInstant:!this._isLayoutInited;this.layoutItems(this.items,t),this._isLayoutInited=!0},m.prototype._init=m.prototype.layout,m.prototype._resetLayout=function(){this.getSize()},m.prototype.getSize=function(){this.size=l(this.element)},m.prototype._getMeasurement=function(t,e){var i,o=this.options[t];o?("string"==typeof o?i=this.element.querySelector(o):d(o)&&(i=o),this[t]=i?l(i)[e]:o):this[t]=0},m.prototype.layoutItems=function(t,e){t=this._getItemsForLayout(t),this._layoutItems(t,e),this._postLayout()},m.prototype._getItemsForLayout=function(t){for(var e=[],i=0,o=t.length;o>i;i++){var n=t[i];n.isIgnored||e.push(n)}return e},m.prototype._layoutItems=function(t,e){function i(){o.emitEvent("layoutComplete",[o,t])}var o=this;if(!t||!t.length)return i(),void 0;this._itemsOn(t,"layout",i);for(var n=[],r=0,s=t.length;s>r;r++){var a=t[r],u=this._getItemLayoutPosition(a);u.item=a,u.isInstant=e||a.isLayoutInstant,n.push(u)}this._processLayoutQueue(n)},m.prototype._getItemLayoutPosition=function(){return{x:0,y:0}},m.prototype._processLayoutQueue=function(t){for(var e=0,i=t.length;i>e;e++){var o=t[e];this._positionItem(o.item,o.x,o.y,o.isInstant)}},m.prototype._positionItem=function(t,e,i,o){o?t.goTo(e,i):t.moveTo(e,i)},m.prototype._postLayout=function(){this.resizeContainer()},m.prototype.resizeContainer=function(){if(this.options.isResizingContainer){var t=this._getContainerSize();t&&(this._setContainerMeasure(t.width,!0),this._setContainerMeasure(t.height,!1))}},m.prototype._getContainerSize=h,m.prototype._setContainerMeasure=function(t,e){if(void 0!==t){var i=this.size;i.isBorderBox&&(t+=e?i.paddingLeft+i.paddingRight+i.borderLeftWidth+i.borderRightWidth:i.paddingBottom+i.paddingTop+i.borderTopWidth+i.borderBottomWidth),t=Math.max(t,0),this.element.style[e?"width":"height"]=t+"px"}},m.prototype._itemsOn=function(t,e,i){function o(){return n++,n===r&&i.call(s),!0}for(var n=0,r=t.length,s=this,a=0,u=t.length;u>a;a++){var p=t[a];p.on(e,o)}},m.prototype.ignore=function(t){var e=this.getItem(t);e&&(e.isIgnored=!0)},m.prototype.unignore=function(t){var e=this.getItem(t);e&&delete e.isIgnored},m.prototype.stamp=function(t){if(t=this._find(t)){this.stamps=this.stamps.concat(t);for(var e=0,i=t.length;i>e;e++){var o=t[e];this.ignore(o)}}},m.prototype.unstamp=function(t){if(t=this._find(t))for(var e=0,i=t.length;i>e;e++){var o=t[e];n(o,this.stamps),this.unignore(o)}},m.prototype._find=function(t){return t?("string"==typeof t&&(t=this.element.querySelectorAll(t)),t=o(t)):void 0},m.prototype._manageStamps=function(){if(this.stamps&&this.stamps.length){this._getBoundingRect();for(var t=0,e=this.stamps.length;e>t;t++){var i=this.stamps[t];this._manageStamp(i)}}},m.prototype._getBoundingRect=function(){var t=this.element.getBoundingClientRect(),e=this.size;this._boundingRect={left:t.left+e.paddingLeft+e.borderLeftWidth,top:t.top+e.paddingTop+e.borderTopWidth,right:t.right-(e.paddingRight+e.borderRightWidth),bottom:t.bottom-(e.paddingBottom+e.borderBottomWidth)}},m.prototype._manageStamp=h,m.prototype._getElementOffset=function(t){var e=t.getBoundingClientRect(),i=this._boundingRect,o=l(t),n={left:e.left-i.left-o.marginLeft,top:e.top-i.top-o.marginTop,right:i.right-e.right-o.marginRight,bottom:i.bottom-e.bottom-o.marginBottom};return n},m.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},m.prototype.bindResize=function(){this.isResizeBound||(i.bind(t,"resize",this),this.isResizeBound=!0)},m.prototype.unbindResize=function(){this.isResizeBound&&i.unbind(t,"resize",this),this.isResizeBound=!1},m.prototype.onresize=function(){function t(){e.resize(),delete e.resizeTimeout}this.resizeTimeout&&clearTimeout(this.resizeTimeout);var e=this;this.resizeTimeout=setTimeout(t,100)},m.prototype.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},m.prototype.needsResizeLayout=function(){var t=l(this.element),e=this.size&&t;return e&&t.innerWidth!==this.size.innerWidth},m.prototype.addItems=function(t){var e=this._itemize(t);return e.length&&(this.items=this.items.concat(e)),e},m.prototype.appended=function(t){var e=this.addItems(t);e.length&&(this.layoutItems(e,!0),this.reveal(e))},m.prototype.prepended=function(t){var e=this._itemize(t);if(e.length){var i=this.items.slice(0);this.items=e.concat(i),this._resetLayout(),this._manageStamps(),this.layoutItems(e,!0),this.reveal(e),this.layoutItems(i)}},m.prototype.reveal=function(t){var e=t&&t.length;if(e)for(var i=0;e>i;i++){var o=t[i];o.reveal()}},m.prototype.hide=function(t){var e=t&&t.length;if(e)for(var i=0;e>i;i++){var o=t[i];o.hide()}},m.prototype.getItem=function(t){for(var e=0,i=this.items.length;i>e;e++){var o=this.items[e];if(o.element===t)return o}},m.prototype.getItems=function(t){if(t&&t.length){for(var e=[],i=0,o=t.length;o>i;i++){var n=t[i],r=this.getItem(n);r&&e.push(r)}return e}},m.prototype.remove=function(t){t=o(t);var e=this.getItems(t);if(e&&e.length){this._itemsOn(e,"remove",function(){this.emitEvent("removeComplete",[this,e])});for(var i=0,r=e.length;r>i;i++){var s=e[i];s.remove(),n(s,this.items)}}},m.prototype.destroy=function(){var t=this.element.style;t.height="",t.position="",t.width="";for(var e=0,i=this.items.length;i>e;e++){var o=this.items[e];o.destroy()}this.unbindResize(),delete this.element.outlayerGUID,p&&p.removeData(this.element,this.constructor.namespace)},m.data=function(t){var e=t&&t.outlayerGUID;return e&&v[e]},m.create=function(t,i){function o(){m.apply(this,arguments)}return Object.create?o.prototype=Object.create(m.prototype):e(o.prototype,m.prototype),o.prototype.constructor=o,o.defaults=e({},m.defaults),e(o.defaults,i),o.prototype.settings={},o.namespace=t,o.data=m.data,o.Item=function(){y.apply(this,arguments)},o.Item.prototype=new y,s(function(){for(var e=r(t),i=a.querySelectorAll(".js-"+e),n="data-"+e+"-options",s=0,h=i.length;h>s;s++){var f,d=i[s],l=d.getAttribute(n);try{f=l&&JSON.parse(l)}catch(c){u&&u.error("Error parsing "+n+" on "+d.nodeName.toLowerCase()+(d.id?"#"+d.id:"")+": "+c);continue}var y=new o(d,f);p&&p.data(d,t,y)}}),p&&p.bridget&&p.bridget(t,o),o},m.Item=y,m}var a=t.document,u=t.console,p=t.jQuery,h=function(){},f=Object.prototype.toString,d="object"==typeof HTMLElement?function(t){return t instanceof HTMLElement}:function(t){return t&&"object"==typeof t&&1===t.nodeType&&"string"==typeof t.nodeName},l=Array.prototype.indexOf?function(t,e){return t.indexOf(e)}:function(t,e){for(var i=0,o=t.length;o>i;i++)if(t[i]===e)return i;return-1};"function"==typeof define&&define.amd?define("outlayer/outlayer",["eventie/eventie","doc-ready/doc-ready","eventEmitter/EventEmitter","get-size/get-size","matches-selector/matches-selector","./item"],s):t.Outlayer=s(t.eventie,t.docReady,t.EventEmitter,t.getSize,t.matchesSelector,t.Outlayer.Item)}(window),function(t){function e(t){function e(){t.Item.apply(this,arguments)}e.prototype=new t.Item,e.prototype._create=function(){this.id=this.layout.itemGUID++,t.Item.prototype._create.call(this),this.sortData={}},e.prototype.updateSortData=function(){if(!this.isIgnored){this.sortData.id=this.id,this.sortData["original-order"]=this.id,this.sortData.random=Math.random();var t=this.layout.options.getSortData,e=this.layout._sorters;for(var i in t){var o=e[i];this.sortData[i]=o(this.element,this)}}};var i=e.prototype.destroy;return e.prototype.destroy=function(){i.apply(this,arguments),this.css({display:""})},e}"function"==typeof define&&define.amd?define("isotope/js/item",["outlayer/outlayer"],e):(t.Isotope=t.Isotope||{},t.Isotope.Item=e(t.Outlayer))}(window),function(t){function e(t,e){function i(t){this.isotope=t,t&&(this.options=t.options[this.namespace],this.element=t.element,this.items=t.filteredItems,this.size=t.size)}return function(){function t(t){return function(){return e.prototype[t].apply(this.isotope,arguments)}}for(var o=["_resetLayout","_getItemLayoutPosition","_manageStamp","_getContainerSize","_getElementOffset","needsResizeLayout"],n=0,r=o.length;r>n;n++){var s=o[n];i.prototype[s]=t(s)}}(),i.prototype.needsVerticalResizeLayout=function(){var e=t(this.isotope.element),i=this.isotope.size&&e;return i&&e.innerHeight!==this.isotope.size.innerHeight},i.prototype._getMeasurement=function(){this.isotope._getMeasurement.apply(this,arguments)},i.prototype.getColumnWidth=function(){this.getSegmentSize("column","Width")},i.prototype.getRowHeight=function(){this.getSegmentSize("row","Height")},i.prototype.getSegmentSize=function(t,e){var i=t+e,o="outer"+e;if(this._getMeasurement(i,o),!this[i]){var n=this.getFirstItemSize();this[i]=n&&n[o]||this.isotope.size["inner"+e]}},i.prototype.getFirstItemSize=function(){var e=this.isotope.filteredItems[0];return e&&e.element&&t(e.element)},i.prototype.layout=function(){this.isotope.layout.apply(this.isotope,arguments)},i.prototype.getSize=function(){this.isotope.getSize(),this.size=this.isotope.size},i.modes={},i.create=function(t,e){function o(){i.apply(this,arguments)}return o.prototype=new i,e&&(o.options=e),o.prototype.namespace=t,i.modes[t]=o,o},i}"function"==typeof define&&define.amd?define("isotope/js/layout-mode",["get-size/get-size","outlayer/outlayer"],e):(t.Isotope=t.Isotope||{},t.Isotope.LayoutMode=e(t.getSize,t.Outlayer))}(window),function(t){function e(t,e){var o=t.create("masonry");return o.prototype._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns();var t=this.cols;for(this.colYs=[];t--;)this.colYs.push(0);this.maxY=0},o.prototype.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var t=this.items[0],i=t&&t.element;this.columnWidth=i&&e(i).outerWidth||this.containerWidth}this.columnWidth+=this.gutter,this.cols=Math.floor((this.containerWidth+this.gutter)/this.columnWidth),this.cols=Math.max(this.cols,1)},o.prototype.getContainerWidth=function(){var t=this.options.isFitWidth?this.element.parentNode:this.element,i=e(t);this.containerWidth=i&&i.innerWidth},o.prototype._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth%this.columnWidth,o=e&&1>e?"round":"ceil",n=Math[o](t.size.outerWidth/this.columnWidth);n=Math.min(n,this.cols);for(var r=this._getColGroup(n),s=Math.min.apply(Math,r),a=i(r,s),u={x:this.columnWidth*a,y:s},p=s+t.size.outerHeight,h=this.cols+1-r.length,f=0;h>f;f++)this.colYs[a+f]=p;return u},o.prototype._getColGroup=function(t){if(2>t)return this.colYs;for(var e=[],i=this.cols+1-t,o=0;i>o;o++){var n=this.colYs.slice(o,o+t);e[o]=Math.max.apply(Math,n)}return e},o.prototype._manageStamp=function(t){var i=e(t),o=this._getElementOffset(t),n=this.options.isOriginLeft?o.left:o.right,r=n+i.outerWidth,s=Math.floor(n/this.columnWidth);s=Math.max(0,s);var a=Math.floor(r/this.columnWidth);a-=r%this.columnWidth?0:1,a=Math.min(this.cols-1,a);for(var u=(this.options.isOriginTop?o.top:o.bottom)+i.outerHeight,p=s;a>=p;p++)this.colYs[p]=Math.max(u,this.colYs[p])},o.prototype._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var t={height:this.maxY};return this.options.isFitWidth&&(t.width=this._getContainerFitWidth()),t},o.prototype._getContainerFitWidth=function(){for(var t=0,e=this.cols;--e&&0===this.colYs[e];)t++;return(this.cols-t)*this.columnWidth-this.gutter},o.prototype.needsResizeLayout=function(){var t=this.containerWidth;return this.getContainerWidth(),t!==this.containerWidth},o}var i=Array.prototype.indexOf?function(t,e){return t.indexOf(e)}:function(t,e){for(var i=0,o=t.length;o>i;i++){var n=t[i];if(n===e)return i}return-1};"function"==typeof define&&define.amd?define("masonry/masonry",["outlayer/outlayer","get-size/get-size"],e):t.Masonry=e(t.Outlayer,t.getSize)}(window),function(t){function e(t,e){for(var i in e)t[i]=e[i];return t}function i(t,i){var o=t.create("masonry"),n=o.prototype._getElementOffset,r=o.prototype.layout,s=o.prototype._getMeasurement;e(o.prototype,i.prototype),o.prototype._getElementOffset=n,o.prototype.layout=r,o.prototype._getMeasurement=s;var a=o.prototype.measureColumns;o.prototype.measureColumns=function(){this.items=this.isotope.filteredItems,a.call(this)};var u=o.prototype._manageStamp;return o.prototype._manageStamp=function(){this.options.isOriginLeft=this.isotope.options.isOriginLeft,this.options.isOriginTop=this.isotope.options.isOriginTop,u.apply(this,arguments)},o}"function"==typeof define&&define.amd?define("isotope/js/layout-modes/masonry",["../layout-mode","masonry/masonry"],i):i(t.Isotope.LayoutMode,t.Masonry)}(window),function(t){function e(t){var e=t.create("fitRows");return e.prototype._resetLayout=function(){this.x=0,this.y=0,this.maxY=0},e.prototype._getItemLayoutPosition=function(t){t.getSize(),0!==this.x&&t.size.outerWidth+this.x>this.isotope.size.innerWidth&&(this.x=0,this.y=this.maxY);var e={x:this.x,y:this.y};return this.maxY=Math.max(this.maxY,this.y+t.size.outerHeight),this.x+=t.size.outerWidth,e},e.prototype._getContainerSize=function(){return{height:this.maxY}},e}"function"==typeof define&&define.amd?define("isotope/js/layout-modes/fit-rows",["../layout-mode"],e):e(t.Isotope.LayoutMode)}(window),function(t){function e(t){var e=t.create("vertical",{horizontalAlignment:0});return e.prototype._resetLayout=function(){this.y=0},e.prototype._getItemLayoutPosition=function(t){t.getSize();var e=(this.isotope.size.innerWidth-t.size.outerWidth)*this.options.horizontalAlignment,i=this.y;return this.y+=t.size.outerHeight,{x:e,y:i}},e.prototype._getContainerSize=function(){return{height:this.y}},e}"function"==typeof define&&define.amd?define("isotope/js/layout-modes/vertical",["../layout-mode"],e):e(t.Isotope.LayoutMode)}(window),function(t){function e(t,e){for(var i in e)t[i]=e[i];return t}function i(t){return"[object Array]"===h.call(t)}function o(t){var e=[];if(i(t))e=t;else if(t&&"number"==typeof t.length)for(var o=0,n=t.length;n>o;o++)e.push(t[o]);else e.push(t);return e}function n(t,e){var i=f(e,t);-1!==i&&e.splice(i,1)}function r(t,i,r,u,h){function f(t,e){return function(i,o){for(var n=0,r=t.length;r>n;n++){var s=t[n],a=i.sortData[s],u=o.sortData[s];if(a>u||u>a){var p=void 0!==e[s]?e[s]:e,h=p?1:-1;return(a>u?1:-1)*h}}return 0}}var d=t.create("isotope",{layoutMode:"masonry",isJQueryFiltering:!0,sortAscending:!0});d.Item=u,d.LayoutMode=h,d.prototype._create=function(){this.itemGUID=0,this._sorters={},this._getSorters(),t.prototype._create.call(this),this.modes={},this.filteredItems=this.items,this.sortHistory=["original-order"];for(var e in h.modes)this._initLayoutMode(e)},d.prototype.reloadItems=function(){this.itemGUID=0,t.prototype.reloadItems.call(this)},d.prototype._itemize=function(){for(var e=t.prototype._itemize.apply(this,arguments),i=0,o=e.length;o>i;i++){var n=e[i];n.id=this.itemGUID++}return this._updateItemsSortData(e),e},d.prototype._initLayoutMode=function(t){var i=h.modes[t],o=this.options[t]||{};this.options[t]=i.options?e(i.options,o):o,this.modes[t]=new i(this)},d.prototype.layout=function(){return!this._isLayoutInited&&this.options.isInitLayout?(this.arrange(),void 0):(this._layout(),void 0)},d.prototype._layout=function(){var t=this._getIsInstant();this._resetLayout(),this._manageStamps(),this.layoutItems(this.filteredItems,t),this._isLayoutInited=!0},d.prototype.arrange=function(t){this.option(t),this._getIsInstant(),this.filteredItems=this._filter(this.items),this._sort(),this._layout()},d.prototype._init=d.prototype.arrange,d.prototype._getIsInstant=function(){var t=void 0!==this.options.isLayoutInstant?this.options.isLayoutInstant:!this._isLayoutInited;return this._isInstant=t,t},d.prototype._filter=function(t){function e(){f.reveal(n),f.hide(r)}var i=this.options.filter;i=i||"*";for(var o=[],n=[],r=[],s=this._getFilterTest(i),a=0,u=t.length;u>a;a++){var p=t[a];if(!p.isIgnored){var h=s(p);h&&o.push(p),h&&p.isHidden?n.push(p):h||p.isHidden||r.push(p)}}var f=this;return this._isInstant?this._noTransition(e):e(),o},d.prototype._getFilterTest=function(t){return s&&this.options.isJQueryFiltering?function(e){return s(e.element).is(t)}:"function"==typeof t?function(e){return t(e.element)}:function(e){return r(e.element,t)}},d.prototype.updateSortData=function(t){this._getSorters(),t=o(t);
var e=this.getItems(t);e=e.length?e:this.items,this._updateItemsSortData(e)},d.prototype._getSorters=function(){var t=this.options.getSortData;for(var e in t){var i=t[e];this._sorters[e]=l(i)}},d.prototype._updateItemsSortData=function(t){for(var e=0,i=t.length;i>e;e++){var o=t[e];o.updateSortData()}};var l=function(){function t(t){if("string"!=typeof t)return t;var i=a(t).split(" "),o=i[0],n=o.match(/^\[(.+)\]$/),r=n&&n[1],s=e(r,o),u=d.sortDataParsers[i[1]];return t=u?function(t){return t&&u(s(t))}:function(t){return t&&s(t)}}function e(t,e){var i;return i=t?function(e){return e.getAttribute(t)}:function(t){var i=t.querySelector(e);return i&&p(i)}}return t}();d.sortDataParsers={parseInt:function(t){return parseInt(t,10)},parseFloat:function(t){return parseFloat(t)}},d.prototype._sort=function(){var t=this.options.sortBy;if(t){var e=[].concat.apply(t,this.sortHistory),i=f(e,this.options.sortAscending);this.filteredItems.sort(i),t!==this.sortHistory[0]&&this.sortHistory.unshift(t)}},d.prototype._mode=function(){var t=this.options.layoutMode,e=this.modes[t];if(!e)throw Error("No layout mode: "+t);return e.options=this.options[t],e},d.prototype._resetLayout=function(){t.prototype._resetLayout.call(this),this._mode()._resetLayout()},d.prototype._getItemLayoutPosition=function(t){return this._mode()._getItemLayoutPosition(t)},d.prototype._manageStamp=function(t){this._mode()._manageStamp(t)},d.prototype._getContainerSize=function(){return this._mode()._getContainerSize()},d.prototype.needsResizeLayout=function(){return this._mode().needsResizeLayout()},d.prototype.appended=function(t){var e=this.addItems(t);if(e.length){var i=this._filterRevealAdded(e);this.filteredItems=this.filteredItems.concat(i)}},d.prototype.prepended=function(t){var e=this._itemize(t);if(e.length){var i=this.items.slice(0);this.items=e.concat(i),this._resetLayout(),this._manageStamps();var o=this._filterRevealAdded(e);this.layoutItems(i),this.filteredItems=o.concat(this.filteredItems)}},d.prototype._filterRevealAdded=function(t){var e=this._noTransition(function(){return this._filter(t)});return this.layoutItems(e,!0),this.reveal(e),t},d.prototype.insert=function(t){var e=this.addItems(t);if(e.length){var i,o,n=e.length;for(i=0;n>i;i++)o=e[i],this.element.appendChild(o.element);var r=this._filter(e);for(this._noTransition(function(){this.hide(r)}),i=0;n>i;i++)e[i].isLayoutInstant=!0;for(this.arrange(),i=0;n>i;i++)delete e[i].isLayoutInstant;this.reveal(r)}};var c=d.prototype.remove;return d.prototype.remove=function(t){t=o(t);var e=this.getItems(t);if(c.call(this,t),e&&e.length)for(var i=0,r=e.length;r>i;i++){var s=e[i];n(s,this.filteredItems)}},d.prototype.shuffle=function(){for(var t=0,e=this.items.length;e>t;t++){var i=this.items[t];i.sortData.random=Math.random()}this.options.sortBy="random",this._sort(),this._layout()},d.prototype._noTransition=function(t){var e=this.options.transitionDuration;this.options.transitionDuration=0;var i=t.call(this);return this.options.transitionDuration=e,i},d.prototype.getFilteredItemElements=function(){for(var t=[],e=0,i=this.filteredItems.length;i>e;e++)t.push(this.filteredItems[e].element);return t},d}var s=t.jQuery,a=String.prototype.trim?function(t){return t.trim()}:function(t){return t.replace(/^\s+|\s+$/g,"")},u=document.documentElement,p=u.textContent?function(t){return t.textContent}:function(t){return t.innerText},h=Object.prototype.toString,f=Array.prototype.indexOf?function(t,e){return t.indexOf(e)}:function(t,e){for(var i=0,o=t.length;o>i;i++)if(t[i]===e)return i;return-1};"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size","matches-selector/matches-selector","isotope/js/item","isotope/js/layout-mode","isotope/js/layout-modes/masonry","isotope/js/layout-modes/fit-rows","isotope/js/layout-modes/vertical"],r):t.Isotope=r(t.Outlayer,t.getSize,t.matchesSelector,t.Isotope.Item,t.Isotope.LayoutMode)}(window);;
/*
* jPreLoader - jQuery plugin
* Create a Loading Screen to preload images and content for you website
*
* Name:        jPreLoader.js
* Author:      Kenny Ooi - http://www.inwebson.com
* Date:        July 11, 2012     
* Version:     2.1
* Example:     http://www.inwebson.com/demo/jpreloader-v2/
*  
*/

(function($) {
   var items = new Array(),
      errors = new Array(),
      onComplete = function() {},
      current = 0;
   
   var jpreOptions = {
      splashVPos: '35%',
      loaderVPos: '75%',
      splashID: '#jpreContent',
      showSplash: true,
      showPercentage: true,
      autoClose: true,
      closeBtnText: 'Start!',
      onetimeLoad: false,
      debugMode: false,
      splashFunction: function() {}
   }
   
   //cookie
   var getCookie = function() {
      if( jpreOptions.onetimeLoad ) {
         var cookies = document.cookie.split('; ');
         for (var i = 0, parts; (parts = cookies[i] && cookies[i].split('=')); i++) {
            if ((parts.shift()) === "jpreLoader") {
               return (parts.join('='));
            }
         }
         return false;
      } else {
         return false;
      }
      
   }
   var setCookie = function(expires) {
      if( jpreOptions.onetimeLoad ) {
         var exdate = new Date();
         exdate.setDate( exdate.getDate() + expires );
         var c_value = ((expires==null) ? "" : "expires=" + exdate.toUTCString());
         document.cookie="jpreLoader=loaded; " + c_value;
      }
   }
   
   //create jpreLoader UI
   var createContainer = function() {
      
      jOverlay = $('<div></div>')
      .attr('id', 'jpreOverlay')
      .css({
         position: "fixed",
         top: 0,
         left: 0,
         width: '100%',
         height: '100%',
         zIndex: 9999999
      })
      .appendTo('body');
      
      if(jpreOptions.showSplash) {
         jContent = $('<div></div>')
         .attr('id', 'jpreSlide')
         .appendTo(jOverlay);
         
         var conWidth = $(window).width() - $(jContent).width();
         $(jContent).css({
            position: "absolute",
            top: jpreOptions.splashVPos,
            left: Math.round((50 / $(window).width()) * conWidth) + '%'
         });
         $(jContent).html($(jpreOptions.splashID).wrap('<div/>').parent().html());
         $(jpreOptions.splashID).remove();
         jpreOptions.splashFunction()        
      }
      
      jLoader = $('<div></div>')
      .attr('id', 'jpreLoader')
      .appendTo(jOverlay);
      
      var posWidth = $(window).width() - $(jLoader).width();
      $(jLoader).css({
         position: 'absolute',
         top: jpreOptions.loaderVPos,
         left: Math.round((50 / $(window).width()) * posWidth) + '%'
      });
      
      jBar = $('<div></div>')
      .attr('id', 'jpreBar')
      .css({
         width: '0%',
         height: '100%'
      })
      .appendTo(jLoader);
      
      if(jpreOptions.showPercentage) {
         jPer = $('<div></div>')
         .attr('id', 'jprePercentage')
         .css({
            position: 'relative',
            height: '100%'
         })
         .appendTo(jLoader)
         .html('Loading...');
      }
      if( !jpreOptions.autoclose ) {
         jButton = $('<div></div>')
         .attr('id', 'jpreButton')
         .on('click', function() {
            loadComplete();
         })
         .css({
            position: 'relative',
            height: '100%'
         })
         .appendTo(jLoader)
         .text(jpreOptions.closeBtnText)
         .hide();
      }
   }
   
   //get all images from css and <img> tag
   var getImages = function(element) {
      $(element).find('*:not(script)').each(function() {
         var url = "";

         if ($(this).css('background-image').indexOf('none') == -1 && $(this).css('background-image').indexOf('-gradient') == -1) {
            url = $(this).css('background-image');
            if(url.indexOf('url') != -1) {
               var temp = url.match(/url\((.*?)\)/);
               url = temp[1].replace(/\"/g, '');
            }
         } else if ($(this).get(0).nodeName.toLowerCase() == 'img' && typeof($(this).attr('src')) != 'undefined') {
            url = $(this).attr('src');
         }
         
         if (url.length > 0) {
            items.push(url);
         }
      });
   }
   
   //create preloaded image
   var preloading = function() {
      for (var i = 0; i < items.length; i++) {
         if(loadImg(items[i]));
      }
   }
   var loadImg = function(url) {
      var imgLoad = new Image();
      
      $(imgLoad).on('load', function(){
         completeLoading();
      })
      .on('error', function(){
         errors.push($(this).attr('src'));
         completeLoading();
      })
      .attr('src', url);
   }
   
   //update progress bar once image loaded
   var completeLoading = function() {
      current++;

      var per = Math.round((current / items.length) * 100);
      $(jBar).stop().animate({
         width: per + '%'
      }, 500, 'linear');
      
      if(jpreOptions.showPercentage) {
         $(jPer).text(per+"%");
      }
      
      //if all images loaded
      if(current >= items.length) {
         current = items.length;
         setCookie();   //create cookie
         
         if(jpreOptions.showPercentage) {
            $(jPer).text("100%");
         }
         
         //fire debug mode
         if (jpreOptions.debugMode) {
            var error = debug();
         }
         
         
         //max progress bar
         $(jBar).stop().animate({
            width: '100%'
         }, 500, 'linear', function() {
            //autoclose on
            if( jpreOptions.autoClose )
               loadComplete();
            else
               $(jButton).fadeIn(1000);
         });   
      }  
   }
   
   //triggered when all images are loaded
   var loadComplete = function() {
      $(jOverlay).fadeOut(800, function() {
         $(jOverlay).remove();
         onComplete();  //callback function
      });
   }
   
   //debug mode
   var debug = function() {
      if(errors.length > 0) {
         var str = 'ERROR - IMAGE FILES MISSING!!!\n\r'
         str   += errors.length + ' image files cound not be found. \n\r'; 
         str += 'Please check your image paths and filenames:\n\r';
         for (var i = 0; i < errors.length; i++) {
            str += '- ' + errors[i] + '\n\r';
         }
         return true;
      } else {
         return false;
      }
   }
   
   $.fn.jpreLoader = function(options, callback) {
        if(options) {
            $.extend(jpreOptions, options );
        }
      if(typeof callback == 'function') {
         onComplete = callback;
      }
      
      //show preloader once JS loaded
      $('body').css({
         'display': 'block'
      });
      
      return this.each(function() {
         if( !(getCookie()) ) {
            createContainer();
            getImages(this);
            preloading();
         }
         else {   //onetime load / cookie is set
            $(jpreOptions.splashID).remove();
            onComplete();
         }
      });
    };

})(jQuery);;
/**
 * jQuery Unveil
 * A very lightweight jQuery plugin to lazy load images
 * http://luis-almeida.github.com/unveil
 *
 * Licensed under the MIT license.
 * Copyright 2013 Luís Almeida
 * https://github.com/luis-almeida
 */

;(function($) {

  $.fn.unveil = function(threshold, callback) {

    var $w = $(window),
        th = threshold || 0,
        retina = window.devicePixelRatio > 1,
        attrib = retina? "data-src-retina" : "data-src",
        images = this,
        loaded;

    this.one("unveil", function() {
      var source = this.getAttribute(attrib);
      source = source || this.getAttribute("data-src");
      if (source) {
        this.setAttribute("src", source);
        if (typeof callback === "function") callback.call(this);
      }
    });

    function unveil() {
      var inview = images.filter(function() {
        var $e = $(this);
        if ($e.is(":hidden")) return;

        var wt = $w.scrollTop(),
            wb = wt + $w.height(),
            et = $e.offset().top,
            eb = et + $e.height();

        return eb >= wt - th && et <= wb + th;
      });

      loaded = inview.trigger("unveil");
      images = images.not(loaded);
    }

    $w.on("scroll.unveil resize.unveil lookup.unveil", unveil);

    unveil();

    return this;

  };

})(window.jQuery || window.Zepto);
;
/*! Magnific Popup - v1.1.0 - 2016-02-20
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2016 Dmitry Semenov; */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):window.jQuery||window.Zepto)}(function(a){var b,c,d,e,f,g,h="Close",i="BeforeClose",j="AfterClose",k="BeforeAppend",l="MarkupParse",m="Open",n="Change",o="mfp",p="."+o,q="mfp-ready",r="mfp-removing",s="mfp-prevent-close",t=function(){},u=!!window.jQuery,v=a(window),w=function(a,c){b.ev.on(o+a+p,c)},x=function(b,c,d,e){var f=document.createElement("div");return f.className="mfp-"+b,d&&(f.innerHTML=d),e?c&&c.appendChild(f):(f=a(f),c&&f.appendTo(c)),f},y=function(c,d){b.ev.triggerHandler(o+c,d),b.st.callbacks&&(c=c.charAt(0).toLowerCase()+c.slice(1),b.st.callbacks[c]&&b.st.callbacks[c].apply(b,a.isArray(d)?d:[d]))},z=function(c){return c===g&&b.currTemplate.closeBtn||(b.currTemplate.closeBtn=a(b.st.closeMarkup.replace("%title%",b.st.tClose)),g=c),b.currTemplate.closeBtn},A=function(){a.magnificPopup.instance||(b=new t,b.init(),a.magnificPopup.instance=b)},B=function(){var a=document.createElement("p").style,b=["ms","O","Moz","Webkit"];if(void 0!==a.transition)return!0;for(;b.length;)if(b.pop()+"Transition"in a)return!0;return!1};t.prototype={constructor:t,init:function(){var c=navigator.appVersion;b.isLowIE=b.isIE8=document.all&&!document.addEventListener,b.isAndroid=/android/gi.test(c),b.isIOS=/iphone|ipad|ipod/gi.test(c),b.supportsTransition=B(),b.probablyMobile=b.isAndroid||b.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),d=a(document),b.popupsCache={}},open:function(c){var e;if(c.isObj===!1){b.items=c.items.toArray(),b.index=0;var g,h=c.items;for(e=0;e<h.length;e++)if(g=h[e],g.parsed&&(g=g.el[0]),g===c.el[0]){b.index=e;break}}else b.items=a.isArray(c.items)?c.items:[c.items],b.index=c.index||0;if(b.isOpen)return void b.updateItemHTML();b.types=[],f="",c.mainEl&&c.mainEl.length?b.ev=c.mainEl.eq(0):b.ev=d,c.key?(b.popupsCache[c.key]||(b.popupsCache[c.key]={}),b.currTemplate=b.popupsCache[c.key]):b.currTemplate={},b.st=a.extend(!0,{},a.magnificPopup.defaults,c),b.fixedContentPos="auto"===b.st.fixedContentPos?!b.probablyMobile:b.st.fixedContentPos,b.st.modal&&(b.st.closeOnContentClick=!1,b.st.closeOnBgClick=!1,b.st.showCloseBtn=!1,b.st.enableEscapeKey=!1),b.bgOverlay||(b.bgOverlay=x("bg").on("click"+p,function(){b.close()}),b.wrap=x("wrap").attr("tabindex",-1).on("click"+p,function(a){b._checkIfClose(a.target)&&b.close()}),b.container=x("container",b.wrap)),b.contentContainer=x("content"),b.st.preloader&&(b.preloader=x("preloader",b.container,b.st.tLoading));var i=a.magnificPopup.modules;for(e=0;e<i.length;e++){var j=i[e];j=j.charAt(0).toUpperCase()+j.slice(1),b["init"+j].call(b)}y("BeforeOpen"),b.st.showCloseBtn&&(b.st.closeBtnInside?(w(l,function(a,b,c,d){c.close_replaceWith=z(d.type)}),f+=" mfp-close-btn-in"):b.wrap.append(z())),b.st.alignTop&&(f+=" mfp-align-top"),b.fixedContentPos?b.wrap.css({overflow:b.st.overflowY,overflowX:"hidden",overflowY:b.st.overflowY}):b.wrap.css({top:v.scrollTop(),position:"absolute"}),(b.st.fixedBgPos===!1||"auto"===b.st.fixedBgPos&&!b.fixedContentPos)&&b.bgOverlay.css({height:d.height(),position:"absolute"}),b.st.enableEscapeKey&&d.on("keyup"+p,function(a){27===a.keyCode&&b.close()}),v.on("resize"+p,function(){b.updateSize()}),b.st.closeOnContentClick||(f+=" mfp-auto-cursor"),f&&b.wrap.addClass(f);var k=b.wH=v.height(),n={};if(b.fixedContentPos&&b._hasScrollBar(k)){var o=b._getScrollbarSize();o&&(n.marginRight=o)}b.fixedContentPos&&(b.isIE7?a("body, html").css("overflow","hidden"):n.overflow="hidden");var r=b.st.mainClass;return b.isIE7&&(r+=" mfp-ie7"),r&&b._addClassToMFP(r),b.updateItemHTML(),y("BuildControls"),a("html").css(n),b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo||a(document.body)),b._lastFocusedEl=document.activeElement,setTimeout(function(){b.content?(b._addClassToMFP(q),b._setFocus()):b.bgOverlay.addClass(q),d.on("focusin"+p,b._onFocusIn)},16),b.isOpen=!0,b.updateSize(k),y(m),c},close:function(){b.isOpen&&(y(i),b.isOpen=!1,b.st.removalDelay&&!b.isLowIE&&b.supportsTransition?(b._addClassToMFP(r),setTimeout(function(){b._close()},b.st.removalDelay)):b._close())},_close:function(){y(h);var c=r+" "+q+" ";if(b.bgOverlay.detach(),b.wrap.detach(),b.container.empty(),b.st.mainClass&&(c+=b.st.mainClass+" "),b._removeClassFromMFP(c),b.fixedContentPos){var e={marginRight:""};b.isIE7?a("body, html").css("overflow",""):e.overflow="",a("html").css(e)}d.off("keyup"+p+" focusin"+p),b.ev.off(p),b.wrap.attr("class","mfp-wrap").removeAttr("style"),b.bgOverlay.attr("class","mfp-bg"),b.container.attr("class","mfp-container"),!b.st.showCloseBtn||b.st.closeBtnInside&&b.currTemplate[b.currItem.type]!==!0||b.currTemplate.closeBtn&&b.currTemplate.closeBtn.detach(),b.st.autoFocusLast&&b._lastFocusedEl&&a(b._lastFocusedEl).focus(),b.currItem=null,b.content=null,b.currTemplate=null,b.prevHeight=0,y(j)},updateSize:function(a){if(b.isIOS){var c=document.documentElement.clientWidth/window.innerWidth,d=window.innerHeight*c;b.wrap.css("height",d),b.wH=d}else b.wH=a||v.height();b.fixedContentPos||b.wrap.css("height",b.wH),y("Resize")},updateItemHTML:function(){var c=b.items[b.index];b.contentContainer.detach(),b.content&&b.content.detach(),c.parsed||(c=b.parseEl(b.index));var d=c.type;if(y("BeforeChange",[b.currItem?b.currItem.type:"",d]),b.currItem=c,!b.currTemplate[d]){var f=b.st[d]?b.st[d].markup:!1;y("FirstMarkupParse",f),f?b.currTemplate[d]=a(f):b.currTemplate[d]=!0}e&&e!==c.type&&b.container.removeClass("mfp-"+e+"-holder");var g=b["get"+d.charAt(0).toUpperCase()+d.slice(1)](c,b.currTemplate[d]);b.appendContent(g,d),c.preloaded=!0,y(n,c),e=c.type,b.container.prepend(b.contentContainer),y("AfterChange")},appendContent:function(a,c){b.content=a,a?b.st.showCloseBtn&&b.st.closeBtnInside&&b.currTemplate[c]===!0?b.content.find(".mfp-close").length||b.content.append(z()):b.content=a:b.content="",y(k),b.container.addClass("mfp-"+c+"-holder"),b.contentContainer.append(b.content)},parseEl:function(c){var d,e=b.items[c];if(e.tagName?e={el:a(e)}:(d=e.type,e={data:e,src:e.src}),e.el){for(var f=b.types,g=0;g<f.length;g++)if(e.el.hasClass("mfp-"+f[g])){d=f[g];break}e.src=e.el.attr("data-mfp-src"),e.src||(e.src=e.el.attr("href"))}return e.type=d||b.st.type||"inline",e.index=c,e.parsed=!0,b.items[c]=e,y("ElementParse",e),b.items[c]},addGroup:function(a,c){var d=function(d){d.mfpEl=this,b._openClick(d,a,c)};c||(c={});var e="click.magnificPopup";c.mainEl=a,c.items?(c.isObj=!0,a.off(e).on(e,d)):(c.isObj=!1,c.delegate?a.off(e).on(e,c.delegate,d):(c.items=a,a.off(e).on(e,d)))},_openClick:function(c,d,e){var f=void 0!==e.midClick?e.midClick:a.magnificPopup.defaults.midClick;if(f||!(2===c.which||c.ctrlKey||c.metaKey||c.altKey||c.shiftKey)){var g=void 0!==e.disableOn?e.disableOn:a.magnificPopup.defaults.disableOn;if(g)if(a.isFunction(g)){if(!g.call(b))return!0}else if(v.width()<g)return!0;c.type&&(c.preventDefault(),b.isOpen&&c.stopPropagation()),e.el=a(c.mfpEl),e.delegate&&(e.items=d.find(e.delegate)),b.open(e)}},updateStatus:function(a,d){if(b.preloader){c!==a&&b.container.removeClass("mfp-s-"+c),d||"loading"!==a||(d=b.st.tLoading);var e={status:a,text:d};y("UpdateStatus",e),a=e.status,d=e.text,b.preloader.html(d),b.preloader.find("a").on("click",function(a){a.stopImmediatePropagation()}),b.container.addClass("mfp-s-"+a),c=a}},_checkIfClose:function(c){if(!a(c).hasClass(s)){var d=b.st.closeOnContentClick,e=b.st.closeOnBgClick;if(d&&e)return!0;if(!b.content||a(c).hasClass("mfp-close")||b.preloader&&c===b.preloader[0])return!0;if(c===b.content[0]||a.contains(b.content[0],c)){if(d)return!0}else if(e&&a.contains(document,c))return!0;return!1}},_addClassToMFP:function(a){b.bgOverlay.addClass(a),b.wrap.addClass(a)},_removeClassFromMFP:function(a){this.bgOverlay.removeClass(a),b.wrap.removeClass(a)},_hasScrollBar:function(a){return(b.isIE7?d.height():document.body.scrollHeight)>(a||v.height())},_setFocus:function(){(b.st.focus?b.content.find(b.st.focus).eq(0):b.wrap).focus()},_onFocusIn:function(c){return c.target===b.wrap[0]||a.contains(b.wrap[0],c.target)?void 0:(b._setFocus(),!1)},_parseMarkup:function(b,c,d){var e;d.data&&(c=a.extend(d.data,c)),y(l,[b,c,d]),a.each(c,function(c,d){if(void 0===d||d===!1)return!0;if(e=c.split("_"),e.length>1){var f=b.find(p+"-"+e[0]);if(f.length>0){var g=e[1];"replaceWith"===g?f[0]!==d[0]&&f.replaceWith(d):"img"===g?f.is("img")?f.attr("src",d):f.replaceWith(a("<img>").attr("src",d).attr("class",f.attr("class"))):f.attr(e[1],d)}}else b.find(p+"-"+c).html(d)})},_getScrollbarSize:function(){if(void 0===b.scrollbarSize){var a=document.createElement("div");a.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(a),b.scrollbarSize=a.offsetWidth-a.clientWidth,document.body.removeChild(a)}return b.scrollbarSize}},a.magnificPopup={instance:null,proto:t.prototype,modules:[],open:function(b,c){return A(),b=b?a.extend(!0,{},b):{},b.isObj=!0,b.index=c||0,this.instance.open(b)},close:function(){return a.magnificPopup.instance&&a.magnificPopup.instance.close()},registerModule:function(b,c){c.options&&(a.magnificPopup.defaults[b]=c.options),a.extend(this.proto,c.proto),this.modules.push(b)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&#215;</button>',tClose:"Close (Esc)",tLoading:"Loading...",autoFocusLast:!0}},a.fn.magnificPopup=function(c){A();var d=a(this);if("string"==typeof c)if("open"===c){var e,f=u?d.data("magnificPopup"):d[0].magnificPopup,g=parseInt(arguments[1],10)||0;f.items?e=f.items[g]:(e=d,f.delegate&&(e=e.find(f.delegate)),e=e.eq(g)),b._openClick({mfpEl:e},d,f)}else b.isOpen&&b[c].apply(b,Array.prototype.slice.call(arguments,1));else c=a.extend(!0,{},c),u?d.data("magnificPopup",c):d[0].magnificPopup=c,b.addGroup(d,c);return d};var C,D,E,F="inline",G=function(){E&&(D.after(E.addClass(C)).detach(),E=null)};a.magnificPopup.registerModule(F,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){b.types.push(F),w(h+"."+F,function(){G()})},getInline:function(c,d){if(G(),c.src){var e=b.st.inline,f=a(c.src);if(f.length){var g=f[0].parentNode;g&&g.tagName&&(D||(C=e.hiddenClass,D=x(C),C="mfp-"+C),E=f.after(D).detach().removeClass(C)),b.updateStatus("ready")}else b.updateStatus("error",e.tNotFound),f=a("<div>");return c.inlineElement=f,f}return b.updateStatus("ready"),b._parseMarkup(d,{},c),d}}});var H,I="ajax",J=function(){H&&a(document.body).removeClass(H)},K=function(){J(),b.req&&b.req.abort()};a.magnificPopup.registerModule(I,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){b.types.push(I),H=b.st.ajax.cursor,w(h+"."+I,K),w("BeforeChange."+I,K)},getAjax:function(c){H&&a(document.body).addClass(H),b.updateStatus("loading");var d=a.extend({url:c.src,success:function(d,e,f){var g={data:d,xhr:f};y("ParseAjax",g),b.appendContent(a(g.data),I),c.finished=!0,J(),b._setFocus(),setTimeout(function(){b.wrap.addClass(q)},16),b.updateStatus("ready"),y("AjaxContentAdded")},error:function(){J(),c.finished=c.loadError=!0,b.updateStatus("error",b.st.ajax.tError.replace("%url%",c.src))}},b.st.ajax.settings);return b.req=a.ajax(d),""}}});var L,M=function(c){if(c.data&&void 0!==c.data.title)return c.data.title;var d=b.st.image.titleSrc;if(d){if(a.isFunction(d))return d.call(b,c);if(c.el)return c.el.attr(d)||""}return""};a.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var c=b.st.image,d=".image";b.types.push("image"),w(m+d,function(){"image"===b.currItem.type&&c.cursor&&a(document.body).addClass(c.cursor)}),w(h+d,function(){c.cursor&&a(document.body).removeClass(c.cursor),v.off("resize"+p)}),w("Resize"+d,b.resizeImage),b.isLowIE&&w("AfterChange",b.resizeImage)},resizeImage:function(){var a=b.currItem;if(a&&a.img&&b.st.image.verticalFit){var c=0;b.isLowIE&&(c=parseInt(a.img.css("padding-top"),10)+parseInt(a.img.css("padding-bottom"),10)),a.img.css("max-height",b.wH-c)}},_onImageHasSize:function(a){a.img&&(a.hasSize=!0,L&&clearInterval(L),a.isCheckingImgSize=!1,y("ImageHasSize",a),a.imgHidden&&(b.content&&b.content.removeClass("mfp-loading"),a.imgHidden=!1))},findImageSize:function(a){var c=0,d=a.img[0],e=function(f){L&&clearInterval(L),L=setInterval(function(){return d.naturalWidth>0?void b._onImageHasSize(a):(c>200&&clearInterval(L),c++,void(3===c?e(10):40===c?e(50):100===c&&e(500)))},f)};e(1)},getImage:function(c,d){var e=0,f=function(){c&&(c.img[0].complete?(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("ready")),c.hasSize=!0,c.loaded=!0,y("ImageLoadComplete")):(e++,200>e?setTimeout(f,100):g()))},g=function(){c&&(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("error",h.tError.replace("%url%",c.src))),c.hasSize=!0,c.loaded=!0,c.loadError=!0)},h=b.st.image,i=d.find(".mfp-img");if(i.length){var j=document.createElement("img");j.className="mfp-img",c.el&&c.el.find("img").length&&(j.alt=c.el.find("img").attr("alt")),c.img=a(j).on("load.mfploader",f).on("error.mfploader",g),j.src=c.src,i.is("img")&&(c.img=c.img.clone()),j=c.img[0],j.naturalWidth>0?c.hasSize=!0:j.width||(c.hasSize=!1)}return b._parseMarkup(d,{title:M(c),img_replaceWith:c.img},c),b.resizeImage(),c.hasSize?(L&&clearInterval(L),c.loadError?(d.addClass("mfp-loading"),b.updateStatus("error",h.tError.replace("%url%",c.src))):(d.removeClass("mfp-loading"),b.updateStatus("ready")),d):(b.updateStatus("loading"),c.loading=!0,c.hasSize||(c.imgHidden=!0,d.addClass("mfp-loading"),b.findImageSize(c)),d)}}});var N,O=function(){return void 0===N&&(N=void 0!==document.createElement("p").style.MozTransform),N};a.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(a){return a.is("img")?a:a.find("img")}},proto:{initZoom:function(){var a,c=b.st.zoom,d=".zoom";if(c.enabled&&b.supportsTransition){var e,f,g=c.duration,j=function(a){var b=a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),d="all "+c.duration/1e3+"s "+c.easing,e={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},f="transition";return e["-webkit-"+f]=e["-moz-"+f]=e["-o-"+f]=e[f]=d,b.css(e),b},k=function(){b.content.css("visibility","visible")};w("BuildControls"+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.content.css("visibility","hidden"),a=b._getItemToZoom(),!a)return void k();f=j(a),f.css(b._getOffset()),b.wrap.append(f),e=setTimeout(function(){f.css(b._getOffset(!0)),e=setTimeout(function(){k(),setTimeout(function(){f.remove(),a=f=null,y("ZoomAnimationEnded")},16)},g)},16)}}),w(i+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.st.removalDelay=g,!a){if(a=b._getItemToZoom(),!a)return;f=j(a)}f.css(b._getOffset(!0)),b.wrap.append(f),b.content.css("visibility","hidden"),setTimeout(function(){f.css(b._getOffset())},16)}}),w(h+d,function(){b._allowZoom()&&(k(),f&&f.remove(),a=null)})}},_allowZoom:function(){return"image"===b.currItem.type},_getItemToZoom:function(){return b.currItem.hasSize?b.currItem.img:!1},_getOffset:function(c){var d;d=c?b.currItem.img:b.st.zoom.opener(b.currItem.el||b.currItem);var e=d.offset(),f=parseInt(d.css("padding-top"),10),g=parseInt(d.css("padding-bottom"),10);e.top-=a(window).scrollTop()-f;var h={width:d.width(),height:(u?d.innerHeight():d[0].offsetHeight)-g-f};return O()?h["-moz-transform"]=h.transform="translate("+e.left+"px,"+e.top+"px)":(h.left=e.left,h.top=e.top),h}}});var P="iframe",Q="//about:blank",R=function(a){if(b.currTemplate[P]){var c=b.currTemplate[P].find("iframe");c.length&&(a||(c[0].src=Q),b.isIE8&&c.css("display",a?"block":"none"))}};a.magnificPopup.registerModule(P,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){b.types.push(P),w("BeforeChange",function(a,b,c){b!==c&&(b===P?R():c===P&&R(!0))}),w(h+"."+P,function(){R()})},getIframe:function(c,d){var e=c.src,f=b.st.iframe;a.each(f.patterns,function(){return e.indexOf(this.index)>-1?(this.id&&(e="string"==typeof this.id?e.substr(e.lastIndexOf(this.id)+this.id.length,e.length):this.id.call(this,e)),e=this.src.replace("%id%",e),!1):void 0});var g={};return f.srcAction&&(g[f.srcAction]=e),b._parseMarkup(d,g,c),b.updateStatus("ready"),d}}});var S=function(a){var c=b.items.length;return a>c-1?a-c:0>a?c+a:a},T=function(a,b,c){return a.replace(/%curr%/gi,b+1).replace(/%total%/gi,c)};a.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var c=b.st.gallery,e=".mfp-gallery";return b.direction=!0,c&&c.enabled?(f+=" mfp-gallery",w(m+e,function(){c.navigateByImgClick&&b.wrap.on("click"+e,".mfp-img",function(){return b.items.length>1?(b.next(),!1):void 0}),d.on("keydown"+e,function(a){37===a.keyCode?b.prev():39===a.keyCode&&b.next()})}),w("UpdateStatus"+e,function(a,c){c.text&&(c.text=T(c.text,b.currItem.index,b.items.length))}),w(l+e,function(a,d,e,f){var g=b.items.length;e.counter=g>1?T(c.tCounter,f.index,g):""}),w("BuildControls"+e,function(){if(b.items.length>1&&c.arrows&&!b.arrowLeft){var d=c.arrowMarkup,e=b.arrowLeft=a(d.replace(/%title%/gi,c.tPrev).replace(/%dir%/gi,"left")).addClass(s),f=b.arrowRight=a(d.replace(/%title%/gi,c.tNext).replace(/%dir%/gi,"right")).addClass(s);e.click(function(){b.prev()}),f.click(function(){b.next()}),b.container.append(e.add(f))}}),w(n+e,function(){b._preloadTimeout&&clearTimeout(b._preloadTimeout),b._preloadTimeout=setTimeout(function(){b.preloadNearbyImages(),b._preloadTimeout=null},16)}),void w(h+e,function(){d.off(e),b.wrap.off("click"+e),b.arrowRight=b.arrowLeft=null})):!1},next:function(){b.direction=!0,b.index=S(b.index+1),b.updateItemHTML()},prev:function(){b.direction=!1,b.index=S(b.index-1),b.updateItemHTML()},goTo:function(a){b.direction=a>=b.index,b.index=a,b.updateItemHTML()},preloadNearbyImages:function(){var a,c=b.st.gallery.preload,d=Math.min(c[0],b.items.length),e=Math.min(c[1],b.items.length);for(a=1;a<=(b.direction?e:d);a++)b._preloadItem(b.index+a);for(a=1;a<=(b.direction?d:e);a++)b._preloadItem(b.index-a)},_preloadItem:function(c){if(c=S(c),!b.items[c].preloaded){var d=b.items[c];d.parsed||(d=b.parseEl(c)),y("LazyLoad",d),"image"===d.type&&(d.img=a('<img class="mfp-img" />').on("load.mfploader",function(){d.hasSize=!0}).on("error.mfploader",function(){d.hasSize=!0,d.loadError=!0,y("LazyLoadError",d)}).attr("src",d.src)),d.preloaded=!0}}}});var U="retina";a.magnificPopup.registerModule(U,{options:{replaceSrc:function(a){return a.src.replace(/\.\w+$/,function(a){return"@2x"+a})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var a=b.st.retina,c=a.ratio;c=isNaN(c)?c():c,c>1&&(w("ImageHasSize."+U,function(a,b){b.img.css({"max-width":b.img[0].naturalWidth/c,width:"100%"})}),w("ElementParse."+U,function(b,d){d.src=a.replaceSrc(d,c)}))}}}}),A()});;
/*! lightgallery - v1.6.6 - 2017-12-20
* http://sachinchoolur.github.io/lightGallery/
* Copyright (c) 2017 Sachin N; Licensed GPLv3 */
!function(a,b){"function"==typeof define&&define.amd?define(["jquery"],function(a){return b(a)}):"object"==typeof exports?module.exports=b(require("jquery")):b(a.jQuery)}(this,function(a){!function(){"use strict";function b(b,d){if(this.el=b,this.$el=a(b),this.s=a.extend({},c,d),this.s.dynamic&&"undefined"!==this.s.dynamicEl&&this.s.dynamicEl.constructor===Array&&!this.s.dynamicEl.length)throw"When using dynamic mode, you must also define dynamicEl as an Array.";return this.modules={},this.lGalleryOn=!1,this.lgBusy=!1,this.hideBartimeout=!1,this.isTouch="ontouchstart"in document.documentElement,this.s.slideEndAnimatoin&&(this.s.hideControlOnEnd=!1),this.s.dynamic?this.$items=this.s.dynamicEl:"this"===this.s.selector?this.$items=this.$el:""!==this.s.selector?this.s.selectWithin?this.$items=a(this.s.selectWithin).find(this.s.selector):this.$items=this.$el.find(a(this.s.selector)):this.$items=this.$el.children(),this.$slide="",this.$outer="",this.init(),this}var c={mode:"lg-slide",cssEasing:"ease",easing:"linear",speed:600,height:"100%",width:"100%",addClass:"",startClass:"lg-start-zoom",backdropDuration:150,hideBarsDelay:6e3,useLeft:!1,closable:!0,loop:!0,escKey:!0,keyPress:!0,controls:!0,slideEndAnimatoin:!0,hideControlOnEnd:!1,mousewheel:!0,getCaptionFromTitleOrAlt:!0,appendSubHtmlTo:".lg-sub-html",subHtmlSelectorRelative:!1,preload:1,showAfterLoad:!0,selector:"",selectWithin:"",nextHtml:"",prevHtml:"",index:!1,iframeMaxWidth:"100%",download:!0,counter:!0,appendCounterTo:".lg-toolbar",swipeThreshold:50,enableSwipe:!0,enableDrag:!0,dynamic:!1,dynamicEl:[],galleryId:1};b.prototype.init=function(){var b=this;b.s.preload>b.$items.length&&(b.s.preload=b.$items.length);var c=window.location.hash;c.indexOf("lg="+this.s.galleryId)>0&&(b.index=parseInt(c.split("&slide=")[1],10),a("body").addClass("lg-from-hash"),a("body").hasClass("lg-on")||(setTimeout(function(){b.build(b.index)}),a("body").addClass("lg-on"))),b.s.dynamic?(b.$el.trigger("onBeforeOpen.lg"),b.index=b.s.index||0,a("body").hasClass("lg-on")||setTimeout(function(){b.build(b.index),a("body").addClass("lg-on")})):b.$items.on("click.lgcustom",function(c){try{c.preventDefault(),c.preventDefault()}catch(a){c.returnValue=!1}b.$el.trigger("onBeforeOpen.lg"),b.index=b.s.index||b.$items.index(this),a("body").hasClass("lg-on")||(b.build(b.index),a("body").addClass("lg-on"))})},b.prototype.build=function(b){var c=this;c.structure(),a.each(a.fn.lightGallery.modules,function(b){c.modules[b]=new a.fn.lightGallery.modules[b](c.el)}),c.slide(b,!1,!1,!1),c.s.keyPress&&c.keyPress(),c.$items.length>1?(c.arrow(),setTimeout(function(){c.enableDrag(),c.enableSwipe()},50),c.s.mousewheel&&c.mousewheel()):c.$slide.on("click.lg",function(){c.$el.trigger("onSlideClick.lg")}),c.counter(),c.closeGallery(),c.$el.trigger("onAfterOpen.lg"),c.$outer.on("mousemove.lg click.lg touchstart.lg",function(){c.$outer.removeClass("lg-hide-items"),clearTimeout(c.hideBartimeout),c.hideBartimeout=setTimeout(function(){c.$outer.addClass("lg-hide-items")},c.s.hideBarsDelay)}),c.$outer.trigger("mousemove.lg")},b.prototype.structure=function(){var b,c="",d="",e=0,f="",g=this;for(a("body").append('<div class="lg-backdrop"></div>'),a(".lg-backdrop").css("transition-duration",this.s.backdropDuration+"ms"),e=0;e<this.$items.length;e++)c+='<div class="lg-item"></div>';if(this.s.controls&&this.$items.length>1&&(d='<div class="lg-actions"><button class="lg-prev lg-icon">'+this.s.prevHtml+'</button><button class="lg-next lg-icon">'+this.s.nextHtml+"</button></div>"),".lg-sub-html"===this.s.appendSubHtmlTo&&(f='<div class="lg-sub-html"></div>'),b='<div class="lg-outer '+this.s.addClass+" "+this.s.startClass+'"><div class="lg" style="width:'+this.s.width+"; height:"+this.s.height+'"><div class="lg-inner">'+c+'</div><div class="lg-toolbar lg-group"><span class="lg-close lg-icon"></span></div>'+d+f+"</div></div>",a("body").append(b),this.$outer=a(".lg-outer"),this.$slide=this.$outer.find(".lg-item"),this.s.useLeft?(this.$outer.addClass("lg-use-left"),this.s.mode="lg-slide"):this.$outer.addClass("lg-use-css3"),g.setTop(),a(window).on("resize.lg orientationchange.lg",function(){setTimeout(function(){g.setTop()},100)}),this.$slide.eq(this.index).addClass("lg-current"),this.doCss()?this.$outer.addClass("lg-css3"):(this.$outer.addClass("lg-css"),this.s.speed=0),this.$outer.addClass(this.s.mode),this.s.enableDrag&&this.$items.length>1&&this.$outer.addClass("lg-grab"),this.s.showAfterLoad&&this.$outer.addClass("lg-show-after-load"),this.doCss()){var h=this.$outer.find(".lg-inner");h.css("transition-timing-function",this.s.cssEasing),h.css("transition-duration",this.s.speed+"ms")}setTimeout(function(){a(".lg-backdrop").addClass("in")}),setTimeout(function(){g.$outer.addClass("lg-visible")},this.s.backdropDuration),this.s.download&&this.$outer.find(".lg-toolbar").append('<a id="lg-download" target="_blank" download class="lg-download lg-icon"></a>'),this.prevScrollTop=a(window).scrollTop()},b.prototype.setTop=function(){if("100%"!==this.s.height){var b=a(window).height(),c=(b-parseInt(this.s.height,10))/2,d=this.$outer.find(".lg");b>=parseInt(this.s.height,10)?d.css("top",c+"px"):d.css("top","0px")}},b.prototype.doCss=function(){var a=function(){var a=["transition","MozTransition","WebkitTransition","OTransition","msTransition","KhtmlTransition"],b=document.documentElement,c=0;for(c=0;c<a.length;c++)if(a[c]in b.style)return!0};return!!a()},b.prototype.isVideo=function(a,b){var c;if(c=this.s.dynamic?this.s.dynamicEl[b].html:this.$items.eq(b).attr("data-html"),!a)return c?{html5:!0}:(console.error("lightGallery :- data-src is not pvovided on slide item "+(b+1)+". Please make sure the selector property is properly configured. More info - http://sachinchoolur.github.io/lightGallery/demos/html-markup.html"),!1);var d=a.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i),e=a.match(/\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i),f=a.match(/\/\/(?:www\.)?dai.ly\/([0-9a-z\-_]+)/i),g=a.match(/\/\/(?:www\.)?(?:vk\.com|vkontakte\.ru)\/(?:video_ext\.php\?)(.*)/i);return d?{youtube:d}:e?{vimeo:e}:f?{dailymotion:f}:g?{vk:g}:void 0},b.prototype.counter=function(){this.s.counter&&a(this.s.appendCounterTo).append('<div id="lg-counter"><span id="lg-counter-current">'+(parseInt(this.index,10)+1)+'</span> / <span id="lg-counter-all">'+this.$items.length+"</span></div>")},b.prototype.addHtml=function(b){var c,d,e=null;if(this.s.dynamic?this.s.dynamicEl[b].subHtmlUrl?c=this.s.dynamicEl[b].subHtmlUrl:e=this.s.dynamicEl[b].subHtml:(d=this.$items.eq(b),d.attr("data-sub-html-url")?c=d.attr("data-sub-html-url"):(e=d.attr("data-sub-html"),this.s.getCaptionFromTitleOrAlt&&!e&&(e=d.attr("title")||d.find("img").first().attr("alt")))),!c)if("undefined"!=typeof e&&null!==e){var f=e.substring(0,1);"."!==f&&"#"!==f||(e=this.s.subHtmlSelectorRelative&&!this.s.dynamic?d.find(e).html():a(e).html())}else e="";".lg-sub-html"===this.s.appendSubHtmlTo?c?this.$outer.find(this.s.appendSubHtmlTo).load(c):this.$outer.find(this.s.appendSubHtmlTo).html(e):c?this.$slide.eq(b).load(c):this.$slide.eq(b).append(e),"undefined"!=typeof e&&null!==e&&(""===e?this.$outer.find(this.s.appendSubHtmlTo).addClass("lg-empty-html"):this.$outer.find(this.s.appendSubHtmlTo).removeClass("lg-empty-html")),this.$el.trigger("onAfterAppendSubHtml.lg",[b])},b.prototype.preload=function(a){var b=1,c=1;for(b=1;b<=this.s.preload&&!(b>=this.$items.length-a);b++)this.loadContent(a+b,!1,0);for(c=1;c<=this.s.preload&&!(a-c<0);c++)this.loadContent(a-c,!1,0)},b.prototype.loadContent=function(b,c,d){var e,f,g,h,i,j,k=this,l=!1,m=function(b){for(var c=[],d=[],e=0;e<b.length;e++){var g=b[e].split(" ");""===g[0]&&g.splice(0,1),d.push(g[0]),c.push(g[1])}for(var h=a(window).width(),i=0;i<c.length;i++)if(parseInt(c[i],10)>h){f=d[i];break}};if(k.s.dynamic){if(k.s.dynamicEl[b].poster&&(l=!0,g=k.s.dynamicEl[b].poster),j=k.s.dynamicEl[b].html,f=k.s.dynamicEl[b].src,k.s.dynamicEl[b].responsive){var n=k.s.dynamicEl[b].responsive.split(",");m(n)}h=k.s.dynamicEl[b].srcset,i=k.s.dynamicEl[b].sizes}else{if(k.$items.eq(b).attr("data-poster")&&(l=!0,g=k.$items.eq(b).attr("data-poster")),j=k.$items.eq(b).attr("data-html"),f=k.$items.eq(b).attr("href")||k.$items.eq(b).attr("data-src"),k.$items.eq(b).attr("data-responsive")){var o=k.$items.eq(b).attr("data-responsive").split(",");m(o)}h=k.$items.eq(b).attr("data-srcset"),i=k.$items.eq(b).attr("data-sizes")}var p=!1;k.s.dynamic?k.s.dynamicEl[b].iframe&&(p=!0):"true"===k.$items.eq(b).attr("data-iframe")&&(p=!0);var q=k.isVideo(f,b);if(!k.$slide.eq(b).hasClass("lg-loaded")){if(p)k.$slide.eq(b).prepend('<div class="lg-video-cont lg-has-iframe" style="max-width:'+k.s.iframeMaxWidth+'"><div class="lg-video"><iframe class="lg-object" frameborder="0" src="'+f+'"  allowfullscreen="true"></iframe></div></div>');else if(l){var r="";r=q&&q.youtube?"lg-has-youtube":q&&q.vimeo?"lg-has-vimeo":"lg-has-html5",k.$slide.eq(b).prepend('<div class="lg-video-cont '+r+' "><div class="lg-video"><span class="lg-video-play"></span><img class="lg-object lg-has-poster" src="'+g+'" /></div></div>')}else q?(k.$slide.eq(b).prepend('<div class="lg-video-cont "><div class="lg-video"></div></div>'),k.$el.trigger("hasVideo.lg",[b,f,j])):k.$slide.eq(b).prepend('<div class="lg-img-wrap"><img class="lg-object lg-image" src="'+f+'" /></div>');if(k.$el.trigger("onAferAppendSlide.lg",[b]),e=k.$slide.eq(b).find(".lg-object"),i&&e.attr("sizes",i),h){e.attr("srcset",h);try{picturefill({elements:[e[0]]})}catch(a){console.warn("lightGallery :- If you want srcset to be supported for older browser please include picturefil version 2 javascript library in your document.")}}".lg-sub-html"!==this.s.appendSubHtmlTo&&k.addHtml(b),k.$slide.eq(b).addClass("lg-loaded")}k.$slide.eq(b).find(".lg-object").on("load.lg error.lg",function(){var c=0;d&&!a("body").hasClass("lg-from-hash")&&(c=d),setTimeout(function(){k.$slide.eq(b).addClass("lg-complete"),k.$el.trigger("onSlideItemLoad.lg",[b,d||0])},c)}),q&&q.html5&&!l&&k.$slide.eq(b).addClass("lg-complete"),c===!0&&(k.$slide.eq(b).hasClass("lg-complete")?k.preload(b):k.$slide.eq(b).find(".lg-object").on("load.lg error.lg",function(){k.preload(b)}))},b.prototype.slide=function(b,c,d,e){var f=this.$outer.find(".lg-current").index(),g=this;if(!g.lGalleryOn||f!==b){var h=this.$slide.length,i=g.lGalleryOn?this.s.speed:0;if(!g.lgBusy){if(this.s.download){var j;j=g.s.dynamic?g.s.dynamicEl[b].downloadUrl!==!1&&(g.s.dynamicEl[b].downloadUrl||g.s.dynamicEl[b].src):"false"!==g.$items.eq(b).attr("data-download-url")&&(g.$items.eq(b).attr("data-download-url")||g.$items.eq(b).attr("href")||g.$items.eq(b).attr("data-src")),j?(a("#lg-download").attr("href",j),g.$outer.removeClass("lg-hide-download")):g.$outer.addClass("lg-hide-download")}if(this.$el.trigger("onBeforeSlide.lg",[f,b,c,d]),g.lgBusy=!0,clearTimeout(g.hideBartimeout),".lg-sub-html"===this.s.appendSubHtmlTo&&setTimeout(function(){g.addHtml(b)},i),this.arrowDisable(b),e||(b<f?e="prev":b>f&&(e="next")),c){this.$slide.removeClass("lg-prev-slide lg-current lg-next-slide");var k,l;h>2?(k=b-1,l=b+1,0===b&&f===h-1?(l=0,k=h-1):b===h-1&&0===f&&(l=0,k=h-1)):(k=0,l=1),"prev"===e?g.$slide.eq(l).addClass("lg-next-slide"):g.$slide.eq(k).addClass("lg-prev-slide"),g.$slide.eq(b).addClass("lg-current")}else g.$outer.addClass("lg-no-trans"),this.$slide.removeClass("lg-prev-slide lg-next-slide"),"prev"===e?(this.$slide.eq(b).addClass("lg-prev-slide"),this.$slide.eq(f).addClass("lg-next-slide")):(this.$slide.eq(b).addClass("lg-next-slide"),this.$slide.eq(f).addClass("lg-prev-slide")),setTimeout(function(){g.$slide.removeClass("lg-current"),g.$slide.eq(b).addClass("lg-current"),g.$outer.removeClass("lg-no-trans")},50);g.lGalleryOn?(setTimeout(function(){g.loadContent(b,!0,0)},this.s.speed+50),setTimeout(function(){g.lgBusy=!1,g.$el.trigger("onAfterSlide.lg",[f,b,c,d])},this.s.speed)):(g.loadContent(b,!0,g.s.backdropDuration),g.lgBusy=!1,g.$el.trigger("onAfterSlide.lg",[f,b,c,d])),g.lGalleryOn=!0,this.s.counter&&a("#lg-counter-current").text(b+1)}g.index=b}},b.prototype.goToNextSlide=function(a){var b=this,c=b.s.loop;a&&b.$slide.length<3&&(c=!1),b.lgBusy||(b.index+1<b.$slide.length?(b.index++,b.$el.trigger("onBeforeNextSlide.lg",[b.index]),b.slide(b.index,a,!1,"next")):c?(b.index=0,b.$el.trigger("onBeforeNextSlide.lg",[b.index]),b.slide(b.index,a,!1,"next")):b.s.slideEndAnimatoin&&!a&&(b.$outer.addClass("lg-right-end"),setTimeout(function(){b.$outer.removeClass("lg-right-end")},400)))},b.prototype.goToPrevSlide=function(a){var b=this,c=b.s.loop;a&&b.$slide.length<3&&(c=!1),b.lgBusy||(b.index>0?(b.index--,b.$el.trigger("onBeforePrevSlide.lg",[b.index,a]),b.slide(b.index,a,!1,"prev")):c?(b.index=b.$items.length-1,b.$el.trigger("onBeforePrevSlide.lg",[b.index,a]),b.slide(b.index,a,!1,"prev")):b.s.slideEndAnimatoin&&!a&&(b.$outer.addClass("lg-left-end"),setTimeout(function(){b.$outer.removeClass("lg-left-end")},400)))},b.prototype.keyPress=function(){var b=this;this.$items.length>1&&a(window).on("keyup.lg",function(a){b.$items.length>1&&(37===a.keyCode&&(a.preventDefault(),b.goToPrevSlide()),39===a.keyCode&&(a.preventDefault(),b.goToNextSlide()))}),a(window).on("keydown.lg",function(a){b.s.escKey===!0&&27===a.keyCode&&(a.preventDefault(),b.$outer.hasClass("lg-thumb-open")?b.$outer.removeClass("lg-thumb-open"):b.destroy())})},b.prototype.arrow=function(){var a=this;this.$outer.find(".lg-prev").on("click.lg",function(){a.goToPrevSlide()}),this.$outer.find(".lg-next").on("click.lg",function(){a.goToNextSlide()})},b.prototype.arrowDisable=function(a){!this.s.loop&&this.s.hideControlOnEnd&&(a+1<this.$slide.length?this.$outer.find(".lg-next").removeAttr("disabled").removeClass("disabled"):this.$outer.find(".lg-next").attr("disabled","disabled").addClass("disabled"),a>0?this.$outer.find(".lg-prev").removeAttr("disabled").removeClass("disabled"):this.$outer.find(".lg-prev").attr("disabled","disabled").addClass("disabled"))},b.prototype.setTranslate=function(a,b,c){this.s.useLeft?a.css("left",b):a.css({transform:"translate3d("+b+"px, "+c+"px, 0px)"})},b.prototype.touchMove=function(b,c){var d=c-b;Math.abs(d)>15&&(this.$outer.addClass("lg-dragging"),this.setTranslate(this.$slide.eq(this.index),d,0),this.setTranslate(a(".lg-prev-slide"),-this.$slide.eq(this.index).width()+d,0),this.setTranslate(a(".lg-next-slide"),this.$slide.eq(this.index).width()+d,0))},b.prototype.touchEnd=function(a){var b=this;"lg-slide"!==b.s.mode&&b.$outer.addClass("lg-slide"),this.$slide.not(".lg-current, .lg-prev-slide, .lg-next-slide").css("opacity","0"),setTimeout(function(){b.$outer.removeClass("lg-dragging"),a<0&&Math.abs(a)>b.s.swipeThreshold?b.goToNextSlide(!0):a>0&&Math.abs(a)>b.s.swipeThreshold?b.goToPrevSlide(!0):Math.abs(a)<5&&b.$el.trigger("onSlideClick.lg"),b.$slide.removeAttr("style")}),setTimeout(function(){b.$outer.hasClass("lg-dragging")||"lg-slide"===b.s.mode||b.$outer.removeClass("lg-slide")},b.s.speed+100)},b.prototype.enableSwipe=function(){var a=this,b=0,c=0,d=!1;a.s.enableSwipe&&a.doCss()&&(a.$slide.on("touchstart.lg",function(c){a.$outer.hasClass("lg-zoomed")||a.lgBusy||(c.preventDefault(),a.manageSwipeClass(),b=c.originalEvent.targetTouches[0].pageX)}),a.$slide.on("touchmove.lg",function(e){a.$outer.hasClass("lg-zoomed")||(e.preventDefault(),c=e.originalEvent.targetTouches[0].pageX,a.touchMove(b,c),d=!0)}),a.$slide.on("touchend.lg",function(){a.$outer.hasClass("lg-zoomed")||(d?(d=!1,a.touchEnd(c-b)):a.$el.trigger("onSlideClick.lg"))}))},b.prototype.enableDrag=function(){var b=this,c=0,d=0,e=!1,f=!1;b.s.enableDrag&&b.doCss()&&(b.$slide.on("mousedown.lg",function(d){b.$outer.hasClass("lg-zoomed")||(a(d.target).hasClass("lg-object")||a(d.target).hasClass("lg-video-play"))&&(d.preventDefault(),b.lgBusy||(b.manageSwipeClass(),c=d.pageX,e=!0,b.$outer.scrollLeft+=1,b.$outer.scrollLeft-=1,b.$outer.removeClass("lg-grab").addClass("lg-grabbing"),b.$el.trigger("onDragstart.lg")))}),a(window).on("mousemove.lg",function(a){e&&(f=!0,d=a.pageX,b.touchMove(c,d),b.$el.trigger("onDragmove.lg"))}),a(window).on("mouseup.lg",function(g){f?(f=!1,b.touchEnd(d-c),b.$el.trigger("onDragend.lg")):(a(g.target).hasClass("lg-object")||a(g.target).hasClass("lg-video-play"))&&b.$el.trigger("onSlideClick.lg"),e&&(e=!1,b.$outer.removeClass("lg-grabbing").addClass("lg-grab"))}))},b.prototype.manageSwipeClass=function(){var a=this.index+1,b=this.index-1;this.s.loop&&this.$slide.length>2&&(0===this.index?b=this.$slide.length-1:this.index===this.$slide.length-1&&(a=0)),this.$slide.removeClass("lg-next-slide lg-prev-slide"),b>-1&&this.$slide.eq(b).addClass("lg-prev-slide"),this.$slide.eq(a).addClass("lg-next-slide")},b.prototype.mousewheel=function(){var a=this;a.$outer.on("mousewheel.lg",function(b){b.deltaY&&(b.deltaY>0?a.goToPrevSlide():a.goToNextSlide(),b.preventDefault())})},b.prototype.closeGallery=function(){var b=this,c=!1;this.$outer.find(".lg-close").on("click.lg",function(){b.destroy()}),b.s.closable&&(b.$outer.on("mousedown.lg",function(b){c=!!(a(b.target).is(".lg-outer")||a(b.target).is(".lg-item ")||a(b.target).is(".lg-img-wrap"))}),b.$outer.on("mouseup.lg",function(d){(a(d.target).is(".lg-outer")||a(d.target).is(".lg-item ")||a(d.target).is(".lg-img-wrap")&&c)&&(b.$outer.hasClass("lg-dragging")||b.destroy())}))},b.prototype.destroy=function(b){var c=this;b||(c.$el.trigger("onBeforeClose.lg"),a(window).scrollTop(c.prevScrollTop)),b&&(c.s.dynamic||this.$items.off("click.lg click.lgcustom"),a.removeData(c.el,"lightGallery")),this.$el.off(".lg.tm"),a.each(a.fn.lightGallery.modules,function(a){c.modules[a]&&c.modules[a].destroy()}),this.lGalleryOn=!1,clearTimeout(c.hideBartimeout),this.hideBartimeout=!1,a(window).off(".lg"),a("body").removeClass("lg-on lg-from-hash"),c.$outer&&c.$outer.removeClass("lg-visible"),a(".lg-backdrop").removeClass("in"),setTimeout(function(){c.$outer&&c.$outer.remove(),a(".lg-backdrop").remove(),b||c.$el.trigger("onCloseAfter.lg")},c.s.backdropDuration+50)},a.fn.lightGallery=function(c){return this.each(function(){if(a.data(this,"lightGallery"))try{a(this).data("lightGallery").init()}catch(a){console.error("lightGallery has not initiated properly")}else a.data(this,"lightGallery",new b(this,c))})},a.fn.lightGallery.modules={}}()}),function(a,b){"function"==typeof define&&define.amd?define(["jquery"],function(a){return b(a)}):"object"==typeof exports?module.exports=b(require("jquery")):b(jQuery)}(this,function(a){!function(){"use strict";var b={autoplay:!1,pause:5e3,progressBar:!0,fourceAutoplay:!1,autoplayControls:!0,appendAutoplayControlsTo:".lg-toolbar"},c=function(c){return this.core=a(c).data("lightGallery"),this.$el=a(c),!(this.core.$items.length<2)&&(this.core.s=a.extend({},b,this.core.s),this.interval=!1,this.fromAuto=!0,this.canceledOnTouch=!1,this.fourceAutoplayTemp=this.core.s.fourceAutoplay,this.core.doCss()||(this.core.s.progressBar=!1),this.init(),this)};c.prototype.init=function(){var a=this;a.core.s.autoplayControls&&a.controls(),a.core.s.progressBar&&a.core.$outer.find(".lg").append('<div class="lg-progress-bar"><div class="lg-progress"></div></div>'),a.progress(),a.core.s.autoplay&&a.$el.one("onSlideItemLoad.lg.tm",function(){a.startlAuto()}),a.$el.on("onDragstart.lg.tm touchstart.lg.tm",function(){a.interval&&(a.cancelAuto(),a.canceledOnTouch=!0)}),a.$el.on("onDragend.lg.tm touchend.lg.tm onSlideClick.lg.tm",function(){!a.interval&&a.canceledOnTouch&&(a.startlAuto(),a.canceledOnTouch=!1)})},c.prototype.progress=function(){var a,b,c=this;c.$el.on("onBeforeSlide.lg.tm",function(){c.core.s.progressBar&&c.fromAuto&&(a=c.core.$outer.find(".lg-progress-bar"),b=c.core.$outer.find(".lg-progress"),c.interval&&(b.removeAttr("style"),a.removeClass("lg-start"),setTimeout(function(){b.css("transition","width "+(c.core.s.speed+c.core.s.pause)+"ms ease 0s"),a.addClass("lg-start")},20))),c.fromAuto||c.core.s.fourceAutoplay||c.cancelAuto(),c.fromAuto=!1})},c.prototype.controls=function(){var b=this,c='<span class="lg-autoplay-button lg-icon"></span>';a(this.core.s.appendAutoplayControlsTo).append(c),b.core.$outer.find(".lg-autoplay-button").on("click.lg",function(){a(b.core.$outer).hasClass("lg-show-autoplay")?(b.cancelAuto(),b.core.s.fourceAutoplay=!1):b.interval||(b.startlAuto(),b.core.s.fourceAutoplay=b.fourceAutoplayTemp)})},c.prototype.startlAuto=function(){var a=this;a.core.$outer.find(".lg-progress").css("transition","width "+(a.core.s.speed+a.core.s.pause)+"ms ease 0s"),a.core.$outer.addClass("lg-show-autoplay"),a.core.$outer.find(".lg-progress-bar").addClass("lg-start"),a.interval=setInterval(function(){a.core.index+1<a.core.$items.length?a.core.index++:a.core.index=0,a.fromAuto=!0,a.core.slide(a.core.index,!1,!1,"next")},a.core.s.speed+a.core.s.pause)},c.prototype.cancelAuto=function(){clearInterval(this.interval),this.interval=!1,this.core.$outer.find(".lg-progress").removeAttr("style"),this.core.$outer.removeClass("lg-show-autoplay"),this.core.$outer.find(".lg-progress-bar").removeClass("lg-start")},c.prototype.destroy=function(){this.cancelAuto(),this.core.$outer.find(".lg-progress-bar").remove()},a.fn.lightGallery.modules.autoplay=c}()}),function(a,b){"function"==typeof define&&define.amd?define(["jquery"],function(a){return b(a)}):"object"==typeof exports?module.exports=b(require("jquery")):b(jQuery)}(this,function(a){!function(){"use strict";var b={fullScreen:!0},c=function(c){return this.core=a(c).data("lightGallery"),this.$el=a(c),this.core.s=a.extend({},b,this.core.s),this.init(),this};c.prototype.init=function(){var a="";if(this.core.s.fullScreen){if(!(document.fullscreenEnabled||document.webkitFullscreenEnabled||document.mozFullScreenEnabled||document.msFullscreenEnabled))return;a='<span class="lg-fullscreen lg-icon"></span>',this.core.$outer.find(".lg-toolbar").append(a),this.fullScreen()}},c.prototype.requestFullscreen=function(){var a=document.documentElement;a.requestFullscreen?a.requestFullscreen():a.msRequestFullscreen?a.msRequestFullscreen():a.mozRequestFullScreen?a.mozRequestFullScreen():a.webkitRequestFullscreen&&a.webkitRequestFullscreen()},c.prototype.exitFullscreen=function(){document.exitFullscreen?document.exitFullscreen():document.msExitFullscreen?document.msExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen()},c.prototype.fullScreen=function(){var b=this;a(document).on("fullscreenchange.lg webkitfullscreenchange.lg mozfullscreenchange.lg MSFullscreenChange.lg",function(){b.core.$outer.toggleClass("lg-fullscreen-on")}),this.core.$outer.find(".lg-fullscreen").on("click.lg",function(){document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement?b.exitFullscreen():b.requestFullscreen()})},c.prototype.destroy=function(){this.exitFullscreen(),a(document).off("fullscreenchange.lg webkitfullscreenchange.lg mozfullscreenchange.lg MSFullscreenChange.lg")},a.fn.lightGallery.modules.fullscreen=c}()}),function(a,b){"function"==typeof define&&define.amd?define(["jquery"],function(a){return b(a)}):"object"==typeof exports?module.exports=b(require("jquery")):b(jQuery)}(this,function(a){!function(){"use strict";var b={pager:!1},c=function(c){return this.core=a(c).data("lightGallery"),this.$el=a(c),this.core.s=a.extend({},b,this.core.s),this.core.s.pager&&this.core.$items.length>1&&this.init(),this};c.prototype.init=function(){var b,c,d,e=this,f="";if(e.core.$outer.find(".lg").append('<div class="lg-pager-outer"></div>'),e.core.s.dynamic)for(var g=0;g<e.core.s.dynamicEl.length;g++)f+='<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="'+e.core.s.dynamicEl[g].thumb+'" /></div></span>';else e.core.$items.each(function(){f+=e.core.s.exThumbImage?'<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="'+a(this).attr(e.core.s.exThumbImage)+'" /></div></span>':'<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="'+a(this).find("img").attr("src")+'" /></div></span>'});c=e.core.$outer.find(".lg-pager-outer"),c.html(f),b=e.core.$outer.find(".lg-pager-cont"),b.on("click.lg touchend.lg",function(){var b=a(this);e.core.index=b.index(),e.core.slide(e.core.index,!1,!0,!1)}),c.on("mouseover.lg",function(){clearTimeout(d),c.addClass("lg-pager-hover")}),c.on("mouseout.lg",function(){d=setTimeout(function(){c.removeClass("lg-pager-hover")})}),e.core.$el.on("onBeforeSlide.lg.tm",function(a,c,d){b.removeClass("lg-pager-active"),b.eq(d).addClass("lg-pager-active")})},c.prototype.destroy=function(){},a.fn.lightGallery.modules.pager=c}()}),function(a,b){"function"==typeof define&&define.amd?define(["jquery"],function(a){return b(a)}):"object"==typeof exports?module.exports=b(require("jquery")):b(jQuery)}(this,function(a){!function(){"use strict";var b={thumbnail:!0,animateThumb:!0,currentPagerPosition:"middle",thumbWidth:100,thumbHeight:"80px",thumbContHeight:100,thumbMargin:5,exThumbImage:!1,showThumbByDefault:!0,toogleThumb:!0,pullCaptionUp:!0,enableThumbDrag:!0,enableThumbSwipe:!0,swipeThreshold:50,loadYoutubeThumbnail:!0,youtubeThumbSize:1,loadVimeoThumbnail:!0,vimeoThumbSize:"thumbnail_small",loadDailymotionThumbnail:!0},c=function(c){return this.core=a(c).data("lightGallery"),this.core.s=a.extend({},b,this.core.s),this.$el=a(c),this.$thumbOuter=null,this.thumbOuterWidth=0,this.thumbTotalWidth=this.core.$items.length*(this.core.s.thumbWidth+this.core.s.thumbMargin),this.thumbIndex=this.core.index,this.core.s.animateThumb&&(this.core.s.thumbHeight="100%"),this.left=0,this.init(),this};c.prototype.init=function(){var a=this;this.core.s.thumbnail&&this.core.$items.length>1&&(this.core.s.showThumbByDefault&&setTimeout(function(){a.core.$outer.addClass("lg-thumb-open")},700),this.core.s.pullCaptionUp&&this.core.$outer.addClass("lg-pull-caption-up"),this.build(),this.core.s.animateThumb&&this.core.doCss()?(this.core.s.enableThumbDrag&&this.enableThumbDrag(),this.core.s.enableThumbSwipe&&this.enableThumbSwipe(),this.thumbClickable=!1):this.thumbClickable=!0,this.toogle(),this.thumbkeyPress())},c.prototype.build=function(){function b(a,b,c){var g,h=d.core.isVideo(a,c)||{},i="";h.youtube||h.vimeo||h.dailymotion?h.youtube?g=d.core.s.loadYoutubeThumbnail?"//img.youtube.com/vi/"+h.youtube[1]+"/"+d.core.s.youtubeThumbSize+".jpg":b:h.vimeo?d.core.s.loadVimeoThumbnail?(g="//i.vimeocdn.com/video/error_"+f+".jpg",i=h.vimeo[1]):g=b:h.dailymotion&&(g=d.core.s.loadDailymotionThumbnail?"//www.dailymotion.com/thumbnail/video/"+h.dailymotion[1]:b):g=b,e+='<div data-vimeo-id="'+i+'" class="lg-thumb-item" style="width:'+d.core.s.thumbWidth+"px; height: "+d.core.s.thumbHeight+"; margin-right: "+d.core.s.thumbMargin+'px"><img src="'+g+'" /></div>',i=""}var c,d=this,e="",f="",g='<div class="lg-thumb-outer"><div class="lg-thumb lg-group"></div></div>';switch(this.core.s.vimeoThumbSize){case"thumbnail_large":f="640";break;case"thumbnail_medium":f="200x150";break;case"thumbnail_small":f="100x75"}if(d.core.$outer.addClass("lg-has-thumb"),d.core.$outer.find(".lg").append(g),d.$thumbOuter=d.core.$outer.find(".lg-thumb-outer"),d.thumbOuterWidth=d.$thumbOuter.width(),d.core.s.animateThumb&&d.core.$outer.find(".lg-thumb").css({width:d.thumbTotalWidth+"px",position:"relative"}),this.core.s.animateThumb&&d.$thumbOuter.css("height",d.core.s.thumbContHeight+"px"),d.core.s.dynamic)for(var h=0;h<d.core.s.dynamicEl.length;h++)b(d.core.s.dynamicEl[h].src,d.core.s.dynamicEl[h].thumb,h);else d.core.$items.each(function(c){d.core.s.exThumbImage?b(a(this).attr("href")||a(this).attr("data-src"),a(this).attr(d.core.s.exThumbImage),c):b(a(this).attr("href")||a(this).attr("data-src"),a(this).find("img").attr("src"),c)});d.core.$outer.find(".lg-thumb").html(e),c=d.core.$outer.find(".lg-thumb-item"),c.each(function(){var b=a(this),c=b.attr("data-vimeo-id");c&&a.getJSON("//www.vimeo.com/api/v2/video/"+c+".json?callback=?",{format:"json"},function(a){b.find("img").attr("src",a[0][d.core.s.vimeoThumbSize])})}),c.eq(d.core.index).addClass("active"),d.core.$el.on("onBeforeSlide.lg.tm",function(){c.removeClass("active"),c.eq(d.core.index).addClass("active")}),c.on("click.lg touchend.lg",function(){var b=a(this);setTimeout(function(){(d.thumbClickable&&!d.core.lgBusy||!d.core.doCss())&&(d.core.index=b.index(),d.core.slide(d.core.index,!1,!0,!1))},50)}),d.core.$el.on("onBeforeSlide.lg.tm",function(){d.animateThumb(d.core.index)}),a(window).on("resize.lg.thumb orientationchange.lg.thumb",function(){setTimeout(function(){d.animateThumb(d.core.index),d.thumbOuterWidth=d.$thumbOuter.width()},200)})},c.prototype.setTranslate=function(a){this.core.$outer.find(".lg-thumb").css({transform:"translate3d(-"+a+"px, 0px, 0px)"})},c.prototype.animateThumb=function(a){var b=this.core.$outer.find(".lg-thumb");if(this.core.s.animateThumb){var c;switch(this.core.s.currentPagerPosition){case"left":c=0;break;case"middle":c=this.thumbOuterWidth/2-this.core.s.thumbWidth/2;break;case"right":c=this.thumbOuterWidth-this.core.s.thumbWidth}this.left=(this.core.s.thumbWidth+this.core.s.thumbMargin)*a-1-c,this.left>this.thumbTotalWidth-this.thumbOuterWidth&&(this.left=this.thumbTotalWidth-this.thumbOuterWidth),this.left<0&&(this.left=0),this.core.lGalleryOn?(b.hasClass("on")||this.core.$outer.find(".lg-thumb").css("transition-duration",this.core.s.speed+"ms"),this.core.doCss()||b.animate({left:-this.left+"px"},this.core.s.speed)):this.core.doCss()||b.css("left",-this.left+"px"),this.setTranslate(this.left)}},c.prototype.enableThumbDrag=function(){var b=this,c=0,d=0,e=!1,f=!1,g=0;b.$thumbOuter.addClass("lg-grab"),b.core.$outer.find(".lg-thumb").on("mousedown.lg.thumb",function(a){b.thumbTotalWidth>b.thumbOuterWidth&&(a.preventDefault(),c=a.pageX,e=!0,b.core.$outer.scrollLeft+=1,b.core.$outer.scrollLeft-=1,b.thumbClickable=!1,b.$thumbOuter.removeClass("lg-grab").addClass("lg-grabbing"))}),a(window).on("mousemove.lg.thumb",function(a){e&&(g=b.left,f=!0,d=a.pageX,b.$thumbOuter.addClass("lg-dragging"),g-=d-c,g>b.thumbTotalWidth-b.thumbOuterWidth&&(g=b.thumbTotalWidth-b.thumbOuterWidth),g<0&&(g=0),b.setTranslate(g))}),a(window).on("mouseup.lg.thumb",function(){f?(f=!1,b.$thumbOuter.removeClass("lg-dragging"),b.left=g,Math.abs(d-c)<b.core.s.swipeThreshold&&(b.thumbClickable=!0)):b.thumbClickable=!0,e&&(e=!1,b.$thumbOuter.removeClass("lg-grabbing").addClass("lg-grab"))})},c.prototype.enableThumbSwipe=function(){var a=this,b=0,c=0,d=!1,e=0;a.core.$outer.find(".lg-thumb").on("touchstart.lg",function(c){a.thumbTotalWidth>a.thumbOuterWidth&&(c.preventDefault(),b=c.originalEvent.targetTouches[0].pageX,a.thumbClickable=!1)}),a.core.$outer.find(".lg-thumb").on("touchmove.lg",function(f){a.thumbTotalWidth>a.thumbOuterWidth&&(f.preventDefault(),c=f.originalEvent.targetTouches[0].pageX,d=!0,a.$thumbOuter.addClass("lg-dragging"),e=a.left,e-=c-b,e>a.thumbTotalWidth-a.thumbOuterWidth&&(e=a.thumbTotalWidth-a.thumbOuterWidth),e<0&&(e=0),a.setTranslate(e))}),a.core.$outer.find(".lg-thumb").on("touchend.lg",function(){a.thumbTotalWidth>a.thumbOuterWidth&&d?(d=!1,a.$thumbOuter.removeClass("lg-dragging"),Math.abs(c-b)<a.core.s.swipeThreshold&&(a.thumbClickable=!0),a.left=e):a.thumbClickable=!0})},c.prototype.toogle=function(){var a=this;a.core.s.toogleThumb&&(a.core.$outer.addClass("lg-can-toggle"),a.$thumbOuter.append('<span class="lg-toogle-thumb lg-icon"></span>'),a.core.$outer.find(".lg-toogle-thumb").on("click.lg",function(){a.core.$outer.toggleClass("lg-thumb-open")}))},c.prototype.thumbkeyPress=function(){var b=this;a(window).on("keydown.lg.thumb",function(a){38===a.keyCode?(a.preventDefault(),b.core.$outer.addClass("lg-thumb-open")):40===a.keyCode&&(a.preventDefault(),b.core.$outer.removeClass("lg-thumb-open"))})},c.prototype.destroy=function(){this.core.s.thumbnail&&this.core.$items.length>1&&(a(window).off("resize.lg.thumb orientationchange.lg.thumb keydown.lg.thumb"),
this.$thumbOuter.remove(),this.core.$outer.removeClass("lg-has-thumb"))},a.fn.lightGallery.modules.Thumbnail=c}()}),function(a,b){"function"==typeof define&&define.amd?define(["jquery"],function(a){return b(a)}):"object"==typeof exports?module.exports=b(require("jquery")):b(jQuery)}(this,function(a){!function(){"use strict";function b(a,b,c,d){var e=this;if(e.core.$slide.eq(b).find(".lg-video").append(e.loadVideo(c,"lg-object",!0,b,d)),d)if(e.core.s.videojs)try{videojs(e.core.$slide.eq(b).find(".lg-html5").get(0),e.core.s.videojsOptions,function(){!e.videoLoaded&&e.core.s.autoplayFirstVideo&&this.play()})}catch(a){console.error("Make sure you have included videojs")}else!e.videoLoaded&&e.core.s.autoplayFirstVideo&&e.core.$slide.eq(b).find(".lg-html5").get(0).play()}function c(a,b){var c=this.core.$slide.eq(b).find(".lg-video-cont");c.hasClass("lg-has-iframe")||(c.css("max-width",this.core.s.videoMaxWidth),this.videoLoaded=!0)}function d(b,c,d){var e=this,f=e.core.$slide.eq(c),g=f.find(".lg-youtube").get(0),h=f.find(".lg-vimeo").get(0),i=f.find(".lg-dailymotion").get(0),j=f.find(".lg-vk").get(0),k=f.find(".lg-html5").get(0);if(g)g.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*");else if(h)try{$f(h).api("pause")}catch(a){console.error("Make sure you have included froogaloop2 js")}else if(i)i.contentWindow.postMessage("pause","*");else if(k)if(e.core.s.videojs)try{videojs(k).pause()}catch(a){console.error("Make sure you have included videojs")}else k.pause();j&&a(j).attr("src",a(j).attr("src").replace("&autoplay","&noplay"));var l;l=e.core.s.dynamic?e.core.s.dynamicEl[d].src:e.core.$items.eq(d).attr("href")||e.core.$items.eq(d).attr("data-src");var m=e.core.isVideo(l,d)||{};(m.youtube||m.vimeo||m.dailymotion||m.vk)&&e.core.$outer.addClass("lg-hide-download")}var e={videoMaxWidth:"855px",autoplayFirstVideo:!0,youtubePlayerParams:!1,vimeoPlayerParams:!1,dailymotionPlayerParams:!1,vkPlayerParams:!1,videojs:!1,videojsOptions:{}},f=function(b){return this.core=a(b).data("lightGallery"),this.$el=a(b),this.core.s=a.extend({},e,this.core.s),this.videoLoaded=!1,this.init(),this};f.prototype.init=function(){var e=this;e.core.$el.on("hasVideo.lg.tm",b.bind(this)),e.core.$el.on("onAferAppendSlide.lg.tm",c.bind(this)),e.core.doCss()&&e.core.$items.length>1&&(e.core.s.enableSwipe||e.core.s.enableDrag)?e.core.$el.on("onSlideClick.lg.tm",function(){var a=e.core.$slide.eq(e.core.index);e.loadVideoOnclick(a)}):e.core.$slide.on("click.lg",function(){e.loadVideoOnclick(a(this))}),e.core.$el.on("onBeforeSlide.lg.tm",d.bind(this)),e.core.$el.on("onAfterSlide.lg.tm",function(a,b){e.core.$slide.eq(b).removeClass("lg-video-playing")})},f.prototype.loadVideo=function(b,c,d,e,f){var g="",h=1,i="",j=this.core.isVideo(b,e)||{};if(d&&(h=this.videoLoaded?0:this.core.s.autoplayFirstVideo?1:0),j.youtube)i="?wmode=opaque&autoplay="+h+"&enablejsapi=1",this.core.s.youtubePlayerParams&&(i=i+"&"+a.param(this.core.s.youtubePlayerParams)),g='<iframe class="lg-video-object lg-youtube '+c+'" width="560" height="315" src="//www.youtube.com/embed/'+j.youtube[1]+i+'" frameborder="0" allowfullscreen></iframe>';else if(j.vimeo)i="?autoplay="+h+"&api=1",this.core.s.vimeoPlayerParams&&(i=i+"&"+a.param(this.core.s.vimeoPlayerParams)),g='<iframe class="lg-video-object lg-vimeo '+c+'" width="560" height="315"  src="//player.vimeo.com/video/'+j.vimeo[1]+i+'" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';else if(j.dailymotion)i="?wmode=opaque&autoplay="+h+"&api=postMessage",this.core.s.dailymotionPlayerParams&&(i=i+"&"+a.param(this.core.s.dailymotionPlayerParams)),g='<iframe class="lg-video-object lg-dailymotion '+c+'" width="560" height="315" src="//www.dailymotion.com/embed/video/'+j.dailymotion[1]+i+'" frameborder="0" allowfullscreen></iframe>';else if(j.html5){var k=f.substring(0,1);"."!==k&&"#"!==k||(f=a(f).html()),g=f}else j.vk&&(i="&autoplay="+h,this.core.s.vkPlayerParams&&(i=i+"&"+a.param(this.core.s.vkPlayerParams)),g='<iframe class="lg-video-object lg-vk '+c+'" width="560" height="315" src="http://vk.com/video_ext.php?'+j.vk[1]+i+'" frameborder="0" allowfullscreen></iframe>');return g},f.prototype.loadVideoOnclick=function(a){var b=this;if(a.find(".lg-object").hasClass("lg-has-poster")&&a.find(".lg-object").is(":visible"))if(a.hasClass("lg-has-video")){var c=a.find(".lg-youtube").get(0),d=a.find(".lg-vimeo").get(0),e=a.find(".lg-dailymotion").get(0),f=a.find(".lg-html5").get(0);if(c)c.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*");else if(d)try{$f(d).api("play")}catch(a){console.error("Make sure you have included froogaloop2 js")}else if(e)e.contentWindow.postMessage("play","*");else if(f)if(b.core.s.videojs)try{videojs(f).play()}catch(a){console.error("Make sure you have included videojs")}else f.play();a.addClass("lg-video-playing")}else{a.addClass("lg-video-playing lg-has-video");var g,h,i=function(c,d){if(a.find(".lg-video").append(b.loadVideo(c,"",!1,b.core.index,d)),d)if(b.core.s.videojs)try{videojs(b.core.$slide.eq(b.core.index).find(".lg-html5").get(0),b.core.s.videojsOptions,function(){this.play()})}catch(a){console.error("Make sure you have included videojs")}else b.core.$slide.eq(b.core.index).find(".lg-html5").get(0).play()};b.core.s.dynamic?(g=b.core.s.dynamicEl[b.core.index].src,h=b.core.s.dynamicEl[b.core.index].html,i(g,h)):(g=b.core.$items.eq(b.core.index).attr("href")||b.core.$items.eq(b.core.index).attr("data-src"),h=b.core.$items.eq(b.core.index).attr("data-html"),i(g,h));var j=a.find(".lg-object");a.find(".lg-video").append(j),a.find(".lg-video-object").hasClass("lg-html5")||(a.removeClass("lg-complete"),a.find(".lg-video-object").on("load.lg error.lg",function(){a.addClass("lg-complete")}))}},f.prototype.destroy=function(){this.videoLoaded=!1},a.fn.lightGallery.modules.video=f}()}),function(a,b){"function"==typeof define&&define.amd?define(["jquery"],function(a){return b(a)}):"object"==typeof exports?module.exports=b(require("jquery")):b(jQuery)}(this,function(a){!function(){"use strict";var b=function(){var a=!1,b=navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);return b&&parseInt(b[2],10)<54&&(a=!0),a},c={scale:1,zoom:!0,actualSize:!0,enableZoomAfter:300,useLeftForZoom:b()},d=function(b){return this.core=a(b).data("lightGallery"),this.core.s=a.extend({},c,this.core.s),this.core.s.zoom&&this.core.doCss()&&(this.init(),this.zoomabletimeout=!1,this.pageX=a(window).width()/2,this.pageY=a(window).height()/2+a(window).scrollTop()),this};d.prototype.init=function(){var b=this,c='<span id="lg-zoom-in" class="lg-icon"></span><span id="lg-zoom-out" class="lg-icon"></span>';b.core.s.actualSize&&(c+='<span id="lg-actual-size" class="lg-icon"></span>'),b.core.s.useLeftForZoom?b.core.$outer.addClass("lg-use-left-for-zoom"):b.core.$outer.addClass("lg-use-transition-for-zoom"),this.core.$outer.find(".lg-toolbar").append(c),b.core.$el.on("onSlideItemLoad.lg.tm.zoom",function(c,d,e){var f=b.core.s.enableZoomAfter+e;a("body").hasClass("lg-from-hash")&&e?f=0:a("body").removeClass("lg-from-hash"),b.zoomabletimeout=setTimeout(function(){b.core.$slide.eq(d).addClass("lg-zoomable")},f+30)});var d=1,e=function(c){var d,e,f=b.core.$outer.find(".lg-current .lg-image"),g=(a(window).width()-f.prop("offsetWidth"))/2,h=(a(window).height()-f.prop("offsetHeight"))/2+a(window).scrollTop();d=b.pageX-g,e=b.pageY-h;var i=(c-1)*d,j=(c-1)*e;f.css("transform","scale3d("+c+", "+c+", 1)").attr("data-scale",c),b.core.s.useLeftForZoom?f.parent().css({left:-i+"px",top:-j+"px"}).attr("data-x",i).attr("data-y",j):f.parent().css("transform","translate3d(-"+i+"px, -"+j+"px, 0)").attr("data-x",i).attr("data-y",j)},f=function(){d>1?b.core.$outer.addClass("lg-zoomed"):b.resetZoom(),d<1&&(d=1),e(d)},g=function(c,e,g,h){var i,j=e.prop("offsetWidth");i=b.core.s.dynamic?b.core.s.dynamicEl[g].width||e[0].naturalWidth||j:b.core.$items.eq(g).attr("data-width")||e[0].naturalWidth||j;var k;b.core.$outer.hasClass("lg-zoomed")?d=1:i>j&&(k=i/j,d=k||2),h?(b.pageX=a(window).width()/2,b.pageY=a(window).height()/2+a(window).scrollTop()):(b.pageX=c.pageX||c.originalEvent.targetTouches[0].pageX,b.pageY=c.pageY||c.originalEvent.targetTouches[0].pageY),f(),setTimeout(function(){b.core.$outer.removeClass("lg-grabbing").addClass("lg-grab")},10)},h=!1;b.core.$el.on("onAferAppendSlide.lg.tm.zoom",function(a,c){var d=b.core.$slide.eq(c).find(".lg-image");d.on("dblclick",function(a){g(a,d,c)}),d.on("touchstart",function(a){h?(clearTimeout(h),h=null,g(a,d,c)):h=setTimeout(function(){h=null},300),a.preventDefault()})}),a(window).on("resize.lg.zoom scroll.lg.zoom orientationchange.lg.zoom",function(){b.pageX=a(window).width()/2,b.pageY=a(window).height()/2+a(window).scrollTop(),e(d)}),a("#lg-zoom-out").on("click.lg",function(){b.core.$outer.find(".lg-current .lg-image").length&&(d-=b.core.s.scale,f())}),a("#lg-zoom-in").on("click.lg",function(){b.core.$outer.find(".lg-current .lg-image").length&&(d+=b.core.s.scale,f())}),a("#lg-actual-size").on("click.lg",function(a){g(a,b.core.$slide.eq(b.core.index).find(".lg-image"),b.core.index,!0)}),b.core.$el.on("onBeforeSlide.lg.tm",function(){d=1,b.resetZoom()}),b.zoomDrag(),b.zoomSwipe()},d.prototype.resetZoom=function(){this.core.$outer.removeClass("lg-zoomed"),this.core.$slide.find(".lg-img-wrap").removeAttr("style data-x data-y"),this.core.$slide.find(".lg-image").removeAttr("style data-scale"),this.pageX=a(window).width()/2,this.pageY=a(window).height()/2+a(window).scrollTop()},d.prototype.zoomSwipe=function(){var a=this,b={},c={},d=!1,e=!1,f=!1;a.core.$slide.on("touchstart.lg",function(c){if(a.core.$outer.hasClass("lg-zoomed")){var d=a.core.$slide.eq(a.core.index).find(".lg-object");f=d.prop("offsetHeight")*d.attr("data-scale")>a.core.$outer.find(".lg").height(),e=d.prop("offsetWidth")*d.attr("data-scale")>a.core.$outer.find(".lg").width(),(e||f)&&(c.preventDefault(),b={x:c.originalEvent.targetTouches[0].pageX,y:c.originalEvent.targetTouches[0].pageY})}}),a.core.$slide.on("touchmove.lg",function(g){if(a.core.$outer.hasClass("lg-zoomed")){var h,i,j=a.core.$slide.eq(a.core.index).find(".lg-img-wrap");g.preventDefault(),d=!0,c={x:g.originalEvent.targetTouches[0].pageX,y:g.originalEvent.targetTouches[0].pageY},a.core.$outer.addClass("lg-zoom-dragging"),i=f?-Math.abs(j.attr("data-y"))+(c.y-b.y):-Math.abs(j.attr("data-y")),h=e?-Math.abs(j.attr("data-x"))+(c.x-b.x):-Math.abs(j.attr("data-x")),(Math.abs(c.x-b.x)>15||Math.abs(c.y-b.y)>15)&&(a.core.s.useLeftForZoom?j.css({left:h+"px",top:i+"px"}):j.css("transform","translate3d("+h+"px, "+i+"px, 0)"))}}),a.core.$slide.on("touchend.lg",function(){a.core.$outer.hasClass("lg-zoomed")&&d&&(d=!1,a.core.$outer.removeClass("lg-zoom-dragging"),a.touchendZoom(b,c,e,f))})},d.prototype.zoomDrag=function(){var b=this,c={},d={},e=!1,f=!1,g=!1,h=!1;b.core.$slide.on("mousedown.lg.zoom",function(d){var f=b.core.$slide.eq(b.core.index).find(".lg-object");h=f.prop("offsetHeight")*f.attr("data-scale")>b.core.$outer.find(".lg").height(),g=f.prop("offsetWidth")*f.attr("data-scale")>b.core.$outer.find(".lg").width(),b.core.$outer.hasClass("lg-zoomed")&&a(d.target).hasClass("lg-object")&&(g||h)&&(d.preventDefault(),c={x:d.pageX,y:d.pageY},e=!0,b.core.$outer.scrollLeft+=1,b.core.$outer.scrollLeft-=1,b.core.$outer.removeClass("lg-grab").addClass("lg-grabbing"))}),a(window).on("mousemove.lg.zoom",function(a){if(e){var i,j,k=b.core.$slide.eq(b.core.index).find(".lg-img-wrap");f=!0,d={x:a.pageX,y:a.pageY},b.core.$outer.addClass("lg-zoom-dragging"),j=h?-Math.abs(k.attr("data-y"))+(d.y-c.y):-Math.abs(k.attr("data-y")),i=g?-Math.abs(k.attr("data-x"))+(d.x-c.x):-Math.abs(k.attr("data-x")),b.core.s.useLeftForZoom?k.css({left:i+"px",top:j+"px"}):k.css("transform","translate3d("+i+"px, "+j+"px, 0)")}}),a(window).on("mouseup.lg.zoom",function(a){e&&(e=!1,b.core.$outer.removeClass("lg-zoom-dragging"),!f||c.x===d.x&&c.y===d.y||(d={x:a.pageX,y:a.pageY},b.touchendZoom(c,d,g,h)),f=!1),b.core.$outer.removeClass("lg-grabbing").addClass("lg-grab")})},d.prototype.touchendZoom=function(a,b,c,d){var e=this,f=e.core.$slide.eq(e.core.index).find(".lg-img-wrap"),g=e.core.$slide.eq(e.core.index).find(".lg-object"),h=-Math.abs(f.attr("data-x"))+(b.x-a.x),i=-Math.abs(f.attr("data-y"))+(b.y-a.y),j=(e.core.$outer.find(".lg").height()-g.prop("offsetHeight"))/2,k=Math.abs(g.prop("offsetHeight")*Math.abs(g.attr("data-scale"))-e.core.$outer.find(".lg").height()+j),l=(e.core.$outer.find(".lg").width()-g.prop("offsetWidth"))/2,m=Math.abs(g.prop("offsetWidth")*Math.abs(g.attr("data-scale"))-e.core.$outer.find(".lg").width()+l);(Math.abs(b.x-a.x)>15||Math.abs(b.y-a.y)>15)&&(d&&(i<=-k?i=-k:i>=-j&&(i=-j)),c&&(h<=-m?h=-m:h>=-l&&(h=-l)),d?f.attr("data-y",Math.abs(i)):i=-Math.abs(f.attr("data-y")),c?f.attr("data-x",Math.abs(h)):h=-Math.abs(f.attr("data-x")),e.core.s.useLeftForZoom?f.css({left:h+"px",top:i+"px"}):f.css("transform","translate3d("+h+"px, "+i+"px, 0)"))},d.prototype.destroy=function(){var b=this;b.core.$el.off(".lg.zoom"),a(window).off(".lg.zoom"),b.core.$slide.off(".lg.zoom"),b.core.$el.off(".lg.tm.zoom"),b.resetZoom(),clearTimeout(b.zoomabletimeout),b.zoomabletimeout=!1},a.fn.lightGallery.modules.zoom=d}()}),function(a,b){"function"==typeof define&&define.amd?define(["jquery"],function(a){return b(a)}):"object"==typeof exports?module.exports=b(require("jquery")):b(jQuery)}(this,function(a){!function(){"use strict";var b={hash:!0},c=function(c){return this.core=a(c).data("lightGallery"),this.core.s=a.extend({},b,this.core.s),this.core.s.hash&&(this.oldHash=window.location.hash,this.init()),this};c.prototype.init=function(){var b,c=this;c.core.$el.on("onAfterSlide.lg.tm",function(a,b,d){history.replaceState?history.replaceState(null,null,window.location.pathname+window.location.search+"#lg="+c.core.s.galleryId+"&slide="+d):window.location.hash="lg="+c.core.s.galleryId+"&slide="+d}),a(window).on("hashchange.lg.hash",function(){b=window.location.hash;var a=parseInt(b.split("&slide=")[1],10);b.indexOf("lg="+c.core.s.galleryId)>-1?c.core.slide(a,!1,!1):c.core.lGalleryOn&&c.core.destroy()})},c.prototype.destroy=function(){this.core.s.hash&&(this.oldHash&&this.oldHash.indexOf("lg="+this.core.s.galleryId)<0?history.replaceState?history.replaceState(null,null,this.oldHash):window.location.hash=this.oldHash:history.replaceState?history.replaceState(null,document.title,window.location.pathname+window.location.search):window.location.hash="",this.core.$el.off(".lg.hash"))},a.fn.lightGallery.modules.hash=c}()}),function(a,b){"function"==typeof define&&define.amd?define(["jquery"],function(a){return b(a)}):"object"==typeof exports?module.exports=b(require("jquery")):b(jQuery)}(this,function(a){!function(){"use strict";var b={share:!0,facebook:!0,facebookDropdownText:"Facebook",twitter:!0,twitterDropdownText:"Twitter",googlePlus:!0,googlePlusDropdownText:"GooglePlus",pinterest:!0,pinterestDropdownText:"Pinterest"},c=function(c){return this.core=a(c).data("lightGallery"),this.core.s=a.extend({},b,this.core.s),this.core.s.share&&this.init(),this};c.prototype.init=function(){var b=this,c='<span id="lg-share" class="lg-icon"><ul class="lg-dropdown" style="position: absolute;">';c+=b.core.s.facebook?'<li><a id="lg-share-facebook" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">'+this.core.s.facebookDropdownText+"</span></a></li>":"",c+=b.core.s.twitter?'<li><a id="lg-share-twitter" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">'+this.core.s.twitterDropdownText+"</span></a></li>":"",c+=b.core.s.googlePlus?'<li><a id="lg-share-googleplus" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">'+this.core.s.googlePlusDropdownText+"</span></a></li>":"",c+=b.core.s.pinterest?'<li><a id="lg-share-pinterest" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">'+this.core.s.pinterestDropdownText+"</span></a></li>":"",c+="</ul></span>",this.core.$outer.find(".lg-toolbar").append(c),this.core.$outer.find(".lg").append('<div id="lg-dropdown-overlay"></div>'),a("#lg-share").on("click.lg",function(){b.core.$outer.toggleClass("lg-dropdown-active")}),a("#lg-dropdown-overlay").on("click.lg",function(){b.core.$outer.removeClass("lg-dropdown-active")}),b.core.$el.on("onAfterSlide.lg.tm",function(c,d,e){setTimeout(function(){a("#lg-share-facebook").attr("href","https://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(b.getSahreProps(e,"facebookShareUrl")||window.location.href)),a("#lg-share-twitter").attr("href","https://twitter.com/intent/tweet?text="+b.getSahreProps(e,"tweetText")+"&url="+encodeURIComponent(b.getSahreProps(e,"twitterShareUrl")||window.location.href)),a("#lg-share-googleplus").attr("href","https://plus.google.com/share?url="+encodeURIComponent(b.getSahreProps(e,"googleplusShareUrl")||window.location.href)),a("#lg-share-pinterest").attr("href","http://www.pinterest.com/pin/create/button/?url="+encodeURIComponent(b.getSahreProps(e,"pinterestShareUrl")||window.location.href)+"&media="+encodeURIComponent(b.getSahreProps(e,"src"))+"&description="+b.getSahreProps(e,"pinterestText"))},100)})},c.prototype.getSahreProps=function(a,b){var c="";if(this.core.s.dynamic)c=this.core.s.dynamicEl[a][b];else{var d=this.core.$items.eq(a).attr("href"),e=this.core.$items.eq(a).data(b);c="src"===b?d||e:e}return c},c.prototype.destroy=function(){},a.fn.lightGallery.modules.share=c}()});;
/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.6.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */

!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):"undefined"!=typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){"use strict";var b=window.Slick||{};b=function(){function c(c,d){var f,g,h,e=this;if(e.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:a(c),appendDots:a(c),arrows:!0,asNavFor:null,prevArrow:'<button type="button" data-role="none" class="slick-prev">Previous</button>',nextArrow:'<button type="button" data-role="none" class="slick-next">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(a,b){return'<button type="button" data-role="none">'+(b+1)+"</button>"},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rtl:!1,slide:"",slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,variableWidth:!1,vertical:!1,waitForAnimate:!0},e.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,$list:null,touchObject:{},transformsEnabled:!1},a.extend(e,e.initials),e.activeBreakpoint=null,e.animType=null,e.animProp=null,e.breakpoints=[],e.breakpointSettings=[],e.cssTransitions=!1,e.hidden="hidden",e.paused=!1,e.positionProp=null,e.respondTo=null,e.shouldClick=!0,e.$slider=a(c),e.$slidesCache=null,e.transformType=null,e.transitionType=null,e.visibilityChange="visibilitychange",e.windowWidth=0,e.windowTimer=null,f=a(c).data("slick")||{},e.options=a.extend({},e.defaults,f,d),e.currentSlide=e.options.initialSlide,e.originalSettings=e.options,g=e.options.responsive||null,g&&g.length>-1){e.respondTo=e.options.respondTo||"window";for(h in g)g.hasOwnProperty(h)&&(e.breakpoints.push(g[h].breakpoint),e.breakpointSettings[g[h].breakpoint]=g[h].settings);e.breakpoints.sort(function(a,b){return e.options.mobileFirst===!0?a-b:b-a})}"undefined"!=typeof document.mozHidden?(e.hidden="mozHidden",e.visibilityChange="mozvisibilitychange"):"undefined"!=typeof document.msHidden?(e.hidden="msHidden",e.visibilityChange="msvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(e.hidden="webkitHidden",e.visibilityChange="webkitvisibilitychange"),e.autoPlay=a.proxy(e.autoPlay,e),e.autoPlayClear=a.proxy(e.autoPlayClear,e),e.changeSlide=a.proxy(e.changeSlide,e),e.clickHandler=a.proxy(e.clickHandler,e),e.selectHandler=a.proxy(e.selectHandler,e),e.setPosition=a.proxy(e.setPosition,e),e.swipeHandler=a.proxy(e.swipeHandler,e),e.dragHandler=a.proxy(e.dragHandler,e),e.keyHandler=a.proxy(e.keyHandler,e),e.autoPlayIterator=a.proxy(e.autoPlayIterator,e),e.instanceUid=b++,e.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,e.init(),e.checkResponsive(!0)}var b=0;return c}(),b.prototype.addSlide=b.prototype.slickAdd=function(b,c,d){var e=this;if("boolean"==typeof c)d=c,c=null;else if(0>c||c>=e.slideCount)return!1;e.unload(),"number"==typeof c?0===c&&0===e.$slides.length?a(b).appendTo(e.$slideTrack):d?a(b).insertBefore(e.$slides.eq(c)):a(b).insertAfter(e.$slides.eq(c)):d===!0?a(b).prependTo(e.$slideTrack):a(b).appendTo(e.$slideTrack),e.$slides=e.$slideTrack.children(this.options.slide),e.$slideTrack.children(this.options.slide).detach(),e.$slideTrack.append(e.$slides),e.$slides.each(function(b,c){a(c).attr("data-slick-index",b)}),e.$slidesCache=e.$slides,e.reinit()},b.prototype.animateHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.animate({height:b},a.options.speed)}},b.prototype.animateSlide=function(b,c){var d={},e=this;e.animateHeight(),e.options.rtl===!0&&e.options.vertical===!1&&(b=-b),e.transformsEnabled===!1?e.options.vertical===!1?e.$slideTrack.animate({left:b},e.options.speed,e.options.easing,c):e.$slideTrack.animate({top:b},e.options.speed,e.options.easing,c):e.cssTransitions===!1?(e.options.rtl===!0&&(e.currentLeft=-e.currentLeft),a({animStart:e.currentLeft}).animate({animStart:b},{duration:e.options.speed,easing:e.options.easing,step:function(a){a=Math.ceil(a),e.options.vertical===!1?(d[e.animType]="translate("+a+"px, 0px)",e.$slideTrack.css(d)):(d[e.animType]="translate(0px,"+a+"px)",e.$slideTrack.css(d))},complete:function(){c&&c.call()}})):(e.applyTransition(),b=Math.ceil(b),d[e.animType]=e.options.vertical===!1?"translate3d("+b+"px, 0px, 0px)":"translate3d(0px,"+b+"px, 0px)",e.$slideTrack.css(d),c&&setTimeout(function(){e.disableTransition(),c.call()},e.options.speed))},b.prototype.asNavFor=function(b){var c=this,d=null!==c.options.asNavFor?a(c.options.asNavFor).slick("getSlick"):null;null!==d&&d.slideHandler(b,!0)},b.prototype.applyTransition=function(a){var b=this,c={};c[b.transitionType]=b.options.fade===!1?b.transformType+" "+b.options.speed+"ms "+b.options.cssEase:"opacity "+b.options.speed+"ms "+b.options.cssEase,b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.autoPlay=function(){var a=this;a.autoPlayTimer&&clearInterval(a.autoPlayTimer),a.slideCount>a.options.slidesToShow&&a.paused!==!0&&(a.autoPlayTimer=setInterval(a.autoPlayIterator,a.options.autoplaySpeed))},b.prototype.autoPlayClear=function(){var a=this;a.autoPlayTimer&&clearInterval(a.autoPlayTimer)},b.prototype.autoPlayIterator=function(){var a=this;a.options.infinite===!1?1===a.direction?(a.currentSlide+1===a.slideCount-1&&(a.direction=0),a.slideHandler(a.currentSlide+a.options.slidesToScroll)):(0===a.currentSlide-1&&(a.direction=1),a.slideHandler(a.currentSlide-a.options.slidesToScroll)):a.slideHandler(a.currentSlide+a.options.slidesToScroll)},b.prototype.buildArrows=function(){var b=this;b.options.arrows===!0&&b.slideCount>b.options.slidesToShow&&(b.$prevArrow=a(b.options.prevArrow),b.$nextArrow=a(b.options.nextArrow),b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.appendTo(b.options.appendArrows),b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.appendTo(b.options.appendArrows),b.options.infinite!==!0&&b.$prevArrow.addClass("slick-disabled"))},b.prototype.buildDots=function(){var c,d,b=this;if(b.options.dots===!0&&b.slideCount>b.options.slidesToShow){for(d='<ul class="'+b.options.dotsClass+'">',c=0;c<=b.getDotCount();c+=1)d+="<li>"+b.options.customPaging.call(this,b,c)+"</li>";d+="</ul>",b.$dots=a(d).appendTo(b.options.appendDots),b.$dots.find("li").first().addClass("slick-active")}},b.prototype.buildOut=function(){var b=this;b.$slides=b.$slider.children(b.options.slide+":not(.slick-cloned)").addClass("slick-slide"),b.slideCount=b.$slides.length,b.$slides.each(function(b,c){a(c).attr("data-slick-index",b)}),b.$slidesCache=b.$slides,b.$slider.addClass("slick-slider"),b.$slideTrack=0===b.slideCount?a('<div class="slick-track"/>').appendTo(b.$slider):b.$slides.wrapAll('<div class="slick-track"/>').parent(),b.$list=b.$slideTrack.wrap('<div class="slick-list"/>').parent(),b.$slideTrack.css("opacity",0),(b.options.centerMode===!0||b.options.swipeToSlide===!0)&&(b.options.slidesToScroll=1),a("img[data-lazy]",b.$slider).not("[src]").addClass("slick-loading"),b.setupInfinite(),b.buildArrows(),b.buildDots(),b.updateDots(),b.options.accessibility===!0&&b.$list.prop("tabIndex",0),b.setSlideClasses("number"==typeof this.currentSlide?this.currentSlide:0),b.options.draggable===!0&&b.$list.addClass("draggable")},b.prototype.checkResponsive=function(b){var d,e,f,c=this,g=c.$slider.width(),h=window.innerWidth||a(window).width();if("window"===c.respondTo?f=h:"slider"===c.respondTo?f=g:"min"===c.respondTo&&(f=Math.min(h,g)),c.originalSettings.responsive&&c.originalSettings.responsive.length>-1&&null!==c.originalSettings.responsive){e=null;for(d in c.breakpoints)c.breakpoints.hasOwnProperty(d)&&(c.originalSettings.mobileFirst===!1?f<c.breakpoints[d]&&(e=c.breakpoints[d]):f>c.breakpoints[d]&&(e=c.breakpoints[d]));null!==e?null!==c.activeBreakpoint?e!==c.activeBreakpoint&&(c.activeBreakpoint=e,"unslick"===c.breakpointSettings[e]?c.unslick():(c.options=a.extend({},c.originalSettings,c.breakpointSettings[e]),b===!0&&(c.currentSlide=c.options.initialSlide),c.refresh())):(c.activeBreakpoint=e,"unslick"===c.breakpointSettings[e]?c.unslick():(c.options=a.extend({},c.originalSettings,c.breakpointSettings[e]),b===!0&&(c.currentSlide=c.options.initialSlide),c.refresh())):null!==c.activeBreakpoint&&(c.activeBreakpoint=null,c.options=c.originalSettings,b===!0&&(c.currentSlide=c.options.initialSlide),c.refresh())}},b.prototype.changeSlide=function(b,c){var f,g,h,d=this,e=a(b.target);switch(e.is("a")&&b.preventDefault(),h=0!==d.slideCount%d.options.slidesToScroll,f=h?0:(d.slideCount-d.currentSlide)%d.options.slidesToScroll,b.data.message){case"previous":g=0===f?d.options.slidesToScroll:d.options.slidesToShow-f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide-g,!1,c);break;case"next":g=0===f?d.options.slidesToScroll:f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide+g,!1,c);break;case"index":var i=0===b.data.index?0:b.data.index||a(b.target).parent().index()*d.options.slidesToScroll;d.slideHandler(d.checkNavigable(i),!1,c);break;default:return}},b.prototype.checkNavigable=function(a){var c,d,b=this;if(c=b.getNavigableIndexes(),d=0,a>c[c.length-1])a=c[c.length-1];else for(var e in c){if(a<c[e]){a=d;break}d=c[e]}return a},b.prototype.clickHandler=function(a){var b=this;b.shouldClick===!1&&(a.stopImmediatePropagation(),a.stopPropagation(),a.preventDefault())},b.prototype.destroy=function(){var b=this;b.autoPlayClear(),b.touchObject={},a(".slick-cloned",b.$slider).remove(),b.$dots&&b.$dots.remove(),b.$prevArrow&&"object"!=typeof b.options.prevArrow&&b.$prevArrow.remove(),b.$nextArrow&&"object"!=typeof b.options.nextArrow&&b.$nextArrow.remove(),b.$slides.removeClass("slick-slide slick-active slick-center slick-visible").removeAttr("data-slick-index").css({position:"",left:"",top:"",zIndex:"",opacity:"",width:""}),b.$slider.removeClass("slick-slider"),b.$slider.removeClass("slick-initialized"),b.$list.off(".slick"),a(window).off(".slick-"+b.instanceUid),a(document).off(".slick-"+b.instanceUid),b.$slider.html(b.$slides)},b.prototype.disableTransition=function(a){var b=this,c={};c[b.transitionType]="",b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.fadeSlide=function(a,b){var c=this;c.cssTransitions===!1?(c.$slides.eq(a).css({zIndex:1e3}),c.$slides.eq(a).animate({opacity:1},c.options.speed,c.options.easing,b)):(c.applyTransition(a),c.$slides.eq(a).css({opacity:1,zIndex:1e3}),b&&setTimeout(function(){c.disableTransition(a),b.call()},c.options.speed))},b.prototype.filterSlides=b.prototype.slickFilter=function(a){var b=this;null!==a&&(b.unload(),b.$slideTrack.children(this.options.slide).detach(),b.$slidesCache.filter(a).appendTo(b.$slideTrack),b.reinit())},b.prototype.getCurrent=b.prototype.slickCurrentSlide=function(){var a=this;return a.currentSlide},b.prototype.getDotCount=function(){var a=this,b=0,c=0,d=0;if(a.options.infinite===!0)d=Math.ceil(a.slideCount/a.options.slidesToScroll);else if(a.options.centerMode===!0)d=a.slideCount;else for(;b<a.slideCount;)++d,b=c+a.options.slidesToShow,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;return d-1},b.prototype.getLeft=function(a){var c,d,f,b=this,e=0;return b.slideOffset=0,d=b.$slides.first().outerHeight(),b.options.infinite===!0?(b.slideCount>b.options.slidesToShow&&(b.slideOffset=-1*b.slideWidth*b.options.slidesToShow,e=-1*d*b.options.slidesToShow),0!==b.slideCount%b.options.slidesToScroll&&a+b.options.slidesToScroll>b.slideCount&&b.slideCount>b.options.slidesToShow&&(a>b.slideCount?(b.slideOffset=-1*(b.options.slidesToShow-(a-b.slideCount))*b.slideWidth,e=-1*(b.options.slidesToShow-(a-b.slideCount))*d):(b.slideOffset=-1*b.slideCount%b.options.slidesToScroll*b.slideWidth,e=-1*b.slideCount%b.options.slidesToScroll*d))):a+b.options.slidesToShow>b.slideCount&&(b.slideOffset=(a+b.options.slidesToShow-b.slideCount)*b.slideWidth,e=(a+b.options.slidesToShow-b.slideCount)*d),b.slideCount<=b.options.slidesToShow&&(b.slideOffset=0,e=0),b.options.centerMode===!0&&b.options.infinite===!0?b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)-b.slideWidth:b.options.centerMode===!0&&(b.slideOffset=0,b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)),c=b.options.vertical===!1?-1*a*b.slideWidth+b.slideOffset:-1*a*d+e,b.options.variableWidth===!0&&(f=b.slideCount<=b.options.slidesToShow||b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow),c=f[0]?-1*f[0].offsetLeft:0,b.options.centerMode===!0&&(f=b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow+1),c=f[0]?-1*f[0].offsetLeft:0,c+=(b.$list.width()-f.outerWidth())/2)),c},b.prototype.getOption=b.prototype.slickGetOption=function(a){var b=this;return b.options[a]},b.prototype.getNavigableIndexes=function(){var e,a=this,b=0,c=0,d=[];for(a.options.infinite===!1?(e=a.slideCount-a.options.slidesToShow+1,a.options.centerMode===!0&&(e=a.slideCount)):(b=-1*a.slideCount,c=-1*a.slideCount,e=2*a.slideCount);e>b;)d.push(b),b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;return d},b.prototype.getSlick=function(){return this},b.prototype.getSlideCount=function(){var c,d,e,b=this;return e=b.options.centerMode===!0?b.slideWidth*Math.floor(b.options.slidesToShow/2):0,b.options.swipeToSlide===!0?(b.$slideTrack.find(".slick-slide").each(function(c,f){return f.offsetLeft-e+a(f).outerWidth()/2>-1*b.swipeLeft?(d=f,!1):void 0}),c=Math.abs(a(d).attr("data-slick-index")-b.currentSlide)||1):b.options.slidesToScroll},b.prototype.goTo=b.prototype.slickGoTo=function(a,b){var c=this;c.changeSlide({data:{message:"index",index:parseInt(a)}},b)},b.prototype.init=function(){var b=this;a(b.$slider).hasClass("slick-initialized")||(a(b.$slider).addClass("slick-initialized"),b.buildOut(),b.setProps(),b.startLoad(),b.loadSlider(),b.initializeEvents(),b.updateArrows(),b.updateDots()),b.$slider.trigger("init",[b])},b.prototype.initArrowEvents=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.on("click.slick",{message:"previous"},a.changeSlide),a.$nextArrow.on("click.slick",{message:"next"},a.changeSlide))},b.prototype.initDotEvents=function(){var b=this;b.options.dots===!0&&b.slideCount>b.options.slidesToShow&&a("li",b.$dots).on("click.slick",{message:"index"},b.changeSlide),b.options.dots===!0&&b.options.pauseOnDotsHover===!0&&b.options.autoplay===!0&&a("li",b.$dots).on("mouseenter.slick",function(){b.paused=!0,b.autoPlayClear()}).on("mouseleave.slick",function(){b.paused=!1,b.autoPlay()})},b.prototype.initializeEvents=function(){var b=this;b.initArrowEvents(),b.initDotEvents(),b.$list.on("touchstart.slick mousedown.slick",{action:"start"},b.swipeHandler),b.$list.on("touchmove.slick mousemove.slick",{action:"move"},b.swipeHandler),b.$list.on("touchend.slick mouseup.slick",{action:"end"},b.swipeHandler),b.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},b.swipeHandler),b.$list.on("click.slick",b.clickHandler),b.options.autoplay===!0&&(a(document).on(b.visibilityChange,function(){b.visibility()}),b.options.pauseOnHover===!0&&(b.$list.on("mouseenter.slick",function(){b.paused=!0,b.autoPlayClear()}),b.$list.on("mouseleave.slick",function(){b.paused=!1,b.autoPlay()}))),b.options.accessibility===!0&&b.$list.on("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),a(window).on("orientationchange.slick.slick-"+b.instanceUid,function(){b.checkResponsive(),b.setPosition()}),a(window).on("resize.slick.slick-"+b.instanceUid,function(){a(window).width()!==b.windowWidth&&(clearTimeout(b.windowDelay),b.windowDelay=window.setTimeout(function(){b.windowWidth=a(window).width(),b.checkResponsive(),b.setPosition()},50))}),a("*[draggable!=true]",b.$slideTrack).on("dragstart",function(a){a.preventDefault()}),a(window).on("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).on("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.initUI=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.show(),a.$nextArrow.show()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.show(),a.options.autoplay===!0&&a.autoPlay()},b.prototype.keyHandler=function(a){var b=this;37===a.keyCode&&b.options.accessibility===!0?b.changeSlide({data:{message:"previous"}}):39===a.keyCode&&b.options.accessibility===!0&&b.changeSlide({data:{message:"next"}})},b.prototype.lazyLoad=function(){function g(b){a("img[data-lazy]",b).each(function(){var b=a(this),c=a(this).attr("data-lazy");b.load(function(){b.animate({opacity:1},200)}).css({opacity:0}).attr("src",c).removeAttr("data-lazy").removeClass("slick-loading")})}var c,d,e,f,b=this;b.options.centerMode===!0?b.options.infinite===!0?(e=b.currentSlide+(b.options.slidesToShow/2+1),f=e+b.options.slidesToShow+2):(e=Math.max(0,b.currentSlide-(b.options.slidesToShow/2+1)),f=2+(b.options.slidesToShow/2+1)+b.currentSlide):(e=b.options.infinite?b.options.slidesToShow+b.currentSlide:b.currentSlide,f=e+b.options.slidesToShow,b.options.fade===!0&&(e>0&&e--,f<=b.slideCount&&f++)),c=b.$slider.find(".slick-slide").slice(e,f),g(c),b.slideCount<=b.options.slidesToShow?(d=b.$slider.find(".slick-slide"),g(d)):b.currentSlide>=b.slideCount-b.options.slidesToShow?(d=b.$slider.find(".slick-cloned").slice(0,b.options.slidesToShow),g(d)):0===b.currentSlide&&(d=b.$slider.find(".slick-cloned").slice(-1*b.options.slidesToShow),g(d))},b.prototype.loadSlider=function(){var a=this;a.setPosition(),a.$slideTrack.css({opacity:1}),a.$slider.removeClass("slick-loading"),a.initUI(),"progressive"===a.options.lazyLoad&&a.progressiveLazyLoad()},b.prototype.next=b.prototype.slickNext=function(){var a=this;a.changeSlide({data:{message:"next"}})},b.prototype.pause=b.prototype.slickPause=function(){var a=this;a.autoPlayClear(),a.paused=!0},b.prototype.play=b.prototype.slickPlay=function(){var a=this;a.paused=!1,a.autoPlay()},b.prototype.postSlide=function(a){var b=this;b.$slider.trigger("afterChange",[b,a]),b.animating=!1,b.setPosition(),b.swipeLeft=null,b.options.autoplay===!0&&b.paused===!1&&b.autoPlay()},b.prototype.prev=b.prototype.slickPrev=function(){var a=this;a.changeSlide({data:{message:"previous"}})},b.prototype.progressiveLazyLoad=function(){var c,d,b=this;c=a("img[data-lazy]",b.$slider).length,c>0&&(d=a("img[data-lazy]",b.$slider).first(),d.attr("src",d.attr("data-lazy")).removeClass("slick-loading").load(function(){d.removeAttr("data-lazy"),b.progressiveLazyLoad()}).error(function(){d.removeAttr("data-lazy"),b.progressiveLazyLoad()}))},b.prototype.refresh=function(){var b=this,c=b.currentSlide;b.destroy(),a.extend(b,b.initials),b.init(),b.changeSlide({data:{message:"index",index:c}},!0)},b.prototype.reinit=function(){var b=this;b.$slides=b.$slideTrack.children(b.options.slide).addClass("slick-slide"),b.slideCount=b.$slides.length,b.currentSlide>=b.slideCount&&0!==b.currentSlide&&(b.currentSlide=b.currentSlide-b.options.slidesToScroll),b.slideCount<=b.options.slidesToShow&&(b.currentSlide=0),b.setProps(),b.setupInfinite(),b.buildArrows(),b.updateArrows(),b.initArrowEvents(),b.buildDots(),b.updateDots(),b.initDotEvents(),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),b.setSlideClasses(0),b.setPosition(),b.$slider.trigger("reInit",[b])},b.prototype.removeSlide=b.prototype.slickRemove=function(a,b,c){var d=this;return"boolean"==typeof a?(b=a,a=b===!0?0:d.slideCount-1):a=b===!0?--a:a,d.slideCount<1||0>a||a>d.slideCount-1?!1:(d.unload(),c===!0?d.$slideTrack.children().remove():d.$slideTrack.children(this.options.slide).eq(a).remove(),d.$slides=d.$slideTrack.children(this.options.slide),d.$slideTrack.children(this.options.slide).detach(),d.$slideTrack.append(d.$slides),d.$slidesCache=d.$slides,d.reinit(),void 0)},b.prototype.setCSS=function(a){var d,e,b=this,c={};b.options.rtl===!0&&(a=-a),d="left"==b.positionProp?Math.ceil(a)+"px":"0px",e="top"==b.positionProp?Math.ceil(a)+"px":"0px",c[b.positionProp]=a,b.transformsEnabled===!1?b.$slideTrack.css(c):(c={},b.cssTransitions===!1?(c[b.animType]="translate("+d+", "+e+")",b.$slideTrack.css(c)):(c[b.animType]="translate3d("+d+", "+e+", 0px)",b.$slideTrack.css(c)))},b.prototype.setDimensions=function(){var a=this;if(a.options.vertical===!1?a.options.centerMode===!0&&a.$list.css({padding:"0px "+a.options.centerPadding}):(a.$list.height(a.$slides.first().outerHeight(!0)*a.options.slidesToShow),a.options.centerMode===!0&&a.$list.css({padding:a.options.centerPadding+" 0px"})),a.listWidth=a.$list.width(),a.listHeight=a.$list.height(),a.options.vertical===!1&&a.options.variableWidth===!1)a.slideWidth=Math.ceil(a.listWidth/a.options.slidesToShow),a.$slideTrack.width(Math.ceil(a.slideWidth*a.$slideTrack.children(".slick-slide").length));else if(a.options.variableWidth===!0){var b=0;a.slideWidth=Math.ceil(a.listWidth/a.options.slidesToShow),a.$slideTrack.children(".slick-slide").each(function(){b+=a.listWidth}),a.$slideTrack.width(Math.ceil(b)+1)}else a.slideWidth=Math.ceil(a.listWidth),a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0)*a.$slideTrack.children(".slick-slide").length));var c=a.$slides.first().outerWidth(!0)-a.$slides.first().width();a.options.variableWidth===!1&&a.$slideTrack.children(".slick-slide").width(a.slideWidth-c)},b.prototype.setFade=function(){var c,b=this;b.$slides.each(function(d,e){c=-1*b.slideWidth*d,b.options.rtl===!0?a(e).css({position:"relative",right:c,top:0,zIndex:800,opacity:0}):a(e).css({position:"relative",left:c,top:0,zIndex:800,opacity:0})}),b.$slides.eq(b.currentSlide).css({zIndex:900,opacity:1})},b.prototype.setHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.css("height",b)}},b.prototype.setOption=b.prototype.slickSetOption=function(a,b,c){var d=this;d.options[a]=b,c===!0&&(d.unload(),d.reinit())},b.prototype.setPosition=function(){var a=this;a.setDimensions(),a.setHeight(),a.options.fade===!1?a.setCSS(a.getLeft(a.currentSlide)):a.setFade(),a.$slider.trigger("setPosition",[a])},b.prototype.setProps=function(){var a=this,b=document.body.style;a.positionProp=a.options.vertical===!0?"top":"left","top"===a.positionProp?a.$slider.addClass("slick-vertical"):a.$slider.removeClass("slick-vertical"),(void 0!==b.WebkitTransition||void 0!==b.MozTransition||void 0!==b.msTransition)&&a.options.useCSS===!0&&(a.cssTransitions=!0),void 0!==b.OTransform&&(a.animType="OTransform",a.transformType="-o-transform",a.transitionType="OTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.MozTransform&&(a.animType="MozTransform",a.transformType="-moz-transform",a.transitionType="MozTransition",void 0===b.perspectiveProperty&&void 0===b.MozPerspective&&(a.animType=!1)),void 0!==b.webkitTransform&&(a.animType="webkitTransform",a.transformType="-webkit-transform",a.transitionType="webkitTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.msTransform&&(a.animType="msTransform",a.transformType="-ms-transform",a.transitionType="msTransition",void 0===b.msTransform&&(a.animType=!1)),void 0!==b.transform&&a.animType!==!1&&(a.animType="transform",a.transformType="transform",a.transitionType="transition"),a.transformsEnabled=null!==a.animType&&a.animType!==!1},b.prototype.setSlideClasses=function(a){var c,d,e,f,b=this;b.$slider.find(".slick-slide").removeClass("slick-active").removeClass("slick-center"),d=b.$slider.find(".slick-slide"),b.options.centerMode===!0?(c=Math.floor(b.options.slidesToShow/2),b.options.infinite===!0&&(a>=c&&a<=b.slideCount-1-c?b.$slides.slice(a-c,a+c+1).addClass("slick-active"):(e=b.options.slidesToShow+a,d.slice(e-c+1,e+c+2).addClass("slick-active")),0===a?d.eq(d.length-1-b.options.slidesToShow).addClass("slick-center"):a===b.slideCount-1&&d.eq(b.options.slidesToShow).addClass("slick-center")),b.$slides.eq(a).addClass("slick-center")):a>=0&&a<=b.slideCount-b.options.slidesToShow?b.$slides.slice(a,a+b.options.slidesToShow).addClass("slick-active"):d.length<=b.options.slidesToShow?d.addClass("slick-active"):(f=b.slideCount%b.options.slidesToShow,e=b.options.infinite===!0?b.options.slidesToShow+a:a,b.options.slidesToShow==b.options.slidesToScroll&&b.slideCount-a<b.options.slidesToShow?d.slice(e-(b.options.slidesToShow-f),e+f).addClass("slick-active"):d.slice(e,e+b.options.slidesToShow).addClass("slick-active")),"ondemand"===b.options.lazyLoad&&b.lazyLoad()},b.prototype.setupInfinite=function(){var c,d,e,b=this;if(b.options.fade===!0&&(b.options.centerMode=!1),b.options.infinite===!0&&b.options.fade===!1&&(d=null,b.slideCount>b.options.slidesToShow)){for(e=b.options.centerMode===!0?b.options.slidesToShow+1:b.options.slidesToShow,c=b.slideCount;c>b.slideCount-e;c-=1)d=c-1,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d-b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");for(c=0;e>c;c+=1)d=c,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d+b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");b.$slideTrack.find(".slick-cloned").find("[id]").each(function(){a(this).attr("id","")})}},b.prototype.selectHandler=function(b){var c=this,d=parseInt(a(b.target).parents(".slick-slide").attr("data-slick-index"));return d||(d=0),c.slideCount<=c.options.slidesToShow?(c.$slider.find(".slick-slide").removeClass("slick-active"),c.$slides.eq(d).addClass("slick-active"),c.options.centerMode===!0&&(c.$slider.find(".slick-slide").removeClass("slick-center"),c.$slides.eq(d).addClass("slick-center")),c.asNavFor(d),void 0):(c.slideHandler(d),void 0)},b.prototype.slideHandler=function(a,b,c){var d,e,f,g,h=null,i=this;return b=b||!1,i.animating===!0&&i.options.waitForAnimate===!0||i.options.fade===!0&&i.currentSlide===a||i.slideCount<=i.options.slidesToShow?void 0:(b===!1&&i.asNavFor(a),d=a,h=i.getLeft(d),g=i.getLeft(i.currentSlide),i.currentLeft=null===i.swipeLeft?g:i.swipeLeft,i.options.infinite===!1&&i.options.centerMode===!1&&(0>a||a>i.getDotCount()*i.options.slidesToScroll)?(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d)}):i.postSlide(d)),void 0):i.options.infinite===!1&&i.options.centerMode===!0&&(0>a||a>i.slideCount-i.options.slidesToScroll)?(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d)}):i.postSlide(d)),void 0):(i.options.autoplay===!0&&clearInterval(i.autoPlayTimer),e=0>d?0!==i.slideCount%i.options.slidesToScroll?i.slideCount-i.slideCount%i.options.slidesToScroll:i.slideCount+d:d>=i.slideCount?0!==i.slideCount%i.options.slidesToScroll?0:d-i.slideCount:d,i.animating=!0,i.$slider.trigger("beforeChange",[i,i.currentSlide,e]),f=i.currentSlide,i.currentSlide=e,i.setSlideClasses(i.currentSlide),i.updateDots(),i.updateArrows(),i.options.fade===!0?(c!==!0?i.fadeSlide(e,function(){i.postSlide(e)}):i.postSlide(e),i.animateHeight(),void 0):(c!==!0?i.animateSlide(h,function(){i.postSlide(e)}):i.postSlide(e),void 0)))},b.prototype.startLoad=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.hide(),a.$nextArrow.hide()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.hide(),a.$slider.addClass("slick-loading")},b.prototype.swipeDirection=function(){var a,b,c,d,e=this;return a=e.touchObject.startX-e.touchObject.curX,b=e.touchObject.startY-e.touchObject.curY,c=Math.atan2(b,a),d=Math.round(180*c/Math.PI),0>d&&(d=360-Math.abs(d)),45>=d&&d>=0?e.options.rtl===!1?"left":"right":360>=d&&d>=315?e.options.rtl===!1?"left":"right":d>=135&&225>=d?e.options.rtl===!1?"right":"left":"vertical"},b.prototype.swipeEnd=function(){var c,b=this;if(b.dragging=!1,b.shouldClick=b.touchObject.swipeLength>10?!1:!0,void 0===b.touchObject.curX)return!1;if(b.touchObject.edgeHit===!0&&b.$slider.trigger("edge",[b,b.swipeDirection()]),b.touchObject.swipeLength>=b.touchObject.minSwipe)switch(b.swipeDirection()){case"left":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide+b.getSlideCount()):b.currentSlide+b.getSlideCount(),b.slideHandler(c),b.currentDirection=0,b.touchObject={},b.$slider.trigger("swipe",[b,"left"]);break;case"right":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide-b.getSlideCount()):b.currentSlide-b.getSlideCount(),b.slideHandler(c),b.currentDirection=1,b.touchObject={},b.$slider.trigger("swipe",[b,"right"])}else b.touchObject.startX!==b.touchObject.curX&&(b.slideHandler(b.currentSlide),b.touchObject={})},b.prototype.swipeHandler=function(a){var b=this;if(!(b.options.swipe===!1||"ontouchend"in document&&b.options.swipe===!1||b.options.draggable===!1&&-1!==a.type.indexOf("mouse")))switch(b.touchObject.fingerCount=a.originalEvent&&void 0!==a.originalEvent.touches?a.originalEvent.touches.length:1,b.touchObject.minSwipe=b.listWidth/b.options.touchThreshold,a.data.action){case"start":b.swipeStart(a);break;case"move":b.swipeMove(a);break;case"end":b.swipeEnd(a)}},b.prototype.swipeMove=function(a){var d,e,f,g,h,b=this;return h=void 0!==a.originalEvent?a.originalEvent.touches:null,!b.dragging||h&&1!==h.length?!1:(d=b.getLeft(b.currentSlide),b.touchObject.curX=void 0!==h?h[0].pageX:a.clientX,b.touchObject.curY=void 0!==h?h[0].pageY:a.clientY,b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curX-b.touchObject.startX,2))),e=b.swipeDirection(),"vertical"!==e?(void 0!==a.originalEvent&&b.touchObject.swipeLength>4&&a.preventDefault(),g=(b.options.rtl===!1?1:-1)*(b.touchObject.curX>b.touchObject.startX?1:-1),f=b.touchObject.swipeLength,b.touchObject.edgeHit=!1,b.options.infinite===!1&&(0===b.currentSlide&&"right"===e||b.currentSlide>=b.getDotCount()&&"left"===e)&&(f=b.touchObject.swipeLength*b.options.edgeFriction,b.touchObject.edgeHit=!0),b.swipeLeft=b.options.vertical===!1?d+f*g:d+f*(b.$list.height()/b.listWidth)*g,b.options.fade===!0||b.options.touchMove===!1?!1:b.animating===!0?(b.swipeLeft=null,!1):(b.setCSS(b.swipeLeft),void 0)):void 0)},b.prototype.swipeStart=function(a){var c,b=this;return 1!==b.touchObject.fingerCount||b.slideCount<=b.options.slidesToShow?(b.touchObject={},!1):(void 0!==a.originalEvent&&void 0!==a.originalEvent.touches&&(c=a.originalEvent.touches[0]),b.touchObject.startX=b.touchObject.curX=void 0!==c?c.pageX:a.clientX,b.touchObject.startY=b.touchObject.curY=void 0!==c?c.pageY:a.clientY,b.dragging=!0,void 0)},b.prototype.unfilterSlides=b.prototype.slickUnfilter=function(){var a=this;null!==a.$slidesCache&&(a.unload(),a.$slideTrack.children(this.options.slide).detach(),a.$slidesCache.appendTo(a.$slideTrack),a.reinit())},b.prototype.unload=function(){var b=this;a(".slick-cloned",b.$slider).remove(),b.$dots&&b.$dots.remove(),b.$prevArrow&&"object"!=typeof b.options.prevArrow&&b.$prevArrow.remove(),b.$nextArrow&&"object"!=typeof b.options.nextArrow&&b.$nextArrow.remove(),b.$slides.removeClass("slick-slide slick-active slick-visible").css("width","")},b.prototype.unslick=function(){var a=this;a.destroy()},b.prototype.updateArrows=function(){var b,a=this;b=Math.floor(a.options.slidesToShow/2),a.options.arrows===!0&&a.options.infinite!==!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.removeClass("slick-disabled"),a.$nextArrow.removeClass("slick-disabled"),0===a.currentSlide?(a.$prevArrow.addClass("slick-disabled"),a.$nextArrow.removeClass("slick-disabled")):a.currentSlide>=a.slideCount-a.options.slidesToShow&&a.options.centerMode===!1?(a.$nextArrow.addClass("slick-disabled"),a.$prevArrow.removeClass("slick-disabled")):a.currentSlide>=a.slideCount-1&&a.options.centerMode===!0&&(a.$nextArrow.addClass("slick-disabled"),a.$prevArrow.removeClass("slick-disabled")))
},b.prototype.updateDots=function(){var a=this;null!==a.$dots&&(a.$dots.find("li").removeClass("slick-active"),a.$dots.find("li").eq(Math.floor(a.currentSlide/a.options.slidesToScroll)).addClass("slick-active"))},b.prototype.visibility=function(){var a=this;document[a.hidden]?(a.paused=!0,a.autoPlayClear()):(a.paused=!1,a.autoPlay())},a.fn.slick=function(){var g,a=this,c=arguments[0],d=Array.prototype.slice.call(arguments,1),e=a.length,f=0;for(f;e>f;f++)if("object"==typeof c||"undefined"==typeof c?a[f].slick=new b(a[f],c):g=a[f].slick[c].apply(a[f].slick,d),"undefined"!=typeof g)return g;return a},a(function(){a("[data-slick]").slick()})});

(function ($) {
   $(document).ready(function() {
      $('.slider-center-slick').slick({
         slidesToShow: 1,
         slidesToScroll: 1,
         dots: true,
         arrows: true,
         slide: 'div',
         vertical: false,
         centerMode: true,
         centerPadding: '25%',
         focusOnSelect: true,
         loop: true,
         autoplay: true,
         nextArrow: '<div class="next-arrow"><i class="gv-icon-165"></i></div>',
         prevArrow: '<div class="prev-arrow"><i class="gv-icon-164"></i></div>',
         responsive: [
            {
               breakpoint: 1200,
               settings: {
                 slidesToShow: 1,
                 slidesToScroll: 1,
                 infinite: true,
                 vertical: false,
                 centerMode: true,
                 centerPadding: '15%',
               }
            },
            {
               breakpoint: 980,
               settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  vertical: false,
                  centerMode: true,
                  centerPadding: '10%',
               }
            },
            {
               breakpoint: 767,
               settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  vertical: false,
                  centerMode: true,
                  centerPadding: '0',
               }
            },
            {
               breakpoint: 480,
               settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  vertical: false,
                  centerMode: true,
                  centerPadding: '0',
               }
            }
         ]
      });

   });

})(jQuery);
;
/*
    JQuery Advanced News Ticker 1.0.11 (20/02/14)
    created by risq
    website (docs & demos) : http://risq.github.io/jquery-advanced-news-ticker/
*/
(function(b,k,l,m){function g(a,f){this.element=a;this.$el=b(a);this.options=b.extend({},c,f);this._defaults=c;this._name=d;this.moveInterval;this.moving=this.paused=this.state=0;(this.$el.is("ul")||this.$el.is("ol"))&&this.init()}var d="newsTicker",c={row_height:20,max_rows:3,speed:400,duration:2500,direction:"up",autostart:1,pauseOnHover:1,nextButton:null,prevButton:null,startButton:null,stopButton:null,hasMoved:function(){},movingUp:function(){},movingDown:function(){},start:function(){},stop:function(){},
pause:function(){},unpause:function(){}};g.prototype={init:function(){this.$el.height(this.options.row_height*this.options.max_rows).css({overflow:"hidden"});this.checkSpeed();this.options.nextButton&&"undefined"!==typeof this.options.nextButton[0]&&this.options.nextButton.click(function(a){this.moveNext();this.resetInterval()}.bind(this));this.options.prevButton&&"undefined"!==typeof this.options.prevButton[0]&&this.options.prevButton.click(function(a){this.movePrev();this.resetInterval()}.bind(this));
this.options.stopButton&&"undefined"!==typeof this.options.stopButton[0]&&this.options.stopButton.click(function(a){this.stop()}.bind(this));this.options.startButton&&"undefined"!==typeof this.options.startButton[0]&&this.options.startButton.click(function(a){this.start()}.bind(this));this.options.pauseOnHover&&this.$el.hover(function(){this.state&&this.pause()}.bind(this),function(){this.state&&this.unpause()}.bind(this));this.options.autostart&&this.start()},start:function(){this.state||(this.state=
1,this.resetInterval(),this.options.start())},stop:function(){this.state&&(clearInterval(this.moveInterval),this.state=0,this.options.stop())},resetInterval:function(){this.state&&(clearInterval(this.moveInterval),this.moveInterval=setInterval(function(){this.move()}.bind(this),this.options.duration))},move:function(){this.paused||this.moveNext()},moveNext:function(){"down"===this.options.direction?this.moveDown():"up"===this.options.direction&&this.moveUp()},movePrev:function(){"down"===this.options.direction?
this.moveUp():"up"===this.options.direction&&this.moveDown()},pause:function(){this.paused||(this.paused=1);this.options.pause()},unpause:function(){this.paused&&(this.paused=0);this.options.unpause()},moveDown:function(){this.moving||(this.moving=1,this.options.movingDown(),this.$el.children("li:last").detach().prependTo(this.$el).css("marginTop","-"+this.options.row_height+"px").animate({marginTop:"0px"},this.options.speed,function(){this.moving=0;this.options.hasMoved()}.bind(this)))},moveUp:function(){if(!this.moving){this.moving=
1;this.options.movingUp();var a=this.$el.children("li:first");a.animate({marginTop:"-"+this.options.row_height+"px"},this.options.speed,function(){a.detach().css("marginTop","0").appendTo(this.$el);this.moving=0;this.options.hasMoved()}.bind(this))}},updateOption:function(a,b){"undefined"!==typeof this.options[a]&&(this.options[a]=b,"duration"==a||"speed"==a)&&(this.checkSpeed(),this.resetInterval())},add:function(a){this.$el.append(b("<li>").html(a))},getState:function(){return paused?2:this.state},
checkSpeed:function(){this.options.duration<this.options.speed+25&&(this.options.speed=this.options.duration-25)},destroy:function(){this._destroy()}};b.fn[d]=function(a){var f=arguments;return this.each(function(){var c=b(this),e=b.data(this,"plugin_"+d),h="object"===typeof a&&a;e||c.data("plugin_"+d,e=new g(this,h));"string"===typeof a&&e[a].apply(e,Array.prototype.slice.call(f,1))})}})(jQuery,window,document);;
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.AOS=t():e.AOS=t()}(this,function(){return function(e){function t(n){if(o[n])return o[n].exports;var i=o[n]={exports:{},id:n,loaded:!1};return e[n].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var o={};return t.m=e,t.c=o,t.p="dist/",t(0)}([function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}var i=o(1),a=(n(i),o(5)),r=n(a),c=o(6),s=n(c),u=o(7),d=n(u),f=o(8),l=n(f),m=o(9),p=n(m),b=o(10),v=n(b),g=o(13),y=n(g),w=[],h=!1,k={offset:220,delay:0,easing:"ease",duration:400,disable:!1,once:!0,startEvent:"DOMContentLoaded"},x=function(){var e=arguments.length<=0||void 0===arguments[0]?!1:arguments[0];return e&&(h=!0),h?(w=(0,v["default"])(w,k),(0,p["default"])(w,k.once),w):void 0},j=function(){w=(0,y["default"])(),x()},_=function(e){return k=Object.assign(k,e),w=(0,y["default"])(),k.disable&&(k.disable===!0||"mobile"===k.disable&&l["default"].mobile()||"phone"===k.disable&&l["default"].phone()||"tablet"===k.disable&&l["default"].tablet()||"function"==typeof k.disable&&k.disable()===!0)?(w.forEach(function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")}),!1):(document.querySelector("body").setAttribute("data-aos-easing",k.easing),document.querySelector("body").setAttribute("data-aos-duration",k.duration),document.querySelector("body").setAttribute("data-aos-delay",k.delay),"DOMContentLoaded"===k.startEvent&&["complete","interactive"].includes(document.readyState)?x(!0):document.addEventListener(k.startEvent,function(){x(!0)}),window.addEventListener("resize",(0,s["default"])(x,50,!0)),window.addEventListener("orientationchange",(0,s["default"])(x,50,!0)),window.addEventListener("scroll",(0,r["default"])(function(){(0,p["default"])(w,k.once)},99)),document.addEventListener("DOMNodeRemoved",function(e){var t=e.target;t&&1===t.nodeType&&t.hasAttribute&&t.hasAttribute("data-aos")&&(0,s["default"])(j,50,!0)}),(0,d["default"])("[data-aos]",j),w)};e.exports={init:_,refresh:x,refreshHard:j}},function(e,t){},,,,function(e,t,o){"use strict";function n(e,t,o){var n=!0,a=!0;if("function"!=typeof e)throw new TypeError(c);return i(o)&&(n="leading"in o?!!o.leading:n,a="trailing"in o?!!o.trailing:a),r(e,t,{leading:n,maxWait:t,trailing:a})}function i(e){var t="undefined"==typeof e?"undefined":a(e);return!!e&&("object"==t||"function"==t)}var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},r=o(6),c="Expected a function";e.exports=n},function(e,t){"use strict";function o(e,t,o){function n(t){var o=b,n=v;return b=v=void 0,_=t,y=e.apply(n,o)}function a(e){return _=e,w=setTimeout(d,t),z?n(e):y}function r(e){var o=e-h,n=e-_,i=t-o;return A?x(i,g-n):i}function s(e){var o=e-h,n=e-_;return!h||o>=t||0>o||A&&n>=g}function d(){var e=j();return s(e)?f(e):void(w=setTimeout(d,r(e)))}function f(e){return clearTimeout(w),w=void 0,O&&b?n(e):(b=v=void 0,y)}function l(){void 0!==w&&clearTimeout(w),h=_=0,b=v=w=void 0}function m(){return void 0===w?y:f(j())}function p(){var e=j(),o=s(e);if(b=arguments,v=this,h=e,o){if(void 0===w)return a(h);if(A)return clearTimeout(w),w=setTimeout(d,t),n(h)}return void 0===w&&(w=setTimeout(d,t)),y}var b,v,g,y,w,h=0,_=0,z=!1,A=!1,O=!0;if("function"!=typeof e)throw new TypeError(u);return t=c(t)||0,i(o)&&(z=!!o.leading,A="maxWait"in o,g=A?k(c(o.maxWait)||0,t):g,O="trailing"in o?!!o.trailing:O),p.cancel=l,p.flush=m,p}function n(e){var t=i(e)?h.call(e):"";return t==f||t==l}function i(e){var t="undefined"==typeof e?"undefined":s(e);return!!e&&("object"==t||"function"==t)}function a(e){return!!e&&"object"==("undefined"==typeof e?"undefined":s(e))}function r(e){return"symbol"==("undefined"==typeof e?"undefined":s(e))||a(e)&&h.call(e)==m}function c(e){if("number"==typeof e)return e;if(r(e))return d;if(i(e)){var t=n(e.valueOf)?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(p,"");var o=v.test(e);return o||g.test(e)?y(e.slice(2),o?2:8):b.test(e)?d:+e}var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},u="Expected a function",d=NaN,f="[object Function]",l="[object GeneratorFunction]",m="[object Symbol]",p=/^\s+|\s+$/g,b=/^[-+]0x[0-9a-f]+$/i,v=/^0b[01]+$/i,g=/^0o[0-7]+$/i,y=parseInt,w=Object.prototype,h=w.toString,k=Math.max,x=Math.min,j=Date.now;e.exports=o},function(e,t){"use strict";function o(e,t){r.push({selector:e,fn:t}),!c&&a&&(c=new a(n),c.observe(i.documentElement,{childList:!0,subtree:!0,removedNodes:!0})),n()}function n(){for(var e,t,o=0,n=r.length;n>o;o++){e=r[o],t=i.querySelectorAll(e.selector);for(var a,c=0,s=t.length;s>c;c++)a=t[c],a.ready||(a.ready=!0,e.fn.call(a,a))}}Object.defineProperty(t,"__esModule",{value:!0});var i=window.document,a=window.MutationObserver||window.WebKitMutationObserver,r=[],c=void 0;t["default"]=o},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={phone:function(){var e=!1;return function(t){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4)))&&(e=!0)}(navigator.userAgent||navigator.vendor||window.opera),e},mobile:function(){var e=!1;return function(t){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4)))&&(e=!0)}(navigator.userAgent||navigator.vendor||window.opera),e},tablet:function(){return(void 0).mobile()&&!(void 0).phone()}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e,t,o){var n=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):"undefined"!=typeof n&&("false"===n||!o&&"true"!==n)&&e.node.classList.remove("aos-animate")},n=function(e,t){var n=window.pageYOffset,i=window.innerHeight;e.forEach(function(e,a){o(e,i+n,t)})};t["default"]=n},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=o(11),a=n(i),r=function(e,t){return e.forEach(function(e,o){e.node.classList.add("aos-init"),e.position=(0,a["default"])(e.node,t.offset)}),e};t["default"]=r},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=o(12),a=n(i),r=function(e,t){var o=0,n=0,i=window.innerHeight,r={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(r.offset&&!isNaN(r.offset)&&(n=parseInt(r.offset)),r.anchor&&document.querySelectorAll(r.anchor)&&(e=document.querySelectorAll(r.anchor)[0]),o=(0,a["default"])(e).top,r.anchorPlacement){case"top-bottom":break;case"center-bottom":o+=e.offsetHeight/2;break;case"bottom-bottom":o+=e.offsetHeight;break;case"top-center":o+=i/2;break;case"bottom-center":o+=i/2+e.offsetHeight;break;case"center-center":o+=i/2+e.offsetHeight/2;break;case"top-top":o+=i;break;case"bottom-top":o+=e.offsetHeight+i;break;case"center-top":o+=e.offsetHeight/2+i}return r.anchorPlacement||r.offset||isNaN(t)||(n=t),o+n};t["default"]=r},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){for(var t=0,o=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),o+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:o,left:t}};t["default"]=o},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){e=e||document.querySelectorAll("[data-aos]");var t=[];return[].forEach.call(e,function(e,o){t.push({node:e})}),t};t["default"]=o}])});
;
(function ($) {
   "use strict";
  
   //------- OWL carousle init  ---------------
  jQuery(document).ready(function(){
    function init_carousel_owl(){
      $('.init-carousel-owl').each(function(){
        var items = $(this).data('items') ? $(this).data('items') : 5;
        var items_lg = $(this).data('items_lg') ? $(this).data('items_lg') : 4;
        var items_md = $(this).data('items_md') ? $(this).data('items_md') : 3;
        var items_sm = $(this).data('items_sm') ? $(this).data('items_sm') : 2;
        var items_xs = $(this).data('items_xs') ? $(this).data('items_xs') : 1;
        var loop = $(this).data('loop') ? $(this).data('loop') : false;
        var speed = $(this).data('speed') ? $(this).data('speed') : 200;
        var auto_play = $(this).data('auto_play') ? $(this).data('auto_play') : false;
        var auto_play_speed = $(this).data('auto_play_speed') ? $(this).data('auto_play_speed') : false;
        var auto_play_timeout = $(this).data('auto_play_timeout') ? $(this).data('auto_play_timeout') : 1000;
        var auto_play_hover = $(this).data('auto_play_hover') ? $(this).data('auto_play_hover') : false;
        var navigation = $(this).data('navigation') ? $(this).data('navigation') : false;
        var rewind_nav = $(this).data('rewind_nav') ? $(this).data('rewind_nav') : false;
        var pagination = $(this).data('pagination') ? $(this).data('pagination') : false;
        var mouse_drag = $(this).data('mouse_drag') ? $(this).data('mouse_drag') : false;
        var touch_drag = $(this).data('touch_drag') ? $(this).data('touch_drag') : false;
        if(items == 1 ) items_lg = items_md = items_sm = items_xs = 1;
        $(this).owlCarousel({
            nav: navigation,
            autoplay: auto_play,
            autoplayTimeout: auto_play_timeout,
            autoplaySpeed: auto_play_speed,
            autoplayHoverPause: auto_play_hover,
            navText: [ '<i class="gv-icon-164"></i>', '<i class="gv-icon-165"></i>' ],
            autoHeight: false,
            loop: loop, 
            dots: pagination,
            rewind: rewind_nav,
            smartSpeed: speed,
            mouseDrag: mouse_drag,
            touchDrag: touch_drag,
            responsive : {
                0 : {
                  items: 1,
                  nav: false
                },
                480 : {
                  items : items_xs
                },
                768 : {
                  items : items_sm
                },
                992: {
                  items : items_md
                },
                1200: {
                  items: items_lg
                },
                1400: {
                  items: items
                }
            }
        });
     }); 
  }

  init_carousel_owl();

  $('.init-carousel-owl.nav-center-image').each(function(){
    var height_thumbnail = $(this).find('.post-thumbnail').first().height();
    $(this).find('.owl-nav .owl-prev, .owl-nav .owl-next').css("top", height_thumbnail/2);
  })

  $('.gsc-tabs-views-ajax ul[data-load="ajax"] a').on('click', function(){
      var $href = $(this).data('panel');
      var self = $(this);
      var main = $($href);
      var main_elements = $($href);
      self.parents('.nav-tabs').find('li').removeClass('active');
      self.parent('li').addClass('active');
      if ( main.length > 0 ) {
        if(main_elements.data('loaded') == false){
          self.parents('.gsc-tabs-views-ajax').addClass('ajaxloadding');
          $.ajax({
              url: drupalSettings.gavias_load_ajax_view,
              type:'POST',
              dataType: 'html',
              data:  'view=' + main.data('view')
          }).done(function(reponse) {
            main_elements.html( reponse );
            main.data('loaded', 'true');
            self.parents('.gsc-tabs-views-ajax').find('.tab-pane').removeClass('active');
            $($href).addClass('active');
            init_carousel_owl();
            Drupal.attachBehaviors(document);
            self.parents('.gsc-tabs-views-ajax').removeClass('ajaxloadding');
            $("img.unveil-image").unveil(200, function() {
              $(this).addClass('image-loaded');
            });
          });
          return true;
        }else{
          self.parents('.gsc-tabs-views-ajax').find('.tab-pane').removeClass('active');
          $($href).addClass('active');
        }
      }
    });

/* ============ Isotope ==============*/
  if ( $.fn.isotope ) {
    if($('.isotope-items').length){
      $( '.isotope-items' ).each(function() {
        var _pid = $(this).data('pid');
        var $el = $( this ),
            $filter = $( '.portfolio-filter a.' + _pid ),
            $loop =  $( this );

        $loop.isotope();

        $loop.imagesLoaded(function() {
          $loop.isotope( 'layout' );
        });
        var i = 0;

        function reloay(){
          var e = $(document).scrollTop();
          //console.log($(window).height());
          $loop.each(function(){
            var o = $loop.parents('.gva-portfolio-items');
            if(o.length){
              if(o.offset().top <= (e + $(window).height())  && o.offset().top + $(window).height() > e){
                $loop.isotope( 'layout' );
              } 
            }
          });
        }

        $(window).load(function(){
          setTimeout(function() {
            reloay();
          }, 1000);
        });  

        $(document).scroll(function() {
          reloay();
        });

        if ( $filter.length > 0 ) {
          $filter.on( 'click', function( e ) {
            e.preventDefault();
            var $a = $(this);
            $filter.removeClass( 'active' );
            $a.addClass( 'active' );
            $loop.isotope({ filter: $a.data( 'filter' ) });
          });
        };
      });
    }
  };

  function scrolltop() {
    var offset = 300;
    var duration = 500;
    jQuery(window).scroll(function() {
      if (jQuery(this).scrollTop() > offset) {
        jQuery('.return-top').fadeIn(duration);
      } else {
        jQuery('.return-top').fadeOut(duration);
      }
    });

    jQuery('.return-top').click(function(event) {
      event.preventDefault();
      jQuery('html, body').animate({scrollTop: 0}, duration);
      return false;
    });
  }
  scrolltop();

  if ($(window).width() > 780) {
    if ( $.fn.jpreLoader ) {
      var $preloader = $( '.js-preloader' );
      $preloader.jpreLoader({
        autoClose: true,
      }, function() {
        $preloader.addClass( 'preloader-done' );
        $( 'body' ).trigger( 'preloader-done' );
        $( window ).trigger( 'resize' );
      });
    }
  }else{
    $('body').removeClass('js-preloader');
  };

  $('#gva-offcanvas-inner').perfectScrollbar();
  
  // ==================================================================================
  // Offcavas
  // ==================================================================================
  $('#menu-bar').on('click',function(e){
    if($('.gva-offcanvas-inner').hasClass('show-view')){
        $(this).removeClass('show-view');
        $('.gva-offcanvas-inner').removeClass('show-view');
        $('body').removeClass('enable-offcanvas');
    }else{
        $(this).addClass('show-view');
        $('.gva-offcanvas-inner').addClass('show-view'); 
        $('body').addClass('enable-offcanvas');
    }
    e.stopPropagation();
  })

  $('#menu-bar-another').on('click',function(e){
    if($(this).hasClass('show-view')){
      $(this).removeClass('show-view');
      $(this).parent().find('.content-inner').removeClass('show-view');
    }else{
      $(this).addClass('show-view');
      $(this).parent().find('.content-inner').addClass('show-view'); 
    }
    e.stopPropagation();
  })

  $('.close-offcanvas a').on('click', function(e){
    if($('.gva-offcanvas-inner').hasClass('show-view')){
      $('body').removeClass('enable-offcanvas');
      $('.gva-offcanvas-inner').removeClass('show-view');
      $('#menu-bar').removeClass('show-view');
    }
    e.stopPropagation();
  });


  $('.sidebar').theiaStickySidebar({
		additionalMarginTop: 30,
    minWidth: 992
  });

  var $container = $('.post-masonry-style');
  $container.imagesLoaded( function(){
      $container.masonry({
          itemSelector : '.item-masory',
          gutterWidth: 0,
          columnWidth: 1,
      }); 
  });

  $('.gva-search-region .icon').on('click',function(e){
    if($(this).parent().hasClass('show')){
        $(this).parent().removeClass('show');
    }else{
        $(this).parent().addClass('show');
    }
    e.stopPropagation();
  })

  $('.gva-search-region .close').on('click',function(e){
    $(this).parents('.gva-search-region').removeClass('show');
  });

  $('.gva-account-region .icon').on('click',function(e){
    if($(this).parent().hasClass('show')){
        $(this).parent().removeClass('show');
    }else{
        $(this).parent().addClass('show');
    }
    e.stopPropagation();
  })

  function load_lazy(){
    if(drupalSettings.layzy_load=='on'){
      $(window).off('scroll.unveil resize.unveil lookup.unveil');
      setTimeout(function(){
        $("img.unveil-image").unveil(100, function() {
          $(this).addClass('image-loaded');
        });
      }, 200);
    }
    return false;
  }
  load_lazy();

  /*========== Click Show Sub Menu ==========*/
  $('.gva-navigation a').on('click','.nav-plus',function(){
    if($(this).hasClass('nav-minus') == false){
      $(this).parent('a').parent('li').find('> .sub-menu').slideDown();
      $(this).addClass('nav-minus');
    }else{
      $(this).parent('a').parent('li').find('> .sub-menu').slideUp();
      $(this).removeClass('nav-minus');
    }
    return false;
  });

 //==== Customize =====
  $('.gavias-skins-panel .control-panel').click(function(){
      if($(this).parents('.gavias-skins-panel').hasClass('active')){
          $(this).parents('.gavias-skins-panel').removeClass('active');
      }else $(this).parents('.gavias-skins-panel').addClass('active');
  });

  $('.gavias-skins-panel .layout').click(function(){
      $('body').removeClass('wide-layout').removeClass('boxed');
      $('body').addClass($(this).data('layout'));
      $('.gavias-skins-panel .layout').removeClass('active');
      $(this).addClass('active');
      var $container = $('.post-masonry-style');
      $container.imagesLoaded( function(){
          $container.masonry({
              itemSelector : '.item-masory',
              gutterWidth: 0,
              columnWidth: 1,
          }); 
      });
  });
  
  /*-------------Milestone Counter----------*/
  jQuery('.milestone-block').each(function() {
    jQuery(this).appear(function() {
      var $endNum = parseInt(jQuery(this).find('.milestone-number').text());
      jQuery(this).find('.milestone-number').countTo({
        from: 0,
        to: $endNum,
        speed: 4000,
        refreshInterval: 60,
        formatter: function (value, options) {
          value = value.toFixed(options.decimals);
          value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
          return value;
        }
      });
    },{accX: 0, accY: 0});
  });
  
  /*----------- Animation Progress Bars --------------------*/
  $("[data-progress-animation]").each(function() {
    var $this = $(this);
    $this.appear(function() {
      var delay = ($this.attr("data-appear-animation-delay") ? $this.attr("data-appear-animation-delay") : 1);
      if(delay > 1) $this.css("animation-delay", delay + "ms");
      setTimeout(function() { $this.animate({width: $this.attr("data-progress-animation")}, 800);}, delay);
    }, {accX: 0, accY: -50});
  });
  
  /*----------------------------------------------------*/
  /*  Pie Charts
  /*----------------------------------------------------*/
  var pieChartClass = 'pieChart',
        pieChartLoadedClass = 'pie-chart-loaded';
    
  function initPieCharts() {
    var chart = $('.' + pieChartClass);
    chart.each(function() {
      $(this).appear(function() {
        var $this = $(this),
          chartBarColor = ($this.data('bar-color')) ? $this.data('bar-color') : "#F54F36",
          chartBarWidth = ($this.data('bar-width')) ? ($this.data('bar-width')) : 150
        if( !$this.hasClass(pieChartLoadedClass) ) {
          $this.easyPieChart({
            animate: 2000,
            size: chartBarWidth,
            lineWidth: 8,
            scaleColor: false,
            trackColor: "#eee",
            barColor: chartBarColor,
          }).addClass(pieChartLoadedClass);
        }
      });
    });
  }
  initPieCharts();
    //===== Gallery ============
    $(".lightGallery").lightGallery({
      selector: '.image-item .zoomGallery'
    });
  //===== Popup video ============
    $('.popup-video').magnificPopup({
      type: 'iframe',
      fixedContentPos: false
    });

  // ============================================================================
  // Fixed top Menu Bar
  // ============================================================================
  if($('.gv-sticky-menu').length > 0){
    var sticky = new Waypoint.Sticky({
      element: $('.gv-sticky-menu')[0]
    });
  }  

  //Fix caption image for gallery post 
  $('.article-detail .post-thumbnail.post-gallery .owl-item .item img').each(function(){
    var $title = $(this).attr('title');
    if($title && $title != undefined){
      $(this).parent().append('<div class="caption">'+$title+'</div>');
    }
  })

  $('.newsticker').newsTicker({
    max_rows: 1,
    duration: 4000,
    speed: 800,
    autostart: 1,
  });

  setTimeout(function() {
    AOS.init({
      offset: 150,
      disable: window.innerWidth < 1024,
      delay: 100,
      duration: 600,
      once: true
    });
  }, 100);

});

  $(window).load(function(){
    if($('.block-gavias-sliderlayer, .before-help-region').length > 0){
      var html_help = $('div.help').html();
      $('.gav-help-region').remove();
      html_help = '<div class="gav-help-region">' + html_help + '</div>';
      if($('.before-help-region').length > 0){
        $('.before-help-region').first().append(html_help);
      }else{
        $('.block-gavias-sliderlayer').first().after(html_help);
      }
      $('.gav-help-region').show();
    }else{
      var html_help = $('div.help').html();
      $('.gav-help-region').remove();
      html_help = '<div class="gav-help-region">' + html_help + '</div>';
      $('#page-main-content').first().before(html_help);
      $('.gav-help-region').show();
    }
  })
  
})(jQuery);
;
