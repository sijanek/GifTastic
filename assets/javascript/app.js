
$(function () {
  displayButtons(topics, "searchButton", "#button-container")
  
})
var topics = ["Wink", "Shrug", "Eyeroll", "Thumbsup", "Sleepy", "Goodmorning", "Laugh", "Okay", "Genius", "Surprise"];
// //Function to display the array of buttons
function displayButtons(topics, classToAdd, topicsToAdd) {
  $(topicsToAdd).empty();
  for (var i = 0; i < topics.length; i++) {
    var newButton = $("<button>");
    newButton.addClass(classToAdd);
    newButton.attr("data-type", topics[i]);
    newButton.text(topics[i]);
    $(topicsToAdd).append(newButton);
  }
}

$(document).on("click", ".searchButton", function () {
  var type = $(this).data("type");
  var APIKey = "P90HTgwnB9CzLBHH3dNa5ZzPqHlPUVSI";
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + type + "&api_key=" + APIKey + "&limit=10";
  $.ajax({
    url: queryURL,
    method: "GET"
  })
    .then(function (response) {
      for (var i = 0; i < response.data.length; i++) {
        var newDiv = $("<div class ='gifDiv' >");
        var rating = response.data[i].rating;
        var p = $("<p>").text("Rating:" + rating);
        var animate = response.data[i].images.fixed_height.url;
        var still = response.data[i].images.fixed_height_still.url;
        var image = $("<img>");
        image.attr("src", still);
        image.attr("data-still", still);
        image.attr("data-animate", animate);
        image.attr("data-state", "still");
        image.addClass("gifImage");
        newDiv.append(p);
        newDiv.append(image);
        $("#gif-container").append(newDiv); 
      }
    })
  })
  $(document).on("click", ".gifImage", function (){
    var state = $(this).attr("data-state");
    if(state == "still"){
      $(this).attr("src",$(this).data("animate"));
      $(this).attr("data-state","animate");
    }
    else{
      $(this).attr("src",$(this).data("still"));
      $(this).attr("data-state","still");
    }

  })

  $("#addTopic").on("click", function(){
      var newTopic = $("input").eq(0).val();
      topics.push(newTopic); 
      displayButtons(topics, "searchButton", "#button-container");
      return false;
  })

