// create a object called book with: title genre author read (true or false), startDate (Date() obj) endDate

var Book = function(attributes) {
	this.title= attributes.title,
	this.genre= attributes.genre,
	this.author= attributes.author,
	this.read= false,
	this.startDate= "",
	this.endDate= ""
}

var BookList = function(){
	this.numberRead = 0,
	this.booksUnread = 4,
	this.nextBook= "",
	this.currentBook= "",
	this.lastBook= "",
	this.bookArr = []
}

/* methods */

BookList.prototype.addBook = function(book){
	// 'this' refers to BookList
	this.bookArr.push(book);
	this.booksUnread += 1;
	// pushes to the array, and also alters current and next books
	if ( this.currentBook === "" ){
		this.currentBook = book;
	} else if ( this.nextBook === "") {
		this.nextBook = book;
	}
};

BookList.prototype.finishCurrentBook = function(book){
	if (this.currentBook.startDate === "") {
		return false;
	} else {
	// marks currentBook as read
	this.numberRead +=1;
	this.booksUnread -= 1;
	this.currentBook.read = true;
	this.currentBook.endDate = new Date(Date.now());
	this.lastBook = this.currentBook;
	this.currentBook = this.nextBook;
	var index = this.bookArr.indexOf(this.currentBook);
	this.nextBook = this.bookArr[index + 1] || "";
	}
};

BookList.prototype.startCurrentBook = function(){
	this.currentBook.startDate = new Date(Date.now());
};

BookList.prototype.renderToDom = function(){
	for (var i = 0; i < this.bookArr.length; i++) {

		$("#books").append("<li>" +
			this.bookArr[i].title +
			"&nbsp; &nbsp;"+
			this.bookArr[i].read +
			"</li>");
	}

	$("#books").append("<br><button id='read' class='btn btn-success' btn-xs'>Read Next Book</button>");
};




var myBooks = new BookList();

var book1 = new Book({
	title: "The Tao of Pooh",
	genre: "Philosophy",
	author: "Benjamin Hoff"
});

var book2 = new Book({
	title: "A History of God",
	genre: "Philosophy",
	author: "Karen Armstrong"
});

var book3 = new Book({
	title: "Untethered Soul",
	genre: "Metaphysical",
	author: "Michael Singer"
});

var book4 = new Book({
	title: "Wind-up Bird Chronicle",
	genre: "Fiction",
	author: "Huraki Murakami"
});


myBooks.addBook(book1);
myBooks.addBook(book2);
myBooks.addBook(book3);
myBooks.addBook(book4);
myBooks.finishCurrentBook();


// console.log(myBooks);



















