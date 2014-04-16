jQuery(document).ready(function() {
    jQuery.each( jQuery('form input, textarea'), function() {
var input_name = jQuery(this).attr('name');
if (localStorage[input_name]) {
jQuery(this).val(localStorage[input_name]);
			}
		});
	});
