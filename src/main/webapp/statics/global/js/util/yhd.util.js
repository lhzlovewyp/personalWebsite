(function(){var e=window.loli||(window.loli={});var f=e;var d=f.util=f.util||{};d.hashImgUrl=function(c){var b="http:\\/\\/d(\\\d{1,2})\\.";var a=new RegExp(b,"i");if(a.test(c)){var h=d.toHash(c);return c.replace(a,"http://d"+(h%4+6)+".")}else{return c}};d.toHash=function(a){var b=0;for(var c=0;c<a.length;c++){if(a[c]){b+=a[c].charCodeAt()}}return b};d.isIE=function(){var a=window.navigator.userAgent.toLowerCase();var c=/msie ([\d\.]+)/;if(c.test(a)){var b=parseInt(c.exec(a)[1]);return b}return 0};d.generateMixed=function(j){var c=["1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","J","K","M","N","P","Q","R","S","T","U","V","W","X","Y","Z"];var a="";for(var b=0;b<j;b++){var i=Math.floor(Math.random()*32);a+=c[i]}return a}})();