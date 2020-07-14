<script>
/* TOGGLER */
$(function(){
	$(".toggleContent").hide();
	$(".toggleOpen").click(function() {
	$(this).next('.toggleContent').slideToggle();
	if ($(this).is('.toggleOpen')) {
		$(this).removeClass('toggleOpen').addClass('toggleClose');
	}
	else {
		$(this).removeClass('toggleClose').addClass('toggleOpen');
	}
	});
});
</script>

<script>
/* SMOOTH SCROLLING */
$(document).ready(function() {
	$("html").niceScroll({styler:"fb",cursorcolor:"#000"});
});
</script>

<script>
/* SMOOTH ANCHORING */
jQuery(document).ready(function($) {
	$(".scroll").click(function(event){
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top}, 1300);
	});
});
</script>

<script>
/* FADE INTO DIV */
$(document).ready(function(){
	$(window).scroll(function(){
		$('#home').css(opacity:0.5);
	});
});
</script>

<script>
/* SLIDE LEFT */
$(document).ready(function() {
	$('#slideleft a').click(function() {
		var $lefty = $(this).next();
		$lefty.animate({
		left: parseInt($lefty.css('left'),10) == 0 ?
		-$lefty.outerWidth() :
		0
		});
	});
});
</script>

<script>
/* VALIDATE FORM */
function validateForm() {
	var x = document.forms["contact"]["name"].value;
	if (x==null || x=="") {
		alert("Please enter a name");
		return false;
	}
	var y = document.forms["contact"]["email"].value;
	var atpos = y.indexOf("@");
	var dotpos = y.lastIndexOf(".");
	if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=y.length) {
		alert("Please enter a valid e-mail address");
		return false;
	}
	var z = document.forms["contact"]["message"].value;
	if (z==null || z=="") {
		alert("Please enter a message");
		return false;
	}
}
</script>