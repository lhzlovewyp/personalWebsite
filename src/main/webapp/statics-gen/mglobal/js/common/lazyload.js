define("common_lazyload",["common_yhd_webp"],function(c){var d=function(){var b=this;function a(){var e=navigator.userAgent.toLowerCase();if(e.match(/MicroMessenger/i)=="micromessenger"){return true}else{return false}}function f(){var o=true;var q=null;if(a()){document.addEventListener("WeixinJSBridgeReady",function s(){WeixinJSBridge.invoke("getNetworkType",{},function(g){if(g.err_msg!="network_type:wifi"){o=false;q="weixin is wifi"}q="weixin not wifi"})});if(!q){var n=new RegExp("nettype/(\\w{1,6})");var t=n.exec(navigator.userAgent.toLowerCase());if(t&&t[1]){q="weixin user agent:"+t[1];if(t[1]=="unknown"){q=null}else{if(t[1]!="wifi"&&t[1]!="2"){o=false}}}}}else{if(h5tonative&&h5tonative.getClientInfo()){var e=h5tonative.getClientInfo().toLowerCase();if(e){var n=new RegExp('"nettype":"(\\w{1,6})"');
var t=n.exec(e);if(t&&t[1]){nettype=t[1];if(nettype!="wifi"){o=false}q="app client:"+nettype}}}}if(!q){var p=navigator.connection||navigator.mozConnection||navigator.webkitConnection;if(p&&p.type){q="connection api:"+p.type;if(p.type=="unknown"){q=null}else{if(p.type!="wifi"&&p.type!="2"){o=false}}}}if(!q&&window.performance&&window.performance.timing){var r=window.performance.timing.domLoading-performance.timing.fetchStart;if(r>802){o=false}q="timing api:"+r}return o}this.init=function(e){b.onerrorImgUrl=e.onerrorImgUrl;b.srcStore=e.srcStore;b.srcStore2x=e.srcStore2x;b.srcStore3x=e.srcStore3x;b.cla=e.cla;b.sensitivity=50;minScroll=5,slowScrollTime=200,wifi=f(),ios=navigator.appVersion.match(/(iPhone\sOS)\s([\d_]+)/),isIos=ios&&!0||!1,isoVersion=isIos&&ios[2].split("_");isoVersion=isoVersion&&parseFloat(isoVersion.length>1?isoVersion.splice(0,2).join("."):isoVersion[0],10),isIos=b.isPhone=isIos&&isoVersion<6;
if(isIos){var j,i;$(window).on("touchstart",function(){j={sy:window.scrollY,time:Date.now()},i&&clearTimeout(i)}).on("touchend",function(l){if(l&&l.changedTouches){var h=Math.abs(window.scrollY-j.sy);if(h>minScroll){var g=Date.now()-j.time;i=setTimeout(function(){b.changeimg(),j={},clearTimeout(i),i=null},g>slowScrollTime?0:200)}}else{b.changeimg()}}).on("touchcancel",function(){i&&clearTimeout(i),j={}})}else{$(window).on("scroll",function(){b.changeimg()})}setTimeout(function(){b.trigger()},90)};b.trigger=function(){var e=b.isPhone&&"touchend"||"scroll";b.imglist=$("img."+b.cla+",img[data-lazyload='1']");if(b.imglist&&b.imglist.length>0){$(window).trigger(e)}};b.changeimg=function(){function e(n){var g=window.pageYOffset,o=g+window.innerHeight,m=n.offset().top,p=n.height();return(m>=g&&m-b.sensitivity<=o)||(g-b.sensitivity<=m+p&&m+p<=o+b.sensitivity)
}function h(w,v){var F=w.attr(b.srcStore),g=w.attr(b.srcStore2x),y=w.attr(b.srcStore3x);if(!F){return}if(w.attr("isCut")){var z=/^(http|https):\/\/(d\d{1,2})/;var B=/_\d{1,}x\d{1,}\./;if(F.search(z)!=-1){var C=w.attr("width"),G=w.attr("height");if(B.test(F)&&!isNaN(C)&&!isNaN(G)){var x=F.split(".");if(x.length<2){return}var H=x.pop();var E="_"+C+"x"+G;F=x.join(".")+E+"."+H}}}if(wifi){if(y&&b.srcStore3x){w.attr("srcset",g+" 2x,"+y+" 3x").attr("src",c.replaceWebP(g))}else{if(g&&b.srcStore2x){w.attr("src",c.replaceWebP(g))}else{w.attr("src",c.replaceWebP(F))}}}else{if(!b.srcStore3x&&!b.srcStore2x){var B=/_(\d{1,4})x(\d{1,4})\.(\w{3,5})$/;var D=F.match(B);if(D){var C=D[1];var G=D[2];var A=D[3];if(C>10&&G>10&&A){C=Math.floor(C*0.5);G=Math.floor(G*0.5);F=F.replace(/_(\d{1,4})x(\d{1,4})\.(\w{3,5})$/,"_"+C+"x"+G+"."+A)
}}}w.attr("src",c.replaceWebP(F))}w[0].onload||(w[0].onload=function(){$(this).removeClass(b.cla).removeAttr(b.srcStore).removeAttr(b.srcStore2x).removeAttr(b.srcStore3x).removeAttr("data-lazyload"),b.imglist[v]=null,this.onerror=this.onload=null},w[0].onerror=function(){if(!b.onerrorImgUrl){return}this.src=b.onerrorImgUrl;$(this).removeClass(b.cla).removeAttr(b.srcStore).removeAttr(b.srcStore2x).removeAttr(b.srcStore3x).removeAttr("data-lazyload");b.imglist[v]=null;this.onerror=this.onload=null})}if(b.imglist&&b.imglist.length>0){b.imglist.each(function(k,g){if(!g){return}var l=$(g);if(!e(l)){return}if(!l.attr(b.srcStore)){return}h(l,k)})}}};return new d()});