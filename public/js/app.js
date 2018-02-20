
// Filename: ./node_modules/jquery/dist/jquery.min.js
/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){"use strict";var n=[],r=e.document,i=Object.getPrototypeOf,o=n.slice,a=n.concat,s=n.push,u=n.indexOf,l={},c=l.toString,f=l.hasOwnProperty,p=f.toString,d=p.call(Object),h={},g=function e(t){return"function"==typeof t&&"number"!=typeof t.nodeType},y=function e(t){return null!=t&&t===t.window},v={type:!0,src:!0,noModule:!0};function m(e,t,n){var i,o=(t=t||r).createElement("script");if(o.text=e,n)for(i in v)n[i]&&(o[i]=n[i]);t.head.appendChild(o).parentNode.removeChild(o)}function x(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[c.call(e)]||"object":typeof e}var b="3.3.1",w=function(e,t){return new w.fn.init(e,t)},T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;w.fn=w.prototype={jquery:"3.3.1",constructor:w,length:0,toArray:function(){return o.call(this)},get:function(e){return null==e?o.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=w.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return w.each(this,e)},map:function(e){return this.pushStack(w.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(o.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:s,sort:n.sort,splice:n.splice},w.extend=w.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||g(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)n=a[t],a!==(r=e[t])&&(l&&r&&(w.isPlainObject(r)||(i=Array.isArray(r)))?(i?(i=!1,o=n&&Array.isArray(n)?n:[]):o=n&&w.isPlainObject(n)?n:{},a[t]=w.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},w.extend({expando:"jQuery"+("3.3.1"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==c.call(e))&&(!(t=i(e))||"function"==typeof(n=f.call(t,"constructor")&&t.constructor)&&p.call(n)===d)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e){m(e)},each:function(e,t){var n,r=0;if(C(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(C(Object(e))?w.merge(n,"string"==typeof e?[e]:e):s.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:u.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r,i=[],o=0,a=e.length,s=!n;o<a;o++)(r=!t(e[o],o))!==s&&i.push(e[o]);return i},map:function(e,t,n){var r,i,o=0,s=[];if(C(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&s.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&s.push(i);return a.apply([],s)},guid:1,support:h}),"function"==typeof Symbol&&(w.fn[Symbol.iterator]=n[Symbol.iterator]),w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function C(e){var t=!!e&&"length"in e&&e.length,n=x(e);return!g(e)&&!y(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}var E=function(e){var t,n,r,i,o,a,s,u,l,c,f,p,d,h,g,y,v,m,x,b="sizzle"+1*new Date,w=e.document,T=0,C=0,E=ae(),k=ae(),S=ae(),D=function(e,t){return e===t&&(f=!0),0},N={}.hasOwnProperty,A=[],j=A.pop,q=A.push,L=A.push,H=A.slice,O=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},P="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",I="\\["+M+"*("+R+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+R+"))|)"+M+"*\\]",W=":("+R+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+I+")*)|.*)\\)|)",$=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),F=new RegExp("^"+M+"*,"+M+"*"),_=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),z=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),X=new RegExp(W),U=new RegExp("^"+R+"$"),V={ID:new RegExp("^#("+R+")"),CLASS:new RegExp("^\\.("+R+")"),TAG:new RegExp("^("+R+"|[*])"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+W),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+P+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},G=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Q=/^[^{]+\{\s*\[native \w/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,K=/[+~]/,Z=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ee=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},te=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ne=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},re=function(){p()},ie=me(function(e){return!0===e.disabled&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"});try{L.apply(A=H.call(w.childNodes),w.childNodes),A[w.childNodes.length].nodeType}catch(e){L={apply:A.length?function(e,t){q.apply(e,H.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function oe(e,t,r,i){var o,s,l,c,f,h,v,m=t&&t.ownerDocument,T=t?t.nodeType:9;if(r=r||[],"string"!=typeof e||!e||1!==T&&9!==T&&11!==T)return r;if(!i&&((t?t.ownerDocument||t:w)!==d&&p(t),t=t||d,g)){if(11!==T&&(f=J.exec(e)))if(o=f[1]){if(9===T){if(!(l=t.getElementById(o)))return r;if(l.id===o)return r.push(l),r}else if(m&&(l=m.getElementById(o))&&x(t,l)&&l.id===o)return r.push(l),r}else{if(f[2])return L.apply(r,t.getElementsByTagName(e)),r;if((o=f[3])&&n.getElementsByClassName&&t.getElementsByClassName)return L.apply(r,t.getElementsByClassName(o)),r}if(n.qsa&&!S[e+" "]&&(!y||!y.test(e))){if(1!==T)m=t,v=e;else if("object"!==t.nodeName.toLowerCase()){(c=t.getAttribute("id"))?c=c.replace(te,ne):t.setAttribute("id",c=b),s=(h=a(e)).length;while(s--)h[s]="#"+c+" "+ve(h[s]);v=h.join(","),m=K.test(e)&&ge(t.parentNode)||t}if(v)try{return L.apply(r,m.querySelectorAll(v)),r}catch(e){}finally{c===b&&t.removeAttribute("id")}}}return u(e.replace(B,"$1"),t,r,i)}function ae(){var e=[];function t(n,i){return e.push(n+" ")>r.cacheLength&&delete t[e.shift()],t[n+" "]=i}return t}function se(e){return e[b]=!0,e}function ue(e){var t=d.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function le(e,t){var n=e.split("|"),i=n.length;while(i--)r.attrHandle[n[i]]=t}function ce(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function fe(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function pe(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function de(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&ie(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function he(e){return se(function(t){return t=+t,se(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function ge(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}n=oe.support={},o=oe.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},p=oe.setDocument=function(e){var t,i,a=e?e.ownerDocument||e:w;return a!==d&&9===a.nodeType&&a.documentElement?(d=a,h=d.documentElement,g=!o(d),w!==d&&(i=d.defaultView)&&i.top!==i&&(i.addEventListener?i.addEventListener("unload",re,!1):i.attachEvent&&i.attachEvent("onunload",re)),n.attributes=ue(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ue(function(e){return e.appendChild(d.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=Q.test(d.getElementsByClassName),n.getById=ue(function(e){return h.appendChild(e).id=b,!d.getElementsByName||!d.getElementsByName(b).length}),n.getById?(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){return e.getAttribute("id")===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n=t.getElementById(e);return n?[n]:[]}}):(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),r.find.TAG=n.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},r.find.CLASS=n.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&g)return t.getElementsByClassName(e)},v=[],y=[],(n.qsa=Q.test(d.querySelectorAll))&&(ue(function(e){h.appendChild(e).innerHTML="<a id='"+b+"'></a><select id='"+b+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&y.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||y.push("\\["+M+"*(?:value|"+P+")"),e.querySelectorAll("[id~="+b+"-]").length||y.push("~="),e.querySelectorAll(":checked").length||y.push(":checked"),e.querySelectorAll("a#"+b+"+*").length||y.push(".#.+[+~]")}),ue(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=d.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&y.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&y.push(":enabled",":disabled"),h.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&y.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),y.push(",.*:")})),(n.matchesSelector=Q.test(m=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&ue(function(e){n.disconnectedMatch=m.call(e,"*"),m.call(e,"[s!='']:x"),v.push("!=",W)}),y=y.length&&new RegExp(y.join("|")),v=v.length&&new RegExp(v.join("|")),t=Q.test(h.compareDocumentPosition),x=t||Q.test(h.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return f=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r||(1&(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===r?e===d||e.ownerDocument===w&&x(w,e)?-1:t===d||t.ownerDocument===w&&x(w,t)?1:c?O(c,e)-O(c,t):0:4&r?-1:1)}:function(e,t){if(e===t)return f=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===d?-1:t===d?1:i?-1:o?1:c?O(c,e)-O(c,t):0;if(i===o)return ce(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?ce(a[r],s[r]):a[r]===w?-1:s[r]===w?1:0},d):d},oe.matches=function(e,t){return oe(e,null,null,t)},oe.matchesSelector=function(e,t){if((e.ownerDocument||e)!==d&&p(e),t=t.replace(z,"='$1']"),n.matchesSelector&&g&&!S[t+" "]&&(!v||!v.test(t))&&(!y||!y.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){}return oe(t,d,null,[e]).length>0},oe.contains=function(e,t){return(e.ownerDocument||e)!==d&&p(e),x(e,t)},oe.attr=function(e,t){(e.ownerDocument||e)!==d&&p(e);var i=r.attrHandle[t.toLowerCase()],o=i&&N.call(r.attrHandle,t.toLowerCase())?i(e,t,!g):void 0;return void 0!==o?o:n.attributes||!g?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},oe.escape=function(e){return(e+"").replace(te,ne)},oe.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},oe.uniqueSort=function(e){var t,r=[],i=0,o=0;if(f=!n.detectDuplicates,c=!n.sortStable&&e.slice(0),e.sort(D),f){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return c=null,e},i=oe.getText=function(e){var t,n="",r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else if(3===o||4===o)return e.nodeValue}else while(t=e[r++])n+=i(t);return n},(r=oe.selectors={cacheLength:50,createPseudo:se,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Z,ee),e[3]=(e[3]||e[4]||e[5]||"").replace(Z,ee),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||oe.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&oe.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return V.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=a(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Z,ee).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=E[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&E(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=oe.attr(r,e);return null==i?"!="===t:!t||(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i.replace($," ")+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g=o!==a?"nextSibling":"previousSibling",y=t.parentNode,v=s&&t.nodeName.toLowerCase(),m=!u&&!s,x=!1;if(y){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===v:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?y.firstChild:y.lastChild],a&&m){x=(d=(l=(c=(f=(p=y)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1])&&l[2],p=d&&y.childNodes[d];while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if(1===p.nodeType&&++x&&p===t){c[e]=[T,d,x];break}}else if(m&&(x=d=(l=(c=(f=(p=t)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1]),!1===x)while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===v:1===p.nodeType)&&++x&&(m&&((c=(f=p[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]=[T,x]),p===t))break;return(x-=i)===r||x%r==0&&x/r>=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||oe.error("unsupported pseudo: "+e);return i[b]?i(t):i.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase())?se(function(e,n){var r,o=i(e,t),a=o.length;while(a--)e[r=O(e,o[a])]=!(n[r]=o[a])}):function(e){return i(e,0,n)}):i}},pseudos:{not:se(function(e){var t=[],n=[],r=s(e.replace(B,"$1"));return r[b]?se(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}}),has:se(function(e){return function(t){return oe(e,t).length>0}}),contains:se(function(e){return e=e.replace(Z,ee),function(t){return(t.textContent||t.innerText||i(t)).indexOf(e)>-1}}),lang:se(function(e){return U.test(e||"")||oe.error("unsupported lang: "+e),e=e.replace(Z,ee).toLowerCase(),function(t){var n;do{if(n=g?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===d.activeElement&&(!d.hasFocus||d.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:de(!1),disabled:de(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return Y.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:he(function(){return[0]}),last:he(function(e,t){return[t-1]}),eq:he(function(e,t,n){return[n<0?n+t:n]}),even:he(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:he(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:he(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:he(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=r.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=fe(t);for(t in{submit:!0,reset:!0})r.pseudos[t]=pe(t);function ye(){}ye.prototype=r.filters=r.pseudos,r.setFilters=new ye,a=oe.tokenize=function(e,t){var n,i,o,a,s,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=r.preFilter;while(s){n&&!(i=F.exec(s))||(i&&(s=s.slice(i[0].length)||s),u.push(o=[])),n=!1,(i=_.exec(s))&&(n=i.shift(),o.push({value:n,type:i[0].replace(B," ")}),s=s.slice(n.length));for(a in r.filter)!(i=V[a].exec(s))||l[a]&&!(i=l[a](i))||(n=i.shift(),o.push({value:n,type:a,matches:i}),s=s.slice(n.length));if(!n)break}return t?s.length:s?oe.error(e):k(e,u).slice(0)};function ve(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function me(e,t,n){var r=t.dir,i=t.next,o=i||r,a=n&&"parentNode"===o,s=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||a)return e(t,n,i);return!1}:function(t,n,u){var l,c,f,p=[T,s];if(u){while(t=t[r])if((1===t.nodeType||a)&&e(t,n,u))return!0}else while(t=t[r])if(1===t.nodeType||a)if(f=t[b]||(t[b]={}),c=f[t.uniqueID]||(f[t.uniqueID]={}),i&&i===t.nodeName.toLowerCase())t=t[r]||t;else{if((l=c[o])&&l[0]===T&&l[1]===s)return p[2]=l[2];if(c[o]=p,p[2]=e(t,n,u))return!0}return!1}}function xe(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function be(e,t,n){for(var r=0,i=t.length;r<i;r++)oe(e,t[r],n);return n}function we(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Te(e,t,n,r,i,o){return r&&!r[b]&&(r=Te(r)),i&&!i[b]&&(i=Te(i,o)),se(function(o,a,s,u){var l,c,f,p=[],d=[],h=a.length,g=o||be(t||"*",s.nodeType?[s]:s,[]),y=!e||!o&&t?g:we(g,p,e,s,u),v=n?i||(o?e:h||r)?[]:a:y;if(n&&n(y,v,s,u),r){l=we(v,d),r(l,[],s,u),c=l.length;while(c--)(f=l[c])&&(v[d[c]]=!(y[d[c]]=f))}if(o){if(i||e){if(i){l=[],c=v.length;while(c--)(f=v[c])&&l.push(y[c]=f);i(null,v=[],l,u)}c=v.length;while(c--)(f=v[c])&&(l=i?O(o,f):p[c])>-1&&(o[l]=!(a[l]=f))}}else v=we(v===a?v.splice(h,v.length):v),i?i(null,a,v,u):L.apply(a,v)})}function Ce(e){for(var t,n,i,o=e.length,a=r.relative[e[0].type],s=a||r.relative[" "],u=a?1:0,c=me(function(e){return e===t},s,!0),f=me(function(e){return O(t,e)>-1},s,!0),p=[function(e,n,r){var i=!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):f(e,n,r));return t=null,i}];u<o;u++)if(n=r.relative[e[u].type])p=[me(xe(p),n)];else{if((n=r.filter[e[u].type].apply(null,e[u].matches))[b]){for(i=++u;i<o;i++)if(r.relative[e[i].type])break;return Te(u>1&&xe(p),u>1&&ve(e.slice(0,u-1).concat({value:" "===e[u-2].type?"*":""})).replace(B,"$1"),n,u<i&&Ce(e.slice(u,i)),i<o&&Ce(e=e.slice(i)),i<o&&ve(e))}p.push(n)}return xe(p)}function Ee(e,t){var n=t.length>0,i=e.length>0,o=function(o,a,s,u,c){var f,h,y,v=0,m="0",x=o&&[],b=[],w=l,C=o||i&&r.find.TAG("*",c),E=T+=null==w?1:Math.random()||.1,k=C.length;for(c&&(l=a===d||a||c);m!==k&&null!=(f=C[m]);m++){if(i&&f){h=0,a||f.ownerDocument===d||(p(f),s=!g);while(y=e[h++])if(y(f,a||d,s)){u.push(f);break}c&&(T=E)}n&&((f=!y&&f)&&v--,o&&x.push(f))}if(v+=m,n&&m!==v){h=0;while(y=t[h++])y(x,b,a,s);if(o){if(v>0)while(m--)x[m]||b[m]||(b[m]=j.call(u));b=we(b)}L.apply(u,b),c&&!o&&b.length>0&&v+t.length>1&&oe.uniqueSort(u)}return c&&(T=E,l=w),x};return n?se(o):o}return s=oe.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=a(e)),n=t.length;while(n--)(o=Ce(t[n]))[b]?r.push(o):i.push(o);(o=S(e,Ee(i,r))).selector=e}return o},u=oe.select=function(e,t,n,i){var o,u,l,c,f,p="function"==typeof e&&e,d=!i&&a(e=p.selector||e);if(n=n||[],1===d.length){if((u=d[0]=d[0].slice(0)).length>2&&"ID"===(l=u[0]).type&&9===t.nodeType&&g&&r.relative[u[1].type]){if(!(t=(r.find.ID(l.matches[0].replace(Z,ee),t)||[])[0]))return n;p&&(t=t.parentNode),e=e.slice(u.shift().value.length)}o=V.needsContext.test(e)?0:u.length;while(o--){if(l=u[o],r.relative[c=l.type])break;if((f=r.find[c])&&(i=f(l.matches[0].replace(Z,ee),K.test(u[0].type)&&ge(t.parentNode)||t))){if(u.splice(o,1),!(e=i.length&&ve(u)))return L.apply(n,i),n;break}}}return(p||s(e,d))(i,t,!g,n,!t||K.test(e)&&ge(t.parentNode)||t),n},n.sortStable=b.split("").sort(D).join("")===b,n.detectDuplicates=!!f,p(),n.sortDetached=ue(function(e){return 1&e.compareDocumentPosition(d.createElement("fieldset"))}),ue(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||le("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ue(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||le("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ue(function(e){return null==e.getAttribute("disabled")})||le(P,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),oe}(e);w.find=E,w.expr=E.selectors,w.expr[":"]=w.expr.pseudos,w.uniqueSort=w.unique=E.uniqueSort,w.text=E.getText,w.isXMLDoc=E.isXML,w.contains=E.contains,w.escapeSelector=E.escape;var k=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&w(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},D=w.expr.match.needsContext;function N(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var A=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,t,n){return g(t)?w.grep(e,function(e,r){return!!t.call(e,r,e)!==n}):t.nodeType?w.grep(e,function(e){return e===t!==n}):"string"!=typeof t?w.grep(e,function(e){return u.call(t,e)>-1!==n}):w.filter(t,e,n)}w.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?w.find.matchesSelector(r,e)?[r]:[]:w.find.matches(e,w.grep(t,function(e){return 1===e.nodeType}))},w.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(w(e).filter(function(){for(t=0;t<r;t++)if(w.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)w.find(e,i[t],n);return r>1?w.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&D.test(e)?w(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(w.fn.init=function(e,t,n){var i,o;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(i="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:L.exec(e))||!i[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(i[1]){if(t=t instanceof w?t[0]:t,w.merge(this,w.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:r,!0)),A.test(i[1])&&w.isPlainObject(t))for(i in t)g(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}return(o=r.getElementById(i[2]))&&(this[0]=o,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):g(e)?void 0!==n.ready?n.ready(e):e(w):w.makeArray(e,this)}).prototype=w.fn,q=w(r);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};w.fn.extend({has:function(e){var t=w(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(w.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&w(e);if(!D.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&w.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?w.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?u.call(w(e),this[0]):u.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(w.uniqueSort(w.merge(this.get(),w(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}w.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return k(e,"parentNode")},parentsUntil:function(e,t,n){return k(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return k(e,"nextSibling")},prevAll:function(e){return k(e,"previousSibling")},nextUntil:function(e,t,n){return k(e,"nextSibling",n)},prevUntil:function(e,t,n){return k(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return N(e,"iframe")?e.contentDocument:(N(e,"template")&&(e=e.content||e),w.merge([],e.childNodes))}},function(e,t){w.fn[e]=function(n,r){var i=w.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=w.filter(r,i)),this.length>1&&(O[e]||w.uniqueSort(i),H.test(e)&&i.reverse()),this.pushStack(i)}});var M=/[^\x20\t\r\n\f]+/g;function R(e){var t={};return w.each(e.match(M)||[],function(e,n){t[n]=!0}),t}w.Callbacks=function(e){e="string"==typeof e?R(e):w.extend({},e);var t,n,r,i,o=[],a=[],s=-1,u=function(){for(i=i||e.once,r=t=!0;a.length;s=-1){n=a.shift();while(++s<o.length)!1===o[s].apply(n[0],n[1])&&e.stopOnFalse&&(s=o.length,n=!1)}e.memory||(n=!1),t=!1,i&&(o=n?[]:"")},l={add:function(){return o&&(n&&!t&&(s=o.length-1,a.push(n)),function t(n){w.each(n,function(n,r){g(r)?e.unique&&l.has(r)||o.push(r):r&&r.length&&"string"!==x(r)&&t(r)})}(arguments),n&&!t&&u()),this},remove:function(){return w.each(arguments,function(e,t){var n;while((n=w.inArray(t,o,n))>-1)o.splice(n,1),n<=s&&s--}),this},has:function(e){return e?w.inArray(e,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return i=a=[],o=n="",this},disabled:function(){return!o},lock:function(){return i=a=[],n||t||(o=n=""),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=[e,(n=n||[]).slice?n.slice():n],a.push(n),t||u()),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!r}};return l};function I(e){return e}function W(e){throw e}function $(e,t,n,r){var i;try{e&&g(i=e.promise)?i.call(e).done(t).fail(n):e&&g(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}w.extend({Deferred:function(t){var n=[["notify","progress",w.Callbacks("memory"),w.Callbacks("memory"),2],["resolve","done",w.Callbacks("once memory"),w.Callbacks("once memory"),0,"resolved"],["reject","fail",w.Callbacks("once memory"),w.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return o.done(arguments).fail(arguments),this},"catch":function(e){return i.then(null,e)},pipe:function(){var e=arguments;return w.Deferred(function(t){w.each(n,function(n,r){var i=g(e[r[4]])&&e[r[4]];o[r[1]](function(){var e=i&&i.apply(this,arguments);e&&g(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[r[0]+"With"](this,i?[e]:arguments)})}),e=null}).promise()},then:function(t,r,i){var o=0;function a(t,n,r,i){return function(){var s=this,u=arguments,l=function(){var e,l;if(!(t<o)){if((e=r.apply(s,u))===n.promise())throw new TypeError("Thenable self-resolution");l=e&&("object"==typeof e||"function"==typeof e)&&e.then,g(l)?i?l.call(e,a(o,n,I,i),a(o,n,W,i)):(o++,l.call(e,a(o,n,I,i),a(o,n,W,i),a(o,n,I,n.notifyWith))):(r!==I&&(s=void 0,u=[e]),(i||n.resolveWith)(s,u))}},c=i?l:function(){try{l()}catch(e){w.Deferred.exceptionHook&&w.Deferred.exceptionHook(e,c.stackTrace),t+1>=o&&(r!==W&&(s=void 0,u=[e]),n.rejectWith(s,u))}};t?c():(w.Deferred.getStackHook&&(c.stackTrace=w.Deferred.getStackHook()),e.setTimeout(c))}}return w.Deferred(function(e){n[0][3].add(a(0,e,g(i)?i:I,e.notifyWith)),n[1][3].add(a(0,e,g(t)?t:I)),n[2][3].add(a(0,e,g(r)?r:W))}).promise()},promise:function(e){return null!=e?w.extend(e,i):i}},o={};return w.each(n,function(e,t){var a=t[2],s=t[5];i[t[1]]=a.add,s&&a.add(function(){r=s},n[3-e][2].disable,n[3-e][3].disable,n[0][2].lock,n[0][3].lock),a.add(t[3].fire),o[t[0]]=function(){return o[t[0]+"With"](this===o?void 0:this,arguments),this},o[t[0]+"With"]=a.fireWith}),i.promise(o),t&&t.call(o,o),o},when:function(e){var t=arguments.length,n=t,r=Array(n),i=o.call(arguments),a=w.Deferred(),s=function(e){return function(n){r[e]=this,i[e]=arguments.length>1?o.call(arguments):n,--t||a.resolveWith(r,i)}};if(t<=1&&($(e,a.done(s(n)).resolve,a.reject,!t),"pending"===a.state()||g(i[n]&&i[n].then)))return a.then();while(n--)$(i[n],s(n),a.reject);return a.promise()}});var B=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;w.Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&B.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},w.readyException=function(t){e.setTimeout(function(){throw t})};var F=w.Deferred();w.fn.ready=function(e){return F.then(e)["catch"](function(e){w.readyException(e)}),this},w.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--w.readyWait:w.isReady)||(w.isReady=!0,!0!==e&&--w.readyWait>0||F.resolveWith(r,[w]))}}),w.ready.then=F.then;function _(){r.removeEventListener("DOMContentLoaded",_),e.removeEventListener("load",_),w.ready()}"complete"===r.readyState||"loading"!==r.readyState&&!r.documentElement.doScroll?e.setTimeout(w.ready):(r.addEventListener("DOMContentLoaded",_),e.addEventListener("load",_));var z=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===x(n)){i=!0;for(s in n)z(e,t,s,n[s],!0,o,a)}else if(void 0!==r&&(i=!0,g(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(w(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},X=/^-ms-/,U=/-([a-z])/g;function V(e,t){return t.toUpperCase()}function G(e){return e.replace(X,"ms-").replace(U,V)}var Y=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Q(){this.expando=w.expando+Q.uid++}Q.uid=1,Q.prototype={cache:function(e){var t=e[this.expando];return t||(t={},Y(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[G(t)]=n;else for(r in t)i[G(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][G(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(G):(t=G(t))in r?[t]:t.match(M)||[]).length;while(n--)delete r[t[n]]}(void 0===t||w.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!w.isEmptyObject(t)}};var J=new Q,K=new Q,Z=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ee=/[A-Z]/g;function te(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:Z.test(e)?JSON.parse(e):e)}function ne(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(ee,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n=te(n)}catch(e){}K.set(e,t,n)}else n=void 0;return n}w.extend({hasData:function(e){return K.hasData(e)||J.hasData(e)},data:function(e,t,n){return K.access(e,t,n)},removeData:function(e,t){K.remove(e,t)},_data:function(e,t,n){return J.access(e,t,n)},_removeData:function(e,t){J.remove(e,t)}}),w.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(i=K.get(o),1===o.nodeType&&!J.get(o,"hasDataAttrs"))){n=a.length;while(n--)a[n]&&0===(r=a[n].name).indexOf("data-")&&(r=G(r.slice(5)),ne(o,r,i[r]));J.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){K.set(this,e)}):z(this,function(t){var n;if(o&&void 0===t){if(void 0!==(n=K.get(o,e)))return n;if(void 0!==(n=ne(o,e)))return n}else this.each(function(){K.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){K.remove(this,e)})}}),w.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=J.get(e,t),n&&(!r||Array.isArray(n)?r=J.access(e,t,w.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=w.queue(e,t),r=n.length,i=n.shift(),o=w._queueHooks(e,t),a=function(){w.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return J.get(e,n)||J.access(e,n,{empty:w.Callbacks("once memory").add(function(){J.remove(e,[t+"queue",n])})})}}),w.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?w.queue(this[0],e):void 0===t?this:this.each(function(){var n=w.queue(this,e,t);w._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&w.dequeue(this,e)})},dequeue:function(e){return this.each(function(){w.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=w.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=J.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var re=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ie=new RegExp("^(?:([+-])=|)("+re+")([a-z%]*)$","i"),oe=["Top","Right","Bottom","Left"],ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&w.contains(e.ownerDocument,e)&&"none"===w.css(e,"display")},se=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i};function ue(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return w.css(e,t,"")},u=s(),l=n&&n[3]||(w.cssNumber[t]?"":"px"),c=(w.cssNumber[t]||"px"!==l&&+u)&&ie.exec(w.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)w.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,w.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var le={};function ce(e){var t,n=e.ownerDocument,r=e.nodeName,i=le[r];return i||(t=n.body.appendChild(n.createElement(r)),i=w.css(t,"display"),t.parentNode.removeChild(t),"none"===i&&(i="block"),le[r]=i,i)}function fe(e,t){for(var n,r,i=[],o=0,a=e.length;o<a;o++)(r=e[o]).style&&(n=r.style.display,t?("none"===n&&(i[o]=J.get(r,"display")||null,i[o]||(r.style.display="")),""===r.style.display&&ae(r)&&(i[o]=ce(r))):"none"!==n&&(i[o]="none",J.set(r,"display",n)));for(o=0;o<a;o++)null!=i[o]&&(e[o].style.display=i[o]);return e}w.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?w(this).show():w(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;function ye(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&N(e,t)?w.merge([e],n):n}function ve(e,t){for(var n=0,r=e.length;n<r;n++)J.set(e[n],"globalEval",!t||J.get(t[n],"globalEval"))}var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===x(o))w.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+w.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;w.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&w.inArray(o,r)>-1)i&&i.push(o);else if(l=w.contains(o.ownerDocument,o),a=ye(f.appendChild(o),"script"),l&&ve(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}!function(){var e=r.createDocumentFragment().appendChild(r.createElement("div")),t=r.createElement("input");t.setAttribute("type","radio"),t.setAttribute("checked","checked"),t.setAttribute("name","t"),e.appendChild(t),h.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,e.innerHTML="<textarea>x</textarea>",h.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue}();var be=r.documentElement,we=/^key/,Te=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ce=/^([^.]*)(?:\.(.+)|)/;function Ee(){return!0}function ke(){return!1}function Se(){try{return r.activeElement}catch(e){}}function De(e,t,n,r,i,o){var a,s;if("object"==typeof t){"string"!=typeof n&&(r=r||n,n=void 0);for(s in t)De(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=ke;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return w().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=w.guid++)),e.each(function(){w.event.add(this,t,i,r,n)})}w.event={global:{},add:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.get(e);if(y){n.handler&&(n=(o=n).handler,i=o.selector),i&&w.find.matchesSelector(be,i),n.guid||(n.guid=w.guid++),(u=y.events)||(u=y.events={}),(a=y.handle)||(a=y.handle=function(t){return"undefined"!=typeof w&&w.event.triggered!==t.type?w.event.dispatch.apply(e,arguments):void 0}),l=(t=(t||"").match(M)||[""]).length;while(l--)d=g=(s=Ce.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=w.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=w.event.special[d]||{},c=w.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&w.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(e,r,h,a)||e.addEventListener&&e.addEventListener(d,a)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),w.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.hasData(e)&&J.get(e);if(y&&(u=y.events)){l=(t=(t||"").match(M)||[""]).length;while(l--)if(s=Ce.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){f=w.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.handle)||w.removeEvent(e,d,y.handle),delete u[d])}else for(d in u)w.event.remove(e,d+t[l],n,r,!0);w.isEmptyObject(u)&&J.remove(e,"handle events")}},dispatch:function(e){var t=w.event.fix(e),n,r,i,o,a,s,u=new Array(arguments.length),l=(J.get(this,"events")||{})[t.type]||[],c=w.event.special[t.type]||{};for(u[0]=t,n=1;n<arguments.length;n++)u[n]=arguments[n];if(t.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,t)){s=w.event.handlers.call(this,t,l),n=0;while((o=s[n++])&&!t.isPropagationStopped()){t.currentTarget=o.elem,r=0;while((a=o.handlers[r++])&&!t.isImmediatePropagationStopped())t.rnamespace&&!t.rnamespace.test(a.namespace)||(t.handleObj=a,t.data=a.data,void 0!==(i=((w.event.special[a.origType]||{}).handle||a.handler).apply(o.elem,u))&&!1===(t.result=i)&&(t.preventDefault(),t.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,t),t.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&e.button>=1))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?w(i,this).index(l)>-1:w.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(e,t){Object.defineProperty(w.Event.prototype,e,{enumerable:!0,configurable:!0,get:g(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[w.expando]?e:new w.Event(e)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==Se()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===Se()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&N(this,"input"))return this.click(),!1},_default:function(e){return N(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},w.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},w.Event=function(e,t){if(!(this instanceof w.Event))return new w.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ee:ke,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&w.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[w.expando]=!0},w.Event.prototype={constructor:w.Event,isDefaultPrevented:ke,isPropagationStopped:ke,isImmediatePropagationStopped:ke,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ee,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ee,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ee,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},w.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&we.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Te.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},w.event.addProp),w.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){w.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return i&&(i===r||w.contains(r,i))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),w.fn.extend({on:function(e,t,n,r){return De(this,e,t,n,r)},one:function(e,t,n,r){return De(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,w(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=ke),this.each(function(){w.event.remove(this,e,n,t)})}});var Ne=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Ae=/<script|<style|<link/i,je=/checked\s*(?:[^=]|=\s*.checked.)/i,qe=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Le(e,t){return N(e,"table")&&N(11!==t.nodeType?t:t.firstChild,"tr")?w(e).children("tbody")[0]||e:e}function He(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Oe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Pe(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(J.hasData(e)&&(o=J.access(e),a=J.set(t,o),l=o.events)){delete a.handle,a.events={};for(i in l)for(n=0,r=l[i].length;n<r;n++)w.event.add(t,i,l[i][n])}K.hasData(e)&&(s=K.access(e),u=w.extend({},s),K.set(t,u))}}function Me(e,t){var n=t.nodeName.toLowerCase();"input"===n&&pe.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function Re(e,t,n,r){t=a.apply([],t);var i,o,s,u,l,c,f=0,p=e.length,d=p-1,y=t[0],v=g(y);if(v||p>1&&"string"==typeof y&&!h.checkClone&&je.test(y))return e.each(function(i){var o=e.eq(i);v&&(t[0]=y.call(this,i,o.html())),Re(o,t,n,r)});if(p&&(i=xe(t,e[0].ownerDocument,!1,e,r),o=i.firstChild,1===i.childNodes.length&&(i=o),o||r)){for(u=(s=w.map(ye(i,"script"),He)).length;f<p;f++)l=i,f!==d&&(l=w.clone(l,!0,!0),u&&w.merge(s,ye(l,"script"))),n.call(e[f],l,f);if(u)for(c=s[s.length-1].ownerDocument,w.map(s,Oe),f=0;f<u;f++)l=s[f],he.test(l.type||"")&&!J.access(l,"globalEval")&&w.contains(c,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?w._evalUrl&&w._evalUrl(l.src):m(l.textContent.replace(qe,""),c,l))}return e}function Ie(e,t,n){for(var r,i=t?w.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||w.cleanData(ye(r)),r.parentNode&&(n&&w.contains(r.ownerDocument,r)&&ve(ye(r,"script")),r.parentNode.removeChild(r));return e}w.extend({htmlPrefilter:function(e){return e.replace(Ne,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s=e.cloneNode(!0),u=w.contains(e.ownerDocument,e);if(!(h.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||w.isXMLDoc(e)))for(a=ye(s),r=0,i=(o=ye(e)).length;r<i;r++)Me(o[r],a[r]);if(t)if(n)for(o=o||ye(e),a=a||ye(s),r=0,i=o.length;r<i;r++)Pe(o[r],a[r]);else Pe(e,s);return(a=ye(s,"script")).length>0&&ve(a,!u&&ye(e,"script")),s},cleanData:function(e){for(var t,n,r,i=w.event.special,o=0;void 0!==(n=e[o]);o++)if(Y(n)){if(t=n[J.expando]){if(t.events)for(r in t.events)i[r]?w.event.remove(n,r):w.removeEvent(n,r,t.handle);n[J.expando]=void 0}n[K.expando]&&(n[K.expando]=void 0)}}}),w.fn.extend({detach:function(e){return Ie(this,e,!0)},remove:function(e){return Ie(this,e)},text:function(e){return z(this,function(e){return void 0===e?w.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Re(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Le(this,e).appendChild(e)})},prepend:function(){return Re(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Le(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(w.cleanData(ye(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return w.clone(this,e,t)})},html:function(e){return z(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ae.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=w.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(w.cleanData(ye(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return Re(this,arguments,function(t){var n=this.parentNode;w.inArray(this,e)<0&&(w.cleanData(ye(this)),n&&n.replaceChild(t,this))},e)}}),w.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){w.fn[e]=function(e){for(var n,r=[],i=w(e),o=i.length-1,a=0;a<=o;a++)n=a===o?this:this.clone(!0),w(i[a])[t](n),s.apply(r,n.get());return this.pushStack(r)}});var We=new RegExp("^("+re+")(?!px)[a-z%]+$","i"),$e=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},Be=new RegExp(oe.join("|"),"i");!function(){function t(){if(c){l.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",c.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",be.appendChild(l).appendChild(c);var t=e.getComputedStyle(c);i="1%"!==t.top,u=12===n(t.marginLeft),c.style.right="60%",s=36===n(t.right),o=36===n(t.width),c.style.position="absolute",a=36===c.offsetWidth||"absolute",be.removeChild(l),c=null}}function n(e){return Math.round(parseFloat(e))}var i,o,a,s,u,l=r.createElement("div"),c=r.createElement("div");c.style&&(c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",h.clearCloneStyle="content-box"===c.style.backgroundClip,w.extend(h,{boxSizingReliable:function(){return t(),o},pixelBoxStyles:function(){return t(),s},pixelPosition:function(){return t(),i},reliableMarginLeft:function(){return t(),u},scrollboxSize:function(){return t(),a}}))}();function Fe(e,t,n){var r,i,o,a,s=e.style;return(n=n||$e(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||w.contains(e.ownerDocument,e)||(a=w.style(e,t)),!h.pixelBoxStyles()&&We.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function _e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}var ze=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ue={position:"absolute",visibility:"hidden",display:"block"},Ve={letterSpacing:"0",fontWeight:"400"},Ge=["Webkit","Moz","ms"],Ye=r.createElement("div").style;function Qe(e){if(e in Ye)return e;var t=e[0].toUpperCase()+e.slice(1),n=Ge.length;while(n--)if((e=Ge[n]+t)in Ye)return e}function Je(e){var t=w.cssProps[e];return t||(t=w.cssProps[e]=Qe(e)||e),t}function Ke(e,t,n){var r=ie.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ze(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=w.css(e,n+oe[a],!0,i)),r?("content"===n&&(u-=w.css(e,"padding"+oe[a],!0,i)),"margin"!==n&&(u-=w.css(e,"border"+oe[a]+"Width",!0,i))):(u+=w.css(e,"padding"+oe[a],!0,i),"padding"!==n?u+=w.css(e,"border"+oe[a]+"Width",!0,i):s+=w.css(e,"border"+oe[a]+"Width",!0,i));return!r&&o>=0&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))),u}function et(e,t,n){var r=$e(e),i=Fe(e,t,r),o="border-box"===w.css(e,"boxSizing",!1,r),a=o;if(We.test(i)){if(!n)return i;i="auto"}return a=a&&(h.boxSizingReliable()||i===e.style[t]),("auto"===i||!parseFloat(i)&&"inline"===w.css(e,"display",!1,r))&&(i=e["offset"+t[0].toUpperCase()+t.slice(1)],a=!0),(i=parseFloat(i)||0)+Ze(e,t,n||(o?"border":"content"),a,r,i)+"px"}w.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Fe(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=G(t),u=Xe.test(t),l=e.style;if(u||(t=Je(s)),a=w.cssHooks[t]||w.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"==(o=typeof n)&&(i=ie.exec(n))&&i[1]&&(n=ue(e,t,i),o="number"),null!=n&&n===n&&("number"===o&&(n+=i&&i[3]||(w.cssNumber[s]?"":"px")),h.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=G(t);return Xe.test(t)||(t=Je(s)),(a=w.cssHooks[t]||w.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Fe(e,t,r)),"normal"===i&&t in Ve&&(i=Ve[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),w.each(["height","width"],function(e,t){w.cssHooks[t]={get:function(e,n,r){if(n)return!ze.test(w.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?et(e,t,r):se(e,Ue,function(){return et(e,t,r)})},set:function(e,n,r){var i,o=$e(e),a="border-box"===w.css(e,"boxSizing",!1,o),s=r&&Ze(e,t,r,a,o);return a&&h.scrollboxSize()===o.position&&(s-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-Ze(e,t,"border",!1,o)-.5)),s&&(i=ie.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=w.css(e,t)),Ke(e,n,s)}}}),w.cssHooks.marginLeft=_e(h.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Fe(e,"marginLeft"))||e.getBoundingClientRect().left-se(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),w.each({margin:"",padding:"",border:"Width"},function(e,t){w.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+oe[r]+t]=o[r]||o[r-2]||o[0];return i}},"margin"!==e&&(w.cssHooks[e+t].set=Ke)}),w.fn.extend({css:function(e,t){return z(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=$e(e),i=t.length;a<i;a++)o[t[a]]=w.css(e,t[a],!1,r);return o}return void 0!==n?w.style(e,t,n):w.css(e,t)},e,t,arguments.length>1)}});function tt(e,t,n,r,i){return new tt.prototype.init(e,t,n,r,i)}w.Tween=tt,tt.prototype={constructor:tt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||w.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(w.cssNumber[n]?"":"px")},cur:function(){var e=tt.propHooks[this.prop];return e&&e.get?e.get(this):tt.propHooks._default.get(this)},run:function(e){var t,n=tt.propHooks[this.prop];return this.options.duration?this.pos=t=w.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):tt.propHooks._default.set(this),this}},tt.prototype.init.prototype=tt.prototype,tt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=w.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){w.fx.step[e.prop]?w.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[w.cssProps[e.prop]]&&!w.cssHooks[e.prop]?e.elem[e.prop]=e.now:w.style(e.elem,e.prop,e.now+e.unit)}}},tt.propHooks.scrollTop=tt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},w.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},w.fx=tt.prototype.init,w.fx.step={};var nt,rt,it=/^(?:toggle|show|hide)$/,ot=/queueHooks$/;function at(){rt&&(!1===r.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(at):e.setTimeout(at,w.fx.interval),w.fx.tick())}function st(){return e.setTimeout(function(){nt=void 0}),nt=Date.now()}function ut(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=oe[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function lt(e,t,n){for(var r,i=(pt.tweeners[t]||[]).concat(pt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ct(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),y=J.get(e,"fxshow");n.queue||(null==(a=w._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,w.queue(e,"fx").length||a.empty.fire()})}));for(r in t)if(i=t[r],it.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!y||void 0===y[r])continue;g=!0}d[r]=y&&y[r]||w.style(e,r)}if((u=!w.isEmptyObject(t))||!w.isEmptyObject(d)){f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=y&&y.display)&&(l=J.get(e,"display")),"none"===(c=w.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=w.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===w.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1;for(r in d)u||(y?"hidden"in y&&(g=y.hidden):y=J.access(e,"fxshow",{display:l}),o&&(y.hidden=!g),g&&fe([e],!0),p.done(function(){g||fe([e]),J.remove(e,"fxshow");for(r in d)w.style(e,r,d[r])})),u=lt(g?y[r]:0,r,p),r in y||(y[r]=u.start,g&&(u.end=u.start,u.start=0))}}function ft(e,t){var n,r,i,o,a;for(n in e)if(r=G(n),i=t[r],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=w.cssHooks[r])&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function pt(e,t,n){var r,i,o=0,a=pt.prefilters.length,s=w.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=nt||st(),n=Math.max(0,l.startTime+l.duration-t),r=1-(n/l.duration||0),o=0,a=l.tweens.length;o<a;o++)l.tweens[o].run(r);return s.notifyWith(e,[l,r,n]),r<1&&a?n:(a||s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:w.extend({},t),opts:w.extend(!0,{specialEasing:{},easing:w.easing._default},n),originalProperties:t,originalOptions:n,startTime:nt||st(),duration:n.duration,tweens:[],createTween:function(t,n){var r=w.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)l.tweens[n].run(1);return t?(s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l,t])):s.rejectWith(e,[l,t]),this}}),c=l.props;for(ft(c,l.opts.specialEasing);o<a;o++)if(r=pt.prefilters[o].call(l,e,c,l.opts))return g(r.stop)&&(w._queueHooks(l.elem,l.opts.queue).stop=r.stop.bind(r)),r;return w.map(c,lt,l),g(l.opts.start)&&l.opts.start.call(e,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),w.fx.timer(w.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l}w.Animation=w.extend(pt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return ue(n.elem,e,ie.exec(t),n),n}]},tweener:function(e,t){g(e)?(t=e,e=["*"]):e=e.match(M);for(var n,r=0,i=e.length;r<i;r++)n=e[r],pt.tweeners[n]=pt.tweeners[n]||[],pt.tweeners[n].unshift(t)},prefilters:[ct],prefilter:function(e,t){t?pt.prefilters.unshift(e):pt.prefilters.push(e)}}),w.speed=function(e,t,n){var r=e&&"object"==typeof e?w.extend({},e):{complete:n||!n&&t||g(e)&&e,duration:e,easing:n&&t||t&&!g(t)&&t};return w.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in w.fx.speeds?r.duration=w.fx.speeds[r.duration]:r.duration=w.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){g(r.old)&&r.old.call(this),r.queue&&w.dequeue(this,r.queue)},r},w.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=w.isEmptyObject(e),o=w.speed(t,n,r),a=function(){var t=pt(this,w.extend({},e),o);(i||J.get(this,"finish"))&&t.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=w.timers,a=J.get(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&ot.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));!t&&n||w.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=J.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=w.timers,a=r?r.length:0;for(n.finish=!0,w.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),w.each(["toggle","show","hide"],function(e,t){var n=w.fn[t];w.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ut(t,!0),e,r,i)}}),w.each({slideDown:ut("show"),slideUp:ut("hide"),slideToggle:ut("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){w.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),w.timers=[],w.fx.tick=function(){var e,t=0,n=w.timers;for(nt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||w.fx.stop(),nt=void 0},w.fx.timer=function(e){w.timers.push(e),w.fx.start()},w.fx.interval=13,w.fx.start=function(){rt||(rt=!0,at())},w.fx.stop=function(){rt=null},w.fx.speeds={slow:600,fast:200,_default:400},w.fn.delay=function(t,n){return t=w.fx?w.fx.speeds[t]||t:t,n=n||"fx",this.queue(n,function(n,r){var i=e.setTimeout(n,t);r.stop=function(){e.clearTimeout(i)}})},function(){var e=r.createElement("input"),t=r.createElement("select").appendChild(r.createElement("option"));e.type="checkbox",h.checkOn=""!==e.value,h.optSelected=t.selected,(e=r.createElement("input")).value="t",e.type="radio",h.radioValue="t"===e.value}();var dt,ht=w.expr.attrHandle;w.fn.extend({attr:function(e,t){return z(this,w.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){w.removeAttr(this,e)})}}),w.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?w.prop(e,t,n):(1===o&&w.isXMLDoc(e)||(i=w.attrHooks[t.toLowerCase()]||(w.expr.match.bool.test(t)?dt:void 0)),void 0!==n?null===n?void w.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=w.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!h.radioValue&&"radio"===t&&N(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(M);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),dt={set:function(e,t,n){return!1===t?w.removeAttr(e,n):e.setAttribute(n,n),n}},w.each(w.expr.match.bool.source.match(/\w+/g),function(e,t){var n=ht[t]||w.find.attr;ht[t]=function(e,t,r){var i,o,a=t.toLowerCase();return r||(o=ht[a],ht[a]=i,i=null!=n(e,t,r)?a:null,ht[a]=o),i}});var gt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;w.fn.extend({prop:function(e,t){return z(this,w.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[w.propFix[e]||e]})}}),w.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&w.isXMLDoc(e)||(t=w.propFix[t]||t,i=w.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=w.find.attr(e,"tabindex");return t?parseInt(t,10):gt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),h.optSelected||(w.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),w.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){w.propFix[this.toLowerCase()]=this});function vt(e){return(e.match(M)||[]).join(" ")}function mt(e){return e.getAttribute&&e.getAttribute("class")||""}function xt(e){return Array.isArray(e)?e:"string"==typeof e?e.match(M)||[]:[]}w.fn.extend({addClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).addClass(e.call(this,t,mt(this)))});if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).removeClass(e.call(this,t,mt(this)))});if(!arguments.length)return this.attr("class","");if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])while(r.indexOf(" "+o+" ")>-1)r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(e,t){var n=typeof e,r="string"===n||Array.isArray(e);return"boolean"==typeof t&&r?t?this.addClass(e):this.removeClass(e):g(e)?this.each(function(n){w(this).toggleClass(e.call(this,n,mt(this),t),t)}):this.each(function(){var t,i,o,a;if(r){i=0,o=w(this),a=xt(e);while(t=a[i++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else void 0!==e&&"boolean"!==n||((t=mt(this))&&J.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":J.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&(" "+vt(mt(n))+" ").indexOf(t)>-1)return!0;return!1}});var bt=/\r/g;w.fn.extend({val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=g(e),this.each(function(n){var i;1===this.nodeType&&(null==(i=r?e.call(this,n,w(this).val()):e)?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=w.map(i,function(e){return null==e?"":e+""})),(t=w.valHooks[this.type]||w.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))});if(i)return(t=w.valHooks[i.type]||w.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(bt,""):null==n?"":n}}}),w.extend({valHooks:{option:{get:function(e){var t=w.find.attr(e,"value");return null!=t?t:vt(w.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!N(n.parentNode,"optgroup"))){if(t=w(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=w.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=w.inArray(w.valHooks.option.get(r),o)>-1)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),w.each(["radio","checkbox"],function(){w.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=w.inArray(w(e).val(),t)>-1}},h.checkOn||(w.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),h.focusin="onfocusin"in e;var wt=/^(?:focusinfocus|focusoutblur)$/,Tt=function(e){e.stopPropagation()};w.extend(w.event,{trigger:function(t,n,i,o){var a,s,u,l,c,p,d,h,v=[i||r],m=f.call(t,"type")?t.type:t,x=f.call(t,"namespace")?t.namespace.split("."):[];if(s=h=u=i=i||r,3!==i.nodeType&&8!==i.nodeType&&!wt.test(m+w.event.triggered)&&(m.indexOf(".")>-1&&(m=(x=m.split(".")).shift(),x.sort()),c=m.indexOf(":")<0&&"on"+m,t=t[w.expando]?t:new w.Event(m,"object"==typeof t&&t),t.isTrigger=o?2:3,t.namespace=x.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+x.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=i),n=null==n?[t]:w.makeArray(n,[t]),d=w.event.special[m]||{},o||!d.trigger||!1!==d.trigger.apply(i,n))){if(!o&&!d.noBubble&&!y(i)){for(l=d.delegateType||m,wt.test(l+m)||(s=s.parentNode);s;s=s.parentNode)v.push(s),u=s;u===(i.ownerDocument||r)&&v.push(u.defaultView||u.parentWindow||e)}a=0;while((s=v[a++])&&!t.isPropagationStopped())h=s,t.type=a>1?l:d.bindType||m,(p=(J.get(s,"events")||{})[t.type]&&J.get(s,"handle"))&&p.apply(s,n),(p=c&&s[c])&&p.apply&&Y(s)&&(t.result=p.apply(s,n),!1===t.result&&t.preventDefault());return t.type=m,o||t.isDefaultPrevented()||d._default&&!1!==d._default.apply(v.pop(),n)||!Y(i)||c&&g(i[m])&&!y(i)&&((u=i[c])&&(i[c]=null),w.event.triggered=m,t.isPropagationStopped()&&h.addEventListener(m,Tt),i[m](),t.isPropagationStopped()&&h.removeEventListener(m,Tt),w.event.triggered=void 0,u&&(i[c]=u)),t.result}},simulate:function(e,t,n){var r=w.extend(new w.Event,n,{type:e,isSimulated:!0});w.event.trigger(r,null,t)}}),w.fn.extend({trigger:function(e,t){return this.each(function(){w.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return w.event.trigger(e,t,n,!0)}}),h.focusin||w.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){w.event.simulate(t,e.target,w.event.fix(e))};w.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=J.access(r,t);i||r.addEventListener(e,n,!0),J.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=J.access(r,t)-1;i?J.access(r,t,i):(r.removeEventListener(e,n,!0),J.remove(r,t))}}});var Ct=e.location,Et=Date.now(),kt=/\?/;w.parseXML=function(t){var n;if(!t||"string"!=typeof t)return null;try{n=(new e.DOMParser).parseFromString(t,"text/xml")}catch(e){n=void 0}return n&&!n.getElementsByTagName("parsererror").length||w.error("Invalid XML: "+t),n};var St=/\[\]$/,Dt=/\r?\n/g,Nt=/^(?:submit|button|image|reset|file)$/i,At=/^(?:input|select|textarea|keygen)/i;function jt(e,t,n,r){var i;if(Array.isArray(t))w.each(t,function(t,i){n||St.test(e)?r(e,i):jt(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)});else if(n||"object"!==x(t))r(e,t);else for(i in t)jt(e+"["+i+"]",t[i],n,r)}w.param=function(e,t){var n,r=[],i=function(e,t){var n=g(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(Array.isArray(e)||e.jquery&&!w.isPlainObject(e))w.each(e,function(){i(this.name,this.value)});else for(n in e)jt(n,e[n],t,i);return r.join("&")},w.fn.extend({serialize:function(){return w.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=w.prop(this,"elements");return e?w.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!w(this).is(":disabled")&&At.test(this.nodeName)&&!Nt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=w(this).val();return null==n?null:Array.isArray(n)?w.map(n,function(e){return{name:t.name,value:e.replace(Dt,"\r\n")}}):{name:t.name,value:n.replace(Dt,"\r\n")}}).get()}});var qt=/%20/g,Lt=/#.*$/,Ht=/([?&])_=[^&]*/,Ot=/^(.*?):[ \t]*([^\r\n]*)$/gm,Pt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Mt=/^(?:GET|HEAD)$/,Rt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Bt=r.createElement("a");Bt.href=Ct.href;function Ft(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(M)||[];if(g(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function _t(e,t,n,r){var i={},o=e===Wt;function a(s){var u;return i[s]=!0,w.each(e[s]||[],function(e,s){var l=s(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):void 0:(t.dataTypes.unshift(l),a(l),!1)}),u}return a(t.dataTypes[0])||!i["*"]&&a("*")}function zt(e,t){var n,r,i=w.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&w.extend(!0,e,r),e}function Xt(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}function Ut(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}w.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ct.href,type:"GET",isLocal:Pt.test(Ct.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":w.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,w.ajaxSettings),t):zt(w.ajaxSettings,e)},ajaxPrefilter:Ft(It),ajaxTransport:Ft(Wt),ajax:function(t,n){"object"==typeof t&&(n=t,t=void 0),n=n||{};var i,o,a,s,u,l,c,f,p,d,h=w.ajaxSetup({},n),g=h.context||h,y=h.context&&(g.nodeType||g.jquery)?w(g):w.event,v=w.Deferred(),m=w.Callbacks("once memory"),x=h.statusCode||{},b={},T={},C="canceled",E={readyState:0,getResponseHeader:function(e){var t;if(c){if(!s){s={};while(t=Ot.exec(a))s[t[1].toLowerCase()]=t[2]}t=s[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return c?a:null},setRequestHeader:function(e,t){return null==c&&(e=T[e.toLowerCase()]=T[e.toLowerCase()]||e,b[e]=t),this},overrideMimeType:function(e){return null==c&&(h.mimeType=e),this},statusCode:function(e){var t;if(e)if(c)E.always(e[E.status]);else for(t in e)x[t]=[x[t],e[t]];return this},abort:function(e){var t=e||C;return i&&i.abort(t),k(0,t),this}};if(v.promise(E),h.url=((t||h.url||Ct.href)+"").replace(Rt,Ct.protocol+"//"),h.type=n.method||n.type||h.method||h.type,h.dataTypes=(h.dataType||"*").toLowerCase().match(M)||[""],null==h.crossDomain){l=r.createElement("a");try{l.href=h.url,l.href=l.href,h.crossDomain=Bt.protocol+"//"+Bt.host!=l.protocol+"//"+l.host}catch(e){h.crossDomain=!0}}if(h.data&&h.processData&&"string"!=typeof h.data&&(h.data=w.param(h.data,h.traditional)),_t(It,h,n,E),c)return E;(f=w.event&&h.global)&&0==w.active++&&w.event.trigger("ajaxStart"),h.type=h.type.toUpperCase(),h.hasContent=!Mt.test(h.type),o=h.url.replace(Lt,""),h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(qt,"+")):(d=h.url.slice(o.length),h.data&&(h.processData||"string"==typeof h.data)&&(o+=(kt.test(o)?"&":"?")+h.data,delete h.data),!1===h.cache&&(o=o.replace(Ht,"$1"),d=(kt.test(o)?"&":"?")+"_="+Et+++d),h.url=o+d),h.ifModified&&(w.lastModified[o]&&E.setRequestHeader("If-Modified-Since",w.lastModified[o]),w.etag[o]&&E.setRequestHeader("If-None-Match",w.etag[o])),(h.data&&h.hasContent&&!1!==h.contentType||n.contentType)&&E.setRequestHeader("Content-Type",h.contentType),E.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+$t+"; q=0.01":""):h.accepts["*"]);for(p in h.headers)E.setRequestHeader(p,h.headers[p]);if(h.beforeSend&&(!1===h.beforeSend.call(g,E,h)||c))return E.abort();if(C="abort",m.add(h.complete),E.done(h.success),E.fail(h.error),i=_t(Wt,h,n,E)){if(E.readyState=1,f&&y.trigger("ajaxSend",[E,h]),c)return E;h.async&&h.timeout>0&&(u=e.setTimeout(function(){E.abort("timeout")},h.timeout));try{c=!1,i.send(b,k)}catch(e){if(c)throw e;k(-1,e)}}else k(-1,"No Transport");function k(t,n,r,s){var l,p,d,b,T,C=n;c||(c=!0,u&&e.clearTimeout(u),i=void 0,a=s||"",E.readyState=t>0?4:0,l=t>=200&&t<300||304===t,r&&(b=Xt(h,E,r)),b=Ut(h,b,E,l),l?(h.ifModified&&((T=E.getResponseHeader("Last-Modified"))&&(w.lastModified[o]=T),(T=E.getResponseHeader("etag"))&&(w.etag[o]=T)),204===t||"HEAD"===h.type?C="nocontent":304===t?C="notmodified":(C=b.state,p=b.data,l=!(d=b.error))):(d=C,!t&&C||(C="error",t<0&&(t=0))),E.status=t,E.statusText=(n||C)+"",l?v.resolveWith(g,[p,C,E]):v.rejectWith(g,[E,C,d]),E.statusCode(x),x=void 0,f&&y.trigger(l?"ajaxSuccess":"ajaxError",[E,h,l?p:d]),m.fireWith(g,[E,C]),f&&(y.trigger("ajaxComplete",[E,h]),--w.active||w.event.trigger("ajaxStop")))}return E},getJSON:function(e,t,n){return w.get(e,t,n,"json")},getScript:function(e,t){return w.get(e,void 0,t,"script")}}),w.each(["get","post"],function(e,t){w[t]=function(e,n,r,i){return g(n)&&(i=i||r,r=n,n=void 0),w.ajax(w.extend({url:e,type:t,dataType:i,data:n,success:r},w.isPlainObject(e)&&e))}}),w._evalUrl=function(e){return w.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},w.fn.extend({wrapAll:function(e){var t;return this[0]&&(g(e)&&(e=e.call(this[0])),t=w(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return g(e)?this.each(function(t){w(this).wrapInner(e.call(this,t))}):this.each(function(){var t=w(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=g(e);return this.each(function(n){w(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){w(this).replaceWith(this.childNodes)}),this}}),w.expr.pseudos.hidden=function(e){return!w.expr.pseudos.visible(e)},w.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},w.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}};var Vt={0:200,1223:204},Gt=w.ajaxSettings.xhr();h.cors=!!Gt&&"withCredentials"in Gt,h.ajax=Gt=!!Gt,w.ajaxTransport(function(t){var n,r;if(h.cors||Gt&&!t.crossDomain)return{send:function(i,o){var a,s=t.xhr();if(s.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(a in t.xhrFields)s[a]=t.xhrFields[a];t.mimeType&&s.overrideMimeType&&s.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");for(a in i)s.setRequestHeader(a,i[a]);n=function(e){return function(){n&&(n=r=s.onload=s.onerror=s.onabort=s.ontimeout=s.onreadystatechange=null,"abort"===e?s.abort():"error"===e?"number"!=typeof s.status?o(0,"error"):o(s.status,s.statusText):o(Vt[s.status]||s.status,s.statusText,"text"!==(s.responseType||"text")||"string"!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},s.onload=n(),r=s.onerror=s.ontimeout=n("error"),void 0!==s.onabort?s.onabort=r:s.onreadystatechange=function(){4===s.readyState&&e.setTimeout(function(){n&&r()})},n=n("abort");try{s.send(t.hasContent&&t.data||null)}catch(e){if(n)throw e}},abort:function(){n&&n()}}}),w.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),w.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return w.globalEval(e),e}}}),w.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),w.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(i,o){t=w("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&o("error"===e.type?404:200,e.type)}),r.head.appendChild(t[0])},abort:function(){n&&n()}}}});var Yt=[],Qt=/(=)\?(?=&|$)|\?\?/;w.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Yt.pop()||w.expando+"_"+Et++;return this[e]=!0,e}}),w.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,a,s=!1!==t.jsonp&&(Qt.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Qt.test(t.data)&&"data");if(s||"jsonp"===t.dataTypes[0])return i=t.jsonpCallback=g(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(Qt,"$1"+i):!1!==t.jsonp&&(t.url+=(kt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||w.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){a=arguments},r.always(function(){void 0===o?w(e).removeProp(i):e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,Yt.push(i)),a&&g(o)&&o(a[0]),a=o=void 0}),"script"}),h.createHTMLDocument=function(){var e=r.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",2===e.childNodes.length}(),w.parseHTML=function(e,t,n){if("string"!=typeof e)return[];"boolean"==typeof t&&(n=t,t=!1);var i,o,a;return t||(h.createHTMLDocument?((i=(t=r.implementation.createHTMLDocument("")).createElement("base")).href=r.location.href,t.head.appendChild(i)):t=r),o=A.exec(e),a=!n&&[],o?[t.createElement(o[1])]:(o=xe([e],t,a),a&&a.length&&w(a).remove(),w.merge([],o.childNodes))},w.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return s>-1&&(r=vt(e.slice(s)),e=e.slice(0,s)),g(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),a.length>0&&w.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?w("<div>").append(w.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},w.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){w.fn[t]=function(e){return this.on(t,e)}}),w.expr.pseudos.animated=function(e){return w.grep(w.timers,function(t){return e===t.elem}).length},w.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l,c=w.css(e,"position"),f=w(e),p={};"static"===c&&(e.style.position="relative"),s=f.offset(),o=w.css(e,"top"),u=w.css(e,"left"),(l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1)?(a=(r=f.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),g(t)&&(t=t.call(e,n,w.extend({},s))),null!=t.top&&(p.top=t.top-s.top+a),null!=t.left&&(p.left=t.left-s.left+i),"using"in t?t.using.call(e,p):f.css(p)}},w.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){w.offset.setOffset(this,e,t)});var t,n,r=this[0];if(r)return r.getClientRects().length?(t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===w.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===w.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=w(e).offset()).top+=w.css(e,"borderTopWidth",!0),i.left+=w.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-w.css(r,"marginTop",!0),left:t.left-i.left-w.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===w.css(e,"position"))e=e.offsetParent;return e||be})}}),w.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;w.fn[e]=function(r){return z(this,function(e,r,i){var o;if(y(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===i)return o?o[t]:e[r];o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i},e,r,arguments.length)}}),w.each(["top","left"],function(e,t){w.cssHooks[t]=_e(h.pixelPosition,function(e,n){if(n)return n=Fe(e,t),We.test(n)?w(e).position()[t]+"px":n})}),w.each({Height:"height",Width:"width"},function(e,t){w.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){w.fn[r]=function(i,o){var a=arguments.length&&(n||"boolean"!=typeof i),s=n||(!0===i||!0===o?"margin":"border");return z(this,function(t,n,i){var o;return y(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?w.css(t,n,s):w.style(t,n,i,s)},t,a?i:void 0,a)}})}),w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){w.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),w.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),w.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),w.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),g(e))return r=o.call(arguments,2),i=function(){return e.apply(t||this,r.concat(o.call(arguments)))},i.guid=e.guid=e.guid||w.guid++,i},w.holdReady=function(e){e?w.readyWait++:w.ready(!0)},w.isArray=Array.isArray,w.parseJSON=JSON.parse,w.nodeName=N,w.isFunction=g,w.isWindow=y,w.camelCase=G,w.type=x,w.now=Date.now,w.isNumeric=function(e){var t=w.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return w});var Jt=e.jQuery,Kt=e.$;return w.noConflict=function(t){return e.$===w&&(e.$=Kt),t&&e.jQuery===w&&(e.jQuery=Jt),w},t||(e.jQuery=e.$=w),w});


// Filename: ./node_modules/popper.js/dist/umd/popper.min.js
/*
 Copyright (C) Federico Zivolo 2017
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */(function(e,t){'object'==typeof exports&&'undefined'!=typeof module?module.exports=t():'function'==typeof define&&define.amd?define(t):e.Popper=t()})(this,function(){'use strict';function e(e){return e&&'[object Function]'==={}.toString.call(e)}function t(e,t){if(1!==e.nodeType)return[];var o=getComputedStyle(e,null);return t?o[t]:o}function o(e){return'HTML'===e.nodeName?e:e.parentNode||e.host}function n(e){if(!e)return document.body;switch(e.nodeName){case'HTML':case'BODY':return e.ownerDocument.body;case'#document':return e.body;}var i=t(e),r=i.overflow,p=i.overflowX,s=i.overflowY;return /(auto|scroll)/.test(r+s+p)?e:n(o(e))}function r(e){var o=e&&e.offsetParent,i=o&&o.nodeName;return i&&'BODY'!==i&&'HTML'!==i?-1!==['TD','TABLE'].indexOf(o.nodeName)&&'static'===t(o,'position')?r(o):o:e?e.ownerDocument.documentElement:document.documentElement}function p(e){var t=e.nodeName;return'BODY'!==t&&('HTML'===t||r(e.firstElementChild)===e)}function s(e){return null===e.parentNode?e:s(e.parentNode)}function d(e,t){if(!e||!e.nodeType||!t||!t.nodeType)return document.documentElement;var o=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,i=o?e:t,n=o?t:e,a=document.createRange();a.setStart(i,0),a.setEnd(n,0);var l=a.commonAncestorContainer;if(e!==l&&t!==l||i.contains(n))return p(l)?l:r(l);var f=s(e);return f.host?d(f.host,t):d(e,s(t).host)}function a(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:'top',o='top'===t?'scrollTop':'scrollLeft',i=e.nodeName;if('BODY'===i||'HTML'===i){var n=e.ownerDocument.documentElement,r=e.ownerDocument.scrollingElement||n;return r[o]}return e[o]}function l(e,t){var o=2<arguments.length&&void 0!==arguments[2]&&arguments[2],i=a(t,'top'),n=a(t,'left'),r=o?-1:1;return e.top+=i*r,e.bottom+=i*r,e.left+=n*r,e.right+=n*r,e}function f(e,t){var o='x'===t?'Left':'Top',i='Left'==o?'Right':'Bottom';return parseFloat(e['border'+o+'Width'],10)+parseFloat(e['border'+i+'Width'],10)}function m(e,t,o,i){return J(t['offset'+e],t['scroll'+e],o['client'+e],o['offset'+e],o['scroll'+e],ie()?o['offset'+e]+i['margin'+('Height'===e?'Top':'Left')]+i['margin'+('Height'===e?'Bottom':'Right')]:0)}function h(){var e=document.body,t=document.documentElement,o=ie()&&getComputedStyle(t);return{height:m('Height',e,t,o),width:m('Width',e,t,o)}}function c(e){return se({},e,{right:e.left+e.width,bottom:e.top+e.height})}function g(e){var o={};if(ie())try{o=e.getBoundingClientRect();var i=a(e,'top'),n=a(e,'left');o.top+=i,o.left+=n,o.bottom+=i,o.right+=n}catch(e){}else o=e.getBoundingClientRect();var r={left:o.left,top:o.top,width:o.right-o.left,height:o.bottom-o.top},p='HTML'===e.nodeName?h():{},s=p.width||e.clientWidth||r.right-r.left,d=p.height||e.clientHeight||r.bottom-r.top,l=e.offsetWidth-s,m=e.offsetHeight-d;if(l||m){var g=t(e);l-=f(g,'x'),m-=f(g,'y'),r.width-=l,r.height-=m}return c(r)}function u(e,o){var i=ie(),r='HTML'===o.nodeName,p=g(e),s=g(o),d=n(e),a=t(o),f=parseFloat(a.borderTopWidth,10),m=parseFloat(a.borderLeftWidth,10),h=c({top:p.top-s.top-f,left:p.left-s.left-m,width:p.width,height:p.height});if(h.marginTop=0,h.marginLeft=0,!i&&r){var u=parseFloat(a.marginTop,10),b=parseFloat(a.marginLeft,10);h.top-=f-u,h.bottom-=f-u,h.left-=m-b,h.right-=m-b,h.marginTop=u,h.marginLeft=b}return(i?o.contains(d):o===d&&'BODY'!==d.nodeName)&&(h=l(h,o)),h}function b(e){var t=e.ownerDocument.documentElement,o=u(e,t),i=J(t.clientWidth,window.innerWidth||0),n=J(t.clientHeight,window.innerHeight||0),r=a(t),p=a(t,'left'),s={top:r-o.top+o.marginTop,left:p-o.left+o.marginLeft,width:i,height:n};return c(s)}function w(e){var i=e.nodeName;return'BODY'===i||'HTML'===i?!1:'fixed'===t(e,'position')||w(o(e))}function y(e,t,i,r){var p={top:0,left:0},s=d(e,t);if('viewport'===r)p=b(s);else{var a;'scrollParent'===r?(a=n(o(t)),'BODY'===a.nodeName&&(a=e.ownerDocument.documentElement)):'window'===r?a=e.ownerDocument.documentElement:a=r;var l=u(a,s);if('HTML'===a.nodeName&&!w(s)){var f=h(),m=f.height,c=f.width;p.top+=l.top-l.marginTop,p.bottom=m+l.top,p.left+=l.left-l.marginLeft,p.right=c+l.left}else p=l}return p.left+=i,p.top+=i,p.right-=i,p.bottom-=i,p}function E(e){var t=e.width,o=e.height;return t*o}function v(e,t,o,i,n){var r=5<arguments.length&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf('auto'))return e;var p=y(o,i,r,n),s={top:{width:p.width,height:t.top-p.top},right:{width:p.right-t.right,height:p.height},bottom:{width:p.width,height:p.bottom-t.bottom},left:{width:t.left-p.left,height:p.height}},d=Object.keys(s).map(function(e){return se({key:e},s[e],{area:E(s[e])})}).sort(function(e,t){return t.area-e.area}),a=d.filter(function(e){var t=e.width,i=e.height;return t>=o.clientWidth&&i>=o.clientHeight}),l=0<a.length?a[0].key:d[0].key,f=e.split('-')[1];return l+(f?'-'+f:'')}function O(e,t,o){var i=d(t,o);return u(o,i)}function L(e){var t=getComputedStyle(e),o=parseFloat(t.marginTop)+parseFloat(t.marginBottom),i=parseFloat(t.marginLeft)+parseFloat(t.marginRight),n={width:e.offsetWidth+i,height:e.offsetHeight+o};return n}function x(e){var t={left:'right',right:'left',bottom:'top',top:'bottom'};return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}function S(e,t,o){o=o.split('-')[0];var i=L(e),n={width:i.width,height:i.height},r=-1!==['right','left'].indexOf(o),p=r?'top':'left',s=r?'left':'top',d=r?'height':'width',a=r?'width':'height';return n[p]=t[p]+t[d]/2-i[d]/2,n[s]=o===s?t[s]-i[a]:t[x(s)],n}function T(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function D(e,t,o){if(Array.prototype.findIndex)return e.findIndex(function(e){return e[t]===o});var i=T(e,function(e){return e[t]===o});return e.indexOf(i)}function C(t,o,i){var n=void 0===i?t:t.slice(0,D(t,'name',i));return n.forEach(function(t){t['function']&&console.warn('`modifier.function` is deprecated, use `modifier.fn`!');var i=t['function']||t.fn;t.enabled&&e(i)&&(o.offsets.popper=c(o.offsets.popper),o.offsets.reference=c(o.offsets.reference),o=i(o,t))}),o}function N(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=O(this.state,this.popper,this.reference),e.placement=v(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.offsets.popper=S(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position='absolute',e=C(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}function k(e,t){return e.some(function(e){var o=e.name,i=e.enabled;return i&&o===t})}function W(e){for(var t=[!1,'ms','Webkit','Moz','O'],o=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<t.length-1;n++){var i=t[n],r=i?''+i+o:e;if('undefined'!=typeof document.body.style[r])return r}return null}function P(){return this.state.isDestroyed=!0,k(this.modifiers,'applyStyle')&&(this.popper.removeAttribute('x-placement'),this.popper.style.left='',this.popper.style.position='',this.popper.style.top='',this.popper.style[W('transform')]=''),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function B(e){var t=e.ownerDocument;return t?t.defaultView:window}function H(e,t,o,i){var r='BODY'===e.nodeName,p=r?e.ownerDocument.defaultView:e;p.addEventListener(t,o,{passive:!0}),r||H(n(p.parentNode),t,o,i),i.push(p)}function A(e,t,o,i){o.updateBound=i,B(e).addEventListener('resize',o.updateBound,{passive:!0});var r=n(e);return H(r,'scroll',o.updateBound,o.scrollParents),o.scrollElement=r,o.eventsEnabled=!0,o}function I(){this.state.eventsEnabled||(this.state=A(this.reference,this.options,this.state,this.scheduleUpdate))}function M(e,t){return B(e).removeEventListener('resize',t.updateBound),t.scrollParents.forEach(function(e){e.removeEventListener('scroll',t.updateBound)}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t}function R(){this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=M(this.reference,this.state))}function U(e){return''!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function Y(e,t){Object.keys(t).forEach(function(o){var i='';-1!==['width','height','top','right','bottom','left'].indexOf(o)&&U(t[o])&&(i='px'),e.style[o]=t[o]+i})}function j(e,t){Object.keys(t).forEach(function(o){var i=t[o];!1===i?e.removeAttribute(o):e.setAttribute(o,t[o])})}function F(e,t,o){var i=T(e,function(e){var o=e.name;return o===t}),n=!!i&&e.some(function(e){return e.name===o&&e.enabled&&e.order<i.order});if(!n){var r='`'+t+'`';console.warn('`'+o+'`'+' modifier is required by '+r+' modifier in order to work, be sure to include it before '+r+'!')}return n}function K(e){return'end'===e?'start':'start'===e?'end':e}function q(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],o=ae.indexOf(e),i=ae.slice(o+1).concat(ae.slice(0,o));return t?i.reverse():i}function V(e,t,o,i){var n=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),r=+n[1],p=n[2];if(!r)return e;if(0===p.indexOf('%')){var s;switch(p){case'%p':s=o;break;case'%':case'%r':default:s=i;}var d=c(s);return d[t]/100*r}if('vh'===p||'vw'===p){var a;return a='vh'===p?J(document.documentElement.clientHeight,window.innerHeight||0):J(document.documentElement.clientWidth,window.innerWidth||0),a/100*r}return r}function z(e,t,o,i){var n=[0,0],r=-1!==['right','left'].indexOf(i),p=e.split(/(\+|\-)/).map(function(e){return e.trim()}),s=p.indexOf(T(p,function(e){return-1!==e.search(/,|\s/)}));p[s]&&-1===p[s].indexOf(',')&&console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');var d=/\s*,\s*|\s+/,a=-1===s?[p]:[p.slice(0,s).concat([p[s].split(d)[0]]),[p[s].split(d)[1]].concat(p.slice(s+1))];return a=a.map(function(e,i){var n=(1===i?!r:r)?'height':'width',p=!1;return e.reduce(function(e,t){return''===e[e.length-1]&&-1!==['+','-'].indexOf(t)?(e[e.length-1]=t,p=!0,e):p?(e[e.length-1]+=t,p=!1,e):e.concat(t)},[]).map(function(e){return V(e,n,t,o)})}),a.forEach(function(e,t){e.forEach(function(o,i){U(o)&&(n[t]+=o*('-'===e[i-1]?-1:1))})}),n}function G(e,t){var o,i=t.offset,n=e.placement,r=e.offsets,p=r.popper,s=r.reference,d=n.split('-')[0];return o=U(+i)?[+i,0]:z(i,p,s,d),'left'===d?(p.top+=o[0],p.left-=o[1]):'right'===d?(p.top+=o[0],p.left+=o[1]):'top'===d?(p.left+=o[0],p.top-=o[1]):'bottom'===d&&(p.left+=o[0],p.top+=o[1]),e.popper=p,e}for(var _=Math.min,X=Math.floor,J=Math.max,Q='undefined'!=typeof window&&'undefined'!=typeof document,Z=['Edge','Trident','Firefox'],$=0,ee=0;ee<Z.length;ee+=1)if(Q&&0<=navigator.userAgent.indexOf(Z[ee])){$=1;break}var i,te=Q&&window.Promise,oe=te?function(e){var t=!1;return function(){t||(t=!0,window.Promise.resolve().then(function(){t=!1,e()}))}}:function(e){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,e()},$))}},ie=function(){return void 0==i&&(i=-1!==navigator.appVersion.indexOf('MSIE 10')),i},ne=function(e,t){if(!(e instanceof t))throw new TypeError('Cannot call a class as a function')},re=function(){function e(e,t){for(var o,n=0;n<t.length;n++)o=t[n],o.enumerable=o.enumerable||!1,o.configurable=!0,'value'in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}return function(t,o,i){return o&&e(t.prototype,o),i&&e(t,i),t}}(),pe=function(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e},se=Object.assign||function(e){for(var t,o=1;o<arguments.length;o++)for(var i in t=arguments[o],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},de=['auto-start','auto','auto-end','top-start','top','top-end','right-start','right','right-end','bottom-end','bottom','bottom-start','left-end','left','left-start'],ae=de.slice(3),le={FLIP:'flip',CLOCKWISE:'clockwise',COUNTERCLOCKWISE:'counterclockwise'},fe=function(){function t(o,i){var n=this,r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};ne(this,t),this.scheduleUpdate=function(){return requestAnimationFrame(n.update)},this.update=oe(this.update.bind(this)),this.options=se({},t.Defaults,r),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=o&&o.jquery?o[0]:o,this.popper=i&&i.jquery?i[0]:i,this.options.modifiers={},Object.keys(se({},t.Defaults.modifiers,r.modifiers)).forEach(function(e){n.options.modifiers[e]=se({},t.Defaults.modifiers[e]||{},r.modifiers?r.modifiers[e]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(e){return se({name:e},n.options.modifiers[e])}).sort(function(e,t){return e.order-t.order}),this.modifiers.forEach(function(t){t.enabled&&e(t.onLoad)&&t.onLoad(n.reference,n.popper,n.options,t,n.state)}),this.update();var p=this.options.eventsEnabled;p&&this.enableEventListeners(),this.state.eventsEnabled=p}return re(t,[{key:'update',value:function(){return N.call(this)}},{key:'destroy',value:function(){return P.call(this)}},{key:'enableEventListeners',value:function(){return I.call(this)}},{key:'disableEventListeners',value:function(){return R.call(this)}}]),t}();return fe.Utils=('undefined'==typeof window?global:window).PopperUtils,fe.placements=de,fe.Defaults={placement:'bottom',eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(e){var t=e.placement,o=t.split('-')[0],i=t.split('-')[1];if(i){var n=e.offsets,r=n.reference,p=n.popper,s=-1!==['bottom','top'].indexOf(o),d=s?'left':'top',a=s?'width':'height',l={start:pe({},d,r[d]),end:pe({},d,r[d]+r[a]-p[a])};e.offsets.popper=se({},p,l[i])}return e}},offset:{order:200,enabled:!0,fn:G,offset:0},preventOverflow:{order:300,enabled:!0,fn:function(e,t){var o=t.boundariesElement||r(e.instance.popper);e.instance.reference===o&&(o=r(o));var i=y(e.instance.popper,e.instance.reference,t.padding,o);t.boundaries=i;var n=t.priority,p=e.offsets.popper,s={primary:function(e){var o=p[e];return p[e]<i[e]&&!t.escapeWithReference&&(o=J(p[e],i[e])),pe({},e,o)},secondary:function(e){var o='right'===e?'left':'top',n=p[o];return p[e]>i[e]&&!t.escapeWithReference&&(n=_(p[o],i[e]-('right'===e?p.width:p.height))),pe({},o,n)}};return n.forEach(function(e){var t=-1===['left','top'].indexOf(e)?'secondary':'primary';p=se({},p,s[t](e))}),e.offsets.popper=p,e},priority:['left','right','top','bottom'],padding:5,boundariesElement:'scrollParent'},keepTogether:{order:400,enabled:!0,fn:function(e){var t=e.offsets,o=t.popper,i=t.reference,n=e.placement.split('-')[0],r=X,p=-1!==['top','bottom'].indexOf(n),s=p?'right':'bottom',d=p?'left':'top',a=p?'width':'height';return o[s]<r(i[d])&&(e.offsets.popper[d]=r(i[d])-o[a]),o[d]>r(i[s])&&(e.offsets.popper[d]=r(i[s])),e}},arrow:{order:500,enabled:!0,fn:function(e,o){var i;if(!F(e.instance.modifiers,'arrow','keepTogether'))return e;var n=o.element;if('string'==typeof n){if(n=e.instance.popper.querySelector(n),!n)return e;}else if(!e.instance.popper.contains(n))return console.warn('WARNING: `arrow.element` must be child of its popper element!'),e;var r=e.placement.split('-')[0],p=e.offsets,s=p.popper,d=p.reference,a=-1!==['left','right'].indexOf(r),l=a?'height':'width',f=a?'Top':'Left',m=f.toLowerCase(),h=a?'left':'top',g=a?'bottom':'right',u=L(n)[l];d[g]-u<s[m]&&(e.offsets.popper[m]-=s[m]-(d[g]-u)),d[m]+u>s[g]&&(e.offsets.popper[m]+=d[m]+u-s[g]),e.offsets.popper=c(e.offsets.popper);var b=d[m]+d[l]/2-u/2,w=t(e.instance.popper),y=parseFloat(w['margin'+f],10),E=parseFloat(w['border'+f+'Width'],10),v=b-e.offsets.popper[m]-y-E;return v=J(_(s[l]-u,v),0),e.arrowElement=n,e.offsets.arrow=(i={},pe(i,m,Math.round(v)),pe(i,h,''),i),e},element:'[x-arrow]'},flip:{order:600,enabled:!0,fn:function(e,t){if(k(e.instance.modifiers,'inner'))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var o=y(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement),i=e.placement.split('-')[0],n=x(i),r=e.placement.split('-')[1]||'',p=[];switch(t.behavior){case le.FLIP:p=[i,n];break;case le.CLOCKWISE:p=q(i);break;case le.COUNTERCLOCKWISE:p=q(i,!0);break;default:p=t.behavior;}return p.forEach(function(s,d){if(i!==s||p.length===d+1)return e;i=e.placement.split('-')[0],n=x(i);var a=e.offsets.popper,l=e.offsets.reference,f=X,m='left'===i&&f(a.right)>f(l.left)||'right'===i&&f(a.left)<f(l.right)||'top'===i&&f(a.bottom)>f(l.top)||'bottom'===i&&f(a.top)<f(l.bottom),h=f(a.left)<f(o.left),c=f(a.right)>f(o.right),g=f(a.top)<f(o.top),u=f(a.bottom)>f(o.bottom),b='left'===i&&h||'right'===i&&c||'top'===i&&g||'bottom'===i&&u,w=-1!==['top','bottom'].indexOf(i),y=!!t.flipVariations&&(w&&'start'===r&&h||w&&'end'===r&&c||!w&&'start'===r&&g||!w&&'end'===r&&u);(m||b||y)&&(e.flipped=!0,(m||b)&&(i=p[d+1]),y&&(r=K(r)),e.placement=i+(r?'-'+r:''),e.offsets.popper=se({},e.offsets.popper,S(e.instance.popper,e.offsets.reference,e.placement)),e=C(e.instance.modifiers,e,'flip'))}),e},behavior:'flip',padding:5,boundariesElement:'viewport'},inner:{order:700,enabled:!1,fn:function(e){var t=e.placement,o=t.split('-')[0],i=e.offsets,n=i.popper,r=i.reference,p=-1!==['left','right'].indexOf(o),s=-1===['top','left'].indexOf(o);return n[p?'left':'top']=r[o]-(s?n[p?'width':'height']:0),e.placement=x(t),e.offsets.popper=c(n),e}},hide:{order:800,enabled:!0,fn:function(e){if(!F(e.instance.modifiers,'hide','preventOverflow'))return e;var t=e.offsets.reference,o=T(e.instance.modifiers,function(e){return'preventOverflow'===e.name}).boundaries;if(t.bottom<o.top||t.left>o.right||t.top>o.bottom||t.right<o.left){if(!0===e.hide)return e;e.hide=!0,e.attributes['x-out-of-boundaries']=''}else{if(!1===e.hide)return e;e.hide=!1,e.attributes['x-out-of-boundaries']=!1}return e}},computeStyle:{order:850,enabled:!0,fn:function(e,t){var o=t.x,i=t.y,n=e.offsets.popper,p=T(e.instance.modifiers,function(e){return'applyStyle'===e.name}).gpuAcceleration;void 0!==p&&console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');var s,d,a=void 0===p?t.gpuAcceleration:p,l=r(e.instance.popper),f=g(l),m={position:n.position},h={left:X(n.left),top:X(n.top),bottom:X(n.bottom),right:X(n.right)},c='bottom'===o?'top':'bottom',u='right'===i?'left':'right',b=W('transform');if(d='bottom'==c?-f.height+h.bottom:h.top,s='right'==u?-f.width+h.right:h.left,a&&b)m[b]='translate3d('+s+'px, '+d+'px, 0)',m[c]=0,m[u]=0,m.willChange='transform';else{var w='bottom'==c?-1:1,y='right'==u?-1:1;m[c]=d*w,m[u]=s*y,m.willChange=c+', '+u}var E={"x-placement":e.placement};return e.attributes=se({},E,e.attributes),e.styles=se({},m,e.styles),e.arrowStyles=se({},e.offsets.arrow,e.arrowStyles),e},gpuAcceleration:!0,x:'bottom',y:'right'},applyStyle:{order:900,enabled:!0,fn:function(e){return Y(e.instance.popper,e.styles),j(e.instance.popper,e.attributes),e.arrowElement&&Object.keys(e.arrowStyles).length&&Y(e.arrowElement,e.arrowStyles),e},onLoad:function(e,t,o,i,n){var r=O(n,t,e),p=v(o.placement,r,t,e,o.modifiers.flip.boundariesElement,o.modifiers.flip.padding);return t.setAttribute('x-placement',p),Y(t,{position:'absolute'}),o},gpuAcceleration:void 0}}},fe});
//# sourceMappingURL=popper.min.js.map


// Filename: ./node_modules/bootstrap/dist/js/bootstrap.min.js
/*!
  * Bootstrap v4.0.0 (https://getbootstrap.com)
  * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("jquery"),require("popper.js")):"function"==typeof define&&define.amd?define(["exports","jquery","popper.js"],e):e(t.bootstrap={},t.jQuery,t.Popper)}(this,function(t,e,n){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}e=e&&e.hasOwnProperty("default")?e.default:e,n=n&&n.hasOwnProperty("default")?n.default:n;var o,a,l,h,c,u,f,d,_,g,p,m,v,E,T,y,C,I,A,b,D,S,w,N,O,k,P=function(t){var e=!1;function n(e){var n=this,s=!1;return t(this).one(i.TRANSITION_END,function(){s=!0}),setTimeout(function(){s||i.triggerTransitionEnd(n)},e),this}var i={TRANSITION_END:"bsTransitionEnd",getUID:function(t){do{t+=~~(1e6*Math.random())}while(document.getElementById(t));return t},getSelectorFromElement:function(e){var n,i=e.getAttribute("data-target");i&&"#"!==i||(i=e.getAttribute("href")||""),"#"===i.charAt(0)&&(n=i,i=n="function"==typeof t.escapeSelector?t.escapeSelector(n).substr(1):n.replace(/(:|\.|\[|\]|,|=|@)/g,"\\$1"));try{return t(document).find(i).length>0?i:null}catch(t){return null}},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(n){t(n).trigger(e.end)},supportsTransitionEnd:function(){return Boolean(e)},isElement:function(t){return(t[0]||t).nodeType},typeCheckConfig:function(t,e,n){for(var s in n)if(Object.prototype.hasOwnProperty.call(n,s)){var r=n[s],o=e[s],a=o&&i.isElement(o)?"element":(l=o,{}.toString.call(l).match(/\s([a-zA-Z]+)/)[1].toLowerCase());if(!new RegExp(r).test(a))throw new Error(t.toUpperCase()+': Option "'+s+'" provided type "'+a+'" but expected type "'+r+'".')}var l}};return e=("undefined"==typeof window||!window.QUnit)&&{end:"transitionend"},t.fn.emulateTransitionEnd=n,i.supportsTransitionEnd()&&(t.event.special[i.TRANSITION_END]={bindType:e.end,delegateType:e.end,handle:function(e){if(t(e.target).is(this))return e.handleObj.handler.apply(this,arguments)}}),i}(e),L=(a="alert",h="."+(l="bs.alert"),c=(o=e).fn[a],u={CLOSE:"close"+h,CLOSED:"closed"+h,CLICK_DATA_API:"click"+h+".data-api"},f="alert",d="fade",_="show",g=function(){function t(t){this._element=t}var e=t.prototype;return e.close=function(t){t=t||this._element;var e=this._getRootElement(t);this._triggerCloseEvent(e).isDefaultPrevented()||this._removeElement(e)},e.dispose=function(){o.removeData(this._element,l),this._element=null},e._getRootElement=function(t){var e=P.getSelectorFromElement(t),n=!1;return e&&(n=o(e)[0]),n||(n=o(t).closest("."+f)[0]),n},e._triggerCloseEvent=function(t){var e=o.Event(u.CLOSE);return o(t).trigger(e),e},e._removeElement=function(t){var e=this;o(t).removeClass(_),P.supportsTransitionEnd()&&o(t).hasClass(d)?o(t).one(P.TRANSITION_END,function(n){return e._destroyElement(t,n)}).emulateTransitionEnd(150):this._destroyElement(t)},e._destroyElement=function(t){o(t).detach().trigger(u.CLOSED).remove()},t._jQueryInterface=function(e){return this.each(function(){var n=o(this),i=n.data(l);i||(i=new t(this),n.data(l,i)),"close"===e&&i[e](this)})},t._handleDismiss=function(t){return function(e){e&&e.preventDefault(),t.close(this)}},s(t,null,[{key:"VERSION",get:function(){return"4.0.0"}}]),t}(),o(document).on(u.CLICK_DATA_API,'[data-dismiss="alert"]',g._handleDismiss(new g)),o.fn[a]=g._jQueryInterface,o.fn[a].Constructor=g,o.fn[a].noConflict=function(){return o.fn[a]=c,g._jQueryInterface},g),R=(m="button",E="."+(v="bs.button"),T=".data-api",y=(p=e).fn[m],C="active",I="btn",A="focus",b='[data-toggle^="button"]',D='[data-toggle="buttons"]',S="input",w=".active",N=".btn",O={CLICK_DATA_API:"click"+E+T,FOCUS_BLUR_DATA_API:"focus"+E+T+" blur"+E+T},k=function(){function t(t){this._element=t}var e=t.prototype;return e.toggle=function(){var t=!0,e=!0,n=p(this._element).closest(D)[0];if(n){var i=p(this._element).find(S)[0];if(i){if("radio"===i.type)if(i.checked&&p(this._element).hasClass(C))t=!1;else{var s=p(n).find(w)[0];s&&p(s).removeClass(C)}if(t){if(i.hasAttribute("disabled")||n.hasAttribute("disabled")||i.classList.contains("disabled")||n.classList.contains("disabled"))return;i.checked=!p(this._element).hasClass(C),p(i).trigger("change")}i.focus(),e=!1}}e&&this._element.setAttribute("aria-pressed",!p(this._element).hasClass(C)),t&&p(this._element).toggleClass(C)},e.dispose=function(){p.removeData(this._element,v),this._element=null},t._jQueryInterface=function(e){return this.each(function(){var n=p(this).data(v);n||(n=new t(this),p(this).data(v,n)),"toggle"===e&&n[e]()})},s(t,null,[{key:"VERSION",get:function(){return"4.0.0"}}]),t}(),p(document).on(O.CLICK_DATA_API,b,function(t){t.preventDefault();var e=t.target;p(e).hasClass(I)||(e=p(e).closest(N)),k._jQueryInterface.call(p(e),"toggle")}).on(O.FOCUS_BLUR_DATA_API,b,function(t){var e=p(t.target).closest(N)[0];p(e).toggleClass(A,/^focus(in)?$/.test(t.type))}),p.fn[m]=k._jQueryInterface,p.fn[m].Constructor=k,p.fn[m].noConflict=function(){return p.fn[m]=y,k._jQueryInterface},k),j=function(t){var e="carousel",n="bs.carousel",i="."+n,o=t.fn[e],a={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0},l={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean"},h="next",c="prev",u="left",f="right",d={SLIDE:"slide"+i,SLID:"slid"+i,KEYDOWN:"keydown"+i,MOUSEENTER:"mouseenter"+i,MOUSELEAVE:"mouseleave"+i,TOUCHEND:"touchend"+i,LOAD_DATA_API:"load"+i+".data-api",CLICK_DATA_API:"click"+i+".data-api"},_="carousel",g="active",p="slide",m="carousel-item-right",v="carousel-item-left",E="carousel-item-next",T="carousel-item-prev",y={ACTIVE:".active",ACTIVE_ITEM:".active.carousel-item",ITEM:".carousel-item",NEXT_PREV:".carousel-item-next, .carousel-item-prev",INDICATORS:".carousel-indicators",DATA_SLIDE:"[data-slide], [data-slide-to]",DATA_RIDE:'[data-ride="carousel"]'},C=function(){function o(e,n){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this._config=this._getConfig(n),this._element=t(e)[0],this._indicatorsElement=t(this._element).find(y.INDICATORS)[0],this._addEventListeners()}var C=o.prototype;return C.next=function(){this._isSliding||this._slide(h)},C.nextWhenVisible=function(){!document.hidden&&t(this._element).is(":visible")&&"hidden"!==t(this._element).css("visibility")&&this.next()},C.prev=function(){this._isSliding||this._slide(c)},C.pause=function(e){e||(this._isPaused=!0),t(this._element).find(y.NEXT_PREV)[0]&&P.supportsTransitionEnd()&&(P.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},C.cycle=function(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},C.to=function(e){var n=this;this._activeElement=t(this._element).find(y.ACTIVE_ITEM)[0];var i=this._getItemIndex(this._activeElement);if(!(e>this._items.length-1||e<0))if(this._isSliding)t(this._element).one(d.SLID,function(){return n.to(e)});else{if(i===e)return this.pause(),void this.cycle();var s=e>i?h:c;this._slide(s,this._items[e])}},C.dispose=function(){t(this._element).off(i),t.removeData(this._element,n),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},C._getConfig=function(t){return t=r({},a,t),P.typeCheckConfig(e,t,l),t},C._addEventListeners=function(){var e=this;this._config.keyboard&&t(this._element).on(d.KEYDOWN,function(t){return e._keydown(t)}),"hover"===this._config.pause&&(t(this._element).on(d.MOUSEENTER,function(t){return e.pause(t)}).on(d.MOUSELEAVE,function(t){return e.cycle(t)}),"ontouchstart"in document.documentElement&&t(this._element).on(d.TOUCHEND,function(){e.pause(),e.touchTimeout&&clearTimeout(e.touchTimeout),e.touchTimeout=setTimeout(function(t){return e.cycle(t)},500+e._config.interval)}))},C._keydown=function(t){if(!/input|textarea/i.test(t.target.tagName))switch(t.which){case 37:t.preventDefault(),this.prev();break;case 39:t.preventDefault(),this.next()}},C._getItemIndex=function(e){return this._items=t.makeArray(t(e).parent().find(y.ITEM)),this._items.indexOf(e)},C._getItemByDirection=function(t,e){var n=t===h,i=t===c,s=this._getItemIndex(e),r=this._items.length-1;if((i&&0===s||n&&s===r)&&!this._config.wrap)return e;var o=(s+(t===c?-1:1))%this._items.length;return-1===o?this._items[this._items.length-1]:this._items[o]},C._triggerSlideEvent=function(e,n){var i=this._getItemIndex(e),s=this._getItemIndex(t(this._element).find(y.ACTIVE_ITEM)[0]),r=t.Event(d.SLIDE,{relatedTarget:e,direction:n,from:s,to:i});return t(this._element).trigger(r),r},C._setActiveIndicatorElement=function(e){if(this._indicatorsElement){t(this._indicatorsElement).find(y.ACTIVE).removeClass(g);var n=this._indicatorsElement.children[this._getItemIndex(e)];n&&t(n).addClass(g)}},C._slide=function(e,n){var i,s,r,o=this,a=t(this._element).find(y.ACTIVE_ITEM)[0],l=this._getItemIndex(a),c=n||a&&this._getItemByDirection(e,a),_=this._getItemIndex(c),C=Boolean(this._interval);if(e===h?(i=v,s=E,r=u):(i=m,s=T,r=f),c&&t(c).hasClass(g))this._isSliding=!1;else if(!this._triggerSlideEvent(c,r).isDefaultPrevented()&&a&&c){this._isSliding=!0,C&&this.pause(),this._setActiveIndicatorElement(c);var I=t.Event(d.SLID,{relatedTarget:c,direction:r,from:l,to:_});P.supportsTransitionEnd()&&t(this._element).hasClass(p)?(t(c).addClass(s),P.reflow(c),t(a).addClass(i),t(c).addClass(i),t(a).one(P.TRANSITION_END,function(){t(c).removeClass(i+" "+s).addClass(g),t(a).removeClass(g+" "+s+" "+i),o._isSliding=!1,setTimeout(function(){return t(o._element).trigger(I)},0)}).emulateTransitionEnd(600)):(t(a).removeClass(g),t(c).addClass(g),this._isSliding=!1,t(this._element).trigger(I)),C&&this.cycle()}},o._jQueryInterface=function(e){return this.each(function(){var i=t(this).data(n),s=r({},a,t(this).data());"object"==typeof e&&(s=r({},s,e));var l="string"==typeof e?e:s.slide;if(i||(i=new o(this,s),t(this).data(n,i)),"number"==typeof e)i.to(e);else if("string"==typeof l){if("undefined"==typeof i[l])throw new TypeError('No method named "'+l+'"');i[l]()}else s.interval&&(i.pause(),i.cycle())})},o._dataApiClickHandler=function(e){var i=P.getSelectorFromElement(this);if(i){var s=t(i)[0];if(s&&t(s).hasClass(_)){var a=r({},t(s).data(),t(this).data()),l=this.getAttribute("data-slide-to");l&&(a.interval=!1),o._jQueryInterface.call(t(s),a),l&&t(s).data(n).to(l),e.preventDefault()}}},s(o,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return a}}]),o}();return t(document).on(d.CLICK_DATA_API,y.DATA_SLIDE,C._dataApiClickHandler),t(window).on(d.LOAD_DATA_API,function(){t(y.DATA_RIDE).each(function(){var e=t(this);C._jQueryInterface.call(e,e.data())})}),t.fn[e]=C._jQueryInterface,t.fn[e].Constructor=C,t.fn[e].noConflict=function(){return t.fn[e]=o,C._jQueryInterface},C}(e),H=function(t){var e="collapse",n="bs.collapse",i="."+n,o=t.fn[e],a={toggle:!0,parent:""},l={toggle:"boolean",parent:"(string|element)"},h={SHOW:"show"+i,SHOWN:"shown"+i,HIDE:"hide"+i,HIDDEN:"hidden"+i,CLICK_DATA_API:"click"+i+".data-api"},c="show",u="collapse",f="collapsing",d="collapsed",_="width",g="height",p={ACTIVES:".show, .collapsing",DATA_TOGGLE:'[data-toggle="collapse"]'},m=function(){function i(e,n){this._isTransitioning=!1,this._element=e,this._config=this._getConfig(n),this._triggerArray=t.makeArray(t('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'));for(var i=t(p.DATA_TOGGLE),s=0;s<i.length;s++){var r=i[s],o=P.getSelectorFromElement(r);null!==o&&t(o).filter(e).length>0&&(this._selector=o,this._triggerArray.push(r))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var o=i.prototype;return o.toggle=function(){t(this._element).hasClass(c)?this.hide():this.show()},o.show=function(){var e,s,r=this;if(!this._isTransitioning&&!t(this._element).hasClass(c)&&(this._parent&&0===(e=t.makeArray(t(this._parent).find(p.ACTIVES).filter('[data-parent="'+this._config.parent+'"]'))).length&&(e=null),!(e&&(s=t(e).not(this._selector).data(n))&&s._isTransitioning))){var o=t.Event(h.SHOW);if(t(this._element).trigger(o),!o.isDefaultPrevented()){e&&(i._jQueryInterface.call(t(e).not(this._selector),"hide"),s||t(e).data(n,null));var a=this._getDimension();t(this._element).removeClass(u).addClass(f),this._element.style[a]=0,this._triggerArray.length>0&&t(this._triggerArray).removeClass(d).attr("aria-expanded",!0),this.setTransitioning(!0);var l=function(){t(r._element).removeClass(f).addClass(u).addClass(c),r._element.style[a]="",r.setTransitioning(!1),t(r._element).trigger(h.SHOWN)};if(P.supportsTransitionEnd()){var _="scroll"+(a[0].toUpperCase()+a.slice(1));t(this._element).one(P.TRANSITION_END,l).emulateTransitionEnd(600),this._element.style[a]=this._element[_]+"px"}else l()}}},o.hide=function(){var e=this;if(!this._isTransitioning&&t(this._element).hasClass(c)){var n=t.Event(h.HIDE);if(t(this._element).trigger(n),!n.isDefaultPrevented()){var i=this._getDimension();if(this._element.style[i]=this._element.getBoundingClientRect()[i]+"px",P.reflow(this._element),t(this._element).addClass(f).removeClass(u).removeClass(c),this._triggerArray.length>0)for(var s=0;s<this._triggerArray.length;s++){var r=this._triggerArray[s],o=P.getSelectorFromElement(r);if(null!==o)t(o).hasClass(c)||t(r).addClass(d).attr("aria-expanded",!1)}this.setTransitioning(!0);var a=function(){e.setTransitioning(!1),t(e._element).removeClass(f).addClass(u).trigger(h.HIDDEN)};this._element.style[i]="",P.supportsTransitionEnd()?t(this._element).one(P.TRANSITION_END,a).emulateTransitionEnd(600):a()}}},o.setTransitioning=function(t){this._isTransitioning=t},o.dispose=function(){t.removeData(this._element,n),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},o._getConfig=function(t){return(t=r({},a,t)).toggle=Boolean(t.toggle),P.typeCheckConfig(e,t,l),t},o._getDimension=function(){return t(this._element).hasClass(_)?_:g},o._getParent=function(){var e=this,n=null;P.isElement(this._config.parent)?(n=this._config.parent,"undefined"!=typeof this._config.parent.jquery&&(n=this._config.parent[0])):n=t(this._config.parent)[0];var s='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]';return t(n).find(s).each(function(t,n){e._addAriaAndCollapsedClass(i._getTargetFromElement(n),[n])}),n},o._addAriaAndCollapsedClass=function(e,n){if(e){var i=t(e).hasClass(c);n.length>0&&t(n).toggleClass(d,!i).attr("aria-expanded",i)}},i._getTargetFromElement=function(e){var n=P.getSelectorFromElement(e);return n?t(n)[0]:null},i._jQueryInterface=function(e){return this.each(function(){var s=t(this),o=s.data(n),l=r({},a,s.data(),"object"==typeof e&&e);if(!o&&l.toggle&&/show|hide/.test(e)&&(l.toggle=!1),o||(o=new i(this,l),s.data(n,o)),"string"==typeof e){if("undefined"==typeof o[e])throw new TypeError('No method named "'+e+'"');o[e]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return a}}]),i}();return t(document).on(h.CLICK_DATA_API,p.DATA_TOGGLE,function(e){"A"===e.currentTarget.tagName&&e.preventDefault();var i=t(this),s=P.getSelectorFromElement(this);t(s).each(function(){var e=t(this),s=e.data(n)?"toggle":i.data();m._jQueryInterface.call(e,s)})}),t.fn[e]=m._jQueryInterface,t.fn[e].Constructor=m,t.fn[e].noConflict=function(){return t.fn[e]=o,m._jQueryInterface},m}(e),W=function(t){var e="dropdown",i="bs.dropdown",o="."+i,a=".data-api",l=t.fn[e],h=new RegExp("38|40|27"),c={HIDE:"hide"+o,HIDDEN:"hidden"+o,SHOW:"show"+o,SHOWN:"shown"+o,CLICK:"click"+o,CLICK_DATA_API:"click"+o+a,KEYDOWN_DATA_API:"keydown"+o+a,KEYUP_DATA_API:"keyup"+o+a},u="disabled",f="show",d="dropup",_="dropright",g="dropleft",p="dropdown-menu-right",m="dropdown-menu-left",v="position-static",E='[data-toggle="dropdown"]',T=".dropdown form",y=".dropdown-menu",C=".navbar-nav",I=".dropdown-menu .dropdown-item:not(.disabled)",A="top-start",b="top-end",D="bottom-start",S="bottom-end",w="right-start",N="left-start",O={offset:0,flip:!0,boundary:"scrollParent"},k={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)"},L=function(){function a(t,e){this._element=t,this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var l=a.prototype;return l.toggle=function(){if(!this._element.disabled&&!t(this._element).hasClass(u)){var e=a._getParentFromElement(this._element),i=t(this._menu).hasClass(f);if(a._clearMenus(),!i){var s={relatedTarget:this._element},r=t.Event(c.SHOW,s);if(t(e).trigger(r),!r.isDefaultPrevented()){if(!this._inNavbar){if("undefined"==typeof n)throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");var o=this._element;t(e).hasClass(d)&&(t(this._menu).hasClass(m)||t(this._menu).hasClass(p))&&(o=e),"scrollParent"!==this._config.boundary&&t(e).addClass(v),this._popper=new n(o,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===t(e).closest(C).length&&t("body").children().on("mouseover",null,t.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),t(this._menu).toggleClass(f),t(e).toggleClass(f).trigger(t.Event(c.SHOWN,s))}}}},l.dispose=function(){t.removeData(this._element,i),t(this._element).off(o),this._element=null,this._menu=null,null!==this._popper&&(this._popper.destroy(),this._popper=null)},l.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},l._addEventListeners=function(){var e=this;t(this._element).on(c.CLICK,function(t){t.preventDefault(),t.stopPropagation(),e.toggle()})},l._getConfig=function(n){return n=r({},this.constructor.Default,t(this._element).data(),n),P.typeCheckConfig(e,n,this.constructor.DefaultType),n},l._getMenuElement=function(){if(!this._menu){var e=a._getParentFromElement(this._element);this._menu=t(e).find(y)[0]}return this._menu},l._getPlacement=function(){var e=t(this._element).parent(),n=D;return e.hasClass(d)?(n=A,t(this._menu).hasClass(p)&&(n=b)):e.hasClass(_)?n=w:e.hasClass(g)?n=N:t(this._menu).hasClass(p)&&(n=S),n},l._detectNavbar=function(){return t(this._element).closest(".navbar").length>0},l._getPopperConfig=function(){var t=this,e={};return"function"==typeof this._config.offset?e.fn=function(e){return e.offsets=r({},e.offsets,t._config.offset(e.offsets)||{}),e}:e.offset=this._config.offset,{placement:this._getPlacement(),modifiers:{offset:e,flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}}},a._jQueryInterface=function(e){return this.each(function(){var n=t(this).data(i);if(n||(n=new a(this,"object"==typeof e?e:null),t(this).data(i,n)),"string"==typeof e){if("undefined"==typeof n[e])throw new TypeError('No method named "'+e+'"');n[e]()}})},a._clearMenus=function(e){if(!e||3!==e.which&&("keyup"!==e.type||9===e.which))for(var n=t.makeArray(t(E)),s=0;s<n.length;s++){var r=a._getParentFromElement(n[s]),o=t(n[s]).data(i),l={relatedTarget:n[s]};if(o){var h=o._menu;if(t(r).hasClass(f)&&!(e&&("click"===e.type&&/input|textarea/i.test(e.target.tagName)||"keyup"===e.type&&9===e.which)&&t.contains(r,e.target))){var u=t.Event(c.HIDE,l);t(r).trigger(u),u.isDefaultPrevented()||("ontouchstart"in document.documentElement&&t("body").children().off("mouseover",null,t.noop),n[s].setAttribute("aria-expanded","false"),t(h).removeClass(f),t(r).removeClass(f).trigger(t.Event(c.HIDDEN,l)))}}}},a._getParentFromElement=function(e){var n,i=P.getSelectorFromElement(e);return i&&(n=t(i)[0]),n||e.parentNode},a._dataApiKeydownHandler=function(e){if((/input|textarea/i.test(e.target.tagName)?!(32===e.which||27!==e.which&&(40!==e.which&&38!==e.which||t(e.target).closest(y).length)):h.test(e.which))&&(e.preventDefault(),e.stopPropagation(),!this.disabled&&!t(this).hasClass(u))){var n=a._getParentFromElement(this),i=t(n).hasClass(f);if((i||27===e.which&&32===e.which)&&(!i||27!==e.which&&32!==e.which)){var s=t(n).find(I).get();if(0!==s.length){var r=s.indexOf(e.target);38===e.which&&r>0&&r--,40===e.which&&r<s.length-1&&r++,r<0&&(r=0),s[r].focus()}}else{if(27===e.which){var o=t(n).find(E)[0];t(o).trigger("focus")}t(this).trigger("click")}}},s(a,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return O}},{key:"DefaultType",get:function(){return k}}]),a}();return t(document).on(c.KEYDOWN_DATA_API,E,L._dataApiKeydownHandler).on(c.KEYDOWN_DATA_API,y,L._dataApiKeydownHandler).on(c.CLICK_DATA_API+" "+c.KEYUP_DATA_API,L._clearMenus).on(c.CLICK_DATA_API,E,function(e){e.preventDefault(),e.stopPropagation(),L._jQueryInterface.call(t(this),"toggle")}).on(c.CLICK_DATA_API,T,function(t){t.stopPropagation()}),t.fn[e]=L._jQueryInterface,t.fn[e].Constructor=L,t.fn[e].noConflict=function(){return t.fn[e]=l,L._jQueryInterface},L}(e),M=function(t){var e="modal",n="bs.modal",i="."+n,o=t.fn.modal,a={backdrop:!0,keyboard:!0,focus:!0,show:!0},l={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},h={HIDE:"hide"+i,HIDDEN:"hidden"+i,SHOW:"show"+i,SHOWN:"shown"+i,FOCUSIN:"focusin"+i,RESIZE:"resize"+i,CLICK_DISMISS:"click.dismiss"+i,KEYDOWN_DISMISS:"keydown.dismiss"+i,MOUSEUP_DISMISS:"mouseup.dismiss"+i,MOUSEDOWN_DISMISS:"mousedown.dismiss"+i,CLICK_DATA_API:"click"+i+".data-api"},c="modal-scrollbar-measure",u="modal-backdrop",f="modal-open",d="fade",_="show",g={DIALOG:".modal-dialog",DATA_TOGGLE:'[data-toggle="modal"]',DATA_DISMISS:'[data-dismiss="modal"]',FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"},p=function(){function o(e,n){this._config=this._getConfig(n),this._element=e,this._dialog=t(e).find(g.DIALOG)[0],this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._originalBodyPadding=0,this._scrollbarWidth=0}var p=o.prototype;return p.toggle=function(t){return this._isShown?this.hide():this.show(t)},p.show=function(e){var n=this;if(!this._isTransitioning&&!this._isShown){P.supportsTransitionEnd()&&t(this._element).hasClass(d)&&(this._isTransitioning=!0);var i=t.Event(h.SHOW,{relatedTarget:e});t(this._element).trigger(i),this._isShown||i.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),t(document.body).addClass(f),this._setEscapeEvent(),this._setResizeEvent(),t(this._element).on(h.CLICK_DISMISS,g.DATA_DISMISS,function(t){return n.hide(t)}),t(this._dialog).on(h.MOUSEDOWN_DISMISS,function(){t(n._element).one(h.MOUSEUP_DISMISS,function(e){t(e.target).is(n._element)&&(n._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return n._showElement(e)}))}},p.hide=function(e){var n=this;if(e&&e.preventDefault(),!this._isTransitioning&&this._isShown){var i=t.Event(h.HIDE);if(t(this._element).trigger(i),this._isShown&&!i.isDefaultPrevented()){this._isShown=!1;var s=P.supportsTransitionEnd()&&t(this._element).hasClass(d);s&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),t(document).off(h.FOCUSIN),t(this._element).removeClass(_),t(this._element).off(h.CLICK_DISMISS),t(this._dialog).off(h.MOUSEDOWN_DISMISS),s?t(this._element).one(P.TRANSITION_END,function(t){return n._hideModal(t)}).emulateTransitionEnd(300):this._hideModal()}}},p.dispose=function(){t.removeData(this._element,n),t(window,document,this._element,this._backdrop).off(i),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._scrollbarWidth=null},p.handleUpdate=function(){this._adjustDialog()},p._getConfig=function(t){return t=r({},a,t),P.typeCheckConfig(e,t,l),t},p._showElement=function(e){var n=this,i=P.supportsTransitionEnd()&&t(this._element).hasClass(d);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.scrollTop=0,i&&P.reflow(this._element),t(this._element).addClass(_),this._config.focus&&this._enforceFocus();var s=t.Event(h.SHOWN,{relatedTarget:e}),r=function(){n._config.focus&&n._element.focus(),n._isTransitioning=!1,t(n._element).trigger(s)};i?t(this._dialog).one(P.TRANSITION_END,r).emulateTransitionEnd(300):r()},p._enforceFocus=function(){var e=this;t(document).off(h.FOCUSIN).on(h.FOCUSIN,function(n){document!==n.target&&e._element!==n.target&&0===t(e._element).has(n.target).length&&e._element.focus()})},p._setEscapeEvent=function(){var e=this;this._isShown&&this._config.keyboard?t(this._element).on(h.KEYDOWN_DISMISS,function(t){27===t.which&&(t.preventDefault(),e.hide())}):this._isShown||t(this._element).off(h.KEYDOWN_DISMISS)},p._setResizeEvent=function(){var e=this;this._isShown?t(window).on(h.RESIZE,function(t){return e.handleUpdate(t)}):t(window).off(h.RESIZE)},p._hideModal=function(){var e=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._isTransitioning=!1,this._showBackdrop(function(){t(document.body).removeClass(f),e._resetAdjustments(),e._resetScrollbar(),t(e._element).trigger(h.HIDDEN)})},p._removeBackdrop=function(){this._backdrop&&(t(this._backdrop).remove(),this._backdrop=null)},p._showBackdrop=function(e){var n=this,i=t(this._element).hasClass(d)?d:"";if(this._isShown&&this._config.backdrop){var s=P.supportsTransitionEnd()&&i;if(this._backdrop=document.createElement("div"),this._backdrop.className=u,i&&t(this._backdrop).addClass(i),t(this._backdrop).appendTo(document.body),t(this._element).on(h.CLICK_DISMISS,function(t){n._ignoreBackdropClick?n._ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"===n._config.backdrop?n._element.focus():n.hide())}),s&&P.reflow(this._backdrop),t(this._backdrop).addClass(_),!e)return;if(!s)return void e();t(this._backdrop).one(P.TRANSITION_END,e).emulateTransitionEnd(150)}else if(!this._isShown&&this._backdrop){t(this._backdrop).removeClass(_);var r=function(){n._removeBackdrop(),e&&e()};P.supportsTransitionEnd()&&t(this._element).hasClass(d)?t(this._backdrop).one(P.TRANSITION_END,r).emulateTransitionEnd(150):r()}else e&&e()},p._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},p._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},p._checkScrollbar=function(){var t=document.body.getBoundingClientRect();this._isBodyOverflowing=t.left+t.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},p._setScrollbar=function(){var e=this;if(this._isBodyOverflowing){t(g.FIXED_CONTENT).each(function(n,i){var s=t(i)[0].style.paddingRight,r=t(i).css("padding-right");t(i).data("padding-right",s).css("padding-right",parseFloat(r)+e._scrollbarWidth+"px")}),t(g.STICKY_CONTENT).each(function(n,i){var s=t(i)[0].style.marginRight,r=t(i).css("margin-right");t(i).data("margin-right",s).css("margin-right",parseFloat(r)-e._scrollbarWidth+"px")}),t(g.NAVBAR_TOGGLER).each(function(n,i){var s=t(i)[0].style.marginRight,r=t(i).css("margin-right");t(i).data("margin-right",s).css("margin-right",parseFloat(r)+e._scrollbarWidth+"px")});var n=document.body.style.paddingRight,i=t("body").css("padding-right");t("body").data("padding-right",n).css("padding-right",parseFloat(i)+this._scrollbarWidth+"px")}},p._resetScrollbar=function(){t(g.FIXED_CONTENT).each(function(e,n){var i=t(n).data("padding-right");"undefined"!=typeof i&&t(n).css("padding-right",i).removeData("padding-right")}),t(g.STICKY_CONTENT+", "+g.NAVBAR_TOGGLER).each(function(e,n){var i=t(n).data("margin-right");"undefined"!=typeof i&&t(n).css("margin-right",i).removeData("margin-right")});var e=t("body").data("padding-right");"undefined"!=typeof e&&t("body").css("padding-right",e).removeData("padding-right")},p._getScrollbarWidth=function(){var t=document.createElement("div");t.className=c,document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},o._jQueryInterface=function(e,i){return this.each(function(){var s=t(this).data(n),a=r({},o.Default,t(this).data(),"object"==typeof e&&e);if(s||(s=new o(this,a),t(this).data(n,s)),"string"==typeof e){if("undefined"==typeof s[e])throw new TypeError('No method named "'+e+'"');s[e](i)}else a.show&&s.show(i)})},s(o,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return a}}]),o}();return t(document).on(h.CLICK_DATA_API,g.DATA_TOGGLE,function(e){var i,s=this,o=P.getSelectorFromElement(this);o&&(i=t(o)[0]);var a=t(i).data(n)?"toggle":r({},t(i).data(),t(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||e.preventDefault();var l=t(i).one(h.SHOW,function(e){e.isDefaultPrevented()||l.one(h.HIDDEN,function(){t(s).is(":visible")&&s.focus()})});p._jQueryInterface.call(t(i),a,this)}),t.fn.modal=p._jQueryInterface,t.fn.modal.Constructor=p,t.fn.modal.noConflict=function(){return t.fn.modal=o,p._jQueryInterface},p}(e),U=function(t){var e="tooltip",i="bs.tooltip",o="."+i,a=t.fn[e],l=new RegExp("(^|\\s)bs-tooltip\\S+","g"),h={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)"},c={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},u={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent"},f="show",d="out",_={HIDE:"hide"+o,HIDDEN:"hidden"+o,SHOW:"show"+o,SHOWN:"shown"+o,INSERTED:"inserted"+o,CLICK:"click"+o,FOCUSIN:"focusin"+o,FOCUSOUT:"focusout"+o,MOUSEENTER:"mouseenter"+o,MOUSELEAVE:"mouseleave"+o},g="fade",p="show",m=".tooltip-inner",v=".arrow",E="hover",T="focus",y="click",C="manual",I=function(){function a(t,e){if("undefined"==typeof n)throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}var I=a.prototype;return I.enable=function(){this._isEnabled=!0},I.disable=function(){this._isEnabled=!1},I.toggleEnabled=function(){this._isEnabled=!this._isEnabled},I.toggle=function(e){if(this._isEnabled)if(e){var n=this.constructor.DATA_KEY,i=t(e.currentTarget).data(n);i||(i=new this.constructor(e.currentTarget,this._getDelegateConfig()),t(e.currentTarget).data(n,i)),i._activeTrigger.click=!i._activeTrigger.click,i._isWithActiveTrigger()?i._enter(null,i):i._leave(null,i)}else{if(t(this.getTipElement()).hasClass(p))return void this._leave(null,this);this._enter(null,this)}},I.dispose=function(){clearTimeout(this._timeout),t.removeData(this.element,this.constructor.DATA_KEY),t(this.element).off(this.constructor.EVENT_KEY),t(this.element).closest(".modal").off("hide.bs.modal"),this.tip&&t(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,this._activeTrigger=null,null!==this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},I.show=function(){var e=this;if("none"===t(this.element).css("display"))throw new Error("Please use show on visible elements");var i=t.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){t(this.element).trigger(i);var s=t.contains(this.element.ownerDocument.documentElement,this.element);if(i.isDefaultPrevented()||!s)return;var r=this.getTipElement(),o=P.getUID(this.constructor.NAME);r.setAttribute("id",o),this.element.setAttribute("aria-describedby",o),this.setContent(),this.config.animation&&t(r).addClass(g);var l="function"==typeof this.config.placement?this.config.placement.call(this,r,this.element):this.config.placement,h=this._getAttachment(l);this.addAttachmentClass(h);var c=!1===this.config.container?document.body:t(this.config.container);t(r).data(this.constructor.DATA_KEY,this),t.contains(this.element.ownerDocument.documentElement,this.tip)||t(r).appendTo(c),t(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new n(this.element,r,{placement:h,modifiers:{offset:{offset:this.config.offset},flip:{behavior:this.config.fallbackPlacement},arrow:{element:v},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(t){t.originalPlacement!==t.placement&&e._handlePopperPlacementChange(t)},onUpdate:function(t){e._handlePopperPlacementChange(t)}}),t(r).addClass(p),"ontouchstart"in document.documentElement&&t("body").children().on("mouseover",null,t.noop);var u=function(){e.config.animation&&e._fixTransition();var n=e._hoverState;e._hoverState=null,t(e.element).trigger(e.constructor.Event.SHOWN),n===d&&e._leave(null,e)};P.supportsTransitionEnd()&&t(this.tip).hasClass(g)?t(this.tip).one(P.TRANSITION_END,u).emulateTransitionEnd(a._TRANSITION_DURATION):u()}},I.hide=function(e){var n=this,i=this.getTipElement(),s=t.Event(this.constructor.Event.HIDE),r=function(){n._hoverState!==f&&i.parentNode&&i.parentNode.removeChild(i),n._cleanTipClass(),n.element.removeAttribute("aria-describedby"),t(n.element).trigger(n.constructor.Event.HIDDEN),null!==n._popper&&n._popper.destroy(),e&&e()};t(this.element).trigger(s),s.isDefaultPrevented()||(t(i).removeClass(p),"ontouchstart"in document.documentElement&&t("body").children().off("mouseover",null,t.noop),this._activeTrigger[y]=!1,this._activeTrigger[T]=!1,this._activeTrigger[E]=!1,P.supportsTransitionEnd()&&t(this.tip).hasClass(g)?t(i).one(P.TRANSITION_END,r).emulateTransitionEnd(150):r(),this._hoverState="")},I.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},I.isWithContent=function(){return Boolean(this.getTitle())},I.addAttachmentClass=function(e){t(this.getTipElement()).addClass("bs-tooltip-"+e)},I.getTipElement=function(){return this.tip=this.tip||t(this.config.template)[0],this.tip},I.setContent=function(){var e=t(this.getTipElement());this.setElementContent(e.find(m),this.getTitle()),e.removeClass(g+" "+p)},I.setElementContent=function(e,n){var i=this.config.html;"object"==typeof n&&(n.nodeType||n.jquery)?i?t(n).parent().is(e)||e.empty().append(n):e.text(t(n).text()):e[i?"html":"text"](n)},I.getTitle=function(){var t=this.element.getAttribute("data-original-title");return t||(t="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),t},I._getAttachment=function(t){return c[t.toUpperCase()]},I._setListeners=function(){var e=this;this.config.trigger.split(" ").forEach(function(n){if("click"===n)t(e.element).on(e.constructor.Event.CLICK,e.config.selector,function(t){return e.toggle(t)});else if(n!==C){var i=n===E?e.constructor.Event.MOUSEENTER:e.constructor.Event.FOCUSIN,s=n===E?e.constructor.Event.MOUSELEAVE:e.constructor.Event.FOCUSOUT;t(e.element).on(i,e.config.selector,function(t){return e._enter(t)}).on(s,e.config.selector,function(t){return e._leave(t)})}t(e.element).closest(".modal").on("hide.bs.modal",function(){return e.hide()})}),this.config.selector?this.config=r({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},I._fixTitle=function(){var t=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==t)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},I._enter=function(e,n){var i=this.constructor.DATA_KEY;(n=n||t(e.currentTarget).data(i))||(n=new this.constructor(e.currentTarget,this._getDelegateConfig()),t(e.currentTarget).data(i,n)),e&&(n._activeTrigger["focusin"===e.type?T:E]=!0),t(n.getTipElement()).hasClass(p)||n._hoverState===f?n._hoverState=f:(clearTimeout(n._timeout),n._hoverState=f,n.config.delay&&n.config.delay.show?n._timeout=setTimeout(function(){n._hoverState===f&&n.show()},n.config.delay.show):n.show())},I._leave=function(e,n){var i=this.constructor.DATA_KEY;(n=n||t(e.currentTarget).data(i))||(n=new this.constructor(e.currentTarget,this._getDelegateConfig()),t(e.currentTarget).data(i,n)),e&&(n._activeTrigger["focusout"===e.type?T:E]=!1),n._isWithActiveTrigger()||(clearTimeout(n._timeout),n._hoverState=d,n.config.delay&&n.config.delay.hide?n._timeout=setTimeout(function(){n._hoverState===d&&n.hide()},n.config.delay.hide):n.hide())},I._isWithActiveTrigger=function(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1},I._getConfig=function(n){return"number"==typeof(n=r({},this.constructor.Default,t(this.element).data(),n)).delay&&(n.delay={show:n.delay,hide:n.delay}),"number"==typeof n.title&&(n.title=n.title.toString()),"number"==typeof n.content&&(n.content=n.content.toString()),P.typeCheckConfig(e,n,this.constructor.DefaultType),n},I._getDelegateConfig=function(){var t={};if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t},I._cleanTipClass=function(){var e=t(this.getTipElement()),n=e.attr("class").match(l);null!==n&&n.length>0&&e.removeClass(n.join(""))},I._handlePopperPlacementChange=function(t){this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(t.placement))},I._fixTransition=function(){var e=this.getTipElement(),n=this.config.animation;null===e.getAttribute("x-placement")&&(t(e).removeClass(g),this.config.animation=!1,this.hide(),this.show(),this.config.animation=n)},a._jQueryInterface=function(e){return this.each(function(){var n=t(this).data(i),s="object"==typeof e&&e;if((n||!/dispose|hide/.test(e))&&(n||(n=new a(this,s),t(this).data(i,n)),"string"==typeof e)){if("undefined"==typeof n[e])throw new TypeError('No method named "'+e+'"');n[e]()}})},s(a,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return u}},{key:"NAME",get:function(){return e}},{key:"DATA_KEY",get:function(){return i}},{key:"Event",get:function(){return _}},{key:"EVENT_KEY",get:function(){return o}},{key:"DefaultType",get:function(){return h}}]),a}();return t.fn[e]=I._jQueryInterface,t.fn[e].Constructor=I,t.fn[e].noConflict=function(){return t.fn[e]=a,I._jQueryInterface},I}(e),x=function(t){var e="popover",n="bs.popover",i="."+n,o=t.fn[e],a=new RegExp("(^|\\s)bs-popover\\S+","g"),l=r({},U.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),h=r({},U.DefaultType,{content:"(string|element|function)"}),c="fade",u="show",f=".popover-header",d=".popover-body",_={HIDE:"hide"+i,HIDDEN:"hidden"+i,SHOW:"show"+i,SHOWN:"shown"+i,INSERTED:"inserted"+i,CLICK:"click"+i,FOCUSIN:"focusin"+i,FOCUSOUT:"focusout"+i,MOUSEENTER:"mouseenter"+i,MOUSELEAVE:"mouseleave"+i},g=function(r){var o,g;function p(){return r.apply(this,arguments)||this}g=r,(o=p).prototype=Object.create(g.prototype),o.prototype.constructor=o,o.__proto__=g;var m=p.prototype;return m.isWithContent=function(){return this.getTitle()||this._getContent()},m.addAttachmentClass=function(e){t(this.getTipElement()).addClass("bs-popover-"+e)},m.getTipElement=function(){return this.tip=this.tip||t(this.config.template)[0],this.tip},m.setContent=function(){var e=t(this.getTipElement());this.setElementContent(e.find(f),this.getTitle());var n=this._getContent();"function"==typeof n&&(n=n.call(this.element)),this.setElementContent(e.find(d),n),e.removeClass(c+" "+u)},m._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},m._cleanTipClass=function(){var e=t(this.getTipElement()),n=e.attr("class").match(a);null!==n&&n.length>0&&e.removeClass(n.join(""))},p._jQueryInterface=function(e){return this.each(function(){var i=t(this).data(n),s="object"==typeof e?e:null;if((i||!/destroy|hide/.test(e))&&(i||(i=new p(this,s),t(this).data(n,i)),"string"==typeof e)){if("undefined"==typeof i[e])throw new TypeError('No method named "'+e+'"');i[e]()}})},s(p,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return l}},{key:"NAME",get:function(){return e}},{key:"DATA_KEY",get:function(){return n}},{key:"Event",get:function(){return _}},{key:"EVENT_KEY",get:function(){return i}},{key:"DefaultType",get:function(){return h}}]),p}(U);return t.fn[e]=g._jQueryInterface,t.fn[e].Constructor=g,t.fn[e].noConflict=function(){return t.fn[e]=o,g._jQueryInterface},g}(e),K=function(t){var e="scrollspy",n="bs.scrollspy",i="."+n,o=t.fn[e],a={offset:10,method:"auto",target:""},l={offset:"number",method:"string",target:"(string|element)"},h={ACTIVATE:"activate"+i,SCROLL:"scroll"+i,LOAD_DATA_API:"load"+i+".data-api"},c="dropdown-item",u="active",f={DATA_SPY:'[data-spy="scroll"]',ACTIVE:".active",NAV_LIST_GROUP:".nav, .list-group",NAV_LINKS:".nav-link",NAV_ITEMS:".nav-item",LIST_ITEMS:".list-group-item",DROPDOWN:".dropdown",DROPDOWN_ITEMS:".dropdown-item",DROPDOWN_TOGGLE:".dropdown-toggle"},d="offset",_="position",g=function(){function o(e,n){var i=this;this._element=e,this._scrollElement="BODY"===e.tagName?window:e,this._config=this._getConfig(n),this._selector=this._config.target+" "+f.NAV_LINKS+","+this._config.target+" "+f.LIST_ITEMS+","+this._config.target+" "+f.DROPDOWN_ITEMS,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,t(this._scrollElement).on(h.SCROLL,function(t){return i._process(t)}),this.refresh(),this._process()}var g=o.prototype;return g.refresh=function(){var e=this,n=this._scrollElement===this._scrollElement.window?d:_,i="auto"===this._config.method?n:this._config.method,s=i===_?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),t.makeArray(t(this._selector)).map(function(e){var n,r=P.getSelectorFromElement(e);if(r&&(n=t(r)[0]),n){var o=n.getBoundingClientRect();if(o.width||o.height)return[t(n)[i]().top+s,r]}return null}).filter(function(t){return t}).sort(function(t,e){return t[0]-e[0]}).forEach(function(t){e._offsets.push(t[0]),e._targets.push(t[1])})},g.dispose=function(){t.removeData(this._element,n),t(this._scrollElement).off(i),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},g._getConfig=function(n){if("string"!=typeof(n=r({},a,n)).target){var i=t(n.target).attr("id");i||(i=P.getUID(e),t(n.target).attr("id",i)),n.target="#"+i}return P.typeCheckConfig(e,n,l),n},g._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},g._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},g._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},g._process=function(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),t>=n){var i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&t<this._offsets[0]&&this._offsets[0]>0)return this._activeTarget=null,void this._clear();for(var s=this._offsets.length;s--;){this._activeTarget!==this._targets[s]&&t>=this._offsets[s]&&("undefined"==typeof this._offsets[s+1]||t<this._offsets[s+1])&&this._activate(this._targets[s])}}},g._activate=function(e){this._activeTarget=e,this._clear();var n=this._selector.split(",");n=n.map(function(t){return t+'[data-target="'+e+'"],'+t+'[href="'+e+'"]'});var i=t(n.join(","));i.hasClass(c)?(i.closest(f.DROPDOWN).find(f.DROPDOWN_TOGGLE).addClass(u),i.addClass(u)):(i.addClass(u),i.parents(f.NAV_LIST_GROUP).prev(f.NAV_LINKS+", "+f.LIST_ITEMS).addClass(u),i.parents(f.NAV_LIST_GROUP).prev(f.NAV_ITEMS).children(f.NAV_LINKS).addClass(u)),t(this._scrollElement).trigger(h.ACTIVATE,{relatedTarget:e})},g._clear=function(){t(this._selector).filter(f.ACTIVE).removeClass(u)},o._jQueryInterface=function(e){return this.each(function(){var i=t(this).data(n);if(i||(i=new o(this,"object"==typeof e&&e),t(this).data(n,i)),"string"==typeof e){if("undefined"==typeof i[e])throw new TypeError('No method named "'+e+'"');i[e]()}})},s(o,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return a}}]),o}();return t(window).on(h.LOAD_DATA_API,function(){for(var e=t.makeArray(t(f.DATA_SPY)),n=e.length;n--;){var i=t(e[n]);g._jQueryInterface.call(i,i.data())}}),t.fn[e]=g._jQueryInterface,t.fn[e].Constructor=g,t.fn[e].noConflict=function(){return t.fn[e]=o,g._jQueryInterface},g}(e),V=function(t){var e="bs.tab",n="."+e,i=t.fn.tab,r={HIDE:"hide"+n,HIDDEN:"hidden"+n,SHOW:"show"+n,SHOWN:"shown"+n,CLICK_DATA_API:"click.bs.tab.data-api"},o="dropdown-menu",a="active",l="disabled",h="fade",c="show",u=".dropdown",f=".nav, .list-group",d=".active",_="> li > .active",g='[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',p=".dropdown-toggle",m="> .dropdown-menu .active",v=function(){function n(t){this._element=t}var i=n.prototype;return i.show=function(){var e=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&t(this._element).hasClass(a)||t(this._element).hasClass(l))){var n,i,s=t(this._element).closest(f)[0],o=P.getSelectorFromElement(this._element);if(s){var h="UL"===s.nodeName?_:d;i=(i=t.makeArray(t(s).find(h)))[i.length-1]}var c=t.Event(r.HIDE,{relatedTarget:this._element}),u=t.Event(r.SHOW,{relatedTarget:i});if(i&&t(i).trigger(c),t(this._element).trigger(u),!u.isDefaultPrevented()&&!c.isDefaultPrevented()){o&&(n=t(o)[0]),this._activate(this._element,s);var g=function(){var n=t.Event(r.HIDDEN,{relatedTarget:e._element}),s=t.Event(r.SHOWN,{relatedTarget:i});t(i).trigger(n),t(e._element).trigger(s)};n?this._activate(n,n.parentNode,g):g()}}},i.dispose=function(){t.removeData(this._element,e),this._element=null},i._activate=function(e,n,i){var s=this,r=("UL"===n.nodeName?t(n).find(_):t(n).children(d))[0],o=i&&P.supportsTransitionEnd()&&r&&t(r).hasClass(h),a=function(){return s._transitionComplete(e,r,i)};r&&o?t(r).one(P.TRANSITION_END,a).emulateTransitionEnd(150):a()},i._transitionComplete=function(e,n,i){if(n){t(n).removeClass(c+" "+a);var s=t(n.parentNode).find(m)[0];s&&t(s).removeClass(a),"tab"===n.getAttribute("role")&&n.setAttribute("aria-selected",!1)}if(t(e).addClass(a),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!0),P.reflow(e),t(e).addClass(c),e.parentNode&&t(e.parentNode).hasClass(o)){var r=t(e).closest(u)[0];r&&t(r).find(p).addClass(a),e.setAttribute("aria-expanded",!0)}i&&i()},n._jQueryInterface=function(i){return this.each(function(){var s=t(this),r=s.data(e);if(r||(r=new n(this),s.data(e,r)),"string"==typeof i){if("undefined"==typeof r[i])throw new TypeError('No method named "'+i+'"');r[i]()}})},s(n,null,[{key:"VERSION",get:function(){return"4.0.0"}}]),n}();return t(document).on(r.CLICK_DATA_API,g,function(e){e.preventDefault(),v._jQueryInterface.call(t(this),"show")}),t.fn.tab=v._jQueryInterface,t.fn.tab.Constructor=v,t.fn.tab.noConflict=function(){return t.fn.tab=i,v._jQueryInterface},v}(e);!function(t){if("undefined"==typeof t)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var e=t.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1===e[0]&&9===e[1]&&e[2]<1||e[0]>=4)throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}(e),t.Util=P,t.Alert=L,t.Button=R,t.Carousel=j,t.Collapse=H,t.Dropdown=W,t.Modal=M,t.Popover=x,t.Scrollspy=K,t.Tab=V,t.Tooltip=U,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=bootstrap.min.js.map
var WOW;jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(t,e,i,n,o){return jQuery.easing[jQuery.easing.def](t,e,i,n,o)},easeInQuad:function(t,e,i,n,o){return n*(e/=o)*e+i},easeOutQuad:function(t,e,i,n,o){return-n*(e/=o)*(e-2)+i},easeInOutQuad:function(t,e,i,n,o){return(e/=o/2)<1?n/2*e*e+i:-n/2*(--e*(e-2)-1)+i},easeInCubic:function(t,e,i,n,o){return n*(e/=o)*e*e+i},easeOutCubic:function(t,e,i,n,o){return n*((e=e/o-1)*e*e+1)+i},easeInOutCubic:function(t,e,i,n,o){return(e/=o/2)<1?n/2*e*e*e+i:n/2*((e-=2)*e*e+2)+i},easeInQuart:function(t,e,i,n,o){return n*(e/=o)*e*e*e+i},easeOutQuart:function(t,e,i,n,o){return-n*((e=e/o-1)*e*e*e-1)+i},easeInOutQuart:function(t,e,i,n,o){return(e/=o/2)<1?n/2*e*e*e*e+i:-n/2*((e-=2)*e*e*e-2)+i},easeInQuint:function(t,e,i,n,o){return n*(e/=o)*e*e*e*e+i},easeOutQuint:function(t,e,i,n,o){return n*((e=e/o-1)*e*e*e*e+1)+i},easeInOutQuint:function(t,e,i,n,o){return(e/=o/2)<1?n/2*e*e*e*e*e+i:n/2*((e-=2)*e*e*e*e+2)+i},easeInSine:function(t,e,i,n,o){return-n*Math.cos(e/o*(Math.PI/2))+n+i},easeOutSine:function(t,e,i,n,o){return n*Math.sin(e/o*(Math.PI/2))+i},easeInOutSine:function(t,e,i,n,o){return-n/2*(Math.cos(Math.PI*e/o)-1)+i},easeInExpo:function(t,e,i,n,o){return 0==e?i:n*Math.pow(2,10*(e/o-1))+i},easeOutExpo:function(t,e,i,n,o){return e==o?i+n:n*(1-Math.pow(2,-10*e/o))+i},easeInOutExpo:function(t,e,i,n,o){return 0==e?i:e==o?i+n:(e/=o/2)<1?n/2*Math.pow(2,10*(e-1))+i:n/2*(2-Math.pow(2,-10*--e))+i},easeInCirc:function(t,e,i,n,o){return-n*(Math.sqrt(1-(e/=o)*e)-1)+i},easeOutCirc:function(t,e,i,n,o){return n*Math.sqrt(1-(e=e/o-1)*e)+i},easeInOutCirc:function(t,e,i,n,o){return(e/=o/2)<1?-n/2*(Math.sqrt(1-e*e)-1)+i:n/2*(Math.sqrt(1-(e-=2)*e)+1)+i},easeInElastic:function(t,e,i,n,o){var a=1.70158,r=0,s=n;if(0==e)return i;if(1==(e/=o))return i+n;if(r||(r=.3*o),s<Math.abs(n)){s=n;a=r/4}else a=r/(2*Math.PI)*Math.asin(n/s);return-s*Math.pow(2,10*(e-=1))*Math.sin((e*o-a)*(2*Math.PI)/r)+i},easeOutElastic:function(t,e,i,n,o){var a=1.70158,r=0,s=n;if(0==e)return i;if(1==(e/=o))return i+n;if(r||(r=.3*o),s<Math.abs(n)){s=n;a=r/4}else a=r/(2*Math.PI)*Math.asin(n/s);return s*Math.pow(2,-10*e)*Math.sin((e*o-a)*(2*Math.PI)/r)+n+i},easeInOutElastic:function(t,e,i,n,o){var a=1.70158,r=0,s=n;if(0==e)return i;if(2==(e/=o/2))return i+n;if(r||(r=o*(.3*1.5)),s<Math.abs(n)){s=n;a=r/4}else a=r/(2*Math.PI)*Math.asin(n/s);return e<1?s*Math.pow(2,10*(e-=1))*Math.sin((e*o-a)*(2*Math.PI)/r)*-.5+i:s*Math.pow(2,-10*(e-=1))*Math.sin((e*o-a)*(2*Math.PI)/r)*.5+n+i},easeInBack:function(t,e,i,n,o,a){return void 0==a&&(a=1.70158),n*(e/=o)*e*((a+1)*e-a)+i},easeOutBack:function(t,e,i,n,o,a){return void 0==a&&(a=1.70158),n*((e=e/o-1)*e*((a+1)*e+a)+1)+i},easeInOutBack:function(t,e,i,n,o,a){return void 0==a&&(a=1.70158),(e/=o/2)<1?n/2*(e*e*((1+(a*=1.525))*e-a))+i:n/2*((e-=2)*e*((1+(a*=1.525))*e+a)+2)+i},easeInBounce:function(t,e,i,n,o){return n-jQuery.easing.easeOutBounce(t,o-e,0,n,o)+i},easeOutBounce:function(t,e,i,n,o){return(e/=o)<1/2.75?n*(7.5625*e*e)+i:e<2/2.75?n*(7.5625*(e-=1.5/2.75)*e+.75)+i:e<2.5/2.75?n*(7.5625*(e-=2.25/2.75)*e+.9375)+i:n*(7.5625*(e-=2.625/2.75)*e+.984375)+i},easeInOutBounce:function(t,e,i,n,o){return e<o/2?.5*jQuery.easing.easeInBounce(t,2*e,0,n,o)+i:.5*jQuery.easing.easeOutBounce(t,2*e-o,0,n,o)+.5*n+i}}),jQuery.Velocity?console.log("Velocity is already loaded. You may be needlessly importing Velocity again; note that Materialize includes Velocity."):(function(t){function e(t){var e=t.length,n=i.type(t);return"function"!==n&&!i.isWindow(t)&&(!(1!==t.nodeType||!e)||("array"===n||0===e||"number"==typeof e&&e>0&&e-1 in t))}if(!t.jQuery){var i=function(t,e){return new i.fn.init(t,e)};i.isWindow=function(t){return null!=t&&t==t.window},i.type=function(t){return null==t?t+"":"object"==typeof t||"function"==typeof t?o[r.call(t)]||"object":typeof t},i.isArray=Array.isArray||function(t){return"array"===i.type(t)},i.isPlainObject=function(t){var e;if(!t||"object"!==i.type(t)||t.nodeType||i.isWindow(t))return!1;try{if(t.constructor&&!a.call(t,"constructor")&&!a.call(t.constructor.prototype,"isPrototypeOf"))return!1}catch(t){return!1}for(e in t);return void 0===e||a.call(t,e)},i.each=function(t,i,n){var o,a=0,r=t.length,s=e(t);if(n){if(s)for(;r>a&&(o=i.apply(t[a],n),!1!==o);a++);else for(a in t)if(o=i.apply(t[a],n),!1===o)break}else if(s)for(;r>a&&(o=i.call(t[a],a,t[a]),!1!==o);a++);else for(a in t)if(o=i.call(t[a],a,t[a]),!1===o)break;return t},i.data=function(t,e,o){if(void 0===o){var a=(r=t[i.expando])&&n[r];if(void 0===e)return a;if(a&&e in a)return a[e]}else if(void 0!==e){var r=t[i.expando]||(t[i.expando]=++i.uuid);return n[r]=n[r]||{},n[r][e]=o,o}},i.removeData=function(t,e){var o=t[i.expando],a=o&&n[o];a&&i.each(e,function(t,e){delete a[e]})},i.extend=function(){var t,e,n,o,a,r,s=arguments[0]||{},l=1,c=arguments.length,u=!1;for("boolean"==typeof s&&(u=s,s=arguments[l]||{},l++),"object"!=typeof s&&"function"!==i.type(s)&&(s={}),l===c&&(s=this,l--);c>l;l++)if(null!=(a=arguments[l]))for(o in a)t=s[o],n=a[o],s!==n&&(u&&n&&(i.isPlainObject(n)||(e=i.isArray(n)))?(e?(e=!1,r=t&&i.isArray(t)?t:[]):r=t&&i.isPlainObject(t)?t:{},s[o]=i.extend(u,r,n)):void 0!==n&&(s[o]=n));return s},i.queue=function(t,n,o){if(t){n=(n||"fx")+"queue";var a=i.data(t,n);return o?(!a||i.isArray(o)?a=i.data(t,n,(r=o,l=s||[],null!=r&&(e(Object(r))?function(t,e){for(var i=+e.length,n=0,o=t.length;i>n;)t[o++]=e[n++];if(i!=i)for(;void 0!==e[n];)t[o++]=e[n++];t.length=o}(l,"string"==typeof r?[r]:r):[].push.call(l,r)),l)):a.push(o),a):a||[]}var r,s,l},i.dequeue=function(t,e){i.each(t.nodeType?[t]:t,function(t,n){e=e||"fx";var o=i.queue(n,e),a=o.shift();"inprogress"===a&&(a=o.shift()),a&&("fx"===e&&o.unshift("inprogress"),a.call(n,function(){i.dequeue(n,e)}))})},i.fn=i.prototype={init:function(t){if(t.nodeType)return this[0]=t,this;throw new Error("Not a DOM node.")},offset:function(){var e=this[0].getBoundingClientRect?this[0].getBoundingClientRect():{top:0,left:0};return{top:e.top+(t.pageYOffset||document.scrollTop||0)-(document.clientTop||0),left:e.left+(t.pageXOffset||document.scrollLeft||0)-(document.clientLeft||0)}},position:function(){function t(){for(var t=this.offsetParent||document;t&&"html"===!t.nodeType.toLowerCase&&"static"===t.style.position;)t=t.offsetParent;return t||document}var e=this[0],t=t.apply(e),n=this.offset(),o=/^(?:body|html)$/i.test(t.nodeName)?{top:0,left:0}:i(t).offset();return n.top-=parseFloat(e.style.marginTop)||0,n.left-=parseFloat(e.style.marginLeft)||0,t.style&&(o.top+=parseFloat(t.style.borderTopWidth)||0,o.left+=parseFloat(t.style.borderLeftWidth)||0),{top:n.top-o.top,left:n.left-o.left}}};var n={};i.expando="velocity"+(new Date).getTime(),i.uuid=0;for(var o={},a=o.hasOwnProperty,r=o.toString,s="Boolean Number String Function Array Date RegExp Object Error".split(" "),l=0;l<s.length;l++)o["[object "+s[l]+"]"]=s[l].toLowerCase();i.fn.init.prototype=i.fn,t.Velocity={Utilities:i}}}(window),function(t){"object"==typeof module&&"object"==typeof module.exports?module.exports=t():"function"==typeof define&&define.amd?define(t):t()}(function(){return function(t,e,i,n){function o(t){return f.isWrapped(t)?t=[].slice.call(t):f.isNode(t)&&(t=[t]),t}function a(t){var e=u.data(t,"velocity");return null===e?n:e}function r(t,i,n,o){function a(t,e){return 1-3*e+3*t}function r(t,e){return 3*e-6*t}function s(t){return 3*t}function l(t,e,i){return((a(e,i)*t+r(e,i))*t+s(e))*t}function c(t,e,i){return 3*a(e,i)*t*t+2*r(e,i)*t+s(e)}function u(e){for(var i=0,o=1,a=g-1;o!=a&&x[o]<=e;++o)i+=v;var r=i+(e-x[--o])/(x[o+1]-x[o])*v,s=c(r,t,n);return s>=p?function(e,i){for(var o=0;h>o;++o){var a=c(i,t,n);if(0===a)return i;i-=(l(i,t,n)-e)/a}return i}(e,r):0==s?r:function(e,i,o){var a,r,s=0;do{r=i+(o-i)/2,a=l(r,t,n)-e,a>0?o=r:i=r}while(Math.abs(a)>f&&++s<m);return r}(e,i,i+v)}function d(){w=!0,(t!=i||n!=o)&&function(){for(var e=0;g>e;++e)x[e]=l(e*v,t,n)}()}var h=4,p=.001,f=1e-7,m=10,g=11,v=1/(g-1),y="Float32Array"in e;if(4!==arguments.length)return!1;for(var b=0;4>b;++b)if("number"!=typeof arguments[b]||isNaN(arguments[b])||!isFinite(arguments[b]))return!1;t=Math.min(t,1),n=Math.min(n,1),t=Math.max(t,0),n=Math.max(n,0);var x=y?new Float32Array(g):new Array(g),w=!1,k=function(e){return w||d(),t===i&&n===o?e:0===e?0:1===e?1:l(u(e),i,o)};k.getControlPoints=function(){return[{x:t,y:i},{x:n,y:o}]};var C="generateBezier("+[t,i,n,o]+")";return k.toString=function(){return C},k}function s(t,e){var i=t;return f.isString(t)?y.Easings[t]||(i=!1):i=f.isArray(t)&&1===t.length?function(t){return function(e){return Math.round(e*t)*(1/t)}}.apply(null,t):f.isArray(t)&&2===t.length?b.apply(null,t.concat([e])):!(!f.isArray(t)||4!==t.length)&&r.apply(null,t),!1===i&&(i=y.Easings[y.defaults.easing]?y.defaults.easing:v),i}function l(t){if(t){var e=(new Date).getTime(),i=y.State.calls.length;i>1e4&&(y.State.calls=function(t){for(var e=-1,i=t?t.length:0,n=[];++e<i;){var o=t[e];o&&n.push(o)}return n}(y.State.calls));for(var o=0;i>o;o++)if(y.State.calls[o]){var r=y.State.calls[o],s=r[0],d=r[2],h=r[3],p=!!h,m=null;h||(h=y.State.calls[o][3]=e-16);for(var g=Math.min((e-h)/d.duration,1),v=0,b=s.length;b>v;v++){var w=s[v],C=w.element;if(a(C)){var S=!1;if(d.display!==n&&null!==d.display&&"none"!==d.display){if("flex"===d.display){u.each(["-webkit-box","-moz-box","-ms-flexbox","-webkit-flex"],function(t,e){x.setPropertyValue(C,"display",e)})}x.setPropertyValue(C,"display",d.display)}d.visibility!==n&&"hidden"!==d.visibility&&x.setPropertyValue(C,"visibility",d.visibility);for(var T in w)if("element"!==T){var M,I=w[T],P=f.isString(I.easing)?y.Easings[I.easing]:I.easing;if(1===g)M=I.endValue;else{var A=I.endValue-I.startValue;if(M=I.startValue+A*P(g,d,A),!p&&M===I.currentValue)continue}if(I.currentValue=M,"tween"===T)m=M;else{if(x.Hooks.registered[T]){var D=x.Hooks.getRoot(T),E=a(C).rootPropertyValueCache[D];E&&(I.rootPropertyValue=E)}var _=x.setPropertyValue(C,T,I.currentValue+(0===parseFloat(M)?"":I.unitType),I.rootPropertyValue,I.scrollData);x.Hooks.registered[T]&&(a(C).rootPropertyValueCache[D]=x.Normalizations.registered[D]?x.Normalizations.registered[D]("extract",null,_[1]):_[1]),"transform"===_[0]&&(S=!0)}}d.mobileHA&&a(C).transformCache.translate3d===n&&(a(C).transformCache.translate3d="(0px, 0px, 0px)",S=!0),S&&x.flushTransformCache(C)}}d.display!==n&&"none"!==d.display&&(y.State.calls[o][2].display=!1),d.visibility!==n&&"hidden"!==d.visibility&&(y.State.calls[o][2].visibility=!1),d.progress&&d.progress.call(r[1],r[1],g,Math.max(0,h+d.duration-e),h,m),1===g&&c(o)}}y.State.isTicking&&k(l)}function c(t,e){if(!y.State.calls[t])return!1;for(var i=y.State.calls[t][0],o=y.State.calls[t][1],r=y.State.calls[t][2],s=y.State.calls[t][4],l=!1,c=0,d=i.length;d>c;c++){var h=i[c].element;if(e||r.loop||("none"===r.display&&x.setPropertyValue(h,"display",r.display),"hidden"===r.visibility&&x.setPropertyValue(h,"visibility",r.visibility)),!0!==r.loop&&(u.queue(h)[1]===n||!/\.velocityQueueEntryFlag/i.test(u.queue(h)[1]))&&a(h)){a(h).isAnimating=!1,a(h).rootPropertyValueCache={};var p=!1;u.each(x.Lists.transforms3D,function(t,e){var i=/^scale/.test(e)?1:0,o=a(h).transformCache[e];a(h).transformCache[e]!==n&&new RegExp("^\\("+i+"[^.]").test(o)&&(p=!0,delete a(h).transformCache[e])}),r.mobileHA&&(p=!0,delete a(h).transformCache.translate3d),p&&x.flushTransformCache(h),x.Values.removeClass(h,"velocity-animating")}if(!e&&r.complete&&!r.loop&&c===d-1)try{r.complete.call(o,o)}catch(t){setTimeout(function(){throw t},1)}s&&!0!==r.loop&&s(o),a(h)&&!0===r.loop&&!e&&(u.each(a(h).tweensContainer,function(t,e){/^rotate/.test(t)&&360===parseFloat(e.endValue)&&(e.endValue=0,e.startValue=360),/^backgroundPosition/.test(t)&&100===parseFloat(e.endValue)&&"%"===e.unitType&&(e.endValue=0,e.startValue=100)}),y(h,"reverse",{loop:!0,delay:r.delay})),!1!==r.queue&&u.dequeue(h,r.queue)}y.State.calls[t]=!1;for(var f=0,m=y.State.calls.length;m>f;f++)if(!1!==y.State.calls[f]){l=!0;break}!1===l&&(y.State.isTicking=!1,delete y.State.calls,y.State.calls=[])}var u,d,h=function(){if(i.documentMode)return i.documentMode;for(var t=7;t>4;t--){var e=i.createElement("div");if(e.innerHTML="\x3c!--[if IE "+t+"]><span></span><![endif]--\x3e",e.getElementsByTagName("span").length)return e=null,t}return n}(),p=(d=0,e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||function(t){var e,i=(new Date).getTime();return e=Math.max(0,16-(i-d)),d=i+e,setTimeout(function(){t(i+e)},e)}),f={isString:function(t){return"string"==typeof t},isArray:Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)},isFunction:function(t){return"[object Function]"===Object.prototype.toString.call(t)},isNode:function(t){return t&&t.nodeType},isNodeList:function(t){return"object"==typeof t&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(t))&&t.length!==n&&(0===t.length||"object"==typeof t[0]&&t[0].nodeType>0)},isWrapped:function(t){return t&&(t.jquery||e.Zepto&&e.Zepto.zepto.isZ(t))},isSVG:function(t){return e.SVGElement&&t instanceof e.SVGElement},isEmptyObject:function(t){for(var e in t)return!1;return!0}},m=!1;if(t.fn&&t.fn.jquery?(u=t,m=!0):u=e.Velocity.Utilities,8>=h&&!m)throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");if(!(7>=h)){var g=400,v="swing",y={State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),isAndroid:/Android/i.test(navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(navigator.userAgent),isChrome:e.chrome,isFirefox:/Firefox/i.test(navigator.userAgent),prefixElement:i.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:!1,calls:[]},CSS:{},Utilities:u,Redirects:{},Easings:{},Promise:e.Promise,defaults:{queue:"",duration:g,easing:v,begin:n,complete:n,progress:n,display:n,visibility:n,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0},init:function(t){u.data(t,"velocity",{isSVG:f.isSVG(t),isAnimating:!1,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}})},hook:null,mock:!1,version:{major:1,minor:2,patch:2},debug:!1};e.pageYOffset!==n?(y.State.scrollAnchor=e,y.State.scrollPropertyLeft="pageXOffset",y.State.scrollPropertyTop="pageYOffset"):(y.State.scrollAnchor=i.documentElement||i.body.parentNode||i.body,y.State.scrollPropertyLeft="scrollLeft",y.State.scrollPropertyTop="scrollTop");var b=function(){function t(t){return-t.tension*t.x-t.friction*t.v}function e(e,i,n){var o={x:e.x+n.dx*i,v:e.v+n.dv*i,tension:e.tension,friction:e.friction};return{dx:o.v,dv:t(o)}}return function i(n,o,a){var r,s,l,c,u,d,h,p,f,m,g,v={x:-1,v:0,tension:null,friction:null},y=[0],b=0;for(n=parseFloat(n)||500,o=parseFloat(o)||20,a=a||null,v.tension=n,v.friction=o,(r=null!==a)?s=(b=i(n,o))/a*.016:s=.016;u=s,void 0,void 0,void 0,void 0,void 0,void 0,d={dx:(c=l||v).v,dv:t(c)},h=e(c,.5*u,d),p=e(c,.5*u,h),f=e(c,u,p),m=1/6*(d.dx+2*(h.dx+p.dx)+f.dx),g=1/6*(d.dv+2*(h.dv+p.dv)+f.dv),c.x=c.x+m*u,c.v=c.v+g*u,l=c,y.push(1+l.x),b+=16,Math.abs(l.x)>1e-4&&Math.abs(l.v)>1e-4;);return r?function(t){return y[t*(y.length-1)|0]}:b}}();y.Easings={linear:function(t){return t},swing:function(t){return.5-Math.cos(t*Math.PI)/2},spring:function(t){return 1-Math.cos(4.5*t*Math.PI)*Math.exp(6*-t)}},u.each([["ease",[.25,.1,.25,1]],["ease-in",[.42,0,1,1]],["ease-out",[0,0,.58,1]],["ease-in-out",[.42,0,.58,1]],["easeInSine",[.47,0,.745,.715]],["easeOutSine",[.39,.575,.565,1]],["easeInOutSine",[.445,.05,.55,.95]],["easeInQuad",[.55,.085,.68,.53]],["easeOutQuad",[.25,.46,.45,.94]],["easeInOutQuad",[.455,.03,.515,.955]],["easeInCubic",[.55,.055,.675,.19]],["easeOutCubic",[.215,.61,.355,1]],["easeInOutCubic",[.645,.045,.355,1]],["easeInQuart",[.895,.03,.685,.22]],["easeOutQuart",[.165,.84,.44,1]],["easeInOutQuart",[.77,0,.175,1]],["easeInQuint",[.755,.05,.855,.06]],["easeOutQuint",[.23,1,.32,1]],["easeInOutQuint",[.86,0,.07,1]],["easeInExpo",[.95,.05,.795,.035]],["easeOutExpo",[.19,1,.22,1]],["easeInOutExpo",[1,0,0,1]],["easeInCirc",[.6,.04,.98,.335]],["easeOutCirc",[.075,.82,.165,1]],["easeInOutCirc",[.785,.135,.15,.86]]],function(t,e){y.Easings[e[0]]=r.apply(null,e[1])});var x=y.CSS={RegEx:{isHex:/^#([A-f\d]{3}){1,2}$/i,valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},Lists:{colors:["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],transformsBase:["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"],transforms3D:["transformPerspective","translateZ","scaleZ","rotateX","rotateY"]},Hooks:{templates:{textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0px"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function(){for(var t=0;t<x.Lists.colors.length;t++){var e="color"===x.Lists.colors[t]?"0 0 0 1":"255 255 255 1";x.Hooks.templates[x.Lists.colors[t]]=["Red Green Blue Alpha",e]}var i,n,o;if(h)for(i in x.Hooks.templates){o=(n=x.Hooks.templates[i])[0].split(" ");var a=n[1].match(x.RegEx.valueSplit);"Color"===o[0]&&(o.push(o.shift()),a.push(a.shift()),x.Hooks.templates[i]=[o.join(" "),a.join(" ")])}for(i in x.Hooks.templates){o=(n=x.Hooks.templates[i])[0].split(" ");for(var t in o){var r=i+o[t],s=t;x.Hooks.registered[r]=[i,s]}}},getRoot:function(t){var e=x.Hooks.registered[t];return e?e[0]:t},cleanRootPropertyValue:function(t,e){return x.RegEx.valueUnwrap.test(e)&&(e=e.match(x.RegEx.valueUnwrap)[1]),x.Values.isCSSNullValue(e)&&(e=x.Hooks.templates[t][1]),e},extractValue:function(t,e){var i=x.Hooks.registered[t];if(i){var n=i[0],o=i[1];return(e=x.Hooks.cleanRootPropertyValue(n,e)).toString().match(x.RegEx.valueSplit)[o]}return e},injectValue:function(t,e,i){var n=x.Hooks.registered[t];if(n){var o,a=n[0],r=n[1];return(o=(i=x.Hooks.cleanRootPropertyValue(a,i)).toString().match(x.RegEx.valueSplit))[r]=e,o.join(" ")}return i}},Normalizations:{registered:{clip:function(t,e,i){switch(t){case"name":return"clip";case"extract":var n;return x.RegEx.wrappedValueAlreadyExtracted.test(i)?n=i:n=(n=i.toString().match(x.RegEx.valueUnwrap))?n[1].replace(/,(\s+)?/g," "):i,n;case"inject":return"rect("+i+")"}},blur:function(t,e,i){switch(t){case"name":return y.State.isFirefox?"filter":"-webkit-filter";case"extract":var n=parseFloat(i);if(!n&&0!==n){var o=i.toString().match(/blur\(([0-9]+[A-z]+)\)/i);n=o?o[1]:0}return n;case"inject":return parseFloat(i)?"blur("+i+")":"none"}},opacity:function(t,e,i){if(8>=h)switch(t){case"name":return"filter";case"extract":var n=i.toString().match(/alpha\(opacity=(.*)\)/i);return n?n[1]/100:1;case"inject":return e.style.zoom=1,parseFloat(i)>=1?"":"alpha(opacity="+parseInt(100*parseFloat(i),10)+")"}else switch(t){case"name":return"opacity";case"extract":case"inject":return i}}},register:function(){9>=h||y.State.isGingerbread||(x.Lists.transformsBase=x.Lists.transformsBase.concat(x.Lists.transforms3D));for(var t=0;t<x.Lists.transformsBase.length;t++)!function(){var e=x.Lists.transformsBase[t];x.Normalizations.registered[e]=function(t,i,o){switch(t){case"name":return"transform";case"extract":return a(i)===n||a(i).transformCache[e]===n?/^scale/i.test(e)?1:0:a(i).transformCache[e].replace(/[()]/g,"");case"inject":var r=!1;switch(e.substr(0,e.length-1)){case"translate":r=!/(%|px|em|rem|vw|vh|\d)$/i.test(o);break;case"scal":case"scale":y.State.isAndroid&&a(i).transformCache[e]===n&&1>o&&(o=1),r=!/(\d)$/i.test(o);break;case"skew":r=!/(deg|\d)$/i.test(o);break;case"rotate":r=!/(deg|\d)$/i.test(o)}return r||(a(i).transformCache[e]="("+o+")"),a(i).transformCache[e]}}}();for(t=0;t<x.Lists.colors.length;t++)!function(){var e=x.Lists.colors[t];x.Normalizations.registered[e]=function(t,i,o){switch(t){case"name":return e;case"extract":var a;if(x.RegEx.wrappedValueAlreadyExtracted.test(o))a=o;else{var r,s={black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",red:"rgb(255, 0, 0)",white:"rgb(255, 255, 255)"};/^[A-z]+$/i.test(o)?r=s[o]!==n?s[o]:s.black:x.RegEx.isHex.test(o)?r="rgb("+x.Values.hexToRgb(o).join(" ")+")":/^rgba?\(/i.test(o)||(r=s.black),a=(r||o).toString().match(x.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ")}return 8>=h||3!==a.split(" ").length||(a+=" 1"),a;case"inject":return 8>=h?4===o.split(" ").length&&(o=o.split(/\s+/).slice(0,3).join(" ")):3===o.split(" ").length&&(o+=" 1"),(8>=h?"rgb":"rgba")+"("+o.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")"}}}()}},Names:{camelCase:function(t){return t.replace(/-(\w)/g,function(t,e){return e.toUpperCase()})},SVGAttribute:function(t){var e="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";return(h||y.State.isAndroid&&!y.State.isChrome)&&(e+="|transform"),new RegExp("^("+e+")$","i").test(t)},prefixCheck:function(t){if(y.State.prefixMatches[t])return[y.State.prefixMatches[t],!0];for(var e=["","Webkit","Moz","ms","O"],i=0,n=e.length;n>i;i++){var o;if(o=0===i?t:e[i]+t.replace(/^\w/,function(t){return t.toUpperCase()}),f.isString(y.State.prefixElement.style[o]))return y.State.prefixMatches[t]=o,[o,!0]}return[t,!1]}},Values:{hexToRgb:function(t){var e;return t=t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(t,e,i,n){return e+e+i+i+n+n}),(e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t))?[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]:[0,0,0]},isCSSNullValue:function(t){return 0==t||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(t)},getUnitType:function(t){return/^(rotate|skew)/i.test(t)?"deg":/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(t)?"":"px"},getDisplayType:function(t){var e=t&&t.tagName.toString().toLowerCase();return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(e)?"inline":/^(li)$/i.test(e)?"list-item":/^(tr)$/i.test(e)?"table-row":/^(table)$/i.test(e)?"table":/^(tbody)$/i.test(e)?"table-row-group":"block"},addClass:function(t,e){t.classList?t.classList.add(e):t.className+=(t.className.length?" ":"")+e},removeClass:function(t,e){t.classList?t.classList.remove(e):t.className=t.className.toString().replace(new RegExp("(^|\\s)"+e.split(" ").join("|")+"(\\s|$)","gi")," ")}},getPropertyValue:function(t,i,o,r){function s(t,i){function o(){d&&x.setPropertyValue(t,"display","none")}var l=0;if(8>=h)l=u.css(t,i);else{var c,d=!1;if(/^(width|height)$/.test(i)&&0===x.getPropertyValue(t,"display")&&(d=!0,x.setPropertyValue(t,"display",x.Values.getDisplayType(t))),!r){if("height"===i&&"border-box"!==x.getPropertyValue(t,"boxSizing").toString().toLowerCase()){var p=t.offsetHeight-(parseFloat(x.getPropertyValue(t,"borderTopWidth"))||0)-(parseFloat(x.getPropertyValue(t,"borderBottomWidth"))||0)-(parseFloat(x.getPropertyValue(t,"paddingTop"))||0)-(parseFloat(x.getPropertyValue(t,"paddingBottom"))||0);return o(),p}if("width"===i&&"border-box"!==x.getPropertyValue(t,"boxSizing").toString().toLowerCase()){var f=t.offsetWidth-(parseFloat(x.getPropertyValue(t,"borderLeftWidth"))||0)-(parseFloat(x.getPropertyValue(t,"borderRightWidth"))||0)-(parseFloat(x.getPropertyValue(t,"paddingLeft"))||0)-(parseFloat(x.getPropertyValue(t,"paddingRight"))||0);return o(),f}}c=a(t)===n?e.getComputedStyle(t,null):a(t).computedStyle?a(t).computedStyle:a(t).computedStyle=e.getComputedStyle(t,null),"borderColor"===i&&(i="borderTopColor"),(""===(l=9===h&&"filter"===i?c.getPropertyValue(i):c[i])||null===l)&&(l=t.style[i]),o()}if("auto"===l&&/^(top|right|bottom|left)$/i.test(i)){var m=s(t,"position");("fixed"===m||"absolute"===m&&/top|left/i.test(i))&&(l=u(t).position()[i]+"px")}return l}var l;if(x.Hooks.registered[i]){var c=i,d=x.Hooks.getRoot(c);o===n&&(o=x.getPropertyValue(t,x.Names.prefixCheck(d)[0])),x.Normalizations.registered[d]&&(o=x.Normalizations.registered[d]("extract",t,o)),l=x.Hooks.extractValue(c,o)}else if(x.Normalizations.registered[i]){var p,f;"transform"!==(p=x.Normalizations.registered[i]("name",t))&&(f=s(t,x.Names.prefixCheck(p)[0]),x.Values.isCSSNullValue(f)&&x.Hooks.templates[i]&&(f=x.Hooks.templates[i][1])),l=x.Normalizations.registered[i]("extract",t,f)}if(!/^[\d-]/.test(l))if(a(t)&&a(t).isSVG&&x.Names.SVGAttribute(i))if(/^(height|width)$/i.test(i))try{l=t.getBBox()[i]}catch(t){l=0}else l=t.getAttribute(i);else l=s(t,x.Names.prefixCheck(i)[0]);return x.Values.isCSSNullValue(l)&&(l=0),y.debug>=2&&console.log("Get "+i+": "+l),l},setPropertyValue:function(t,i,n,o,r){var s=i;if("scroll"===i)r.container?r.container["scroll"+r.direction]=n:"Left"===r.direction?e.scrollTo(n,r.alternateValue):e.scrollTo(r.alternateValue,n);else if(x.Normalizations.registered[i]&&"transform"===x.Normalizations.registered[i]("name",t))x.Normalizations.registered[i]("inject",t,n),s="transform",n=a(t).transformCache[i];else{if(x.Hooks.registered[i]){var l=i,c=x.Hooks.getRoot(i);o=o||x.getPropertyValue(t,c),n=x.Hooks.injectValue(l,n,o),i=c}if(x.Normalizations.registered[i]&&(n=x.Normalizations.registered[i]("inject",t,n),i=x.Normalizations.registered[i]("name",t)),s=x.Names.prefixCheck(i)[0],8>=h)try{t.style[s]=n}catch(t){y.debug&&console.log("Browser does not support ["+n+"] for ["+s+"]")}else a(t)&&a(t).isSVG&&x.Names.SVGAttribute(i)?t.setAttribute(i,n):t.style[s]=n;y.debug>=2&&console.log("Set "+i+" ("+s+"): "+n)}return[s,n]},flushTransformCache:function(t){function e(e){return parseFloat(x.getPropertyValue(t,e))}var i="";if((h||y.State.isAndroid&&!y.State.isChrome)&&a(t).isSVG){var n={translate:[e("translateX"),e("translateY")],skewX:[e("skewX")],skewY:[e("skewY")],scale:1!==e("scale")?[e("scale"),e("scale")]:[e("scaleX"),e("scaleY")],rotate:[e("rotateZ"),0,0]};u.each(a(t).transformCache,function(t){/^translate/i.test(t)?t="translate":/^scale/i.test(t)?t="scale":/^rotate/i.test(t)&&(t="rotate"),n[t]&&(i+=t+"("+n[t].join(" ")+") ",delete n[t])})}else{var o,r;u.each(a(t).transformCache,function(e){return o=a(t).transformCache[e],"transformPerspective"===e?(r=o,!0):(9===h&&"rotateZ"===e&&(e="rotate"),void(i+=e+o+" "))}),r&&(i="perspective"+r+" "+i)}x.setPropertyValue(t,"transform",i)}};x.Hooks.register(),x.Normalizations.register(),y.hook=function(t,e,i){var r=n;return t=o(t),u.each(t,function(t,o){if(a(o)===n&&y.init(o),i===n)r===n&&(r=y.CSS.getPropertyValue(o,e));else{var s=y.CSS.setPropertyValue(o,e,i);"transform"===s[0]&&y.CSS.flushTransformCache(o),r=s}}),r};var w=function(){function t(){return r?M.promise||null:d}var r,d,h,p,m,v,b=arguments[0]&&(arguments[0].p||u.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||f.isString(arguments[0].properties));if(f.isWrapped(this)?(r=!1,h=0,p=this,d=this):(r=!0,h=1,p=b?arguments[0].elements||arguments[0].e:arguments[0]),p=o(p)){b?(m=arguments[0].properties||arguments[0].p,v=arguments[0].options||arguments[0].o):(m=arguments[h],v=arguments[h+1]);var k=p.length,C=0;if(!/^(stop|finish)$/i.test(m)&&!u.isPlainObject(v)){v={};for(var S=h+1;S<arguments.length;S++)f.isArray(arguments[S])||!/^(fast|normal|slow)$/i.test(arguments[S])&&!/^\d/.test(arguments[S])?f.isString(arguments[S])||f.isArray(arguments[S])?v.easing=arguments[S]:f.isFunction(arguments[S])&&(v.complete=arguments[S]):v.duration=arguments[S]}var T,M={promise:null,resolver:null,rejecter:null};switch(r&&y.Promise&&(M.promise=new y.Promise(function(t,e){M.resolver=t,M.rejecter=e})),m){case"scroll":T="scroll";break;case"reverse":T="reverse";break;case"finish":case"stop":u.each(p,function(t,e){a(e)&&a(e).delayTimer&&(clearTimeout(a(e).delayTimer.setTimeout),a(e).delayTimer.next&&a(e).delayTimer.next(),delete a(e).delayTimer)});var I=[];return u.each(y.State.calls,function(t,e){e&&u.each(e[1],function(i,o){var r=v===n?"":v;return!0!==r&&e[2].queue!==r&&(v!==n||!1!==e[2].queue)||void u.each(p,function(i,n){n===o&&((!0===v||f.isString(v))&&(u.each(u.queue(n,f.isString(v)?v:""),function(t,e){f.isFunction(e)&&e(null,!0)}),u.queue(n,f.isString(v)?v:"",[])),"stop"===m?(a(n)&&a(n).tweensContainer&&!1!==r&&u.each(a(n).tweensContainer,function(t,e){e.endValue=e.currentValue}),I.push(t)):"finish"===m&&(e[2].duration=1))})})}),"stop"===m&&(u.each(I,function(t,e){c(e,!0)}),M.promise&&M.resolver(p)),t();default:if(!u.isPlainObject(m)||f.isEmptyObject(m)){if(f.isString(m)&&y.Redirects[m]){var P=(_=u.extend({},v)).duration,A=_.delay||0;return!0===_.backwards&&(p=u.extend(!0,[],p).reverse()),u.each(p,function(t,e){parseFloat(_.stagger)?_.delay=A+parseFloat(_.stagger)*t:f.isFunction(_.stagger)&&(_.delay=A+_.stagger.call(e,t,k)),_.drag&&(_.duration=parseFloat(P)||(/^(callout|transition)/.test(m)?1e3:g),_.duration=Math.max(_.duration*(_.backwards?1-t/k:(t+1)/k),.75*_.duration,200)),y.Redirects[m].call(e,e,_||{},t,k,p,M.promise?M:n)}),t()}var D="Velocity: First argument ("+m+") was not a property map, a known action, or a registered redirect. Aborting.";return M.promise?M.rejecter(new Error(D)):console.log(D),t()}T="start"}var E,_,O={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPx:null,vwToPx:null,vhToPx:null},L=[];if(u.each(p,function(t,o){f.isNode(o)&&function(){function t(t){function h(t,e){var i=n,o=n,a=n;return f.isArray(t)?(i=t[0],!f.isArray(t[1])&&/^[\d-]/.test(t[1])||f.isFunction(t[1])||x.RegEx.isHex.test(t[1])?a=t[1]:(f.isString(t[1])&&!x.RegEx.isHex.test(t[1])||f.isArray(t[1]))&&(o=e?t[1]:s(t[1],c.duration),t[2]!==n&&(a=t[2]))):i=t,e||(o=o||c.easing),f.isFunction(i)&&(i=i.call(r,C,k)),f.isFunction(a)&&(a=a.call(r,C,k)),[i||0,o,a]}function g(t,e){var i,n;return n=(e||"0").toString().toLowerCase().replace(/[%A-z]+$/,function(t){return i=t,""}),i||(i=x.Values.getUnitType(t)),[n,i]}function b(){var t={myParent:r.parentNode||i.body,position:x.getPropertyValue(r,"position"),fontSize:x.getPropertyValue(r,"fontSize")},n=t.position===O.lastPosition&&t.myParent===O.lastParent,o=t.fontSize===O.lastFontSize;O.lastParent=t.myParent,O.lastPosition=t.position,O.lastFontSize=t.fontSize;var s={};if(o&&n)s.emToPx=O.lastEmToPx,s.percentToPxWidth=O.lastPercentToPxWidth,s.percentToPxHeight=O.lastPercentToPxHeight;else{var l=a(r).isSVG?i.createElementNS("http://www.w3.org/2000/svg","rect"):i.createElement("div");y.init(l),t.myParent.appendChild(l),u.each(["overflow","overflowX","overflowY"],function(t,e){y.CSS.setPropertyValue(l,e,"hidden")}),y.CSS.setPropertyValue(l,"position",t.position),y.CSS.setPropertyValue(l,"fontSize",t.fontSize),y.CSS.setPropertyValue(l,"boxSizing","content-box"),u.each(["minWidth","maxWidth","width","minHeight","maxHeight","height"],function(t,e){y.CSS.setPropertyValue(l,e,"100%")}),y.CSS.setPropertyValue(l,"paddingLeft","100em"),s.percentToPxWidth=O.lastPercentToPxWidth=(parseFloat(x.getPropertyValue(l,"width",null,!0))||1)/100,s.percentToPxHeight=O.lastPercentToPxHeight=(parseFloat(x.getPropertyValue(l,"height",null,!0))||1)/100,s.emToPx=O.lastEmToPx=(parseFloat(x.getPropertyValue(l,"paddingLeft"))||1)/100,t.myParent.removeChild(l)}return null===O.remToPx&&(O.remToPx=parseFloat(x.getPropertyValue(i.body,"fontSize"))||16),null===O.vwToPx&&(O.vwToPx=parseFloat(e.innerWidth)/100,O.vhToPx=parseFloat(e.innerHeight)/100),s.remToPx=O.remToPx,s.vwToPx=O.vwToPx,s.vhToPx=O.vhToPx,y.debug>=1&&console.log("Unit ratios: "+JSON.stringify(s),r),s}if(c.begin&&0===C)try{c.begin.call(p,p)}catch(t){setTimeout(function(){throw t},1)}if("scroll"===T){var w,S,I,P=/^x$/i.test(c.axis)?"Left":"Top",A=parseFloat(c.offset)||0;c.container?f.isWrapped(c.container)||f.isNode(c.container)?(c.container=c.container[0]||c.container,I=(w=c.container["scroll"+P])+u(r).position()[P.toLowerCase()]+A):c.container=null:(w=y.State.scrollAnchor[y.State["scrollProperty"+P]],S=y.State.scrollAnchor[y.State["scrollProperty"+("Left"===P?"Top":"Left")]],I=u(r).offset()[P.toLowerCase()]+A),d={scroll:{rootPropertyValue:!1,startValue:w,currentValue:w,endValue:I,unitType:"",easing:c.easing,scrollData:{container:c.container,direction:P,alternateValue:S}},element:r},y.debug&&console.log("tweensContainer (scroll): ",d.scroll,r)}else if("reverse"===T){if(!a(r).tweensContainer)return void u.dequeue(r,c.queue);"none"===a(r).opts.display&&(a(r).opts.display="auto"),"hidden"===a(r).opts.visibility&&(a(r).opts.visibility="visible"),a(r).opts.loop=!1,a(r).opts.begin=null,a(r).opts.complete=null,v.easing||delete c.easing,v.duration||delete c.duration,c=u.extend({},a(r).opts,c);var D=u.extend(!0,{},a(r).tweensContainer);for(var E in D)if("element"!==E){var _=D[E].startValue;D[E].startValue=D[E].currentValue=D[E].endValue,D[E].endValue=_,f.isEmptyObject(v)||(D[E].easing=c.easing),y.debug&&console.log("reverse tweensContainer ("+E+"): "+JSON.stringify(D[E]),r)}d=D}else if("start"===T){a(r).tweensContainer&&!0===a(r).isAnimating&&(D=a(r).tweensContainer),u.each(m,function(t,e){if(RegExp("^"+x.Lists.colors.join("$|^")+"$").test(t)){var i=h(e,!0),o=i[0],a=i[1],r=i[2];if(x.RegEx.isHex.test(o)){for(var s=["Red","Green","Blue"],l=x.Values.hexToRgb(o),c=r?x.Values.hexToRgb(r):n,u=0;u<s.length;u++){var d=[l[u]];a&&d.push(a),c!==n&&d.push(c[u]),m[t+s[u]]=d}delete m[t]}}});for(var R in m){var F=h(m[R]),V=F[0],W=F[1],z=F[2];R=x.Names.camelCase(R);var H=x.Hooks.getRoot(R),N=!1;if(a(r).isSVG||"tween"===H||!1!==x.Names.prefixCheck(H)[1]||x.Normalizations.registered[H]!==n){(c.display!==n&&null!==c.display&&"none"!==c.display||c.visibility!==n&&"hidden"!==c.visibility)&&/opacity|filter/.test(R)&&!z&&0!==V&&(z=0),c._cacheValues&&D&&D[R]?(z===n&&(z=D[R].endValue+D[R].unitType),N=a(r).rootPropertyValueCache[H]):x.Hooks.registered[R]?z===n?(N=x.getPropertyValue(r,H),z=x.getPropertyValue(r,R,N)):N=x.Hooks.templates[H][1]:z===n&&(z=x.getPropertyValue(r,R));var B,Y,j,$=!1;if(z=(B=g(R,z))[0],j=B[1],V=(B=g(R,V))[0].replace(/^([+-\/*])=/,function(t,e){return $=e,""}),Y=B[1],z=parseFloat(z)||0,V=parseFloat(V)||0,"%"===Y&&(/^(fontSize|lineHeight)$/.test(R)?(V/=100,Y="em"):/^scale/.test(R)?(V/=100,Y=""):/(Red|Green|Blue)$/i.test(R)&&(V=V/100*255,Y="")),/[\/*]/.test($))Y=j;else if(j!==Y&&0!==z)if(0===V)Y=j;else{o=o||b();var X=/margin|padding|left|right|width|text|word|letter/i.test(R)||/X$/.test(R)||"x"===R?"x":"y";switch(j){case"%":z*="x"===X?o.percentToPxWidth:o.percentToPxHeight;break;case"px":break;default:z*=o[j+"ToPx"]}switch(Y){case"%":z*=1/("x"===X?o.percentToPxWidth:o.percentToPxHeight);break;case"px":break;default:z*=1/o[Y+"ToPx"]}}switch($){case"+":V=z+V;break;case"-":V=z-V;break;case"*":V*=z;break;case"/":V=z/V}d[R]={rootPropertyValue:N,startValue:z,currentValue:z,endValue:V,unitType:Y,easing:W},y.debug&&console.log("tweensContainer ("+R+"): "+JSON.stringify(d[R]),r)}else y.debug&&console.log("Skipping ["+H+"] due to a lack of browser support.")}d.element=r}d.element&&(x.Values.addClass(r,"velocity-animating"),L.push(d),""===c.queue&&(a(r).tweensContainer=d,a(r).opts=c),a(r).isAnimating=!0,C===k-1?(y.State.calls.push([L,p,c,null,M.resolver]),!1===y.State.isTicking&&(y.State.isTicking=!0,l())):C++)}var o,r=this,c=u.extend({},y.defaults,v),d={};switch(a(r)===n&&y.init(r),parseFloat(c.delay)&&!1!==c.queue&&u.queue(r,c.queue,function(t){y.velocityQueueEntryFlag=!0,a(r).delayTimer={setTimeout:setTimeout(t,parseFloat(c.delay)),next:t}}),c.duration.toString().toLowerCase()){case"fast":c.duration=200;break;case"normal":c.duration=g;break;case"slow":c.duration=600;break;default:c.duration=parseFloat(c.duration)||1}!1!==y.mock&&(!0===y.mock?c.duration=c.delay=1:(c.duration*=parseFloat(y.mock)||1,c.delay*=parseFloat(y.mock)||1)),c.easing=s(c.easing,c.duration),c.begin&&!f.isFunction(c.begin)&&(c.begin=null),c.progress&&!f.isFunction(c.progress)&&(c.progress=null),c.complete&&!f.isFunction(c.complete)&&(c.complete=null),c.display!==n&&null!==c.display&&(c.display=c.display.toString().toLowerCase(),"auto"===c.display&&(c.display=y.CSS.Values.getDisplayType(r))),c.visibility!==n&&null!==c.visibility&&(c.visibility=c.visibility.toString().toLowerCase()),c.mobileHA=c.mobileHA&&y.State.isMobile&&!y.State.isGingerbread,!1===c.queue?c.delay?setTimeout(t,c.delay):t():u.queue(r,c.queue,function(e,i){return!0===i?(M.promise&&M.resolver(p),!0):(y.velocityQueueEntryFlag=!0,void t())}),""!==c.queue&&"fx"!==c.queue||"inprogress"===u.queue(r)[0]||u.dequeue(r)}.call(o)}),(_=u.extend({},y.defaults,v)).loop=parseInt(_.loop),E=2*_.loop-1,_.loop)for(var R=0;E>R;R++){var F={delay:_.delay,progress:_.progress};R===E-1&&(F.display=_.display,F.visibility=_.visibility,F.complete=_.complete),w(p,"reverse",F)}return t()}};(y=u.extend(w,y)).animate=w;var k=e.requestAnimationFrame||p;return y.State.isMobile||i.hidden===n||i.addEventListener("visibilitychange",function(){i.hidden?(k=function(t){return setTimeout(function(){t(!0)},16)},l()):k=e.requestAnimationFrame||p}),t.Velocity=y,t!==e&&(t.fn.velocity=w,t.fn.velocity.defaults=y.defaults),u.each(["Down","Up"],function(t,e){y.Redirects["slide"+e]=function(t,i,o,a,r,s){var l=u.extend({},i),c=l.begin,d=l.complete,h={height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:""},p={};l.display===n&&(l.display="Down"===e?"inline"===y.CSS.Values.getDisplayType(t)?"inline-block":"block":"none"),l.begin=function(){c&&c.call(r,r);for(var i in h){p[i]=t.style[i];var n=y.CSS.getPropertyValue(t,i);h[i]="Down"===e?[n,0]:[0,n]}p.overflow=t.style.overflow,t.style.overflow="hidden"},l.complete=function(){for(var e in p)t.style[e]=p[e];d&&d.call(r,r),s&&s.resolver(r)},y(t,h,l)}}),u.each(["In","Out"],function(t,e){y.Redirects["fade"+e]=function(t,i,o,a,r,s){var l=u.extend({},i),c={opacity:"In"===e?1:0},d=l.complete;l.complete=o!==a-1?l.begin=null:function(){d&&d.call(r,r),s&&s.resolver(r)},l.display===n&&(l.display="In"===e?"auto":"none"),y(this,c,l)}}),y}jQuery.fn.velocity=jQuery.fn.animate}(window.jQuery||window.Zepto||window,window,document)})),function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).Chart=t()}}(function(){return function t(e,i,n){function o(r,s){if(!i[r]){if(!e[r]){var l="function"==typeof require&&require;if(!s&&l)return l(r,!0);if(a)return a(r,!0);var c=new Error("Cannot find module '"+r+"'");throw c.code="MODULE_NOT_FOUND",c}var u=i[r]={exports:{}};e[r][0].call(u.exports,function(t){var i=e[r][1][t];return o(i||t)},u,u.exports,t,e,i,n)}return i[r].exports}for(var a="function"==typeof require&&require,r=0;r<n.length;r++)o(n[r]);return o}({1:[function(t,e,i){},{}],2:[function(t,e,i){var n=t(6);function o(t){if(t){var e=[0,0,0],i=1,o=t.match(/^#([a-fA-F0-9]{3})$/);if(o){o=o[1];for(var a=0;a<e.length;a++)e[a]=parseInt(o[a]+o[a],16)}else if(o=t.match(/^#([a-fA-F0-9]{6})$/)){o=o[1];for(a=0;a<e.length;a++)e[a]=parseInt(o.slice(2*a,2*a+2),16)}else if(o=t.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/)){for(a=0;a<e.length;a++)e[a]=parseInt(o[a+1]);i=parseFloat(o[4])}else if(o=t.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/)){for(a=0;a<e.length;a++)e[a]=Math.round(2.55*parseFloat(o[a+1]));i=parseFloat(o[4])}else if(o=t.match(/(\w+)/)){if("transparent"==o[1])return[0,0,0,0];if(!(e=n[o[1]]))return}for(a=0;a<e.length;a++)e[a]=u(e[a],0,255);return i=i||0==i?u(i,0,1):1,e[3]=i,e}}function a(t){if(t){var e=t.match(/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);if(e){var i=parseFloat(e[4]);return[u(parseInt(e[1]),0,360),u(parseFloat(e[2]),0,100),u(parseFloat(e[3]),0,100),u(isNaN(i)?1:i,0,1)]}}}function r(t){if(t){var e=t.match(/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);if(e){var i=parseFloat(e[4]);return[u(parseInt(e[1]),0,360),u(parseFloat(e[2]),0,100),u(parseFloat(e[3]),0,100),u(isNaN(i)?1:i,0,1)]}}}function s(t,e){return void 0===e&&(e=void 0!==t[3]?t[3]:1),"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+e+")"}function l(t,e){return"rgba("+Math.round(t[0]/255*100)+"%, "+Math.round(t[1]/255*100)+"%, "+Math.round(t[2]/255*100)+"%, "+(e||t[3]||1)+")"}function c(t,e){return void 0===e&&(e=void 0!==t[3]?t[3]:1),"hsla("+t[0]+", "+t[1]+"%, "+t[2]+"%, "+e+")"}function u(t,e,i){return Math.min(Math.max(e,t),i)}function d(t){var e=t.toString(16).toUpperCase();return e.length<2?"0"+e:e}e.exports={getRgba:o,getHsla:a,getRgb:function(t){var e=o(t);return e&&e.slice(0,3)},getHsl:function(t){var e=a(t);return e&&e.slice(0,3)},getHwb:r,getAlpha:function(t){var e=o(t);if(e)return e[3];if(e=a(t))return e[3];if(e=r(t))return e[3]},hexString:function(t){return"#"+d(t[0])+d(t[1])+d(t[2])},rgbString:function(t,e){if(e<1||t[3]&&t[3]<1)return s(t,e);return"rgb("+t[0]+", "+t[1]+", "+t[2]+")"},rgbaString:s,percentString:function(t,e){if(e<1||t[3]&&t[3]<1)return l(t,e);var i=Math.round(t[0]/255*100),n=Math.round(t[1]/255*100),o=Math.round(t[2]/255*100);return"rgb("+i+"%, "+n+"%, "+o+"%)"},percentaString:l,hslString:function(t,e){if(e<1||t[3]&&t[3]<1)return c(t,e);return"hsl("+t[0]+", "+t[1]+"%, "+t[2]+"%)"},hslaString:c,hwbString:function(t,e){void 0===e&&(e=void 0!==t[3]?t[3]:1);return"hwb("+t[0]+", "+t[1]+"%, "+t[2]+"%"+(void 0!==e&&1!==e?", "+e:"")+")"},keyword:function(t){return h[t.slice(0,3)]}};var h={};for(var p in n)h[n[p]]=p},{6:6}],3:[function(t,e,i){var n=t(5),o=t(2),a=function(t){return t instanceof a?t:this instanceof a?(this.valid=!1,this.values={rgb:[0,0,0],hsl:[0,0,0],hsv:[0,0,0],hwb:[0,0,0],cmyk:[0,0,0,0],alpha:1},void("string"==typeof t?(e=o.getRgba(t))?this.setValues("rgb",e):(e=o.getHsla(t))?this.setValues("hsl",e):(e=o.getHwb(t))&&this.setValues("hwb",e):"object"==typeof t&&(void 0!==(e=t).r||void 0!==e.red?this.setValues("rgb",e):void 0!==e.l||void 0!==e.lightness?this.setValues("hsl",e):void 0!==e.v||void 0!==e.value?this.setValues("hsv",e):void 0!==e.w||void 0!==e.whiteness?this.setValues("hwb",e):void 0===e.c&&void 0===e.cyan||this.setValues("cmyk",e)))):new a(t);var e};a.prototype={isValid:function(){return this.valid},rgb:function(){return this.setSpace("rgb",arguments)},hsl:function(){return this.setSpace("hsl",arguments)},hsv:function(){return this.setSpace("hsv",arguments)},hwb:function(){return this.setSpace("hwb",arguments)},cmyk:function(){return this.setSpace("cmyk",arguments)},rgbArray:function(){return this.values.rgb},hslArray:function(){return this.values.hsl},hsvArray:function(){return this.values.hsv},hwbArray:function(){var t=this.values;return 1!==t.alpha?t.hwb.concat([t.alpha]):t.hwb},cmykArray:function(){return this.values.cmyk},rgbaArray:function(){var t=this.values;return t.rgb.concat([t.alpha])},hslaArray:function(){var t=this.values;return t.hsl.concat([t.alpha])},alpha:function(t){return void 0===t?this.values.alpha:(this.setValues("alpha",t),this)},red:function(t){return this.setChannel("rgb",0,t)},green:function(t){return this.setChannel("rgb",1,t)},blue:function(t){return this.setChannel("rgb",2,t)},hue:function(t){return t&&(t=(t%=360)<0?360+t:t),this.setChannel("hsl",0,t)},saturation:function(t){return this.setChannel("hsl",1,t)},lightness:function(t){return this.setChannel("hsl",2,t)},saturationv:function(t){return this.setChannel("hsv",1,t)},whiteness:function(t){return this.setChannel("hwb",1,t)},blackness:function(t){return this.setChannel("hwb",2,t)},value:function(t){return this.setChannel("hsv",2,t)},cyan:function(t){return this.setChannel("cmyk",0,t)},magenta:function(t){return this.setChannel("cmyk",1,t)},yellow:function(t){return this.setChannel("cmyk",2,t)},black:function(t){return this.setChannel("cmyk",3,t)},hexString:function(){return o.hexString(this.values.rgb)},rgbString:function(){return o.rgbString(this.values.rgb,this.values.alpha)},rgbaString:function(){return o.rgbaString(this.values.rgb,this.values.alpha)},percentString:function(){return o.percentString(this.values.rgb,this.values.alpha)},hslString:function(){return o.hslString(this.values.hsl,this.values.alpha)},hslaString:function(){return o.hslaString(this.values.hsl,this.values.alpha)},hwbString:function(){return o.hwbString(this.values.hwb,this.values.alpha)},keyword:function(){return o.keyword(this.values.rgb,this.values.alpha)},rgbNumber:function(){var t=this.values.rgb;return t[0]<<16|t[1]<<8|t[2]},luminosity:function(){for(var t=this.values.rgb,e=[],i=0;i<t.length;i++){var n=t[i]/255;e[i]=n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4)}return.2126*e[0]+.7152*e[1]+.0722*e[2]},contrast:function(t){var e=this.luminosity(),i=t.luminosity();return e>i?(e+.05)/(i+.05):(i+.05)/(e+.05)},level:function(t){var e=this.contrast(t);return e>=7.1?"AAA":e>=4.5?"AA":""},dark:function(){var t=this.values.rgb;return(299*t[0]+587*t[1]+114*t[2])/1e3<128},light:function(){return!this.dark()},negate:function(){for(var t=[],e=0;e<3;e++)t[e]=255-this.values.rgb[e];return this.setValues("rgb",t),this},lighten:function(t){var e=this.values.hsl;return e[2]+=e[2]*t,this.setValues("hsl",e),this},darken:function(t){var e=this.values.hsl;return e[2]-=e[2]*t,this.setValues("hsl",e),this},saturate:function(t){var e=this.values.hsl;return e[1]+=e[1]*t,this.setValues("hsl",e),this},desaturate:function(t){var e=this.values.hsl;return e[1]-=e[1]*t,this.setValues("hsl",e),this},whiten:function(t){var e=this.values.hwb;return e[1]+=e[1]*t,this.setValues("hwb",e),this},blacken:function(t){var e=this.values.hwb;return e[2]+=e[2]*t,this.setValues("hwb",e),this},greyscale:function(){var t=this.values.rgb,e=.3*t[0]+.59*t[1]+.11*t[2];return this.setValues("rgb",[e,e,e]),this},clearer:function(t){var e=this.values.alpha;return this.setValues("alpha",e-e*t),this},opaquer:function(t){var e=this.values.alpha;return this.setValues("alpha",e+e*t),this},rotate:function(t){var e=this.values.hsl,i=(e[0]+t)%360;return e[0]=i<0?360+i:i,this.setValues("hsl",e),this},mix:function(t,e){var i=t,n=void 0===e?.5:e,o=2*n-1,a=this.alpha()-i.alpha(),r=((o*a==-1?o:(o+a)/(1+o*a))+1)/2,s=1-r;return this.rgb(r*this.red()+s*i.red(),r*this.green()+s*i.green(),r*this.blue()+s*i.blue()).alpha(this.alpha()*n+i.alpha()*(1-n))},toJSON:function(){return this.rgb()},clone:function(){var t,e,i=new a,n=this.values,o=i.values;for(var r in n)n.hasOwnProperty(r)&&(t=n[r],"[object Array]"===(e={}.toString.call(t))?o[r]=t.slice(0):"[object Number]"===e?o[r]=t:console.error("unexpected color value:",t));return i}},a.prototype.spaces={rgb:["red","green","blue"],hsl:["hue","saturation","lightness"],hsv:["hue","saturation","value"],hwb:["hue","whiteness","blackness"],cmyk:["cyan","magenta","yellow","black"]},a.prototype.maxes={rgb:[255,255,255],hsl:[360,100,100],hsv:[360,100,100],hwb:[360,100,100],cmyk:[100,100,100,100]},a.prototype.getValues=function(t){for(var e=this.values,i={},n=0;n<t.length;n++)i[t.charAt(n)]=e[t][n];return 1!==e.alpha&&(i.a=e.alpha),i},a.prototype.setValues=function(t,e){var i,o,a=this.values,r=this.spaces,s=this.maxes,l=1;if(this.valid=!0,"alpha"===t)l=e;else if(e.length)a[t]=e.slice(0,t.length),l=e[t.length];else if(void 0!==e[t.charAt(0)]){for(i=0;i<t.length;i++)a[t][i]=e[t.charAt(i)];l=e.a}else if(void 0!==e[r[t][0]]){var c=r[t];for(i=0;i<t.length;i++)a[t][i]=e[c[i]];l=e.alpha}if(a.alpha=Math.max(0,Math.min(1,void 0===l?a.alpha:l)),"alpha"===t)return!1;for(i=0;i<t.length;i++)o=Math.max(0,Math.min(s[t][i],a[t][i])),a[t][i]=Math.round(o);for(var u in r)u!==t&&(a[u]=n[t][u](a[t]));return!0},a.prototype.setSpace=function(t,e){var i=e[0];return void 0===i?this.getValues(t):("number"==typeof i&&(i=Array.prototype.slice.call(e)),this.setValues(t,i),this)},a.prototype.setChannel=function(t,e,i){var n=this.values[t];return void 0===i?n[e]:i===n[e]?this:(n[e]=i,this.setValues(t,n),this)},"undefined"!=typeof window&&(window.Color=a),e.exports=a},{2:2,5:5}],4:[function(t,e,i){function n(t){var e,i,n=t[0]/255,o=t[1]/255,a=t[2]/255,r=Math.min(n,o,a),s=Math.max(n,o,a),l=s-r;return s==r?e=0:n==s?e=(o-a)/l:o==s?e=2+(a-n)/l:a==s&&(e=4+(n-o)/l),(e=Math.min(60*e,360))<0&&(e+=360),i=(r+s)/2,[e,100*(s==r?0:i<=.5?l/(s+r):l/(2-s-r)),100*i]}function o(t){var e,i,n=t[0],o=t[1],a=t[2],r=Math.min(n,o,a),s=Math.max(n,o,a),l=s-r;return i=0==s?0:l/s*1e3/10,s==r?e=0:n==s?e=(o-a)/l:o==s?e=2+(a-n)/l:a==s&&(e=4+(n-o)/l),(e=Math.min(60*e,360))<0&&(e+=360),[e,i,s/255*1e3/10]}function a(t){var e=t[0],i=t[1],o=t[2];return[n(t)[0],100*(1/255*Math.min(e,Math.min(i,o))),100*(o=1-1/255*Math.max(e,Math.max(i,o)))]}function s(t){var e,i=t[0]/255,n=t[1]/255,o=t[2]/255;return[100*((1-i-(e=Math.min(1-i,1-n,1-o)))/(1-e)||0),100*((1-n-e)/(1-e)||0),100*((1-o-e)/(1-e)||0),100*e]}function l(t){return T[JSON.stringify(t)]}function c(t){var e=t[0]/255,i=t[1]/255,n=t[2]/255;return[100*(.4124*(e=e>.04045?Math.pow((e+.055)/1.055,2.4):e/12.92)+.3576*(i=i>.04045?Math.pow((i+.055)/1.055,2.4):i/12.92)+.1805*(n=n>.04045?Math.pow((n+.055)/1.055,2.4):n/12.92)),100*(.2126*e+.7152*i+.0722*n),100*(.0193*e+.1192*i+.9505*n)]}function u(t){var e=c(t),i=e[0],n=e[1],o=e[2];return n/=100,o/=108.883,i=(i/=95.047)>.008856?Math.pow(i,1/3):7.787*i+16/116,[116*(n=n>.008856?Math.pow(n,1/3):7.787*n+16/116)-16,500*(i-n),200*(n-(o=o>.008856?Math.pow(o,1/3):7.787*o+16/116))]}function d(t){var e,i,n,o,a,r=t[0]/360,s=t[1]/100,l=t[2]/100;if(0==s)return[a=255*l,a,a];e=2*l-(i=l<.5?l*(1+s):l+s-l*s),o=[0,0,0];for(var c=0;c<3;c++)(n=r+1/3*-(c-1))<0&&n++,n>1&&n--,a=6*n<1?e+6*(i-e)*n:2*n<1?i:3*n<2?e+(i-e)*(2/3-n)*6:e,o[c]=255*a;return o}function h(t){var e=t[0]/60,i=t[1]/100,n=t[2]/100,o=Math.floor(e)%6,a=e-Math.floor(e),r=255*n*(1-i),s=255*n*(1-i*a),l=255*n*(1-i*(1-a));n*=255;switch(o){case 0:return[n,l,r];case 1:return[s,n,r];case 2:return[r,n,l];case 3:return[r,s,n];case 4:return[l,r,n];case 5:return[n,r,s]}}function p(t){var e,i,n,o,a=t[0]/360,s=t[1]/100,l=t[2]/100,c=s+l;switch(c>1&&(s/=c,l/=c),i=1-l,n=6*a-(e=Math.floor(6*a)),0!=(1&e)&&(n=1-n),o=s+n*(i-s),e){default:case 6:case 0:r=i,g=o,b=s;break;case 1:r=o,g=i,b=s;break;case 2:r=s,g=i,b=o;break;case 3:r=s,g=o,b=i;break;case 4:r=o,g=s,b=i;break;case 5:r=i,g=s,b=o}return[255*r,255*g,255*b]}function f(t){var e=t[0]/100,i=t[1]/100,n=t[2]/100,o=t[3]/100;return[255*(1-Math.min(1,e*(1-o)+o)),255*(1-Math.min(1,i*(1-o)+o)),255*(1-Math.min(1,n*(1-o)+o))]}function m(t){var e,i,n,o=t[0]/100,a=t[1]/100,r=t[2]/100;return i=-.9689*o+1.8758*a+.0415*r,n=.0557*o+-.204*a+1.057*r,e=(e=3.2406*o+-1.5372*a+-.4986*r)>.0031308?1.055*Math.pow(e,1/2.4)-.055:e*=12.92,i=i>.0031308?1.055*Math.pow(i,1/2.4)-.055:i*=12.92,n=n>.0031308?1.055*Math.pow(n,1/2.4)-.055:n*=12.92,[255*(e=Math.min(Math.max(0,e),1)),255*(i=Math.min(Math.max(0,i),1)),255*(n=Math.min(Math.max(0,n),1))]}function v(t){var e=t[0],i=t[1],n=t[2];return i/=100,n/=108.883,e=(e/=95.047)>.008856?Math.pow(e,1/3):7.787*e+16/116,[116*(i=i>.008856?Math.pow(i,1/3):7.787*i+16/116)-16,500*(e-i),200*(i-(n=n>.008856?Math.pow(n,1/3):7.787*n+16/116))]}function y(t){var e,i,n,o,a=t[0],r=t[1],s=t[2];return a<=8?o=(i=100*a/903.3)/100*7.787+16/116:(i=100*Math.pow((a+16)/116,3),o=Math.pow(i/100,1/3)),[e=e/95.047<=.008856?e=95.047*(r/500+o-16/116)/7.787:95.047*Math.pow(r/500+o,3),i,n=n/108.883<=.008859?n=108.883*(o-s/200-16/116)/7.787:108.883*Math.pow(o-s/200,3)]}function x(t){var e,i=t[0],n=t[1],o=t[2];return(e=360*Math.atan2(o,n)/2/Math.PI)<0&&(e+=360),[i,Math.sqrt(n*n+o*o),e]}function w(t){return m(y(t))}function k(t){var e,i=t[0],n=t[1];return e=t[2]/360*2*Math.PI,[i,n*Math.cos(e),n*Math.sin(e)]}function C(t){return S[t]}e.exports={rgb2hsl:n,rgb2hsv:o,rgb2hwb:a,rgb2cmyk:s,rgb2keyword:l,rgb2xyz:c,rgb2lab:u,rgb2lch:function(t){return x(u(t))},hsl2rgb:d,hsl2hsv:function(t){var e=t[0],i=t[1]/100,n=t[2]/100;if(0===n)return[0,0,0];return[e,100*(2*(i*=(n*=2)<=1?n:2-n)/(n+i)),100*((n+i)/2)]},hsl2hwb:function(t){return a(d(t))},hsl2cmyk:function(t){return s(d(t))},hsl2keyword:function(t){return l(d(t))},hsv2rgb:h,hsv2hsl:function(t){var e,i,n=t[0],o=t[1]/100,a=t[2]/100;return e=o*a,[n,100*(e=(e/=(i=(2-o)*a)<=1?i:2-i)||0),100*(i/=2)]},hsv2hwb:function(t){return a(h(t))},hsv2cmyk:function(t){return s(h(t))},hsv2keyword:function(t){return l(h(t))},hwb2rgb:p,hwb2hsl:function(t){return n(p(t))},hwb2hsv:function(t){return o(p(t))},hwb2cmyk:function(t){return s(p(t))},hwb2keyword:function(t){return l(p(t))},cmyk2rgb:f,cmyk2hsl:function(t){return n(f(t))},cmyk2hsv:function(t){return o(f(t))},cmyk2hwb:function(t){return a(f(t))},cmyk2keyword:function(t){return l(f(t))},keyword2rgb:C,keyword2hsl:function(t){return n(C(t))},keyword2hsv:function(t){return o(C(t))},keyword2hwb:function(t){return a(C(t))},keyword2cmyk:function(t){return s(C(t))},keyword2lab:function(t){return u(C(t))},keyword2xyz:function(t){return c(C(t))},xyz2rgb:m,xyz2lab:v,xyz2lch:function(t){return x(v(t))},lab2xyz:y,lab2rgb:w,lab2lch:x,lch2lab:k,lch2xyz:function(t){return y(k(t))},lch2rgb:function(t){return w(k(t))}};var S={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},T={};for(var M in S)T[JSON.stringify(S[M])]=M},{}],5:[function(t,e,i){var n=t(4),o=function(){return new c};for(var a in n){o[a+"Raw"]=function(t){return function(e){return"number"==typeof e&&(e=Array.prototype.slice.call(arguments)),n[t](e)}}(a);var r=/(\w+)2(\w+)/.exec(a),s=r[1],l=r[2];(o[s]=o[s]||{})[l]=o[a]=function(t){return function(e){"number"==typeof e&&(e=Array.prototype.slice.call(arguments));var i=n[t](e);if("string"==typeof i||void 0===i)return i;for(var o=0;o<i.length;o++)i[o]=Math.round(i[o]);return i}}(a)}var c=function(){this.convs={}};c.prototype.routeSpace=function(t,e){var i=e[0];return void 0===i?this.getValues(t):("number"==typeof i&&(i=Array.prototype.slice.call(e)),this.setValues(t,i))},c.prototype.setValues=function(t,e){return this.space=t,this.convs={},this.convs[t]=e,this},c.prototype.getValues=function(t){var e=this.convs[t];if(!e){var i=this.space,n=this.convs[i];e=o[i][t](n),this.convs[t]=e}return e},["rgb","hsl","hsv","cmyk","keyword"].forEach(function(t){c.prototype[t]=function(e){return this.routeSpace(t,arguments)}}),e.exports=o},{4:4}],6:[function(t,e,i){e.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},{}],7:[function(t,e,i){var n=t(28)();t(26)(n),t(40)(n),t(22)(n),t(25)(n),t(30)(n),t(21)(n),t(23)(n),t(24)(n),t(29)(n),t(32)(n),t(33)(n),t(31)(n),t(27)(n),t(34)(n),t(35)(n),t(36)(n),t(37)(n),t(38)(n),t(46)(n),t(44)(n),t(45)(n),t(47)(n),t(48)(n),t(49)(n),t(15)(n),t(16)(n),t(17)(n),t(18)(n),t(19)(n),t(20)(n),t(8)(n),t(9)(n),t(10)(n),t(11)(n),t(12)(n),t(13)(n),t(14)(n);var o=[];o.push(t(41)(n),t(42)(n),t(43)(n)),n.plugins.register(o),e.exports=n,"undefined"!=typeof window&&(window.Chart=n)},{10:10,11:11,12:12,13:13,14:14,15:15,16:16,17:17,18:18,19:19,20:20,21:21,22:22,23:23,24:24,25:25,26:26,27:27,28:28,29:29,30:30,31:31,32:32,33:33,34:34,35:35,36:36,37:37,38:38,40:40,41:41,42:42,43:43,44:44,45:45,46:46,47:47,48:48,49:49,8:8,9:9}],8:[function(t,e,i){"use strict";e.exports=function(t){t.Bar=function(e,i){return i.type="bar",new t(e,i)}}},{}],9:[function(t,e,i){"use strict";e.exports=function(t){t.Bubble=function(e,i){return i.type="bubble",new t(e,i)}}},{}],10:[function(t,e,i){"use strict";e.exports=function(t){t.Doughnut=function(e,i){return i.type="doughnut",new t(e,i)}}},{}],11:[function(t,e,i){"use strict";e.exports=function(t){t.Line=function(e,i){return i.type="line",new t(e,i)}}},{}],12:[function(t,e,i){"use strict";e.exports=function(t){t.PolarArea=function(e,i){return i.type="polarArea",new t(e,i)}}},{}],13:[function(t,e,i){"use strict";e.exports=function(t){t.Radar=function(e,i){return i.type="radar",new t(e,i)}}},{}],14:[function(t,e,i){"use strict";e.exports=function(t){t.defaults.scatter={hover:{mode:"single"},scales:{xAxes:[{type:"linear",position:"bottom",id:"x-axis-1"}],yAxes:[{type:"linear",position:"left",id:"y-axis-1"}]},tooltips:{callbacks:{title:function(){return""},label:function(t){return"("+t.xLabel+", "+t.yLabel+")"}}}},t.controllers.scatter=t.controllers.line,t.Scatter=function(e,i){return i.type="scatter",new t(e,i)}}},{}],15:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers;t.defaults.bar={hover:{mode:"label"},scales:{xAxes:[{type:"category",categoryPercentage:.8,barPercentage:.9,gridLines:{offsetGridLines:!0}}],yAxes:[{type:"linear"}]}},t.controllers.bar=t.DatasetController.extend({dataElementType:t.elements.Rectangle,initialize:function(){var e;t.DatasetController.prototype.initialize.apply(this,arguments),(e=this.getMeta()).stack=this.getDataset().stack,e.bar=!0},update:function(t){var e,i,n=this.getMeta().data;for(this._ruler=this.getRuler(),e=0,i=n.length;e<i;++e)this.updateElement(n[e],e,t)},updateElement:function(t,i,n){var o=this.chart,a=this.getMeta(),r=this.getDataset(),s=t.custom||{},l=o.options.elements.rectangle;t._xScale=this.getScaleForId(a.xAxisID),t._yScale=this.getScaleForId(a.yAxisID),t._datasetIndex=this.index,t._index=i,t._model={datasetLabel:r.label,label:o.data.labels[i],borderSkipped:s.borderSkipped?s.borderSkipped:l.borderSkipped,backgroundColor:s.backgroundColor?s.backgroundColor:e.getValueAtIndexOrDefault(r.backgroundColor,i,l.backgroundColor),borderColor:s.borderColor?s.borderColor:e.getValueAtIndexOrDefault(r.borderColor,i,l.borderColor),borderWidth:s.borderWidth?s.borderWidth:e.getValueAtIndexOrDefault(r.borderWidth,i,l.borderWidth)},this.updateElementGeometry(t,i,n),t.pivot()},updateElementGeometry:function(t,e,i){var n=t._model,o=this.getValueScale(),a=o.getBasePixel(),r=o.isHorizontal(),s=this._ruler||this.getRuler(),l=this.calculateBarValuePixels(this.index,e),c=this.calculateBarIndexPixels(this.index,e,s);n.horizontal=r,n.base=i?a:l.base,n.x=r?i?a:l.head:c.center,n.y=r?c.center:i?a:l.head,n.height=r?c.size:void 0,n.width=r?void 0:c.size},getValueScaleId:function(){return this.getMeta().yAxisID},getIndexScaleId:function(){return this.getMeta().xAxisID},getValueScale:function(){return this.getScaleForId(this.getValueScaleId())},getIndexScale:function(){return this.getScaleForId(this.getIndexScaleId())},getStackCount:function(t){var e,i,n=this.chart,o=this.getIndexScale().options.stacked,a=void 0===t?n.data.datasets.length:t+1,r=[];for(e=0;e<a;++e)(i=n.getDatasetMeta(e)).bar&&n.isDatasetVisible(e)&&(!1===o||!0===o&&-1===r.indexOf(i.stack)||void 0===o&&(void 0===i.stack||-1===r.indexOf(i.stack)))&&r.push(i.stack);return r.length},getStackIndex:function(t){return this.getStackCount(t)-1},getRuler:function(){var t=this.getIndexScale(),i=t.options,n=this.getStackCount(),o=(t.isHorizontal()?t.width:t.height)/t.ticks.length,a=o*i.categoryPercentage,r=a/n,s=r*i.barPercentage;return{stackCount:n,tickSize:o,categorySize:a,categorySpacing:o-a,fullBarSize:r,barSize:s=Math.min(e.getValueOrDefault(i.barThickness,s),e.getValueOrDefault(i.maxBarThickness,1/0)),barSpacing:r-s,scale:t}},calculateBarValuePixels:function(t,e){var i,n,o,a,r,s,l=this.chart,c=this.getMeta(),u=this.getValueScale(),d=l.data.datasets,h=Number(d[t].data[e]),p=u.options.stacked,f=c.stack,m=0;if(p||void 0===p&&void 0!==f)for(i=0;i<t;++i)(n=l.getDatasetMeta(i)).bar&&n.stack===f&&n.controller.getValueScaleId()===u.id&&l.isDatasetVisible(i)&&(o=Number(d[i].data[e]),(h<0&&o<0||h>=0&&o>0)&&(m+=o));return a=u.getPixelForValue(m),{size:s=((r=u.getPixelForValue(m+h))-a)/2,base:a,head:r,center:r+s/2}},calculateBarIndexPixels:function(t,e,i){var n=i.scale,o=this.chart.isCombo,a=this.getStackIndex(t),r=n.getPixelForValue(null,e,t,o),s=i.barSize;return r-=o?i.tickSize/2:0,r+=i.fullBarSize*a,r+=i.categorySpacing/2,{size:s,base:r+=i.barSpacing/2,head:r+s,center:r+s/2}},draw:function(){var t,i=this.chart,n=this.getMeta().data,o=this.getDataset(),a=n.length,r=0;for(e.canvas.clipArea(i.ctx,i.chartArea);r<a;++r)null===(t=o.data[r])||void 0===t||isNaN(t)||n[r].draw();e.canvas.unclipArea(i.ctx)},setHoverStyle:function(t){var i=this.chart.data.datasets[t._datasetIndex],n=t._index,o=t.custom||{},a=t._model;a.backgroundColor=o.hoverBackgroundColor?o.hoverBackgroundColor:e.getValueAtIndexOrDefault(i.hoverBackgroundColor,n,e.getHoverColor(a.backgroundColor)),a.borderColor=o.hoverBorderColor?o.hoverBorderColor:e.getValueAtIndexOrDefault(i.hoverBorderColor,n,e.getHoverColor(a.borderColor)),a.borderWidth=o.hoverBorderWidth?o.hoverBorderWidth:e.getValueAtIndexOrDefault(i.hoverBorderWidth,n,a.borderWidth)},removeHoverStyle:function(t){var i=this.chart.data.datasets[t._datasetIndex],n=t._index,o=t.custom||{},a=t._model,r=this.chart.options.elements.rectangle;a.backgroundColor=o.backgroundColor?o.backgroundColor:e.getValueAtIndexOrDefault(i.backgroundColor,n,r.backgroundColor),a.borderColor=o.borderColor?o.borderColor:e.getValueAtIndexOrDefault(i.borderColor,n,r.borderColor),a.borderWidth=o.borderWidth?o.borderWidth:e.getValueAtIndexOrDefault(i.borderWidth,n,r.borderWidth)}}),t.defaults.horizontalBar={hover:{mode:"label"},scales:{xAxes:[{type:"linear",position:"bottom"}],yAxes:[{position:"left",type:"category",categoryPercentage:.8,barPercentage:.9,gridLines:{offsetGridLines:!0}}]},elements:{rectangle:{borderSkipped:"left"}},tooltips:{callbacks:{title:function(t,e){var i="";return t.length>0&&(t[0].yLabel?i=t[0].yLabel:e.labels.length>0&&t[0].index<e.labels.length&&(i=e.labels[t[0].index])),i},label:function(t,e){return(e.datasets[t.datasetIndex].label||"")+": "+t.xLabel}}}},t.controllers.horizontalBar=t.controllers.bar.extend({getValueScaleId:function(){return this.getMeta().xAxisID},getIndexScaleId:function(){return this.getMeta().yAxisID}})}},{}],16:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers;t.defaults.bubble={hover:{mode:"single"},scales:{xAxes:[{type:"linear",position:"bottom",id:"x-axis-0"}],yAxes:[{type:"linear",position:"left",id:"y-axis-0"}]},tooltips:{callbacks:{title:function(){return""},label:function(t,e){var i=e.datasets[t.datasetIndex].label||"",n=e.datasets[t.datasetIndex].data[t.index];return i+": ("+t.xLabel+", "+t.yLabel+", "+n.r+")"}}}},t.controllers.bubble=t.DatasetController.extend({dataElementType:t.elements.Point,update:function(t){var i=this,n=i.getMeta().data;e.each(n,function(e,n){i.updateElement(e,n,t)})},updateElement:function(i,n,o){var a=this.getMeta(),r=this.getScaleForId(a.xAxisID),s=this.getScaleForId(a.yAxisID),l=i.custom||{},c=this.getDataset(),u=c.data[n],d=this.chart.options.elements.point,h=this.index;e.extend(i,{_xScale:r,_yScale:s,_datasetIndex:h,_index:n,_model:{x:o?r.getPixelForDecimal(.5):r.getPixelForValue("object"==typeof u?u:NaN,n,h,this.chart.isCombo),y:o?s.getBasePixel():s.getPixelForValue(u,n,h),radius:o?0:l.radius?l.radius:this.getRadius(u),hitRadius:l.hitRadius?l.hitRadius:e.getValueAtIndexOrDefault(c.hitRadius,n,d.hitRadius)}}),t.DatasetController.prototype.removeHoverStyle.call(this,i,d);var p=i._model;p.skip=l.skip?l.skip:isNaN(p.x)||isNaN(p.y),i.pivot()},getRadius:function(t){return t.r||this.chart.options.elements.point.radius},setHoverStyle:function(i){t.DatasetController.prototype.setHoverStyle.call(this,i);var n=this.chart.data.datasets[i._datasetIndex],o=i._index,a=i.custom||{};i._model.radius=a.hoverRadius?a.hoverRadius:e.getValueAtIndexOrDefault(n.hoverRadius,o,this.chart.options.elements.point.hoverRadius)+this.getRadius(n.data[o])},removeHoverStyle:function(e){t.DatasetController.prototype.removeHoverStyle.call(this,e,this.chart.options.elements.point);var i=this.chart.data.datasets[e._datasetIndex].data[e._index],n=e.custom||{};e._model.radius=n.radius?n.radius:this.getRadius(i)}})}},{}],17:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers,i=t.defaults;i.doughnut={animation:{animateRotate:!0,animateScale:!1},aspectRatio:1,hover:{mode:"single"},legendCallback:function(t){var e=[];e.push('<ul class="'+t.id+'-legend">');var i=t.data,n=i.datasets,o=i.labels;if(n.length)for(var a=0;a<n[0].data.length;++a)e.push('<li><span style="background-color:'+n[0].backgroundColor[a]+'"></span>'),o[a]&&e.push(o[a]),e.push("</li>");return e.push("</ul>"),e.join("")},legend:{labels:{generateLabels:function(t){var i=t.data;return i.labels.length&&i.datasets.length?i.labels.map(function(n,o){var a=t.getDatasetMeta(0),r=i.datasets[0],s=a.data[o],l=s&&s.custom||{},c=e.getValueAtIndexOrDefault,u=t.options.elements.arc;return{text:n,fillStyle:l.backgroundColor?l.backgroundColor:c(r.backgroundColor,o,u.backgroundColor),strokeStyle:l.borderColor?l.borderColor:c(r.borderColor,o,u.borderColor),lineWidth:l.borderWidth?l.borderWidth:c(r.borderWidth,o,u.borderWidth),hidden:isNaN(r.data[o])||a.data[o].hidden,index:o}}):[]}},onClick:function(t,e){var i,n,o,a=e.index,r=this.chart;for(i=0,n=(r.data.datasets||[]).length;i<n;++i)(o=r.getDatasetMeta(i)).data[a]&&(o.data[a].hidden=!o.data[a].hidden);r.update()}},cutoutPercentage:50,rotation:-.5*Math.PI,circumference:2*Math.PI,tooltips:{callbacks:{title:function(){return""},label:function(t,i){var n=i.labels[t.index],o=": "+i.datasets[t.datasetIndex].data[t.index];return e.isArray(n)?(n=n.slice())[0]+=o:n+=o,n}}}},i.pie=e.clone(i.doughnut),e.extend(i.pie,{cutoutPercentage:0}),t.controllers.doughnut=t.controllers.pie=t.DatasetController.extend({dataElementType:t.elements.Arc,linkScales:e.noop,getRingIndex:function(t){for(var e=0,i=0;i<t;++i)this.chart.isDatasetVisible(i)&&++e;return e},update:function(t){var i=this,n=i.chart,o=n.chartArea,a=n.options,r=a.elements.arc,s=o.right-o.left-r.borderWidth,l=o.bottom-o.top-r.borderWidth,c=Math.min(s,l),u={x:0,y:0},d=i.getMeta(),h=a.cutoutPercentage,p=a.circumference;if(p<2*Math.PI){var f=a.rotation%(2*Math.PI),m=(f+=2*Math.PI*(f>=Math.PI?-1:f<-Math.PI?1:0))+p,g={x:Math.cos(f),y:Math.sin(f)},v={x:Math.cos(m),y:Math.sin(m)},y=f<=0&&0<=m||f<=2*Math.PI&&2*Math.PI<=m,b=f<=.5*Math.PI&&.5*Math.PI<=m||f<=2.5*Math.PI&&2.5*Math.PI<=m,x=f<=-Math.PI&&-Math.PI<=m||f<=Math.PI&&Math.PI<=m,w=f<=.5*-Math.PI&&.5*-Math.PI<=m||f<=1.5*Math.PI&&1.5*Math.PI<=m,k=h/100,C={x:x?-1:Math.min(g.x*(g.x<0?1:k),v.x*(v.x<0?1:k)),y:w?-1:Math.min(g.y*(g.y<0?1:k),v.y*(v.y<0?1:k))},S={x:y?1:Math.max(g.x*(g.x>0?1:k),v.x*(v.x>0?1:k)),y:b?1:Math.max(g.y*(g.y>0?1:k),v.y*(v.y>0?1:k))},T={width:.5*(S.x-C.x),height:.5*(S.y-C.y)};c=Math.min(s/T.width,l/T.height),u={x:-.5*(S.x+C.x),y:-.5*(S.y+C.y)}}n.borderWidth=i.getMaxBorderWidth(d.data),n.outerRadius=Math.max((c-n.borderWidth)/2,0),n.innerRadius=Math.max(h?n.outerRadius/100*h:0,0),n.radiusLength=(n.outerRadius-n.innerRadius)/n.getVisibleDatasetCount(),n.offsetX=u.x*n.outerRadius,n.offsetY=u.y*n.outerRadius,d.total=i.calculateTotal(),i.outerRadius=n.outerRadius-n.radiusLength*i.getRingIndex(i.index),i.innerRadius=Math.max(i.outerRadius-n.radiusLength,0),e.each(d.data,function(e,n){i.updateElement(e,n,t)})},updateElement:function(t,i,n){var o=this.chart,a=o.chartArea,r=o.options,s=r.animation,l=(a.left+a.right)/2,c=(a.top+a.bottom)/2,u=r.rotation,d=r.rotation,h=this.getDataset(),p=n&&s.animateRotate?0:t.hidden?0:this.calculateCircumference(h.data[i])*(r.circumference/(2*Math.PI)),f=n&&s.animateScale?0:this.innerRadius,m=n&&s.animateScale?0:this.outerRadius,g=e.getValueAtIndexOrDefault;e.extend(t,{_datasetIndex:this.index,_index:i,_model:{x:l+o.offsetX,y:c+o.offsetY,startAngle:u,endAngle:d,circumference:p,outerRadius:m,innerRadius:f,label:g(h.label,i,o.data.labels[i])}});var v=t._model;this.removeHoverStyle(t),n&&s.animateRotate||(v.startAngle=0===i?r.rotation:this.getMeta().data[i-1]._model.endAngle,v.endAngle=v.startAngle+v.circumference),t.pivot()},removeHoverStyle:function(e){t.DatasetController.prototype.removeHoverStyle.call(this,e,this.chart.options.elements.arc)},calculateTotal:function(){var t,i=this.getDataset(),n=this.getMeta(),o=0;return e.each(n.data,function(e,n){t=i.data[n],isNaN(t)||e.hidden||(o+=Math.abs(t))}),o},calculateCircumference:function(t){var e=this.getMeta().total;return e>0&&!isNaN(t)?2*Math.PI*(t/e):0},getMaxBorderWidth:function(t){for(var e,i,n=0,o=this.index,a=t.length,r=0;r<a;r++)e=t[r]._model?t[r]._model.borderWidth:0,n=(i=t[r]._chart?t[r]._chart.config.data.datasets[o].hoverBorderWidth:0)>(n=e>n?e:n)?i:n;return n}})}},{}],18:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers;function i(t,i){return e.getValueOrDefault(t.showLine,i.showLines)}t.defaults.line={showLines:!0,spanGaps:!1,hover:{mode:"label"},scales:{xAxes:[{type:"category",id:"x-axis-0"}],yAxes:[{type:"linear",id:"y-axis-0"}]}},t.controllers.line=t.DatasetController.extend({datasetElementType:t.elements.Line,dataElementType:t.elements.Point,update:function(t){var n,o,a,r=this.getMeta(),s=r.dataset,l=r.data||[],c=this.chart.options,u=c.elements.line,d=this.getScaleForId(r.yAxisID),h=this.getDataset(),p=i(h,c);for(p&&(a=s.custom||{},void 0!==h.tension&&void 0===h.lineTension&&(h.lineTension=h.tension),s._scale=d,s._datasetIndex=this.index,s._children=l,s._model={spanGaps:h.spanGaps?h.spanGaps:c.spanGaps,tension:a.tension?a.tension:e.getValueOrDefault(h.lineTension,u.tension),backgroundColor:a.backgroundColor?a.backgroundColor:h.backgroundColor||u.backgroundColor,borderWidth:a.borderWidth?a.borderWidth:h.borderWidth||u.borderWidth,borderColor:a.borderColor?a.borderColor:h.borderColor||u.borderColor,borderCapStyle:a.borderCapStyle?a.borderCapStyle:h.borderCapStyle||u.borderCapStyle,borderDash:a.borderDash?a.borderDash:h.borderDash||u.borderDash,borderDashOffset:a.borderDashOffset?a.borderDashOffset:h.borderDashOffset||u.borderDashOffset,borderJoinStyle:a.borderJoinStyle?a.borderJoinStyle:h.borderJoinStyle||u.borderJoinStyle,fill:a.fill?a.fill:void 0!==h.fill?h.fill:u.fill,steppedLine:a.steppedLine?a.steppedLine:e.getValueOrDefault(h.steppedLine,u.stepped),cubicInterpolationMode:a.cubicInterpolationMode?a.cubicInterpolationMode:e.getValueOrDefault(h.cubicInterpolationMode,u.cubicInterpolationMode)},s.pivot()),n=0,o=l.length;n<o;++n)this.updateElement(l[n],n,t);for(p&&0!==s._model.tension&&this.updateBezierControlPoints(),n=0,o=l.length;n<o;++n)l[n].pivot()},getPointBackgroundColor:function(t,i){var n=this.chart.options.elements.point.backgroundColor,o=this.getDataset(),a=t.custom||{};return a.backgroundColor?n=a.backgroundColor:o.pointBackgroundColor?n=e.getValueAtIndexOrDefault(o.pointBackgroundColor,i,n):o.backgroundColor&&(n=o.backgroundColor),n},getPointBorderColor:function(t,i){var n=this.chart.options.elements.point.borderColor,o=this.getDataset(),a=t.custom||{};return a.borderColor?n=a.borderColor:o.pointBorderColor?n=e.getValueAtIndexOrDefault(o.pointBorderColor,i,n):o.borderColor&&(n=o.borderColor),n},getPointBorderWidth:function(t,i){var n=this.chart.options.elements.point.borderWidth,o=this.getDataset(),a=t.custom||{};return isNaN(a.borderWidth)?isNaN(o.pointBorderWidth)?isNaN(o.borderWidth)||(n=o.borderWidth):n=e.getValueAtIndexOrDefault(o.pointBorderWidth,i,n):n=a.borderWidth,n},updateElement:function(t,i,n){var o,a,r=this.getMeta(),s=t.custom||{},l=this.getDataset(),c=this.index,u=l.data[i],d=this.getScaleForId(r.yAxisID),h=this.getScaleForId(r.xAxisID),p=this.chart.options.elements.point,f=1===(this.chart.data.labels||[]).length||1===l.data.length||this.chart.isCombo;void 0!==l.radius&&void 0===l.pointRadius&&(l.pointRadius=l.radius),void 0!==l.hitRadius&&void 0===l.pointHitRadius&&(l.pointHitRadius=l.hitRadius),o=h.getPixelForValue("object"==typeof u?u:NaN,i,c,f),a=n?d.getBasePixel():this.calculatePointY(u,i,c),t._xScale=h,t._yScale=d,t._datasetIndex=c,t._index=i,t._model={x:o,y:a,skip:s.skip||isNaN(o)||isNaN(a),radius:s.radius||e.getValueAtIndexOrDefault(l.pointRadius,i,p.radius),pointStyle:s.pointStyle||e.getValueAtIndexOrDefault(l.pointStyle,i,p.pointStyle),backgroundColor:this.getPointBackgroundColor(t,i),borderColor:this.getPointBorderColor(t,i),borderWidth:this.getPointBorderWidth(t,i),tension:r.dataset._model?r.dataset._model.tension:0,steppedLine:!!r.dataset._model&&r.dataset._model.steppedLine,hitRadius:s.hitRadius||e.getValueAtIndexOrDefault(l.pointHitRadius,i,p.hitRadius)}},calculatePointY:function(t,e,i){var n,o,a,r=this.chart,s=this.getMeta(),l=this.getScaleForId(s.yAxisID),c=0,u=0;if(l.options.stacked){for(n=0;n<i;n++)if(o=r.data.datasets[n],"line"===(a=r.getDatasetMeta(n)).type&&a.yAxisID===l.id&&r.isDatasetVisible(n)){var d=Number(l.getRightValue(o.data[e]));d<0?u+=d||0:c+=d||0}var h=Number(l.getRightValue(t));return h<0?l.getPixelForValue(u+h):l.getPixelForValue(c+h)}return l.getPixelForValue(t)},updateBezierControlPoints:function(){var t,i,n,o,a=this.getMeta(),r=this.chart.chartArea,s=a.data||[];function l(t,e,i){return Math.max(Math.min(t,i),e)}if(a.dataset._model.spanGaps&&(s=s.filter(function(t){return!t._model.skip})),"monotone"===a.dataset._model.cubicInterpolationMode)e.splineCurveMonotone(s);else for(t=0,i=s.length;t<i;++t)n=s[t]._model,o=e.splineCurve(e.previousItem(s,t)._model,n,e.nextItem(s,t)._model,a.dataset._model.tension),n.controlPointPreviousX=o.previous.x,n.controlPointPreviousY=o.previous.y,n.controlPointNextX=o.next.x,n.controlPointNextY=o.next.y;if(this.chart.options.elements.line.capBezierPoints)for(t=0,i=s.length;t<i;++t)(n=s[t]._model).controlPointPreviousX=l(n.controlPointPreviousX,r.left,r.right),n.controlPointPreviousY=l(n.controlPointPreviousY,r.top,r.bottom),n.controlPointNextX=l(n.controlPointNextX,r.left,r.right),n.controlPointNextY=l(n.controlPointNextY,r.top,r.bottom)},draw:function(){var e=this.chart,n=this.getMeta(),o=n.data||[],a=e.chartArea,r=o.length,s=0;for(t.canvasHelpers.clipArea(e.ctx,a),i(this.getDataset(),e.options)&&n.dataset.draw(),t.canvasHelpers.unclipArea(e.ctx);s<r;++s)o[s].draw(a)},setHoverStyle:function(t){var i=this.chart.data.datasets[t._datasetIndex],n=t._index,o=t.custom||{},a=t._model;a.radius=o.hoverRadius||e.getValueAtIndexOrDefault(i.pointHoverRadius,n,this.chart.options.elements.point.hoverRadius),a.backgroundColor=o.hoverBackgroundColor||e.getValueAtIndexOrDefault(i.pointHoverBackgroundColor,n,e.getHoverColor(a.backgroundColor)),a.borderColor=o.hoverBorderColor||e.getValueAtIndexOrDefault(i.pointHoverBorderColor,n,e.getHoverColor(a.borderColor)),a.borderWidth=o.hoverBorderWidth||e.getValueAtIndexOrDefault(i.pointHoverBorderWidth,n,a.borderWidth)},removeHoverStyle:function(t){var i=this.chart.data.datasets[t._datasetIndex],n=t._index,o=t.custom||{},a=t._model;void 0!==i.radius&&void 0===i.pointRadius&&(i.pointRadius=i.radius),a.radius=o.radius||e.getValueAtIndexOrDefault(i.pointRadius,n,this.chart.options.elements.point.radius),a.backgroundColor=this.getPointBackgroundColor(t,n),a.borderColor=this.getPointBorderColor(t,n),a.borderWidth=this.getPointBorderWidth(t,n)}})}},{}],19:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers;t.defaults.polarArea={scale:{type:"radialLinear",angleLines:{display:!1},gridLines:{circular:!0},pointLabels:{display:!1},ticks:{beginAtZero:!0}},animation:{animateRotate:!0,animateScale:!0},startAngle:-.5*Math.PI,aspectRatio:1,legendCallback:function(t){var e=[];e.push('<ul class="'+t.id+'-legend">');var i=t.data,n=i.datasets,o=i.labels;if(n.length)for(var a=0;a<n[0].data.length;++a)e.push('<li><span style="background-color:'+n[0].backgroundColor[a]+'"></span>'),o[a]&&e.push(o[a]),e.push("</li>");return e.push("</ul>"),e.join("")},legend:{labels:{generateLabels:function(t){var i=t.data;return i.labels.length&&i.datasets.length?i.labels.map(function(n,o){var a=t.getDatasetMeta(0),r=i.datasets[0],s=a.data[o].custom||{},l=e.getValueAtIndexOrDefault,c=t.options.elements.arc;return{text:n,fillStyle:s.backgroundColor?s.backgroundColor:l(r.backgroundColor,o,c.backgroundColor),strokeStyle:s.borderColor?s.borderColor:l(r.borderColor,o,c.borderColor),lineWidth:s.borderWidth?s.borderWidth:l(r.borderWidth,o,c.borderWidth),hidden:isNaN(r.data[o])||a.data[o].hidden,index:o}}):[]}},onClick:function(t,e){var i,n,o,a=e.index,r=this.chart;for(i=0,n=(r.data.datasets||[]).length;i<n;++i)(o=r.getDatasetMeta(i)).data[a].hidden=!o.data[a].hidden;r.update()}},tooltips:{callbacks:{title:function(){return""},label:function(t,e){return e.labels[t.index]+": "+t.yLabel}}}},t.controllers.polarArea=t.DatasetController.extend({dataElementType:t.elements.Arc,linkScales:e.noop,update:function(t){var i=this,n=i.chart,o=n.chartArea,a=i.getMeta(),r=n.options,s=r.elements.arc,l=Math.min(o.right-o.left,o.bottom-o.top);n.outerRadius=Math.max((l-s.borderWidth/2)/2,0),n.innerRadius=Math.max(r.cutoutPercentage?n.outerRadius/100*r.cutoutPercentage:1,0),n.radiusLength=(n.outerRadius-n.innerRadius)/n.getVisibleDatasetCount(),i.outerRadius=n.outerRadius-n.radiusLength*i.index,i.innerRadius=i.outerRadius-n.radiusLength,a.count=i.countVisibleElements(),e.each(a.data,function(e,n){i.updateElement(e,n,t)})},updateElement:function(t,i,n){for(var o=this.chart,a=this.getDataset(),r=o.options,s=r.animation,l=o.scale,c=e.getValueAtIndexOrDefault,u=o.data.labels,d=this.calculateCircumference(a.data[i]),h=l.xCenter,p=l.yCenter,f=0,m=this.getMeta(),g=0;g<i;++g)isNaN(a.data[g])||m.data[g].hidden||++f;var v=r.startAngle,y=t.hidden?0:l.getDistanceFromCenterForValue(a.data[i]),b=v+d*f,x=b+(t.hidden?0:d),w=s.animateScale?0:l.getDistanceFromCenterForValue(a.data[i]);e.extend(t,{_datasetIndex:this.index,_index:i,_scale:l,_model:{x:h,y:p,innerRadius:0,outerRadius:n?w:y,startAngle:n&&s.animateRotate?v:b,endAngle:n&&s.animateRotate?v:x,label:c(u,i,u[i])}}),this.removeHoverStyle(t),t.pivot()},removeHoverStyle:function(e){t.DatasetController.prototype.removeHoverStyle.call(this,e,this.chart.options.elements.arc)},countVisibleElements:function(){var t=this.getDataset(),i=this.getMeta(),n=0;return e.each(i.data,function(e,i){isNaN(t.data[i])||e.hidden||n++}),n},calculateCircumference:function(t){var e=this.getMeta().count;return e>0&&!isNaN(t)?2*Math.PI/e:0}})}},{}],20:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers;t.defaults.radar={aspectRatio:1,scale:{type:"radialLinear"},elements:{line:{tension:0}}},t.controllers.radar=t.DatasetController.extend({datasetElementType:t.elements.Line,dataElementType:t.elements.Point,linkScales:e.noop,update:function(t){var i=this,n=i.getMeta(),o=n.dataset,a=n.data,r=o.custom||{},s=i.getDataset(),l=i.chart.options.elements.line,c=i.chart.scale;void 0!==s.tension&&void 0===s.lineTension&&(s.lineTension=s.tension),e.extend(n.dataset,{_datasetIndex:i.index,_scale:c,_children:a,_loop:!0,_model:{tension:r.tension?r.tension:e.getValueOrDefault(s.lineTension,l.tension),backgroundColor:r.backgroundColor?r.backgroundColor:s.backgroundColor||l.backgroundColor,borderWidth:r.borderWidth?r.borderWidth:s.borderWidth||l.borderWidth,borderColor:r.borderColor?r.borderColor:s.borderColor||l.borderColor,fill:r.fill?r.fill:void 0!==s.fill?s.fill:l.fill,borderCapStyle:r.borderCapStyle?r.borderCapStyle:s.borderCapStyle||l.borderCapStyle,borderDash:r.borderDash?r.borderDash:s.borderDash||l.borderDash,borderDashOffset:r.borderDashOffset?r.borderDashOffset:s.borderDashOffset||l.borderDashOffset,borderJoinStyle:r.borderJoinStyle?r.borderJoinStyle:s.borderJoinStyle||l.borderJoinStyle}}),n.dataset.pivot(),e.each(a,function(e,n){i.updateElement(e,n,t)},i),i.updateBezierControlPoints()},updateElement:function(t,i,n){var o=t.custom||{},a=this.getDataset(),r=this.chart.scale,s=this.chart.options.elements.point,l=r.getPointPositionForValue(i,a.data[i]);void 0!==a.radius&&void 0===a.pointRadius&&(a.pointRadius=a.radius),void 0!==a.hitRadius&&void 0===a.pointHitRadius&&(a.pointHitRadius=a.hitRadius),e.extend(t,{_datasetIndex:this.index,_index:i,_scale:r,_model:{x:n?r.xCenter:l.x,y:n?r.yCenter:l.y,tension:o.tension?o.tension:e.getValueOrDefault(a.lineTension,this.chart.options.elements.line.tension),radius:o.radius?o.radius:e.getValueAtIndexOrDefault(a.pointRadius,i,s.radius),backgroundColor:o.backgroundColor?o.backgroundColor:e.getValueAtIndexOrDefault(a.pointBackgroundColor,i,s.backgroundColor),borderColor:o.borderColor?o.borderColor:e.getValueAtIndexOrDefault(a.pointBorderColor,i,s.borderColor),borderWidth:o.borderWidth?o.borderWidth:e.getValueAtIndexOrDefault(a.pointBorderWidth,i,s.borderWidth),pointStyle:o.pointStyle?o.pointStyle:e.getValueAtIndexOrDefault(a.pointStyle,i,s.pointStyle),hitRadius:o.hitRadius?o.hitRadius:e.getValueAtIndexOrDefault(a.pointHitRadius,i,s.hitRadius)}}),t._model.skip=o.skip?o.skip:isNaN(t._model.x)||isNaN(t._model.y)},updateBezierControlPoints:function(){var t=this.chart.chartArea,i=this.getMeta();e.each(i.data,function(n,o){var a=n._model,r=e.splineCurve(e.previousItem(i.data,o,!0)._model,a,e.nextItem(i.data,o,!0)._model,a.tension);a.controlPointPreviousX=Math.max(Math.min(r.previous.x,t.right),t.left),a.controlPointPreviousY=Math.max(Math.min(r.previous.y,t.bottom),t.top),a.controlPointNextX=Math.max(Math.min(r.next.x,t.right),t.left),a.controlPointNextY=Math.max(Math.min(r.next.y,t.bottom),t.top),n.pivot()})},setHoverStyle:function(t){var i=this.chart.data.datasets[t._datasetIndex],n=t.custom||{},o=t._index,a=t._model;a.radius=n.hoverRadius?n.hoverRadius:e.getValueAtIndexOrDefault(i.pointHoverRadius,o,this.chart.options.elements.point.hoverRadius),a.backgroundColor=n.hoverBackgroundColor?n.hoverBackgroundColor:e.getValueAtIndexOrDefault(i.pointHoverBackgroundColor,o,e.getHoverColor(a.backgroundColor)),a.borderColor=n.hoverBorderColor?n.hoverBorderColor:e.getValueAtIndexOrDefault(i.pointHoverBorderColor,o,e.getHoverColor(a.borderColor)),a.borderWidth=n.hoverBorderWidth?n.hoverBorderWidth:e.getValueAtIndexOrDefault(i.pointHoverBorderWidth,o,a.borderWidth)},removeHoverStyle:function(t){var i=this.chart.data.datasets[t._datasetIndex],n=t.custom||{},o=t._index,a=t._model,r=this.chart.options.elements.point;a.radius=n.radius?n.radius:e.getValueAtIndexOrDefault(i.pointRadius,o,r.radius),a.backgroundColor=n.backgroundColor?n.backgroundColor:e.getValueAtIndexOrDefault(i.pointBackgroundColor,o,r.backgroundColor),a.borderColor=n.borderColor?n.borderColor:e.getValueAtIndexOrDefault(i.pointBorderColor,o,r.borderColor),a.borderWidth=n.borderWidth?n.borderWidth:e.getValueAtIndexOrDefault(i.pointBorderWidth,o,r.borderWidth)}})}},{}],21:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers;t.defaults.global.animation={duration:1e3,easing:"easeOutQuart",onProgress:e.noop,onComplete:e.noop},t.Animation=t.Element.extend({chart:null,currentStep:0,numSteps:60,easing:"",render:null,onAnimationProgress:null,onAnimationComplete:null}),t.animationService={frameDuration:17,animations:[],dropFrames:0,request:null,addAnimation:function(t,e,i,n){var o,a,r=this.animations;for(e.chart=t,n||(t.animating=!0),o=0,a=r.length;o<a;++o)if(r[o].chart===t)return void(r[o]=e);r.push(e),1===r.length&&this.requestAnimationFrame()},cancelAnimation:function(t){var i=e.findIndex(this.animations,function(e){return e.chart===t});-1!==i&&(this.animations.splice(i,1),t.animating=!1)},requestAnimationFrame:function(){var t=this;null===t.request&&(t.request=e.requestAnimFrame.call(window,function(){t.request=null,t.startDigest()}))},startDigest:function(){var t=Date.now(),e=0;this.dropFrames>1&&(e=Math.floor(this.dropFrames),this.dropFrames=this.dropFrames%1),this.advance(1+e);var i=Date.now();this.dropFrames+=(i-t)/this.frameDuration,this.animations.length>0&&this.requestAnimationFrame()},advance:function(t){for(var i,n,o=this.animations,a=0;a<o.length;)n=(i=o[a]).chart,i.currentStep=(i.currentStep||0)+t,i.currentStep=Math.min(i.currentStep,i.numSteps),e.callback(i.render,[n,i],n),e.callback(i.onAnimationProgress,[i],n),i.currentStep>=i.numSteps?(e.callback(i.onAnimationComplete,[i],n),n.animating=!1,o.splice(a,1)):++a}},Object.defineProperty(t.Animation.prototype,"animationObject",{get:function(){return this}}),Object.defineProperty(t.Animation.prototype,"chartInstance",{get:function(){return this.chart},set:function(t){this.chart=t}})}},{}],22:[function(t,e,i){"use strict";e.exports=function(t){var e=t.canvasHelpers={};e.drawPoint=function(e,i,n,o,a){var r,s,l,c,u,d;if("object"!=typeof i||"[object HTMLImageElement]"!==(r=i.toString())&&"[object HTMLCanvasElement]"!==r){if(!(isNaN(n)||n<=0)){switch(i){default:e.beginPath(),e.arc(o,a,n,0,2*Math.PI),e.closePath(),e.fill();break;case"triangle":e.beginPath(),u=(s=3*n/Math.sqrt(3))*Math.sqrt(3)/2,e.moveTo(o-s/2,a+u/3),e.lineTo(o+s/2,a+u/3),e.lineTo(o,a-2*u/3),e.closePath(),e.fill();break;case"rect":d=1/Math.SQRT2*n,e.beginPath(),e.fillRect(o-d,a-d,2*d,2*d),e.strokeRect(o-d,a-d,2*d,2*d);break;case"rectRounded":var h=n/Math.SQRT2,p=o-h,f=a-h,m=Math.SQRT2*n;t.helpers.drawRoundedRectangle(e,p,f,m,m,n/2),e.fill();break;case"rectRot":d=1/Math.SQRT2*n,e.beginPath(),e.moveTo(o-d,a),e.lineTo(o,a+d),e.lineTo(o+d,a),e.lineTo(o,a-d),e.closePath(),e.fill();break;case"cross":e.beginPath(),e.moveTo(o,a+n),e.lineTo(o,a-n),e.moveTo(o-n,a),e.lineTo(o+n,a),e.closePath();break;case"crossRot":e.beginPath(),l=Math.cos(Math.PI/4)*n,c=Math.sin(Math.PI/4)*n,e.moveTo(o-l,a-c),e.lineTo(o+l,a+c),e.moveTo(o-l,a+c),e.lineTo(o+l,a-c),e.closePath();break;case"star":e.beginPath(),e.moveTo(o,a+n),e.lineTo(o,a-n),e.moveTo(o-n,a),e.lineTo(o+n,a),l=Math.cos(Math.PI/4)*n,c=Math.sin(Math.PI/4)*n,e.moveTo(o-l,a-c),e.lineTo(o+l,a+c),e.moveTo(o-l,a+c),e.lineTo(o+l,a-c),e.closePath();break;case"line":e.beginPath(),e.moveTo(o-n,a),e.lineTo(o+n,a),e.closePath();break;case"dash":e.beginPath(),e.moveTo(o,a),e.lineTo(o+n,a),e.closePath()}e.stroke()}}else e.drawImage(i,o-i.width/2,a-i.height/2,i.width,i.height)},e.clipArea=function(t,e){t.save(),t.beginPath(),t.rect(e.left,e.top,e.right-e.left,e.bottom-e.top),t.clip()},e.unclipArea=function(t){t.restore()},e.lineTo=function(t,e,i,n){if(i.steppedLine)return"after"===i.steppedLine?t.lineTo(e.x,i.y):t.lineTo(i.x,e.y),void t.lineTo(i.x,i.y);i.tension?t.bezierCurveTo(n?e.controlPointPreviousX:e.controlPointNextX,n?e.controlPointPreviousY:e.controlPointNextY,n?i.controlPointNextX:i.controlPointPreviousX,n?i.controlPointNextY:i.controlPointPreviousY,i.x,i.y):t.lineTo(i.x,i.y)},t.helpers.canvas=e}},{}],23:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers,i=t.plugins,n=t.platform;function o(t){return"top"===t||"bottom"===t}t.types={},t.instances={},t.controllers={},e.extend(t.prototype,{construct:function(i,o){var a,r,s=this;(r=(a=(a=o)||{}).data=a.data||{}).datasets=r.datasets||[],r.labels=r.labels||[],a.options=e.configMerge(t.defaults.global,t.defaults[a.type],a.options||{}),o=a;var l=n.acquireContext(i,o),c=l&&l.canvas,u=c&&c.height,d=c&&c.width;s.id=e.uid(),s.ctx=l,s.canvas=c,s.config=o,s.width=d,s.height=u,s.aspectRatio=u?d/u:null,s.options=o.options,s._bufferedRender=!1,s.chart=s,s.controller=s,t.instances[s.id]=s,Object.defineProperty(s,"data",{get:function(){return s.config.data},set:function(t){s.config.data=t}}),l&&c?(s.initialize(),s.update()):console.error("Failed to create chart: can't acquire context from the given item")},initialize:function(){return i.notify(this,"beforeInit"),e.retinaScale(this),this.bindEvents(),this.options.responsive&&this.resize(!0),this.ensureScalesHaveIDs(),this.buildScales(),this.initToolTip(),i.notify(this,"afterInit"),this},clear:function(){return e.clear(this),this},stop:function(){return t.animationService.cancelAnimation(this),this},resize:function(t){var n=this.options,o=this.canvas,a=n.maintainAspectRatio&&this.aspectRatio||null,r=Math.floor(e.getMaximumWidth(o)),s=Math.floor(a?r/a:e.getMaximumHeight(o));if((this.width!==r||this.height!==s)&&(o.width=this.width=r,o.height=this.height=s,o.style.width=r+"px",o.style.height=s+"px",e.retinaScale(this),!t)){var l={width:r,height:s};i.notify(this,"resize",[l]),this.options.onResize&&this.options.onResize(this,l),this.stop(),this.update(this.options.responsiveAnimationDuration)}},ensureScalesHaveIDs:function(){var t=this.options,i=t.scales||{},n=t.scale;e.each(i.xAxes,function(t,e){t.id=t.id||"x-axis-"+e}),e.each(i.yAxes,function(t,e){t.id=t.id||"y-axis-"+e}),n&&(n.id=n.id||"scale")},buildScales:function(){var i=this,n=i.options,a=i.scales={},r=[];n.scales&&(r=r.concat((n.scales.xAxes||[]).map(function(t){return{options:t,dtype:"category",dposition:"bottom"}}),(n.scales.yAxes||[]).map(function(t){return{options:t,dtype:"linear",dposition:"left"}}))),n.scale&&r.push({options:n.scale,dtype:"radialLinear",isDefault:!0,dposition:"chartArea"}),e.each(r,function(n){var r=n.options,s=e.getValueOrDefault(r.type,n.dtype),l=t.scaleService.getScaleConstructor(s);if(l){o(r.position)!==o(n.dposition)&&(r.position=n.dposition);var c=new l({id:r.id,options:r,ctx:i.ctx,chart:i});a[c.id]=c,n.isDefault&&(i.scale=c)}}),t.scaleService.addScalesToLayout(this)},buildOrUpdateControllers:function(){var i=this,n=[],o=[];if(e.each(i.data.datasets,function(e,a){var r=i.getDatasetMeta(a);if(r.type||(r.type=e.type||i.config.type),n.push(r.type),r.controller)r.controller.updateIndex(a);else{var s=t.controllers[r.type];if(void 0===s)throw new Error('"'+r.type+'" is not a chart type.');r.controller=new s(i,a),o.push(r.controller)}},i),n.length>1)for(var a=1;a<n.length;a++)if(n[a]!==n[a-1]){i.isCombo=!0;break}return o},resetElements:function(){var t=this;e.each(t.data.datasets,function(e,i){t.getDatasetMeta(i).controller.reset()},t)},reset:function(){this.resetElements(),this.tooltip.initialize()},update:function(t,n){var o,a,r=this;if((a=(o=r).options).scale?o.scale.options=a.scale:a.scales&&a.scales.xAxes.concat(a.scales.yAxes).forEach(function(t){o.scales[t.id].options=t}),o.tooltip._options=a.tooltips,!1!==i.notify(r,"beforeUpdate")){r.tooltip._data=r.data;var s=r.buildOrUpdateControllers();e.each(r.data.datasets,function(t,e){r.getDatasetMeta(e).controller.buildOrUpdateElements()},r),r.updateLayout(),e.each(s,function(t){t.reset()}),r.updateDatasets(),i.notify(r,"afterUpdate"),r._bufferedRender?r._bufferedRequest={lazy:n,duration:t}:r.render(t,n)}},updateLayout:function(){!1!==i.notify(this,"beforeLayout")&&(t.layoutService.update(this,this.width,this.height),i.notify(this,"afterScaleUpdate"),i.notify(this,"afterLayout"))},updateDatasets:function(){if(!1!==i.notify(this,"beforeDatasetsUpdate")){for(var t=0,e=this.data.datasets.length;t<e;++t)this.updateDataset(t);i.notify(this,"afterDatasetsUpdate")}},updateDataset:function(t){var e=this.getDatasetMeta(t),n={meta:e,index:t};!1!==i.notify(this,"beforeDatasetUpdate",[n])&&(e.controller.update(),i.notify(this,"afterDatasetUpdate",[n]))},render:function(n,o){var a=this;if(!1!==i.notify(a,"beforeRender")){var r=a.options.animation,s=function(t){i.notify(a,"afterRender"),e.callback(r&&r.onComplete,[t],a)};if(r&&(void 0!==n&&0!==n||void 0===n&&0!==r.duration)){var l=new t.Animation({numSteps:(n||r.duration)/16.66,easing:r.easing,render:function(t,i){var n=e.easingEffects[i.easing],o=i.currentStep,a=o/i.numSteps;t.draw(n(a),a,o)},onAnimationProgress:r.onProgress,onAnimationComplete:s});t.animationService.addAnimation(a,l,n,o)}else a.draw(),s(new t.Animation({numSteps:0,chart:a}));return a}},draw:function(t){var n=this;n.clear(),void 0!==t&&null!==t||(t=1),n.transition(t),!1!==i.notify(n,"beforeDraw",[t])&&(e.each(n.boxes,function(t){t.draw(n.chartArea)},n),n.scale&&n.scale.draw(),n.drawDatasets(t),n.tooltip.draw(),i.notify(n,"afterDraw",[t]))},transition:function(t){for(var e=0,i=(this.data.datasets||[]).length;e<i;++e)this.isDatasetVisible(e)&&this.getDatasetMeta(e).controller.transition(t);this.tooltip.transition(t)},drawDatasets:function(t){if(!1!==i.notify(this,"beforeDatasetsDraw",[t])){for(var e=(this.data.datasets||[]).length-1;e>=0;--e)this.isDatasetVisible(e)&&this.drawDataset(e,t);i.notify(this,"afterDatasetsDraw",[t])}},drawDataset:function(t,e){var n=this.getDatasetMeta(t),o={meta:n,index:t,easingValue:e};!1!==i.notify(this,"beforeDatasetDraw",[o])&&(n.controller.draw(e),i.notify(this,"afterDatasetDraw",[o]))},getElementAtEvent:function(e){return t.Interaction.modes.single(this,e)},getElementsAtEvent:function(e){return t.Interaction.modes.label(this,e,{intersect:!0})},getElementsAtXAxis:function(e){return t.Interaction.modes["x-axis"](this,e,{intersect:!0})},getElementsAtEventForMode:function(e,i,n){var o=t.Interaction.modes[i];return"function"==typeof o?o(this,e,n):[]},getDatasetAtEvent:function(e){return t.Interaction.modes.dataset(this,e,{intersect:!0})},getDatasetMeta:function(t){var e=this.data.datasets[t];e._meta||(e._meta={});var i=e._meta[this.id];return i||(i=e._meta[this.id]={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null}),i},getVisibleDatasetCount:function(){for(var t=0,e=0,i=this.data.datasets.length;e<i;++e)this.isDatasetVisible(e)&&t++;return t},isDatasetVisible:function(t){var e=this.getDatasetMeta(t);return"boolean"==typeof e.hidden?!e.hidden:!this.data.datasets[t].hidden},generateLegend:function(){return this.options.legendCallback(this)},destroy:function(){var o,a,r,s=this.canvas;for(this.stop(),a=0,r=this.data.datasets.length;a<r;++a)(o=this.getDatasetMeta(a)).controller&&(o.controller.destroy(),o.controller=null);s&&(this.unbindEvents(),e.clear(this),n.releaseContext(this.ctx),this.canvas=null,this.ctx=null),i.notify(this,"destroy"),delete t.instances[this.id]},toBase64Image:function(){return this.canvas.toDataURL.apply(this.canvas,arguments)},initToolTip:function(){this.tooltip=new t.Tooltip({_chart:this,_chartInstance:this,_data:this.data,_options:this.options.tooltips},this),this.tooltip.initialize()},bindEvents:function(){var t=this,i=t._listeners={},o=function(){t.eventHandler.apply(t,arguments)};e.each(t.options.events,function(e){n.addEventListener(t,e,o),i[e]=o}),t.options.responsive&&(o=function(){t.resize()},n.addEventListener(t,"resize",o),i.resize=o)},unbindEvents:function(){var t=this,i=t._listeners;i&&(delete t._listeners,e.each(i,function(e,i){n.removeEventListener(t,i,e)}))},updateHoverStyle:function(t,e,i){var n,o,a,r=i?"setHoverStyle":"removeHoverStyle";for(o=0,a=t.length;o<a;++o)(n=t[o])&&this.getDatasetMeta(n._datasetIndex).controller[r](n)},eventHandler:function(t){var e=this.tooltip;if(!1!==i.notify(this,"beforeEvent",[t])){this._bufferedRender=!0,this._bufferedRequest=null;var n=this.handleEvent(t);n|=e&&e.handleEvent(t),i.notify(this,"afterEvent",[t]);var o=this._bufferedRequest;return o?this.render(o.duration,o.lazy):n&&!this.animating&&(this.stop(),this.render(this.options.hover.animationDuration,!0)),this._bufferedRender=!1,this._bufferedRequest=null,this}},handleEvent:function(t){var i,n=this.options||{},o=n.hover;return this.lastActive=this.lastActive||[],"mouseout"===t.type?this.active=[]:this.active=this.getElementsAtEventForMode(t,o.mode,o),o.onHover&&o.onHover.call(this,t.native,this.active),"mouseup"!==t.type&&"click"!==t.type||n.onClick&&n.onClick.call(this,t.native,this.active),this.lastActive.length&&this.updateHoverStyle(this.lastActive,o.mode,!1),this.active.length&&o.mode&&this.updateHoverStyle(this.active,o.mode,!0),i=!e.arrayEquals(this.active,this.lastActive),this.lastActive=this.active,i}}),t.Controller=t}},{}],24:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers,i=["push","pop","shift","splice","unshift"];function n(t,e){var n=t._chartjs;if(n){var o=n.listeners,a=o.indexOf(e);-1!==a&&o.splice(a,1),o.length>0||(i.forEach(function(e){delete t[e]}),delete t._chartjs)}}t.DatasetController=function(t,e){this.initialize(t,e)},e.extend(t.DatasetController.prototype,{datasetElementType:null,dataElementType:null,initialize:function(t,e){this.chart=t,this.index=e,this.linkScales(),this.addElements()},updateIndex:function(t){this.index=t},linkScales:function(){var t=this.getMeta(),e=this.getDataset();null===t.xAxisID&&(t.xAxisID=e.xAxisID||this.chart.options.scales.xAxes[0].id),null===t.yAxisID&&(t.yAxisID=e.yAxisID||this.chart.options.scales.yAxes[0].id)},getDataset:function(){return this.chart.data.datasets[this.index]},getMeta:function(){return this.chart.getDatasetMeta(this.index)},getScaleForId:function(t){return this.chart.scales[t]},reset:function(){this.update(!0)},destroy:function(){this._data&&n(this._data,this)},createMetaDataset:function(){var t=this.datasetElementType;return t&&new t({_chart:this.chart,_datasetIndex:this.index})},createMetaData:function(t){var e=this.dataElementType;return e&&new e({_chart:this.chart,_datasetIndex:this.index,_index:t})},addElements:function(){var t,e,i=this.getMeta(),n=this.getDataset().data||[],o=i.data;for(t=0,e=n.length;t<e;++t)o[t]=o[t]||this.createMetaData(t);i.dataset=i.dataset||this.createMetaDataset()},addElementAndReset:function(t){var e=this.createMetaData(t);this.getMeta().data.splice(t,0,e),this.updateElement(e,t,!0)},buildOrUpdateElements:function(){var t,o,a=this.getDataset(),r=a.data||(a.data=[]);this._data!==r&&(this._data&&n(this._data,this),o=this,(t=r)._chartjs?t._chartjs.listeners.push(o):(Object.defineProperty(t,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[o]}}),i.forEach(function(i){var n="onData"+i.charAt(0).toUpperCase()+i.slice(1),o=t[i];Object.defineProperty(t,i,{configurable:!0,enumerable:!1,value:function(){var i=Array.prototype.slice.call(arguments),a=o.apply(this,i);return e.each(t._chartjs.listeners,function(t){"function"==typeof t[n]&&t[n].apply(t,i)}),a}})})),this._data=r),this.resyncElements()},update:e.noop,transition:function(t){for(var e=this.getMeta(),i=e.data||[],n=i.length,o=0;o<n;++o)i[o].transition(t);e.dataset&&e.dataset.transition(t)},draw:function(){var t=this.getMeta(),e=t.data||[],i=e.length,n=0;for(t.dataset&&t.dataset.draw();n<i;++n)e[n].draw()},removeHoverStyle:function(t,i){var n=this.chart.data.datasets[t._datasetIndex],o=t._index,a=t.custom||{},r=e.getValueAtIndexOrDefault,s=t._model;s.backgroundColor=a.backgroundColor?a.backgroundColor:r(n.backgroundColor,o,i.backgroundColor),s.borderColor=a.borderColor?a.borderColor:r(n.borderColor,o,i.borderColor),s.borderWidth=a.borderWidth?a.borderWidth:r(n.borderWidth,o,i.borderWidth)},setHoverStyle:function(t){var i=this.chart.data.datasets[t._datasetIndex],n=t._index,o=t.custom||{},a=e.getValueAtIndexOrDefault,r=e.getHoverColor,s=t._model;s.backgroundColor=o.hoverBackgroundColor?o.hoverBackgroundColor:a(i.hoverBackgroundColor,n,r(s.backgroundColor)),s.borderColor=o.hoverBorderColor?o.hoverBorderColor:a(i.hoverBorderColor,n,r(s.borderColor)),s.borderWidth=o.hoverBorderWidth?o.hoverBorderWidth:a(i.hoverBorderWidth,n,s.borderWidth)},resyncElements:function(){var t=this.getMeta(),e=this.getDataset().data,i=t.data.length,n=e.length;n<i?t.data.splice(n,i-n):n>i&&this.insertElements(i,n-i)},insertElements:function(t,e){for(var i=0;i<e;++i)this.addElementAndReset(t+i)},onDataPush:function(){this.insertElements(this.getDataset().data.length-1,arguments.length)},onDataPop:function(){this.getMeta().data.pop()},onDataShift:function(){this.getMeta().data.shift()},onDataSplice:function(t,e){this.getMeta().data.splice(t,e),this.insertElements(t,arguments.length-2)},onDataUnshift:function(){this.insertElements(0,arguments.length)}}),t.DatasetController.extend=e.inherits}},{}],25:[function(t,e,i){"use strict";var n=t(3);e.exports=function(t){var e=t.helpers;t.elements={},t.Element=function(t){e.extend(this,t),this.initialize.apply(this,arguments)},e.extend(t.Element.prototype,{initialize:function(){this.hidden=!1},pivot:function(){return this._view||(this._view=e.clone(this._model)),this._start={},this},transition:function(t){var e=this._model,i=this._start,o=this._view;return e&&1!==t?(o||(o=this._view={}),i||(i=this._start={}),function(t,e,i,o){var a,r,s,l,c,u,d,h,p,f=Object.keys(i);for(a=0,r=f.length;a<r;++a)if(u=i[s=f[a]],e.hasOwnProperty(s)||(e[s]=u),(l=e[s])!==u&&"_"!==s[0]){if(t.hasOwnProperty(s)||(t[s]=l),(d=typeof u)==typeof(c=t[s]))if("string"===d){if((h=n(c)).valid&&(p=n(u)).valid){e[s]=p.mix(h,o).rgbString();continue}}else if("number"===d&&isFinite(c)&&isFinite(u)){e[s]=c+(u-c)*o;continue}e[s]=u}}(i,o,e,t),this):(this._view=e,this._start=null,this)},tooltipPosition:function(){return{x:this._model.x,y:this._model.y}},hasValue:function(){return e.isNumber(this._model.x)&&e.isNumber(this._model.y)}}),t.Element.extend=e.inherits}},{3:3}],26:[function(t,e,i){"use strict";var n=t(3);e.exports=function(t){var e,i=t.helpers={};i.each=function(t,e,n,o){var a,r;if(i.isArray(t))if(r=t.length,o)for(a=r-1;a>=0;a--)e.call(n,t[a],a);else for(a=0;a<r;a++)e.call(n,t[a],a);else if("object"==typeof t){var s=Object.keys(t);for(r=s.length,a=0;a<r;a++)e.call(n,t[s[a]],s[a])}},i.clone=function(t){var e={};return i.each(t,function(t,n){i.isArray(t)?e[n]=t.slice(0):e[n]="object"==typeof t&&null!==t?i.clone(t):t}),e},i.extend=function(t){for(var e=function(e,i){t[i]=e},n=1,o=arguments.length;n<o;n++)i.each(arguments[n],e);return t},i.configMerge=function(e){var n=i.clone(e);return i.each(Array.prototype.slice.call(arguments,1),function(e){i.each(e,function(e,o){var a=n.hasOwnProperty(o),r=a?n[o]:{};"scales"===o?n[o]=i.scaleMerge(r,e):"scale"===o?n[o]=i.configMerge(r,t.scaleService.getScaleDefaults(e.type),e):!a||"object"!=typeof r||i.isArray(r)||null===r||"object"!=typeof e||i.isArray(e)?n[o]=e:n[o]=i.configMerge(r,e)})}),n},i.scaleMerge=function(e,n){var o=i.clone(e);return i.each(n,function(e,n){"xAxes"===n||"yAxes"===n?o.hasOwnProperty(n)?i.each(e,function(e,a){var r=i.getValueOrDefault(e.type,"xAxes"===n?"category":"linear"),s=t.scaleService.getScaleDefaults(r);a>=o[n].length||!o[n][a].type?o[n].push(i.configMerge(s,e)):e.type&&e.type!==o[n][a].type?o[n][a]=i.configMerge(o[n][a],s,e):o[n][a]=i.configMerge(o[n][a],e)}):(o[n]=[],i.each(e,function(e){var a=i.getValueOrDefault(e.type,"xAxes"===n?"category":"linear");o[n].push(i.configMerge(t.scaleService.getScaleDefaults(a),e))})):o.hasOwnProperty(n)&&"object"==typeof o[n]&&null!==o[n]&&"object"==typeof e?o[n]=i.configMerge(o[n],e):o[n]=e}),o},i.getValueAtIndexOrDefault=function(t,e,n){return void 0===t||null===t?n:i.isArray(t)?e<t.length?t[e]:n:t},i.getValueOrDefault=function(t,e){return void 0===t?e:t},i.indexOf=Array.prototype.indexOf?function(t,e){return t.indexOf(e)}:function(t,e){for(var i=0,n=t.length;i<n;++i)if(t[i]===e)return i;return-1},i.where=function(t,e){if(i.isArray(t)&&Array.prototype.filter)return t.filter(e);var n=[];return i.each(t,function(t){e(t)&&n.push(t)}),n},i.findIndex=Array.prototype.findIndex?function(t,e,i){return t.findIndex(e,i)}:function(t,e,i){i=void 0===i?t:i;for(var n=0,o=t.length;n<o;++n)if(e.call(i,t[n],n,t))return n;return-1},i.findNextWhere=function(t,e,i){void 0!==i&&null!==i||(i=-1);for(var n=i+1;n<t.length;n++){var o=t[n];if(e(o))return o}},i.findPreviousWhere=function(t,e,i){void 0!==i&&null!==i||(i=t.length);for(var n=i-1;n>=0;n--){var o=t[n];if(e(o))return o}},i.inherits=function(t){var e=this,n=t&&t.hasOwnProperty("constructor")?t.constructor:function(){return e.apply(this,arguments)},o=function(){this.constructor=n};return o.prototype=e.prototype,n.prototype=new o,n.extend=i.inherits,t&&i.extend(n.prototype,t),n.__super__=e.prototype,n},i.noop=function(){},i.uid=(e=0,function(){return e++}),i.isNumber=function(t){return!isNaN(parseFloat(t))&&isFinite(t)},i.almostEquals=function(t,e,i){return Math.abs(t-e)<i},i.almostWhole=function(t,e){var i=Math.round(t);return i-e<t&&i+e>t},i.max=function(t){return t.reduce(function(t,e){return isNaN(e)?t:Math.max(t,e)},Number.NEGATIVE_INFINITY)},i.min=function(t){return t.reduce(function(t,e){return isNaN(e)?t:Math.min(t,e)},Number.POSITIVE_INFINITY)},i.sign=Math.sign?function(t){return Math.sign(t)}:function(t){return 0===(t=+t)||isNaN(t)?t:t>0?1:-1},i.log10=Math.log10?function(t){return Math.log10(t)}:function(t){return Math.log(t)/Math.LN10},i.toRadians=function(t){return t*(Math.PI/180)},i.toDegrees=function(t){return t*(180/Math.PI)},i.getAngleFromPoint=function(t,e){var i=e.x-t.x,n=e.y-t.y,o=Math.sqrt(i*i+n*n),a=Math.atan2(n,i);return a<-.5*Math.PI&&(a+=2*Math.PI),{angle:a,distance:o}},i.distanceBetweenPoints=function(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))},i.aliasPixel=function(t){return t%2==0?0:.5},i.splineCurve=function(t,e,i,n){var o=t.skip?e:t,a=e,r=i.skip?e:i,s=Math.sqrt(Math.pow(a.x-o.x,2)+Math.pow(a.y-o.y,2)),l=Math.sqrt(Math.pow(r.x-a.x,2)+Math.pow(r.y-a.y,2)),c=s/(s+l),u=l/(s+l),d=n*(c=isNaN(c)?0:c),h=n*(u=isNaN(u)?0:u);return{previous:{x:a.x-d*(r.x-o.x),y:a.y-d*(r.y-o.y)},next:{x:a.x+h*(r.x-o.x),y:a.y+h*(r.y-o.y)}}},i.EPSILON=Number.EPSILON||1e-14,i.splineCurveMonotone=function(t){var e,n,o,a,r,s,l,c,u,d=(t||[]).map(function(t){return{model:t._model,deltaK:0,mK:0}}),h=d.length;for(e=0;e<h;++e)if(!(o=d[e]).model.skip){if(n=e>0?d[e-1]:null,(a=e<h-1?d[e+1]:null)&&!a.model.skip){var p=a.model.x-o.model.x;o.deltaK=0!==p?(a.model.y-o.model.y)/p:0}!n||n.model.skip?o.mK=o.deltaK:!a||a.model.skip?o.mK=n.deltaK:this.sign(n.deltaK)!==this.sign(o.deltaK)?o.mK=0:o.mK=(n.deltaK+o.deltaK)/2}for(e=0;e<h-1;++e)o=d[e],a=d[e+1],o.model.skip||a.model.skip||(i.almostEquals(o.deltaK,0,this.EPSILON)?o.mK=a.mK=0:(r=o.mK/o.deltaK,s=a.mK/o.deltaK,(c=Math.pow(r,2)+Math.pow(s,2))<=9||(l=3/Math.sqrt(c),o.mK=r*l*o.deltaK,a.mK=s*l*o.deltaK)));for(e=0;e<h;++e)(o=d[e]).model.skip||(n=e>0?d[e-1]:null,a=e<h-1?d[e+1]:null,n&&!n.model.skip&&(u=(o.model.x-n.model.x)/3,o.model.controlPointPreviousX=o.model.x-u,o.model.controlPointPreviousY=o.model.y-u*o.mK),a&&!a.model.skip&&(u=(a.model.x-o.model.x)/3,o.model.controlPointNextX=o.model.x+u,o.model.controlPointNextY=o.model.y+u*o.mK))},i.nextItem=function(t,e,i){return i?e>=t.length-1?t[0]:t[e+1]:e>=t.length-1?t[t.length-1]:t[e+1]},i.previousItem=function(t,e,i){return i?e<=0?t[t.length-1]:t[e-1]:e<=0?t[0]:t[e-1]},i.niceNum=function(t,e){var n=Math.floor(i.log10(t)),o=t/Math.pow(10,n);return(e?o<1.5?1:o<3?2:o<7?5:10:o<=1?1:o<=2?2:o<=5?5:10)*Math.pow(10,n)};var o=i.easingEffects={linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return-1*t*(t-2)},easeInOutQuad:function(t){return(t/=.5)<1?.5*t*t:-.5*(--t*(t-2)-1)},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return 1*((t=t/1-1)*t*t+1)},easeInOutCubic:function(t){return(t/=.5)<1?.5*t*t*t:.5*((t-=2)*t*t+2)},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return-1*((t=t/1-1)*t*t*t-1)},easeInOutQuart:function(t){return(t/=.5)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)},easeInQuint:function(t){return 1*(t/=1)*t*t*t*t},easeOutQuint:function(t){return 1*((t=t/1-1)*t*t*t*t+1)},easeInOutQuint:function(t){return(t/=.5)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},easeInSine:function(t){return-1*Math.cos(t/1*(Math.PI/2))+1},easeOutSine:function(t){return 1*Math.sin(t/1*(Math.PI/2))},easeInOutSine:function(t){return-.5*(Math.cos(Math.PI*t/1)-1)},easeInExpo:function(t){return 0===t?1:1*Math.pow(2,10*(t/1-1))},easeOutExpo:function(t){return 1===t?1:1*(1-Math.pow(2,-10*t/1))},easeInOutExpo:function(t){return 0===t?0:1===t?1:(t/=.5)<1?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*--t))},easeInCirc:function(t){return t>=1?t:-1*(Math.sqrt(1-(t/=1)*t)-1)},easeOutCirc:function(t){return 1*Math.sqrt(1-(t=t/1-1)*t)},easeInOutCirc:function(t){return(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},easeInElastic:function(t){var e=1.70158,i=0,n=1;return 0===t?0:1==(t/=1)?1:(i||(i=.3),n<Math.abs(1)?(n=1,e=i/4):e=i/(2*Math.PI)*Math.asin(1/n),-n*Math.pow(2,10*(t-=1))*Math.sin((1*t-e)*(2*Math.PI)/i))},easeOutElastic:function(t){var e=1.70158,i=0,n=1;return 0===t?0:1==(t/=1)?1:(i||(i=.3),n<Math.abs(1)?(n=1,e=i/4):e=i/(2*Math.PI)*Math.asin(1/n),n*Math.pow(2,-10*t)*Math.sin((1*t-e)*(2*Math.PI)/i)+1)},easeInOutElastic:function(t){var e=1.70158,i=0,n=1;return 0===t?0:2==(t/=.5)?1:(i||(i=.3*1.5*1),n<Math.abs(1)?(n=1,e=i/4):e=i/(2*Math.PI)*Math.asin(1/n),t<1?n*Math.pow(2,10*(t-=1))*Math.sin((1*t-e)*(2*Math.PI)/i)*-.5:n*Math.pow(2,-10*(t-=1))*Math.sin((1*t-e)*(2*Math.PI)/i)*.5+1)},easeInBack:function(t){return 1*(t/=1)*t*(2.70158*t-1.70158)},easeOutBack:function(t){return 1*((t=t/1-1)*t*(2.70158*t+1.70158)+1)},easeInOutBack:function(t){var e=1.70158;return(t/=.5)<1?t*t*((1+(e*=1.525))*t-e)*.5:.5*((t-=2)*t*((1+(e*=1.525))*t+e)+2)},easeInBounce:function(t){return 1-o.easeOutBounce(1-t)},easeOutBounce:function(t){return(t/=1)<1/2.75?7.5625*t*t*1:t<2/2.75?1*(7.5625*(t-=1.5/2.75)*t+.75):t<2.5/2.75?1*(7.5625*(t-=2.25/2.75)*t+.9375):1*(7.5625*(t-=2.625/2.75)*t+.984375)},easeInOutBounce:function(t){return t<.5?.5*o.easeInBounce(2*t):.5*o.easeOutBounce(2*t-1)+.5}};function a(t,e,i){var n;return"string"==typeof t?(n=parseInt(t,10),-1!==t.indexOf("%")&&(n=n/100*e.parentNode[i])):n=t,n}function r(t){return void 0!==t&&null!==t&&"none"!==t}function s(t,e,i){var n=document.defaultView,o=t.parentNode,s=n.getComputedStyle(t)[e],l=n.getComputedStyle(o)[e],c=r(s),u=r(l),d=Number.POSITIVE_INFINITY;return c||u?Math.min(c?a(s,t,i):d,u?a(l,o,i):d):"none"}i.requestAnimFrame="undefined"==typeof window?function(t){t()}:window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return window.setTimeout(t,1e3/60)},i.getRelativePosition=function(t,e){var n,o,a=t.originalEvent||t,r=t.currentTarget||t.srcElement,s=r.getBoundingClientRect(),l=a.touches;l&&l.length>0?(n=l[0].clientX,o=l[0].clientY):(n=a.clientX,o=a.clientY);var c=parseFloat(i.getStyle(r,"padding-left")),u=parseFloat(i.getStyle(r,"padding-top")),d=parseFloat(i.getStyle(r,"padding-right")),h=parseFloat(i.getStyle(r,"padding-bottom")),p=s.right-s.left-c-d,f=s.bottom-s.top-u-h;return{x:n=Math.round((n-s.left-c)/p*r.width/e.currentDevicePixelRatio),y:o=Math.round((o-s.top-u)/f*r.height/e.currentDevicePixelRatio)}},i.addEvent=function(t,e,i){t.addEventListener?t.addEventListener(e,i):t.attachEvent?t.attachEvent("on"+e,i):t["on"+e]=i},i.removeEvent=function(t,e,n){t.removeEventListener?t.removeEventListener(e,n,!1):t.detachEvent?t.detachEvent("on"+e,n):t["on"+e]=i.noop},i.getConstraintWidth=function(t){return s(t,"max-width","clientWidth")},i.getConstraintHeight=function(t){return s(t,"max-height","clientHeight")},i.getMaximumWidth=function(t){var e=t.parentNode,n=parseInt(i.getStyle(e,"padding-left"),10),o=parseInt(i.getStyle(e,"padding-right"),10),a=e.clientWidth-n-o,r=i.getConstraintWidth(t);return isNaN(r)?a:Math.min(a,r)},i.getMaximumHeight=function(t){var e=t.parentNode,n=parseInt(i.getStyle(e,"padding-top"),10),o=parseInt(i.getStyle(e,"padding-bottom"),10),a=e.clientHeight-n-o,r=i.getConstraintHeight(t);return isNaN(r)?a:Math.min(a,r)},i.getStyle=function(t,e){return t.currentStyle?t.currentStyle[e]:document.defaultView.getComputedStyle(t,null).getPropertyValue(e)},i.retinaScale=function(t){var e=t.currentDevicePixelRatio=window.devicePixelRatio||1;if(1!==e){var i=t.canvas,n=t.height,o=t.width;i.height=n*e,i.width=o*e,t.ctx.scale(e,e),i.style.height=n+"px",i.style.width=o+"px"}},i.clear=function(t){t.ctx.clearRect(0,0,t.width,t.height)},i.fontString=function(t,e,i){return e+" "+t+"px "+i},i.longestText=function(t,e,n,o){var a=(o=o||{}).data=o.data||{},r=o.garbageCollect=o.garbageCollect||[];o.font!==e&&(a=o.data={},r=o.garbageCollect=[],o.font=e),t.font=e;var s=0;i.each(n,function(e){void 0!==e&&null!==e&&!0!==i.isArray(e)?s=i.measureText(t,a,r,s,e):i.isArray(e)&&i.each(e,function(e){void 0===e||null===e||i.isArray(e)||(s=i.measureText(t,a,r,s,e))})});var l=r.length/2;if(l>n.length){for(var c=0;c<l;c++)delete a[r[c]];r.splice(0,l)}return s},i.measureText=function(t,e,i,n,o){var a=e[o];return a||(a=e[o]=t.measureText(o).width,i.push(o)),a>n&&(n=a),n},i.numberOfLabelLines=function(t){var e=1;return i.each(t,function(t){i.isArray(t)&&t.length>e&&(e=t.length)}),e},i.drawRoundedRectangle=function(t,e,i,n,o,a){t.beginPath(),t.moveTo(e+a,i),t.lineTo(e+n-a,i),t.quadraticCurveTo(e+n,i,e+n,i+a),t.lineTo(e+n,i+o-a),t.quadraticCurveTo(e+n,i+o,e+n-a,i+o),t.lineTo(e+a,i+o),t.quadraticCurveTo(e,i+o,e,i+o-a),t.lineTo(e,i+a),t.quadraticCurveTo(e,i,e+a,i),t.closePath()},i.color=n?function(e){return e instanceof CanvasGradient&&(e=t.defaults.global.defaultColor),n(e)}:function(t){return console.error("Color.js not found!"),t},i.isArray=Array.isArray?function(t){return Array.isArray(t)}:function(t){return"[object Array]"===Object.prototype.toString.call(t)},i.arrayEquals=function(t,e){var n,o,a,r;if(!t||!e||t.length!==e.length)return!1;for(n=0,o=t.length;n<o;++n)if(a=t[n],r=e[n],a instanceof Array&&r instanceof Array){if(!i.arrayEquals(a,r))return!1}else if(a!==r)return!1;return!0},i.callback=function(t,e,i){t&&"function"==typeof t.call&&t.apply(i,e)},i.getHoverColor=function(t){return t instanceof CanvasPattern?t:i.color(t).saturate(.5).darken(.1).rgbString()},i.callCallback=i.callback}},{3:3}],27:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers;function i(t,i){return t.native?{x:t.x,y:t.y}:e.getRelativePosition(t,i)}function n(t,e){var i,n,o,a,r;for(n=0,a=t.data.datasets.length;n<a;++n)if(t.isDatasetVisible(n))for(o=0,r=(i=t.getDatasetMeta(n)).data.length;o<r;++o){var s=i.data[o];s._view.skip||e(s)}}function o(t,e){var i=[];return n(t,function(t){t.inRange(e.x,e.y)&&i.push(t)}),i}function a(t,i,o,a){var r=Number.POSITIVE_INFINITY,s=[];return a||(a=e.distanceBetweenPoints),n(t,function(t){if(!o||t.inRange(i.x,i.y)){var e=t.getCenterPoint(),n=a(i,e);n<r?(s=[t],r=n):n===r&&s.push(t)}}),s}function r(t,e,n){var r=i(e,t),s=n.intersect?o(t,r):a(t,r,!1,function(t,e){return Math.abs(t.x-e.x)}),l=[];return s.length?(t.data.datasets.forEach(function(e,i){if(t.isDatasetVisible(i)){var n=t.getDatasetMeta(i).data[s[0]._index];n&&!n._view.skip&&l.push(n)}}),l):[]}t.Interaction={modes:{single:function(t,e){var o=i(e,t),a=[];return n(t,function(t){if(t.inRange(o.x,o.y))return a.push(t),a}),a.slice(0,1)},label:r,index:r,dataset:function(t,e,n){var r=i(e,t),s=n.intersect?o(t,r):a(t,r,!1);return s.length>0&&(s=t.getDatasetMeta(s[0]._datasetIndex).data),s},"x-axis":function(t,e){return r(t,e,!0)},point:function(t,e){return o(t,i(e,t))},nearest:function(t,e,n){var o=a(t,i(e,t),n.intersect);return o.length>1&&o.sort(function(t,e){var i=t.getArea()-e.getArea();return 0===i&&(i=t._datasetIndex-e._datasetIndex),i}),o.slice(0,1)},x:function(t,e,o){var a=i(e,t),r=[],s=!1;return n(t,function(t){t.inXRange(a.x)&&r.push(t),t.inRange(a.x,a.y)&&(s=!0)}),o.intersect&&!s&&(r=[]),r},y:function(t,e,o){var a=i(e,t),r=[],s=!1;return n(t,function(t){t.inYRange(a.y)&&r.push(t),t.inRange(a.x,a.y)&&(s=!0)}),o.intersect&&!s&&(r=[]),r}}}}},{}],28:[function(t,e,i){"use strict";e.exports=function(){var t=function(t,e){return this.construct(t,e),this};return t.defaults={global:{responsive:!0,responsiveAnimationDuration:0,maintainAspectRatio:!0,events:["mousemove","mouseout","click","touchstart","touchmove"],hover:{onHover:null,mode:"nearest",intersect:!0,animationDuration:400},onClick:null,defaultColor:"rgba(0,0,0,0.1)",defaultFontColor:"#666",defaultFontFamily:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",defaultFontSize:12,defaultFontStyle:"normal",showLines:!0,elements:{},legendCallback:function(t){var e=[];e.push('<ul class="'+t.id+'-legend">');for(var i=0;i<t.data.datasets.length;i++)e.push('<li><span style="background-color:'+t.data.datasets[i].backgroundColor+'"></span>'),t.data.datasets[i].label&&e.push(t.data.datasets[i].label),e.push("</li>");return e.push("</ul>"),e.join("")}}},t.Chart=t,t}},{}],29:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers;function i(t,i){return e.where(t,function(t){return t.position===i})}function n(t,e){t.forEach(function(t,e){return t._tmpIndex_=e,t}),t.sort(function(t,i){var n=e?i:t,o=e?t:i;return n.weight===o.weight?n._tmpIndex_-o._tmpIndex_:n.weight-o.weight}),t.forEach(function(t){delete t._tmpIndex_})}t.layoutService={defaults:{},addBox:function(t,e){t.boxes||(t.boxes=[]),e.fullWidth=e.fullWidth||!1,e.position=e.position||"top",e.weight=e.weight||0,t.boxes.push(e)},removeBox:function(t,e){var i=t.boxes?t.boxes.indexOf(e):-1;-1!==i&&t.boxes.splice(i,1)},configure:function(t,e,i){for(var n,o=["fullWidth","position","weight"],a=o.length,r=0;r<a;++r)n=o[r],i.hasOwnProperty(n)&&(e[n]=i[n])},update:function(t,o,a){if(t){var r=t.options.layout,s=r?r.padding:null,l=0,c=0,u=0,d=0;isNaN(s)?(l=s.left||0,c=s.right||0,u=s.top||0,d=s.bottom||0):(l=s,c=s,u=s,d=s);var h=i(t.boxes,"left"),p=i(t.boxes,"right"),f=i(t.boxes,"top"),m=i(t.boxes,"bottom"),g=i(t.boxes,"chartArea");n(h,!0),n(p,!1),n(f,!0),n(m,!1);var v=o-l-c,y=a-u-d,b=y/2,x=(o-v/2)/(h.length+p.length),w=(a-b)/(f.length+m.length),k=v,C=y,S=[];e.each(h.concat(p,f,m),function(t){var e,i=t.isHorizontal();i?(e=t.update(t.fullWidth?v:k,w),C-=e.height):(e=t.update(x,b),k-=e.width),S.push({horizontal:i,minSize:e,box:t})});var T=0,M=0,I=0,P=0;e.each(f.concat(m),function(t){if(t.getPadding){var e=t.getPadding();T=Math.max(T,e.left),M=Math.max(M,e.right)}}),e.each(h.concat(p),function(t){if(t.getPadding){var e=t.getPadding();I=Math.max(I,e.top),P=Math.max(P,e.bottom)}});var A=l,D=c,E=u,_=d;e.each(h.concat(p),z),e.each(h,function(t){A+=t.width}),e.each(p,function(t){D+=t.width}),e.each(f.concat(m),z),e.each(f,function(t){E+=t.height}),e.each(m,function(t){_+=t.height}),e.each(h.concat(p),function(t){var i=e.findNextWhere(S,function(e){return e.box===t}),n={left:0,right:0,top:E,bottom:_};i&&t.update(i.minSize.width,C,n)}),A=l,D=c,E=u,_=d,e.each(h,function(t){A+=t.width}),e.each(p,function(t){D+=t.width}),e.each(f,function(t){E+=t.height}),e.each(m,function(t){_+=t.height});var O=Math.max(T-A,0);A+=O,D+=Math.max(M-D,0);var L=Math.max(I-E,0);E+=L,_+=Math.max(P-_,0);var R=a-E-_,F=o-A-D;F===k&&R===C||(e.each(h,function(t){t.height=R}),e.each(p,function(t){t.height=R}),e.each(f,function(t){t.fullWidth||(t.width=F)}),e.each(m,function(t){t.fullWidth||(t.width=F)}),C=R,k=F);var V=l+O,W=u+L;e.each(h.concat(f),H),V+=k,W+=C,e.each(p,H),e.each(m,H),t.chartArea={left:A,top:E,right:A+k,bottom:E+C},e.each(g,function(e){e.left=t.chartArea.left,e.top=t.chartArea.top,e.right=t.chartArea.right,e.bottom=t.chartArea.bottom,e.update(k,C)})}function z(t){var i=e.findNextWhere(S,function(e){return e.box===t});if(i)if(t.isHorizontal()){var n={left:Math.max(A,T),right:Math.max(D,M),top:0,bottom:0};t.update(t.fullWidth?v:k,y/2,n)}else t.update(i.minSize.width,C)}function H(t){t.isHorizontal()?(t.left=t.fullWidth?l:A,t.right=t.fullWidth?o-c:A+k,t.top=W,t.bottom=W+t.height,W=t.bottom):(t.left=V,t.right=V+t.width,t.top=E,t.bottom=E+C,V=t.right)}}}}},{}],30:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers;t.defaults.global.plugins={},t.plugins={_plugins:[],_cacheId:0,register:function(t){var e=this._plugins;[].concat(t).forEach(function(t){-1===e.indexOf(t)&&e.push(t)}),this._cacheId++},unregister:function(t){var e=this._plugins;[].concat(t).forEach(function(t){var i=e.indexOf(t);-1!==i&&e.splice(i,1)}),this._cacheId++},clear:function(){this._plugins=[],this._cacheId++},count:function(){return this._plugins.length},getAll:function(){return this._plugins},notify:function(t,e,i){var n,o,a,r,s,l=this.descriptors(t),c=l.length;for(n=0;n<c;++n)if("function"==typeof(s=(a=(o=l[n]).plugin)[e])&&((r=[t].concat(i||[])).push(o.options),!1===s.apply(a,r)))return!1;return!0},descriptors:function(i){var n=i._plugins||(i._plugins={});if(n.id===this._cacheId)return n.descriptors;var o=[],a=[],r=i&&i.config||{},s=t.defaults.global.plugins,l=r.options&&r.options.plugins||{};return this._plugins.concat(r.plugins||[]).forEach(function(t){if(-1===o.indexOf(t)){var i=t.id,n=l[i];!1!==n&&(!0===n&&(n=e.clone(s[i])),o.push(t),a.push({plugin:t,options:n||{}}))}}),n.descriptors=a,n.id=this._cacheId,a}},t.pluginService=t.plugins,t.PluginBase=t.Element.extend({})}},{}],31:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers;function i(t,i,n){return e.isArray(i)?e.longestText(t,n,i):t.measureText(i).width}function n(i){var n=e.getValueOrDefault,o=t.defaults.global,a=n(i.fontSize,o.defaultFontSize),r=n(i.fontStyle,o.defaultFontStyle),s=n(i.fontFamily,o.defaultFontFamily);return{size:a,style:r,family:s,font:e.fontString(a,r,s)}}t.defaults.scale={display:!0,position:"left",gridLines:{display:!0,color:"rgba(0, 0, 0, 0.1)",lineWidth:1,drawBorder:!0,drawOnChartArea:!0,drawTicks:!0,tickMarkLength:10,zeroLineWidth:1,zeroLineColor:"rgba(0,0,0,0.25)",zeroLineBorderDash:[],zeroLineBorderDashOffset:0,offsetGridLines:!1,borderDash:[],borderDashOffset:0},scaleLabel:{labelString:"",display:!1},ticks:{beginAtZero:!1,minRotation:0,maxRotation:50,mirror:!1,padding:0,reverse:!1,display:!0,autoSkip:!0,autoSkipPadding:0,labelOffset:0,callback:t.Ticks.formatters.values}},t.Scale=t.Element.extend({getPadding:function(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}},beforeUpdate:function(){e.callback(this.options.beforeUpdate,[this])},update:function(t,i,n){return this.beforeUpdate(),this.maxWidth=t,this.maxHeight=i,this.margins=e.extend({left:0,right:0,top:0,bottom:0},n),this.longestTextCache=this.longestTextCache||{},this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this.beforeBuildTicks(),this.buildTicks(),this.afterBuildTicks(),this.beforeTickToLabelConversion(),this.convertTicksToLabels(),this.afterTickToLabelConversion(),this.beforeCalculateTickRotation(),this.calculateTickRotation(),this.afterCalculateTickRotation(),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate(),this.minSize},afterUpdate:function(){e.callback(this.options.afterUpdate,[this])},beforeSetDimensions:function(){e.callback(this.options.beforeSetDimensions,[this])},setDimensions:function(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0},afterSetDimensions:function(){e.callback(this.options.afterSetDimensions,[this])},beforeDataLimits:function(){e.callback(this.options.beforeDataLimits,[this])},determineDataLimits:e.noop,afterDataLimits:function(){e.callback(this.options.afterDataLimits,[this])},beforeBuildTicks:function(){e.callback(this.options.beforeBuildTicks,[this])},buildTicks:e.noop,afterBuildTicks:function(){e.callback(this.options.afterBuildTicks,[this])},beforeTickToLabelConversion:function(){e.callback(this.options.beforeTickToLabelConversion,[this])},convertTicksToLabels:function(){var t=this.options.ticks;this.ticks=this.ticks.map(t.userCallback||t.callback)},afterTickToLabelConversion:function(){e.callback(this.options.afterTickToLabelConversion,[this])},beforeCalculateTickRotation:function(){e.callback(this.options.beforeCalculateTickRotation,[this])},calculateTickRotation:function(){var t=this.ctx,i=this.options.ticks,o=n(i);t.font=o.font;var a=i.minRotation||0;if(this.options.display&&this.isHorizontal())for(var r,s=e.longestText(t,o.font,this.ticks,this.longestTextCache),l=s,c=this.getPixelForTick(1)-this.getPixelForTick(0)-6;l>c&&a<i.maxRotation;){var u=e.toRadians(a);if(r=Math.cos(u),Math.sin(u)*s>this.maxHeight){a--;break}a++,l=r*s}this.labelRotation=a},afterCalculateTickRotation:function(){e.callback(this.options.afterCalculateTickRotation,[this])},beforeFit:function(){e.callback(this.options.beforeFit,[this])},fit:function(){var t=this.minSize={width:0,height:0},o=this.options,a=o.ticks,r=o.scaleLabel,s=o.gridLines,l=o.display,c=this.isHorizontal(),u=n(a),d=1.5*n(r).size,h=o.gridLines.tickMarkLength;if(t.width=c?this.isFullWidth()?this.maxWidth-this.margins.left-this.margins.right:this.maxWidth:l&&s.drawTicks?h:0,t.height=c?l&&s.drawTicks?h:0:this.maxHeight,r.display&&l&&(c?t.height+=d:t.width+=d),a.display&&l){var p=e.longestText(this.ctx,u.font,this.ticks,this.longestTextCache),f=e.numberOfLabelLines(this.ticks),m=.5*u.size;if(c){this.longestLabelWidth=p;var g=e.toRadians(this.labelRotation),v=Math.cos(g),y=Math.sin(g)*p+u.size*f+m*f;t.height=Math.min(this.maxHeight,t.height+y),this.ctx.font=u.font;var b=this.ticks[0],x=i(this.ctx,b,u.font),w=this.ticks[this.ticks.length-1],k=i(this.ctx,w,u.font);0!==this.labelRotation?(this.paddingLeft="bottom"===o.position?v*x+3:v*m+3,this.paddingRight="bottom"===o.position?v*m+3:v*k+3):(this.paddingLeft=x/2+3,this.paddingRight=k/2+3)}else a.mirror?p=0:p+=this.options.ticks.padding,t.width=Math.min(this.maxWidth,t.width+p),this.paddingTop=u.size/2,this.paddingBottom=u.size/2}this.handleMargins(),this.width=t.width,this.height=t.height},handleMargins:function(){this.margins&&(this.paddingLeft=Math.max(this.paddingLeft-this.margins.left,0),this.paddingTop=Math.max(this.paddingTop-this.margins.top,0),this.paddingRight=Math.max(this.paddingRight-this.margins.right,0),this.paddingBottom=Math.max(this.paddingBottom-this.margins.bottom,0))},afterFit:function(){e.callback(this.options.afterFit,[this])},isHorizontal:function(){return"top"===this.options.position||"bottom"===this.options.position},isFullWidth:function(){return this.options.fullWidth},getRightValue:function(t){return null===t||void 0===t?NaN:"number"!=typeof t||isFinite(t)?"object"==typeof t?t instanceof Date||t.isValid?t:this.getRightValue(this.isHorizontal()?t.x:t.y):t:NaN},getLabelForIndex:e.noop,getPixelForValue:e.noop,getValueForPixel:e.noop,getPixelForTick:function(t,e){if(this.isHorizontal()){var i=(this.width-(this.paddingLeft+this.paddingRight))/Math.max(this.ticks.length-(this.options.gridLines.offsetGridLines?0:1),1),n=i*t+this.paddingLeft;e&&(n+=i/2);var o=this.left+Math.round(n);return o+=this.isFullWidth()?this.margins.left:0}var a=this.height-(this.paddingTop+this.paddingBottom);return this.top+t*(a/(this.ticks.length-1))},getPixelForDecimal:function(t){if(this.isHorizontal()){var e=(this.width-(this.paddingLeft+this.paddingRight))*t+this.paddingLeft,i=this.left+Math.round(e);return i+=this.isFullWidth()?this.margins.left:0}return this.top+t*this.height},getBasePixel:function(){return this.getPixelForValue(this.getBaseValue())},getBaseValue:function(){var t=this.min,e=this.max;return this.beginAtZero?0:t<0&&e<0?e:t>0&&e>0?t:0},draw:function(i){var o=this,a=o.options;if(a.display){var r,s,l=o.ctx,c=t.defaults.global,u=a.ticks,d=a.gridLines,h=a.scaleLabel,p=0!==o.labelRotation,f=u.autoSkip,m=o.isHorizontal();u.maxTicksLimit&&(s=u.maxTicksLimit);var g=e.getValueOrDefault(u.fontColor,c.defaultFontColor),v=n(u),y=d.drawTicks?d.tickMarkLength:0,b=e.getValueOrDefault(h.fontColor,c.defaultFontColor),x=n(h),w=e.toRadians(o.labelRotation),k=Math.cos(w),C=o.longestLabelWidth*k;l.fillStyle=g;var S=[];if(m){if(r=!1,(C+u.autoSkipPadding)*o.ticks.length>o.width-(o.paddingLeft+o.paddingRight)&&(r=1+Math.floor((C+u.autoSkipPadding)*o.ticks.length/(o.width-(o.paddingLeft+o.paddingRight)))),s&&o.ticks.length>s)for(;!r||o.ticks.length/(r||1)>s;)r||(r=1),r+=1;f||(r=!1)}var T="right"===a.position?o.left:o.right-y,M="right"===a.position?o.left+y:o.right,I="bottom"===a.position?o.top:o.bottom-y,P="bottom"===a.position?o.top+y:o.bottom;if(e.each(o.ticks,function(t,n){if(void 0!==t&&null!==t){var s=o.ticks.length===n+1;if((!(r>1&&n%r>0||n%r==0&&n+r>=o.ticks.length)||s)&&void 0!==t&&null!==t){var l,h,f,g,v,b,x,k,C,A,D,E,_,O;n===(void 0!==o.zeroLineIndex?o.zeroLineIndex:0)?(l=d.zeroLineWidth,h=d.zeroLineColor,f=d.zeroLineBorderDash,g=d.zeroLineBorderDashOffset):(l=e.getValueAtIndexOrDefault(d.lineWidth,n),h=e.getValueAtIndexOrDefault(d.color,n),f=e.getValueOrDefault(d.borderDash,c.borderDash),g=e.getValueOrDefault(d.borderDashOffset,c.borderDashOffset));var L="middle",R="middle";if(m){"bottom"===a.position?(R=p?"middle":"top",L=p?"right":"center",O=o.top+y):(R=p?"middle":"bottom",L=p?"left":"center",O=o.bottom-y);var F=o.getPixelForTick(n)+e.aliasPixel(l);_=o.getPixelForTick(n,d.offsetGridLines)+u.labelOffset,v=x=C=D=F,b=I,k=P,A=i.top,E=i.bottom}else{var V,W="left"===a.position,z=u.padding;u.mirror?(L=W?"left":"right",V=z):(L=W?"right":"left",V=y+z),_=W?o.right-V:o.left+V;var H=o.getPixelForTick(n);H+=e.aliasPixel(l),O=o.getPixelForTick(n,d.offsetGridLines),v=T,x=M,C=i.left,D=i.right,b=k=A=E=H}S.push({tx1:v,ty1:b,tx2:x,ty2:k,x1:C,y1:A,x2:D,y2:E,labelX:_,labelY:O,glWidth:l,glColor:h,glBorderDash:f,glBorderDashOffset:g,rotation:-1*w,label:t,textBaseline:R,textAlign:L})}}}),e.each(S,function(t){if(d.display&&(l.save(),l.lineWidth=t.glWidth,l.strokeStyle=t.glColor,l.setLineDash&&(l.setLineDash(t.glBorderDash),l.lineDashOffset=t.glBorderDashOffset),l.beginPath(),d.drawTicks&&(l.moveTo(t.tx1,t.ty1),l.lineTo(t.tx2,t.ty2)),d.drawOnChartArea&&(l.moveTo(t.x1,t.y1),l.lineTo(t.x2,t.y2)),l.stroke(),l.restore()),u.display){l.save(),l.translate(t.labelX,t.labelY),l.rotate(t.rotation),l.font=v.font,l.textBaseline=t.textBaseline,l.textAlign=t.textAlign;var i=t.label;if(e.isArray(i))for(var n=0,o=0;n<i.length;++n)l.fillText(""+i[n],0,o),o+=1.5*v.size;else l.fillText(i,0,0);l.restore()}}),h.display){var A,D,E=0;if(m)A=o.left+(o.right-o.left)/2,D="bottom"===a.position?o.bottom-x.size/2:o.top+x.size/2;else{var _="left"===a.position;A=_?o.left+x.size/2:o.right-x.size/2,D=o.top+(o.bottom-o.top)/2,E=_?-.5*Math.PI:.5*Math.PI}l.save(),l.translate(A,D),l.rotate(E),l.textAlign="center",l.textBaseline="middle",l.fillStyle=b,l.font=x.font,l.fillText(h.labelString,0,0),l.restore()}if(d.drawBorder){l.lineWidth=e.getValueAtIndexOrDefault(d.lineWidth,0),l.strokeStyle=e.getValueAtIndexOrDefault(d.color,0);var O=o.left,L=o.right,R=o.top,F=o.bottom,V=e.aliasPixel(l.lineWidth);m?(R=F="top"===a.position?o.bottom:o.top,R+=V,F+=V):(O=L="left"===a.position?o.right:o.left,O+=V,L+=V),l.beginPath(),l.moveTo(O,R),l.lineTo(L,F),l.stroke()}}}})}},{}],32:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers;t.scaleService={constructors:{},defaults:{},registerScaleType:function(t,i,n){this.constructors[t]=i,this.defaults[t]=e.clone(n)},getScaleConstructor:function(t){return this.constructors.hasOwnProperty(t)?this.constructors[t]:void 0},getScaleDefaults:function(i){return this.defaults.hasOwnProperty(i)?e.scaleMerge(t.defaults.scale,this.defaults[i]):{}},updateScaleDefaults:function(t,i){var n=this.defaults;n.hasOwnProperty(t)&&(n[t]=e.extend(n[t],i))},addScalesToLayout:function(i){e.each(i.scales,function(e){e.fullWidth=e.options.fullWidth,e.position=e.options.position,e.weight=e.options.weight,t.layoutService.addBox(i,e)})}}}},{}],33:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers;t.Ticks={generators:{linear:function(t,i){var n,o=[];if(t.stepSize&&t.stepSize>0)n=t.stepSize;else{var a=e.niceNum(i.max-i.min,!1);n=e.niceNum(a/(t.maxTicks-1),!0)}var r=Math.floor(i.min/n)*n,s=Math.ceil(i.max/n)*n;t.min&&t.max&&t.stepSize&&e.almostWhole((t.max-t.min)/t.stepSize,n/1e3)&&(r=t.min,s=t.max);var l=(s-r)/n;l=e.almostEquals(l,Math.round(l),n/1e3)?Math.round(l):Math.ceil(l),o.push(void 0!==t.min?t.min:r);for(var c=1;c<l;++c)o.push(r+c*n);return o.push(void 0!==t.max?t.max:s),o},logarithmic:function(t,i){var n,o,a=[],r=e.getValueOrDefault,s=r(t.min,Math.pow(10,Math.floor(e.log10(i.min)))),l=Math.floor(e.log10(i.max)),c=Math.ceil(i.max/Math.pow(10,l));0===s?(n=Math.floor(e.log10(i.minNotZero)),o=Math.floor(i.minNotZero/Math.pow(10,n)),a.push(s),s=o*Math.pow(10,n)):(n=Math.floor(e.log10(s)),o=Math.floor(s/Math.pow(10,n)));do{a.push(s),10===++o&&(o=1,++n),s=o*Math.pow(10,n)}while(n<l||n===l&&o<c);var u=r(t.max,s);return a.push(u),a}},formatters:{values:function(t){return e.isArray(t)?t:""+t},linear:function(t,i,n){var o=n.length>3?n[2]-n[1]:n[1]-n[0];Math.abs(o)>1&&t!==Math.floor(t)&&(o=t-Math.floor(t));var a=e.log10(Math.abs(o)),r="";if(0!==t){var s=-1*Math.floor(a);s=Math.max(Math.min(s,20),0),r=t.toFixed(s)}else r="0";return r},logarithmic:function(t,i,n){var o=t/Math.pow(10,Math.floor(e.log10(t)));return 0===t?"0":1===o||2===o||5===o||0===i||i===n.length-1?t.toExponential():""}}}}},{}],34:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers;function i(t,i){var n=e.color(t);return n.alpha(i*n.alpha()).rgbaString()}function n(t,i){return i&&(e.isArray(i)?Array.prototype.push.apply(t,i):t.push(i)),t}function o(i){var n=t.defaults.global,o=e.getValueOrDefault;return{xPadding:i.xPadding,yPadding:i.yPadding,xAlign:i.xAlign,yAlign:i.yAlign,bodyFontColor:i.bodyFontColor,_bodyFontFamily:o(i.bodyFontFamily,n.defaultFontFamily),_bodyFontStyle:o(i.bodyFontStyle,n.defaultFontStyle),_bodyAlign:i.bodyAlign,bodyFontSize:o(i.bodyFontSize,n.defaultFontSize),bodySpacing:i.bodySpacing,titleFontColor:i.titleFontColor,_titleFontFamily:o(i.titleFontFamily,n.defaultFontFamily),_titleFontStyle:o(i.titleFontStyle,n.defaultFontStyle),titleFontSize:o(i.titleFontSize,n.defaultFontSize),_titleAlign:i.titleAlign,titleSpacing:i.titleSpacing,titleMarginBottom:i.titleMarginBottom,footerFontColor:i.footerFontColor,_footerFontFamily:o(i.footerFontFamily,n.defaultFontFamily),_footerFontStyle:o(i.footerFontStyle,n.defaultFontStyle),footerFontSize:o(i.footerFontSize,n.defaultFontSize),_footerAlign:i.footerAlign,footerSpacing:i.footerSpacing,footerMarginTop:i.footerMarginTop,caretSize:i.caretSize,cornerRadius:i.cornerRadius,backgroundColor:i.backgroundColor,opacity:0,legendColorBackground:i.multiKeyBackground,displayColors:i.displayColors,borderColor:i.borderColor,borderWidth:i.borderWidth}}t.defaults.global.tooltips={enabled:!0,custom:null,mode:"nearest",position:"average",intersect:!0,backgroundColor:"rgba(0,0,0,0.8)",titleFontStyle:"bold",titleSpacing:2,titleMarginBottom:6,titleFontColor:"#fff",titleAlign:"left",bodySpacing:2,bodyFontColor:"#fff",bodyAlign:"left",footerFontStyle:"bold",footerSpacing:2,footerMarginTop:6,footerFontColor:"#fff",footerAlign:"left",yPadding:6,xPadding:6,caretPadding:2,caretSize:5,cornerRadius:6,multiKeyBackground:"#fff",displayColors:!0,borderColor:"rgba(0,0,0,0)",borderWidth:0,callbacks:{beforeTitle:e.noop,title:function(t,e){var i="",n=e.labels,o=n?n.length:0;if(t.length>0){var a=t[0];a.xLabel?i=a.xLabel:o>0&&a.index<o&&(i=n[a.index])}return i},afterTitle:e.noop,beforeBody:e.noop,beforeLabel:e.noop,label:function(t,e){var i=e.datasets[t.datasetIndex].label||"";return i&&(i+=": "),i+=t.yLabel},labelColor:function(t,e){var i=e.getDatasetMeta(t.datasetIndex).data[t.index]._view;return{borderColor:i.borderColor,backgroundColor:i.backgroundColor}},afterLabel:e.noop,afterBody:e.noop,beforeFooter:e.noop,footer:e.noop,afterFooter:e.noop}},t.Tooltip=t.Element.extend({initialize:function(){this._model=o(this._options)},getTitle:function(){var t=this._options.callbacks,e=t.beforeTitle.apply(this,arguments),i=t.title.apply(this,arguments),o=t.afterTitle.apply(this,arguments),a=[];return a=n(a=n(a=n(a,e),i),o)},getBeforeBody:function(){var t=this._options.callbacks.beforeBody.apply(this,arguments);return e.isArray(t)?t:void 0!==t?[t]:[]},getBody:function(t,i){var o=this,a=o._options.callbacks,r=[];return e.each(t,function(t){var e={before:[],lines:[],after:[]};n(e.before,a.beforeLabel.call(o,t,i)),n(e.lines,a.label.call(o,t,i)),n(e.after,a.afterLabel.call(o,t,i)),r.push(e)}),r},getAfterBody:function(){var t=this._options.callbacks.afterBody.apply(this,arguments);return e.isArray(t)?t:void 0!==t?[t]:[]},getFooter:function(){var t=this._options.callbacks,e=t.beforeFooter.apply(this,arguments),i=t.footer.apply(this,arguments),o=t.afterFooter.apply(this,arguments),a=[];return a=n(a=n(a=n(a,e),i),o)},update:function(i){var n,a,r,s,l,c,u,d,h,p,f,m,g,v,y,b,x,w,k,C=this,S=C._options,T=C._model,M=C._model=o(S),I=C._active,P=C._data,A={xAlign:T.xAlign,yAlign:T.yAlign},D={x:T.x,y:T.y},E={width:T.width,height:T.height},_={x:T.caretX,y:T.caretY};if(I.length){M.opacity=1;var O=[];_=t.Tooltip.positioners[S.position](I,C._eventPosition);var L=[];for(n=0,a=I.length;n<a;++n)L.push((y=I[n],b=void 0,x=void 0,void 0,void 0,b=y._xScale,x=y._yScale||y._scale,w=y._index,k=y._datasetIndex,{xLabel:b?b.getLabelForIndex(w,k):"",yLabel:x?x.getLabelForIndex(w,k):"",index:w,datasetIndex:k,x:y._model.x,y:y._model.y}));S.filter&&(L=L.filter(function(t){return S.filter(t,P)})),S.itemSort&&(L=L.sort(function(t,e){return S.itemSort(t,e,P)})),e.each(L,function(t){O.push(S.callbacks.labelColor.call(C,t,C._chart))}),M.title=C.getTitle(L,P),M.beforeBody=C.getBeforeBody(L,P),M.body=C.getBody(L,P),M.afterBody=C.getAfterBody(L,P),M.footer=C.getFooter(L,P),M.x=Math.round(_.x),M.y=Math.round(_.y),M.caretPadding=S.caretPadding,M.labelColors=O,M.dataPoints=L,A=function(t,e){var i,n,o,a,r,s=t._model,l=t._chart,c=t._chart.chartArea,u="center",d="center";s.y<e.height?d="top":s.y>l.height-e.height&&(d="bottom");var h=(c.left+c.right)/2,p=(c.top+c.bottom)/2;"center"===d?(i=function(t){return t<=h},n=function(t){return t>h}):(i=function(t){return t<=e.width/2},n=function(t){return t>=l.width-e.width/2}),o=function(t){return t+e.width>l.width},a=function(t){return t-e.width<0},r=function(t){return t<=p?"top":"bottom"},i(s.x)?(u="left",o(s.x)&&(u="center",d=r(s.y))):n(s.x)&&(u="right",a(s.x)&&(u="center",d=r(s.y)));var f=t._options;return{xAlign:f.xAlign?f.xAlign:u,yAlign:f.yAlign?f.yAlign:d}}(this,E=function(t,i){var n=t._chart.ctx,o=2*i.yPadding,a=0,r=i.body,s=r.reduce(function(t,e){return t+e.before.length+e.lines.length+e.after.length},0);s+=i.beforeBody.length+i.afterBody.length;var l=i.title.length,c=i.footer.length,u=i.titleFontSize,d=i.bodyFontSize,h=i.footerFontSize;o+=l*u,o+=l?(l-1)*i.titleSpacing:0,o+=l?i.titleMarginBottom:0,o+=s*d,o+=s?(s-1)*i.bodySpacing:0,o+=c?i.footerMarginTop:0,o+=c*h,o+=c?(c-1)*i.footerSpacing:0;var p=0,f=function(t){a=Math.max(a,n.measureText(t).width+p)};return n.font=e.fontString(u,i._titleFontStyle,i._titleFontFamily),e.each(i.title,f),n.font=e.fontString(d,i._bodyFontStyle,i._bodyFontFamily),e.each(i.beforeBody.concat(i.afterBody),f),p=i.displayColors?d+2:0,e.each(r,function(t){e.each(t.before,f),e.each(t.lines,f),e.each(t.after,f)}),p=0,n.font=e.fontString(h,i._footerFontStyle,i._footerFontFamily),e.each(i.footer,f),{width:a+=2*i.xPadding,height:o}}(this,M)),s=E,l=A,c=(r=M).x,u=r.y,d=r.caretSize,h=r.caretPadding,p=r.cornerRadius,f=l.xAlign,m=l.yAlign,g=d+h,v=p+h,"right"===f?c-=s.width:"center"===f&&(c-=s.width/2),"top"===m?u+=g:u-="bottom"===m?s.height+g:s.height/2,"center"===m?"left"===f?c+=g:"right"===f&&(c-=g):"left"===f?c-=v:"right"===f&&(c+=v),D={x:c,y:u}}else M.opacity=0;return M.xAlign=A.xAlign,M.yAlign=A.yAlign,M.x=D.x,M.y=D.y,M.width=E.width,M.height=E.height,M.caretX=_.x,M.caretY=_.y,C._model=M,i&&S.custom&&S.custom.call(C,M),C},drawCaret:function(t,e){var i=this._chart.ctx,n=this._view,o=this.getCaretPosition(t,e,n);i.lineTo(o.x1,o.y1),i.lineTo(o.x2,o.y2),i.lineTo(o.x3,o.y3)},getCaretPosition:function(t,e,i){var n,o,a,r,s,l,c=i.caretSize,u=i.cornerRadius,d=i.xAlign,h=i.yAlign,p=t.x,f=t.y,m=e.width,g=e.height;if("center"===h)s=f+g/2,"left"===d?(o=(n=p)-c,a=n,r=s+c,l=s-c):(o=(n=p+m)+c,a=n,r=s-c,l=s+c);else if("left"===d?(n=(o=p+u+c)-c,a=o+c):"right"===d?(n=(o=p+m-u-c)-c,a=o+c):(n=(o=p+m/2)-c,a=o+c),"top"===h)s=(r=f)-c,l=r;else{s=(r=f+g)+c,l=r;var v=a;a=n,n=v}return{x1:n,x2:o,x3:a,y1:r,y2:s,y3:l}},drawTitle:function(t,n,o,a){var r=n.title;if(r.length){o.textAlign=n._titleAlign,o.textBaseline="top";var s,l,c=n.titleFontSize,u=n.titleSpacing;for(o.fillStyle=i(n.titleFontColor,a),o.font=e.fontString(c,n._titleFontStyle,n._titleFontFamily),s=0,l=r.length;s<l;++s)o.fillText(r[s],t.x,t.y),t.y+=c+u,s+1===r.length&&(t.y+=n.titleMarginBottom-u)}},drawBody:function(t,n,o,a){var r=n.bodyFontSize,s=n.bodySpacing,l=n.body;o.textAlign=n._bodyAlign,o.textBaseline="top";var c=i(n.bodyFontColor,a);o.fillStyle=c,o.font=e.fontString(r,n._bodyFontStyle,n._bodyFontFamily);var u=0,d=function(e){o.fillText(e,t.x+u,t.y),t.y+=r+s};e.each(n.beforeBody,d);var h=n.displayColors;u=h?r+2:0,e.each(l,function(s,l){e.each(s.before,d),e.each(s.lines,function(e){h&&(o.fillStyle=i(n.legendColorBackground,a),o.fillRect(t.x,t.y,r,r),o.strokeStyle=i(n.labelColors[l].borderColor,a),o.strokeRect(t.x,t.y,r,r),o.fillStyle=i(n.labelColors[l].backgroundColor,a),o.fillRect(t.x+1,t.y+1,r-2,r-2),o.fillStyle=c),d(e)}),e.each(s.after,d)}),u=0,e.each(n.afterBody,d),t.y-=s},drawFooter:function(t,n,o,a){var r=n.footer;r.length&&(t.y+=n.footerMarginTop,o.textAlign=n._footerAlign,o.textBaseline="top",o.fillStyle=i(n.footerFontColor,a),o.font=e.fontString(n.footerFontSize,n._footerFontStyle,n._footerFontFamily),e.each(r,function(e){o.fillText(e,t.x,t.y),t.y+=n.footerFontSize+n.footerSpacing}))},drawBackground:function(t,e,n,o,a){n.fillStyle=i(e.backgroundColor,a),n.strokeStyle=i(e.borderColor,a),n.lineWidth=e.borderWidth;var r=e.xAlign,s=e.yAlign,l=t.x,c=t.y,u=o.width,d=o.height,h=e.cornerRadius;n.beginPath(),n.moveTo(l+h,c),"top"===s&&this.drawCaret(t,o),n.lineTo(l+u-h,c),n.quadraticCurveTo(l+u,c,l+u,c+h),"center"===s&&"right"===r&&this.drawCaret(t,o),n.lineTo(l+u,c+d-h),n.quadraticCurveTo(l+u,c+d,l+u-h,c+d),"bottom"===s&&this.drawCaret(t,o),n.lineTo(l+h,c+d),n.quadraticCurveTo(l,c+d,l,c+d-h),"center"===s&&"left"===r&&this.drawCaret(t,o),n.lineTo(l,c+h),n.quadraticCurveTo(l,c,l+h,c),n.closePath(),n.fill(),e.borderWidth>0&&n.stroke()},draw:function(){var t=this._chart.ctx,e=this._view;if(0!==e.opacity){var i={width:e.width,height:e.height},n={x:e.x,y:e.y},o=Math.abs(e.opacity<.001)?0:e.opacity,a=e.title.length||e.beforeBody.length||e.body.length||e.afterBody.length||e.footer.length;this._options.enabled&&a&&(this.drawBackground(n,e,t,i,o),n.x+=e.xPadding,n.y+=e.yPadding,this.drawTitle(n,e,t,o),this.drawBody(n,e,t,o),this.drawFooter(n,e,t,o))}},handleEvent:function(t){var i=this._options,n=!1;if(this._lastActive=this._lastActive||[],"mouseout"===t.type?this._active=[]:this._active=this._chart.getElementsAtEventForMode(t,i.mode,i),!(n=!e.arrayEquals(this._active,this._lastActive)))return!1;if(this._lastActive=this._active,i.enabled||i.custom){this._eventPosition={x:t.x,y:t.y};var o=this._model;this.update(!0),this.pivot(),n|=o.x!==this._model.x||o.y!==this._model.y}return n}}),t.Tooltip.positioners={average:function(t){if(!t.length)return!1;var e,i,n=0,o=0,a=0;for(e=0,i=t.length;e<i;++e){var r=t[e];if(r&&r.hasValue()){var s=r.tooltipPosition();n+=s.x,o+=s.y,++a}}return{x:Math.round(n/a),y:Math.round(o/a)}},nearest:function(t,i){var n,o,a,r=i.x,s=i.y,l=Number.POSITIVE_INFINITY;for(o=0,a=t.length;o<a;++o){var c=t[o];if(c&&c.hasValue()){var u=c.getCenterPoint(),d=e.distanceBetweenPoints(i,u);d<l&&(l=d,n=c)}}if(n){var h=n.tooltipPosition();r=h.x,s=h.y}return{x:r,y:s}}}}},{}],35:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers,i=t.defaults.global;i.elements.arc={backgroundColor:i.defaultColor,borderColor:"#fff",borderWidth:2},t.elements.Arc=t.Element.extend({inLabelRange:function(t){var e=this._view;return!!e&&Math.pow(t-e.x,2)<Math.pow(e.radius+e.hoverRadius,2)},inRange:function(t,i){var n=this._view;if(n){for(var o=e.getAngleFromPoint(n,{x:t,y:i}),a=o.angle,r=o.distance,s=n.startAngle,l=n.endAngle;l<s;)l+=2*Math.PI;for(;a>l;)a-=2*Math.PI;for(;a<s;)a+=2*Math.PI;var c=a>=s&&a<=l,u=r>=n.innerRadius&&r<=n.outerRadius;return c&&u}return!1},getCenterPoint:function(){var t=this._view,e=(t.startAngle+t.endAngle)/2,i=(t.innerRadius+t.outerRadius)/2;return{x:t.x+Math.cos(e)*i,y:t.y+Math.sin(e)*i}},getArea:function(){var t=this._view;return Math.PI*((t.endAngle-t.startAngle)/(2*Math.PI))*(Math.pow(t.outerRadius,2)-Math.pow(t.innerRadius,2))},tooltipPosition:function(){var t=this._view,e=t.startAngle+(t.endAngle-t.startAngle)/2,i=(t.outerRadius-t.innerRadius)/2+t.innerRadius;return{x:t.x+Math.cos(e)*i,y:t.y+Math.sin(e)*i}},draw:function(){var t=this._chart.ctx,e=this._view,i=e.startAngle,n=e.endAngle;t.beginPath(),t.arc(e.x,e.y,e.outerRadius,i,n),t.arc(e.x,e.y,e.innerRadius,n,i,!0),t.closePath(),t.strokeStyle=e.borderColor,t.lineWidth=e.borderWidth,t.fillStyle=e.backgroundColor,t.fill(),t.lineJoin="bevel",e.borderWidth&&t.stroke()}})}},{}],36:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers,i=t.defaults.global;t.defaults.global.elements.line={tension:.4,backgroundColor:i.defaultColor,borderWidth:3,borderColor:i.defaultColor,borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",capBezierPoints:!0,fill:!0},t.elements.Line=t.Element.extend({draw:function(){var t,n,o,a,r=this._view,s=this._chart.ctx,l=r.spanGaps,c=this._children.slice(),u=i.elements.line,d=-1;for(this._loop&&c.length&&c.push(c[0]),s.save(),s.lineCap=r.borderCapStyle||u.borderCapStyle,s.setLineDash&&s.setLineDash(r.borderDash||u.borderDash),s.lineDashOffset=r.borderDashOffset||u.borderDashOffset,s.lineJoin=r.borderJoinStyle||u.borderJoinStyle,s.lineWidth=r.borderWidth||u.borderWidth,s.strokeStyle=r.borderColor||i.defaultColor,s.beginPath(),d=-1,t=0;t<c.length;++t)n=c[t],o=e.previousItem(c,t),a=n._view,0===t?a.skip||(s.moveTo(a.x,a.y),d=t):(o=-1===d?o:c[d],a.skip||(d!==t-1&&!l||-1===d?s.moveTo(a.x,a.y):e.canvas.lineTo(s,o._view,n._view),d=t));s.stroke(),s.restore()}})}},{}],37:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers,i=t.defaults.global,n=i.defaultColor;function o(t){var e=this._view;return!!e&&Math.pow(t-e.x,2)<Math.pow(e.radius+e.hitRadius,2)}i.elements.point={radius:3,pointStyle:"circle",backgroundColor:n,borderWidth:1,borderColor:n,hitRadius:1,hoverRadius:4,hoverBorderWidth:1},t.elements.Point=t.Element.extend({inRange:function(t,e){var i=this._view;return!!i&&Math.pow(t-i.x,2)+Math.pow(e-i.y,2)<Math.pow(i.hitRadius+i.radius,2)},inLabelRange:o,inXRange:o,inYRange:function(t){var e=this._view;return!!e&&Math.pow(t-e.y,2)<Math.pow(e.radius+e.hitRadius,2)},getCenterPoint:function(){var t=this._view;return{x:t.x,y:t.y}},getArea:function(){return Math.PI*Math.pow(this._view.radius,2)},tooltipPosition:function(){var t=this._view;return{x:t.x,y:t.y,padding:t.radius+t.borderWidth}},draw:function(o){var a=this._view,r=this._model,s=this._chart.ctx,l=a.pointStyle,c=a.radius,u=a.x,d=a.y,h=t.helpers.color,p=0;a.skip||(s.strokeStyle=a.borderColor||n,s.lineWidth=e.getValueOrDefault(a.borderWidth,i.elements.point.borderWidth),s.fillStyle=a.backgroundColor||n,void 0!==o&&(r.x<o.left||1.01*o.right<r.x||r.y<o.top||1.01*o.bottom<r.y)&&(r.x<o.left?p=(u-r.x)/(o.left-r.x):1.01*o.right<r.x?p=(r.x-u)/(r.x-o.right):r.y<o.top?p=(d-r.y)/(o.top-r.y):1.01*o.bottom<r.y&&(p=(r.y-d)/(r.y-o.bottom)),p=Math.round(100*p)/100,s.strokeStyle=h(s.strokeStyle).alpha(p).rgbString(),s.fillStyle=h(s.fillStyle).alpha(p).rgbString()),t.canvasHelpers.drawPoint(s,l,c,u,d))}})}},{}],38:[function(t,e,i){"use strict";e.exports=function(t){var e=t.defaults.global;function i(t){return void 0!==t._view.width}function n(t){var e,n,o,a,r=t._view;if(i(t)){var s=r.width/2;e=r.x-s,n=r.x+s,o=Math.min(r.y,r.base),a=Math.max(r.y,r.base)}else{var l=r.height/2;e=Math.min(r.x,r.base),n=Math.max(r.x,r.base),o=r.y-l,a=r.y+l}return{left:e,top:o,right:n,bottom:a}}e.elements.rectangle={backgroundColor:e.defaultColor,borderWidth:0,borderColor:e.defaultColor,borderSkipped:"bottom"},t.elements.Rectangle=t.Element.extend({draw:function(){var t,e,i,n,o,a,r,s=this._chart.ctx,l=this._view,c=l.borderWidth;if(l.horizontal?(t=l.base,e=l.x,i=l.y-l.height/2,n=l.y+l.height/2,o=e>t?1:-1,a=1,r=l.borderSkipped||"left"):(t=l.x-l.width/2,e=l.x+l.width/2,i=l.y,o=1,a=(n=l.base)>i?1:-1,r=l.borderSkipped||"bottom"),c){var u=Math.min(Math.abs(t-e),Math.abs(i-n)),d=(c=c>u?u:c)/2,h=t+("left"!==r?d*o:0),p=e+("right"!==r?-d*o:0),f=i+("top"!==r?d*a:0),m=n+("bottom"!==r?-d*a:0);h!==p&&(i=f,n=m),f!==m&&(t=h,e=p)}s.beginPath(),s.fillStyle=l.backgroundColor,s.strokeStyle=l.borderColor,s.lineWidth=c;var g=[[t,n],[t,i],[e,i],[e,n]],v=["bottom","left","top","right"].indexOf(r,0);function y(t){return g[(v+t)%4]}-1===v&&(v=0);var b=y(0);s.moveTo(b[0],b[1]);for(var x=1;x<4;x++)b=y(x),s.lineTo(b[0],b[1]);s.fill(),c&&s.stroke()},height:function(){var t=this._view;return t.base-t.y},inRange:function(t,e){var i=!1;if(this._view){var o=n(this);i=t>=o.left&&t<=o.right&&e>=o.top&&e<=o.bottom}return i},inLabelRange:function(t,e){if(!this._view)return!1;var o=n(this);return i(this)?t>=o.left&&t<=o.right:e>=o.top&&e<=o.bottom},inXRange:function(t){var e=n(this);return t>=e.left&&t<=e.right},inYRange:function(t){var e=n(this);return t>=e.top&&t<=e.bottom},getCenterPoint:function(){var t,e,n=this._view;return i(this)?(t=n.x,e=(n.y+n.base)/2):(t=(n.x+n.base)/2,e=n.y),{x:t,y:e}},getArea:function(){var t=this._view;return t.width*Math.abs(t.y-t.base)},tooltipPosition:function(){var t=this._view;return{x:t.x,y:t.y}}})}},{}],39:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers,i={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"};function n(t,i){var n=e.getStyle(t,i),o=n&&n.match(/^(\d+)(\.\d+)?px$/);return o?Number(o[1]):void 0}function o(t,e,i,n,o){return{type:t,chart:e,native:o||null,x:void 0!==i?i:null,y:void 0!==n?n:null}}function a(t,i,n){var a,r,s=t._chartjs={ticking:!1};s.resizer=(a=function(){s.ticking||(s.ticking=!0,e.requestAnimFrame.call(window,function(){if(s.resizer)return s.ticking=!1,i(o("resize",n))}))},(r=document.createElement("iframe")).className="chartjs-hidden-iframe",r.style.cssText="display:block;overflow:hidden;border:0;margin:0;top:0;left:0;bottom:0;right:0;height:100%;width:100%;position:absolute;pointer-events:none;z-index:-1;",r.tabIndex=-1,e.addEvent(r,"load",function(){e.addEvent(r.contentWindow||r,"resize",a),a()}),r),t.insertBefore(s.resizer,t.firstChild)}return{acquireContext:function(t,e){"string"==typeof t?t=document.getElementById(t):t.length&&(t=t[0]),t&&t.canvas&&(t=t.canvas);var i=t&&t.getContext&&t.getContext("2d");return i&&i.canvas===t?(function(t,e){var i=t.style,o=t.getAttribute("height"),a=t.getAttribute("width");if(t._chartjs={initial:{height:o,width:a,style:{display:i.display,height:i.height,width:i.width}}},i.display=i.display||"block",null===a||""===a){var r=n(t,"width");void 0!==r&&(t.width=r)}if(null===o||""===o)if(""===t.style.height)t.height=t.width/(e.options.aspectRatio||2);else{var s=n(t,"height");void 0!==r&&(t.height=s)}}(t,e),i):null},releaseContext:function(t){var i=t.canvas;if(i._chartjs){var n=i._chartjs.initial;["height","width"].forEach(function(t){var e=n[t];void 0===e||null===e?i.removeAttribute(t):i.setAttribute(t,e)}),e.each(n.style||{},function(t,e){i.style[e]=t}),i.width=i.width,delete i._chartjs}},addEventListener:function(t,n,r){var s=t.canvas;if("resize"!==n){var l=r._chartjs||(r._chartjs={}),c=(l.proxies||(l.proxies={}))[t.id+"_"+n]=function(n){var a,s,l,c;r((s=t,l=i[(a=n).type]||a.type,c=e.getRelativePosition(a,s),o(l,s,c.x,c.y,a)))};e.addEvent(s,n,c)}else a(s.parentNode,r,t)},removeEventListener:function(t,i,n){var o=t.canvas;if("resize"!==i){var a=((n._chartjs||{}).proxies||{})[t.id+"_"+i];a&&e.removeEvent(o,i,a)}else!function(t){if(t&&t._chartjs){var e=t._chartjs.resizer;e&&(e.parentNode.removeChild(e),t._chartjs.resizer=null),delete t._chartjs}}(o.parentNode)}}}},{}],40:[function(t,e,i){"use strict";var n=t(39);e.exports=function(t){t.platform={acquireContext:function(){},releaseContext:function(){},addEventListener:function(){},removeEventListener:function(){}},t.helpers.extend(t.platform,n(t))}},{39:39}],41:[function(t,e,i){"use strict";e.exports=function(t){t.defaults.global.plugins.filler={propagate:!0};var e=t.defaults,i=t.helpers,n={dataset:function(t){var e=t.fill,i=t.chart,n=i.getDatasetMeta(e),o=n&&i.isDatasetVisible(e)&&n.dataset._children||[];return o.length?function(t,e){return o[e]._view||null}:null},boundary:function(t){var e=t.boundary,i=e?e.x:null,n=e?e.y:null;return function(t){return{x:null===i?t.x:i,y:null===n?t.y:n}}}};function o(t,e,i){var n,o=t._model||{},a=o.fill;if(void 0===a&&(a=!!o.backgroundColor),!1===a||null===a)return!1;if(!0===a)return"origin";if(n=parseFloat(a,10),isFinite(n)&&Math.floor(n)===n)return"-"!==a[0]&&"+"!==a[0]||(n=e+n),!(n===e||n<0||n>=i)&&n;switch(a){case"bottom":return"start";case"top":return"end";case"zero":return"origin";case"origin":case"start":case"end":return a;default:return!1}}function a(t){var e,i=t.el._model||{},n=t.el._scale||{},o=t.fill,a=null;if(isFinite(o))return null;if("start"===o?a=void 0===i.scaleBottom?n.bottom:i.scaleBottom:"end"===o?a=void 0===i.scaleTop?n.top:i.scaleTop:void 0!==i.scaleZero?a=i.scaleZero:n.getBasePosition?a=n.getBasePosition():n.getBasePixel&&(a=n.getBasePixel()),void 0!==a&&null!==a){if(void 0!==a.x&&void 0!==a.y)return a;if("number"==typeof a&&isFinite(a))return{x:(e=n.isHorizontal())?a:null,y:e?null:a}}return null}function r(t,e,i){var n,o=t[e].fill,a=[e];if(!i)return o;for(;!1!==o&&-1===a.indexOf(o);){if(!isFinite(o))return o;if(!(n=t[o]))return!1;if(n.visible)return o;a.push(o),o=n.fill}return!1}function s(t){return t&&!t.skip}function l(t,e,n,o,a){var r;if(o&&a){for(t.moveTo(e[0].x,e[0].y),r=1;r<o;++r)i.canvas.lineTo(t,e[r-1],e[r]);for(t.lineTo(n[a-1].x,n[a-1].y),r=a-1;r>0;--r)i.canvas.lineTo(t,n[r],n[r-1],!0)}}return{id:"filler",afterDatasetsUpdate:function(e,i){var s,l,c,u,d,h,p,f=(e.data.datasets||[]).length,m=i.propagate,g=[];for(l=0;l<f;++l)u=null,(c=(s=e.getDatasetMeta(l)).dataset)&&c._model&&c instanceof t.elements.Line&&(u={visible:e.isDatasetVisible(l),fill:o(c,l,f),chart:e,el:c}),s.$filler=u,g.push(u);for(l=0;l<f;++l)(u=g[l])&&(u.fill=r(g,l,m),u.boundary=a(u),u.mapper=(void 0,p=void 0,h=(d=u).fill,p="dataset",!1===h?null:(isFinite(h)||(p="boundary"),n[p](d))))},beforeDatasetDraw:function(t,i){var n=i.meta.$filler;if(n){var o=n.el,a=o._view,r=o._children||[],c=n.mapper,u=a.backgroundColor||e.global.defaultColor;c&&u&&r.length&&function(t,e,i,n,o,a){var r,c,u,d,h,p,f,m=e.length,g=n.spanGaps,v=[],y=[],b=0,x=0;for(t.beginPath(),r=0,c=m+!!a;r<c;++r)h=i(d=e[u=r%m]._view,u,n),p=s(d),f=s(h),p&&f?(b=v.push(d),x=y.push(h)):b&&x&&(g?(p&&v.push(d),f&&y.push(h)):(l(t,v,y,b,x),b=x=0,v=[],y=[]));l(t,v,y,b,x),t.closePath(),t.fillStyle=o,t.fill()}(t.ctx,r,c,a,u,o._loop)}}}}},{}],42:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers,i=t.layoutService,n=e.noop;function o(t,e){return t.usePointStyle?e*Math.SQRT2:t.boxWidth}function a(e,n){var o=new t.Legend({ctx:e.ctx,options:n,chart:e});i.configure(e,o,n),i.addBox(e,o),e.legend=o}return t.defaults.global.legend={display:!0,position:"top",fullWidth:!0,reverse:!1,weight:1e3,onClick:function(t,e){var i=e.datasetIndex,n=this.chart,o=n.getDatasetMeta(i);o.hidden=null===o.hidden?!n.data.datasets[i].hidden:null,n.update()},onHover:null,labels:{boxWidth:40,padding:10,generateLabels:function(t){var i=t.data;return e.isArray(i.datasets)?i.datasets.map(function(i,n){return{text:i.label,fillStyle:e.isArray(i.backgroundColor)?i.backgroundColor[0]:i.backgroundColor,hidden:!t.isDatasetVisible(n),lineCap:i.borderCapStyle,lineDash:i.borderDash,lineDashOffset:i.borderDashOffset,lineJoin:i.borderJoinStyle,lineWidth:i.borderWidth,strokeStyle:i.borderColor,pointStyle:i.pointStyle,datasetIndex:n}},this):[]}}},t.Legend=t.Element.extend({initialize:function(t){e.extend(this,t),this.legendHitBoxes=[],this.doughnutMode=!1},beforeUpdate:n,update:function(t,e,i){return this.beforeUpdate(),this.maxWidth=t,this.maxHeight=e,this.margins=i,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this.beforeBuildLabels(),this.buildLabels(),this.afterBuildLabels(),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate(),this.minSize},afterUpdate:n,beforeSetDimensions:n,setDimensions:function(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0,this.minSize={width:0,height:0}},afterSetDimensions:n,beforeBuildLabels:n,buildLabels:function(){var t=this,e=t.options.labels,i=e.generateLabels.call(t,t.chart);e.filter&&(i=i.filter(function(i){return e.filter(i,t.chart.data)})),t.options.reverse&&i.reverse(),t.legendItems=i},afterBuildLabels:n,beforeFit:n,fit:function(){var i=this,n=i.options,a=n.labels,r=n.display,s=i.ctx,l=t.defaults.global,c=e.getValueOrDefault,u=c(a.fontSize,l.defaultFontSize),d=c(a.fontStyle,l.defaultFontStyle),h=c(a.fontFamily,l.defaultFontFamily),p=e.fontString(u,d,h),f=i.legendHitBoxes=[],m=i.minSize,g=i.isHorizontal();if(g?(m.width=i.maxWidth,m.height=r?10:0):(m.width=r?10:0,m.height=i.maxHeight),r)if(s.font=p,g){var v=i.lineWidths=[0],y=i.legendItems.length?u+a.padding:0;s.textAlign="left",s.textBaseline="top",e.each(i.legendItems,function(t,e){var n=o(a,u)+u/2+s.measureText(t.text).width;v[v.length-1]+n+a.padding>=i.width&&(y+=u+a.padding,v[v.length]=i.left),f[e]={left:0,top:0,width:n,height:u},v[v.length-1]+=n+a.padding}),m.height+=y}else{var b=a.padding,x=i.columnWidths=[],w=a.padding,k=0,C=0,S=u+b;e.each(i.legendItems,function(t,e){var i=o(a,u)+u/2+s.measureText(t.text).width;C+S>m.height&&(w+=k+a.padding,x.push(k),k=0,C=0),k=Math.max(k,i),C+=S,f[e]={left:0,top:0,width:i,height:u}}),w+=k,x.push(k),m.width+=w}i.width=m.width,i.height=m.height},afterFit:n,isHorizontal:function(){return"top"===this.options.position||"bottom"===this.options.position},draw:function(){var i=this,n=i.options,a=n.labels,r=t.defaults.global,s=r.elements.line,l=i.width,c=i.lineWidths;if(n.display){var u,d=i.ctx,h=e.getValueOrDefault,p=h(a.fontColor,r.defaultFontColor),f=h(a.fontSize,r.defaultFontSize),m=h(a.fontStyle,r.defaultFontStyle),g=h(a.fontFamily,r.defaultFontFamily),v=e.fontString(f,m,g);d.textAlign="left",d.textBaseline="top",d.lineWidth=.5,d.strokeStyle=p,d.fillStyle=p,d.font=v;var y=o(a,f),b=i.legendHitBoxes,x=i.isHorizontal();u=x?{x:i.left+(l-c[0])/2,y:i.top+a.padding,line:0}:{x:i.left+a.padding,y:i.top+a.padding,line:0};var w=f+a.padding;e.each(i.legendItems,function(e,o){var p,m,g,v,k=d.measureText(e.text).width,C=y+f/2+k,S=u.x,T=u.y;x?S+C>=l&&(T=u.y+=w,u.line++,S=u.x=i.left+(l-c[u.line])/2):T+w>i.bottom&&(S=u.x=S+i.columnWidths[u.line]+a.padding,T=u.y=i.top+a.padding,u.line++),function(e,i,o){if(!(isNaN(y)||y<=0)){d.save(),d.fillStyle=h(o.fillStyle,r.defaultColor),d.lineCap=h(o.lineCap,s.borderCapStyle),d.lineDashOffset=h(o.lineDashOffset,s.borderDashOffset),d.lineJoin=h(o.lineJoin,s.borderJoinStyle),d.lineWidth=h(o.lineWidth,s.borderWidth),d.strokeStyle=h(o.strokeStyle,r.defaultColor);var a=0===h(o.lineWidth,s.borderWidth);if(d.setLineDash&&d.setLineDash(h(o.lineDash,s.borderDash)),n.labels&&n.labels.usePointStyle){var l=f*Math.SQRT2/2,c=l/Math.SQRT2,u=e+c,p=i+c;t.canvasHelpers.drawPoint(d,o.pointStyle,l,u,p)}else a||d.strokeRect(e,i,y,f),d.fillRect(e,i,y,f);d.restore()}}(S,T,e),b[o].left=S,b[o].top=T,p=S,m=T,g=e,v=k,d.fillText(g.text,y+f/2+p,m),g.hidden&&(d.beginPath(),d.lineWidth=2,d.moveTo(y+f/2+p,m+f/2),d.lineTo(y+f/2+p+v,m+f/2),d.stroke()),x?u.x+=C+a.padding:u.y+=w})}},handleEvent:function(t){var e=this.options,i="mouseup"===t.type?"click":t.type,n=!1;if("mousemove"===i){if(!e.onHover)return}else{if("click"!==i)return;if(!e.onClick)return}var o=t.x,a=t.y;if(o>=this.left&&o<=this.right&&a>=this.top&&a<=this.bottom)for(var r=this.legendHitBoxes,s=0;s<r.length;++s){var l=r[s];if(o>=l.left&&o<=l.left+l.width&&a>=l.top&&a<=l.top+l.height){if("click"===i){e.onClick.call(this,t.native,this.legendItems[s]),n=!0;break}if("mousemove"===i){e.onHover.call(this,t.native,this.legendItems[s]),n=!0;break}}}return n}}),{id:"legend",beforeInit:function(t){var e=t.options.legend;e&&a(t,e)},beforeUpdate:function(n){var o=n.options.legend,r=n.legend;o?(o=e.configMerge(t.defaults.global.legend,o),r?(i.configure(n,r,o),r.options=o):a(n,o)):r&&(i.removeBox(n,r),delete n.legend)},afterEvent:function(t,e){var i=t.legend;i&&i.handleEvent(e)}}}},{}],43:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers,i=t.layoutService,n=e.noop;function o(e,n){var o=new t.Title({ctx:e.ctx,options:n,chart:e});i.configure(e,o,n),i.addBox(e,o),e.titleBlock=o}return t.defaults.global.title={display:!1,position:"top",fullWidth:!0,weight:2e3,fontStyle:"bold",padding:10,text:""},t.Title=t.Element.extend({initialize:function(t){e.extend(this,t),this.legendHitBoxes=[]},beforeUpdate:n,update:function(t,e,i){return this.beforeUpdate(),this.maxWidth=t,this.maxHeight=e,this.margins=i,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this.beforeBuildLabels(),this.buildLabels(),this.afterBuildLabels(),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate(),this.minSize},afterUpdate:n,beforeSetDimensions:n,setDimensions:function(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0,this.minSize={width:0,height:0}},afterSetDimensions:n,beforeBuildLabels:n,buildLabels:n,afterBuildLabels:n,beforeFit:n,fit:function(){var i=e.getValueOrDefault,n=this.options,o=t.defaults.global,a=n.display,r=i(n.fontSize,o.defaultFontSize),s=this.minSize;this.isHorizontal()?(s.width=this.maxWidth,s.height=a?r+2*n.padding:0):(s.width=a?r+2*n.padding:0,s.height=this.maxHeight),this.width=s.width,this.height=s.height},afterFit:n,isHorizontal:function(){var t=this.options.position;return"top"===t||"bottom"===t},draw:function(){var i=this.ctx,n=e.getValueOrDefault,o=this.options,a=t.defaults.global;if(o.display){var r,s,l,c=n(o.fontSize,a.defaultFontSize),u=n(o.fontStyle,a.defaultFontStyle),d=n(o.fontFamily,a.defaultFontFamily),h=e.fontString(c,u,d),p=0,f=this.top,m=this.left,g=this.bottom,v=this.right;i.fillStyle=n(o.fontColor,a.defaultFontColor),i.font=h,this.isHorizontal()?(r=m+(v-m)/2,s=f+(g-f)/2,l=v-m):(r="left"===o.position?m+c/2:v-c/2,s=f+(g-f)/2,l=g-f,p=Math.PI*("left"===o.position?-.5:.5)),i.save(),i.translate(r,s),i.rotate(p),i.textAlign="center",i.textBaseline="middle",i.fillText(o.text,0,0,l),i.restore()}}}),{id:"title",beforeInit:function(t){var e=t.options.title;e&&o(t,e)},beforeUpdate:function(n){var a=n.options.title,r=n.titleBlock;a?(a=e.configMerge(t.defaults.global.title,a),r?(i.configure(n,r,a),r.options=a):o(n,a)):r&&(t.layoutService.removeBox(n,r),delete n.titleBlock)}}}},{}],44:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers,i=t.Scale.extend({getLabels:function(){var t=this.chart.data;return(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels},determineDataLimits:function(){var t,i=this.getLabels();this.minIndex=0,this.maxIndex=i.length-1,void 0!==this.options.ticks.min&&(t=e.indexOf(i,this.options.ticks.min),this.minIndex=-1!==t?t:this.minIndex),void 0!==this.options.ticks.max&&(t=e.indexOf(i,this.options.ticks.max),this.maxIndex=-1!==t?t:this.maxIndex),this.min=i[this.minIndex],this.max=i[this.maxIndex]},buildTicks:function(){var t=this.getLabels();this.ticks=0===this.minIndex&&this.maxIndex===t.length-1?t:t.slice(this.minIndex,this.maxIndex+1)},getLabelForIndex:function(t,e){var i=this.chart.data,n=this.isHorizontal();return i.yLabels&&!n?this.getRightValue(i.datasets[e].data[t]):this.ticks[t-this.minIndex]},getPixelForValue:function(t,e,i,n){var o,a=Math.max(this.maxIndex+1-this.minIndex-(this.options.gridLines.offsetGridLines?0:1),1);if(void 0!==t&&null!==t&&(o=this.isHorizontal()?t.x:t.y),void 0!==o||void 0!==t&&isNaN(e)){var r=this.getLabels();t=o||t;var s=r.indexOf(t);e=-1!==s?s:e}if(this.isHorizontal()){var l=this.width/a,c=l*(e-this.minIndex);return(this.options.gridLines.offsetGridLines&&n||this.maxIndex===this.minIndex&&n)&&(c+=l/2),this.left+Math.round(c)}var u=this.height/a,d=u*(e-this.minIndex);return this.options.gridLines.offsetGridLines&&n&&(d+=u/2),this.top+Math.round(d)},getPixelForTick:function(t,e){return this.getPixelForValue(this.ticks[t],t+this.minIndex,null,e)},getValueForPixel:function(t){var e=Math.max(this.ticks.length-(this.options.gridLines.offsetGridLines?0:1),1),i=this.isHorizontal(),n=(i?this.width:this.height)/e;return t-=i?this.left:this.top,this.options.gridLines.offsetGridLines&&(t-=n/2),t<=0?0:Math.round(t/n)},getBasePixel:function(){return this.bottom}});t.scaleService.registerScaleType("category",i,{position:"bottom"})}},{}],45:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers,i={position:"left",ticks:{callback:t.Ticks.formatters.linear}},n=t.LinearScaleBase.extend({determineDataLimits:function(){var t=this,i=t.options,n=t.chart,o=n.data.datasets,a=t.isHorizontal();function r(e){return a?e.xAxisID===t.id:e.yAxisID===t.id}t.min=null,t.max=null;var s=i.stacked;if(void 0===s&&e.each(o,function(t,e){if(!s){var i=n.getDatasetMeta(e);n.isDatasetVisible(e)&&r(i)&&void 0!==i.stack&&(s=!0)}}),i.stacked||s){var l={};e.each(o,function(o,a){var s=n.getDatasetMeta(a),c=[s.type,void 0===i.stacked&&void 0===s.stack?a:"",s.stack].join(".");void 0===l[c]&&(l[c]={positiveValues:[],negativeValues:[]});var u=l[c].positiveValues,d=l[c].negativeValues;n.isDatasetVisible(a)&&r(s)&&e.each(o.data,function(e,n){var o=+t.getRightValue(e);isNaN(o)||s.data[n].hidden||(u[n]=u[n]||0,d[n]=d[n]||0,i.relativePoints?u[n]=100:o<0?d[n]+=o:u[n]+=o)})}),e.each(l,function(i){var n=i.positiveValues.concat(i.negativeValues),o=e.min(n),a=e.max(n);t.min=null===t.min?o:Math.min(t.min,o),t.max=null===t.max?a:Math.max(t.max,a)})}else e.each(o,function(i,o){var a=n.getDatasetMeta(o);n.isDatasetVisible(o)&&r(a)&&e.each(i.data,function(e,i){var n=+t.getRightValue(e);isNaN(n)||a.data[i].hidden||(null===t.min?t.min=n:n<t.min&&(t.min=n),null===t.max?t.max=n:n>t.max&&(t.max=n))})});t.min=isFinite(t.min)?t.min:0,t.max=isFinite(t.max)?t.max:1,this.handleTickRangeOptions()},getTickLimit:function(){var i,n=this.options.ticks;if(this.isHorizontal())i=Math.min(n.maxTicksLimit?n.maxTicksLimit:11,Math.ceil(this.width/50));else{var o=e.getValueOrDefault(n.fontSize,t.defaults.global.defaultFontSize);i=Math.min(n.maxTicksLimit?n.maxTicksLimit:11,Math.ceil(this.height/(2*o)))}return i},handleDirectionalChanges:function(){this.isHorizontal()||this.ticks.reverse()},getLabelForIndex:function(t,e){return+this.getRightValue(this.chart.data.datasets[e].data[t])},getPixelForValue:function(t){var e,i=this.start,n=+this.getRightValue(t),o=this.end-i;return this.isHorizontal()?(e=this.left+this.width/o*(n-i),Math.round(e)):(e=this.bottom-this.height/o*(n-i),Math.round(e))},getValueForPixel:function(t){var e=this.isHorizontal(),i=e?this.width:this.height,n=(e?t-this.left:this.bottom-t)/i;return this.start+(this.end-this.start)*n},getPixelForTick:function(t){return this.getPixelForValue(this.ticksAsNumbers[t])}});t.scaleService.registerScaleType("linear",n,i)}},{}],46:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers,i=e.noop;t.LinearScaleBase=t.Scale.extend({handleTickRangeOptions:function(){var t=this.options.ticks;if(t.beginAtZero){var i=e.sign(this.min),n=e.sign(this.max);i<0&&n<0?this.max=0:i>0&&n>0&&(this.min=0)}void 0!==t.min?this.min=t.min:void 0!==t.suggestedMin&&(null===this.min?this.min=t.suggestedMin:this.min=Math.min(this.min,t.suggestedMin)),void 0!==t.max?this.max=t.max:void 0!==t.suggestedMax&&(null===this.max?this.max=t.suggestedMax:this.max=Math.max(this.max,t.suggestedMax)),this.min===this.max&&(this.max++,t.beginAtZero||this.min--)},getTickLimit:i,handleDirectionalChanges:i,buildTicks:function(){var i=this.options.ticks,n=this.getTickLimit(),o={maxTicks:n=Math.max(2,n),min:i.min,max:i.max,stepSize:e.getValueOrDefault(i.fixedStepSize,i.stepSize)},a=this.ticks=t.Ticks.generators.linear(o,this);this.handleDirectionalChanges(),this.max=e.max(a),this.min=e.min(a),i.reverse?(a.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max)},convertTicksToLabels:function(){this.ticksAsNumbers=this.ticks.slice(),this.zeroLineIndex=this.ticks.indexOf(0),t.Scale.prototype.convertTicksToLabels.call(this)}})}},{}],47:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers,i={position:"left",ticks:{callback:t.Ticks.formatters.logarithmic}},n=t.Scale.extend({determineDataLimits:function(){var t=this,i=t.options,n=i.ticks,o=t.chart,a=o.data.datasets,r=e.getValueOrDefault,s=t.isHorizontal();function l(e){return s?e.xAxisID===t.id:e.yAxisID===t.id}t.min=null,t.max=null,t.minNotZero=null;var c=i.stacked;if(void 0===c&&e.each(a,function(t,e){if(!c){var i=o.getDatasetMeta(e);o.isDatasetVisible(e)&&l(i)&&void 0!==i.stack&&(c=!0)}}),i.stacked||c){var u={};e.each(a,function(n,a){var r=o.getDatasetMeta(a),s=[r.type,void 0===i.stacked&&void 0===r.stack?a:"",r.stack].join(".");o.isDatasetVisible(a)&&l(r)&&(void 0===u[s]&&(u[s]=[]),e.each(n.data,function(e,n){var o=u[s],a=+t.getRightValue(e);isNaN(a)||r.data[n].hidden||(o[n]=o[n]||0,i.relativePoints?o[n]=100:o[n]+=a)}))}),e.each(u,function(i){var n=e.min(i),o=e.max(i);t.min=null===t.min?n:Math.min(t.min,n),t.max=null===t.max?o:Math.max(t.max,o)})}else e.each(a,function(i,n){var a=o.getDatasetMeta(n);o.isDatasetVisible(n)&&l(a)&&e.each(i.data,function(e,i){var n=+t.getRightValue(e);isNaN(n)||a.data[i].hidden||(null===t.min?t.min=n:n<t.min&&(t.min=n),null===t.max?t.max=n:n>t.max&&(t.max=n),0!==n&&(null===t.minNotZero||n<t.minNotZero)&&(t.minNotZero=n))})});t.min=r(n.min,t.min),t.max=r(n.max,t.max),t.min===t.max&&(0!==t.min&&null!==t.min?(t.min=Math.pow(10,Math.floor(e.log10(t.min))-1),t.max=Math.pow(10,Math.floor(e.log10(t.max))+1)):(t.min=1,t.max=10))},buildTicks:function(){var i=this.options.ticks,n={min:i.min,max:i.max},o=this.ticks=t.Ticks.generators.logarithmic(n,this);this.isHorizontal()||o.reverse(),this.max=e.max(o),this.min=e.min(o),i.reverse?(o.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max)},convertTicksToLabels:function(){this.tickValues=this.ticks.slice(),t.Scale.prototype.convertTicksToLabels.call(this)},getLabelForIndex:function(t,e){return+this.getRightValue(this.chart.data.datasets[e].data[t])},getPixelForTick:function(t){return this.getPixelForValue(this.tickValues[t])},getPixelForValue:function(t){var i,n,o,a=this.start,r=+this.getRightValue(t),s=this.options.ticks;return this.isHorizontal()?(o=e.log10(this.end)-e.log10(a),0===r?n=this.left:(i=this.width,n=this.left+i/o*(e.log10(r)-e.log10(a)))):(i=this.height,0!==a||s.reverse?0===this.end&&s.reverse?(o=e.log10(this.start)-e.log10(this.minNotZero),n=r===this.end?this.top:r===this.minNotZero?this.top+.02*i:this.top+.02*i+.98*i/o*(e.log10(r)-e.log10(this.minNotZero))):0===r?n=s.reverse?this.top:this.bottom:(o=e.log10(this.end)-e.log10(a),i=this.height,n=this.bottom-i/o*(e.log10(r)-e.log10(a))):(o=e.log10(this.end)-e.log10(this.minNotZero),n=r===a?this.bottom:r===this.minNotZero?this.bottom-.02*i:this.bottom-.02*i-.98*i/o*(e.log10(r)-e.log10(this.minNotZero)))),n},getValueForPixel:function(t){var i,n,o=e.log10(this.end)-e.log10(this.start);return this.isHorizontal()?(n=this.width,i=this.start*Math.pow(10,(t-this.left)*o/n)):(n=this.height,i=Math.pow(10,(this.bottom-t)*o/n)/this.start),i}});t.scaleService.registerScaleType("logarithmic",n,i)}},{}],48:[function(t,e,i){"use strict";e.exports=function(t){var e=t.helpers,i=t.defaults.global,n={display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,color:"rgba(0, 0, 0, 0.1)",lineWidth:1},gridLines:{circular:!1},ticks:{showLabelBackdrop:!0,backdropColor:"rgba(255,255,255,0.75)",backdropPaddingY:2,backdropPaddingX:2,callback:t.Ticks.formatters.linear},pointLabels:{display:!0,fontSize:10,callback:function(t){return t}}};function o(t){var e=t.options;return e.angleLines.display||e.pointLabels.display?t.chart.data.labels.length:0}function a(t){var n=t.options.pointLabels,o=e.getValueOrDefault(n.fontSize,i.defaultFontSize),a=e.getValueOrDefault(n.fontStyle,i.defaultFontStyle),r=e.getValueOrDefault(n.fontFamily,i.defaultFontFamily);return{size:o,style:a,family:r,font:e.fontString(o,a,r)}}function r(t,e,i,n,o){return t===n||t===o?{start:e-i/2,end:e+i/2}:t<n||t>o?{start:e-i-5,end:e}:{start:e,end:e+i+5}}function s(t,i,n,o){if(e.isArray(i))for(var a=n.y,r=1.5*o,s=0;s<i.length;++s)t.fillText(i[s],n.x,a),a+=r;else t.fillText(i,n.x,n.y)}function l(t){return e.isNumber(t)?t:0}var c=t.LinearScaleBase.extend({setDimensions:function(){var t=this.options,n=t.ticks;this.width=this.maxWidth,this.height=this.maxHeight,this.xCenter=Math.round(this.width/2),this.yCenter=Math.round(this.height/2);var o=e.min([this.height,this.width]),a=e.getValueOrDefault(n.fontSize,i.defaultFontSize);this.drawingArea=t.display?o/2-(a/2+n.backdropPaddingY):o/2},determineDataLimits:function(){var t=this,i=t.chart,n=Number.POSITIVE_INFINITY,o=Number.NEGATIVE_INFINITY;e.each(i.data.datasets,function(a,r){if(i.isDatasetVisible(r)){var s=i.getDatasetMeta(r);e.each(a.data,function(e,i){var a=+t.getRightValue(e);isNaN(a)||s.data[i].hidden||(n=Math.min(a,n),o=Math.max(a,o))})}}),t.min=n===Number.POSITIVE_INFINITY?0:n,t.max=o===Number.NEGATIVE_INFINITY?0:o,t.handleTickRangeOptions()},getTickLimit:function(){var t=this.options.ticks,n=e.getValueOrDefault(t.fontSize,i.defaultFontSize);return Math.min(t.maxTicksLimit?t.maxTicksLimit:11,Math.ceil(this.drawingArea/(1.5*n)))},convertTicksToLabels:function(){t.LinearScaleBase.prototype.convertTicksToLabels.call(this),this.pointLabels=this.chart.data.labels.map(this.options.pointLabels.callback,this)},getLabelForIndex:function(t,e){return+this.getRightValue(this.chart.data.datasets[e].data[t])},fit:function(){var t,i;this.options.pointLabels.display?function(t){var i,n,s,l=a(t),c=Math.min(t.height/2,t.width/2),u={r:t.width,l:0,t:t.height,b:0},d={};t.ctx.font=l.font,t._pointLabelSizes=[];var h,p,f,m=o(t);for(i=0;i<m;i++){s=t.getPointPosition(i,c),h=t.ctx,p=l.size,f=t.pointLabels[i]||"",n=e.isArray(f)?{w:e.longestText(h,h.font,f),h:f.length*p+1.5*(f.length-1)*p}:{w:h.measureText(f).width,h:p},t._pointLabelSizes[i]=n;var g=t.getIndexAngle(i),v=e.toDegrees(g)%360,y=r(v,s.x,n.w,0,180),b=r(v,s.y,n.h,90,270);y.start<u.l&&(u.l=y.start,d.l=g),y.end>u.r&&(u.r=y.end,d.r=g),b.start<u.t&&(u.t=b.start,d.t=g),b.end>u.b&&(u.b=b.end,d.b=g)}t.setReductions(c,u,d)}(this):(t=this,i=Math.min(t.height/2,t.width/2),t.drawingArea=Math.round(i),t.setCenterPoint(0,0,0,0))},setReductions:function(t,e,i){var n=e.l/Math.sin(i.l),o=Math.max(e.r-this.width,0)/Math.sin(i.r),a=-e.t/Math.cos(i.t),r=-Math.max(e.b-this.height,0)/Math.cos(i.b);n=l(n),o=l(o),a=l(a),r=l(r),this.drawingArea=Math.min(Math.round(t-(n+o)/2),Math.round(t-(a+r)/2)),this.setCenterPoint(n,o,a,r)},setCenterPoint:function(t,e,i,n){var o=this.width-e-this.drawingArea,a=t+this.drawingArea,r=i+this.drawingArea,s=this.height-n-this.drawingArea;this.xCenter=Math.round((a+o)/2+this.left),this.yCenter=Math.round((r+s)/2+this.top)},getIndexAngle:function(t){return t*(2*Math.PI/o(this))+(this.chart.options&&this.chart.options.startAngle?this.chart.options.startAngle:0)*Math.PI*2/360},getDistanceFromCenterForValue:function(t){if(null===t)return 0;var e=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-t)*e:(t-this.min)*e},getPointPosition:function(t,e){var i=this.getIndexAngle(t)-Math.PI/2;return{x:Math.round(Math.cos(i)*e)+this.xCenter,y:Math.round(Math.sin(i)*e)+this.yCenter}},getPointPositionForValue:function(t,e){return this.getPointPosition(t,this.getDistanceFromCenterForValue(e))},getBasePosition:function(){var t=this.min,e=this.max;return this.getPointPositionForValue(0,this.beginAtZero?0:t<0&&e<0?e:t>0&&e>0?t:0)},draw:function(){var t=this,n=t.options,r=n.gridLines,l=n.ticks,c=e.getValueOrDefault;if(n.display){var u=t.ctx,d=c(l.fontSize,i.defaultFontSize),h=c(l.fontStyle,i.defaultFontStyle),p=c(l.fontFamily,i.defaultFontFamily),f=e.fontString(d,h,p);e.each(t.ticks,function(a,s){if(s>0||n.reverse){var h=t.getDistanceFromCenterForValue(t.ticksAsNumbers[s]),p=t.yCenter-h;if(r.display&&0!==s&&function(t,i,n,a){var r=t.ctx;if(r.strokeStyle=e.getValueAtIndexOrDefault(i.color,a-1),r.lineWidth=e.getValueAtIndexOrDefault(i.lineWidth,a-1),t.options.gridLines.circular)r.beginPath(),r.arc(t.xCenter,t.yCenter,n,0,2*Math.PI),r.closePath(),r.stroke();else{var s=o(t);if(0===s)return;r.beginPath();var l=t.getPointPosition(0,n);r.moveTo(l.x,l.y);for(var c=1;c<s;c++)l=t.getPointPosition(c,n),r.lineTo(l.x,l.y);r.closePath(),r.stroke()}}(t,r,h,s),l.display){var m=c(l.fontColor,i.defaultFontColor);if(u.font=f,l.showLabelBackdrop){var g=u.measureText(a).width;u.fillStyle=l.backdropColor,u.fillRect(t.xCenter-g/2-l.backdropPaddingX,p-d/2-l.backdropPaddingY,g+2*l.backdropPaddingX,d+2*l.backdropPaddingY)}u.textAlign="center",u.textBaseline="middle",u.fillStyle=m,u.fillText(a,t.xCenter,p)}}}),(n.angleLines.display||n.pointLabels.display)&&function(t){var n=t.ctx,r=e.getValueOrDefault,l=t.options,c=l.angleLines,u=l.pointLabels;n.lineWidth=c.lineWidth,n.strokeStyle=c.color;var d,h,p,f,m=t.getDistanceFromCenterForValue(l.reverse?t.min:t.max),g=a(t);n.textBaseline="top";for(var v=o(t)-1;v>=0;v--){if(c.display){var y=t.getPointPosition(v,m);n.beginPath(),n.moveTo(t.xCenter,t.yCenter),n.lineTo(y.x,y.y),n.stroke(),n.closePath()}if(u.display){var b=t.getPointPosition(v,m+5),x=r(u.fontColor,i.defaultFontColor);n.font=g.font,n.fillStyle=x;var w=t.getIndexAngle(v),k=e.toDegrees(w);n.textAlign=0===(f=k)||180===f?"center":f<180?"left":"right",d=k,h=t._pointLabelSizes[v],p=b,90===d||270===d?p.y-=h.h/2:(d>270||d<90)&&(p.y-=h.h),s(n,t.pointLabels[v]||"",b,g.size)}}}(t)}}});t.scaleService.registerScaleType("radialLinear",c,n)}},{}],49:[function(t,e,i){"use strict";var n=t(1);n="function"==typeof n?n:window.moment,e.exports=function(t){var e=t.helpers,i={millisecond:{size:1,steps:[1,2,5,10,20,50,100,250,500]},second:{size:1e3,steps:[1,2,5,10,30]},minute:{size:6e4,steps:[1,2,5,10,30]},hour:{size:36e5,steps:[1,2,3,6,12]},day:{size:864e5,steps:[1,2,5]},week:{size:6048e5,maxStep:4},month:{size:2628e6,maxStep:3},quarter:{size:7884e6,maxStep:4},year:{size:3154e7,maxStep:!1}};function o(t,e){var i=t.options.time;if("string"==typeof i.parser)return n(e,i.parser);if("function"==typeof i.parser)return i.parser(e);if("function"==typeof e.getMonth||"number"==typeof e)return n(e);if(e.isValid&&e.isValid())return e;var o=i.format;return"string"!=typeof o&&o.call?(console.warn("options.time.format is deprecated and replaced by options.time.parser."),o(e)):n(e,o)}t.Ticks.generators.time=function(t,e){var i,o,a=t.isoWeekday;return"week"===t.unit&&!1!==a?(i=n(e.min).startOf("isoWeek").isoWeekday(a).valueOf(),o=n(e.max).startOf("isoWeek").isoWeekday(a),e.max-o>0&&o.add(1,"week"),o=o.valueOf()):(i=n(e.min).startOf(t.unit).valueOf(),o=n(e.max).startOf(t.unit),e.max-o>0&&o.add(1,t.unit),o=o.valueOf()),function(t,e,i){var o=[];if(t.maxTicks){var a=t.stepSize;o.push(void 0!==t.min?t.min:i.min);for(var r=n(i.min);r.add(a,t.unit).valueOf()<i.max;)o.push(r.valueOf());var s=t.max||i.max;o[o.length-1]!==s&&o.push(s)}return o}(t,0,{min:i,max:o})};var a=t.Scale.extend({initialize:function(){if(!n)throw new Error("Chart.js - Moment.js could not be found! You must include it before Chart.js to use the time scale. Download at https://momentjs.com");t.Scale.prototype.initialize.call(this)},determineDataLimits:function(){var t,i=this,n=i.options.time,a=Number.MAX_SAFE_INTEGER,r=Number.MIN_SAFE_INTEGER,s=i.chart.data,l={labels:[],datasets:[]};e.each(s.labels,function(e,s){var c=o(i,e);c.isValid()&&(n.round&&c.startOf(n.round),t=c.valueOf(),a=Math.min(t,a),r=Math.max(t,r),l.labels[s]=t)}),e.each(s.datasets,function(s,c){var u=[];"object"==typeof s.data[0]&&null!==s.data[0]&&i.chart.isDatasetVisible(c)?e.each(s.data,function(e,s){var l=o(i,i.getRightValue(e));l.isValid()&&(n.round&&l.startOf(n.round),t=l.valueOf(),a=Math.min(t,a),r=Math.max(t,r),u[s]=t)}):u=l.labels.slice(),l.datasets[c]=u}),i.dataMin=a,i.dataMax=r,i._parsedData=l},buildTicks:function(){var n,a,r=this.options.time,s=this.dataMin,l=this.dataMax;if(r.min){var c=o(this,r.min);r.round&&c.round(r.round),n=c.valueOf()}r.max&&(a=o(this,r.max).valueOf());var u=this.getLabelCapacity(n||s),d=r.unit||function(t,e,n,o){for(var a,r=Object.keys(i),s=r.length,l=r.indexOf(t);l<s;l++){a=r[l];var c=i[a],u=c.steps&&c.steps[c.steps.length-1]||c.maxStep;if(void 0===u||Math.ceil((n-e)/(u*c.size))<=o)break}return a}(r.minUnit,n||s,a||l,u);this.displayFormat=r.displayFormats[d];var h=r.stepSize||function(t,e,n,o){var a=i[n],r=a.size,s=Math.ceil((e-t)/r),l=1,c=e-t;if(a.steps)for(var u=a.steps.length,d=0;d<u&&s>o;d++)l=a.steps[d],s=Math.ceil(c/(r*l));else for(;s>o&&o>0;)++l,s=Math.ceil(c/(r*l));return l}(n||s,a||l,d,u);this.ticks=t.Ticks.generators.time({maxTicks:u,min:n,max:a,stepSize:h,unit:d,isoWeekday:r.isoWeekday},{min:s,max:l}),this.max=e.max(this.ticks),this.min=e.min(this.ticks)},getLabelForIndex:function(t,e){var i=this.chart.data.labels&&t<this.chart.data.labels.length?this.chart.data.labels[t]:"",n=this.chart.data.datasets[e].data[t];return null!==n&&"object"==typeof n&&(i=this.getRightValue(n)),this.options.time.tooltipFormat&&(i=o(this,i).format(this.options.time.tooltipFormat)),i},tickFormatFunction:function(t,i,n){var o=t.format(this.displayFormat),a=this.options.ticks,r=e.getValueOrDefault(a.callback,a.userCallback);return r?r(o,i,n):o},convertTicksToLabels:function(){this.ticksAsTimestamps=this.ticks,this.ticks=this.ticks.map(function(t){return n(t)}).map(this.tickFormatFunction,this)},getPixelForOffset:function(t){var e=this.max-this.min,i=e?(t-this.min)/e:0;if(this.isHorizontal()){var n=this.width*i;return this.left+Math.round(n)}var o=this.height*i;return this.top+Math.round(o)},getPixelForValue:function(t,e,i){var n=null;if(void 0!==e&&void 0!==i&&(n=this._parsedData.datasets[i][e]),null===n&&(t&&t.isValid||(t=o(this,this.getRightValue(t))),t&&t.isValid&&t.isValid()&&(n=t.valueOf())),null!==n)return this.getPixelForOffset(n)},getPixelForTick:function(t){return this.getPixelForOffset(this.ticksAsTimestamps[t])},getValueForPixel:function(t){var e=this.isHorizontal()?this.width:this.height,i=(t-(this.isHorizontal()?this.left:this.top))/e;return n(this.min+i*(this.max-this.min))},getLabelWidth:function(i){var n=this.options.ticks,o=this.ctx.measureText(i).width,a=Math.cos(e.toRadians(n.maxRotation)),r=Math.sin(e.toRadians(n.maxRotation));return o*a+e.getValueOrDefault(n.fontSize,t.defaults.global.defaultFontSize)*r},getLabelCapacity:function(t){this.displayFormat=this.options.time.displayFormats.millisecond;var e=this.tickFormatFunction(n(t),0,[]),i=this.getLabelWidth(e);return(this.isHorizontal()?this.width:this.height)/i}});t.scaleService.registerScaleType("time",a,{position:"bottom",time:{parser:!1,format:!1,unit:!1,round:!1,displayFormat:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{millisecond:"h:mm:ss.SSS a",second:"h:mm:ss a",minute:"h:mm:ss a",hour:"MMM D, hA",day:"ll",week:"ll",month:"MMM YYYY",quarter:"[Q]Q - YYYY",year:"YYYY"}},ticks:{autoSkip:!1}})}},{1:1}]},{},[7])(7)}),function(t){WOW=function(){return{init:function(){var e=[],i=1;function n(){var i=window.innerHeight,n=window.scrollY;t(".wow").each(function(){if("visible"!=t(this).css("visibility")&&(i+n-100>o(this)&&n<o(this)||i+n-100>o(this)+t(this).height()&&n<o(this)+t(this).height()||i+n==t(document).height()&&o(this)+100>t(document).height())){var a=t(this).index(".wow"),r=t(this).attr("data-wow-delay");if(r){r=t(this).attr("data-wow-delay").slice(0,-1);var s=this;parseFloat(r);t(s).addClass("animated"),t(s).css({visibility:"visible"}),t(s).css({"animation-delay":r}),t(s).css({"animation-name":e[a]});var l=1e3*t(this).css("animation-duration").slice(0,-1);t(this).attr("data-wow-delay")&&(l+=1e3*t(this).attr("data-wow-delay").slice(0,-1));s=this;setTimeout(function(){t(s).removeClass("animated")},l)}else{t(this).addClass("animated"),t(this).css({visibility:"visible"}),t(this).css({"animation-name":e[a]});l=1e3*t(this).css("animation-duration").slice(0,-1),s=this;setTimeout(function(){t(s).removeClass("animated")},l)}}})}function o(t){var e=t.getBoundingClientRect(),i=document.body,n=document.documentElement,o=window.pageYOffset||n.scrollTop||i.scrollTop,a=n.clientTop||i.clientTop||0,r=e.top+o-a;return Math.round(r)}t(".wow").each(function(){t(this).css({visibility:"hidden"}),e[t(this).index(".wow")]=t(this).css("animation-name"),t(this).css({"animation-name":"none"})}),t(window).scroll(function(){var e,a;i?(e=window.innerHeight,a=window.scrollY,t(".wow.animated").each(function(){if(e+a-100>o(this)&&a>o(this)+100||e+a-100<o(this)&&a<o(this)+100||o(this)+t(this).height>t(document).height()-100)t(this).removeClass("animated"),t(this).css({"animation-name":"none"}),t(this).css({visibility:"hidden"});else{var i=1e3*t(this).css("animation-duration").slice(0,-1);t(this).attr("data-wow-delay")&&(i+=1e3*t(this).attr("data-wow-delay").slice(0,-1));var n=this;setTimeout(function(){t(n).removeClass("animated")},i)}}),n(),i--):n()}),t(".wow").each(function(){var i=t(this).index(".wow"),n=t(this).attr("data-wow-delay");n?(n=t(this).attr("data-wow-delay").slice(0,-1),parseFloat(n),t(this).addClass("animated"),t(this).css({visibility:"visible"}),t(this).css({"animation-delay":n+"s"}),t(this).css({"animation-name":e[i]})):(t(this).addClass("animated"),t(this).css({visibility:"visible"}),t(this).css({"animation-name":e[i]}))})}}}}(jQuery);var OFFSET_TOP=50;$(window).scroll(function(){$(".navbar").length&&($(".navbar").offset().top>OFFSET_TOP?$(".scrolling-navbar").addClass("top-nav-collapse"):$(".scrolling-navbar").removeClass("top-nav-collapse"))}),function(t,e){"use strict";"function"==typeof define&&define.amd?define([],function(){return e.apply(t)}):"object"==typeof exports?module.exports=e.call(t):t.Waves=e.call(t)}("object"==typeof global?global:this,function(){"use strict";var t=t||{},e=document.querySelectorAll.bind(document),i=Object.prototype.toString,n="ontouchstart"in window;function o(t){var e=typeof t;return"function"===e||"object"===e&&!!t}function a(t){var n,a=i.call(t);return"[object String]"===a?e(t):o(t)&&/^\[object (Array|HTMLCollection|NodeList|Object)\]$/.test(a)&&t.hasOwnProperty("length")?t:o(n=t)&&n.nodeType>0?[t]:[]}function r(t){var e,i,n,o,a={top:0,left:0},r=t&&t.ownerDocument;return e=r.documentElement,void 0!==t.getBoundingClientRect&&(a=t.getBoundingClientRect()),i=null!==(o=n=r)&&o===o.window?n:9===n.nodeType&&n.defaultView,{top:a.top+i.pageYOffset-e.clientTop,left:a.left+i.pageXOffset-e.clientLeft}}function s(t){var e="";for(var i in t)t.hasOwnProperty(i)&&(e+=i+":"+t[i]+";");return e}var l={duration:750,delay:200,show:function(t,e,i){if(2===t.button)return!1;e=e||this;var n=document.createElement("div");n.className="waves-ripple waves-rippling",e.appendChild(n);var o=r(e),a=0,c=0;"touches"in t&&t.touches.length?(a=t.touches[0].pageY-o.top,c=t.touches[0].pageX-o.left):(a=t.pageY-o.top,c=t.pageX-o.left),c=c>=0?c:0,a=a>=0?a:0;var u="scale("+e.clientWidth/100*3+")",d="translate(0,0)";i&&(d="translate("+i.x+"px, "+i.y+"px)"),n.setAttribute("data-hold",Date.now()),n.setAttribute("data-x",c),n.setAttribute("data-y",a),n.setAttribute("data-scale",u),n.setAttribute("data-translate",d);var h={top:a+"px",left:c+"px"};n.classList.add("waves-notransition"),n.setAttribute("style",s(h)),n.classList.remove("waves-notransition"),h["-webkit-transform"]=u+" "+d,h["-moz-transform"]=u+" "+d,h["-ms-transform"]=u+" "+d,h["-o-transform"]=u+" "+d,h.transform=u+" "+d,h.opacity="1";var p="mousemove"===t.type?2500:l.duration;h["-webkit-transition-duration"]=p+"ms",h["-moz-transition-duration"]=p+"ms",h["-o-transition-duration"]=p+"ms",h["transition-duration"]=p+"ms",n.setAttribute("style",s(h))},hide:function(t,e){for(var i=(e=e||this).getElementsByClassName("waves-rippling"),n=0,o=i.length;n<o;n++)u(t,e,i[n])}},c={input:function(t){var e=t.parentNode;if("div"!==e.tagName.toLowerCase()||!e.classList.contains("waves-effect")){var i=document.createElement("div");i.className="waves-input-wrapper",e.replaceChild(i,t),i.appendChild(t);var n=window.getComputedStyle(t,null);n.color,n.backgroundColor}},img:function(t){var e=t.parentNode;if("i"!==e.tagName.toLowerCase()||!e.classList.contains("waves-effect")){var i=document.createElement("i");e.replaceChild(i,t),i.appendChild(t)}}};function u(t,e,i){if(i){i.classList.remove("waves-rippling");var n=i.getAttribute("data-x"),o=i.getAttribute("data-y"),a=i.getAttribute("data-scale"),r=i.getAttribute("data-translate"),c=350-(Date.now()-Number(i.getAttribute("data-hold")));c<0&&(c=0),"mousemove"===t.type&&(c=150);var u="mousemove"===t.type?2500:l.duration;setTimeout(function(){var t={top:o+"px",left:n+"px",opacity:"0","-webkit-transition-duration":u+"ms","-moz-transition-duration":u+"ms","-o-transition-duration":u+"ms","transition-duration":u+"ms","-webkit-transform":a+" "+r,"-moz-transform":a+" "+r,"-ms-transform":a+" "+r,"-o-transform":a+" "+r,transform:a+" "+r};i.setAttribute("style",s(t)),setTimeout(function(){try{e.removeChild(i)}catch(t){return!1}},u)},c)}}var d={touches:0,allowEvent:function(t){var e=!0;return/^(mousedown|mousemove)$/.test(t.type)&&d.touches&&(e=!1),e},registerEvent:function(t){var e=t.type;"touchstart"===e?d.touches+=1:/^(touchend|touchcancel)$/.test(e)&&setTimeout(function(){d.touches&&(d.touches-=1)},500)}};function h(t){var e=function(t){if(!1===d.allowEvent(t))return null;for(var e=null,i=t.target||t.srcElement;null!==i.parentElement;){if(i.classList.contains("waves-effect")&&!(i instanceof SVGElement)){e=i;break}i=i.parentElement}return e}(t);if(null!==e){if(e.disabled||e.getAttribute("disabled")||e.classList.contains("disabled"))return;if(d.registerEvent(t),"touchstart"===t.type&&l.delay){var i=!1,o=setTimeout(function(){o=null,l.show(t,e)},l.delay),a=function(n){o&&(clearTimeout(o),o=null,l.show(t,e)),i||(i=!0,l.hide(n,e))};e.addEventListener("touchmove",function(t){o&&(clearTimeout(o),o=null),a(t)},!1),e.addEventListener("touchend",a,!1),e.addEventListener("touchcancel",a,!1)}else l.show(t,e),n&&(e.addEventListener("touchend",l.hide,!1),e.addEventListener("touchcancel",l.hide,!1)),e.addEventListener("mouseup",l.hide,!1),e.addEventListener("mouseleave",l.hide,!1)}}return t.init=function(t){var e=document.body;"duration"in(t=t||{})&&(l.duration=t.duration),"delay"in t&&(l.delay=t.delay),n&&(e.addEventListener("touchstart",h,!1),e.addEventListener("touchcancel",d.registerEvent,!1),e.addEventListener("touchend",d.registerEvent,!1)),e.addEventListener("mousedown",h,!1)},t.attach=function(t,e){var n,o;t=a(t),"[object Array]"===i.call(e)&&(e=e.join(" ")),e=e?" "+e:"";for(var r=0,s=t.length;r<s;r++)o=(n=t[r]).tagName.toLowerCase(),-1!==["input","img"].indexOf(o)&&(c[o](n),n=n.parentElement),-1===n.className.indexOf("waves-effect")&&(n.className+=" waves-effect"+e)},t.ripple=function(t,e){var i=(t=a(t)).length;if((e=e||{}).wait=e.wait||0,e.position=e.position||null,i)for(var n,o,s,c={},u=0,d={type:"mousedown",button:1},h=function(t,e){return function(){l.hide(t,e)}};u<i;u++)if(n=t[u],o=e.position||{x:n.clientWidth/2,y:n.clientHeight/2},s=r(n),c.x=s.left+o.x,c.y=s.top+o.y,d.pageX=c.x,d.pageY=c.y,l.show(d,n),e.wait>=0&&null!==e.wait){setTimeout(h({type:"mouseup",button:1},n),e.wait)}},t.calm=function(t){for(var e={type:"mouseup",button:1},i=0,n=(t=a(t)).length;i<n;i++)l.hide(e,t[i])},t.displayEffect=function(e){console.error("Waves.displayEffect() has been deprecated and will be removed in future version. Please use Waves.init() to initialize Waves effect"),t.init(e)},t}),Waves.attach(".btn:not(.btn-flat), .btn-floating",["waves-light"]),Waves.attach(".btn-flat",["waves-effect"]),Waves.attach(".view .mask",["waves-light"]),Waves.attach(".waves-light",["waves-light"]),Waves.attach(".navbar-nav a:not(.navbar-brand), .nav-icons li a, .navbar form, .nav-tabs .nav-item",["waves-light"]),Waves.attach(".pager li a",["waves-light"]),Waves.attach(".pagination .page-item .page-link",["waves-effect"]),Waves.init(),function(t){t(document).ready(function(){var e=["text","password","email","url","tel","number","search","search-md"].map(function(t){return"input[type="+t+"]"}).join(", ")+", textarea",i=".materialize-textarea",n=function(t){var e=t.siblings("label, i"),i=t.val().length,n=t.attr("placeholder");e[(i||n?"add":"remove")+"Class"]("active")},o=function(t){if(t.hasClass("validate")){var e=t.val(),i=!e.length,n=!t[0].validity.badInput;if(i&&n)t.removeClass("valid").removeClass("invalid");else{var o=t.is(":valid"),a=Number(t.attr("length"))||0;o&&(!a||a>e.length)?t.removeClass("invalid").addClass("valid"):t.removeClass("valid").addClass("invalid")}}},a=function(){var e=t(void 0);if(e.val().length){var i=t(".hiddendiv"),n=e.css("font-family"),o=e.css("font-size");o&&i.css("font-size",o),n&&i.css("font-family",n),"off"===e.attr("wrap")&&i.css("overflow-wrap","normal").css("white-space","pre"),i.text(e.val()+"\n");var a=i.html().replace(/\n/g,"<br>");i.html(a),i.css("width",e.is(":visible")?e.width():t(window).width()/2),e.css("height",i.height())}};t(e).each(function(e,i){var o=t(i),a=o.siblings("label, i");n(o),i.validity.badInput&&a.addClass("active")}),t(document).on("focus",e,function(e){t(e.target).siblings("label, i").addClass("active")}),t(document).on("blur",e,function(e){var i=t(e.target),n=!i.val(),a=!e.target.validity.badInput,r=void 0===i.attr("placeholder");n&&a&&r&&i.siblings("label, i").removeClass("active"),o(i)}),t(document).on("change",e,function(e){var i=t(e.target);n(i),o(i)}),t("input[autofocus]").siblings("label, i").addClass("active"),t(document).on("reset",function(i){var n=t(i.target);n.is("form")&&(n.find(e).removeClass("valid").removeClass("invalid").each(function(e,i){var n=t(i),o=!n.val(),a=!n.attr("placeholder");o&&a&&n.siblings("label, i").removeClass("active")}),n.find("select.initialized").each(function(e,i){var n=t(i),o=n.siblings("input.select-dropdown"),a=n.children("[selected]").val();n.val(a),o.val(a)}))}),t(".hiddendiv").first().length||($hiddenDiv=t('<div class="hiddendiv common"></div>'),t("body").append($hiddenDiv)),t(i).each(a),t("body").on("keyup keydown",i,a)})}(jQuery),$(document).ready(function(){$("#preloader-markup").load("mdb-addons/preloader.html",function(){$(window).on("load",function(){$("#mdb-preloader").fadeOut("slow")})})}),function(t){t(document).ready(function(){t(document).on("click.card",".card",function(e){var i=t(this);if(i.find(".card-reveal").length){var n=t(e.target),o=n.is(".card-reveal .card-title"),a=n.is(".card-reveal .card-title i"),r=n.is(".card .activator"),s=n.is(".card .activator i");o||a?i.find(".card-reveal").velocity({translateY:0},{duration:225,queue:!1,easing:"easeInOutQuad",complete:function(){t(this).css({display:"none"})}}):(r||s)&&i.find(".card-reveal").css({display:"block"}).velocity("stop",!1).velocity({translateY:"-100%"},{duration:300,queue:!1,easing:"easeInOutQuad"})}}),t(".rotate-btn").on("click",function(){var e=t(this).attr("data-card");t("#"+e).toggleClass("flipped")})})}(jQuery),$(document).ready(function(t){t(".card-share > a").on("click",function(e){e.preventDefault(),t(this).parent().find("div").toggleClass("social-reveal-active"),t(this).toggleClass("share-expanded")})}),function(t){function e(){var e,i,n,o=Number(t(this).attr("length")),a=Number(t(this).val().length),r=a<=o;t(this).parent().find('span[class="character-counter"]').html(a+"/"+o),e=r,i=t(this),n=i.hasClass("invalid"),e&&n?i.removeClass("invalid"):e||n||(i.removeClass("valid"),i.addClass("invalid"))}function i(){t(this).parent().find('span[class="character-counter"]').html("")}t.fn.characterCounter=function(){return this.each(function(){var n,o;void 0!==t(this).attr("length")&&(t(this).on("input",e),t(this).on("focus",e),t(this).on("blur",i),n=t(this),o=t("<span/>").addClass("character-counter").css("float","right").css("font-size","12px").css("height",1),n.parent().append(o))})},t(document).ready(function(){t("input, textarea").characterCounter()})}(jQuery),("function"==typeof define&&define.amd?define:function(t,e){"undefined"!=typeof module&&module.exports?module.exports=e(require("jquery")):window.toastr=e(window.jQuery)})(["jquery"],function(t){return function(){var e,i,n,o=0,a={error:"error",info:"info",success:"success",warning:"warning"},r={clear:function(i,n){var o=d();e||s(o),l(i,o,n)||function(i){for(var n=e.children(),o=n.length-1;o>=0;o--)l(t(n[o]),i)}(o)},remove:function(i){var n=d();e||s(n),i&&0===t(":focus",i).length?h(i):e.children().length&&e.remove()},error:function(t,e,i){return u({type:a.error,iconClass:d().iconClasses.error,message:t,optionsOverride:i,title:e})},getContainer:s,info:function(t,e,i){return u({type:a.info,iconClass:d().iconClasses.info,message:t,optionsOverride:i,title:e})},options:{},subscribe:function(t){i=t},success:function(t,e,i){return u({type:a.success,iconClass:d().iconClasses.success,message:t,optionsOverride:i,title:e})},version:"2.1.1",warning:function(t,e,i){return u({type:a.warning,iconClass:d().iconClasses.warning,message:t,optionsOverride:i,title:e})}};return r;function s(i,n){return i||(i=d()),(e=t("#"+i.containerId+"[position = "+i.positionClass+"]")).length?e:(n&&(o=i,(e=t("<div/>").attr("id",o.containerId).attr("position",o.positionClass).addClass(o.positionClass).attr("aria-live","polite").attr("role","alert")).appendTo(t(o.target)),e=e),e);var o}function l(e,i,n){var o=!(!n||!n.force)&&n.force;return!(!e||!o&&0!==t(":focus",e).length||(e[i.hideMethod]({duration:i.hideDuration,easing:i.hideEasing,complete:function(){h(e)}}),0))}function c(t){i&&i(t)}function u(i){var a=d(),r=i.iconClass||a.iconClass;if(void 0!==i.optionsOverride&&(a=t.extend(a,i.optionsOverride),r=i.optionsOverride.iconClass||r),!function(t,e){if(t.preventDuplicates){if(e.message===n)return!0;n=e.message}return!1}(a,i)){o++,e=s(a,!0);var l=null,u=t("<div/>"),p=t("<div/>"),f=t("<div/>"),m=t("<div/>"),g=t(a.closeHtml),v={intervalId:null,hideEta:null,maxHideTime:null},y={toastId:o,state:"visible",startTime:new Date,options:a,map:i};return i.iconClass&&u.addClass(a.toastClass).addClass(r),i.title&&(p.append(i.title).addClass(a.titleClass),u.append(p)),i.message&&(f.append(i.message).addClass(a.messageClass),u.append(f)),a.closeButton&&(g.addClass("toast-close-button").attr("role","button"),u.prepend(g)),a.progressBar&&(m.addClass("toast-progress"),u.prepend(m)),a.newestOnTop?e.prepend(u):e.append(u),u.hide(),u[a.showMethod]({duration:a.showDuration,easing:a.showEasing,complete:a.onShown}),a.timeOut>0&&(l=setTimeout(b,a.timeOut),v.maxHideTime=parseFloat(a.timeOut),v.hideEta=(new Date).getTime()+v.maxHideTime,a.progressBar&&(v.intervalId=setInterval(k,10))),u.hover(w,x),!a.onclick&&a.tapToDismiss&&u.click(b),a.closeButton&&g&&g.click(function(t){t.stopPropagation?t.stopPropagation():void 0!==t.cancelBubble&&!0!==t.cancelBubble&&(t.cancelBubble=!0),b(!0)}),a.onclick&&u.click(function(){a.onclick(),b()}),c(y),a.debug&&console&&console.log(y),u}function b(e){if(!t(":focus",u).length||e)return clearTimeout(v.intervalId),u[a.hideMethod]({duration:a.hideDuration,easing:a.hideEasing,complete:function(){h(u),a.onHidden&&"hidden"!==y.state&&a.onHidden(),y.state="hidden",y.endTime=new Date,c(y)}})}function x(){(a.timeOut>0||a.extendedTimeOut>0)&&(l=setTimeout(b,a.extendedTimeOut),v.maxHideTime=parseFloat(a.extendedTimeOut),v.hideEta=(new Date).getTime()+v.maxHideTime)}function w(){clearTimeout(l),v.hideEta=0,u.stop(!0,!0)[a.showMethod]({duration:a.showDuration,easing:a.showEasing})}function k(){var t=(v.hideEta-(new Date).getTime())/v.maxHideTime*100;m.width(t+"%")}}function d(){return t.extend({},{tapToDismiss:!0,toastClass:"toast",containerId:"toast-container",debug:!1,showMethod:"fadeIn",showDuration:300,showEasing:"swing",onShown:void 0,hideMethod:"fadeOut",hideDuration:1e3,hideEasing:"swing",onHidden:void 0,extendedTimeOut:1e3,iconClasses:{error:"toast-error",info:"toast-info",success:"toast-success",warning:"toast-warning"},iconClass:"toast-info",positionClass:"toast-top-right",timeOut:5e3,titleClass:"toast-title",messageClass:"toast-message",target:"body",closeHtml:'<button type="button">&times;</button>',newestOnTop:!0,preventDuplicates:!1,progressBar:!1},r.options)}function h(t){e||(e=s()),t.is(":visible")||(t.remove(),t=null,0===e.children().length&&(e.remove(),n=void 0))}}()});var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},SMOOTH_SCROLL_DURATION=700;$(".smooth-scroll").on("click","a",function(t){t.preventDefault();var e=$(this).attr("href"),i=$(this).attr("data-offset")?$(this).attr("data-offset"):0,n=$(this).closest("ul").attr("data-allow-hashes");$("body,html").animate({scrollTop:$(e).offset().top-i},SMOOTH_SCROLL_DURATION),"undefined"!==(void 0===n?"undefined":_typeof(n))&&!1!==n&&history.replaceState(null,null,e)}),function(t){t.fn.scrollTo=function(e){return t(this).scrollTop(t(this).scrollTop()-t(this).offset().top+t(e).offset().top),this},t.fn.dropdown=function(e){var i={inDuration:300,outDuration:225,constrain_width:!0,hover:!1,gutter:0,belowOrigin:!1,alignment:"left"};this.each(function(){var n=t(this),o=t.extend({},i,e),a=!1,r=t("#"+n.attr("data-activates"));function s(){void 0!==n.data("induration")&&(o.inDuration=n.data("inDuration")),void 0!==n.data("outduration")&&(o.outDuration=n.data("outDuration")),void 0!==n.data("constrainwidth")&&(o.constrain_width=n.data("constrainwidth")),void 0!==n.data("hover")&&(o.hover=n.data("hover")),void 0!==n.data("gutter")&&(o.gutter=n.data("gutter")),void 0!==n.data("beloworigin")&&(o.belowOrigin=n.data("beloworigin")),void 0!==n.data("alignment")&&(o.alignment=n.data("alignment"))}function l(e){"focus"===e&&(a=!0),s(),r.addClass("active"),n.addClass("active"),!0===o.constrain_width?r.css("width",n.outerWidth()):r.css("white-space","nowrap");var i=window.innerHeight,l=n.innerHeight(),c=n.offset().left,u=n.offset().top-t(window).scrollTop(),d=o.alignment,h=0,p=0,f=0;!0===o.belowOrigin&&(f=l);var m=0,g=n.parent();if(!g.is("body")&&g[0].scrollHeight>g[0].clientHeight&&(m=g[0].scrollTop),c+r.innerWidth()>t(window).width()?d="right":c-r.innerWidth()+n.innerWidth()<0&&(d="left"),u+r.innerHeight()>i)if(u+l-r.innerHeight()<0){var v=i-u-f;r.css("max-height",v)}else f||(f+=l),f-=r.innerHeight();if("left"===d)h=o.gutter,p=n.position().left+h;else if("right"===d){p=n.position().left+n.outerWidth()-r.outerWidth()+(h=-o.gutter)}r.css({position:"absolute",top:n.position().top+f+m,left:p}),r.stop(!0,!0).css("opacity",0).slideDown({queue:!1,duration:o.inDuration,easing:"easeOutCubic",complete:function(){t(this).css("height","")}}).animate({opacity:1,scrollTop:0},{queue:!1,duration:o.inDuration,easing:"easeOutSine"})}function c(){a=!1,r.fadeOut(o.outDuration),r.removeClass("active"),n.removeClass("active"),setTimeout(function(){r.css("max-height","")},o.outDuration)}if(s(),n.after(r),o.hover){var u=!1;n.unbind("click."+n.attr("id")),n.on("mouseenter",function(){!1===u&&(l(),u=!0)}),n.on("mouseleave",function(e){var i=e.toElement||e.relatedTarget;t(i).closest(".dropdown-content").is(r)||(r.stop(!0,!0),c(),u=!1)}),r.on("mouseleave",function(e){var i=e.toElement||e.relatedTarget;t(i).closest(".dropdown-button").is(n)||(r.stop(!0,!0),c(),u=!1)})}else n.unbind("click."+n.attr("id")),n.bind("click."+n.attr("id"),function(e){a||(n[0]!==e.currentTarget||n.hasClass("active")||0!==t(e.target).closest(".dropdown-content").length?n.hasClass("active")&&(c(),t(document).unbind("click."+r.attr("id")+" touchstart."+r.attr("id"))):(e.preventDefault(),l("click")),r.hasClass("active")&&t(document).bind("click."+r.attr("id")+" touchstart."+r.attr("id"),function(e){r.is(e.target)||n.is(e.target)||n.find(e.target).length||(c(),t(document).unbind("click."+r.attr("id")+" touchstart."+r.attr("id")))}))});n.on("open",function(t,e){l(e)}),n.on("close",c)})},t(document).ready(function(){t(".dropdown-button").dropdown()})}(jQuery);var dropdownSelectors=$(".dropdown, .dropup");function dropdownEffectData(t){var e="fadeIn",i="fadeOut",n=$(t),o=$(".dropdown-menu",t),a=n.parents("ul.nav");return a.height>0&&(e=a.data("dropdown-in")||null,i=a.data("dropdown-out")||null),{target:t,dropdown:n,dropdownMenu:o,effectIn:o.data("dropdown-in")||e,effectOut:o.data("dropdown-out")||i}}function dropdownEffectStart(t,e){e&&(t.dropdown.addClass("dropdown-animating"),t.dropdownMenu.addClass("animated"),t.dropdownMenu.addClass(e))}function dropdownEffectEnd(t,e){t.dropdown.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){t.dropdown.removeClass("dropdown-animating"),t.dropdownMenu.removeClass("animated"),t.dropdownMenu.removeClass(t.effectIn),t.dropdownMenu.removeClass(t.effectOut),"function"==typeof e&&e()})}dropdownSelectors.on({"show.bs.dropdown":function(){var t=dropdownEffectData(this);dropdownEffectStart(t,t.effectIn)},"shown.bs.dropdown":function(){var t=dropdownEffectData(this);t.effectIn&&t.effectOut&&dropdownEffectEnd(t)},"hide.bs.dropdown":function(t){var e=dropdownEffectData(this);e.effectOut&&(t.preventDefault(),dropdownEffectStart(e,e.effectOut),dropdownEffectEnd(e,function(){e.dropdown.removeClass("show"),e.dropdownMenu.removeClass("show")}))}}),function(t){t(document).ready(function(){t.fn.reverse=[].reverse,t(document).on("mouseenter.fixedActionBtn",".fixed-action-btn:not(.click-to-toggle)",function(){var i=t(this);e(i)}),t(document).on("mouseleave.fixedActionBtn",".fixed-action-btn:not(.click-to-toggle)",function(){var e=t(this);i(e)}),t(document).on("click.fixedActionBtn",".fixed-action-btn.click-to-toggle > a",function(){var n=t(this).parent();n.hasClass("active")?i(n):e(n)})}),t.fn.extend({openFAB:function(){e(t(this))},closeFAB:function(){i(t(this))}});var e=function(e){var i=e;if(!1===i.hasClass("active")){var n=void 0,o=void 0;!0===i.hasClass("horizontal")?o=40:n=40,i.addClass("active"),i.find("ul .btn-floating").velocity({scaleY:".4",scaleX:".4",translateY:n+"px",translateX:o+"px"},{duration:0});var a=0;i.find("ul .btn-floating").reverse().each(function(){t(this).velocity({opacity:"1",scaleX:"1",scaleY:"1",translateY:"0",translateX:"0"},{duration:80,delay:a}),a+=40})}},i=function(t){$this=t;var e=void 0,i=void 0;!0===$this.hasClass("horizontal")?i=40:e=40,$this.removeClass("active");$this.find("ul .btn-floating").velocity("stop",!0),$this.find("ul .btn-floating").velocity({opacity:"0",scaleX:".4",scaleY:".4",translateY:e+"px",translateX:i+"px"},{duration:80})};t(".fixed-action-btn").on({click:function(e){return e.preventDefault(),function(e){if($this=e,!1===$this.hasClass("active")){$this.addClass("active"),$this.find("ul .btn-floating").velocity({scaleY:".4",scaleX:".4",translateY:"40px"},{duration:0});var i=0;$this.find("ul .btn-floating").reverse().each(function(){t(this).velocity({opacity:"1",scaleX:"1",scaleY:"1",translateY:"0"},{duration:80,delay:i}),i+=40})}else{$this.removeClass("active");$this.find("ul .btn-floating").velocity("stop",!0),$this.find("ul .btn-floating").velocity({opacity:"0",scaleX:".4",scaleY:".4",translateY:"40px"},{duration:80})}}(t(".fixed-action-btn")),!1}})}(jQuery),function(t,e,i,n){"use strict";var o,a=["","webkit","Moz","MS","ms","o"],r=e.createElement("div"),s="function",l=Math.round,c=Math.abs,u=Date.now;function d(t,e,i){return setTimeout(y(t,i),e)}function h(t,e,i){return!!Array.isArray(t)&&(p(t,i[e],i),!0)}function p(t,e,i){var o;if(t)if(t.forEach)t.forEach(e,i);else if(t.length!==n)for(o=0;o<t.length;)e.call(i,t[o],o,t),o++;else for(o in t)t.hasOwnProperty(o)&&e.call(i,t[o],o,t)}function f(e,i,n){var o="DEPRECATED METHOD: "+i+"\n"+n+" AT \n";return function(){var i=new Error("get-stack-trace"),n=i&&i.stack?i.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",a=t.console&&(t.console.warn||t.console.log);return a&&a.call(t.console,o,n),e.apply(this,arguments)}}o="function"!=typeof Object.assign?function(t){if(t===n||null===t)throw new TypeError("Cannot convert undefined or null to object");for(var e=Object(t),i=1;i<arguments.length;i++){var o=arguments[i];if(o!==n&&null!==o)for(var a in o)o.hasOwnProperty(a)&&(e[a]=o[a])}return e}:Object.assign;var m=f(function(t,e,i){for(var o=Object.keys(e),a=0;a<o.length;)(!i||i&&t[o[a]]===n)&&(t[o[a]]=e[o[a]]),a++;return t},"extend","Use `assign`."),g=f(function(t,e){return m(t,e,!0)},"merge","Use `assign`.");function v(t,e,i){var n,a=e.prototype;(n=t.prototype=Object.create(a)).constructor=t,n._super=a,i&&o(n,i)}function y(t,e){return function(){return t.apply(e,arguments)}}function b(t,e){return typeof t==s?t.apply(e?e[0]||n:n,e):t}function x(t,e){return t===n?e:t}function w(t,e,i){p(T(e),function(e){t.addEventListener(e,i,!1)})}function k(t,e,i){p(T(e),function(e){t.removeEventListener(e,i,!1)})}function C(t,e){for(;t;){if(t==e)return!0;t=t.parentNode}return!1}function S(t,e){return t.indexOf(e)>-1}function T(t){return t.trim().split(/\s+/g)}function M(t,e,i){if(t.indexOf&&!i)return t.indexOf(e);for(var n=0;n<t.length;){if(i&&t[n][i]==e||!i&&t[n]===e)return n;n++}return-1}function I(t){return Array.prototype.slice.call(t,0)}function P(t,e,i){for(var n=[],o=[],a=0;a<t.length;){var r=e?t[a][e]:t[a];M(o,r)<0&&n.push(t[a]),o[a]=r,a++}return i&&(n=e?n.sort(function(t,i){return t[e]>i[e]}):n.sort()),n}function A(t,e){for(var i,o,r=e[0].toUpperCase()+e.slice(1),s=0;s<a.length;){if((o=(i=a[s])?i+r:e)in t)return o;s++}return n}var D=1;function E(e){var i=e.ownerDocument||e;return i.defaultView||i.parentWindow||t}var _="ontouchstart"in t,O=A(t,"PointerEvent")!==n,L=_&&/mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),R=25,F=1,V=2,W=4,z=8,H=1,N=2,B=4,Y=8,j=16,$=N|B,X=Y|j,q=$|X,U=["x","y"],Q=["clientX","clientY"];function Z(t,e){var i=this;this.manager=t,this.callback=e,this.element=t.element,this.target=t.options.inputTarget,this.domHandler=function(e){b(t.options.enable,[t])&&i.handler(e)},this.init()}function G(t,e,i){var o=i.pointers.length,a=i.changedPointers.length,r=e&F&&o-a==0,s=e&(W|z)&&o-a==0;i.isFirst=!!r,i.isFinal=!!s,r&&(t.session={}),i.eventType=e,function(t,e){var i=t.session,o=e.pointers,a=o.length;i.firstInput||(i.firstInput=K(e));a>1&&!i.firstMultiple?i.firstMultiple=K(e):1===a&&(i.firstMultiple=!1);var r=i.firstInput,s=i.firstMultiple,l=s?s.center:r.center,d=e.center=J(o);e.timeStamp=u(),e.deltaTime=e.timeStamp-r.timeStamp,e.angle=nt(l,d),e.distance=it(l,d),function(t,e){var i=e.center,n=t.offsetDelta||{},o=t.prevDelta||{},a=t.prevInput||{};e.eventType!==F&&a.eventType!==W||(o=t.prevDelta={x:a.deltaX||0,y:a.deltaY||0},n=t.offsetDelta={x:i.x,y:i.y});e.deltaX=o.x+(i.x-n.x),e.deltaY=o.y+(i.y-n.y)}(i,e),e.offsetDirection=et(e.deltaX,e.deltaY);var h=tt(e.deltaTime,e.deltaX,e.deltaY);e.overallVelocityX=h.x,e.overallVelocityY=h.y,e.overallVelocity=c(h.x)>c(h.y)?h.x:h.y,e.scale=s?(m=s.pointers,g=o,it(g[0],g[1],Q)/it(m[0],m[1],Q)):1,e.rotation=s?(p=s.pointers,f=o,nt(f[1],f[0],Q)+nt(p[1],p[0],Q)):0,e.maxPointers=i.prevInput?e.pointers.length>i.prevInput.maxPointers?e.pointers.length:i.prevInput.maxPointers:e.pointers.length,function(t,e){var i,o,a,r,s=t.lastInterval||e,l=e.timeStamp-s.timeStamp;if(e.eventType!=z&&(l>R||s.velocity===n)){var u=e.deltaX-s.deltaX,d=e.deltaY-s.deltaY,h=tt(l,u,d);o=h.x,a=h.y,i=c(h.x)>c(h.y)?h.x:h.y,r=et(u,d),t.lastInterval=e}else i=s.velocity,o=s.velocityX,a=s.velocityY,r=s.direction;e.velocity=i,e.velocityX=o,e.velocityY=a,e.direction=r}(i,e);var p,f;var m,g;var v=t.element;C(e.srcEvent.target,v)&&(v=e.srcEvent.target);e.target=v}(t,i),t.emit("hammer.input",i),t.recognize(i),t.session.prevInput=i}function K(t){for(var e=[],i=0;i<t.pointers.length;)e[i]={clientX:l(t.pointers[i].clientX),clientY:l(t.pointers[i].clientY)},i++;return{timeStamp:u(),pointers:e,center:J(e),deltaX:t.deltaX,deltaY:t.deltaY}}function J(t){var e=t.length;if(1===e)return{x:l(t[0].clientX),y:l(t[0].clientY)};for(var i=0,n=0,o=0;o<e;)i+=t[o].clientX,n+=t[o].clientY,o++;return{x:l(i/e),y:l(n/e)}}function tt(t,e,i){return{x:e/t||0,y:i/t||0}}function et(t,e){return t===e?H:c(t)>=c(e)?t<0?N:B:e<0?Y:j}function it(t,e,i){i||(i=U);var n=e[i[0]]-t[i[0]],o=e[i[1]]-t[i[1]];return Math.sqrt(n*n+o*o)}function nt(t,e,i){i||(i=U);var n=e[i[0]]-t[i[0]],o=e[i[1]]-t[i[1]];return 180*Math.atan2(o,n)/Math.PI}Z.prototype={handler:function(){},init:function(){this.evEl&&w(this.element,this.evEl,this.domHandler),this.evTarget&&w(this.target,this.evTarget,this.domHandler),this.evWin&&w(E(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&k(this.element,this.evEl,this.domHandler),this.evTarget&&k(this.target,this.evTarget,this.domHandler),this.evWin&&k(E(this.element),this.evWin,this.domHandler)}};var ot={mousedown:F,mousemove:V,mouseup:W},at="mousedown",rt="mousemove mouseup";function st(){this.evEl=at,this.evWin=rt,this.pressed=!1,Z.apply(this,arguments)}v(st,Z,{handler:function(t){var e=ot[t.type];e&F&&0===t.button&&(this.pressed=!0),e&V&&1!==t.which&&(e=W),this.pressed&&(e&W&&(this.pressed=!1),this.callback(this.manager,e,{pointers:[t],changedPointers:[t],pointerType:"mouse",srcEvent:t}))}});var lt={pointerdown:F,pointermove:V,pointerup:W,pointercancel:z,pointerout:z},ct={2:"touch",3:"pen",4:"mouse",5:"kinect"},ut="pointerdown",dt="pointermove pointerup pointercancel";function ht(){this.evEl=ut,this.evWin=dt,Z.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}t.MSPointerEvent&&!t.PointerEvent&&(ut="MSPointerDown",dt="MSPointerMove MSPointerUp MSPointerCancel"),v(ht,Z,{handler:function(t){var e=this.store,i=!1,n=t.type.toLowerCase().replace("ms",""),o=lt[n],a=ct[t.pointerType]||t.pointerType,r="touch"==a,s=M(e,t.pointerId,"pointerId");o&F&&(0===t.button||r)?s<0&&(e.push(t),s=e.length-1):o&(W|z)&&(i=!0),s<0||(e[s]=t,this.callback(this.manager,o,{pointers:e,changedPointers:[t],pointerType:a,srcEvent:t}),i&&e.splice(s,1))}});var pt={touchstart:F,touchmove:V,touchend:W,touchcancel:z},ft="touchstart",mt="touchstart touchmove touchend touchcancel";function gt(){this.evTarget=ft,this.evWin=mt,this.started=!1,Z.apply(this,arguments)}v(gt,Z,{handler:function(t){var e=pt[t.type];if(e===F&&(this.started=!0),this.started){var i=function(t,e){var i=I(t.touches),n=I(t.changedTouches);e&(W|z)&&(i=P(i.concat(n),"identifier",!0));return[i,n]}.call(this,t,e);e&(W|z)&&i[0].length-i[1].length==0&&(this.started=!1),this.callback(this.manager,e,{pointers:i[0],changedPointers:i[1],pointerType:"touch",srcEvent:t})}}});var vt={touchstart:F,touchmove:V,touchend:W,touchcancel:z},yt="touchstart touchmove touchend touchcancel";function bt(){this.evTarget=yt,this.targetIds={},Z.apply(this,arguments)}v(bt,Z,{handler:function(t){var e=vt[t.type],i=function(t,e){var i=I(t.touches),n=this.targetIds;if(e&(F|V)&&1===i.length)return n[i[0].identifier]=!0,[i,i];var o,a,r=I(t.changedTouches),s=[],l=this.target;if(a=i.filter(function(t){return C(t.target,l)}),e===F)for(o=0;o<a.length;)n[a[o].identifier]=!0,o++;o=0;for(;o<r.length;)n[r[o].identifier]&&s.push(r[o]),e&(W|z)&&delete n[r[o].identifier],o++;if(!s.length)return;return[P(a.concat(s),"identifier",!0),s]}.call(this,t,e);i&&this.callback(this.manager,e,{pointers:i[0],changedPointers:i[1],pointerType:"touch",srcEvent:t})}});var xt=2500,wt=25;function kt(){Z.apply(this,arguments);var t=y(this.handler,this);this.touch=new bt(this.manager,t),this.mouse=new st(this.manager,t),this.primaryTouch=null,this.lastTouches=[]}function Ct(t){var e=t.changedPointers[0];if(e.identifier===this.primaryTouch){var i={x:e.clientX,y:e.clientY};this.lastTouches.push(i);var n=this.lastTouches;setTimeout(function(){var t=n.indexOf(i);t>-1&&n.splice(t,1)},xt)}}v(kt,Z,{handler:function(t,e,i){var n="touch"==i.pointerType,o="mouse"==i.pointerType;if(!(o&&i.sourceCapabilities&&i.sourceCapabilities.firesTouchEvents)){if(n)(function(t,e){t&F?(this.primaryTouch=e.changedPointers[0].identifier,Ct.call(this,e)):t&(W|z)&&Ct.call(this,e)}).call(this,e,i);else if(o&&function(t){for(var e=t.srcEvent.clientX,i=t.srcEvent.clientY,n=0;n<this.lastTouches.length;n++){var o=this.lastTouches[n],a=Math.abs(e-o.x),r=Math.abs(i-o.y);if(a<=wt&&r<=wt)return!0}return!1}.call(this,i))return;this.callback(t,e,i)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var St=A(r.style,"touchAction"),Tt=St!==n,Mt="auto",It="manipulation",Pt="none",At="pan-x",Dt="pan-y",Et=function(){if(!Tt)return!1;var e={},i=t.CSS&&t.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(n){e[n]=!i||t.CSS.supports("touch-action",n)}),e}();function _t(t,e){this.manager=t,this.set(e)}_t.prototype={set:function(t){"compute"==t&&(t=this.compute()),Tt&&this.manager.element.style&&Et[t]&&(this.manager.element.style[St]=t),this.actions=t.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var t=[];return p(this.manager.recognizers,function(e){b(e.options.enable,[e])&&(t=t.concat(e.getTouchAction()))}),function(t){if(S(t,Pt))return Pt;var e=S(t,At),i=S(t,Dt);if(e&&i)return Pt;if(e||i)return e?At:Dt;if(S(t,It))return It;return Mt}(t.join(" "))},preventDefaults:function(t){var e=t.srcEvent,i=t.offsetDirection;if(this.manager.session.prevented)e.preventDefault();else{var n=this.actions,o=S(n,Pt)&&!Et[Pt],a=S(n,Dt)&&!Et[Dt],r=S(n,At)&&!Et[At];if(o){var s=1===t.pointers.length,l=t.distance<2,c=t.deltaTime<250;if(s&&l&&c)return}if(!r||!a)return o||a&&i&$||r&&i&X?this.preventSrc(e):void 0}},preventSrc:function(t){this.manager.session.prevented=!0,t.preventDefault()}};var Ot=1,Lt=2,Rt=4,Ft=8,Vt=Ft,Wt=16;function zt(t){this.options=o({},this.defaults,t||{}),this.id=D++,this.manager=null,this.options.enable=x(this.options.enable,!0),this.state=Ot,this.simultaneous={},this.requireFail=[]}function Ht(t){return t&Wt?"cancel":t&Ft?"end":t&Rt?"move":t&Lt?"start":""}function Nt(t){return t==j?"down":t==Y?"up":t==N?"left":t==B?"right":""}function Bt(t,e){var i=e.manager;return i?i.get(t):t}function Yt(){zt.apply(this,arguments)}function jt(){Yt.apply(this,arguments),this.pX=null,this.pY=null}function $t(){Yt.apply(this,arguments)}function Xt(){zt.apply(this,arguments),this._timer=null,this._input=null}function qt(){Yt.apply(this,arguments)}function Ut(){Yt.apply(this,arguments)}function Qt(){zt.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function Zt(t,e){return(e=e||{}).recognizers=x(e.recognizers,Zt.defaults.preset),new Gt(t,e)}zt.prototype={defaults:{},set:function(t){return o(this.options,t),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(t){if(h(t,"recognizeWith",this))return this;var e=this.simultaneous;return e[(t=Bt(t,this)).id]||(e[t.id]=t,t.recognizeWith(this)),this},dropRecognizeWith:function(t){return h(t,"dropRecognizeWith",this)?this:(t=Bt(t,this),delete this.simultaneous[t.id],this)},requireFailure:function(t){if(h(t,"requireFailure",this))return this;var e=this.requireFail;return-1===M(e,t=Bt(t,this))&&(e.push(t),t.requireFailure(this)),this},dropRequireFailure:function(t){if(h(t,"dropRequireFailure",this))return this;t=Bt(t,this);var e=M(this.requireFail,t);return e>-1&&this.requireFail.splice(e,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(t){return!!this.simultaneous[t.id]},emit:function(t){var e=this,i=this.state;function n(i){e.manager.emit(i,t)}i<Ft&&n(e.options.event+Ht(i)),n(e.options.event),t.additionalEvent&&n(t.additionalEvent),i>=Ft&&n(e.options.event+Ht(i))},tryEmit:function(t){if(this.canEmit())return this.emit(t);this.state=32},canEmit:function(){for(var t=0;t<this.requireFail.length;){if(!(this.requireFail[t].state&(32|Ot)))return!1;t++}return!0},recognize:function(t){var e=o({},t);if(!b(this.options.enable,[this,e]))return this.reset(),void(this.state=32);this.state&(Vt|Wt|32)&&(this.state=Ot),this.state=this.process(e),this.state&(Lt|Rt|Ft|Wt)&&this.tryEmit(e)},process:function(t){},getTouchAction:function(){},reset:function(){}},v(Yt,zt,{defaults:{pointers:1},attrTest:function(t){var e=this.options.pointers;return 0===e||t.pointers.length===e},process:function(t){var e=this.state,i=t.eventType,n=e&(Lt|Rt),o=this.attrTest(t);return n&&(i&z||!o)?e|Wt:n||o?i&W?e|Ft:e&Lt?e|Rt:Lt:32}}),v(jt,Yt,{defaults:{event:"pan",threshold:10,pointers:1,direction:q},getTouchAction:function(){var t=this.options.direction,e=[];return t&$&&e.push(Dt),t&X&&e.push(At),e},directionTest:function(t){var e=this.options,i=!0,n=t.distance,o=t.direction,a=t.deltaX,r=t.deltaY;return o&e.direction||(e.direction&$?(o=0===a?H:a<0?N:B,i=a!=this.pX,n=Math.abs(t.deltaX)):(o=0===r?H:r<0?Y:j,i=r!=this.pY,n=Math.abs(t.deltaY))),t.direction=o,i&&n>e.threshold&&o&e.direction},attrTest:function(t){return Yt.prototype.attrTest.call(this,t)&&(this.state&Lt||!(this.state&Lt)&&this.directionTest(t))},emit:function(t){this.pX=t.deltaX,this.pY=t.deltaY;var e=Nt(t.direction);e&&(t.additionalEvent=this.options.event+e),this._super.emit.call(this,t)}}),v($t,Yt,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[Pt]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.scale-1)>this.options.threshold||this.state&Lt)},emit:function(t){if(1!==t.scale){var e=t.scale<1?"in":"out";t.additionalEvent=this.options.event+e}this._super.emit.call(this,t)}}),v(Xt,zt,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return[Mt]},process:function(t){var e=this.options,i=t.pointers.length===e.pointers,n=t.distance<e.threshold,o=t.deltaTime>e.time;if(this._input=t,!n||!i||t.eventType&(W|z)&&!o)this.reset();else if(t.eventType&F)this.reset(),this._timer=d(function(){this.state=Vt,this.tryEmit()},e.time,this);else if(t.eventType&W)return Vt;return 32},reset:function(){clearTimeout(this._timer)},emit:function(t){this.state===Vt&&(t&&t.eventType&W?this.manager.emit(this.options.event+"up",t):(this._input.timeStamp=u(),this.manager.emit(this.options.event,this._input)))}}),v(qt,Yt,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[Pt]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.rotation)>this.options.threshold||this.state&Lt)}}),v(Ut,Yt,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:$|X,pointers:1},getTouchAction:function(){return jt.prototype.getTouchAction.call(this)},attrTest:function(t){var e,i=this.options.direction;return i&($|X)?e=t.overallVelocity:i&$?e=t.overallVelocityX:i&X&&(e=t.overallVelocityY),this._super.attrTest.call(this,t)&&i&t.offsetDirection&&t.distance>this.options.threshold&&t.maxPointers==this.options.pointers&&c(e)>this.options.velocity&&t.eventType&W},emit:function(t){var e=Nt(t.offsetDirection);e&&this.manager.emit(this.options.event+e,t),this.manager.emit(this.options.event,t)}}),v(Qt,zt,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[It]},process:function(t){var e=this.options,i=t.pointers.length===e.pointers,n=t.distance<e.threshold,o=t.deltaTime<e.time;if(this.reset(),t.eventType&F&&0===this.count)return this.failTimeout();if(n&&o&&i){if(t.eventType!=W)return this.failTimeout();var a=!this.pTime||t.timeStamp-this.pTime<e.interval,r=!this.pCenter||it(this.pCenter,t.center)<e.posThreshold;if(this.pTime=t.timeStamp,this.pCenter=t.center,r&&a?this.count+=1:this.count=1,this._input=t,0===this.count%e.taps)return this.hasRequireFailures()?(this._timer=d(function(){this.state=Vt,this.tryEmit()},e.interval,this),Lt):Vt}return 32},failTimeout:function(){return this._timer=d(function(){this.state=32},this.options.interval,this),32},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==Vt&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),Zt.VERSION="2.0.7",Zt.defaults={domEvents:!1,touchAction:"compute",enable:!0,inputTarget:null,inputClass:null,preset:[[qt,{enable:!1}],[$t,{enable:!1},["rotate"]],[Ut,{direction:$}],[jt,{direction:$},["swipe"]],[Qt],[Qt,{event:"doubletap",taps:2},["tap"]],[Xt]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};function Gt(t,e){var i;this.options=o({},Zt.defaults,e||{}),this.options.inputTarget=this.options.inputTarget||t,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=t,this.input=new((i=this).options.inputClass||(O?ht:L?bt:_?kt:st))(i,G),this.touchAction=new _t(this,this.options.touchAction),Kt(this,!0),p(this.options.recognizers,function(t){var e=this.add(new t[0](t[1]));t[2]&&e.recognizeWith(t[2]),t[3]&&e.requireFailure(t[3])},this)}function Kt(t,e){var i,n=t.element;n.style&&(p(t.options.cssProps,function(o,a){i=A(n.style,a),e?(t.oldCssProps[i]=n.style[i],n.style[i]=o):n.style[i]=t.oldCssProps[i]||""}),e||(t.oldCssProps={}))}Gt.prototype={set:function(t){return o(this.options,t),t.touchAction&&this.touchAction.update(),t.inputTarget&&(this.input.destroy(),this.input.target=t.inputTarget,this.input.init()),this},stop:function(t){this.session.stopped=t?2:1},recognize:function(t){var e=this.session;if(!e.stopped){var i;this.touchAction.preventDefaults(t);var n=this.recognizers,o=e.curRecognizer;(!o||o&&o.state&Vt)&&(o=e.curRecognizer=null);for(var a=0;a<n.length;)i=n[a],2===e.stopped||o&&i!=o&&!i.canRecognizeWith(o)?i.reset():i.recognize(t),!o&&i.state&(Lt|Rt|Ft)&&(o=e.curRecognizer=i),a++}},get:function(t){if(t instanceof zt)return t;for(var e=this.recognizers,i=0;i<e.length;i++)if(e[i].options.event==t)return e[i];return null},add:function(t){if(h(t,"add",this))return this;var e=this.get(t.options.event);return e&&this.remove(e),this.recognizers.push(t),t.manager=this,this.touchAction.update(),t},remove:function(t){if(h(t,"remove",this))return this;if(t=this.get(t)){var e=this.recognizers,i=M(e,t);-1!==i&&(e.splice(i,1),this.touchAction.update())}return this},on:function(t,e){if(t!==n&&e!==n){var i=this.handlers;return p(T(t),function(t){i[t]=i[t]||[],i[t].push(e)}),this}},off:function(t,e){if(t!==n){var i=this.handlers;return p(T(t),function(t){e?i[t]&&i[t].splice(M(i[t],e),1):delete i[t]}),this}},emit:function(t,i){var n,o,a;this.options.domEvents&&(n=t,o=i,(a=e.createEvent("Event")).initEvent(n,!0,!0),a.gesture=o,o.target.dispatchEvent(a));var r=this.handlers[t]&&this.handlers[t].slice();if(r&&r.length){i.type=t,i.preventDefault=function(){i.srcEvent.preventDefault()};for(var s=0;s<r.length;)r[s](i),s++}},destroy:function(){this.element&&Kt(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},o(Zt,{INPUT_START:F,INPUT_MOVE:V,INPUT_END:W,INPUT_CANCEL:z,STATE_POSSIBLE:Ot,STATE_BEGAN:Lt,STATE_CHANGED:Rt,STATE_ENDED:Ft,STATE_RECOGNIZED:Vt,STATE_CANCELLED:Wt,STATE_FAILED:32,DIRECTION_NONE:H,DIRECTION_LEFT:N,DIRECTION_RIGHT:B,DIRECTION_UP:Y,DIRECTION_DOWN:j,DIRECTION_HORIZONTAL:$,DIRECTION_VERTICAL:X,DIRECTION_ALL:q,Manager:Gt,Input:Z,TouchAction:_t,TouchInput:bt,MouseInput:st,PointerEventInput:ht,TouchMouseInput:kt,SingleTouchInput:gt,Recognizer:zt,AttrRecognizer:Yt,Tap:Qt,Pan:jt,Swipe:Ut,Pinch:$t,Rotate:qt,Press:Xt,on:w,off:k,each:p,merge:g,extend:m,assign:o,inherit:v,bindFn:y,prefixed:A}),(void 0!==t?t:"undefined"!=typeof self?self:{}).Hammer=Zt,"function"==typeof define&&define.amd?define(function(){return Zt}):"undefined"!=typeof module&&module.exports?module.exports=Zt:t.Hammer=Zt}(window,document),function(t){"function"==typeof define&&define.amd?define(["jquery","hammerjs"],t):"object"==typeof exports?t(require("jquery"),require("hammerjs")):t(jQuery,Hammer)}(function(t,e){var i;t.fn.hammer=function(i){return this.each(function(){var n,o;n=i,(o=t(this)).data("hammer")||o.data("hammer",new e(o[0],n))})},e.Manager.prototype.emit=(i=e.Manager.prototype.emit,function(e,n){i.call(this,e,n),t(this.element).trigger({type:e,gesture:n})})});var _createClass=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}!function(t){var e=240,i=1440,n=2,o=.3,a=-.5,r=-.3,s=.5,l=10,c=function(){function c(u,d){var h=this;_classCallCheck(this,c);var p=!1,f={MENU_WIDTH:e,edge:"left",closeOnClick:!1};d=t.extend(f,d),this.options=d;var m=u;this.menu_id=t("#"+m.attr("data-activates"));var g=t("#"+this.menu_id.attr("id")+"> .sidenav-bg");d.MENU_WIDTH!==e&&(this.menu_id.css("width",d.MENU_WIDTH),g.css("width",d.MENU_WIDTH));var v=t('<div class="drag-target"></div>');t("body").append(v),"left"===d.edge?(this.menu_id.css("transform","translateX(-100%)"),v.css({left:0})):(this.menu_id.addClass("right-aligned").css("transform","translateX(100%)"),v.css({right:0})),this.menu_id.hasClass("fixed")&&(window.innerWidth>i&&this.menu_id.css("transform","translateX(0)"),t(window).resize(function(){window.innerWidth>i?t("#sidenav-overlay").length?h.removeMenu(!0):h.menu_id.css("transform","translateX(0%)"):!1===p&&("left"===d.edge?h.menu_id.css("transform","translateX(-100%)"):h.menu_id.css("transform","translateX(100%)"))})),!0===this.options.closeOnClick&&this.menu_id.on("click","a:not(.collapsible-header)",function(){h.removeMenu()}),m.click(function(e){if(e.preventDefault(),!0===p)p=!1,h.removeMenu();else{var i=t("body"),n=t('<div id="sidenav-overlay"></div>');i.append(n),"left"===h.options.edge?h.menu_id.velocity({translateX:[0,-1*d.MENU_WIDTH]},{duration:300,queue:!1,easing:"easeOutQuad"}):h.menu_id.velocity({translateX:[0,d.MENU_WIDTH]},{duration:300,queue:!1,easing:"easeOutQuad"}),n.click(function(){h.removeMenu()})}}),v.click(function(){h.removeMenu()}),v.hammer({prevent_default:!1}).bind("pan",function(e){if("touch"===e.gesture.pointerType){var i=e.gesture.center.x,o=t("body"),a=o.innerWidth();if(o.css("overflow","hidden"),o.width(a),0===t("#sidenav-overlay").length){var r=t('<div id="sidenav-overlay"></div>');r.css("opacity",0).click(function(){h.removeMenu()}),t("body").append(r)}if("left"===d.edge&&(i>d.MENU_WIDTH?i=d.MENU_WIDTH:i<0&&(i=0)),"left"===d.edge)i<d.MENU_WIDTH/n?p=!1:i>=d.MENU_WIDTH/n&&(p=!0),h.menu_id.css("transform","translateX("+(i-d.MENU_WIDTH)+"px)");else{i<window.innerWidth-d.MENU_WIDTH/n?p=!0:i>=window.innerWidth-d.MENU_WIDTH/n&&(p=!1);var s=i-d.MENU_WIDTH/n;s<0&&(s=0),h.menu_id.css("transform","translateX("+s+"px)")}var l=void 0;"left"===d.edge?(l=i/d.MENU_WIDTH,t("#sidenav-overlay").velocity({opacity:l},{duration:10,queue:!1,easing:"easeOutQuad"})):(l=Math.abs((i-window.innerWidth)/d.MENU_WIDTH),t("#sidenav-overlay").velocity({opacity:l},{duration:10,queue:!1,easing:"easeOutQuad"}))}}).bind("panend",function(e){if("touch"===e.gesture.pointerType){var i=e.gesture.velocityX,c=e.gesture.center.x,u=c-d.MENU_WIDTH,f=c-d.MENU_WIDTH/n;u>0&&(u=0),f<0&&(f=0),"left"===d.edge?p&&i<=o||i<a?(0!==u&&h.menu_id.velocity({translateX:[0,u]},{duration:300,queue:!1,easing:"easeOutQuad"}),t("#sidenav-overlay").velocity({opacity:1},{duration:50,queue:!1,easing:"easeOutQuad"}),v.css({width:"10px",right:"",left:0})):(!p||i>o)&&(t("body").css({overflow:"",width:""}),h.menu_id.velocity({translateX:[-1*d.MENU_WIDTH-l,u]},{duration:200,queue:!1,easing:"easeOutQuad"}),t("#sidenav-overlay").velocity({opacity:0},{duration:200,queue:!1,easing:"easeOutQuad",complete:function(){t(this).remove()}}),v.css({width:"10px",right:"",left:0})):p&&i>=r||i>s?(h.menu_id.velocity({translateX:[0,f]},{duration:300,queue:!1,easing:"easeOutQuad"}),t("#sidenav-overlay").velocity({opacity:1},{duration:50,queue:!1,easing:"easeOutQuad"}),v.css({width:"50%",right:"",left:0})):(!p||i<r)&&(t("body").css({overflow:"",width:""}),h.menu_id.velocity({translateX:[d.MENU_WIDTH+l,f]},{duration:200,queue:!1,easing:"easeOutQuad"}),t("#sidenav-overlay").velocity({opacity:0},{duration:200,queue:!1,easing:"easeOutQuad",complete:function(){t(h).remove()}}),v.css({width:"10px",right:0,left:""}))}})}return _createClass(c,[{key:"removeMenu",value:function(e){var i=this;t("body").css({overflow:"",width:""}),"left"===this.options.edge?this.menu_id.velocity({translateX:"-100%"},{duration:200,queue:!1,easing:"easeOutCubic",complete:function(){!0===e&&(i.menu_id.removeAttr("style"),i.menu_id.css("width",i.options.MENU_WIDTH))}}):this.menu_id.velocity({translateX:"100%"},{duration:200,queue:!1,easing:"easeOutCubic",complete:function(){!0===e&&(i.menu_id.removeAttr("style"),i.menu_id.css("width",i.options.MENU_WIDTH))}}),t("#sidenav-overlay").velocity({opacity:0},{duration:200,queue:!1,easing:"easeOutQuad",complete:function(){t("#sidenav-overlay").remove()}})}},{key:"show",value:function(){this.trigger("click")}},{key:"hide",value:function(){t("#sidenav-overlay").trigger("click")}}]),c}();t.fn.sideNav=function(e){return this.each(function(){new c(t(this),e)})}}(jQuery),function(t){t.fn.collapsible=function(e){var i={accordion:void 0};return e=t.extend(i,e),this.each(function(){var i=t(this),n=t(this).find("> li > .collapsible-header"),o=i.data("collapsible");function a(e){n=i.find("> li > .collapsible-header"),e.hasClass("active")?e.parent().addClass("active"):e.parent().removeClass("active"),e.parent().hasClass("active")?e.siblings(".collapsible-body").stop(!0,!1).slideDown({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){t(this).css("height","")}}):e.siblings(".collapsible-body").stop(!0,!1).slideUp({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){t(this).css("height","")}}),n.not(e).removeClass("active").parent().removeClass("active"),n.not(e).parent().children(".collapsible-body").stop(!0,!1).slideUp({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){t(this).css("height","")}})}function r(e){e.hasClass("active")?e.parent().addClass("active"):e.parent().removeClass("active"),e.parent().hasClass("active")?e.siblings(".collapsible-body").stop(!0,!1).slideDown({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){t(this).css("height","")}}):e.siblings(".collapsible-body").stop(!0,!1).slideUp({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){t(this).css("height","")}})}function s(t){return l(t).length>0}function l(t){return t.closest("li > .collapsible-header")}i.off("click.collapse",".collapsible-header"),n.off("click.collapse"),e.accordion||"accordion"===o||void 0===o?((n=i.find("> li > .collapsible-header")).on("click.collapse",function(e){var i=t(e.target);s(i)&&(i=l(i)),i.toggleClass("active"),a(i)}),a(n.filter(".active").first())):n.each(function(){t(this).on("click.collapse",function(e){var i=t(e.target);s(i)&&(i=l(i)),i.toggleClass("active"),r(i)}),t(this).hasClass("active")&&r(t(this))})})},t(document).ready(function(){t(".collapsible").collapsible()})}(jQuery),function(t,e){"function"==typeof define&&define.amd?define(["jquery"],function(t){return e(t)}):"object"==typeof exports?module.exports=e(require("jquery")):e(jQuery)}(0,function(t){var e=function(t,e){var i,n=document.createElement("canvas");t.appendChild(n),"object"==typeof G_vmlCanvasManager&&G_vmlCanvasManager.initElement(n);var o=n.getContext("2d");n.width=n.height=e.size;var a=1;window.devicePixelRatio>1&&(a=window.devicePixelRatio,n.style.width=n.style.height=[e.size,"px"].join(""),n.width=n.height=e.size*a,o.scale(a,a)),o.translate(e.size/2,e.size/2),o.rotate((e.rotate/180-.5)*Math.PI);var r=(e.size-e.lineWidth)/2;e.scaleColor&&e.scaleLength&&(r-=e.scaleLength+2),Date.now=Date.now||function(){return+new Date};var s=function(t,e,i){var n=(i=Math.min(Math.max(-1,i||0),1))<=0;o.beginPath(),o.arc(0,0,r,0,2*Math.PI*i,n),o.strokeStyle=t,o.lineWidth=e,o.stroke()},l=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)},c=function(){e.scaleColor&&function(){var t,i;o.lineWidth=1,o.fillStyle=e.scaleColor,o.save();for(var n=24;n>0;--n)n%6==0?(i=e.scaleLength,t=0):(i=.6*e.scaleLength,t=e.scaleLength-i),o.fillRect(-e.size/2+t,0,i,1),o.rotate(Math.PI/12);o.restore()}(),e.trackColor&&s(e.trackColor,e.trackWidth||e.lineWidth,1)};this.getCanvas=function(){return n},this.getCtx=function(){return o},this.clear=function(){o.clearRect(e.size/-2,e.size/-2,e.size,e.size)},this.draw=function(t){var n;e.scaleColor||e.trackColor?o.getImageData&&o.putImageData?i?o.putImageData(i,0,0):(c(),i=o.getImageData(0,0,e.size*a,e.size*a)):(this.clear(),c()):this.clear(),o.lineCap=e.lineCap,n="function"==typeof e.barColor?e.barColor(t):e.barColor,s(n,e.lineWidth,t/100)}.bind(this),this.animate=function(t,i){var n=Date.now();e.onStart(t,i);var o=function(){var a=Math.min(Date.now()-n,e.animate.duration),r=e.easing(this,a,t,i-t,e.animate.duration);this.draw(r),e.onStep(t,i,r),a>=e.animate.duration?e.onStop(t,i):l(o)}.bind(this);l(o)}.bind(this)};t.fn.easyPieChart=function(i){return this.each(function(){var n;t.data(this,"easyPieChart")||(n=t.extend({},i,t(this).data()),t.data(this,"easyPieChart",new function(t,i){var n={barColor:"#ef1e25",trackColor:"#f9f9f9",scaleColor:"#dfe0e0",scaleLength:5,lineCap:"round",lineWidth:3,trackWidth:void 0,size:110,rotate:0,animate:{duration:1e3,enabled:!0},easing:function(t,e,i,n,o){return(e/=o/2)<1?n/2*e*e+i:-n/2*(--e*(e-2)-1)+i},onStart:function(t,e){},onStep:function(t,e,i){},onStop:function(t,e){}};n.renderer=e;var o={},a=0,r=function(){this.el=t,this.options=o;for(var e in n)n.hasOwnProperty(e)&&(o[e]=i&&void 0!==i[e]?i[e]:n[e],"function"==typeof o[e]&&(o[e]=o[e].bind(this)));"string"==typeof o.easing&&"undefined"!=typeof jQuery&&jQuery.isFunction(jQuery.easing[o.easing])?o.easing=jQuery.easing[o.easing]:o.easing=n.easing,"number"==typeof o.animate&&(o.animate={duration:o.animate,enabled:!0}),"boolean"!=typeof o.animate||o.animate||(o.animate={duration:1e3,enabled:o.animate}),this.renderer=new o.renderer(t,o),this.renderer.draw(a),t.dataset&&t.dataset.percent?this.update(parseFloat(t.dataset.percent)):t.getAttribute&&t.getAttribute("data-percent")&&this.update(parseFloat(t.getAttribute("data-percent")))}.bind(this);this.update=function(t){return t=parseFloat(t),o.animate.enabled?this.renderer.animate(a,t):this.renderer.draw(t),a=t,this}.bind(this),this.disableAnimation=function(){return o.animate.enabled=!1,this},this.enableAnimation=function(){return o.animate.enabled=!0,this},r()}(this,n)))})}}),function(t){var e=".range-field",i="input[type=range]",n=!1,o=void 0,a=function(){var e=t('<span class="thumb"><span class="value"></span></span>');t(i).after(e)};t(i).each(a),t(document).on("change",i,function(){var e=t(this);e.siblings(".thumb").find(".value").html(e.val())}),t(document).on("input mousedown touchstart",i,function(e){var i=t(this),r=i.siblings(".thumb"),s=i.outerWidth();if(!r.length&&a(),r.find(".value").html(i.val()),n=!0,i.addClass("active"),r.hasClass("active")||r.velocity({height:"30px",width:"30px",top:"-20px",marginLeft:"-15px"},{duration:300,easing:"easeOutExpo"}),"input"!==e.type){var l=void 0===e.pageX||null===e.pageX;(o=l?e.originalEvent.touches[0].pageX-t(this).offset().left:e.pageX-t(this).offset().left)<0?o=0:o>s&&(o=s),r.addClass("active").css("left",o)}r.find(".value").html(i.val())}),t(document).on("mouseup touchend",e,function(){n=!1,t(this).removeClass("active")}),t(document).on("mousemove touchmove",e,function(e){var o=t(this).children(".thumb"),a=void 0;if(n){o.hasClass("active")||o.velocity({height:"30px",width:"30px",top:"-20px",marginLeft:"-15px"},{duration:300,easing:"easeOutExpo"}),a=void 0===e.pageX||null===e.pageX?e.originalEvent.touches[0].pageX-t(this).offset().left:e.pageX-t(this).offset().left;var r=t(this).outerWidth();a<0?a=0:a>r&&(a=r),o.addClass("active").css("left",a),o.find(".value").html(o.siblings(i).val())}}),t(document).on("mouseout touchleave",e,function(){if(!n){var e=t(this).children(".thumb");e.hasClass("active")&&e.velocity({height:"0",width:"0",top:"10px",marginLeft:"-6px"},{duration:100}),e.removeClass("active")}})}(jQuery),function(t){t(document).on("change",'.file-field input[type="file"]',function(e){for(var i=t(e.target),n=i.closest(".file-field").find("input.file-path"),o=i[0].files,a=[],r=0;r<o.length;r++){var s=o[r].name;a.push(s)}n.val(a.join(", ")),n.trigger("change")})}(jQuery),function(t){t.fn.material_select=function(e){function i(t,e,i){var n=t.indexOf(e),o=-1===n;return o?t.push(e):t.splice(n,1),i.siblings("ul.dropdown-content").find("li").eq(e).toggleClass("active"),i.find("option").eq(e).prop("selected",o),function(t,e){for(var i="",n=0,o=t.length;n<o;n++){var a=e.find("option").eq(t[n]).text();i+=0===n?a:", "+a}""===i&&(i=e.find("option:disabled").eq(0).text());e.siblings("input.select-dropdown").val(i)}(t,i),o}t(this).each(function(){var n=t(this);if(!n.hasClass("browser-default")){var o=Boolean(n.attr("multiple")),a=n.data("select-id");if(a&&(n.parent().find("span.caret").remove(),n.parent().find("input").remove(),n.unwrap(),t("ul#select-options-"+a).remove()),"destroy"!==e){var r,s=(r=(new Date).getTime(),"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=(r+16*Math.random())%16|0;return r=Math.floor(r/16),("x"==t?e:3&e|8).toString(16)}));n.data("select-id",s);var l=t('<div class="select-wrapper"></div>');l.addClass(n.attr("class"));var c,u,d=t('<ul id="select-options-'+s+'" class="dropdown-content select-dropdown '+(o?"multiple-select-dropdown":"")+'"></ul>'),h=n.children("option, optgroup"),p=[],f=!1,m=n.find("option:selected").html()||n.find("option:first").html()||"",g=function(){var e=t(this).closest("ul"),i=t(this).val();e.find("li").find("span.filtrable").each(function(){"string"==typeof this.outerText&&(-1===this.outerText.toLowerCase().indexOf(i.toLowerCase())?(t(this).hide(),t(this).parent().hide()):(t(this).show(),t(this).parent().show()))})},v=Boolean(n.attr("searchable"));v&&(c=n.attr("searchable"),u=t('<span class="search-wrap"><input type="text" class="search" placeholder="'+c+'"></span>'),d.append(u),u.find(".search").keyup(g));var y=function(e,i,n){var o=i.is(":disabled")?"disabled ":"",a="optgroup-option"===n?"optgroup-option ":"",r=i.data("icon"),s=i.attr("class");if(r){var l="";return s&&(l=' class="'+s+'"'),"multiple"===n?d.append(t('<li class="'+o+'"><img alt="" src="'+r+'"'+l+'><span class="filtrable"><input type="checkbox"'+o+"/><label></label>"+i.html()+"</span></li>")):d.append(t('<li class="'+o+a+'"><img alt="" src="'+r+'"'+l+'><span class="filtrable">'+i.html()+"</span></li>")),!0}"multiple"===n?d.append(t('<li class="'+o+'"><span class="filtrable"><input type="checkbox"'+o+"/><label></label>"+i.html()+"</span></li>")):d.append(t('<li class="'+o+a+'"><span class="filtrable">'+i.html()+"</span></li>"))};h.length&&h.each(function(){if(t(this).is("option"))o?y(0,t(this),"multiple"):y(0,t(this));else if(t(this).is("optgroup")){var e=t(this).children("option");d.append(t('<li class="optgroup"><span>'+t(this).attr("label")+"</span></li>")),e.each(function(){y(0,t(this),"optgroup-option")})}}),d.find("li:not(.optgroup)").each(function(a){t(this).click(function(r){if(!t(this).hasClass("disabled")&&!t(this).hasClass("optgroup")){var s=!0;o?(t('input[type="checkbox"]',this).prop("checked",function(t,e){return!e}),s=i(p,t(this).index()-1,n),w.trigger("focus")):(d.find("li").removeClass("active"),t(this).toggleClass("active"),w.val(t(this).text())),k(d,t(this)),n.find("option").eq(a).prop("selected",s),n.trigger("change"),void 0!==e&&e()}r.stopPropagation()})}),n.wrap(l);var b=t('<span class="caret">&#9660;</span>');n.is(":disabled")&&b.addClass("disabled");var x=m.replace(/"/g,"&quot;"),w=t('<input type="text" class="select-dropdown" readonly="true" '+(n.is(":disabled")?"disabled":"")+' data-activates="select-options-'+s+'" value="'+x+'"/>');n.before(w),w.before(b),w.after(d),n.is(":disabled")||w.dropdown({hover:!1,closeOnClick:!1}),n.attr("tabindex")&&t(w[0]).attr("tabindex",n.attr("tabindex")),n.addClass("initialized"),w.on({focus:function(){if(t("ul.select-dropdown").not(d[0]).is(":visible")&&t("input.select-dropdown").trigger("close"),!d.is(":visible")){t(this).trigger("open",["focus"]);var e=t(this).val(),i=d.find("li").filter(function(){return t(this).text().toLowerCase()===e.toLowerCase()})[0];k(d,i)}},click:function(t){t.stopPropagation()}}),w.on("blur",function(){o||v||t(this).trigger("close"),d.find("li.selected").removeClass("selected")}),!o&&v&&d.find("li").on("click",function(){w.trigger("close")}),d.hover(function(){f=!0},function(){f=!1}),t(window).on({click:function(){(o||v)&&(f||w.trigger("close"))}}),o&&n.find("option:selected:not(:disabled)").each(function(){var e=t(this).index();i(p,e,n),d.find("li").eq(e).find(":checkbox").prop("checked",!0)});var k=function(e,i){i&&(e.find("li.selected").removeClass("selected"),t(i).addClass("selected"))},C=[];w.on("keydown",function(e){if(9!=e.which)if(40!=e.which||d.is(":visible")){if(13!=e.which||d.is(":visible")){e.preventDefault();var i=String.fromCharCode(e.which).toLowerCase();if(i&&-1===[9,13,27,38,40].indexOf(e.which)){C.push(i);var n=C.join(""),a=d.find("li").filter(function(){return 0===t(this).text().toLowerCase().indexOf(n)})[0];a&&k(d,a)}if(13==e.which){var r=d.find("li.selected:not(.disabled)")[0];r&&(t(r).trigger("click"),o||w.trigger("close"))}40==e.which&&(a=d.find("li.selected").length?d.find("li.selected").next("li:not(.disabled)")[0]:d.find("li:not(.disabled)")[0],k(d,a)),27==e.which&&w.trigger("close"),38==e.which&&(a=d.find("li.selected").prev("li:not(.disabled)")[0])&&k(d,a),setTimeout(function(){C=[]},1e3)}}else w.trigger("open");else w.trigger("close")})}else n.data("select-id",null).removeClass("initialized")}})}}(jQuery),jQuery("select").siblings("input.select-dropdown").on("mousedown",function(t){/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&(t.clientX>=t.target.clientWidth||t.clientY>=t.target.clientHeight)&&t.preventDefault()}),function(t){"function"==typeof define&&define.amd?define("picker",["jquery"],t):"object"==typeof exports?module.exports=t(require("jquery")):this.Picker=t(jQuery)}(function(t){var e=t(window),i=t(document),n=t(document.documentElement),o=null!=document.documentElement.style.transition;function a(e,l,u,d){if(!e)return a;var h=!1,p={id:e.id||"P"+Math.abs(~~(Math.random()*new Date))},f=u?t.extend(!0,{},u.defaults,d):d||{},m=t.extend({},a.klasses(),f.klass),g=t(e),v=function(){return this.start()},y=v.prototype={constructor:v,$node:g,start:function(){return p&&p.start?y:(p.methods={},p.start=!0,p.open=!1,p.type=e.type,e.autofocus=e==c(),e.readOnly=!f.editable,e.id=e.id||p.id,"text"!=e.type&&(e.type="text"),y.component=new u(y,f),y.$root=t('<div class="'+m.picker+'" id="'+e.id+'_root" />'),s(y.$root[0],"hidden",!0),y.$holder=t(b()).appendTo(y.$root),x(),f.formatSubmit&&function(){var i;!0===f.hiddenName?(i=e.name,e.name=""):i=(i=["string"==typeof f.hiddenPrefix?f.hiddenPrefix:"","string"==typeof f.hiddenSuffix?f.hiddenSuffix:"_submit"])[0]+e.name+i[1];y._hidden=t('<input type=hidden name="'+i+'"'+(g.data("value")||e.value?' value="'+y.get("select",f.formatSubmit)+'"':"")+">")[0],g.on("change."+p.id,function(){y._hidden.value=e.value?y.get("select",f.formatSubmit):""})}(),function(){g.data(l,y).addClass(m.input).val(g.data("value")?y.get("select",f.format):e.value),f.editable||g.on("focus."+p.id+" click."+p.id,function(t){t.preventDefault(),y.open()}).on("keydown."+p.id,k);s(e,{haspopup:!0,expanded:!1,readonly:!1,owns:e.id+"_root"})}(),f.containerHidden?t(f.containerHidden).append(y._hidden):g.after(y._hidden),f.container?t(f.container).append(y.$root):g.after(y.$root),y.on({start:y.component.onStart,render:y.component.onRender,stop:y.component.onStop,open:y.component.onOpen,close:y.component.onClose,set:y.component.onSet}).on({start:f.onStart,render:f.onRender,stop:f.onStop,open:f.onOpen,close:f.onClose,set:f.onSet}),h=function(t){var e;t.currentStyle?e=t.currentStyle.position:window.getComputedStyle&&(e=getComputedStyle(t).position);return"fixed"==e}(y.$holder[0]),e.autofocus&&y.open(),y.trigger("start").trigger("render"))},render:function(e){return e?(y.$holder=t(b()),x(),y.$root.html(y.$holder)):y.$root.find("."+m.box).html(y.component.nodes(p.open)),y.trigger("render")},stop:function(){return p.start?(y.close(),y._hidden&&y._hidden.parentNode.removeChild(y._hidden),y.$root.remove(),g.removeClass(m.input).removeData(l),setTimeout(function(){g.off("."+p.id)},0),e.type=p.type,e.readOnly=!1,y.trigger("stop"),p.methods={},p.start=!1,y):y},open:function(l){return p.open?y:(g.addClass(m.active),s(e,"expanded",!0),setTimeout(function(){y.$root.addClass(m.opened),s(y.$root[0],"hidden",!1)},0),!1!==l&&(p.open=!0,h&&n.css("overflow","hidden").css("padding-right","+="+r()),h&&o?y.$holder.find("."+m.frame).one("transitionend",function(){y.$holder[0].focus()}):y.$holder[0].focus(),i.on("click."+p.id+" focusin."+p.id,function(t){var i=t.target;i!=e&&i!=document&&3!=t.which&&y.close(i===y.$holder[0])}).on("keydown."+p.id,function(e){var i=e.keyCode,n=y.component.key[i],o=e.target;27==i?y.close(!0):o!=y.$holder[0]||!n&&13!=i?t.contains(y.$root[0],o)&&13==i&&(e.preventDefault(),o.click()):(e.preventDefault(),n?a._.trigger(y.component.key.go,y,[a._.trigger(n)]):y.$root.find("."+m.highlighted).hasClass(m.disabled)||(y.set("select",y.component.item.highlight),f.closeOnSelect&&y.close(!0)))})),y.trigger("open"))},close:function(t){return t&&(f.editable?e.focus():(y.$holder.off("focus.toOpen").focus(),setTimeout(function(){y.$holder.on("focus.toOpen",w)},0))),g.removeClass(m.active),s(e,"expanded",!1),setTimeout(function(){y.$root.removeClass(m.opened+" "+m.focused),s(y.$root[0],"hidden",!0)},0),p.open?(p.open=!1,h&&n.css("overflow","").css("padding-right","-="+r()),i.off("."+p.id),y.trigger("close")):y},clear:function(t){return y.set("clear",null,t)},set:function(e,i,n){var o,a,r=t.isPlainObject(e),s=r?e:{};if(n=r&&t.isPlainObject(i)?i:n||{},e){r||(s[e]=i);for(o in s)a=s[o],o in y.component.item&&(void 0===a&&(a=null),y.component.set(o,a,n)),"select"!=o&&"clear"!=o||g.val("clear"==o?"":y.get(o,f.format)).trigger("change");y.render()}return n.muted?y:y.trigger("set",s)},get:function(t,i){if(null!=p[t=t||"value"])return p[t];if("valueSubmit"==t){if(y._hidden)return y._hidden.value;t="value"}if("value"==t)return e.value;if(t in y.component.item){if("string"==typeof i){var n=y.component.get(t);return n?a._.trigger(y.component.formats.toString,y.component,[i,n]):""}return y.component.get(t)}},on:function(e,i,n){var o,a,r=t.isPlainObject(e),s=r?e:{};if(e){r||(s[e]=i);for(o in s)a=s[o],n&&(o="_"+o),p.methods[o]=p.methods[o]||[],p.methods[o].push(a)}return y},off:function(){var t,e,i=arguments;for(t=0,namesCount=i.length;t<namesCount;t+=1)(e=i[t])in p.methods&&delete p.methods[e];return y},trigger:function(t,e){var i=function(t){var i=p.methods[t];i&&i.map(function(t){a._.trigger(t,y,[e])})};return i("_"+t),i(t),y}};function b(){return a._.node("div",a._.node("div",a._.node("div",a._.node("div",y.component.nodes(p.open),m.box),m.wrap),m.frame),m.holder,'tabindex="-1"')}function x(){y.$holder.on({keydown:k,"focus.toOpen":w,blur:function(){g.removeClass(m.target)},focusin:function(t){y.$root.removeClass(m.focused),t.stopPropagation()},"mousedown click":function(e){var i=e.target;i!=y.$holder[0]&&(e.stopPropagation(),"mousedown"!=e.type||t(i).is("input, select, textarea, button, option")||(e.preventDefault(),y.$holder[0].focus()))}}).on("click","[data-pick], [data-nav], [data-clear], [data-close]",function(){var e=t(this),i=e.data(),n=e.hasClass(m.navDisabled)||e.hasClass(m.disabled),o=c();o=o&&(o.type||o.href),(n||o&&!t.contains(y.$root[0],o))&&y.$holder[0].focus(),!n&&i.nav?y.set("highlight",y.component.item.highlight,{nav:i.nav}):!n&&"pick"in i?(y.set("select",i.pick),f.closeOnSelect&&y.close(!0)):i.clear?(y.clear(),f.closeOnClear&&y.close(!0)):i.close&&y.close(!0)})}function w(t){t.stopPropagation(),g.addClass(m.target),y.$root.addClass(m.focused),y.open()}function k(t){var e=t.keyCode,i=/^(8|46)$/.test(e);if(27==e)return y.close(!0),!1;(32==e||i||!p.open&&y.component.key[e])&&(t.preventDefault(),t.stopPropagation(),i?y.clear().close():y.open())}return new v}function r(){if(n.height()<=e.height())return 0;var i=t('<div style="visibility:hidden;width:100px" />').appendTo("body"),o=i[0].offsetWidth;i.css("overflow","scroll");var a=t('<div style="width:100%" />').appendTo(i)[0].offsetWidth;return i.remove(),o-a}function s(e,i,n){if(t.isPlainObject(i))for(var o in i)l(e,o,i[o]);else l(e,i,n)}function l(t,e,i){t.setAttribute(("role"==e?"":"aria-")+e,i)}function c(){try{return document.activeElement}catch(t){}}return a.klasses=function(t){return{picker:t=t||"picker",opened:t+"--opened",focused:t+"--focused",input:t+"__input",active:t+"__input--active",target:t+"__input--target",holder:t+"__holder",frame:t+"__frame",wrap:t+"__wrap",box:t+"__box"}},a._={group:function(t){for(var e,i="",n=a._.trigger(t.min,t);n<=a._.trigger(t.max,t,[n]);n+=t.i)e=a._.trigger(t.item,t,[n]),i+=a._.node(t.node,e[0],e[1],e[2]);return i},node:function(e,i,n,o){return i?(i=t.isArray(i)?i.join(""):i,"<"+e+(n=n?' class="'+n+'"':"")+(o=o?" "+o:"")+">"+i+"</"+e+">"):""},lead:function(t){return(t<10?"0":"")+t},trigger:function(t,e,i){return"function"==typeof t?t.apply(e,i||[]):t},digits:function(t){return/\d/.test(t[1])?2:1},isDate:function(t){return{}.toString.call(t).indexOf("Date")>-1&&this.isInteger(t.getDate())},isInteger:function(t){return{}.toString.call(t).indexOf("Number")>-1&&t%1==0},ariaAttr:function(e,i){t.isPlainObject(e)||(e={attribute:i});i="";for(var n in e){var o=("role"==n?"":"aria-")+n,a=e[n];i+=null==a?"":o+'="'+e[n]+'"'}return i}},a.extend=function(e,i){t.fn[e]=function(n,o){var r=this.data(e);return"picker"==n?r:r&&"string"==typeof n?a._.trigger(r[n],r,[o]):this.each(function(){t(this).data(e)||new a(this,e,i,n)})},t.fn[e].defaults=i.defaults},a}),function(t){"function"==typeof define&&define.amd?define(["picker","jquery"],t):"object"==typeof exports?module.exports=t(require("./picker.js"),require("jquery")):t(Picker,jQuery)}(function(t,e){var i,n=t._;function o(t,e){var i,n=this,o=t.$node[0],a=o.value,r=t.$node.data("value"),s=r||a,l=r?e.formatSubmit:e.format,c=function(){return o.currentStyle?"rtl"==o.currentStyle.direction:"rtl"==getComputedStyle(t.$root[0]).direction};n.settings=e,n.$node=t.$node,n.queue={min:"measure create",max:"measure create",now:"now create",select:"parse create validate",highlight:"parse navigate create validate",view:"parse create validate viewset",disable:"deactivate",enable:"activate"},n.item={},n.item.clear=null,n.item.disable=(e.disable||[]).slice(0),n.item.enable=-(!0===(i=n.item.disable)[0]?i.shift():-1),n.set("min",e.min).set("max",e.max).set("now"),s?n.set("select",s,{format:l,defaultValue:!0}):n.set("select",null).set("highlight",n.item.now),n.key={40:7,38:-7,39:function(){return c()?-1:1},37:function(){return c()?1:-1},go:function(t){var e=n.item.highlight,i=new Date(e.year,e.month,e.date+t);n.set("highlight",i,{interval:t}),this.render()}},t.on("render",function(){t.$root.find("."+e.klass.selectMonth).on("change",function(){var i=this.value;i&&(t.set("highlight",[t.get("view").year,i,t.get("highlight").date]),t.$root.find("."+e.klass.selectMonth).trigger("focus"))}),t.$root.find("."+e.klass.selectYear).on("change",function(){var i=this.value;i&&(t.set("highlight",[i,t.get("view").month,t.get("highlight").date]),t.$root.find("."+e.klass.selectYear).trigger("focus"))})},1).on("open",function(){var i="";n.disabled(n.get("now"))&&(i=":not(."+e.klass.buttonToday+")"),t.$root.find("button"+i+", select").attr("disabled",!1)},1).on("close",function(){t.$root.find("button, select").attr("disabled",!0)},1)}o.prototype.set=function(t,e,i){var n=this,o=n.item;return null===e?("clear"==t&&(t="select"),o[t]=e,n):(o["enable"==t?"disable":"flip"==t?"enable":t]=n.queue[t].split(" ").map(function(o){return e=n[o](t,e,i)}).pop(),"select"==t?n.set("highlight",o.select,i):"highlight"==t?n.set("view",o.highlight,i):t.match(/^(flip|min|max|disable|enable)$/)&&(o.select&&n.disabled(o.select)&&n.set("select",o.select,i),o.highlight&&n.disabled(o.highlight)&&n.set("highlight",o.highlight,i)),n)},o.prototype.get=function(t){return this.item[t]},o.prototype.create=function(t,i,o){var a;return(i=void 0===i?t:i)==-1/0||i==1/0?a=i:e.isPlainObject(i)&&n.isInteger(i.pick)?i=i.obj:e.isArray(i)?(i=new Date(i[0],i[1],i[2]),i=n.isDate(i)?i:this.create().obj):i=n.isInteger(i)||n.isDate(i)?this.normalize(new Date(i),o):this.now(t,i,o),{year:a||i.getFullYear(),month:a||i.getMonth(),date:a||i.getDate(),day:a||i.getDay(),obj:a||i,pick:a||i.getTime()}},o.prototype.createRange=function(t,i){var o=this,a=function(t){return!0===t||e.isArray(t)||n.isDate(t)?o.create(t):t};return n.isInteger(t)||(t=a(t)),n.isInteger(i)||(i=a(i)),n.isInteger(t)&&e.isPlainObject(i)?t=[i.year,i.month,i.date+t]:n.isInteger(i)&&e.isPlainObject(t)&&(i=[t.year,t.month,t.date+i]),{from:a(t),to:a(i)}},o.prototype.withinRange=function(t,e){return t=this.createRange(t.from,t.to),e.pick>=t.from.pick&&e.pick<=t.to.pick},o.prototype.overlapRanges=function(t,e){return t=this.createRange(t.from,t.to),e=this.createRange(e.from,e.to),this.withinRange(t,e.from)||this.withinRange(t,e.to)||this.withinRange(e,t.from)||this.withinRange(e,t.to)},o.prototype.now=function(t,e,i){return e=new Date,i&&i.rel&&e.setDate(e.getDate()+i.rel),this.normalize(e,i)},o.prototype.navigate=function(t,i,n){var o,a,r,s,l=e.isArray(i),c=e.isPlainObject(i),u=this.item.view;if(l||c){for(c?(a=i.year,r=i.month,s=i.date):(a=+i[0],r=+i[1],s=+i[2]),n&&n.nav&&u&&u.month!==r&&(a=u.year,r=u.month),a=(o=new Date(a,r+(n&&n.nav?n.nav:0),1)).getFullYear(),r=o.getMonth();new Date(a,r,s).getMonth()!==r;)s-=1;i=[a,r,s]}return i},o.prototype.normalize=function(t){return t.setHours(0,0,0,0),t},o.prototype.measure=function(t,e){return e?"string"==typeof e?e=this.parse(t,e):n.isInteger(e)&&(e=this.now(t,e,{rel:e})):e="min"==t?-1/0:1/0,e},o.prototype.viewset=function(t,e){return this.create([e.year,e.month,1])},o.prototype.validate=function(t,i,o){var a,r,s,l,c=this,u=i,d=o&&o.interval?o.interval:1,h=-1===c.item.enable,p=c.item.min,f=c.item.max,m=h&&c.item.disable.filter(function(t){if(e.isArray(t)){var o=c.create(t).pick;o<i.pick?a=!0:o>i.pick&&(r=!0)}return n.isInteger(t)}).length;if((!o||!o.nav&&!o.defaultValue)&&(!h&&c.disabled(i)||h&&c.disabled(i)&&(m||a||r)||!h&&(i.pick<=p.pick||i.pick>=f.pick)))for(h&&!m&&(!r&&d>0||!a&&d<0)&&(d*=-1);c.disabled(i)&&(Math.abs(d)>1&&(i.month<u.month||i.month>u.month)&&(i=u,d=d>0?1:-1),i.pick<=p.pick?(s=!0,d=1,i=c.create([p.year,p.month,p.date+(i.pick===p.pick?0:-1)])):i.pick>=f.pick&&(l=!0,d=-1,i=c.create([f.year,f.month,f.date+(i.pick===f.pick?0:1)])),!s||!l);)i=c.create([i.year,i.month,i.date+d]);return i},o.prototype.disabled=function(t){var i=this,o=i.item.disable.filter(function(o){return n.isInteger(o)?t.day===(i.settings.firstDay?o:o-1)%7:e.isArray(o)||n.isDate(o)?t.pick===i.create(o).pick:e.isPlainObject(o)?i.withinRange(o,t):void 0});return o=o.length&&!o.filter(function(t){return e.isArray(t)&&"inverted"==t[3]||e.isPlainObject(t)&&t.inverted}).length,-1===i.item.enable?!o:o||t.pick<i.item.min.pick||t.pick>i.item.max.pick},o.prototype.parse=function(t,e,i){var o=this,a={};return e&&"string"==typeof e?(i&&i.format||((i=i||{}).format=o.settings.format),o.formats.toArray(i.format).map(function(t){var i=o.formats[t],r=i?n.trigger(i,o,[e,a]):t.replace(/^!/,"").length;i&&(a[t]=e.substr(0,r)),e=e.substr(r)}),[a.yyyy||a.yy,+(a.mm||a.m)-1,a.dd||a.d]):e},o.prototype.formats=function(){function t(t,e,i){var n=t.match(/[^\x00-\x7F]+|\w+/)[0];return i.mm||i.m||(i.m=e.indexOf(n)+1),n.length}function e(t){return t.match(/\w+/)[0].length}return{d:function(t,e){return t?n.digits(t):e.date},dd:function(t,e){return t?2:n.lead(e.date)},ddd:function(t,i){return t?e(t):this.settings.weekdaysShort[i.day]},dddd:function(t,i){return t?e(t):this.settings.weekdaysFull[i.day]},m:function(t,e){return t?n.digits(t):e.month+1},mm:function(t,e){return t?2:n.lead(e.month+1)},mmm:function(e,i){var n=this.settings.monthsShort;return e?t(e,n,i):n[i.month]},mmmm:function(e,i){var n=this.settings.monthsFull;return e?t(e,n,i):n[i.month]},yy:function(t,e){return t?2:(""+e.year).slice(2)},yyyy:function(t,e){return t?4:e.year},toArray:function(t){return t.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g)},toString:function(t,e){var i=this;return i.formats.toArray(t).map(function(t){return n.trigger(i.formats[t],i,[0,e])||t.replace(/^!/,"")}).join("")}}}(),o.prototype.isDateExact=function(t,i){return n.isInteger(t)&&n.isInteger(i)||"boolean"==typeof t&&"boolean"==typeof i?t===i:(n.isDate(t)||e.isArray(t))&&(n.isDate(i)||e.isArray(i))?this.create(t).pick===this.create(i).pick:!(!e.isPlainObject(t)||!e.isPlainObject(i))&&(this.isDateExact(t.from,i.from)&&this.isDateExact(t.to,i.to))},o.prototype.isDateOverlap=function(t,i){var o=this.settings.firstDay?1:0;return n.isInteger(t)&&(n.isDate(i)||e.isArray(i))?(t=t%7+o)===this.create(i).day+1:n.isInteger(i)&&(n.isDate(t)||e.isArray(t))?(i=i%7+o)===this.create(t).day+1:!(!e.isPlainObject(t)||!e.isPlainObject(i))&&this.overlapRanges(t,i)},o.prototype.flipEnable=function(t){var e=this.item;e.enable=t||(-1==e.enable?1:-1)},o.prototype.deactivate=function(t,i){var o=this,a=o.item.disable.slice(0);return"flip"==i?o.flipEnable():!1===i?(o.flipEnable(1),a=[]):!0===i?(o.flipEnable(-1),a=[]):i.map(function(t){for(var i,r=0;r<a.length;r+=1)if(o.isDateExact(t,a[r])){i=!0;break}i||(n.isInteger(t)||n.isDate(t)||e.isArray(t)||e.isPlainObject(t)&&t.from&&t.to)&&a.push(t)}),a},o.prototype.activate=function(t,i){var o=this,a=o.item.disable,r=a.length;return"flip"==i?o.flipEnable():!0===i?(o.flipEnable(1),a=[]):!1===i?(o.flipEnable(-1),a=[]):i.map(function(t){var i,s,l,c;for(l=0;l<r;l+=1){if(s=a[l],o.isDateExact(s,t)){i=a[l]=null,c=!0;break}if(o.isDateOverlap(s,t)){e.isPlainObject(t)?(t.inverted=!0,i=t):e.isArray(t)?(i=t)[3]||i.push("inverted"):n.isDate(t)&&(i=[t.getFullYear(),t.getMonth(),t.getDate(),"inverted"]);break}}if(i)for(l=0;l<r;l+=1)if(o.isDateExact(a[l],t)){a[l]=null;break}if(c)for(l=0;l<r;l+=1)if(o.isDateOverlap(a[l],t)){a[l]=null;break}i&&a.push(i)}),a.filter(function(t){return null!=t})},o.prototype.nodes=function(t){var e,i,o=this,a=o.settings,r=o.item,s=r.now,l=r.select,c=r.highlight,u=r.view,d=r.disable,h=r.min,p=r.max,f=(e=(a.showWeekdaysFull?a.weekdaysFull:a.weekdaysShort).slice(0),i=a.weekdaysFull.slice(0),a.firstDay&&(e.push(e.shift()),i.push(i.shift())),n.node("thead",n.node("tr",n.group({min:0,max:6,i:1,node:"th",item:function(t){return[e[t],a.klass.weekdays,'scope=col title="'+i[t]+'"']}})))),m=function(t){return n.node("div"," ",a.klass["nav"+(t?"Next":"Prev")]+(t&&u.year>=p.year&&u.month>=p.month||!t&&u.year<=h.year&&u.month<=h.month?" "+a.klass.navDisabled:""),"data-nav="+(t||-1)+" "+n.ariaAttr({role:"button",controls:o.$node[0].id+"_table"})+' title="'+(t?a.labelMonthNext:a.labelMonthPrev)+'"')},g=function(){var e=a.showMonthsShort?a.monthsShort:a.monthsFull;return a.selectMonths?n.node("select",n.group({min:0,max:11,i:1,node:"option",item:function(t){return[e[t],0,"value="+t+(u.month==t?" selected":"")+(u.year==h.year&&t<h.month||u.year==p.year&&t>p.month?" disabled":"")]}}),a.klass.selectMonth,(t?"":"disabled")+" "+n.ariaAttr({controls:o.$node[0].id+"_table"})+' title="'+a.labelMonthSelect+'"'):n.node("div",e[u.month],a.klass.month)},v=function(){var e=u.year,i=!0===a.selectYears?5:~~(a.selectYears/2);if(i){var r=h.year,s=p.year,l=e-i,c=e+i;if(r>l&&(c+=r-l,l=r),s<c){var d=l-r,f=c-s;l-=d>f?f:d,c=s}return n.node("select",n.group({min:l,max:c,i:1,node:"option",item:function(t){return[t,0,"value="+t+(e==t?" selected":"")]}}),a.klass.selectYear,(t?"":"disabled")+" "+n.ariaAttr({controls:o.$node[0].id+"_table"})+' title="'+a.labelYearSelect+'"')}return n.node("div",e,a.klass.year)};return n.node("div",(a.selectYears?v()+g():g()+v())+m()+m(1),a.klass.header)+n.node("table",f+n.node("tbody",n.group({min:0,max:5,i:1,node:"tr",item:function(t){var e=a.firstDay&&0===o.create([u.year,u.month,1]).day?-7:0;return[n.group({min:7*t-u.day+e+1,max:function(){return this.min+7-1},i:1,node:"td",item:function(t){t=o.create([u.year,u.month,t+(a.firstDay?1:0)]);var e,i=l&&l.pick==t.pick,r=c&&c.pick==t.pick,f=d&&o.disabled(t)||t.pick<h.pick||t.pick>p.pick,m=n.trigger(o.formats.toString,o,[a.format,t]);return[n.node("div",t.date,(e=[a.klass.day],e.push(u.month==t.month?a.klass.infocus:a.klass.outfocus),s.pick==t.pick&&e.push(a.klass.now),i&&e.push(a.klass.selected),r&&e.push(a.klass.highlighted),f&&e.push(a.klass.disabled),e.join(" ")),"data-pick="+t.pick+" "+n.ariaAttr({role:"gridcell",label:m,selected:!(!i||o.$node.val()!==m)||null,activedescendant:!!r||null,disabled:!!f||null})),"",n.ariaAttr({role:"presentation"})]}})]}})),a.klass.table,'id="'+o.$node[0].id+'_table" '+n.ariaAttr({role:"grid",controls:o.$node[0].id,readonly:!0}))+n.node("div",n.node("button",a.today,a.klass.buttonToday,"type=button data-pick="+s.pick+(t&&!o.disabled(s)?"":" disabled")+" "+n.ariaAttr({controls:o.$node[0].id}))+n.node("button",a.clear,a.klass.buttonClear,"type=button data-clear=1"+(t?"":" disabled")+" "+n.ariaAttr({controls:o.$node[0].id}))+n.node("button",a.close,a.klass.buttonClose,"type=button data-close=true "+(t?"":" disabled")+" "+n.ariaAttr({controls:o.$node[0].id})),a.klass.footer)},o.defaults={labelMonthNext:"Next month",labelMonthPrev:"Previous month",labelMonthSelect:"Select a month",labelYearSelect:"Select a year",monthsFull:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],weekdaysFull:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],weekdaysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],today:"Today",clear:"Clear",close:"Close",closeOnSelect:!0,closeOnClear:!0,format:"d mmmm, yyyy",klass:{table:(i=t.klasses().picker+"__")+"table",header:i+"header",navPrev:i+"nav--prev",navNext:i+"nav--next",navDisabled:i+"nav--disabled",month:i+"month",year:i+"year",selectMonth:i+"select--month",selectYear:i+"select--year",weekdays:i+"weekday",day:i+"day",disabled:i+"day--disabled",selected:i+"day--selected",highlighted:i+"day--highlighted",now:i+"day--today",infocus:i+"day--infocus",outfocus:i+"day--outfocus",footer:i+"footer",buttonClear:i+"button--clear",buttonToday:i+"button--today",buttonClose:i+"button--close"}},t.extend("pickadate",o)}),$.extend($.fn.pickadate.defaults,{selectMonths:!0,selectYears:15,onRender:function(){var t=this.$root,e=this.get("highlight","yyyy"),i=this.get("highlight","dd"),n=this.get("highlight","mmm"),o=this.get("highlight","dddd");t.find(".picker__header").prepend('<div class="picker__date-display"><div class="picker__weekday-display">'+o+'</div><div class="picker__month-display"><div>'+n+'</div></div><div class="picker__day-display"><div>'+i+'</div></div><div    class="picker__year-display"><div>'+e+"</div></div></div>")}}),function(){var t,e,i,n=window.jQuery,o=n(window),a=n(document),r="http://www.w3.org/2000/svg",s="SVGAngle"in window&&((e=document.createElement("div")).innerHTML="<svg/>",t=(e.firstChild&&e.firstChild.namespaceURI)==r,e.innerHTML="",t),l="transition"in(i=document.createElement("div").style)||"WebkitTransition"in i||"MozTransition"in i||"msTransition"in i||"OTransition"in i,c="ontouchstart"in window,u="mousedown"+(c?" touchstart":""),d="mousemove.clockpicker"+(c?" touchmove.clockpicker":""),h="mouseup.clockpicker"+(c?" touchend.clockpicker":""),p=navigator.vibrate?"vibrate":navigator.webkitVibrate?"webkitVibrate":null;function f(t){return document.createElementNS(r,t)}function m(t){return(t<10?"0":"")+t}var g=0;var v=135,y=110,b=80,x=20,w=2*v,k=l?350:1,C=['<div class="clockpicker picker">','<div class="picker__holder">','<div class="picker__frame">','<div class="picker__wrap">','<div class="picker__box">','<div class="picker__date-display">','<div class="clockpicker-display">','<div class="clockpicker-display-column">','<span class="clockpicker-span-hours text-primary"></span>',":",'<span class="clockpicker-span-minutes"></span>',"</div>",'<div class="clockpicker-display-column clockpicker-display-am-pm">','<div class="clockpicker-span-am-pm"></div>',"</div>","</div>","</div>",'<div class="picker__calendar-container">','<div class="clockpicker-plate">','<div class="clockpicker-canvas"></div>','<div class="clockpicker-dial clockpicker-hours"></div>','<div class="clockpicker-dial clockpicker-minutes clockpicker-dial-out"></div>',"</div>",'<div class="clockpicker-am-pm-block">',"</div>","</div>",'<div class="picker__footer">',"</div>","</div>","</div>","</div>","</div>","</div>"].join("");function S(t,e){var i,o,r=n(C),l=r.find(".clockpicker-plate"),c=r.find(".picker__holder"),p=r.find(".clockpicker-hours"),S=r.find(".clockpicker-minutes"),M=r.find(".clockpicker-am-pm-block"),I="INPUT"===t.prop("tagName"),P=I?t:t.find("input"),A=n("label[for="+P.attr("id")+"]"),D=this;if(this.id=(o=++g+"",(i="cp")?i+o:o),this.element=t,this.holder=c,this.options=e,this.isAppended=!1,this.isShown=!1,this.currentView="hours",this.isInput=I,this.input=P,this.label=A,this.popover=r,this.plate=l,this.hoursView=p,this.minutesView=S,this.amPmBlock=M,this.spanHours=r.find(".clockpicker-span-hours"),this.spanMinutes=r.find(".clockpicker-span-minutes"),this.spanAmPm=r.find(".clockpicker-span-am-pm"),this.footer=r.find(".picker__footer"),this.amOrPm="PM",e.twelvehour){var E=['<div class="clockpicker-am-pm-block">','<button type="button" class="btn-floating btn-flat clockpicker-button clockpicker-am-button">',"AM","</button>",'<button type="button" class="btn-floating btn-flat clockpicker-button clockpicker-pm-button">',"PM","</button>","</div>"].join("");n(E);e.ampmclickable?(this.spanAmPm.empty(),n('<div id="click-am">AM</div>').on("click",function(){D.spanAmPm.children("#click-am").addClass("text-primary"),D.spanAmPm.children("#click-pm").removeClass("text-primary"),D.amOrPm="AM"}).appendTo(this.spanAmPm),n('<div id="click-pm">PM</div>').on("click",function(){D.spanAmPm.children("#click-pm").addClass("text-primary"),D.spanAmPm.children("#click-am").removeClass("text-primary"),D.amOrPm="PM"}).appendTo(this.spanAmPm)):(n('<button type="button" class="btn-floating btn-flat clockpicker-button am-button" tabindex="1">AM</button>').on("click",function(){D.amOrPm="AM",D.amPmBlock.children(".pm-button").removeClass("active"),D.amPmBlock.children(".am-button").addClass("active"),D.spanAmPm.empty().append("AM")}).appendTo(this.amPmBlock),n('<button type="button" class="btn-floating btn-flat clockpicker-button pm-button" tabindex="2">PM</button>').on("click",function(){D.amOrPm="PM",D.amPmBlock.children(".am-button").removeClass("active"),D.amPmBlock.children(".pm-button").addClass("active"),D.spanAmPm.empty().append("PM")}).appendTo(this.amPmBlock))}e.darktheme&&r.addClass("darktheme"),n('<button type="button" class="btn-flat clockpicker-button" tabindex="'+(e.twelvehour?"3":"1")+'">'+e.donetext+"</button>").click(n.proxy(this.done,this)).appendTo(this.footer),this.spanHours.click(n.proxy(this.toggleView,this,"hours")),this.spanMinutes.click(n.proxy(this.toggleView,this,"minutes")),P.on("focus.clockpicker click.clockpicker",n.proxy(this.show,this));var _,O,L,R,F=n('<div class="clockpicker-tick"></div>');if(e.twelvehour)for(_=1;_<13;_+=1)O=F.clone(),L=_/6*Math.PI,R=y,O.css("font-size","140%"),O.css({left:v+Math.sin(L)*R-x,top:v-Math.cos(L)*R-x}),O.html(0===_?"00":_),p.append(O),O.on(u,W);else for(_=0;_<24;_+=1){O=F.clone(),L=_/6*Math.PI;var V=_>0&&_<13;R=V?b:y,O.css({left:v+Math.sin(L)*R-x,top:v-Math.cos(L)*R-x}),V&&O.css("font-size","120%"),O.html(0===_?"00":_),p.append(O),O.on(u,W)}for(_=0;_<60;_+=5)O=F.clone(),L=_/30*Math.PI,O.css({left:v+Math.sin(L)*y-x,top:v-Math.cos(L)*y-x}),O.css("font-size","140%"),O.html(m(_)),S.append(O),O.on(u,W);function W(t,i){var n=l.offset(),o=/^touch/.test(t.type),r=n.left+v,c=n.top+v,u=(o?t.originalEvent.touches[0]:t).pageX-r,p=(o?t.originalEvent.touches[0]:t).pageY-c,f=Math.sqrt(u*u+p*p),m=!1;if(!i||!(f<y-x||f>y+x)){t.preventDefault();var g=setTimeout(function(){D.popover.addClass("clockpicker-moving")},200);s&&l.append(D.canvas),D.setHand(u,p,!i,!0),a.off(d).on(d,function(t){t.preventDefault();var e=/^touch/.test(t.type),i=(e?t.originalEvent.touches[0]:t).pageX-r,n=(e?t.originalEvent.touches[0]:t).pageY-c;(m||i!==u||n!==p)&&(m=!0,D.setHand(i,n,!1,!0))}),a.off(h).on(h,function(t){a.off(h),t.preventDefault();var n=/^touch/.test(t.type),o=(n?t.originalEvent.changedTouches[0]:t).pageX-r,s=(n?t.originalEvent.changedTouches[0]:t).pageY-c;(i||m)&&o===u&&s===p&&D.setHand(o,s),"hours"===D.currentView?D.toggleView("minutes",k/2):e.autoclose&&(D.minutesView.addClass("clockpicker-dial-out"),setTimeout(function(){D.done()},k/2)),l.prepend(z),clearTimeout(g),D.popover.removeClass("clockpicker-moving"),a.off(d)})}}if(l.on(u,function(t){0===n(t.target).closest(".clockpicker-tick").length&&W(t,!0)}),s){var z=r.find(".clockpicker-canvas"),H=f("svg");H.setAttribute("class","clockpicker-svg"),H.setAttribute("width",w),H.setAttribute("height",w);var N=f("g");N.setAttribute("transform","translate("+v+","+v+")");var B=f("circle");B.setAttribute("class","clockpicker-canvas-bearing"),B.setAttribute("cx",0),B.setAttribute("cy",0),B.setAttribute("r",2);var Y=f("line");Y.setAttribute("x1",0),Y.setAttribute("y1",0);var j=f("circle");j.setAttribute("class","clockpicker-canvas-bg"),j.setAttribute("r",x);var $=f("circle");$.setAttribute("class","clockpicker-canvas-fg"),$.setAttribute("r",5),N.appendChild(Y),N.appendChild(j),N.appendChild($),N.appendChild(B),H.appendChild(N),z.append(H),this.hand=Y,this.bg=j,this.fg=$,this.bearing=B,this.g=N,this.canvas=z}T(this.options.init)}function T(t){t&&"function"==typeof t&&t()}S.DEFAULTS={default:"",fromnow:0,donetext:"Done",autoclose:!1,ampmclickable:!1,darktheme:!1,twelvehour:!0,vibrate:!0},S.prototype.toggle=function(){this[this.isShown?"hide":"show"]()},S.prototype.locate=function(){var t=this.element,e=this.popover;t.offset(),t.outerWidth(),t.outerHeight(),this.options.align;e.show()},S.prototype.show=function(t){if(!this.isShown){T(this.options.beforeShow),n(":input").each(function(){n(this).attr("tabindex",-1)});var e=this;this.input.blur(),this.popover.addClass("picker--opened"),this.input.addClass("picker__input picker__input--active"),n(document.body).css("overflow","hidden"),this.isAppended||(this.popover.insertAfter(this.input),this.options.twelvehour&&(this.amOrPm="PM",this.options.ampmclickable?(this.spanAmPm.children("#click-pm").addClass("text-primary"),this.spanAmPm.children("#click-am").removeClass("text-primary")):(this.amPmBlock.children(".am-button").removeClass("active"),this.amPmBlock.children(".pm-button").addClass("active"),this.spanAmPm.empty().append("PM"))),o.on("resize.clockpicker"+this.id,function(){e.isShown&&e.locate()}),this.isAppended=!0);var i=((this.input.prop("value")||this.options.default||"")+"").split(":");if(this.options.twelvehour&&void 0!==i[1]&&(i[1]=i[1].replace("AM","").replace("PM","")),"now"===i[0]){var r=new Date(+new Date+this.options.fromnow);i=[r.getHours(),r.getMinutes()]}this.hours=+i[0]||0,this.minutes=+i[1]||0,this.spanHours.html(m(this.hours)),this.spanMinutes.html(m(this.minutes)),this.toggleView("hours"),this.locate(),this.isShown=!0,a.on("click.clockpicker."+this.id+" focusin.clockpicker."+this.id,function(t){var i=n(t.target);0===i.closest(e.popover.find(".picker__wrap")).length&&0===i.closest(e.input).length&&e.hide()}),a.on("keyup.clockpicker."+this.id,function(t){27===t.keyCode&&e.hide()}),T(this.options.afterShow)}},S.prototype.hide=function(){T(this.options.beforeHide),this.input.removeClass("picker__input picker__input--active"),this.popover.removeClass("picker--opened"),n(document.body).css("overflow","visible"),this.isShown=!1,n(":input").each(function(t){n(this).attr("tabindex",t+1)}),a.off("click.clockpicker."+this.id+" focusin.clockpicker."+this.id),a.off("keyup.clockpicker."+this.id),this.popover.hide(),T(this.options.afterHide)},S.prototype.toggleView=function(t,e){var i=!1;"minutes"===t&&"visible"===n(this.hoursView).css("visibility")&&(T(this.options.beforeHourSelect),i=!0);var o="hours"===t,a=o?this.hoursView:this.minutesView,r=o?this.minutesView:this.hoursView;this.currentView=t,this.spanHours.toggleClass("text-primary",o),this.spanMinutes.toggleClass("text-primary",!o),r.addClass("clockpicker-dial-out"),a.css("visibility","visible").removeClass("clockpicker-dial-out"),this.resetClock(e),clearTimeout(this.toggleViewTimer),this.toggleViewTimer=setTimeout(function(){r.css("visibility","hidden")},k),i&&T(this.options.afterHourSelect)},S.prototype.resetClock=function(t){var e=this.currentView,i=this[e],n="hours"===e,o=i*(Math.PI/(n?6:30)),a=n&&i>0&&i<13?b:y,r=Math.sin(o)*a,l=-Math.cos(o)*a,c=this;s&&t?(c.canvas.addClass("clockpicker-canvas-out"),setTimeout(function(){c.canvas.removeClass("clockpicker-canvas-out"),c.setHand(r,l)},t)):this.setHand(r,l)},S.prototype.setHand=function(t,e,i,o){var a,r=Math.atan2(t,-e),l="hours"===this.currentView,c=Math.PI/(l||i?6:30),u=Math.sqrt(t*t+e*e),d=this.options,h=l&&u<(y+b)/2,f=h?b:y;if(d.twelvehour&&(f=y),r<0&&(r=2*Math.PI+r),r=(a=Math.round(r/c))*c,d.twelvehour?l?0===a&&(a=12):(i&&(a*=5),60===a&&(a=0)):l?(12===a&&(a=0),a=h?0===a?12:a:0===a?0:a+12):(i&&(a*=5),60===a&&(a=0)),l?this.fg.setAttribute("class","clockpicker-canvas-fg"):a%5==0?this.fg.setAttribute("class","clockpicker-canvas-fg"):this.fg.setAttribute("class","clockpicker-canvas-fg active"),this[this.currentView]!==a&&p&&this.options.vibrate&&(this.vibrateTimer||(navigator[p](10),this.vibrateTimer=setTimeout(n.proxy(function(){this.vibrateTimer=null},this),100))),this[this.currentView]=a,this[l?"spanHours":"spanMinutes"].html(m(a)),s){o||!l&&a%5?(this.g.insertBefore(this.hand,this.bearing),this.g.insertBefore(this.bg,this.fg),this.bg.setAttribute("class","clockpicker-canvas-bg clockpicker-canvas-bg-trans")):(this.g.insertBefore(this.hand,this.bg),this.g.insertBefore(this.fg,this.bg),this.bg.setAttribute("class","clockpicker-canvas-bg"));var g=Math.sin(r)*(f-x),v=-Math.cos(r)*(f-x),w=Math.sin(r)*f,k=-Math.cos(r)*f;this.hand.setAttribute("x2",g),this.hand.setAttribute("y2",v),this.bg.setAttribute("cx",w),this.bg.setAttribute("cy",k),this.fg.setAttribute("cx",w),this.fg.setAttribute("cy",k)}else this[l?"hoursView":"minutesView"].find(".clockpicker-tick").each(function(){var t=n(this);t.toggleClass("active",a===+t.html())})},S.prototype.done=function(){T(this.options.beforeDone),this.hide(),this.label.addClass("active");var t=this.input.prop("value"),e=m(this.hours)+":"+m(this.minutes);this.options.twelvehour&&(e+=this.amOrPm),this.input.prop("value",e),e!==t&&(this.input.triggerHandler("change"),this.isInput||this.element.trigger("change")),this.options.autoclose&&this.input.trigger("blur"),T(this.options.afterDone)},S.prototype.remove=function(){this.element.removeData("clockpicker"),this.input.off("focus.clockpicker click.clockpicker"),this.isShown&&this.hide(),this.isAppended&&(o.off("resize.clockpicker"+this.id),this.popover.remove())},n.fn.pickatime=function(t){var e=Array.prototype.slice.call(arguments,1);return this.each(function(){var i=n(this),o=i.data("clockpicker");if(o)"function"==typeof o[t]&&o[t].apply(o,e);else{var a=n.extend({},S.DEFAULTS,i.data(),"object"==typeof t&&t);i.data("clockpicker",new S(i,a))}})}}(),function(t,e){"function"==typeof define&&define.amd?define(e):"object"==typeof exports?module.exports=e():t.PhotoSwipe=e()}(this,function(){"use strict";return function(t,e,i,n){var o={features:null,bind:function(t,e,i,n){var o=(n?"remove":"add")+"EventListener";e=e.split(" ");for(var a=0;a<e.length;a++)e[a]&&t[o](e[a],i,!1)},isArray:function(t){return t instanceof Array},createEl:function(t,e){var i=document.createElement(e||"div");return t&&(i.className=t),i},getScrollY:function(){var t=window.pageYOffset;return void 0!==t?t:document.documentElement.scrollTop},unbind:function(t,e,i){o.bind(t,e,i,!0)},removeClass:function(t,e){var i=new RegExp("(\\s|^)"+e+"(\\s|$)");t.className=t.className.replace(i," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")},addClass:function(t,e){o.hasClass(t,e)||(t.className+=(t.className?" ":"")+e)},hasClass:function(t,e){return t.className&&new RegExp("(^|\\s)"+e+"(\\s|$)").test(t.className)},getChildByClass:function(t,e){for(var i=t.firstChild;i;){if(o.hasClass(i,e))return i;i=i.nextSibling}},arraySearch:function(t,e,i){for(var n=t.length;n--;)if(t[n][i]===e)return n;return-1},extend:function(t,e,i){for(var n in e)if(e.hasOwnProperty(n)){if(i&&t.hasOwnProperty(n))continue;t[n]=e[n]}},easing:{sine:{out:function(t){return Math.sin(t*(Math.PI/2))},inOut:function(t){return-(Math.cos(Math.PI*t)-1)/2}},cubic:{out:function(t){return--t*t*t+1}}},detectFeatures:function(){if(o.features)return o.features;var t=o.createEl().style,e="",i={};if(i.oldIE=document.all&&!document.addEventListener,i.touch="ontouchstart"in window,window.requestAnimationFrame&&(i.raf=window.requestAnimationFrame,i.caf=window.cancelAnimationFrame),i.pointerEvent=navigator.pointerEnabled||navigator.msPointerEnabled,!i.pointerEvent){var n=navigator.userAgent;if(/iP(hone|od)/.test(navigator.platform)){var a=navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);a&&a.length>0&&(a=parseInt(a[1],10))>=1&&8>a&&(i.isOldIOSPhone=!0)}var r=n.match(/Android\s([0-9\.]*)/),s=r?r[1]:0;(s=parseFloat(s))>=1&&(4.4>s&&(i.isOldAndroid=!0),i.androidVersion=s),i.isMobileOpera=/opera mini|opera mobi/i.test(n)}for(var l,c,u=["transform","perspective","animationName"],d=["","webkit","Moz","ms","O"],h=0;4>h;h++){e=d[h];for(var p=0;3>p;p++)l=u[p],c=e+(e?l.charAt(0).toUpperCase()+l.slice(1):l),!i[l]&&c in t&&(i[l]=c);e&&!i.raf&&(e=e.toLowerCase(),i.raf=window[e+"RequestAnimationFrame"],i.raf&&(i.caf=window[e+"CancelAnimationFrame"]||window[e+"CancelRequestAnimationFrame"]))}if(!i.raf){var f=0;i.raf=function(t){var e=(new Date).getTime(),i=Math.max(0,16-(e-f)),n=window.setTimeout(function(){t(e+i)},i);return f=e+i,n},i.caf=function(t){clearTimeout(t)}}return i.svg=!!document.createElementNS&&!!document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect,o.features=i,i}};o.detectFeatures(),o.features.oldIE&&(o.bind=function(t,e,i,n){e=e.split(" ");for(var o,a=(n?"detach":"attach")+"Event",r=function(){i.handleEvent.call(i)},s=0;s<e.length;s++)if(o=e[s])if("object"==typeof i&&i.handleEvent){if(n){if(!i["oldIE"+o])return!1}else i["oldIE"+o]=r;t[a]("on"+o,i["oldIE"+o])}else t[a]("on"+o,i)});var a=this,r={allowPanToNext:!0,spacing:.12,bgOpacity:1,mouseUsed:!1,loop:!0,pinchToClose:!0,closeOnScroll:!0,closeOnVerticalDrag:!0,verticalDragRange:.75,hideAnimationDuration:333,showAnimationDuration:333,showHideOpacity:!1,focus:!0,escKey:!0,arrowKeys:!0,mainScrollEndFriction:.35,panEndFriction:.35,isClickableElement:function(t){return"A"===t.tagName},getDoubleTapZoom:function(t,e){return t?1:e.initialZoomLevel<.7?1:1.33},maxSpreadZoom:1.33,modal:!0,scaleMode:"fit"};o.extend(r,n);var s,l,c,u,d,h,p,f,m,g,v,y,b,x,w,k,C,S,T,M,I,P,A,D,E,_,O,L,R,F,V,W,z,H,N,B,Y,j,$,X,q,U,Q,Z,G,K,J,tt,et,it,nt,ot,at,rt,st,lt={x:0,y:0},ct={x:0,y:0},ut={x:0,y:0},dt={},ht=0,pt={},ft={x:0,y:0},mt=0,gt=!0,vt=[],yt={},bt=!1,xt=function(t,e){o.extend(a,e.publicMethods),vt.push(t)},wt=function(t){var e=He();return t>e-1?t-e:0>t?e+t:t},kt={},Ct=function(t,e){return kt[t]||(kt[t]=[]),kt[t].push(e)},St=function(t){var e=kt[t];if(e){var i=Array.prototype.slice.call(arguments);i.shift();for(var n=0;n<e.length;n++)e[n].apply(a,i)}},Tt=function(){return(new Date).getTime()},Mt=function(t){at=t,a.bg.style.opacity=t*r.bgOpacity},It=function(t,e,i,n,o){(!bt||o&&o!==a.currItem)&&(n/=o?o.fitRatio:a.currItem.fitRatio),t[P]=y+e+"px, "+i+"px"+b+" scale("+n+")"},Pt=function(t){tt&&(t&&(g>a.currItem.fitRatio?bt||(Qe(a.currItem,!1,!0),bt=!0):bt&&(Qe(a.currItem),bt=!1)),It(tt,ut.x,ut.y,g))},At=function(t){t.container&&It(t.container.style,t.initialPosition.x,t.initialPosition.y,t.initialZoomLevel,t)},Dt=function(t,e){e[P]=y+t+"px, 0px"+b},Et=function(t,e){if(!r.loop&&e){var i=u+(ft.x*ht-t)/ft.x,n=Math.round(t-ce.x);(0>i&&n>0||i>=He()-1&&0>n)&&(t=ce.x+n*r.mainScrollEndFriction)}ce.x=t,Dt(t,d)},_t=function(t,e){var i=ue[t]-pt[t];return ct[t]+lt[t]+i-i*(e/v)},Ot=function(t,e){t.x=e.x,t.y=e.y,e.id&&(t.id=e.id)},Lt=function(t){t.x=Math.round(t.x),t.y=Math.round(t.y)},Rt=null,Ft=function(){Rt&&(o.unbind(document,"mousemove",Ft),o.addClass(t,"pswp--has_mouse"),r.mouseUsed=!0,St("mouseUsed")),Rt=setTimeout(function(){Rt=null},100)},Vt=function(t,e){var i=$e(a.currItem,dt,t);return e&&(J=i),i},Wt=function(t){return t||(t=a.currItem),t.initialZoomLevel},zt=function(t){return t||(t=a.currItem),t.w>0?r.maxSpreadZoom:1},Ht=function(t,e,i,n){return n===a.currItem.initialZoomLevel?(i[t]=a.currItem.initialPosition[t],!0):(i[t]=_t(t,n),i[t]>e.min[t]?(i[t]=e.min[t],!0):i[t]<e.max[t]&&(i[t]=e.max[t],!0))},Nt=function(t){var e="";r.escKey&&27===t.keyCode?e="close":r.arrowKeys&&(37===t.keyCode?e="prev":39===t.keyCode&&(e="next")),e&&(t.ctrlKey||t.altKey||t.shiftKey||t.metaKey||(t.preventDefault?t.preventDefault():t.returnValue=!1,a[e]()))},Bt=function(t){t&&(q||X||et||B)&&(t.preventDefault(),t.stopPropagation())},Yt=function(){a.setScrollOffset(0,o.getScrollY())},jt={},$t=0,Xt=function(t){jt[t]&&(jt[t].raf&&_(jt[t].raf),$t--,delete jt[t])},qt=function(t){jt[t]&&Xt(t),jt[t]||($t++,jt[t]={})},Ut=function(){for(var t in jt)jt.hasOwnProperty(t)&&Xt(t)},Qt=function(t,e,i,n,o,a,r){var s,l=Tt();qt(t);var c=function(){if(jt[t]){if((s=Tt()-l)>=n)return Xt(t),a(i),void(r&&r());a((i-e)*o(s/n)+e),jt[t].raf=E(c)}};c()},Zt={shout:St,listen:Ct,viewportSize:dt,options:r,isMainScrollAnimating:function(){return et},getZoomLevel:function(){return g},getCurrentIndex:function(){return u},isDragging:function(){return j},isZooming:function(){return G},setScrollOffset:function(t,e){pt.x=t,F=pt.y=e,St("updateScrollOffset",pt)},applyZoomPan:function(t,e,i,n){ut.x=e,ut.y=i,g=t,Pt(n)},init:function(){if(!s&&!l){var i;a.framework=o,a.template=t,a.bg=o.getChildByClass(t,"pswp__bg"),O=t.className,s=!0,V=o.detectFeatures(),E=V.raf,_=V.caf,P=V.transform,R=V.oldIE,a.scrollWrap=o.getChildByClass(t,"pswp__scroll-wrap"),a.container=o.getChildByClass(a.scrollWrap,"pswp__container"),d=a.container.style,a.itemHolders=k=[{el:a.container.children[0],wrap:0,index:-1},{el:a.container.children[1],wrap:0,index:-1},{el:a.container.children[2],wrap:0,index:-1}],k[0].el.style.display=k[2].el.style.display="none",function(){if(P){var e=V.perspective&&!D;return y="translate"+(e?"3d(":"("),void(b=V.perspective?", 0px)":")")}P="left",o.addClass(t,"pswp--ie"),Dt=function(t,e){e.left=t+"px"},At=function(t){var e=t.fitRatio>1?1:t.fitRatio,i=t.container.style,n=e*t.w,o=e*t.h;i.width=n+"px",i.height=o+"px",i.left=t.initialPosition.x+"px",i.top=t.initialPosition.y+"px"},Pt=function(){if(tt){var t=tt,e=a.currItem,i=e.fitRatio>1?1:e.fitRatio,n=i*e.w,o=i*e.h;t.width=n+"px",t.height=o+"px",t.left=ut.x+"px",t.top=ut.y+"px"}}}(),m={resize:a.updateSize,scroll:Yt,keydown:Nt,click:Bt};var n=V.isOldIOSPhone||V.isOldAndroid||V.isMobileOpera;for(V.animationName&&V.transform&&!n||(r.showAnimationDuration=r.hideAnimationDuration=0),i=0;i<vt.length;i++)a["init"+vt[i]]();e&&(a.ui=new e(a,o)).init(),St("firstUpdate"),u=u||r.index||0,(isNaN(u)||0>u||u>=He())&&(u=0),a.currItem=ze(u),(V.isOldIOSPhone||V.isOldAndroid)&&(gt=!1),t.setAttribute("aria-hidden","false"),r.modal&&(gt?t.style.position="fixed":(t.style.position="absolute",t.style.top=o.getScrollY()+"px")),void 0===F&&(St("initialLayout"),F=L=o.getScrollY());var c="pswp--open ";for(r.mainClass&&(c+=r.mainClass+" "),r.showHideOpacity&&(c+="pswp--animate_opacity "),c+=D?"pswp--touch":"pswp--notouch",c+=V.animationName?" pswp--css_animation":"",c+=V.svg?" pswp--svg":"",o.addClass(t,c),a.updateSize(),h=-1,mt=null,i=0;3>i;i++)Dt((i+h)*ft.x,k[i].el.style);R||o.bind(a.scrollWrap,f,a),Ct("initialZoomInEnd",function(){a.setContent(k[0],u-1),a.setContent(k[2],u+1),k[0].el.style.display=k[2].el.style.display="block",r.focus&&t.focus(),o.bind(document,"keydown",a),V.transform&&o.bind(a.scrollWrap,"click",a),r.mouseUsed||o.bind(document,"mousemove",Ft),o.bind(window,"resize scroll",a),St("bindEvents")}),a.setContent(k[1],u),a.updateCurrItem(),St("afterInit"),gt||(x=setInterval(function(){$t||j||G||g!==a.currItem.initialZoomLevel||a.updateSize()},1e3)),o.addClass(t,"pswp--visible")}},close:function(){s&&(s=!1,l=!0,St("close"),o.unbind(window,"resize",a),o.unbind(window,"scroll",m.scroll),o.unbind(document,"keydown",a),o.unbind(document,"mousemove",Ft),V.transform&&o.unbind(a.scrollWrap,"click",a),j&&o.unbind(window,p,a),St("unbindEvents"),Ne(a.currItem,null,!0,a.destroy))},destroy:function(){St("destroy"),Re&&clearTimeout(Re),t.setAttribute("aria-hidden","true"),t.className=O,x&&clearInterval(x),o.unbind(a.scrollWrap,f,a),o.unbind(window,"scroll",a),pe(),Ut(),kt=null},panTo:function(t,e,i){i||(t>J.min.x?t=J.min.x:t<J.max.x&&(t=J.max.x),e>J.min.y?e=J.min.y:e<J.max.y&&(e=J.max.y)),ut.x=t,ut.y=e,Pt()},handleEvent:function(t){t=t||window.event,m[t.type]&&m[t.type](t)},goTo:function(t){var e=(t=wt(t))-u;mt=e,u=t,a.currItem=ze(u),ht-=e,Et(ft.x*ht),Ut(),et=!1,a.updateCurrItem()},next:function(){a.goTo(u+1)},prev:function(){a.goTo(u-1)},updateCurrZoomItem:function(t){if(t&&St("beforeChange",0),k[1].el.children.length){var e=k[1].el.children[0];tt=o.hasClass(e,"pswp__zoom-wrap")?e.style:null}else tt=null;J=a.currItem.bounds,v=g=a.currItem.initialZoomLevel,ut.x=J.center.x,ut.y=J.center.y,t&&St("afterChange")},invalidateCurrItems:function(){w=!0;for(var t=0;3>t;t++)k[t].item&&(k[t].item.needsUpdate=!0)},updateCurrItem:function(t){if(0!==mt){var e,i=Math.abs(mt);if(!(t&&2>i)){a.currItem=ze(u),bt=!1,St("beforeChange",mt),i>=3&&(h+=mt+(mt>0?-3:3),i=3);for(var n=0;i>n;n++)mt>0?(e=k.shift(),k[2]=e,h++,Dt((h+2)*ft.x,e.el.style),a.setContent(e,u-i+n+1+1)):(e=k.pop(),k.unshift(e),h--,Dt(h*ft.x,e.el.style),a.setContent(e,u+i-n-1-1));if(tt&&1===Math.abs(mt)){var o=ze(C);o.initialZoomLevel!==g&&($e(o,dt),Qe(o),At(o))}mt=0,a.updateCurrZoomItem(),C=u,St("afterChange")}}},updateSize:function(e){if(!gt&&r.modal){var i=o.getScrollY();if(F!==i&&(t.style.top=i+"px",F=i),!e&&yt.x===window.innerWidth&&yt.y===window.innerHeight)return;yt.x=window.innerWidth,yt.y=window.innerHeight,t.style.height=yt.y+"px"}if(dt.x=a.scrollWrap.clientWidth,dt.y=a.scrollWrap.clientHeight,Yt(),ft.x=dt.x+Math.round(dt.x*r.spacing),ft.y=dt.y,Et(ft.x*ht),St("beforeResize"),void 0!==h){for(var n,s,l,c=0;3>c;c++)n=k[c],Dt((c+h)*ft.x,n.el.style),l=u+c-1,r.loop&&He()>2&&(l=wt(l)),s=ze(l),s&&(w||s.needsUpdate||!s.bounds)?(a.cleanSlide(s),a.setContent(n,l),1===c&&(a.currItem=s,a.updateCurrZoomItem(!0)),s.needsUpdate=!1):-1===n.index&&l>=0&&a.setContent(n,l),s&&s.container&&($e(s,dt),Qe(s),At(s));w=!1}v=g=a.currItem.initialZoomLevel,(J=a.currItem.bounds)&&(ut.x=J.center.x,ut.y=J.center.y,Pt(!0)),St("resize")},zoomTo:function(t,e,i,n,a){e&&(v=g,ue.x=Math.abs(e.x)-ut.x,ue.y=Math.abs(e.y)-ut.y,Ot(ct,ut));var r=Vt(t,!1),s={};Ht("x",r,s,t),Ht("y",r,s,t);var l=g,c=ut.x,u=ut.y;Lt(s);var d=function(e){1===e?(g=t,ut.x=s.x,ut.y=s.y):(g=(t-l)*e+l,ut.x=(s.x-c)*e+c,ut.y=(s.y-u)*e+u),a&&a(e),Pt(1===e)};i?Qt("customZoomTo",0,1,i,n||o.easing.sine.inOut,d):d(1)}},Gt={},Kt={},Jt={},te={},ee={},ie=[],ne={},oe=[],ae={},re=0,se={x:0,y:0},le=0,ce={x:0,y:0},ue={x:0,y:0},de={x:0,y:0},he=function(t,e){return ae.x=Math.abs(t.x-e.x),ae.y=Math.abs(t.y-e.y),Math.sqrt(ae.x*ae.x+ae.y*ae.y)},pe=function(){U&&(_(U),U=null)},fe=function(){j&&(U=E(fe),Pe())},me=function(t,e){return!(!t||t===document)&&!(t.getAttribute("class")&&t.getAttribute("class").indexOf("pswp__scroll-wrap")>-1)&&(e(t)?t:me(t.parentNode,e))},ge={},ve=function(t,e){return ge.prevent=!me(t.target,r.isClickableElement),St("preventDragEvent",t,e,ge),ge.prevent},ye=function(t,e){return e.x=t.pageX,e.y=t.pageY,e.id=t.identifier,e},be=function(t,e,i){i.x=.5*(t.x+e.x),i.y=.5*(t.y+e.y)},xe=function(){var t=ut.y-a.currItem.initialPosition.y;return 1-Math.abs(t/(dt.y/2))},we={},ke={},Ce=[],Se=function(t){for(;Ce.length>0;)Ce.pop();return A?(st=0,ie.forEach(function(t){0===st?Ce[0]=t:1===st&&(Ce[1]=t),st++})):t.type.indexOf("touch")>-1?t.touches&&t.touches.length>0&&(Ce[0]=ye(t.touches[0],we),t.touches.length>1&&(Ce[1]=ye(t.touches[1],ke))):(we.x=t.pageX,we.y=t.pageY,we.id="",Ce[0]=we),Ce},Te=function(t,e){var i,n,o,s,l=ut[t]+e[t],c=e[t]>0,u=ce.x+e.x,d=ce.x-ne.x;return i=l>J.min[t]||l<J.max[t]?r.panEndFriction:1,l=ut[t]+e[t]*i,!r.allowPanToNext&&g!==a.currItem.initialZoomLevel||(tt?"h"!==it||"x"!==t||X||(c?(l>J.min[t]&&(i=r.panEndFriction,J.min[t],n=J.min[t]-ct[t]),(0>=n||0>d)&&He()>1?(s=u,0>d&&u>ne.x&&(s=ne.x)):J.min.x!==J.max.x&&(o=l)):(l<J.max[t]&&(i=r.panEndFriction,J.max[t],n=ct[t]-J.max[t]),(0>=n||d>0)&&He()>1?(s=u,d>0&&u<ne.x&&(s=ne.x)):J.min.x!==J.max.x&&(o=l))):s=u,"x"!==t)?void(et||Q||g>a.currItem.fitRatio&&(ut[t]+=e[t]*i)):(void 0!==s&&(Et(s,!0),Q=s!==ne.x),J.min.x!==J.max.x&&(void 0!==o?ut.x=o:Q||(ut.x+=e.x*i)),void 0!==s)},Me=function(t){if(!("mousedown"===t.type&&t.button>0)){if(We)return void t.preventDefault();if(!Y||"mousedown"!==t.type){if(ve(t,!0)&&t.preventDefault(),St("pointerDown"),A){var e=o.arraySearch(ie,t.pointerId,"id");0>e&&(e=ie.length),ie[e]={x:t.pageX,y:t.pageY,id:t.pointerId}}var i=Se(t),n=i.length;Z=null,Ut(),j&&1!==n||(j=nt=!0,o.bind(window,p,a),N=rt=ot=B=Q=q=$=X=!1,it=null,St("firstTouchStart",i),Ot(ct,ut),lt.x=lt.y=0,Ot(te,i[0]),Ot(ee,te),ne.x=ft.x*ht,oe=[{x:te.x,y:te.y}],z=W=Tt(),Vt(g,!0),pe(),fe()),!G&&n>1&&!et&&!Q&&(v=g,X=!1,G=$=!0,lt.y=lt.x=0,Ot(ct,ut),Ot(Gt,i[0]),Ot(Kt,i[1]),be(Gt,Kt,de),ue.x=Math.abs(de.x)-ut.x,ue.y=Math.abs(de.y)-ut.y,K=he(Gt,Kt))}}},Ie=function(t){if(t.preventDefault(),A){var e=o.arraySearch(ie,t.pointerId,"id");if(e>-1){var i=ie[e];i.x=t.pageX,i.y=t.pageY}}if(j){var n=Se(t);if(it||q||G)Z=n;else if(ce.x!==ft.x*ht)it="h";else{var a=Math.abs(n[0].x-te.x)-Math.abs(n[0].y-te.y);Math.abs(a)>=10&&(it=a>0?"h":"v",Z=n)}}},Pe=function(){if(Z){var t=Z.length;if(0!==t)if(Ot(Gt,Z[0]),Jt.x=Gt.x-te.x,Jt.y=Gt.y-te.y,G&&t>1){if(te.x=Gt.x,te.y=Gt.y,!Jt.x&&!Jt.y&&(u=Z[1],d=Kt,u.x===d.x&&u.y===d.y))return;Ot(Kt,Z[1]),X||(X=!0,St("zoomGestureStarted"));var e=he(Gt,Kt),i=Oe(e);i>a.currItem.initialZoomLevel+a.currItem.initialZoomLevel/15&&(rt=!0);var n=1,o=Wt(),s=zt();if(o>i)if(r.pinchToClose&&!rt&&v<=a.currItem.initialZoomLevel){var l=1-(o-i)/(o/1.2);Mt(l),St("onPinchClose",l),ot=!0}else n=(o-i)/o,n>1&&(n=1),i=o-n*(o/3);else i>s&&(n=(i-s)/(6*o),n>1&&(n=1),i=s+n*o);0>n&&(n=0),be(Gt,Kt,se),lt.x+=se.x-de.x,lt.y+=se.y-de.y,Ot(de,se),ut.x=_t("x",i),ut.y=_t("y",i),N=i>g,g=i,Pt()}else{if(!it)return;if(nt&&(nt=!1,Math.abs(Jt.x)>=10&&(Jt.x-=Z[0].x-ee.x),Math.abs(Jt.y)>=10&&(Jt.y-=Z[0].y-ee.y)),te.x=Gt.x,te.y=Gt.y,0===Jt.x&&0===Jt.y)return;if("v"===it&&r.closeOnVerticalDrag&&"fit"===r.scaleMode&&g===a.currItem.initialZoomLevel){lt.y+=Jt.y,ut.y+=Jt.y;var c=xe();return B=!0,St("onVerticalDrag",c),Mt(c),void Pt()}(function(t,e,i){if(t-z>50){var n=oe.length>2?oe.shift():{};n.x=e,n.y=i,oe.push(n),z=t}})(Tt(),Gt.x,Gt.y),q=!0,J=a.currItem.bounds,Te("x",Jt)||(Te("y",Jt),Lt(ut),Pt())}}var u,d},Ae=function(t){if(V.isOldAndroid){if(Y&&"mouseup"===t.type)return;t.type.indexOf("touch")>-1&&(clearTimeout(Y),Y=setTimeout(function(){Y=0},600))}var e;if(St("pointerUp"),ve(t,!1)&&t.preventDefault(),A){var i=o.arraySearch(ie,t.pointerId,"id");i>-1&&(e=ie.splice(i,1)[0],navigator.pointerEnabled?e.type=t.pointerType||"mouse":(e.type={4:"mouse",2:"touch",3:"pen"}[t.pointerType],e.type||(e.type=t.pointerType||"mouse")))}var n,s=Se(t),l=s.length;if("mouseup"===t.type&&(l=0),2===l)return Z=null,!0;1===l&&Ot(ee,s[0]),0!==l||it||et||(e||("mouseup"===t.type?e={x:t.pageX,y:t.pageY,type:"mouse"}:t.changedTouches&&t.changedTouches[0]&&(e={x:t.changedTouches[0].pageX,y:t.changedTouches[0].pageY,type:"touch"})),St("touchRelease",t,e));var c=-1;if(0===l&&(j=!1,o.unbind(window,p,a),pe(),G?c=0:-1!==le&&(c=Tt()-le)),le=1===l?Tt():-1,n=-1!==c&&150>c?"zoom":"swipe",G&&2>l&&(G=!1,1===l&&(n="zoomPointerUp"),St("zoomGestureEnded")),Z=null,q||X||et||B)if(Ut(),H||(H=De()),H.calculateSwipeSpeed("x"),B)if(xe()<r.verticalDragRange)a.close();else{var u=ut.y,d=at;Qt("verticalDrag",0,1,300,o.easing.cubic.out,function(t){ut.y=(a.currItem.initialPosition.y-u)*t+u,Mt((1-d)*t+d),Pt()}),St("onVerticalDrag",1)}else{if((Q||et)&&0===l){if(_e(n,H))return;n="zoomPointerUp"}if(!et)return"swipe"!==n?void Le():void(!Q&&g>a.currItem.fitRatio&&Ee(H))}},De=function(){var t,e,i={lastFlickOffset:{},lastFlickDist:{},lastFlickSpeed:{},slowDownRatio:{},slowDownRatioReverse:{},speedDecelerationRatio:{},speedDecelerationRatioAbs:{},distanceOffset:{},backAnimDestination:{},backAnimStarted:{},calculateSwipeSpeed:function(n){oe.length>1?(t=Tt()-z+50,e=oe[oe.length-2][n]):(t=Tt()-W,e=ee[n]),i.lastFlickOffset[n]=te[n]-e,i.lastFlickDist[n]=Math.abs(i.lastFlickOffset[n]),i.lastFlickDist[n]>20?i.lastFlickSpeed[n]=i.lastFlickOffset[n]/t:i.lastFlickSpeed[n]=0,Math.abs(i.lastFlickSpeed[n])<.1&&(i.lastFlickSpeed[n]=0),i.slowDownRatio[n]=.95,i.slowDownRatioReverse[n]=1-i.slowDownRatio[n],i.speedDecelerationRatio[n]=1},calculateOverBoundsAnimOffset:function(t,e){i.backAnimStarted[t]||(ut[t]>J.min[t]?i.backAnimDestination[t]=J.min[t]:ut[t]<J.max[t]&&(i.backAnimDestination[t]=J.max[t]),void 0!==i.backAnimDestination[t]&&(i.slowDownRatio[t]=.7,i.slowDownRatioReverse[t]=1-i.slowDownRatio[t],i.speedDecelerationRatioAbs[t]<.05&&(i.lastFlickSpeed[t]=0,i.backAnimStarted[t]=!0,Qt("bounceZoomPan"+t,ut[t],i.backAnimDestination[t],e||300,o.easing.sine.out,function(e){ut[t]=e,Pt()}))))},calculateAnimOffset:function(t){i.backAnimStarted[t]||(i.speedDecelerationRatio[t]=i.speedDecelerationRatio[t]*(i.slowDownRatio[t]+i.slowDownRatioReverse[t]-i.slowDownRatioReverse[t]*i.timeDiff/10),i.speedDecelerationRatioAbs[t]=Math.abs(i.lastFlickSpeed[t]*i.speedDecelerationRatio[t]),i.distanceOffset[t]=i.lastFlickSpeed[t]*i.speedDecelerationRatio[t]*i.timeDiff,ut[t]+=i.distanceOffset[t])},panAnimLoop:function(){return jt.zoomPan&&(jt.zoomPan.raf=E(i.panAnimLoop),i.now=Tt(),i.timeDiff=i.now-i.lastNow,i.lastNow=i.now,i.calculateAnimOffset("x"),i.calculateAnimOffset("y"),Pt(),i.calculateOverBoundsAnimOffset("x"),i.calculateOverBoundsAnimOffset("y"),i.speedDecelerationRatioAbs.x<.05&&i.speedDecelerationRatioAbs.y<.05)?(ut.x=Math.round(ut.x),ut.y=Math.round(ut.y),Pt(),void Xt("zoomPan")):void 0}};return i},Ee=function(t){return t.calculateSwipeSpeed("y"),J=a.currItem.bounds,t.backAnimDestination={},t.backAnimStarted={},Math.abs(t.lastFlickSpeed.x)<=.05&&Math.abs(t.lastFlickSpeed.y)<=.05?(t.speedDecelerationRatioAbs.x=t.speedDecelerationRatioAbs.y=0,t.calculateOverBoundsAnimOffset("x"),t.calculateOverBoundsAnimOffset("y"),!0):(qt("zoomPan"),t.lastNow=Tt(),void t.panAnimLoop())},_e=function(t,e){var i,n,s;if(et||(re=u),"swipe"===t){var l=te.x-ee.x,c=e.lastFlickDist.x<10;l>30&&(c||e.lastFlickOffset.x>20)?n=-1:-30>l&&(c||e.lastFlickOffset.x<-20)&&(n=1)}n&&(0>(u+=n)?(u=r.loop?He()-1:0,s=!0):u>=He()&&(u=r.loop?0:He()-1,s=!0),(!s||r.loop)&&(mt+=n,ht-=n,i=!0));var d,h=ft.x*ht,p=Math.abs(h-ce.x);return i||h>ce.x==e.lastFlickSpeed.x>0?(d=Math.abs(e.lastFlickSpeed.x)>0?p/Math.abs(e.lastFlickSpeed.x):333,d=Math.min(d,400),d=Math.max(d,250)):d=333,re===u&&(i=!1),et=!0,St("mainScrollAnimStart"),Qt("mainScroll",ce.x,h,d,o.easing.cubic.out,Et,function(){Ut(),et=!1,re=-1,(i||re!==u)&&a.updateCurrItem(),St("mainScrollAnimComplete")}),i&&a.updateCurrItem(!0),i},Oe=function(t){return 1/K*t*v},Le=function(){var t=g,e=Wt(),i=zt();e>g?t=e:g>i&&(t=i);var n,r=at;return ot&&!N&&!rt&&e>g?(a.close(),!0):(ot&&(n=function(t){Mt((1-r)*t+r)}),a.zoomTo(t,0,200,o.easing.cubic.out,n),!0)};xt("Gestures",{publicMethods:{initGestures:function(){var t=function(t,e,i,n,o){S=t+e,T=t+i,M=t+n,I=o?t+o:""};(A=V.pointerEvent)&&V.touch&&(V.touch=!1),A?navigator.pointerEnabled?t("pointer","down","move","up","cancel"):t("MSPointer","Down","Move","Up","Cancel"):V.touch?(t("touch","start","move","end","cancel"),D=!0):t("mouse","down","move","up"),p=T+" "+M+" "+I,f=S,A&&!D&&(D=navigator.maxTouchPoints>1||navigator.msMaxTouchPoints>1),a.likelyTouchDevice=D,m[S]=Me,m[T]=Ie,m[M]=Ae,I&&(m[I]=m[M]),V.touch&&(f+=" mousedown",p+=" mousemove mouseup",m.mousedown=m[S],m.mousemove=m[T],m.mouseup=m[M]),D||(r.allowPanToNext=!1)}}});var Re,Fe,Ve,We,ze,He,Ne=function(e,i,n,s){var l;Re&&clearTimeout(Re),We=!0,Ve=!0,e.initialLayout?(l=e.initialLayout,e.initialLayout=null):l=r.getThumbBoundsFn&&r.getThumbBoundsFn(u);var d,h,p=n?r.hideAnimationDuration:r.showAnimationDuration,f=function(){Xt("initialZoom"),n?(a.template.removeAttribute("style"),a.bg.removeAttribute("style")):(Mt(1),i&&(i.style.display="block"),o.addClass(t,"pswp--animated-in"),St("initialZoom"+(n?"OutEnd":"InEnd"))),s&&s(),We=!1};if(!p||!l||void 0===l.x)return St("initialZoom"+(n?"Out":"In")),g=e.initialZoomLevel,Ot(ut,e.initialPosition),Pt(),t.style.opacity=n?0:1,Mt(1),void(p?setTimeout(function(){f()},p):f());d=c,h=!a.currItem.src||a.currItem.loadError||r.showHideOpacity,e.miniImg&&(e.miniImg.style.webkitBackfaceVisibility="hidden"),n||(g=l.w/e.w,ut.x=l.x,ut.y=l.y-L,a[h?"template":"bg"].style.opacity=.001,Pt()),qt("initialZoom"),n&&!d&&o.removeClass(t,"pswp--animated-in"),h&&(n?o[(d?"remove":"add")+"Class"](t,"pswp--animate_opacity"):setTimeout(function(){o.addClass(t,"pswp--animate_opacity")},30)),Re=setTimeout(function(){if(St("initialZoom"+(n?"Out":"In")),n){var i=l.w/e.w,a={x:ut.x,y:ut.y},r=g,s=at,c=function(e){1===e?(g=i,ut.x=l.x,ut.y=l.y-F):(g=(i-r)*e+r,ut.x=(l.x-a.x)*e+a.x,ut.y=(l.y-F-a.y)*e+a.y),Pt(),h?t.style.opacity=1-e:Mt(s-e*s)};d?Qt("initialZoom",0,1,p,o.easing.cubic.out,c,f):(c(1),Re=setTimeout(f,p+20))}else g=e.initialZoomLevel,Ot(ut,e.initialPosition),Pt(),Mt(1),h?t.style.opacity=1:Mt(1),Re=setTimeout(f,p+20)},n?25:90)},Be={},Ye=[],je={index:0,errorMsg:'<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',forceProgressiveLoading:!1,preload:[1,1],getNumItemsFn:function(){return Fe.length}},$e=function(t,e,i){if(t.src&&!t.loadError){var n=!i;if(n&&(t.vGap||(t.vGap={top:0,bottom:0}),St("parseVerticalMargin",t)),Be.x=e.x,Be.y=e.y-t.vGap.top-t.vGap.bottom,n){var o=Be.x/t.w,a=Be.y/t.h;t.fitRatio=a>o?o:a;var s=r.scaleMode;"orig"===s?i=1:"fit"===s&&(i=t.fitRatio),i>1&&(i=1),t.initialZoomLevel=i,t.bounds||(t.bounds={center:{x:0,y:0},max:{x:0,y:0},min:{x:0,y:0}})}if(!i)return;return l=t,c=t.w*i,u=t.h*i,(d=l.bounds).center.x=Math.round((Be.x-c)/2),d.center.y=Math.round((Be.y-u)/2)+l.vGap.top,d.max.x=c>Be.x?Math.round(Be.x-c):d.center.x,d.max.y=u>Be.y?Math.round(Be.y-u)+l.vGap.top:d.center.y,d.min.x=c>Be.x?0:d.center.x,d.min.y=u>Be.y?l.vGap.top:d.center.y,n&&i===t.initialZoomLevel&&(t.initialPosition=t.bounds.center),t.bounds}var l,c,u,d;return t.w=t.h=0,t.initialZoomLevel=t.fitRatio=1,t.bounds={center:{x:0,y:0},max:{x:0,y:0},min:{x:0,y:0}},t.initialPosition=t.bounds.center,t.bounds},Xe=function(t,e,i,n,o,r){e.loadError||n&&(e.imageAppended=!0,Qe(e,n,e===a.currItem&&bt),i.appendChild(n),r&&setTimeout(function(){e&&e.loaded&&e.placeholder&&(e.placeholder.style.display="none",e.placeholder=null)},500))},qe=function(t){t.loading=!0,t.loaded=!1;var e=t.img=o.createEl("pswp__img","img"),i=function(){t.loading=!1,t.loaded=!0,t.loadComplete?t.loadComplete(t):t.img=null,e.onload=e.onerror=null,e=null};return e.onload=i,e.onerror=function(){t.loadError=!0,i()},e.src=t.src,e},Ue=function(t,e){return t.src&&t.loadError&&t.container?(e&&(t.container.innerHTML=""),t.container.innerHTML=r.errorMsg.replace("%url%",t.src),!0):void 0},Qe=function(t,e,i){if(t.src){e||(e=t.container.lastChild);var n=i?t.w:Math.round(t.w*t.fitRatio),o=i?t.h:Math.round(t.h*t.fitRatio);t.placeholder&&!t.loaded&&(t.placeholder.style.width=n+"px",t.placeholder.style.height=o+"px"),e.style.width=n+"px",e.style.height=o+"px"}},Ze=function(){if(Ye.length){for(var t,e=0;e<Ye.length;e++)t=Ye[e],t.holder.index===t.index&&Xe(t.index,t.item,t.baseDiv,t.img,0,t.clearPlaceholder);Ye=[]}};xt("Controller",{publicMethods:{lazyLoadItem:function(t){t=wt(t);var e=ze(t);e&&(!e.loaded&&!e.loading||w)&&(St("gettingData",t,e),e.src&&qe(e))},initController:function(){o.extend(r,je,!0),a.items=Fe=i,ze=a.getItemAt,He=r.getNumItemsFn,r.loop,He()<3&&(r.loop=!1),Ct("beforeChange",function(t){var e,i=r.preload,n=null===t||t>=0,o=Math.min(i[0],He()),s=Math.min(i[1],He());for(e=1;(n?s:o)>=e;e++)a.lazyLoadItem(u+e);for(e=1;(n?o:s)>=e;e++)a.lazyLoadItem(u-e)}),Ct("initialLayout",function(){a.currItem.initialLayout=r.getThumbBoundsFn&&r.getThumbBoundsFn(u)}),Ct("mainScrollAnimComplete",Ze),Ct("initialZoomInEnd",Ze),Ct("destroy",function(){for(var t,e=0;e<Fe.length;e++)t=Fe[e],t.container&&(t.container=null),t.placeholder&&(t.placeholder=null),t.img&&(t.img=null),t.preloader&&(t.preloader=null),t.loadError&&(t.loaded=t.loadError=!1);Ye=null})},getItemAt:function(t){return t>=0&&void 0!==Fe[t]&&Fe[t]},allowProgressiveImg:function(){return r.forceProgressiveLoading||!D||r.mouseUsed||screen.width>1200},setContent:function(t,e){r.loop&&(e=wt(e));var i=a.getItemAt(t.index);i&&(i.container=null);var n,l=a.getItemAt(e);if(l){St("gettingData",e,l),t.index=e,t.item=l;var c=l.container=o.createEl("pswp__zoom-wrap");if(!l.src&&l.html&&(l.html.tagName?c.appendChild(l.html):c.innerHTML=l.html),Ue(l),$e(l,dt),!l.src||l.loadError||l.loaded)l.src&&!l.loadError&&(n=o.createEl("pswp__img","img"),n.style.opacity=1,n.src=l.src,Qe(l,n),Xe(0,l,c,n));else{if(l.loadComplete=function(i){if(s){if(t&&t.index===e){if(Ue(i,!0))return i.loadComplete=i.img=null,$e(i,dt),At(i),void(t.index===u&&a.updateCurrZoomItem());i.imageAppended?!We&&i.placeholder&&(i.placeholder.style.display="none",i.placeholder=null):V.transform&&(et||We)?Ye.push({item:i,baseDiv:c,img:i.img,index:e,holder:t,clearPlaceholder:!0}):Xe(0,i,c,i.img,0,!0)}i.loadComplete=null,i.img=null,St("imageLoadComplete",e,i)}},o.features.transform){var d="pswp__img pswp__img--placeholder";d+=l.msrc?"":" pswp__img--placeholder--blank";var h=o.createEl(d,l.msrc?"img":"");l.msrc&&(h.src=l.msrc),Qe(l,h),c.appendChild(h),l.placeholder=h}l.loading||qe(l),a.allowProgressiveImg()&&(!Ve&&V.transform?Ye.push({item:l,baseDiv:c,img:l.img,index:e,holder:t}):Xe(0,l,c,l.img,0,!0))}Ve||e!==u?At(l):(tt=c.style,Ne(l,n||l.img)),t.el.innerHTML="",t.el.appendChild(c)}else t.el.innerHTML=""},cleanSlide:function(t){t.img&&(t.img.onload=t.img.onerror=null),t.loaded=t.loading=t.img=t.imageAppended=!1}}});var Ge,Ke,Je={},ti=function(t,e,i){var n=document.createEvent("CustomEvent"),o={origEvent:t,target:t.target,releasePoint:e,pointerType:i||"touch"};n.initCustomEvent("pswpTap",!0,!0,o),t.target.dispatchEvent(n)};xt("Tap",{publicMethods:{initTap:function(){Ct("firstTouchStart",a.onTapStart),Ct("touchRelease",a.onTapRelease),Ct("destroy",function(){Je={},Ge=null})},onTapStart:function(t){t.length>1&&(clearTimeout(Ge),Ge=null)},onTapRelease:function(t,e){if(e&&!q&&!$&&!$t){var i=e;if(Ge&&(clearTimeout(Ge),Ge=null,n=i,a=Je,Math.abs(n.x-a.x)<25&&Math.abs(n.y-a.y)<25))return void St("doubleTap",i);if("mouse"===e.type)return void ti(t,e,"mouse");if("BUTTON"===t.target.tagName.toUpperCase()||o.hasClass(t.target,"pswp__single-tap"))return void ti(t,e);Ot(Je,i),Ge=setTimeout(function(){ti(t,e),Ge=null},300)}var n,a}}}),xt("DesktopZoom",{publicMethods:{initDesktopZoom:function(){R||(D?Ct("mouseUsed",function(){a.setupDesktopZoom()}):a.setupDesktopZoom(!0))},setupDesktopZoom:function(e){Ke={};var i="wheel mousewheel DOMMouseScroll";Ct("bindEvents",function(){o.bind(t,i,a.handleMouseWheel)}),Ct("unbindEvents",function(){Ke&&o.unbind(t,i,a.handleMouseWheel)}),a.mouseZoomedIn=!1;var n,r=function(){a.mouseZoomedIn&&(o.removeClass(t,"pswp--zoomed-in"),a.mouseZoomedIn=!1),1>g?o.addClass(t,"pswp--zoom-allowed"):o.removeClass(t,"pswp--zoom-allowed"),s()},s=function(){n&&(o.removeClass(t,"pswp--dragging"),n=!1)};Ct("resize",r),Ct("afterChange",r),Ct("pointerDown",function(){a.mouseZoomedIn&&(n=!0,o.addClass(t,"pswp--dragging"))}),Ct("pointerUp",s),e||r()},handleMouseWheel:function(t){if(g<=a.currItem.fitRatio)return r.modal&&(!r.closeOnScroll||$t||j?t.preventDefault():P&&Math.abs(t.deltaY)>2&&(c=!0,a.close())),!0;if(t.stopPropagation(),Ke.x=0,"deltaX"in t)1===t.deltaMode?(Ke.x=18*t.deltaX,Ke.y=18*t.deltaY):(Ke.x=t.deltaX,Ke.y=t.deltaY);else if("wheelDelta"in t)t.wheelDeltaX&&(Ke.x=-.16*t.wheelDeltaX),t.wheelDeltaY?Ke.y=-.16*t.wheelDeltaY:Ke.y=-.16*t.wheelDelta;else{if(!("detail"in t))return;Ke.y=t.detail}Vt(g,!0);var e=ut.x-Ke.x,i=ut.y-Ke.y;(r.modal||e<=J.min.x&&e>=J.max.x&&i<=J.min.y&&i>=J.max.y)&&t.preventDefault(),a.panTo(e,i)},toggleDesktopZoom:function(e){e=e||{x:dt.x/2+pt.x,y:dt.y/2+pt.y};var i=r.getDoubleTapZoom(!0,a.currItem),n=g===i;a.mouseZoomedIn=!n,a.zoomTo(n?a.currItem.initialZoomLevel:i,e,333),o[(n?"remove":"add")+"Class"](t,"pswp--zoomed-in")}}});var ei,ii,ni,oi,ai,ri,si,li,ci,ui,di,hi,pi={history:!0,galleryUID:1},fi=function(){return di.hash.substring(1)},mi=function(){ei&&clearTimeout(ei),ni&&clearTimeout(ni)},gi=function(){var t=fi(),e={};if(t.length<5)return e;var i,n=t.split("&");for(i=0;i<n.length;i++)if(n[i]){var o=n[i].split("=");o.length<2||(e[o[0]]=o[1])}if(r.galleryPIDs){var a=e.pid;for(e.pid=0,i=0;i<Fe.length;i++)if(Fe[i].pid===a){e.pid=i;break}}else e.pid=parseInt(e.pid,10)-1;return e.pid<0&&(e.pid=0),e},vi=function(){if(ni&&clearTimeout(ni),$t||j)ni=setTimeout(vi,500);else{oi?clearTimeout(ii):oi=!0;var t=u+1,e=ze(u);e.hasOwnProperty("pid")&&(t=e.pid);var i=si+"&gid="+r.galleryUID+"&pid="+t;li||-1===di.hash.indexOf(i)&&(ui=!0);var n=di.href.split("#")[0]+"#"+i;hi?"#"+i!==window.location.hash&&history[li?"replaceState":"pushState"]("",document.title,n):li?di.replace(n):di.hash=i,li=!0,ii=setTimeout(function(){oi=!1},60)}};xt("History",{publicMethods:{initHistory:function(){if(o.extend(r,pi,!0),r.history){di=window.location,ui=!1,ci=!1,li=!1,si=fi(),hi="pushState"in history,si.indexOf("gid=")>-1&&(si=(si=si.split("&gid=")[0]).split("?gid=")[0]),Ct("afterChange",a.updateURL),Ct("unbindEvents",function(){o.unbind(window,"hashchange",a.onHashChange)});var t=function(){ri=!0,ci||(ui?history.back():si?di.hash=si:hi?history.pushState("",document.title,di.pathname+di.search):di.hash=""),mi()};Ct("unbindEvents",function(){c&&t()}),Ct("destroy",function(){ri||t()}),Ct("firstUpdate",function(){u=gi().pid});var e=si.indexOf("pid=");e>-1&&"&"===(si=si.substring(0,e)).slice(-1)&&(si=si.slice(0,-1)),setTimeout(function(){s&&o.bind(window,"hashchange",a.onHashChange)},40)}},onHashChange:function(){return fi()===si?(ci=!0,void a.close()):void(oi||(ai=!0,a.goTo(gi().pid),ai=!1))},updateURL:function(){mi(),ai||(li?ei=setTimeout(vi,800):vi())}}}),o.extend(a,Zt)}}),function(t,e){"function"==typeof define&&define.amd?define(e):"object"==typeof exports?module.exports=e():t.PhotoSwipeUI_Default=e()}(this,function(){"use strict";return function(t,e){var i,n,o,a,r,s,l,c,u,d,h,p,f,m,g,v,y,b,x=this,w=!1,k=!0,C=!0,S={barsSize:{top:44,bottom:"auto"},closeElClasses:["item","caption","zoom-wrap","ui","top-bar"],timeToIdle:4e3,timeToIdleOutside:1e3,loadingIndicatorDelay:1e3,addCaptionHTMLFn:function(t,e){return t.title?(e.children[0].innerHTML=t.title,!0):(e.children[0].innerHTML="",!1)},closeEl:!0,captionEl:!0,fullscreenEl:!0,zoomEl:!0,shareEl:!0,counterEl:!0,arrowEl:!0,preloaderEl:!0,tapToClose:!1,tapToToggleControls:!0,clickToCloseNonZoomable:!0,shareButtons:[{id:"facebook",label:"Share on Facebook",url:"https://www.facebook.com/sharer/sharer.php?u={{url}}"},{id:"twitter",label:"Tweet",url:"https://twitter.com/intent/tweet?text={{text}}&url={{url}}"},{id:"pinterest",label:"Pin it",url:"http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}"},{id:"download",label:"Download image",url:"{{raw_image_url}}",download:!0}],getImageURLForShare:function(){return t.currItem.src||""},getPageURLForShare:function(){return window.location.href},getTextForShare:function(){return t.currItem.title||""},indexIndicatorSep:" / ",fitControlsWidth:1200},T=function(t){if(v)return!0;t=t||window.event,g.timeToIdle&&g.mouseUsed&&!u&&L();for(var i,n,o=(t.target||t.srcElement).getAttribute("class")||"",a=0;a<W.length;a++)i=W[a],i.onTap&&o.indexOf("pswp__"+i.name)>-1&&(i.onTap(),n=!0);if(n){t.stopPropagation&&t.stopPropagation(),v=!0;var r=e.features.isOldAndroid?600:30;setTimeout(function(){v=!1},r)}},M=function(t,i,n){e[(n?"add":"remove")+"Class"](t,"pswp__"+i)},I=function(){var t=1===g.getNumItemsFn();t!==m&&(M(n,"ui--one-slide",t),m=t)},P=function(){M(l,"share-modal--hidden",C)},A=function(){return(C=!C)?(e.removeClass(l,"pswp__share-modal--fade-in"),setTimeout(function(){C&&P()},300)):(P(),setTimeout(function(){C||e.addClass(l,"pswp__share-modal--fade-in")},30)),C||E(),!1},D=function(e){var i=(e=e||window.event).target||e.srcElement;return t.shout("shareLinkClick",e,i),!(!i.href||!i.hasAttribute("download")&&(window.open(i.href,"pswp_share","scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left="+(window.screen?Math.round(screen.width/2-275):100)),C||A(),1))},E=function(){for(var t,e,i,n,o,a="",r=0;r<g.shareButtons.length;r++)t=g.shareButtons[r],i=g.getImageURLForShare(t),n=g.getPageURLForShare(t),o=g.getTextForShare(t),e=t.url.replace("{{url}}",encodeURIComponent(n)).replace("{{image_url}}",encodeURIComponent(i)).replace("{{raw_image_url}}",i).replace("{{text}}",encodeURIComponent(o)),a+='<a href="'+e+'" target="_blank" class="pswp__share--'+t.id+'"'+(t.download?"download":"")+">"+t.label+"</a>",g.parseShareButtonOut&&(a=g.parseShareButtonOut(t,a));l.children[0].innerHTML=a,l.children[0].onclick=D},_=function(t){for(var i=0;i<g.closeElClasses.length;i++)if(e.hasClass(t,"pswp__"+g.closeElClasses[i]))return!0},O=0,L=function(){clearTimeout(b),O=0,u&&x.setIdle(!1)},R=function(t){var e=(t=t||window.event).relatedTarget||t.toElement;e&&"HTML"!==e.nodeName||(clearTimeout(b),b=setTimeout(function(){x.setIdle(!0)},g.timeToIdleOutside))},F=function(t){p!==t&&(M(h,"preloader--active",!t),p=t)},V=function(i){var r=i.vGap;if(!t.likelyTouchDevice||g.mouseUsed||screen.width>g.fitControlsWidth){var s=g.barsSize;if(g.captionEl&&"auto"===s.bottom)if(a||(a=e.createEl("pswp__caption pswp__caption--fake"),a.appendChild(e.createEl("pswp__caption__center")),n.insertBefore(a,o),e.addClass(n,"pswp__ui--fit")),g.addCaptionHTMLFn(i,a,!0)){var l=a.clientHeight;r.bottom=parseInt(l,10)||44}else r.bottom=s.top;else r.bottom="auto"===s.bottom?0:s.bottom;r.top=s.top}else r.top=r.bottom=0},W=[{name:"caption",option:"captionEl",onInit:function(t){o=t}},{name:"share-modal",option:"shareEl",onInit:function(t){l=t},onTap:function(){A()}},{name:"button--share",option:"shareEl",onInit:function(t){s=t},onTap:function(){A()}},{name:"button--zoom",option:"zoomEl",onTap:t.toggleDesktopZoom},{name:"counter",option:"counterEl",onInit:function(t){r=t}},{name:"button--close",option:"closeEl",onTap:t.close},{name:"button--arrow--left",option:"arrowEl",onTap:t.prev},{name:"button--arrow--right",option:"arrowEl",onTap:t.next},{name:"button--fs",option:"fullscreenEl",onTap:function(){i.isFullscreen()?i.exit():i.enter()}},{name:"preloader",option:"preloaderEl",onInit:function(t){h=t}}];x.init=function(){var r;e.extend(t.options,S,!0),g=t.options,n=e.getChildByClass(t.scrollWrap,"pswp__ui"),(d=t.listen)("onVerticalDrag",function(t){k&&.95>t?x.hideControls():!k&&t>=.95&&x.showControls()}),d("onPinchClose",function(t){k&&.9>t?(x.hideControls(),r=!0):r&&!k&&t>.9&&x.showControls()}),d("zoomGestureEnded",function(){(r=!1)&&!k&&x.showControls()}),d("beforeChange",x.update),d("doubleTap",function(e){var i=t.currItem.initialZoomLevel;t.getZoomLevel()!==i?t.zoomTo(i,e,333):t.zoomTo(g.getDoubleTapZoom(!1,t.currItem),e,333)}),d("preventDragEvent",function(t,e,i){var n=t.target||t.srcElement;n&&n.getAttribute("class")&&t.type.indexOf("mouse")>-1&&(n.getAttribute("class").indexOf("__caption")>0||/(SMALL|STRONG|EM)/i.test(n.tagName))&&(i.prevent=!1)}),d("bindEvents",function(){e.bind(n,"pswpTap click",T),e.bind(t.scrollWrap,"pswpTap",x.onGlobalTap),t.likelyTouchDevice||e.bind(t.scrollWrap,"mouseover",x.onMouseOver)}),d("unbindEvents",function(){C||A(),y&&clearInterval(y),e.unbind(document,"mouseout",R),e.unbind(document,"mousemove",L),e.unbind(n,"pswpTap click",T),e.unbind(t.scrollWrap,"pswpTap",x.onGlobalTap),e.unbind(t.scrollWrap,"mouseover",x.onMouseOver),i&&(e.unbind(document,i.eventK,x.updateFullscreen),i.isFullscreen()&&(g.hideAnimationDuration=0,i.exit()),i=null)}),d("destroy",function(){g.captionEl&&(a&&n.removeChild(a),e.removeClass(o,"pswp__caption--empty")),l&&(l.children[0].onclick=null),e.removeClass(n,"pswp__ui--over-close"),e.addClass(n,"pswp__ui--hidden"),x.setIdle(!1)}),g.showAnimationDuration||e.removeClass(n,"pswp__ui--hidden"),d("initialZoomIn",function(){g.showAnimationDuration&&e.removeClass(n,"pswp__ui--hidden")}),d("initialZoomOut",function(){e.addClass(n,"pswp__ui--hidden")}),d("parseVerticalMargin",V),function(){var t,i,o,a=function(n){if(n)for(var a=n.length,r=0;a>r;r++){t=n[r],i=t.className;for(var s=0;s<W.length;s++)o=W[s],i.indexOf("pswp__"+o.name)>-1&&(g[o.option]?(e.removeClass(t,"pswp__element--disabled"),o.onInit&&o.onInit(t)):e.addClass(t,"pswp__element--disabled"))}};a(n.children);var r=e.getChildByClass(n,"pswp__top-bar");r&&a(r.children)}(),g.shareEl&&s&&l&&(C=!0),I(),g.timeToIdle&&d("mouseUsed",function(){e.bind(document,"mousemove",L),e.bind(document,"mouseout",R),y=setInterval(function(){2==++O&&x.setIdle(!0)},g.timeToIdle/2)}),g.fullscreenEl&&!e.features.isOldAndroid&&(i||(i=x.getFullscreenAPI()),i?(e.bind(document,i.eventK,x.updateFullscreen),x.updateFullscreen(),e.addClass(t.template,"pswp--supports-fs")):e.removeClass(t.template,"pswp--supports-fs")),g.preloaderEl&&(F(!0),d("beforeChange",function(){clearTimeout(f),f=setTimeout(function(){t.currItem&&t.currItem.loading?(!t.allowProgressiveImg()||t.currItem.img&&!t.currItem.img.naturalWidth)&&F(!1):F(!0)},g.loadingIndicatorDelay)}),d("imageLoadComplete",function(e,i){t.currItem===i&&F(!0)}))},x.setIdle=function(t){u=t,M(n,"ui--idle",t)},x.update=function(){k&&t.currItem?(x.updateIndexIndicator(),g.captionEl&&(g.addCaptionHTMLFn(t.currItem,o),M(o,"caption--empty",!t.currItem.title)),w=!0):w=!1,C||A(),I()},x.updateFullscreen=function(n){n&&setTimeout(function(){t.setScrollOffset(0,e.getScrollY())},50),e[(i.isFullscreen()?"add":"remove")+"Class"](t.template,"pswp--fs")},x.updateIndexIndicator=function(){g.counterEl&&(r.innerHTML=t.getCurrentIndex()+1+g.indexIndicatorSep+g.getNumItemsFn())},x.onGlobalTap=function(i){var n=(i=i||window.event).target||i.srcElement;if(!v)if(i.detail&&"mouse"===i.detail.pointerType){if(_(n))return void t.close();e.hasClass(n,"pswp__img")&&(1===t.getZoomLevel()&&t.getZoomLevel()<=t.currItem.fitRatio?g.clickToCloseNonZoomable&&t.close():t.toggleDesktopZoom(i.detail.releasePoint))}else if(g.tapToToggleControls&&(k?x.hideControls():x.showControls()),g.tapToClose&&(e.hasClass(n,"pswp__img")||_(n)))return void t.close()},x.onMouseOver=function(t){var e=(t=t||window.event).target||t.srcElement;M(n,"ui--over-close",_(e))},x.hideControls=function(){e.addClass(n,"pswp__ui--hidden"),k=!1},x.showControls=function(){k=!0,w||x.update(),e.removeClass(n,"pswp__ui--hidden")},x.supportsFullscreen=function(){var t=document;return!!(t.exitFullscreen||t.mozCancelFullScreen||t.webkitExitFullscreen||t.msExitFullscreen)},x.getFullscreenAPI=function(){var e,i=document.documentElement,n="fullscreenchange";return i.requestFullscreen?e={enterK:"requestFullscreen",exitK:"exitFullscreen",elementK:"fullscreenElement",eventK:n}:i.mozRequestFullScreen?e={enterK:"mozRequestFullScreen",exitK:"mozCancelFullScreen",elementK:"mozFullScreenElement",eventK:"moz"+n}:i.webkitRequestFullscreen?e={enterK:"webkitRequestFullscreen",exitK:"webkitExitFullscreen",elementK:"webkitFullscreenElement",eventK:"webkit"+n}:i.msRequestFullscreen&&(e={enterK:"msRequestFullscreen",exitK:"msExitFullscreen",elementK:"msFullscreenElement",eventK:"MSFullscreenChange"}),e&&(e.enter=function(){return c=g.closeOnScroll,g.closeOnScroll=!1,"webkitRequestFullscreen"!==this.enterK?t.template[this.enterK]():void t.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT)},e.exit=function(){return g.closeOnScroll=c,document[this.exitK]()},e.isFullscreen=function(){return document[this.elementK]}),e}}});var initPhotoSwipeFromDOM=function(t){for(var e=function(t){(t=t||window.event).preventDefault?t.preventDefault():t.returnValue=!1;var e=function t(e,i){return e&&(i(e)?e:t(e.parentNode,i))}(t.target||t.srcElement,function(t){return t.tagName&&"FIGURE"===t.tagName.toUpperCase()});if(e){for(var n,o=e.parentNode,a=e.parentNode.childNodes,r=a.length,s=0,l=0;l<r;l++)if(1===a[l].nodeType){if(a[l]===e){n=s;break}s++}return n>=0&&i(n,o),!1}},i=function(t,e,i,n){var o,a,r=document.querySelectorAll(".pswp")[0];if(a=function(t){for(var e,i,n,o,a=t.childNodes,r=a.length,s=[],l=0;l<r;l++)1===(e=a[l]).nodeType&&(n=(i=e.children[0]).getAttribute("data-size").split("x"),o={src:i.getAttribute("href"),w:parseInt(n[0],10),h:parseInt(n[1],10)},e.children.length>1&&(o.title=e.children[1].innerHTML),i.children.length>0&&(o.msrc=i.children[0].getAttribute("src")),o.el=e,s.push(o));return s}(e),o={galleryUID:e.getAttribute("data-pswp-uid"),getThumbBoundsFn:function(t){var e=a[t].el.getElementsByTagName("img")[0],i=window.pageYOffset||document.documentElement.scrollTop,n=e.getBoundingClientRect();return{x:n.left,y:n.top+i,w:n.width}}},n)if(o.galleryPIDs){for(var s=0;s<a.length;s++)if(a[s].pid==t){o.index=s;break}}else o.index=parseInt(t,10)-1;else o.index=parseInt(t,10);isNaN(o.index)||(i&&(o.showAnimationDuration=0),new PhotoSwipe(r,PhotoSwipeUI_Default,a,o).init())},n=document.querySelectorAll(t),o=0,a=n.length;o<a;o++)n[o].setAttribute("data-pswp-uid",o+1),n[o].onclick=e;var r=function(){var t=window.location.hash.substring(1),e={};if(t.length<5)return e;for(var i=t.split("&"),n=0;n<i.length;n++)if(i[n]){var o=i[n].split("=");o.length<2||(e[o[0]]=o[1])}return e.gid&&(e.gid=parseInt(e.gid,10)),e}();r.pid&&r.gid&&i(r.pid,n[r.gid-1],!0,!0)};initPhotoSwipeFromDOM(".mdb-lightbox"),function(t){t.fn.sticky=function(e){var i=t.extend({},{topSpacing:0,zIndex:"",stopper:".sticky-stopper",stickyClass:!1},e);var n="number"==typeof i.zIndex;var o=0<t(i.stopper).length||"number"==typeof i.stopper;return this.each(function(){var e=t(this),a=e.outerHeight(),r=e.outerWidth(),s=i.topSpacing,l=i.zIndex,c=e.offset().top-s,u=t("<div></div>").width(r).height(a).addClass("sticky-placeholder"),d=i.stopper,h=t(window);function p(){var r=h.scrollTop(),p=d,f=e.parent().width();(u.width(f),o&&"string"==typeof d)&&(p=t(d).offset().top-a-s);if(c<r){if(i.stickyClass&&e.addClass(i.stickyClass),e.after(u).css({position:"fixed",top:s,width:f}),n&&e.css({zIndex:l}),o&&p<r){var m=p-r+s;e.css({top:m})}}else i.stickyClass&&e.removeClass(i.stickyClass),e.css({position:"static",top:null,left:null,width:"auto"}),u.remove()}h.innerHeight()>a&&(h.bind("scroll",p),h.bind("load",p),h.bind("resize",p))})}}(jQuery),function t(e,i,n){function o(r,s){if(!i[r]){if(!e[r]){var l="function"==typeof require&&require;if(!s&&l)return l(r,!0);if(a)return a(r,!0);var c=new Error("Cannot find module '"+r+"'");throw c.code="MODULE_NOT_FOUND",c}var u=i[r]={exports:{}};e[r][0].call(u.exports,function(t){var i=e[r][1][t];return o(i||t)},u,u.exports,t,e,i,n)}return i[r].exports}for(var a="function"==typeof require&&require,r=0;r<n.length;r++)o(n[r]);return o}({1:[function(t,e,i){"use strict";var n=t("../main");"function"==typeof define&&define.amd?define(n):(window.PerfectScrollbar=n,void 0===window.Ps&&(window.Ps=n))},{"../main":7}],2:[function(t,e,i){"use strict";i.add=function(t,e){var i,n,o;t.classList?t.classList.add(e):(n=e,(o=(i=t).className.split(" ")).indexOf(n)<0&&o.push(n),i.className=o.join(" "))},i.remove=function(t,e){var i,n,o,a;t.classList?t.classList.remove(e):(n=e,o=(i=t).className.split(" "),(a=o.indexOf(n))>=0&&o.splice(a,1),i.className=o.join(" "))},i.list=function(t){return t.classList?Array.prototype.slice.apply(t.classList):t.className.split(" ")}},{}],3:[function(t,e,i){"use strict";var n={};n.e=function(t,e){var i=document.createElement(t);return i.className=e,i},n.appendTo=function(t,e){return e.appendChild(t),t},n.css=function(t,e,i){return"object"==typeof e?function(t,e){for(var i in e){var n=e[i];"number"==typeof n&&(n=n.toString()+"px"),t.style[i]=n}return t}(t,e):void 0===i?(r=t,s=e,window.getComputedStyle(r)[s]):(n=t,o=e,"number"==typeof(a=i)&&(a=a.toString()+"px"),n.style[o]=a,n);var n,o,a,r,s},n.matches=function(t,e){return void 0!==t.matches?t.matches(e):void 0!==t.matchesSelector?t.matchesSelector(e):void 0!==t.webkitMatchesSelector?t.webkitMatchesSelector(e):void 0!==t.mozMatchesSelector?t.mozMatchesSelector(e):void 0!==t.msMatchesSelector?t.msMatchesSelector(e):void 0},n.remove=function(t){void 0!==t.remove?t.remove():t.parentNode&&t.parentNode.removeChild(t)},n.queryChildren=function(t,e){return Array.prototype.filter.call(t.childNodes,function(t){return n.matches(t,e)})},e.exports=n},{}],4:[function(t,e,i){"use strict";var n=function(t){this.element=t,this.events={}};n.prototype.bind=function(t,e){void 0===this.events[t]&&(this.events[t]=[]),this.events[t].push(e),this.element.addEventListener(t,e,!1)},n.prototype.unbind=function(t,e){var i=void 0!==e;this.events[t]=this.events[t].filter(function(n){return!(!i||n===e)||(this.element.removeEventListener(t,n,!1),!1)},this)},n.prototype.unbindAll=function(){for(var t in this.events)this.unbind(t)};var o=function(){this.eventElements=[]};o.prototype.eventElement=function(t){var e=this.eventElements.filter(function(e){return e.element===t})[0];return void 0===e&&(e=new n(t),this.eventElements.push(e)),e},o.prototype.bind=function(t,e,i){this.eventElement(t).bind(e,i)},o.prototype.unbind=function(t,e,i){this.eventElement(t).unbind(e,i)},o.prototype.unbindAll=function(){for(var t=0;t<this.eventElements.length;t++)this.eventElements[t].unbindAll()},o.prototype.once=function(t,e,i){var n=this.eventElement(t),o=function(t){n.unbind(e,o),i(t)};n.bind(e,o)},e.exports=o},{}],5:[function(t,e,i){"use strict";e.exports=function(){function t(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return function(){return t()+t()+"-"+t()+"-"+t()+"-"+t()+"-"+t()+t()+t()}}()},{}],6:[function(t,e,i){"use strict";function n(t){return function(e,i){t(e,"ps--in-scrolling"),void 0!==i?t(e,"ps--"+i):(t(e,"ps--x"),t(e,"ps--y"))}}var o=t("./class"),a=t("./dom"),r=i.toInt=function(t){return parseInt(t,10)||0},s=i.clone=function(t){if(t){if(Array.isArray(t))return t.map(s);if("object"==typeof t){var e={};for(var i in t)e[i]=s(t[i]);return e}return t}return null};i.extend=function(t,e){var i=s(t);for(var n in e)i[n]=s(e[n]);return i},i.isEditable=function(t){return a.matches(t,"input,[contenteditable]")||a.matches(t,"select,[contenteditable]")||a.matches(t,"textarea,[contenteditable]")||a.matches(t,"button,[contenteditable]")},i.removePsClasses=function(t){for(var e=o.list(t),i=0;i<e.length;i++){var n=e[i];0===n.indexOf("ps-")&&o.remove(t,n)}},i.outerWidth=function(t){return r(a.css(t,"width"))+r(a.css(t,"paddingLeft"))+r(a.css(t,"paddingRight"))+r(a.css(t,"borderLeftWidth"))+r(a.css(t,"borderRightWidth"))},i.startScrolling=n(o.add),i.stopScrolling=n(o.remove),i.env={isWebKit:"undefined"!=typeof document&&"WebkitAppearance"in document.documentElement.style,supportsTouch:"undefined"!=typeof window&&("ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch),supportsIePointer:"undefined"!=typeof window&&null!==window.navigator.msMaxTouchPoints}},{"./class":2,"./dom":3}],7:[function(t,e,i){"use strict";var n=t("./plugin/destroy"),o=t("./plugin/initialize"),a=t("./plugin/update");e.exports={initialize:o,update:a,destroy:n}},{"./plugin/destroy":9,"./plugin/initialize":17,"./plugin/update":21}],8:[function(t,e,i){"use strict";e.exports={handlers:["click-rail","drag-scrollbar","keyboard","wheel","touch"],maxScrollbarLength:null,minScrollbarLength:null,scrollXMarginOffset:0,scrollYMarginOffset:0,suppressScrollX:!1,suppressScrollY:!1,swipePropagation:!0,swipeEasing:!0,useBothWheelAxes:!1,wheelPropagation:!1,wheelSpeed:1,theme:"default"}},{}],9:[function(t,e,i){"use strict";var n=t("../lib/helper"),o=t("../lib/dom"),a=t("./instances");e.exports=function(t){var e=a.get(t);e&&(e.event.unbindAll(),o.remove(e.scrollbarX),o.remove(e.scrollbarY),o.remove(e.scrollbarXRail),o.remove(e.scrollbarYRail),n.removePsClasses(t),a.remove(t))}},{"../lib/dom":3,"../lib/helper":6,"./instances":18}],10:[function(t,e,i){"use strict";var n=t("../instances"),o=t("../update-geometry"),a=t("../update-scroll");e.exports=function(t){!function(t,e){function i(t){return t.getBoundingClientRect()}var n=function(t){t.stopPropagation()};e.event.bind(e.scrollbarY,"click",n),e.event.bind(e.scrollbarYRail,"click",function(n){var r=n.pageY-window.pageYOffset-i(e.scrollbarYRail).top>e.scrollbarYTop?1:-1;a(t,"top",t.scrollTop+r*e.containerHeight),o(t),n.stopPropagation()}),e.event.bind(e.scrollbarX,"click",n),e.event.bind(e.scrollbarXRail,"click",function(n){var r=n.pageX-window.pageXOffset-i(e.scrollbarXRail).left>e.scrollbarXLeft?1:-1;a(t,"left",t.scrollLeft+r*e.containerWidth),o(t),n.stopPropagation()})}(t,n.get(t))}},{"../instances":18,"../update-geometry":19,"../update-scroll":20}],11:[function(t,e,i){"use strict";function n(t,e){var i=null,n=null,o=function(o){(function(n){var o=i+n*e.railXRatio,r=Math.max(0,e.scrollbarXRail.getBoundingClientRect().left)+e.railXRatio*(e.railXWidth-e.scrollbarXWidth);e.scrollbarXLeft=o<0?0:o>r?r:o;var s=a.toInt(e.scrollbarXLeft*(e.contentWidth-e.containerWidth)/(e.containerWidth-e.railXRatio*e.scrollbarXWidth))-e.negativeScrollAdjustment;c(t,"left",s)})(o.pageX-n),l(t),o.stopPropagation(),o.preventDefault()},s=function(){a.stopScrolling(t,"x"),e.event.unbind(e.ownerDocument,"mousemove",o)};e.event.bind(e.scrollbarX,"mousedown",function(l){n=l.pageX,i=a.toInt(r.css(e.scrollbarX,"left"))*e.railXRatio,a.startScrolling(t,"x"),e.event.bind(e.ownerDocument,"mousemove",o),e.event.once(e.ownerDocument,"mouseup",s),l.stopPropagation(),l.preventDefault()})}function o(t,e){var i=null,n=null,o=function(o){(function(n){var o=i+n*e.railYRatio,r=Math.max(0,e.scrollbarYRail.getBoundingClientRect().top)+e.railYRatio*(e.railYHeight-e.scrollbarYHeight);e.scrollbarYTop=o<0?0:o>r?r:o;var s=a.toInt(e.scrollbarYTop*(e.contentHeight-e.containerHeight)/(e.containerHeight-e.railYRatio*e.scrollbarYHeight));c(t,"top",s)})(o.pageY-n),l(t),o.stopPropagation(),o.preventDefault()},s=function(){a.stopScrolling(t,"y"),e.event.unbind(e.ownerDocument,"mousemove",o)};e.event.bind(e.scrollbarY,"mousedown",function(l){n=l.pageY,i=a.toInt(r.css(e.scrollbarY,"top"))*e.railYRatio,a.startScrolling(t,"y"),e.event.bind(e.ownerDocument,"mousemove",o),e.event.once(e.ownerDocument,"mouseup",s),l.stopPropagation(),l.preventDefault()})}var a=t("../../lib/helper"),r=t("../../lib/dom"),s=t("../instances"),l=t("../update-geometry"),c=t("../update-scroll");e.exports=function(t){var e=s.get(t);n(t,e),o(t,e)}},{"../../lib/dom":3,"../../lib/helper":6,"../instances":18,"../update-geometry":19,"../update-scroll":20}],12:[function(t,e,i){"use strict";function n(t,e){var i=!1;e.event.bind(t,"mouseenter",function(){i=!0}),e.event.bind(t,"mouseleave",function(){i=!1});e.event.bind(e.ownerDocument,"keydown",function(n){if(!(n.isDefaultPrevented&&n.isDefaultPrevented()||n.defaultPrevented)){var r=a.matches(e.scrollbarX,":focus")||a.matches(e.scrollbarY,":focus");if(i||r){var c=document.activeElement?document.activeElement:e.ownerDocument.activeElement;if(c){if("IFRAME"===c.tagName)c=c.contentDocument.activeElement;else for(;c.shadowRoot;)c=c.shadowRoot.activeElement;if(o.isEditable(c))return}var u=0,d=0;switch(n.which){case 37:u=n.metaKey?-e.contentWidth:n.altKey?-e.containerWidth:-30;break;case 38:d=n.metaKey?e.contentHeight:n.altKey?e.containerHeight:30;break;case 39:u=n.metaKey?e.contentWidth:n.altKey?e.containerWidth:30;break;case 40:d=n.metaKey?-e.contentHeight:n.altKey?-e.containerHeight:-30;break;case 33:d=90;break;case 32:d=n.shiftKey?90:-90;break;case 34:d=-90;break;case 35:d=n.ctrlKey?-e.contentHeight:-e.containerHeight;break;case 36:d=n.ctrlKey?t.scrollTop:e.containerHeight;break;default:return}l(t,"top",t.scrollTop-d),l(t,"left",t.scrollLeft+u),s(t),function(i,n){var o=t.scrollTop;if(0===i){if(!e.scrollbarYActive)return!1;if(0===o&&n>0||o>=e.contentHeight-e.containerHeight&&n<0)return!e.settings.wheelPropagation}var a=t.scrollLeft;if(0===n){if(!e.scrollbarXActive)return!1;if(0===a&&i<0||a>=e.contentWidth-e.containerWidth&&i>0)return!e.settings.wheelPropagation}return!0}(u,d)&&n.preventDefault()}}})}var o=t("../../lib/helper"),a=t("../../lib/dom"),r=t("../instances"),s=t("../update-geometry"),l=t("../update-scroll");e.exports=function(t){n(t,r.get(t))}},{"../../lib/dom":3,"../../lib/helper":6,"../instances":18,"../update-geometry":19,"../update-scroll":20}],13:[function(t,e,i){"use strict";function n(t,e){function i(i){var o,s,l,c=(s=(o=i).deltaX,l=-1*o.deltaY,void 0!==s&&void 0!==l||(s=-1*o.wheelDeltaX/6,l=o.wheelDeltaY/6),o.deltaMode&&1===o.deltaMode&&(s*=10,l*=10),s!=s&&l!=l&&(s=0,l=o.wheelDelta),o.shiftKey?[-l,-s]:[s,l]),u=c[0],d=c[1];(function(e,i){var n=t.querySelector("textarea:hover, select[multiple]:hover, .ps-child:hover");if(n){var o=window.getComputedStyle(n);if(![o.overflow,o.overflowX,o.overflowY].join("").match(/(scroll|auto)/))return!1;var a=n.scrollHeight-n.clientHeight;if(a>0&&!(0===n.scrollTop&&i>0||n.scrollTop===a&&i<0))return!0;var r=n.scrollLeft-n.clientWidth;if(r>0&&!(0===n.scrollLeft&&e<0||n.scrollLeft===r&&e>0))return!0}return!1})(u,d)||(n=!1,e.settings.useBothWheelAxes?e.scrollbarYActive&&!e.scrollbarXActive?(r(t,"top",d?t.scrollTop-d*e.settings.wheelSpeed:t.scrollTop+u*e.settings.wheelSpeed),n=!0):e.scrollbarXActive&&!e.scrollbarYActive&&(r(t,"left",u?t.scrollLeft+u*e.settings.wheelSpeed:t.scrollLeft-d*e.settings.wheelSpeed),n=!0):(r(t,"top",t.scrollTop-d*e.settings.wheelSpeed),r(t,"left",t.scrollLeft+u*e.settings.wheelSpeed)),a(t),(n=n||function(i,n){var o=t.scrollTop;if(0===i){if(!e.scrollbarYActive)return!1;if(0===o&&n>0||o>=e.contentHeight-e.containerHeight&&n<0)return!e.settings.wheelPropagation}var a=t.scrollLeft;if(0===n){if(!e.scrollbarXActive)return!1;if(0===a&&i<0||a>=e.contentWidth-e.containerWidth&&i>0)return!e.settings.wheelPropagation}return!0}(u,d))&&(i.stopPropagation(),i.preventDefault()))}var n=!1;void 0!==window.onwheel?e.event.bind(t,"wheel",i):void 0!==window.onmousewheel&&e.event.bind(t,"mousewheel",i)}var o=t("../instances"),a=t("../update-geometry"),r=t("../update-scroll");e.exports=function(t){n(t,o.get(t))}},{"../instances":18,"../update-geometry":19,"../update-scroll":20}],14:[function(t,e,i){"use strict";var n=t("../instances"),o=t("../update-geometry");e.exports=function(t){var e,i=n.get(t);e=t,i.event.bind(e,"scroll",function(){o(e)})}},{"../instances":18,"../update-geometry":19}],15:[function(t,e,i){"use strict";function n(t,e){function i(){n&&(clearInterval(n),n=null),o.stopScrolling(t)}var n=null,l={top:0,left:0},c=!1;e.event.bind(e.ownerDocument,"selectionchange",function(){var e;t.contains(0===(e=window.getSelection?window.getSelection():document.getSelection?document.getSelection():"").toString().length?null:e.getRangeAt(0).commonAncestorContainer)?c=!0:(c=!1,i())}),e.event.bind(window,"mouseup",function(){c&&(c=!1,i())}),e.event.bind(window,"keyup",function(){c&&(c=!1,i())}),e.event.bind(window,"mousemove",function(e){if(c){var u={x:e.pageX,y:e.pageY},d={left:t.offsetLeft,right:t.offsetLeft+t.offsetWidth,top:t.offsetTop,bottom:t.offsetTop+t.offsetHeight};u.x<d.left+3?(l.left=-5,o.startScrolling(t,"x")):u.x>d.right-3?(l.left=5,o.startScrolling(t,"x")):l.left=0,u.y<d.top+3?(l.top=d.top+3-u.y<5?-5:-20,o.startScrolling(t,"y")):u.y>d.bottom-3?(l.top=u.y-d.bottom+3<5?5:20,o.startScrolling(t,"y")):l.top=0,0===l.top&&0===l.left?i():n||(n=setInterval(function(){return a.get(t)?(s(t,"top",t.scrollTop+l.top),s(t,"left",t.scrollLeft+l.left),void r(t)):void clearInterval(n)},50))}})}var o=t("../../lib/helper"),a=t("../instances"),r=t("../update-geometry"),s=t("../update-scroll");e.exports=function(t){n(t,a.get(t))}},{"../../lib/helper":6,"../instances":18,"../update-geometry":19,"../update-scroll":20}],16:[function(t,e,i){"use strict";function n(t,e,i,n){function o(e,i){s(t,"top",t.scrollTop-i),s(t,"left",t.scrollLeft-e),r(t)}function l(){b=!0}function c(){b=!1}function u(t){return t.targetTouches?t.targetTouches[0]:t}function d(t){return!(!t.targetTouches||1!==t.targetTouches.length)||!(!t.pointerType||"mouse"===t.pointerType||t.pointerType===t.MSPOINTER_TYPE_MOUSE)}function h(t){if(d(t)){x=!0;var e=u(t);m.pageX=e.pageX,m.pageY=e.pageY,g=(new Date).getTime(),null!==y&&clearInterval(y),t.stopPropagation()}}function p(i){if(!x&&e.settings.swipePropagation&&h(i),!b&&x&&d(i)){var n=u(i),a={pageX:n.pageX,pageY:n.pageY},r=a.pageX-m.pageX,s=a.pageY-m.pageY;o(r,s),m=a;var l=(new Date).getTime(),c=l-g;c>0&&(v.x=r/c,v.y=s/c,g=l),function(i,n){var o=t.scrollTop,a=t.scrollLeft,r=Math.abs(i),s=Math.abs(n);if(s>r){if(n<0&&o===e.contentHeight-e.containerHeight||n>0&&0===o)return!e.settings.swipePropagation}else if(r>s&&(i<0&&a===e.contentWidth-e.containerWidth||i>0&&0===a))return!e.settings.swipePropagation;return!0}(r,s)&&(i.stopPropagation(),i.preventDefault())}}function f(){!b&&x&&(x=!1,e.settings.swipeEasing&&(clearInterval(y),y=setInterval(function(){return a.get(t)&&(v.x||v.y)?Math.abs(v.x)<.01&&Math.abs(v.y)<.01?void clearInterval(y):(o(30*v.x,30*v.y),v.x*=.8,void(v.y*=.8)):void clearInterval(y)},10)))}var m={},g=0,v={},y=null,b=!1,x=!1;i?(e.event.bind(window,"touchstart",l),e.event.bind(window,"touchend",c),e.event.bind(t,"touchstart",h),e.event.bind(t,"touchmove",p),e.event.bind(t,"touchend",f)):n&&(window.PointerEvent?(e.event.bind(window,"pointerdown",l),e.event.bind(window,"pointerup",c),e.event.bind(t,"pointerdown",h),e.event.bind(t,"pointermove",p),e.event.bind(t,"pointerup",f)):window.MSPointerEvent&&(e.event.bind(window,"MSPointerDown",l),e.event.bind(window,"MSPointerUp",c),e.event.bind(t,"MSPointerDown",h),e.event.bind(t,"MSPointerMove",p),e.event.bind(t,"MSPointerUp",f)))}var o=t("../../lib/helper"),a=t("../instances"),r=t("../update-geometry"),s=t("../update-scroll");e.exports=function(t){(o.env.supportsTouch||o.env.supportsIePointer)&&n(t,a.get(t),o.env.supportsTouch,o.env.supportsIePointer)}},{"../../lib/helper":6,"../instances":18,"../update-geometry":19,"../update-scroll":20}],17:[function(t,e,i){"use strict";var n=t("../lib/helper"),o=t("../lib/class"),a=t("./instances"),r=t("./update-geometry"),s={"click-rail":t("./handler/click-rail"),"drag-scrollbar":t("./handler/drag-scrollbar"),keyboard:t("./handler/keyboard"),wheel:t("./handler/mouse-wheel"),touch:t("./handler/touch"),selection:t("./handler/selection")},l=t("./handler/native-scroll");e.exports=function(t,e){e="object"==typeof e?e:{},o.add(t,"ps");var i=a.add(t);i.settings=n.extend(i.settings,e),o.add(t,"ps--theme_"+i.settings.theme),i.settings.handlers.forEach(function(e){s[e](t)}),l(t),r(t)}},{"../lib/class":2,"../lib/helper":6,"./handler/click-rail":10,"./handler/drag-scrollbar":11,"./handler/keyboard":12,"./handler/mouse-wheel":13,"./handler/native-scroll":14,"./handler/selection":15,"./handler/touch":16,"./instances":18,"./update-geometry":19}],18:[function(t,e,i){"use strict";function n(t){return t.getAttribute("data-ps-id")}var o=t("../lib/helper"),a=t("../lib/class"),r=t("./default-setting"),s=t("../lib/dom"),l=t("../lib/event-manager"),c=t("../lib/guid"),u={};i.add=function(t){var e,i=c();return e=i,t.setAttribute("data-ps-id",e),u[i]=new function(t){function e(){a.add(t,"ps--focus")}function i(){a.remove(t,"ps--focus")}var n,c;this.settings=o.clone(r),this.containerWidth=null,this.containerHeight=null,this.contentWidth=null,this.contentHeight=null,this.isRtl="rtl"===s.css(t,"direction"),this.isNegativeScroll=(c=t.scrollLeft,t.scrollLeft=-1,n=t.scrollLeft<0,t.scrollLeft=c,n),this.negativeScrollAdjustment=this.isNegativeScroll?t.scrollWidth-t.clientWidth:0,this.event=new l,this.ownerDocument=t.ownerDocument||document,this.scrollbarXRail=s.appendTo(s.e("div","ps__scrollbar-x-rail"),t),this.scrollbarX=s.appendTo(s.e("div","ps__scrollbar-x"),this.scrollbarXRail),this.scrollbarX.setAttribute("tabindex",0),this.event.bind(this.scrollbarX,"focus",e),this.event.bind(this.scrollbarX,"blur",i),this.scrollbarXActive=null,this.scrollbarXWidth=null,this.scrollbarXLeft=null,this.scrollbarXBottom=o.toInt(s.css(this.scrollbarXRail,"bottom")),this.isScrollbarXUsingBottom=this.scrollbarXBottom==this.scrollbarXBottom,this.scrollbarXTop=this.isScrollbarXUsingBottom?null:o.toInt(s.css(this.scrollbarXRail,"top")),this.railBorderXWidth=o.toInt(s.css(this.scrollbarXRail,"borderLeftWidth"))+o.toInt(s.css(this.scrollbarXRail,"borderRightWidth")),s.css(this.scrollbarXRail,"display","block"),this.railXMarginWidth=o.toInt(s.css(this.scrollbarXRail,"marginLeft"))+o.toInt(s.css(this.scrollbarXRail,"marginRight")),s.css(this.scrollbarXRail,"display",""),this.railXWidth=null,this.railXRatio=null,this.scrollbarYRail=s.appendTo(s.e("div","ps__scrollbar-y-rail"),t),this.scrollbarY=s.appendTo(s.e("div","ps__scrollbar-y"),this.scrollbarYRail),this.scrollbarY.setAttribute("tabindex",0),this.event.bind(this.scrollbarY,"focus",e),this.event.bind(this.scrollbarY,"blur",i),this.scrollbarYActive=null,this.scrollbarYHeight=null,this.scrollbarYTop=null,this.scrollbarYRight=o.toInt(s.css(this.scrollbarYRail,"right")),this.isScrollbarYUsingRight=this.scrollbarYRight==this.scrollbarYRight,this.scrollbarYLeft=this.isScrollbarYUsingRight?null:o.toInt(s.css(this.scrollbarYRail,"left")),this.scrollbarYOuterWidth=this.isRtl?o.outerWidth(this.scrollbarY):null,this.railBorderYWidth=o.toInt(s.css(this.scrollbarYRail,"borderTopWidth"))+o.toInt(s.css(this.scrollbarYRail,"borderBottomWidth")),s.css(this.scrollbarYRail,"display","block"),this.railYMarginHeight=o.toInt(s.css(this.scrollbarYRail,"marginTop"))+o.toInt(s.css(this.scrollbarYRail,"marginBottom")),s.css(this.scrollbarYRail,"display",""),this.railYHeight=null,this.railYRatio=null}(t),u[i]},i.remove=function(t){delete u[n(t)],t.removeAttribute("data-ps-id")},i.get=function(t){return u[n(t)]}},{"../lib/class":2,"../lib/dom":3,"../lib/event-manager":4,"../lib/guid":5,"../lib/helper":6,"./default-setting":8}],19:[function(t,e,i){"use strict";function n(t,e){return t.settings.minScrollbarLength&&(e=Math.max(e,t.settings.minScrollbarLength)),t.settings.maxScrollbarLength&&(e=Math.min(e,t.settings.maxScrollbarLength)),e}var o=t("../lib/helper"),a=t("../lib/class"),r=t("../lib/dom"),s=t("./instances"),l=t("./update-scroll");e.exports=function(t){var e,i=s.get(t);i.containerWidth=t.clientWidth,i.containerHeight=t.clientHeight,i.contentWidth=t.scrollWidth,i.contentHeight=t.scrollHeight,t.contains(i.scrollbarXRail)||((e=r.queryChildren(t,".ps__scrollbar-x-rail")).length>0&&e.forEach(function(t){r.remove(t)}),r.appendTo(i.scrollbarXRail,t)),t.contains(i.scrollbarYRail)||((e=r.queryChildren(t,".ps__scrollbar-y-rail")).length>0&&e.forEach(function(t){r.remove(t)}),r.appendTo(i.scrollbarYRail,t)),!i.settings.suppressScrollX&&i.containerWidth+i.settings.scrollXMarginOffset<i.contentWidth?(i.scrollbarXActive=!0,i.railXWidth=i.containerWidth-i.railXMarginWidth,i.railXRatio=i.containerWidth/i.railXWidth,i.scrollbarXWidth=n(i,o.toInt(i.railXWidth*i.containerWidth/i.contentWidth)),i.scrollbarXLeft=o.toInt((i.negativeScrollAdjustment+t.scrollLeft)*(i.railXWidth-i.scrollbarXWidth)/(i.contentWidth-i.containerWidth))):i.scrollbarXActive=!1,!i.settings.suppressScrollY&&i.containerHeight+i.settings.scrollYMarginOffset<i.contentHeight?(i.scrollbarYActive=!0,i.railYHeight=i.containerHeight-i.railYMarginHeight,i.railYRatio=i.containerHeight/i.railYHeight,i.scrollbarYHeight=n(i,o.toInt(i.railYHeight*i.containerHeight/i.contentHeight)),i.scrollbarYTop=o.toInt(t.scrollTop*(i.railYHeight-i.scrollbarYHeight)/(i.contentHeight-i.containerHeight))):i.scrollbarYActive=!1,i.scrollbarXLeft>=i.railXWidth-i.scrollbarXWidth&&(i.scrollbarXLeft=i.railXWidth-i.scrollbarXWidth),i.scrollbarYTop>=i.railYHeight-i.scrollbarYHeight&&(i.scrollbarYTop=i.railYHeight-i.scrollbarYHeight),function(t,e){var i={width:e.railXWidth};e.isRtl?i.left=e.negativeScrollAdjustment+t.scrollLeft+e.containerWidth-e.contentWidth:i.left=t.scrollLeft,e.isScrollbarXUsingBottom?i.bottom=e.scrollbarXBottom-t.scrollTop:i.top=e.scrollbarXTop+t.scrollTop,r.css(e.scrollbarXRail,i);var n={top:t.scrollTop,height:e.railYHeight};e.isScrollbarYUsingRight?e.isRtl?n.right=e.contentWidth-(e.negativeScrollAdjustment+t.scrollLeft)-e.scrollbarYRight-e.scrollbarYOuterWidth:n.right=e.scrollbarYRight-t.scrollLeft:e.isRtl?n.left=e.negativeScrollAdjustment+t.scrollLeft+2*e.containerWidth-e.contentWidth-e.scrollbarYLeft-e.scrollbarYOuterWidth:n.left=e.scrollbarYLeft+t.scrollLeft,r.css(e.scrollbarYRail,n),r.css(e.scrollbarX,{left:e.scrollbarXLeft,width:e.scrollbarXWidth-e.railBorderXWidth}),r.css(e.scrollbarY,{top:e.scrollbarYTop,height:e.scrollbarYHeight-e.railBorderYWidth})}(t,i),i.scrollbarXActive?a.add(t,"ps--active-x"):(a.remove(t,"ps--active-x"),i.scrollbarXWidth=0,i.scrollbarXLeft=0,l(t,"left",0)),i.scrollbarYActive?a.add(t,"ps--active-y"):(a.remove(t,"ps--active-y"),i.scrollbarYHeight=0,i.scrollbarYTop=0,l(t,"top",0))}},{"../lib/class":2,"../lib/dom":3,"../lib/helper":6,"./instances":18,"./update-scroll":20}],20:[function(t,e,i){"use strict";var n=t("./instances"),o=function(t){var e=document.createEvent("Event");return e.initEvent(t,!0,!0),e};e.exports=function(t,e,i){if(void 0===t)throw"You must provide an element to the update-scroll function";if(void 0===e)throw"You must provide an axis to the update-scroll function";if(void 0===i)throw"You must provide a value to the update-scroll function";"top"===e&&i<=0&&(t.scrollTop=i=0,t.dispatchEvent(o("ps-y-reach-start"))),"left"===e&&i<=0&&(t.scrollLeft=i=0,t.dispatchEvent(o("ps-x-reach-start")));var a=n.get(t);"top"===e&&i>=a.contentHeight-a.containerHeight&&((i=a.contentHeight-a.containerHeight)-t.scrollTop<=1?i=t.scrollTop:t.scrollTop=i,t.dispatchEvent(o("ps-y-reach-end"))),"left"===e&&i>=a.contentWidth-a.containerWidth&&((i=a.contentWidth-a.containerWidth)-t.scrollLeft<=1?i=t.scrollLeft:t.scrollLeft=i,t.dispatchEvent(o("ps-x-reach-end"))),void 0===a.lastTop&&(a.lastTop=t.scrollTop),void 0===a.lastLeft&&(a.lastLeft=t.scrollLeft),"top"===e&&i<a.lastTop&&t.dispatchEvent(o("ps-scroll-up")),"top"===e&&i>a.lastTop&&t.dispatchEvent(o("ps-scroll-down")),"left"===e&&i<a.lastLeft&&t.dispatchEvent(o("ps-scroll-left")),"left"===e&&i>a.lastLeft&&t.dispatchEvent(o("ps-scroll-right")),"top"===e&&i!==a.lastTop&&(t.scrollTop=a.lastTop=i,t.dispatchEvent(o("ps-scroll-y"))),"left"===e&&i!==a.lastLeft&&(t.scrollLeft=a.lastLeft=i,t.dispatchEvent(o("ps-scroll-x")))}},{"./instances":18}],21:[function(t,e,i){"use strict";var n=t("../lib/helper"),o=t("../lib/dom"),a=t("./instances"),r=t("./update-geometry"),s=t("./update-scroll");e.exports=function(t){var e=a.get(t);e&&(e.negativeScrollAdjustment=e.isNegativeScroll?t.scrollWidth-t.clientWidth:0,o.css(e.scrollbarXRail,"display","block"),o.css(e.scrollbarYRail,"display","block"),e.railXMarginWidth=n.toInt(o.css(e.scrollbarXRail,"marginLeft"))+n.toInt(o.css(e.scrollbarXRail,"marginRight")),e.railYMarginHeight=n.toInt(o.css(e.scrollbarYRail,"marginTop"))+n.toInt(o.css(e.scrollbarYRail,"marginBottom")),o.css(e.scrollbarXRail,"display","none"),o.css(e.scrollbarYRail,"display","none"),r(t),s(t,"top",t.scrollTop),s(t,"left",t.scrollLeft),o.css(e.scrollbarXRail,"display",""),o.css(e.scrollbarYRail,"display",""))}},{"../lib/dom":3,"../lib/helper":6,"./instances":18,"./update-geometry":19,"./update-scroll":20}]},{},[1]),function(t){var e=!1,i={data:[],placeholder:"",secondaryPlaceholder:""};t(document).ready(function(){t(document).on("click",".chip .close",function(){var e=t(this);e.closest(".chips").data("initialized")||e.closest(".chip").remove()})}),t.fn.material_chip=function(n){var o=this;return this.$el=t(this),this.$document=t(document),this.SELS={CHIPS:".chips",CHIP:".chip",INPUT:"input",DELETE:".fa",SELECTED_CHIP:".selected"},"data"===n?this.$el.data("chips"):"options"===n?this.$el.data("options"):(this.$el.data("options",t.extend({},i,n)),this.init=function(){var e=0;o.$el.each(function(){var i=t(this);if(!i.data("initialized")){var n=i.data("options");n.data&&n.data instanceof Array||(n.data=[]),i.data("chips",n.data),i.data("index",e),i.data("initialized",!0),i.hasClass(o.SELS.CHIPS)||i.addClass("chips"),o.chips(i),e++}})},this.handleEvents=function(){var e=o.SELS;o.$document.on("click",e.CHIPS,function(i){t(i.target).find(e.INPUT).focus()}),o.$document.on("click",e.CHIP,function(){t(e.CHIP).removeClass("selected"),t(this).toggleClass("selected")}),o.$document.on("keydown",function(i){if(!t(i.target).is("input, textarea")){var n=o.$document.find(e.CHIP+e.SELECTED_CHIP),a=n.closest(e.CHIPS),r=n.siblings(e.CHIP).length,s=void 0;if(n.length){var l=8===i.which||46===i.which,c=37===i.which,u=39===i.which;if(l){i.preventDefault();var d=a.data("index");s=n.index(),o.deleteChip(d,s,a);var h=null;s+1<r?h=s:s!==r&&s+1!==r||(h=r-1),h<0&&(h=null),null!==h&&o.selectChip(d,h,a),r||a.find("input").focus()}else if(c){if((s=n.index()-1)<0)return;t(e.CHIP).removeClass("selected"),o.selectChip(a.data("index"),s,a)}else if(u){if(s=n.index()+1,t(e.CHIP).removeClass("selected"),s>r)return void a.find("input").focus();o.selectChip(a.data("index"),s,a)}}}}),o.$document.on("focusin",e.CHIPS+" "+e.INPUT,function(i){t(i.target).closest(e.CHIPS).addClass("focus"),t(e.CHIP).removeClass("selected")}),o.$document.on("focusout",e.CHIPS+" "+e.INPUT,function(i){t(i.target).closest(e.CHIPS).removeClass("focus")}),o.$document.on("keydown",e.CHIPS+" "+e.INPUT,function(i){var n=t(i.target),a=n.closest(e.CHIPS),r=a.data("index"),s=a.children(e.CHIP).length;if(13===i.which)return i.preventDefault(),o.addChip(r,{tag:n.val()},a),void n.val("");var l=8===i.keyCode||37===i.keyCode,c=""===n.val();return l&&c&&s?(o.selectChip(r,s-1,a),void n.blur()):void 0}),o.$document.on("click",e.CHIPS+" "+e.DELETE,function(i){var n=t(i.target),a=n.closest(e.CHIPS),r=n.closest(e.CHIP);i.stopPropagation(),o.deleteChip(a.data("index"),r.index(),a),a.find("input").focus()})},this.chips=function(t){var e="";t.data("chips").forEach(function(t){e+=o.renderChip(t)}),e+='<input class="input" placeholder="">',t.html(e),o.setPlaceholder(t)},this.renderChip=function(t){if(t.tag){var e='<div class="chip">'+t.tag;return t.image&&(e+=' <img src="'+t.image+'"> '),e+='<i class="close fa fa-times"></i>',e+="</div>"}},this.setPlaceholder=function(t){var e=t.data("options");t.data("chips").length&&e.placeholder?t.find("input").prop("placeholder",e.placeholder):!t.data("chips").length&&e.secondaryPlaceholder&&t.find("input").prop("placeholder",e.secondaryPlaceholder)},this.isValid=function(t,e){for(var i=t.data("chips"),n=!1,o=0;o<i.length;o++)if(i[o].tag===e.tag)return void(n=!0);return""!==e.tag&&!n},this.addChip=function(e,i,n){if(o.isValid(n,i)){var a=o.renderChip(i);n.data("chips").push(i),t(a).insertBefore(n.find("input")),n.trigger("chip.add",i),o.setPlaceholder(n)}},this.deleteChip=function(t,e,i){var n=i.data("chips")[e];i.find(".chip").eq(e).remove(),i.data("chips").splice(e,1),i.trigger("chip.delete",n),o.setPlaceholder(i)},this.selectChip=function(t,e,i){var n=i.find(".chip").eq(e);n&&!1===n.hasClass("selected")&&(n.addClass("selected"),i.trigger("chip.select",i.data("chips")[e]))},this.getChipsElement=function(t,e){return e.eq(t)},this.init(),void(e||(this.handleEvents(),e=!0)))}}(jQuery),function(t){"use strict";Date.now||(Date.now=function(){return(new Date).getTime()}),t.requestAnimationFrame||function(){for(var e=["webkit","moz"],i=0;i<e.length&&!t.requestAnimationFrame;++i){var n=e[i];t.requestAnimationFrame=t[n+"RequestAnimationFrame"],t.cancelAnimationFrame=t[n+"CancelAnimationFrame"]||t[n+"CancelRequestAnimationFrame"]}if(/iP(ad|hone|od).*OS 6/.test(t.navigator.userAgent)||!t.requestAnimationFrame||!t.cancelAnimationFrame){var o=0;t.requestAnimationFrame=function(t){var e=Date.now(),i=Math.max(o+16,e);return setTimeout(function(){t(o=i)},i-e)},t.cancelAnimationFrame=clearTimeout}}();var e=document.createElement("div");function i(t){var i=["O","Moz","ms","Ms","Webkit"],n=i.length;if(void 0!==e.style[t])return!0;for(t=t.charAt(0).toUpperCase()+t.substr(1);--n>-1&&void 0===e.style[i[n]+t];);return n>=0}var n,o,a=i("transform"),r=i("perspective"),s=navigator.userAgent,l=s.toLowerCase().indexOf("android")>-1,c=/iPad|iPhone|iPod/.test(s)&&!t.MSStream,u=s.toLowerCase().indexOf("firefox")>-1,d=s.indexOf("MSIE ")>-1||s.indexOf("Trident/")>-1||s.indexOf("Edge/")>-1,h=document.all&&!t.atob;function p(){n=t.innerWidth||document.documentElement.clientWidth,o=t.innerHeight||document.documentElement.clientHeight}p();var f=[],m=function(){var t=0;return function(e,i){var n;if(this.$item=e,this.defaults={type:"scroll",speed:.5,imgSrc:null,imgWidth:null,imgHeight:null,elementInViewport:null,zIndex:-100,noAndroid:!1,noIos:!0,onScroll:null,onInit:null,onDestroy:null,onCoverImage:null},n=JSON.parse(this.$item.getAttribute("data-jarallax")||"{}"),this.options=this.extend({},this.defaults,n,i),!(!a||l&&this.options.noAndroid||c&&this.options.noIos)){this.options.speed=Math.min(2,Math.max(-1,parseFloat(this.options.speed)));var o=this.options.elementInViewport;o&&"object"==typeof o&&void 0!==o.length&&(o=o[0]),!o instanceof Element&&(o=null),this.options.elementInViewport=o,this.instanceID=t++,this.image={src:this.options.imgSrc||null,$container:null,$item:null,width:this.options.imgWidth||null,height:this.options.imgHeight||null,useImgTag:c||l||d,position:!r||u?"absolute":"fixed"},this.initImg()&&this.init()}}}();function g(t,e,i){t.addEventListener?t.addEventListener(e,i):t.attachEvent("on"+e,function(){i.call(t)})}function v(e){t.requestAnimationFrame(function(){"scroll"!==e.type&&p();for(var t=0,i=f.length;t<i;t++)"scroll"!==e.type&&(f[t].coverImage(),f[t].clipContainer()),f[t].onScroll()})}m.prototype.css=function(e,i){if("string"==typeof i)return t.getComputedStyle?t.getComputedStyle(e).getPropertyValue(i):e.style[i];i.transform&&(r&&(i.transform+=" translateZ(0)"),i.WebkitTransform=i.MozTransform=i.msTransform=i.OTransform=i.transform);for(var n in i)e.style[n]=i[n];return e},m.prototype.extend=function(t){t=t||{};for(var e=1;e<arguments.length;e++)if(arguments[e])for(var i in arguments[e])arguments[e].hasOwnProperty(i)&&(t[i]=arguments[e][i]);return t},m.prototype.initImg=function(){return null===this.image.src&&(this.image.src=this.css(this.$item,"background-image").replace(/^url\(['"]?/g,"").replace(/['"]?\)$/g,"")),!(!this.image.src||"none"===this.image.src)},m.prototype.init=function(){var t=this,e={position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden",pointerEvents:"none"},i={};t.$item.setAttribute("data-jarallax-original-styles",t.$item.getAttribute("style")),"static"===t.css(t.$item,"position")&&t.css(t.$item,{position:"relative"}),"auto"===t.css(t.$item,"z-index")&&t.css(t.$item,{zIndex:0}),t.image.$container=document.createElement("div"),t.css(t.image.$container,e),t.css(t.image.$container,{visibility:"hidden","z-index":t.options.zIndex}),t.image.$container.setAttribute("id","jarallax-container-"+t.instanceID),t.$item.appendChild(t.image.$container),t.image.useImgTag?(t.image.$item=document.createElement("img"),t.image.$item.setAttribute("src",t.image.src),i=t.extend({"max-width":"none"},e,i)):(t.image.$item=document.createElement("div"),i=t.extend({"background-position":"50% 50%","background-size":"100% auto","background-repeat":"no-repeat no-repeat","background-image":'url("'+t.image.src+'")'},e,i));for(var n=0,o=t.$item;null!==o&&o!==document&&0===n;){var a=t.css(o,"-webkit-transform")||t.css(o,"-moz-transform")||t.css(o,"transform");a&&"none"!==a&&(n=1,t.css(t.image.$container,{transform:"translateX(0) translateY(0)"})),o=o.parentNode}function r(){t.coverImage(),t.clipContainer(),t.onScroll(!0),t.options.onInit&&t.options.onInit.call(t),setTimeout(function(){t.$item&&t.css(t.$item,{"background-image":"none","background-attachment":"scroll","background-size":"auto"})},0)}(n||"opacity"===t.options.type||"scale"===t.options.type||"scale-opacity"===t.options.type)&&(t.image.position="absolute"),i.position=t.image.position,t.css(t.image.$item,i),t.image.$container.appendChild(t.image.$item),t.image.width&&t.image.height?r():t.getImageSize(t.image.src,function(e,i){t.image.width=e,t.image.height=i,r()}),f.push(t)},m.prototype.destroy=function(){for(var t=0,e=f.length;t<e;t++)if(f[t].instanceID===this.instanceID){f.splice(t,1);break}var i=this.$item.getAttribute("data-jarallax-original-styles");this.$item.removeAttribute("data-jarallax-original-styles"),"null"===i?this.$item.removeAttribute("style"):this.$item.setAttribute("style",i),this.$clipStyles&&this.$clipStyles.parentNode.removeChild(this.$clipStyles),this.image.$container.parentNode.removeChild(this.image.$container),this.options.onDestroy&&this.options.onDestroy.call(this),delete this.$item.jarallax;for(var n in this)delete this[n]},m.prototype.getImageSize=function(t,e){if(t&&e){var i=new Image;i.onload=function(){e(i.width,i.height)},i.src=t}},m.prototype.clipContainer=function(){if(!h){var t=this.image.$container.getBoundingClientRect(),e=t.width,i=t.height;if(!this.$clipStyles)this.$clipStyles=document.createElement("style"),this.$clipStyles.setAttribute("type","text/css"),this.$clipStyles.setAttribute("id","#jarallax-clip-"+this.instanceID),(document.head||document.getElementsByTagName("head")[0]).appendChild(this.$clipStyles);var n=["#jarallax-container-"+this.instanceID+" {","   clip: rect(0 "+e+"px "+i+"px 0);","   clip: rect(0, "+e+"px, "+i+"px, 0);","}"].join("\n");this.$clipStyles.styleSheet?this.$clipStyles.styleSheet.cssText=n:this.$clipStyles.innerHTML=n}},m.prototype.coverImage=function(){if(this.image.width&&this.image.height){var t=this.image.$container.getBoundingClientRect(),e=t.width,i=t.height,n=t.left,a=this.image.width,r=this.image.height,s=this.options.speed,l="scroll"===this.options.type||"scroll-opacity"===this.options.type,c=0,u=0,d=i,h=0,p=0;l&&(c=s<0?s*Math.max(i,o):s*(i+o),s>1?d=Math.abs(c-o):s<0?d=c/s+Math.abs(c):d+=Math.abs(o-i)*(1-s),c/=2),(u=d*a/r)<e&&(d=(u=e)*r/a),l?(h=n+(e-u)/2,p=(o-d)/2):(h=(e-u)/2,p=(i-d)/2),"absolute"===this.image.position&&(h-=n),this.parallaxScrollDistance=c,this.css(this.image.$item,{width:u+"px",height:d+"px",marginLeft:h+"px",marginTop:p+"px"}),this.options.onCoverImage&&this.options.onCoverImage.call(this)}},m.prototype.isVisible=function(){return this.isElementInViewport||!1},m.prototype.onScroll=function(t){if(this.image.width&&this.image.height){var e=this.$item.getBoundingClientRect(),i=e.top,a=e.height,r={visibility:"visible",backgroundPosition:"50% 50%"},s=e;if(this.options.elementInViewport&&(s=this.options.elementInViewport.getBoundingClientRect()),this.isElementInViewport=s.bottom>=0&&s.right>=0&&s.top<=o&&s.left<=n,t||this.isElementInViewport){var l=Math.max(0,i),c=Math.max(0,a+i),u=Math.max(0,-i),d=Math.max(0,i+a-o),h=Math.max(0,a-(i+a-o)),p=Math.max(0,-i+o-a),f=1-2*(o-i)/(o+a),m=1;if(a<o?m=1-(u||d)/a:c<=o?m=c/o:h<=o&&(m=h/o),"opacity"!==this.options.type&&"scale-opacity"!==this.options.type&&"scroll-opacity"!==this.options.type||(r.transform="",r.opacity=m),"scale"===this.options.type||"scale-opacity"===this.options.type){var g=1;this.options.speed<0?g-=this.options.speed*m:g+=this.options.speed*(1-m),r.transform="scale("+g+")"}if("scroll"===this.options.type||"scroll-opacity"===this.options.type){var v=this.parallaxScrollDistance*f;"absolute"===this.image.position&&(v-=i),r.transform="translateY("+v+"px)"}this.css(this.image.$item,r),this.options.onScroll&&this.options.onScroll.call(this,{section:e,beforeTop:l,beforeTopEnd:c,afterTop:u,beforeBottom:d,beforeBottomEnd:h,afterBottom:p,visiblePercent:m,fromViewportCenter:f})}}},g(t,"scroll",v),g(t,"resize",v),g(t,"orientationchange",v),g(t,"load",v);var y=function(t){("object"==typeof HTMLElement?t instanceof HTMLElement:t&&"object"==typeof t&&null!==t&&1===t.nodeType&&"string"==typeof t.nodeName)&&(t=[t]);for(var e,i=arguments[1],n=Array.prototype.slice.call(arguments,2),o=t.length,a=0;a<o;a++)if("object"==typeof i||void 0===i?t[a].jarallax||(t[a].jarallax=new m(t[a],i)):t[a].jarallax&&(e=t[a].jarallax[i].apply(t[a].jarallax,n)),void 0!==e)return e;return t};y.constructor=m;var b=t.jarallax;if(t.jarallax=y,t.jarallax.noConflict=function(){return t.jarallax=b,this},"undefined"!=typeof jQuery){var x=function(){var e=arguments||[];Array.prototype.unshift.call(e,this);var i=y.apply(t,e);return"object"!=typeof i?i:this};x.constructor=m;var w=jQuery.fn.jarallax;jQuery.fn.jarallax=x,jQuery.fn.jarallax.noConflict=function(){return jQuery.fn.jarallax=w,this}}g(t,"DOMContentLoaded",function(){y(document.querySelectorAll("[data-jarallax], [data-jarallax-video]"))})}(window),function(t){"use strict";function e(){this._done=[],this._fail=[]}function i(t,e,i){t.addEventListener?t.addEventListener(e,i):t.attachEvent("on"+e,function(){i.call(t)})}e.prototype={execute:function(t,e){var i=t.length;for(e=Array.prototype.slice.call(e);i--;)t[i].apply(null,e)},resolve:function(){this.execute(this._done,arguments)},reject:function(){this.execute(this._fail,arguments)},done:function(t){this._done.push(t)},fail:function(t){this._fail.push(t)}};var n=function(){var t=0;return function(e,i){this.url=e,this.options_default={autoplay:1,loop:1,mute:1,controls:0,startTime:0,endTime:0},this.options=function(t){t=t||{};for(var e=1;e<arguments.length;e++)if(arguments[e])for(var i in arguments[e])arguments[e].hasOwnProperty(i)&&(t[i]=arguments[e][i]);return t}({},this.options_default,i),this.videoID=this.parseURL(e),this.videoID&&(this.ID=t++,this.loadAPI(),this.init())}}();n.prototype.parseURL=function(t){var e,i,n=!(!(e=t.match(/.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/))||11!==e[1].length)&&e[1],o=!(!(i=t.match(/https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/))||!i[3])&&i[3],a=function(t){for(var e=t.split(/,(?=mp4\:|webm\:|ogv\:|ogg\:)/),i={},n=0,o=0;o<e.length;o++){var a=e[o].match(/^(mp4|webm|ogv|ogg)\:(.*)/);a&&a[1]&&a[2]&&(i["ogv"===a[1]?"ogg":a[1]]=a[2],n=1)}return!!n&&i}(t);return n?(this.type="youtube",n):o?(this.type="vimeo",o):!!a&&(this.type="local",a)},n.prototype.isValid=function(){return!!this.videoID},n.prototype.on=function(t,e){this.userEventsList=this.userEventsList||[],(this.userEventsList[t]||(this.userEventsList[t]=[])).push(e)},n.prototype.off=function(t,e){if(this.userEventsList&&this.userEventsList[t])if(e)for(var i=0;i<this.userEventsList[t].length;i++)this.userEventsList[t][i]===e&&(this.userEventsList[t][i]=!1);else delete this.userEventsList[t]},n.prototype.fire=function(t){var e=[].slice.call(arguments,1);if(this.userEventsList&&void 0!==this.userEventsList[t])for(var i in this.userEventsList[t])this.userEventsList[t][i]&&this.userEventsList[t][i].apply(this,e)},n.prototype.play=function(t){var e=this;e.player&&("youtube"===e.type&&e.player.playVideo&&(void 0!==t&&e.player.seekTo(t||0),e.player.playVideo()),"vimeo"===e.type&&(void 0!==t&&e.player.setCurrentTime(t),e.player.getPaused().then(function(t){t&&e.player.play()})),"local"===e.type&&(void 0!==t&&(e.player.currentTime=t),e.player.play()))},n.prototype.pause=function(){this.player&&("youtube"===this.type&&this.player.pauseVideo&&this.player.pauseVideo(),"vimeo"===this.type&&this.player.pause(),"local"===this.type&&this.player.pause())},n.prototype.getImageURL=function(t){var e=this;if(e.videoImage)t(e.videoImage);else{if("youtube"===e.type){var i=["maxresdefault","sddefault","hqdefault","0"],n=0,o=new Image;o.onload=function(){120!==(this.naturalWidth||this.width)||n===i.length-1?(e.videoImage="https://img.youtube.com/vi/"+e.videoID+"/"+i[n]+".jpg",t(e.videoImage)):(n++,this.src="https://img.youtube.com/vi/"+e.videoID+"/"+i[n]+".jpg")},o.src="https://img.youtube.com/vi/"+e.videoID+"/"+i[n]+".jpg"}if("vimeo"===e.type){var a=new XMLHttpRequest;a.open("GET","https://vimeo.com/api/v2/video/"+e.videoID+".json",!0),a.onreadystatechange=function(){if(4===this.readyState&&this.status>=200&&this.status<400){var i=JSON.parse(this.responseText);e.videoImage=i[0].thumbnail_large,t(e.videoImage)}},a.send(),a=null}}},n.prototype.getIframe=function(e){var n=this;n.$iframe?e(n.$iframe):n.onAPIready(function(){var o,a,r,s,l,c;if(n.$iframe||((o=document.createElement("div")).style.display="none"),"youtube"===n.type){var u,d;n.playerOptions={},n.playerOptions.videoId=n.videoID,n.playerOptions.playerVars={autohide:1,rel:0,autoplay:0},n.options.controls||(n.playerOptions.playerVars.iv_load_policy=3,n.playerOptions.playerVars.modestbranding=1,n.playerOptions.playerVars.controls=0,n.playerOptions.playerVars.showinfo=0,n.playerOptions.playerVars.disablekb=1),n.playerOptions.events={onReady:function(t){n.options.mute&&t.target.mute(),n.options.autoplay&&n.play(n.options.startTime),n.fire("ready",t)},onStateChange:function(t){n.options.loop&&t.data===YT.PlayerState.ENDED&&n.play(n.options.startTime),u||t.data!==YT.PlayerState.PLAYING||(u=1,n.fire("started",t)),t.data===YT.PlayerState.PLAYING&&n.fire("play",t),t.data===YT.PlayerState.PAUSED&&n.fire("pause",t),t.data===YT.PlayerState.ENDED&&n.fire("end",t),n.options.endTime&&(t.data===YT.PlayerState.PLAYING?d=setInterval(function(){n.options.endTime&&n.player.getCurrentTime()>=n.options.endTime&&(n.options.loop?n.play(n.options.startTime):n.pause())},150):clearInterval(d))}};var h=!n.$iframe;if(h){var p=document.createElement("div");p.setAttribute("id",n.playerID),o.appendChild(p),document.body.appendChild(o)}n.player=n.player||new t.YT.Player(n.playerID,n.playerOptions),h&&(n.$iframe=document.getElementById(n.playerID),n.videoWidth=parseInt(n.$iframe.getAttribute("width"),10)||1280,n.videoHeight=parseInt(n.$iframe.getAttribute("height"),10)||720)}"vimeo"===n.type&&(n.playerOptions="",n.playerOptions+="player_id="+n.playerID,n.playerOptions+="&autopause=0",n.options.controls||(n.playerOptions+="&badge=0&byline=0&portrait=0&title=0"),n.playerOptions+="&autoplay="+(n.options.autoplay?"1":"0"),n.playerOptions+="&loop="+(n.options.loop?1:0),n.$iframe||(n.$iframe=document.createElement("iframe"),n.$iframe.setAttribute("id",n.playerID),n.$iframe.setAttribute("src","https://player.vimeo.com/video/"+n.videoID+"?"+n.playerOptions),n.$iframe.setAttribute("frameborder","0"),o.appendChild(n.$iframe),document.body.appendChild(o)),n.player=n.player||new Vimeo.Player(n.$iframe),n.player.getVideoWidth().then(function(t){n.videoWidth=t||1280}),n.player.getVideoHeight().then(function(t){n.videoHeight=t||720}),n.player.setVolume(n.options.mute?0:100),n.player.on("timeupdate",function(t){a||n.fire("started",t),a=1,n.options.endTime&&n.options.endTime&&t.seconds>=n.options.endTime&&(n.options.loop?n.play(n.options.startTime):n.pause())}),n.player.on("play",function(t){n.fire("play",t),n.options.startTime&&0===t.seconds&&n.play(n.options.startTime)}),n.player.on("pause",function(t){n.fire("pause",t)}),n.player.on("ended",function(t){n.fire("end",t)}),n.player.on("loaded",function(t){n.fire("ready",t)}));if("local"===n.type){if(!n.$iframe){n.$iframe=document.createElement("video"),n.options.mute&&(n.$iframe.muted=!0),n.options.loop&&(n.$iframe.loop=!0),n.$iframe.setAttribute("id",n.playerID),o.appendChild(n.$iframe),document.body.appendChild(o);for(var f in n.videoID)r=n.$iframe,s=n.videoID[f],l="video/"+f,c=void 0,(c=document.createElement("source")).src=s,c.type=l,r.appendChild(c)}var m;n.player=n.player||n.$iframe,i(n.player,"playing",function(t){m||n.fire("started",t),m=1}),i(n.player,"timeupdate",function(){n.options.endTime&&n.options.endTime&&this.currentTime>=n.options.endTime&&(n.options.loop?n.play(n.options.startTime):n.pause())}),i(n.player,"play",function(t){n.fire("play",t)}),i(n.player,"pause",function(t){n.fire("pause",t)}),i(n.player,"ended",function(t){n.fire("end",t)}),i(n.player,"loadedmetadata",function(){n.videoWidth=this.videoWidth||1280,n.videoHeight=this.videoHeight||720,n.fire("ready"),n.options.autoplay&&n.play(n.options.startTime)})}e(n.$iframe)})},n.prototype.init=function(){this.playerID="VideoWorker-"+this.ID};var o=0,a=0;n.prototype.loadAPI=function(){if(!o||!a){var e="";if("youtube"!==this.type||o||(o=1,e="//www.youtube.com/iframe_api"),"vimeo"!==this.type||a||(a=1,e="//player.vimeo.com/api/player.js"),e){"file://"===t.location.origin&&(e="http:"+e);var i=document.createElement("script"),n=document.getElementsByTagName("head")[0];i.src=e,n.appendChild(i),n=null,i=null}}};var r=0,s=0,l=new e,c=new e;n.prototype.onAPIready=function(e){if("youtube"===this.type&&("undefined"!=typeof YT&&0!==YT.loaded||r?"object"==typeof YT&&1===YT.loaded?e():l.done(function(){e()}):(r=1,t.onYouTubeIframeAPIReady=function(){t.onYouTubeIframeAPIReady=null,l.resolve("done"),e()})),"vimeo"===this.type)if("undefined"!=typeof Vimeo||s)"undefined"!=typeof Vimeo?e():c.done(function(){e()});else{s=1;var i=setInterval(function(){"undefined"!=typeof Vimeo&&(clearInterval(i),c.resolve("done"),e())},20)}"local"===this.type&&e()},t.VideoWorker=n}(window),function(){"use strict";if("undefined"!=typeof jarallax){var t=jarallax.constructor,e=t.prototype.init;t.prototype.init=function(){var t=this;e.apply(t),t.video&&t.video.getIframe(function(e){var i=e.parentNode;t.css(e,{position:t.image.position,top:"0px",left:"0px",right:"0px",bottom:"0px",width:"100%",height:"100%",maxWidth:"none",maxHeight:"none",visibility:"hidden",margin:0,zIndex:-1}),t.$video=e,t.image.$container.appendChild(e),i.parentNode.removeChild(i)})};var i=t.prototype.coverImage;t.prototype.coverImage=function(){i.apply(this),this.video&&"IFRAME"===this.image.$item.nodeName&&this.css(this.image.$item,{height:this.image.$item.getBoundingClientRect().height+400+"px",marginTop:-200+parseFloat(this.css(this.image.$item,"margin-top"))+"px"})};var n=t.prototype.initImg;t.prototype.initImg=function(){var t=this,e=n.apply(t);if(t.options.videoSrc||(t.options.videoSrc=t.$item.getAttribute("data-jarallax-video")||!1),t.options.videoSrc){var i=new VideoWorker(t.options.videoSrc,{startTime:t.options.videoStartTime||0,endTime:t.options.videoEndTime||0});if(i.isValid()&&(t.image.useImgTag=!0,i.on("ready",function(){var e=t.onScroll;t.onScroll=function(){e.apply(t),t.isVisible()?i.play():i.pause()}}),i.on("started",function(){t.image.$default_item=t.image.$item,t.image.$item=t.$video,t.image.width=t.options.imgWidth=t.video.videoWidth||1280,t.image.height=t.options.imgHeight=t.video.videoHeight||720,t.coverImage(),t.clipContainer(),t.onScroll(),t.image.$default_item&&(t.image.$default_item.style.display="none")}),t.video=i,"local"!==i.type&&i.getImageURL(function(e){t.image.src=e,t.init()})),"local"!==i.type)return!1;if(!e)return t.image.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",!0}return e};var o=t.prototype.destroy;t.prototype.destroy=function(){o.apply(this)}}}(),$.fn.mdb_autocomplete=function(t){return t=$.extend({data:{}},t),this.each(function(){var e=$(this),i=void 0,n=t.data;Object.keys(n).length&&(i=$('<ul class="mdb-autocomplete-wrap"></ul>')).insertAfter($(this)),e.on("keyup",function(t){var o=e.val();if(i.empty(),o.length)for(var a in n)if(-1!==n[a].toLowerCase().indexOf(o.toLowerCase())){var r=$("<li>"+n[a]+"</li>");i.append(r)}13===t.which&&(i.children(":first").trigger("click"),i.empty()),0===o.length?$(".mdb-autocomplete-clear").css("visibility","hidden"):$(".mdb-autocomplete-clear").css("visibility","visible")}),i.on("click","li",function(){e.val($(this).text()),i.empty()}),$(".mdb-autocomplete-clear").on("click",function(t){t.preventDefault(),e.val(""),$(this).css("visibility","hidden"),i.empty(),$(this).parent().find("label").removeClass("active")})})},$("body").on("shown.bs.modal",".modal",function(){$(".modal-backdrop").length||($modal_dialog=$(this).children(".modal-dialog"),$modal_dialog.hasClass("modal-side")&&($(this).addClass("modal-scrolling"),$("body").addClass("scrollable")),$modal_dialog.hasClass("modal-frame")&&($(this).addClass("modal-content-clickable"),$("body").addClass("scrollable")))}),$("body").on("hidden.bs.modal",".modal",function(){$("body").removeClass("scrollable")});
/*! DataTables 1.10.16
 * ©2008-2017 SpryMedia Ltd - datatables.net/license
 */

/**
 * @summary     DataTables
 * @description Paginate, search and order HTML tables
 * @version     1.10.16
 * @file        jquery.dataTables.js
 * @author      SpryMedia Ltd
 * @contact     www.datatables.net
 * @copyright   Copyright 2008-2017 SpryMedia Ltd.
 *
 * This source file is free software, available under the following license:
 *   MIT license - http://datatables.net/license
 *
 * This source file is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 * or FITNESS FOR A PARTICULAR PURPOSE. See the license files for details.
 *
 * For details please refer to: http://www.datatables.net
 */

/*jslint evil: true, undef: true, browser: true */
/*globals $,require,jQuery,define,_selector_run,_selector_opts,_selector_first,_selector_row_indexes,_ext,_Api,_api_register,_api_registerPlural,_re_new_lines,_re_html,_re_formatted_numeric,_re_escape_regex,_empty,_intVal,_numToDecimal,_isNumber,_isHtml,_htmlNumeric,_pluck,_pluck_order,_range,_stripHtml,_unique,_fnBuildAjax,_fnAjaxUpdate,_fnAjaxParameters,_fnAjaxUpdateDraw,_fnAjaxDataSrc,_fnAddColumn,_fnColumnOptions,_fnAdjustColumnSizing,_fnVisibleToColumnIndex,_fnColumnIndexToVisible,_fnVisbleColumns,_fnGetColumns,_fnColumnTypes,_fnApplyColumnDefs,_fnHungarianMap,_fnCamelToHungarian,_fnLanguageCompat,_fnBrowserDetect,_fnAddData,_fnAddTr,_fnNodeToDataIndex,_fnNodeToColumnIndex,_fnGetCellData,_fnSetCellData,_fnSplitObjNotation,_fnGetObjectDataFn,_fnSetObjectDataFn,_fnGetDataMaster,_fnClearTable,_fnDeleteIndex,_fnInvalidate,_fnGetRowElements,_fnCreateTr,_fnBuildHead,_fnDrawHead,_fnDraw,_fnReDraw,_fnAddOptionsHtml,_fnDetectHeader,_fnGetUniqueThs,_fnFeatureHtmlFilter,_fnFilterComplete,_fnFilterCustom,_fnFilterColumn,_fnFilter,_fnFilterCreateSearch,_fnEscapeRegex,_fnFilterData,_fnFeatureHtmlInfo,_fnUpdateInfo,_fnInfoMacros,_fnInitialise,_fnInitComplete,_fnLengthChange,_fnFeatureHtmlLength,_fnFeatureHtmlPaginate,_fnPageChange,_fnFeatureHtmlProcessing,_fnProcessingDisplay,_fnFeatureHtmlTable,_fnScrollDraw,_fnApplyToChildren,_fnCalculateColumnWidths,_fnThrottle,_fnConvertToWidth,_fnGetWidestNode,_fnGetMaxLenString,_fnStringToCss,_fnSortFlatten,_fnSort,_fnSortAria,_fnSortListener,_fnSortAttachListener,_fnSortingClasses,_fnSortData,_fnSaveState,_fnLoadState,_fnSettingsFromNode,_fnLog,_fnMap,_fnBindAction,_fnCallbackReg,_fnCallbackFire,_fnLengthOverflow,_fnRenderer,_fnDataSource,_fnRowAttributes*/

(function( factory ) {
	"use strict";

	if ( typeof define === 'function' && define.amd ) {
		// AMD
		define( ['jquery'], function ( $ ) {
			return factory( $, window, document );
		} );
	}
	else if ( typeof exports === 'object' ) {
		// CommonJS
		module.exports = function (root, $) {
			if ( ! root ) {
				// CommonJS environments without a window global must pass a
				// root. This will give an error otherwise
				root = window;
			}

			if ( ! $ ) {
				$ = typeof window !== 'undefined' ? // jQuery's factory checks for a global window
					require('jquery') :
					require('jquery')( root );
			}

			return factory( $, root, root.document );
		};
	}
	else {
		// Browser
		factory( jQuery, window, document );
	}
}
(function( $, window, document, undefined ) {
	"use strict";

	/**
	 * DataTables is a plug-in for the jQuery Javascript library. It is a highly
	 * flexible tool, based upon the foundations of progressive enhancement,
	 * which will add advanced interaction controls to any HTML table. For a
	 * full list of features please refer to
	 * [DataTables.net](href="http://datatables.net).
	 *
	 * Note that the `DataTable` object is not a global variable but is aliased
	 * to `jQuery.fn.DataTable` and `jQuery.fn.dataTable` through which it may
	 * be  accessed.
	 *
	 *  @class
	 *  @param {object} [init={}] Configuration object for DataTables. Options
	 *    are defined by {@link DataTable.defaults}
	 *  @requires jQuery 1.7+
	 *
	 *  @example
	 *    // Basic initialisation
	 *    $(document).ready( function {
	 *      $('#example').dataTable();
	 *    } );
	 *
	 *  @example
	 *    // Initialisation with configuration options - in this case, disable
	 *    // pagination and sorting.
	 *    $(document).ready( function {
	 *      $('#example').dataTable( {
	 *        "paginate": false,
	 *        "sort": false
	 *      } );
	 *    } );
	 */
	var DataTable = function ( options )
	{
		/**
		 * Perform a jQuery selector action on the table's TR elements (from the tbody) and
		 * return the resulting jQuery object.
		 *  @param {string|node|jQuery} sSelector jQuery selector or node collection to act on
		 *  @param {object} [oOpts] Optional parameters for modifying the rows to be included
		 *  @param {string} [oOpts.filter=none] Select TR elements that meet the current filter
		 *    criterion ("applied") or all TR elements (i.e. no filter).
		 *  @param {string} [oOpts.order=current] Order of the TR elements in the processed array.
		 *    Can be either 'current', whereby the current sorting of the table is used, or
		 *    'original' whereby the original order the data was read into the table is used.
		 *  @param {string} [oOpts.page=all] Limit the selection to the currently displayed page
		 *    ("current") or not ("all"). If 'current' is given, then order is assumed to be
		 *    'current' and filter is 'applied', regardless of what they might be given as.
		 *  @returns {object} jQuery object, filtered by the given selector.
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Highlight every second row
		 *      oTable.$('tr:odd').css('backgroundColor', 'blue');
		 *    } );
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Filter to rows with 'Webkit' in them, add a background colour and then
		 *      // remove the filter, thus highlighting the 'Webkit' rows only.
		 *      oTable.fnFilter('Webkit');
		 *      oTable.$('tr', {"search": "applied"}).css('backgroundColor', 'blue');
		 *      oTable.fnFilter('');
		 *    } );
		 */
		this.$ = function ( sSelector, oOpts )
		{
			return this.api(true).$( sSelector, oOpts );
		};
		
		
		/**
		 * Almost identical to $ in operation, but in this case returns the data for the matched
		 * rows - as such, the jQuery selector used should match TR row nodes or TD/TH cell nodes
		 * rather than any descendants, so the data can be obtained for the row/cell. If matching
		 * rows are found, the data returned is the original data array/object that was used to
		 * create the row (or a generated array if from a DOM source).
		 *
		 * This method is often useful in-combination with $ where both functions are given the
		 * same parameters and the array indexes will match identically.
		 *  @param {string|node|jQuery} sSelector jQuery selector or node collection to act on
		 *  @param {object} [oOpts] Optional parameters for modifying the rows to be included
		 *  @param {string} [oOpts.filter=none] Select elements that meet the current filter
		 *    criterion ("applied") or all elements (i.e. no filter).
		 *  @param {string} [oOpts.order=current] Order of the data in the processed array.
		 *    Can be either 'current', whereby the current sorting of the table is used, or
		 *    'original' whereby the original order the data was read into the table is used.
		 *  @param {string} [oOpts.page=all] Limit the selection to the currently displayed page
		 *    ("current") or not ("all"). If 'current' is given, then order is assumed to be
		 *    'current' and filter is 'applied', regardless of what they might be given as.
		 *  @returns {array} Data for the matched elements. If any elements, as a result of the
		 *    selector, were not TR, TD or TH elements in the DataTable, they will have a null
		 *    entry in the array.
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Get the data from the first row in the table
		 *      var data = oTable._('tr:first');
		 *
		 *      // Do something useful with the data
		 *      alert( "First cell is: "+data[0] );
		 *    } );
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Filter to 'Webkit' and get all data for
		 *      oTable.fnFilter('Webkit');
		 *      var data = oTable._('tr', {"search": "applied"});
		 *
		 *      // Do something with the data
		 *      alert( data.length+" rows matched the search" );
		 *    } );
		 */
		this._ = function ( sSelector, oOpts )
		{
			return this.api(true).rows( sSelector, oOpts ).data();
		};
		
		
		/**
		 * Create a DataTables Api instance, with the currently selected tables for
		 * the Api's context.
		 * @param {boolean} [traditional=false] Set the API instance's context to be
		 *   only the table referred to by the `DataTable.ext.iApiIndex` option, as was
		 *   used in the API presented by DataTables 1.9- (i.e. the traditional mode),
		 *   or if all tables captured in the jQuery object should be used.
		 * @return {DataTables.Api}
		 */
		this.api = function ( traditional )
		{
			return traditional ?
				new _Api(
					_fnSettingsFromNode( this[ _ext.iApiIndex ] )
				) :
				new _Api( this );
		};
		
		
		/**
		 * Add a single new row or multiple rows of data to the table. Please note
		 * that this is suitable for client-side processing only - if you are using
		 * server-side processing (i.e. "bServerSide": true), then to add data, you
		 * must add it to the data source, i.e. the server-side, through an Ajax call.
		 *  @param {array|object} data The data to be added to the table. This can be:
		 *    <ul>
		 *      <li>1D array of data - add a single row with the data provided</li>
		 *      <li>2D array of arrays - add multiple rows in a single call</li>
		 *      <li>object - data object when using <i>mData</i></li>
		 *      <li>array of objects - multiple data objects when using <i>mData</i></li>
		 *    </ul>
		 *  @param {bool} [redraw=true] redraw the table or not
		 *  @returns {array} An array of integers, representing the list of indexes in
		 *    <i>aoData</i> ({@link DataTable.models.oSettings}) that have been added to
		 *    the table.
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    // Global var for counter
		 *    var giCount = 2;
		 *
		 *    $(document).ready(function() {
		 *      $('#example').dataTable();
		 *    } );
		 *
		 *    function fnClickAddRow() {
		 *      $('#example').dataTable().fnAddData( [
		 *        giCount+".1",
		 *        giCount+".2",
		 *        giCount+".3",
		 *        giCount+".4" ]
		 *      );
		 *
		 *      giCount++;
		 *    }
		 */
		this.fnAddData = function( data, redraw )
		{
			var api = this.api( true );
		
			/* Check if we want to add multiple rows or not */
			var rows = $.isArray(data) && ( $.isArray(data[0]) || $.isPlainObject(data[0]) ) ?
				api.rows.add( data ) :
				api.row.add( data );
		
			if ( redraw === undefined || redraw ) {
				api.draw();
			}
		
			return rows.flatten().toArray();
		};
		
		
		/**
		 * This function will make DataTables recalculate the column sizes, based on the data
		 * contained in the table and the sizes applied to the columns (in the DOM, CSS or
		 * through the sWidth parameter). This can be useful when the width of the table's
		 * parent element changes (for example a window resize).
		 *  @param {boolean} [bRedraw=true] Redraw the table or not, you will typically want to
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable( {
		 *        "sScrollY": "200px",
		 *        "bPaginate": false
		 *      } );
		 *
		 *      $(window).on('resize', function () {
		 *        oTable.fnAdjustColumnSizing();
		 *      } );
		 *    } );
		 */
		this.fnAdjustColumnSizing = function ( bRedraw )
		{
			var api = this.api( true ).columns.adjust();
			var settings = api.settings()[0];
			var scroll = settings.oScroll;
		
			if ( bRedraw === undefined || bRedraw ) {
				api.draw( false );
			}
			else if ( scroll.sX !== "" || scroll.sY !== "" ) {
				/* If not redrawing, but scrolling, we want to apply the new column sizes anyway */
				_fnScrollDraw( settings );
			}
		};
		
		
		/**
		 * Quickly and simply clear a table
		 *  @param {bool} [bRedraw=true] redraw the table or not
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Immediately 'nuke' the current rows (perhaps waiting for an Ajax callback...)
		 *      oTable.fnClearTable();
		 *    } );
		 */
		this.fnClearTable = function( bRedraw )
		{
			var api = this.api( true ).clear();
		
			if ( bRedraw === undefined || bRedraw ) {
				api.draw();
			}
		};
		
		
		/**
		 * The exact opposite of 'opening' a row, this function will close any rows which
		 * are currently 'open'.
		 *  @param {node} nTr the table row to 'close'
		 *  @returns {int} 0 on success, or 1 if failed (can't find the row)
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable;
		 *
		 *      // 'open' an information row when a row is clicked on
		 *      $('#example tbody tr').click( function () {
		 *        if ( oTable.fnIsOpen(this) ) {
		 *          oTable.fnClose( this );
		 *        } else {
		 *          oTable.fnOpen( this, "Temporary row opened", "info_row" );
		 *        }
		 *      } );
		 *
		 *      oTable = $('#example').dataTable();
		 *    } );
		 */
		this.fnClose = function( nTr )
		{
			this.api( true ).row( nTr ).child.hide();
		};
		
		
		/**
		 * Remove a row for the table
		 *  @param {mixed} target The index of the row from aoData to be deleted, or
		 *    the TR element you want to delete
		 *  @param {function|null} [callBack] Callback function
		 *  @param {bool} [redraw=true] Redraw the table or not
		 *  @returns {array} The row that was deleted
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Immediately remove the first row
		 *      oTable.fnDeleteRow( 0 );
		 *    } );
		 */
		this.fnDeleteRow = function( target, callback, redraw )
		{
			var api = this.api( true );
			var rows = api.rows( target );
			var settings = rows.settings()[0];
			var data = settings.aoData[ rows[0][0] ];
		
			rows.remove();
		
			if ( callback ) {
				callback.call( this, settings, data );
			}
		
			if ( redraw === undefined || redraw ) {
				api.draw();
			}
		
			return data;
		};
		
		
		/**
		 * Restore the table to it's original state in the DOM by removing all of DataTables
		 * enhancements, alterations to the DOM structure of the table and event listeners.
		 *  @param {boolean} [remove=false] Completely remove the table from the DOM
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      // This example is fairly pointless in reality, but shows how fnDestroy can be used
		 *      var oTable = $('#example').dataTable();
		 *      oTable.fnDestroy();
		 *    } );
		 */
		this.fnDestroy = function ( remove )
		{
			this.api( true ).destroy( remove );
		};
		
		
		/**
		 * Redraw the table
		 *  @param {bool} [complete=true] Re-filter and resort (if enabled) the table before the draw.
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Re-draw the table - you wouldn't want to do it here, but it's an example :-)
		 *      oTable.fnDraw();
		 *    } );
		 */
		this.fnDraw = function( complete )
		{
			// Note that this isn't an exact match to the old call to _fnDraw - it takes
			// into account the new data, but can hold position.
			this.api( true ).draw( complete );
		};
		
		
		/**
		 * Filter the input based on data
		 *  @param {string} sInput String to filter the table on
		 *  @param {int|null} [iColumn] Column to limit filtering to
		 *  @param {bool} [bRegex=false] Treat as regular expression or not
		 *  @param {bool} [bSmart=true] Perform smart filtering or not
		 *  @param {bool} [bShowGlobal=true] Show the input global filter in it's input box(es)
		 *  @param {bool} [bCaseInsensitive=true] Do case-insensitive matching (true) or not (false)
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Sometime later - filter...
		 *      oTable.fnFilter( 'test string' );
		 *    } );
		 */
		this.fnFilter = function( sInput, iColumn, bRegex, bSmart, bShowGlobal, bCaseInsensitive )
		{
			var api = this.api( true );
		
			if ( iColumn === null || iColumn === undefined ) {
				api.search( sInput, bRegex, bSmart, bCaseInsensitive );
			}
			else {
				api.column( iColumn ).search( sInput, bRegex, bSmart, bCaseInsensitive );
			}
		
			api.draw();
		};
		
		
		/**
		 * Get the data for the whole table, an individual row or an individual cell based on the
		 * provided parameters.
		 *  @param {int|node} [src] A TR row node, TD/TH cell node or an integer. If given as
		 *    a TR node then the data source for the whole row will be returned. If given as a
		 *    TD/TH cell node then iCol will be automatically calculated and the data for the
		 *    cell returned. If given as an integer, then this is treated as the aoData internal
		 *    data index for the row (see fnGetPosition) and the data for that row used.
		 *  @param {int} [col] Optional column index that you want the data of.
		 *  @returns {array|object|string} If mRow is undefined, then the data for all rows is
		 *    returned. If mRow is defined, just data for that row, and is iCol is
		 *    defined, only data for the designated cell is returned.
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    // Row data
		 *    $(document).ready(function() {
		 *      oTable = $('#example').dataTable();
		 *
		 *      oTable.$('tr').click( function () {
		 *        var data = oTable.fnGetData( this );
		 *        // ... do something with the array / object of data for the row
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Individual cell data
		 *    $(document).ready(function() {
		 *      oTable = $('#example').dataTable();
		 *
		 *      oTable.$('td').click( function () {
		 *        var sData = oTable.fnGetData( this );
		 *        alert( 'The cell clicked on had the value of '+sData );
		 *      } );
		 *    } );
		 */
		this.fnGetData = function( src, col )
		{
			var api = this.api( true );
		
			if ( src !== undefined ) {
				var type = src.nodeName ? src.nodeName.toLowerCase() : '';
		
				return col !== undefined || type == 'td' || type == 'th' ?
					api.cell( src, col ).data() :
					api.row( src ).data() || null;
			}
		
			return api.data().toArray();
		};
		
		
		/**
		 * Get an array of the TR nodes that are used in the table's body. Note that you will
		 * typically want to use the '$' API method in preference to this as it is more
		 * flexible.
		 *  @param {int} [iRow] Optional row index for the TR element you want
		 *  @returns {array|node} If iRow is undefined, returns an array of all TR elements
		 *    in the table's body, or iRow is defined, just the TR element requested.
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Get the nodes from the table
		 *      var nNodes = oTable.fnGetNodes( );
		 *    } );
		 */
		this.fnGetNodes = function( iRow )
		{
			var api = this.api( true );
		
			return iRow !== undefined ?
				api.row( iRow ).node() :
				api.rows().nodes().flatten().toArray();
		};
		
		
		/**
		 * Get the array indexes of a particular cell from it's DOM element
		 * and column index including hidden columns
		 *  @param {node} node this can either be a TR, TD or TH in the table's body
		 *  @returns {int} If nNode is given as a TR, then a single index is returned, or
		 *    if given as a cell, an array of [row index, column index (visible),
		 *    column index (all)] is given.
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      $('#example tbody td').click( function () {
		 *        // Get the position of the current data from the node
		 *        var aPos = oTable.fnGetPosition( this );
		 *
		 *        // Get the data array for this row
		 *        var aData = oTable.fnGetData( aPos[0] );
		 *
		 *        // Update the data array and return the value
		 *        aData[ aPos[1] ] = 'clicked';
		 *        this.innerHTML = 'clicked';
		 *      } );
		 *
		 *      // Init DataTables
		 *      oTable = $('#example').dataTable();
		 *    } );
		 */
		this.fnGetPosition = function( node )
		{
			var api = this.api( true );
			var nodeName = node.nodeName.toUpperCase();
		
			if ( nodeName == 'TR' ) {
				return api.row( node ).index();
			}
			else if ( nodeName == 'TD' || nodeName == 'TH' ) {
				var cell = api.cell( node ).index();
		
				return [
					cell.row,
					cell.columnVisible,
					cell.column
				];
			}
			return null;
		};
		
		
		/**
		 * Check to see if a row is 'open' or not.
		 *  @param {node} nTr the table row to check
		 *  @returns {boolean} true if the row is currently open, false otherwise
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable;
		 *
		 *      // 'open' an information row when a row is clicked on
		 *      $('#example tbody tr').click( function () {
		 *        if ( oTable.fnIsOpen(this) ) {
		 *          oTable.fnClose( this );
		 *        } else {
		 *          oTable.fnOpen( this, "Temporary row opened", "info_row" );
		 *        }
		 *      } );
		 *
		 *      oTable = $('#example').dataTable();
		 *    } );
		 */
		this.fnIsOpen = function( nTr )
		{
			return this.api( true ).row( nTr ).child.isShown();
		};
		
		
		/**
		 * This function will place a new row directly after a row which is currently
		 * on display on the page, with the HTML contents that is passed into the
		 * function. This can be used, for example, to ask for confirmation that a
		 * particular record should be deleted.
		 *  @param {node} nTr The table row to 'open'
		 *  @param {string|node|jQuery} mHtml The HTML to put into the row
		 *  @param {string} sClass Class to give the new TD cell
		 *  @returns {node} The row opened. Note that if the table row passed in as the
		 *    first parameter, is not found in the table, this method will silently
		 *    return.
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable;
		 *
		 *      // 'open' an information row when a row is clicked on
		 *      $('#example tbody tr').click( function () {
		 *        if ( oTable.fnIsOpen(this) ) {
		 *          oTable.fnClose( this );
		 *        } else {
		 *          oTable.fnOpen( this, "Temporary row opened", "info_row" );
		 *        }
		 *      } );
		 *
		 *      oTable = $('#example').dataTable();
		 *    } );
		 */
		this.fnOpen = function( nTr, mHtml, sClass )
		{
			return this.api( true )
				.row( nTr )
				.child( mHtml, sClass )
				.show()
				.child()[0];
		};
		
		
		/**
		 * Change the pagination - provides the internal logic for pagination in a simple API
		 * function. With this function you can have a DataTables table go to the next,
		 * previous, first or last pages.
		 *  @param {string|int} mAction Paging action to take: "first", "previous", "next" or "last"
		 *    or page number to jump to (integer), note that page 0 is the first page.
		 *  @param {bool} [bRedraw=true] Redraw the table or not
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *      oTable.fnPageChange( 'next' );
		 *    } );
		 */
		this.fnPageChange = function ( mAction, bRedraw )
		{
			var api = this.api( true ).page( mAction );
		
			if ( bRedraw === undefined || bRedraw ) {
				api.draw(false);
			}
		};
		
		
		/**
		 * Show a particular column
		 *  @param {int} iCol The column whose display should be changed
		 *  @param {bool} bShow Show (true) or hide (false) the column
		 *  @param {bool} [bRedraw=true] Redraw the table or not
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Hide the second column after initialisation
		 *      oTable.fnSetColumnVis( 1, false );
		 *    } );
		 */
		this.fnSetColumnVis = function ( iCol, bShow, bRedraw )
		{
			var api = this.api( true ).column( iCol ).visible( bShow );
		
			if ( bRedraw === undefined || bRedraw ) {
				api.columns.adjust().draw();
			}
		};
		
		
		/**
		 * Get the settings for a particular table for external manipulation
		 *  @returns {object} DataTables settings object. See
		 *    {@link DataTable.models.oSettings}
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *      var oSettings = oTable.fnSettings();
		 *
		 *      // Show an example parameter from the settings
		 *      alert( oSettings._iDisplayStart );
		 *    } );
		 */
		this.fnSettings = function()
		{
			return _fnSettingsFromNode( this[_ext.iApiIndex] );
		};
		
		
		/**
		 * Sort the table by a particular column
		 *  @param {int} iCol the data index to sort on. Note that this will not match the
		 *    'display index' if you have hidden data entries
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Sort immediately with columns 0 and 1
		 *      oTable.fnSort( [ [0,'asc'], [1,'asc'] ] );
		 *    } );
		 */
		this.fnSort = function( aaSort )
		{
			this.api( true ).order( aaSort ).draw();
		};
		
		
		/**
		 * Attach a sort listener to an element for a given column
		 *  @param {node} nNode the element to attach the sort listener to
		 *  @param {int} iColumn the column that a click on this node will sort on
		 *  @param {function} [fnCallback] callback function when sort is run
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *
		 *      // Sort on column 1, when 'sorter' is clicked on
		 *      oTable.fnSortListener( document.getElementById('sorter'), 1 );
		 *    } );
		 */
		this.fnSortListener = function( nNode, iColumn, fnCallback )
		{
			this.api( true ).order.listener( nNode, iColumn, fnCallback );
		};
		
		
		/**
		 * Update a table cell or row - this method will accept either a single value to
		 * update the cell with, an array of values with one element for each column or
		 * an object in the same format as the original data source. The function is
		 * self-referencing in order to make the multi column updates easier.
		 *  @param {object|array|string} mData Data to update the cell/row with
		 *  @param {node|int} mRow TR element you want to update or the aoData index
		 *  @param {int} [iColumn] The column to update, give as null or undefined to
		 *    update a whole row.
		 *  @param {bool} [bRedraw=true] Redraw the table or not
		 *  @param {bool} [bAction=true] Perform pre-draw actions or not
		 *  @returns {int} 0 on success, 1 on error
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *      oTable.fnUpdate( 'Example update', 0, 0 ); // Single cell
		 *      oTable.fnUpdate( ['a', 'b', 'c', 'd', 'e'], $('tbody tr')[0] ); // Row
		 *    } );
		 */
		this.fnUpdate = function( mData, mRow, iColumn, bRedraw, bAction )
		{
			var api = this.api( true );
		
			if ( iColumn === undefined || iColumn === null ) {
				api.row( mRow ).data( mData );
			}
			else {
				api.cell( mRow, iColumn ).data( mData );
			}
		
			if ( bAction === undefined || bAction ) {
				api.columns.adjust();
			}
		
			if ( bRedraw === undefined || bRedraw ) {
				api.draw();
			}
			return 0;
		};
		
		
		/**
		 * Provide a common method for plug-ins to check the version of DataTables being used, in order
		 * to ensure compatibility.
		 *  @param {string} sVersion Version string to check for, in the format "X.Y.Z". Note that the
		 *    formats "X" and "X.Y" are also acceptable.
		 *  @returns {boolean} true if this version of DataTables is greater or equal to the required
		 *    version, or false if this version of DataTales is not suitable
		 *  @method
		 *  @dtopt API
		 *  @deprecated Since v1.10
		 *
		 *  @example
		 *    $(document).ready(function() {
		 *      var oTable = $('#example').dataTable();
		 *      alert( oTable.fnVersionCheck( '1.9.0' ) );
		 *    } );
		 */
		this.fnVersionCheck = _ext.fnVersionCheck;
		

		var _that = this;
		var emptyInit = options === undefined;
		var len = this.length;

		if ( emptyInit ) {
			options = {};
		}

		this.oApi = this.internal = _ext.internal;

		// Extend with old style plug-in API methods
		for ( var fn in DataTable.ext.internal ) {
			if ( fn ) {
				this[fn] = _fnExternApiFunc(fn);
			}
		}

		this.each(function() {
			// For each initialisation we want to give it a clean initialisation
			// object that can be bashed around
			var o = {};
			var oInit = len > 1 ? // optimisation for single table case
				_fnExtend( o, options, true ) :
				options;

			/*global oInit,_that,emptyInit*/
			var i=0, iLen, j, jLen, k, kLen;
			var sId = this.getAttribute( 'id' );
			var bInitHandedOff = false;
			var defaults = DataTable.defaults;
			var $this = $(this);
			
			
			/* Sanity check */
			if ( this.nodeName.toLowerCase() != 'table' )
			{
				_fnLog( null, 0, 'Non-table node initialisation ('+this.nodeName+')', 2 );
				return;
			}
			
			/* Backwards compatibility for the defaults */
			_fnCompatOpts( defaults );
			_fnCompatCols( defaults.column );
			
			/* Convert the camel-case defaults to Hungarian */
			_fnCamelToHungarian( defaults, defaults, true );
			_fnCamelToHungarian( defaults.column, defaults.column, true );
			
			/* Setting up the initialisation object */
			_fnCamelToHungarian( defaults, $.extend( oInit, $this.data() ) );
			
			
			
			/* Check to see if we are re-initialising a table */
			var allSettings = DataTable.settings;
			for ( i=0, iLen=allSettings.length ; i<iLen ; i++ )
			{
				var s = allSettings[i];
			
				/* Base check on table node */
				if ( s.nTable == this || s.nTHead.parentNode == this || (s.nTFoot && s.nTFoot.parentNode == this) )
				{
					var bRetrieve = oInit.bRetrieve !== undefined ? oInit.bRetrieve : defaults.bRetrieve;
					var bDestroy = oInit.bDestroy !== undefined ? oInit.bDestroy : defaults.bDestroy;
			
					if ( emptyInit || bRetrieve )
					{
						return s.oInstance;
					}
					else if ( bDestroy )
					{
						s.oInstance.fnDestroy();
						break;
					}
					else
					{
						_fnLog( s, 0, 'Cannot reinitialise DataTable', 3 );
						return;
					}
				}
			
				/* If the element we are initialising has the same ID as a table which was previously
				 * initialised, but the table nodes don't match (from before) then we destroy the old
				 * instance by simply deleting it. This is under the assumption that the table has been
				 * destroyed by other methods. Anyone using non-id selectors will need to do this manually
				 */
				if ( s.sTableId == this.id )
				{
					allSettings.splice( i, 1 );
					break;
				}
			}
			
			/* Ensure the table has an ID - required for accessibility */
			if ( sId === null || sId === "" )
			{
				sId = "DataTables_Table_"+(DataTable.ext._unique++);
				this.id = sId;
			}
			
			/* Create the settings object for this table and set some of the default parameters */
			var oSettings = $.extend( true, {}, DataTable.models.oSettings, {
				"sDestroyWidth": $this[0].style.width,
				"sInstance":     sId,
				"sTableId":      sId
			} );
			oSettings.nTable = this;
			oSettings.oApi   = _that.internal;
			oSettings.oInit  = oInit;
			
			allSettings.push( oSettings );
			
			// Need to add the instance after the instance after the settings object has been added
			// to the settings array, so we can self reference the table instance if more than one
			oSettings.oInstance = (_that.length===1) ? _that : $this.dataTable();
			
			// Backwards compatibility, before we apply all the defaults
			_fnCompatOpts( oInit );
			
			if ( oInit.oLanguage )
			{
				_fnLanguageCompat( oInit.oLanguage );
			}
			
			// If the length menu is given, but the init display length is not, use the length menu
			if ( oInit.aLengthMenu && ! oInit.iDisplayLength )
			{
				oInit.iDisplayLength = $.isArray( oInit.aLengthMenu[0] ) ?
					oInit.aLengthMenu[0][0] : oInit.aLengthMenu[0];
			}
			
			// Apply the defaults and init options to make a single init object will all
			// options defined from defaults and instance options.
			oInit = _fnExtend( $.extend( true, {}, defaults ), oInit );
			
			
			// Map the initialisation options onto the settings object
			_fnMap( oSettings.oFeatures, oInit, [
				"bPaginate",
				"bLengthChange",
				"bFilter",
				"bSort",
				"bSortMulti",
				"bInfo",
				"bProcessing",
				"bAutoWidth",
				"bSortClasses",
				"bServerSide",
				"bDeferRender"
			] );
			_fnMap( oSettings, oInit, [
				"asStripeClasses",
				"ajax",
				"fnServerData",
				"fnFormatNumber",
				"sServerMethod",
				"aaSorting",
				"aaSortingFixed",
				"aLengthMenu",
				"sPaginationType",
				"sAjaxSource",
				"sAjaxDataProp",
				"iStateDuration",
				"sDom",
				"bSortCellsTop",
				"iTabIndex",
				"fnStateLoadCallback",
				"fnStateSaveCallback",
				"renderer",
				"searchDelay",
				"rowId",
				[ "iCookieDuration", "iStateDuration" ], // backwards compat
				[ "oSearch", "oPreviousSearch" ],
				[ "aoSearchCols", "aoPreSearchCols" ],
				[ "iDisplayLength", "_iDisplayLength" ]
			] );
			_fnMap( oSettings.oScroll, oInit, [
				[ "sScrollX", "sX" ],
				[ "sScrollXInner", "sXInner" ],
				[ "sScrollY", "sY" ],
				[ "bScrollCollapse", "bCollapse" ]
			] );
			_fnMap( oSettings.oLanguage, oInit, "fnInfoCallback" );
			
			/* Callback functions which are array driven */
			_fnCallbackReg( oSettings, 'aoDrawCallback',       oInit.fnDrawCallback,      'user' );
			_fnCallbackReg( oSettings, 'aoServerParams',       oInit.fnServerParams,      'user' );
			_fnCallbackReg( oSettings, 'aoStateSaveParams',    oInit.fnStateSaveParams,   'user' );
			_fnCallbackReg( oSettings, 'aoStateLoadParams',    oInit.fnStateLoadParams,   'user' );
			_fnCallbackReg( oSettings, 'aoStateLoaded',        oInit.fnStateLoaded,       'user' );
			_fnCallbackReg( oSettings, 'aoRowCallback',        oInit.fnRowCallback,       'user' );
			_fnCallbackReg( oSettings, 'aoRowCreatedCallback', oInit.fnCreatedRow,        'user' );
			_fnCallbackReg( oSettings, 'aoHeaderCallback',     oInit.fnHeaderCallback,    'user' );
			_fnCallbackReg( oSettings, 'aoFooterCallback',     oInit.fnFooterCallback,    'user' );
			_fnCallbackReg( oSettings, 'aoInitComplete',       oInit.fnInitComplete,      'user' );
			_fnCallbackReg( oSettings, 'aoPreDrawCallback',    oInit.fnPreDrawCallback,   'user' );
			
			oSettings.rowIdFn = _fnGetObjectDataFn( oInit.rowId );
			
			/* Browser support detection */
			_fnBrowserDetect( oSettings );
			
			var oClasses = oSettings.oClasses;
			
			$.extend( oClasses, DataTable.ext.classes, oInit.oClasses );
			$this.addClass( oClasses.sTable );
			
			
			if ( oSettings.iInitDisplayStart === undefined )
			{
				/* Display start point, taking into account the save saving */
				oSettings.iInitDisplayStart = oInit.iDisplayStart;
				oSettings._iDisplayStart = oInit.iDisplayStart;
			}
			
			if ( oInit.iDeferLoading !== null )
			{
				oSettings.bDeferLoading = true;
				var tmp = $.isArray( oInit.iDeferLoading );
				oSettings._iRecordsDisplay = tmp ? oInit.iDeferLoading[0] : oInit.iDeferLoading;
				oSettings._iRecordsTotal = tmp ? oInit.iDeferLoading[1] : oInit.iDeferLoading;
			}
			
			/* Language definitions */
			var oLanguage = oSettings.oLanguage;
			$.extend( true, oLanguage, oInit.oLanguage );
			
			if ( oLanguage.sUrl )
			{
				/* Get the language definitions from a file - because this Ajax call makes the language
				 * get async to the remainder of this function we use bInitHandedOff to indicate that
				 * _fnInitialise will be fired by the returned Ajax handler, rather than the constructor
				 */
				$.ajax( {
					dataType: 'json',
					url: oLanguage.sUrl,
					success: function ( json ) {
						_fnLanguageCompat( json );
						_fnCamelToHungarian( defaults.oLanguage, json );
						$.extend( true, oLanguage, json );
						_fnInitialise( oSettings );
					},
					error: function () {
						// Error occurred loading language file, continue on as best we can
						_fnInitialise( oSettings );
					}
				} );
				bInitHandedOff = true;
			}
			
			/*
			 * Stripes
			 */
			if ( oInit.asStripeClasses === null )
			{
				oSettings.asStripeClasses =[
					oClasses.sStripeOdd,
					oClasses.sStripeEven
				];
			}
			
			/* Remove row stripe classes if they are already on the table row */
			var stripeClasses = oSettings.asStripeClasses;
			var rowOne = $this.children('tbody').find('tr').eq(0);
			if ( $.inArray( true, $.map( stripeClasses, function(el, i) {
				return rowOne.hasClass(el);
			} ) ) !== -1 ) {
				$('tbody tr', this).removeClass( stripeClasses.join(' ') );
				oSettings.asDestroyStripes = stripeClasses.slice();
			}
			
			/*
			 * Columns
			 * See if we should load columns automatically or use defined ones
			 */
			var anThs = [];
			var aoColumnsInit;
			var nThead = this.getElementsByTagName('thead');
			if ( nThead.length !== 0 )
			{
				_fnDetectHeader( oSettings.aoHeader, nThead[0] );
				anThs = _fnGetUniqueThs( oSettings );
			}
			
			/* If not given a column array, generate one with nulls */
			if ( oInit.aoColumns === null )
			{
				aoColumnsInit = [];
				for ( i=0, iLen=anThs.length ; i<iLen ; i++ )
				{
					aoColumnsInit.push( null );
				}
			}
			else
			{
				aoColumnsInit = oInit.aoColumns;
			}
			
			/* Add the columns */
			for ( i=0, iLen=aoColumnsInit.length ; i<iLen ; i++ )
			{
				_fnAddColumn( oSettings, anThs ? anThs[i] : null );
			}
			
			/* Apply the column definitions */
			_fnApplyColumnDefs( oSettings, oInit.aoColumnDefs, aoColumnsInit, function (iCol, oDef) {
				_fnColumnOptions( oSettings, iCol, oDef );
			} );
			
			/* HTML5 attribute detection - build an mData object automatically if the
			 * attributes are found
			 */
			if ( rowOne.length ) {
				var a = function ( cell, name ) {
					return cell.getAttribute( 'data-'+name ) !== null ? name : null;
				};
			
				$( rowOne[0] ).children('th, td').each( function (i, cell) {
					var col = oSettings.aoColumns[i];
			
					if ( col.mData === i ) {
						var sort = a( cell, 'sort' ) || a( cell, 'order' );
						var filter = a( cell, 'filter' ) || a( cell, 'search' );
			
						if ( sort !== null || filter !== null ) {
							col.mData = {
								_:      i+'.display',
								sort:   sort !== null   ? i+'.@data-'+sort   : undefined,
								type:   sort !== null   ? i+'.@data-'+sort   : undefined,
								filter: filter !== null ? i+'.@data-'+filter : undefined
							};
			
							_fnColumnOptions( oSettings, i );
						}
					}
				} );
			}
			
			var features = oSettings.oFeatures;
			var loadedInit = function () {
				/*
				 * Sorting
				 * @todo For modularisation (1.11) this needs to do into a sort start up handler
				 */
			
				// If aaSorting is not defined, then we use the first indicator in asSorting
				// in case that has been altered, so the default sort reflects that option
				if ( oInit.aaSorting === undefined ) {
					var sorting = oSettings.aaSorting;
					for ( i=0, iLen=sorting.length ; i<iLen ; i++ ) {
						sorting[i][1] = oSettings.aoColumns[ i ].asSorting[0];
					}
				}
			
				/* Do a first pass on the sorting classes (allows any size changes to be taken into
				 * account, and also will apply sorting disabled classes if disabled
				 */
				_fnSortingClasses( oSettings );
			
				if ( features.bSort ) {
					_fnCallbackReg( oSettings, 'aoDrawCallback', function () {
						if ( oSettings.bSorted ) {
							var aSort = _fnSortFlatten( oSettings );
							var sortedColumns = {};
			
							$.each( aSort, function (i, val) {
								sortedColumns[ val.src ] = val.dir;
							} );
			
							_fnCallbackFire( oSettings, null, 'order', [oSettings, aSort, sortedColumns] );
							_fnSortAria( oSettings );
						}
					} );
				}
			
				_fnCallbackReg( oSettings, 'aoDrawCallback', function () {
					if ( oSettings.bSorted || _fnDataSource( oSettings ) === 'ssp' || features.bDeferRender ) {
						_fnSortingClasses( oSettings );
					}
				}, 'sc' );
			
			
				/*
				 * Final init
				 * Cache the header, body and footer as required, creating them if needed
				 */
			
				// Work around for Webkit bug 83867 - store the caption-side before removing from doc
				var captions = $this.children('caption').each( function () {
					this._captionSide = $(this).css('caption-side');
				} );
			
				var thead = $this.children('thead');
				if ( thead.length === 0 ) {
					thead = $('<thead/>').appendTo($this);
				}
				oSettings.nTHead = thead[0];
			
				var tbody = $this.children('tbody');
				if ( tbody.length === 0 ) {
					tbody = $('<tbody/>').appendTo($this);
				}
				oSettings.nTBody = tbody[0];
			
				var tfoot = $this.children('tfoot');
				if ( tfoot.length === 0 && captions.length > 0 && (oSettings.oScroll.sX !== "" || oSettings.oScroll.sY !== "") ) {
					// If we are a scrolling table, and no footer has been given, then we need to create
					// a tfoot element for the caption element to be appended to
					tfoot = $('<tfoot/>').appendTo($this);
				}
			
				if ( tfoot.length === 0 || tfoot.children().length === 0 ) {
					$this.addClass( oClasses.sNoFooter );
				}
				else if ( tfoot.length > 0 ) {
					oSettings.nTFoot = tfoot[0];
					_fnDetectHeader( oSettings.aoFooter, oSettings.nTFoot );
				}
			
				/* Check if there is data passing into the constructor */
				if ( oInit.aaData ) {
					for ( i=0 ; i<oInit.aaData.length ; i++ ) {
						_fnAddData( oSettings, oInit.aaData[ i ] );
					}
				}
				else if ( oSettings.bDeferLoading || _fnDataSource( oSettings ) == 'dom' ) {
					/* Grab the data from the page - only do this when deferred loading or no Ajax
					 * source since there is no point in reading the DOM data if we are then going
					 * to replace it with Ajax data
					 */
					_fnAddTr( oSettings, $(oSettings.nTBody).children('tr') );
				}
			
				/* Copy the data index array */
				oSettings.aiDisplay = oSettings.aiDisplayMaster.slice();
			
				/* Initialisation complete - table can be drawn */
				oSettings.bInitialised = true;
			
				/* Check if we need to initialise the table (it might not have been handed off to the
				 * language processor)
				 */
				if ( bInitHandedOff === false ) {
					_fnInitialise( oSettings );
				}
			};
			
			/* Must be done after everything which can be overridden by the state saving! */
			if ( oInit.bStateSave )
			{
				features.bStateSave = true;
				_fnCallbackReg( oSettings, 'aoDrawCallback', _fnSaveState, 'state_save' );
				_fnLoadState( oSettings, oInit, loadedInit );
			}
			else {
				loadedInit();
			}
			
		} );
		_that = null;
		return this;
	};

	
	/*
	 * It is useful to have variables which are scoped locally so only the
	 * DataTables functions can access them and they don't leak into global space.
	 * At the same time these functions are often useful over multiple files in the
	 * core and API, so we list, or at least document, all variables which are used
	 * by DataTables as private variables here. This also ensures that there is no
	 * clashing of variable names and that they can easily referenced for reuse.
	 */
	
	
	// Defined else where
	//  _selector_run
	//  _selector_opts
	//  _selector_first
	//  _selector_row_indexes
	
	var _ext; // DataTable.ext
	var _Api; // DataTable.Api
	var _api_register; // DataTable.Api.register
	var _api_registerPlural; // DataTable.Api.registerPlural
	
	var _re_dic = {};
	var _re_new_lines = /[\r\n]/g;
	var _re_html = /<.*?>/g;
	
	// This is not strict ISO8601 - Date.parse() is quite lax, although
	// implementations differ between browsers.
	var _re_date = /^\d{2,4}[\.\/\-]\d{1,2}[\.\/\-]\d{1,2}([T ]{1}\d{1,2}[:\.]\d{2}([\.:]\d{2})?)?$/;
	
	// Escape regular expression special characters
	var _re_escape_regex = new RegExp( '(\\' + [ '/', '.', '*', '+', '?', '|', '(', ')', '[', ']', '{', '}', '\\', '$', '^', '-' ].join('|\\') + ')', 'g' );
	
	// http://en.wikipedia.org/wiki/Foreign_exchange_market
	// - \u20BD - Russian ruble.
	// - \u20a9 - South Korean Won
	// - \u20BA - Turkish Lira
	// - \u20B9 - Indian Rupee
	// - R - Brazil (R$) and South Africa
	// - fr - Swiss Franc
	// - kr - Swedish krona, Norwegian krone and Danish krone
	// - \u2009 is thin space and \u202F is narrow no-break space, both used in many
	//   standards as thousands separators.
	var _re_formatted_numeric = /[',$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfk]/gi;
	
	
	var _empty = function ( d ) {
		return !d || d === true || d === '-' ? true : false;
	};
	
	
	var _intVal = function ( s ) {
		var integer = parseInt( s, 10 );
		return !isNaN(integer) && isFinite(s) ? integer : null;
	};
	
	// Convert from a formatted number with characters other than `.` as the
	// decimal place, to a Javascript number
	var _numToDecimal = function ( num, decimalPoint ) {
		// Cache created regular expressions for speed as this function is called often
		if ( ! _re_dic[ decimalPoint ] ) {
			_re_dic[ decimalPoint ] = new RegExp( _fnEscapeRegex( decimalPoint ), 'g' );
		}
		return typeof num === 'string' && decimalPoint !== '.' ?
			num.replace( /\./g, '' ).replace( _re_dic[ decimalPoint ], '.' ) :
			num;
	};
	
	
	var _isNumber = function ( d, decimalPoint, formatted ) {
		var strType = typeof d === 'string';
	
		// If empty return immediately so there must be a number if it is a
		// formatted string (this stops the string "k", or "kr", etc being detected
		// as a formatted number for currency
		if ( _empty( d ) ) {
			return true;
		}
	
		if ( decimalPoint && strType ) {
			d = _numToDecimal( d, decimalPoint );
		}
	
		if ( formatted && strType ) {
			d = d.replace( _re_formatted_numeric, '' );
		}
	
		return !isNaN( parseFloat(d) ) && isFinite( d );
	};
	
	
	// A string without HTML in it can be considered to be HTML still
	var _isHtml = function ( d ) {
		return _empty( d ) || typeof d === 'string';
	};
	
	
	var _htmlNumeric = function ( d, decimalPoint, formatted ) {
		if ( _empty( d ) ) {
			return true;
		}
	
		var html = _isHtml( d );
		return ! html ?
			null :
			_isNumber( _stripHtml( d ), decimalPoint, formatted ) ?
				true :
				null;
	};
	
	
	var _pluck = function ( a, prop, prop2 ) {
		var out = [];
		var i=0, ien=a.length;
	
		// Could have the test in the loop for slightly smaller code, but speed
		// is essential here
		if ( prop2 !== undefined ) {
			for ( ; i<ien ; i++ ) {
				if ( a[i] && a[i][ prop ] ) {
					out.push( a[i][ prop ][ prop2 ] );
				}
			}
		}
		else {
			for ( ; i<ien ; i++ ) {
				if ( a[i] ) {
					out.push( a[i][ prop ] );
				}
			}
		}
	
		return out;
	};
	
	
	// Basically the same as _pluck, but rather than looping over `a` we use `order`
	// as the indexes to pick from `a`
	var _pluck_order = function ( a, order, prop, prop2 )
	{
		var out = [];
		var i=0, ien=order.length;
	
		// Could have the test in the loop for slightly smaller code, but speed
		// is essential here
		if ( prop2 !== undefined ) {
			for ( ; i<ien ; i++ ) {
				if ( a[ order[i] ][ prop ] ) {
					out.push( a[ order[i] ][ prop ][ prop2 ] );
				}
			}
		}
		else {
			for ( ; i<ien ; i++ ) {
				out.push( a[ order[i] ][ prop ] );
			}
		}
	
		return out;
	};
	
	
	var _range = function ( len, start )
	{
		var out = [];
		var end;
	
		if ( start === undefined ) {
			start = 0;
			end = len;
		}
		else {
			end = start;
			start = len;
		}
	
		for ( var i=start ; i<end ; i++ ) {
			out.push( i );
		}
	
		return out;
	};
	
	
	var _removeEmpty = function ( a )
	{
		var out = [];
	
		for ( var i=0, ien=a.length ; i<ien ; i++ ) {
			if ( a[i] ) { // careful - will remove all falsy values!
				out.push( a[i] );
			}
		}
	
		return out;
	};
	
	
	var _stripHtml = function ( d ) {
		return d.replace( _re_html, '' );
	};
	
	
	/**
	 * Determine if all values in the array are unique. This means we can short
	 * cut the _unique method at the cost of a single loop. A sorted array is used
	 * to easily check the values.
	 *
	 * @param  {array} src Source array
	 * @return {boolean} true if all unique, false otherwise
	 * @ignore
	 */
	var _areAllUnique = function ( src ) {
		if ( src.length < 2 ) {
			return true;
		}
	
		var sorted = src.slice().sort();
		var last = sorted[0];
	
		for ( var i=1, ien=sorted.length ; i<ien ; i++ ) {
			if ( sorted[i] === last ) {
				return false;
			}
	
			last = sorted[i];
		}
	
		return true;
	};
	
	
	/**
	 * Find the unique elements in a source array.
	 *
	 * @param  {array} src Source array
	 * @return {array} Array of unique items
	 * @ignore
	 */
	var _unique = function ( src )
	{
		if ( _areAllUnique( src ) ) {
			return src.slice();
		}
	
		// A faster unique method is to use object keys to identify used values,
		// but this doesn't work with arrays or objects, which we must also
		// consider. See jsperf.com/compare-array-unique-versions/4 for more
		// information.
		var
			out = [],
			val,
			i, ien=src.length,
			j, k=0;
	
		again: for ( i=0 ; i<ien ; i++ ) {
			val = src[i];
	
			for ( j=0 ; j<k ; j++ ) {
				if ( out[j] === val ) {
					continue again;
				}
			}
	
			out.push( val );
			k++;
		}
	
		return out;
	};
	
	
	/**
	 * DataTables utility methods
	 * 
	 * This namespace provides helper methods that DataTables uses internally to
	 * create a DataTable, but which are not exclusively used only for DataTables.
	 * These methods can be used by extension authors to save the duplication of
	 * code.
	 *
	 *  @namespace
	 */
	DataTable.util = {
		/**
		 * Throttle the calls to a function. Arguments and context are maintained
		 * for the throttled function.
		 *
		 * @param {function} fn Function to be called
		 * @param {integer} freq Call frequency in mS
		 * @return {function} Wrapped function
		 */
		throttle: function ( fn, freq ) {
			var
				frequency = freq !== undefined ? freq : 200,
				last,
				timer;
	
			return function () {
				var
					that = this,
					now  = +new Date(),
					args = arguments;
	
				if ( last && now < last + frequency ) {
					clearTimeout( timer );
	
					timer = setTimeout( function () {
						last = undefined;
						fn.apply( that, args );
					}, frequency );
				}
				else {
					last = now;
					fn.apply( that, args );
				}
			};
		},
	
	
		/**
		 * Escape a string such that it can be used in a regular expression
		 *
		 *  @param {string} val string to escape
		 *  @returns {string} escaped string
		 */
		escapeRegex: function ( val ) {
			return val.replace( _re_escape_regex, '\\$1' );
		}
	};
	
	
	
	/**
	 * Create a mapping object that allows camel case parameters to be looked up
	 * for their Hungarian counterparts. The mapping is stored in a private
	 * parameter called `_hungarianMap` which can be accessed on the source object.
	 *  @param {object} o
	 *  @memberof DataTable#oApi
	 */
	function _fnHungarianMap ( o )
	{
		var
			hungarian = 'a aa ai ao as b fn i m o s ',
			match,
			newKey,
			map = {};
	
		$.each( o, function (key, val) {
			match = key.match(/^([^A-Z]+?)([A-Z])/);
	
			if ( match && hungarian.indexOf(match[1]+' ') !== -1 )
			{
				newKey = key.replace( match[0], match[2].toLowerCase() );
				map[ newKey ] = key;
	
				if ( match[1] === 'o' )
				{
					_fnHungarianMap( o[key] );
				}
			}
		} );
	
		o._hungarianMap = map;
	}
	
	
	/**
	 * Convert from camel case parameters to Hungarian, based on a Hungarian map
	 * created by _fnHungarianMap.
	 *  @param {object} src The model object which holds all parameters that can be
	 *    mapped.
	 *  @param {object} user The object to convert from camel case to Hungarian.
	 *  @param {boolean} force When set to `true`, properties which already have a
	 *    Hungarian value in the `user` object will be overwritten. Otherwise they
	 *    won't be.
	 *  @memberof DataTable#oApi
	 */
	function _fnCamelToHungarian ( src, user, force )
	{
		if ( ! src._hungarianMap ) {
			_fnHungarianMap( src );
		}
	
		var hungarianKey;
	
		$.each( user, function (key, val) {
			hungarianKey = src._hungarianMap[ key ];
	
			if ( hungarianKey !== undefined && (force || user[hungarianKey] === undefined) )
			{
				// For objects, we need to buzz down into the object to copy parameters
				if ( hungarianKey.charAt(0) === 'o' )
				{
					// Copy the camelCase options over to the hungarian
					if ( ! user[ hungarianKey ] ) {
						user[ hungarianKey ] = {};
					}
					$.extend( true, user[hungarianKey], user[key] );
	
					_fnCamelToHungarian( src[hungarianKey], user[hungarianKey], force );
				}
				else {
					user[hungarianKey] = user[ key ];
				}
			}
		} );
	}
	
	
	/**
	 * Language compatibility - when certain options are given, and others aren't, we
	 * need to duplicate the values over, in order to provide backwards compatibility
	 * with older language files.
	 *  @param {object} oSettings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnLanguageCompat( lang )
	{
		var defaults = DataTable.defaults.oLanguage;
		var zeroRecords = lang.sZeroRecords;
	
		/* Backwards compatibility - if there is no sEmptyTable given, then use the same as
		 * sZeroRecords - assuming that is given.
		 */
		if ( ! lang.sEmptyTable && zeroRecords &&
			defaults.sEmptyTable === "No data available in table" )
		{
			_fnMap( lang, lang, 'sZeroRecords', 'sEmptyTable' );
		}
	
		/* Likewise with loading records */
		if ( ! lang.sLoadingRecords && zeroRecords &&
			defaults.sLoadingRecords === "Loading..." )
		{
			_fnMap( lang, lang, 'sZeroRecords', 'sLoadingRecords' );
		}
	
		// Old parameter name of the thousands separator mapped onto the new
		if ( lang.sInfoThousands ) {
			lang.sThousands = lang.sInfoThousands;
		}
	
		var decimal = lang.sDecimal;
		if ( decimal ) {
			_addNumericSort( decimal );
		}
	}
	
	
	/**
	 * Map one parameter onto another
	 *  @param {object} o Object to map
	 *  @param {*} knew The new parameter name
	 *  @param {*} old The old parameter name
	 */
	var _fnCompatMap = function ( o, knew, old ) {
		if ( o[ knew ] !== undefined ) {
			o[ old ] = o[ knew ];
		}
	};
	
	
	/**
	 * Provide backwards compatibility for the main DT options. Note that the new
	 * options are mapped onto the old parameters, so this is an external interface
	 * change only.
	 *  @param {object} init Object to map
	 */
	function _fnCompatOpts ( init )
	{
		_fnCompatMap( init, 'ordering',      'bSort' );
		_fnCompatMap( init, 'orderMulti',    'bSortMulti' );
		_fnCompatMap( init, 'orderClasses',  'bSortClasses' );
		_fnCompatMap( init, 'orderCellsTop', 'bSortCellsTop' );
		_fnCompatMap( init, 'order',         'aaSorting' );
		_fnCompatMap( init, 'orderFixed',    'aaSortingFixed' );
		_fnCompatMap( init, 'paging',        'bPaginate' );
		_fnCompatMap( init, 'pagingType',    'sPaginationType' );
		_fnCompatMap( init, 'pageLength',    'iDisplayLength' );
		_fnCompatMap( init, 'searching',     'bFilter' );
	
		// Boolean initialisation of x-scrolling
		if ( typeof init.sScrollX === 'boolean' ) {
			init.sScrollX = init.sScrollX ? '100%' : '';
		}
		if ( typeof init.scrollX === 'boolean' ) {
			init.scrollX = init.scrollX ? '100%' : '';
		}
	
		// Column search objects are in an array, so it needs to be converted
		// element by element
		var searchCols = init.aoSearchCols;
	
		if ( searchCols ) {
			for ( var i=0, ien=searchCols.length ; i<ien ; i++ ) {
				if ( searchCols[i] ) {
					_fnCamelToHungarian( DataTable.models.oSearch, searchCols[i] );
				}
			}
		}
	}
	
	
	/**
	 * Provide backwards compatibility for column options. Note that the new options
	 * are mapped onto the old parameters, so this is an external interface change
	 * only.
	 *  @param {object} init Object to map
	 */
	function _fnCompatCols ( init )
	{
		_fnCompatMap( init, 'orderable',     'bSortable' );
		_fnCompatMap( init, 'orderData',     'aDataSort' );
		_fnCompatMap( init, 'orderSequence', 'asSorting' );
		_fnCompatMap( init, 'orderDataType', 'sortDataType' );
	
		// orderData can be given as an integer
		var dataSort = init.aDataSort;
		if ( typeof dataSort === 'number' && ! $.isArray( dataSort ) ) {
			init.aDataSort = [ dataSort ];
		}
	}
	
	
	/**
	 * Browser feature detection for capabilities, quirks
	 *  @param {object} settings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnBrowserDetect( settings )
	{
		// We don't need to do this every time DataTables is constructed, the values
		// calculated are specific to the browser and OS configuration which we
		// don't expect to change between initialisations
		if ( ! DataTable.__browser ) {
			var browser = {};
			DataTable.__browser = browser;
	
			// Scrolling feature / quirks detection
			var n = $('<div/>')
				.css( {
					position: 'fixed',
					top: 0,
					left: $(window).scrollLeft()*-1, // allow for scrolling
					height: 1,
					width: 1,
					overflow: 'hidden'
				} )
				.append(
					$('<div/>')
						.css( {
							position: 'absolute',
							top: 1,
							left: 1,
							width: 100,
							overflow: 'scroll'
						} )
						.append(
							$('<div/>')
								.css( {
									width: '100%',
									height: 10
								} )
						)
				)
				.appendTo( 'body' );
	
			var outer = n.children();
			var inner = outer.children();
	
			// Numbers below, in order, are:
			// inner.offsetWidth, inner.clientWidth, outer.offsetWidth, outer.clientWidth
			//
			// IE6 XP:                           100 100 100  83
			// IE7 Vista:                        100 100 100  83
			// IE 8+ Windows:                     83  83 100  83
			// Evergreen Windows:                 83  83 100  83
			// Evergreen Mac with scrollbars:     85  85 100  85
			// Evergreen Mac without scrollbars: 100 100 100 100
	
			// Get scrollbar width
			browser.barWidth = outer[0].offsetWidth - outer[0].clientWidth;
	
			// IE6/7 will oversize a width 100% element inside a scrolling element, to
			// include the width of the scrollbar, while other browsers ensure the inner
			// element is contained without forcing scrolling
			browser.bScrollOversize = inner[0].offsetWidth === 100 && outer[0].clientWidth !== 100;
	
			// In rtl text layout, some browsers (most, but not all) will place the
			// scrollbar on the left, rather than the right.
			browser.bScrollbarLeft = Math.round( inner.offset().left ) !== 1;
	
			// IE8- don't provide height and width for getBoundingClientRect
			browser.bBounding = n[0].getBoundingClientRect().width ? true : false;
	
			n.remove();
		}
	
		$.extend( settings.oBrowser, DataTable.__browser );
		settings.oScroll.iBarWidth = DataTable.__browser.barWidth;
	}
	
	
	/**
	 * Array.prototype reduce[Right] method, used for browsers which don't support
	 * JS 1.6. Done this way to reduce code size, since we iterate either way
	 *  @param {object} settings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnReduce ( that, fn, init, start, end, inc )
	{
		var
			i = start,
			value,
			isSet = false;
	
		if ( init !== undefined ) {
			value = init;
			isSet = true;
		}
	
		while ( i !== end ) {
			if ( ! that.hasOwnProperty(i) ) {
				continue;
			}
	
			value = isSet ?
				fn( value, that[i], i, that ) :
				that[i];
	
			isSet = true;
			i += inc;
		}
	
		return value;
	}
	
	/**
	 * Add a column to the list used for the table with default values
	 *  @param {object} oSettings dataTables settings object
	 *  @param {node} nTh The th element for this column
	 *  @memberof DataTable#oApi
	 */
	function _fnAddColumn( oSettings, nTh )
	{
		// Add column to aoColumns array
		var oDefaults = DataTable.defaults.column;
		var iCol = oSettings.aoColumns.length;
		var oCol = $.extend( {}, DataTable.models.oColumn, oDefaults, {
			"nTh": nTh ? nTh : document.createElement('th'),
			"sTitle":    oDefaults.sTitle    ? oDefaults.sTitle    : nTh ? nTh.innerHTML : '',
			"aDataSort": oDefaults.aDataSort ? oDefaults.aDataSort : [iCol],
			"mData": oDefaults.mData ? oDefaults.mData : iCol,
			idx: iCol
		} );
		oSettings.aoColumns.push( oCol );
	
		// Add search object for column specific search. Note that the `searchCols[ iCol ]`
		// passed into extend can be undefined. This allows the user to give a default
		// with only some of the parameters defined, and also not give a default
		var searchCols = oSettings.aoPreSearchCols;
		searchCols[ iCol ] = $.extend( {}, DataTable.models.oSearch, searchCols[ iCol ] );
	
		// Use the default column options function to initialise classes etc
		_fnColumnOptions( oSettings, iCol, $(nTh).data() );
	}
	
	
	/**
	 * Apply options for a column
	 *  @param {object} oSettings dataTables settings object
	 *  @param {int} iCol column index to consider
	 *  @param {object} oOptions object with sType, bVisible and bSearchable etc
	 *  @memberof DataTable#oApi
	 */
	function _fnColumnOptions( oSettings, iCol, oOptions )
	{
		var oCol = oSettings.aoColumns[ iCol ];
		var oClasses = oSettings.oClasses;
		var th = $(oCol.nTh);
	
		// Try to get width information from the DOM. We can't get it from CSS
		// as we'd need to parse the CSS stylesheet. `width` option can override
		if ( ! oCol.sWidthOrig ) {
			// Width attribute
			oCol.sWidthOrig = th.attr('width') || null;
	
			// Style attribute
			var t = (th.attr('style') || '').match(/width:\s*(\d+[pxem%]+)/);
			if ( t ) {
				oCol.sWidthOrig = t[1];
			}
		}
	
		/* User specified column options */
		if ( oOptions !== undefined && oOptions !== null )
		{
			// Backwards compatibility
			_fnCompatCols( oOptions );
	
			// Map camel case parameters to their Hungarian counterparts
			_fnCamelToHungarian( DataTable.defaults.column, oOptions );
	
			/* Backwards compatibility for mDataProp */
			if ( oOptions.mDataProp !== undefined && !oOptions.mData )
			{
				oOptions.mData = oOptions.mDataProp;
			}
	
			if ( oOptions.sType )
			{
				oCol._sManualType = oOptions.sType;
			}
	
			// `class` is a reserved word in Javascript, so we need to provide
			// the ability to use a valid name for the camel case input
			if ( oOptions.className && ! oOptions.sClass )
			{
				oOptions.sClass = oOptions.className;
			}
			if ( oOptions.sClass ) {
				th.addClass( oOptions.sClass );
			}
	
			$.extend( oCol, oOptions );
			_fnMap( oCol, oOptions, "sWidth", "sWidthOrig" );
	
			/* iDataSort to be applied (backwards compatibility), but aDataSort will take
			 * priority if defined
			 */
			if ( oOptions.iDataSort !== undefined )
			{
				oCol.aDataSort = [ oOptions.iDataSort ];
			}
			_fnMap( oCol, oOptions, "aDataSort" );
		}
	
		/* Cache the data get and set functions for speed */
		var mDataSrc = oCol.mData;
		var mData = _fnGetObjectDataFn( mDataSrc );
		var mRender = oCol.mRender ? _fnGetObjectDataFn( oCol.mRender ) : null;
	
		var attrTest = function( src ) {
			return typeof src === 'string' && src.indexOf('@') !== -1;
		};
		oCol._bAttrSrc = $.isPlainObject( mDataSrc ) && (
			attrTest(mDataSrc.sort) || attrTest(mDataSrc.type) || attrTest(mDataSrc.filter)
		);
		oCol._setter = null;
	
		oCol.fnGetData = function (rowData, type, meta) {
			var innerData = mData( rowData, type, undefined, meta );
	
			return mRender && type ?
				mRender( innerData, type, rowData, meta ) :
				innerData;
		};
		oCol.fnSetData = function ( rowData, val, meta ) {
			return _fnSetObjectDataFn( mDataSrc )( rowData, val, meta );
		};
	
		// Indicate if DataTables should read DOM data as an object or array
		// Used in _fnGetRowElements
		if ( typeof mDataSrc !== 'number' ) {
			oSettings._rowReadObject = true;
		}
	
		/* Feature sorting overrides column specific when off */
		if ( !oSettings.oFeatures.bSort )
		{
			oCol.bSortable = false;
			th.addClass( oClasses.sSortableNone ); // Have to add class here as order event isn't called
		}
	
		/* Check that the class assignment is correct for sorting */
		var bAsc = $.inArray('asc', oCol.asSorting) !== -1;
		var bDesc = $.inArray('desc', oCol.asSorting) !== -1;
		if ( !oCol.bSortable || (!bAsc && !bDesc) )
		{
			oCol.sSortingClass = oClasses.sSortableNone;
			oCol.sSortingClassJUI = "";
		}
		else if ( bAsc && !bDesc )
		{
			oCol.sSortingClass = oClasses.sSortableAsc;
			oCol.sSortingClassJUI = oClasses.sSortJUIAscAllowed;
		}
		else if ( !bAsc && bDesc )
		{
			oCol.sSortingClass = oClasses.sSortableDesc;
			oCol.sSortingClassJUI = oClasses.sSortJUIDescAllowed;
		}
		else
		{
			oCol.sSortingClass = oClasses.sSortable;
			oCol.sSortingClassJUI = oClasses.sSortJUI;
		}
	}
	
	
	/**
	 * Adjust the table column widths for new data. Note: you would probably want to
	 * do a redraw after calling this function!
	 *  @param {object} settings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnAdjustColumnSizing ( settings )
	{
		/* Not interested in doing column width calculation if auto-width is disabled */
		if ( settings.oFeatures.bAutoWidth !== false )
		{
			var columns = settings.aoColumns;
	
			_fnCalculateColumnWidths( settings );
			for ( var i=0 , iLen=columns.length ; i<iLen ; i++ )
			{
				columns[i].nTh.style.width = columns[i].sWidth;
			}
		}
	
		var scroll = settings.oScroll;
		if ( scroll.sY !== '' || scroll.sX !== '')
		{
			_fnScrollDraw( settings );
		}
	
		_fnCallbackFire( settings, null, 'column-sizing', [settings] );
	}
	
	
	/**
	 * Covert the index of a visible column to the index in the data array (take account
	 * of hidden columns)
	 *  @param {object} oSettings dataTables settings object
	 *  @param {int} iMatch Visible column index to lookup
	 *  @returns {int} i the data index
	 *  @memberof DataTable#oApi
	 */
	function _fnVisibleToColumnIndex( oSettings, iMatch )
	{
		var aiVis = _fnGetColumns( oSettings, 'bVisible' );
	
		return typeof aiVis[iMatch] === 'number' ?
			aiVis[iMatch] :
			null;
	}
	
	
	/**
	 * Covert the index of an index in the data array and convert it to the visible
	 *   column index (take account of hidden columns)
	 *  @param {int} iMatch Column index to lookup
	 *  @param {object} oSettings dataTables settings object
	 *  @returns {int} i the data index
	 *  @memberof DataTable#oApi
	 */
	function _fnColumnIndexToVisible( oSettings, iMatch )
	{
		var aiVis = _fnGetColumns( oSettings, 'bVisible' );
		var iPos = $.inArray( iMatch, aiVis );
	
		return iPos !== -1 ? iPos : null;
	}
	
	
	/**
	 * Get the number of visible columns
	 *  @param {object} oSettings dataTables settings object
	 *  @returns {int} i the number of visible columns
	 *  @memberof DataTable#oApi
	 */
	function _fnVisbleColumns( oSettings )
	{
		var vis = 0;
	
		// No reduce in IE8, use a loop for now
		$.each( oSettings.aoColumns, function ( i, col ) {
			if ( col.bVisible && $(col.nTh).css('display') !== 'none' ) {
				vis++;
			}
		} );
	
		return vis;
	}
	
	
	/**
	 * Get an array of column indexes that match a given property
	 *  @param {object} oSettings dataTables settings object
	 *  @param {string} sParam Parameter in aoColumns to look for - typically
	 *    bVisible or bSearchable
	 *  @returns {array} Array of indexes with matched properties
	 *  @memberof DataTable#oApi
	 */
	function _fnGetColumns( oSettings, sParam )
	{
		var a = [];
	
		$.map( oSettings.aoColumns, function(val, i) {
			if ( val[sParam] ) {
				a.push( i );
			}
		} );
	
		return a;
	}
	
	
	/**
	 * Calculate the 'type' of a column
	 *  @param {object} settings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnColumnTypes ( settings )
	{
		var columns = settings.aoColumns;
		var data = settings.aoData;
		var types = DataTable.ext.type.detect;
		var i, ien, j, jen, k, ken;
		var col, cell, detectedType, cache;
	
		// For each column, spin over the 
		for ( i=0, ien=columns.length ; i<ien ; i++ ) {
			col = columns[i];
			cache = [];
	
			if ( ! col.sType && col._sManualType ) {
				col.sType = col._sManualType;
			}
			else if ( ! col.sType ) {
				for ( j=0, jen=types.length ; j<jen ; j++ ) {
					for ( k=0, ken=data.length ; k<ken ; k++ ) {
						// Use a cache array so we only need to get the type data
						// from the formatter once (when using multiple detectors)
						if ( cache[k] === undefined ) {
							cache[k] = _fnGetCellData( settings, k, i, 'type' );
						}
	
						detectedType = types[j]( cache[k], settings );
	
						// If null, then this type can't apply to this column, so
						// rather than testing all cells, break out. There is an
						// exception for the last type which is `html`. We need to
						// scan all rows since it is possible to mix string and HTML
						// types
						if ( ! detectedType && j !== types.length-1 ) {
							break;
						}
	
						// Only a single match is needed for html type since it is
						// bottom of the pile and very similar to string
						if ( detectedType === 'html' ) {
							break;
						}
					}
	
					// Type is valid for all data points in the column - use this
					// type
					if ( detectedType ) {
						col.sType = detectedType;
						break;
					}
				}
	
				// Fall back - if no type was detected, always use string
				if ( ! col.sType ) {
					col.sType = 'string';
				}
			}
		}
	}
	
	
	/**
	 * Take the column definitions and static columns arrays and calculate how
	 * they relate to column indexes. The callback function will then apply the
	 * definition found for a column to a suitable configuration object.
	 *  @param {object} oSettings dataTables settings object
	 *  @param {array} aoColDefs The aoColumnDefs array that is to be applied
	 *  @param {array} aoCols The aoColumns array that defines columns individually
	 *  @param {function} fn Callback function - takes two parameters, the calculated
	 *    column index and the definition for that column.
	 *  @memberof DataTable#oApi
	 */
	function _fnApplyColumnDefs( oSettings, aoColDefs, aoCols, fn )
	{
		var i, iLen, j, jLen, k, kLen, def;
		var columns = oSettings.aoColumns;
	
		// Column definitions with aTargets
		if ( aoColDefs )
		{
			/* Loop over the definitions array - loop in reverse so first instance has priority */
			for ( i=aoColDefs.length-1 ; i>=0 ; i-- )
			{
				def = aoColDefs[i];
	
				/* Each definition can target multiple columns, as it is an array */
				var aTargets = def.targets !== undefined ?
					def.targets :
					def.aTargets;
	
				if ( ! $.isArray( aTargets ) )
				{
					aTargets = [ aTargets ];
				}
	
				for ( j=0, jLen=aTargets.length ; j<jLen ; j++ )
				{
					if ( typeof aTargets[j] === 'number' && aTargets[j] >= 0 )
					{
						/* Add columns that we don't yet know about */
						while( columns.length <= aTargets[j] )
						{
							_fnAddColumn( oSettings );
						}
	
						/* Integer, basic index */
						fn( aTargets[j], def );
					}
					else if ( typeof aTargets[j] === 'number' && aTargets[j] < 0 )
					{
						/* Negative integer, right to left column counting */
						fn( columns.length+aTargets[j], def );
					}
					else if ( typeof aTargets[j] === 'string' )
					{
						/* Class name matching on TH element */
						for ( k=0, kLen=columns.length ; k<kLen ; k++ )
						{
							if ( aTargets[j] == "_all" ||
							     $(columns[k].nTh).hasClass( aTargets[j] ) )
							{
								fn( k, def );
							}
						}
					}
				}
			}
		}
	
		// Statically defined columns array
		if ( aoCols )
		{
			for ( i=0, iLen=aoCols.length ; i<iLen ; i++ )
			{
				fn( i, aoCols[i] );
			}
		}
	}
	
	/**
	 * Add a data array to the table, creating DOM node etc. This is the parallel to
	 * _fnGatherData, but for adding rows from a Javascript source, rather than a
	 * DOM source.
	 *  @param {object} oSettings dataTables settings object
	 *  @param {array} aData data array to be added
	 *  @param {node} [nTr] TR element to add to the table - optional. If not given,
	 *    DataTables will create a row automatically
	 *  @param {array} [anTds] Array of TD|TH elements for the row - must be given
	 *    if nTr is.
	 *  @returns {int} >=0 if successful (index of new aoData entry), -1 if failed
	 *  @memberof DataTable#oApi
	 */
	function _fnAddData ( oSettings, aDataIn, nTr, anTds )
	{
		/* Create the object for storing information about this new row */
		var iRow = oSettings.aoData.length;
		var oData = $.extend( true, {}, DataTable.models.oRow, {
			src: nTr ? 'dom' : 'data',
			idx: iRow
		} );
	
		oData._aData = aDataIn;
		oSettings.aoData.push( oData );
	
		/* Create the cells */
		var nTd, sThisType;
		var columns = oSettings.aoColumns;
	
		// Invalidate the column types as the new data needs to be revalidated
		for ( var i=0, iLen=columns.length ; i<iLen ; i++ )
		{
			columns[i].sType = null;
		}
	
		/* Add to the display array */
		oSettings.aiDisplayMaster.push( iRow );
	
		var id = oSettings.rowIdFn( aDataIn );
		if ( id !== undefined ) {
			oSettings.aIds[ id ] = oData;
		}
	
		/* Create the DOM information, or register it if already present */
		if ( nTr || ! oSettings.oFeatures.bDeferRender )
		{
			_fnCreateTr( oSettings, iRow, nTr, anTds );
		}
	
		return iRow;
	}
	
	
	/**
	 * Add one or more TR elements to the table. Generally we'd expect to
	 * use this for reading data from a DOM sourced table, but it could be
	 * used for an TR element. Note that if a TR is given, it is used (i.e.
	 * it is not cloned).
	 *  @param {object} settings dataTables settings object
	 *  @param {array|node|jQuery} trs The TR element(s) to add to the table
	 *  @returns {array} Array of indexes for the added rows
	 *  @memberof DataTable#oApi
	 */
	function _fnAddTr( settings, trs )
	{
		var row;
	
		// Allow an individual node to be passed in
		if ( ! (trs instanceof $) ) {
			trs = $(trs);
		}
	
		return trs.map( function (i, el) {
			row = _fnGetRowElements( settings, el );
			return _fnAddData( settings, row.data, el, row.cells );
		} );
	}
	
	
	/**
	 * Take a TR element and convert it to an index in aoData
	 *  @param {object} oSettings dataTables settings object
	 *  @param {node} n the TR element to find
	 *  @returns {int} index if the node is found, null if not
	 *  @memberof DataTable#oApi
	 */
	function _fnNodeToDataIndex( oSettings, n )
	{
		return (n._DT_RowIndex!==undefined) ? n._DT_RowIndex : null;
	}
	
	
	/**
	 * Take a TD element and convert it into a column data index (not the visible index)
	 *  @param {object} oSettings dataTables settings object
	 *  @param {int} iRow The row number the TD/TH can be found in
	 *  @param {node} n The TD/TH element to find
	 *  @returns {int} index if the node is found, -1 if not
	 *  @memberof DataTable#oApi
	 */
	function _fnNodeToColumnIndex( oSettings, iRow, n )
	{
		return $.inArray( n, oSettings.aoData[ iRow ].anCells );
	}
	
	
	/**
	 * Get the data for a given cell from the internal cache, taking into account data mapping
	 *  @param {object} settings dataTables settings object
	 *  @param {int} rowIdx aoData row id
	 *  @param {int} colIdx Column index
	 *  @param {string} type data get type ('display', 'type' 'filter' 'sort')
	 *  @returns {*} Cell data
	 *  @memberof DataTable#oApi
	 */
	function _fnGetCellData( settings, rowIdx, colIdx, type )
	{
		var draw           = settings.iDraw;
		var col            = settings.aoColumns[colIdx];
		var rowData        = settings.aoData[rowIdx]._aData;
		var defaultContent = col.sDefaultContent;
		var cellData       = col.fnGetData( rowData, type, {
			settings: settings,
			row:      rowIdx,
			col:      colIdx
		} );
	
		if ( cellData === undefined ) {
			if ( settings.iDrawError != draw && defaultContent === null ) {
				_fnLog( settings, 0, "Requested unknown parameter "+
					(typeof col.mData=='function' ? '{function}' : "'"+col.mData+"'")+
					" for row "+rowIdx+", column "+colIdx, 4 );
				settings.iDrawError = draw;
			}
			return defaultContent;
		}
	
		// When the data source is null and a specific data type is requested (i.e.
		// not the original data), we can use default column data
		if ( (cellData === rowData || cellData === null) && defaultContent !== null && type !== undefined ) {
			cellData = defaultContent;
		}
		else if ( typeof cellData === 'function' ) {
			// If the data source is a function, then we run it and use the return,
			// executing in the scope of the data object (for instances)
			return cellData.call( rowData );
		}
	
		if ( cellData === null && type == 'display' ) {
			return '';
		}
		return cellData;
	}
	
	
	/**
	 * Set the value for a specific cell, into the internal data cache
	 *  @param {object} settings dataTables settings object
	 *  @param {int} rowIdx aoData row id
	 *  @param {int} colIdx Column index
	 *  @param {*} val Value to set
	 *  @memberof DataTable#oApi
	 */
	function _fnSetCellData( settings, rowIdx, colIdx, val )
	{
		var col     = settings.aoColumns[colIdx];
		var rowData = settings.aoData[rowIdx]._aData;
	
		col.fnSetData( rowData, val, {
			settings: settings,
			row:      rowIdx,
			col:      colIdx
		}  );
	}
	
	
	// Private variable that is used to match action syntax in the data property object
	var __reArray = /\[.*?\]$/;
	var __reFn = /\(\)$/;
	
	/**
	 * Split string on periods, taking into account escaped periods
	 * @param  {string} str String to split
	 * @return {array} Split string
	 */
	function _fnSplitObjNotation( str )
	{
		return $.map( str.match(/(\\.|[^\.])+/g) || [''], function ( s ) {
			return s.replace(/\\\./g, '.');
		} );
	}
	
	
	/**
	 * Return a function that can be used to get data from a source object, taking
	 * into account the ability to use nested objects as a source
	 *  @param {string|int|function} mSource The data source for the object
	 *  @returns {function} Data get function
	 *  @memberof DataTable#oApi
	 */
	function _fnGetObjectDataFn( mSource )
	{
		if ( $.isPlainObject( mSource ) )
		{
			/* Build an object of get functions, and wrap them in a single call */
			var o = {};
			$.each( mSource, function (key, val) {
				if ( val ) {
					o[key] = _fnGetObjectDataFn( val );
				}
			} );
	
			return function (data, type, row, meta) {
				var t = o[type] || o._;
				return t !== undefined ?
					t(data, type, row, meta) :
					data;
			};
		}
		else if ( mSource === null )
		{
			/* Give an empty string for rendering / sorting etc */
			return function (data) { // type, row and meta also passed, but not used
				return data;
			};
		}
		else if ( typeof mSource === 'function' )
		{
			return function (data, type, row, meta) {
				return mSource( data, type, row, meta );
			};
		}
		else if ( typeof mSource === 'string' && (mSource.indexOf('.') !== -1 ||
			      mSource.indexOf('[') !== -1 || mSource.indexOf('(') !== -1) )
		{
			/* If there is a . in the source string then the data source is in a
			 * nested object so we loop over the data for each level to get the next
			 * level down. On each loop we test for undefined, and if found immediately
			 * return. This allows entire objects to be missing and sDefaultContent to
			 * be used if defined, rather than throwing an error
			 */
			var fetchData = function (data, type, src) {
				var arrayNotation, funcNotation, out, innerSrc;
	
				if ( src !== "" )
				{
					var a = _fnSplitObjNotation( src );
	
					for ( var i=0, iLen=a.length ; i<iLen ; i++ )
					{
						// Check if we are dealing with special notation
						arrayNotation = a[i].match(__reArray);
						funcNotation = a[i].match(__reFn);
	
						if ( arrayNotation )
						{
							// Array notation
							a[i] = a[i].replace(__reArray, '');
	
							// Condition allows simply [] to be passed in
							if ( a[i] !== "" ) {
								data = data[ a[i] ];
							}
							out = [];
	
							// Get the remainder of the nested object to get
							a.splice( 0, i+1 );
							innerSrc = a.join('.');
	
							// Traverse each entry in the array getting the properties requested
							if ( $.isArray( data ) ) {
								for ( var j=0, jLen=data.length ; j<jLen ; j++ ) {
									out.push( fetchData( data[j], type, innerSrc ) );
								}
							}
	
							// If a string is given in between the array notation indicators, that
							// is used to join the strings together, otherwise an array is returned
							var join = arrayNotation[0].substring(1, arrayNotation[0].length-1);
							data = (join==="") ? out : out.join(join);
	
							// The inner call to fetchData has already traversed through the remainder
							// of the source requested, so we exit from the loop
							break;
						}
						else if ( funcNotation )
						{
							// Function call
							a[i] = a[i].replace(__reFn, '');
							data = data[ a[i] ]();
							continue;
						}
	
						if ( data === null || data[ a[i] ] === undefined )
						{
							return undefined;
						}
						data = data[ a[i] ];
					}
				}
	
				return data;
			};
	
			return function (data, type) { // row and meta also passed, but not used
				return fetchData( data, type, mSource );
			};
		}
		else
		{
			/* Array or flat object mapping */
			return function (data, type) { // row and meta also passed, but not used
				return data[mSource];
			};
		}
	}
	
	
	/**
	 * Return a function that can be used to set data from a source object, taking
	 * into account the ability to use nested objects as a source
	 *  @param {string|int|function} mSource The data source for the object
	 *  @returns {function} Data set function
	 *  @memberof DataTable#oApi
	 */
	function _fnSetObjectDataFn( mSource )
	{
		if ( $.isPlainObject( mSource ) )
		{
			/* Unlike get, only the underscore (global) option is used for for
			 * setting data since we don't know the type here. This is why an object
			 * option is not documented for `mData` (which is read/write), but it is
			 * for `mRender` which is read only.
			 */
			return _fnSetObjectDataFn( mSource._ );
		}
		else if ( mSource === null )
		{
			/* Nothing to do when the data source is null */
			return function () {};
		}
		else if ( typeof mSource === 'function' )
		{
			return function (data, val, meta) {
				mSource( data, 'set', val, meta );
			};
		}
		else if ( typeof mSource === 'string' && (mSource.indexOf('.') !== -1 ||
			      mSource.indexOf('[') !== -1 || mSource.indexOf('(') !== -1) )
		{
			/* Like the get, we need to get data from a nested object */
			var setData = function (data, val, src) {
				var a = _fnSplitObjNotation( src ), b;
				var aLast = a[a.length-1];
				var arrayNotation, funcNotation, o, innerSrc;
	
				for ( var i=0, iLen=a.length-1 ; i<iLen ; i++ )
				{
					// Check if we are dealing with an array notation request
					arrayNotation = a[i].match(__reArray);
					funcNotation = a[i].match(__reFn);
	
					if ( arrayNotation )
					{
						a[i] = a[i].replace(__reArray, '');
						data[ a[i] ] = [];
	
						// Get the remainder of the nested object to set so we can recurse
						b = a.slice();
						b.splice( 0, i+1 );
						innerSrc = b.join('.');
	
						// Traverse each entry in the array setting the properties requested
						if ( $.isArray( val ) )
						{
							for ( var j=0, jLen=val.length ; j<jLen ; j++ )
							{
								o = {};
								setData( o, val[j], innerSrc );
								data[ a[i] ].push( o );
							}
						}
						else
						{
							// We've been asked to save data to an array, but it
							// isn't array data to be saved. Best that can be done
							// is to just save the value.
							data[ a[i] ] = val;
						}
	
						// The inner call to setData has already traversed through the remainder
						// of the source and has set the data, thus we can exit here
						return;
					}
					else if ( funcNotation )
					{
						// Function call
						a[i] = a[i].replace(__reFn, '');
						data = data[ a[i] ]( val );
					}
	
					// If the nested object doesn't currently exist - since we are
					// trying to set the value - create it
					if ( data[ a[i] ] === null || data[ a[i] ] === undefined )
					{
						data[ a[i] ] = {};
					}
					data = data[ a[i] ];
				}
	
				// Last item in the input - i.e, the actual set
				if ( aLast.match(__reFn ) )
				{
					// Function call
					data = data[ aLast.replace(__reFn, '') ]( val );
				}
				else
				{
					// If array notation is used, we just want to strip it and use the property name
					// and assign the value. If it isn't used, then we get the result we want anyway
					data[ aLast.replace(__reArray, '') ] = val;
				}
			};
	
			return function (data, val) { // meta is also passed in, but not used
				return setData( data, val, mSource );
			};
		}
		else
		{
			/* Array or flat object mapping */
			return function (data, val) { // meta is also passed in, but not used
				data[mSource] = val;
			};
		}
	}
	
	
	/**
	 * Return an array with the full table data
	 *  @param {object} oSettings dataTables settings object
	 *  @returns array {array} aData Master data array
	 *  @memberof DataTable#oApi
	 */
	function _fnGetDataMaster ( settings )
	{
		return _pluck( settings.aoData, '_aData' );
	}
	
	
	/**
	 * Nuke the table
	 *  @param {object} oSettings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnClearTable( settings )
	{
		settings.aoData.length = 0;
		settings.aiDisplayMaster.length = 0;
		settings.aiDisplay.length = 0;
		settings.aIds = {};
	}
	
	
	 /**
	 * Take an array of integers (index array) and remove a target integer (value - not
	 * the key!)
	 *  @param {array} a Index array to target
	 *  @param {int} iTarget value to find
	 *  @memberof DataTable#oApi
	 */
	function _fnDeleteIndex( a, iTarget, splice )
	{
		var iTargetIndex = -1;
	
		for ( var i=0, iLen=a.length ; i<iLen ; i++ )
		{
			if ( a[i] == iTarget )
			{
				iTargetIndex = i;
			}
			else if ( a[i] > iTarget )
			{
				a[i]--;
			}
		}
	
		if ( iTargetIndex != -1 && splice === undefined )
		{
			a.splice( iTargetIndex, 1 );
		}
	}
	
	
	/**
	 * Mark cached data as invalid such that a re-read of the data will occur when
	 * the cached data is next requested. Also update from the data source object.
	 *
	 * @param {object} settings DataTables settings object
	 * @param {int}    rowIdx   Row index to invalidate
	 * @param {string} [src]    Source to invalidate from: undefined, 'auto', 'dom'
	 *     or 'data'
	 * @param {int}    [colIdx] Column index to invalidate. If undefined the whole
	 *     row will be invalidated
	 * @memberof DataTable#oApi
	 *
	 * @todo For the modularisation of v1.11 this will need to become a callback, so
	 *   the sort and filter methods can subscribe to it. That will required
	 *   initialisation options for sorting, which is why it is not already baked in
	 */
	function _fnInvalidate( settings, rowIdx, src, colIdx )
	{
		var row = settings.aoData[ rowIdx ];
		var i, ien;
		var cellWrite = function ( cell, col ) {
			// This is very frustrating, but in IE if you just write directly
			// to innerHTML, and elements that are overwritten are GC'ed,
			// even if there is a reference to them elsewhere
			while ( cell.childNodes.length ) {
				cell.removeChild( cell.firstChild );
			}
	
			cell.innerHTML = _fnGetCellData( settings, rowIdx, col, 'display' );
		};
	
		// Are we reading last data from DOM or the data object?
		if ( src === 'dom' || ((! src || src === 'auto') && row.src === 'dom') ) {
			// Read the data from the DOM
			row._aData = _fnGetRowElements(
					settings, row, colIdx, colIdx === undefined ? undefined : row._aData
				)
				.data;
		}
		else {
			// Reading from data object, update the DOM
			var cells = row.anCells;
	
			if ( cells ) {
				if ( colIdx !== undefined ) {
					cellWrite( cells[colIdx], colIdx );
				}
				else {
					for ( i=0, ien=cells.length ; i<ien ; i++ ) {
						cellWrite( cells[i], i );
					}
				}
			}
		}
	
		// For both row and cell invalidation, the cached data for sorting and
		// filtering is nulled out
		row._aSortData = null;
		row._aFilterData = null;
	
		// Invalidate the type for a specific column (if given) or all columns since
		// the data might have changed
		var cols = settings.aoColumns;
		if ( colIdx !== undefined ) {
			cols[ colIdx ].sType = null;
		}
		else {
			for ( i=0, ien=cols.length ; i<ien ; i++ ) {
				cols[i].sType = null;
			}
	
			// Update DataTables special `DT_*` attributes for the row
			_fnRowAttributes( settings, row );
		}
	}
	
	
	/**
	 * Build a data source object from an HTML row, reading the contents of the
	 * cells that are in the row.
	 *
	 * @param {object} settings DataTables settings object
	 * @param {node|object} TR element from which to read data or existing row
	 *   object from which to re-read the data from the cells
	 * @param {int} [colIdx] Optional column index
	 * @param {array|object} [d] Data source object. If `colIdx` is given then this
	 *   parameter should also be given and will be used to write the data into.
	 *   Only the column in question will be written
	 * @returns {object} Object with two parameters: `data` the data read, in
	 *   document order, and `cells` and array of nodes (they can be useful to the
	 *   caller, so rather than needing a second traversal to get them, just return
	 *   them from here).
	 * @memberof DataTable#oApi
	 */
	function _fnGetRowElements( settings, row, colIdx, d )
	{
		var
			tds = [],
			td = row.firstChild,
			name, col, o, i=0, contents,
			columns = settings.aoColumns,
			objectRead = settings._rowReadObject;
	
		// Allow the data object to be passed in, or construct
		d = d !== undefined ?
			d :
			objectRead ?
				{} :
				[];
	
		var attr = function ( str, td  ) {
			if ( typeof str === 'string' ) {
				var idx = str.indexOf('@');
	
				if ( idx !== -1 ) {
					var attr = str.substring( idx+1 );
					var setter = _fnSetObjectDataFn( str );
					setter( d, td.getAttribute( attr ) );
				}
			}
		};
	
		// Read data from a cell and store into the data object
		var cellProcess = function ( cell ) {
			if ( colIdx === undefined || colIdx === i ) {
				col = columns[i];
				contents = $.trim(cell.innerHTML);
	
				if ( col && col._bAttrSrc ) {
					var setter = _fnSetObjectDataFn( col.mData._ );
					setter( d, contents );
	
					attr( col.mData.sort, cell );
					attr( col.mData.type, cell );
					attr( col.mData.filter, cell );
				}
				else {
					// Depending on the `data` option for the columns the data can
					// be read to either an object or an array.
					if ( objectRead ) {
						if ( ! col._setter ) {
							// Cache the setter function
							col._setter = _fnSetObjectDataFn( col.mData );
						}
						col._setter( d, contents );
					}
					else {
						d[i] = contents;
					}
				}
			}
	
			i++;
		};
	
		if ( td ) {
			// `tr` element was passed in
			while ( td ) {
				name = td.nodeName.toUpperCase();
	
				if ( name == "TD" || name == "TH" ) {
					cellProcess( td );
					tds.push( td );
				}
	
				td = td.nextSibling;
			}
		}
		else {
			// Existing row object passed in
			tds = row.anCells;
	
			for ( var j=0, jen=tds.length ; j<jen ; j++ ) {
				cellProcess( tds[j] );
			}
		}
	
		// Read the ID from the DOM if present
		var rowNode = row.firstChild ? row : row.nTr;
	
		if ( rowNode ) {
			var id = rowNode.getAttribute( 'id' );
	
			if ( id ) {
				_fnSetObjectDataFn( settings.rowId )( d, id );
			}
		}
	
		return {
			data: d,
			cells: tds
		};
	}
	/**
	 * Create a new TR element (and it's TD children) for a row
	 *  @param {object} oSettings dataTables settings object
	 *  @param {int} iRow Row to consider
	 *  @param {node} [nTrIn] TR element to add to the table - optional. If not given,
	 *    DataTables will create a row automatically
	 *  @param {array} [anTds] Array of TD|TH elements for the row - must be given
	 *    if nTr is.
	 *  @memberof DataTable#oApi
	 */
	function _fnCreateTr ( oSettings, iRow, nTrIn, anTds )
	{
		var
			row = oSettings.aoData[iRow],
			rowData = row._aData,
			cells = [],
			nTr, nTd, oCol,
			i, iLen;
	
		if ( row.nTr === null )
		{
			nTr = nTrIn || document.createElement('tr');
	
			row.nTr = nTr;
			row.anCells = cells;
	
			/* Use a private property on the node to allow reserve mapping from the node
			 * to the aoData array for fast look up
			 */
			nTr._DT_RowIndex = iRow;
	
			/* Special parameters can be given by the data source to be used on the row */
			_fnRowAttributes( oSettings, row );
	
			/* Process each column */
			for ( i=0, iLen=oSettings.aoColumns.length ; i<iLen ; i++ )
			{
				oCol = oSettings.aoColumns[i];
	
				nTd = nTrIn ? anTds[i] : document.createElement( oCol.sCellType );
				nTd._DT_CellIndex = {
					row: iRow,
					column: i
				};
				
				cells.push( nTd );
	
				// Need to create the HTML if new, or if a rendering function is defined
				if ( (!nTrIn || oCol.mRender || oCol.mData !== i) &&
					 (!$.isPlainObject(oCol.mData) || oCol.mData._ !== i+'.display')
				) {
					nTd.innerHTML = _fnGetCellData( oSettings, iRow, i, 'display' );
				}
	
				/* Add user defined class */
				if ( oCol.sClass )
				{
					nTd.className += ' '+oCol.sClass;
				}
	
				// Visibility - add or remove as required
				if ( oCol.bVisible && ! nTrIn )
				{
					nTr.appendChild( nTd );
				}
				else if ( ! oCol.bVisible && nTrIn )
				{
					nTd.parentNode.removeChild( nTd );
				}
	
				if ( oCol.fnCreatedCell )
				{
					oCol.fnCreatedCell.call( oSettings.oInstance,
						nTd, _fnGetCellData( oSettings, iRow, i ), rowData, iRow, i
					);
				}
			}
	
			_fnCallbackFire( oSettings, 'aoRowCreatedCallback', null, [nTr, rowData, iRow] );
		}
	
		// Remove once webkit bug 131819 and Chromium bug 365619 have been resolved
		// and deployed
		row.nTr.setAttribute( 'role', 'row' );
	}
	
	
	/**
	 * Add attributes to a row based on the special `DT_*` parameters in a data
	 * source object.
	 *  @param {object} settings DataTables settings object
	 *  @param {object} DataTables row object for the row to be modified
	 *  @memberof DataTable#oApi
	 */
	function _fnRowAttributes( settings, row )
	{
		var tr = row.nTr;
		var data = row._aData;
	
		if ( tr ) {
			var id = settings.rowIdFn( data );
	
			if ( id ) {
				tr.id = id;
			}
	
			if ( data.DT_RowClass ) {
				// Remove any classes added by DT_RowClass before
				var a = data.DT_RowClass.split(' ');
				row.__rowc = row.__rowc ?
					_unique( row.__rowc.concat( a ) ) :
					a;
	
				$(tr)
					.removeClass( row.__rowc.join(' ') )
					.addClass( data.DT_RowClass );
			}
	
			if ( data.DT_RowAttr ) {
				$(tr).attr( data.DT_RowAttr );
			}
	
			if ( data.DT_RowData ) {
				$(tr).data( data.DT_RowData );
			}
		}
	}
	
	
	/**
	 * Create the HTML header for the table
	 *  @param {object} oSettings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnBuildHead( oSettings )
	{
		var i, ien, cell, row, column;
		var thead = oSettings.nTHead;
		var tfoot = oSettings.nTFoot;
		var createHeader = $('th, td', thead).length === 0;
		var classes = oSettings.oClasses;
		var columns = oSettings.aoColumns;
	
		if ( createHeader ) {
			row = $('<tr/>').appendTo( thead );
		}
	
		for ( i=0, ien=columns.length ; i<ien ; i++ ) {
			column = columns[i];
			cell = $( column.nTh ).addClass( column.sClass );
	
			if ( createHeader ) {
				cell.appendTo( row );
			}
	
			// 1.11 move into sorting
			if ( oSettings.oFeatures.bSort ) {
				cell.addClass( column.sSortingClass );
	
				if ( column.bSortable !== false ) {
					cell
						.attr( 'tabindex', oSettings.iTabIndex )
						.attr( 'aria-controls', oSettings.sTableId );
	
					_fnSortAttachListener( oSettings, column.nTh, i );
				}
			}
	
			if ( column.sTitle != cell[0].innerHTML ) {
				cell.html( column.sTitle );
			}
	
			_fnRenderer( oSettings, 'header' )(
				oSettings, cell, column, classes
			);
		}
	
		if ( createHeader ) {
			_fnDetectHeader( oSettings.aoHeader, thead );
		}
		
		/* ARIA role for the rows */
	 	$(thead).find('>tr').attr('role', 'row');
	
		/* Deal with the footer - add classes if required */
		$(thead).find('>tr>th, >tr>td').addClass( classes.sHeaderTH );
		$(tfoot).find('>tr>th, >tr>td').addClass( classes.sFooterTH );
	
		// Cache the footer cells. Note that we only take the cells from the first
		// row in the footer. If there is more than one row the user wants to
		// interact with, they need to use the table().foot() method. Note also this
		// allows cells to be used for multiple columns using colspan
		if ( tfoot !== null ) {
			var cells = oSettings.aoFooter[0];
	
			for ( i=0, ien=cells.length ; i<ien ; i++ ) {
				column = columns[i];
				column.nTf = cells[i].cell;
	
				if ( column.sClass ) {
					$(column.nTf).addClass( column.sClass );
				}
			}
		}
	}
	
	
	/**
	 * Draw the header (or footer) element based on the column visibility states. The
	 * methodology here is to use the layout array from _fnDetectHeader, modified for
	 * the instantaneous column visibility, to construct the new layout. The grid is
	 * traversed over cell at a time in a rows x columns grid fashion, although each
	 * cell insert can cover multiple elements in the grid - which is tracks using the
	 * aApplied array. Cell inserts in the grid will only occur where there isn't
	 * already a cell in that position.
	 *  @param {object} oSettings dataTables settings object
	 *  @param array {objects} aoSource Layout array from _fnDetectHeader
	 *  @param {boolean} [bIncludeHidden=false] If true then include the hidden columns in the calc,
	 *  @memberof DataTable#oApi
	 */
	function _fnDrawHead( oSettings, aoSource, bIncludeHidden )
	{
		var i, iLen, j, jLen, k, kLen, n, nLocalTr;
		var aoLocal = [];
		var aApplied = [];
		var iColumns = oSettings.aoColumns.length;
		var iRowspan, iColspan;
	
		if ( ! aoSource )
		{
			return;
		}
	
		if (  bIncludeHidden === undefined )
		{
			bIncludeHidden = false;
		}
	
		/* Make a copy of the master layout array, but without the visible columns in it */
		for ( i=0, iLen=aoSource.length ; i<iLen ; i++ )
		{
			aoLocal[i] = aoSource[i].slice();
			aoLocal[i].nTr = aoSource[i].nTr;
	
			/* Remove any columns which are currently hidden */
			for ( j=iColumns-1 ; j>=0 ; j-- )
			{
				if ( !oSettings.aoColumns[j].bVisible && !bIncludeHidden )
				{
					aoLocal[i].splice( j, 1 );
				}
			}
	
			/* Prep the applied array - it needs an element for each row */
			aApplied.push( [] );
		}
	
		for ( i=0, iLen=aoLocal.length ; i<iLen ; i++ )
		{
			nLocalTr = aoLocal[i].nTr;
	
			/* All cells are going to be replaced, so empty out the row */
			if ( nLocalTr )
			{
				while( (n = nLocalTr.firstChild) )
				{
					nLocalTr.removeChild( n );
				}
			}
	
			for ( j=0, jLen=aoLocal[i].length ; j<jLen ; j++ )
			{
				iRowspan = 1;
				iColspan = 1;
	
				/* Check to see if there is already a cell (row/colspan) covering our target
				 * insert point. If there is, then there is nothing to do.
				 */
				if ( aApplied[i][j] === undefined )
				{
					nLocalTr.appendChild( aoLocal[i][j].cell );
					aApplied[i][j] = 1;
	
					/* Expand the cell to cover as many rows as needed */
					while ( aoLocal[i+iRowspan] !== undefined &&
					        aoLocal[i][j].cell == aoLocal[i+iRowspan][j].cell )
					{
						aApplied[i+iRowspan][j] = 1;
						iRowspan++;
					}
	
					/* Expand the cell to cover as many columns as needed */
					while ( aoLocal[i][j+iColspan] !== undefined &&
					        aoLocal[i][j].cell == aoLocal[i][j+iColspan].cell )
					{
						/* Must update the applied array over the rows for the columns */
						for ( k=0 ; k<iRowspan ; k++ )
						{
							aApplied[i+k][j+iColspan] = 1;
						}
						iColspan++;
					}
	
					/* Do the actual expansion in the DOM */
					$(aoLocal[i][j].cell)
						.attr('rowspan', iRowspan)
						.attr('colspan', iColspan);
				}
			}
		}
	}
	
	
	/**
	 * Insert the required TR nodes into the table for display
	 *  @param {object} oSettings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnDraw( oSettings )
	{
		/* Provide a pre-callback function which can be used to cancel the draw is false is returned */
		var aPreDraw = _fnCallbackFire( oSettings, 'aoPreDrawCallback', 'preDraw', [oSettings] );
		if ( $.inArray( false, aPreDraw ) !== -1 )
		{
			_fnProcessingDisplay( oSettings, false );
			return;
		}
	
		var i, iLen, n;
		var anRows = [];
		var iRowCount = 0;
		var asStripeClasses = oSettings.asStripeClasses;
		var iStripes = asStripeClasses.length;
		var iOpenRows = oSettings.aoOpenRows.length;
		var oLang = oSettings.oLanguage;
		var iInitDisplayStart = oSettings.iInitDisplayStart;
		var bServerSide = _fnDataSource( oSettings ) == 'ssp';
		var aiDisplay = oSettings.aiDisplay;
	
		oSettings.bDrawing = true;
	
		/* Check and see if we have an initial draw position from state saving */
		if ( iInitDisplayStart !== undefined && iInitDisplayStart !== -1 )
		{
			oSettings._iDisplayStart = bServerSide ?
				iInitDisplayStart :
				iInitDisplayStart >= oSettings.fnRecordsDisplay() ?
					0 :
					iInitDisplayStart;
	
			oSettings.iInitDisplayStart = -1;
		}
	
		var iDisplayStart = oSettings._iDisplayStart;
		var iDisplayEnd = oSettings.fnDisplayEnd();
	
		/* Server-side processing draw intercept */
		if ( oSettings.bDeferLoading )
		{
			oSettings.bDeferLoading = false;
			oSettings.iDraw++;
			_fnProcessingDisplay( oSettings, false );
		}
		else if ( !bServerSide )
		{
			oSettings.iDraw++;
		}
		else if ( !oSettings.bDestroying && !_fnAjaxUpdate( oSettings ) )
		{
			return;
		}
	
		if ( aiDisplay.length !== 0 )
		{
			var iStart = bServerSide ? 0 : iDisplayStart;
			var iEnd = bServerSide ? oSettings.aoData.length : iDisplayEnd;
	
			for ( var j=iStart ; j<iEnd ; j++ )
			{
				var iDataIndex = aiDisplay[j];
				var aoData = oSettings.aoData[ iDataIndex ];
				if ( aoData.nTr === null )
				{
					_fnCreateTr( oSettings, iDataIndex );
				}
	
				var nRow = aoData.nTr;
	
				/* Remove the old striping classes and then add the new one */
				if ( iStripes !== 0 )
				{
					var sStripe = asStripeClasses[ iRowCount % iStripes ];
					if ( aoData._sRowStripe != sStripe )
					{
						$(nRow).removeClass( aoData._sRowStripe ).addClass( sStripe );
						aoData._sRowStripe = sStripe;
					}
				}
	
				// Row callback functions - might want to manipulate the row
				// iRowCount and j are not currently documented. Are they at all
				// useful?
				_fnCallbackFire( oSettings, 'aoRowCallback', null,
					[nRow, aoData._aData, iRowCount, j] );
	
				anRows.push( nRow );
				iRowCount++;
			}
		}
		else
		{
			/* Table is empty - create a row with an empty message in it */
			var sZero = oLang.sZeroRecords;
			if ( oSettings.iDraw == 1 &&  _fnDataSource( oSettings ) == 'ajax' )
			{
				sZero = oLang.sLoadingRecords;
			}
			else if ( oLang.sEmptyTable && oSettings.fnRecordsTotal() === 0 )
			{
				sZero = oLang.sEmptyTable;
			}
	
			anRows[ 0 ] = $( '<tr/>', { 'class': iStripes ? asStripeClasses[0] : '' } )
				.append( $('<td />', {
					'valign':  'top',
					'colSpan': _fnVisbleColumns( oSettings ),
					'class':   oSettings.oClasses.sRowEmpty
				} ).html( sZero ) )[0];
		}
	
		/* Header and footer callbacks */
		_fnCallbackFire( oSettings, 'aoHeaderCallback', 'header', [ $(oSettings.nTHead).children('tr')[0],
			_fnGetDataMaster( oSettings ), iDisplayStart, iDisplayEnd, aiDisplay ] );
	
		_fnCallbackFire( oSettings, 'aoFooterCallback', 'footer', [ $(oSettings.nTFoot).children('tr')[0],
			_fnGetDataMaster( oSettings ), iDisplayStart, iDisplayEnd, aiDisplay ] );
	
		var body = $(oSettings.nTBody);
	
		body.children().detach();
		body.append( $(anRows) );
	
		/* Call all required callback functions for the end of a draw */
		_fnCallbackFire( oSettings, 'aoDrawCallback', 'draw', [oSettings] );
	
		/* Draw is complete, sorting and filtering must be as well */
		oSettings.bSorted = false;
		oSettings.bFiltered = false;
		oSettings.bDrawing = false;
	}
	
	
	/**
	 * Redraw the table - taking account of the various features which are enabled
	 *  @param {object} oSettings dataTables settings object
	 *  @param {boolean} [holdPosition] Keep the current paging position. By default
	 *    the paging is reset to the first page
	 *  @memberof DataTable#oApi
	 */
	function _fnReDraw( settings, holdPosition )
	{
		var
			features = settings.oFeatures,
			sort     = features.bSort,
			filter   = features.bFilter;
	
		if ( sort ) {
			_fnSort( settings );
		}
	
		if ( filter ) {
			_fnFilterComplete( settings, settings.oPreviousSearch );
		}
		else {
			// No filtering, so we want to just use the display master
			settings.aiDisplay = settings.aiDisplayMaster.slice();
		}
	
		if ( holdPosition !== true ) {
			settings._iDisplayStart = 0;
		}
	
		// Let any modules know about the draw hold position state (used by
		// scrolling internally)
		settings._drawHold = holdPosition;
	
		_fnDraw( settings );
	
		settings._drawHold = false;
	}
	
	
	/**
	 * Add the options to the page HTML for the table
	 *  @param {object} oSettings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnAddOptionsHtml ( oSettings )
	{
		var classes = oSettings.oClasses;
		var table = $(oSettings.nTable);
		var holding = $('<div/>').insertBefore( table ); // Holding element for speed
		var features = oSettings.oFeatures;
	
		// All DataTables are wrapped in a div
		var insert = $('<div/>', {
			id:      oSettings.sTableId+'_wrapper',
			'class': classes.sWrapper + (oSettings.nTFoot ? '' : ' '+classes.sNoFooter)
		} );
	
		oSettings.nHolding = holding[0];
		oSettings.nTableWrapper = insert[0];
		oSettings.nTableReinsertBefore = oSettings.nTable.nextSibling;
	
		/* Loop over the user set positioning and place the elements as needed */
		var aDom = oSettings.sDom.split('');
		var featureNode, cOption, nNewNode, cNext, sAttr, j;
		for ( var i=0 ; i<aDom.length ; i++ )
		{
			featureNode = null;
			cOption = aDom[i];
	
			if ( cOption == '<' )
			{
				/* New container div */
				nNewNode = $('<div/>')[0];
	
				/* Check to see if we should append an id and/or a class name to the container */
				cNext = aDom[i+1];
				if ( cNext == "'" || cNext == '"' )
				{
					sAttr = "";
					j = 2;
					while ( aDom[i+j] != cNext )
					{
						sAttr += aDom[i+j];
						j++;
					}
	
					/* Replace jQuery UI constants @todo depreciated */
					if ( sAttr == "H" )
					{
						sAttr = classes.sJUIHeader;
					}
					else if ( sAttr == "F" )
					{
						sAttr = classes.sJUIFooter;
					}
	
					/* The attribute can be in the format of "#id.class", "#id" or "class" This logic
					 * breaks the string into parts and applies them as needed
					 */
					if ( sAttr.indexOf('.') != -1 )
					{
						var aSplit = sAttr.split('.');
						nNewNode.id = aSplit[0].substr(1, aSplit[0].length-1);
						nNewNode.className = aSplit[1];
					}
					else if ( sAttr.charAt(0) == "#" )
					{
						nNewNode.id = sAttr.substr(1, sAttr.length-1);
					}
					else
					{
						nNewNode.className = sAttr;
					}
	
					i += j; /* Move along the position array */
				}
	
				insert.append( nNewNode );
				insert = $(nNewNode);
			}
			else if ( cOption == '>' )
			{
				/* End container div */
				insert = insert.parent();
			}
			// @todo Move options into their own plugins?
			else if ( cOption == 'l' && features.bPaginate && features.bLengthChange )
			{
				/* Length */
				featureNode = _fnFeatureHtmlLength( oSettings );
			}
			else if ( cOption == 'f' && features.bFilter )
			{
				/* Filter */
				featureNode = _fnFeatureHtmlFilter( oSettings );
			}
			else if ( cOption == 'r' && features.bProcessing )
			{
				/* pRocessing */
				featureNode = _fnFeatureHtmlProcessing( oSettings );
			}
			else if ( cOption == 't' )
			{
				/* Table */
				featureNode = _fnFeatureHtmlTable( oSettings );
			}
			else if ( cOption ==  'i' && features.bInfo )
			{
				/* Info */
				featureNode = _fnFeatureHtmlInfo( oSettings );
			}
			else if ( cOption == 'p' && features.bPaginate )
			{
				/* Pagination */
				featureNode = _fnFeatureHtmlPaginate( oSettings );
			}
			else if ( DataTable.ext.feature.length !== 0 )
			{
				/* Plug-in features */
				var aoFeatures = DataTable.ext.feature;
				for ( var k=0, kLen=aoFeatures.length ; k<kLen ; k++ )
				{
					if ( cOption == aoFeatures[k].cFeature )
					{
						featureNode = aoFeatures[k].fnInit( oSettings );
						break;
					}
				}
			}
	
			/* Add to the 2D features array */
			if ( featureNode )
			{
				var aanFeatures = oSettings.aanFeatures;
	
				if ( ! aanFeatures[cOption] )
				{
					aanFeatures[cOption] = [];
				}
	
				aanFeatures[cOption].push( featureNode );
				insert.append( featureNode );
			}
		}
	
		/* Built our DOM structure - replace the holding div with what we want */
		holding.replaceWith( insert );
		oSettings.nHolding = null;
	}
	
	
	/**
	 * Use the DOM source to create up an array of header cells. The idea here is to
	 * create a layout grid (array) of rows x columns, which contains a reference
	 * to the cell that that point in the grid (regardless of col/rowspan), such that
	 * any column / row could be removed and the new grid constructed
	 *  @param array {object} aLayout Array to store the calculated layout in
	 *  @param {node} nThead The header/footer element for the table
	 *  @memberof DataTable#oApi
	 */
	function _fnDetectHeader ( aLayout, nThead )
	{
		var nTrs = $(nThead).children('tr');
		var nTr, nCell;
		var i, k, l, iLen, jLen, iColShifted, iColumn, iColspan, iRowspan;
		var bUnique;
		var fnShiftCol = function ( a, i, j ) {
			var k = a[i];
	                while ( k[j] ) {
				j++;
			}
			return j;
		};
	
		aLayout.splice( 0, aLayout.length );
	
		/* We know how many rows there are in the layout - so prep it */
		for ( i=0, iLen=nTrs.length ; i<iLen ; i++ )
		{
			aLayout.push( [] );
		}
	
		/* Calculate a layout array */
		for ( i=0, iLen=nTrs.length ; i<iLen ; i++ )
		{
			nTr = nTrs[i];
			iColumn = 0;
	
			/* For every cell in the row... */
			nCell = nTr.firstChild;
			while ( nCell ) {
				if ( nCell.nodeName.toUpperCase() == "TD" ||
				     nCell.nodeName.toUpperCase() == "TH" )
				{
					/* Get the col and rowspan attributes from the DOM and sanitise them */
					iColspan = nCell.getAttribute('colspan') * 1;
					iRowspan = nCell.getAttribute('rowspan') * 1;
					iColspan = (!iColspan || iColspan===0 || iColspan===1) ? 1 : iColspan;
					iRowspan = (!iRowspan || iRowspan===0 || iRowspan===1) ? 1 : iRowspan;
	
					/* There might be colspan cells already in this row, so shift our target
					 * accordingly
					 */
					iColShifted = fnShiftCol( aLayout, i, iColumn );
	
					/* Cache calculation for unique columns */
					bUnique = iColspan === 1 ? true : false;
	
					/* If there is col / rowspan, copy the information into the layout grid */
					for ( l=0 ; l<iColspan ; l++ )
					{
						for ( k=0 ; k<iRowspan ; k++ )
						{
							aLayout[i+k][iColShifted+l] = {
								"cell": nCell,
								"unique": bUnique
							};
							aLayout[i+k].nTr = nTr;
						}
					}
				}
				nCell = nCell.nextSibling;
			}
		}
	}
	
	
	/**
	 * Get an array of unique th elements, one for each column
	 *  @param {object} oSettings dataTables settings object
	 *  @param {node} nHeader automatically detect the layout from this node - optional
	 *  @param {array} aLayout thead/tfoot layout from _fnDetectHeader - optional
	 *  @returns array {node} aReturn list of unique th's
	 *  @memberof DataTable#oApi
	 */
	function _fnGetUniqueThs ( oSettings, nHeader, aLayout )
	{
		var aReturn = [];
		if ( !aLayout )
		{
			aLayout = oSettings.aoHeader;
			if ( nHeader )
			{
				aLayout = [];
				_fnDetectHeader( aLayout, nHeader );
			}
		}
	
		for ( var i=0, iLen=aLayout.length ; i<iLen ; i++ )
		{
			for ( var j=0, jLen=aLayout[i].length ; j<jLen ; j++ )
			{
				if ( aLayout[i][j].unique &&
					 (!aReturn[j] || !oSettings.bSortCellsTop) )
				{
					aReturn[j] = aLayout[i][j].cell;
				}
			}
		}
	
		return aReturn;
	}
	
	/**
	 * Create an Ajax call based on the table's settings, taking into account that
	 * parameters can have multiple forms, and backwards compatibility.
	 *
	 * @param {object} oSettings dataTables settings object
	 * @param {array} data Data to send to the server, required by
	 *     DataTables - may be augmented by developer callbacks
	 * @param {function} fn Callback function to run when data is obtained
	 */
	function _fnBuildAjax( oSettings, data, fn )
	{
		// Compatibility with 1.9-, allow fnServerData and event to manipulate
		_fnCallbackFire( oSettings, 'aoServerParams', 'serverParams', [data] );
	
		// Convert to object based for 1.10+ if using the old array scheme which can
		// come from server-side processing or serverParams
		if ( data && $.isArray(data) ) {
			var tmp = {};
			var rbracket = /(.*?)\[\]$/;
	
			$.each( data, function (key, val) {
				var match = val.name.match(rbracket);
	
				if ( match ) {
					// Support for arrays
					var name = match[0];
	
					if ( ! tmp[ name ] ) {
						tmp[ name ] = [];
					}
					tmp[ name ].push( val.value );
				}
				else {
					tmp[val.name] = val.value;
				}
			} );
			data = tmp;
		}
	
		var ajaxData;
		var ajax = oSettings.ajax;
		var instance = oSettings.oInstance;
		var callback = function ( json ) {
			_fnCallbackFire( oSettings, null, 'xhr', [oSettings, json, oSettings.jqXHR] );
			fn( json );
		};
	
		if ( $.isPlainObject( ajax ) && ajax.data )
		{
			ajaxData = ajax.data;
	
			var newData = $.isFunction( ajaxData ) ?
				ajaxData( data, oSettings ) :  // fn can manipulate data or return
				ajaxData;                      // an object object or array to merge
	
			// If the function returned something, use that alone
			data = $.isFunction( ajaxData ) && newData ?
				newData :
				$.extend( true, data, newData );
	
			// Remove the data property as we've resolved it already and don't want
			// jQuery to do it again (it is restored at the end of the function)
			delete ajax.data;
		}
	
		var baseAjax = {
			"data": data,
			"success": function (json) {
				var error = json.error || json.sError;
				if ( error ) {
					_fnLog( oSettings, 0, error );
				}
	
				oSettings.json = json;
				callback( json );
			},
			"dataType": "json",
			"cache": false,
			"type": oSettings.sServerMethod,
			"error": function (xhr, error, thrown) {
				var ret = _fnCallbackFire( oSettings, null, 'xhr', [oSettings, null, oSettings.jqXHR] );
	
				if ( $.inArray( true, ret ) === -1 ) {
					if ( error == "parsererror" ) {
						_fnLog( oSettings, 0, 'Invalid JSON response', 1 );
					}
					else if ( xhr.readyState === 4 ) {
						_fnLog( oSettings, 0, 'Ajax error', 7 );
					}
				}
	
				_fnProcessingDisplay( oSettings, false );
			}
		};
	
		// Store the data submitted for the API
		oSettings.oAjaxData = data;
	
		// Allow plug-ins and external processes to modify the data
		_fnCallbackFire( oSettings, null, 'preXhr', [oSettings, data] );
	
		if ( oSettings.fnServerData )
		{
			// DataTables 1.9- compatibility
			oSettings.fnServerData.call( instance,
				oSettings.sAjaxSource,
				$.map( data, function (val, key) { // Need to convert back to 1.9 trad format
					return { name: key, value: val };
				} ),
				callback,
				oSettings
			);
		}
		else if ( oSettings.sAjaxSource || typeof ajax === 'string' )
		{
			// DataTables 1.9- compatibility
			oSettings.jqXHR = $.ajax( $.extend( baseAjax, {
				url: ajax || oSettings.sAjaxSource
			} ) );
		}
		else if ( $.isFunction( ajax ) )
		{
			// Is a function - let the caller define what needs to be done
			oSettings.jqXHR = ajax.call( instance, data, callback, oSettings );
		}
		else
		{
			// Object to extend the base settings
			oSettings.jqXHR = $.ajax( $.extend( baseAjax, ajax ) );
	
			// Restore for next time around
			ajax.data = ajaxData;
		}
	}
	
	
	/**
	 * Update the table using an Ajax call
	 *  @param {object} settings dataTables settings object
	 *  @returns {boolean} Block the table drawing or not
	 *  @memberof DataTable#oApi
	 */
	function _fnAjaxUpdate( settings )
	{
		if ( settings.bAjaxDataGet ) {
			settings.iDraw++;
			_fnProcessingDisplay( settings, true );
	
			_fnBuildAjax(
				settings,
				_fnAjaxParameters( settings ),
				function(json) {
					_fnAjaxUpdateDraw( settings, json );
				}
			);
	
			return false;
		}
		return true;
	}
	
	
	/**
	 * Build up the parameters in an object needed for a server-side processing
	 * request. Note that this is basically done twice, is different ways - a modern
	 * method which is used by default in DataTables 1.10 which uses objects and
	 * arrays, or the 1.9- method with is name / value pairs. 1.9 method is used if
	 * the sAjaxSource option is used in the initialisation, or the legacyAjax
	 * option is set.
	 *  @param {object} oSettings dataTables settings object
	 *  @returns {bool} block the table drawing or not
	 *  @memberof DataTable#oApi
	 */
	function _fnAjaxParameters( settings )
	{
		var
			columns = settings.aoColumns,
			columnCount = columns.length,
			features = settings.oFeatures,
			preSearch = settings.oPreviousSearch,
			preColSearch = settings.aoPreSearchCols,
			i, data = [], dataProp, column, columnSearch,
			sort = _fnSortFlatten( settings ),
			displayStart = settings._iDisplayStart,
			displayLength = features.bPaginate !== false ?
				settings._iDisplayLength :
				-1;
	
		var param = function ( name, value ) {
			data.push( { 'name': name, 'value': value } );
		};
	
		// DataTables 1.9- compatible method
		param( 'sEcho',          settings.iDraw );
		param( 'iColumns',       columnCount );
		param( 'sColumns',       _pluck( columns, 'sName' ).join(',') );
		param( 'iDisplayStart',  displayStart );
		param( 'iDisplayLength', displayLength );
	
		// DataTables 1.10+ method
		var d = {
			draw:    settings.iDraw,
			columns: [],
			order:   [],
			start:   displayStart,
			length:  displayLength,
			search:  {
				value: preSearch.sSearch,
				regex: preSearch.bRegex
			}
		};
	
		for ( i=0 ; i<columnCount ; i++ ) {
			column = columns[i];
			columnSearch = preColSearch[i];
			dataProp = typeof column.mData=="function" ? 'function' : column.mData ;
	
			d.columns.push( {
				data:       dataProp,
				name:       column.sName,
				searchable: column.bSearchable,
				orderable:  column.bSortable,
				search:     {
					value: columnSearch.sSearch,
					regex: columnSearch.bRegex
				}
			} );
	
			param( "mDataProp_"+i, dataProp );
	
			if ( features.bFilter ) {
				param( 'sSearch_'+i,     columnSearch.sSearch );
				param( 'bRegex_'+i,      columnSearch.bRegex );
				param( 'bSearchable_'+i, column.bSearchable );
			}
	
			if ( features.bSort ) {
				param( 'bSortable_'+i, column.bSortable );
			}
		}
	
		if ( features.bFilter ) {
			param( 'sSearch', preSearch.sSearch );
			param( 'bRegex', preSearch.bRegex );
		}
	
		if ( features.bSort ) {
			$.each( sort, function ( i, val ) {
				d.order.push( { column: val.col, dir: val.dir } );
	
				param( 'iSortCol_'+i, val.col );
				param( 'sSortDir_'+i, val.dir );
			} );
	
			param( 'iSortingCols', sort.length );
		}
	
		// If the legacy.ajax parameter is null, then we automatically decide which
		// form to use, based on sAjaxSource
		var legacy = DataTable.ext.legacy.ajax;
		if ( legacy === null ) {
			return settings.sAjaxSource ? data : d;
		}
	
		// Otherwise, if legacy has been specified then we use that to decide on the
		// form
		return legacy ? data : d;
	}
	
	
	/**
	 * Data the data from the server (nuking the old) and redraw the table
	 *  @param {object} oSettings dataTables settings object
	 *  @param {object} json json data return from the server.
	 *  @param {string} json.sEcho Tracking flag for DataTables to match requests
	 *  @param {int} json.iTotalRecords Number of records in the data set, not accounting for filtering
	 *  @param {int} json.iTotalDisplayRecords Number of records in the data set, accounting for filtering
	 *  @param {array} json.aaData The data to display on this page
	 *  @param {string} [json.sColumns] Column ordering (sName, comma separated)
	 *  @memberof DataTable#oApi
	 */
	function _fnAjaxUpdateDraw ( settings, json )
	{
		// v1.10 uses camelCase variables, while 1.9 uses Hungarian notation.
		// Support both
		var compat = function ( old, modern ) {
			return json[old] !== undefined ? json[old] : json[modern];
		};
	
		var data = _fnAjaxDataSrc( settings, json );
		var draw            = compat( 'sEcho',                'draw' );
		var recordsTotal    = compat( 'iTotalRecords',        'recordsTotal' );
		var recordsFiltered = compat( 'iTotalDisplayRecords', 'recordsFiltered' );
	
		if ( draw ) {
			// Protect against out of sequence returns
			if ( draw*1 < settings.iDraw ) {
				return;
			}
			settings.iDraw = draw * 1;
		}
	
		_fnClearTable( settings );
		settings._iRecordsTotal   = parseInt(recordsTotal, 10);
		settings._iRecordsDisplay = parseInt(recordsFiltered, 10);
	
		for ( var i=0, ien=data.length ; i<ien ; i++ ) {
			_fnAddData( settings, data[i] );
		}
		settings.aiDisplay = settings.aiDisplayMaster.slice();
	
		settings.bAjaxDataGet = false;
		_fnDraw( settings );
	
		if ( ! settings._bInitComplete ) {
			_fnInitComplete( settings, json );
		}
	
		settings.bAjaxDataGet = true;
		_fnProcessingDisplay( settings, false );
	}
	
	
	/**
	 * Get the data from the JSON data source to use for drawing a table. Using
	 * `_fnGetObjectDataFn` allows the data to be sourced from a property of the
	 * source object, or from a processing function.
	 *  @param {object} oSettings dataTables settings object
	 *  @param  {object} json Data source object / array from the server
	 *  @return {array} Array of data to use
	 */
	function _fnAjaxDataSrc ( oSettings, json )
	{
		var dataSrc = $.isPlainObject( oSettings.ajax ) && oSettings.ajax.dataSrc !== undefined ?
			oSettings.ajax.dataSrc :
			oSettings.sAjaxDataProp; // Compatibility with 1.9-.
	
		// Compatibility with 1.9-. In order to read from aaData, check if the
		// default has been changed, if not, check for aaData
		if ( dataSrc === 'data' ) {
			return json.aaData || json[dataSrc];
		}
	
		return dataSrc !== "" ?
			_fnGetObjectDataFn( dataSrc )( json ) :
			json;
	}
	
	/**
	 * Generate the node required for filtering text
	 *  @returns {node} Filter control element
	 *  @param {object} oSettings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnFeatureHtmlFilter ( settings )
	{
		var classes = settings.oClasses;
		var tableId = settings.sTableId;
		var language = settings.oLanguage;
		var previousSearch = settings.oPreviousSearch;
		var features = settings.aanFeatures;
		var input = '<input type="search" class="'+classes.sFilterInput+'"/>';
	
		var str = language.sSearch;
		str = str.match(/_INPUT_/) ?
			str.replace('_INPUT_', input) :
			str+input;
	
		var filter = $('<div/>', {
				'id': ! features.f ? tableId+'_filter' : null,
				'class': classes.sFilter
			} )
			.append( $('<label/>' ).append( str ) );
	
		var searchFn = function() {
			/* Update all other filter input elements for the new display */
			var n = features.f;
			var val = !this.value ? "" : this.value; // mental IE8 fix :-(
	
			/* Now do the filter */
			if ( val != previousSearch.sSearch ) {
				_fnFilterComplete( settings, {
					"sSearch": val,
					"bRegex": previousSearch.bRegex,
					"bSmart": previousSearch.bSmart ,
					"bCaseInsensitive": previousSearch.bCaseInsensitive
				} );
	
				// Need to redraw, without resorting
				settings._iDisplayStart = 0;
				_fnDraw( settings );
			}
		};
	
		var searchDelay = settings.searchDelay !== null ?
			settings.searchDelay :
			_fnDataSource( settings ) === 'ssp' ?
				400 :
				0;
	
		var jqFilter = $('input', filter)
			.val( previousSearch.sSearch )
			.attr( 'placeholder', language.sSearchPlaceholder )
			.on(
				'keyup.DT search.DT input.DT paste.DT cut.DT',
				searchDelay ?
					_fnThrottle( searchFn, searchDelay ) :
					searchFn
			)
			.on( 'keypress.DT', function(e) {
				/* Prevent form submission */
				if ( e.keyCode == 13 ) {
					return false;
				}
			} )
			.attr('aria-controls', tableId);
	
		// Update the input elements whenever the table is filtered
		$(settings.nTable).on( 'search.dt.DT', function ( ev, s ) {
			if ( settings === s ) {
				// IE9 throws an 'unknown error' if document.activeElement is used
				// inside an iframe or frame...
				try {
					if ( jqFilter[0] !== document.activeElement ) {
						jqFilter.val( previousSearch.sSearch );
					}
				}
				catch ( e ) {}
			}
		} );
	
		return filter[0];
	}
	
	
	/**
	 * Filter the table using both the global filter and column based filtering
	 *  @param {object} oSettings dataTables settings object
	 *  @param {object} oSearch search information
	 *  @param {int} [iForce] force a research of the master array (1) or not (undefined or 0)
	 *  @memberof DataTable#oApi
	 */
	function _fnFilterComplete ( oSettings, oInput, iForce )
	{
		var oPrevSearch = oSettings.oPreviousSearch;
		var aoPrevSearch = oSettings.aoPreSearchCols;
		var fnSaveFilter = function ( oFilter ) {
			/* Save the filtering values */
			oPrevSearch.sSearch = oFilter.sSearch;
			oPrevSearch.bRegex = oFilter.bRegex;
			oPrevSearch.bSmart = oFilter.bSmart;
			oPrevSearch.bCaseInsensitive = oFilter.bCaseInsensitive;
		};
		var fnRegex = function ( o ) {
			// Backwards compatibility with the bEscapeRegex option
			return o.bEscapeRegex !== undefined ? !o.bEscapeRegex : o.bRegex;
		};
	
		// Resolve any column types that are unknown due to addition or invalidation
		// @todo As per sort - can this be moved into an event handler?
		_fnColumnTypes( oSettings );
	
		/* In server-side processing all filtering is done by the server, so no point hanging around here */
		if ( _fnDataSource( oSettings ) != 'ssp' )
		{
			/* Global filter */
			_fnFilter( oSettings, oInput.sSearch, iForce, fnRegex(oInput), oInput.bSmart, oInput.bCaseInsensitive );
			fnSaveFilter( oInput );
	
			/* Now do the individual column filter */
			for ( var i=0 ; i<aoPrevSearch.length ; i++ )
			{
				_fnFilterColumn( oSettings, aoPrevSearch[i].sSearch, i, fnRegex(aoPrevSearch[i]),
					aoPrevSearch[i].bSmart, aoPrevSearch[i].bCaseInsensitive );
			}
	
			/* Custom filtering */
			_fnFilterCustom( oSettings );
		}
		else
		{
			fnSaveFilter( oInput );
		}
	
		/* Tell the draw function we have been filtering */
		oSettings.bFiltered = true;
		_fnCallbackFire( oSettings, null, 'search', [oSettings] );
	}
	
	
	/**
	 * Apply custom filtering functions
	 *  @param {object} oSettings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnFilterCustom( settings )
	{
		var filters = DataTable.ext.search;
		var displayRows = settings.aiDisplay;
		var row, rowIdx;
	
		for ( var i=0, ien=filters.length ; i<ien ; i++ ) {
			var rows = [];
	
			// Loop over each row and see if it should be included
			for ( var j=0, jen=displayRows.length ; j<jen ; j++ ) {
				rowIdx = displayRows[ j ];
				row = settings.aoData[ rowIdx ];
	
				if ( filters[i]( settings, row._aFilterData, rowIdx, row._aData, j ) ) {
					rows.push( rowIdx );
				}
			}
	
			// So the array reference doesn't break set the results into the
			// existing array
			displayRows.length = 0;
			$.merge( displayRows, rows );
		}
	}
	
	
	/**
	 * Filter the table on a per-column basis
	 *  @param {object} oSettings dataTables settings object
	 *  @param {string} sInput string to filter on
	 *  @param {int} iColumn column to filter
	 *  @param {bool} bRegex treat search string as a regular expression or not
	 *  @param {bool} bSmart use smart filtering or not
	 *  @param {bool} bCaseInsensitive Do case insenstive matching or not
	 *  @memberof DataTable#oApi
	 */
	function _fnFilterColumn ( settings, searchStr, colIdx, regex, smart, caseInsensitive )
	{
		if ( searchStr === '' ) {
			return;
		}
	
		var data;
		var out = [];
		var display = settings.aiDisplay;
		var rpSearch = _fnFilterCreateSearch( searchStr, regex, smart, caseInsensitive );
	
		for ( var i=0 ; i<display.length ; i++ ) {
			data = settings.aoData[ display[i] ]._aFilterData[ colIdx ];
	
			if ( rpSearch.test( data ) ) {
				out.push( display[i] );
			}
		}
	
		settings.aiDisplay = out;
	}
	
	
	/**
	 * Filter the data table based on user input and draw the table
	 *  @param {object} settings dataTables settings object
	 *  @param {string} input string to filter on
	 *  @param {int} force optional - force a research of the master array (1) or not (undefined or 0)
	 *  @param {bool} regex treat as a regular expression or not
	 *  @param {bool} smart perform smart filtering or not
	 *  @param {bool} caseInsensitive Do case insenstive matching or not
	 *  @memberof DataTable#oApi
	 */
	function _fnFilter( settings, input, force, regex, smart, caseInsensitive )
	{
		var rpSearch = _fnFilterCreateSearch( input, regex, smart, caseInsensitive );
		var prevSearch = settings.oPreviousSearch.sSearch;
		var displayMaster = settings.aiDisplayMaster;
		var display, invalidated, i;
		var filtered = [];
	
		// Need to take account of custom filtering functions - always filter
		if ( DataTable.ext.search.length !== 0 ) {
			force = true;
		}
	
		// Check if any of the rows were invalidated
		invalidated = _fnFilterData( settings );
	
		// If the input is blank - we just want the full data set
		if ( input.length <= 0 ) {
			settings.aiDisplay = displayMaster.slice();
		}
		else {
			// New search - start from the master array
			if ( invalidated ||
				 force ||
				 prevSearch.length > input.length ||
				 input.indexOf(prevSearch) !== 0 ||
				 settings.bSorted // On resort, the display master needs to be
				                  // re-filtered since indexes will have changed
			) {
				settings.aiDisplay = displayMaster.slice();
			}
	
			// Search the display array
			display = settings.aiDisplay;
	
			for ( i=0 ; i<display.length ; i++ ) {
				if ( rpSearch.test( settings.aoData[ display[i] ]._sFilterRow ) ) {
					filtered.push( display[i] );
				}
			}
	
			settings.aiDisplay = filtered;
		}
	}
	
	
	/**
	 * Build a regular expression object suitable for searching a table
	 *  @param {string} sSearch string to search for
	 *  @param {bool} bRegex treat as a regular expression or not
	 *  @param {bool} bSmart perform smart filtering or not
	 *  @param {bool} bCaseInsensitive Do case insensitive matching or not
	 *  @returns {RegExp} constructed object
	 *  @memberof DataTable#oApi
	 */
	function _fnFilterCreateSearch( search, regex, smart, caseInsensitive )
	{
		search = regex ?
			search :
			_fnEscapeRegex( search );
		
		if ( smart ) {
			/* For smart filtering we want to allow the search to work regardless of
			 * word order. We also want double quoted text to be preserved, so word
			 * order is important - a la google. So this is what we want to
			 * generate:
			 * 
			 * ^(?=.*?\bone\b)(?=.*?\btwo three\b)(?=.*?\bfour\b).*$
			 */
			var a = $.map( search.match( /"[^"]+"|[^ ]+/g ) || [''], function ( word ) {
				if ( word.charAt(0) === '"' ) {
					var m = word.match( /^"(.*)"$/ );
					word = m ? m[1] : word;
				}
	
				return word.replace('"', '');
			} );
	
			search = '^(?=.*?'+a.join( ')(?=.*?' )+').*$';
		}
	
		return new RegExp( search, caseInsensitive ? 'i' : '' );
	}
	
	
	/**
	 * Escape a string such that it can be used in a regular expression
	 *  @param {string} sVal string to escape
	 *  @returns {string} escaped string
	 *  @memberof DataTable#oApi
	 */
	var _fnEscapeRegex = DataTable.util.escapeRegex;
	
	var __filter_div = $('<div>')[0];
	var __filter_div_textContent = __filter_div.textContent !== undefined;
	
	// Update the filtering data for each row if needed (by invalidation or first run)
	function _fnFilterData ( settings )
	{
		var columns = settings.aoColumns;
		var column;
		var i, j, ien, jen, filterData, cellData, row;
		var fomatters = DataTable.ext.type.search;
		var wasInvalidated = false;
	
		for ( i=0, ien=settings.aoData.length ; i<ien ; i++ ) {
			row = settings.aoData[i];
	
			if ( ! row._aFilterData ) {
				filterData = [];
	
				for ( j=0, jen=columns.length ; j<jen ; j++ ) {
					column = columns[j];
	
					if ( column.bSearchable ) {
						cellData = _fnGetCellData( settings, i, j, 'filter' );
	
						if ( fomatters[ column.sType ] ) {
							cellData = fomatters[ column.sType ]( cellData );
						}
	
						// Search in DataTables 1.10 is string based. In 1.11 this
						// should be altered to also allow strict type checking.
						if ( cellData === null ) {
							cellData = '';
						}
	
						if ( typeof cellData !== 'string' && cellData.toString ) {
							cellData = cellData.toString();
						}
					}
					else {
						cellData = '';
					}
	
					// If it looks like there is an HTML entity in the string,
					// attempt to decode it so sorting works as expected. Note that
					// we could use a single line of jQuery to do this, but the DOM
					// method used here is much faster http://jsperf.com/html-decode
					if ( cellData.indexOf && cellData.indexOf('&') !== -1 ) {
						__filter_div.innerHTML = cellData;
						cellData = __filter_div_textContent ?
							__filter_div.textContent :
							__filter_div.innerText;
					}
	
					if ( cellData.replace ) {
						cellData = cellData.replace(/[\r\n]/g, '');
					}
	
					filterData.push( cellData );
				}
	
				row._aFilterData = filterData;
				row._sFilterRow = filterData.join('  ');
				wasInvalidated = true;
			}
		}
	
		return wasInvalidated;
	}
	
	
	/**
	 * Convert from the internal Hungarian notation to camelCase for external
	 * interaction
	 *  @param {object} obj Object to convert
	 *  @returns {object} Inverted object
	 *  @memberof DataTable#oApi
	 */
	function _fnSearchToCamel ( obj )
	{
		return {
			search:          obj.sSearch,
			smart:           obj.bSmart,
			regex:           obj.bRegex,
			caseInsensitive: obj.bCaseInsensitive
		};
	}
	
	
	
	/**
	 * Convert from camelCase notation to the internal Hungarian. We could use the
	 * Hungarian convert function here, but this is cleaner
	 *  @param {object} obj Object to convert
	 *  @returns {object} Inverted object
	 *  @memberof DataTable#oApi
	 */
	function _fnSearchToHung ( obj )
	{
		return {
			sSearch:          obj.search,
			bSmart:           obj.smart,
			bRegex:           obj.regex,
			bCaseInsensitive: obj.caseInsensitive
		};
	}
	
	/**
	 * Generate the node required for the info display
	 *  @param {object} oSettings dataTables settings object
	 *  @returns {node} Information element
	 *  @memberof DataTable#oApi
	 */
	function _fnFeatureHtmlInfo ( settings )
	{
		var
			tid = settings.sTableId,
			nodes = settings.aanFeatures.i,
			n = $('<div/>', {
				'class': settings.oClasses.sInfo,
				'id': ! nodes ? tid+'_info' : null
			} );
	
		if ( ! nodes ) {
			// Update display on each draw
			settings.aoDrawCallback.push( {
				"fn": _fnUpdateInfo,
				"sName": "information"
			} );
	
			n
				.attr( 'role', 'status' )
				.attr( 'aria-live', 'polite' );
	
			// Table is described by our info div
			$(settings.nTable).attr( 'aria-describedby', tid+'_info' );
		}
	
		return n[0];
	}
	
	
	/**
	 * Update the information elements in the display
	 *  @param {object} settings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnUpdateInfo ( settings )
	{
		/* Show information about the table */
		var nodes = settings.aanFeatures.i;
		if ( nodes.length === 0 ) {
			return;
		}
	
		var
			lang  = settings.oLanguage,
			start = settings._iDisplayStart+1,
			end   = settings.fnDisplayEnd(),
			max   = settings.fnRecordsTotal(),
			total = settings.fnRecordsDisplay(),
			out   = total ?
				lang.sInfo :
				lang.sInfoEmpty;
	
		if ( total !== max ) {
			/* Record set after filtering */
			out += ' ' + lang.sInfoFiltered;
		}
	
		// Convert the macros
		out += lang.sInfoPostFix;
		out = _fnInfoMacros( settings, out );
	
		var callback = lang.fnInfoCallback;
		if ( callback !== null ) {
			out = callback.call( settings.oInstance,
				settings, start, end, max, total, out
			);
		}
	
		$(nodes).html( out );
	}
	
	
	function _fnInfoMacros ( settings, str )
	{
		// When infinite scrolling, we are always starting at 1. _iDisplayStart is used only
		// internally
		var
			formatter  = settings.fnFormatNumber,
			start      = settings._iDisplayStart+1,
			len        = settings._iDisplayLength,
			vis        = settings.fnRecordsDisplay(),
			all        = len === -1;
	
		return str.
			replace(/_START_/g, formatter.call( settings, start ) ).
			replace(/_END_/g,   formatter.call( settings, settings.fnDisplayEnd() ) ).
			replace(/_MAX_/g,   formatter.call( settings, settings.fnRecordsTotal() ) ).
			replace(/_TOTAL_/g, formatter.call( settings, vis ) ).
			replace(/_PAGE_/g,  formatter.call( settings, all ? 1 : Math.ceil( start / len ) ) ).
			replace(/_PAGES_/g, formatter.call( settings, all ? 1 : Math.ceil( vis / len ) ) );
	}
	
	
	
	/**
	 * Draw the table for the first time, adding all required features
	 *  @param {object} settings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnInitialise ( settings )
	{
		var i, iLen, iAjaxStart=settings.iInitDisplayStart;
		var columns = settings.aoColumns, column;
		var features = settings.oFeatures;
		var deferLoading = settings.bDeferLoading; // value modified by the draw
	
		/* Ensure that the table data is fully initialised */
		if ( ! settings.bInitialised ) {
			setTimeout( function(){ _fnInitialise( settings ); }, 200 );
			return;
		}
	
		/* Show the display HTML options */
		_fnAddOptionsHtml( settings );
	
		/* Build and draw the header / footer for the table */
		_fnBuildHead( settings );
		_fnDrawHead( settings, settings.aoHeader );
		_fnDrawHead( settings, settings.aoFooter );
	
		/* Okay to show that something is going on now */
		_fnProcessingDisplay( settings, true );
	
		/* Calculate sizes for columns */
		if ( features.bAutoWidth ) {
			_fnCalculateColumnWidths( settings );
		}
	
		for ( i=0, iLen=columns.length ; i<iLen ; i++ ) {
			column = columns[i];
	
			if ( column.sWidth ) {
				column.nTh.style.width = _fnStringToCss( column.sWidth );
			}
		}
	
		_fnCallbackFire( settings, null, 'preInit', [settings] );
	
		// If there is default sorting required - let's do it. The sort function
		// will do the drawing for us. Otherwise we draw the table regardless of the
		// Ajax source - this allows the table to look initialised for Ajax sourcing
		// data (show 'loading' message possibly)
		_fnReDraw( settings );
	
		// Server-side processing init complete is done by _fnAjaxUpdateDraw
		var dataSrc = _fnDataSource( settings );
		if ( dataSrc != 'ssp' || deferLoading ) {
			// if there is an ajax source load the data
			if ( dataSrc == 'ajax' ) {
				_fnBuildAjax( settings, [], function(json) {
					var aData = _fnAjaxDataSrc( settings, json );
	
					// Got the data - add it to the table
					for ( i=0 ; i<aData.length ; i++ ) {
						_fnAddData( settings, aData[i] );
					}
	
					// Reset the init display for cookie saving. We've already done
					// a filter, and therefore cleared it before. So we need to make
					// it appear 'fresh'
					settings.iInitDisplayStart = iAjaxStart;
	
					_fnReDraw( settings );
	
					_fnProcessingDisplay( settings, false );
					_fnInitComplete( settings, json );
				}, settings );
			}
			else {
				_fnProcessingDisplay( settings, false );
				_fnInitComplete( settings );
			}
		}
	}
	
	
	/**
	 * Draw the table for the first time, adding all required features
	 *  @param {object} oSettings dataTables settings object
	 *  @param {object} [json] JSON from the server that completed the table, if using Ajax source
	 *    with client-side processing (optional)
	 *  @memberof DataTable#oApi
	 */
	function _fnInitComplete ( settings, json )
	{
		settings._bInitComplete = true;
	
		// When data was added after the initialisation (data or Ajax) we need to
		// calculate the column sizing
		if ( json || settings.oInit.aaData ) {
			_fnAdjustColumnSizing( settings );
		}
	
		_fnCallbackFire( settings, null, 'plugin-init', [settings, json] );
		_fnCallbackFire( settings, 'aoInitComplete', 'init', [settings, json] );
	}
	
	
	function _fnLengthChange ( settings, val )
	{
		var len = parseInt( val, 10 );
		settings._iDisplayLength = len;
	
		_fnLengthOverflow( settings );
	
		// Fire length change event
		_fnCallbackFire( settings, null, 'length', [settings, len] );
	}
	
	
	/**
	 * Generate the node required for user display length changing
	 *  @param {object} settings dataTables settings object
	 *  @returns {node} Display length feature node
	 *  @memberof DataTable#oApi
	 */
	function _fnFeatureHtmlLength ( settings )
	{
		var
			classes  = settings.oClasses,
			tableId  = settings.sTableId,
			menu     = settings.aLengthMenu,
			d2       = $.isArray( menu[0] ),
			lengths  = d2 ? menu[0] : menu,
			language = d2 ? menu[1] : menu;
	
		var select = $('<select/>', {
			'name':          tableId+'_length',
			'aria-controls': tableId,
			'class':         classes.sLengthSelect
		} );
	
		for ( var i=0, ien=lengths.length ; i<ien ; i++ ) {
			select[0][ i ] = new Option(
				typeof language[i] === 'number' ?
					settings.fnFormatNumber( language[i] ) :
					language[i],
				lengths[i]
			);
		}
	
		var div = $('<div><label/></div>').addClass( classes.sLength );
		if ( ! settings.aanFeatures.l ) {
			div[0].id = tableId+'_length';
		}
	
		div.children().append(
			settings.oLanguage.sLengthMenu.replace( '_MENU_', select[0].outerHTML )
		);
	
		// Can't use `select` variable as user might provide their own and the
		// reference is broken by the use of outerHTML
		$('select', div)
			.val( settings._iDisplayLength )
			.on( 'change.DT', function(e) {
				_fnLengthChange( settings, $(this).val() );
				_fnDraw( settings );
			} );
	
		// Update node value whenever anything changes the table's length
		$(settings.nTable).on( 'length.dt.DT', function (e, s, len) {
			if ( settings === s ) {
				$('select', div).val( len );
			}
		} );
	
		return div[0];
	}
	
	
	
	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * Note that most of the paging logic is done in
	 * DataTable.ext.pager
	 */
	
	/**
	 * Generate the node required for default pagination
	 *  @param {object} oSettings dataTables settings object
	 *  @returns {node} Pagination feature node
	 *  @memberof DataTable#oApi
	 */
	function _fnFeatureHtmlPaginate ( settings )
	{
		var
			type   = settings.sPaginationType,
			plugin = DataTable.ext.pager[ type ],
			modern = typeof plugin === 'function',
			redraw = function( settings ) {
				_fnDraw( settings );
			},
			node = $('<div/>').addClass( settings.oClasses.sPaging + type )[0],
			features = settings.aanFeatures;
	
		if ( ! modern ) {
			plugin.fnInit( settings, node, redraw );
		}
	
		/* Add a draw callback for the pagination on first instance, to update the paging display */
		if ( ! features.p )
		{
			node.id = settings.sTableId+'_paginate';
	
			settings.aoDrawCallback.push( {
				"fn": function( settings ) {
					if ( modern ) {
						var
							start      = settings._iDisplayStart,
							len        = settings._iDisplayLength,
							visRecords = settings.fnRecordsDisplay(),
							all        = len === -1,
							page = all ? 0 : Math.ceil( start / len ),
							pages = all ? 1 : Math.ceil( visRecords / len ),
							buttons = plugin(page, pages),
							i, ien;
	
						for ( i=0, ien=features.p.length ; i<ien ; i++ ) {
							_fnRenderer( settings, 'pageButton' )(
								settings, features.p[i], i, buttons, page, pages
							);
						}
					}
					else {
						plugin.fnUpdate( settings, redraw );
					}
				},
				"sName": "pagination"
			} );
		}
	
		return node;
	}
	
	
	/**
	 * Alter the display settings to change the page
	 *  @param {object} settings DataTables settings object
	 *  @param {string|int} action Paging action to take: "first", "previous",
	 *    "next" or "last" or page number to jump to (integer)
	 *  @param [bool] redraw Automatically draw the update or not
	 *  @returns {bool} true page has changed, false - no change
	 *  @memberof DataTable#oApi
	 */
	function _fnPageChange ( settings, action, redraw )
	{
		var
			start     = settings._iDisplayStart,
			len       = settings._iDisplayLength,
			records   = settings.fnRecordsDisplay();
	
		if ( records === 0 || len === -1 )
		{
			start = 0;
		}
		else if ( typeof action === "number" )
		{
			start = action * len;
	
			if ( start > records )
			{
				start = 0;
			}
		}
		else if ( action == "first" )
		{
			start = 0;
		}
		else if ( action == "previous" )
		{
			start = len >= 0 ?
				start - len :
				0;
	
			if ( start < 0 )
			{
			  start = 0;
			}
		}
		else if ( action == "next" )
		{
			if ( start + len < records )
			{
				start += len;
			}
		}
		else if ( action == "last" )
		{
			start = Math.floor( (records-1) / len) * len;
		}
		else
		{
			_fnLog( settings, 0, "Unknown paging action: "+action, 5 );
		}
	
		var changed = settings._iDisplayStart !== start;
		settings._iDisplayStart = start;
	
		if ( changed ) {
			_fnCallbackFire( settings, null, 'page', [settings] );
	
			if ( redraw ) {
				_fnDraw( settings );
			}
		}
	
		return changed;
	}
	
	
	
	/**
	 * Generate the node required for the processing node
	 *  @param {object} settings dataTables settings object
	 *  @returns {node} Processing element
	 *  @memberof DataTable#oApi
	 */
	function _fnFeatureHtmlProcessing ( settings )
	{
		return $('<div/>', {
				'id': ! settings.aanFeatures.r ? settings.sTableId+'_processing' : null,
				'class': settings.oClasses.sProcessing
			} )
			.html( settings.oLanguage.sProcessing )
			.insertBefore( settings.nTable )[0];
	}
	
	
	/**
	 * Display or hide the processing indicator
	 *  @param {object} settings dataTables settings object
	 *  @param {bool} show Show the processing indicator (true) or not (false)
	 *  @memberof DataTable#oApi
	 */
	function _fnProcessingDisplay ( settings, show )
	{
		if ( settings.oFeatures.bProcessing ) {
			$(settings.aanFeatures.r).css( 'display', show ? 'block' : 'none' );
		}
	
		_fnCallbackFire( settings, null, 'processing', [settings, show] );
	}
	
	/**
	 * Add any control elements for the table - specifically scrolling
	 *  @param {object} settings dataTables settings object
	 *  @returns {node} Node to add to the DOM
	 *  @memberof DataTable#oApi
	 */
	function _fnFeatureHtmlTable ( settings )
	{
		var table = $(settings.nTable);
	
		// Add the ARIA grid role to the table
		table.attr( 'role', 'grid' );
	
		// Scrolling from here on in
		var scroll = settings.oScroll;
	
		if ( scroll.sX === '' && scroll.sY === '' ) {
			return settings.nTable;
		}
	
		var scrollX = scroll.sX;
		var scrollY = scroll.sY;
		var classes = settings.oClasses;
		var caption = table.children('caption');
		var captionSide = caption.length ? caption[0]._captionSide : null;
		var headerClone = $( table[0].cloneNode(false) );
		var footerClone = $( table[0].cloneNode(false) );
		var footer = table.children('tfoot');
		var _div = '<div/>';
		var size = function ( s ) {
			return !s ? null : _fnStringToCss( s );
		};
	
		if ( ! footer.length ) {
			footer = null;
		}
	
		/*
		 * The HTML structure that we want to generate in this function is:
		 *  div - scroller
		 *    div - scroll head
		 *      div - scroll head inner
		 *        table - scroll head table
		 *          thead - thead
		 *    div - scroll body
		 *      table - table (master table)
		 *        thead - thead clone for sizing
		 *        tbody - tbody
		 *    div - scroll foot
		 *      div - scroll foot inner
		 *        table - scroll foot table
		 *          tfoot - tfoot
		 */
		var scroller = $( _div, { 'class': classes.sScrollWrapper } )
			.append(
				$(_div, { 'class': classes.sScrollHead } )
					.css( {
						overflow: 'hidden',
						position: 'relative',
						border: 0,
						width: scrollX ? size(scrollX) : '100%'
					} )
					.append(
						$(_div, { 'class': classes.sScrollHeadInner } )
							.css( {
								'box-sizing': 'content-box',
								width: scroll.sXInner || '100%'
							} )
							.append(
								headerClone
									.removeAttr('id')
									.css( 'margin-left', 0 )
									.append( captionSide === 'top' ? caption : null )
									.append(
										table.children('thead')
									)
							)
					)
			)
			.append(
				$(_div, { 'class': classes.sScrollBody } )
					.css( {
						position: 'relative',
						overflow: 'auto',
						width: size( scrollX )
					} )
					.append( table )
			);
	
		if ( footer ) {
			scroller.append(
				$(_div, { 'class': classes.sScrollFoot } )
					.css( {
						overflow: 'hidden',
						border: 0,
						width: scrollX ? size(scrollX) : '100%'
					} )
					.append(
						$(_div, { 'class': classes.sScrollFootInner } )
							.append(
								footerClone
									.removeAttr('id')
									.css( 'margin-left', 0 )
									.append( captionSide === 'bottom' ? caption : null )
									.append(
										table.children('tfoot')
									)
							)
					)
			);
		}
	
		var children = scroller.children();
		var scrollHead = children[0];
		var scrollBody = children[1];
		var scrollFoot = footer ? children[2] : null;
	
		// When the body is scrolled, then we also want to scroll the headers
		if ( scrollX ) {
			$(scrollBody).on( 'scroll.DT', function (e) {
				var scrollLeft = this.scrollLeft;
	
				scrollHead.scrollLeft = scrollLeft;
	
				if ( footer ) {
					scrollFoot.scrollLeft = scrollLeft;
				}
			} );
		}
	
		$(scrollBody).css(
			scrollY && scroll.bCollapse ? 'max-height' : 'height', 
			scrollY
		);
	
		settings.nScrollHead = scrollHead;
		settings.nScrollBody = scrollBody;
		settings.nScrollFoot = scrollFoot;
	
		// On redraw - align columns
		settings.aoDrawCallback.push( {
			"fn": _fnScrollDraw,
			"sName": "scrolling"
		} );
	
		return scroller[0];
	}
	
	
	
	/**
	 * Update the header, footer and body tables for resizing - i.e. column
	 * alignment.
	 *
	 * Welcome to the most horrible function DataTables. The process that this
	 * function follows is basically:
	 *   1. Re-create the table inside the scrolling div
	 *   2. Take live measurements from the DOM
	 *   3. Apply the measurements to align the columns
	 *   4. Clean up
	 *
	 *  @param {object} settings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnScrollDraw ( settings )
	{
		// Given that this is such a monster function, a lot of variables are use
		// to try and keep the minimised size as small as possible
		var
			scroll         = settings.oScroll,
			scrollX        = scroll.sX,
			scrollXInner   = scroll.sXInner,
			scrollY        = scroll.sY,
			barWidth       = scroll.iBarWidth,
			divHeader      = $(settings.nScrollHead),
			divHeaderStyle = divHeader[0].style,
			divHeaderInner = divHeader.children('div'),
			divHeaderInnerStyle = divHeaderInner[0].style,
			divHeaderTable = divHeaderInner.children('table'),
			divBodyEl      = settings.nScrollBody,
			divBody        = $(divBodyEl),
			divBodyStyle   = divBodyEl.style,
			divFooter      = $(settings.nScrollFoot),
			divFooterInner = divFooter.children('div'),
			divFooterTable = divFooterInner.children('table'),
			header         = $(settings.nTHead),
			table          = $(settings.nTable),
			tableEl        = table[0],
			tableStyle     = tableEl.style,
			footer         = settings.nTFoot ? $(settings.nTFoot) : null,
			browser        = settings.oBrowser,
			ie67           = browser.bScrollOversize,
			dtHeaderCells  = _pluck( settings.aoColumns, 'nTh' ),
			headerTrgEls, footerTrgEls,
			headerSrcEls, footerSrcEls,
			headerCopy, footerCopy,
			headerWidths=[], footerWidths=[],
			headerContent=[], footerContent=[],
			idx, correction, sanityWidth,
			zeroOut = function(nSizer) {
				var style = nSizer.style;
				style.paddingTop = "0";
				style.paddingBottom = "0";
				style.borderTopWidth = "0";
				style.borderBottomWidth = "0";
				style.height = 0;
			};
	
		// If the scrollbar visibility has changed from the last draw, we need to
		// adjust the column sizes as the table width will have changed to account
		// for the scrollbar
		var scrollBarVis = divBodyEl.scrollHeight > divBodyEl.clientHeight;
		
		if ( settings.scrollBarVis !== scrollBarVis && settings.scrollBarVis !== undefined ) {
			settings.scrollBarVis = scrollBarVis;
			_fnAdjustColumnSizing( settings );
			return; // adjust column sizing will call this function again
		}
		else {
			settings.scrollBarVis = scrollBarVis;
		}
	
		/*
		 * 1. Re-create the table inside the scrolling div
		 */
	
		// Remove the old minimised thead and tfoot elements in the inner table
		table.children('thead, tfoot').remove();
	
		if ( footer ) {
			footerCopy = footer.clone().prependTo( table );
			footerTrgEls = footer.find('tr'); // the original tfoot is in its own table and must be sized
			footerSrcEls = footerCopy.find('tr');
		}
	
		// Clone the current header and footer elements and then place it into the inner table
		headerCopy = header.clone().prependTo( table );
		headerTrgEls = header.find('tr'); // original header is in its own table
		headerSrcEls = headerCopy.find('tr');
		headerCopy.find('th, td').removeAttr('tabindex');
	
	
		/*
		 * 2. Take live measurements from the DOM - do not alter the DOM itself!
		 */
	
		// Remove old sizing and apply the calculated column widths
		// Get the unique column headers in the newly created (cloned) header. We want to apply the
		// calculated sizes to this header
		if ( ! scrollX )
		{
			divBodyStyle.width = '100%';
			divHeader[0].style.width = '100%';
		}
	
		$.each( _fnGetUniqueThs( settings, headerCopy ), function ( i, el ) {
			idx = _fnVisibleToColumnIndex( settings, i );
			el.style.width = settings.aoColumns[idx].sWidth;
		} );
	
		if ( footer ) {
			_fnApplyToChildren( function(n) {
				n.style.width = "";
			}, footerSrcEls );
		}
	
		// Size the table as a whole
		sanityWidth = table.outerWidth();
		if ( scrollX === "" ) {
			// No x scrolling
			tableStyle.width = "100%";
	
			// IE7 will make the width of the table when 100% include the scrollbar
			// - which is shouldn't. When there is a scrollbar we need to take this
			// into account.
			if ( ie67 && (table.find('tbody').height() > divBodyEl.offsetHeight ||
				divBody.css('overflow-y') == "scroll")
			) {
				tableStyle.width = _fnStringToCss( table.outerWidth() - barWidth);
			}
	
			// Recalculate the sanity width
			sanityWidth = table.outerWidth();
		}
		else if ( scrollXInner !== "" ) {
			// legacy x scroll inner has been given - use it
			tableStyle.width = _fnStringToCss(scrollXInner);
	
			// Recalculate the sanity width
			sanityWidth = table.outerWidth();
		}
	
		// Hidden header should have zero height, so remove padding and borders. Then
		// set the width based on the real headers
	
		// Apply all styles in one pass
		_fnApplyToChildren( zeroOut, headerSrcEls );
	
		// Read all widths in next pass
		_fnApplyToChildren( function(nSizer) {
			headerContent.push( nSizer.innerHTML );
			headerWidths.push( _fnStringToCss( $(nSizer).css('width') ) );
		}, headerSrcEls );
	
		// Apply all widths in final pass
		_fnApplyToChildren( function(nToSize, i) {
			// Only apply widths to the DataTables detected header cells - this
			// prevents complex headers from having contradictory sizes applied
			if ( $.inArray( nToSize, dtHeaderCells ) !== -1 ) {
				nToSize.style.width = headerWidths[i];
			}
		}, headerTrgEls );
	
		$(headerSrcEls).height(0);
	
		/* Same again with the footer if we have one */
		if ( footer )
		{
			_fnApplyToChildren( zeroOut, footerSrcEls );
	
			_fnApplyToChildren( function(nSizer) {
				footerContent.push( nSizer.innerHTML );
				footerWidths.push( _fnStringToCss( $(nSizer).css('width') ) );
			}, footerSrcEls );
	
			_fnApplyToChildren( function(nToSize, i) {
				nToSize.style.width = footerWidths[i];
			}, footerTrgEls );
	
			$(footerSrcEls).height(0);
		}
	
	
		/*
		 * 3. Apply the measurements
		 */
	
		// "Hide" the header and footer that we used for the sizing. We need to keep
		// the content of the cell so that the width applied to the header and body
		// both match, but we want to hide it completely. We want to also fix their
		// width to what they currently are
		_fnApplyToChildren( function(nSizer, i) {
			nSizer.innerHTML = '<div class="dataTables_sizing" style="height:0;overflow:hidden;">'+headerContent[i]+'</div>';
			nSizer.style.width = headerWidths[i];
		}, headerSrcEls );
	
		if ( footer )
		{
			_fnApplyToChildren( function(nSizer, i) {
				nSizer.innerHTML = '<div class="dataTables_sizing" style="height:0;overflow:hidden;">'+footerContent[i]+'</div>';
				nSizer.style.width = footerWidths[i];
			}, footerSrcEls );
		}
	
		// Sanity check that the table is of a sensible width. If not then we are going to get
		// misalignment - try to prevent this by not allowing the table to shrink below its min width
		if ( table.outerWidth() < sanityWidth )
		{
			// The min width depends upon if we have a vertical scrollbar visible or not */
			correction = ((divBodyEl.scrollHeight > divBodyEl.offsetHeight ||
				divBody.css('overflow-y') == "scroll")) ?
					sanityWidth+barWidth :
					sanityWidth;
	
			// IE6/7 are a law unto themselves...
			if ( ie67 && (divBodyEl.scrollHeight >
				divBodyEl.offsetHeight || divBody.css('overflow-y') == "scroll")
			) {
				tableStyle.width = _fnStringToCss( correction-barWidth );
			}
	
			// And give the user a warning that we've stopped the table getting too small
			if ( scrollX === "" || scrollXInner !== "" ) {
				_fnLog( settings, 1, 'Possible column misalignment', 6 );
			}
		}
		else
		{
			correction = '100%';
		}
	
		// Apply to the container elements
		divBodyStyle.width = _fnStringToCss( correction );
		divHeaderStyle.width = _fnStringToCss( correction );
	
		if ( footer ) {
			settings.nScrollFoot.style.width = _fnStringToCss( correction );
		}
	
	
		/*
		 * 4. Clean up
		 */
		if ( ! scrollY ) {
			/* IE7< puts a vertical scrollbar in place (when it shouldn't be) due to subtracting
			 * the scrollbar height from the visible display, rather than adding it on. We need to
			 * set the height in order to sort this. Don't want to do it in any other browsers.
			 */
			if ( ie67 ) {
				divBodyStyle.height = _fnStringToCss( tableEl.offsetHeight+barWidth );
			}
		}
	
		/* Finally set the width's of the header and footer tables */
		var iOuterWidth = table.outerWidth();
		divHeaderTable[0].style.width = _fnStringToCss( iOuterWidth );
		divHeaderInnerStyle.width = _fnStringToCss( iOuterWidth );
	
		// Figure out if there are scrollbar present - if so then we need a the header and footer to
		// provide a bit more space to allow "overflow" scrolling (i.e. past the scrollbar)
		var bScrolling = table.height() > divBodyEl.clientHeight || divBody.css('overflow-y') == "scroll";
		var padding = 'padding' + (browser.bScrollbarLeft ? 'Left' : 'Right' );
		divHeaderInnerStyle[ padding ] = bScrolling ? barWidth+"px" : "0px";
	
		if ( footer ) {
			divFooterTable[0].style.width = _fnStringToCss( iOuterWidth );
			divFooterInner[0].style.width = _fnStringToCss( iOuterWidth );
			divFooterInner[0].style[padding] = bScrolling ? barWidth+"px" : "0px";
		}
	
		// Correct DOM ordering for colgroup - comes before the thead
		table.children('colgroup').insertBefore( table.children('thead') );
	
		/* Adjust the position of the header in case we loose the y-scrollbar */
		divBody.scroll();
	
		// If sorting or filtering has occurred, jump the scrolling back to the top
		// only if we aren't holding the position
		if ( (settings.bSorted || settings.bFiltered) && ! settings._drawHold ) {
			divBodyEl.scrollTop = 0;
		}
	}
	
	
	
	/**
	 * Apply a given function to the display child nodes of an element array (typically
	 * TD children of TR rows
	 *  @param {function} fn Method to apply to the objects
	 *  @param array {nodes} an1 List of elements to look through for display children
	 *  @param array {nodes} an2 Another list (identical structure to the first) - optional
	 *  @memberof DataTable#oApi
	 */
	function _fnApplyToChildren( fn, an1, an2 )
	{
		var index=0, i=0, iLen=an1.length;
		var nNode1, nNode2;
	
		while ( i < iLen ) {
			nNode1 = an1[i].firstChild;
			nNode2 = an2 ? an2[i].firstChild : null;
	
			while ( nNode1 ) {
				if ( nNode1.nodeType === 1 ) {
					if ( an2 ) {
						fn( nNode1, nNode2, index );
					}
					else {
						fn( nNode1, index );
					}
	
					index++;
				}
	
				nNode1 = nNode1.nextSibling;
				nNode2 = an2 ? nNode2.nextSibling : null;
			}
	
			i++;
		}
	}
	
	
	
	var __re_html_remove = /<.*?>/g;
	
	
	/**
	 * Calculate the width of columns for the table
	 *  @param {object} oSettings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnCalculateColumnWidths ( oSettings )
	{
		var
			table = oSettings.nTable,
			columns = oSettings.aoColumns,
			scroll = oSettings.oScroll,
			scrollY = scroll.sY,
			scrollX = scroll.sX,
			scrollXInner = scroll.sXInner,
			columnCount = columns.length,
			visibleColumns = _fnGetColumns( oSettings, 'bVisible' ),
			headerCells = $('th', oSettings.nTHead),
			tableWidthAttr = table.getAttribute('width'), // from DOM element
			tableContainer = table.parentNode,
			userInputs = false,
			i, column, columnIdx, width, outerWidth,
			browser = oSettings.oBrowser,
			ie67 = browser.bScrollOversize;
	
		var styleWidth = table.style.width;
		if ( styleWidth && styleWidth.indexOf('%') !== -1 ) {
			tableWidthAttr = styleWidth;
		}
	
		/* Convert any user input sizes into pixel sizes */
		for ( i=0 ; i<visibleColumns.length ; i++ ) {
			column = columns[ visibleColumns[i] ];
	
			if ( column.sWidth !== null ) {
				column.sWidth = _fnConvertToWidth( column.sWidthOrig, tableContainer );
	
				userInputs = true;
			}
		}
	
		/* If the number of columns in the DOM equals the number that we have to
		 * process in DataTables, then we can use the offsets that are created by
		 * the web- browser. No custom sizes can be set in order for this to happen,
		 * nor scrolling used
		 */
		if ( ie67 || ! userInputs && ! scrollX && ! scrollY &&
		     columnCount == _fnVisbleColumns( oSettings ) &&
		     columnCount == headerCells.length
		) {
			for ( i=0 ; i<columnCount ; i++ ) {
				var colIdx = _fnVisibleToColumnIndex( oSettings, i );
	
				if ( colIdx !== null ) {
					columns[ colIdx ].sWidth = _fnStringToCss( headerCells.eq(i).width() );
				}
			}
		}
		else
		{
			// Otherwise construct a single row, worst case, table with the widest
			// node in the data, assign any user defined widths, then insert it into
			// the DOM and allow the browser to do all the hard work of calculating
			// table widths
			var tmpTable = $(table).clone() // don't use cloneNode - IE8 will remove events on the main table
				.css( 'visibility', 'hidden' )
				.removeAttr( 'id' );
	
			// Clean up the table body
			tmpTable.find('tbody tr').remove();
			var tr = $('<tr/>').appendTo( tmpTable.find('tbody') );
	
			// Clone the table header and footer - we can't use the header / footer
			// from the cloned table, since if scrolling is active, the table's
			// real header and footer are contained in different table tags
			tmpTable.find('thead, tfoot').remove();
			tmpTable
				.append( $(oSettings.nTHead).clone() )
				.append( $(oSettings.nTFoot).clone() );
	
			// Remove any assigned widths from the footer (from scrolling)
			tmpTable.find('tfoot th, tfoot td').css('width', '');
	
			// Apply custom sizing to the cloned header
			headerCells = _fnGetUniqueThs( oSettings, tmpTable.find('thead')[0] );
	
			for ( i=0 ; i<visibleColumns.length ; i++ ) {
				column = columns[ visibleColumns[i] ];
	
				headerCells[i].style.width = column.sWidthOrig !== null && column.sWidthOrig !== '' ?
					_fnStringToCss( column.sWidthOrig ) :
					'';
	
				// For scrollX we need to force the column width otherwise the
				// browser will collapse it. If this width is smaller than the
				// width the column requires, then it will have no effect
				if ( column.sWidthOrig && scrollX ) {
					$( headerCells[i] ).append( $('<div/>').css( {
						width: column.sWidthOrig,
						margin: 0,
						padding: 0,
						border: 0,
						height: 1
					} ) );
				}
			}
	
			// Find the widest cell for each column and put it into the table
			if ( oSettings.aoData.length ) {
				for ( i=0 ; i<visibleColumns.length ; i++ ) {
					columnIdx = visibleColumns[i];
					column = columns[ columnIdx ];
	
					$( _fnGetWidestNode( oSettings, columnIdx ) )
						.clone( false )
						.append( column.sContentPadding )
						.appendTo( tr );
				}
			}
	
			// Tidy the temporary table - remove name attributes so there aren't
			// duplicated in the dom (radio elements for example)
			$('[name]', tmpTable).removeAttr('name');
	
			// Table has been built, attach to the document so we can work with it.
			// A holding element is used, positioned at the top of the container
			// with minimal height, so it has no effect on if the container scrolls
			// or not. Otherwise it might trigger scrolling when it actually isn't
			// needed
			var holder = $('<div/>').css( scrollX || scrollY ?
					{
						position: 'absolute',
						top: 0,
						left: 0,
						height: 1,
						right: 0,
						overflow: 'hidden'
					} :
					{}
				)
				.append( tmpTable )
				.appendTo( tableContainer );
	
			// When scrolling (X or Y) we want to set the width of the table as 
			// appropriate. However, when not scrolling leave the table width as it
			// is. This results in slightly different, but I think correct behaviour
			if ( scrollX && scrollXInner ) {
				tmpTable.width( scrollXInner );
			}
			else if ( scrollX ) {
				tmpTable.css( 'width', 'auto' );
				tmpTable.removeAttr('width');
	
				// If there is no width attribute or style, then allow the table to
				// collapse
				if ( tmpTable.width() < tableContainer.clientWidth && tableWidthAttr ) {
					tmpTable.width( tableContainer.clientWidth );
				}
			}
			else if ( scrollY ) {
				tmpTable.width( tableContainer.clientWidth );
			}
			else if ( tableWidthAttr ) {
				tmpTable.width( tableWidthAttr );
			}
	
			// Get the width of each column in the constructed table - we need to
			// know the inner width (so it can be assigned to the other table's
			// cells) and the outer width so we can calculate the full width of the
			// table. This is safe since DataTables requires a unique cell for each
			// column, but if ever a header can span multiple columns, this will
			// need to be modified.
			var total = 0;
			for ( i=0 ; i<visibleColumns.length ; i++ ) {
				var cell = $(headerCells[i]);
				var border = cell.outerWidth() - cell.width();
	
				// Use getBounding... where possible (not IE8-) because it can give
				// sub-pixel accuracy, which we then want to round up!
				var bounding = browser.bBounding ?
					Math.ceil( headerCells[i].getBoundingClientRect().width ) :
					cell.outerWidth();
	
				// Total is tracked to remove any sub-pixel errors as the outerWidth
				// of the table might not equal the total given here (IE!).
				total += bounding;
	
				// Width for each column to use
				columns[ visibleColumns[i] ].sWidth = _fnStringToCss( bounding - border );
			}
	
			table.style.width = _fnStringToCss( total );
	
			// Finished with the table - ditch it
			holder.remove();
		}
	
		// If there is a width attr, we want to attach an event listener which
		// allows the table sizing to automatically adjust when the window is
		// resized. Use the width attr rather than CSS, since we can't know if the
		// CSS is a relative value or absolute - DOM read is always px.
		if ( tableWidthAttr ) {
			table.style.width = _fnStringToCss( tableWidthAttr );
		}
	
		if ( (tableWidthAttr || scrollX) && ! oSettings._reszEvt ) {
			var bindResize = function () {
				$(window).on('resize.DT-'+oSettings.sInstance, _fnThrottle( function () {
					_fnAdjustColumnSizing( oSettings );
				} ) );
			};
	
			// IE6/7 will crash if we bind a resize event handler on page load.
			// To be removed in 1.11 which drops IE6/7 support
			if ( ie67 ) {
				setTimeout( bindResize, 1000 );
			}
			else {
				bindResize();
			}
	
			oSettings._reszEvt = true;
		}
	}
	
	
	/**
	 * Throttle the calls to a function. Arguments and context are maintained for
	 * the throttled function
	 *  @param {function} fn Function to be called
	 *  @param {int} [freq=200] call frequency in mS
	 *  @returns {function} wrapped function
	 *  @memberof DataTable#oApi
	 */
	var _fnThrottle = DataTable.util.throttle;
	
	
	/**
	 * Convert a CSS unit width to pixels (e.g. 2em)
	 *  @param {string} width width to be converted
	 *  @param {node} parent parent to get the with for (required for relative widths) - optional
	 *  @returns {int} width in pixels
	 *  @memberof DataTable#oApi
	 */
	function _fnConvertToWidth ( width, parent )
	{
		if ( ! width ) {
			return 0;
		}
	
		var n = $('<div/>')
			.css( 'width', _fnStringToCss( width ) )
			.appendTo( parent || document.body );
	
		var val = n[0].offsetWidth;
		n.remove();
	
		return val;
	}
	
	
	/**
	 * Get the widest node
	 *  @param {object} settings dataTables settings object
	 *  @param {int} colIdx column of interest
	 *  @returns {node} widest table node
	 *  @memberof DataTable#oApi
	 */
	function _fnGetWidestNode( settings, colIdx )
	{
		var idx = _fnGetMaxLenString( settings, colIdx );
		if ( idx < 0 ) {
			return null;
		}
	
		var data = settings.aoData[ idx ];
		return ! data.nTr ? // Might not have been created when deferred rendering
			$('<td/>').html( _fnGetCellData( settings, idx, colIdx, 'display' ) )[0] :
			data.anCells[ colIdx ];
	}
	
	
	/**
	 * Get the maximum strlen for each data column
	 *  @param {object} settings dataTables settings object
	 *  @param {int} colIdx column of interest
	 *  @returns {string} max string length for each column
	 *  @memberof DataTable#oApi
	 */
	function _fnGetMaxLenString( settings, colIdx )
	{
		var s, max=-1, maxIdx = -1;
	
		for ( var i=0, ien=settings.aoData.length ; i<ien ; i++ ) {
			s = _fnGetCellData( settings, i, colIdx, 'display' )+'';
			s = s.replace( __re_html_remove, '' );
			s = s.replace( /&nbsp;/g, ' ' );
	
			if ( s.length > max ) {
				max = s.length;
				maxIdx = i;
			}
		}
	
		return maxIdx;
	}
	
	
	/**
	 * Append a CSS unit (only if required) to a string
	 *  @param {string} value to css-ify
	 *  @returns {string} value with css unit
	 *  @memberof DataTable#oApi
	 */
	function _fnStringToCss( s )
	{
		if ( s === null ) {
			return '0px';
		}
	
		if ( typeof s == 'number' ) {
			return s < 0 ?
				'0px' :
				s+'px';
		}
	
		// Check it has a unit character already
		return s.match(/\d$/) ?
			s+'px' :
			s;
	}
	
	
	
	function _fnSortFlatten ( settings )
	{
		var
			i, iLen, k, kLen,
			aSort = [],
			aiOrig = [],
			aoColumns = settings.aoColumns,
			aDataSort, iCol, sType, srcCol,
			fixed = settings.aaSortingFixed,
			fixedObj = $.isPlainObject( fixed ),
			nestedSort = [],
			add = function ( a ) {
				if ( a.length && ! $.isArray( a[0] ) ) {
					// 1D array
					nestedSort.push( a );
				}
				else {
					// 2D array
					$.merge( nestedSort, a );
				}
			};
	
		// Build the sort array, with pre-fix and post-fix options if they have been
		// specified
		if ( $.isArray( fixed ) ) {
			add( fixed );
		}
	
		if ( fixedObj && fixed.pre ) {
			add( fixed.pre );
		}
	
		add( settings.aaSorting );
	
		if (fixedObj && fixed.post ) {
			add( fixed.post );
		}
	
		for ( i=0 ; i<nestedSort.length ; i++ )
		{
			srcCol = nestedSort[i][0];
			aDataSort = aoColumns[ srcCol ].aDataSort;
	
			for ( k=0, kLen=aDataSort.length ; k<kLen ; k++ )
			{
				iCol = aDataSort[k];
				sType = aoColumns[ iCol ].sType || 'string';
	
				if ( nestedSort[i]._idx === undefined ) {
					nestedSort[i]._idx = $.inArray( nestedSort[i][1], aoColumns[iCol].asSorting );
				}
	
				aSort.push( {
					src:       srcCol,
					col:       iCol,
					dir:       nestedSort[i][1],
					index:     nestedSort[i]._idx,
					type:      sType,
					formatter: DataTable.ext.type.order[ sType+"-pre" ]
				} );
			}
		}
	
		return aSort;
	}
	
	/**
	 * Change the order of the table
	 *  @param {object} oSettings dataTables settings object
	 *  @memberof DataTable#oApi
	 *  @todo This really needs split up!
	 */
	function _fnSort ( oSettings )
	{
		var
			i, ien, iLen, j, jLen, k, kLen,
			sDataType, nTh,
			aiOrig = [],
			oExtSort = DataTable.ext.type.order,
			aoData = oSettings.aoData,
			aoColumns = oSettings.aoColumns,
			aDataSort, data, iCol, sType, oSort,
			formatters = 0,
			sortCol,
			displayMaster = oSettings.aiDisplayMaster,
			aSort;
	
		// Resolve any column types that are unknown due to addition or invalidation
		// @todo Can this be moved into a 'data-ready' handler which is called when
		//   data is going to be used in the table?
		_fnColumnTypes( oSettings );
	
		aSort = _fnSortFlatten( oSettings );
	
		for ( i=0, ien=aSort.length ; i<ien ; i++ ) {
			sortCol = aSort[i];
	
			// Track if we can use the fast sort algorithm
			if ( sortCol.formatter ) {
				formatters++;
			}
	
			// Load the data needed for the sort, for each cell
			_fnSortData( oSettings, sortCol.col );
		}
	
		/* No sorting required if server-side or no sorting array */
		if ( _fnDataSource( oSettings ) != 'ssp' && aSort.length !== 0 )
		{
			// Create a value - key array of the current row positions such that we can use their
			// current position during the sort, if values match, in order to perform stable sorting
			for ( i=0, iLen=displayMaster.length ; i<iLen ; i++ ) {
				aiOrig[ displayMaster[i] ] = i;
			}
	
			/* Do the sort - here we want multi-column sorting based on a given data source (column)
			 * and sorting function (from oSort) in a certain direction. It's reasonably complex to
			 * follow on it's own, but this is what we want (example two column sorting):
			 *  fnLocalSorting = function(a,b){
			 *    var iTest;
			 *    iTest = oSort['string-asc']('data11', 'data12');
			 *      if (iTest !== 0)
			 *        return iTest;
			 *    iTest = oSort['numeric-desc']('data21', 'data22');
			 *    if (iTest !== 0)
			 *      return iTest;
			 *    return oSort['numeric-asc']( aiOrig[a], aiOrig[b] );
			 *  }
			 * Basically we have a test for each sorting column, if the data in that column is equal,
			 * test the next column. If all columns match, then we use a numeric sort on the row
			 * positions in the original data array to provide a stable sort.
			 *
			 * Note - I know it seems excessive to have two sorting methods, but the first is around
			 * 15% faster, so the second is only maintained for backwards compatibility with sorting
			 * methods which do not have a pre-sort formatting function.
			 */
			if ( formatters === aSort.length ) {
				// All sort types have formatting functions
				displayMaster.sort( function ( a, b ) {
					var
						x, y, k, test, sort,
						len=aSort.length,
						dataA = aoData[a]._aSortData,
						dataB = aoData[b]._aSortData;
	
					for ( k=0 ; k<len ; k++ ) {
						sort = aSort[k];
	
						x = dataA[ sort.col ];
						y = dataB[ sort.col ];
	
						test = x<y ? -1 : x>y ? 1 : 0;
						if ( test !== 0 ) {
							return sort.dir === 'asc' ? test : -test;
						}
					}
	
					x = aiOrig[a];
					y = aiOrig[b];
					return x<y ? -1 : x>y ? 1 : 0;
				} );
			}
			else {
				// Depreciated - remove in 1.11 (providing a plug-in option)
				// Not all sort types have formatting methods, so we have to call their sorting
				// methods.
				displayMaster.sort( function ( a, b ) {
					var
						x, y, k, l, test, sort, fn,
						len=aSort.length,
						dataA = aoData[a]._aSortData,
						dataB = aoData[b]._aSortData;
	
					for ( k=0 ; k<len ; k++ ) {
						sort = aSort[k];
	
						x = dataA[ sort.col ];
						y = dataB[ sort.col ];
	
						fn = oExtSort[ sort.type+"-"+sort.dir ] || oExtSort[ "string-"+sort.dir ];
						test = fn( x, y );
						if ( test !== 0 ) {
							return test;
						}
					}
	
					x = aiOrig[a];
					y = aiOrig[b];
					return x<y ? -1 : x>y ? 1 : 0;
				} );
			}
		}
	
		/* Tell the draw function that we have sorted the data */
		oSettings.bSorted = true;
	}
	
	
	function _fnSortAria ( settings )
	{
		var label;
		var nextSort;
		var columns = settings.aoColumns;
		var aSort = _fnSortFlatten( settings );
		var oAria = settings.oLanguage.oAria;
	
		// ARIA attributes - need to loop all columns, to update all (removing old
		// attributes as needed)
		for ( var i=0, iLen=columns.length ; i<iLen ; i++ )
		{
			var col = columns[i];
			var asSorting = col.asSorting;
			var sTitle = col.sTitle.replace( /<.*?>/g, "" );
			var th = col.nTh;
	
			// IE7 is throwing an error when setting these properties with jQuery's
			// attr() and removeAttr() methods...
			th.removeAttribute('aria-sort');
	
			/* In ARIA only the first sorting column can be marked as sorting - no multi-sort option */
			if ( col.bSortable ) {
				if ( aSort.length > 0 && aSort[0].col == i ) {
					th.setAttribute('aria-sort', aSort[0].dir=="asc" ? "ascending" : "descending" );
					nextSort = asSorting[ aSort[0].index+1 ] || asSorting[0];
				}
				else {
					nextSort = asSorting[0];
				}
	
				label = sTitle + ( nextSort === "asc" ?
					oAria.sSortAscending :
					oAria.sSortDescending
				);
			}
			else {
				label = sTitle;
			}
	
			th.setAttribute('aria-label', label);
		}
	}
	
	
	/**
	 * Function to run on user sort request
	 *  @param {object} settings dataTables settings object
	 *  @param {node} attachTo node to attach the handler to
	 *  @param {int} colIdx column sorting index
	 *  @param {boolean} [append=false] Append the requested sort to the existing
	 *    sort if true (i.e. multi-column sort)
	 *  @param {function} [callback] callback function
	 *  @memberof DataTable#oApi
	 */
	function _fnSortListener ( settings, colIdx, append, callback )
	{
		var col = settings.aoColumns[ colIdx ];
		var sorting = settings.aaSorting;
		var asSorting = col.asSorting;
		var nextSortIdx;
		var next = function ( a, overflow ) {
			var idx = a._idx;
			if ( idx === undefined ) {
				idx = $.inArray( a[1], asSorting );
			}
	
			return idx+1 < asSorting.length ?
				idx+1 :
				overflow ?
					null :
					0;
		};
	
		// Convert to 2D array if needed
		if ( typeof sorting[0] === 'number' ) {
			sorting = settings.aaSorting = [ sorting ];
		}
	
		// If appending the sort then we are multi-column sorting
		if ( append && settings.oFeatures.bSortMulti ) {
			// Are we already doing some kind of sort on this column?
			var sortIdx = $.inArray( colIdx, _pluck(sorting, '0') );
	
			if ( sortIdx !== -1 ) {
				// Yes, modify the sort
				nextSortIdx = next( sorting[sortIdx], true );
	
				if ( nextSortIdx === null && sorting.length === 1 ) {
					nextSortIdx = 0; // can't remove sorting completely
				}
	
				if ( nextSortIdx === null ) {
					sorting.splice( sortIdx, 1 );
				}
				else {
					sorting[sortIdx][1] = asSorting[ nextSortIdx ];
					sorting[sortIdx]._idx = nextSortIdx;
				}
			}
			else {
				// No sort on this column yet
				sorting.push( [ colIdx, asSorting[0], 0 ] );
				sorting[sorting.length-1]._idx = 0;
			}
		}
		else if ( sorting.length && sorting[0][0] == colIdx ) {
			// Single column - already sorting on this column, modify the sort
			nextSortIdx = next( sorting[0] );
	
			sorting.length = 1;
			sorting[0][1] = asSorting[ nextSortIdx ];
			sorting[0]._idx = nextSortIdx;
		}
		else {
			// Single column - sort only on this column
			sorting.length = 0;
			sorting.push( [ colIdx, asSorting[0] ] );
			sorting[0]._idx = 0;
		}
	
		// Run the sort by calling a full redraw
		_fnReDraw( settings );
	
		// callback used for async user interaction
		if ( typeof callback == 'function' ) {
			callback( settings );
		}
	}
	
	
	/**
	 * Attach a sort handler (click) to a node
	 *  @param {object} settings dataTables settings object
	 *  @param {node} attachTo node to attach the handler to
	 *  @param {int} colIdx column sorting index
	 *  @param {function} [callback] callback function
	 *  @memberof DataTable#oApi
	 */
	function _fnSortAttachListener ( settings, attachTo, colIdx, callback )
	{
		var col = settings.aoColumns[ colIdx ];
	
		_fnBindAction( attachTo, {}, function (e) {
			/* If the column is not sortable - don't to anything */
			if ( col.bSortable === false ) {
				return;
			}
	
			// If processing is enabled use a timeout to allow the processing
			// display to be shown - otherwise to it synchronously
			if ( settings.oFeatures.bProcessing ) {
				_fnProcessingDisplay( settings, true );
	
				setTimeout( function() {
					_fnSortListener( settings, colIdx, e.shiftKey, callback );
	
					// In server-side processing, the draw callback will remove the
					// processing display
					if ( _fnDataSource( settings ) !== 'ssp' ) {
						_fnProcessingDisplay( settings, false );
					}
				}, 0 );
			}
			else {
				_fnSortListener( settings, colIdx, e.shiftKey, callback );
			}
		} );
	}
	
	
	/**
	 * Set the sorting classes on table's body, Note: it is safe to call this function
	 * when bSort and bSortClasses are false
	 *  @param {object} oSettings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnSortingClasses( settings )
	{
		var oldSort = settings.aLastSort;
		var sortClass = settings.oClasses.sSortColumn;
		var sort = _fnSortFlatten( settings );
		var features = settings.oFeatures;
		var i, ien, colIdx;
	
		if ( features.bSort && features.bSortClasses ) {
			// Remove old sorting classes
			for ( i=0, ien=oldSort.length ; i<ien ; i++ ) {
				colIdx = oldSort[i].src;
	
				// Remove column sorting
				$( _pluck( settings.aoData, 'anCells', colIdx ) )
					.removeClass( sortClass + (i<2 ? i+1 : 3) );
			}
	
			// Add new column sorting
			for ( i=0, ien=sort.length ; i<ien ; i++ ) {
				colIdx = sort[i].src;
	
				$( _pluck( settings.aoData, 'anCells', colIdx ) )
					.addClass( sortClass + (i<2 ? i+1 : 3) );
			}
		}
	
		settings.aLastSort = sort;
	}
	
	
	// Get the data to sort a column, be it from cache, fresh (populating the
	// cache), or from a sort formatter
	function _fnSortData( settings, idx )
	{
		// Custom sorting function - provided by the sort data type
		var column = settings.aoColumns[ idx ];
		var customSort = DataTable.ext.order[ column.sSortDataType ];
		var customData;
	
		if ( customSort ) {
			customData = customSort.call( settings.oInstance, settings, idx,
				_fnColumnIndexToVisible( settings, idx )
			);
		}
	
		// Use / populate cache
		var row, cellData;
		var formatter = DataTable.ext.type.order[ column.sType+"-pre" ];
	
		for ( var i=0, ien=settings.aoData.length ; i<ien ; i++ ) {
			row = settings.aoData[i];
	
			if ( ! row._aSortData ) {
				row._aSortData = [];
			}
	
			if ( ! row._aSortData[idx] || customSort ) {
				cellData = customSort ?
					customData[i] : // If there was a custom sort function, use data from there
					_fnGetCellData( settings, i, idx, 'sort' );
	
				row._aSortData[ idx ] = formatter ?
					formatter( cellData ) :
					cellData;
			}
		}
	}
	
	
	
	/**
	 * Save the state of a table
	 *  @param {object} oSettings dataTables settings object
	 *  @memberof DataTable#oApi
	 */
	function _fnSaveState ( settings )
	{
		if ( !settings.oFeatures.bStateSave || settings.bDestroying )
		{
			return;
		}
	
		/* Store the interesting variables */
		var state = {
			time:    +new Date(),
			start:   settings._iDisplayStart,
			length:  settings._iDisplayLength,
			order:   $.extend( true, [], settings.aaSorting ),
			search:  _fnSearchToCamel( settings.oPreviousSearch ),
			columns: $.map( settings.aoColumns, function ( col, i ) {
				return {
					visible: col.bVisible,
					search: _fnSearchToCamel( settings.aoPreSearchCols[i] )
				};
			} )
		};
	
		_fnCallbackFire( settings, "aoStateSaveParams", 'stateSaveParams', [settings, state] );
	
		settings.oSavedState = state;
		settings.fnStateSaveCallback.call( settings.oInstance, settings, state );
	}
	
	
	/**
	 * Attempt to load a saved table state
	 *  @param {object} oSettings dataTables settings object
	 *  @param {object} oInit DataTables init object so we can override settings
	 *  @param {function} callback Callback to execute when the state has been loaded
	 *  @memberof DataTable#oApi
	 */
	function _fnLoadState ( settings, oInit, callback )
	{
		var i, ien;
		var columns = settings.aoColumns;
		var loaded = function ( s ) {
			if ( ! s || ! s.time ) {
				callback();
				return;
			}
	
			// Allow custom and plug-in manipulation functions to alter the saved data set and
			// cancelling of loading by returning false
			var abStateLoad = _fnCallbackFire( settings, 'aoStateLoadParams', 'stateLoadParams', [settings, s] );
			if ( $.inArray( false, abStateLoad ) !== -1 ) {
				callback();
				return;
			}
	
			// Reject old data
			var duration = settings.iStateDuration;
			if ( duration > 0 && s.time < +new Date() - (duration*1000) ) {
				callback();
				return;
			}
	
			// Number of columns have changed - all bets are off, no restore of settings
			if ( s.columns && columns.length !== s.columns.length ) {
				callback();
				return;
			}
	
			// Store the saved state so it might be accessed at any time
			settings.oLoadedState = $.extend( true, {}, s );
	
			// Restore key features - todo - for 1.11 this needs to be done by
			// subscribed events
			if ( s.start !== undefined ) {
				settings._iDisplayStart    = s.start;
				settings.iInitDisplayStart = s.start;
			}
			if ( s.length !== undefined ) {
				settings._iDisplayLength   = s.length;
			}
	
			// Order
			if ( s.order !== undefined ) {
				settings.aaSorting = [];
				$.each( s.order, function ( i, col ) {
					settings.aaSorting.push( col[0] >= columns.length ?
						[ 0, col[1] ] :
						col
					);
				} );
			}
	
			// Search
			if ( s.search !== undefined ) {
				$.extend( settings.oPreviousSearch, _fnSearchToHung( s.search ) );
			}
	
			// Columns
			//
			if ( s.columns ) {
				for ( i=0, ien=s.columns.length ; i<ien ; i++ ) {
					var col = s.columns[i];
	
					// Visibility
					if ( col.visible !== undefined ) {
						columns[i].bVisible = col.visible;
					}
	
					// Search
					if ( col.search !== undefined ) {
						$.extend( settings.aoPreSearchCols[i], _fnSearchToHung( col.search ) );
					}
				}
			}
	
			_fnCallbackFire( settings, 'aoStateLoaded', 'stateLoaded', [settings, s] );
			callback();
		}
	
		if ( ! settings.oFeatures.bStateSave ) {
			callback();
			return;
		}
	
		var state = settings.fnStateLoadCallback.call( settings.oInstance, settings, loaded );
	
		if ( state !== undefined ) {
			loaded( state );
		}
		// otherwise, wait for the loaded callback to be executed
	}
	
	
	/**
	 * Return the settings object for a particular table
	 *  @param {node} table table we are using as a dataTable
	 *  @returns {object} Settings object - or null if not found
	 *  @memberof DataTable#oApi
	 */
	function _fnSettingsFromNode ( table )
	{
		var settings = DataTable.settings;
		var idx = $.inArray( table, _pluck( settings, 'nTable' ) );
	
		return idx !== -1 ?
			settings[ idx ] :
			null;
	}
	
	
	/**
	 * Log an error message
	 *  @param {object} settings dataTables settings object
	 *  @param {int} level log error messages, or display them to the user
	 *  @param {string} msg error message
	 *  @param {int} tn Technical note id to get more information about the error.
	 *  @memberof DataTable#oApi
	 */
	function _fnLog( settings, level, msg, tn )
	{
		msg = 'DataTables warning: '+
			(settings ? 'table id='+settings.sTableId+' - ' : '')+msg;
	
		if ( tn ) {
			msg += '. For more information about this error, please see '+
			'http://datatables.net/tn/'+tn;
		}
	
		if ( ! level  ) {
			// Backwards compatibility pre 1.10
			var ext = DataTable.ext;
			var type = ext.sErrMode || ext.errMode;
	
			if ( settings ) {
				_fnCallbackFire( settings, null, 'error', [ settings, tn, msg ] );
			}
	
			if ( type == 'alert' ) {
				alert( msg );
			}
			else if ( type == 'throw' ) {
				throw new Error(msg);
			}
			else if ( typeof type == 'function' ) {
				type( settings, tn, msg );
			}
		}
		else if ( window.console && console.log ) {
			console.log( msg );
		}
	}
	
	
	/**
	 * See if a property is defined on one object, if so assign it to the other object
	 *  @param {object} ret target object
	 *  @param {object} src source object
	 *  @param {string} name property
	 *  @param {string} [mappedName] name to map too - optional, name used if not given
	 *  @memberof DataTable#oApi
	 */
	function _fnMap( ret, src, name, mappedName )
	{
		if ( $.isArray( name ) ) {
			$.each( name, function (i, val) {
				if ( $.isArray( val ) ) {
					_fnMap( ret, src, val[0], val[1] );
				}
				else {
					_fnMap( ret, src, val );
				}
			} );
	
			return;
		}
	
		if ( mappedName === undefined ) {
			mappedName = name;
		}
	
		if ( src[name] !== undefined ) {
			ret[mappedName] = src[name];
		}
	}
	
	
	/**
	 * Extend objects - very similar to jQuery.extend, but deep copy objects, and
	 * shallow copy arrays. The reason we need to do this, is that we don't want to
	 * deep copy array init values (such as aaSorting) since the dev wouldn't be
	 * able to override them, but we do want to deep copy arrays.
	 *  @param {object} out Object to extend
	 *  @param {object} extender Object from which the properties will be applied to
	 *      out
	 *  @param {boolean} breakRefs If true, then arrays will be sliced to take an
	 *      independent copy with the exception of the `data` or `aaData` parameters
	 *      if they are present. This is so you can pass in a collection to
	 *      DataTables and have that used as your data source without breaking the
	 *      references
	 *  @returns {object} out Reference, just for convenience - out === the return.
	 *  @memberof DataTable#oApi
	 *  @todo This doesn't take account of arrays inside the deep copied objects.
	 */
	function _fnExtend( out, extender, breakRefs )
	{
		var val;
	
		for ( var prop in extender ) {
			if ( extender.hasOwnProperty(prop) ) {
				val = extender[prop];
	
				if ( $.isPlainObject( val ) ) {
					if ( ! $.isPlainObject( out[prop] ) ) {
						out[prop] = {};
					}
					$.extend( true, out[prop], val );
				}
				else if ( breakRefs && prop !== 'data' && prop !== 'aaData' && $.isArray(val) ) {
					out[prop] = val.slice();
				}
				else {
					out[prop] = val;
				}
			}
		}
	
		return out;
	}
	
	
	/**
	 * Bind an event handers to allow a click or return key to activate the callback.
	 * This is good for accessibility since a return on the keyboard will have the
	 * same effect as a click, if the element has focus.
	 *  @param {element} n Element to bind the action to
	 *  @param {object} oData Data object to pass to the triggered function
	 *  @param {function} fn Callback function for when the event is triggered
	 *  @memberof DataTable#oApi
	 */
	function _fnBindAction( n, oData, fn )
	{
		$(n)
			.on( 'click.DT', oData, function (e) {
					n.blur(); // Remove focus outline for mouse users
					fn(e);
				} )
			.on( 'keypress.DT', oData, function (e){
					if ( e.which === 13 ) {
						e.preventDefault();
						fn(e);
					}
				} )
			.on( 'selectstart.DT', function () {
					/* Take the brutal approach to cancelling text selection */
					return false;
				} );
	}
	
	
	/**
	 * Register a callback function. Easily allows a callback function to be added to
	 * an array store of callback functions that can then all be called together.
	 *  @param {object} oSettings dataTables settings object
	 *  @param {string} sStore Name of the array storage for the callbacks in oSettings
	 *  @param {function} fn Function to be called back
	 *  @param {string} sName Identifying name for the callback (i.e. a label)
	 *  @memberof DataTable#oApi
	 */
	function _fnCallbackReg( oSettings, sStore, fn, sName )
	{
		if ( fn )
		{
			oSettings[sStore].push( {
				"fn": fn,
				"sName": sName
			} );
		}
	}
	
	
	/**
	 * Fire callback functions and trigger events. Note that the loop over the
	 * callback array store is done backwards! Further note that you do not want to
	 * fire off triggers in time sensitive applications (for example cell creation)
	 * as its slow.
	 *  @param {object} settings dataTables settings object
	 *  @param {string} callbackArr Name of the array storage for the callbacks in
	 *      oSettings
	 *  @param {string} eventName Name of the jQuery custom event to trigger. If
	 *      null no trigger is fired
	 *  @param {array} args Array of arguments to pass to the callback function /
	 *      trigger
	 *  @memberof DataTable#oApi
	 */
	function _fnCallbackFire( settings, callbackArr, eventName, args )
	{
		var ret = [];
	
		if ( callbackArr ) {
			ret = $.map( settings[callbackArr].slice().reverse(), function (val, i) {
				return val.fn.apply( settings.oInstance, args );
			} );
		}
	
		if ( eventName !== null ) {
			var e = $.Event( eventName+'.dt' );
	
			$(settings.nTable).trigger( e, args );
	
			ret.push( e.result );
		}
	
		return ret;
	}
	
	
	function _fnLengthOverflow ( settings )
	{
		var
			start = settings._iDisplayStart,
			end = settings.fnDisplayEnd(),
			len = settings._iDisplayLength;
	
		/* If we have space to show extra rows (backing up from the end point - then do so */
		if ( start >= end )
		{
			start = end - len;
		}
	
		// Keep the start record on the current page
		start -= (start % len);
	
		if ( len === -1 || start < 0 )
		{
			start = 0;
		}
	
		settings._iDisplayStart = start;
	}
	
	
	function _fnRenderer( settings, type )
	{
		var renderer = settings.renderer;
		var host = DataTable.ext.renderer[type];
	
		if ( $.isPlainObject( renderer ) && renderer[type] ) {
			// Specific renderer for this type. If available use it, otherwise use
			// the default.
			return host[renderer[type]] || host._;
		}
		else if ( typeof renderer === 'string' ) {
			// Common renderer - if there is one available for this type use it,
			// otherwise use the default
			return host[renderer] || host._;
		}
	
		// Use the default
		return host._;
	}
	
	
	/**
	 * Detect the data source being used for the table. Used to simplify the code
	 * a little (ajax) and to make it compress a little smaller.
	 *
	 *  @param {object} settings dataTables settings object
	 *  @returns {string} Data source
	 *  @memberof DataTable#oApi
	 */
	function _fnDataSource ( settings )
	{
		if ( settings.oFeatures.bServerSide ) {
			return 'ssp';
		}
		else if ( settings.ajax || settings.sAjaxSource ) {
			return 'ajax';
		}
		return 'dom';
	}
	

	
	
	/**
	 * Computed structure of the DataTables API, defined by the options passed to
	 * `DataTable.Api.register()` when building the API.
	 *
	 * The structure is built in order to speed creation and extension of the Api
	 * objects since the extensions are effectively pre-parsed.
	 *
	 * The array is an array of objects with the following structure, where this
	 * base array represents the Api prototype base:
	 *
	 *     [
	 *       {
	 *         name:      'data'                -- string   - Property name
	 *         val:       function () {},       -- function - Api method (or undefined if just an object
	 *         methodExt: [ ... ],              -- array    - Array of Api object definitions to extend the method result
	 *         propExt:   [ ... ]               -- array    - Array of Api object definitions to extend the property
	 *       },
	 *       {
	 *         name:     'row'
	 *         val:       {},
	 *         methodExt: [ ... ],
	 *         propExt:   [
	 *           {
	 *             name:      'data'
	 *             val:       function () {},
	 *             methodExt: [ ... ],
	 *             propExt:   [ ... ]
	 *           },
	 *           ...
	 *         ]
	 *       }
	 *     ]
	 *
	 * @type {Array}
	 * @ignore
	 */
	var __apiStruct = [];
	
	
	/**
	 * `Array.prototype` reference.
	 *
	 * @type object
	 * @ignore
	 */
	var __arrayProto = Array.prototype;
	
	
	/**
	 * Abstraction for `context` parameter of the `Api` constructor to allow it to
	 * take several different forms for ease of use.
	 *
	 * Each of the input parameter types will be converted to a DataTables settings
	 * object where possible.
	 *
	 * @param  {string|node|jQuery|object} mixed DataTable identifier. Can be one
	 *   of:
	 *
	 *   * `string` - jQuery selector. Any DataTables' matching the given selector
	 *     with be found and used.
	 *   * `node` - `TABLE` node which has already been formed into a DataTable.
	 *   * `jQuery` - A jQuery object of `TABLE` nodes.
	 *   * `object` - DataTables settings object
	 *   * `DataTables.Api` - API instance
	 * @return {array|null} Matching DataTables settings objects. `null` or
	 *   `undefined` is returned if no matching DataTable is found.
	 * @ignore
	 */
	var _toSettings = function ( mixed )
	{
		var idx, jq;
		var settings = DataTable.settings;
		var tables = $.map( settings, function (el, i) {
			return el.nTable;
		} );
	
		if ( ! mixed ) {
			return [];
		}
		else if ( mixed.nTable && mixed.oApi ) {
			// DataTables settings object
			return [ mixed ];
		}
		else if ( mixed.nodeName && mixed.nodeName.toLowerCase() === 'table' ) {
			// Table node
			idx = $.inArray( mixed, tables );
			return idx !== -1 ? [ settings[idx] ] : null;
		}
		else if ( mixed && typeof mixed.settings === 'function' ) {
			return mixed.settings().toArray();
		}
		else if ( typeof mixed === 'string' ) {
			// jQuery selector
			jq = $(mixed);
		}
		else if ( mixed instanceof $ ) {
			// jQuery object (also DataTables instance)
			jq = mixed;
		}
	
		if ( jq ) {
			return jq.map( function(i) {
				idx = $.inArray( this, tables );
				return idx !== -1 ? settings[idx] : null;
			} ).toArray();
		}
	};
	
	
	/**
	 * DataTables API class - used to control and interface with  one or more
	 * DataTables enhanced tables.
	 *
	 * The API class is heavily based on jQuery, presenting a chainable interface
	 * that you can use to interact with tables. Each instance of the API class has
	 * a "context" - i.e. the tables that it will operate on. This could be a single
	 * table, all tables on a page or a sub-set thereof.
	 *
	 * Additionally the API is designed to allow you to easily work with the data in
	 * the tables, retrieving and manipulating it as required. This is done by
	 * presenting the API class as an array like interface. The contents of the
	 * array depend upon the actions requested by each method (for example
	 * `rows().nodes()` will return an array of nodes, while `rows().data()` will
	 * return an array of objects or arrays depending upon your table's
	 * configuration). The API object has a number of array like methods (`push`,
	 * `pop`, `reverse` etc) as well as additional helper methods (`each`, `pluck`,
	 * `unique` etc) to assist your working with the data held in a table.
	 *
	 * Most methods (those which return an Api instance) are chainable, which means
	 * the return from a method call also has all of the methods available that the
	 * top level object had. For example, these two calls are equivalent:
	 *
	 *     // Not chained
	 *     api.row.add( {...} );
	 *     api.draw();
	 *
	 *     // Chained
	 *     api.row.add( {...} ).draw();
	 *
	 * @class DataTable.Api
	 * @param {array|object|string|jQuery} context DataTable identifier. This is
	 *   used to define which DataTables enhanced tables this API will operate on.
	 *   Can be one of:
	 *
	 *   * `string` - jQuery selector. Any DataTables' matching the given selector
	 *     with be found and used.
	 *   * `node` - `TABLE` node which has already been formed into a DataTable.
	 *   * `jQuery` - A jQuery object of `TABLE` nodes.
	 *   * `object` - DataTables settings object
	 * @param {array} [data] Data to initialise the Api instance with.
	 *
	 * @example
	 *   // Direct initialisation during DataTables construction
	 *   var api = $('#example').DataTable();
	 *
	 * @example
	 *   // Initialisation using a DataTables jQuery object
	 *   var api = $('#example').dataTable().api();
	 *
	 * @example
	 *   // Initialisation as a constructor
	 *   var api = new $.fn.DataTable.Api( 'table.dataTable' );
	 */
	_Api = function ( context, data )
	{
		if ( ! (this instanceof _Api) ) {
			return new _Api( context, data );
		}
	
		var settings = [];
		var ctxSettings = function ( o ) {
			var a = _toSettings( o );
			if ( a ) {
				settings = settings.concat( a );
			}
		};
	
		if ( $.isArray( context ) ) {
			for ( var i=0, ien=context.length ; i<ien ; i++ ) {
				ctxSettings( context[i] );
			}
		}
		else {
			ctxSettings( context );
		}
	
		// Remove duplicates
		this.context = _unique( settings );
	
		// Initial data
		if ( data ) {
			$.merge( this, data );
		}
	
		// selector
		this.selector = {
			rows: null,
			cols: null,
			opts: null
		};
	
		_Api.extend( this, this, __apiStruct );
	};
	
	DataTable.Api = _Api;
	
	// Don't destroy the existing prototype, just extend it. Required for jQuery 2's
	// isPlainObject.
	$.extend( _Api.prototype, {
		any: function ()
		{
			return this.count() !== 0;
		},
	
	
		concat:  __arrayProto.concat,
	
	
		context: [], // array of table settings objects
	
	
		count: function ()
		{
			return this.flatten().length;
		},
	
	
		each: function ( fn )
		{
			for ( var i=0, ien=this.length ; i<ien; i++ ) {
				fn.call( this, this[i], i, this );
			}
	
			return this;
		},
	
	
		eq: function ( idx )
		{
			var ctx = this.context;
	
			return ctx.length > idx ?
				new _Api( ctx[idx], this[idx] ) :
				null;
		},
	
	
		filter: function ( fn )
		{
			var a = [];
	
			if ( __arrayProto.filter ) {
				a = __arrayProto.filter.call( this, fn, this );
			}
			else {
				// Compatibility for browsers without EMCA-252-5 (JS 1.6)
				for ( var i=0, ien=this.length ; i<ien ; i++ ) {
					if ( fn.call( this, this[i], i, this ) ) {
						a.push( this[i] );
					}
				}
			}
	
			return new _Api( this.context, a );
		},
	
	
		flatten: function ()
		{
			var a = [];
			return new _Api( this.context, a.concat.apply( a, this.toArray() ) );
		},
	
	
		join:    __arrayProto.join,
	
	
		indexOf: __arrayProto.indexOf || function (obj, start)
		{
			for ( var i=(start || 0), ien=this.length ; i<ien ; i++ ) {
				if ( this[i] === obj ) {
					return i;
				}
			}
			return -1;
		},
	
		iterator: function ( flatten, type, fn, alwaysNew ) {
			var
				a = [], ret,
				i, ien, j, jen,
				context = this.context,
				rows, items, item,
				selector = this.selector;
	
			// Argument shifting
			if ( typeof flatten === 'string' ) {
				alwaysNew = fn;
				fn = type;
				type = flatten;
				flatten = false;
			}
	
			for ( i=0, ien=context.length ; i<ien ; i++ ) {
				var apiInst = new _Api( context[i] );
	
				if ( type === 'table' ) {
					ret = fn.call( apiInst, context[i], i );
	
					if ( ret !== undefined ) {
						a.push( ret );
					}
				}
				else if ( type === 'columns' || type === 'rows' ) {
					// this has same length as context - one entry for each table
					ret = fn.call( apiInst, context[i], this[i], i );
	
					if ( ret !== undefined ) {
						a.push( ret );
					}
				}
				else if ( type === 'column' || type === 'column-rows' || type === 'row' || type === 'cell' ) {
					// columns and rows share the same structure.
					// 'this' is an array of column indexes for each context
					items = this[i];
	
					if ( type === 'column-rows' ) {
						rows = _selector_row_indexes( context[i], selector.opts );
					}
	
					for ( j=0, jen=items.length ; j<jen ; j++ ) {
						item = items[j];
	
						if ( type === 'cell' ) {
							ret = fn.call( apiInst, context[i], item.row, item.column, i, j );
						}
						else {
							ret = fn.call( apiInst, context[i], item, i, j, rows );
						}
	
						if ( ret !== undefined ) {
							a.push( ret );
						}
					}
				}
			}
	
			if ( a.length || alwaysNew ) {
				var api = new _Api( context, flatten ? a.concat.apply( [], a ) : a );
				var apiSelector = api.selector;
				apiSelector.rows = selector.rows;
				apiSelector.cols = selector.cols;
				apiSelector.opts = selector.opts;
				return api;
			}
			return this;
		},
	
	
		lastIndexOf: __arrayProto.lastIndexOf || function (obj, start)
		{
			// Bit cheeky...
			return this.indexOf.apply( this.toArray.reverse(), arguments );
		},
	
	
		length:  0,
	
	
		map: function ( fn )
		{
			var a = [];
	
			if ( __arrayProto.map ) {
				a = __arrayProto.map.call( this, fn, this );
			}
			else {
				// Compatibility for browsers without EMCA-252-5 (JS 1.6)
				for ( var i=0, ien=this.length ; i<ien ; i++ ) {
					a.push( fn.call( this, this[i], i ) );
				}
			}
	
			return new _Api( this.context, a );
		},
	
	
		pluck: function ( prop )
		{
			return this.map( function ( el ) {
				return el[ prop ];
			} );
		},
	
		pop:     __arrayProto.pop,
	
	
		push:    __arrayProto.push,
	
	
		// Does not return an API instance
		reduce: __arrayProto.reduce || function ( fn, init )
		{
			return _fnReduce( this, fn, init, 0, this.length, 1 );
		},
	
	
		reduceRight: __arrayProto.reduceRight || function ( fn, init )
		{
			return _fnReduce( this, fn, init, this.length-1, -1, -1 );
		},
	
	
		reverse: __arrayProto.reverse,
	
	
		// Object with rows, columns and opts
		selector: null,
	
	
		shift:   __arrayProto.shift,
	
	
		slice: function () {
			return new _Api( this.context, this );
		},
	
	
		sort:    __arrayProto.sort, // ? name - order?
	
	
		splice:  __arrayProto.splice,
	
	
		toArray: function ()
		{
			return __arrayProto.slice.call( this );
		},
	
	
		to$: function ()
		{
			return $( this );
		},
	
	
		toJQuery: function ()
		{
			return $( this );
		},
	
	
		unique: function ()
		{
			return new _Api( this.context, _unique(this) );
		},
	
	
		unshift: __arrayProto.unshift
	} );
	
	
	_Api.extend = function ( scope, obj, ext )
	{
		// Only extend API instances and static properties of the API
		if ( ! ext.length || ! obj || ( ! (obj instanceof _Api) && ! obj.__dt_wrapper ) ) {
			return;
		}
	
		var
			i, ien,
			j, jen,
			struct, inner,
			methodScoping = function ( scope, fn, struc ) {
				return function () {
					var ret = fn.apply( scope, arguments );
	
					// Method extension
					_Api.extend( ret, ret, struc.methodExt );
					return ret;
				};
			};
	
		for ( i=0, ien=ext.length ; i<ien ; i++ ) {
			struct = ext[i];
	
			// Value
			obj[ struct.name ] = typeof struct.val === 'function' ?
				methodScoping( scope, struct.val, struct ) :
				$.isPlainObject( struct.val ) ?
					{} :
					struct.val;
	
			obj[ struct.name ].__dt_wrapper = true;
	
			// Property extension
			_Api.extend( scope, obj[ struct.name ], struct.propExt );
		}
	};
	
	
	// @todo - Is there need for an augment function?
	// _Api.augment = function ( inst, name )
	// {
	// 	// Find src object in the structure from the name
	// 	var parts = name.split('.');
	
	// 	_Api.extend( inst, obj );
	// };
	
	
	//     [
	//       {
	//         name:      'data'                -- string   - Property name
	//         val:       function () {},       -- function - Api method (or undefined if just an object
	//         methodExt: [ ... ],              -- array    - Array of Api object definitions to extend the method result
	//         propExt:   [ ... ]               -- array    - Array of Api object definitions to extend the property
	//       },
	//       {
	//         name:     'row'
	//         val:       {},
	//         methodExt: [ ... ],
	//         propExt:   [
	//           {
	//             name:      'data'
	//             val:       function () {},
	//             methodExt: [ ... ],
	//             propExt:   [ ... ]
	//           },
	//           ...
	//         ]
	//       }
	//     ]
	
	_Api.register = _api_register = function ( name, val )
	{
		if ( $.isArray( name ) ) {
			for ( var j=0, jen=name.length ; j<jen ; j++ ) {
				_Api.register( name[j], val );
			}
			return;
		}
	
		var
			i, ien,
			heir = name.split('.'),
			struct = __apiStruct,
			key, method;
	
		var find = function ( src, name ) {
			for ( var i=0, ien=src.length ; i<ien ; i++ ) {
				if ( src[i].name === name ) {
					return src[i];
				}
			}
			return null;
		};
	
		for ( i=0, ien=heir.length ; i<ien ; i++ ) {
			method = heir[i].indexOf('()') !== -1;
			key = method ?
				heir[i].replace('()', '') :
				heir[i];
	
			var src = find( struct, key );
			if ( ! src ) {
				src = {
					name:      key,
					val:       {},
					methodExt: [],
					propExt:   []
				};
				struct.push( src );
			}
	
			if ( i === ien-1 ) {
				src.val = val;
			}
			else {
				struct = method ?
					src.methodExt :
					src.propExt;
			}
		}
	};
	
	
	_Api.registerPlural = _api_registerPlural = function ( pluralName, singularName, val ) {
		_Api.register( pluralName, val );
	
		_Api.register( singularName, function () {
			var ret = val.apply( this, arguments );
	
			if ( ret === this ) {
				// Returned item is the API instance that was passed in, return it
				return this;
			}
			else if ( ret instanceof _Api ) {
				// New API instance returned, want the value from the first item
				// in the returned array for the singular result.
				return ret.length ?
					$.isArray( ret[0] ) ?
						new _Api( ret.context, ret[0] ) : // Array results are 'enhanced'
						ret[0] :
					undefined;
			}
	
			// Non-API return - just fire it back
			return ret;
		} );
	};
	
	
	/**
	 * Selector for HTML tables. Apply the given selector to the give array of
	 * DataTables settings objects.
	 *
	 * @param {string|integer} [selector] jQuery selector string or integer
	 * @param  {array} Array of DataTables settings objects to be filtered
	 * @return {array}
	 * @ignore
	 */
	var __table_selector = function ( selector, a )
	{
		// Integer is used to pick out a table by index
		if ( typeof selector === 'number' ) {
			return [ a[ selector ] ];
		}
	
		// Perform a jQuery selector on the table nodes
		var nodes = $.map( a, function (el, i) {
			return el.nTable;
		} );
	
		return $(nodes)
			.filter( selector )
			.map( function (i) {
				// Need to translate back from the table node to the settings
				var idx = $.inArray( this, nodes );
				return a[ idx ];
			} )
			.toArray();
	};
	
	
	
	/**
	 * Context selector for the API's context (i.e. the tables the API instance
	 * refers to.
	 *
	 * @name    DataTable.Api#tables
	 * @param {string|integer} [selector] Selector to pick which tables the iterator
	 *   should operate on. If not given, all tables in the current context are
	 *   used. This can be given as a jQuery selector (for example `':gt(0)'`) to
	 *   select multiple tables or as an integer to select a single table.
	 * @returns {DataTable.Api} Returns a new API instance if a selector is given.
	 */
	_api_register( 'tables()', function ( selector ) {
		// A new instance is created if there was a selector specified
		return selector ?
			new _Api( __table_selector( selector, this.context ) ) :
			this;
	} );
	
	
	_api_register( 'table()', function ( selector ) {
		var tables = this.tables( selector );
		var ctx = tables.context;
	
		// Truncate to the first matched table
		return ctx.length ?
			new _Api( ctx[0] ) :
			tables;
	} );
	
	
	_api_registerPlural( 'tables().nodes()', 'table().node()' , function () {
		return this.iterator( 'table', function ( ctx ) {
			return ctx.nTable;
		}, 1 );
	} );
	
	
	_api_registerPlural( 'tables().body()', 'table().body()' , function () {
		return this.iterator( 'table', function ( ctx ) {
			return ctx.nTBody;
		}, 1 );
	} );
	
	
	_api_registerPlural( 'tables().header()', 'table().header()' , function () {
		return this.iterator( 'table', function ( ctx ) {
			return ctx.nTHead;
		}, 1 );
	} );
	
	
	_api_registerPlural( 'tables().footer()', 'table().footer()' , function () {
		return this.iterator( 'table', function ( ctx ) {
			return ctx.nTFoot;
		}, 1 );
	} );
	
	
	_api_registerPlural( 'tables().containers()', 'table().container()' , function () {
		return this.iterator( 'table', function ( ctx ) {
			return ctx.nTableWrapper;
		}, 1 );
	} );
	
	
	
	/**
	 * Redraw the tables in the current context.
	 */
	_api_register( 'draw()', function ( paging ) {
		return this.iterator( 'table', function ( settings ) {
			if ( paging === 'page' ) {
				_fnDraw( settings );
			}
			else {
				if ( typeof paging === 'string' ) {
					paging = paging === 'full-hold' ?
						false :
						true;
				}
	
				_fnReDraw( settings, paging===false );
			}
		} );
	} );
	
	
	
	/**
	 * Get the current page index.
	 *
	 * @return {integer} Current page index (zero based)
	 *//**
	 * Set the current page.
	 *
	 * Note that if you attempt to show a page which does not exist, DataTables will
	 * not throw an error, but rather reset the paging.
	 *
	 * @param {integer|string} action The paging action to take. This can be one of:
	 *  * `integer` - The page index to jump to
	 *  * `string` - An action to take:
	 *    * `first` - Jump to first page.
	 *    * `next` - Jump to the next page
	 *    * `previous` - Jump to previous page
	 *    * `last` - Jump to the last page.
	 * @returns {DataTables.Api} this
	 */
	_api_register( 'page()', function ( action ) {
		if ( action === undefined ) {
			return this.page.info().page; // not an expensive call
		}
	
		// else, have an action to take on all tables
		return this.iterator( 'table', function ( settings ) {
			_fnPageChange( settings, action );
		} );
	} );
	
	
	/**
	 * Paging information for the first table in the current context.
	 *
	 * If you require paging information for another table, use the `table()` method
	 * with a suitable selector.
	 *
	 * @return {object} Object with the following properties set:
	 *  * `page` - Current page index (zero based - i.e. the first page is `0`)
	 *  * `pages` - Total number of pages
	 *  * `start` - Display index for the first record shown on the current page
	 *  * `end` - Display index for the last record shown on the current page
	 *  * `length` - Display length (number of records). Note that generally `start
	 *    + length = end`, but this is not always true, for example if there are
	 *    only 2 records to show on the final page, with a length of 10.
	 *  * `recordsTotal` - Full data set length
	 *  * `recordsDisplay` - Data set length once the current filtering criterion
	 *    are applied.
	 */
	_api_register( 'page.info()', function ( action ) {
		if ( this.context.length === 0 ) {
			return undefined;
		}
	
		var
			settings   = this.context[0],
			start      = settings._iDisplayStart,
			len        = settings.oFeatures.bPaginate ? settings._iDisplayLength : -1,
			visRecords = settings.fnRecordsDisplay(),
			all        = len === -1;
	
		return {
			"page":           all ? 0 : Math.floor( start / len ),
			"pages":          all ? 1 : Math.ceil( visRecords / len ),
			"start":          start,
			"end":            settings.fnDisplayEnd(),
			"length":         len,
			"recordsTotal":   settings.fnRecordsTotal(),
			"recordsDisplay": visRecords,
			"serverSide":     _fnDataSource( settings ) === 'ssp'
		};
	} );
	
	
	/**
	 * Get the current page length.
	 *
	 * @return {integer} Current page length. Note `-1` indicates that all records
	 *   are to be shown.
	 *//**
	 * Set the current page length.
	 *
	 * @param {integer} Page length to set. Use `-1` to show all records.
	 * @returns {DataTables.Api} this
	 */
	_api_register( 'page.len()', function ( len ) {
		// Note that we can't call this function 'length()' because `length`
		// is a Javascript property of functions which defines how many arguments
		// the function expects.
		if ( len === undefined ) {
			return this.context.length !== 0 ?
				this.context[0]._iDisplayLength :
				undefined;
		}
	
		// else, set the page length
		return this.iterator( 'table', function ( settings ) {
			_fnLengthChange( settings, len );
		} );
	} );
	
	
	
	var __reload = function ( settings, holdPosition, callback ) {
		// Use the draw event to trigger a callback
		if ( callback ) {
			var api = new _Api( settings );
	
			api.one( 'draw', function () {
				callback( api.ajax.json() );
			} );
		}
	
		if ( _fnDataSource( settings ) == 'ssp' ) {
			_fnReDraw( settings, holdPosition );
		}
		else {
			_fnProcessingDisplay( settings, true );
	
			// Cancel an existing request
			var xhr = settings.jqXHR;
			if ( xhr && xhr.readyState !== 4 ) {
				xhr.abort();
			}
	
			// Trigger xhr
			_fnBuildAjax( settings, [], function( json ) {
				_fnClearTable( settings );
	
				var data = _fnAjaxDataSrc( settings, json );
				for ( var i=0, ien=data.length ; i<ien ; i++ ) {
					_fnAddData( settings, data[i] );
				}
	
				_fnReDraw( settings, holdPosition );
				_fnProcessingDisplay( settings, false );
			} );
		}
	};
	
	
	/**
	 * Get the JSON response from the last Ajax request that DataTables made to the
	 * server. Note that this returns the JSON from the first table in the current
	 * context.
	 *
	 * @return {object} JSON received from the server.
	 */
	_api_register( 'ajax.json()', function () {
		var ctx = this.context;
	
		if ( ctx.length > 0 ) {
			return ctx[0].json;
		}
	
		// else return undefined;
	} );
	
	
	/**
	 * Get the data submitted in the last Ajax request
	 */
	_api_register( 'ajax.params()', function () {
		var ctx = this.context;
	
		if ( ctx.length > 0 ) {
			return ctx[0].oAjaxData;
		}
	
		// else return undefined;
	} );
	
	
	/**
	 * Reload tables from the Ajax data source. Note that this function will
	 * automatically re-draw the table when the remote data has been loaded.
	 *
	 * @param {boolean} [reset=true] Reset (default) or hold the current paging
	 *   position. A full re-sort and re-filter is performed when this method is
	 *   called, which is why the pagination reset is the default action.
	 * @returns {DataTables.Api} this
	 */
	_api_register( 'ajax.reload()', function ( callback, resetPaging ) {
		return this.iterator( 'table', function (settings) {
			__reload( settings, resetPaging===false, callback );
		} );
	} );
	
	
	/**
	 * Get the current Ajax URL. Note that this returns the URL from the first
	 * table in the current context.
	 *
	 * @return {string} Current Ajax source URL
	 *//**
	 * Set the Ajax URL. Note that this will set the URL for all tables in the
	 * current context.
	 *
	 * @param {string} url URL to set.
	 * @returns {DataTables.Api} this
	 */
	_api_register( 'ajax.url()', function ( url ) {
		var ctx = this.context;
	
		if ( url === undefined ) {
			// get
			if ( ctx.length === 0 ) {
				return undefined;
			}
			ctx = ctx[0];
	
			return ctx.ajax ?
				$.isPlainObject( ctx.ajax ) ?
					ctx.ajax.url :
					ctx.ajax :
				ctx.sAjaxSource;
		}
	
		// set
		return this.iterator( 'table', function ( settings ) {
			if ( $.isPlainObject( settings.ajax ) ) {
				settings.ajax.url = url;
			}
			else {
				settings.ajax = url;
			}
			// No need to consider sAjaxSource here since DataTables gives priority
			// to `ajax` over `sAjaxSource`. So setting `ajax` here, renders any
			// value of `sAjaxSource` redundant.
		} );
	} );
	
	
	/**
	 * Load data from the newly set Ajax URL. Note that this method is only
	 * available when `ajax.url()` is used to set a URL. Additionally, this method
	 * has the same effect as calling `ajax.reload()` but is provided for
	 * convenience when setting a new URL. Like `ajax.reload()` it will
	 * automatically redraw the table once the remote data has been loaded.
	 *
	 * @returns {DataTables.Api} this
	 */
	_api_register( 'ajax.url().load()', function ( callback, resetPaging ) {
		// Same as a reload, but makes sense to present it for easy access after a
		// url change
		return this.iterator( 'table', function ( ctx ) {
			__reload( ctx, resetPaging===false, callback );
		} );
	} );
	
	
	
	
	var _selector_run = function ( type, selector, selectFn, settings, opts )
	{
		var
			out = [], res,
			a, i, ien, j, jen,
			selectorType = typeof selector;
	
		// Can't just check for isArray here, as an API or jQuery instance might be
		// given with their array like look
		if ( ! selector || selectorType === 'string' || selectorType === 'function' || selector.length === undefined ) {
			selector = [ selector ];
		}
	
		for ( i=0, ien=selector.length ; i<ien ; i++ ) {
			// Only split on simple strings - complex expressions will be jQuery selectors
			a = selector[i] && selector[i].split && ! selector[i].match(/[\[\(:]/) ?
				selector[i].split(',') :
				[ selector[i] ];
	
			for ( j=0, jen=a.length ; j<jen ; j++ ) {
				res = selectFn( typeof a[j] === 'string' ? $.trim(a[j]) : a[j] );
	
				if ( res && res.length ) {
					out = out.concat( res );
				}
			}
		}
	
		// selector extensions
		var ext = _ext.selector[ type ];
		if ( ext.length ) {
			for ( i=0, ien=ext.length ; i<ien ; i++ ) {
				out = ext[i]( settings, opts, out );
			}
		}
	
		return _unique( out );
	};
	
	
	var _selector_opts = function ( opts )
	{
		if ( ! opts ) {
			opts = {};
		}
	
		// Backwards compatibility for 1.9- which used the terminology filter rather
		// than search
		if ( opts.filter && opts.search === undefined ) {
			opts.search = opts.filter;
		}
	
		return $.extend( {
			search: 'none',
			order: 'current',
			page: 'all'
		}, opts );
	};
	
	
	var _selector_first = function ( inst )
	{
		// Reduce the API instance to the first item found
		for ( var i=0, ien=inst.length ; i<ien ; i++ ) {
			if ( inst[i].length > 0 ) {
				// Assign the first element to the first item in the instance
				// and truncate the instance and context
				inst[0] = inst[i];
				inst[0].length = 1;
				inst.length = 1;
				inst.context = [ inst.context[i] ];
	
				return inst;
			}
		}
	
		// Not found - return an empty instance
		inst.length = 0;
		return inst;
	};
	
	
	var _selector_row_indexes = function ( settings, opts )
	{
		var
			i, ien, tmp, a=[],
			displayFiltered = settings.aiDisplay,
			displayMaster = settings.aiDisplayMaster;
	
		var
			search = opts.search,  // none, applied, removed
			order  = opts.order,   // applied, current, index (original - compatibility with 1.9)
			page   = opts.page;    // all, current
	
		if ( _fnDataSource( settings ) == 'ssp' ) {
			// In server-side processing mode, most options are irrelevant since
			// rows not shown don't exist and the index order is the applied order
			// Removed is a special case - for consistency just return an empty
			// array
			return search === 'removed' ?
				[] :
				_range( 0, displayMaster.length );
		}
		else if ( page == 'current' ) {
			// Current page implies that order=current and fitler=applied, since it is
			// fairly senseless otherwise, regardless of what order and search actually
			// are
			for ( i=settings._iDisplayStart, ien=settings.fnDisplayEnd() ; i<ien ; i++ ) {
				a.push( displayFiltered[i] );
			}
		}
		else if ( order == 'current' || order == 'applied' ) {
			a = search == 'none' ?
				displayMaster.slice() :                      // no search
				search == 'applied' ?
					displayFiltered.slice() :                // applied search
					$.map( displayMaster, function (el, i) { // removed search
						return $.inArray( el, displayFiltered ) === -1 ? el : null;
					} );
		}
		else if ( order == 'index' || order == 'original' ) {
			for ( i=0, ien=settings.aoData.length ; i<ien ; i++ ) {
				if ( search == 'none' ) {
					a.push( i );
				}
				else { // applied | removed
					tmp = $.inArray( i, displayFiltered );
	
					if ((tmp === -1 && search == 'removed') ||
						(tmp >= 0   && search == 'applied') )
					{
						a.push( i );
					}
				}
			}
		}
	
		return a;
	};
	
	
	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * Rows
	 *
	 * {}          - no selector - use all available rows
	 * {integer}   - row aoData index
	 * {node}      - TR node
	 * {string}    - jQuery selector to apply to the TR elements
	 * {array}     - jQuery array of nodes, or simply an array of TR nodes
	 *
	 */
	
	
	var __row_selector = function ( settings, selector, opts )
	{
		var rows;
		var run = function ( sel ) {
			var selInt = _intVal( sel );
			var i, ien;
	
			// Short cut - selector is a number and no options provided (default is
			// all records, so no need to check if the index is in there, since it
			// must be - dev error if the index doesn't exist).
			if ( selInt !== null && ! opts ) {
				return [ selInt ];
			}
	
			if ( ! rows ) {
				rows = _selector_row_indexes( settings, opts );
			}
	
			if ( selInt !== null && $.inArray( selInt, rows ) !== -1 ) {
				// Selector - integer
				return [ selInt ];
			}
			else if ( sel === null || sel === undefined || sel === '' ) {
				// Selector - none
				return rows;
			}
	
			// Selector - function
			if ( typeof sel === 'function' ) {
				return $.map( rows, function (idx) {
					var row = settings.aoData[ idx ];
					return sel( idx, row._aData, row.nTr ) ? idx : null;
				} );
			}
	
			// Get nodes in the order from the `rows` array with null values removed
			var nodes = _removeEmpty(
				_pluck_order( settings.aoData, rows, 'nTr' )
			);
	
			// Selector - node
			if ( sel.nodeName ) {
				if ( sel._DT_RowIndex !== undefined ) {
					return [ sel._DT_RowIndex ]; // Property added by DT for fast lookup
				}
				else if ( sel._DT_CellIndex ) {
					return [ sel._DT_CellIndex.row ];
				}
				else {
					var host = $(sel).closest('*[data-dt-row]');
					return host.length ?
						[ host.data('dt-row') ] :
						[];
				}
			}
	
			// ID selector. Want to always be able to select rows by id, regardless
			// of if the tr element has been created or not, so can't rely upon
			// jQuery here - hence a custom implementation. This does not match
			// Sizzle's fast selector or HTML4 - in HTML5 the ID can be anything,
			// but to select it using a CSS selector engine (like Sizzle or
			// querySelect) it would need to need to be escaped for some characters.
			// DataTables simplifies this for row selectors since you can select
			// only a row. A # indicates an id any anything that follows is the id -
			// unescaped.
			if ( typeof sel === 'string' && sel.charAt(0) === '#' ) {
				// get row index from id
				var rowObj = settings.aIds[ sel.replace( /^#/, '' ) ];
				if ( rowObj !== undefined ) {
					return [ rowObj.idx ];
				}
	
				// need to fall through to jQuery in case there is DOM id that
				// matches
			}
	
			// Selector - jQuery selector string, array of nodes or jQuery object/
			// As jQuery's .filter() allows jQuery objects to be passed in filter,
			// it also allows arrays, so this will cope with all three options
			return $(nodes)
				.filter( sel )
				.map( function () {
					return this._DT_RowIndex;
				} )
				.toArray();
		};
	
		return _selector_run( 'row', selector, run, settings, opts );
	};
	
	
	_api_register( 'rows()', function ( selector, opts ) {
		// argument shifting
		if ( selector === undefined ) {
			selector = '';
		}
		else if ( $.isPlainObject( selector ) ) {
			opts = selector;
			selector = '';
		}
	
		opts = _selector_opts( opts );
	
		var inst = this.iterator( 'table', function ( settings ) {
			return __row_selector( settings, selector, opts );
		}, 1 );
	
		// Want argument shifting here and in __row_selector?
		inst.selector.rows = selector;
		inst.selector.opts = opts;
	
		return inst;
	} );
	
	_api_register( 'rows().nodes()', function () {
		return this.iterator( 'row', function ( settings, row ) {
			return settings.aoData[ row ].nTr || undefined;
		}, 1 );
	} );
	
	_api_register( 'rows().data()', function () {
		return this.iterator( true, 'rows', function ( settings, rows ) {
			return _pluck_order( settings.aoData, rows, '_aData' );
		}, 1 );
	} );
	
	_api_registerPlural( 'rows().cache()', 'row().cache()', function ( type ) {
		return this.iterator( 'row', function ( settings, row ) {
			var r = settings.aoData[ row ];
			return type === 'search' ? r._aFilterData : r._aSortData;
		}, 1 );
	} );
	
	_api_registerPlural( 'rows().invalidate()', 'row().invalidate()', function ( src ) {
		return this.iterator( 'row', function ( settings, row ) {
			_fnInvalidate( settings, row, src );
		} );
	} );
	
	_api_registerPlural( 'rows().indexes()', 'row().index()', function () {
		return this.iterator( 'row', function ( settings, row ) {
			return row;
		}, 1 );
	} );
	
	_api_registerPlural( 'rows().ids()', 'row().id()', function ( hash ) {
		var a = [];
		var context = this.context;
	
		// `iterator` will drop undefined values, but in this case we want them
		for ( var i=0, ien=context.length ; i<ien ; i++ ) {
			for ( var j=0, jen=this[i].length ; j<jen ; j++ ) {
				var id = context[i].rowIdFn( context[i].aoData[ this[i][j] ]._aData );
				a.push( (hash === true ? '#' : '' )+ id );
			}
		}
	
		return new _Api( context, a );
	} );
	
	_api_registerPlural( 'rows().remove()', 'row().remove()', function () {
		var that = this;
	
		this.iterator( 'row', function ( settings, row, thatIdx ) {
			var data = settings.aoData;
			var rowData = data[ row ];
			var i, ien, j, jen;
			var loopRow, loopCells;
	
			data.splice( row, 1 );
	
			// Update the cached indexes
			for ( i=0, ien=data.length ; i<ien ; i++ ) {
				loopRow = data[i];
				loopCells = loopRow.anCells;
	
				// Rows
				if ( loopRow.nTr !== null ) {
					loopRow.nTr._DT_RowIndex = i;
				}
	
				// Cells
				if ( loopCells !== null ) {
					for ( j=0, jen=loopCells.length ; j<jen ; j++ ) {
						loopCells[j]._DT_CellIndex.row = i;
					}
				}
			}
	
			// Delete from the display arrays
			_fnDeleteIndex( settings.aiDisplayMaster, row );
			_fnDeleteIndex( settings.aiDisplay, row );
			_fnDeleteIndex( that[ thatIdx ], row, false ); // maintain local indexes
	
			// For server-side processing tables - subtract the deleted row from the count
			if ( settings._iRecordsDisplay > 0 ) {
				settings._iRecordsDisplay--;
			}
	
			// Check for an 'overflow' they case for displaying the table
			_fnLengthOverflow( settings );
	
			// Remove the row's ID reference if there is one
			var id = settings.rowIdFn( rowData._aData );
			if ( id !== undefined ) {
				delete settings.aIds[ id ];
			}
		} );
	
		this.iterator( 'table', function ( settings ) {
			for ( var i=0, ien=settings.aoData.length ; i<ien ; i++ ) {
				settings.aoData[i].idx = i;
			}
		} );
	
		return this;
	} );
	
	
	_api_register( 'rows.add()', function ( rows ) {
		var newRows = this.iterator( 'table', function ( settings ) {
				var row, i, ien;
				var out = [];
	
				for ( i=0, ien=rows.length ; i<ien ; i++ ) {
					row = rows[i];
	
					if ( row.nodeName && row.nodeName.toUpperCase() === 'TR' ) {
						out.push( _fnAddTr( settings, row )[0] );
					}
					else {
						out.push( _fnAddData( settings, row ) );
					}
				}
	
				return out;
			}, 1 );
	
		// Return an Api.rows() extended instance, so rows().nodes() etc can be used
		var modRows = this.rows( -1 );
		modRows.pop();
		$.merge( modRows, newRows );
	
		return modRows;
	} );
	
	
	
	
	
	/**
	 *
	 */
	_api_register( 'row()', function ( selector, opts ) {
		return _selector_first( this.rows( selector, opts ) );
	} );
	
	
	_api_register( 'row().data()', function ( data ) {
		var ctx = this.context;
	
		if ( data === undefined ) {
			// Get
			return ctx.length && this.length ?
				ctx[0].aoData[ this[0] ]._aData :
				undefined;
		}
	
		// Set
		ctx[0].aoData[ this[0] ]._aData = data;
	
		// Automatically invalidate
		_fnInvalidate( ctx[0], this[0], 'data' );
	
		return this;
	} );
	
	
	_api_register( 'row().node()', function () {
		var ctx = this.context;
	
		return ctx.length && this.length ?
			ctx[0].aoData[ this[0] ].nTr || null :
			null;
	} );
	
	
	_api_register( 'row.add()', function ( row ) {
		// Allow a jQuery object to be passed in - only a single row is added from
		// it though - the first element in the set
		if ( row instanceof $ && row.length ) {
			row = row[0];
		}
	
		var rows = this.iterator( 'table', function ( settings ) {
			if ( row.nodeName && row.nodeName.toUpperCase() === 'TR' ) {
				return _fnAddTr( settings, row )[0];
			}
			return _fnAddData( settings, row );
		} );
	
		// Return an Api.rows() extended instance, with the newly added row selected
		return this.row( rows[0] );
	} );
	
	
	
	var __details_add = function ( ctx, row, data, klass )
	{
		// Convert to array of TR elements
		var rows = [];
		var addRow = function ( r, k ) {
			// Recursion to allow for arrays of jQuery objects
			if ( $.isArray( r ) || r instanceof $ ) {
				for ( var i=0, ien=r.length ; i<ien ; i++ ) {
					addRow( r[i], k );
				}
				return;
			}
	
			// If we get a TR element, then just add it directly - up to the dev
			// to add the correct number of columns etc
			if ( r.nodeName && r.nodeName.toLowerCase() === 'tr' ) {
				rows.push( r );
			}
			else {
				// Otherwise create a row with a wrapper
				var created = $('<tr><td/></tr>').addClass( k );
				$('td', created)
					.addClass( k )
					.html( r )
					[0].colSpan = _fnVisbleColumns( ctx );
	
				rows.push( created[0] );
			}
		};
	
		addRow( data, klass );
	
		if ( row._details ) {
			row._details.detach();
		}
	
		row._details = $(rows);
	
		// If the children were already shown, that state should be retained
		if ( row._detailsShow ) {
			row._details.insertAfter( row.nTr );
		}
	};
	
	
	var __details_remove = function ( api, idx )
	{
		var ctx = api.context;
	
		if ( ctx.length ) {
			var row = ctx[0].aoData[ idx !== undefined ? idx : api[0] ];
	
			if ( row && row._details ) {
				row._details.remove();
	
				row._detailsShow = undefined;
				row._details = undefined;
			}
		}
	};
	
	
	var __details_display = function ( api, show ) {
		var ctx = api.context;
	
		if ( ctx.length && api.length ) {
			var row = ctx[0].aoData[ api[0] ];
	
			if ( row._details ) {
				row._detailsShow = show;
	
				if ( show ) {
					row._details.insertAfter( row.nTr );
				}
				else {
					row._details.detach();
				}
	
				__details_events( ctx[0] );
			}
		}
	};
	
	
	var __details_events = function ( settings )
	{
		var api = new _Api( settings );
		var namespace = '.dt.DT_details';
		var drawEvent = 'draw'+namespace;
		var colvisEvent = 'column-visibility'+namespace;
		var destroyEvent = 'destroy'+namespace;
		var data = settings.aoData;
	
		api.off( drawEvent +' '+ colvisEvent +' '+ destroyEvent );
	
		if ( _pluck( data, '_details' ).length > 0 ) {
			// On each draw, insert the required elements into the document
			api.on( drawEvent, function ( e, ctx ) {
				if ( settings !== ctx ) {
					return;
				}
	
				api.rows( {page:'current'} ).eq(0).each( function (idx) {
					// Internal data grab
					var row = data[ idx ];
	
					if ( row._detailsShow ) {
						row._details.insertAfter( row.nTr );
					}
				} );
			} );
	
			// Column visibility change - update the colspan
			api.on( colvisEvent, function ( e, ctx, idx, vis ) {
				if ( settings !== ctx ) {
					return;
				}
	
				// Update the colspan for the details rows (note, only if it already has
				// a colspan)
				var row, visible = _fnVisbleColumns( ctx );
	
				for ( var i=0, ien=data.length ; i<ien ; i++ ) {
					row = data[i];
	
					if ( row._details ) {
						row._details.children('td[colspan]').attr('colspan', visible );
					}
				}
			} );
	
			// Table destroyed - nuke any child rows
			api.on( destroyEvent, function ( e, ctx ) {
				if ( settings !== ctx ) {
					return;
				}
	
				for ( var i=0, ien=data.length ; i<ien ; i++ ) {
					if ( data[i]._details ) {
						__details_remove( api, i );
					}
				}
			} );
		}
	};
	
	// Strings for the method names to help minification
	var _emp = '';
	var _child_obj = _emp+'row().child';
	var _child_mth = _child_obj+'()';
	
	// data can be:
	//  tr
	//  string
	//  jQuery or array of any of the above
	_api_register( _child_mth, function ( data, klass ) {
		var ctx = this.context;
	
		if ( data === undefined ) {
			// get
			return ctx.length && this.length ?
				ctx[0].aoData[ this[0] ]._details :
				undefined;
		}
		else if ( data === true ) {
			// show
			this.child.show();
		}
		else if ( data === false ) {
			// remove
			__details_remove( this );
		}
		else if ( ctx.length && this.length ) {
			// set
			__details_add( ctx[0], ctx[0].aoData[ this[0] ], data, klass );
		}
	
		return this;
	} );
	
	
	_api_register( [
		_child_obj+'.show()',
		_child_mth+'.show()' // only when `child()` was called with parameters (without
	], function ( show ) {   // it returns an object and this method is not executed)
		__details_display( this, true );
		return this;
	} );
	
	
	_api_register( [
		_child_obj+'.hide()',
		_child_mth+'.hide()' // only when `child()` was called with parameters (without
	], function () {         // it returns an object and this method is not executed)
		__details_display( this, false );
		return this;
	} );
	
	
	_api_register( [
		_child_obj+'.remove()',
		_child_mth+'.remove()' // only when `child()` was called with parameters (without
	], function () {           // it returns an object and this method is not executed)
		__details_remove( this );
		return this;
	} );
	
	
	_api_register( _child_obj+'.isShown()', function () {
		var ctx = this.context;
	
		if ( ctx.length && this.length ) {
			// _detailsShown as false or undefined will fall through to return false
			return ctx[0].aoData[ this[0] ]._detailsShow || false;
		}
		return false;
	} );
	
	
	
	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 * Columns
	 *
	 * {integer}           - column index (>=0 count from left, <0 count from right)
	 * "{integer}:visIdx"  - visible column index (i.e. translate to column index)  (>=0 count from left, <0 count from right)
	 * "{integer}:visible" - alias for {integer}:visIdx  (>=0 count from left, <0 count from right)
	 * "{string}:name"     - column name
	 * "{string}"          - jQuery selector on column header nodes
	 *
	 */
	
	// can be an array of these items, comma separated list, or an array of comma
	// separated lists
	
	var __re_column_selector = /^([^:]+):(name|visIdx|visible)$/;
	
	
	// r1 and r2 are redundant - but it means that the parameters match for the
	// iterator callback in columns().data()
	var __columnData = function ( settings, column, r1, r2, rows ) {
		var a = [];
		for ( var row=0, ien=rows.length ; row<ien ; row++ ) {
			a.push( _fnGetCellData( settings, rows[row], column ) );
		}
		return a;
	};
	
	
	var __column_selector = function ( settings, selector, opts )
	{
		var
			columns = settings.aoColumns,
			names = _pluck( columns, 'sName' ),
			nodes = _pluck( columns, 'nTh' );
	
		var run = function ( s ) {
			var selInt = _intVal( s );
	
			// Selector - all
			if ( s === '' ) {
				return _range( columns.length );
			}
	
			// Selector - index
			if ( selInt !== null ) {
				return [ selInt >= 0 ?
					selInt : // Count from left
					columns.length + selInt // Count from right (+ because its a negative value)
				];
			}
	
			// Selector = function
			if ( typeof s === 'function' ) {
				var rows = _selector_row_indexes( settings, opts );
	
				return $.map( columns, function (col, idx) {
					return s(
							idx,
							__columnData( settings, idx, 0, 0, rows ),
							nodes[ idx ]
						) ? idx : null;
				} );
			}
	
			// jQuery or string selector
			var match = typeof s === 'string' ?
				s.match( __re_column_selector ) :
				'';
	
			if ( match ) {
				switch( match[2] ) {
					case 'visIdx':
					case 'visible':
						var idx = parseInt( match[1], 10 );
						// Visible index given, convert to column index
						if ( idx < 0 ) {
							// Counting from the right
							var visColumns = $.map( columns, function (col,i) {
								return col.bVisible ? i : null;
							} );
							return [ visColumns[ visColumns.length + idx ] ];
						}
						// Counting from the left
						return [ _fnVisibleToColumnIndex( settings, idx ) ];
	
					case 'name':
						// match by name. `names` is column index complete and in order
						return $.map( names, function (name, i) {
							return name === match[1] ? i : null;
						} );
	
					default:
						return [];
				}
			}
	
			// Cell in the table body
			if ( s.nodeName && s._DT_CellIndex ) {
				return [ s._DT_CellIndex.column ];
			}
	
			// jQuery selector on the TH elements for the columns
			var jqResult = $( nodes )
				.filter( s )
				.map( function () {
					return $.inArray( this, nodes ); // `nodes` is column index complete and in order
				} )
				.toArray();
	
			if ( jqResult.length || ! s.nodeName ) {
				return jqResult;
			}
	
			// Otherwise a node which might have a `dt-column` data attribute, or be
			// a child or such an element
			var host = $(s).closest('*[data-dt-column]');
			return host.length ?
				[ host.data('dt-column') ] :
				[];
		};
	
		return _selector_run( 'column', selector, run, settings, opts );
	};
	
	
	var __setColumnVis = function ( settings, column, vis ) {
		var
			cols = settings.aoColumns,
			col  = cols[ column ],
			data = settings.aoData,
			row, cells, i, ien, tr;
	
		// Get
		if ( vis === undefined ) {
			return col.bVisible;
		}
	
		// Set
		// No change
		if ( col.bVisible === vis ) {
			return;
		}
	
		if ( vis ) {
			// Insert column
			// Need to decide if we should use appendChild or insertBefore
			var insertBefore = $.inArray( true, _pluck(cols, 'bVisible'), column+1 );
	
			for ( i=0, ien=data.length ; i<ien ; i++ ) {
				tr = data[i].nTr;
				cells = data[i].anCells;
	
				if ( tr ) {
					// insertBefore can act like appendChild if 2nd arg is null
					tr.insertBefore( cells[ column ], cells[ insertBefore ] || null );
				}
			}
		}
		else {
			// Remove column
			$( _pluck( settings.aoData, 'anCells', column ) ).detach();
		}
	
		// Common actions
		col.bVisible = vis;
		_fnDrawHead( settings, settings.aoHeader );
		_fnDrawHead( settings, settings.aoFooter );
	
		_fnSaveState( settings );
	};
	
	
	_api_register( 'columns()', function ( selector, opts ) {
		// argument shifting
		if ( selector === undefined ) {
			selector = '';
		}
		else if ( $.isPlainObject( selector ) ) {
			opts = selector;
			selector = '';
		}
	
		opts = _selector_opts( opts );
	
		var inst = this.iterator( 'table', function ( settings ) {
			return __column_selector( settings, selector, opts );
		}, 1 );
	
		// Want argument shifting here and in _row_selector?
		inst.selector.cols = selector;
		inst.selector.opts = opts;
	
		return inst;
	} );
	
	_api_registerPlural( 'columns().header()', 'column().header()', function ( selector, opts ) {
		return this.iterator( 'column', function ( settings, column ) {
			return settings.aoColumns[column].nTh;
		}, 1 );
	} );
	
	_api_registerPlural( 'columns().footer()', 'column().footer()', function ( selector, opts ) {
		return this.iterator( 'column', function ( settings, column ) {
			return settings.aoColumns[column].nTf;
		}, 1 );
	} );
	
	_api_registerPlural( 'columns().data()', 'column().data()', function () {
		return this.iterator( 'column-rows', __columnData, 1 );
	} );
	
	_api_registerPlural( 'columns().dataSrc()', 'column().dataSrc()', function () {
		return this.iterator( 'column', function ( settings, column ) {
			return settings.aoColumns[column].mData;
		}, 1 );
	} );
	
	_api_registerPlural( 'columns().cache()', 'column().cache()', function ( type ) {
		return this.iterator( 'column-rows', function ( settings, column, i, j, rows ) {
			return _pluck_order( settings.aoData, rows,
				type === 'search' ? '_aFilterData' : '_aSortData', column
			);
		}, 1 );
	} );
	
	_api_registerPlural( 'columns().nodes()', 'column().nodes()', function () {
		return this.iterator( 'column-rows', function ( settings, column, i, j, rows ) {
			return _pluck_order( settings.aoData, rows, 'anCells', column ) ;
		}, 1 );
	} );
	
	_api_registerPlural( 'columns().visible()', 'column().visible()', function ( vis, calc ) {
		var ret = this.iterator( 'column', function ( settings, column ) {
			if ( vis === undefined ) {
				return settings.aoColumns[ column ].bVisible;
			} // else
			__setColumnVis( settings, column, vis );
		} );
	
		// Group the column visibility changes
		if ( vis !== undefined ) {
			// Second loop once the first is done for events
			this.iterator( 'column', function ( settings, column ) {
				_fnCallbackFire( settings, null, 'column-visibility', [settings, column, vis, calc] );
			} );
	
			if ( calc === undefined || calc ) {
				this.columns.adjust();
			}
		}
	
		return ret;
	} );
	
	_api_registerPlural( 'columns().indexes()', 'column().index()', function ( type ) {
		return this.iterator( 'column', function ( settings, column ) {
			return type === 'visible' ?
				_fnColumnIndexToVisible( settings, column ) :
				column;
		}, 1 );
	} );
	
	_api_register( 'columns.adjust()', function () {
		return this.iterator( 'table', function ( settings ) {
			_fnAdjustColumnSizing( settings );
		}, 1 );
	} );
	
	_api_register( 'column.index()', function ( type, idx ) {
		if ( this.context.length !== 0 ) {
			var ctx = this.context[0];
	
			if ( type === 'fromVisible' || type === 'toData' ) {
				return _fnVisibleToColumnIndex( ctx, idx );
			}
			else if ( type === 'fromData' || type === 'toVisible' ) {
				return _fnColumnIndexToVisible( ctx, idx );
			}
		}
	} );
	
	_api_register( 'column()', function ( selector, opts ) {
		return _selector_first( this.columns( selector, opts ) );
	} );
	
	
	
	var __cell_selector = function ( settings, selector, opts )
	{
		var data = settings.aoData;
		var rows = _selector_row_indexes( settings, opts );
		var cells = _removeEmpty( _pluck_order( data, rows, 'anCells' ) );
		var allCells = $( [].concat.apply([], cells) );
		var row;
		var columns = settings.aoColumns.length;
		var a, i, ien, j, o, host;
	
		var run = function ( s ) {
			var fnSelector = typeof s === 'function';
	
			if ( s === null || s === undefined || fnSelector ) {
				// All cells and function selectors
				a = [];
	
				for ( i=0, ien=rows.length ; i<ien ; i++ ) {
					row = rows[i];
	
					for ( j=0 ; j<columns ; j++ ) {
						o = {
							row: row,
							column: j
						};
	
						if ( fnSelector ) {
							// Selector - function
							host = data[ row ];
	
							if ( s( o, _fnGetCellData(settings, row, j), host.anCells ? host.anCells[j] : null ) ) {
								a.push( o );
							}
						}
						else {
							// Selector - all
							a.push( o );
						}
					}
				}
	
				return a;
			}
			
			// Selector - index
			if ( $.isPlainObject( s ) ) {
				return [s];
			}
	
			// Selector - jQuery filtered cells
			var jqResult = allCells
				.filter( s )
				.map( function (i, el) {
					return { // use a new object, in case someone changes the values
						row:    el._DT_CellIndex.row,
						column: el._DT_CellIndex.column
	 				};
				} )
				.toArray();
	
			if ( jqResult.length || ! s.nodeName ) {
				return jqResult;
			}
	
			// Otherwise the selector is a node, and there is one last option - the
			// element might be a child of an element which has dt-row and dt-column
			// data attributes
			host = $(s).closest('*[data-dt-row]');
			return host.length ?
				[ {
					row: host.data('dt-row'),
					column: host.data('dt-column')
				} ] :
				[];
		};
	
		return _selector_run( 'cell', selector, run, settings, opts );
	};
	
	
	
	
	_api_register( 'cells()', function ( rowSelector, columnSelector, opts ) {
		// Argument shifting
		if ( $.isPlainObject( rowSelector ) ) {
			// Indexes
			if ( rowSelector.row === undefined ) {
				// Selector options in first parameter
				opts = rowSelector;
				rowSelector = null;
			}
			else {
				// Cell index objects in first parameter
				opts = columnSelector;
				columnSelector = null;
			}
		}
		if ( $.isPlainObject( columnSelector ) ) {
			opts = columnSelector;
			columnSelector = null;
		}
	
		// Cell selector
		if ( columnSelector === null || columnSelector === undefined ) {
			return this.iterator( 'table', function ( settings ) {
				return __cell_selector( settings, rowSelector, _selector_opts( opts ) );
			} );
		}
	
		// Row + column selector
		var columns = this.columns( columnSelector, opts );
		var rows = this.rows( rowSelector, opts );
		var a, i, ien, j, jen;
	
		var cells = this.iterator( 'table', function ( settings, idx ) {
			a = [];
	
			for ( i=0, ien=rows[idx].length ; i<ien ; i++ ) {
				for ( j=0, jen=columns[idx].length ; j<jen ; j++ ) {
					a.push( {
						row:    rows[idx][i],
						column: columns[idx][j]
					} );
				}
			}
	
			return a;
		}, 1 );
	
		$.extend( cells.selector, {
			cols: columnSelector,
			rows: rowSelector,
			opts: opts
		} );
	
		return cells;
	} );
	
	
	_api_registerPlural( 'cells().nodes()', 'cell().node()', function () {
		return this.iterator( 'cell', function ( settings, row, column ) {
			var data = settings.aoData[ row ];
	
			return data && data.anCells ?
				data.anCells[ column ] :
				undefined;
		}, 1 );
	} );
	
	
	_api_register( 'cells().data()', function () {
		return this.iterator( 'cell', function ( settings, row, column ) {
			return _fnGetCellData( settings, row, column );
		}, 1 );
	} );
	
	
	_api_registerPlural( 'cells().cache()', 'cell().cache()', function ( type ) {
		type = type === 'search' ? '_aFilterData' : '_aSortData';
	
		return this.iterator( 'cell', function ( settings, row, column ) {
			return settings.aoData[ row ][ type ][ column ];
		}, 1 );
	} );
	
	
	_api_registerPlural( 'cells().render()', 'cell().render()', function ( type ) {
		return this.iterator( 'cell', function ( settings, row, column ) {
			return _fnGetCellData( settings, row, column, type );
		}, 1 );
	} );
	
	
	_api_registerPlural( 'cells().indexes()', 'cell().index()', function () {
		return this.iterator( 'cell', function ( settings, row, column ) {
			return {
				row: row,
				column: column,
				columnVisible: _fnColumnIndexToVisible( settings, column )
			};
		}, 1 );
	} );
	
	
	_api_registerPlural( 'cells().invalidate()', 'cell().invalidate()', function ( src ) {
		return this.iterator( 'cell', function ( settings, row, column ) {
			_fnInvalidate( settings, row, src, column );
		} );
	} );
	
	
	
	_api_register( 'cell()', function ( rowSelector, columnSelector, opts ) {
		return _selector_first( this.cells( rowSelector, columnSelector, opts ) );
	} );
	
	
	_api_register( 'cell().data()', function ( data ) {
		var ctx = this.context;
		var cell = this[0];
	
		if ( data === undefined ) {
			// Get
			return ctx.length && cell.length ?
				_fnGetCellData( ctx[0], cell[0].row, cell[0].column ) :
				undefined;
		}
	
		// Set
		_fnSetCellData( ctx[0], cell[0].row, cell[0].column, data );
		_fnInvalidate( ctx[0], cell[0].row, 'data', cell[0].column );
	
		return this;
	} );
	
	
	
	/**
	 * Get current ordering (sorting) that has been applied to the table.
	 *
	 * @returns {array} 2D array containing the sorting information for the first
	 *   table in the current context. Each element in the parent array represents
	 *   a column being sorted upon (i.e. multi-sorting with two columns would have
	 *   2 inner arrays). The inner arrays may have 2 or 3 elements. The first is
	 *   the column index that the sorting condition applies to, the second is the
	 *   direction of the sort (`desc` or `asc`) and, optionally, the third is the
	 *   index of the sorting order from the `column.sorting` initialisation array.
	 *//**
	 * Set the ordering for the table.
	 *
	 * @param {integer} order Column index to sort upon.
	 * @param {string} direction Direction of the sort to be applied (`asc` or `desc`)
	 * @returns {DataTables.Api} this
	 *//**
	 * Set the ordering for the table.
	 *
	 * @param {array} order 1D array of sorting information to be applied.
	 * @param {array} [...] Optional additional sorting conditions
	 * @returns {DataTables.Api} this
	 *//**
	 * Set the ordering for the table.
	 *
	 * @param {array} order 2D array of sorting information to be applied.
	 * @returns {DataTables.Api} this
	 */
	_api_register( 'order()', function ( order, dir ) {
		var ctx = this.context;
	
		if ( order === undefined ) {
			// get
			return ctx.length !== 0 ?
				ctx[0].aaSorting :
				undefined;
		}
	
		// set
		if ( typeof order === 'number' ) {
			// Simple column / direction passed in
			order = [ [ order, dir ] ];
		}
		else if ( order.length && ! $.isArray( order[0] ) ) {
			// Arguments passed in (list of 1D arrays)
			order = Array.prototype.slice.call( arguments );
		}
		// otherwise a 2D array was passed in
	
		return this.iterator( 'table', function ( settings ) {
			settings.aaSorting = order.slice();
		} );
	} );
	
	
	/**
	 * Attach a sort listener to an element for a given column
	 *
	 * @param {node|jQuery|string} node Identifier for the element(s) to attach the
	 *   listener to. This can take the form of a single DOM node, a jQuery
	 *   collection of nodes or a jQuery selector which will identify the node(s).
	 * @param {integer} column the column that a click on this node will sort on
	 * @param {function} [callback] callback function when sort is run
	 * @returns {DataTables.Api} this
	 */
	_api_register( 'order.listener()', function ( node, column, callback ) {
		return this.iterator( 'table', function ( settings ) {
			_fnSortAttachListener( settings, node, column, callback );
		} );
	} );
	
	
	_api_register( 'order.fixed()', function ( set ) {
		if ( ! set ) {
			var ctx = this.context;
			var fixed = ctx.length ?
				ctx[0].aaSortingFixed :
				undefined;
	
			return $.isArray( fixed ) ?
				{ pre: fixed } :
				fixed;
		}
	
		return this.iterator( 'table', function ( settings ) {
			settings.aaSortingFixed = $.extend( true, {}, set );
		} );
	} );
	
	
	// Order by the selected column(s)
	_api_register( [
		'columns().order()',
		'column().order()'
	], function ( dir ) {
		var that = this;
	
		return this.iterator( 'table', function ( settings, i ) {
			var sort = [];
	
			$.each( that[i], function (j, col) {
				sort.push( [ col, dir ] );
			} );
	
			settings.aaSorting = sort;
		} );
	} );
	
	
	
	_api_register( 'search()', function ( input, regex, smart, caseInsen ) {
		var ctx = this.context;
	
		if ( input === undefined ) {
			// get
			return ctx.length !== 0 ?
				ctx[0].oPreviousSearch.sSearch :
				undefined;
		}
	
		// set
		return this.iterator( 'table', function ( settings ) {
			if ( ! settings.oFeatures.bFilter ) {
				return;
			}
	
			_fnFilterComplete( settings, $.extend( {}, settings.oPreviousSearch, {
				"sSearch": input+"",
				"bRegex":  regex === null ? false : regex,
				"bSmart":  smart === null ? true  : smart,
				"bCaseInsensitive": caseInsen === null ? true : caseInsen
			} ), 1 );
		} );
	} );
	
	
	_api_registerPlural(
		'columns().search()',
		'column().search()',
		function ( input, regex, smart, caseInsen ) {
			return this.iterator( 'column', function ( settings, column ) {
				var preSearch = settings.aoPreSearchCols;
	
				if ( input === undefined ) {
					// get
					return preSearch[ column ].sSearch;
				}
	
				// set
				if ( ! settings.oFeatures.bFilter ) {
					return;
				}
	
				$.extend( preSearch[ column ], {
					"sSearch": input+"",
					"bRegex":  regex === null ? false : regex,
					"bSmart":  smart === null ? true  : smart,
					"bCaseInsensitive": caseInsen === null ? true : caseInsen
				} );
	
				_fnFilterComplete( settings, settings.oPreviousSearch, 1 );
			} );
		}
	);
	
	/*
	 * State API methods
	 */
	
	_api_register( 'state()', function () {
		return this.context.length ?
			this.context[0].oSavedState :
			null;
	} );
	
	
	_api_register( 'state.clear()', function () {
		return this.iterator( 'table', function ( settings ) {
			// Save an empty object
			settings.fnStateSaveCallback.call( settings.oInstance, settings, {} );
		} );
	} );
	
	
	_api_register( 'state.loaded()', function () {
		return this.context.length ?
			this.context[0].oLoadedState :
			null;
	} );
	
	
	_api_register( 'state.save()', function () {
		return this.iterator( 'table', function ( settings ) {
			_fnSaveState( settings );
		} );
	} );
	
	
	
	/**
	 * Provide a common method for plug-ins to check the version of DataTables being
	 * used, in order to ensure compatibility.
	 *
	 *  @param {string} version Version string to check for, in the format "X.Y.Z".
	 *    Note that the formats "X" and "X.Y" are also acceptable.
	 *  @returns {boolean} true if this version of DataTables is greater or equal to
	 *    the required version, or false if this version of DataTales is not
	 *    suitable
	 *  @static
	 *  @dtopt API-Static
	 *
	 *  @example
	 *    alert( $.fn.dataTable.versionCheck( '1.9.0' ) );
	 */
	DataTable.versionCheck = DataTable.fnVersionCheck = function( version )
	{
		var aThis = DataTable.version.split('.');
		var aThat = version.split('.');
		var iThis, iThat;
	
		for ( var i=0, iLen=aThat.length ; i<iLen ; i++ ) {
			iThis = parseInt( aThis[i], 10 ) || 0;
			iThat = parseInt( aThat[i], 10 ) || 0;
	
			// Parts are the same, keep comparing
			if (iThis === iThat) {
				continue;
			}
	
			// Parts are different, return immediately
			return iThis > iThat;
		}
	
		return true;
	};
	
	
	/**
	 * Check if a `<table>` node is a DataTable table already or not.
	 *
	 *  @param {node|jquery|string} table Table node, jQuery object or jQuery
	 *      selector for the table to test. Note that if more than more than one
	 *      table is passed on, only the first will be checked
	 *  @returns {boolean} true the table given is a DataTable, or false otherwise
	 *  @static
	 *  @dtopt API-Static
	 *
	 *  @example
	 *    if ( ! $.fn.DataTable.isDataTable( '#example' ) ) {
	 *      $('#example').dataTable();
	 *    }
	 */
	DataTable.isDataTable = DataTable.fnIsDataTable = function ( table )
	{
		var t = $(table).get(0);
		var is = false;
	
		if ( table instanceof DataTable.Api ) {
			return true;
		}
	
		$.each( DataTable.settings, function (i, o) {
			var head = o.nScrollHead ? $('table', o.nScrollHead)[0] : null;
			var foot = o.nScrollFoot ? $('table', o.nScrollFoot)[0] : null;
	
			if ( o.nTable === t || head === t || foot === t ) {
				is = true;
			}
		} );
	
		return is;
	};
	
	
	/**
	 * Get all DataTable tables that have been initialised - optionally you can
	 * select to get only currently visible tables.
	 *
	 *  @param {boolean} [visible=false] Flag to indicate if you want all (default)
	 *    or visible tables only.
	 *  @returns {array} Array of `table` nodes (not DataTable instances) which are
	 *    DataTables
	 *  @static
	 *  @dtopt API-Static
	 *
	 *  @example
	 *    $.each( $.fn.dataTable.tables(true), function () {
	 *      $(table).DataTable().columns.adjust();
	 *    } );
	 */
	DataTable.tables = DataTable.fnTables = function ( visible )
	{
		var api = false;
	
		if ( $.isPlainObject( visible ) ) {
			api = visible.api;
			visible = visible.visible;
		}
	
		var a = $.map( DataTable.settings, function (o) {
			if ( !visible || (visible && $(o.nTable).is(':visible')) ) {
				return o.nTable;
			}
		} );
	
		return api ?
			new _Api( a ) :
			a;
	};
	
	
	/**
	 * Convert from camel case parameters to Hungarian notation. This is made public
	 * for the extensions to provide the same ability as DataTables core to accept
	 * either the 1.9 style Hungarian notation, or the 1.10+ style camelCase
	 * parameters.
	 *
	 *  @param {object} src The model object which holds all parameters that can be
	 *    mapped.
	 *  @param {object} user The object to convert from camel case to Hungarian.
	 *  @param {boolean} force When set to `true`, properties which already have a
	 *    Hungarian value in the `user` object will be overwritten. Otherwise they
	 *    won't be.
	 */
	DataTable.camelToHungarian = _fnCamelToHungarian;
	
	
	
	/**
	 *
	 */
	_api_register( '$()', function ( selector, opts ) {
		var
			rows   = this.rows( opts ).nodes(), // Get all rows
			jqRows = $(rows);
	
		return $( [].concat(
			jqRows.filter( selector ).toArray(),
			jqRows.find( selector ).toArray()
		) );
	} );
	
	
	// jQuery functions to operate on the tables
	$.each( [ 'on', 'one', 'off' ], function (i, key) {
		_api_register( key+'()', function ( /* event, handler */ ) {
			var args = Array.prototype.slice.call(arguments);
	
			// Add the `dt` namespace automatically if it isn't already present
			args[0] = $.map( args[0].split( /\s/ ), function ( e ) {
				return ! e.match(/\.dt\b/) ?
					e+'.dt' :
					e;
				} ).join( ' ' );
	
			var inst = $( this.tables().nodes() );
			inst[key].apply( inst, args );
			return this;
		} );
	} );
	
	
	_api_register( 'clear()', function () {
		return this.iterator( 'table', function ( settings ) {
			_fnClearTable( settings );
		} );
	} );
	
	
	_api_register( 'settings()', function () {
		return new _Api( this.context, this.context );
	} );
	
	
	_api_register( 'init()', function () {
		var ctx = this.context;
		return ctx.length ? ctx[0].oInit : null;
	} );
	
	
	_api_register( 'data()', function () {
		return this.iterator( 'table', function ( settings ) {
			return _pluck( settings.aoData, '_aData' );
		} ).flatten();
	} );
	
	
	_api_register( 'destroy()', function ( remove ) {
		remove = remove || false;
	
		return this.iterator( 'table', function ( settings ) {
			var orig      = settings.nTableWrapper.parentNode;
			var classes   = settings.oClasses;
			var table     = settings.nTable;
			var tbody     = settings.nTBody;
			var thead     = settings.nTHead;
			var tfoot     = settings.nTFoot;
			var jqTable   = $(table);
			var jqTbody   = $(tbody);
			var jqWrapper = $(settings.nTableWrapper);
			var rows      = $.map( settings.aoData, function (r) { return r.nTr; } );
			var i, ien;
	
			// Flag to note that the table is currently being destroyed - no action
			// should be taken
			settings.bDestroying = true;
	
			// Fire off the destroy callbacks for plug-ins etc
			_fnCallbackFire( settings, "aoDestroyCallback", "destroy", [settings] );
	
			// If not being removed from the document, make all columns visible
			if ( ! remove ) {
				new _Api( settings ).columns().visible( true );
			}
	
			// Blitz all `DT` namespaced events (these are internal events, the
			// lowercase, `dt` events are user subscribed and they are responsible
			// for removing them
			jqWrapper.off('.DT').find(':not(tbody *)').off('.DT');
			$(window).off('.DT-'+settings.sInstance);
	
			// When scrolling we had to break the table up - restore it
			if ( table != thead.parentNode ) {
				jqTable.children('thead').detach();
				jqTable.append( thead );
			}
	
			if ( tfoot && table != tfoot.parentNode ) {
				jqTable.children('tfoot').detach();
				jqTable.append( tfoot );
			}
	
			settings.aaSorting = [];
			settings.aaSortingFixed = [];
			_fnSortingClasses( settings );
	
			$( rows ).removeClass( settings.asStripeClasses.join(' ') );
	
			$('th, td', thead).removeClass( classes.sSortable+' '+
				classes.sSortableAsc+' '+classes.sSortableDesc+' '+classes.sSortableNone
			);
	
			// Add the TR elements back into the table in their original order
			jqTbody.children().detach();
			jqTbody.append( rows );
	
			// Remove the DataTables generated nodes, events and classes
			var removedMethod = remove ? 'remove' : 'detach';
			jqTable[ removedMethod ]();
			jqWrapper[ removedMethod ]();
	
			// If we need to reattach the table to the document
			if ( ! remove && orig ) {
				// insertBefore acts like appendChild if !arg[1]
				orig.insertBefore( table, settings.nTableReinsertBefore );
	
				// Restore the width of the original table - was read from the style property,
				// so we can restore directly to that
				jqTable
					.css( 'width', settings.sDestroyWidth )
					.removeClass( classes.sTable );
	
				// If the were originally stripe classes - then we add them back here.
				// Note this is not fool proof (for example if not all rows had stripe
				// classes - but it's a good effort without getting carried away
				ien = settings.asDestroyStripes.length;
	
				if ( ien ) {
					jqTbody.children().each( function (i) {
						$(this).addClass( settings.asDestroyStripes[i % ien] );
					} );
				}
			}
	
			/* Remove the settings object from the settings array */
			var idx = $.inArray( settings, DataTable.settings );
			if ( idx !== -1 ) {
				DataTable.settings.splice( idx, 1 );
			}
		} );
	} );
	
	
	// Add the `every()` method for rows, columns and cells in a compact form
	$.each( [ 'column', 'row', 'cell' ], function ( i, type ) {
		_api_register( type+'s().every()', function ( fn ) {
			var opts = this.selector.opts;
			var api = this;
	
			return this.iterator( type, function ( settings, arg1, arg2, arg3, arg4 ) {
				// Rows and columns:
				//  arg1 - index
				//  arg2 - table counter
				//  arg3 - loop counter
				//  arg4 - undefined
				// Cells:
				//  arg1 - row index
				//  arg2 - column index
				//  arg3 - table counter
				//  arg4 - loop counter
				fn.call(
					api[ type ](
						arg1,
						type==='cell' ? arg2 : opts,
						type==='cell' ? opts : undefined
					),
					arg1, arg2, arg3, arg4
				);
			} );
		} );
	} );
	
	
	// i18n method for extensions to be able to use the language object from the
	// DataTable
	_api_register( 'i18n()', function ( token, def, plural ) {
		var ctx = this.context[0];
		var resolved = _fnGetObjectDataFn( token )( ctx.oLanguage );
	
		if ( resolved === undefined ) {
			resolved = def;
		}
	
		if ( plural !== undefined && $.isPlainObject( resolved ) ) {
			resolved = resolved[ plural ] !== undefined ?
				resolved[ plural ] :
				resolved._;
		}
	
		return resolved.replace( '%d', plural ); // nb: plural might be undefined,
	} );
	/**
	 * Version string for plug-ins to check compatibility. Allowed format is
	 * `a.b.c-d` where: a:int, b:int, c:int, d:string(dev|beta|alpha). `d` is used
	 * only for non-release builds. See http://semver.org/ for more information.
	 *  @member
	 *  @type string
	 *  @default Version number
	 */
	DataTable.version = "1.10.16";

	/**
	 * Private data store, containing all of the settings objects that are
	 * created for the tables on a given page.
	 *
	 * Note that the `DataTable.settings` object is aliased to
	 * `jQuery.fn.dataTableExt` through which it may be accessed and
	 * manipulated, or `jQuery.fn.dataTable.settings`.
	 *  @member
	 *  @type array
	 *  @default []
	 *  @private
	 */
	DataTable.settings = [];

	/**
	 * Object models container, for the various models that DataTables has
	 * available to it. These models define the objects that are used to hold
	 * the active state and configuration of the table.
	 *  @namespace
	 */
	DataTable.models = {};
	
	
	
	/**
	 * Template object for the way in which DataTables holds information about
	 * search information for the global filter and individual column filters.
	 *  @namespace
	 */
	DataTable.models.oSearch = {
		/**
		 * Flag to indicate if the filtering should be case insensitive or not
		 *  @type boolean
		 *  @default true
		 */
		"bCaseInsensitive": true,
	
		/**
		 * Applied search term
		 *  @type string
		 *  @default <i>Empty string</i>
		 */
		"sSearch": "",
	
		/**
		 * Flag to indicate if the search term should be interpreted as a
		 * regular expression (true) or not (false) and therefore and special
		 * regex characters escaped.
		 *  @type boolean
		 *  @default false
		 */
		"bRegex": false,
	
		/**
		 * Flag to indicate if DataTables is to use its smart filtering or not.
		 *  @type boolean
		 *  @default true
		 */
		"bSmart": true
	};
	
	
	
	
	/**
	 * Template object for the way in which DataTables holds information about
	 * each individual row. This is the object format used for the settings
	 * aoData array.
	 *  @namespace
	 */
	DataTable.models.oRow = {
		/**
		 * TR element for the row
		 *  @type node
		 *  @default null
		 */
		"nTr": null,
	
		/**
		 * Array of TD elements for each row. This is null until the row has been
		 * created.
		 *  @type array nodes
		 *  @default []
		 */
		"anCells": null,
	
		/**
		 * Data object from the original data source for the row. This is either
		 * an array if using the traditional form of DataTables, or an object if
		 * using mData options. The exact type will depend on the passed in
		 * data from the data source, or will be an array if using DOM a data
		 * source.
		 *  @type array|object
		 *  @default []
		 */
		"_aData": [],
	
		/**
		 * Sorting data cache - this array is ostensibly the same length as the
		 * number of columns (although each index is generated only as it is
		 * needed), and holds the data that is used for sorting each column in the
		 * row. We do this cache generation at the start of the sort in order that
		 * the formatting of the sort data need be done only once for each cell
		 * per sort. This array should not be read from or written to by anything
		 * other than the master sorting methods.
		 *  @type array
		 *  @default null
		 *  @private
		 */
		"_aSortData": null,
	
		/**
		 * Per cell filtering data cache. As per the sort data cache, used to
		 * increase the performance of the filtering in DataTables
		 *  @type array
		 *  @default null
		 *  @private
		 */
		"_aFilterData": null,
	
		/**
		 * Filtering data cache. This is the same as the cell filtering cache, but
		 * in this case a string rather than an array. This is easily computed with
		 * a join on `_aFilterData`, but is provided as a cache so the join isn't
		 * needed on every search (memory traded for performance)
		 *  @type array
		 *  @default null
		 *  @private
		 */
		"_sFilterRow": null,
	
		/**
		 * Cache of the class name that DataTables has applied to the row, so we
		 * can quickly look at this variable rather than needing to do a DOM check
		 * on className for the nTr property.
		 *  @type string
		 *  @default <i>Empty string</i>
		 *  @private
		 */
		"_sRowStripe": "",
	
		/**
		 * Denote if the original data source was from the DOM, or the data source
		 * object. This is used for invalidating data, so DataTables can
		 * automatically read data from the original source, unless uninstructed
		 * otherwise.
		 *  @type string
		 *  @default null
		 *  @private
		 */
		"src": null,
	
		/**
		 * Index in the aoData array. This saves an indexOf lookup when we have the
		 * object, but want to know the index
		 *  @type integer
		 *  @default -1
		 *  @private
		 */
		"idx": -1
	};
	
	
	/**
	 * Template object for the column information object in DataTables. This object
	 * is held in the settings aoColumns array and contains all the information that
	 * DataTables needs about each individual column.
	 *
	 * Note that this object is related to {@link DataTable.defaults.column}
	 * but this one is the internal data store for DataTables's cache of columns.
	 * It should NOT be manipulated outside of DataTables. Any configuration should
	 * be done through the initialisation options.
	 *  @namespace
	 */
	DataTable.models.oColumn = {
		/**
		 * Column index. This could be worked out on-the-fly with $.inArray, but it
		 * is faster to just hold it as a variable
		 *  @type integer
		 *  @default null
		 */
		"idx": null,
	
		/**
		 * A list of the columns that sorting should occur on when this column
		 * is sorted. That this property is an array allows multi-column sorting
		 * to be defined for a column (for example first name / last name columns
		 * would benefit from this). The values are integers pointing to the
		 * columns to be sorted on (typically it will be a single integer pointing
		 * at itself, but that doesn't need to be the case).
		 *  @type array
		 */
		"aDataSort": null,
	
		/**
		 * Define the sorting directions that are applied to the column, in sequence
		 * as the column is repeatedly sorted upon - i.e. the first value is used
		 * as the sorting direction when the column if first sorted (clicked on).
		 * Sort it again (click again) and it will move on to the next index.
		 * Repeat until loop.
		 *  @type array
		 */
		"asSorting": null,
	
		/**
		 * Flag to indicate if the column is searchable, and thus should be included
		 * in the filtering or not.
		 *  @type boolean
		 */
		"bSearchable": null,
	
		/**
		 * Flag to indicate if the column is sortable or not.
		 *  @type boolean
		 */
		"bSortable": null,
	
		/**
		 * Flag to indicate if the column is currently visible in the table or not
		 *  @type boolean
		 */
		"bVisible": null,
	
		/**
		 * Store for manual type assignment using the `column.type` option. This
		 * is held in store so we can manipulate the column's `sType` property.
		 *  @type string
		 *  @default null
		 *  @private
		 */
		"_sManualType": null,
	
		/**
		 * Flag to indicate if HTML5 data attributes should be used as the data
		 * source for filtering or sorting. True is either are.
		 *  @type boolean
		 *  @default false
		 *  @private
		 */
		"_bAttrSrc": false,
	
		/**
		 * Developer definable function that is called whenever a cell is created (Ajax source,
		 * etc) or processed for input (DOM source). This can be used as a compliment to mRender
		 * allowing you to modify the DOM element (add background colour for example) when the
		 * element is available.
		 *  @type function
		 *  @param {element} nTd The TD node that has been created
		 *  @param {*} sData The Data for the cell
		 *  @param {array|object} oData The data for the whole row
		 *  @param {int} iRow The row index for the aoData data store
		 *  @default null
		 */
		"fnCreatedCell": null,
	
		/**
		 * Function to get data from a cell in a column. You should <b>never</b>
		 * access data directly through _aData internally in DataTables - always use
		 * the method attached to this property. It allows mData to function as
		 * required. This function is automatically assigned by the column
		 * initialisation method
		 *  @type function
		 *  @param {array|object} oData The data array/object for the array
		 *    (i.e. aoData[]._aData)
		 *  @param {string} sSpecific The specific data type you want to get -
		 *    'display', 'type' 'filter' 'sort'
		 *  @returns {*} The data for the cell from the given row's data
		 *  @default null
		 */
		"fnGetData": null,
	
		/**
		 * Function to set data for a cell in the column. You should <b>never</b>
		 * set the data directly to _aData internally in DataTables - always use
		 * this method. It allows mData to function as required. This function
		 * is automatically assigned by the column initialisation method
		 *  @type function
		 *  @param {array|object} oData The data array/object for the array
		 *    (i.e. aoData[]._aData)
		 *  @param {*} sValue Value to set
		 *  @default null
		 */
		"fnSetData": null,
	
		/**
		 * Property to read the value for the cells in the column from the data
		 * source array / object. If null, then the default content is used, if a
		 * function is given then the return from the function is used.
		 *  @type function|int|string|null
		 *  @default null
		 */
		"mData": null,
	
		/**
		 * Partner property to mData which is used (only when defined) to get
		 * the data - i.e. it is basically the same as mData, but without the
		 * 'set' option, and also the data fed to it is the result from mData.
		 * This is the rendering method to match the data method of mData.
		 *  @type function|int|string|null
		 *  @default null
		 */
		"mRender": null,
	
		/**
		 * Unique header TH/TD element for this column - this is what the sorting
		 * listener is attached to (if sorting is enabled.)
		 *  @type node
		 *  @default null
		 */
		"nTh": null,
	
		/**
		 * Unique footer TH/TD element for this column (if there is one). Not used
		 * in DataTables as such, but can be used for plug-ins to reference the
		 * footer for each column.
		 *  @type node
		 *  @default null
		 */
		"nTf": null,
	
		/**
		 * The class to apply to all TD elements in the table's TBODY for the column
		 *  @type string
		 *  @default null
		 */
		"sClass": null,
	
		/**
		 * When DataTables calculates the column widths to assign to each column,
		 * it finds the longest string in each column and then constructs a
		 * temporary table and reads the widths from that. The problem with this
		 * is that "mmm" is much wider then "iiii", but the latter is a longer
		 * string - thus the calculation can go wrong (doing it properly and putting
		 * it into an DOM object and measuring that is horribly(!) slow). Thus as
		 * a "work around" we provide this option. It will append its value to the
		 * text that is found to be the longest string for the column - i.e. padding.
		 *  @type string
		 */
		"sContentPadding": null,
	
		/**
		 * Allows a default value to be given for a column's data, and will be used
		 * whenever a null data source is encountered (this can be because mData
		 * is set to null, or because the data source itself is null).
		 *  @type string
		 *  @default null
		 */
		"sDefaultContent": null,
	
		/**
		 * Name for the column, allowing reference to the column by name as well as
		 * by index (needs a lookup to work by name).
		 *  @type string
		 */
		"sName": null,
	
		/**
		 * Custom sorting data type - defines which of the available plug-ins in
		 * afnSortData the custom sorting will use - if any is defined.
		 *  @type string
		 *  @default std
		 */
		"sSortDataType": 'std',
	
		/**
		 * Class to be applied to the header element when sorting on this column
		 *  @type string
		 *  @default null
		 */
		"sSortingClass": null,
	
		/**
		 * Class to be applied to the header element when sorting on this column -
		 * when jQuery UI theming is used.
		 *  @type string
		 *  @default null
		 */
		"sSortingClassJUI": null,
	
		/**
		 * Title of the column - what is seen in the TH element (nTh).
		 *  @type string
		 */
		"sTitle": null,
	
		/**
		 * Column sorting and filtering type
		 *  @type string
		 *  @default null
		 */
		"sType": null,
	
		/**
		 * Width of the column
		 *  @type string
		 *  @default null
		 */
		"sWidth": null,
	
		/**
		 * Width of the column when it was first "encountered"
		 *  @type string
		 *  @default null
		 */
		"sWidthOrig": null
	};
	
	
	/*
	 * Developer note: The properties of the object below are given in Hungarian
	 * notation, that was used as the interface for DataTables prior to v1.10, however
	 * from v1.10 onwards the primary interface is camel case. In order to avoid
	 * breaking backwards compatibility utterly with this change, the Hungarian
	 * version is still, internally the primary interface, but is is not documented
	 * - hence the @name tags in each doc comment. This allows a Javascript function
	 * to create a map from Hungarian notation to camel case (going the other direction
	 * would require each property to be listed, which would at around 3K to the size
	 * of DataTables, while this method is about a 0.5K hit.
	 *
	 * Ultimately this does pave the way for Hungarian notation to be dropped
	 * completely, but that is a massive amount of work and will break current
	 * installs (therefore is on-hold until v2).
	 */
	
	/**
	 * Initialisation options that can be given to DataTables at initialisation
	 * time.
	 *  @namespace
	 */
	DataTable.defaults = {
		/**
		 * An array of data to use for the table, passed in at initialisation which
		 * will be used in preference to any data which is already in the DOM. This is
		 * particularly useful for constructing tables purely in Javascript, for
		 * example with a custom Ajax call.
		 *  @type array
		 *  @default null
		 *
		 *  @dtopt Option
		 *  @name DataTable.defaults.data
		 *
		 *  @example
		 *    // Using a 2D array data source
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "data": [
		 *          ['Trident', 'Internet Explorer 4.0', 'Win 95+', 4, 'X'],
		 *          ['Trident', 'Internet Explorer 5.0', 'Win 95+', 5, 'C'],
		 *        ],
		 *        "columns": [
		 *          { "title": "Engine" },
		 *          { "title": "Browser" },
		 *          { "title": "Platform" },
		 *          { "title": "Version" },
		 *          { "title": "Grade" }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using an array of objects as a data source (`data`)
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "data": [
		 *          {
		 *            "engine":   "Trident",
		 *            "browser":  "Internet Explorer 4.0",
		 *            "platform": "Win 95+",
		 *            "version":  4,
		 *            "grade":    "X"
		 *          },
		 *          {
		 *            "engine":   "Trident",
		 *            "browser":  "Internet Explorer 5.0",
		 *            "platform": "Win 95+",
		 *            "version":  5,
		 *            "grade":    "C"
		 *          }
		 *        ],
		 *        "columns": [
		 *          { "title": "Engine",   "data": "engine" },
		 *          { "title": "Browser",  "data": "browser" },
		 *          { "title": "Platform", "data": "platform" },
		 *          { "title": "Version",  "data": "version" },
		 *          { "title": "Grade",    "data": "grade" }
		 *        ]
		 *      } );
		 *    } );
		 */
		"aaData": null,
	
	
		/**
		 * If ordering is enabled, then DataTables will perform a first pass sort on
		 * initialisation. You can define which column(s) the sort is performed
		 * upon, and the sorting direction, with this variable. The `sorting` array
		 * should contain an array for each column to be sorted initially containing
		 * the column's index and a direction string ('asc' or 'desc').
		 *  @type array
		 *  @default [[0,'asc']]
		 *
		 *  @dtopt Option
		 *  @name DataTable.defaults.order
		 *
		 *  @example
		 *    // Sort by 3rd column first, and then 4th column
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "order": [[2,'asc'], [3,'desc']]
		 *      } );
		 *    } );
		 *
		 *    // No initial sorting
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "order": []
		 *      } );
		 *    } );
		 */
		"aaSorting": [[0,'asc']],
	
	
		/**
		 * This parameter is basically identical to the `sorting` parameter, but
		 * cannot be overridden by user interaction with the table. What this means
		 * is that you could have a column (visible or hidden) which the sorting
		 * will always be forced on first - any sorting after that (from the user)
		 * will then be performed as required. This can be useful for grouping rows
		 * together.
		 *  @type array
		 *  @default null
		 *
		 *  @dtopt Option
		 *  @name DataTable.defaults.orderFixed
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "orderFixed": [[0,'asc']]
		 *      } );
		 *    } )
		 */
		"aaSortingFixed": [],
	
	
		/**
		 * DataTables can be instructed to load data to display in the table from a
		 * Ajax source. This option defines how that Ajax call is made and where to.
		 *
		 * The `ajax` property has three different modes of operation, depending on
		 * how it is defined. These are:
		 *
		 * * `string` - Set the URL from where the data should be loaded from.
		 * * `object` - Define properties for `jQuery.ajax`.
		 * * `function` - Custom data get function
		 *
		 * `string`
		 * --------
		 *
		 * As a string, the `ajax` property simply defines the URL from which
		 * DataTables will load data.
		 *
		 * `object`
		 * --------
		 *
		 * As an object, the parameters in the object are passed to
		 * [jQuery.ajax](http://api.jquery.com/jQuery.ajax/) allowing fine control
		 * of the Ajax request. DataTables has a number of default parameters which
		 * you can override using this option. Please refer to the jQuery
		 * documentation for a full description of the options available, although
		 * the following parameters provide additional options in DataTables or
		 * require special consideration:
		 *
		 * * `data` - As with jQuery, `data` can be provided as an object, but it
		 *   can also be used as a function to manipulate the data DataTables sends
		 *   to the server. The function takes a single parameter, an object of
		 *   parameters with the values that DataTables has readied for sending. An
		 *   object may be returned which will be merged into the DataTables
		 *   defaults, or you can add the items to the object that was passed in and
		 *   not return anything from the function. This supersedes `fnServerParams`
		 *   from DataTables 1.9-.
		 *
		 * * `dataSrc` - By default DataTables will look for the property `data` (or
		 *   `aaData` for compatibility with DataTables 1.9-) when obtaining data
		 *   from an Ajax source or for server-side processing - this parameter
		 *   allows that property to be changed. You can use Javascript dotted
		 *   object notation to get a data source for multiple levels of nesting, or
		 *   it my be used as a function. As a function it takes a single parameter,
		 *   the JSON returned from the server, which can be manipulated as
		 *   required, with the returned value being that used by DataTables as the
		 *   data source for the table. This supersedes `sAjaxDataProp` from
		 *   DataTables 1.9-.
		 *
		 * * `success` - Should not be overridden it is used internally in
		 *   DataTables. To manipulate / transform the data returned by the server
		 *   use `ajax.dataSrc`, or use `ajax` as a function (see below).
		 *
		 * `function`
		 * ----------
		 *
		 * As a function, making the Ajax call is left up to yourself allowing
		 * complete control of the Ajax request. Indeed, if desired, a method other
		 * than Ajax could be used to obtain the required data, such as Web storage
		 * or an AIR database.
		 *
		 * The function is given four parameters and no return is required. The
		 * parameters are:
		 *
		 * 1. _object_ - Data to send to the server
		 * 2. _function_ - Callback function that must be executed when the required
		 *    data has been obtained. That data should be passed into the callback
		 *    as the only parameter
		 * 3. _object_ - DataTables settings object for the table
		 *
		 * Note that this supersedes `fnServerData` from DataTables 1.9-.
		 *
		 *  @type string|object|function
		 *  @default null
		 *
		 *  @dtopt Option
		 *  @name DataTable.defaults.ajax
		 *  @since 1.10.0
		 *
		 * @example
		 *   // Get JSON data from a file via Ajax.
		 *   // Note DataTables expects data in the form `{ data: [ ...data... ] }` by default).
		 *   $('#example').dataTable( {
		 *     "ajax": "data.json"
		 *   } );
		 *
		 * @example
		 *   // Get JSON data from a file via Ajax, using `dataSrc` to change
		 *   // `data` to `tableData` (i.e. `{ tableData: [ ...data... ] }`)
		 *   $('#example').dataTable( {
		 *     "ajax": {
		 *       "url": "data.json",
		 *       "dataSrc": "tableData"
		 *     }
		 *   } );
		 *
		 * @example
		 *   // Get JSON data from a file via Ajax, using `dataSrc` to read data
		 *   // from a plain array rather than an array in an object
		 *   $('#example').dataTable( {
		 *     "ajax": {
		 *       "url": "data.json",
		 *       "dataSrc": ""
		 *     }
		 *   } );
		 *
		 * @example
		 *   // Manipulate the data returned from the server - add a link to data
		 *   // (note this can, should, be done using `render` for the column - this
		 *   // is just a simple example of how the data can be manipulated).
		 *   $('#example').dataTable( {
		 *     "ajax": {
		 *       "url": "data.json",
		 *       "dataSrc": function ( json ) {
		 *         for ( var i=0, ien=json.length ; i<ien ; i++ ) {
		 *           json[i][0] = '<a href="/message/'+json[i][0]+'>View message</a>';
		 *         }
		 *         return json;
		 *       }
		 *     }
		 *   } );
		 *
		 * @example
		 *   // Add data to the request
		 *   $('#example').dataTable( {
		 *     "ajax": {
		 *       "url": "data.json",
		 *       "data": function ( d ) {
		 *         return {
		 *           "extra_search": $('#extra').val()
		 *         };
		 *       }
		 *     }
		 *   } );
		 *
		 * @example
		 *   // Send request as POST
		 *   $('#example').dataTable( {
		 *     "ajax": {
		 *       "url": "data.json",
		 *       "type": "POST"
		 *     }
		 *   } );
		 *
		 * @example
		 *   // Get the data from localStorage (could interface with a form for
		 *   // adding, editing and removing rows).
		 *   $('#example').dataTable( {
		 *     "ajax": function (data, callback, settings) {
		 *       callback(
		 *         JSON.parse( localStorage.getItem('dataTablesData') )
		 *       );
		 *     }
		 *   } );
		 */
		"ajax": null,
	
	
		/**
		 * This parameter allows you to readily specify the entries in the length drop
		 * down menu that DataTables shows when pagination is enabled. It can be
		 * either a 1D array of options which will be used for both the displayed
		 * option and the value, or a 2D array which will use the array in the first
		 * position as the value, and the array in the second position as the
		 * displayed options (useful for language strings such as 'All').
		 *
		 * Note that the `pageLength` property will be automatically set to the
		 * first value given in this array, unless `pageLength` is also provided.
		 *  @type array
		 *  @default [ 10, 25, 50, 100 ]
		 *
		 *  @dtopt Option
		 *  @name DataTable.defaults.lengthMenu
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]]
		 *      } );
		 *    } );
		 */
		"aLengthMenu": [ 10, 25, 50, 100 ],
	
	
		/**
		 * The `columns` option in the initialisation parameter allows you to define
		 * details about the way individual columns behave. For a full list of
		 * column options that can be set, please see
		 * {@link DataTable.defaults.column}. Note that if you use `columns` to
		 * define your columns, you must have an entry in the array for every single
		 * column that you have in your table (these can be null if you don't which
		 * to specify any options).
		 *  @member
		 *
		 *  @name DataTable.defaults.column
		 */
		"aoColumns": null,
	
		/**
		 * Very similar to `columns`, `columnDefs` allows you to target a specific
		 * column, multiple columns, or all columns, using the `targets` property of
		 * each object in the array. This allows great flexibility when creating
		 * tables, as the `columnDefs` arrays can be of any length, targeting the
		 * columns you specifically want. `columnDefs` may use any of the column
		 * options available: {@link DataTable.defaults.column}, but it _must_
		 * have `targets` defined in each object in the array. Values in the `targets`
		 * array may be:
		 *   <ul>
		 *     <li>a string - class name will be matched on the TH for the column</li>
		 *     <li>0 or a positive integer - column index counting from the left</li>
		 *     <li>a negative integer - column index counting from the right</li>
		 *     <li>the string "_all" - all columns (i.e. assign a default)</li>
		 *   </ul>
		 *  @member
		 *
		 *  @name DataTable.defaults.columnDefs
		 */
		"aoColumnDefs": null,
	
	
		/**
		 * Basically the same as `search`, this parameter defines the individual column
		 * filtering state at initialisation time. The array must be of the same size
		 * as the number of columns, and each element be an object with the parameters
		 * `search` and `escapeRegex` (the latter is optional). 'null' is also
		 * accepted and the default will be used.
		 *  @type array
		 *  @default []
		 *
		 *  @dtopt Option
		 *  @name DataTable.defaults.searchCols
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "searchCols": [
		 *          null,
		 *          { "search": "My filter" },
		 *          null,
		 *          { "search": "^[0-9]", "escapeRegex": false }
		 *        ]
		 *      } );
		 *    } )
		 */
		"aoSearchCols": [],
	
	
		/**
		 * An array of CSS classes that should be applied to displayed rows. This
		 * array may be of any length, and DataTables will apply each class
		 * sequentially, looping when required.
		 *  @type array
		 *  @default null <i>Will take the values determined by the `oClasses.stripe*`
		 *    options</i>
		 *
		 *  @dtopt Option
		 *  @name DataTable.defaults.stripeClasses
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "stripeClasses": [ 'strip1', 'strip2', 'strip3' ]
		 *      } );
		 *    } )
		 */
		"asStripeClasses": null,
	
	
		/**
		 * Enable or disable automatic column width calculation. This can be disabled
		 * as an optimisation (it takes some time to calculate the widths) if the
		 * tables widths are passed in using `columns`.
		 *  @type boolean
		 *  @default true
		 *
		 *  @dtopt Features
		 *  @name DataTable.defaults.autoWidth
		 *
		 *  @example
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "autoWidth": false
		 *      } );
		 *    } );
		 */
		"bAutoWidth": true,
	
	
		/**
		 * Deferred rendering can provide DataTables with a huge speed boost when you
		 * are using an Ajax or JS data source for the table. This option, when set to
		 * true, will cause DataTables to defer the creation of the table elements for
		 * each row until they are needed for a draw - saving a significant amount of
		 * time.
		 *  @type boolean
		 *  @default false
		 *
		 *  @dtopt Features
		 *  @name DataTable.defaults.deferRender
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "ajax": "sources/arrays.txt",
		 *        "deferRender": true
		 *      } );
		 *    } );
		 */
		"bDeferRender": false,
	
	
		/**
		 * Replace a DataTable which matches the given selector and replace it with
		 * one which has the properties of the new initialisation object passed. If no
		 * table matches the selector, then the new DataTable will be constructed as
		 * per normal.
		 *  @type boolean
		 *  @default false
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.destroy
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "srollY": "200px",
		 *        "paginate": false
		 *      } );
		 *
		 *      // Some time later....
		 *      $('#example').dataTable( {
		 *        "filter": false,
		 *        "destroy": true
		 *      } );
		 *    } );
		 */
		"bDestroy": false,
	
	
		/**
		 * Enable or disable filtering of data. Filtering in DataTables is "smart" in
		 * that it allows the end user to input multiple words (space separated) and
		 * will match a row containing those words, even if not in the order that was
		 * specified (this allow matching across multiple columns). Note that if you
		 * wish to use filtering in DataTables this must remain 'true' - to remove the
		 * default filtering input box and retain filtering abilities, please use
		 * {@link DataTable.defaults.dom}.
		 *  @type boolean
		 *  @default true
		 *
		 *  @dtopt Features
		 *  @name DataTable.defaults.searching
		 *
		 *  @example
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "searching": false
		 *      } );
		 *    } );
		 */
		"bFilter": true,
	
	
		/**
		 * Enable or disable the table information display. This shows information
		 * about the data that is currently visible on the page, including information
		 * about filtered data if that action is being performed.
		 *  @type boolean
		 *  @default true
		 *
		 *  @dtopt Features
		 *  @name DataTable.defaults.info
		 *
		 *  @example
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "info": false
		 *      } );
		 *    } );
		 */
		"bInfo": true,
	
	
		/**
		 * Allows the end user to select the size of a formatted page from a select
		 * menu (sizes are 10, 25, 50 and 100). Requires pagination (`paginate`).
		 *  @type boolean
		 *  @default true
		 *
		 *  @dtopt Features
		 *  @name DataTable.defaults.lengthChange
		 *
		 *  @example
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "lengthChange": false
		 *      } );
		 *    } );
		 */
		"bLengthChange": true,
	
	
		/**
		 * Enable or disable pagination.
		 *  @type boolean
		 *  @default true
		 *
		 *  @dtopt Features
		 *  @name DataTable.defaults.paging
		 *
		 *  @example
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "paging": false
		 *      } );
		 *    } );
		 */
		"bPaginate": true,
	
	
		/**
		 * Enable or disable the display of a 'processing' indicator when the table is
		 * being processed (e.g. a sort). This is particularly useful for tables with
		 * large amounts of data where it can take a noticeable amount of time to sort
		 * the entries.
		 *  @type boolean
		 *  @default false
		 *
		 *  @dtopt Features
		 *  @name DataTable.defaults.processing
		 *
		 *  @example
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "processing": true
		 *      } );
		 *    } );
		 */
		"bProcessing": false,
	
	
		/**
		 * Retrieve the DataTables object for the given selector. Note that if the
		 * table has already been initialised, this parameter will cause DataTables
		 * to simply return the object that has already been set up - it will not take
		 * account of any changes you might have made to the initialisation object
		 * passed to DataTables (setting this parameter to true is an acknowledgement
		 * that you understand this). `destroy` can be used to reinitialise a table if
		 * you need.
		 *  @type boolean
		 *  @default false
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.retrieve
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      initTable();
		 *      tableActions();
		 *    } );
		 *
		 *    function initTable ()
		 *    {
		 *      return $('#example').dataTable( {
		 *        "scrollY": "200px",
		 *        "paginate": false,
		 *        "retrieve": true
		 *      } );
		 *    }
		 *
		 *    function tableActions ()
		 *    {
		 *      var table = initTable();
		 *      // perform API operations with oTable
		 *    }
		 */
		"bRetrieve": false,
	
	
		/**
		 * When vertical (y) scrolling is enabled, DataTables will force the height of
		 * the table's viewport to the given height at all times (useful for layout).
		 * However, this can look odd when filtering data down to a small data set,
		 * and the footer is left "floating" further down. This parameter (when
		 * enabled) will cause DataTables to collapse the table's viewport down when
		 * the result set will fit within the given Y height.
		 *  @type boolean
		 *  @default false
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.scrollCollapse
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "scrollY": "200",
		 *        "scrollCollapse": true
		 *      } );
		 *    } );
		 */
		"bScrollCollapse": false,
	
	
		/**
		 * Configure DataTables to use server-side processing. Note that the
		 * `ajax` parameter must also be given in order to give DataTables a
		 * source to obtain the required data for each draw.
		 *  @type boolean
		 *  @default false
		 *
		 *  @dtopt Features
		 *  @dtopt Server-side
		 *  @name DataTable.defaults.serverSide
		 *
		 *  @example
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "serverSide": true,
		 *        "ajax": "xhr.php"
		 *      } );
		 *    } );
		 */
		"bServerSide": false,
	
	
		/**
		 * Enable or disable sorting of columns. Sorting of individual columns can be
		 * disabled by the `sortable` option for each column.
		 *  @type boolean
		 *  @default true
		 *
		 *  @dtopt Features
		 *  @name DataTable.defaults.ordering
		 *
		 *  @example
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "ordering": false
		 *      } );
		 *    } );
		 */
		"bSort": true,
	
	
		/**
		 * Enable or display DataTables' ability to sort multiple columns at the
		 * same time (activated by shift-click by the user).
		 *  @type boolean
		 *  @default true
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.orderMulti
		 *
		 *  @example
		 *    // Disable multiple column sorting ability
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "orderMulti": false
		 *      } );
		 *    } );
		 */
		"bSortMulti": true,
	
	
		/**
		 * Allows control over whether DataTables should use the top (true) unique
		 * cell that is found for a single column, or the bottom (false - default).
		 * This is useful when using complex headers.
		 *  @type boolean
		 *  @default false
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.orderCellsTop
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "orderCellsTop": true
		 *      } );
		 *    } );
		 */
		"bSortCellsTop": false,
	
	
		/**
		 * Enable or disable the addition of the classes `sorting\_1`, `sorting\_2` and
		 * `sorting\_3` to the columns which are currently being sorted on. This is
		 * presented as a feature switch as it can increase processing time (while
		 * classes are removed and added) so for large data sets you might want to
		 * turn this off.
		 *  @type boolean
		 *  @default true
		 *
		 *  @dtopt Features
		 *  @name DataTable.defaults.orderClasses
		 *
		 *  @example
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "orderClasses": false
		 *      } );
		 *    } );
		 */
		"bSortClasses": true,
	
	
		/**
		 * Enable or disable state saving. When enabled HTML5 `localStorage` will be
		 * used to save table display information such as pagination information,
		 * display length, filtering and sorting. As such when the end user reloads
		 * the page the display display will match what thy had previously set up.
		 *
		 * Due to the use of `localStorage` the default state saving is not supported
		 * in IE6 or 7. If state saving is required in those browsers, use
		 * `stateSaveCallback` to provide a storage solution such as cookies.
		 *  @type boolean
		 *  @default false
		 *
		 *  @dtopt Features
		 *  @name DataTable.defaults.stateSave
		 *
		 *  @example
		 *    $(document).ready( function () {
		 *      $('#example').dataTable( {
		 *        "stateSave": true
		 *      } );
		 *    } );
		 */
		"bStateSave": false,
	
	
		/**
		 * This function is called when a TR element is created (and all TD child
		 * elements have been inserted), or registered if using a DOM source, allowing
		 * manipulation of the TR element (adding classes etc).
		 *  @type function
		 *  @param {node} row "TR" element for the current row
		 *  @param {array} data Raw data array for this row
		 *  @param {int} dataIndex The index of this row in the internal aoData array
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.createdRow
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "createdRow": function( row, data, dataIndex ) {
		 *          // Bold the grade for all 'A' grade browsers
		 *          if ( data[4] == "A" )
		 *          {
		 *            $('td:eq(4)', row).html( '<b>A</b>' );
		 *          }
		 *        }
		 *      } );
		 *    } );
		 */
		"fnCreatedRow": null,
	
	
		/**
		 * This function is called on every 'draw' event, and allows you to
		 * dynamically modify any aspect you want about the created DOM.
		 *  @type function
		 *  @param {object} settings DataTables settings object
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.drawCallback
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "drawCallback": function( settings ) {
		 *          alert( 'DataTables has redrawn the table' );
		 *        }
		 *      } );
		 *    } );
		 */
		"fnDrawCallback": null,
	
	
		/**
		 * Identical to fnHeaderCallback() but for the table footer this function
		 * allows you to modify the table footer on every 'draw' event.
		 *  @type function
		 *  @param {node} foot "TR" element for the footer
		 *  @param {array} data Full table data (as derived from the original HTML)
		 *  @param {int} start Index for the current display starting point in the
		 *    display array
		 *  @param {int} end Index for the current display ending point in the
		 *    display array
		 *  @param {array int} display Index array to translate the visual position
		 *    to the full data array
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.footerCallback
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "footerCallback": function( tfoot, data, start, end, display ) {
		 *          tfoot.getElementsByTagName('th')[0].innerHTML = "Starting index is "+start;
		 *        }
		 *      } );
		 *    } )
		 */
		"fnFooterCallback": null,
	
	
		/**
		 * When rendering large numbers in the information element for the table
		 * (i.e. "Showing 1 to 10 of 57 entries") DataTables will render large numbers
		 * to have a comma separator for the 'thousands' units (e.g. 1 million is
		 * rendered as "1,000,000") to help readability for the end user. This
		 * function will override the default method DataTables uses.
		 *  @type function
		 *  @member
		 *  @param {int} toFormat number to be formatted
		 *  @returns {string} formatted string for DataTables to show the number
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.formatNumber
		 *
		 *  @example
		 *    // Format a number using a single quote for the separator (note that
		 *    // this can also be done with the language.thousands option)
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "formatNumber": function ( toFormat ) {
		 *          return toFormat.toString().replace(
		 *            /\B(?=(\d{3})+(?!\d))/g, "'"
		 *          );
		 *        };
		 *      } );
		 *    } );
		 */
		"fnFormatNumber": function ( toFormat ) {
			return toFormat.toString().replace(
				/\B(?=(\d{3})+(?!\d))/g,
				this.oLanguage.sThousands
			);
		},
	
	
		/**
		 * This function is called on every 'draw' event, and allows you to
		 * dynamically modify the header row. This can be used to calculate and
		 * display useful information about the table.
		 *  @type function
		 *  @param {node} head "TR" element for the header
		 *  @param {array} data Full table data (as derived from the original HTML)
		 *  @param {int} start Index for the current display starting point in the
		 *    display array
		 *  @param {int} end Index for the current display ending point in the
		 *    display array
		 *  @param {array int} display Index array to translate the visual position
		 *    to the full data array
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.headerCallback
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "fheaderCallback": function( head, data, start, end, display ) {
		 *          head.getElementsByTagName('th')[0].innerHTML = "Displaying "+(end-start)+" records";
		 *        }
		 *      } );
		 *    } )
		 */
		"fnHeaderCallback": null,
	
	
		/**
		 * The information element can be used to convey information about the current
		 * state of the table. Although the internationalisation options presented by
		 * DataTables are quite capable of dealing with most customisations, there may
		 * be times where you wish to customise the string further. This callback
		 * allows you to do exactly that.
		 *  @type function
		 *  @param {object} oSettings DataTables settings object
		 *  @param {int} start Starting position in data for the draw
		 *  @param {int} end End position in data for the draw
		 *  @param {int} max Total number of rows in the table (regardless of
		 *    filtering)
		 *  @param {int} total Total number of rows in the data set, after filtering
		 *  @param {string} pre The string that DataTables has formatted using it's
		 *    own rules
		 *  @returns {string} The string to be displayed in the information element.
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.infoCallback
		 *
		 *  @example
		 *    $('#example').dataTable( {
		 *      "infoCallback": function( settings, start, end, max, total, pre ) {
		 *        return start +" to "+ end;
		 *      }
		 *    } );
		 */
		"fnInfoCallback": null,
	
	
		/**
		 * Called when the table has been initialised. Normally DataTables will
		 * initialise sequentially and there will be no need for this function,
		 * however, this does not hold true when using external language information
		 * since that is obtained using an async XHR call.
		 *  @type function
		 *  @param {object} settings DataTables settings object
		 *  @param {object} json The JSON object request from the server - only
		 *    present if client-side Ajax sourced data is used
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.initComplete
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "initComplete": function(settings, json) {
		 *          alert( 'DataTables has finished its initialisation.' );
		 *        }
		 *      } );
		 *    } )
		 */
		"fnInitComplete": null,
	
	
		/**
		 * Called at the very start of each table draw and can be used to cancel the
		 * draw by returning false, any other return (including undefined) results in
		 * the full draw occurring).
		 *  @type function
		 *  @param {object} settings DataTables settings object
		 *  @returns {boolean} False will cancel the draw, anything else (including no
		 *    return) will allow it to complete.
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.preDrawCallback
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "preDrawCallback": function( settings ) {
		 *          if ( $('#test').val() == 1 ) {
		 *            return false;
		 *          }
		 *        }
		 *      } );
		 *    } );
		 */
		"fnPreDrawCallback": null,
	
	
		/**
		 * This function allows you to 'post process' each row after it have been
		 * generated for each table draw, but before it is rendered on screen. This
		 * function might be used for setting the row class name etc.
		 *  @type function
		 *  @param {node} row "TR" element for the current row
		 *  @param {array} data Raw data array for this row
		 *  @param {int} displayIndex The display index for the current table draw
		 *  @param {int} displayIndexFull The index of the data in the full list of
		 *    rows (after filtering)
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.rowCallback
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "rowCallback": function( row, data, displayIndex, displayIndexFull ) {
		 *          // Bold the grade for all 'A' grade browsers
		 *          if ( data[4] == "A" ) {
		 *            $('td:eq(4)', row).html( '<b>A</b>' );
		 *          }
		 *        }
		 *      } );
		 *    } );
		 */
		"fnRowCallback": null,
	
	
		/**
		 * __Deprecated__ The functionality provided by this parameter has now been
		 * superseded by that provided through `ajax`, which should be used instead.
		 *
		 * This parameter allows you to override the default function which obtains
		 * the data from the server so something more suitable for your application.
		 * For example you could use POST data, or pull information from a Gears or
		 * AIR database.
		 *  @type function
		 *  @member
		 *  @param {string} source HTTP source to obtain the data from (`ajax`)
		 *  @param {array} data A key/value pair object containing the data to send
		 *    to the server
		 *  @param {function} callback to be called on completion of the data get
		 *    process that will draw the data on the page.
		 *  @param {object} settings DataTables settings object
		 *
		 *  @dtopt Callbacks
		 *  @dtopt Server-side
		 *  @name DataTable.defaults.serverData
		 *
		 *  @deprecated 1.10. Please use `ajax` for this functionality now.
		 */
		"fnServerData": null,
	
	
		/**
		 * __Deprecated__ The functionality provided by this parameter has now been
		 * superseded by that provided through `ajax`, which should be used instead.
		 *
		 *  It is often useful to send extra data to the server when making an Ajax
		 * request - for example custom filtering information, and this callback
		 * function makes it trivial to send extra information to the server. The
		 * passed in parameter is the data set that has been constructed by
		 * DataTables, and you can add to this or modify it as you require.
		 *  @type function
		 *  @param {array} data Data array (array of objects which are name/value
		 *    pairs) that has been constructed by DataTables and will be sent to the
		 *    server. In the case of Ajax sourced data with server-side processing
		 *    this will be an empty array, for server-side processing there will be a
		 *    significant number of parameters!
		 *  @returns {undefined} Ensure that you modify the data array passed in,
		 *    as this is passed by reference.
		 *
		 *  @dtopt Callbacks
		 *  @dtopt Server-side
		 *  @name DataTable.defaults.serverParams
		 *
		 *  @deprecated 1.10. Please use `ajax` for this functionality now.
		 */
		"fnServerParams": null,
	
	
		/**
		 * Load the table state. With this function you can define from where, and how, the
		 * state of a table is loaded. By default DataTables will load from `localStorage`
		 * but you might wish to use a server-side database or cookies.
		 *  @type function
		 *  @member
		 *  @param {object} settings DataTables settings object
		 *  @param {object} callback Callback that can be executed when done. It
		 *    should be passed the loaded state object.
		 *  @return {object} The DataTables state object to be loaded
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.stateLoadCallback
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "stateSave": true,
		 *        "stateLoadCallback": function (settings, callback) {
		 *          $.ajax( {
		 *            "url": "/state_load",
		 *            "dataType": "json",
		 *            "success": function (json) {
		 *              callback( json );
		 *            }
		 *          } );
		 *        }
		 *      } );
		 *    } );
		 */
		"fnStateLoadCallback": function ( settings ) {
			try {
				return JSON.parse(
					(settings.iStateDuration === -1 ? sessionStorage : localStorage).getItem(
						'DataTables_'+settings.sInstance+'_'+location.pathname
					)
				);
			} catch (e) {}
		},
	
	
		/**
		 * Callback which allows modification of the saved state prior to loading that state.
		 * This callback is called when the table is loading state from the stored data, but
		 * prior to the settings object being modified by the saved state. Note that for
		 * plug-in authors, you should use the `stateLoadParams` event to load parameters for
		 * a plug-in.
		 *  @type function
		 *  @param {object} settings DataTables settings object
		 *  @param {object} data The state object that is to be loaded
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.stateLoadParams
		 *
		 *  @example
		 *    // Remove a saved filter, so filtering is never loaded
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "stateSave": true,
		 *        "stateLoadParams": function (settings, data) {
		 *          data.oSearch.sSearch = "";
		 *        }
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Disallow state loading by returning false
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "stateSave": true,
		 *        "stateLoadParams": function (settings, data) {
		 *          return false;
		 *        }
		 *      } );
		 *    } );
		 */
		"fnStateLoadParams": null,
	
	
		/**
		 * Callback that is called when the state has been loaded from the state saving method
		 * and the DataTables settings object has been modified as a result of the loaded state.
		 *  @type function
		 *  @param {object} settings DataTables settings object
		 *  @param {object} data The state object that was loaded
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.stateLoaded
		 *
		 *  @example
		 *    // Show an alert with the filtering value that was saved
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "stateSave": true,
		 *        "stateLoaded": function (settings, data) {
		 *          alert( 'Saved filter was: '+data.oSearch.sSearch );
		 *        }
		 *      } );
		 *    } );
		 */
		"fnStateLoaded": null,
	
	
		/**
		 * Save the table state. This function allows you to define where and how the state
		 * information for the table is stored By default DataTables will use `localStorage`
		 * but you might wish to use a server-side database or cookies.
		 *  @type function
		 *  @member
		 *  @param {object} settings DataTables settings object
		 *  @param {object} data The state object to be saved
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.stateSaveCallback
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "stateSave": true,
		 *        "stateSaveCallback": function (settings, data) {
		 *          // Send an Ajax request to the server with the state object
		 *          $.ajax( {
		 *            "url": "/state_save",
		 *            "data": data,
		 *            "dataType": "json",
		 *            "method": "POST"
		 *            "success": function () {}
		 *          } );
		 *        }
		 *      } );
		 *    } );
		 */
		"fnStateSaveCallback": function ( settings, data ) {
			try {
				(settings.iStateDuration === -1 ? sessionStorage : localStorage).setItem(
					'DataTables_'+settings.sInstance+'_'+location.pathname,
					JSON.stringify( data )
				);
			} catch (e) {}
		},
	
	
		/**
		 * Callback which allows modification of the state to be saved. Called when the table
		 * has changed state a new state save is required. This method allows modification of
		 * the state saving object prior to actually doing the save, including addition or
		 * other state properties or modification. Note that for plug-in authors, you should
		 * use the `stateSaveParams` event to save parameters for a plug-in.
		 *  @type function
		 *  @param {object} settings DataTables settings object
		 *  @param {object} data The state object to be saved
		 *
		 *  @dtopt Callbacks
		 *  @name DataTable.defaults.stateSaveParams
		 *
		 *  @example
		 *    // Remove a saved filter, so filtering is never saved
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "stateSave": true,
		 *        "stateSaveParams": function (settings, data) {
		 *          data.oSearch.sSearch = "";
		 *        }
		 *      } );
		 *    } );
		 */
		"fnStateSaveParams": null,
	
	
		/**
		 * Duration for which the saved state information is considered valid. After this period
		 * has elapsed the state will be returned to the default.
		 * Value is given in seconds.
		 *  @type int
		 *  @default 7200 <i>(2 hours)</i>
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.stateDuration
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "stateDuration": 60*60*24; // 1 day
		 *      } );
		 *    } )
		 */
		"iStateDuration": 7200,
	
	
		/**
		 * When enabled DataTables will not make a request to the server for the first
		 * page draw - rather it will use the data already on the page (no sorting etc
		 * will be applied to it), thus saving on an XHR at load time. `deferLoading`
		 * is used to indicate that deferred loading is required, but it is also used
		 * to tell DataTables how many records there are in the full table (allowing
		 * the information element and pagination to be displayed correctly). In the case
		 * where a filtering is applied to the table on initial load, this can be
		 * indicated by giving the parameter as an array, where the first element is
		 * the number of records available after filtering and the second element is the
		 * number of records without filtering (allowing the table information element
		 * to be shown correctly).
		 *  @type int | array
		 *  @default null
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.deferLoading
		 *
		 *  @example
		 *    // 57 records available in the table, no filtering applied
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "serverSide": true,
		 *        "ajax": "scripts/server_processing.php",
		 *        "deferLoading": 57
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // 57 records after filtering, 100 without filtering (an initial filter applied)
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "serverSide": true,
		 *        "ajax": "scripts/server_processing.php",
		 *        "deferLoading": [ 57, 100 ],
		 *        "search": {
		 *          "search": "my_filter"
		 *        }
		 *      } );
		 *    } );
		 */
		"iDeferLoading": null,
	
	
		/**
		 * Number of rows to display on a single page when using pagination. If
		 * feature enabled (`lengthChange`) then the end user will be able to override
		 * this to a custom setting using a pop-up menu.
		 *  @type int
		 *  @default 10
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.pageLength
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "pageLength": 50
		 *      } );
		 *    } )
		 */
		"iDisplayLength": 10,
	
	
		/**
		 * Define the starting point for data display when using DataTables with
		 * pagination. Note that this parameter is the number of records, rather than
		 * the page number, so if you have 10 records per page and want to start on
		 * the third page, it should be "20".
		 *  @type int
		 *  @default 0
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.displayStart
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "displayStart": 20
		 *      } );
		 *    } )
		 */
		"iDisplayStart": 0,
	
	
		/**
		 * By default DataTables allows keyboard navigation of the table (sorting, paging,
		 * and filtering) by adding a `tabindex` attribute to the required elements. This
		 * allows you to tab through the controls and press the enter key to activate them.
		 * The tabindex is default 0, meaning that the tab follows the flow of the document.
		 * You can overrule this using this parameter if you wish. Use a value of -1 to
		 * disable built-in keyboard navigation.
		 *  @type int
		 *  @default 0
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.tabIndex
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "tabIndex": 1
		 *      } );
		 *    } );
		 */
		"iTabIndex": 0,
	
	
		/**
		 * Classes that DataTables assigns to the various components and features
		 * that it adds to the HTML table. This allows classes to be configured
		 * during initialisation in addition to through the static
		 * {@link DataTable.ext.oStdClasses} object).
		 *  @namespace
		 *  @name DataTable.defaults.classes
		 */
		"oClasses": {},
	
	
		/**
		 * All strings that DataTables uses in the user interface that it creates
		 * are defined in this object, allowing you to modified them individually or
		 * completely replace them all as required.
		 *  @namespace
		 *  @name DataTable.defaults.language
		 */
		"oLanguage": {
			/**
			 * Strings that are used for WAI-ARIA labels and controls only (these are not
			 * actually visible on the page, but will be read by screenreaders, and thus
			 * must be internationalised as well).
			 *  @namespace
			 *  @name DataTable.defaults.language.aria
			 */
			"oAria": {
				/**
				 * ARIA label that is added to the table headers when the column may be
				 * sorted ascending by activing the column (click or return when focused).
				 * Note that the column header is prefixed to this string.
				 *  @type string
				 *  @default : activate to sort column ascending
				 *
				 *  @dtopt Language
				 *  @name DataTable.defaults.language.aria.sortAscending
				 *
				 *  @example
				 *    $(document).ready( function() {
				 *      $('#example').dataTable( {
				 *        "language": {
				 *          "aria": {
				 *            "sortAscending": " - click/return to sort ascending"
				 *          }
				 *        }
				 *      } );
				 *    } );
				 */
				"sSortAscending": ": activate to sort column ascending",
	
				/**
				 * ARIA label that is added to the table headers when the column may be
				 * sorted descending by activing the column (click or return when focused).
				 * Note that the column header is prefixed to this string.
				 *  @type string
				 *  @default : activate to sort column ascending
				 *
				 *  @dtopt Language
				 *  @name DataTable.defaults.language.aria.sortDescending
				 *
				 *  @example
				 *    $(document).ready( function() {
				 *      $('#example').dataTable( {
				 *        "language": {
				 *          "aria": {
				 *            "sortDescending": " - click/return to sort descending"
				 *          }
				 *        }
				 *      } );
				 *    } );
				 */
				"sSortDescending": ": activate to sort column descending"
			},
	
			/**
			 * Pagination string used by DataTables for the built-in pagination
			 * control types.
			 *  @namespace
			 *  @name DataTable.defaults.language.paginate
			 */
			"oPaginate": {
				/**
				 * Text to use when using the 'full_numbers' type of pagination for the
				 * button to take the user to the first page.
				 *  @type string
				 *  @default First
				 *
				 *  @dtopt Language
				 *  @name DataTable.defaults.language.paginate.first
				 *
				 *  @example
				 *    $(document).ready( function() {
				 *      $('#example').dataTable( {
				 *        "language": {
				 *          "paginate": {
				 *            "first": "First page"
				 *          }
				 *        }
				 *      } );
				 *    } );
				 */
				"sFirst": "First",
	
	
				/**
				 * Text to use when using the 'full_numbers' type of pagination for the
				 * button to take the user to the last page.
				 *  @type string
				 *  @default Last
				 *
				 *  @dtopt Language
				 *  @name DataTable.defaults.language.paginate.last
				 *
				 *  @example
				 *    $(document).ready( function() {
				 *      $('#example').dataTable( {
				 *        "language": {
				 *          "paginate": {
				 *            "last": "Last page"
				 *          }
				 *        }
				 *      } );
				 *    } );
				 */
				"sLast": "Last",
	
	
				/**
				 * Text to use for the 'next' pagination button (to take the user to the
				 * next page).
				 *  @type string
				 *  @default Next
				 *
				 *  @dtopt Language
				 *  @name DataTable.defaults.language.paginate.next
				 *
				 *  @example
				 *    $(document).ready( function() {
				 *      $('#example').dataTable( {
				 *        "language": {
				 *          "paginate": {
				 *            "next": "Next page"
				 *          }
				 *        }
				 *      } );
				 *    } );
				 */
				"sNext": "Next",
	
	
				/**
				 * Text to use for the 'previous' pagination button (to take the user to
				 * the previous page).
				 *  @type string
				 *  @default Previous
				 *
				 *  @dtopt Language
				 *  @name DataTable.defaults.language.paginate.previous
				 *
				 *  @example
				 *    $(document).ready( function() {
				 *      $('#example').dataTable( {
				 *        "language": {
				 *          "paginate": {
				 *            "previous": "Previous page"
				 *          }
				 *        }
				 *      } );
				 *    } );
				 */
				"sPrevious": "Previous"
			},
	
			/**
			 * This string is shown in preference to `zeroRecords` when the table is
			 * empty of data (regardless of filtering). Note that this is an optional
			 * parameter - if it is not given, the value of `zeroRecords` will be used
			 * instead (either the default or given value).
			 *  @type string
			 *  @default No data available in table
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.emptyTable
			 *
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "emptyTable": "No data available in table"
			 *        }
			 *      } );
			 *    } );
			 */
			"sEmptyTable": "No data available in table",
	
	
			/**
			 * This string gives information to the end user about the information
			 * that is current on display on the page. The following tokens can be
			 * used in the string and will be dynamically replaced as the table
			 * display updates. This tokens can be placed anywhere in the string, or
			 * removed as needed by the language requires:
			 *
			 * * `\_START\_` - Display index of the first record on the current page
			 * * `\_END\_` - Display index of the last record on the current page
			 * * `\_TOTAL\_` - Number of records in the table after filtering
			 * * `\_MAX\_` - Number of records in the table without filtering
			 * * `\_PAGE\_` - Current page number
			 * * `\_PAGES\_` - Total number of pages of data in the table
			 *
			 *  @type string
			 *  @default Showing _START_ to _END_ of _TOTAL_ entries
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.info
			 *
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "info": "Showing page _PAGE_ of _PAGES_"
			 *        }
			 *      } );
			 *    } );
			 */
			"sInfo": "Showing _START_ to _END_ of _TOTAL_ entries",
	
	
			/**
			 * Display information string for when the table is empty. Typically the
			 * format of this string should match `info`.
			 *  @type string
			 *  @default Showing 0 to 0 of 0 entries
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.infoEmpty
			 *
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "infoEmpty": "No entries to show"
			 *        }
			 *      } );
			 *    } );
			 */
			"sInfoEmpty": "Showing 0 to 0 of 0 entries",
	
	
			/**
			 * When a user filters the information in a table, this string is appended
			 * to the information (`info`) to give an idea of how strong the filtering
			 * is. The variable _MAX_ is dynamically updated.
			 *  @type string
			 *  @default (filtered from _MAX_ total entries)
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.infoFiltered
			 *
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "infoFiltered": " - filtering from _MAX_ records"
			 *        }
			 *      } );
			 *    } );
			 */
			"sInfoFiltered": "(filtered from _MAX_ total entries)",
	
	
			/**
			 * If can be useful to append extra information to the info string at times,
			 * and this variable does exactly that. This information will be appended to
			 * the `info` (`infoEmpty` and `infoFiltered` in whatever combination they are
			 * being used) at all times.
			 *  @type string
			 *  @default <i>Empty string</i>
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.infoPostFix
			 *
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "infoPostFix": "All records shown are derived from real information."
			 *        }
			 *      } );
			 *    } );
			 */
			"sInfoPostFix": "",
	
	
			/**
			 * This decimal place operator is a little different from the other
			 * language options since DataTables doesn't output floating point
			 * numbers, so it won't ever use this for display of a number. Rather,
			 * what this parameter does is modify the sort methods of the table so
			 * that numbers which are in a format which has a character other than
			 * a period (`.`) as a decimal place will be sorted numerically.
			 *
			 * Note that numbers with different decimal places cannot be shown in
			 * the same table and still be sortable, the table must be consistent.
			 * However, multiple different tables on the page can use different
			 * decimal place characters.
			 *  @type string
			 *  @default 
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.decimal
			 *
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "decimal": ","
			 *          "thousands": "."
			 *        }
			 *      } );
			 *    } );
			 */
			"sDecimal": "",
	
	
			/**
			 * DataTables has a build in number formatter (`formatNumber`) which is
			 * used to format large numbers that are used in the table information.
			 * By default a comma is used, but this can be trivially changed to any
			 * character you wish with this parameter.
			 *  @type string
			 *  @default ,
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.thousands
			 *
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "thousands": "'"
			 *        }
			 *      } );
			 *    } );
			 */
			"sThousands": ",",
	
	
			/**
			 * Detail the action that will be taken when the drop down menu for the
			 * pagination length option is changed. The '_MENU_' variable is replaced
			 * with a default select list of 10, 25, 50 and 100, and can be replaced
			 * with a custom select box if required.
			 *  @type string
			 *  @default Show _MENU_ entries
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.lengthMenu
			 *
			 *  @example
			 *    // Language change only
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "lengthMenu": "Display _MENU_ records"
			 *        }
			 *      } );
			 *    } );
			 *
			 *  @example
			 *    // Language and options change
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "lengthMenu": 'Display <select>'+
			 *            '<option value="10">10</option>'+
			 *            '<option value="20">20</option>'+
			 *            '<option value="30">30</option>'+
			 *            '<option value="40">40</option>'+
			 *            '<option value="50">50</option>'+
			 *            '<option value="-1">All</option>'+
			 *            '</select> records'
			 *        }
			 *      } );
			 *    } );
			 */
			"sLengthMenu": "Show _MENU_ entries",
	
	
			/**
			 * When using Ajax sourced data and during the first draw when DataTables is
			 * gathering the data, this message is shown in an empty row in the table to
			 * indicate to the end user the the data is being loaded. Note that this
			 * parameter is not used when loading data by server-side processing, just
			 * Ajax sourced data with client-side processing.
			 *  @type string
			 *  @default Loading...
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.loadingRecords
			 *
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "loadingRecords": "Please wait - loading..."
			 *        }
			 *      } );
			 *    } );
			 */
			"sLoadingRecords": "Loading...",
	
	
			/**
			 * Text which is displayed when the table is processing a user action
			 * (usually a sort command or similar).
			 *  @type string
			 *  @default Processing...
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.processing
			 *
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "processing": "DataTables is currently busy"
			 *        }
			 *      } );
			 *    } );
			 */
			"sProcessing": "Processing...",
	
	
			/**
			 * Details the actions that will be taken when the user types into the
			 * filtering input text box. The variable "_INPUT_", if used in the string,
			 * is replaced with the HTML text box for the filtering input allowing
			 * control over where it appears in the string. If "_INPUT_" is not given
			 * then the input box is appended to the string automatically.
			 *  @type string
			 *  @default Search:
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.search
			 *
			 *  @example
			 *    // Input text box will be appended at the end automatically
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "search": "Filter records:"
			 *        }
			 *      } );
			 *    } );
			 *
			 *  @example
			 *    // Specify where the filter should appear
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "search": "Apply filter _INPUT_ to table"
			 *        }
			 *      } );
			 *    } );
			 */
			"sSearch": "Search:",
	
	
			/**
			 * Assign a `placeholder` attribute to the search `input` element
			 *  @type string
			 *  @default 
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.searchPlaceholder
			 */
			"sSearchPlaceholder": "",
	
	
			/**
			 * All of the language information can be stored in a file on the
			 * server-side, which DataTables will look up if this parameter is passed.
			 * It must store the URL of the language file, which is in a JSON format,
			 * and the object has the same properties as the oLanguage object in the
			 * initialiser object (i.e. the above parameters). Please refer to one of
			 * the example language files to see how this works in action.
			 *  @type string
			 *  @default <i>Empty string - i.e. disabled</i>
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.url
			 *
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "url": "http://www.sprymedia.co.uk/dataTables/lang.txt"
			 *        }
			 *      } );
			 *    } );
			 */
			"sUrl": "",
	
	
			/**
			 * Text shown inside the table records when the is no information to be
			 * displayed after filtering. `emptyTable` is shown when there is simply no
			 * information in the table at all (regardless of filtering).
			 *  @type string
			 *  @default No matching records found
			 *
			 *  @dtopt Language
			 *  @name DataTable.defaults.language.zeroRecords
			 *
			 *  @example
			 *    $(document).ready( function() {
			 *      $('#example').dataTable( {
			 *        "language": {
			 *          "zeroRecords": "No records to display"
			 *        }
			 *      } );
			 *    } );
			 */
			"sZeroRecords": "No matching records found"
		},
	
	
		/**
		 * This parameter allows you to have define the global filtering state at
		 * initialisation time. As an object the `search` parameter must be
		 * defined, but all other parameters are optional. When `regex` is true,
		 * the search string will be treated as a regular expression, when false
		 * (default) it will be treated as a straight string. When `smart`
		 * DataTables will use it's smart filtering methods (to word match at
		 * any point in the data), when false this will not be done.
		 *  @namespace
		 *  @extends DataTable.models.oSearch
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.search
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "search": {"search": "Initial search"}
		 *      } );
		 *    } )
		 */
		"oSearch": $.extend( {}, DataTable.models.oSearch ),
	
	
		/**
		 * __Deprecated__ The functionality provided by this parameter has now been
		 * superseded by that provided through `ajax`, which should be used instead.
		 *
		 * By default DataTables will look for the property `data` (or `aaData` for
		 * compatibility with DataTables 1.9-) when obtaining data from an Ajax
		 * source or for server-side processing - this parameter allows that
		 * property to be changed. You can use Javascript dotted object notation to
		 * get a data source for multiple levels of nesting.
		 *  @type string
		 *  @default data
		 *
		 *  @dtopt Options
		 *  @dtopt Server-side
		 *  @name DataTable.defaults.ajaxDataProp
		 *
		 *  @deprecated 1.10. Please use `ajax` for this functionality now.
		 */
		"sAjaxDataProp": "data",
	
	
		/**
		 * __Deprecated__ The functionality provided by this parameter has now been
		 * superseded by that provided through `ajax`, which should be used instead.
		 *
		 * You can instruct DataTables to load data from an external
		 * source using this parameter (use aData if you want to pass data in you
		 * already have). Simply provide a url a JSON object can be obtained from.
		 *  @type string
		 *  @default null
		 *
		 *  @dtopt Options
		 *  @dtopt Server-side
		 *  @name DataTable.defaults.ajaxSource
		 *
		 *  @deprecated 1.10. Please use `ajax` for this functionality now.
		 */
		"sAjaxSource": null,
	
	
		/**
		 * This initialisation variable allows you to specify exactly where in the
		 * DOM you want DataTables to inject the various controls it adds to the page
		 * (for example you might want the pagination controls at the top of the
		 * table). DIV elements (with or without a custom class) can also be added to
		 * aid styling. The follow syntax is used:
		 *   <ul>
		 *     <li>The following options are allowed:
		 *       <ul>
		 *         <li>'l' - Length changing</li>
		 *         <li>'f' - Filtering input</li>
		 *         <li>'t' - The table!</li>
		 *         <li>'i' - Information</li>
		 *         <li>'p' - Pagination</li>
		 *         <li>'r' - pRocessing</li>
		 *       </ul>
		 *     </li>
		 *     <li>The following constants are allowed:
		 *       <ul>
		 *         <li>'H' - jQueryUI theme "header" classes ('fg-toolbar ui-widget-header ui-corner-tl ui-corner-tr ui-helper-clearfix')</li>
		 *         <li>'F' - jQueryUI theme "footer" classes ('fg-toolbar ui-widget-header ui-corner-bl ui-corner-br ui-helper-clearfix')</li>
		 *       </ul>
		 *     </li>
		 *     <li>The following syntax is expected:
		 *       <ul>
		 *         <li>'&lt;' and '&gt;' - div elements</li>
		 *         <li>'&lt;"class" and '&gt;' - div with a class</li>
		 *         <li>'&lt;"#id" and '&gt;' - div with an ID</li>
		 *       </ul>
		 *     </li>
		 *     <li>Examples:
		 *       <ul>
		 *         <li>'&lt;"wrapper"flipt&gt;'</li>
		 *         <li>'&lt;lf&lt;t&gt;ip&gt;'</li>
		 *       </ul>
		 *     </li>
		 *   </ul>
		 *  @type string
		 *  @default lfrtip <i>(when `jQueryUI` is false)</i> <b>or</b>
		 *    <"H"lfr>t<"F"ip> <i>(when `jQueryUI` is true)</i>
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.dom
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "dom": '&lt;"top"i&gt;rt&lt;"bottom"flp&gt;&lt;"clear"&gt;'
		 *      } );
		 *    } );
		 */
		"sDom": "lfrtip",
	
	
		/**
		 * Search delay option. This will throttle full table searches that use the
		 * DataTables provided search input element (it does not effect calls to
		 * `dt-api search()`, providing a delay before the search is made.
		 *  @type integer
		 *  @default 0
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.searchDelay
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "searchDelay": 200
		 *      } );
		 *    } )
		 */
		"searchDelay": null,
	
	
		/**
		 * DataTables features six different built-in options for the buttons to
		 * display for pagination control:
		 *
		 * * `numbers` - Page number buttons only
		 * * `simple` - 'Previous' and 'Next' buttons only
		 * * 'simple_numbers` - 'Previous' and 'Next' buttons, plus page numbers
		 * * `full` - 'First', 'Previous', 'Next' and 'Last' buttons
		 * * `full_numbers` - 'First', 'Previous', 'Next' and 'Last' buttons, plus page numbers
		 * * `first_last_numbers` - 'First' and 'Last' buttons, plus page numbers
		 *  
		 * Further methods can be added using {@link DataTable.ext.oPagination}.
		 *  @type string
		 *  @default simple_numbers
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.pagingType
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "pagingType": "full_numbers"
		 *      } );
		 *    } )
		 */
		"sPaginationType": "simple_numbers",
	
	
		/**
		 * Enable horizontal scrolling. When a table is too wide to fit into a
		 * certain layout, or you have a large number of columns in the table, you
		 * can enable x-scrolling to show the table in a viewport, which can be
		 * scrolled. This property can be `true` which will allow the table to
		 * scroll horizontally when needed, or any CSS unit, or a number (in which
		 * case it will be treated as a pixel measurement). Setting as simply `true`
		 * is recommended.
		 *  @type boolean|string
		 *  @default <i>blank string - i.e. disabled</i>
		 *
		 *  @dtopt Features
		 *  @name DataTable.defaults.scrollX
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "scrollX": true,
		 *        "scrollCollapse": true
		 *      } );
		 *    } );
		 */
		"sScrollX": "",
	
	
		/**
		 * This property can be used to force a DataTable to use more width than it
		 * might otherwise do when x-scrolling is enabled. For example if you have a
		 * table which requires to be well spaced, this parameter is useful for
		 * "over-sizing" the table, and thus forcing scrolling. This property can by
		 * any CSS unit, or a number (in which case it will be treated as a pixel
		 * measurement).
		 *  @type string
		 *  @default <i>blank string - i.e. disabled</i>
		 *
		 *  @dtopt Options
		 *  @name DataTable.defaults.scrollXInner
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "scrollX": "100%",
		 *        "scrollXInner": "110%"
		 *      } );
		 *    } );
		 */
		"sScrollXInner": "",
	
	
		/**
		 * Enable vertical scrolling. Vertical scrolling will constrain the DataTable
		 * to the given height, and enable scrolling for any data which overflows the
		 * current viewport. This can be used as an alternative to paging to display
		 * a lot of data in a small area (although paging and scrolling can both be
		 * enabled at the same time). This property can be any CSS unit, or a number
		 * (in which case it will be treated as a pixel measurement).
		 *  @type string
		 *  @default <i>blank string - i.e. disabled</i>
		 *
		 *  @dtopt Features
		 *  @name DataTable.defaults.scrollY
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "scrollY": "200px",
		 *        "paginate": false
		 *      } );
		 *    } );
		 */
		"sScrollY": "",
	
	
		/**
		 * __Deprecated__ The functionality provided by this parameter has now been
		 * superseded by that provided through `ajax`, which should be used instead.
		 *
		 * Set the HTTP method that is used to make the Ajax call for server-side
		 * processing or Ajax sourced data.
		 *  @type string
		 *  @default GET
		 *
		 *  @dtopt Options
		 *  @dtopt Server-side
		 *  @name DataTable.defaults.serverMethod
		 *
		 *  @deprecated 1.10. Please use `ajax` for this functionality now.
		 */
		"sServerMethod": "GET",
	
	
		/**
		 * DataTables makes use of renderers when displaying HTML elements for
		 * a table. These renderers can be added or modified by plug-ins to
		 * generate suitable mark-up for a site. For example the Bootstrap
		 * integration plug-in for DataTables uses a paging button renderer to
		 * display pagination buttons in the mark-up required by Bootstrap.
		 *
		 * For further information about the renderers available see
		 * DataTable.ext.renderer
		 *  @type string|object
		 *  @default null
		 *
		 *  @name DataTable.defaults.renderer
		 *
		 */
		"renderer": null,
	
	
		/**
		 * Set the data property name that DataTables should use to get a row's id
		 * to set as the `id` property in the node.
		 *  @type string
		 *  @default DT_RowId
		 *
		 *  @name DataTable.defaults.rowId
		 */
		"rowId": "DT_RowId"
	};
	
	_fnHungarianMap( DataTable.defaults );
	
	
	
	/*
	 * Developer note - See note in model.defaults.js about the use of Hungarian
	 * notation and camel case.
	 */
	
	/**
	 * Column options that can be given to DataTables at initialisation time.
	 *  @namespace
	 */
	DataTable.defaults.column = {
		/**
		 * Define which column(s) an order will occur on for this column. This
		 * allows a column's ordering to take multiple columns into account when
		 * doing a sort or use the data from a different column. For example first
		 * name / last name columns make sense to do a multi-column sort over the
		 * two columns.
		 *  @type array|int
		 *  @default null <i>Takes the value of the column index automatically</i>
		 *
		 *  @name DataTable.defaults.column.orderData
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columnDefs`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "orderData": [ 0, 1 ], "targets": [ 0 ] },
		 *          { "orderData": [ 1, 0 ], "targets": [ 1 ] },
		 *          { "orderData": 2, "targets": [ 2 ] }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          { "orderData": [ 0, 1 ] },
		 *          { "orderData": [ 1, 0 ] },
		 *          { "orderData": 2 },
		 *          null,
		 *          null
		 *        ]
		 *      } );
		 *    } );
		 */
		"aDataSort": null,
		"iDataSort": -1,
	
	
		/**
		 * You can control the default ordering direction, and even alter the
		 * behaviour of the sort handler (i.e. only allow ascending ordering etc)
		 * using this parameter.
		 *  @type array
		 *  @default [ 'asc', 'desc' ]
		 *
		 *  @name DataTable.defaults.column.orderSequence
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columnDefs`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "orderSequence": [ "asc" ], "targets": [ 1 ] },
		 *          { "orderSequence": [ "desc", "asc", "asc" ], "targets": [ 2 ] },
		 *          { "orderSequence": [ "desc" ], "targets": [ 3 ] }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          null,
		 *          { "orderSequence": [ "asc" ] },
		 *          { "orderSequence": [ "desc", "asc", "asc" ] },
		 *          { "orderSequence": [ "desc" ] },
		 *          null
		 *        ]
		 *      } );
		 *    } );
		 */
		"asSorting": [ 'asc', 'desc' ],
	
	
		/**
		 * Enable or disable filtering on the data in this column.
		 *  @type boolean
		 *  @default true
		 *
		 *  @name DataTable.defaults.column.searchable
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columnDefs`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "searchable": false, "targets": [ 0 ] }
		 *        ] } );
		 *    } );
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          { "searchable": false },
		 *          null,
		 *          null,
		 *          null,
		 *          null
		 *        ] } );
		 *    } );
		 */
		"bSearchable": true,
	
	
		/**
		 * Enable or disable ordering on this column.
		 *  @type boolean
		 *  @default true
		 *
		 *  @name DataTable.defaults.column.orderable
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columnDefs`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "orderable": false, "targets": [ 0 ] }
		 *        ] } );
		 *    } );
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          { "orderable": false },
		 *          null,
		 *          null,
		 *          null,
		 *          null
		 *        ] } );
		 *    } );
		 */
		"bSortable": true,
	
	
		/**
		 * Enable or disable the display of this column.
		 *  @type boolean
		 *  @default true
		 *
		 *  @name DataTable.defaults.column.visible
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columnDefs`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "visible": false, "targets": [ 0 ] }
		 *        ] } );
		 *    } );
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          { "visible": false },
		 *          null,
		 *          null,
		 *          null,
		 *          null
		 *        ] } );
		 *    } );
		 */
		"bVisible": true,
	
	
		/**
		 * Developer definable function that is called whenever a cell is created (Ajax source,
		 * etc) or processed for input (DOM source). This can be used as a compliment to mRender
		 * allowing you to modify the DOM element (add background colour for example) when the
		 * element is available.
		 *  @type function
		 *  @param {element} td The TD node that has been created
		 *  @param {*} cellData The Data for the cell
		 *  @param {array|object} rowData The data for the whole row
		 *  @param {int} row The row index for the aoData data store
		 *  @param {int} col The column index for aoColumns
		 *
		 *  @name DataTable.defaults.column.createdCell
		 *  @dtopt Columns
		 *
		 *  @example
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [ {
		 *          "targets": [3],
		 *          "createdCell": function (td, cellData, rowData, row, col) {
		 *            if ( cellData == "1.7" ) {
		 *              $(td).css('color', 'blue')
		 *            }
		 *          }
		 *        } ]
		 *      });
		 *    } );
		 */
		"fnCreatedCell": null,
	
	
		/**
		 * This parameter has been replaced by `data` in DataTables to ensure naming
		 * consistency. `dataProp` can still be used, as there is backwards
		 * compatibility in DataTables for this option, but it is strongly
		 * recommended that you use `data` in preference to `dataProp`.
		 *  @name DataTable.defaults.column.dataProp
		 */
	
	
		/**
		 * This property can be used to read data from any data source property,
		 * including deeply nested objects / properties. `data` can be given in a
		 * number of different ways which effect its behaviour:
		 *
		 * * `integer` - treated as an array index for the data source. This is the
		 *   default that DataTables uses (incrementally increased for each column).
		 * * `string` - read an object property from the data source. There are
		 *   three 'special' options that can be used in the string to alter how
		 *   DataTables reads the data from the source object:
		 *    * `.` - Dotted Javascript notation. Just as you use a `.` in
		 *      Javascript to read from nested objects, so to can the options
		 *      specified in `data`. For example: `browser.version` or
		 *      `browser.name`. If your object parameter name contains a period, use
		 *      `\\` to escape it - i.e. `first\\.name`.
		 *    * `[]` - Array notation. DataTables can automatically combine data
		 *      from and array source, joining the data with the characters provided
		 *      between the two brackets. For example: `name[, ]` would provide a
		 *      comma-space separated list from the source array. If no characters
		 *      are provided between the brackets, the original array source is
		 *      returned.
		 *    * `()` - Function notation. Adding `()` to the end of a parameter will
		 *      execute a function of the name given. For example: `browser()` for a
		 *      simple function on the data source, `browser.version()` for a
		 *      function in a nested property or even `browser().version` to get an
		 *      object property if the function called returns an object. Note that
		 *      function notation is recommended for use in `render` rather than
		 *      `data` as it is much simpler to use as a renderer.
		 * * `null` - use the original data source for the row rather than plucking
		 *   data directly from it. This action has effects on two other
		 *   initialisation options:
		 *    * `defaultContent` - When null is given as the `data` option and
		 *      `defaultContent` is specified for the column, the value defined by
		 *      `defaultContent` will be used for the cell.
		 *    * `render` - When null is used for the `data` option and the `render`
		 *      option is specified for the column, the whole data source for the
		 *      row is used for the renderer.
		 * * `function` - the function given will be executed whenever DataTables
		 *   needs to set or get the data for a cell in the column. The function
		 *   takes three parameters:
		 *    * Parameters:
		 *      * `{array|object}` The data source for the row
		 *      * `{string}` The type call data requested - this will be 'set' when
		 *        setting data or 'filter', 'display', 'type', 'sort' or undefined
		 *        when gathering data. Note that when `undefined` is given for the
		 *        type DataTables expects to get the raw data for the object back<
		 *      * `{*}` Data to set when the second parameter is 'set'.
		 *    * Return:
		 *      * The return value from the function is not required when 'set' is
		 *        the type of call, but otherwise the return is what will be used
		 *        for the data requested.
		 *
		 * Note that `data` is a getter and setter option. If you just require
		 * formatting of data for output, you will likely want to use `render` which
		 * is simply a getter and thus simpler to use.
		 *
		 * Note that prior to DataTables 1.9.2 `data` was called `mDataProp`. The
		 * name change reflects the flexibility of this property and is consistent
		 * with the naming of mRender. If 'mDataProp' is given, then it will still
		 * be used by DataTables, as it automatically maps the old name to the new
		 * if required.
		 *
		 *  @type string|int|function|null
		 *  @default null <i>Use automatically calculated column index</i>
		 *
		 *  @name DataTable.defaults.column.data
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Read table data from objects
		 *    // JSON structure for each row:
		 *    //   {
		 *    //      "engine": {value},
		 *    //      "browser": {value},
		 *    //      "platform": {value},
		 *    //      "version": {value},
		 *    //      "grade": {value}
		 *    //   }
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "ajaxSource": "sources/objects.txt",
		 *        "columns": [
		 *          { "data": "engine" },
		 *          { "data": "browser" },
		 *          { "data": "platform" },
		 *          { "data": "version" },
		 *          { "data": "grade" }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Read information from deeply nested objects
		 *    // JSON structure for each row:
		 *    //   {
		 *    //      "engine": {value},
		 *    //      "browser": {value},
		 *    //      "platform": {
		 *    //         "inner": {value}
		 *    //      },
		 *    //      "details": [
		 *    //         {value}, {value}
		 *    //      ]
		 *    //   }
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "ajaxSource": "sources/deep.txt",
		 *        "columns": [
		 *          { "data": "engine" },
		 *          { "data": "browser" },
		 *          { "data": "platform.inner" },
		 *          { "data": "platform.details.0" },
		 *          { "data": "platform.details.1" }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using `data` as a function to provide different information for
		 *    // sorting, filtering and display. In this case, currency (price)
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [ {
		 *          "targets": [ 0 ],
		 *          "data": function ( source, type, val ) {
		 *            if (type === 'set') {
		 *              source.price = val;
		 *              // Store the computed dislay and filter values for efficiency
		 *              source.price_display = val=="" ? "" : "$"+numberFormat(val);
		 *              source.price_filter  = val=="" ? "" : "$"+numberFormat(val)+" "+val;
		 *              return;
		 *            }
		 *            else if (type === 'display') {
		 *              return source.price_display;
		 *            }
		 *            else if (type === 'filter') {
		 *              return source.price_filter;
		 *            }
		 *            // 'sort', 'type' and undefined all just use the integer
		 *            return source.price;
		 *          }
		 *        } ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using default content
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [ {
		 *          "targets": [ 0 ],
		 *          "data": null,
		 *          "defaultContent": "Click to edit"
		 *        } ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using array notation - outputting a list from an array
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [ {
		 *          "targets": [ 0 ],
		 *          "data": "name[, ]"
		 *        } ]
		 *      } );
		 *    } );
		 *
		 */
		"mData": null,
	
	
		/**
		 * This property is the rendering partner to `data` and it is suggested that
		 * when you want to manipulate data for display (including filtering,
		 * sorting etc) without altering the underlying data for the table, use this
		 * property. `render` can be considered to be the the read only companion to
		 * `data` which is read / write (then as such more complex). Like `data`
		 * this option can be given in a number of different ways to effect its
		 * behaviour:
		 *
		 * * `integer` - treated as an array index for the data source. This is the
		 *   default that DataTables uses (incrementally increased for each column).
		 * * `string` - read an object property from the data source. There are
		 *   three 'special' options that can be used in the string to alter how
		 *   DataTables reads the data from the source object:
		 *    * `.` - Dotted Javascript notation. Just as you use a `.` in
		 *      Javascript to read from nested objects, so to can the options
		 *      specified in `data`. For example: `browser.version` or
		 *      `browser.name`. If your object parameter name contains a period, use
		 *      `\\` to escape it - i.e. `first\\.name`.
		 *    * `[]` - Array notation. DataTables can automatically combine data
		 *      from and array source, joining the data with the characters provided
		 *      between the two brackets. For example: `name[, ]` would provide a
		 *      comma-space separated list from the source array. If no characters
		 *      are provided between the brackets, the original array source is
		 *      returned.
		 *    * `()` - Function notation. Adding `()` to the end of a parameter will
		 *      execute a function of the name given. For example: `browser()` for a
		 *      simple function on the data source, `browser.version()` for a
		 *      function in a nested property or even `browser().version` to get an
		 *      object property if the function called returns an object.
		 * * `object` - use different data for the different data types requested by
		 *   DataTables ('filter', 'display', 'type' or 'sort'). The property names
		 *   of the object is the data type the property refers to and the value can
		 *   defined using an integer, string or function using the same rules as
		 *   `render` normally does. Note that an `_` option _must_ be specified.
		 *   This is the default value to use if you haven't specified a value for
		 *   the data type requested by DataTables.
		 * * `function` - the function given will be executed whenever DataTables
		 *   needs to set or get the data for a cell in the column. The function
		 *   takes three parameters:
		 *    * Parameters:
		 *      * {array|object} The data source for the row (based on `data`)
		 *      * {string} The type call data requested - this will be 'filter',
		 *        'display', 'type' or 'sort'.
		 *      * {array|object} The full data source for the row (not based on
		 *        `data`)
		 *    * Return:
		 *      * The return value from the function is what will be used for the
		 *        data requested.
		 *
		 *  @type string|int|function|object|null
		 *  @default null Use the data source value.
		 *
		 *  @name DataTable.defaults.column.render
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Create a comma separated list from an array of objects
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "ajaxSource": "sources/deep.txt",
		 *        "columns": [
		 *          { "data": "engine" },
		 *          { "data": "browser" },
		 *          {
		 *            "data": "platform",
		 *            "render": "[, ].name"
		 *          }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Execute a function to obtain data
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [ {
		 *          "targets": [ 0 ],
		 *          "data": null, // Use the full data source object for the renderer's source
		 *          "render": "browserName()"
		 *        } ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // As an object, extracting different data for the different types
		 *    // This would be used with a data source such as:
		 *    //   { "phone": 5552368, "phone_filter": "5552368 555-2368", "phone_display": "555-2368" }
		 *    // Here the `phone` integer is used for sorting and type detection, while `phone_filter`
		 *    // (which has both forms) is used for filtering for if a user inputs either format, while
		 *    // the formatted phone number is the one that is shown in the table.
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [ {
		 *          "targets": [ 0 ],
		 *          "data": null, // Use the full data source object for the renderer's source
		 *          "render": {
		 *            "_": "phone",
		 *            "filter": "phone_filter",
		 *            "display": "phone_display"
		 *          }
		 *        } ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Use as a function to create a link from the data source
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [ {
		 *          "targets": [ 0 ],
		 *          "data": "download_link",
		 *          "render": function ( data, type, full ) {
		 *            return '<a href="'+data+'">Download</a>';
		 *          }
		 *        } ]
		 *      } );
		 *    } );
		 */
		"mRender": null,
	
	
		/**
		 * Change the cell type created for the column - either TD cells or TH cells. This
		 * can be useful as TH cells have semantic meaning in the table body, allowing them
		 * to act as a header for a row (you may wish to add scope='row' to the TH elements).
		 *  @type string
		 *  @default td
		 *
		 *  @name DataTable.defaults.column.cellType
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Make the first column use TH cells
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [ {
		 *          "targets": [ 0 ],
		 *          "cellType": "th"
		 *        } ]
		 *      } );
		 *    } );
		 */
		"sCellType": "td",
	
	
		/**
		 * Class to give to each cell in this column.
		 *  @type string
		 *  @default <i>Empty string</i>
		 *
		 *  @name DataTable.defaults.column.class
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columnDefs`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "class": "my_class", "targets": [ 0 ] }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          { "class": "my_class" },
		 *          null,
		 *          null,
		 *          null,
		 *          null
		 *        ]
		 *      } );
		 *    } );
		 */
		"sClass": "",
	
		/**
		 * When DataTables calculates the column widths to assign to each column,
		 * it finds the longest string in each column and then constructs a
		 * temporary table and reads the widths from that. The problem with this
		 * is that "mmm" is much wider then "iiii", but the latter is a longer
		 * string - thus the calculation can go wrong (doing it properly and putting
		 * it into an DOM object and measuring that is horribly(!) slow). Thus as
		 * a "work around" we provide this option. It will append its value to the
		 * text that is found to be the longest string for the column - i.e. padding.
		 * Generally you shouldn't need this!
		 *  @type string
		 *  @default <i>Empty string<i>
		 *
		 *  @name DataTable.defaults.column.contentPadding
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          null,
		 *          null,
		 *          null,
		 *          {
		 *            "contentPadding": "mmm"
		 *          }
		 *        ]
		 *      } );
		 *    } );
		 */
		"sContentPadding": "",
	
	
		/**
		 * Allows a default value to be given for a column's data, and will be used
		 * whenever a null data source is encountered (this can be because `data`
		 * is set to null, or because the data source itself is null).
		 *  @type string
		 *  @default null
		 *
		 *  @name DataTable.defaults.column.defaultContent
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columnDefs`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          {
		 *            "data": null,
		 *            "defaultContent": "Edit",
		 *            "targets": [ -1 ]
		 *          }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          null,
		 *          null,
		 *          null,
		 *          {
		 *            "data": null,
		 *            "defaultContent": "Edit"
		 *          }
		 *        ]
		 *      } );
		 *    } );
		 */
		"sDefaultContent": null,
	
	
		/**
		 * This parameter is only used in DataTables' server-side processing. It can
		 * be exceptionally useful to know what columns are being displayed on the
		 * client side, and to map these to database fields. When defined, the names
		 * also allow DataTables to reorder information from the server if it comes
		 * back in an unexpected order (i.e. if you switch your columns around on the
		 * client-side, your server-side code does not also need updating).
		 *  @type string
		 *  @default <i>Empty string</i>
		 *
		 *  @name DataTable.defaults.column.name
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columnDefs`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "name": "engine", "targets": [ 0 ] },
		 *          { "name": "browser", "targets": [ 1 ] },
		 *          { "name": "platform", "targets": [ 2 ] },
		 *          { "name": "version", "targets": [ 3 ] },
		 *          { "name": "grade", "targets": [ 4 ] }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          { "name": "engine" },
		 *          { "name": "browser" },
		 *          { "name": "platform" },
		 *          { "name": "version" },
		 *          { "name": "grade" }
		 *        ]
		 *      } );
		 *    } );
		 */
		"sName": "",
	
	
		/**
		 * Defines a data source type for the ordering which can be used to read
		 * real-time information from the table (updating the internally cached
		 * version) prior to ordering. This allows ordering to occur on user
		 * editable elements such as form inputs.
		 *  @type string
		 *  @default std
		 *
		 *  @name DataTable.defaults.column.orderDataType
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columnDefs`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "orderDataType": "dom-text", "targets": [ 2, 3 ] },
		 *          { "type": "numeric", "targets": [ 3 ] },
		 *          { "orderDataType": "dom-select", "targets": [ 4 ] },
		 *          { "orderDataType": "dom-checkbox", "targets": [ 5 ] }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          null,
		 *          null,
		 *          { "orderDataType": "dom-text" },
		 *          { "orderDataType": "dom-text", "type": "numeric" },
		 *          { "orderDataType": "dom-select" },
		 *          { "orderDataType": "dom-checkbox" }
		 *        ]
		 *      } );
		 *    } );
		 */
		"sSortDataType": "std",
	
	
		/**
		 * The title of this column.
		 *  @type string
		 *  @default null <i>Derived from the 'TH' value for this column in the
		 *    original HTML table.</i>
		 *
		 *  @name DataTable.defaults.column.title
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columnDefs`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "title": "My column title", "targets": [ 0 ] }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          { "title": "My column title" },
		 *          null,
		 *          null,
		 *          null,
		 *          null
		 *        ]
		 *      } );
		 *    } );
		 */
		"sTitle": null,
	
	
		/**
		 * The type allows you to specify how the data for this column will be
		 * ordered. Four types (string, numeric, date and html (which will strip
		 * HTML tags before ordering)) are currently available. Note that only date
		 * formats understood by Javascript's Date() object will be accepted as type
		 * date. For example: "Mar 26, 2008 5:03 PM". May take the values: 'string',
		 * 'numeric', 'date' or 'html' (by default). Further types can be adding
		 * through plug-ins.
		 *  @type string
		 *  @default null <i>Auto-detected from raw data</i>
		 *
		 *  @name DataTable.defaults.column.type
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columnDefs`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "type": "html", "targets": [ 0 ] }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          { "type": "html" },
		 *          null,
		 *          null,
		 *          null,
		 *          null
		 *        ]
		 *      } );
		 *    } );
		 */
		"sType": null,
	
	
		/**
		 * Defining the width of the column, this parameter may take any CSS value
		 * (3em, 20px etc). DataTables applies 'smart' widths to columns which have not
		 * been given a specific width through this interface ensuring that the table
		 * remains readable.
		 *  @type string
		 *  @default null <i>Automatic</i>
		 *
		 *  @name DataTable.defaults.column.width
		 *  @dtopt Columns
		 *
		 *  @example
		 *    // Using `columnDefs`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columnDefs": [
		 *          { "width": "20%", "targets": [ 0 ] }
		 *        ]
		 *      } );
		 *    } );
		 *
		 *  @example
		 *    // Using `columns`
		 *    $(document).ready( function() {
		 *      $('#example').dataTable( {
		 *        "columns": [
		 *          { "width": "20%" },
		 *          null,
		 *          null,
		 *          null,
		 *          null
		 *        ]
		 *      } );
		 *    } );
		 */
		"sWidth": null
	};
	
	_fnHungarianMap( DataTable.defaults.column );
	
	
	
	/**
	 * DataTables settings object - this holds all the information needed for a
	 * given table, including configuration, data and current application of the
	 * table options. DataTables does not have a single instance for each DataTable
	 * with the settings attached to that instance, but rather instances of the
	 * DataTable "class" are created on-the-fly as needed (typically by a
	 * $().dataTable() call) and the settings object is then applied to that
	 * instance.
	 *
	 * Note that this object is related to {@link DataTable.defaults} but this
	 * one is the internal data store for DataTables's cache of columns. It should
	 * NOT be manipulated outside of DataTables. Any configuration should be done
	 * through the initialisation options.
	 *  @namespace
	 *  @todo Really should attach the settings object to individual instances so we
	 *    don't need to create new instances on each $().dataTable() call (if the
	 *    table already exists). It would also save passing oSettings around and
	 *    into every single function. However, this is a very significant
	 *    architecture change for DataTables and will almost certainly break
	 *    backwards compatibility with older installations. This is something that
	 *    will be done in 2.0.
	 */
	DataTable.models.oSettings = {
		/**
		 * Primary features of DataTables and their enablement state.
		 *  @namespace
		 */
		"oFeatures": {
	
			/**
			 * Flag to say if DataTables should automatically try to calculate the
			 * optimum table and columns widths (true) or not (false).
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bAutoWidth": null,
	
			/**
			 * Delay the creation of TR and TD elements until they are actually
			 * needed by a driven page draw. This can give a significant speed
			 * increase for Ajax source and Javascript source data, but makes no
			 * difference at all fro DOM and server-side processing tables.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bDeferRender": null,
	
			/**
			 * Enable filtering on the table or not. Note that if this is disabled
			 * then there is no filtering at all on the table, including fnFilter.
			 * To just remove the filtering input use sDom and remove the 'f' option.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bFilter": null,
	
			/**
			 * Table information element (the 'Showing x of y records' div) enable
			 * flag.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bInfo": null,
	
			/**
			 * Present a user control allowing the end user to change the page size
			 * when pagination is enabled.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bLengthChange": null,
	
			/**
			 * Pagination enabled or not. Note that if this is disabled then length
			 * changing must also be disabled.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bPaginate": null,
	
			/**
			 * Processing indicator enable flag whenever DataTables is enacting a
			 * user request - typically an Ajax request for server-side processing.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bProcessing": null,
	
			/**
			 * Server-side processing enabled flag - when enabled DataTables will
			 * get all data from the server for every draw - there is no filtering,
			 * sorting or paging done on the client-side.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bServerSide": null,
	
			/**
			 * Sorting enablement flag.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bSort": null,
	
			/**
			 * Multi-column sorting
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bSortMulti": null,
	
			/**
			 * Apply a class to the columns which are being sorted to provide a
			 * visual highlight or not. This can slow things down when enabled since
			 * there is a lot of DOM interaction.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bSortClasses": null,
	
			/**
			 * State saving enablement flag.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bStateSave": null
		},
	
	
		/**
		 * Scrolling settings for a table.
		 *  @namespace
		 */
		"oScroll": {
			/**
			 * When the table is shorter in height than sScrollY, collapse the
			 * table container down to the height of the table (when true).
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type boolean
			 */
			"bCollapse": null,
	
			/**
			 * Width of the scrollbar for the web-browser's platform. Calculated
			 * during table initialisation.
			 *  @type int
			 *  @default 0
			 */
			"iBarWidth": 0,
	
			/**
			 * Viewport width for horizontal scrolling. Horizontal scrolling is
			 * disabled if an empty string.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type string
			 */
			"sX": null,
	
			/**
			 * Width to expand the table to when using x-scrolling. Typically you
			 * should not need to use this.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type string
			 *  @deprecated
			 */
			"sXInner": null,
	
			/**
			 * Viewport height for vertical scrolling. Vertical scrolling is disabled
			 * if an empty string.
			 * Note that this parameter will be set by the initialisation routine. To
			 * set a default use {@link DataTable.defaults}.
			 *  @type string
			 */
			"sY": null
		},
	
		/**
		 * Language information for the table.
		 *  @namespace
		 *  @extends DataTable.defaults.oLanguage
		 */
		"oLanguage": {
			/**
			 * Information callback function. See
			 * {@link DataTable.defaults.fnInfoCallback}
			 *  @type function
			 *  @default null
			 */
			"fnInfoCallback": null
		},
	
		/**
		 * Browser support parameters
		 *  @namespace
		 */
		"oBrowser": {
			/**
			 * Indicate if the browser incorrectly calculates width:100% inside a
			 * scrolling element (IE6/7)
			 *  @type boolean
			 *  @default false
			 */
			"bScrollOversize": false,
	
			/**
			 * Determine if the vertical scrollbar is on the right or left of the
			 * scrolling container - needed for rtl language layout, although not
			 * all browsers move the scrollbar (Safari).
			 *  @type boolean
			 *  @default false
			 */
			"bScrollbarLeft": false,
	
			/**
			 * Flag for if `getBoundingClientRect` is fully supported or not
			 *  @type boolean
			 *  @default false
			 */
			"bBounding": false,
	
			/**
			 * Browser scrollbar width
			 *  @type integer
			 *  @default 0
			 */
			"barWidth": 0
		},
	
	
		"ajax": null,
	
	
		/**
		 * Array referencing the nodes which are used for the features. The
		 * parameters of this object match what is allowed by sDom - i.e.
		 *   <ul>
		 *     <li>'l' - Length changing</li>
		 *     <li>'f' - Filtering input</li>
		 *     <li>'t' - The table!</li>
		 *     <li>'i' - Information</li>
		 *     <li>'p' - Pagination</li>
		 *     <li>'r' - pRocessing</li>
		 *   </ul>
		 *  @type array
		 *  @default []
		 */
		"aanFeatures": [],
	
		/**
		 * Store data information - see {@link DataTable.models.oRow} for detailed
		 * information.
		 *  @type array
		 *  @default []
		 */
		"aoData": [],
	
		/**
		 * Array of indexes which are in the current display (after filtering etc)
		 *  @type array
		 *  @default []
		 */
		"aiDisplay": [],
	
		/**
		 * Array of indexes for display - no filtering
		 *  @type array
		 *  @default []
		 */
		"aiDisplayMaster": [],
	
		/**
		 * Map of row ids to data indexes
		 *  @type object
		 *  @default {}
		 */
		"aIds": {},
	
		/**
		 * Store information about each column that is in use
		 *  @type array
		 *  @default []
		 */
		"aoColumns": [],
	
		/**
		 * Store information about the table's header
		 *  @type array
		 *  @default []
		 */
		"aoHeader": [],
	
		/**
		 * Store information about the table's footer
		 *  @type array
		 *  @default []
		 */
		"aoFooter": [],
	
		/**
		 * Store the applied global search information in case we want to force a
		 * research or compare the old search to a new one.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @namespace
		 *  @extends DataTable.models.oSearch
		 */
		"oPreviousSearch": {},
	
		/**
		 * Store the applied search for each column - see
		 * {@link DataTable.models.oSearch} for the format that is used for the
		 * filtering information for each column.
		 *  @type array
		 *  @default []
		 */
		"aoPreSearchCols": [],
	
		/**
		 * Sorting that is applied to the table. Note that the inner arrays are
		 * used in the following manner:
		 * <ul>
		 *   <li>Index 0 - column number</li>
		 *   <li>Index 1 - current sorting direction</li>
		 * </ul>
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type array
		 *  @todo These inner arrays should really be objects
		 */
		"aaSorting": null,
	
		/**
		 * Sorting that is always applied to the table (i.e. prefixed in front of
		 * aaSorting).
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type array
		 *  @default []
		 */
		"aaSortingFixed": [],
	
		/**
		 * Classes to use for the striping of a table.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type array
		 *  @default []
		 */
		"asStripeClasses": null,
	
		/**
		 * If restoring a table - we should restore its striping classes as well
		 *  @type array
		 *  @default []
		 */
		"asDestroyStripes": [],
	
		/**
		 * If restoring a table - we should restore its width
		 *  @type int
		 *  @default 0
		 */
		"sDestroyWidth": 0,
	
		/**
		 * Callback functions array for every time a row is inserted (i.e. on a draw).
		 *  @type array
		 *  @default []
		 */
		"aoRowCallback": [],
	
		/**
		 * Callback functions for the header on each draw.
		 *  @type array
		 *  @default []
		 */
		"aoHeaderCallback": [],
	
		/**
		 * Callback function for the footer on each draw.
		 *  @type array
		 *  @default []
		 */
		"aoFooterCallback": [],
	
		/**
		 * Array of callback functions for draw callback functions
		 *  @type array
		 *  @default []
		 */
		"aoDrawCallback": [],
	
		/**
		 * Array of callback functions for row created function
		 *  @type array
		 *  @default []
		 */
		"aoRowCreatedCallback": [],
	
		/**
		 * Callback functions for just before the table is redrawn. A return of
		 * false will be used to cancel the draw.
		 *  @type array
		 *  @default []
		 */
		"aoPreDrawCallback": [],
	
		/**
		 * Callback functions for when the table has been initialised.
		 *  @type array
		 *  @default []
		 */
		"aoInitComplete": [],
	
	
		/**
		 * Callbacks for modifying the settings to be stored for state saving, prior to
		 * saving state.
		 *  @type array
		 *  @default []
		 */
		"aoStateSaveParams": [],
	
		/**
		 * Callbacks for modifying the settings that have been stored for state saving
		 * prior to using the stored values to restore the state.
		 *  @type array
		 *  @default []
		 */
		"aoStateLoadParams": [],
	
		/**
		 * Callbacks for operating on the settings object once the saved state has been
		 * loaded
		 *  @type array
		 *  @default []
		 */
		"aoStateLoaded": [],
	
		/**
		 * Cache the table ID for quick access
		 *  @type string
		 *  @default <i>Empty string</i>
		 */
		"sTableId": "",
	
		/**
		 * The TABLE node for the main table
		 *  @type node
		 *  @default null
		 */
		"nTable": null,
	
		/**
		 * Permanent ref to the thead element
		 *  @type node
		 *  @default null
		 */
		"nTHead": null,
	
		/**
		 * Permanent ref to the tfoot element - if it exists
		 *  @type node
		 *  @default null
		 */
		"nTFoot": null,
	
		/**
		 * Permanent ref to the tbody element
		 *  @type node
		 *  @default null
		 */
		"nTBody": null,
	
		/**
		 * Cache the wrapper node (contains all DataTables controlled elements)
		 *  @type node
		 *  @default null
		 */
		"nTableWrapper": null,
	
		/**
		 * Indicate if when using server-side processing the loading of data
		 * should be deferred until the second draw.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type boolean
		 *  @default false
		 */
		"bDeferLoading": false,
	
		/**
		 * Indicate if all required information has been read in
		 *  @type boolean
		 *  @default false
		 */
		"bInitialised": false,
	
		/**
		 * Information about open rows. Each object in the array has the parameters
		 * 'nTr' and 'nParent'
		 *  @type array
		 *  @default []
		 */
		"aoOpenRows": [],
	
		/**
		 * Dictate the positioning of DataTables' control elements - see
		 * {@link DataTable.model.oInit.sDom}.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type string
		 *  @default null
		 */
		"sDom": null,
	
		/**
		 * Search delay (in mS)
		 *  @type integer
		 *  @default null
		 */
		"searchDelay": null,
	
		/**
		 * Which type of pagination should be used.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type string
		 *  @default two_button
		 */
		"sPaginationType": "two_button",
	
		/**
		 * The state duration (for `stateSave`) in seconds.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type int
		 *  @default 0
		 */
		"iStateDuration": 0,
	
		/**
		 * Array of callback functions for state saving. Each array element is an
		 * object with the following parameters:
		 *   <ul>
		 *     <li>function:fn - function to call. Takes two parameters, oSettings
		 *       and the JSON string to save that has been thus far created. Returns
		 *       a JSON string to be inserted into a json object
		 *       (i.e. '"param": [ 0, 1, 2]')</li>
		 *     <li>string:sName - name of callback</li>
		 *   </ul>
		 *  @type array
		 *  @default []
		 */
		"aoStateSave": [],
	
		/**
		 * Array of callback functions for state loading. Each array element is an
		 * object with the following parameters:
		 *   <ul>
		 *     <li>function:fn - function to call. Takes two parameters, oSettings
		 *       and the object stored. May return false to cancel state loading</li>
		 *     <li>string:sName - name of callback</li>
		 *   </ul>
		 *  @type array
		 *  @default []
		 */
		"aoStateLoad": [],
	
		/**
		 * State that was saved. Useful for back reference
		 *  @type object
		 *  @default null
		 */
		"oSavedState": null,
	
		/**
		 * State that was loaded. Useful for back reference
		 *  @type object
		 *  @default null
		 */
		"oLoadedState": null,
	
		/**
		 * Source url for AJAX data for the table.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type string
		 *  @default null
		 */
		"sAjaxSource": null,
	
		/**
		 * Property from a given object from which to read the table data from. This
		 * can be an empty string (when not server-side processing), in which case
		 * it is  assumed an an array is given directly.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type string
		 */
		"sAjaxDataProp": null,
	
		/**
		 * Note if draw should be blocked while getting data
		 *  @type boolean
		 *  @default true
		 */
		"bAjaxDataGet": true,
	
		/**
		 * The last jQuery XHR object that was used for server-side data gathering.
		 * This can be used for working with the XHR information in one of the
		 * callbacks
		 *  @type object
		 *  @default null
		 */
		"jqXHR": null,
	
		/**
		 * JSON returned from the server in the last Ajax request
		 *  @type object
		 *  @default undefined
		 */
		"json": undefined,
	
		/**
		 * Data submitted as part of the last Ajax request
		 *  @type object
		 *  @default undefined
		 */
		"oAjaxData": undefined,
	
		/**
		 * Function to get the server-side data.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type function
		 */
		"fnServerData": null,
	
		/**
		 * Functions which are called prior to sending an Ajax request so extra
		 * parameters can easily be sent to the server
		 *  @type array
		 *  @default []
		 */
		"aoServerParams": [],
	
		/**
		 * Send the XHR HTTP method - GET or POST (could be PUT or DELETE if
		 * required).
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type string
		 */
		"sServerMethod": null,
	
		/**
		 * Format numbers for display.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type function
		 */
		"fnFormatNumber": null,
	
		/**
		 * List of options that can be used for the user selectable length menu.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type array
		 *  @default []
		 */
		"aLengthMenu": null,
	
		/**
		 * Counter for the draws that the table does. Also used as a tracker for
		 * server-side processing
		 *  @type int
		 *  @default 0
		 */
		"iDraw": 0,
	
		/**
		 * Indicate if a redraw is being done - useful for Ajax
		 *  @type boolean
		 *  @default false
		 */
		"bDrawing": false,
	
		/**
		 * Draw index (iDraw) of the last error when parsing the returned data
		 *  @type int
		 *  @default -1
		 */
		"iDrawError": -1,
	
		/**
		 * Paging display length
		 *  @type int
		 *  @default 10
		 */
		"_iDisplayLength": 10,
	
		/**
		 * Paging start point - aiDisplay index
		 *  @type int
		 *  @default 0
		 */
		"_iDisplayStart": 0,
	
		/**
		 * Server-side processing - number of records in the result set
		 * (i.e. before filtering), Use fnRecordsTotal rather than
		 * this property to get the value of the number of records, regardless of
		 * the server-side processing setting.
		 *  @type int
		 *  @default 0
		 *  @private
		 */
		"_iRecordsTotal": 0,
	
		/**
		 * Server-side processing - number of records in the current display set
		 * (i.e. after filtering). Use fnRecordsDisplay rather than
		 * this property to get the value of the number of records, regardless of
		 * the server-side processing setting.
		 *  @type boolean
		 *  @default 0
		 *  @private
		 */
		"_iRecordsDisplay": 0,
	
		/**
		 * The classes to use for the table
		 *  @type object
		 *  @default {}
		 */
		"oClasses": {},
	
		/**
		 * Flag attached to the settings object so you can check in the draw
		 * callback if filtering has been done in the draw. Deprecated in favour of
		 * events.
		 *  @type boolean
		 *  @default false
		 *  @deprecated
		 */
		"bFiltered": false,
	
		/**
		 * Flag attached to the settings object so you can check in the draw
		 * callback if sorting has been done in the draw. Deprecated in favour of
		 * events.
		 *  @type boolean
		 *  @default false
		 *  @deprecated
		 */
		"bSorted": false,
	
		/**
		 * Indicate that if multiple rows are in the header and there is more than
		 * one unique cell per column, if the top one (true) or bottom one (false)
		 * should be used for sorting / title by DataTables.
		 * Note that this parameter will be set by the initialisation routine. To
		 * set a default use {@link DataTable.defaults}.
		 *  @type boolean
		 */
		"bSortCellsTop": null,
	
		/**
		 * Initialisation object that is used for the table
		 *  @type object
		 *  @default null
		 */
		"oInit": null,
	
		/**
		 * Destroy callback functions - for plug-ins to attach themselves to the
		 * destroy so they can clean up markup and events.
		 *  @type array
		 *  @default []
		 */
		"aoDestroyCallback": [],
	
	
		/**
		 * Get the number of records in the current record set, before filtering
		 *  @type function
		 */
		"fnRecordsTotal": function ()
		{
			return _fnDataSource( this ) == 'ssp' ?
				this._iRecordsTotal * 1 :
				this.aiDisplayMaster.length;
		},
	
		/**
		 * Get the number of records in the current record set, after filtering
		 *  @type function
		 */
		"fnRecordsDisplay": function ()
		{
			return _fnDataSource( this ) == 'ssp' ?
				this._iRecordsDisplay * 1 :
				this.aiDisplay.length;
		},
	
		/**
		 * Get the display end point - aiDisplay index
		 *  @type function
		 */
		"fnDisplayEnd": function ()
		{
			var
				len      = this._iDisplayLength,
				start    = this._iDisplayStart,
				calc     = start + len,
				records  = this.aiDisplay.length,
				features = this.oFeatures,
				paginate = features.bPaginate;
	
			if ( features.bServerSide ) {
				return paginate === false || len === -1 ?
					start + records :
					Math.min( start+len, this._iRecordsDisplay );
			}
			else {
				return ! paginate || calc>records || len===-1 ?
					records :
					calc;
			}
		},
	
		/**
		 * The DataTables object for this table
		 *  @type object
		 *  @default null
		 */
		"oInstance": null,
	
		/**
		 * Unique identifier for each instance of the DataTables object. If there
		 * is an ID on the table node, then it takes that value, otherwise an
		 * incrementing internal counter is used.
		 *  @type string
		 *  @default null
		 */
		"sInstance": null,
	
		/**
		 * tabindex attribute value that is added to DataTables control elements, allowing
		 * keyboard navigation of the table and its controls.
		 */
		"iTabIndex": 0,
	
		/**
		 * DIV container for the footer scrolling table if scrolling
		 */
		"nScrollHead": null,
	
		/**
		 * DIV container for the footer scrolling table if scrolling
		 */
		"nScrollFoot": null,
	
		/**
		 * Last applied sort
		 *  @type array
		 *  @default []
		 */
		"aLastSort": [],
	
		/**
		 * Stored plug-in instances
		 *  @type object
		 *  @default {}
		 */
		"oPlugins": {},
	
		/**
		 * Function used to get a row's id from the row's data
		 *  @type function
		 *  @default null
		 */
		"rowIdFn": null,
	
		/**
		 * Data location where to store a row's id
		 *  @type string
		 *  @default null
		 */
		"rowId": null
	};

	/**
	 * Extension object for DataTables that is used to provide all extension
	 * options.
	 *
	 * Note that the `DataTable.ext` object is available through
	 * `jQuery.fn.dataTable.ext` where it may be accessed and manipulated. It is
	 * also aliased to `jQuery.fn.dataTableExt` for historic reasons.
	 *  @namespace
	 *  @extends DataTable.models.ext
	 */
	
	
	/**
	 * DataTables extensions
	 * 
	 * This namespace acts as a collection area for plug-ins that can be used to
	 * extend DataTables capabilities. Indeed many of the build in methods
	 * use this method to provide their own capabilities (sorting methods for
	 * example).
	 *
	 * Note that this namespace is aliased to `jQuery.fn.dataTableExt` for legacy
	 * reasons
	 *
	 *  @namespace
	 */
	DataTable.ext = _ext = {
		/**
		 * Buttons. For use with the Buttons extension for DataTables. This is
		 * defined here so other extensions can define buttons regardless of load
		 * order. It is _not_ used by DataTables core.
		 *
		 *  @type object
		 *  @default {}
		 */
		buttons: {},
	
	
		/**
		 * Element class names
		 *
		 *  @type object
		 *  @default {}
		 */
		classes: {},
	
	
		/**
		 * DataTables build type (expanded by the download builder)
		 *
		 *  @type string
		 */
		builder: "-source-",
	
	
		/**
		 * Error reporting.
		 * 
		 * How should DataTables report an error. Can take the value 'alert',
		 * 'throw', 'none' or a function.
		 *
		 *  @type string|function
		 *  @default alert
		 */
		errMode: "alert",
	
	
		/**
		 * Feature plug-ins.
		 * 
		 * This is an array of objects which describe the feature plug-ins that are
		 * available to DataTables. These feature plug-ins are then available for
		 * use through the `dom` initialisation option.
		 * 
		 * Each feature plug-in is described by an object which must have the
		 * following properties:
		 * 
		 * * `fnInit` - function that is used to initialise the plug-in,
		 * * `cFeature` - a character so the feature can be enabled by the `dom`
		 *   instillation option. This is case sensitive.
		 *
		 * The `fnInit` function has the following input parameters:
		 *
		 * 1. `{object}` DataTables settings object: see
		 *    {@link DataTable.models.oSettings}
		 *
		 * And the following return is expected:
		 * 
		 * * {node|null} The element which contains your feature. Note that the
		 *   return may also be void if your plug-in does not require to inject any
		 *   DOM elements into DataTables control (`dom`) - for example this might
		 *   be useful when developing a plug-in which allows table control via
		 *   keyboard entry
		 *
		 *  @type array
		 *
		 *  @example
		 *    $.fn.dataTable.ext.features.push( {
		 *      "fnInit": function( oSettings ) {
		 *        return new TableTools( { "oDTSettings": oSettings } );
		 *      },
		 *      "cFeature": "T"
		 *    } );
		 */
		feature: [],
	
	
		/**
		 * Row searching.
		 * 
		 * This method of searching is complimentary to the default type based
		 * searching, and a lot more comprehensive as it allows you complete control
		 * over the searching logic. Each element in this array is a function
		 * (parameters described below) that is called for every row in the table,
		 * and your logic decides if it should be included in the searching data set
		 * or not.
		 *
		 * Searching functions have the following input parameters:
		 *
		 * 1. `{object}` DataTables settings object: see
		 *    {@link DataTable.models.oSettings}
		 * 2. `{array|object}` Data for the row to be processed (same as the
		 *    original format that was passed in as the data source, or an array
		 *    from a DOM data source
		 * 3. `{int}` Row index ({@link DataTable.models.oSettings.aoData}), which
		 *    can be useful to retrieve the `TR` element if you need DOM interaction.
		 *
		 * And the following return is expected:
		 *
		 * * {boolean} Include the row in the searched result set (true) or not
		 *   (false)
		 *
		 * Note that as with the main search ability in DataTables, technically this
		 * is "filtering", since it is subtractive. However, for consistency in
		 * naming we call it searching here.
		 *
		 *  @type array
		 *  @default []
		 *
		 *  @example
		 *    // The following example shows custom search being applied to the
		 *    // fourth column (i.e. the data[3] index) based on two input values
		 *    // from the end-user, matching the data in a certain range.
		 *    $.fn.dataTable.ext.search.push(
		 *      function( settings, data, dataIndex ) {
		 *        var min = document.getElementById('min').value * 1;
		 *        var max = document.getElementById('max').value * 1;
		 *        var version = data[3] == "-" ? 0 : data[3]*1;
		 *
		 *        if ( min == "" && max == "" ) {
		 *          return true;
		 *        }
		 *        else if ( min == "" && version < max ) {
		 *          return true;
		 *        }
		 *        else if ( min < version && "" == max ) {
		 *          return true;
		 *        }
		 *        else if ( min < version && version < max ) {
		 *          return true;
		 *        }
		 *        return false;
		 *      }
		 *    );
		 */
		search: [],
	
	
		/**
		 * Selector extensions
		 *
		 * The `selector` option can be used to extend the options available for the
		 * selector modifier options (`selector-modifier` object data type) that
		 * each of the three built in selector types offer (row, column and cell +
		 * their plural counterparts). For example the Select extension uses this
		 * mechanism to provide an option to select only rows, columns and cells
		 * that have been marked as selected by the end user (`{selected: true}`),
		 * which can be used in conjunction with the existing built in selector
		 * options.
		 *
		 * Each property is an array to which functions can be pushed. The functions
		 * take three attributes:
		 *
		 * * Settings object for the host table
		 * * Options object (`selector-modifier` object type)
		 * * Array of selected item indexes
		 *
		 * The return is an array of the resulting item indexes after the custom
		 * selector has been applied.
		 *
		 *  @type object
		 */
		selector: {
			cell: [],
			column: [],
			row: []
		},
	
	
		/**
		 * Internal functions, exposed for used in plug-ins.
		 * 
		 * Please note that you should not need to use the internal methods for
		 * anything other than a plug-in (and even then, try to avoid if possible).
		 * The internal function may change between releases.
		 *
		 *  @type object
		 *  @default {}
		 */
		internal: {},
	
	
		/**
		 * Legacy configuration options. Enable and disable legacy options that
		 * are available in DataTables.
		 *
		 *  @type object
		 */
		legacy: {
			/**
			 * Enable / disable DataTables 1.9 compatible server-side processing
			 * requests
			 *
			 *  @type boolean
			 *  @default null
			 */
			ajax: null
		},
	
	
		/**
		 * Pagination plug-in methods.
		 * 
		 * Each entry in this object is a function and defines which buttons should
		 * be shown by the pagination rendering method that is used for the table:
		 * {@link DataTable.ext.renderer.pageButton}. The renderer addresses how the
		 * buttons are displayed in the document, while the functions here tell it
		 * what buttons to display. This is done by returning an array of button
		 * descriptions (what each button will do).
		 *
		 * Pagination types (the four built in options and any additional plug-in
		 * options defined here) can be used through the `paginationType`
		 * initialisation parameter.
		 *
		 * The functions defined take two parameters:
		 *
		 * 1. `{int} page` The current page index
		 * 2. `{int} pages` The number of pages in the table
		 *
		 * Each function is expected to return an array where each element of the
		 * array can be one of:
		 *
		 * * `first` - Jump to first page when activated
		 * * `last` - Jump to last page when activated
		 * * `previous` - Show previous page when activated
		 * * `next` - Show next page when activated
		 * * `{int}` - Show page of the index given
		 * * `{array}` - A nested array containing the above elements to add a
		 *   containing 'DIV' element (might be useful for styling).
		 *
		 * Note that DataTables v1.9- used this object slightly differently whereby
		 * an object with two functions would be defined for each plug-in. That
		 * ability is still supported by DataTables 1.10+ to provide backwards
		 * compatibility, but this option of use is now decremented and no longer
		 * documented in DataTables 1.10+.
		 *
		 *  @type object
		 *  @default {}
		 *
		 *  @example
		 *    // Show previous, next and current page buttons only
		 *    $.fn.dataTableExt.oPagination.current = function ( page, pages ) {
		 *      return [ 'previous', page, 'next' ];
		 *    };
		 */
		pager: {},
	
	
		renderer: {
			pageButton: {},
			header: {}
		},
	
	
		/**
		 * Ordering plug-ins - custom data source
		 * 
		 * The extension options for ordering of data available here is complimentary
		 * to the default type based ordering that DataTables typically uses. It
		 * allows much greater control over the the data that is being used to
		 * order a column, but is necessarily therefore more complex.
		 * 
		 * This type of ordering is useful if you want to do ordering based on data
		 * live from the DOM (for example the contents of an 'input' element) rather
		 * than just the static string that DataTables knows of.
		 * 
		 * The way these plug-ins work is that you create an array of the values you
		 * wish to be ordering for the column in question and then return that
		 * array. The data in the array much be in the index order of the rows in
		 * the table (not the currently ordering order!). Which order data gathering
		 * function is run here depends on the `dt-init columns.orderDataType`
		 * parameter that is used for the column (if any).
		 *
		 * The functions defined take two parameters:
		 *
		 * 1. `{object}` DataTables settings object: see
		 *    {@link DataTable.models.oSettings}
		 * 2. `{int}` Target column index
		 *
		 * Each function is expected to return an array:
		 *
		 * * `{array}` Data for the column to be ordering upon
		 *
		 *  @type array
		 *
		 *  @example
		 *    // Ordering using `input` node values
		 *    $.fn.dataTable.ext.order['dom-text'] = function  ( settings, col )
		 *    {
		 *      return this.api().column( col, {order:'index'} ).nodes().map( function ( td, i ) {
		 *        return $('input', td).val();
		 *      } );
		 *    }
		 */
		order: {},
	
	
		/**
		 * Type based plug-ins.
		 *
		 * Each column in DataTables has a type assigned to it, either by automatic
		 * detection or by direct assignment using the `type` option for the column.
		 * The type of a column will effect how it is ordering and search (plug-ins
		 * can also make use of the column type if required).
		 *
		 * @namespace
		 */
		type: {
			/**
			 * Type detection functions.
			 *
			 * The functions defined in this object are used to automatically detect
			 * a column's type, making initialisation of DataTables super easy, even
			 * when complex data is in the table.
			 *
			 * The functions defined take two parameters:
			 *
		     *  1. `{*}` Data from the column cell to be analysed
		     *  2. `{settings}` DataTables settings object. This can be used to
		     *     perform context specific type detection - for example detection
		     *     based on language settings such as using a comma for a decimal
		     *     place. Generally speaking the options from the settings will not
		     *     be required
			 *
			 * Each function is expected to return:
			 *
			 * * `{string|null}` Data type detected, or null if unknown (and thus
			 *   pass it on to the other type detection functions.
			 *
			 *  @type array
			 *
			 *  @example
			 *    // Currency type detection plug-in:
			 *    $.fn.dataTable.ext.type.detect.push(
			 *      function ( data, settings ) {
			 *        // Check the numeric part
			 *        if ( ! $.isNumeric( data.substring(1) ) ) {
			 *          return null;
			 *        }
			 *
			 *        // Check prefixed by currency
			 *        if ( data.charAt(0) == '$' || data.charAt(0) == '&pound;' ) {
			 *          return 'currency';
			 *        }
			 *        return null;
			 *      }
			 *    );
			 */
			detect: [],
	
	
			/**
			 * Type based search formatting.
			 *
			 * The type based searching functions can be used to pre-format the
			 * data to be search on. For example, it can be used to strip HTML
			 * tags or to de-format telephone numbers for numeric only searching.
			 *
			 * Note that is a search is not defined for a column of a given type,
			 * no search formatting will be performed.
			 * 
			 * Pre-processing of searching data plug-ins - When you assign the sType
			 * for a column (or have it automatically detected for you by DataTables
			 * or a type detection plug-in), you will typically be using this for
			 * custom sorting, but it can also be used to provide custom searching
			 * by allowing you to pre-processing the data and returning the data in
			 * the format that should be searched upon. This is done by adding
			 * functions this object with a parameter name which matches the sType
			 * for that target column. This is the corollary of <i>afnSortData</i>
			 * for searching data.
			 *
			 * The functions defined take a single parameter:
			 *
		     *  1. `{*}` Data from the column cell to be prepared for searching
			 *
			 * Each function is expected to return:
			 *
			 * * `{string|null}` Formatted string that will be used for the searching.
			 *
			 *  @type object
			 *  @default {}
			 *
			 *  @example
			 *    $.fn.dataTable.ext.type.search['title-numeric'] = function ( d ) {
			 *      return d.replace(/\n/g," ").replace( /<.*?>/g, "" );
			 *    }
			 */
			search: {},
	
	
			/**
			 * Type based ordering.
			 *
			 * The column type tells DataTables what ordering to apply to the table
			 * when a column is sorted upon. The order for each type that is defined,
			 * is defined by the functions available in this object.
			 *
			 * Each ordering option can be described by three properties added to
			 * this object:
			 *
			 * * `{type}-pre` - Pre-formatting function
			 * * `{type}-asc` - Ascending order function
			 * * `{type}-desc` - Descending order function
			 *
			 * All three can be used together, only `{type}-pre` or only
			 * `{type}-asc` and `{type}-desc` together. It is generally recommended
			 * that only `{type}-pre` is used, as this provides the optimal
			 * implementation in terms of speed, although the others are provided
			 * for compatibility with existing Javascript sort functions.
			 *
			 * `{type}-pre`: Functions defined take a single parameter:
			 *
		     *  1. `{*}` Data from the column cell to be prepared for ordering
			 *
			 * And return:
			 *
			 * * `{*}` Data to be sorted upon
			 *
			 * `{type}-asc` and `{type}-desc`: Functions are typical Javascript sort
			 * functions, taking two parameters:
			 *
		     *  1. `{*}` Data to compare to the second parameter
		     *  2. `{*}` Data to compare to the first parameter
			 *
			 * And returning:
			 *
			 * * `{*}` Ordering match: <0 if first parameter should be sorted lower
			 *   than the second parameter, ===0 if the two parameters are equal and
			 *   >0 if the first parameter should be sorted height than the second
			 *   parameter.
			 * 
			 *  @type object
			 *  @default {}
			 *
			 *  @example
			 *    // Numeric ordering of formatted numbers with a pre-formatter
			 *    $.extend( $.fn.dataTable.ext.type.order, {
			 *      "string-pre": function(x) {
			 *        a = (a === "-" || a === "") ? 0 : a.replace( /[^\d\-\.]/g, "" );
			 *        return parseFloat( a );
			 *      }
			 *    } );
			 *
			 *  @example
			 *    // Case-sensitive string ordering, with no pre-formatting method
			 *    $.extend( $.fn.dataTable.ext.order, {
			 *      "string-case-asc": function(x,y) {
			 *        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
			 *      },
			 *      "string-case-desc": function(x,y) {
			 *        return ((x < y) ? 1 : ((x > y) ? -1 : 0));
			 *      }
			 *    } );
			 */
			order: {}
		},
	
		/**
		 * Unique DataTables instance counter
		 *
		 * @type int
		 * @private
		 */
		_unique: 0,
	
	
		//
		// Depreciated
		// The following properties are retained for backwards compatiblity only.
		// The should not be used in new projects and will be removed in a future
		// version
		//
	
		/**
		 * Version check function.
		 *  @type function
		 *  @depreciated Since 1.10
		 */
		fnVersionCheck: DataTable.fnVersionCheck,
	
	
		/**
		 * Index for what 'this' index API functions should use
		 *  @type int
		 *  @deprecated Since v1.10
		 */
		iApiIndex: 0,
	
	
		/**
		 * jQuery UI class container
		 *  @type object
		 *  @deprecated Since v1.10
		 */
		oJUIClasses: {},
	
	
		/**
		 * Software version
		 *  @type string
		 *  @deprecated Since v1.10
		 */
		sVersion: DataTable.version
	};
	
	
	//
	// Backwards compatibility. Alias to pre 1.10 Hungarian notation counter parts
	//
	$.extend( _ext, {
		afnFiltering: _ext.search,
		aTypes:       _ext.type.detect,
		ofnSearch:    _ext.type.search,
		oSort:        _ext.type.order,
		afnSortData:  _ext.order,
		aoFeatures:   _ext.feature,
		oApi:         _ext.internal,
		oStdClasses:  _ext.classes,
		oPagination:  _ext.pager
	} );
	
	
	$.extend( DataTable.ext.classes, {
		"sTable": "dataTable",
		"sNoFooter": "no-footer",
	
		/* Paging buttons */
		"sPageButton": "paginate_button",
		"sPageButtonActive": "current",
		"sPageButtonDisabled": "disabled",
	
		/* Striping classes */
		"sStripeOdd": "odd",
		"sStripeEven": "even",
	
		/* Empty row */
		"sRowEmpty": "dataTables_empty",
	
		/* Features */
		"sWrapper": "dataTables_wrapper",
		"sFilter": "dataTables_filter",
		"sInfo": "dataTables_info",
		"sPaging": "dataTables_paginate paging_", /* Note that the type is postfixed */
		"sLength": "dataTables_length",
		"sProcessing": "dataTables_processing",
	
		/* Sorting */
		"sSortAsc": "sorting_asc",
		"sSortDesc": "sorting_desc",
		"sSortable": "sorting", /* Sortable in both directions */
		"sSortableAsc": "sorting_asc_disabled",
		"sSortableDesc": "sorting_desc_disabled",
		"sSortableNone": "sorting_disabled",
		"sSortColumn": "sorting_", /* Note that an int is postfixed for the sorting order */
	
		/* Filtering */
		"sFilterInput": "",
	
		/* Page length */
		"sLengthSelect": "",
	
		/* Scrolling */
		"sScrollWrapper": "dataTables_scroll",
		"sScrollHead": "dataTables_scrollHead",
		"sScrollHeadInner": "dataTables_scrollHeadInner",
		"sScrollBody": "dataTables_scrollBody",
		"sScrollFoot": "dataTables_scrollFoot",
		"sScrollFootInner": "dataTables_scrollFootInner",
	
		/* Misc */
		"sHeaderTH": "",
		"sFooterTH": "",
	
		// Deprecated
		"sSortJUIAsc": "",
		"sSortJUIDesc": "",
		"sSortJUI": "",
		"sSortJUIAscAllowed": "",
		"sSortJUIDescAllowed": "",
		"sSortJUIWrapper": "",
		"sSortIcon": "",
		"sJUIHeader": "",
		"sJUIFooter": ""
	} );
	
	
	var extPagination = DataTable.ext.pager;
	
	function _numbers ( page, pages ) {
		var
			numbers = [],
			buttons = extPagination.numbers_length,
			half = Math.floor( buttons / 2 ),
			i = 1;
	
		if ( pages <= buttons ) {
			numbers = _range( 0, pages );
		}
		else if ( page <= half ) {
			numbers = _range( 0, buttons-2 );
			numbers.push( 'ellipsis' );
			numbers.push( pages-1 );
		}
		else if ( page >= pages - 1 - half ) {
			numbers = _range( pages-(buttons-2), pages );
			numbers.splice( 0, 0, 'ellipsis' ); // no unshift in ie6
			numbers.splice( 0, 0, 0 );
		}
		else {
			numbers = _range( page-half+2, page+half-1 );
			numbers.push( 'ellipsis' );
			numbers.push( pages-1 );
			numbers.splice( 0, 0, 'ellipsis' );
			numbers.splice( 0, 0, 0 );
		}
	
		numbers.DT_el = 'span';
		return numbers;
	}
	
	
	$.extend( extPagination, {
		simple: function ( page, pages ) {
			return [ 'previous', 'next' ];
		},
	
		full: function ( page, pages ) {
			return [  'first', 'previous', 'next', 'last' ];
		},
	
		numbers: function ( page, pages ) {
			return [ _numbers(page, pages) ];
		},
	
		simple_numbers: function ( page, pages ) {
			return [ 'previous', _numbers(page, pages), 'next' ];
		},
	
		full_numbers: function ( page, pages ) {
			return [ 'first', 'previous', _numbers(page, pages), 'next', 'last' ];
		},
		
		first_last_numbers: function (page, pages) {
	 		return ['first', _numbers(page, pages), 'last'];
	 	},
	
		// For testing and plug-ins to use
		_numbers: _numbers,
	
		// Number of number buttons (including ellipsis) to show. _Must be odd!_
		numbers_length: 7
	} );
	
	
	$.extend( true, DataTable.ext.renderer, {
		pageButton: {
			_: function ( settings, host, idx, buttons, page, pages ) {
				var classes = settings.oClasses;
				var lang = settings.oLanguage.oPaginate;
				var aria = settings.oLanguage.oAria.paginate || {};
				var btnDisplay, btnClass, counter=0;
	
				var attach = function( container, buttons ) {
					var i, ien, node, button;
					var clickHandler = function ( e ) {
						_fnPageChange( settings, e.data.action, true );
					};
	
					for ( i=0, ien=buttons.length ; i<ien ; i++ ) {
						button = buttons[i];
	
						if ( $.isArray( button ) ) {
							var inner = $( '<'+(button.DT_el || 'div')+'/>' )
								.appendTo( container );
							attach( inner, button );
						}
						else {
							btnDisplay = null;
							btnClass = '';
	
							switch ( button ) {
								case 'ellipsis':
									container.append('<span class="ellipsis">&#x2026;</span>');
									break;
	
								case 'first':
									btnDisplay = lang.sFirst;
									btnClass = button + (page > 0 ?
										'' : ' '+classes.sPageButtonDisabled);
									break;
	
								case 'previous':
									btnDisplay = lang.sPrevious;
									btnClass = button + (page > 0 ?
										'' : ' '+classes.sPageButtonDisabled);
									break;
	
								case 'next':
									btnDisplay = lang.sNext;
									btnClass = button + (page < pages-1 ?
										'' : ' '+classes.sPageButtonDisabled);
									break;
	
								case 'last':
									btnDisplay = lang.sLast;
									btnClass = button + (page < pages-1 ?
										'' : ' '+classes.sPageButtonDisabled);
									break;
	
								default:
									btnDisplay = button + 1;
									btnClass = page === button ?
										classes.sPageButtonActive : '';
									break;
							}
	
							if ( btnDisplay !== null ) {
								node = $('<a>', {
										'class': classes.sPageButton+' '+btnClass,
										'aria-controls': settings.sTableId,
										'aria-label': aria[ button ],
										'data-dt-idx': counter,
										'tabindex': settings.iTabIndex,
										'id': idx === 0 && typeof button === 'string' ?
											settings.sTableId +'_'+ button :
											null
									} )
									.html( btnDisplay )
									.appendTo( container );
	
								_fnBindAction(
									node, {action: button}, clickHandler
								);
	
								counter++;
							}
						}
					}
				};
	
				// IE9 throws an 'unknown error' if document.activeElement is used
				// inside an iframe or frame. Try / catch the error. Not good for
				// accessibility, but neither are frames.
				var activeEl;
	
				try {
					// Because this approach is destroying and recreating the paging
					// elements, focus is lost on the select button which is bad for
					// accessibility. So we want to restore focus once the draw has
					// completed
					activeEl = $(host).find(document.activeElement).data('dt-idx');
				}
				catch (e) {}
	
				attach( $(host).empty(), buttons );
	
				if ( activeEl !== undefined ) {
					$(host).find( '[data-dt-idx='+activeEl+']' ).focus();
				}
			}
		}
	} );
	
	
	
	// Built in type detection. See model.ext.aTypes for information about
	// what is required from this methods.
	$.extend( DataTable.ext.type.detect, [
		// Plain numbers - first since V8 detects some plain numbers as dates
		// e.g. Date.parse('55') (but not all, e.g. Date.parse('22')...).
		function ( d, settings )
		{
			var decimal = settings.oLanguage.sDecimal;
			return _isNumber( d, decimal ) ? 'num'+decimal : null;
		},
	
		// Dates (only those recognised by the browser's Date.parse)
		function ( d, settings )
		{
			// V8 tries _very_ hard to make a string passed into `Date.parse()`
			// valid, so we need to use a regex to restrict date formats. Use a
			// plug-in for anything other than ISO8601 style strings
			if ( d && !(d instanceof Date) && ! _re_date.test(d) ) {
				return null;
			}
			var parsed = Date.parse(d);
			return (parsed !== null && !isNaN(parsed)) || _empty(d) ? 'date' : null;
		},
	
		// Formatted numbers
		function ( d, settings )
		{
			var decimal = settings.oLanguage.sDecimal;
			return _isNumber( d, decimal, true ) ? 'num-fmt'+decimal : null;
		},
	
		// HTML numeric
		function ( d, settings )
		{
			var decimal = settings.oLanguage.sDecimal;
			return _htmlNumeric( d, decimal ) ? 'html-num'+decimal : null;
		},
	
		// HTML numeric, formatted
		function ( d, settings )
		{
			var decimal = settings.oLanguage.sDecimal;
			return _htmlNumeric( d, decimal, true ) ? 'html-num-fmt'+decimal : null;
		},
	
		// HTML (this is strict checking - there must be html)
		function ( d, settings )
		{
			return _empty( d ) || (typeof d === 'string' && d.indexOf('<') !== -1) ?
				'html' : null;
		}
	] );
	
	
	
	// Filter formatting functions. See model.ext.ofnSearch for information about
	// what is required from these methods.
	// 
	// Note that additional search methods are added for the html numbers and
	// html formatted numbers by `_addNumericSort()` when we know what the decimal
	// place is
	
	
	$.extend( DataTable.ext.type.search, {
		html: function ( data ) {
			return _empty(data) ?
				data :
				typeof data === 'string' ?
					data
						.replace( _re_new_lines, " " )
						.replace( _re_html, "" ) :
					'';
		},
	
		string: function ( data ) {
			return _empty(data) ?
				data :
				typeof data === 'string' ?
					data.replace( _re_new_lines, " " ) :
					data;
		}
	} );
	
	
	
	var __numericReplace = function ( d, decimalPlace, re1, re2 ) {
		if ( d !== 0 && (!d || d === '-') ) {
			return -Infinity;
		}
	
		// If a decimal place other than `.` is used, it needs to be given to the
		// function so we can detect it and replace with a `.` which is the only
		// decimal place Javascript recognises - it is not locale aware.
		if ( decimalPlace ) {
			d = _numToDecimal( d, decimalPlace );
		}
	
		if ( d.replace ) {
			if ( re1 ) {
				d = d.replace( re1, '' );
			}
	
			if ( re2 ) {
				d = d.replace( re2, '' );
			}
		}
	
		return d * 1;
	};
	
	
	// Add the numeric 'deformatting' functions for sorting and search. This is done
	// in a function to provide an easy ability for the language options to add
	// additional methods if a non-period decimal place is used.
	function _addNumericSort ( decimalPlace ) {
		$.each(
			{
				// Plain numbers
				"num": function ( d ) {
					return __numericReplace( d, decimalPlace );
				},
	
				// Formatted numbers
				"num-fmt": function ( d ) {
					return __numericReplace( d, decimalPlace, _re_formatted_numeric );
				},
	
				// HTML numeric
				"html-num": function ( d ) {
					return __numericReplace( d, decimalPlace, _re_html );
				},
	
				// HTML numeric, formatted
				"html-num-fmt": function ( d ) {
					return __numericReplace( d, decimalPlace, _re_html, _re_formatted_numeric );
				}
			},
			function ( key, fn ) {
				// Add the ordering method
				_ext.type.order[ key+decimalPlace+'-pre' ] = fn;
	
				// For HTML types add a search formatter that will strip the HTML
				if ( key.match(/^html\-/) ) {
					_ext.type.search[ key+decimalPlace ] = _ext.type.search.html;
				}
			}
		);
	}
	
	
	// Default sort methods
	$.extend( _ext.type.order, {
		// Dates
		"date-pre": function ( d ) {
			return Date.parse( d ) || -Infinity;
		},
	
		// html
		"html-pre": function ( a ) {
			return _empty(a) ?
				'' :
				a.replace ?
					a.replace( /<.*?>/g, "" ).toLowerCase() :
					a+'';
		},
	
		// string
		"string-pre": function ( a ) {
			// This is a little complex, but faster than always calling toString,
			// http://jsperf.com/tostring-v-check
			return _empty(a) ?
				'' :
				typeof a === 'string' ?
					a.toLowerCase() :
					! a.toString ?
						'' :
						a.toString();
		},
	
		// string-asc and -desc are retained only for compatibility with the old
		// sort methods
		"string-asc": function ( x, y ) {
			return ((x < y) ? -1 : ((x > y) ? 1 : 0));
		},
	
		"string-desc": function ( x, y ) {
			return ((x < y) ? 1 : ((x > y) ? -1 : 0));
		}
	} );
	
	
	// Numeric sorting types - order doesn't matter here
	_addNumericSort( '' );
	
	
	$.extend( true, DataTable.ext.renderer, {
		header: {
			_: function ( settings, cell, column, classes ) {
				// No additional mark-up required
				// Attach a sort listener to update on sort - note that using the
				// `DT` namespace will allow the event to be removed automatically
				// on destroy, while the `dt` namespaced event is the one we are
				// listening for
				$(settings.nTable).on( 'order.dt.DT', function ( e, ctx, sorting, columns ) {
					if ( settings !== ctx ) { // need to check this this is the host
						return;               // table, not a nested one
					}
	
					var colIdx = column.idx;
	
					cell
						.removeClass(
							column.sSortingClass +' '+
							classes.sSortAsc +' '+
							classes.sSortDesc
						)
						.addClass( columns[ colIdx ] == 'asc' ?
							classes.sSortAsc : columns[ colIdx ] == 'desc' ?
								classes.sSortDesc :
								column.sSortingClass
						);
				} );
			},
	
			jqueryui: function ( settings, cell, column, classes ) {
				$('<div/>')
					.addClass( classes.sSortJUIWrapper )
					.append( cell.contents() )
					.append( $('<span/>')
						.addClass( classes.sSortIcon+' '+column.sSortingClassJUI )
					)
					.appendTo( cell );
	
				// Attach a sort listener to update on sort
				$(settings.nTable).on( 'order.dt.DT', function ( e, ctx, sorting, columns ) {
					if ( settings !== ctx ) {
						return;
					}
	
					var colIdx = column.idx;
	
					cell
						.removeClass( classes.sSortAsc +" "+classes.sSortDesc )
						.addClass( columns[ colIdx ] == 'asc' ?
							classes.sSortAsc : columns[ colIdx ] == 'desc' ?
								classes.sSortDesc :
								column.sSortingClass
						);
	
					cell
						.find( 'span.'+classes.sSortIcon )
						.removeClass(
							classes.sSortJUIAsc +" "+
							classes.sSortJUIDesc +" "+
							classes.sSortJUI +" "+
							classes.sSortJUIAscAllowed +" "+
							classes.sSortJUIDescAllowed
						)
						.addClass( columns[ colIdx ] == 'asc' ?
							classes.sSortJUIAsc : columns[ colIdx ] == 'desc' ?
								classes.sSortJUIDesc :
								column.sSortingClassJUI
						);
				} );
			}
		}
	} );
	
	/*
	 * Public helper functions. These aren't used internally by DataTables, or
	 * called by any of the options passed into DataTables, but they can be used
	 * externally by developers working with DataTables. They are helper functions
	 * to make working with DataTables a little bit easier.
	 */
	
	var __htmlEscapeEntities = function ( d ) {
		return typeof d === 'string' ?
			d.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;') :
			d;
	};
	
	/**
	 * Helpers for `columns.render`.
	 *
	 * The options defined here can be used with the `columns.render` initialisation
	 * option to provide a display renderer. The following functions are defined:
	 *
	 * * `number` - Will format numeric data (defined by `columns.data`) for
	 *   display, retaining the original unformatted data for sorting and filtering.
	 *   It takes 5 parameters:
	 *   * `string` - Thousands grouping separator
	 *   * `string` - Decimal point indicator
	 *   * `integer` - Number of decimal points to show
	 *   * `string` (optional) - Prefix.
	 *   * `string` (optional) - Postfix (/suffix).
	 * * `text` - Escape HTML to help prevent XSS attacks. It has no optional
	 *   parameters.
	 *
	 * @example
	 *   // Column definition using the number renderer
	 *   {
	 *     data: "salary",
	 *     render: $.fn.dataTable.render.number( '\'', '.', 0, '$' )
	 *   }
	 *
	 * @namespace
	 */
	DataTable.render = {
		number: function ( thousands, decimal, precision, prefix, postfix ) {
			return {
				display: function ( d ) {
					if ( typeof d !== 'number' && typeof d !== 'string' ) {
						return d;
					}
	
					var negative = d < 0 ? '-' : '';
					var flo = parseFloat( d );
	
					// If NaN then there isn't much formatting that we can do - just
					// return immediately, escaping any HTML (this was supposed to
					// be a number after all)
					if ( isNaN( flo ) ) {
						return __htmlEscapeEntities( d );
					}
	
					flo = flo.toFixed( precision );
					d = Math.abs( flo );
	
					var intPart = parseInt( d, 10 );
					var floatPart = precision ?
						decimal+(d - intPart).toFixed( precision ).substring( 2 ):
						'';
	
					return negative + (prefix||'') +
						intPart.toString().replace(
							/\B(?=(\d{3})+(?!\d))/g, thousands
						) +
						floatPart +
						(postfix||'');
				}
			};
		},
	
		text: function () {
			return {
				display: __htmlEscapeEntities
			};
		}
	};
	
	
	/*
	 * This is really a good bit rubbish this method of exposing the internal methods
	 * publicly... - To be fixed in 2.0 using methods on the prototype
	 */
	
	
	/**
	 * Create a wrapper function for exporting an internal functions to an external API.
	 *  @param {string} fn API function name
	 *  @returns {function} wrapped function
	 *  @memberof DataTable#internal
	 */
	function _fnExternApiFunc (fn)
	{
		return function() {
			var args = [_fnSettingsFromNode( this[DataTable.ext.iApiIndex] )].concat(
				Array.prototype.slice.call(arguments)
			);
			return DataTable.ext.internal[fn].apply( this, args );
		};
	}
	
	
	/**
	 * Reference to internal functions for use by plug-in developers. Note that
	 * these methods are references to internal functions and are considered to be
	 * private. If you use these methods, be aware that they are liable to change
	 * between versions.
	 *  @namespace
	 */
	$.extend( DataTable.ext.internal, {
		_fnExternApiFunc: _fnExternApiFunc,
		_fnBuildAjax: _fnBuildAjax,
		_fnAjaxUpdate: _fnAjaxUpdate,
		_fnAjaxParameters: _fnAjaxParameters,
		_fnAjaxUpdateDraw: _fnAjaxUpdateDraw,
		_fnAjaxDataSrc: _fnAjaxDataSrc,
		_fnAddColumn: _fnAddColumn,
		_fnColumnOptions: _fnColumnOptions,
		_fnAdjustColumnSizing: _fnAdjustColumnSizing,
		_fnVisibleToColumnIndex: _fnVisibleToColumnIndex,
		_fnColumnIndexToVisible: _fnColumnIndexToVisible,
		_fnVisbleColumns: _fnVisbleColumns,
		_fnGetColumns: _fnGetColumns,
		_fnColumnTypes: _fnColumnTypes,
		_fnApplyColumnDefs: _fnApplyColumnDefs,
		_fnHungarianMap: _fnHungarianMap,
		_fnCamelToHungarian: _fnCamelToHungarian,
		_fnLanguageCompat: _fnLanguageCompat,
		_fnBrowserDetect: _fnBrowserDetect,
		_fnAddData: _fnAddData,
		_fnAddTr: _fnAddTr,
		_fnNodeToDataIndex: _fnNodeToDataIndex,
		_fnNodeToColumnIndex: _fnNodeToColumnIndex,
		_fnGetCellData: _fnGetCellData,
		_fnSetCellData: _fnSetCellData,
		_fnSplitObjNotation: _fnSplitObjNotation,
		_fnGetObjectDataFn: _fnGetObjectDataFn,
		_fnSetObjectDataFn: _fnSetObjectDataFn,
		_fnGetDataMaster: _fnGetDataMaster,
		_fnClearTable: _fnClearTable,
		_fnDeleteIndex: _fnDeleteIndex,
		_fnInvalidate: _fnInvalidate,
		_fnGetRowElements: _fnGetRowElements,
		_fnCreateTr: _fnCreateTr,
		_fnBuildHead: _fnBuildHead,
		_fnDrawHead: _fnDrawHead,
		_fnDraw: _fnDraw,
		_fnReDraw: _fnReDraw,
		_fnAddOptionsHtml: _fnAddOptionsHtml,
		_fnDetectHeader: _fnDetectHeader,
		_fnGetUniqueThs: _fnGetUniqueThs,
		_fnFeatureHtmlFilter: _fnFeatureHtmlFilter,
		_fnFilterComplete: _fnFilterComplete,
		_fnFilterCustom: _fnFilterCustom,
		_fnFilterColumn: _fnFilterColumn,
		_fnFilter: _fnFilter,
		_fnFilterCreateSearch: _fnFilterCreateSearch,
		_fnEscapeRegex: _fnEscapeRegex,
		_fnFilterData: _fnFilterData,
		_fnFeatureHtmlInfo: _fnFeatureHtmlInfo,
		_fnUpdateInfo: _fnUpdateInfo,
		_fnInfoMacros: _fnInfoMacros,
		_fnInitialise: _fnInitialise,
		_fnInitComplete: _fnInitComplete,
		_fnLengthChange: _fnLengthChange,
		_fnFeatureHtmlLength: _fnFeatureHtmlLength,
		_fnFeatureHtmlPaginate: _fnFeatureHtmlPaginate,
		_fnPageChange: _fnPageChange,
		_fnFeatureHtmlProcessing: _fnFeatureHtmlProcessing,
		_fnProcessingDisplay: _fnProcessingDisplay,
		_fnFeatureHtmlTable: _fnFeatureHtmlTable,
		_fnScrollDraw: _fnScrollDraw,
		_fnApplyToChildren: _fnApplyToChildren,
		_fnCalculateColumnWidths: _fnCalculateColumnWidths,
		_fnThrottle: _fnThrottle,
		_fnConvertToWidth: _fnConvertToWidth,
		_fnGetWidestNode: _fnGetWidestNode,
		_fnGetMaxLenString: _fnGetMaxLenString,
		_fnStringToCss: _fnStringToCss,
		_fnSortFlatten: _fnSortFlatten,
		_fnSort: _fnSort,
		_fnSortAria: _fnSortAria,
		_fnSortListener: _fnSortListener,
		_fnSortAttachListener: _fnSortAttachListener,
		_fnSortingClasses: _fnSortingClasses,
		_fnSortData: _fnSortData,
		_fnSaveState: _fnSaveState,
		_fnLoadState: _fnLoadState,
		_fnSettingsFromNode: _fnSettingsFromNode,
		_fnLog: _fnLog,
		_fnMap: _fnMap,
		_fnBindAction: _fnBindAction,
		_fnCallbackReg: _fnCallbackReg,
		_fnCallbackFire: _fnCallbackFire,
		_fnLengthOverflow: _fnLengthOverflow,
		_fnRenderer: _fnRenderer,
		_fnDataSource: _fnDataSource,
		_fnRowAttributes: _fnRowAttributes,
		_fnCalculateEnd: function () {} // Used by a lot of plug-ins, but redundant
		                                // in 1.10, so this dead-end function is
		                                // added to prevent errors
	} );
	

	// jQuery access
	$.fn.dataTable = DataTable;

	// Provide access to the host jQuery object (circular reference)
	DataTable.$ = $;

	// Legacy aliases
	$.fn.dataTableSettings = DataTable.settings;
	$.fn.dataTableExt = DataTable.ext;

	// With a capital `D` we return a DataTables API instance rather than a
	// jQuery object
	$.fn.DataTable = function ( opts ) {
		return $(this).dataTable( opts ).api();
	};

	// All properties that are available to $.fn.dataTable should also be
	// available on $.fn.DataTable
	$.each( DataTable, function ( prop, val ) {
		$.fn.DataTable[ prop ] = val;
	} );


	// Information about events fired by DataTables - for documentation.
	/**
	 * Draw event, fired whenever the table is redrawn on the page, at the same
	 * point as fnDrawCallback. This may be useful for binding events or
	 * performing calculations when the table is altered at all.
	 *  @name DataTable#draw.dt
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}
	 */

	/**
	 * Search event, fired when the searching applied to the table (using the
	 * built-in global search, or column filters) is altered.
	 *  @name DataTable#search.dt
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}
	 */

	/**
	 * Page change event, fired when the paging of the table is altered.
	 *  @name DataTable#page.dt
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}
	 */

	/**
	 * Order event, fired when the ordering applied to the table is altered.
	 *  @name DataTable#order.dt
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}
	 */

	/**
	 * DataTables initialisation complete event, fired when the table is fully
	 * drawn, including Ajax data loaded, if Ajax data is required.
	 *  @name DataTable#init.dt
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} oSettings DataTables settings object
	 *  @param {object} json The JSON object request from the server - only
	 *    present if client-side Ajax sourced data is used</li></ol>
	 */

	/**
	 * State save event, fired when the table has changed state a new state save
	 * is required. This event allows modification of the state saving object
	 * prior to actually doing the save, including addition or other state
	 * properties (for plug-ins) or modification of a DataTables core property.
	 *  @name DataTable#stateSaveParams.dt
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} oSettings DataTables settings object
	 *  @param {object} json The state information to be saved
	 */

	/**
	 * State load event, fired when the table is loading state from the stored
	 * data, but prior to the settings object being modified by the saved state
	 * - allowing modification of the saved state is required or loading of
	 * state for a plug-in.
	 *  @name DataTable#stateLoadParams.dt
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} oSettings DataTables settings object
	 *  @param {object} json The saved state information
	 */

	/**
	 * State loaded event, fired when state has been loaded from stored data and
	 * the settings object has been modified by the loaded data.
	 *  @name DataTable#stateLoaded.dt
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} oSettings DataTables settings object
	 *  @param {object} json The saved state information
	 */

	/**
	 * Processing event, fired when DataTables is doing some kind of processing
	 * (be it, order, searcg or anything else). It can be used to indicate to
	 * the end user that there is something happening, or that something has
	 * finished.
	 *  @name DataTable#processing.dt
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} oSettings DataTables settings object
	 *  @param {boolean} bShow Flag for if DataTables is doing processing or not
	 */

	/**
	 * Ajax (XHR) event, fired whenever an Ajax request is completed from a
	 * request to made to the server for new data. This event is called before
	 * DataTables processed the returned data, so it can also be used to pre-
	 * process the data returned from the server, if needed.
	 *
	 * Note that this trigger is called in `fnServerData`, if you override
	 * `fnServerData` and which to use this event, you need to trigger it in you
	 * success function.
	 *  @name DataTable#xhr.dt
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}
	 *  @param {object} json JSON returned from the server
	 *
	 *  @example
	 *     // Use a custom property returned from the server in another DOM element
	 *     $('#table').dataTable().on('xhr.dt', function (e, settings, json) {
	 *       $('#status').html( json.status );
	 *     } );
	 *
	 *  @example
	 *     // Pre-process the data returned from the server
	 *     $('#table').dataTable().on('xhr.dt', function (e, settings, json) {
	 *       for ( var i=0, ien=json.aaData.length ; i<ien ; i++ ) {
	 *         json.aaData[i].sum = json.aaData[i].one + json.aaData[i].two;
	 *       }
	 *       // Note no return - manipulate the data directly in the JSON object.
	 *     } );
	 */

	/**
	 * Destroy event, fired when the DataTable is destroyed by calling fnDestroy
	 * or passing the bDestroy:true parameter in the initialisation object. This
	 * can be used to remove bound events, added DOM nodes, etc.
	 *  @name DataTable#destroy.dt
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}
	 */

	/**
	 * Page length change event, fired when number of records to show on each
	 * page (the length) is changed.
	 *  @name DataTable#length.dt
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}
	 *  @param {integer} len New length
	 */

	/**
	 * Column sizing has changed.
	 *  @name DataTable#column-sizing.dt
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}
	 */

	/**
	 * Column visibility has changed.
	 *  @name DataTable#column-visibility.dt
	 *  @event
	 *  @param {event} e jQuery event object
	 *  @param {object} o DataTables settings object {@link DataTable.models.oSettings}
	 *  @param {int} column Column index
	 *  @param {bool} vis `false` if column now hidden, or `true` if visible
	 */

	return $.fn.dataTable;
}));

/*! DataTables Bootstrap 3 integration
 * ©2011-2015 SpryMedia Ltd - datatables.net/license
 */

/**
 * DataTables integration for Bootstrap 3. This requires Bootstrap 3 and
 * DataTables 1.10 or newer.
 *
 * This file sets the defaults and adds options to DataTables to style its
 * controls using Bootstrap. See http://datatables.net/manual/styling/bootstrap
 * for further information.
 */
(function( factory ){
	if ( typeof define === 'function' && define.amd ) {
		// AMD
		define( ['jquery', 'datatables.net'], function ( $ ) {
			return factory( $, window, document );
		} );
	}
	else if ( typeof exports === 'object' ) {
		// CommonJS
		module.exports = function (root, $) {
			if ( ! root ) {
				root = window;
			}

			if ( ! $ || ! $.fn.dataTable ) {
				// Require DataTables, which attaches to jQuery, including
				// jQuery if needed and have a $ property so we can access the
				// jQuery object that is used
				$ = require('datatables.net')(root, $).$;
			}

			return factory( $, root, root.document );
		};
	}
	else {
		// Browser
		factory( jQuery, window, document );
	}
}(function( $, window, document, undefined ) {
'use strict';
var DataTable = $.fn.dataTable;


/* Set the defaults for DataTables initialisation */
$.extend( true, DataTable.defaults, {
	dom:
		"<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'f>>" +
		"<'row'<'col-sm-12'tr>>" +
		"<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
	renderer: 'bootstrap'
} );


/* Default class modification */
$.extend( DataTable.ext.classes, {
	sWrapper:      "dataTables_wrapper container-fluid dt-bootstrap4",
	sFilterInput:  "form-control form-control-sm",
	sLengthSelect: "form-control form-control-sm",
	sProcessing:   "dataTables_processing card",
	sPageButton:   "paginate_button page-item"
} );


/* Bootstrap paging button renderer */
DataTable.ext.renderer.pageButton.bootstrap = function ( settings, host, idx, buttons, page, pages ) {
	var api     = new DataTable.Api( settings );
	var classes = settings.oClasses;
	var lang    = settings.oLanguage.oPaginate;
	var aria = settings.oLanguage.oAria.paginate || {};
	var btnDisplay, btnClass, counter=0;

	var attach = function( container, buttons ) {
		var i, ien, node, button;
		var clickHandler = function ( e ) {
			e.preventDefault();
			if ( !$(e.currentTarget).hasClass('disabled') && api.page() != e.data.action ) {
				api.page( e.data.action ).draw( 'page' );
			}
		};

		for ( i=0, ien=buttons.length ; i<ien ; i++ ) {
			button = buttons[i];

			if ( $.isArray( button ) ) {
				attach( container, button );
			}
			else {
				btnDisplay = '';
				btnClass = '';

				switch ( button ) {
					case 'ellipsis':
						btnDisplay = '&#x2026;';
						btnClass = 'disabled';
						break;

					case 'first':
						btnDisplay = lang.sFirst;
						btnClass = button + (page > 0 ?
							'' : ' disabled');
						break;

					case 'previous':
						btnDisplay = lang.sPrevious;
						btnClass = button + (page > 0 ?
							'' : ' disabled');
						break;

					case 'next':
						btnDisplay = lang.sNext;
						btnClass = button + (page < pages-1 ?
							'' : ' disabled');
						break;

					case 'last':
						btnDisplay = lang.sLast;
						btnClass = button + (page < pages-1 ?
							'' : ' disabled');
						break;

					default:
						btnDisplay = button + 1;
						btnClass = page === button ?
							'active' : '';
						break;
				}

				if ( btnDisplay ) {
					node = $('<li>', {
							'class': classes.sPageButton+' '+btnClass,
							'id': idx === 0 && typeof button === 'string' ?
								settings.sTableId +'_'+ button :
								null
						} )
						.append( $('<a>', {
								'href': '#',
								'aria-controls': settings.sTableId,
								'aria-label': aria[ button ],
								'data-dt-idx': counter,
								'tabindex': settings.iTabIndex,
								'class': 'page-link'
							} )
							.html( btnDisplay )
						)
						.appendTo( container );

					settings.oApi._fnBindAction(
						node, {action: button}, clickHandler
					);

					counter++;
				}
			}
		}
	};

	// IE9 throws an 'unknown error' if document.activeElement is used
	// inside an iframe or frame. 
	var activeEl;

	try {
		// Because this approach is destroying and recreating the paging
		// elements, focus is lost on the select button which is bad for
		// accessibility. So we want to restore focus once the draw has
		// completed
		activeEl = $(host).find(document.activeElement).data('dt-idx');
	}
	catch (e) {}

	attach(
		$(host).empty().html('<ul class="pagination"/>').children('ul'),
		buttons
	);

	if ( activeEl !== undefined ) {
		$(host).find( '[data-dt-idx='+activeEl+']' ).focus();
	}
};


return DataTable;
}));

