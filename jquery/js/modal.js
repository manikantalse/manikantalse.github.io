$(document).ready(function(){
    $('.navbar-toggler').click(function(){
        $(".navbar-nav").toggleClass('nav-col');
    });
    $(".modal-btn").click(function(){
        //alert("hello");
        $("#overlay").show();
    });
    $(".close").click(function(){
        //alert("hello");
        $("#overlay").hide();
    });
    $(".modal-close").click(function(){
        //alert("hello");
        $("#overlay").hide();
    });
    $(".save-changes").click(function(){
        //alert("hello");
        $("#overlay").hide();
    });
    
});