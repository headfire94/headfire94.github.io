$(window).load(function () {
   
});

$(document).ready(function () {
 $('#page-preloader').hide();
  $('.wrapper').show();
 
  $('#fullpage').fullpage({
    //Navigation
    menu: '#menu',
    lockAnchors: true,
    anchors: ['home', 'about', 'skills', 'contacts'],
    scrollingSpeed: 700,
    verticalCentered: false,
       touchSensitivity: 5,
    sectionsColor: ['#edb336', 'rgb(75, 181, 234)', 'rgb(250,113,94)', 'rgb(76,214,188)'],
    sectionSelector: '.section'
  });
  
  
  
$('#menu li').click(function(r){
    r.preventDefault();
    $(this).fullpage.moveTo($(this).attr('data-menuanchor'));
  })


  updatestate = function (state) {

    if (state == "/portfolio") {
      $('#pages-transition').show(1000, function () {
        $('#menu,#fullpage').hide();
        $('#pages-transition').fadeOut(function () {
          $('#pages-transition').css({
            'left': '0',
            'right': 'auto'
          });
          $('.transition').css('transform', 'scale(-1,1)');
          $.fn.fullpage.setAutoScrolling(false);
        });
        $('#portfolio').show();
      });
      $('#portfolio-link').addClass('active');
      $('#main-link').removeClass('active');

    } else if (state == "/portfolio/") {
      $('#menu,#fullpage').hide(0,function(){
        $.fn.fullpage.setAutoScrolling(false);
      });
      $('#portfolio').show(0);
      $('#pages-transition').css({
        'left': '0',
        'right': 'auto'
      });
      $('.transition').css('transform', 'scale(-1,1)');
      

    } else {
      
      $('#pages-transition').show(1000, function () {
        $('#portfolio').fadeOut('slow');
        $('#pages-transition').fadeOut('slow', function () {
         
          $('#pages-transition').css({
           'left': 'auto',
          'right': '0'
          });
          $('.transition').css('transform', 'scale(1,1)');
          $.fn.fullpage.setAutoScrolling(true);
        });
         $('#menu,#fullpage').show();
      });

     $('#main-link').addClass('active');
      $('#portfolio-link').removeClass('active');

      

    }
  }

  // back and next page buttons 
  window.addEventListener('popstate', function (e) {
    if (window.location.pathname != "/portfolio/") {
      updatestate(window.location.pathname);
    } 
    else {
      updatestate('/portfolio');
    }
  })

  // click event listener
  $('.header-nav a').click(function (e) {

    var state;
    var href = $(this).attr('data-url');
    state = href;

    if (state != window.location.pathname) {
      history.pushState(state, '', state);
      e.preventDefault();
      updatestate(state);
      
    };
    e.preventDefault();


  });

  // if it is following by link "egorvodopyanov.com/portfolio"
  if (window.location.pathname == "/portfolio/") {
    updatestate(state = '/portfolio/');
  }


  $('.logo').click(function (e) {
    if ($('#fullpage').css('display') != 'none') {
      e.preventDefault();
      $.fn.fullpage.moveTo('home');
    }
  });


});




! function (e, n) {
  "use strict";
  "function" == typeof define && define.amd ? define(["jquery"], function (o) {
    return n(o, e, e.document, e.Math)
  }) : "undefined" != typeof exports ? module.exports = n(require("jquery"), e, e.document, e.Math) : n(jQuery, e, e.document, e.Math)
}("undefined" != typeof window ? window : this, function (e, n, o, t, i) {
  "use strict";
  var a, r = "pages-wrapper",
    l = "." + r,
    s = "fp-scrollable",
    c = "." + s,
    f = ".slimScrollBar",
    d = ".slimScrollRail",
    u = "fp-responsive",
    h = "fp-notransition",
    p = "fp-destroyed",
    v = "fp-enabled",
    m = "fp-viewing",
    g = "active",
    S = "." + g,
    w = ".section",
    y = "section",
    x = "." + y,
    b = x + S,
    T = x + ":first",
    C = x + ":last",
    k = "fp-tableCell",
    A = "." + k,
    M = "fp-auto-height",
    L = "fp-nav",
    E = "#" + L,
    B = "fp-tooltip",
    R = "fp-show-active",
    F = ".slide",
    H = "fp-slide",
    q = "." + H,
    O = q + S,
    z = "fp-slides",
    D = "." + z,
    I = "fp-slidesContainer",
    P = "." + I,
    V = "fp-table",
    W = "fp-slidesNav",
    Y = "." + W,
    U = Y + " a",
    X = "fp-controlArrow",
    N = "." + X,
    K = "fp-prev",
    j = "." + K,
    Q = X + " " + K,
    G = N + j,
    J = "fp-next",
    Z = "." + J,
    $ = X + " " + J,
    _ = N + Z,
    ee = e(n),
    ne = e(o);
  e.fn.fullpage = function (s) {
    function c() {
      s.css3 && (s.css3 = en()), s.anchors.length || (s.anchors = e(s.sectionSelector + "[data-anchor]").map(function () {
        return e(this).data("anchor").toString()
      }).get()), f(), Sn.setAllowScrolling(!0), An = ee.height(), Sn.setAutoScrolling(s.autoScrolling, "internal");
      var n = e(b).find(O);
      n.length && (0 !== e(b).index(x) || 0 === e(b).index(x) && 0 !== n.index()) && sn(n), Fe(), _e(), ee.on("load", function () {
        ke()
      })
    }

    function f() {
      kn.css({
        height: "100%",
        position: "relative"
      }), kn.addClass(r), e("html").addClass(v), kn.removeClass(p), J(), e(x).each(function (n) {
        var o = e(this),
          t = o.find(q),
          i = t.length;
        X(o, n), j(o, n), i > 0 ? d(o, t, i) : s.verticalCentered && Ye(o)
      }), s.fixedElements && s.css3 && e(s.fixedElements).appendTo(gn), s.navigation && oe(), s.scrollOverflow ? ("complete" === o.readyState && te(), ee.on("load", te)) : ie()
    }

    function d(n, o, t) {
      var i = 100 * t,
        a = 100 / t;
      o.wrapAll('<div class="' + I + '" />'), o.parent().wrap('<div class="' + z + '" />'), n.find(P).css("width", i + "%"), t > 1 && (s.controlArrows && Z(n), s.slidesNavigation && Ge(n, t)), o.each(function (n) {
        e(this).css("width", a + "%"), s.verticalCentered && Ye(e(this))
      });
      var r = n.find(O);
      r.length && (0 !== e(b).index(x) || 0 === e(b).index(x) && 0 !== r.index()) ? sn(r) : o.eq(0).addClass(g)
    }

    function X(n, o) {
      o || 0 !== e(b).length || n.addClass(g), n.css("height", An + "px"), s.paddingTop && n.css("padding-top", s.paddingTop), s.paddingBottom && n.css("padding-bottom", s.paddingBottom), "undefined" != typeof s.sectionsColor[o] && n.css("background-color", s.sectionsColor[o]), "undefined" != typeof s.anchors[o] && n.attr("data-anchor", s.anchors[o])
    }

    function j(n, o) {
      "undefined" != typeof s.anchors[o] && n.hasClass(g) && Ie(s.anchors[o], o), s.menu && s.css3 && e(s.menu).closest(l).length && e(s.menu).appendTo(gn)
    }

    function J() {
      e(s.sectionSelector).each(function () {
        e(this).addClass(y)
      }), e(s.slideSelector).each(function () {
        e(this).addClass(H)
      })
    }

    function Z(e) {
      e.find(D).after('<div class="' + Q + '"></div><div class="' + $ + '"></div>'), "#fff" != s.controlArrowColor && (e.find(_).css("border-color", "transparent transparent transparent " + s.controlArrowColor), e.find(G).css("border-color", "transparent " + s.controlArrowColor + " transparent transparent")), s.loopHorizontal || e.find(G).hide()
    }

    function oe() {
      gn.append('<div id="' + L + '"><ul></ul></div>');
      var n = e(E);
      n.addClass(function () {
        return s.showActiveTooltip ? R + " " + s.navigationPosition : s.navigationPosition
      });
      for (var o = 0; o < e(x).length; o++) {
        var t = "";
        s.anchors.length && (t = s.anchors[o]);
        var i = '<li><a href="#' + t + '"><span></span></a>',
          a = s.navigationTooltips[o];
        "undefined" != typeof a && "" !== a && (i += '<div class="' + B + " " + s.navigationPosition + '">' + a + "</div>"), i += "</li>", n.find("ul").append(i)
      }
      e(E).css("margin-top", "-" + e(E).height() / 2 + "px"), e(E).find("li").eq(e(b).index(x)).find("a").addClass(g)
    }

    function te() {
      e(x).each(function () {
        var n = e(this).find(q);
        n.length ? n.each(function () {
          We(e(this))
        }) : We(e(this))
      }), ie()
    }

    function ie() {
      var n = e(b);
      s.scrollOverflowHandler.afterRender && s.scrollOverflowHandler.afterRender(n), xe(n), be(n), e.isFunction(s.afterLoad) && s.afterLoad.call(n, n.data("anchor"), n.index(x) + 1), e.isFunction(s.afterRender) && s.afterRender.call(kn)
    }

    function ae() {
      var n;
      if (!s.autoScrolling || s.scrollBar) {
        for (var i = ee.scrollTop(), a = 0, r = t.abs(i - o.querySelectorAll(x)[0].offsetTop), l = o.querySelectorAll(x), c = 0; c < l.length; ++c) {
          var f = l[c],
            d = t.abs(i - f.offsetTop);
          r > d && (a = c, r = d)
        }
        if (n = e(l).eq(a), !n.hasClass(g) && !n.hasClass(M)) {
          Pn = !0;
          var u = e(b),
            h = u.index(x) + 1,
            p = Pe(n),
            v = n.data("anchor"),
            m = n.index(x) + 1,
            S = n.find(O);
          if (S.length) var w = S.data("anchor"),
            y = S.index();
          En && (n.addClass(g).siblings().removeClass(g), e.isFunction(s.onLeave) && s.onLeave.call(u, h, m, p), e.isFunction(s.afterLoad) && s.afterLoad.call(n, v, m), xe(n), Ie(v, m - 1), s.anchors.length && (wn = v, Je(y, w, v, m))), clearTimeout(On), On = setTimeout(function () {
            Pn = !1
          }, 100)
        }
        s.fitToSection && (clearTimeout(zn), zn = setTimeout(function () {
          En && s.fitToSection && (e(b).is(n) && requestAnimFrame(function () {
            Mn = !0
          }), ve(n), requestAnimFrame(function () {
            Mn = !1
          }))
        }, s.fitToSectionDelay))
      }
    }

    function re(e, n) {
      if (Rn.m[e]) {
        var o, t;
        if ("down" == e ? (o = "bottom", t = Sn.moveSectionDown) : (o = "top", t = Sn.moveSectionUp), n.length > 0) {
          if (!s.scrollOverflowHandler.isScrolled(o, n)) return !0;
          t()
        } else t()
      }
    }

    function le(o) {
      var i = o.originalEvent;
      if (!se(o.target) && ce(i)) {
        s.autoScrolling && o.preventDefault();
        var a = e(b),
          r = s.scrollOverflowHandler.scrollable(a);
        if (En && !bn) {
          var l = ln(i);
          Yn = l.y, Un = l.x, a.find(D).length && t.abs(Wn - Un) > t.abs(Vn - Yn) ? t.abs(Wn - Un) > n.outerWidth / 100 * s.touchSensitivity && (Wn > Un ? Rn.m.right && Sn.moveSlideRight() : Rn.m.left && Sn.moveSlideLeft()) : s.autoScrolling && t.abs(Vn - Yn) > ee.height() / 100 * s.touchSensitivity && (Vn > Yn ? re("down", r) : Yn > Vn && re("up", r))
        }
      }
    }

    function se(n, o) {
      o = o || 0;
      var t = e(n).parent();
      return o < s.normalScrollElementTouchThreshold && t.is(s.normalScrollElements) ? !0 : o == s.normalScrollElementTouchThreshold ? !1 : se(t, ++o)
    }

    function ce(e) {
      return "undefined" == typeof e.pointerType || "mouse" != e.pointerType
    }

    function fe(e) {
      var n = e.originalEvent;
      if (s.fitToSection && mn.stop(), ce(n)) {
        var o = ln(n);
        Vn = o.y, Wn = o.x
      }
    }

    function de(e, n) {
      for (var o = 0, i = e.slice(t.max(e.length - n, 1)), a = 0; a < i.length; a++) o += i[a];
      return t.ceil(o / n)
    }

    function ue(o) {
      var i = (new Date).getTime();
      if (s.autoScrolling && !xn) {
        o = o || n.event;
        var a = o.wheelDelta || -o.deltaY || -o.detail,
          r = t.max(-1, t.min(1, a)),
          l = "undefined" != typeof o.wheelDeltaX || "undefined" != typeof o.deltaX,
          c = t.abs(o.wheelDeltaX) < t.abs(o.wheelDelta) || t.abs(o.deltaX) < t.abs(o.deltaY) || !l;
        Bn.length > 149 && Bn.shift(), Bn.push(t.abs(a)), s.scrollBar && (o.preventDefault ? o.preventDefault() : o.returnValue = !1);
        var f = e(b),
          d = s.scrollOverflowHandler.scrollable(f),
          u = i - Xn;
        if (Xn = i, u > 200 && (Bn = []), En) {
          var h = de(Bn, 10),
            p = de(Bn, 70),
            v = h >= p;
          v && c && (0 > r ? re("down", d) : re("up", d))
        }
        return !1
      }
      s.fitToSection && mn.stop()
    }

    function he(n, o) {
      var t = "undefined" == typeof o ? e(b) : o,
        i = t.find(D),
        a = i.find(q).length;
      if (!(!i.length || bn || 2 > a)) {
        var r = i.find(O),
          l = null;
        if (l = "prev" === n ? r.prev(q) : r.next(q), !l.length) {
          if (!s.loopHorizontal) return;
          l = "prev" === n ? r.siblings(":last") : r.siblings(":first")
        }
        bn = !0, Be(i, l)
      }
    }

    function pe() {
      e(O).each(function () {
        sn(e(this), "internal")
      })
    }

    function ve(n, o, t) {
      requestAnimFrame(function () {
        var i = n.position();
        if ("undefined" != typeof i) {
          var a = n.hasClass(M) && i.top ? i.top - An + n.height() : i.top,
            r = {
              element: n,
              callback: o,
              isMovementUp: t,
              dest: i,
              dtop: a,
              yMovement: Pe(n),
              anchorLink: n.data("anchor"),
              sectionIndex: n.index(x),
              activeSlide: n.find(O),
              activeSection: e(b),
              leavingSection: e(b).index(x) + 1,
              localIsResizing: Mn
            };
          if (!(r.activeSection.is(n) && !Mn || s.scrollBar && ee.scrollTop() === r.dtop && !n.hasClass(M))) {
            if (r.activeSlide.length) var l = r.activeSlide.data("anchor"),
              c = r.activeSlide.index();
            s.autoScrolling && s.continuousVertical && "undefined" != typeof r.isMovementUp && (!r.isMovementUp && "up" == r.yMovement || r.isMovementUp && "down" == r.yMovement) && (r = Se(r)), (!e.isFunction(s.onLeave) || r.localIsResizing || s.onLeave.call(r.activeSection, r.leavingSection, r.sectionIndex + 1, r.yMovement) !== !1) && (Te(r.activeSection), n.addClass(g).siblings().removeClass(g), xe(n), En = !1, Je(c, l, r.anchorLink, r.sectionIndex), me(r), wn = r.anchorLink, Ie(r.anchorLink, r.sectionIndex))
          }
        }
      })
    }

    function me(n) {
      if (s.css3 && s.autoScrolling && !s.scrollBar) {
        var o = "translate3d(0px, -" + n.dtop + "px, 0px)";
        Xe(o, !0), s.scrollingSpeed ? Hn = setTimeout(function () {
          ye(n)
        }, s.scrollingSpeed) : ye(n)
      } else {
        var t = ge(n);
        e(t.element).animate(t.options, s.scrollingSpeed, s.easing).promise().done(function () {
          ye(n)
        })
      }
    }

    function ge(e) {
      var n = {};
      return s.autoScrolling && !s.scrollBar ? (n.options = {
        top: -e.dtop
      }, n.element = l) : (n.options = {
        scrollTop: e.dtop
      }, n.element = "html, body"), n
    }

    function Se(n) {
      return n.isMovementUp ? e(b).before(n.activeSection.nextAll(x)) : e(b).after(n.activeSection.prevAll(x).get().reverse()), cn(e(b).position().top), pe(), n.wrapAroundElements = n.activeSection, n.dest = n.element.position(), n.dtop = n.dest.top, n.yMovement = Pe(n.element), n
    }

    function we(n) {
      n.wrapAroundElements && n.wrapAroundElements.length && (n.isMovementUp ? e(T).before(n.wrapAroundElements) : e(C).after(n.wrapAroundElements), cn(e(b).position().top), pe())
    }

    function ye(n) {
      we(n), n.element.find(".fp-scrollable").mouseover(), e.isFunction(s.afterLoad) && !n.localIsResizing && s.afterLoad.call(n.element, n.anchorLink, n.sectionIndex + 1), be(n.element), En = !0, e.isFunction(n.callback) && n.callback.call(this)
    }

    function xe(n) {
      var n = Ce(n);
      n.find("img[data-src], source[data-src], audio[data-src]").each(function () {
        e(this).attr("src", e(this).data("src")), e(this).removeAttr("data-src"), e(this).is("source") && e(this).closest("video").get(0).load()
      })
    }

    function be(n) {
      var n = Ce(n);
      n.find("video, audio").each(function () {
        var n = e(this).get(0);
        n.hasAttribute("autoplay") && "function" == typeof n.play && n.play()
      })
    }

    function Te(n) {
      var n = Ce(n);
      n.find("video, audio").each(function () {
        var n = e(this).get(0);
        n.hasAttribute("data-ignore") || "function" != typeof n.pause || n.pause()
      })
    }

    function Ce(n) {
      var o = n.find(O);
      return o.length && (n = e(o)), n
    }

    function ke() {
      var e = n.location.hash.replace("#", "").split("/"),
        o = e[0],
        t = e[1];
      o && (s.animateAnchor ? je(o, t) : Sn.silentMoveTo(o, t))
    }

    function Ae() {
      if (!Pn && !s.lockAnchors) {
        var e = n.location.hash.replace("#", "").split("/"),
          o = e[0],
          t = e[1],
          i = "undefined" == typeof wn,
          a = "undefined" == typeof wn && "undefined" == typeof t && !bn;
        o.length && (o && o !== wn && !i || a || !bn && yn != t) && je(o, t)
      }
    }

    function Me(n) {
      clearTimeout(Dn);
      var o = e(":focus");
      if (!o.is("textarea") && !o.is("input") && !o.is("select") && s.keyboardScrolling && s.autoScrolling) {
        var t = n.which,
          i = [40, 38, 32, 33, 34];
        e.inArray(t, i) > -1 && n.preventDefault(), xn = n.ctrlKey, Dn = setTimeout(function () {
          Le(n)
        }, 150)
      }
    }

    function Le(n) {
      var o = n.shiftKey;
      switch (n.which) {
      case 38:
      case 33:
        Rn.k.up && Sn.moveSectionUp();
        break;
      case 32:
        if (o && Rn.k.up) {
          Sn.moveSectionUp();
          break
        }
      case 40:
      case 34:
        Rn.k.down && Sn.moveSectionDown();
        break;
      case 36:
        Rn.k.up && Sn.moveTo(1);
        break;
      case 35:
        Rn.k.down && Sn.moveTo(e(x).length);
        break;
      case 37:
        Rn.k.left && Sn.moveSlideLeft();
        break;
      case 39:
        Rn.k.right && Sn.moveSlideRight();
        break;
      default:
        return
      }
    }

    function Ee(e) {
      En && (e.pageY < Nn ? Sn.moveSectionUp() : e.pageY > Nn && Sn.moveSectionDown()), Nn = e.pageY
    }

    function Be(n, o) {
      var i = o.position(),
        a = o.index(),
        r = n.closest(x),
        l = r.index(x),
        c = r.data("anchor"),
        f = r.find(Y),
        d = $e(o),
        u = r.find(O),
        h = Mn;
      if (s.onSlideLeave) {
        var p = u.index(),
          v = Ve(p, a);
        if (!h && "none" !== v && e.isFunction(s.onSlideLeave) && s.onSlideLeave.call(u, c, l + 1, p, v, a) === !1) return void(bn = !1)
      }
      Te(u), o.addClass(g).siblings().removeClass(g), h || xe(o), !s.loopHorizontal && s.controlArrows && (r.find(G).toggle(0 !== a), r.find(_).toggle(!o.is(":last-child"))), r.hasClass(g) && Je(a, d, c, l);
      var m = function () {
        h || e.isFunction(s.afterSlideLoad) && s.afterSlideLoad.call(o, c, l + 1, d, a), be(o), bn = !1
      };
      if (s.css3) {
        var w = "translate3d(-" + t.round(i.left) + "px, 0px, 0px)";
        He(n.find(P), s.scrollingSpeed > 0).css(fn(w)), qn = setTimeout(function () {
          m()
        }, s.scrollingSpeed, s.easing)
      } else n.animate({
        scrollLeft: t.round(i.left)
      }, s.scrollingSpeed, s.easing, function () {
        m()
      });
      f.find(S).removeClass(g), f.find("li").eq(a).find("a").addClass(g)
    }

    function Re() {
      if (Fe(), Tn) {
        var n = e(o.activeElement);
        if (!n.is("textarea") && !n.is("input") && !n.is("select")) {
          var i = ee.height();
          t.abs(i - Kn) > 20 * t.max(Kn, i) / 100 && (Sn.reBuild(!0), Kn = i)
        }
      } else clearTimeout(Fn), Fn = setTimeout(function () {
        Sn.reBuild(!0)
      }, 350)
    }

    function Fe() {
      var e = s.responsive || s.responsiveWidth,
        o = s.responsiveHeight,
        t = e && n.outerWidth < e,
        i = o && ee.height() < o;
      e && o ? Sn.setResponsive(t || i) : e ? Sn.setResponsive(t) : o && Sn.setResponsive(i)
    }

    function He(e) {
      var n = "all " + s.scrollingSpeed + "ms " + s.easingcss3;
      return e.removeClass(h), e.css({
        "-webkit-transition": n,
        transition: n
      })
    }

    function qe(e) {
      return e.addClass(h)
    }

    function Oe(e, n) {
      var o = 825,
        i = 900;
      if (o > e || i > n) {
        var a = 100 * e / o,
          r = 100 * n / i,
          l = t.min(a, r),
          s = l.toFixed(2);
        gn.css("font-size", s + "%")
      } else gn.css("font-size", "100%")
    }

    function ze(n, o) {
      s.navigation && (e(E).find(S).removeClass(g), n ? e(E).find('a[href="#' + n + '"]').addClass(g) : e(E).find("li").eq(o).find("a").addClass(g))
    }

    function De(n) {
      s.menu && (e(s.menu).find(S).removeClass(g), e(s.menu).find('[data-menuanchor="' + n + '"]').addClass(g))
    }

    function Ie(e, n) {
      De(e), ze(e, n)
    }

    function Pe(n) {
      var o = e(b).index(x),
        t = n.index(x);
      return o == t ? "none" : o > t ? "up" : "down"
    }

    function Ve(e, n) {
      return e == n ? "none" : e > n ? "left" : "right"
    }

    function We(e) {
      e.css("overflow", "hidden");
      var n, o = s.scrollOverflowHandler,
        t = o.wrapContent(),
        i = e.closest(x),
        a = o.scrollable(e);
      a.length ? n = o.scrollHeight(e) : (n = e.get(0).scrollHeight, s.verticalCentered && (n = e.find(A).get(0).scrollHeight));
      var r = An - parseInt(i.css("padding-bottom")) - parseInt(i.css("padding-top"));
      n > r ? a.length ? o.update(e, r) : (s.verticalCentered ? e.find(A).wrapInner(t) : e.wrapInner(t), o.create(e, r)) : o.remove(e), e.css("overflow", "")
    }

    function Ye(e) {
      e.addClass(V).wrapInner('<div class="' + k + '" style="height:' + Ue(e) + 'px;" />')
    }

    function Ue(e) {
      var n = An;
      if (s.paddingTop || s.paddingBottom) {
        var o = e;
        o.hasClass(y) || (o = e.closest(x));
        var t = parseInt(o.css("padding-top")) + parseInt(o.css("padding-bottom"));
        n = An - t
      }
      return n
    }

    function Xe(e, n) {
      n ? He(kn) : qe(kn), kn.css(fn(e)), setTimeout(function () {
        kn.removeClass(h)
      }, 10)
    }

    function Ne(n) {
      var o = kn.find(x + '[data-anchor="' + n + '"]');
      return o.length || (o = e(x).eq(n - 1)), o
    }

    function Ke(e, n) {
      var o = n.find(D),
        t = o.find(q + '[data-anchor="' + e + '"]');
      return t.length || (t = o.find(q).eq(e)), t
    }

    function je(e, n) {
      var o = Ne(e);
      "undefined" == typeof n && (n = 0), e === wn || o.hasClass(g) ? Qe(o, n) : ve(o, function () {
        Qe(o, n)
      })
    }

    function Qe(e, n) {
      if ("undefined" != typeof n) {
        var o = e.find(D),
          t = Ke(n, e);
        t.length && Be(o, t)
      }
    }

    function Ge(e, n) {
      e.append('<div class="' + W + '"><ul></ul></div>');
      var o = e.find(Y);
      o.addClass(s.slidesNavPosition);
      for (var t = 0; n > t; t++) o.find("ul").append('<li><a href="#"><span></span></a></li>');
      o.css("margin-left", "-" + o.width() / 2 + "px"), o.find("li").first().find("a").addClass(g)
    }

    function Je(e, n, o, t) {
      var i = "";
      s.anchors.length && !s.lockAnchors && (e ? ("undefined" != typeof o && (i = o), "undefined" == typeof n && (n = e), yn = n, Ze(i + "/" + n)) : "undefined" != typeof e ? (yn = n, Ze(o)) : Ze(o)), _e()
    }

    function Ze(e) {
      if (s.recordHistory) location.hash = e;
      else if (Tn || Cn) history.replaceState(i, i, "#" + e);
      else {
        var o = n.location.href.split("#")[0];
        n.location.replace(o + "#" + e)
      }
    }

    function $e(e) {
      var n = e.data("anchor"),
        o = e.index();
      return "undefined" == typeof n && (n = o), n
    }

    function _e() {
      var n = e(b),
        o = n.find(O),
        t = $e(n),
        i = $e(o),
        a = (n.index(x), String(t));
      o.length && (a = a + "-" + i), a = a.replace("/", "-").replace("#", "");
      var r = new RegExp("\\b\\s?" + m + "-[^\\s]+\\b", "g");
      gn[0].className = gn[0].className.replace(r, ""), gn.addClass(m + "-" + a)
    }

    function en() {
      var e, t = o.createElement("p"),
        a = {
          webkitTransform: "-webkit-transform",
          OTransform: "-o-transform",
          msTransform: "-ms-transform",
          MozTransform: "-moz-transform",
          transform: "transform"
        };
      o.body.insertBefore(t, null);
      for (var r in a) t.style[r] !== i && (t.style[r] = "translate3d(1px,1px,1px)", e = n.getComputedStyle(t).getPropertyValue(a[r]));
      return o.body.removeChild(t), e !== i && e.length > 0 && "none" !== e
    }

    function nn() {
      o.addEventListener ? (o.removeEventListener("mousewheel", ue, !1), o.removeEventListener("wheel", ue, !1), o.removeEventListener("MozMousePixelScroll", ue, !1)) : o.detachEvent("onmousewheel", ue)
    }

    function on() {
      var e, t = "";
      n.addEventListener ? e = "addEventListener" : (e = "attachEvent", t = "on");
      var a = "onwheel" in o.createElement("div") ? "wheel" : o.onmousewheel !== i ? "mousewheel" : "DOMMouseScroll";
      "DOMMouseScroll" == a ? o[e](t + "MozMousePixelScroll", ue, !1) : o[e](t + a, ue, !1)
    }

    function tn() {
      if (Tn || Cn) {
        var n = rn();
        e(l).off("touchstart " + n.down).on("touchstart " + n.down, fe), e(l).off("touchmove " + n.move).on("touchmove " + n.move, le)
      }
    }

    function an() {
      if (Tn || Cn) {
        var n = rn();
        e(l).off("touchstart " + n.down), e(l).off("touchmove " + n.move)
      }
    }

    function rn() {
      var e;
      return e = n.PointerEvent ? {
        down: "pointerdown",
        move: "pointermove"
      } : {
        down: "MSPointerDown",
        move: "MSPointerMove"
      }
    }

    function ln(e) {
      var n = [];
      return n.y = "undefined" != typeof e.pageY && (e.pageY || e.pageX) ? e.pageY : e.touches[0].pageY, n.x = "undefined" != typeof e.pageX && (e.pageY || e.pageX) ? e.pageX : e.touches[0].pageX, Cn && ce(e) && s.scrollBar && (n.y = e.touches[0].pageY, n.x = e.touches[0].pageX), n
    }

    function sn(e, n) {
      Sn.setScrollingSpeed(0, "internal"), "undefined" != typeof n && (Mn = !0), Be(e.closest(D), e), "undefined" != typeof n && (Mn = !1), Sn.setScrollingSpeed(In.scrollingSpeed, "internal")
    }

    function cn(e) {
      if (s.scrollBar) kn.scrollTop(e);
      else if (s.css3) {
        var n = "translate3d(0px, -" + e + "px, 0px)";
        Xe(n, !1)
      } else kn.css("top", -e)
    }

    function fn(e) {
      return {
        "-webkit-transform": e,
        "-moz-transform": e,
        "-ms-transform": e,
        transform: e
      }
    }

    function dn(e, n, o) {
      switch (n) {
      case "up":
        Rn[o].up = e;
        break;
      case "down":
        Rn[o].down = e;
        break;
      case "left":
        Rn[o].left = e;
        break;
      case "right":
        Rn[o].right = e;
        break;
      case "all":
        "m" == o ? Sn.setAllowScrolling(e) : Sn.setKeyboardScrolling(e)
      }
    }

    function un() {
      cn(0), e(E + ", " + Y + ", " + N).remove(), e(x).css({
        height: "",
        "background-color": "",
        padding: ""
      }), e(q).css({
        width: ""
      }), kn.css({
        height: "",
        position: "",
        "-ms-touch-action": "",
        "touch-action": ""
      }), mn.css({
        overflow: "",
        height: ""
      }), e("html").removeClass(v), e.each(gn.get(0).className.split(/\s+/), function (e, n) {
        0 === n.indexOf(m) && gn.removeClass(n)
      }), e(x + ", " + q).each(function () {
        s.scrollOverflowHandler.remove(e(this)), e(this).removeClass(V + " " + g)
      }), qe(kn), kn.find(A + ", " + P + ", " + D).each(function () {
        e(this).replaceWith(this.childNodes)
      }), mn.scrollTop(0);
      var n = [y, H, I];
      e.each(n, function (n, o) {
        e("." + o).removeClass(o)
      })
    }

    function hn(e, n, o) {
      s[e] = n, "internal" !== o && (In[e] = n)
    }

    function pn() {
      s.continuousVertical && (s.loopTop || s.loopBottom) && (s.continuousVertical = !1, vn("warn", "Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), s.scrollBar && s.scrollOverflow && vn("warn", "Option `scrollBar` is mutually exclusive with `scrollOverflow`. Sections with scrollOverflow might not work well in Firefox"), s.continuousVertical && s.scrollBar && (s.continuousVertical = !1, vn("warn", "Option `scrollBar` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), e.each(s.anchors, function (n, o) {
        (e("#" + o).length || e('[name="' + o + '"]').length) && vn("error", "data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).")
      })
    }

    function vn(e, n) {
      console && console[e] && console[e]("fullPage: " + n)
    }
    var mn = e("html, body"),
      gn = e("body"),
      Sn = e.fn.fullpage;
    s = e.extend({
      menu: !1,
      anchors: [],
      lockAnchors: !1,
      navigation: !1,
      navigationPosition: "right",
      navigationTooltips: [],
      showActiveTooltip: !1,
      slidesNavigation: !1,
      slidesNavPosition: "bottom",
      scrollBar: !1,
      css3: !0,
      scrollingSpeed: 700,
      autoScrolling: !0,
      fitToSection: !0,
      fitToSectionDelay: 1e3,
      easing: "easeInOutCubic",
      easingcss3: "ease",
      loopBottom: !1,
      loopTop: !1,
      loopHorizontal: !0,
      continuousVertical: !1,
      normalScrollElements: null,
      scrollOverflow: !1,
      scrollOverflowHandler: a,
      touchSensitivity: 5,
      normalScrollElementTouchThreshold: 5,
      keyboardScrolling: !0,
      animateAnchor: !0,
      recordHistory: !0,
      controlArrows: !0,
      controlArrowColor: "#fff",
      verticalCentered: !0,
      resize: !1,
      sectionsColor: [],
      paddingTop: 0,
      paddingBottom: 0,
      fixedElements: null,
      responsive: 0,
      responsiveWidth: 0,
      responsiveHeight: 0,
      sectionSelector: w,
      slideSelector: F,
      afterLoad: null,
      onLeave: null,
      afterRender: null,
      afterResize: null,
      afterReBuild: null,
      afterSlideLoad: null,
      onSlideLeave: null
    }, s), pn(), e.extend(e.easing, {
      easeInOutCubic: function (e, n, o, t, i) {
        return (n /= i / 2) < 1 ? t / 2 * n * n * n + o : t / 2 * ((n -= 2) * n * n + 2) + o
      }
    }), e.extend(e.easing, {
      easeInQuart: function (e, n, o, t, i) {
        return t * (n /= i) * n * n * n + o
      }
    }), Sn.setAutoScrolling = function (n, o) {
      hn("autoScrolling", n, o);
      var t = e(b);
      s.autoScrolling && !s.scrollBar ? (mn.css({
        overflow: "hidden",
        height: "100%"
      }), Sn.setRecordHistory(In.recordHistory, "internal"), kn.css({
        "-ms-touch-action": "none",
        "touch-action": "none"
      }), t.length && cn(t.position().top)) : (mn.css({
        overflow: "visible",
        height: "initial"
      }), Sn.setRecordHistory(!1, "internal"), kn.css({
        "-ms-touch-action": "",
        "touch-action": ""
      }), cn(0), t.length && mn.scrollTop(t.position().top))
    }, Sn.setRecordHistory = function (e, n) {
      hn("recordHistory", e, n)
    }, Sn.setScrollingSpeed = function (e, n) {
      hn("scrollingSpeed", e, n)
    }, Sn.setFitToSection = function (e, n) {
      hn("fitToSection", e, n)
    }, Sn.setLockAnchors = function (e) {
      s.lockAnchors = e
    }, Sn.setMouseWheelScrolling = function (e) {
      e ? on() : nn()
    }, Sn.setAllowScrolling = function (n, o) {
      "undefined" != typeof o ? (o = o.replace(/ /g, "").split(","), e.each(o, function (e, o) {
        dn(n, o, "m")
      })) : n ? (Sn.setMouseWheelScrolling(!0), tn()) : (Sn.setMouseWheelScrolling(!1), an())
    }, Sn.setKeyboardScrolling = function (n, o) {
      "undefined" != typeof o ? (o = o.replace(/ /g, "").split(","), e.each(o, function (e, o) {
        dn(n, o, "k")
      })) : s.keyboardScrolling = n
    }, Sn.moveSectionUp = function () {
      var n = e(b).prev(x);
      n.length || !s.loopTop && !s.continuousVertical || (n = e(x).last()), n.length && ve(n, null, !0)
    }, Sn.moveSectionDown = function () {
      var n = e(b).next(x);
      n.length || !s.loopBottom && !s.continuousVertical || (n = e(x).first()), n.length && ve(n, null, !1)
    }, Sn.silentMoveTo = function (e, n) {
      requestAnimFrame(function () {
        Sn.setScrollingSpeed(0, "internal")
      }), Sn.moveTo(e, n), requestAnimFrame(function () {
        Sn.setScrollingSpeed(In.scrollingSpeed, "internal")
      })
    }, Sn.moveTo = function (e, n) {
      var o = Ne(e);
      "undefined" != typeof n ? je(e, n) : o.length > 0 && ve(o)
    }, Sn.moveSlideRight = function (e) {
      he("next", e)
    }, Sn.moveSlideLeft = function (e) {
      he("prev", e)
    }, Sn.reBuild = function (o) {
      if (!kn.hasClass(p)) {
        Mn = !0, requestAnimFrame(function () {
          Mn = !0
        });
        var t = n.outerWidth;
        An = ee.height(), s.resize && Oe(An, t), e(x).each(function () {
          var n = e(this).find(D),
            o = e(this).find(q);
          s.verticalCentered && e(this).find(A).css("height", Ue(e(this)) + "px"), e(this).css("height", An + "px"), s.scrollOverflow && (o.length ? o.each(function () {
            We(e(this))
          }) : We(e(this))), o.length > 1 && Be(n, n.find(O))
        });
        var i = e(b),
          a = i.index(x);
        a && Sn.silentMoveTo(a + 1), Mn = !1, requestAnimFrame(function () {
          Mn = !1
        }), e.isFunction(s.afterResize) && o && s.afterResize.call(kn), e.isFunction(s.afterReBuild) && !o && s.afterReBuild.call(kn)
      }
    }, Sn.setResponsive = function (n) {
      var o = gn.hasClass(u);
      n ? o || (Sn.setAutoScrolling(!1, "internal"), Sn.setFitToSection(!1, "internal"), e(E).hide(), gn.addClass(u)) : o && (Sn.setAutoScrolling(In.autoScrolling, "internal"), Sn.setFitToSection(In.autoScrolling, "internal"), e(E).show(), gn.removeClass(u))
    };
    var wn, yn, xn, bn = !1,
      Tn = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),
      Cn = "ontouchstart" in n || navigator.msMaxTouchPoints > 0 || navigator.maxTouchPoints,
      kn = e(this),
      An = ee.height(),
      Mn = !1,
      Ln = !0,
      En = !0,
      Bn = [],
      Rn = {};
    Rn.m = {
      up: !0,
      down: !0,
      left: !0,
      right: !0
    }, Rn.k = e.extend(!0, {}, Rn.m);
    var Fn, Hn, qn, On, zn, Dn, In = e.extend(!0, {}, s);
    e(this).length && c();
    var Pn = !1;
    ee.on("scroll", ae);
    var Vn = 0,
      Wn = 0,
      Yn = 0,
      Un = 0,
      Xn = (new Date).getTime();
    n.requestAnimFrame = function () {
      return n.requestAnimationFrame || n.webkitRequestAnimationFrame || n.mozRequestAnimationFrame || n.oRequestAnimationFrame || n.msRequestAnimationFrame || function (e) {
        e()
      }
    }(), ee.on("hashchange", Ae), ne.keydown(Me), ne.keyup(function (e) {
      Ln && (xn = e.ctrlKey)
    }), e(n).blur(function () {
      Ln = !1, xn = !1
    });
    var Dn;
    kn.mousedown(function (e) {
      2 == e.which && (Nn = e.pageY, kn.on("mousemove", Ee))
    }), kn.mouseup(function (e) {
      2 == e.which && kn.off("mousemove")
    });
    var Nn = 0;
    ne.on("click touchstart", E + " a", function (n) {
      n.preventDefault();
      var o = e(this).parent().index();
      ve(e(x).eq(o))
    }), ne.on("click touchstart", U, function (n) {
      n.preventDefault();
      var o = e(this).closest(x).find(D),
        t = o.find(q).eq(e(this).closest("li").index());
      Be(o, t)
    }), s.normalScrollElements && (ne.on("mouseenter", s.normalScrollElements, function () {
      Sn.setMouseWheelScrolling(!1)
    }), ne.on("mouseleave", s.normalScrollElements, function () {
      Sn.setMouseWheelScrolling(!0)
    })), e(x).on("click touchstart", N, function () {
      var n = e(this).closest(x);
      e(this).hasClass(K) ? Rn.m.left && Sn.moveSlideLeft(n) : Rn.m.right && Sn.moveSlideRight(n)
    }), ee.resize(Re);
    var Kn = An;
    Sn.destroy = function (n) {
      Sn.setAutoScrolling(!1, "internal"), Sn.setAllowScrolling(!1), Sn.setKeyboardScrolling(!1), kn.addClass(p), clearTimeout(qn), clearTimeout(Hn), clearTimeout(Fn), clearTimeout(On), clearTimeout(zn), ee.off("scroll", ae).off("hashchange", Ae).off("resize", Re), ne.off("click", E + " a").off("mouseenter", E + " li").off("mouseleave", E + " li").off("click", U).off("mouseover", s.normalScrollElements).off("mouseout", s.normalScrollElements), e(x).off("click", N), clearTimeout(qn), clearTimeout(Hn), n && un()
    }
  };
  var oe = {
    afterRender: function (e) {
      var n = e.find(z),
        o = e.find(c);
      n.length && (o = n.find(O)), o.mouseover()
    },
    create: function (e, n) {
      e.find(c).slimScroll({
        allowPageScroll: !0,
        height: n + "px",
        size: "10px",
        alwaysVisible: !0
      })
    },
    isScrolled: function (e, n) {
      return "top" === e ? !n.scrollTop() : "bottom" === e ? n.scrollTop() + 1 + n.innerHeight() >= n[0].scrollHeight : void 0
    },
    scrollable: function (e) {
      return e.find(D).length ? e.find(O).find(c) : e.find(c)
    },
    scrollHeight: function (e) {
      return e.find(c).get(0).scrollHeight
    },
    remove: function (e) {
      e.find(c).children().first().unwrap().unwrap(), e.find(f).remove(), e.find(d).remove()
    },
    update: function (e, n) {
      e.find(c).css("height", n + "px").parent().css("height", n + "px")
    },
    wrapContent: function () {
      return '<div class="' + s + '"></div>'
    }
  };
  a = oe
});