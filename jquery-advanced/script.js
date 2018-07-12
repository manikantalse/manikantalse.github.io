let title;
let year;
let imdbId;
let apiKey;
let url;

$(document).ready(() => {

    apiKey = 'ec37633';

    // $("#title").change(function(){
    //     title = $("#title").val();
    // });
    // $("#year").change(function(){
    //     year = $("#year").val();
    // });
    // $("#imdbId").change(function(){
    //     imdbId = $("#imdbId").val();
    // });

    $("#search").click(function(){
        event.preventDefault();
        title = $("#title").val();
        year = $("#year").val();
        imdbId = $("#imdbId").val();

        url = 'http://www.omdbapi.com/?apikey='+ apiKey;

        if(title != ''){
            url = url + '&s=' + title;
        }
        if(year != ''){
            url = url + '&y=' + year;
        }
        if(imdbId != ''){
            url = url+ '&i=' + imdbId;
        }

        console.log(url);

        getAllDetails(url);
    });
    



    





}); 

let getAllDetails = (url) => {



    $.ajax({
        type: 'GET',
        dataType: 'json',
        async: true,
        url: url,

        success: (response) => {

            // $('#dataSection').css('display', 'block');

            console.log(response);
            alert(response.Search[0].Poster);
            if(response.Search[0].Poster != null || response.Search[0].Poster != undefined){
                $(".card-img-top").attr("src", response.Search[0].Poster)
            } else{
                $(".card-img-top").attr("src", 'omdb.png')
            }
            

            // $('#userName').append(response.name);

            // $('#favouritrQuote').append(response.quotes);

            // $('#profilePhoto').html('<img src="' + response.picture.data.url + '" class="img-fluid profileHeight"/>');

            // $('#cover').css('background-image', 'url(' + response.cover.source + ')');



        }, error: (err) => {

            console.log(err.responseJSON.error.message);

        }

    });// end ajax call 

}