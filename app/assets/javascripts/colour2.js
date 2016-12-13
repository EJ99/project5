function getRandomColour() {
    var letters = '0123456789ABCDEF';
    var colour = '#';
    for (var i = 0; i < 6; i++ ) {
        colour += letters[Math.floor(Math.random() * 16)];
    }
    return colour;
}

$(document).ready(function() {

  $(".getColour").on('click', function(event) {
    console.log('hello')
    event.preventDefault();
    var colour = getRandomColour();
    var $colourInput = $(event.target).closest('.line').find('.colourValueHEX');
    var $circle = $(event.target).closest('.line').find('.circle');
    $colourInput.val(colour);
    $circle.css({'background-color': colour});
  });

  //DYNAMICALLY CHANGE COLOUR OF HEX
  $(".colourValueHEX").on("change paste keyup", function() {
     var $circle = $(this).closest('.line').find('.circle');
     console.log($circle);
     $circle.css({'background-color': $(this).val()});
  });


  //DYNAMICALLY CHANGE TEXT
  $(".title").on("change paste keyup", function() {
    console.log(this);
    $('.header').text($(this).val());
  });

  $(".description").on("change paste keyup", function() {
    console.log(this);
    $('.paragraph').text($(this).val());
  });

  //   $('#myselect1').change(function(){
  //     if($(this).val() == 'volvo'){ // or this.value == 'volvo'
  //     $('#myselectVolvo option:lt(2)').remove();
  //   }
  // });

  $('#font1').change(function(){
      var selected = $('#font1 :selected').text();
      $('.header').css({'font-family': selected });
  });

  $('#font2').change(function(){
      var selected = $('#font1 :selected').text();
      console.log(selected)
      $('.paragraph').css({'font-family': selected });
  });



});
