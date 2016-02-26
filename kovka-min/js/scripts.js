$(document).on('ready', function () {



  $(function () {
    var state = {
      "page-id": 1
    };
    var currentHash = "";

    window.history.pushState(state, "Title", currentHash);

  });
  //animate header images

  $('.b-hide').addClass('b-show');


  //parallax


  if (jQuery(window).width() >= '768') {
    $(".parallax-image").each(function () {
      var e = $(this);
      $(window).on('scroll', function () {
        var t = window.pageYOffset / e.data("speed"),
          n = t + e.data("top");
        e.css("top", n + "px")
      });
    });

    $(".parallax-fon").each(function () {
      var e = $(this);
      $(window).on("scroll", function () {
        var t = -(window.pageYOffset / e.data("speed")) + e.data("top"),
          n = "center " + t + "px";
        e.css("background-position", n);
        e.css("background-attachment", "fixed")
      })
    })
  }


  //form
  $('form').submit(function (e) {
    e.preventDefault();

    var $form = $(this);

    $(this).append("<div class='sending'><em>отправка...</em></div>");

    $.ajax({
      type: 'POST',
      url: 'mail.php',
      data: $(this).serialize(),
      success: function (data) {
        if (data == "true") {
          $('.sending').hide();
        }
      }
    });

    $('#modal-feedback').modal('hide');
    $('#modal-thanks').modal('show');

    setTimeout(function () {
      $('#modal-thanks').modal('hide');

    }, 5000);

  });

  //scroll

  $(function () {

    $(".scroll a").click(function () {

      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);

        target = (target.length) ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);


          return false;
        }
      }
    });

  });




  $('#modal-feedback, #modal-thanks').on('show.bs.modal', function (e) {
    $(this).addClass('fade-b');
  });

  $('#modal-feedback, #modal-thanks').on('hidden.bs.modal', function (e) {
    $(this).removeClass('fade-b');
  });


  $("a[rel=group1]").fancybox({
    padding: 0,
    helpers: {
      overlay: {
        locked: false
      }
    }
  });

  $('#carousel-example-generic').carousel({
    interval: 3000, // remove interval for manual sliding
   
  });

  // when the carousel slides, load the ajax content
  $('#carousel-example-generic').on("slide.bs.carousel", function () {
    // load the next image after the current one slid

    var $nextImage = $('#carousel-example-generic .active').next('.item');
    $nextImage.css('background-image', 'url(' + $nextImage.data('url') + ')');
  });
  $('#first-photo').css('background-image', 'url(' + $('#first-photo').data('url') + ')');
  
  
   $("#carousel-comments, #carousel-example-generic").swiperight(function() {  
      $("#carousel-comments, #carousel-example-generic").carousel('prev');  
    });  
   $("#carousel-comments, #carousel-example-generic").swipeleft(function() {  
      $("#carousel-comments, #carousel-example-generic").carousel('next');  
   });  
   

  


});


