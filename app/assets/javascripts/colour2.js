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

$('.lock').on('click',function(){
  if($(this).attr('data-click-state') == 0) {
    $(this).attr('data-click-state', 1)
    $(this).css('color', 'red')
    $(this).text('lock')
    locked = true;
    return locked;
  } else {
    $(this).attr('data-click-state', 0)
    $(this).css('color', 'blue')
    $(this).text('unlock')
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
      var $lockstatus = $(event.target).closest('.line').find('.lock').text();
      console.log($lockstatus)

      if($lockstatus === 'lock'){
        $colourInput.val(colour);
        $circle.css({'background-color': colour});
        getTones();
      }
    });

    //CHANGE ALL COLOURS - GET COLOURS BUTTON
    $("#getPalette").on('click', function(event) {
      event.preventDefault();
      var colour1 = getRandomColour();
      var colour2 = getRandomColour();
      var colour3 = getRandomColour();
      var colour4 = getRandomColour();
      var $lockstatus1 = $('#lock1').text();
      var $lockstatus2 = $('#lock2').text();
      var $lockstatus3 = $('#lock3').text();
      var $lockstatus4 = $('#lock4').text();

      if($lockstatus1 === 'lock'){
        $('#colourValueHEX1').val(colour1);
        $('#colourValueHEX1').attr('value', colour1)
        $('#circle1').css({'background-color': colour1});
      }
       if($lockstatus2 === 'lock'){
        $('#colourValueHEX2').val(colour2);
        $('#colourValueHEX2').attr('value', colour2)
        $('#circle2').css({'background-color': colour2});
      }

      if($lockstatus3 === 'lock'){
        $('#colourValueHEX3').val(colour3);
        $('#colourValueHEX3').attr('value', colour3)
        $('#circle3').css({'background-color': colour3});
      }

      if($lockstatus4 === 'lock'){
        $('#colourValueHEX4').val(colour4);
        $('#colourValueHEX4').attr('value', colour4)
        $('#circle4').css({'background-color': colour4});
      }

      //TONE
      getTones();

    });

  //DYNAMICALLY CHANGE COLOUR OF HEX
  $(".colourValueHEX").on("change paste keyup", function() {
     var $lockstatus = $(this).closest('.line').find('.lock').text();
     var $circle = $(this).closest('.line').find('.circle');
     var $input = document.getElementById("colourValueHEX1");
     if($lockstatus === 'lock'){
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
      var samuel = "The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother's keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee."
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
