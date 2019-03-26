var APIKey = "P90HTgwnB9CzLBHH3dNa5ZzPqHlPUVSI";
//array of topics
var topics = ["Wink", "Shrug", "Eyeroll", "Thumbsup", "Sleepy", "Goodmorning", "Laugh", "Okay", "Genius", "Surprise"];

function searchGiphy(searchTerm) {
  //var APIKey = "P90HTgwnB9CzLBHH3dNa5ZzPqHlPUVSI";
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&limit=10&api_key=" + APIKey;


  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    //build the gifs so we can display them
    console.log(response);

    $("#topics").empty();
    for (var i = 0; i < response.data.length; i++) {
      var newDiv = $("<div class ='gifDiv' >");
      var rating = $("<p class = gifRating>");
      rating.text(response.data[i].rating);

      //create image tag and save it to a variable
      var image = $("<img class = gifImage>");
      //add all the different attribute, use .attr method to set the src
      image.attr("src", response.data[i].images.fixed_height.url);

      console.log(response.data[i].images.fixed_height.url);


      //use.attr to set the data-still attribute
      image.attr("data-still", response.data[i].images.fixed_height_still.url);
      //use.attr to set data-animate attribute
      image.attr("data-animate", response.data[i].images.fixed_height.url);
      //use the.attr method to set the data-state, set that to a string of "still"
      image.attr("data-state", "still");

      //create the image class=:gifImage"
      image.attr("class", "gifImage");
      newDiv.append(rating);
      newDiv.append(image);
      //$("#topics").append(newDiv);
    }
    // $(".gifImage").on("click", function () {
    //   //console.log("click worked!");
    // });
    //Function to display the array of buttons
    function displayButtons() {
      $("#button-container").empty();

      for (var i = 0; i < topics.length; i++) {
        var topic = topics[i];
        var newButton = $("<button class='button'>");
        newButton.attr("data-topic", topics[i]);
        newButton.text(topic);
        $("#button-container").append("<button class='button' data-topic'" + topics[i] + "'>" + topics[i] + "</button>");
        displayButtons();

      }
    }

    //function changes state

    $(document).on("click", ".gifImage", function () {
      var state = $(this).attr("data-state");
      var animateImage = $(this).attr("data-animate");
      var stillImage = $(this).attr("data-still");

      if (state == "still") {
        $(this).attr("src", animateImage);
        $(this).attr("data-state", "animate");

      } else if (state == "animate") {
        $(this).attr("src", stillImage);
        $(this).attr("data-state", "still");
      }
    });
    //build the buttons with classes so we can have the click event
    $(document).on("click", ".button", function () {
      var buttonTopic = $(this).text();
      searchGiphy(buttonTopic);
    });


    //build the input field in html so we can add new topic to the array of topics. Then call the function to response to display our buttons
    //create a click event
    $("#addTopic").on("click", ".gifImage", function () {
      event.preventDefault();
      var newTopic = $("#topic-input").val();
      console.log(newTopic);
      topics.push(newTopic);
      displayButtons();
    });



    displayImage();
    $(document).on("click", "#topic-input", displayImage);
    $(document).on("click", ".gifImage", changeState);







