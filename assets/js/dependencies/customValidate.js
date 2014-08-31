$(document).ready(function(){
	$('.form-signin').validate({
		rules: {
			name: {
				required: true
			},
			email:{
				required: true,
				email: true
			},
			pwd: {
				minlength: 6,
				required: true
			},
			confirmation: {
				minlength: 6,
				equalTo: "#pwd"
			}
		},
		success: function(element){
			element.text('OK!').addClass('valid')
		}
	});
});