$(document).ready(function(){
	myBooks.renderToDom();
});

$("form").on("submit", function(event){
	event.preventDefault();
	var newBook = new Book({
		title: $("#book-title").val(),
		genre: $("#book-genre").val(),
		author: $("#book-author").val()
	});

	myBooks.addBook(newBook);
	$("#books").empty();
	myBooks.renderToDom();
	$("#book-title").val("");
	$("#book-genre").val("");
	$("#book-author").val("");
});

$(document).on("click", "#read", function(){
	myBooks.startCurrentBook();
	$("#current").text(myBooks.currentBook.title);
	$(this).hide();
	$("#current").append("<br><button id='finish' class='btn btn-danger' btn-xs'>Finished</button>");
});

// finishCurrentBook - show Read Me button, hide finished  button - add "nothing"
$(document).on("click", "#finish", function(){
	myBooks.finishCurrentBook();
	$("#current").text(myBooks.currentBook.title);
	$(this).hide();
	$("#read").show();
	$("#current").append("None");
});