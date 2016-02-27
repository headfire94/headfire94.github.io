$(window).on("load",function(){$("#page-preloader").hide(),$(".wrapper").show()}),$(document).ready(function(){$("#fullpage").fullpage({menu:"#menu",lockAnchors:!0,anchors:["home","about","skills","contacts"],scrollingSpeed:700,verticalCentered:!1,touchSensitivity:5,sectionsColor:["#edb336","rgb(75, 181, 234)","rgb(250,113,94)","rgb(76,214,188)"],sectionSelector:".section"}),$("#menu li").click(function(e){e.preventDefault(),$(this).fullpage.moveTo($(this).attr("data-menuanchor"))}),updatestate=function(e){"/portfolio"==e?($("#pages-transition").show(1e3,function(){$("#menu,#fullpage").hide(),$("#pages-transition").fadeOut(function(){$("#pages-transition").css({left:"0",right:"auto"}),$(".transition").css("transform","scale(-1,1)"),$.fn.fullpage.setAutoScrolling(!1)}),$("#portfolio").show()}),$("#portfolio-link").addClass("active"),$("#main-link").removeClass("active")):"/portfolio/"==e?($("#menu,#fullpage").hide(0,function(){$.fn.fullpage.setAutoScrolling(!1)}),$("#portfolio").show(0),$("#pages-transition").css({left:"0",right:"auto"}),$(".transition").css("transform","scale(-1,1)")):($("#pages-transition").show(1e3,function(){$("#portfolio").fadeOut("slow"),$("#pages-transition").fadeOut("slow",function(){$("#pages-transition").css({left:"auto",right:"0"}),$(".transition").css("transform","scale(1,1)"),$.fn.fullpage.setAutoScrolling(!0)}),$("#menu,#fullpage").show()}),$("#main-link").addClass("active"),$("#portfolio-link").removeClass("active"))},window.addEventListener("popstate",function(){"/portfolio/"!=window.location.pathname?updatestate(window.location.pathname):updatestate("/portfolio")}),$(".header-nav a").click(function(e){var n,o=$(this).attr("data-url");n=o,n!=window.location.pathname&&(history.pushState(n,"",n),e.preventDefault(),updatestate(n)),e.preventDefault()}),"/portfolio/"==window.location.pathname&&updatestate(state="/portfolio/"),$(".logo").click(function(e){"none"!=$("#fullpage").css("display")&&(e.preventDefault(),$.fn.fullpage.moveTo("home"))})}),!function(e,n){"use strict";"function"==typeof define&&define.amd?define(["jquery"],function(o){return n(o,e,e.document,e.Math)}):"undefined"!=typeof exports?module.exports=n(require("jquery"),e,e.document,e.Math):n(jQuery,e,e.document,e.Math)}("undefined"!=typeof window?window:this,function(e,n,o,t,i){"use strict";var a,l="pages-wrapper",r="."+l,s="fp-scrollable",c="."+s,f=".slimScrollBar",d=".slimScrollRail",u="fp-responsive",p="fp-notransition",h="fp-destroyed",v="fp-enabled",m="fp-viewing",g="active",S="."+g,w=".section",y="section",b="."+y,x=b+S,T=b+":first",C=b+":last",k="fp-tableCell",A="."+k,L="fp-auto-height",M="fp-nav",E="#"+M,$="fp-tooltip",B="fp-show-active",R=".slide",F="fp-slide",H="."+F,O=H+S,q="fp-slides",D="."+q,z="fp-slidesContainer",I="."+z,P="fp-table",V="fp-slidesNav",W="."+V,Y=W+" a",U="fp-controlArrow",X="."+U,N="fp-prev",K="."+N,j=U+" "+N,Q=X+K,G="fp-next",J="."+G,Z=U+" "+G,_=X+J,ee=e(n),ne=e(o);e.fn.fullpage=function(s){function c(){s.css3&&(s.css3=en()),s.anchors.length||(s.anchors=e(s.sectionSelector+"[data-anchor]").map(function(){return e(this).data("anchor").toString()}).get()),f(),Sn.setAllowScrolling(!0),An=ee.height(),Sn.setAutoScrolling(s.autoScrolling,"internal");var n=e(x).find(O);n.length&&(0!==e(x).index(b)||0===e(x).index(b)&&0!==n.index())&&sn(n),Re(),_e(),ee.on("load",function(){ke()})}function f(){kn.css({height:"100%",position:"relative"}),kn.addClass(l),e("html").addClass(v),kn.removeClass(h),G(),e(b).each(function(n){var o=e(this),t=o.find(H),i=t.length;U(o,n),K(o,n),i>0?d(o,t,i):s.verticalCentered&&We(o)}),s.fixedElements&&s.css3&&e(s.fixedElements).appendTo(gn),s.navigation&&oe(),s.scrollOverflow?("complete"===o.readyState&&te(),ee.on("load",te)):ie()}function d(n,o,t){var i=100*t,a=100/t;o.wrapAll('<div class="'+z+'" />'),o.parent().wrap('<div class="'+q+'" />'),n.find(I).css("width",i+"%"),t>1&&(s.controlArrows&&J(n),s.slidesNavigation&&Qe(n,t)),o.each(function(){e(this).css("width",a+"%"),s.verticalCentered&&We(e(this))});var l=n.find(O);l.length&&(0!==e(x).index(b)||0===e(x).index(b)&&0!==l.index())?sn(l):o.eq(0).addClass(g)}function U(n,o){o||0!==e(x).length||n.addClass(g),n.css("height",An+"px"),s.paddingTop&&n.css("padding-top",s.paddingTop),s.paddingBottom&&n.css("padding-bottom",s.paddingBottom),"undefined"!=typeof s.sectionsColor[o]&&n.css("background-color",s.sectionsColor[o]),"undefined"!=typeof s.anchors[o]&&n.attr("data-anchor",s.anchors[o])}function K(n,o){"undefined"!=typeof s.anchors[o]&&n.hasClass(g)&&ze(s.anchors[o],o),s.menu&&s.css3&&e(s.menu).closest(r).length&&e(s.menu).appendTo(gn)}function G(){e(s.sectionSelector).each(function(){e(this).addClass(y)}),e(s.slideSelector).each(function(){e(this).addClass(F)})}function J(e){e.find(D).after('<div class="'+j+'"></div><div class="'+Z+'"></div>'),"#fff"!=s.controlArrowColor&&(e.find(_).css("border-color","transparent transparent transparent "+s.controlArrowColor),e.find(Q).css("border-color","transparent "+s.controlArrowColor+" transparent transparent")),s.loopHorizontal||e.find(Q).hide()}function oe(){gn.append('<div id="'+M+'"><ul></ul></div>');var n=e(E);n.addClass(function(){return s.showActiveTooltip?B+" "+s.navigationPosition:s.navigationPosition});for(var o=0;o<e(b).length;o++){var t="";s.anchors.length&&(t=s.anchors[o]);var i='<li><a href="#'+t+'"><span></span></a>',a=s.navigationTooltips[o];"undefined"!=typeof a&&""!==a&&(i+='<div class="'+$+" "+s.navigationPosition+'">'+a+"</div>"),i+="</li>",n.find("ul").append(i)}e(E).css("margin-top","-"+e(E).height()/2+"px"),e(E).find("li").eq(e(x).index(b)).find("a").addClass(g)}function te(){e(b).each(function(){var n=e(this).find(H);n.length?n.each(function(){Ve(e(this))}):Ve(e(this))}),ie()}function ie(){var n=e(x);s.scrollOverflowHandler.afterRender&&s.scrollOverflowHandler.afterRender(n),be(n),xe(n),e.isFunction(s.afterLoad)&&s.afterLoad.call(n,n.data("anchor"),n.index(b)+1),e.isFunction(s.afterRender)&&s.afterRender.call(kn)}function ae(){var n;if(!s.autoScrolling||s.scrollBar){for(var i=ee.scrollTop(),a=0,l=t.abs(i-o.querySelectorAll(b)[0].offsetTop),r=o.querySelectorAll(b),c=0;c<r.length;++c){var f=r[c],d=t.abs(i-f.offsetTop);l>d&&(a=c,l=d)}if(n=e(r).eq(a),!n.hasClass(g)&&!n.hasClass(L)){In=!0;var u=e(x),p=u.index(b)+1,h=Ie(n),v=n.data("anchor"),m=n.index(b)+1,S=n.find(O);if(S.length)var w=S.data("anchor"),y=S.index();En&&(n.addClass(g).siblings().removeClass(g),e.isFunction(s.onLeave)&&s.onLeave.call(u,p,m,h),e.isFunction(s.afterLoad)&&s.afterLoad.call(n,v,m),be(n),ze(v,m-1),s.anchors.length&&(wn=v,Ge(y,w,v,m))),clearTimeout(On),On=setTimeout(function(){In=!1},100)}s.fitToSection&&(clearTimeout(qn),qn=setTimeout(function(){En&&s.fitToSection&&(e(x).is(n)&&requestAnimFrame(function(){Ln=!0}),ve(n),requestAnimFrame(function(){Ln=!1}))},s.fitToSectionDelay))}}function le(e,n){if(Bn.m[e]){var o,t;if("down"==e?(o="bottom",t=Sn.moveSectionDown):(o="top",t=Sn.moveSectionUp),n.length>0){if(!s.scrollOverflowHandler.isScrolled(o,n))return!0;t()}else t()}}function re(o){var i=o.originalEvent;if(!se(o.target)&&ce(i)){s.autoScrolling&&o.preventDefault();var a=e(x),l=s.scrollOverflowHandler.scrollable(a);if(En&&!xn){var r=rn(i);Wn=r.y,Yn=r.x,a.find(D).length&&t.abs(Vn-Yn)>t.abs(Pn-Wn)?t.abs(Vn-Yn)>n.outerWidth/100*s.touchSensitivity&&(Vn>Yn?Bn.m.right&&Sn.moveSlideRight():Bn.m.left&&Sn.moveSlideLeft()):s.autoScrolling&&t.abs(Pn-Wn)>ee.height()/100*s.touchSensitivity&&(Pn>Wn?le("down",l):Wn>Pn&&le("up",l))}}}function se(n,o){o=o||0;var t=e(n).parent();return o<s.normalScrollElementTouchThreshold&&t.is(s.normalScrollElements)?!0:o==s.normalScrollElementTouchThreshold?!1:se(t,++o)}function ce(e){return"undefined"==typeof e.pointerType||"mouse"!=e.pointerType}function fe(e){var n=e.originalEvent;if(s.fitToSection&&mn.stop(),ce(n)){var o=rn(n);Pn=o.y,Vn=o.x}}function de(e,n){for(var o=0,i=e.slice(t.max(e.length-n,1)),a=0;a<i.length;a++)o+=i[a];return t.ceil(o/n)}function ue(o){var i=(new Date).getTime();if(s.autoScrolling&&!bn){o=o||n.event;var a=o.wheelDelta||-o.deltaY||-o.detail,l=t.max(-1,t.min(1,a)),r="undefined"!=typeof o.wheelDeltaX||"undefined"!=typeof o.deltaX,c=t.abs(o.wheelDeltaX)<t.abs(o.wheelDelta)||t.abs(o.deltaX)<t.abs(o.deltaY)||!r;$n.length>149&&$n.shift(),$n.push(t.abs(a)),s.scrollBar&&(o.preventDefault?o.preventDefault():o.returnValue=!1);var f=e(x),d=s.scrollOverflowHandler.scrollable(f),u=i-Un;if(Un=i,u>200&&($n=[]),En){var p=de($n,10),h=de($n,70),v=p>=h;v&&c&&(0>l?le("down",d):le("up",d))}return!1}s.fitToSection&&mn.stop()}function pe(n,o){var t="undefined"==typeof o?e(x):o,i=t.find(D),a=i.find(H).length;if(!(!i.length||xn||2>a)){var l=i.find(O),r=null;if(r="prev"===n?l.prev(H):l.next(H),!r.length){if(!s.loopHorizontal)return;r="prev"===n?l.siblings(":last"):l.siblings(":first")}xn=!0,$e(i,r)}}function he(){e(O).each(function(){sn(e(this),"internal")})}function ve(n,o,t){requestAnimFrame(function(){var i=n.position();if("undefined"!=typeof i){var a=n.hasClass(L)&&i.top?i.top-An+n.height():i.top,l={element:n,callback:o,isMovementUp:t,dest:i,dtop:a,yMovement:Ie(n),anchorLink:n.data("anchor"),sectionIndex:n.index(b),activeSlide:n.find(O),activeSection:e(x),leavingSection:e(x).index(b)+1,localIsResizing:Ln};if(!(l.activeSection.is(n)&&!Ln||s.scrollBar&&ee.scrollTop()===l.dtop&&!n.hasClass(L))){if(l.activeSlide.length)var r=l.activeSlide.data("anchor"),c=l.activeSlide.index();s.autoScrolling&&s.continuousVertical&&"undefined"!=typeof l.isMovementUp&&(!l.isMovementUp&&"up"==l.yMovement||l.isMovementUp&&"down"==l.yMovement)&&(l=Se(l)),(!e.isFunction(s.onLeave)||l.localIsResizing||s.onLeave.call(l.activeSection,l.leavingSection,l.sectionIndex+1,l.yMovement)!==!1)&&(Te(l.activeSection),n.addClass(g).siblings().removeClass(g),be(n),En=!1,Ge(c,r,l.anchorLink,l.sectionIndex),me(l),wn=l.anchorLink,ze(l.anchorLink,l.sectionIndex))}}})}function me(n){if(s.css3&&s.autoScrolling&&!s.scrollBar){var o="translate3d(0px, -"+n.dtop+"px, 0px)";Ue(o,!0),s.scrollingSpeed?Fn=setTimeout(function(){ye(n)},s.scrollingSpeed):ye(n)}else{var t=ge(n);e(t.element).animate(t.options,s.scrollingSpeed,s.easing).promise().done(function(){ye(n)})}}function ge(e){var n={};return s.autoScrolling&&!s.scrollBar?(n.options={top:-e.dtop},n.element=r):(n.options={scrollTop:e.dtop},n.element="html, body"),n}function Se(n){return n.isMovementUp?e(x).before(n.activeSection.nextAll(b)):e(x).after(n.activeSection.prevAll(b).get().reverse()),cn(e(x).position().top),he(),n.wrapAroundElements=n.activeSection,n.dest=n.element.position(),n.dtop=n.dest.top,n.yMovement=Ie(n.element),n}function we(n){n.wrapAroundElements&&n.wrapAroundElements.length&&(n.isMovementUp?e(T).before(n.wrapAroundElements):e(C).after(n.wrapAroundElements),cn(e(x).position().top),he())}function ye(n){we(n),n.element.find(".fp-scrollable").mouseover(),e.isFunction(s.afterLoad)&&!n.localIsResizing&&s.afterLoad.call(n.element,n.anchorLink,n.sectionIndex+1),xe(n.element),En=!0,e.isFunction(n.callback)&&n.callback.call(this)}function be(n){var n=Ce(n);n.find("img[data-src], source[data-src], audio[data-src]").each(function(){e(this).attr("src",e(this).data("src")),e(this).removeAttr("data-src"),e(this).is("source")&&e(this).closest("video").get(0).load()})}function xe(n){var n=Ce(n);n.find("video, audio").each(function(){var n=e(this).get(0);n.hasAttribute("autoplay")&&"function"==typeof n.play&&n.play()})}function Te(n){var n=Ce(n);n.find("video, audio").each(function(){var n=e(this).get(0);n.hasAttribute("data-ignore")||"function"!=typeof n.pause||n.pause()})}function Ce(n){var o=n.find(O);return o.length&&(n=e(o)),n}function ke(){var e=n.location.hash.replace("#","").split("/"),o=e[0],t=e[1];o&&(s.animateAnchor?Ke(o,t):Sn.silentMoveTo(o,t))}function Ae(){if(!In&&!s.lockAnchors){var e=n.location.hash.replace("#","").split("/"),o=e[0],t=e[1],i="undefined"==typeof wn,a="undefined"==typeof wn&&"undefined"==typeof t&&!xn;o.length&&(o&&o!==wn&&!i||a||!xn&&yn!=t)&&Ke(o,t)}}function Le(n){clearTimeout(Dn);var o=e(":focus");if(!o.is("textarea")&&!o.is("input")&&!o.is("select")&&s.keyboardScrolling&&s.autoScrolling){var t=n.which,i=[40,38,32,33,34];e.inArray(t,i)>-1&&n.preventDefault(),bn=n.ctrlKey,Dn=setTimeout(function(){Me(n)},150)}}function Me(n){var o=n.shiftKey;switch(n.which){case 38:case 33:Bn.k.up&&Sn.moveSectionUp();break;case 32:if(o&&Bn.k.up){Sn.moveSectionUp();break}case 40:case 34:Bn.k.down&&Sn.moveSectionDown();break;case 36:Bn.k.up&&Sn.moveTo(1);break;case 35:Bn.k.down&&Sn.moveTo(e(b).length);break;case 37:Bn.k.left&&Sn.moveSlideLeft();break;case 39:Bn.k.right&&Sn.moveSlideRight();break;default:return}}function Ee(e){En&&(e.pageY<Xn?Sn.moveSectionUp():e.pageY>Xn&&Sn.moveSectionDown()),Xn=e.pageY}function $e(n,o){var i=o.position(),a=o.index(),l=n.closest(b),r=l.index(b),c=l.data("anchor"),f=l.find(W),d=Ze(o),u=l.find(O),p=Ln;if(s.onSlideLeave){var h=u.index(),v=Pe(h,a);if(!p&&"none"!==v&&e.isFunction(s.onSlideLeave)&&s.onSlideLeave.call(u,c,r+1,h,v,a)===!1)return void(xn=!1)}Te(u),o.addClass(g).siblings().removeClass(g),p||be(o),!s.loopHorizontal&&s.controlArrows&&(l.find(Q).toggle(0!==a),l.find(_).toggle(!o.is(":last-child"))),l.hasClass(g)&&Ge(a,d,c,r);var m=function(){p||e.isFunction(s.afterSlideLoad)&&s.afterSlideLoad.call(o,c,r+1,d,a),xe(o),xn=!1};if(s.css3){var w="translate3d(-"+t.round(i.left)+"px, 0px, 0px)";Fe(n.find(I),s.scrollingSpeed>0).css(fn(w)),Hn=setTimeout(function(){m()},s.scrollingSpeed,s.easing)}else n.animate({scrollLeft:t.round(i.left)},s.scrollingSpeed,s.easing,function(){m()});f.find(S).removeClass(g),f.find("li").eq(a).find("a").addClass(g)}function Be(){if(Re(),Tn){var n=e(o.activeElement);if(!n.is("textarea")&&!n.is("input")&&!n.is("select")){var i=ee.height();t.abs(i-Nn)>20*t.max(Nn,i)/100&&(Sn.reBuild(!0),Nn=i)}}else clearTimeout(Rn),Rn=setTimeout(function(){Sn.reBuild(!0)},350)}function Re(){var e=s.responsive||s.responsiveWidth,o=s.responsiveHeight,t=e&&n.outerWidth<e,i=o&&ee.height()<o;e&&o?Sn.setResponsive(t||i):e?Sn.setResponsive(t):o&&Sn.setResponsive(i)}function Fe(e){var n="all "+s.scrollingSpeed+"ms "+s.easingcss3;return e.removeClass(p),e.css({"-webkit-transition":n,transition:n})}function He(e){return e.addClass(p)}function Oe(e,n){var o=825,i=900;if(o>e||i>n){var a=100*e/o,l=100*n/i,r=t.min(a,l),s=r.toFixed(2);gn.css("font-size",s+"%")}else gn.css("font-size","100%")}function qe(n,o){s.navigation&&(e(E).find(S).removeClass(g),n?e(E).find('a[href="#'+n+'"]').addClass(g):e(E).find("li").eq(o).find("a").addClass(g))}function De(n){s.menu&&(e(s.menu).find(S).removeClass(g),e(s.menu).find('[data-menuanchor="'+n+'"]').addClass(g))}function ze(e,n){De(e),qe(e,n)}function Ie(n){var o=e(x).index(b),t=n.index(b);return o==t?"none":o>t?"up":"down"}function Pe(e,n){return e==n?"none":e>n?"left":"right"}function Ve(e){e.css("overflow","hidden");var n,o=s.scrollOverflowHandler,t=o.wrapContent(),i=e.closest(b),a=o.scrollable(e);a.length?n=o.scrollHeight(e):(n=e.get(0).scrollHeight,s.verticalCentered&&(n=e.find(A).get(0).scrollHeight));var l=An-parseInt(i.css("padding-bottom"))-parseInt(i.css("padding-top"));n>l?a.length?o.update(e,l):(s.verticalCentered?e.find(A).wrapInner(t):e.wrapInner(t),o.create(e,l)):o.remove(e),e.css("overflow","")}function We(e){e.addClass(P).wrapInner('<div class="'+k+'" style="height:'+Ye(e)+'px;" />')}function Ye(e){var n=An;if(s.paddingTop||s.paddingBottom){var o=e;o.hasClass(y)||(o=e.closest(b));var t=parseInt(o.css("padding-top"))+parseInt(o.css("padding-bottom"));n=An-t}return n}function Ue(e,n){n?Fe(kn):He(kn),kn.css(fn(e)),setTimeout(function(){kn.removeClass(p)},10)}function Xe(n){var o=kn.find(b+'[data-anchor="'+n+'"]');return o.length||(o=e(b).eq(n-1)),o}function Ne(e,n){var o=n.find(D),t=o.find(H+'[data-anchor="'+e+'"]');return t.length||(t=o.find(H).eq(e)),t}function Ke(e,n){var o=Xe(e);"undefined"==typeof n&&(n=0),e===wn||o.hasClass(g)?je(o,n):ve(o,function(){je(o,n)})}function je(e,n){if("undefined"!=typeof n){var o=e.find(D),t=Ne(n,e);t.length&&$e(o,t)}}function Qe(e,n){e.append('<div class="'+V+'"><ul></ul></div>');var o=e.find(W);o.addClass(s.slidesNavPosition);for(var t=0;n>t;t++)o.find("ul").append('<li><a href="#"><span></span></a></li>');o.css("margin-left","-"+o.width()/2+"px"),o.find("li").first().find("a").addClass(g)}function Ge(e,n,o){var t="";s.anchors.length&&!s.lockAnchors&&(e?("undefined"!=typeof o&&(t=o),"undefined"==typeof n&&(n=e),yn=n,Je(t+"/"+n)):"undefined"!=typeof e?(yn=n,Je(o)):Je(o)),_e()}function Je(e){if(s.recordHistory)location.hash=e;else if(Tn||Cn)history.replaceState(i,i,"#"+e);else{var o=n.location.href.split("#")[0];n.location.replace(o+"#"+e)}}function Ze(e){var n=e.data("anchor"),o=e.index();return"undefined"==typeof n&&(n=o),n}function _e(){var n=e(x),o=n.find(O),t=Ze(n),i=Ze(o),a=(n.index(b),String(t));o.length&&(a=a+"-"+i),a=a.replace("/","-").replace("#","");var l=new RegExp("\\b\\s?"+m+"-[^\\s]+\\b","g");gn[0].className=gn[0].className.replace(l,""),gn.addClass(m+"-"+a)}function en(){var e,t=o.createElement("p"),a={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};o.body.insertBefore(t,null);for(var l in a)t.style[l]!==i&&(t.style[l]="translate3d(1px,1px,1px)",e=n.getComputedStyle(t).getPropertyValue(a[l]));return o.body.removeChild(t),e!==i&&e.length>0&&"none"!==e}function nn(){o.addEventListener?(o.removeEventListener("mousewheel",ue,!1),o.removeEventListener("wheel",ue,!1),o.removeEventListener("MozMousePixelScroll",ue,!1)):o.detachEvent("onmousewheel",ue)}function on(){var e,t="";n.addEventListener?e="addEventListener":(e="attachEvent",t="on");var a="onwheel"in o.createElement("div")?"wheel":o.onmousewheel!==i?"mousewheel":"DOMMouseScroll";"DOMMouseScroll"==a?o[e](t+"MozMousePixelScroll",ue,!1):o[e](t+a,ue,!1)}function tn(){if(Tn||Cn){var n=ln();e(r).off("touchstart "+n.down).on("touchstart "+n.down,fe),e(r).off("touchmove "+n.move).on("touchmove "+n.move,re)}}function an(){if(Tn||Cn){var n=ln();e(r).off("touchstart "+n.down),e(r).off("touchmove "+n.move)}}function ln(){var e;return e=n.PointerEvent?{down:"pointerdown",move:"pointermove"}:{down:"MSPointerDown",move:"MSPointerMove"}}function rn(e){var n=[];return n.y="undefined"!=typeof e.pageY&&(e.pageY||e.pageX)?e.pageY:e.touches[0].pageY,n.x="undefined"!=typeof e.pageX&&(e.pageY||e.pageX)?e.pageX:e.touches[0].pageX,Cn&&ce(e)&&s.scrollBar&&(n.y=e.touches[0].pageY,n.x=e.touches[0].pageX),n}function sn(e,n){Sn.setScrollingSpeed(0,"internal"),"undefined"!=typeof n&&(Ln=!0),$e(e.closest(D),e),"undefined"!=typeof n&&(Ln=!1),Sn.setScrollingSpeed(zn.scrollingSpeed,"internal")}function cn(e){if(s.scrollBar)kn.scrollTop(e);else if(s.css3){var n="translate3d(0px, -"+e+"px, 0px)";Ue(n,!1)}else kn.css("top",-e)}function fn(e){return{"-webkit-transform":e,"-moz-transform":e,"-ms-transform":e,transform:e}}function dn(e,n,o){switch(n){case"up":Bn[o].up=e;break;case"down":Bn[o].down=e;break;case"left":Bn[o].left=e;break;case"right":Bn[o].right=e;break;case"all":"m"==o?Sn.setAllowScrolling(e):Sn.setKeyboardScrolling(e)}}function un(){cn(0),e(E+", "+W+", "+X).remove(),e(b).css({height:"","background-color":"",padding:""}),e(H).css({width:""}),kn.css({height:"",position:"","-ms-touch-action":"","touch-action":""}),mn.css({overflow:"",height:""}),e("html").removeClass(v),e.each(gn.get(0).className.split(/\s+/),function(e,n){0===n.indexOf(m)&&gn.removeClass(n)}),e(b+", "+H).each(function(){s.scrollOverflowHandler.remove(e(this)),e(this).removeClass(P+" "+g)}),He(kn),kn.find(A+", "+I+", "+D).each(function(){e(this).replaceWith(this.childNodes)}),mn.scrollTop(0);var n=[y,F,z];e.each(n,function(n,o){e("."+o).removeClass(o)})}function pn(e,n,o){s[e]=n,"internal"!==o&&(zn[e]=n)}function hn(){s.continuousVertical&&(s.loopTop||s.loopBottom)&&(s.continuousVertical=!1,vn("warn","Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),s.scrollBar&&s.scrollOverflow&&vn("warn","Option `scrollBar` is mutually exclusive with `scrollOverflow`. Sections with scrollOverflow might not work well in Firefox"),s.continuousVertical&&s.scrollBar&&(s.continuousVertical=!1,vn("warn","Option `scrollBar` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),e.each(s.anchors,function(n,o){(e("#"+o).length||e('[name="'+o+'"]').length)&&vn("error","data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).")})}function vn(e,n){console&&console[e]&&console[e]("fullPage: "+n)}var mn=e("html, body"),gn=e("body"),Sn=e.fn.fullpage;s=e.extend({menu:!1,anchors:[],lockAnchors:!1,navigation:!1,navigationPosition:"right",navigationTooltips:[],showActiveTooltip:!1,slidesNavigation:!1,slidesNavPosition:"bottom",scrollBar:!1,css3:!0,scrollingSpeed:700,autoScrolling:!0,fitToSection:!0,fitToSectionDelay:1e3,easing:"easeInOutCubic",easingcss3:"ease",loopBottom:!1,loopTop:!1,loopHorizontal:!0,continuousVertical:!1,normalScrollElements:null,scrollOverflow:!1,scrollOverflowHandler:a,touchSensitivity:5,normalScrollElementTouchThreshold:5,keyboardScrolling:!0,animateAnchor:!0,recordHistory:!0,controlArrows:!0,controlArrowColor:"#fff",verticalCentered:!0,resize:!1,sectionsColor:[],paddingTop:0,paddingBottom:0,fixedElements:null,responsive:0,responsiveWidth:0,responsiveHeight:0,sectionSelector:w,slideSelector:R,afterLoad:null,onLeave:null,afterRender:null,afterResize:null,afterReBuild:null,afterSlideLoad:null,onSlideLeave:null},s),hn(),e.extend(e.easing,{easeInOutCubic:function(e,n,o,t,i){return(n/=i/2)<1?t/2*n*n*n+o:t/2*((n-=2)*n*n+2)+o}}),e.extend(e.easing,{easeInQuart:function(e,n,o,t,i){return t*(n/=i)*n*n*n+o}}),Sn.setAutoScrolling=function(n,o){pn("autoScrolling",n,o);var t=e(x);s.autoScrolling&&!s.scrollBar?(mn.css({overflow:"hidden",height:"100%"}),Sn.setRecordHistory(zn.recordHistory,"internal"),kn.css({"-ms-touch-action":"none","touch-action":"none"}),t.length&&cn(t.position().top)):(mn.css({overflow:"visible",height:"initial"}),Sn.setRecordHistory(!1,"internal"),kn.css({"-ms-touch-action":"","touch-action":""}),cn(0),t.length&&mn.scrollTop(t.position().top))},Sn.setRecordHistory=function(e,n){pn("recordHistory",e,n)},Sn.setScrollingSpeed=function(e,n){pn("scrollingSpeed",e,n)},Sn.setFitToSection=function(e,n){pn("fitToSection",e,n)},Sn.setLockAnchors=function(e){s.lockAnchors=e},Sn.setMouseWheelScrolling=function(e){e?on():nn()},Sn.setAllowScrolling=function(n,o){"undefined"!=typeof o?(o=o.replace(/ /g,"").split(","),e.each(o,function(e,o){dn(n,o,"m")})):n?(Sn.setMouseWheelScrolling(!0),tn()):(Sn.setMouseWheelScrolling(!1),an())},Sn.setKeyboardScrolling=function(n,o){"undefined"!=typeof o?(o=o.replace(/ /g,"").split(","),e.each(o,function(e,o){dn(n,o,"k")})):s.keyboardScrolling=n},Sn.moveSectionUp=function(){var n=e(x).prev(b);n.length||!s.loopTop&&!s.continuousVertical||(n=e(b).last()),n.length&&ve(n,null,!0)},Sn.moveSectionDown=function(){var n=e(x).next(b);n.length||!s.loopBottom&&!s.continuousVertical||(n=e(b).first()),n.length&&ve(n,null,!1)},Sn.silentMoveTo=function(e,n){requestAnimFrame(function(){Sn.setScrollingSpeed(0,"internal")}),Sn.moveTo(e,n),requestAnimFrame(function(){Sn.setScrollingSpeed(zn.scrollingSpeed,"internal")})},Sn.moveTo=function(e,n){var o=Xe(e);"undefined"!=typeof n?Ke(e,n):o.length>0&&ve(o)},Sn.moveSlideRight=function(e){pe("next",e)},Sn.moveSlideLeft=function(e){pe("prev",e)},Sn.reBuild=function(o){if(!kn.hasClass(h)){Ln=!0,requestAnimFrame(function(){Ln=!0});var t=n.outerWidth;An=ee.height(),s.resize&&Oe(An,t),e(b).each(function(){var n=e(this).find(D),o=e(this).find(H);s.verticalCentered&&e(this).find(A).css("height",Ye(e(this))+"px"),e(this).css("height",An+"px"),s.scrollOverflow&&(o.length?o.each(function(){Ve(e(this))}):Ve(e(this))),o.length>1&&$e(n,n.find(O))});var i=e(x),a=i.index(b);a&&Sn.silentMoveTo(a+1),Ln=!1,requestAnimFrame(function(){Ln=!1}),e.isFunction(s.afterResize)&&o&&s.afterResize.call(kn),e.isFunction(s.afterReBuild)&&!o&&s.afterReBuild.call(kn)}},Sn.setResponsive=function(n){var o=gn.hasClass(u);n?o||(Sn.setAutoScrolling(!1,"internal"),Sn.setFitToSection(!1,"internal"),e(E).hide(),gn.addClass(u)):o&&(Sn.setAutoScrolling(zn.autoScrolling,"internal"),Sn.setFitToSection(zn.autoScrolling,"internal"),e(E).show(),gn.removeClass(u))};var wn,yn,bn,xn=!1,Tn=navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),Cn="ontouchstart"in n||navigator.msMaxTouchPoints>0||navigator.maxTouchPoints,kn=e(this),An=ee.height(),Ln=!1,Mn=!0,En=!0,$n=[],Bn={};Bn.m={up:!0,down:!0,left:!0,right:!0},Bn.k=e.extend(!0,{},Bn.m);var Rn,Fn,Hn,On,qn,Dn,zn=e.extend(!0,{},s);e(this).length&&c();var In=!1;ee.on("scroll",ae);var Pn=0,Vn=0,Wn=0,Yn=0,Un=(new Date).getTime();n.requestAnimFrame=function(){return n.requestAnimationFrame||n.webkitRequestAnimationFrame||n.mozRequestAnimationFrame||n.oRequestAnimationFrame||n.msRequestAnimationFrame||function(e){e()}}(),ee.on("hashchange",Ae),ne.keydown(Le),ne.keyup(function(e){Mn&&(bn=e.ctrlKey)}),e(n).blur(function(){Mn=!1,bn=!1});var Dn;kn.mousedown(function(e){2==e.which&&(Xn=e.pageY,kn.on("mousemove",Ee))}),kn.mouseup(function(e){2==e.which&&kn.off("mousemove")});var Xn=0;ne.on("click touchstart",E+" a",function(n){n.preventDefault();var o=e(this).parent().index();ve(e(b).eq(o))}),ne.on("click touchstart",Y,function(n){n.preventDefault();var o=e(this).closest(b).find(D),t=o.find(H).eq(e(this).closest("li").index());$e(o,t)}),s.normalScrollElements&&(ne.on("mouseenter",s.normalScrollElements,function(){Sn.setMouseWheelScrolling(!1)}),ne.on("mouseleave",s.normalScrollElements,function(){Sn.setMouseWheelScrolling(!0)})),e(b).on("click touchstart",X,function(){var n=e(this).closest(b);e(this).hasClass(N)?Bn.m.left&&Sn.moveSlideLeft(n):Bn.m.right&&Sn.moveSlideRight(n)}),ee.resize(Be);var Nn=An;Sn.destroy=function(n){Sn.setAutoScrolling(!1,"internal"),Sn.setAllowScrolling(!1),Sn.setKeyboardScrolling(!1),kn.addClass(h),clearTimeout(Hn),clearTimeout(Fn),clearTimeout(Rn),clearTimeout(On),clearTimeout(qn),ee.off("scroll",ae).off("hashchange",Ae).off("resize",Be),ne.off("click",E+" a").off("mouseenter",E+" li").off("mouseleave",E+" li").off("click",Y).off("mouseover",s.normalScrollElements).off("mouseout",s.normalScrollElements),e(b).off("click",X),clearTimeout(Hn),clearTimeout(Fn),n&&un()}};var oe={afterRender:function(e){var n=e.find(q),o=e.find(c);n.length&&(o=n.find(O)),o.mouseover()},create:function(e,n){e.find(c).slimScroll({allowPageScroll:!0,height:n+"px",size:"10px",alwaysVisible:!0})},isScrolled:function(e,n){return"top"===e?!n.scrollTop():"bottom"===e?n.scrollTop()+1+n.innerHeight()>=n[0].scrollHeight:void 0},scrollable:function(e){return e.find(D).length?e.find(O).find(c):e.find(c)},scrollHeight:function(e){return e.find(c).get(0).scrollHeight},remove:function(e){e.find(c).children().first().unwrap().unwrap(),e.find(f).remove(),e.find(d).remove()},update:function(e,n){e.find(c).css("height",n+"px").parent().css("height",n+"px")},wrapContent:function(){return'<div class="'+s+'"></div>'}};a=oe});