(function(){function c(f){if(f&&typeof(f)=="string"){return f.replace(/(^\s*)|(\s*$)/g,"")}else{return f}}function e(){if(typeof(localStorage)=="undefined"){return false}if(typeof(webPercent)=="undefined"){webPercent=100}var f=parseInt(Math.random()*100);try{if(localStorage.getItem("_webpPercent")){f=localStorage.getItem("_webpPercent")}else{localStorage.setItem("_webpPercent",f)}}catch(g){}return webPercent<f?false:true}function d(){if(typeof(localStorage)=="undefined"){return false}var f=localStorage.getItem("webp");if(f){return true}var g=document.createElement("canvas");if(!!(g.getContext&&g.getContext("2d"))){var h=g.toDataURL("image/webp").indexOf("data:image/webp")==0;if(h){localStorage.setItem("webp",true)}return h}else{return false}}var b=d();if(b){b=e()}function a(g){if(!b||!g){return g
}g=c(g);var h=/^(http|https):\/\/(d\d{1,2})/;if(g.search(h)==-1){return g}var f=g.split(".");if(f.length>1){f[f.length-1]="webp"}return f.join(".")}loli.webp=a})();