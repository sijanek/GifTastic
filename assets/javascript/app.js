
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

//   $("#button-container").empty();
//   for (var i = 0; i < topics.length; i++) {
//     var newButton = $("<button>");
//     newButton.addClass(classToAdd);
//     newButton.attr("data-type",topic);
//     newButton.text(topic[i]);
//     $("#button-container").append(newButton);

    // var topic = topics[i];
    //      var newButton = $("<button class='button'>");
    //      newButton.attr("data-type", topics[i]);
    //      newButton.text(topic);
    // $("#button-container").append("<button class='button' data-topic'" + topics[i] + "'>" + topics[i] + "</button>");
    //$("#button-container").append(newButton)
  //}
//}

// $(document).on("click", ".button", function () {
//   $("#topics").empty();
//   var buttonTopic = $(this).data(buttonTopic);
//   var APIKey = "P90HTgwnB9CzLBHH3dNa5ZzPqHlPUVSI";
//   var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + buttonTopic + "&limit=10&api_key=" + APIKey;
//   $.ajax({
//     url: queryURL,
//     method: "GET"
//   })
//     .then(function (response) {
//       for (var i = 0; i < response.data.length; i++) {
//              var newDiv = $("<div class ='gifDiv' >");
//              var rating = response.data[i].rating;
//              var p = $("<p>").text("Rating:" +rating);
//              var animate = response.data[i].images.fixed_height.url;
//              var still = response.data[i].images.fixed_height_still.url;
//              var image = $("<img>");
//              image.attr("src",still);
//              image.attr("data-still",still);
//              image.attr("data-animate",animate);
//              image.attr("data-state","still");
//              image.addClass("gifImage");
//              newDiv.append(p);
//              newDiv.append(image);
//              $("#gif-container").append(newDiv);




//             //  var rating = $("<p class = gifRating>");
//             //  rating.text(response.data[i].rating);
//             //  var image = $("<img class = gifImage>");
//             //  image.attr("src", response.data[i].images.fixed_height.url);
//             //  image.attr("data-still", response.data[i].images.fixed_height_still.url);
//             //  image.attr("data-animate", response.data[i].images.fixed_height.url);
//             //  image.attr("data-state", "still");
//             //  image.attr("class", "gifImage");
//             //  newDiv.append(rating);
//             //  newDiv.append(image);
//             //  $("#gif-container").append(newDiv);
//             //  $(".gifImage").on("click", function () {}
//       //build the gifs so we can display them

//     }

// })

// })

// $("#addTopic").on("click", function(){
//   var newTopic = $("input").eq(0).val();
//   topics.push(newTopic); 
//   displayButtons(topics, "newButton", "#button-container");
//   return false;
// })
// //function searchGiphy(searchTerm) {
//   // //var APIKey = "P90HTgwnB9CzLBHH3dNa5ZzPqHlPUVSI";
//   // var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&limit=10&api_key=" + APIKey;


//   // $.ajax({
//   //   url: queryURL,
//   //   method: "GET"
//   // })
//   // .then(function (response) {
//   //   //build the gifs so we can display them
//   //   console.log(response);

//   //   $("#topics").empty();
//   //   for (var i = 0; i < response.data.length; i++) {
//   //     var newDiv = $("<div class ='gifDiv' >");
//   //     var rating = $("<p class = gifRating>");
//   //     rating.text(response.data[i].rating);

//   //     //create image tag and save it to a variable
//   //     var image = $("<img class = gifImage>");
//   //     //add all the different attribute, use .attr method to set the src
//   //     image.attr("src", response.data[i].images.fixed_height.url);

//   //     console.log(response.data[i].images.fixed_height.url);


//   //     //use.attr to set the data-still attribute
//   //     image.attr("data-still", response.data[i].images.fixed_height_still.url);
//   //     //use.attr to set data-animate attribute
//   //     image.attr("data-animate", response.data[i].images.fixed_height.url);
//   //     //use the.attr method to set the data-state, set that to a string of "still"
//   //     image.attr("data-state", "still");

//   //     //create the image class=:gifImage"
//   //     image.attr("class", "gifImage");
//   //     newDiv.append(rating);
//   //     newDiv.append(image);
//   //     $("#topics").append(newDiv);
//   //   }
//   //    //$(".gifImage").on("click", function () {}

//   //   });
//   // }
//   //   //Function to display the array of buttons
//   //   function displayButtons(newButton) {
//   //     $("#button-container").empty(newButton);


//   //     for (var i = 0; i < topics.length; i++) {
//   //       var topic = topics[i];
//   //       var newButton = $("<button class='button'>");
//   //       newButton.attr("data-topic", topics[i]);
//   //       newButton.text(topic);
//   //       $("#button-container").append("<button class='button' data-topic'" + topics[i] +"'>" + topics[i]  + "</button>");
//   //       //displayButtons();
//   //     }
//   //   }




//   //   //function changes state

//   //   $(document).on("click", ".gifImage", function () {
//   //     var state = $(this).attr("data-state");
//   //     var animateImage = $(this).attr("data-animate");
//   //     var stillImage = $(this).attr("data-still");

//   //     if (state == "still") {
//   //       $(this).attr("src", animateImage);
//   //       $(this).attr("data-state", "animate");
//   //     } else if (state == "animate") {
//   //       $(this).attr("src", stillImage);
//   //       $(this).attr("data-state", "still");
//   //     }
//   //   });
//   //   //build the buttons with classes so we can have the click event
//   //   $(document).on("click", ".button", function () {

//   //     var buttonTopic = $(this).text();
//   //     searchGiphy(buttonTopic);

//   //   //});


//   //   //build the input field in html so we can add new topic to the array of topics. Then call the function to response to display our buttons
//   //   //create a click event
//   //   $("#addTopic").on("click", ".gifImage", function (event) {
//   //     event.preventDefault();
//   //     var newTopic = $("#topic-input").eq(0).val();
//   //     //console.log(newTopic);
//   //     if(newTopic.length > 2) {
//   //       topics.push(newTopic);
//   //     }
//   //     //topics.push(newTopic);
//   //     displayButtons(topics, "topic-button");
//   //   });

//   //   // displayButtons();
//   //   // $(document).on("click", "#topic-input", searchGiphy);
//   // });



//   //   displayButtons();
//   //   $(document).on("click", "#topic-input", searchGiphy);








