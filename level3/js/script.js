$(document).ready(function () {

    if (localStorage.getItem("token")) {
        getFacebookInfo(localStorage.getItem("token"));
    }

    $("#submitToken").click(function () {
        var token = $('#token').val();
        if (token != '') {
            localStorage.setItem("token", token);
        }
        if (localStorage.getItem("token")) {
            getFacebookInfo(localStorage.getItem("token"));
        }
        getFacebookInfo(token);
    });

    function getFacebookInfo(accessToken) {
        {
            $.ajax("https://graph.facebook.com/me?fields=id,name,birthday,education,email,gender,hometown,relationship_status,location,posts{full_picture,link,message,created_time},picture&access_token=" + accessToken,
                {

                    success: function (response) {
                        console.log(response);
                        setProfilePage(response);
                        setFeedPage(response);
                    },
                    error: function (request, errorType, errorMessage) {
                        console.log(request);
                        console.log(errorType);
                        alert(request.responseJSON.error.message);
                    },
                });
        }
    }

    function setProfilePage(response) {

        $("#myName").text(response.name);
        $("#myBirthday").text(response.birthday);
        $("#myEmail").text(response.email);
        $("#myHometown").text(response.hometown.name);
        $("#status").text(response.relationship_status);
        $("#location").text(response.location.name);
        var study = '';
        for (var index in response.education) {
            study += '<p> Studied at ' + response.education[index]['school'].name + '</p>';
        }
        $('.profile-page  .card-block .user-study').html(study);
        var imgPath = '';
        imgPath = response.picture.data.url;
        console.log(imgPath);
        $('.profile-pic').attr("src", imgPath);
    }

    function setFeedPage(response) {
        var name = response.name;
        var post = '';
        for (var i = 0; i < 10; i++) {
            post = '<div class="card">' +
                '<div class="card-block">' +
                '<p id="name">' + name + '</p>';
            // '<a href="'+response.posts.data[i].link+'" class="card-link"><img src="'+response.posts.data[i].full_picture+'"></a>';               
            if (response.posts.data[i].full_picture != undefined) {
                post += '<a href="' + response.posts.data[i].link + '" class="card-link"><img src="' + response.posts.data[i].full_picture + '"></a>';
            }
            if (response.posts.data[i].message != undefined) {
                post += '<div class="card-text">' + response.posts.data[i].message + '</div>';
            }
            post += '</div></div>';
            $(".feed-page").append(post);
        }

    }
});