$(function () {
    $.ajax({
        url: "http://localhost:8282/books",
        type: "GET",
        dataType: "json"
    }).done(function (res) {
        console.log(res)
    });


});