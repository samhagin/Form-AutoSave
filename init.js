jQuery(document).bind("change keyup blur focus", function() {  
    jQuery.each(jQuery('input,textarea'), function() {
localStorage[jQuery(this).attr('name')] = jQuery(this).val();
    });
});

jQuery('form').submit(function() {
    localStorage.removeItem(input_name);
        });

