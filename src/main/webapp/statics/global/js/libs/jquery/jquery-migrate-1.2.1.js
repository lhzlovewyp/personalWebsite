(function(al,ae,ad){al.migrateMute=1;var Q={};al.migrateWarnings=[];if(!al.migrateMute&&ae.console&&ae.console.log){ae.console.log("JQMIGRATE: Logging is active")}if(al.migrateTrace===ad){al.migrateTrace=true}al.migrateReset=function(){Q={};al.migrateWarnings.length=0};function ai(a){var b=ae.console;if(!Q[a]){Q[a]=true;al.migrateWarnings.push(a);if(b&&b.warn&&!al.migrateMute){b.warn("JQMIGRATE: "+a);if(al.migrateTrace&&b.trace){b.trace()}}}}function K(e,c,a,d){if(Object.defineProperty){try{Object.defineProperty(e,c,{configurable:true,enumerable:true,get:function(){ai(d);return a},set:function(f){ai(d);a=f}});return}catch(b){}}al._definePropertyBroken=true;e[c]=a}if(document.compatMode==="BackCompat"){ai("jQuery is not compatible with Quirks Mode")}var L=al("<input/>",{size:1}).attr("size")&&al.attrFn,ag=al.attr,O=al.attrHooks.value&&al.attrHooks.value.get||function(){return null
},ac=al.attrHooks.value&&al.attrHooks.value.set||function(){return ad},ak=/^(?:input|button)$/i,Z=/^[238]$/,I=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,M=/^(?:checked|selected)$/i;K(al,"attrFn",L||{},"jQuery.attrFn is deprecated");al.attr=function(f,b,e,a){var c=b.toLowerCase(),d=f&&f.nodeType;if(a){if(ag.length<4){ai("jQuery.fn.attr( props, pass ) is deprecated")}if(f&&!Z.test(d)&&(L?b in L:al.isFunction(al.fn[b]))){return al(f)[b](e)}}if(b==="type"&&e!==ad&&ak.test(f.nodeName)&&f.parentNode){ai("Can't change the 'type' of an input or button in IE 6/7/8")}if(!al.attrHooks[c]&&I.test(c)){al.attrHooks[c]={get:function(i,j){var g,h=al.prop(i,j);return h===true||typeof h!=="boolean"&&(g=i.getAttributeNode(j))&&g.nodeValue!==false?j.toLowerCase():ad
},set:function(i,g,j){var h;if(g===false){al.removeAttr(i,j)}else{h=al.propFix[j]||j;if(h in i){i[h]=true}i.setAttribute(j,j.toLowerCase())}return j}};if(M.test(c)){ai("jQuery.fn.attr('"+c+"') may use property instead of attribute")}}return ag.call(al,f,b,e)};al.attrHooks.value={get:function(c,a){var b=(c.nodeName||"").toLowerCase();if(b==="button"){return O.apply(this,arguments)}if(b!=="input"&&b!=="option"){ai("jQuery.fn.attr('value') no longer gets properties")}return a in c?c.value:null},set:function(a,c){var b=(a.nodeName||"").toLowerCase();if(b==="button"){return ac.apply(this,arguments)}if(b!=="input"&&b!=="option"){ai("jQuery.fn.attr('value', val) no longer sets properties")}a.value=c}};var aa,Y,X=al.fn.init,ab=al.parseJSON,S=/^([^<]*)(<[\w\W]+>)([^>]*)$/;al.fn.init=function(d,a,b){var c;
if(d&&typeof d==="string"&&!al.isPlainObject(a)&&(c=S.exec(al.trim(d)))&&c[0]){if(d.charAt(0)!=="<"){ai("$(html) HTML strings must start with '<' character")}if(c[3]){ai("$(html) HTML text after last tag is ignored")}if(c[0].charAt(0)==="#"){ai("HTML string cannot start with a '#' character");al.error("JQMIGRATE: Invalid selector string (XSS)")}if(a&&a.context){a=a.context}if(al.parseHTML){return X.call(this,al.parseHTML(c[2],a,true),a,b)}}return X.apply(this,arguments)};al.fn.init.prototype=al.fn;al.parseJSON=function(a){if(!a&&a!==null){ai("jQuery.parseJSON requires a valid JSON string");return null}return ab.apply(this,arguments)};al.uaMatch=function(a){a=a.toLowerCase();var b=/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||a.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[];
return{browser:b[1]||"",version:b[2]||"0"}};if(!al.browser){aa=al.uaMatch(navigator.userAgent);Y={};if(aa.browser){Y[aa.browser]=true;Y.version=aa.version}if(Y.chrome){Y.webkit=true}else{if(Y.webkit){Y.safari=true}}al.browser=Y}K(al,"browser",al.browser,"jQuery.browser is deprecated");al.sub=function(){function a(e,d){return new a.fn.init(e,d)}al.extend(true,a,this);a.superclass=this;a.fn=a.prototype=this();a.fn.constructor=a;a.sub=this.sub;a.fn.init=function b(e,d){if(d&&d instanceof al&&!(d instanceof a)){d=a(d)}return al.fn.init.call(this,e,d,c)};a.fn.init.prototype=a.fn;var c=a(document);ai("jQuery.sub() is deprecated");return a};al.ajaxSetup({converters:{"text json":al.parseJSON}});var ah=al.fn.data;al.fn.data=function(b){var c,d,a=this[0];if(a&&b==="events"&&arguments.length===1){c=al.data(a,b);
d=al._data(a,b);if((c===ad||c===d)&&d!==ad){ai("Use of jQuery.fn.data('events') is deprecated");return d}}return ah.apply(this,arguments)};var af=/\/(java|ecma)script/i,W=al.fn.andSelf||al.fn.addBack;al.fn.andSelf=function(){ai("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()");return W.apply(this,arguments)};if(!al.clean){al.clean=function(i,h,b,f){h=h||document;h=!h.nodeType&&h[0]||h;h=h.ownerDocument||h;ai("jQuery.clean() is deprecated");var e,g,d,a,c=[];al.merge(c,al.buildFragment(i,h).childNodes);if(b){d=function(j){if(!j.type||af.test(j.type)){return f?f.push(j.parentNode?j.parentNode.removeChild(j):j):b.appendChild(j)}};for(e=0;(g=c[e])!=null;e++){if(!(al.nodeName(g,"script")&&d(g))){b.appendChild(g);if(typeof g.getElementsByTagName!=="undefined"){a=al.grep(al.merge([],g.getElementsByTagName("script")),d);
c.splice.apply(c,[e+1,0].concat(a));e+=a.length}}}}return c}}var G=al.event.add,H=al.event.remove,P=al.event.trigger,V=al.fn.toggle,U=al.fn.live,aj=al.fn.die,R="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",N=new RegExp("\\b(?:"+R+")\\b"),T=/(?:^|\s)hover(\.\S+|)\b/,J=function(a){if(typeof(a)!=="string"||al.event.special.hover){return a}if(T.test(a)){ai("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'")}return a&&a.replace(T,"mouseenter$1 mouseleave$1")};if(al.event.props&&al.event.props[0]!=="attrChange"){al.event.props.unshift("attrChange","attrName","relatedNode","srcElement")}if(al.event.dispatch){K(al.event,"handle",al.event.dispatch,"jQuery.event.handle is undocumented and deprecated")}al.event.add=function(d,a,e,c,b){if(d!==document&&N.test(a)){ai("AJAX events should be attached to document: "+a)
}G.call(this,d,J(a||""),e,c,b)};al.event.remove=function(c,e,d,b,a){H.call(this,c,J(e)||"",d,b,a)};al.fn.error=function(){var a=Array.prototype.slice.call(arguments,0);ai("jQuery.fn.error() is deprecated");a.splice(0,0,"error");if(arguments.length){return this.bind.apply(this,a)}this.triggerHandler.apply(this,a);return this};al.fn.toggle=function(f,b){if(!al.isFunction(f)||!al.isFunction(b)){return V.apply(this,arguments)}ai("jQuery.fn.toggle(handler, handler...) is deprecated");var c=arguments,d=f.guid||al.guid++,a=0,e=function(h){var g=(al._data(this,"lastToggle"+f.guid)||0)%a;al._data(this,"lastToggle"+f.guid,g+1);h.preventDefault();return c[g].apply(this,arguments)||false};e.guid=d;while(a<c.length){c[a++].guid=d}return this.click(e)};al.fn.live=function(a,b,c){ai("jQuery.fn.live() is deprecated");
if(U){return U.apply(this,arguments)}al(this.context).on(a,this.selector,b,c);return this};al.fn.die=function(b,a){ai("jQuery.fn.die() is deprecated");if(aj){return aj.apply(this,arguments)}al(this.context).off(b,this.selector||"**",a);return this};al.event.trigger=function(b,a,c,d){if(!c&&!N.test(b)){ai("Global events are undocumented and deprecated")}return P.call(this,b,a,c||document,d)};al.each(R.split("|"),function(a,b){al.event.special[b]={setup:function(){var c=this;if(c!==document){al.event.add(document,b+"."+al.guid,function(){al.event.trigger(b,null,c,true)});al._data(this,b,al.guid++)}return false},teardown:function(){if(this!==document){al.event.remove(document,b+"."+al._data(this,b))}return false}}})})(jQuery,window);