// api url

// http://api.giphy.com/v1/gifs/search?q=cars&api_key=YOUR_API_KEY

// api key

// IEqCNFDHg7soBBmM5ue5Jn43eTe8vuNo

// url+api

// http://api.giphy.com/v1/gifs/search?q=cars&api_key=IEqCNFDHg7soBBmM5ue5Jn43eTe8vuNo


// to add limited number of gits use &limit= and number of gifs we want 

//http://api.giphy.com/v1/gifs/search?q=classic+cars&api_key=IEqCNFDHg7soBBmM5ue5Jn43eTe8vuNo&limit=4


var cars = ["classic cars", "modern cars", "old school cars", "electric cars"];

function renderButtons() {

    // Deleting the movie buttons prior to adding new movie buttons
    // (this is necessary otherwise we will have repeat buttons)
    $("#cars-view").empty();

    // Looping through the array of movies
    for (var i = 0; i < cars.length; i++) {

      // Then dynamicaly generating buttons for each movie in the array.
      // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
      var a = $("<button>");
      // Adding a class
      a.addClass("cars");
      // Adding a data-attribute with a value of the movie at index i
      a.attr("data-name", cars[i]);
      // Providing the button's text with a value of the movie at index i
      a.text(cars[i]);
      // Adding the button to the HTML
      $("#cars-view").append(a);
    }



    $(".cars").on("click", function () {

        // var cars = $(this).attr("data-cars");
    
        // Constructing a queryURL using the animal name
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
          cars + "&api_key=IEqCNFDHg7soBBmM5ue5Jn43eTe8vuNo&limit=2";
    
        // Performing an AJAX request with the queryURL
        $.ajax({
          url: queryURL,
          method: "GET"
        })
          // After data comes back from the request
          .then(function(response) {
            console.log(queryURL);
    
            console.log(response);
            // storing the data from the AJAX request in the results variable
            var results = response.data; 
        
        
        
            for (var i = 0; i < results.length; i++) {
    
                // Creating and storing a div tag
                // var carsDiv = $("<div>");
    
                // Creating a paragraph tag with the result item's rating
                var p = $("<p>").text("Rating: " + results[i].rating);
    
                // Creating and storing an image tag
                var carsImage = $("<img>");
                // Setting the src attribute of the image to a property pulled off the result item
                carsImage.attr("src", results[i].images.fixed_height.url);
    
                // Appending the paragraph and image tag to the animalDiv
                 a.append(p);
                a.append(carsImage);
    
                // Prependng the animalDiv to the HTML page in the "#gifs-appear-here" div
                $("#gifs-appear-here").prepend(a);
              }
        
        
        
        
        
        })
    
    
    
    
    
          
      })









    
  }

   // This function handles events where one button is clicked
   $("#carAdd").on("click", function(event) {
    // event.preventDefault() prevents the form from trying to submit itself.
    // We're using a form so that the user can hit enter instead of clicking the button if they want
    event.preventDefault();

    // This line will grab the text from the input box
    var car = $("#carSearch").val().trim();
    // The movie from the textbox is then added to our array
    cars.push(car);

    // calling renderButtons which handles the processing of our movie array
    renderButtons();

    
  });


  renderButtons();
