(function(f,k){if(typeof(isExistRecordCINTT)!="undefined"&&isExistRecordCINTT){return}if(typeof(k.addEventListener)=="undefined"){return}var o=f.global||(f.global={});var q=o.vars=(o.vars||{});o.vars.firstload=function(){o.vars.customInteractTime=new Date()};if(o.vars.customInteractTime){return}function l(i){var t=i.offsetTop;if(i.offsetParent!==null){t+=l(i.offsetParent)}return t}var n=null;var e=new Date();var d={};var j=f.screen.height;var g=[];var h=false;var a=false;var c=k.getElementsByTagName("img");var r,s,m=0;function b(){if(g.length){for(r=0;r<g.length;r++){s=g[r];if(s.complete){m++;if(m==g.length){a=true;o.vars.customInteractTime=new Date().getTime()}}s.src=s.src}}else{a=true}n=setInterval(function(){if(a){o.vars.customInteractTime=new Date().getTime();clearInterval(n)}},2)}for(r=0;
r<c.length;r++){s=c[r];if(s.width&&(s.width<25||s.height<25)){continue}var p=l(s);if(p>j){h=true;b();break}else{if(p<=j&&!s.hasPushed){s.hasPushed=1;g.push(s)}}}if(!h){h=true;b()}k.addEventListener("DOMContentLoaded",function(){if(!c.length){h=true}});f.addEventListener("load",function(){a=true;h=true;if(n){clearInterval(n)}})})(window,document);