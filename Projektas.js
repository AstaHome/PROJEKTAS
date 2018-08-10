jQuery(document).ready(function(){
    jQuery('.carousel_1').owlCarousel({
        margin:10,
        loop:true,
        autoWidth:true,
        items:4
    })

    jQuery('.carousel_2').owlCarousel({
        margin:10,
        loop:true,
        autoWidth:true,
        items:4
    })
  });

jQuery(document).ready(function(){
    jQuery('.burger_nav').click(function(){
        jQuery('.nav').toggleClass('show');
    });
});