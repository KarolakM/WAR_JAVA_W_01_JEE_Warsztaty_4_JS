$(function () {
    $.ajax({
        url: "http://date.jsontest.com/",
        type: "GET",
        dataType: "json"
    })
        .always(function () {
            console.log("Wysłałem zapytanie")
        })
        .done(function (res) {
            var responseObj = res;
            renderSpan(responseObj);
        })
        .fail(function () { });


    $.ajax({
        url: "https://swapi.co/api/people/4/",
        type: "GET",
        dataType: "json"
    })
        .always(function () {
            console.log("Wysłałem zapytanie")
        })
        .done(function (res) {
            var vaderObj = res;
            renderVader(vaderObj);
        })
        .fail(function () { });

    function renderSpan(obj) {
        var dateElement = $("<span>");
        dateElement.text(obj.date);
        dateElement.appendTo("body");
    }

    function renderVader(obj) {
        var vaderList = $("<ul>");
        var nameListItem = $("<li>")
        nameListItem.text("Imie: "+ obj.name).appendTo(vaderList);
        vaderList.appendTo("body");
    }

});