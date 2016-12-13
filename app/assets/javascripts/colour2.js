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

});
