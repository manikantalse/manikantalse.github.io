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

    /**
     * To fetch user information and previous posts of user
     * @param {string} token 
     */
    function getFacebookInfo(token) {
        {
            $.ajax("https://graph.facebook.com/me?fields=id,name,birthday,education,email,gender,hometown,relationship_status,location,posts{full_picture,link,message,created_time},picture&access_token=" + token,
                {
                    success: function (response) {
                        console.log(response);
                        setProfilePage(response);
                        setFeedPage(response);
                    },
                    error: function (request, errorType, errorMessage) {
                        console.log(request);
                        console.log(errorType);
                        console.log(request.responseJSON.error.message);
                    },
                });
        }
    }

    /**
     * To set user information in profile page
     * @param {object} response 
     */
    function setProfilePage(response) {

        $("#myName").text(response.name);
        $("#myBirthday").text(response.birthday);
        $("#myEmail").text(response.email);
        $("#myHometown").text(response.hometown.name);
        $("#status").text(response.relationship_status);
        $("#location").text(response.location.name);
        var study = '';
        // setting educational details
        for (var index in response.education) {
            study += '<p> Studied at ' + response.education[index]['school'].name + '</p>';
        }
        $('.profile-page  .card-block .user-study').html(study);
        var imgPath = '';
        imgPath = response.picture.data.url;
        $('.profile-pic').attr("src", imgPath);
    }

    /**
     * To set user posts in feed page
     * @param {object} response 
     */
    function setFeedPage(response) {
        var name = response.name;
        var post = '';
        // fetching recent 10 posts
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