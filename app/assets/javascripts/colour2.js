function getRandomColour() {
    var letters = '0123456789ABCDEF';
    var colour = '#';
    for (var i = 0; i < 6; i++ ) {
        colour += letters[Math.floor(Math.random() * 16)];
    }
    return colour;
}

function ColorLuminance(hex, lum) {

	// validate hex string
	hex = String(hex).replace(/[^0-9a-f]/gi, '');
	if (hex.length < 6) {
		hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
	}
	lum = lum || 0;

	// convert to decimal and change luminosity
	var rgb = "#", c, i;
	for (i = 0; i < 3; i++) {
		c = parseInt(hex.substr(i*2,2), 16);
		c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
		rgb += ("00"+c).substr(c.length);
	}
	return rgb;
}

function getTones(){
  var c1 = $("#colourValueHEX1" ).val();
  // $('.tone1').css({'background-color': c1}).text(c1.toUpperCase());

  var c2 = ColorLuminance(c1, -0.6);
  $('.tone2').css({'background-color': c2}).text(c2.toUpperCase());
  $('.t2').val(c2)

  var c3 = ColorLuminance(c1, -0.3)
  $('.tone3').css({'background-color': c3}).text(c3.toUpperCase());
  $('.t3').val(c3)

  var c4 = ColorLuminance(c1, -0.1);
  $('.tone4').css({'background-color': c4}).text(c4.toUpperCase());
  $('.t4').val(c4)

  var c5 = ColorLuminance(c1, 0.3);
  $('.tone5').css({'background-color': c5}).text(c5.toUpperCase());
  $('.t5').val(c5)

  var c6 = ColorLuminance(c1, 0.6);
  $('.tone6').css({'background-color': c6}).text(c6.toUpperCase());
  $('.t6').val(c6)

  var c7 = ColorLuminance(c1, 0.9);
  $('.tone7').css({'background-color': c7}).text(c7.toUpperCase());
  $('.t7').val(c7)
}

$(document).ready(function() {

  //GET COLOUR PALETTE
  $("#getPalette").on('click', function(event) {
    event.preventDefault();
    var colour1 = getRandomColour();
    var colour2 = getRandomColour();
    var colour3 = getRandomColour();
    var colour4 = getRandomColour();
    $('#colourValueHEX1').val(colour1);
    $('#colourValueHEX1').attr('value', colour1)
    $('#circle1').css({'background-color': colour1});
    $('#colourValueHEX2').val(colour2);
    $('#colourValueHEX2').attr('value', colour2)
    $('#circle2').css({'background-color': colour2});
    $('#colourValueHEX3').val(colour3);
    $('#colourValueHEX3').attr('value', colour3)
    $('#circle3').css({'background-color': colour3});
    $('#colourValueHEX4').val(colour4);
    $('#colourValueHEX4').attr('value', colour4)
    $('#circle4').css({'background-color': colour4});

    //TONE
    getTones();

  });

  //GENERATE INDIVIDUAL COLOURS

  $(".getColour").on('click', function(event) {
    event.preventDefault();
    var colour = getRandomColour();
    var $colourInput = $(event.target).closest('.line').find('.colourValueHEX');
    var $circle = $(event.target).closest('.line').find('.circle');
    $colourInput.val(colour);
    $circle.css({'background-color': colour});
    getTones();
  });

  //DYNAMICALLY CHANGE COLOUR OF HEX
  $(".colourValueHEX").on("change paste keyup", function() {
     var $circle = $(this).closest('.line').find('.circle');
     $circle.css({'background-color': $(this).val()});

    //TONE
    getTones();
  });

  //LOREM, IPSUM, SAMUEL

  $("#hipster").on("click", function(event) {
      event.preventDefault();
      var hipster = "Cold-pressed post-ironic fam, flexitarian ugh pork belly sartorial truffaut. +1 XOXO portland mixtape meggings, keffiyeh tote bag. Swag cold-pressed health goth tattooed, street art vexillologist semiotics fingerstache taxidermy disrupt kale chips succulents coloring book. Iceland edison bulb vegan man braid vinyl viral. Subway tile chicharrones humblebrag flexitarian."
      $(".test2").val(hipster);
      $('.paragraph').text(hipster);
  });

  $("#lorem").on("click", function(event) {
      event.preventDefault();
      var lorem = "Ut id orci non elit congue sodales. Nullam eu felis at lacus ultricies accumsan. In eu magna nec felis tempor suscipit in consequat ex. Donec iaculis nunc diam, in consequat elit sagittis ut. In lobortis pellentesque velit non accumsan. Integer vel elit at orci dignissim ultricies. Nunc sed aliquet massa. Proin maximus, velit vulputate malesuada posuere, ligula odio consectetur libero."
      $(".test2").val(lorem);
      $('.paragraph').text(lorem);
  });

  $("#samuel").on("click", function(event) {
      event.preventDefault();
      var samuel = "Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it? Do you see a little Asian child with a blank expression on his face sitting outside on a mechanical helicopter that shakes when you put quarters in it? No? Well, that's what you see at a toy store. And you must think you're in a toy store, because you're here shopping for an infant named Jeb."
      $(".test2").val(samuel);
      $('.paragraph').text(samuel);
  });

  //DYNAMICALLY CHANGE TEXT
  $(".test1").on("change paste keyup", function() {
    console.log(this);
    $('.header').text($(this).val());
  });

  $(".test2").on("change paste keyup", function() {
    console.log(this);
    $('.paragraph').text($(this).val());
  });


  $('#font1').change(function(){
      var selected = $('#font1 :selected').text();
        console.log(selected);
      $('.header').css({'font-family': selected });
  });

  $('#font2').change(function(){
      var selected = $('#font2 :selected').text();
      console.log(selected)
      $('.paragraph').css({'font-family': selected });
  });


  //NAV SCROLL

  $('#myTopnav a').click(function(){
    console.log('hi')
    var faqid = $(this).attr("href");
    $('body').animate({scrollTop: $(faqid).offset().top}, "slow");
    return false;
  });

  $('.next').click(function(){
    console.log('hi')
    var faqid = $(this).attr("href");
    $('body').animate({scrollTop: $(faqid).offset().top}, "slow");
    return false;
  });


  



});
