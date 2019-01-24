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
        a.addClass("carsz");
        a.attr("data-name", cars[i]);
        a.text(cars[i]);
        $("#cars-view").append(a);
    }







    $(".carsz").hover(function () {
        $(this).stop().fadeTo(500, .5);
    }, function () {
        $(this).stop().fadeTo(500, 1);

    }
    )






}

$(".cars").on("click", function () {
    // $("#gifs-appear-here").append(a);
    $("#gifs-appear-here").empty();


    var name = $(this).attr("data-id");

    renderButtons()


    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        cars + "&api_key=IEqCNFDHg7soBBmM5ue5Jn43eTe8vuNo&limit=2";

    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {

            var results = response.data;


            renderButtons()

            

            for (var j = 0; j < results.length; j++) {
                var gifDiv = $("<div>");


                var p = $("<p>").text("Rating: " + results[j].rating);

                var carsImage = $("<img>");
                carsImage.attr("src", results[j].images.fixed_height.url);

                gifDiv.append(p);
                gifDiv.append(carsImage);

                $("#gifs-appear-here").prepend(gifDiv);
            }


            var state = $(this).attr("data-state");

            if (state === "still") {
                $(this).attr("src", $(this).attr("data-animate"));
                $(this).attr("data-state", "animate");
            } else {
                $(this).attr("src", $(this).attr("data-still"));
                $(this).attr("data-state", "still");
            }


        })




})


$("#carAdd").on("click", function (event) {

    event.preventDefault();

    var car = $("#carSearch").val().trim();
    cars.push(car);

    renderButtons();
    $("#gifs-appear-here").empty();







});

renderButtons();


