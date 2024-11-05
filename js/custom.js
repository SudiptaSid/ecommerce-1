// Banner Slider
$('#banner_slider').owlCarousel({
    margin:0,
    items: 1,
    nav:false,
    navText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"], 
    dots:true,
    loop:true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true
})
// Cart Toggle
$(".cart_toggle").click(function(){
    $(".cart_box").toggleClass("view");
});
// Range Slider
$(function() {
    $("#slider-range").slider({
        range: true,
        min: 0,
        max: 50000,
        values: [0, 50000],
        slide: function(event, ui) {
            $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
        }
    });
    $("#amount").val("$" + $("#slider-range").slider("values", 0) + " - $" + $("#slider-range").slider("values", 1));
});
// Product Zoom
$(".xzoom, .xzoom-gallery").xzoom({tint: '#333', Xoffset: 15});
// Qty Input
jQuery(document).ready(function(){
    // This button will increment the value
    $('.qty_p').click(function(e){
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('field');
        // Get its current value
        var currentVal = parseInt($('input[name='+fieldName+']').val());
        // If is not undefined
        if (!isNaN(currentVal)) {
            // Increment
            $('input[name='+fieldName+']').val(currentVal + 1);
        } else {
            // Otherwise put a 0 there
            $('input[name='+fieldName+']').val(0);
        }
    });
    // This button will decrement the value till 0
    $(".qty_m").click(function(e) {
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('field');
        // Get its current value
        var currentVal = parseInt($('input[name='+fieldName+']').val());
        // If it isn't undefined or its greater than 0
        if (!isNaN(currentVal) && currentVal > 0) {
            // Decrement one
            $('input[name='+fieldName+']').val(currentVal - 1);
        } else {
            // Otherwise put a 0 there
            $('input[name='+fieldName+']').val(0);
        }
    });
});
// Payment Card Div
$("input[name=payment_o]").click(function () {
    if (this.id == "card_p") {
        $(".card_pay").show('fast');
    } else {
        $(".card_pay").hide('fast');
    }
});