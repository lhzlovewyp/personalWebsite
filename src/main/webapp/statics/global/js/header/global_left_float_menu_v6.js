(function(b){var a=(function(){var d=300;var f=function(){};var e={rowSelector:"> li",submenuSelector:"*",submenuDirection:"right",tolerance:75,over:f,out:f,active:f,deactive:f,exit:f};var c=[],i=null,j=null;var h=false;var g=function(l,k){return(k.y-l.y)/(k.x-l.x)};return function(o){var k=b(this);var l=b.extend(e,o);var m=null;var p=function(){if(this==m){return}if(m){l.deactive.call(m)}l.active.call(this);m=this};var n=function(s){var r=q();if(r){j=setTimeout(function(){p.call(s)},r)}else{p.call(s)}};var q=function(){if(!m||!b(m).is(l.submenuSelector)){return 200}var v=k.offset(),r={x:v.left,y:v.top-l.tolerance},B={x:v.left+k.outerWidth(),y:r.y},D={x:v.left,y:v.top+k.outerHeight()+l.tolerance},w={x:v.left+k.outerWidth(),y:D.y},x=c[c.length-1],A=c[0];if(!x){return 0}if(!A){A=x}if(A.x<v.left||A.x>w.x||A.y<v.top||A.y>w.y){return 0
}if(i&&x.x==i.x&&x.y==i.y){return 0}var z=B,s=w;if(l.submenuDirection=="left"){z=D;s=r}else{if(l.submenuDirection=="below"){z=w;s=D}else{if(l.submenuDirection=="above"){z=r;s=B}}}var t=g(x,z),y=g(x,s),C=g(A,z),u=g(A,s);if(t<C&&y>u){i=x;return d}i=null;return 0};h===false&&b(document).bind("mousemove.initMenu",function(r){c.push({x:r.pageX,y:r.pageY});if(c.length>3){c.shift()}});k.bind("mouseleave.initMenu",function(){j&&clearTimeout(j);if(l.exit.call(this)===true){if(m){l.deactive.call(m)}m=null}}).find(l.rowSelector).bind("mouseenter.initMenu",function(){j&&clearTimeout(j);l.over.call(this);n(this)}).bind("mouseleave.initMenu",function(){l.out.call(this)}).bind("click.initMenu",function(){p.call(this)})}})();b.fn.yhdMenu=function(c){return this.each(function(){a.call(this,c)})}})(jQuery);(function(f){function b(r,w){var v=f(r);
if(v.size()==0){return}var s=v.data("flag");if(s==1){return}v.data("flag",1);var n=new Date().getTime();var m=v.find("div[categoryId]");var p=m.attr("categoryId");var y=m.attr("cindex");var u="GLOBALLEFTMENU_"+p;var q=jQuery.cookie("provinceId");var t=typeof(currProvinceId)!="undefined"?currProvinceId:(q?q:1);var o={categoryId:p,cindex:y,leftMenuProvinceId:t,isFixTopNav:isFixTopNav};var x=function(C){m.append(C.value);var E=v.find(".hd_show_sort");E.removeClass("global_loading");v.data("loaded",1);if(v.hasClass("cur")){E.show();if(typeof require!="undefined"&&require){var A=v.find("[data-recordTracker]");require(["base_observer"],function(F){F.fire("adContentTrackerEvent",A)});require(["base_observer"],function(F){v.attr("data-mrt",0);F.fire("impressionEvent",v)})}}var D=new Date().getTime();
loli.timing.sendTimerTracker("LMT_"+(D-n));var z=m.find("div.hd_sort_spot img");var B=typeof isWidescreen!="undefined"?isWidescreen:false;z.each(function(G,F){var H=f(F);H.attr("src",B?H.attr("wi"):H.attr("si"))});if(z.size()!=0&&(B)){if(typeof(loli)!="undefine"&&loli.cpm){loli.cpm.initAjaxReplaceAdvertise(m.find("textarea"))}v.removeClass("hd_no_pic")}};f.ajax({url:w,data:o,dataType:"jsonp",timeout:5000,jsonpCallback:u,cache:true,success:function(z){if(z){x(z)}}})}function k(){var m=(isIndex==1&&(typeof(indexFlag)!="undefined"&&typeof(indexFlag)=="number"&&indexFlag==1));if(!m&&typeof isMallIndex!="undefined"&&isMallIndex==1){m=1}var o=function(){var s=currDomain+"/header/ajaxGetGlobalLeftFloatMenuDataV12.do";if(typeof isMallIndex!="undefined"&&isMallIndex==1){s=currDomain+"/header/ajaxGetGlobalLeftFloatMenuDataV11.do"
}var q=f("#j_allsort");var r=q.children();q.yhdMenu({active:function(){var w=f(this);w.addClass("cur");b(w,s);var u=w.index();for(var t=u+1;t<u+4;t++){if(r[t]){b(r[t],s)}}for(var t=u-3;t<u;t++){if(r[t]){b(r[t],s)}}if(w.data("loaded")&&typeof require!="undefined"&&require){var v=w.find("[data-recordTracker]");require(["content_tracker_expo"],function(x){x.run("adContentTrackerEvent","ad.dolphin.bidding",v)});require(["base_observer"],function(x){w.attr("data-mrt",0);x.fire("impressionEvent",w)})}},deactive:function(){f(this).removeClass("cur")},exit:function(){return true}})};if(m){o();if(typeof isIndex!="undefined"&&isIndex==1&&typeof isFixTopNav!="undefined"&&isFixTopNav==true){var n=function(){var q;jQuery("#allSortOuterbox").hover(function(){if(q){clearTimeout(q)}q=setTimeout(function(){if(!f("#headerNav").hasClass("hd_nav_fixed")){return
}f("#allCategoryHeader").show();f("#allSortOuterbox").addClass("hover")},300)},function(){if(q){clearTimeout(q)}q=setTimeout(function(){if(!f("#headerNav").hasClass("hd_nav_fixed")){return}f("#allSortOuterbox li.cur").removeClass("cur").children(".hd_show_sort").hide();f("#allSortOuterbox").removeClass("hover");f("#allCategoryHeader").hide()},300)})};n()}return}var p=function(){var q=currDomain+"/header/ajaxGetGlobalRootMenuV6.do?callback=?";var s=function(t){if(t.value){f("#allCategoryHeader").data("loaded",1);f("#allCategoryHeader").removeClass("global_loading").html(t.value).show();f("#allSortOuterbox").addClass("hover");o()}};var r={currSiteId:(typeof currSiteId=="undefined")?1:currSiteId,currSiteType:1,version:1,provinceId:f.cookie("provinceId")||1};f.ajax({url:q,data:r,dataType:"jsonp",timeout:5000,jsonpCallback:"GLOBALROOTMENU",cache:true,success:function(t){if(t){s(t)
}}})};var n=function(){var q;jQuery("#allSortOuterbox").hover(function(){if(q){clearTimeout(q)}q=setTimeout(function(){f("#allCategoryHeader").show();f("#allSortOuterbox").addClass("hover");var r=f("#allCategoryHeader").data("loaded");if(!r){p()}},300)},function(){if(q){clearTimeout(q)}q=setTimeout(function(){jQuery("#allSortOuterbox li.cur").removeClass("cur").children(".hd_show_sort").hide();jQuery("#allSortOuterbox").removeClass("hover");jQuery("#allCategoryHeader").hide()},300)})};n()}function l(n){if(!f("#headerNav").hasClass("hd_nav_fixed")){var p=f("#allCategoryHeader").offset().top;var o=n.offset().top-p;var m=n.find(".hd_show_sort");var t=document.documentElement.scrollTop||document.body.scrollTop;var r=o+m.height()+p-t;var q=f(window).height()-30;var s=r-q;if(r>q){if(n.offset().top-t+n.height()-q>-10){o=n.position().top-m.height()+n.height()-2
}else{o=o-s-10}}if(m.height()>q){o=t-p}m.css({top:o})}else{n.find(".hd_show_sort").css({top:"0px"})}}function g(m){var o=window.loli||(window.loli={});var n=o.yhdStore;if(n){n.getFromRoot("category_history",function(x){if(x&&x.status==1){var w=x.value;var v=[];if(w){var s=w.split(",");for(var y=0;y<s.length;y++){var r=s[y];if(r){var p=r.split("~");var q=p[0];var u=decodeURIComponent(p[1]);var t=decodeURIComponent(p[2]);v.push({cateId:q,cateName:u,cateUrl:t})}}}if(typeof m=="function"){m(v)}}})}}function a(o){var n=[];if(o&&o.length>0){n.push("<div class='hd_sort_history clearfix'>历史记录");for(var m=o.length-1;m>=0;m--){n.push("<a href='"+o[m].cateUrl+"' target='_blank' data-ref='YHD_GLOBAL_CatMenu_History_"+o[m].cateId+"'>"+o[m].cateName+"</a>")}n.push("<a href='javascript:void(0);' tk='YHD_GLOBAL_CatMenu_DeleteHistory' class='hd_clear_history'>清除记录</a>");
n.push("</div>")}return n.join("")}function j(){f("#allCategoryHeader").delegate("div.hd_sort_list a","click",function(){var q=f(this);var m=q.text();var p=q.attr("href");var r=q.attr("categoryId");var o=window.loli||(window.loli={});var n=o.yhdStore;if(n){n.getFromRoot("category_history",function(x){if(x&&x.status==1){var w=x.value;var t=[];if(w){t=w.split(",");var B=false;var A=0;for(var y=0;y<t.length;y++){var s=t[y];if(s){var z=s.split("~");var D=z[0];var v=decodeURIComponent(z[1]);var u=decodeURIComponent(z[2]);if(r==D){B=true;A=y;break}}}if(!B){t.push(r+"~"+encodeURIComponent(m)+"~"+encodeURIComponent(p));if(t.length>10){t.shift()}}else{if(A!=t.length-1){var C=t.splice(A,1);t.push(C[0])}}}else{t.push(r+"~"+encodeURIComponent(m)+"~"+encodeURIComponent(p))}n.setFromRoot("category_history",t.join(","),h)
}})}});f("#allCategoryHeader").delegate("div.hd_sort_history a.hd_clear_history","click",function(){var m=f(this).tk;gotracker(2,m);c()})}function c(){var m=window.loli||(window.loli={});var n=m.yhdStore;if(n){n.setFromRoot("category_history","")}f("#allCategoryHeader div.hd_sort_history").remove()}function h(){var m=function(n){var o=a(n);if(o.length>0){f("#allCategoryHeader div.hd_sort_history").remove();f("#allCategoryHeader div.hd_sort_list_wrap").append(o)}};g(m)}function i(n){var m=function(o){var p=a(o);if(p.length>0){f("div.hd_sort_list_wrap",n).append(p)}};g(m)}function d(){var o=window.navigator.userAgent;var m=/(iPad|pad)/i;if(!m.test(o)){return}jQuery("#j_allsort li").delegate("a","click",function(){var q=jQuery(this);var p=q.closest("li");if(p.hasClass("cur")){return true}else{return false
}});var n=jQuery("#allSortOuterbox");if(n.hasClass("not_index")){n.delegate(".hd_all_sort_link a","click",function(){if(n.hasClass("hover")){jQuery("#allSortOuterbox li.cur").removeClass("cur").children(".hd_show_sort").hide();n.children(".hd_allsort_out_box").hide();n.removeClass("hover")}else{n.children(".hd_allsort_out_box").show();n.addClass("hover")}return false})}}function e(){var m;f("#allCategoryHeader,#mallCategoryHeader").delegate("div.hd_show_sort .hd_good_category","mouseenter",function(){var s=f(this);m=s.parents(".hd_show_sort");var u=m.width();var p=s.attr("data-info");var v=f(this).position().left+f(this).outerWidth();var o=f(this).position().top-10;f(".hd_good_category_hover span",m).text(p);var q=f(".hd_good_category_hover",m).width();var n=/msie ([\d\.]+)/.test(window.navigator.userAgent.toLowerCase())&&parseInt(/msie ([\d\.]+)/.exec(window.navigator.userAgent.toLowerCase())[1])<=6;
if(n){var t=286;if(q>t){f(".hd_good_category_hover",m).width(t);q=t}else{f(".hd_good_category_hover",m).width("auto")}}if(q>u-v){var r=u-v+f(this).outerWidth();f(".hd_good_category_hover",m).show().css({left:"auto",right:r,top:o});f(".hd_good_category_hover b",m).css({left:"auto",right:"-1px","background-position":"0 -410px"})}else{f(".hd_good_category_hover",m).show().css({left:v,right:"auto",top:o});f(".hd_good_category_hover b",m).css({left:"-1px",right:"auto","background-position":"0 -400px"})}});f("#allCategoryHeader,#mallCategoryHeader").delegate("div.hd_show_sort .hd_good_category","mouseleave",function(){f(".hd_good_category_hover",m).hide()})}f(document).ready(function(){k();d();e()})})(jQuery);