var tracker_global={};tracker_global.siteType=10001;(function(c){function d(ac){var K=this.os={},Z=this.browser={},O=ac.match(/WebKit\/([\d.]+)/),Y=ac.match(/(Android)\s+([\d.]+)/),U=!!ac.match(/\(Macintosh\; Intel /),J=ac.match(/(iPad).*OS\s([\d_]+)/),S=!J&&ac.match(/(iPhone\sOS)\s([\d_]+)/),b=ac.match(/(iPod)(.*OS\s([\d_]+))?/),T=ac.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),P=ac.match(/Windows Phone ([\d.]+)/),G=T&&ac.match(/TouchPad/),M=ac.match(/Kindle\/([\d.]+)/),X=ac.match(/Silk\/([\d._]+)/),I=ac.match(/(BlackBerry).*Version\/([\d.]+)/),aa=ac.match(/(BB10).*Version\/([\d.]+)/),Q=ac.match(/(RIM\sTablet\sOS)\s([\d.]+)/),W=ac.match(/PlayBook/),E=ac.match(/Chrome\/([\d.]+)/)||ac.match(/CriOS\/([\d.]+)/),L=ac.match(/Firefox\/([\d.]+)/),F=ac.match(/MSIE\s([\d.]+)/)||ac.match(/Trident\/[\d](?=[^\?]+).*rv:([0-9.].)/),N=!E&&ac.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/),ab=N||ac.match(/Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/),H=ac.match(/Baidu\/([\d.]+)/)||ac.match(/baiduboxapp\/([\d.]+)/),R=ac.match(/MQQBrowser\/([\d.]+)/),a=ac.match(/MiuiBrowser\/([\d.]+)/),ad=ac.match(/MicroMessenger\/([\d.]+)/),V=ac.match(/UCBrowser\/([\d.]+)/)||ac.match(/UCWEB\/([\d.]+)/);
if(Z.webkit=!!O){Z.version=O[1]}if(Y){K.android=true,K.version=Y[2]}if(S){K.ios=K.iphone=true,K.version=S[2].replace(/_/g,".")}if(J){K.ios=K.ipad=true,K.version=J[2].replace(/_/g,".")}if(T){K.webos=true,K.version=T[2]}if(G){K.touchpad=true}if(I){K.blackberry=true,K.version=I[2]}if(aa){K.bb10=true,K.version=aa[2]}if(Q){K.rimtabletos=true,K.version=Q[2]}if(W){Z.playbook=true}if(M){K.kindle=true,K.version=M[1]}if(X){Z.silk=true,Z.version=X[1]}if(!X&&K.android&&ac.match(/Kindle Fire/)){Z.silk=true}if(E){Z.chrome=true,Z.version=E[1]}if(L){Z.firefox=true,Z.version=L[1]}if(F){Z.ie=true,Z.version=F[1]}if(ab&&(U||K.ios)){Z.safari=true;if(U){Z.version=ab[1]}}if(N){Z.webview=true}if(H){Z.baidu=true,Z.version=H[1]}if(V){Z.uc=true,Z.version=V[1]}if(R){Z.qq=true,Z.version=R[1]}if(a){Z.xiaomi=true,Z.version=a[1]
}if(ad){Z.weixin=true,Z.version=ad[1]}K.tablet=!!(J||W||(Y&&!ac.match(/Mobile/))||(L&&ac.match(/Tablet/)));K.phone=!!(!K.tablet&&(Y||S||T||I||aa||E||L))}d.call(c,navigator.userAgent);c.__detect=d})(Zepto);(function(b){b.extend(b.fn,{cookie:function(a,m,n){var l,k,j,o;if(arguments.length>1&&String(m)!=="[object Object]"){n=b.extend({},n);if(m===null||m===undefined){n.expires=-1}return typeof n.expires=="number"&&(l=n.expires*24*60*60*1000,k=n.expires=new Date,k.setTime(k.getTime()+l)),m=String(m),document.cookie=[encodeURIComponent(a),"=",n.raw?m:encodeURIComponent(m),n.expires?"; expires="+n.expires.toUTCString():"",n.path?"; path="+n.path:"",n.domain?"; domain="+n.domain:"",n.secure?"; secure":""].join("")}return n=m||{},o=n.raw?function(c){return c}:decodeURIComponent,(j=(new RegExp("(?:^|; )"+encodeURIComponent(a)+"=([^;]*)")).exec(document.cookie))?o(j[1]):null
}})})(Zepto);define("util_yhd.url",function(g,h,f){function e(a){if(!a){return true}for(var b in a){return false}return true}h.getParams=function(a){a=$.trim(a);var b=h.parseUrl(a);return b?b.params:null};h.appendParams=function(d,b){var c=h;if(e(b)){return d}var l=c.parseUrl(d);if(!l){return d}var a=l.params;for(var k in b){if(b.hasOwnProperty(k)&&b[k]){a[k]=b[k]}}l.params=a;return c.toCusString(l)};h.parseUrl=function(C){var F="";var b="";var E="";var y={};C=$.trim(C);if(C==""){return null}var d=C.split("#");var D=d[0];if(d.length>=2){for(var z=1,c=d.length;z<c;z++){F+="#"+d[z]}}var G=D.indexOf("?");var w=D.length;if(G>0){b=D.substring(0,G);E=D.substring(G+1,w)}else{b=D}if(E){var A=E.split("&");for(var z=0,c=A.length;z<c;z++){var u=A[z].indexOf("=");if(u==-1){continue}var a=A[z].substring(0,u);
var x=A[z].substring(u+1);y[a]=x}}var B={loc:b,params:y,append:F};return B};h.toCusString=function(a){var d=[];d.push(a.loc);var j=a.params;if(!e(j)){d.push("?");var c=0;for(var b in j){if(j.hasOwnProperty(b)&&j[b]){if(c){d.push("&")}d.push(b+"="+j[b]);c++}}}if(a.append){d.push(a.append)}return d.join("")};h.isSpider=function(){var a=navigator.userAgent.toLowerCase();var c=a.match(/baiduspider/i)=="baiduspider";var n=a.match(/360spider/i)=="360spider";var b=a.match(/sogou web spider/i)=="sogou web spider";var d=a.match(/sosospider/i)=="sosospider";var o=a.match(/yisouspider/i)=="yisouspider";var p=a.match(/googlebot/i)=="googlebot";var m=a.match(/bingbot/i)=="bingbot";if(c||n||b||d||o||p||m){return true}else{return false}}});define("tracker_ref_yhd.uid",function(){var g={};var f="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ`^abcdefghijklmnopqrstuvwxyz";
var e=f.split("");g.genUID=function(){var b=new Date().getTime();var a=g.hashClientInfo("11");return g.base64(b)+"-"+a};g.base64=function(n){var c=n;var a=[];var m=o(c);var d=m.length;for(var b=0;b<d;b++){a.push(e[parseInt(m[b],2).toString(10)])}return a.join("");function o(t){var l=parseInt(t).toString(2);var j=l.length;var s=[];var k=j%6;if(k>0){s.push(l.substring(0,k))}var r=k;while(r<j){s.push(l.substring(r,r+6));r+=6}return s}};g.parseUID=function(o){if(!o){return null}var a=o.length;if(a!=7){return null}var j=[];for(var q=0;q<a;q++){var c=o.charAt(q);var b=f.indexOf(c);if(b==-1){return null}var d=b.toString(2);for(var p=6;p>d.length;){d="0"+d}j[q]=d}return parseInt(j.join(""),2).toString(10)};g.isValidUID=function(b){if(h("frameworkver")){return 1}var c=b.split("-");if(c.length==3){var a=g.hashClientInfo(c[1]);
if(!a){return 0}a=a.split("-");if(a.length==2&&a[1]!=c[2]){return 0}}else{return 1}return 1};g.hashClientInfo=function(j){var c=window.navigator;var a=h("guid");c=c.appName+c.platform+c.userAgent;var d="";if(a&&a!=""&&j[0]==1){c+=a;d+="1"}else{d+="0"}var b=h("yihaodian_uid");if(b&&b!=""&&j[1]==1){c+=b;d+="1"}else{d+="0"}return d+"-"+g.base64(g.hash(c))};g.hash=function(c){var d=0,a=0,b;if(c){for(b=c.length-1;b>=0;b--){a=c.charCodeAt(b);d=(d<<6&268435455)+a+(a<<14);a=d&266338304;d=a!=0?d^a>>21:d}}return d};function h(c){var a=document.cookie;var k=a.split("; ");for(var b=0;b<k.length;b++){var d=k[b].split("=");if(d[0]==c){return d[1]}}return null}return g});var h5tonative={urlList:{apphome:"yhd://home/",appcart:"yhd://cart/",appgroupone:"yhd://groupon/"},functionlist:{shake:"yhdiosfun://shake/",playAudio:"yhdiosfun://playAudio/",addCart:"yhdiosfun://addCart/",share:"yhdiosfun://share/",goback:"yhdiosfun://back/",unionlogin:"yhdiosfun://unionloginback/",buoyCart:"yhdiosfun://buoyCart/",getRemoteData:"yhdiosfun://getRemoteData/",saveH5Data:"yhdiosfun://saveH5Data/",getH5Data:"yhdiosfun://getH5Data/",h5Init:"yhdiosfun://h5Init/",h5Refresh:"yhdiosfun://h5Refresh/",hideTab:"yhdiosfun://hideTab/",showShareButton:"yhdiosfun://showShareButton/",setHomeBtn:"yhdiosfun://setHomeBtn/"},getAllCookie:function(){return unescape(document.cookie)
},getCookie:function(f,d){var e=new RegExp((d?f+"=(?:.*?&)*?"+d+"=([^&;$]*)":f+"=([^;$]*)"),"i");return e.test(unescape(document.cookie))?RegExp["$1"]:""},getUserAgent:function(){return navigator.userAgent},yhdplatform:{isandroid:function(){return h5tonative.getUserAgent().indexOf("yhdandroid")>0},isios:function(){return h5tonative.getUserAgent().indexOf("yhdios")>0},isother:function(){return h5tonative.getUserAgent().indexOf("yhdandroid")<0&&h5tonative.getUserAgent().indexOf("yhdios")<0}},getClientInfo:function(){return h5tonative.getCookie("clientinfo","")},getUserToken:function(){return h5tonative.getCookie("usertoken","")},getProvinceid:function(){return h5tonative.getCookie("provinceid","")},getFrom:function(){return h5tonative.getCookie("from","")},getSessionid:function(){return h5tonative.getCookie("sessionid","")
},isWireless2:function(){if(h5tonative.getCookie("frameworkver","")!=""){return true}return false},goToNative:function(d,c){if(h5tonative.yhdplatform.isandroid()){window.yhd.gotToNative(d,c)}if(h5tonative.yhdplatform.isios()){window.location.href=d+"?body="+c}},playAudio:function(b){if(h5tonative.yhdplatform.isandroid()){window.yhd.playAudio(b)}if(h5tonative.yhdplatform.isios()){window.location.href=h5tonative.functionlist.playAudio+"?body="+b}},addCart:function(b){if(h5tonative.yhdplatform.isandroid()){window.yhd.addCart(b)}if(h5tonative.yhdplatform.isios()){window.location.href=h5tonative.functionlist.addCart+"?body="+b}},shake:function(b){if(h5tonative.yhdplatform.isandroid()){window.yhd.shake(b)}if(h5tonative.yhdplatform.isios()){window.location.href=h5tonative.functionlist.shake+"?body="+b
}},share:function(b){if(h5tonative.yhdplatform.isandroid()){h5tonative.goToNative("yhd://share/",b)}if(h5tonative.yhdplatform.isios()){window.location.href=h5tonative.functionlist.share+"?body="+b}},appBack:function(){if(h5tonative.yhdplatform.isandroid()){window.yhd.back()}if(h5tonative.yhdplatform.isios()){window.location.href=h5tonative.functionlist.goback}},unionloginback:function(b){if(h5tonative.yhdplatform.isandroid()){window.yhd.unionloginback(b)}if(h5tonative.yhdplatform.isios()){window.location.href=h5tonative.functionlist.unionlogin+"?body="+b}},buoyCart:function(b){if(h5tonative.yhdplatform.isandroid()){window.yhd.buoyCart(b)}if(h5tonative.yhdplatform.isios()){window.location.href=h5tonative.functionlist.buoyCart+"?body="+b}},h5Init:function(b){if(h5tonative.yhdplatform.isandroid()){window.yhd.h5Init(b)
}if(h5tonative.yhdplatform.isios()){window.location.href=h5tonative.functionlist.h5Init+"?body="+b}},getRemoteData:function(b){if(h5tonative.yhdplatform.isandroid()){window.yhd.getRemoteData(b)}if(h5tonative.yhdplatform.isios()){window.location.href=h5tonative.functionlist.getRemoteData+"?body="+b}},saveH5Data:function(b){if(h5tonative.yhdplatform.isandroid()){window.yhd.saveH5Data(b)}if(h5tonative.yhdplatform.isios()){window.location.href=h5tonative.functionlist.saveH5Data+"?body="+b}},getH5Data:function(b){if(h5tonative.yhdplatform.isandroid()){window.yhd.getH5Data(b)}if(h5tonative.yhdplatform.isios()){window.location.href=h5tonative.functionlist.getH5Data+"?body="+b}},h5Refresh:function(){if(h5tonative.yhdplatform.isandroid()){window.yhd.h5Refresh()}if(h5tonative.yhdplatform.isios()){window.location.href=h5tonative.functionlist.h5Refresh
}},hideTab:function(b){if(h5tonative.yhdplatform.isandroid()){window.yhd.hideTab(b)}if(h5tonative.yhdplatform.isios()){window.location.href=h5tonative.functionlist.hideTab+"?body="+b}},showShareButton:function(b){if(h5tonative.yhdplatform.isandroid()){window.yhd.showShareButton(b)}if(h5tonative.yhdplatform.isios()){window.location.href=h5tonative.functionlist.showShareButton+"?body="+b}},setHomeBtn:function(b){if(h5tonative.yhdplatform.isandroid()){window.yhd.setHomeBtn(b)}if(h5tonative.yhdplatform.isios()){window.location.href=h5tonative.functionlist.setHomeBtn+"?body="+b}},alertsomthing:function(){alert(h5tonative.isWireless2())}};define("global_env",function(g,h,f){var j=h5tonative;h.getGlobalEnvValues=function(){if(h.isWireless2()){return h.getWireless2GlobalEnvValues()}var a=$.fn.cookie("provinceId");
var c=$.fn.cookie("osType");if($.trim(c)==""){var b=/([\?\&])osType=([^\&]*)(.*)/;if(b.test(location.href)){c=b.exec(location.href)[2]}}return{provinceId:a,osType:c}};h.getProvinceId=function(){return h.getGlobalEnvValues()["provinceId"]};h.getOSType=function(){return h.getGlobalEnvValues()["osType"]};h.isInApp=function(){var a=h.getOSType();if($.trim(a)==""||a=="20"){return false}return true};h.setProvinceId=function(a){$.fn.cookie("provinceId",a,{domain:".yhd.com",path:"/",expires:30});$.fn.cookie("userprovinceId",a,{expires:30})};h.isValidProvinceId=function(a){if(a>=1&&a<33){return 1}return 0};h.adapterNewListenner=function(){var b=h.getOSType();var a=$.fn.cookie("ClientAppVersion");if(a){a=k(a);if(b==30){if(a>=3.22){return 1}}}return 0};function k(e){var b=e.split(".");var c="";for(var a=0,d=b.length;
a<d;a++){if(a==1){c+="."}c+=b[a]}return c}h.isWireless2=function(){return j.isWireless2()};h.getWireless2ProvinceId=function(){return j.getProvinceid()};h.getWireless2OSType=function(){if(j.yhdplatform.isandroid()){return 10}else{if(j.yhdplatform.isios()){return 30}else{return 20}}};h.getWireless2GlobalEnvValues=function(){var c=h.getWireless2OSType();var a=h.getWireless2ProvinceId();if($.trim(c)==""){var b=/([\?\&])osType=([^\&]*)(.*)/;if(b.test(location.href)){c=b.exec(location.href)[2]}}return{provinceId:a,osType:c}};h.goToNative=function(b,a){if(a&&typeof a!="string"){a=JSON.stringify(a)}j.goToNative(b,a)};return h});define("tracker_ref_yhd.global_spm",["tracker_ref_yhd.uid","util_yhd.url"],function(L,F){var D={};var E=".";var N="0";var A="1";var z={TPA:"tpa",TPC:"tpc",TPI:"tpi",TCS:"tcs",TCD:"tcd",TCI:"tci",PC:"pc",TP:"tp",TC:"tc",ABTEST:"abtest",ABTEST_TAG:"abtest_tag",EXPR_TAG:"a,area,button",TPA_CHILD_SIZE:"tpaChildSize",TPC_CHILD_SIZE:"tpcChildSize",TC_CHILD_SIZE:"tcChildSize",RESULT:{RESULT:"result",TP:"tp",TC:"tc",UNIID:"uniId",PAGETYPE:"pageType",PAGEID:"pageId"}};
var y=null,G=null,O=0;var B=L.genUID();D.getData=function(a,c){if(F.isSpider()){return{}}H();if(O==-1||O==2){return null}var b=new I(a,c);return b.getData()};D.getNewPageData=function(){H();var f=F.getParams(location.href)||{};var d=f.tp;var e=f.tc;var b=f.abtest;var a=0;var c=J();if(c&&c.length>0){b=N+E+c;a=1}return K(d,e,b,a)};D.reloadPage=function(a){D.refreshPage(window.location.href,a)};D.refreshPage=function(a,c,b){var d=P(a,c,b);window.location.href=d};D.openPage=function(b,d,c,a){var e=P(d,b);var g="";if(typeof(c)!="undefined"&&c){g=c}var f="";if(typeof(a)!="undefined"&&a){f=a}window.open(e,g,f)};D.getABExpParam=function(b){var a=v(b);return a};D.glABcodeToTag=function(a){var b=C(a);return b};function P(g,a,l){if(!g){return""}var k=typeof(a);if(k=="undefined"||!a){return g}var e=null;
if(k=="string"){var h=a;var b=a.indexOf("#");if(b===-1){h="#"+h}e=$(h)}else{if(k=="object"){e=a}}if(!e){return g}var f=D.getData(e,l);if(f){var n=f.tp;var c=f.tc;var m=f.abtestValue;var j={tp:n,tc:c,abtest:m};var d=F.appendParams(g,j);return d}else{return g}}function M(b,c){if(typeof(_globalSpmDataModelJson)!="undefined"&&_globalSpmDataModelJson){var a=0;if(b){a=_globalSpmDataModelJson[b]?_globalSpmDataModelJson[b][c]:""}else{a=_globalSpmDataModelJson[c]}if(a){return a}}return c}function H(){var a=$("meta[name=tp_page]").attr("content");a=w(a);if(!a){O=-1;return}y=M(null,a[0]);G=a[1];if(y&&y=="0"){O=2}}function J(){var a=$("meta[name=global-abtest]");if(a&&a.length>0){return a.attr("content")}return""}function C(a){if(a&&a.length>0&&typeof(_globalABTestExpDataJson)!="undefined"&&_globalABTestExpDataJson&&_globalABTestExpDataJson[a]){var b=_globalABTestExpDataJson[a]["tag"];
return b}return""}function v(b){if(b&&b.length>0&&typeof(_globalABTestExpDataJson)!="undefined"&&_globalABTestExpDataJson&&_globalABTestExpDataJson[b]){var a=_globalABTestExpDataJson[b]["expParam"];return a}return""}function I(a,c){var b=this;b._dom=a;b._opt={};b.TAG=c||z.EXPR_TAG;b.init()}I.prototype={init:function(){var e=this,f=e._dom;if(!f){e.set(z.RESULT.RESULT,0);return}if(!(f instanceof $)){f=$(f)}var d=f.data(z.PC);if(d==1){e.set(z.RESULT.RESULT,1);return}else{if(d==-1){e.set(z.RESULT.RESULT,0);return}}var j=x(f,z.TPA);if(j.length<1){if(y){e.set(z.RESULT.RESULT,1);e.set(z.TPA,0);e.set(z.TPC,0);e.set(z.TPI,0)}else{e.set(z.RESULT.RESULT,0)}return}e.set(z.TPA,j.data(z.TPA));e.initTpaIndex(j);var a=f.data(z.TPI);if(!a){e.initNewTpaIndex(f,j)}e.set(z.TPC,f.data(z.TPC));e.set(z.TPI,f.data(z.TPI));
var h=x(f,z.TC);if(h&&h.length>0){e.set(z.TC,h.data(z.TC))}else{e.initTcdIndex(j);var c=x(f,z.TCS);var g=x(f,z.TCD);if(g.length>0){if(!c.data(z.TCD)){e.initNewTcdIndex(g,j)}e.set(z.TCS,c.data(z.TCS));e.set(z.TCD,g.data(z.TCD));e.set(z.TCI,g.data(z.TCI)||1)}}var b=x(f,z.ABTEST);if(b&&b.length>0){e.set(z.ABTEST,b.data(z.ABTEST))}e.set(z.RESULT.RESULT,1)},rebuildTP:function(c){c+="";var d=c.split(E);var a=M("SPM_AREA",d[2]);var b=M("SPM_COM",d[3]);return(d[0]||"0")+E+(d[1]||"0")+E+(a||"0")+E+(b||"0")+E+(d[4]||"0")+E+(d[5]||"0")},rebuildTC:function(c){if(!c){return c}c+="";var a=c.split(E);var b=M("SPM_SYSTEM_TYPE",a[0]||"0");var d=M("SPM_DATA_TYPE",a[2]||"0");return b+E+(a[1]||"0")+E+(d||"0")+E+(a[3]||"0")+E+(a[4]||"1")},getData:function(){var a=this,b=$(a._dom);var o=a.get(z.RESULT.RESULT);if(!o){b.data(z.PC,-1);
return null}var m=b.data(z.PC);if(m==1){var e=b.data(z.TP);var c=b.data(z.TC);var h=b.data(z.ABTEST_TAG);var r=K(e,c,h);return r}var k=a.get(z.TPA);var l=a.get(z.TPC);var p=a.get(z.TPI);var s=a.get(z.TCS);var q=a.get(z.TCD);var n=a.get(z.TCI);var c=a.get(z.TC);var j=y+E+G+E+k+E+(l||"0")+E+p+E+B;var f="";if(c){f=c}else{if($.trim(s)!=""||$.trim(q)!=""){if($.trim(s)!=""){f+=s+E}else{f+="0.0"+E}if($.trim(q)!=""){f+=q+E}else{f+="0.0"+E}f+=n}}f=this.rebuildTC(f);j=this.rebuildTP(j);var d="";var h=a.get(z.ABTEST);if(h){if(h.indexOf(N+E)<0){var g=C(h);if(g){d=A+E+g}}else{d=h}}b.data(z.TP,j);b.data(z.TC,f);b.data(z.ABTEST_TAG,d);b.data(z.PC,1);var r=K(j,f,d);return r},initTpaIndex:function(l){var n=l.data(z.TPA_CHILD_SIZE);var m=this;if(n){return}var g=l.find(m.TAG);n=1;var f={};for(var d=0,h;h=g[d];
d++){h=$(h);var k=x(h,z.TPC);if(k.length<1){h.data(z.TPI,n);h.data(z.TPC,0);n++}else{var b=k.find(m.TAG);if(b.length==0){b=k}var a=k.data(z.TPC);var c=f[a]||1;for(var e=0,j;j=b[e];e++){if($(j).data(z.TPI)){continue}$(j).data(z.TPC,a);$(j).data(z.TPI,c);c++}f[a]=c+b.length;k.data(z.TPC_CHILD_SIZE,f[a])}}l.data(z.TPA_CHILD_SIZE,n)},initNewTpaIndex:function(b,d){var e=x(b,z.TPC);if(e.length<1){var a=d.data(z.TPA_CHILD_SIZE);a++;b.data(z.TPC,0);b.data(z.TPI,a);d.data(z.TPA_CHILD_SIZE,a)}else{var c=e.data(z.TPC_CHILD_SIZE);c++;b.data(z.TPC,e.data(z.TPC));b.data(z.TPI,c);e.data(z.TPC_CHILD_SIZE,c)}},initTcdIndex:function(d){var e=d.data(z.TC_CHILD_SIZE);if(e!=null){return}var a=d.find("[data-tcd]");for(var c=0,b;b=a[c];c++){b=$(b);b.data(z.TCI,c+1)}d.data(z.TC_CHILD_SIZE,a.length)},initNewTcdIndex:function(a,b){var c=b.data(z.TC_CHILD_SIZE);
c++;b.data(z.TC_CHILD_SIZE,c);a.data(z.TCI,c)},get:function(a){return this._opt[a]},set:function(a,b){this._opt[a]=b}};function K(j,g,m,o){var j=j||"";var g=g||"";var k="";var l="";var p="";var r="";var d="";var a="";var a="";var h="";var q="";var b="";var n="";var s="";var f="";if(j){var e=j.split(".");if(e.length>=6&&L.isValidUID(e[5])){k=e[2]||"0";l=e[3]||"0";p=e[4]||"0";b=e[0]||"0";n=e[5]||"0";s=e[1]||"0";if(g){var c=g.split(".");r=c[0]||"0";d=c[1]||"0";a=c[2]||"0";h=c[3]||"0";q=c[4]||"1"}f=m}}if(!f&&o){f=m}return{tp:j,tc:g,tpa:k,tpc:l,tpi:p,tcs:r,tcsa:d,tcd:a,tcdt:h,tci:q,abtestValue:f||"",pageTypeId:y,pageValue:G,unid:B,refPageTypeId:b,refUnid:n,refPageValue:s}}function w(a){if(!a){return null}var b=a.split(E);return b.length==2?b:null}function x(b,a){return b.closest("[data-"+a+"]")}return D
});(function(){function b(a){if(typeof(a)=="undefined"||!a||a=="#"||a.indexOf("#")==0||a=="###"||a.toLowerCase().indexOf("javascript")>=0){return false}return true}require(["tracker_ref_yhd.global_spm","util_yhd.url","global_env"],function(e,a,f){if(!f.isWireless2()&&f.isInApp()){return}$("body").on("click","a,area",function(){var c=$(this);var q=$.trim(c.attr("href"));var r=c.data("globalRewrite");if(r&&r==1){return}var m=e.getData(c);if(b(q)){if(m){var o=m.tc;var d=m.tp;var p=m.abtestValue;var n={tc:o,tp:d,abtest:p};q=a.appendParams(q,n);c.attr("href",q);c.data("globalRewrite",1)}}});$("body").on("click","[data-trackerSend]",function(){var c=$(this);var k=e.getData(c);var l=c.attr("data-event");if(l&&l=="add_cart"){var d=c.attr("data-pmid")||2;var j=c.attr("data-proid");k.positionTypeId="4";
gotracker(d,l,j,k)}else{if(l){gotracker(2,l,null,k)}else{if(k){gotracker(2,"buttonPosition",null,k)}}}})})})();Array.prototype.toTRACKERJSONString=function(){var d="[";for(var c=0;c<this.length;c++){if(this[c] instanceof Parameter){if(this[c].value instanceof Array){d+="{"+this[c].key+"="+this[c].value.toTRACKERJSONString()+"},"}else{d+=this[c].toJSONString()+","}}}if(d.indexOf(",")>0){d=d.substring(0,d.length-1)}return d+"]"};function Parameter(d,c){this.key=d;if(this.key=="internalKeyword"){this.value=encodeURIComponent(c)}else{this.value=c}this.toJSONString=function(){return"{"+this.key+"="+this.value+"}"}}function addPublicParameter(b){b+="&w_url="+encodeURIComponent(location.href);b+="&s_iev="+navigator.userAgent||"";b+="&s_rst="+window.screen.width+"*"+window.screen.height;b+="&w_rfu="+encodeURIComponent(document.referrer||"");
return b}var trackerSupportKey=new Object();trackerSupportKey.infoPageId="w_pif";trackerSupportKey.tp="w_tp";trackerSupportKey.tc="w_tc";trackerSupportKey.attachedInfo="b_ai";trackerSupportKey.tracker_u="b_tu";trackerSupportKey.tracker_type="b_trt";trackerSupportKey.ip="u_ip";trackerSupportKey.infoTrackerSrc="w_ts";trackerSupportKey.infoTrackerSrc="w_ts";trackerSupportKey.cookie="w_ck";trackerSupportKey.orderCode="b_oc";trackerSupportKey.endUserId="u_uid";trackerSupportKey.firstLink="w_flk";trackerSupportKey.productId="b_pid";trackerSupportKey.curMerchantId="u_cm";trackerSupportKey.provinceId="u_pid";trackerSupportKey.fee="b_fee";trackerSupportKey.edmActivity="b_ea";trackerSupportKey.edmEmail="b_ee";trackerSupportKey.edmJobId="b_ejb";trackerSupportKey.internalKeyword="b_ik";trackerSupportKey.resultSum="b_rs";
trackerSupportKey.currentPage="b_scp";trackerSupportKey.linkPosition="b_lp";trackerSupportKey.buttonPosition="b_bp";trackerSupportKey.adgroupKeywordID="b_ak";trackerSupportKey.extField3="b_set";trackerSupportKey.extField6="b_adt";trackerSupportKey.extField7="b_pmi";trackerSupportKey.extField8="b_tid";trackerSupportKey.extField9="b_cid";trackerSupportKey.extField10="s_and";trackerSupportKey.pageTypeId="w_pt";trackerSupportKey.unid="w_un";trackerSupportKey.pageValue="w_pv";trackerSupportKey.refPageTypeId="w_rpt";trackerSupportKey.refUnid="w_run";trackerSupportKey.refPageValue="w_rpv";trackerSupportKey.eventId="b_ei";trackerSupportKey.labelId="b_li";trackerSupportKey.filterInfo="b_fi";trackerSupportKey.activityId="b_aci";trackerSupportKey.listCategoryId="b_lci";trackerSupportKey.pmStatusTypeId="b_pms";
trackerSupportKey.container="s_ct";trackerSupportKey.containerVersion="s_ctv";trackerSupportKey.platVersion="s_pv";trackerSupportKey.platform="s_plt";trackerSupportKey.phoneType="s_pt";trackerSupportKey.provider="s_pro";trackerSupportKey.netType="s_nt";trackerSupportKey.tpa="w_tpa";trackerSupportKey.tpc="w_tpc";trackerSupportKey.tpi="w_tpi";trackerSupportKey.tcs="w_tcs";trackerSupportKey.tcsa="w_tca";trackerSupportKey.tcdt="w_tct";trackerSupportKey.tcd="w_tcd";trackerSupportKey.tci="w_tci";trackerSupportKey.tce="w_tce";trackerSupportKey.positionTypeId="b_pyi";trackerSupportKey.siteType="b_st";trackerSupportKey.latitude="u_lon";trackerSupportKey.longitude="u_lat";trackerSupportKey.clientTime="b_clt";trackerSupportKey.abtestValue="b_abv";function TrackerContainer(){this.url=("https:"==document.location.protocol?"https://":"http://")+"tracker.yhd.com/tracker/newInfo.do?1=1";
this.url=addPublicParameter(this.url);this.parameterArray=[];this.stockArray=[];this.commonAttached=[];this.addParameter=function(f){for(var d=0,e=this.parameterArray.length;d<e;d++){if(this.parameterArray[d]&&f&&this.parameterArray[d].key==f.key){this.parameterArray[d].value=f.value;return}}this.parameterArray.push(f)};this.addStock=function(c,d){this.stockArray.push(new Parameter(c,d))};this.addCommonAttached=function(d,c){this.commonAttached.push(new Parameter(d,c))};this.buildAttached=function(){if(this.stockArray.length>0){this.commonAttached.push(new Parameter("1",this.stockArray))}if(this.commonAttached.length>0){this.addParameter(new Parameter("attachedInfo",this.commonAttached.toTRACKERJSONString("attachedInfo")))}};this.toUrl=function(){this.buildAttached();var e="&bd={";for(var g=0;
g<this.parameterArray.length;g++){var h=trackerSupportKey[this.parameterArray[g].key];var f=this.parameterArray[g].value;if(h){e+=h+"="+f;if(g<this.parameterArray.length-1){e+="|"}}}e+="}";return this.url+e}}function addTrackPositionToCookie(d,c){document.cookie="linkPosition="+encodeURIComponent(c)+";path=/;domain=."+tracker_domain_url+";"}function addPageMsgToCookie(b){if(typeof(b)=="object"&&b){if(typeof(b.pmInfoId)!="undefined"){document.cookie="pmInfoId="+b.pmInfoId+";path=/;domain=."+tracker_domain_url+";"}if(typeof(b.productId)!="undefined"){document.cookie="productId="+b.productId+";path=/;domain=."+tracker_domain_url+";"}}}function trackerGetCookie(g){var k=document.cookie;var j=k.split("; ");for(var f=0;f<j.length;f++){var h=j[f].split("=");if(h[0]==g){return h[1]}}return null}function trackerClearCookieWithName(d,f){var e=new Date();
e.setTime(e.getTime()-10000);document.cookie=d+"="+f+";path=/;domain=."+tracker_domain_url+";expires="+e.toGMTString()}var e1=/exfield1=[^;]*;*/i;var e2=new RegExp("exfield2=[^;]*;*","i");var e3=new RegExp("exfield3=[^;]*;*","i");var e4=new RegExp("exfield4=[^;]*;*","i");var e5=new RegExp("exfield5=[^;]*;*","i");function recordTrackInfoWithType(B,A,E,v,r){var s=("https:"==document.location.protocol?"https://":"http://")+"tracker.yhd.com/related/newInfo.do?1=1";s=addPublicParameter(s);var z={};if(r){for(var F in r){var x=trackerSupportKey[F];if(x){z[x]=r[F]}else{z[F]=r[F]}}}if(B&&A){z.b_it=B;z.b_ri=encodeURIComponent(A)||"";z.b_ai=encodeURIComponent(E)||"";if(v){var G=e1.exec(v);if(G){z.b_e1=encodeURIComponent(G[0].replace(/exfield1=/i,"").replace(";",""))}var C=e2.exec(v);if(C){z.b_e2=encodeURIComponent(C[0].replace(/exfield2=/i,"").replace(";",""))
}var t=e3.exec(v);if(t){z.b_e3=encodeURIComponent(t[0].replace(/exfield3=/i,"").replace(";",""))}var D=e4.exec(v);if(D){z.b_e4=encodeURIComponent(D[0].replace(/exfield4=/i,"").replace(";",""))}var u=e5.exec(v);if(u){z.b_e5=encodeURIComponent(u[0].replace(/exfield5=/i,"").replace(";",""))}}var w="&bd={";for(var y in z){if(w!="&bd={"){w+="|"}w+=y+"="+z[y]}w+="}";sendImgUrl(s+w)}}function gotracker(l,o,m,p){var k=new TrackerContainer();if(typeof setTrackerPublicParams!="undefined"){setTrackerPublicParams(k)}if(o){k.addParameter(new Parameter("buttonPosition",o))}else{k.addParameter(new Parameter("buttonPosition","defaultButton"))}if(m){k.addParameter(new Parameter("productId",m))}if(typeof(l)=="number"&&(l>2||l<0)){k.addParameter(new Parameter("extField7",l))}else{if(typeof(l)=="string"){var n=Number(l);
if(n>2||n<0){k.addParameter(new Parameter("extField7",n))}}}if(typeof(p)=="object"&&p){for(var j in p){k.addParameter(new Parameter(j,p[j]))}}var q=trackerGetCookie("edmEmail");if(q){k.addParameter(new Parameter("edmEmail",q))}if(trackerGetCookie("yihaodian_uid")){k.addParameter(new Parameter("endUserId",trackerGetCookie("yihaodian_uid")))}k.addParameter(new Parameter("clientTime",new Date().getTime()));sendImgUrl(k.toUrl())}function bindLinkClickTracker(e,f){var d=$("#"+e+" a");d.click(function(){var a=$(this).text();a=f+"_"+encodeURIComponent($.trim(a));addTrackPositionToCookie("1",a)})}var trackerContainer=new TrackerContainer();function sendImgUrl(d){var c="timg"+new Date().getTime();window[c]=new Image(1,1);window[c].src=d}var tracker_domain_url="yhd.com";function getQueryStringRegExp(d){var e=location.href;
if(e&&e.indexOf("#")>0){e=e.substring(0,e.indexOf("#"))}var f=new RegExp("(^|\\?|&)"+d+"=([^&]*)(\\s|&|$)","i");if(f.test(e)){return unescape(RegExp.$2.replace(/\+/g," "))}else{return""}}var referrer=document.referrer?document.referrer:"";var referrerDomain=referrer.match(/http[s]?:\/\/([^\/]+)/);var ref=getQueryStringRegExp("tracker_u");var uid=getQueryStringRegExp("uid");var websiteid=getQueryStringRegExp("website_id");var utype=getQueryStringRegExp("tracker_type");var adgroupKeywordID=getQueryStringRegExp("adgroupKeywordID");var edmEmail=getQueryStringRegExp("emailId");var expire_time_day=new Date((new Date()).getTime()+1*24*3600000).toGMTString();var expire_time_mouth=new Date((new Date()).getTime()+30*24*3600000).toGMTString();if(ref&&!isNaN(ref)&&(referrerDomain==null||referrerDomain[1].indexOf("union.yhd.com")!=-1||referrerDomain[1].indexOf(tracker_domain_url)==-1)){document.cookie="unionKey="+ref+";expires="+expire_time_day+";domain=."+tracker_domain_url+";path=/";
if(uid){document.cookie="uid="+uid+";expires="+expire_time_day+";domain=."+tracker_domain_url+";path=/"}else{document.cookie="uid=;expires="+-1+";domain=."+tracker_domain_url+";path=/"}if(websiteid){document.cookie="websiteid="+websiteid+";expires="+expire_time_day+";domain=."+tracker_domain_url+";path=/"}else{document.cookie="websiteid=;expires="+-1+";domain=."+tracker_domain_url+";path=/"}}if(adgroupKeywordID){document.cookie="adgroupKeywordID="+adgroupKeywordID+";expires="+expire_time_day+";domain=."+tracker_domain_url+";path=/"}if(utype){document.cookie="unionType="+utype+";expires="+expire_time_mouth+";domain=."+tracker_domain_url+";path=/"}if(edmEmail){document.cookie="edmEmail="+edmEmail+";domain=."+tracker_domain_url+";path=/"}function setTrackerPublicParams(x){if(!x){x=trackerContainer
}function s(){var a=navigator.connection||navigator.mozConnection||navigator.webkitConnection||{type:"unknown"};var b=["unknown","ethernet","wifi","2g","3g","4g","none"];if(typeof(a.type)=="number"){a.type_text=b[a.type]}else{a.type_text=a.type}return a.type_text}var C=$.os.version;var q=y();var r=B();var u=$.browser.version;var v="";var w="";var t="";var A=s();p();function p(){var c=$.fn.cookie("osType");if(c&&c!=20){u=$.fn.cookie("ClientAppVersion");q=$.fn.cookie("clientInfo");r="yhdapp"}if(typeof h5tonative!="undefined"&&h5tonative.isWireless2()){var a=$.fn.cookie("clientinfo");r="yhdapp";if(a){try{a=JSON.parse(a);C=a.clientVersion;u=a.clientAppVersion;q=a.clientSystem;v=a.latitude;w=a.longitude;A=a.nettype;t=a.phoneType}catch(b){}}}if(!q){q=y()}}function y(){var e="iPod|iTouch|iPhone|iPad";
var b="Android|BlackBerry|SymbianOS|SymbOS|Windows Phone OS|WAP|Kindle|pad|pod";var d=window.navigator.userAgent;var c=new RegExp(e,"i");var a=new RegExp(b,"i");if(c.test(d)){return"IOSSystem"}else{if(a.test(d)){return"AndroidSystem"}}return navigator.platform}function B(){if($.browser.chrome){return"br_chrome"}else{if($.browser.firefox){return"br_firefox"}else{if($.browser.safari||$.browser.webview){return"safari"}else{if($.browser.ie){return"br_ie"}else{if($.browser.uc){return"br_uc"}else{if($.browser.baidu){return"br_baidu"}else{if($.browser.qq){return"br_qq"}else{if($.browser.xiaomi){return"br_xiaomi"}else{if($.browser.weixin){return"weixin"}else{return"unknown"}}}}}}}}}}x.addParameter(new Parameter("container",r));x.addParameter(new Parameter("containerVersion",u));x.addParameter(new Parameter("platform",q));
x.addParameter(new Parameter("platVersion",C));x.addParameter(new Parameter("netType",A));x.addParameter(new Parameter("phoneType",t));if(v){x.addParameter(new Parameter("latitude",v))}if(w){x.addParameter(new Parameter("longitude",w))}var D=z();if(D){D=encodeURIComponent(D);trackerContainer.addParameter(new Parameter("infoPageId",D))}function z(){var b=null;try{if(parent!==window){try{b=parent.location.href}catch(a){b=document.referrer}}}catch(a){}return b}}setTrackerPublicParams(trackerContainer);define("abtestPv_tracker",["base_observer","biz_loli_page","tracker_ref_yhd.global_spm"],function(m,g,j){var h={};var l=[];m.subscribe("abtestPvEvent",function(f){if(!f){return}var d=f.data("abtestPvFlag");if(d!="1"){var e=f.attr("data-abtest")||0;if(e){var c=j.glABcodeToTag(e);if(c){var a=".";var n="1";
var b=j.getData(f);e=n+a+c;gotracker(2,"abtest-pv","",b)}}f.data("abtestPvFlag",1)}});function k(){if(typeof(m)=="object"){if(l.length>0){var a=0;while(a<l.length){if(l[a]&&l[a].style&&l[a].style.display!="none"&&g.page.isVisualByTop(l[a])){m.fire("abtestPvEvent",$(l[a]));l[a]=null}a++}}}}h.run=function(b){var a=200,c=null;if(b){l=b}if(l.length<1){l=$("[data-abtest]")}setTimeout(function(){k()},500);$(window).bind("scroll",function(){c&&clearTimeout(c);c=setTimeout(function(){k()},a)})};return h});if(typeof common_globalTimingRely!="undefined"&&common_globalTimingRely){common_globalTimingRely.addResource("TRICKERT")}if(trackerGetCookie("unionKey")){trackerContainer.addParameter(new Parameter("tracker_u",trackerGetCookie("unionKey")))}if(trackerGetCookie("unionType")){trackerContainer.addParameter(new Parameter("tracker_type",trackerGetCookie("unionType")))
}if(trackerGetCookie("adgroupKeywordID")){trackerContainer.addParameter(new Parameter("adgroupKeywordID",trackerGetCookie("adgroupKeywordID")))}if(trackerGetCookie("edmEmail")){trackerContainer.addParameter(new Parameter("edmEmail",trackerGetCookie("edmEmail")))}if(trackerGetCookie("yihaodian_uid")){trackerContainer.addParameter(new Parameter("endUserId",trackerGetCookie("yihaodian_uid")))}if(trackerGetCookie("abtest")){trackerContainer.addParameter(new Parameter("extField6",trackerGetCookie("abtest")))}if(trackerGetCookie("provinceId")){trackerContainer.addParameter(new Parameter("provinceId",trackerGetCookie("provinceId")))}if(trackerGetCookie("extField8")){trackerContainer.addParameter(new Parameter("extField8",trackerGetCookie("extField8")))}if(trackerGetCookie("extField9")){trackerContainer.addParameter(new Parameter("extField9",trackerGetCookie("extField9")))
}if(trackerGetCookie("extField10")){trackerContainer.addParameter(new Parameter("extField10",trackerGetCookie("extField10")))}var sendTrackerCookie="";if(trackerGetCookie("msessionid")){sendTrackerCookie="msessionid:"+trackerGetCookie("msessionid")}if(trackerGetCookie("uname")){sendTrackerCookie+=",uname:"+trackerGetCookie("uname")}if(trackerGetCookie("unionKey")){sendTrackerCookie+=",unionKey:"+trackerGetCookie("unionKey")}if(trackerGetCookie("unionType")){sendTrackerCookie+=",unionType:"+trackerGetCookie("unionType")}if(trackerGetCookie("tracker")){sendTrackerCookie+=",tracker:"+trackerGetCookie("tracker")}if(trackerGetCookie("LTINFO")){sendTrackerCookie+=",LTINFO:"+trackerGetCookie("LTINFO")}if(sendTrackerCookie){trackerContainer.addParameter(new Parameter("cookie",sendTrackerCookie))}if(getQueryStringRegExp("tracker_src")){trackerContainer.addParameter(new Parameter("infoTrackerSrc",getQueryStringRegExp("tracker_src")))
}if(getQueryStringRegExp("fee")){trackerContainer.addParameter(new Parameter("fee",getQueryStringRegExp("fee")))}if(typeof tracker_global!="undefined"&&tracker_global){for(var i in tracker_global){trackerContainer.addParameter(new Parameter(i,tracker_global[i]))}}trackerContainer.addParameter(new Parameter("clientTime",new Date().getTime()));function sendPvTrackerInH5(){var b=trackerGetCookie("linkPosition");if(b){trackerContainer.addParameter(new Parameter("linkPosition",b));trackerClearCookieWithName("linkPosition",b)}require(["tracker_ref_yhd.global_spm"],function(z){if(window.performance&&typeof common_globalTimingRely!="undefined"&&common_globalTimingRely){var D=-1;try{var v=new Date().getTime();var w=window.performance,A=w.timing;D=v-A.navigationStart;common_globalTimingRely.setRelyResource("TRICKERT",D)
}catch(a){}}var x=z.getNewPageData();if(x&&typeof(x)=="object"){var u=x.pageType;var E=x.pageId;var e=x.uniId;var B=u+"."+E+".0.0.0."+e;trackerContainer.addParameter(new Parameter("infoPageId",B));for(var C in x){trackerContainer.addParameter(new Parameter(C,x[C]))}}var s=trackerGetCookie("pmInfoId");if(s){trackerContainer.addParameter(new Parameter("extField7",s));trackerClearCookieWithName("pmInfoId",s)}var y=trackerGetCookie("productId");if(y){trackerContainer.addParameter(new Parameter("productId",y));trackerClearCookieWithName("productId",y)}var t=new Image(1,1);t.src=trackerContainer.toUrl()})}$(document).ready(function(){if(trackerContainer&&trackerContainer.timeout){var c=trackerContainer.timeout;setTimeout(function(){sendPvTrackerInH5()},c)}else{sendPvTrackerInH5()}try{require(["abtestPv_tracker"],function(a){a.run()
})}catch(d){}});