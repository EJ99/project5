//AJAX CALL PIXABAY
//CAROSEL LOAD

console.log('pisssx_test');


var searchRequest;
var endPointUrl = "https://pixabay.com/api/?key=3809048-f32307ec837cd018b53643347&min_height=900&min_width=600&image_type=photo&orientation=horizontal&q=";
var cardImage;

$(document).ready(function() {

  $('.search_btn').click(function(e) {
    // prevent form sending form
    e.preventDefault()
    // create url to be sent to omdbapi
    searchRequest = $('#search_input').val();
    imageRequest = endPointUrl + searchRequest;
    // empty results div for new search
    $('.image-results').empty();
    // empty search field to prevent multiple request
    $('#search_input').val('');
    // get_movies(movie_requested);
    $.ajax({
      url: imageRequest,
      method:'get', //default method
      success: function(data) {
        unsl();
        displayImages(data);
      }
    })
  });

  $('#search_input').keypress(function(e){
          if(e.which == 13){//Enter key pressed
              $('.search_btn').click();//Trigger search button click event
          }
      });
});




//reintialize slick
function unsl(){
   $('.your-class').empty();
}


function displayImages(pixabayResults){
  console.log(pixabayResults);
  for (var i = 0; i < pixabayResults.hits.length; i++) {
    result = pixabayResults.hits[i].webformatURL
    imageId = "image-option-" + i;
    var img = $("<img>").attr('id', imageId).attr('src', result)
    img.appendTo('.carousel');
    var $prev1 =   $('.preview_img');
    var $prev2 =   $('.preview_img2');
    var $prev3 =   $('.preview_img3');
    // on click store image url.
    // Change bground of selected-img div

      $(img).on('click', function(event) {
        if($prev1.hasClass("selected")){
          console.log($(this).attr('src'));
          cardImage = $(this).attr('src')

          // changes image of preview image and adds it to the hidden input field
          $('.preview_img').attr("src",($(this).attr("src")));
          $('.preview_img_name').val($(this).attr("src"));

          // $('.chosen-image img').attr('src', cardImage)
        }
      });



    $(img).on('click', function(event) {
      if($prev2.hasClass("selected")){
        console.log($(this).attr('src'));
        cardImage = $(this).attr('src')

        // changes image of preview image and adds it to the hidden input field
        $('.preview_img2').attr("src",($(this).attr("src")));
        $('.preview_img_name2').val($(this).attr("src"));
      // $('.chosen-image img').attr('src', cardImage)
      }
    });

    $(img).on('click', function(event) {
      if($prev3.hasClass("selected")){
        console.log($(this).attr('src'));
        cardImage = $(this).attr('src')

        // changes image of preview image and adds it to the hidden input field
        $('.preview_img3').attr("src",($(this).attr("src")));
        $('.preview_img_name3').val($(this).attr("src"));
      // $('.chosen-image img').attr('src', cardImage)
      }
    });


  }

};


$(document).ready(function() {

  $('.next').click(function(){
    console.log('poo');
  });

  $('.preview_img').on('click', function() {
      $('.preview_img').addClass("selected");
      $('.preview_img2').removeClass("selected");
      $('.preview_img3').removeClass("selected");
  });

  $('.preview_img2').on('click', function() {
      $('.preview_img2').addClass("selected");
      $('.preview_img').removeClass("selected");
      $('.preview_img3').removeClass("selected");
  });

  $('.preview_img3').on('click', function() {
      $('.preview_img3').addClass("selected");
      $('.preview_img').removeClass("selected");
      $('.preview_img2').removeClass("selected");
  });




});






function callFail() {
  message = "Ooops... something went wrong. Try again later."
  $(".results").append(message);
};
