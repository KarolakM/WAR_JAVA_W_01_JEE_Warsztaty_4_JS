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
            titleElement.text(element.title);
            titleElement.append($("<dir class=\"book details\"></div>"));
            titleElement.appendTo(booksList);
        });
    }

    
});
