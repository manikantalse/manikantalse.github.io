let title;
let year;
let imdbId;
let apiKey;
let url;
let urlParams = {};

$(document).ready(() => {

    apiKey = 'ec37633';

    $("#search").click(function(){
        event.preventDefault();
        title = $("#title").val();
        year = $("#year").val();
        imdbId = $("#imdbId").val();

        url = 'http://www.omdbapi.com/?apikey='+ apiKey + '&plot=full';

        if(title != ''){
            urlParams['s'] = title;
        }
        if(year != ''){
            urlParams['y'] = year;
        }
        if(imdbId != ''){
            urlParams['i'] = imdbId;
        }

        url = url + '&' + $.param(urlParams)
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

            console.log(response);

            if(response.Error) {
                $(".card-body").text('');
                $(".card-text").text(response.Error).addClass('error');
                $(".card-img-top").attr("src", 'omdb.png');               
            } else {
                if(response.Search[0].Poster != 'N/A'){
                    $(".card-img-top").attr("src", response.Search[0].Poster)
                } else{
                    $(".card-img-top").attr("src", 'noposter.png');
                }
    
                $(".card-text").text('').removeClass('error');
                $(".card-title").text('').append(response.Search[0].Title);
                $(".imdb-id").text('\nIMDB id: ' + response.Search[0].imdbID);
                $(".year").text('\nYear: ' + response.Search[0].Year)
                $(".type").text('\nType: ' + response.Search[0].Type);
                
            }

        }, error: (err) => {
            console.log(err.responseJSON.error.message);

        }

    });

}