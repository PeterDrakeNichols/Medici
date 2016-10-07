$(document).on('turbolinks:load', function(){

    $('.super-search').click(function(){
      $('.search-in-search').slideDown();
    });

    var $container = $('.masonry-container');
    $container.imagesLoaded(function(){
        $container.masonry({
        itemSelector : '.post-wrapper',
        columnWidth : '.post-wrapper',
        });
    });
    $("#log-in-button").click(function(){
        $(".post-wrapper").fadeOut(2000);
    });
    $(".panel-sign-in").fadeIn(1000);
    $(".btn2").click(function(){
        $(".panel-sign-in").slideDown();
    });
	  document.getElementById('museum-toggle').focus();
    $("#museum-toggle").click(function(){
        $(".museum-panel").toggle();
        setTimeout(function(){ $container.masonry('layout'); }, 300);
    });
    document.getElementById('exhibit-toggle').focus();
     $("#exhibit-toggle").click(function(){
        $(".exhibit-panel").toggle();
        setTimeout(function(){ $container.masonry('layout'); }, 300);
    });
     document.getElementById('event-toggle').focus();
     $("#event-toggle").click(function(){
        $(".event-panel").toggle();
        setTimeout(function(){ $container.masonry('layout'); }, 300);
    });

    $(window).resize(function(){
       var width = $(window).width();
       if(width <= 768){
        setTimeout(function(){ $container.masonry('layout'); }, 700);
       }
    })

    $('.cart_form').on('click', function(e){
      if (!$("input[name='terms']").is(':checked')){
        e.preventDefault();
        alert("You must accept the Terms and Conditions")
      }
    });
});
