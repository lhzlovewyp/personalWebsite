(function(){var f=window.loli||(window.loli={});var a=window,d=a.document,l,j="localStorage",g={};g.set=function(e,m){};g.get=function(e){};g.remove=function(e){};g.clear=function(){};function i(){try{return(j in a&&a[j])}catch(e){return false}}if(i()){l=a[j];g.set=function(e,m){if(m===undefined){return l.removeItem(e)}l.setItem(e,m);return m};g.get=function(e){return l.getItem(e)};g.remove=function(e){l.removeItem(e)};g.clear=function(){l.clear()}}else{if(d.documentElement.addBehavior){var c,k;try{k=new ActiveXObject("htmlfile");k.open();k.write('<script>document.w=window<\/script><iframe src="/favicon.ico"></iframe>');k.close();c=k.w.frames[0].document;l=c.createElement("div")}catch(b){l=d.createElement("div");c=d.body}function h(e){return function(){try{var n=Array.prototype.slice.call(arguments,0);
n.unshift(l);c.appendChild(l);l.addBehavior("#default#userData");l.load(j);var m=e.apply(g,n);c.removeChild(l);return m}catch(o){}}}g.set=h(function(n,e,m){if(m===undefined){return g.remove(e)}n.setAttribute(e,m);n.save(j);return m});g.get=h(function(m,e){return m.getAttribute(e)});g.remove=h(function(m,e){m.removeAttribute(e);m.save(j)});g.clear=h(function(p){var n=p.XMLDocument.documentElement.attributes;try{p.load(j)}catch(e){}for(var o=0,m;m=n[o];o++){p.removeAttribute(m.name)}p.save(j)})}}g.isRoot=function(){var e=true;var o=document.domain;var m=/([^\.]*)\.yhd\.com/;if(m.test(o)){var n=m.exec(o)[1];if(n!="www"){e=false}}return e};g.isIE=function(){var m=window.navigator.userAgent.toLowerCase();var n=/msie ([\d\.]+)/;if(n.test(m)){var e=parseInt(n.exec(m)[1]);return e}return 0};g.getDateStr=function(){var e=new Date();
return(e.getYear()+1900)+""+(e.getMonth()+1)+""+e.getDate()};g.setFromRoot=function(p,o,s){var q=s||function(){};if(g.isRoot()){var r=g.set(p,o);q({status:1,key:p,value:r})}else{if(!window.postMessage||!window.addEventListener){q({status:0,key:p,value:null});return}var m="globalLocalStorageAdaptorForSet";var t=$("#"+m);if(t.size()==0){var e=document.createElement("iframe");e.setAttribute("id",m);e.setAttribute("style","display:none");e.setAttribute("src",window.location.protocol+"//www.yhd.com/html/setLocalStorage.html?v="+g.getDateStr());document.body.appendChild(e);t=$("#"+m)}if(t.attr("loaded")){var v=t.get(0).contentWindow;var n=window.location.protocol+"//www.yhd.com";var u={key:p,value:o};if(g.isIE()==9){u='{"key":"'+p+'", "value":"'+o+'"}'}v.postMessage(u,n);q({status:1,key:p,value:o})
}else{t.load(function(){$(this).attr("loaded","1");var y=$(this).get(0).contentWindow;var x=window.location.protocol+"//www.yhd.com";var B={key:p,value:o};if(g.isIE()==9){B='{"key":"'+p+'", "value":"'+o+'"}'}y.postMessage(B,x);q({status:1,key:p,value:o})})}}};g.getFromRoot=function(w,u){var x=u||function(){};if(g.isRoot()){var e=g.get(w);x({status:1,key:w,value:e})}else{if(!window.postMessage||!window.addEventListener){x({status:0,key:w,value:null});return}var s=window["yhd.storage.get.callback"]||(window["yhd.storage.get.callback"]=[]);s.push(x);var q=s.length-1;var o="globalLocalStorageAdaptorForGet";var m=$("#"+o);if(m.size()==0){var p=document.createElement("iframe");p.setAttribute("id",o);p.setAttribute("style","display:none");p.setAttribute("src",window.location.protocol+"//www.yhd.com/html/getLocalStorage.html?v="+g.getDateStr());
document.body.appendChild(p);m=$("#"+o)}if(m.attr("loaded")){var n=m.get(0).contentWindow;var t=window.location.protocol+"//www.yhd.com";var y=window.location.protocol+"//"+window.location.host;var v={key:w,host:y,version:q};if(g.isIE()==9){v='{"key":"'+w+'", "host":"'+y+'", "version":"'+q+'"}'}n.postMessage(v,t)}else{m.load(function(){$(this).attr("loaded","1");var C=$(this).get(0).contentWindow;var A=window.location.protocol+"//www.yhd.com";var B=window.location.protocol+"//"+window.location.host;var z={key:w,host:B,version:q};if(g.isIE()==9){z='{"key":"'+w+'", "host":"'+B+'", "version":"'+q+'"}'}C.postMessage(z,A)})}var r=function(C){var B=/^http[s]?:\/\/([^\.]*)\.yhd\.com/i;if(B.test(C.origin)){var z=C.data;if(z){if(typeof z=="string"){z=$.parseJSON(z)}var A=s[z.version];if(A){A({status:1,key:z.key,value:z.value})
}else{x({status:1,key:z.key,value:z.value})}}}};if(!window["yhd.storage.get.handler"]){window.addEventListener("message",r);window["yhd.storage.get.handler"]=r}}};f.yhdStore=g})();