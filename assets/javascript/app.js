// api url

// http://api.giphy.com/v1/gifs/search?q=cars&api_key=YOUR_API_KEY

// api key

// IEqCNFDHg7soBBmM5ue5Jn43eTe8vuNo

// url+api

// http://api.giphy.com/v1/gifs/search?q=cars&api_key=IEqCNFDHg7soBBmM5ue5Jn43eTe8vuNo


// to add limited number of gits use &limit= and number of gifs we want 

//http://api.giphy.com/v1/gifs/search?q=cars&api_key=IEqCNFDHg7soBBmM5ue5Jn43eTe8vuNo&limit=4

var cars = ["Toyota", "Honda", "Dodge", "Audi"];


function renderButtons() {


    $("#cars-view").empty();

    for (var i = 0; i < cars.length; i++) {

        var a = $("<button>");
        a.addClass("cars");
        a.attr("data-name", cars[i]);
        a.text(cars[i]);
        $("#cars-view").append(a);
    }


    $(".cars").on("click", function () {
        event.preventDefault();

        renderButtons()

        $("#gifs-appear-here").empty();

        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
            cars + "&api_key=IEqCNFDHg7soBBmM5ue5Jn43eTe8vuNo&limit=4";

        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (response) {
            
                var results = response.data;

                a.attr("data-name", cars[i]);


                for (var i = 0; i < results.length; i++) {


                    var p = $("<p>").text("Rating: " + results[i].rating);

                    var carsImage = $("<img>");
                    carsImage.attr("src", results[i].images.fixed_height.url);

                    a.append(p);
                    a.append(carsImage);

                    $("#gifs-appear-here").prepend(a);
                }





            })


     


    })




$(".cars").hover(function () {
    $(this).stop().fadeTo(500, .5);
}, function() {
    $(this).stop().fadeTo(500, 1); 

    }
)





}

$("#carAdd").on("click", function (event) {

    event.preventDefault();

    var car = $("#carSearch").val().trim();
    cars.push(car);

    renderButtons();

    var state = $(this).attr("data-state");

    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }



});


renderButtons();


