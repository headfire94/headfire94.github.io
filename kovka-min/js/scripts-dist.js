$(document).on("ready",function(){$(function(){var e={"page-id":1},a="";window.history.pushState(e,"Title",a)}),$(".b-hide").addClass("b-show"),jQuery(window).width()>="768"&&($(".parallax-image").each(function(){var e=$(this);$(window).on("scroll",function(){var a=window.pageYOffset/e.data("speed"),o=a+e.data("top");e.css("top",o+"px")})}),$(".parallax-fon").each(function(){var e=$(this);$(window).on("scroll",function(){var a=-(window.pageYOffset/e.data("speed"))+e.data("top"),o="center "+a+"px";e.css("background-position",o),e.css("background-attachment","fixed")})})),$("form").submit(function(e){e.preventDefault();$(this);$(this).append("<div class='sending'><em>отправка...</em></div>"),$.ajax({type:"POST",url:"mail.php",data:$(this).serialize(),success:function(e){"true"==e&&$(".sending").hide()}}),$("#modal-feedback").modal("hide"),$("#modal-thanks").modal("show"),setTimeout(function(){$("#modal-thanks").modal("hide")},5e3)}),$(function(){$(".scroll a").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var e=$(this.hash);if(e=e.length?e:$("[name="+this.hash.slice(1)+"]"),e.length)return $("html,body").animate({scrollTop:e.offset().top},1e3),!1}})}),$("#modal-feedback, #modal-thanks").on("show.bs.modal",function(){$(this).addClass("fade-b")}),$("#modal-feedback, #modal-thanks").on("hidden.bs.modal",function(){$(this).removeClass("fade-b")}),$("a[rel=group1]").fancybox({padding:0,helpers:{overlay:{locked:!1}}}),$("#carousel-example-generic").carousel({interval:3e3}),$("#carousel-example-generic").on("slide.bs.carousel",function(){var e=$("#carousel-example-generic .active").next(".item");e.css("background-image","url("+e.data("url")+")")}),$("#first-photo").css("background-image","url("+$("#first-photo").data("url")+")"),$("#carousel-comments, #carousel-example-generic").swiperight(function(){$("#carousel-comments, #carousel-example-generic").carousel("prev")}),$("#carousel-comments, #carousel-example-generic").swipeleft(function(){$("#carousel-comments, #carousel-example-generic").carousel("next")})});
