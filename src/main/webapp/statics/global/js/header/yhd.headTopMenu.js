var yhdHead=window.yhdHead=window.yhdHead||{};yhdHead.topMenuImgLazyLoad=function(){jQuery("#wideScreenTabShowID li img").each(function(){jQuery(this).attr("src",function(){return jQuery(this).attr("original")}).removeAttr("original")});jQuery("#allCategoryHeader ul li h3 img").each(function(){jQuery(this).attr("src",function(){return jQuery(this).attr("original")}).removeAttr("original")})};yhdHead.newTopTabShow=function(b,a){if(b>a){jQuery("#wideScreenTabShowID li").each(function(c){if(c==a-1){jQuery(this).addClass("kf")}if(c>a-1){jQuery(this).remove()}})}};yhdHead.oldTopTabShow=function(b,a){if(b>a){jQuery("#global_menu span").each(function(c){if(c>a-1){jQuery(this).remove()}})}};yhdHead.dealWideNarrowScreen=function(){var b=typeof isWidescreen!="undefined"?isWidescreen:false;if(currSiteId==1){var a=jQuery("#wideScreenTabShowID li").length;
var c=jQuery("#global_menu span").length;if(!b){yhdHead.newTopTabShow(a,10);yhdHead.oldTopTabShow(c,7)}else{if(isIndex){if(isIndex==1){yhdHead.newTopTabShow(a,10)}else{yhdHead.newTopTabShow(a,10)}}else{yhdHead.newTopTabShow(a,10)}yhdHead.oldTopTabShow(c,7)}}};yhdHead.topMenuTrackInit=function(){jQuery("#wideScreenTabShowID li a[tk]").click(function(){var b=$(this),a=b.attr("tk");if(a){addTrackPositionToCookie("1",a)}});jQuery("#global_menu span a[tk]").click(function(){var b=$(this),a=b.attr("tk");if(a){addTrackPositionToCookie("1",a)}})};jQuery(function(){yhdHead.topMenuImgLazyLoad();yhdHead.topMenuTrackInit()});