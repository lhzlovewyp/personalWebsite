define("libs_c_slide",function(){function b(j){this.config=j||{};var m=document.querySelector(this.config.selector),l=document.querySelector(this.config.wrapper),o=0,g=this;this.sliderDom=m;c(m,"com-slide");c(l,"com-slide-wrapper");o=l.offsetWidth;m.style.width=o+"px";for(var k=0;k<m.children.length;k++){m.children[k].style.width=o+"px"}if(m.childElementCount<2){c(m,"one_page");return}var n=m.firstElementChild;var h=m.lastElementChild;this.length=m.childElementCount;m.insertBefore(h.cloneNode(true),n);m.appendChild(n.cloneNode(true));this.totolLength=m.childElementCount;this.index=1;if(this.config.bindTouch){d(l,m,g)}this.pause=function(){var i=this;if(i.interval){clearInterval(i.interval);i.interval=null}};this.play=function(){var i=this;if(i.interval){return}else{i.interval=setInterval(function(){i.index=f(m,i.index,i.length,i,true)
},i.config.autoPlay.interval)}};if(this.config.autoPlay&&this.config.autoPlay.active){g.interval=setInterval(function(){g.index=f(m,g.index,g.length,g,true)},g.config.autoPlay.interval)}}function d(g,m,i){var o=g;var n=0,l=0,j=0,t=m,q=g.clientWidth,h=-q,s=i;o.addEventListener("touchstart",r,false);o.addEventListener("touchmove",p,false);o.addEventListener("touchend",k,false);function r(u){s.pause();h=-s.index*q;n=u.clientX||u.targetTouches[0].clientX}function p(u){u.preventDefault();j=u.clientX||u.targetTouches[0].clientX;l=j-n;a(t,"transform","translate3d("+(h+l)+"px,0,0)")}function k(){s.play();if(!l){return}if(l<0){s.index=f(t,s.index,s.length,s,true)}else{if(l>0){s.index=f(t,s.index,s.length,s,false)}}l=null}}function a(h,g,j){var i=g.replace(/(.{1})(.*)/,function(k,m,l){return m.toUpperCase()+l
});h.style["webkit"+i]=j;h.style["ms"+i]=j;h.style[g]=j}function f(l,i,m,j,h){var g=j;var k=l.offsetWidth;c(l,"move");h?i++:i--;a(l,"transform","translate3d(-"+k*i+"px, 0, 0)");if(i>m){i=1;setTimeout(function(){e(l,"move");a(l,"transform","translate3d(-"+k*i+"px, 0, 0)")},300)}else{if(i<=0){i=m;setTimeout(function(){e(l,"move");a(l,"transform","translate3d(-"+k*i+"px, 0, 0)")},300)}else{setTimeout(function(){e(l,"move")},300)}}g.config.callback(i-1);g.realIndex=i-1;return i}function c(h,g){if(h.classList){h.classList.add(g)}else{var i=new RegExp(g);if(!i.test(g)){h.className+=" "+g}}}function e(h,g){if(h.classList){h.classList.remove(g)}else{var i=new RegExp(g,"g");h.className=h.className.replace(i,"")}}b.prototype.getCount=function(){return this.length};b.prototype.getIndex=function(){return this.realIndex
};b.prototype.next=function(){this.index=f(this.sliderDom,this.index,this.length,this,true)};b.prototype.go=function(g){this.index=f(this.sliderDom,g,this.length,this,true)};b.prototype.prev=function(){this.index=f(this.sliderDom,this.index,this.length,this,false)};return b});