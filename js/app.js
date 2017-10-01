$(function () {
    var booksList = $("#books-list")

    function loadAllBooks() {
        $.ajax({
            url: "http://localhost:8282/books",
            type: "GET",
            dataType: "json"
        }).done(function (res) {
            renderTitle(res)
        });
    }

    loadAllBooks();

    function renderTitle(arr) {

        arr.forEach(function (element, index, array) {
            var titleElement = $("<li>");
            titleElement.text(element.title)
                .data("id", element.id)
                .attr("data-id", element.id)
                .append($("<dir class=\"book-details\"></div>"))
                .appendTo(booksList);
        });

        var bookTitle = booksList.find("li");

        for (var i = 0; i < bookTitle.length; i++) {
            $(bookTitle[i]).on("click", function (e) {
                var target = $(e.target);
                var id = target.data("id");

                $.ajax({
                    url: "http://localhost:8282/books/" + id,
                    type: "GET",
                    dataType: "json",
                }).done(function (res) {
                    populateDetailsDiv(res, target)
                }).always(function () {
                    console.log("wyslao zapytanie o pojedyncza ksiazke")
                }).fail(function (err) {
                    console.log(err)
                });
            });
        }
    }

    function populateDetailsDiv(obj, elem) {
        var isbn = obj.isbn;
        var publisher = obj.publisher;
        var type = obj.type;
        var author = obj.author;
        var bookDetailsElem = $(elem).find(".book-details");

        bookDetailsElem
            .append($("<p>ISBN: " + isbn + "</p>"))
            .append($("<p>Publisher: " + publisher + "</p>"))
            .append($("<p>Type: " + type + "</p>"))
            .append($("<p>Author: " + author + "</p>"));

        bookDetailsElem.slideToggle();

    }

});
