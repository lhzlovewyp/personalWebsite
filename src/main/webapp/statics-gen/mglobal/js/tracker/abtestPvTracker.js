define("abtestPv_tracker",["base_observer","biz_loli_page","tracker_ref_yhd.global_spm"],function(l,g,i){var h={};var k=[];l.subscribe("abtestPvEvent",function(f){if(!f){return}var d=f.data("abtestPvFlag");if(d!="1"){var e=f.attr("data-abtest")||0;if(e){var c=i.glABcodeToTag(e);if(c){var a=".";var n="1";var b=i.getData(f);e=n+a+c;gotracker(2,"abtest-pv","",b)}}f.data("abtestPvFlag",1)}});function j(){if(typeof(l)=="object"){if(k.length>0){var a=0;while(a<k.length){if(k[a]&&k[a].style&&k[a].style.display!="none"&&g.page.isVisualByTop(k[a])){l.fire("abtestPvEvent",$(k[a]));k[a]=null}a++}}}}h.run=function(b){var a=200,c=null;if(b){k=b}if(k.length<1){k=$("[data-abtest]")}setTimeout(function(){j()},500);$(window).bind("scroll",function(){c&&clearTimeout(c);c=setTimeout(function(){j()},a)})};return h
});