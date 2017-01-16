//GETS RANDOM HEX VALUE

function getRandomColour() {
    var letters = '0123456789ABCDEF';
    var colour = '#';
    for (var i = 0; i < 6; i++ ) {
        colour += letters[Math.floor(Math.random() * 16)];
    }
    return colour;
}

//GETS RANDOM ColorLuminance

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

//CHANGES HUES TO DIFF TONE

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

//CHANGE LOCK STATUS ON CLICK
var locked = false;

$('.fa').on('click',function(){
  if($(this).attr('data-click-state') == 0) {
    $(this).attr('data-click-state', 1)
    $(this).css('color', 'black')
    $(this).removeClass('fa-lock').addClass("fa-unlock-alt");
    locked = true;
    return locked;
  } else {
    $(this).attr('data-click-state', 0)
    $(this).css('color', 'gray')
    $(this).removeClass('fa-unlock-alt').addClass("fa-lock");
    locked = false;
    return locked;
  }
});

  //GENERATE INDIVIDUAL COLOURS

    $(".getColour").on('click', function(event) {
      event.preventDefault();

      console.log(locked);
      var colour = getRandomColour();
      var $colourInput = $(event.target).closest('.line').find('.colourValueHEX');
      var $circle = $(event.target).closest('.line').find('.circle');
      var $lockstatus = $(event.target).closest('.line').find('.fa');
      console.log($lockstatus)

      if($lockstatus.hasClass("fa-unlock-alt")){
        $colourInput.val(colour);
        $circle.css({'background-color': colour});
        getTones();
      }
    });

    //CHANGE ALL COLOURS - GET COLOURS BUTTON
    function genPalette(){
      event.preventDefault();
      var colour1 = getRandomColour();
      var colour2 = getRandomColour();
      var colour3 = getRandomColour();
      var colour4 = getRandomColour();
      var $lockstatus1 = $('#lock1');
      var $lockstatus2 = $('#lock2');
      var $lockstatus3 = $('#lock3');
      var $lockstatus4 = $('#lock4');

      if($lockstatus1.hasClass("fa-unlock-alt")){
        $('#colourValueHEX1').val(colour1);
        $('#colourValueHEX1').attr('value', colour1)
        $('#circle1').css({'background-color': colour1});
      }
       if($lockstatus2.hasClass("fa-unlock-alt")){
        $('#colourValueHEX2').val(colour2);
        $('#colourValueHEX2').attr('value', colour2)
        $('#circle2').css({'background-color': colour2});
      }

      if($lockstatus3.hasClass("fa-unlock-alt")){
        $('#colourValueHEX3').val(colour3);
        $('#colourValueHEX3').attr('value', colour3)
        $('#circle3').css({'background-color': colour3});
      }

      if($lockstatus4.hasClass("fa-unlock-alt")){
        $('#colourValueHEX4').val(colour4);
        $('#colourValueHEX4').attr('value', colour4)
        $('#circle4').css({'background-color': colour4});
      }

      //TONE
      getTones();
    }


    $("#getPalette").click(genPalette);

    window.addEventListener('keydown', function(e) {
      if(e.keyCode == 16 && e.target == document.body){
        e.preventDefault();
        genPalette();
      }
    });

  //DYNAMICALLY CHANGE COLOUR OF HEX
  $(".colourValueHEX").on("change paste keyup", function() {
     var $lockstatus = $(this).closest('.line').find('.fa');
     var $circle = $(this).closest('.line').find('.circle');
     var $input = document.getElementById("colourValueHEX1");
     if($lockstatus.hasClass("fa-unlock-alt")){
     $circle.css({'background-color': $(this).val()});

    //TONE
    getTones();
  }
  });

  // //LOCK COLOURS
  // $(".locked").on('click', function(event) {
  //   event.preventDefault();
  //   var lockedColour = $(event.target).closest('.line').find('.colourValueHEX').val();
  //   console.log('lockedColour is : ' + lockedColour);
  // });


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
      var samuel = "Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows. Some pilots get picked and become television programs. Some don't, become nothing. She starred in one of the ones that became nothing."
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
