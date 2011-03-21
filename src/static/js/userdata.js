/* ***** BEGIN LICENSE BLOCK *****
 * Version: MPL 1.1/GPL 2.0/LGPL 2.1
 *
 * The contents of this file are subject to the Mozilla Public License Version
 * 1.1 (the "License"); you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 * http://www.mozilla.org/MPL/
 *
 * Software distributed under the License is distributed on an "AS IS" basis,
 * WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License
 * for the specific language governing rights and limitations under the
 * License.
 *
 * The Original Code is userdata.js
 *
 * The Initial Developer of the Original Code is Mozilla.
 * Portions created by the Initial Developer are Copyright (C) 2011
 * the Initial Developer. All Rights Reserved.
 *
 * Contributor(s):
 *  Michael Hanson <mhanson@mozilla.com>
 *
 * Alternatively, the contents of this file may be used under the terms of
 * either the GNU General Public License Version 2 or later (the "GPL"), or
 * the GNU Lesser General Public License Version 2.1 or later (the "LGPL"),
 * in which case the provisions of the GPL or the LGPL are applicable instead
 * of those above. If you wish to allow use of your version of this file only
 * under the terms of either the GPL or the LGPL, and not to allow others to
 * use your version of this file under the terms of the MPL, indicate your
 * decision by deleting the provisions above and replace them with the notice
 * and other provisions required by the GPL or the LGPL. If you do not delete
 * the provisions above, a recipient may use your version of this file under
 * the terms of any one of the MPL, the GPL or the LGPL.
 *
 * ***** END LICENSE BLOCK ***** */

// Array Remove - By John Resig (MIT Licensed)
Array.prototype.remove = function(from, to) {
  var rest = this.slice((to || from) + 1 || this.length);
  this.length = from < 0 ? this.length + from : from;
  return this.push.apply(this, rest);
};
// Underscore.js 1.1.4
// (c) 2011 Jeremy Ashkenas, DocumentCloud Inc.
// Underscore is freely distributable under the MIT license.
// Portions of Underscore are inspired or borrowed from Prototype,
// Oliver Steele's Functional, and John Resig's Micro-Templating.
// For all details and documentation:
// http://documentcloud.github.com/underscore
(function(){var q=this,C=q._,m={},j=Array.prototype,n=Object.prototype,i=j.slice,D=j.unshift,E=n.toString,o=n.hasOwnProperty,s=j.forEach,t=j.map,u=j.reduce,v=j.reduceRight,w=j.filter,x=j.every,y=j.some,p=j.indexOf,z=j.lastIndexOf;n=Array.isArray;var F=Object.keys,c=function(a){return new l(a)};if(typeof module!=="undefined"&&module.exports){module.exports=c;c._=c}else q._=c;c.VERSION="1.1.4";var k=c.each=c.forEach=function(a,b,d){if(a!=null)if(s&&a.forEach===s)a.forEach(b,d);else if(c.isNumber(a.length))for(var e=
0,f=a.length;e<f;e++){if(b.call(d,a[e],e,a)===m)break}else for(e in a)if(o.call(a,e))if(b.call(d,a[e],e,a)===m)break};c.map=function(a,b,d){var e=[];if(a==null)return e;if(t&&a.map===t)return a.map(b,d);k(a,function(f,g,h){e[e.length]=b.call(d,f,g,h)});return e};c.reduce=c.foldl=c.inject=function(a,b,d,e){var f=d!==void 0;if(a==null)a=[];if(u&&a.reduce===u){if(e)b=c.bind(b,e);return f?a.reduce(b,d):a.reduce(b)}k(a,function(g,h,G){if(!f&&h===0){d=g;f=true}else d=b.call(e,d,g,h,G)});if(!f)throw new TypeError("Reduce of empty array with no initial value");
return d};c.reduceRight=c.foldr=function(a,b,d,e){if(a==null)a=[];if(v&&a.reduceRight===v){if(e)b=c.bind(b,e);return d!==void 0?a.reduceRight(b,d):a.reduceRight(b)}a=(c.isArray(a)?a.slice():c.toArray(a)).reverse();return c.reduce(a,b,d,e)};c.find=c.detect=function(a,b,d){var e;A(a,function(f,g,h){if(b.call(d,f,g,h)){e=f;return true}});return e};c.filter=c.select=function(a,b,d){var e=[];if(a==null)return e;if(w&&a.filter===w)return a.filter(b,d);k(a,function(f,g,h){if(b.call(d,f,g,h))e[e.length]=
f});return e};c.reject=function(a,b,d){var e=[];if(a==null)return e;k(a,function(f,g,h){b.call(d,f,g,h)||(e[e.length]=f)});return e};c.every=c.all=function(a,b,d){b=b||c.identity;var e=true;if(a==null)return e;if(x&&a.every===x)return a.every(b,d);k(a,function(f,g,h){if(!(e=e&&b.call(d,f,g,h)))return m});return e};var A=c.some=c.any=function(a,b,d){b=b||c.identity;var e=false;if(a==null)return e;if(y&&a.some===y)return a.some(b,d);k(a,function(f,g,h){if(e=b.call(d,f,g,h))return m});return e};c.include=
c.contains=function(a,b){var d=false;if(a==null)return d;if(p&&a.indexOf===p)return a.indexOf(b)!=-1;A(a,function(e){if(d=e===b)return true});return d};c.invoke=function(a,b){var d=i.call(arguments,2);return c.map(a,function(e){return(b?e[b]:e).apply(e,d)})};c.pluck=function(a,b){return c.map(a,function(d){return d[b]})};c.max=function(a,b,d){if(!b&&c.isArray(a))return Math.max.apply(Math,a);var e={computed:-Infinity};k(a,function(f,g,h){g=b?b.call(d,f,g,h):f;g>=e.computed&&(e={value:f,computed:g})});
return e.value};c.min=function(a,b,d){if(!b&&c.isArray(a))return Math.min.apply(Math,a);var e={computed:Infinity};k(a,function(f,g,h){g=b?b.call(d,f,g,h):f;g<e.computed&&(e={value:f,computed:g})});return e.value};c.sortBy=function(a,b,d){return c.pluck(c.map(a,function(e,f,g){return{value:e,criteria:b.call(d,e,f,g)}}).sort(function(e,f){var g=e.criteria,h=f.criteria;return g<h?-1:g>h?1:0}),"value")};c.sortedIndex=function(a,b,d){d=d||c.identity;for(var e=0,f=a.length;e<f;){var g=e+f>>1;d(a[g])<d(b)?
e=g+1:f=g}return e};c.toArray=function(a){if(!a)return[];if(a.toArray)return a.toArray();if(c.isArray(a))return a;if(c.isArguments(a))return i.call(a);return c.values(a)};c.size=function(a){return c.toArray(a).length};c.first=c.head=function(a,b,d){return b&&!d?i.call(a,0,b):a[0]};c.rest=c.tail=function(a,b,d){return i.call(a,c.isUndefined(b)||d?1:b)};c.last=function(a){return a[a.length-1]};c.compact=function(a){return c.filter(a,function(b){return!!b})};c.flatten=function(a){return c.reduce(a,function(b,
d){if(c.isArray(d))return b.concat(c.flatten(d));b[b.length]=d;return b},[])};c.without=function(a){var b=i.call(arguments,1);return c.filter(a,function(d){return!c.include(b,d)})};c.uniq=c.unique=function(a,b){return c.reduce(a,function(d,e,f){if(0==f||(b===true?c.last(d)!=e:!c.include(d,e)))d[d.length]=e;return d},[])};c.intersect=function(a){var b=i.call(arguments,1);return c.filter(c.uniq(a),function(d){return c.every(b,function(e){return c.indexOf(e,d)>=0})})};c.zip=function(){for(var a=i.call(arguments),
b=c.max(c.pluck(a,"length")),d=Array(b),e=0;e<b;e++)d[e]=c.pluck(a,""+e);return d};c.indexOf=function(a,b,d){if(a==null)return-1;if(d){d=c.sortedIndex(a,b);return a[d]===b?d:-1}if(p&&a.indexOf===p)return a.indexOf(b);d=0;for(var e=a.length;d<e;d++)if(a[d]===b)return d;return-1};c.lastIndexOf=function(a,b){if(a==null)return-1;if(z&&a.lastIndexOf===z)return a.lastIndexOf(b);for(var d=a.length;d--;)if(a[d]===b)return d;return-1};c.range=function(a,b,d){var e=i.call(arguments),f=e.length<=1;a=f?0:e[0];
b=f?e[0]:e[1];d=e[2]||1;e=Math.max(Math.ceil((b-a)/d),0);f=0;for(var g=Array(e);f<e;){g[f++]=a;a+=d}return g};c.bind=function(a,b){var d=i.call(arguments,2);return function(){return a.apply(b||{},d.concat(i.call(arguments)))}};c.bindAll=function(a){var b=i.call(arguments,1);if(b.length==0)b=c.functions(a);k(b,function(d){a[d]=c.bind(a[d],a)});return a};c.memoize=function(a,b){var d={};b=b||c.identity;return function(){var e=b.apply(this,arguments);return e in d?d[e]:d[e]=a.apply(this,arguments)}};
c.delay=function(a,b){var d=i.call(arguments,2);return setTimeout(function(){return a.apply(a,d)},b)};c.defer=function(a){return c.delay.apply(c,[a,1].concat(i.call(arguments,1)))};var B=function(a,b,d){var e;return function(){var f=this,g=arguments,h=function(){e=null;a.apply(f,g)};d&&clearTimeout(e);if(d||!e)e=setTimeout(h,b)}};c.throttle=function(a,b){return B(a,b,false)};c.debounce=function(a,b){return B(a,b,true)};c.wrap=function(a,b){return function(){var d=[a].concat(i.call(arguments));return b.apply(this,
d)}};c.compose=function(){var a=i.call(arguments);return function(){for(var b=i.call(arguments),d=a.length-1;d>=0;d--)b=[a[d].apply(this,b)];return b[0]}};c.keys=F||function(a){if(c.isArray(a))return c.range(0,a.length);var b=[],d;for(d in a)if(o.call(a,d))b[b.length]=d;return b};c.values=function(a){return c.map(a,c.identity)};c.functions=c.methods=function(a){return c.filter(c.keys(a),function(b){return c.isFunction(a[b])}).sort()};c.extend=function(a){k(i.call(arguments,1),function(b){for(var d in b)a[d]=
b[d]});return a};c.clone=function(a){return c.isArray(a)?a.slice():c.extend({},a)};c.tap=function(a,b){b(a);return a};c.isEqual=function(a,b){if(a===b)return true;var d=typeof a;if(d!=typeof b)return false;if(a==b)return true;if(!a&&b||a&&!b)return false;if(a._chain)a=a._wrapped;if(b._chain)b=b._wrapped;if(a.isEqual)return a.isEqual(b);if(c.isDate(a)&&c.isDate(b))return a.getTime()===b.getTime();if(c.isNaN(a)&&c.isNaN(b))return false;if(c.isRegExp(a)&&c.isRegExp(b))return a.source===b.source&&a.global===
b.global&&a.ignoreCase===b.ignoreCase&&a.multiline===b.multiline;if(d!=="object")return false;if(a.length&&a.length!==b.length)return false;d=c.keys(a);var e=c.keys(b);if(d.length!=e.length)return false;for(var f in a)if(!(f in b)||!c.isEqual(a[f],b[f]))return false;return true};c.isEmpty=function(a){if(c.isArray(a)||c.isString(a))return a.length===0;for(var b in a)if(o.call(a,b))return false;return true};c.isElement=function(a){return!!(a&&a.nodeType==1)};c.isArray=n||function(a){return E.call(a)===
"[object Array]"};c.isArguments=function(a){return!!(a&&o.call(a,"callee"))};c.isFunction=function(a){return!!(a&&a.constructor&&a.call&&a.apply)};c.isString=function(a){return!!(a===""||a&&a.charCodeAt&&a.substr)};c.isNumber=function(a){return!!(a===0||a&&a.toExponential&&a.toFixed)};c.isNaN=function(a){return a!==a};c.isBoolean=function(a){return a===true||a===false};c.isDate=function(a){return!!(a&&a.getTimezoneOffset&&a.setUTCFullYear)};c.isRegExp=function(a){return!!(a&&a.test&&a.exec&&(a.ignoreCase||
a.ignoreCase===false))};c.isNull=function(a){return a===null};c.isUndefined=function(a){return a===void 0};c.noConflict=function(){q._=C;return this};c.identity=function(a){return a};c.times=function(a,b,d){for(var e=0;e<a;e++)b.call(d,e)};c.mixin=function(a){k(c.functions(a),function(b){H(b,c[b]=a[b])})};var I=0;c.uniqueId=function(a){var b=I++;return a?a+b:b};c.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g};c.template=function(a,b){var d=c.templateSettings;d="var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('"+
a.replace(/\\/g,"\\\\").replace(/'/g,"\\'").replace(d.interpolate,function(e,f){return"',"+f.replace(/\\'/g,"'")+",'"}).replace(d.evaluate||null,function(e,f){return"');"+f.replace(/\\'/g,"'").replace(/[\r\n\t]/g," ")+"__p.push('"}).replace(/\r/g,"\\r").replace(/\n/g,"\\n").replace(/\t/g,"\\t")+"');}return __p.join('');";d=new Function("obj",d);return b?d(b):d};var l=function(a){this._wrapped=a};c.prototype=l.prototype;var r=function(a,b){return b?c(a).chain():a},H=function(a,b){l.prototype[a]=function(){var d=
i.call(arguments);D.call(d,this._wrapped);return r(b.apply(c,d),this._chain)}};c.mixin(c);k(["pop","push","reverse","shift","sort","splice","unshift"],function(a){var b=j[a];l.prototype[a]=function(){b.apply(this._wrapped,arguments);return r(this._wrapped,this._chain)}});k(["concat","join","slice"],function(a){var b=j[a];l.prototype[a]=function(){return r(b.apply(this._wrapped,arguments),this._chain)}});l.prototype.chain=function(){this._chain=true;return this};l.prototype.value=function(){return this._wrapped}})();
//\""


/*
 * Crypto-JS v2.0.0
 * http://code.google.com/p/crypto-js/
 * Copyright (c) 2009, Jeff Mott. All rights reserved.
 * http://code.google.com/p/crypto-js/wiki/License
 */
(function(){var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";var d=window.Crypto={};var a=d.util={rotl:function(h,g){return(h<<g)|(h>>>(32-g))},rotr:function(h,g){return(h<<(32-g))|(h>>>g)},endian:function(h){if(h.constructor==Number){return a.rotl(h,8)&16711935|a.rotl(h,24)&4278255360}for(var g=0;g<h.length;g++){h[g]=a.endian(h[g])}return h},randomBytes:function(h){for(var g=[];h>0;h--){g.push(Math.floor(Math.random()*256))}return g},bytesToWords:function(h){for(var k=[],j=0,g=0;j<h.length;j++,g+=8){k[g>>>5]|=h[j]<<(24-g%32)}return k},wordsToBytes:function(i){for(var h=[],g=0;g<i.length*32;g+=8){h.push((i[g>>>5]>>>(24-g%32))&255)}return h},bytesToHex:function(g){for(var j=[],h=0;h<g.length;h++){j.push((g[h]>>>4).toString(16));j.push((g[h]&15).toString(16))}return j.join("")},hexToBytes:function(h){for(var g=[],i=0;i<h.length;i+=2){g.push(parseInt(h.substr(i,2),16))}return g},bytesToBase64:function(h){if(typeof btoa=="function"){return btoa(e.bytesToString(h))}for(var g=[],l=0;l<h.length;l+=3){var m=(h[l]<<16)|(h[l+1]<<8)|h[l+2];for(var k=0;k<4;k++){if(l*8+k*6<=h.length*8){g.push(c.charAt((m>>>6*(3-k))&63))}else{g.push("=")}}}return g.join("")},base64ToBytes:function(h){if(typeof atob=="function"){return e.stringToBytes(atob(h))}h=h.replace(/[^A-Z0-9+\/]/ig,"");for(var g=[],j=0,k=0;j<h.length;k=++j%4){if(k==0){continue}g.push(((c.indexOf(h.charAt(j-1))&(Math.pow(2,-2*k+8)-1))<<(k*2))|(c.indexOf(h.charAt(j))>>>(6-k*2)))}return g}};d.mode={};var b=d.charenc={};var f=b.UTF8={stringToBytes:function(g){return e.stringToBytes(unescape(encodeURIComponent(g)))},bytesToString:function(g){return decodeURIComponent(escape(e.bytesToString(g)))}};var e=b.Binary={stringToBytes:function(j){for(var g=[],h=0;h<j.length;h++){g.push(j.charCodeAt(h))}return g},bytesToString:function(g){for(var j=[],h=0;h<g.length;h++){j.push(String.fromCharCode(g[h]))}return j.join("")}}})();(function(){var f=Crypto,a=f.util,b=f.charenc,e=b.UTF8,d=b.Binary;var c=f.SHA1=function(i,g){var h=a.wordsToBytes(c._sha1(i));return g&&g.asBytes?h:g&&g.asString?d.bytesToString(h):a.bytesToHex(h)};c._sha1=function(o){if(o.constructor==String){o=e.stringToBytes(o)}var v=a.bytesToWords(o),x=o.length*8,p=[],r=1732584193,q=-271733879,k=-1732584194,h=271733878,g=-1009589776;v[x>>5]|=128<<(24-x%32);v[((x+64>>>9)<<4)+15]=x;for(var z=0;z<v.length;z+=16){var E=r,D=q,C=k,B=h,A=g;for(var y=0;y<80;y++){if(y<16){p[y]=v[z+y]}else{var u=p[y-3]^p[y-8]^p[y-14]^p[y-16];p[y]=(u<<1)|(u>>>31)}var s=((r<<5)|(r>>>27))+g+(p[y]>>>0)+(y<20?(q&k|~q&h)+1518500249:y<40?(q^k^h)+1859775393:y<60?(q&k|q&h|k&h)-1894007588:(q^k^h)-899497514);g=h;h=k;k=(q<<30)|(q>>>2);q=r;r=s}r+=E;q+=D;k+=C;h+=B;g+=A}return[r,q,k,h,g]};c._blocksize=16})();(function(){var e=Crypto,a=e.util,b=e.charenc,d=b.UTF8,c=b.Binary;e.HMAC=function(l,m,k,h){if(m.constructor==String){m=d.stringToBytes(m)}if(k.constructor==String){k=d.stringToBytes(k)}if(k.length>l._blocksize*4){k=l(k,{asBytes:true})}var g=k.slice(0),n=k.slice(0);for(var j=0;j<l._blocksize*4;j++){g[j]^=92;n[j]^=54}var f=l(g.concat(l(n.concat(m),{asBytes:true})),{asBytes:true});return h&&h.asBytes?f:h&&h.asString?c.bytesToString(f):a.bytesToHex(f)}})();(function(){var e=Crypto,a=e.util,b=e.charenc,d=b.UTF8,c=b.Binary;e.PBKDF2=function(q,o,f,t){if(q.constructor==String){q=d.stringToBytes(q)}if(o.constructor==String){o=d.stringToBytes(o)}var s=t&&t.hasher||e.SHA1,k=t&&t.iterations||1;function p(i,j){return e.HMAC(s,j,i,{asBytes:true})}var h=[],g=1;while(h.length<f){var l=p(q,o.concat(a.wordsToBytes([g])));for(var r=l,n=1;n<k;n++){r=p(q,r);for(var m=0;m<l.length;m++){l[m]^=r[m]}}h=h.concat(l);g++}h.length=f;return t&&t.asBytes?h:t&&t.asString?c.bytesToString(h):a.bytesToHex(h)}})();(function(){Crypto.mode.OFB={encrypt:a,decrypt:a};function a(c,b,d){var g=c._blocksize*4,f=d.slice(0);for(var e=0;e<b.length;e++){if(e%g==0){c._encryptblock(f,0)}b[e]^=f[e%g]}}})();(function(){var l=Crypto,a=l.util,u=l.charenc,s=u.UTF8,j=u.Binary;var v=[99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22];for(var n=[],r=0;r<256;r++){n[v[r]]=r}var q=[],p=[],m=[],h=[],g=[],e=[];function f(y,x){for(var w=0,z=0;z<8;z++){if(x&1){w^=y}var A=y&128;y=(y<<1)&255;if(A){y^=27}x>>>=1}return w}for(var r=0;r<256;r++){q[r]=f(r,2);p[r]=f(r,3);m[r]=f(r,9);h[r]=f(r,11);g[r]=f(r,13);e[r]=f(r,14)}var k=[0,1,2,4,8,16,32,64,128,27,54];var c=[[],[],[],[]],d,b,t;var o=l.AES={encrypt:function(A,z,y){var i=s.stringToBytes(A),x=a.randomBytes(o._blocksize*4),w=z.constructor==String?l.PBKDF2(z,x,32,{asBytes:true}):z;mode=y&&y.mode||l.mode.OFB;o._init(w);mode.encrypt(o,i,x);return a.bytesToBase64(x.concat(i))},decrypt:function(z,y,x){var A=a.base64ToBytes(z),w=A.splice(0,o._blocksize*4),i=y.constructor==String?l.PBKDF2(y,w,32,{asBytes:true}):y;mode=x&&x.mode||l.mode.OFB;o._init(i);mode.decrypt(o,A,w);return s.bytesToString(A)},_blocksize:4,_encryptblock:function(w,x){for(var D=0;D<o._blocksize;D++){for(var i=0;i<4;i++){c[D][i]=w[x+i*4+D]}}for(var D=0;D<4;D++){for(var i=0;i<4;i++){c[D][i]^=t[i][D]}}for(var C=1;C<b;C++){for(var D=0;D<4;D++){for(var i=0;i<4;i++){c[D][i]=v[c[D][i]]}}c[1].push(c[1].shift());c[2].push(c[2].shift());c[2].push(c[2].shift());c[3].unshift(c[3].pop());for(var i=0;i<4;i++){var B=c[0][i],A=c[1][i],z=c[2][i],y=c[3][i];c[0][i]=q[B]^p[A]^z^y;c[1][i]=B^q[A]^p[z]^y;c[2][i]=B^A^q[z]^p[y];c[3][i]=p[B]^A^z^q[y]}for(var D=0;D<4;D++){for(var i=0;i<4;i++){c[D][i]^=t[C*4+i][D]}}}for(var D=0;D<4;D++){for(var i=0;i<4;i++){c[D][i]=v[c[D][i]]}}c[1].push(c[1].shift());c[2].push(c[2].shift());c[2].push(c[2].shift());c[3].unshift(c[3].pop());for(var D=0;D<4;D++){for(var i=0;i<4;i++){c[D][i]^=t[b*4+i][D]}}for(var D=0;D<o._blocksize;D++){for(var i=0;i<4;i++){w[x+i*4+D]=c[D][i]}}},_decryptblock:function(x,w){for(var D=0;D<o._blocksize;D++){for(var i=0;i<4;i++){c[D][i]=x[w+i*4+D]}}for(var D=0;D<4;D++){for(var i=0;i<4;i++){c[D][i]^=t[b*4+i][D]}}for(var C=1;C<b;C++){c[1].unshift(c[1].pop());c[2].push(c[2].shift());c[2].push(c[2].shift());c[3].push(c[3].shift());for(var D=0;D<4;D++){for(var i=0;i<4;i++){c[D][i]=n[c[D][i]]}}for(var D=0;D<4;D++){for(var i=0;i<4;i++){c[D][i]^=t[(b-C)*4+i][D]}}for(var i=0;i<4;i++){var B=c[0][i],A=c[1][i],z=c[2][i],y=c[3][i];c[0][i]=e[B]^h[A]^g[z]^m[y];c[1][i]=m[B]^e[A]^h[z]^g[y];c[2][i]=g[B]^m[A]^e[z]^h[y];c[3][i]=h[B]^g[A]^m[z]^e[y]}}c[1].unshift(c[1].pop());c[2].push(c[2].shift());c[2].push(c[2].shift());c[3].push(c[3].shift());for(var D=0;D<4;D++){for(var i=0;i<4;i++){c[D][i]=n[c[D][i]]}}for(var D=0;D<4;D++){for(var i=0;i<4;i++){c[D][i]^=t[i][D]}}for(var D=0;D<o._blocksize;D++){for(var i=0;i<4;i++){x[w+i*4+D]=c[D][i]}}},_init:function(i){d=i.length/4;b=d+6;o._keyexpansion(i)},_keyexpansion:function(w){t=[];for(var x=0;x<d;x++){t[x]=[w[x*4],w[x*4+1],w[x*4+2],w[x*4+3]]}for(var x=d;x<o._blocksize*(b+1);x++){var i=[t[x-1][0],t[x-1][1],t[x-1][2],t[x-1][3]];if(x%d==0){i.push(i.shift());i[0]=v[i[0]];i[1]=v[i[1]];i[2]=v[i[2]];i[3]=v[i[3]];i[0]^=k[x/d]}else{if(d>6&&x%d==4){i[0]=v[i[0]];i[1]=v[i[1]];i[2]=v[i[2]];i[3]=v[i[3]]}}t[x]=[t[x-d][0]^i[0],t[x-d][1]^i[1],t[x-d][2]^i[2],t[x-d][3]^i[3]]}}}})();

UserDataEncryption = (function() {
  var keyTimer = null;

  function KeyTimer(keyPhrase) {
    this.keyPhrase = keyPhrase;
    this.timeout = window.setTimeout(function() {
      self.keyPhrase = null;
      keyTimer = null;
    }, 1000 * 60 * 5); // 5 minutes
  }

  var self = {};

  self.decrypt = function(input) {
    if (keyTimer) {
      var result = Crypto.AES.decrypt(input, keyTimer.keyPhrase);  
      if (result.length > 0) {
        return JSON.parse(result);
      } else {
        return result;
      }
    } else {
      throw {msg:"No decryption key provided."};
    }
  }

  self.encrypt = function(input) {
    if (keyTimer) {
      input = JSON.stringify(input);
      return Crypto.AES.encrypt(input, keyTimer.keyPhrase);  
    } else {
      throw new Error("No encryption key provided.");
    }
  }
  
  self.setKeyPhrase = function(keyPhrase) {
    if (keyTimer) {
      window.clearTimeout(keyTimer.timeout);
    }
    keyTimer = new KeyTimer(keyPhrase);
  }
  
  self.keyIsActive = function() {
    return (keyTimer != null);
  }
  
  return self;
})();
//---

function UserData(browserStorage) {
  var self = {};
  self._storage = new TypedStorage(browserStorage);

  // XX add schema definitions here, and use IndexedDB or WebSQL as appropriate
  self._profiles = self._storage.open("profiles");

  // Profiles:
  self.getProfileKeys = function(cb) {
    self._profiles.keys(cb);
  }
  self.getProfile = function(key, cb) {
    self._profiles.get(key, function(x) { 
      if (x) cb(new UserProfile(x));
      else cb(false);
    });
  }
  self.addProfile = function(aProfile, cb) {
    if (!aProfile.serialize) {
      aProfile = new UserProfile(aProfile);
    }
    self._profiles.put(aProfile.key, aProfile.serialize(), cb);
  }
  self.saveProfile = function(aProfile, cb) {
    self._profiles.put(aProfile.key, aProfile.serialize(), cb);  
  }
  self.deleteProfile = function(profileKey, cb) {
    self._profiles.remove(profileKey, cb);
  }


  // Check for first run
  self._profiles.keys(function(res) {
    if (res.length == 0) {
      self.addProfile(new UserProfile(
        {key:"default", 
         name:"Default", 
         obj:{name:{}}
        }),
        function() {}
      );
    }
  });

  return self;
}

UserProfile = function(data) {
  this.key = undefined;
  this.name = undefined;
  this.obj = {};
  
  if (data) {
    if (typeof data == "string") {
      var obj = JSON.parse(data);
      this.key = obj.key;
      this.name = obj.name;
      this.obj = obj.obj;
    } else if (typeof data == "object") {
      this.key = data.key;
      this.name = data.name;
      this.obj = data.obj;
    }
    if (!this.obj) this.obj = {}
  }
}

// XX refactor this to use synthesized methods for add and delete - way too much duplication here

UserProfile.prototype= {
  serialize: function() {
    var target = {};
    target.key = this.key;
    target.name = this.name;
    target.obj = {};
    for (var k in this.obj) {
      if (this.obj.hasOwnProperty(k)) {
        if (k == "paymentCards") { // XX need shouldEncrypt predicate
          // if already encrypted, that's okay
          if (typeof this.obj[k] == "object" && this.obj[k].encryptedValue) {
            target.obj[k] = this.obj[k];
          } else {
            target.obj[k] = UserDataEncryption.encrypt(this.obj[k]);
          }
        } else {
          target.obj[k] = this.obj[k];
        }
      }
    }
    return JSON.stringify(target);
  },
  toString: function() {
    return "[UserProfile key=\"" + this.key + "\" name=\"" + this.name + "\"]";
  },
  toPoCo: function() {
    return this.obj;
  },
  hasAnyEncryptedFields: function() {
    return true;
  },
  setName: function(givenName, familyName) {
    if (!this.obj.name) this.obj.name = {};
    this.obj.name.givenName = givenName;
    this.obj.name.familyName = familyName;
  },
  addEmail: function(emailObj) {
    if (!this.obj.emails) this.obj.emails = [];
    if (!emailObj) {
      emailObj = {type:"work", value:""}
    }
    this.obj.emails.push(emailObj);
    return emailObj;
  },
  deleteEmail: function(toRemove) {
    if (this.obj.emails) {
      if (typeof toRemove == "string") toRemove = Math.floor(toRemove);
      if (typeof toRemove == "number") {
        this.obj.emails.remove(toRemove);
      } else {
        this.obj.emails = _.reject(this.obj.emails, function(x) { return _.isEqual(x, toRemove) });
      }
      if (this.obj.emails.length == 0) delete this.obj.emails;
    }
  },
  addAddress: function(addressObj) {
    if (!this.obj.addresses) this.obj.addresses = [];
    if (!addressObj) {
      addressObj = {
        type:"", 
        streetAddress:"", 
        locality:"", 
        region:"", 
        postalCode:"",
        country:""};
    }
    this.obj.addresses.push(addressObj);
    return addressObj;
  },
  deleteAddress: function(toRemove) {
    if (this.obj.addresses) {
      if (typeof toRemove == "string") toRemove = Math.floor(toRemove);
      if (typeof toRemove == "number") {
        this.obj.addresses.remove(toRemove);
      } else {
        this.obj.addresses = _.reject(this.obj.addresses, function(x) { return _.isEqual(x, toRemove) });
      }
      if (this.obj.addresses.length == 0) delete this.obj.addresses;
    }
  },
  addAccount: function(accountObj) {
    if (!this.obj.accounts) this.obj.accounts = [];
    this.obj.accounts.push(accountObj);
  },
  deleteAccount: function(toRemove) {
    if (this.obj.accounts) {
      if (typeof toRemove == "string") toRemove = Math.floor(toRemove);
      if (typeof toRemove == "number") {
        this.obj.accounts.remove(toRemove);
      } else {
        this.obj.accounts = _.reject(this.obj.accounts, function(x) { return _.isEqual(x, toRemove) });
      }
      if (this.obj.accounts.length == 0) delete this.obj.accounts;
    }
  },
  addPhoneNumber: function(phoneObj) {
    if (!this.obj.phoneNumbers) this.obj.phoneNumbers = [];
    if (!phoneObj) {
      phoneObj = {
        type:"work", 
        value:""
      };
    }
    this.obj.phoneNumbers.push(phoneObj);
    return phoneObj;
  },
  deletePhoneNumber: function(toRemove) {
    if (this.obj.phoneNumbers) {
      if (typeof toRemove == "string") toRemove = Math.floor(toRemove);
      if (typeof toRemove == "number") {
        this.obj.phoneNumbers.remove(toRemove);
      } else {
        this.obj.phoneNumbers = _.reject(this.obj.phoneNumbers, function(x) { return _.isEqual(x, toRemove) });
      }
      if (this.obj.phoneNumbers.length == 0) delete this.obj.phoneNumbers;
    }
  },
  
  addPaymentCard: function(cardObj) {
    if (!this.obj.paymentCards) this.obj.paymentCards = [];
    if (!cardObj) {
      cardObj = {
        type:"personal", 
        brand:"",
        cardholder:"",
        billingAddress:"",//XX index to personal address?
        number:"",
        expiration:"",
        CCV:"" // XX maybe
      };
    }
    this.obj.paymentCards.push(cardObj);
    return cardObj;
  },
  deletePaymentCard: function(toRemove) {
    if (this.obj.paymentCards) {
      if (typeof toRemove == "string") toRemove = Math.floor(toRemove);
      if (typeof toRemove == "number") {
        this.obj.paymentCards.remove(toRemove);
      } else {
        this.obj.paymentCards = _.reject(this.obj.paymentCards, function(x) { return _.isEqual(x, toRemove) });
      }
      if (this.obj.paymentCards.length == 0) delete this.obj.paymentCards;
    }
  },
  
  deleteObject: function(type, toRemove) {
    if (type == "emails") {
      this.deleteEmail(toRemove);
    } else if (type == "addresses") {
      this.deleteAddress(toRemove);
    } else if (type == "phoneNumbers") {
      this.deletePhoneNumber(toRemove);
    } else if (type == "accounts") {
      this.deleteAccount(toRemove);
    } else if (type == "paymentCards") {
      this.deletePaymentCard(toRemove);
    }
  }
}


