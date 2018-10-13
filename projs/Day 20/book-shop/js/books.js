'use strict';

function init() {
    checkForBooks();
    renderBooksTable();
}

// Working with Books

function renderBooksTable() {
    var books = getBooks();
    books = getBooksForPage();
    console.log('Books', books);

    var strHtmls = books.map(function (book) {
        return `
            <tr>
                <th scope="row">${book.id}</th>
                <td>${book.title}</td>
                <td>${(book.price === 0)? 'Free' : '$'+book.price}</td>
                <td><button type="button" data-toggle="modal" data-target="#exampleModalCenter" class="btn btn-primary" onclick="onBookRead('${book.id}')">Read</button></td>
                <td><button class="btn btn-warning" onclick="onUpdateBook('${book.id}')">Update</button></td>
                <td><button class="btn btn-danger" onclick="onBookDelete('${book.id}')">Delete</button></td>
            </tr>
        `
    });
    $('.book-list-table tbody').html(strHtmls.join(''))

}


function renderBooks() {
    var books = getBooks();
    console.log('Books', books);

    var strHtmls = books.map(function (book) {
        return `
            <div class="card">
                <img class="card-img-top" src="img/${book.title.toLowerCase().split(' ').join('-')}.jpg" alt="Card image cap" height="300" width="300">
                <div class="card-body">
                    <h5 class="card-title">${book.title}</h5>
                    <p class="card-text">Price: ${(book.price === 0)? 'Free' : book.price}</p>
                    <a href="#" class="btn btn-primary" onclick="onBookDetails('${book.id}')">Details</a>
                    <a href="#" class="btn btn-small" onclick="onUpdateBook('${book.id}')">Update</a>
                </div>
            </div>
        `
    });
    $('.book-list').html(strHtmls.join(''))

}

function onUpdateBook(bookId) {
    console.log('CAR id', bookId);
    var newPrice = prompt('Price?');
    if (newPrice === null || newPrice.trim() === '') return;
    else newPrice = +newPrice;
    updateBook(bookId, newPrice);
    renderBooksTable();
}

function renderBookDetails(book) {
    var strHtml =  `
            <div class="card">
                <img class="card-img-top" src="img/${book.title.toLowerCase().split(' ').join('-')}.jpg" alt="Image Of The Book" height="300" width="300">
                <div class="card-body">
                    <h5 class="card-title">${book.title}</h5>
                    <p class="card-text">Price: ${(book.price === 0)? 'Free' : '$' + book.price}<a href="#" class="btn btn-small" onclick="onUpdateBook('${book.id}');$('#close-read-book-modal').click();">Update Price</a></p>
                    <p class="card-text">${book.desc}</p>

                </div>
            </div>
        `;
    $('#read-book-modal').html(strHtml);

    var strRatingHtml = `
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
            <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
            <h5 class="lead">Rate:</h5>
            <ul class="list-inline rating-list">
                <li><i class="fa fa-star yellow" onclick="updateBookRating('${book.id}', 5)"></i></li>
                <li><i class="fa fa-star yellow" onclick="updateBookRating('${book.id}', 4)"></i></li>
                <li><i class="fa fa-star yellow" onclick="updateBookRating('${book.id}', 3)"></i></li>
                <li><i class="fa fa-star yellow" onclick="updateBookRating('${book.id}', 2)"></i></li>
                <li><i class="fa fa-star gray" onclick="updateBookRating('${book.id}', 1)"></i></li>
            </ul>
            <span id="total-book-rate">${(book.rate.ratesCount > 0)? 'Rate: ' + (book.rate.rate / book.rate.ratesCount) : ''}</span>
    `;
    $('#rating-stars').html(strRatingHtml);
}

function onBookRead(bookId) {
    var book = getBookById(bookId);
    console.log('Book', book);

    renderBookDetails(book);

    // var $bookDetails = $('.book-details');

    // // $('.book-details h2').text(book.title)
    // $bookDetails.find('h2').text(book.title)
    // $bookDetails.find('h4').text(book.price)
    // $bookDetails.show();
}

function onBookDelete(bookId) {
    if (confirm('Are U Sure?')) {
        deleteBook(bookId);
        renderBooksTable();
    }
}

function onNextPage() {
    goNextPage();
    renderBooksTable();
}

function onPrevPage() {
    goPrevPage();
    renderBooksTable();
}

function onAddBook() {
    var $newBookTitle = $('#new-book-title').val();
    var $newBookPrice = $('#new-book-price').val();
    var $newBookDesc = $('#new-book-desc').val();
    if ($newBookTitle.trim() === '') {
        console.log('Empty book title');
    } 
    var newBook = createBook($newBookTitle , $newBookPrice);
    newBook.desc = $newBookDesc;
    addBook(newBook);
    $('#close-book-creation').click();
    $('#new-book-title').val('');
    $('#new-book-price').val('');
    renderBooksTable();
}

function onSortBy(val) {
    sortUsersBy(val);
    console.log(val)
}

function goToPage(pageNo) {
    setPageToView(pageNo);
    console.log(pageNo)
    renderBooksTable();
}