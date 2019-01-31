

    var cars = ["Toyota", "Honda", "Dodge", "Audi"];

    function displayCarInfo() {

        var car = $(this).attr("data-name"); 
        var queryURL =  "https://api.giphy.com/v1/gifs/search?q=" +
        car + "&api_key=IEqCNFDHg7soBBmM5ue5Jn43eTe8vuNo&limit=2";

        $.ajax({
            url: queryURL,
            method: "GET"
          }).then(function(response){

            var results = response.data

            for (var j = 0; j < results.length; j++) {
                var gifDiv = $("<div>");
    
    
                var p = $("<p>").text("Rating: " + results[j].rating);
    
                var carsImage = $("<img>");
                carsImage.attr("src", results[j].images.fixed_height.url);
    
                gifDiv.append(p);
                gifDiv.append(carsImage);
    
                $("#gifs-appear-here").prepend(gifDiv);
            }
        })



    }

    function renderButtons () {

        $("#cars-view").empty();

        for (var i = 0; i < cars.length; i++){

            var a = $("<button>"); 
            a.addClass("car"); 
            a.attr("data-name", cars[i]); 
            a.text(cars[i]); 

            $("#cars-view").prepend(a); 
        }
    }

    $("#carAdd").on("click", function(event){

        event.preventDefault(); 

        var car = $("#carSearch").val().trim(); 

       cars.push(car); 

       renderButtons(); 
    })

    $(document).on("click", ".car", displayCarInfo); 
    renderButtons();
