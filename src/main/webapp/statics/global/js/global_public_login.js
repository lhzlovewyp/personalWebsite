/* SVN.committedRevision=1532223 */
var returnUrl=document.location.href;var yhdPublicLogin=yhdPublicLogin||{};var URLPrefix_passport=URLPrefix.passport;yhdPublicLogin.checkLogin=function(){if(yhdPublicLogin.getCookie("ut")){return true}else{return false}};yhdPublicLogin.getCookie=function(h){var g=document.cookie.split(";");for(var e=0;e<g.length;e++){var f=g[e].split("=");if(f[0].replace(/(^\s*)|(\s*$)/g,"")==h){return f[1]}}return""};yhdPublicLogin.loadCssAndJs=function(f,h){var g="";var e=0;if(typeof currVersionNum!="undefined"){e=currVersionNum}if(h=="js"){g=document.createElement("script");g.setAttribute("type","text/javascript");g.setAttribute("charset","UTF-8");g.setAttribute("src",f+"?"+e)}else{if(h=="css"){g=document.createElement("link");g.setAttribute("rel","stylesheet");g.setAttribute("type","text/css");g.setAttribute("href",f+"?"+e)
}}if(typeof g!="undefined"){document.getElementsByTagName("head")[0].appendChild(g)}};yhdPublicLogin.showLoginDiv=function(q,o,m){if(o&&yhdPublicLogin.checkLogin()){return}if(q){var p="";if(q.toLowerCase().indexOf("http")<0){var k=window.location.protocol;var j=window.location.host;var l=k+"//"+j;p=l}var r=p+q;returnUrl=r}try{passportLoginFrame(URLPrefix_passport,null,function(b){try{if(returnUrl){window.location.href=returnUrl}else{window.location.reload(true)}}catch(a){}},m)}catch(n){}};yhdPublicLogin.showLoginDivNone=function(e,l,i,j,h){if(l&&yhdPublicLogin.checkLogin()){return}try{passportLoginFrame(e,i,j,h)}catch(k){}};yhdPublicLogin.showTopLoginInfo=function(){try{writeHeaderContent()}catch(b){}};jQuery(document).ready(function(){var b="";if(URLPrefix&&URLPrefix.statics){b=URLPrefix.statics
}else{if(currSiteId&&currSiteId==2){b="http://image.111.com.cn/statics"}else{b="http://image.yihaodianimg.com/statics"}}yhdPublicLogin.loadCssAndJs(b+"/global/css/global_yhdLib.css","css");yhdPublicLogin.loadCssAndJs(b+"/global/js/global_yhdLib.js","js");yhdPublicLogin.loadCssAndJs(URLPrefix_passport+"/front-passport/passport/js/login_frame_client.js","js")});