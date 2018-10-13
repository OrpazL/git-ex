'use strict';

// CRUDL - Create, Read, Update, Delete, List
const PAGE_SIZE = 3;
const KEY_BOOKS = 'booksList';
var gBooks;
var gCurrPageNo = 0;
var gPrevPageNo = gCurrPageNo;

function createBooks() {
    gBooks = [
        createBook('And Then You Loved Me', 3.49),
        createBook('Cut and Run', 5.99),
        createBook('Daughters of the Lake', 4.99),
        createBook('The Wonky Donkey', 6.17),
        createBook('Two Kinds of Truth', 0),
        createBook('What Have You Done', 4.99)
    ];
    saveToStorage(KEY_BOOKS, gBooks);
}

function createBook(title, price) {
    return {
        id: makeId(),
        title: title,
        price: price,
        rate: { rate: 0, ratesCount: 0 },
        desc: ''
    };
}

function getBooksForPage() {
    var fromBookIdx = gCurrPageNo * PAGE_SIZE;
    if (gCurrPageNo === gPrevPageNo) {
        return gBooks.slice(0, PAGE_SIZE);
    }
    // if (gCurrPageNo >= gPrevPageNo) {
    // if (fromBookIdx > gBooks.length)
    // return gBooks.slice(gBooks.length - PAGE_SIZE - 1, gBooks.length - 1);
    var books = gBooks.slice(fromBookIdx, fromBookIdx + PAGE_SIZE);
    if (books.length > 0) return books;
    else {
        gCurrPageNo = gPrevPageNo;
        return;
    }
    // } else {
    //     if (fromBookIdx <= gBooks.length) return gBooks.slice(0, PAGE_SIZE);
    //     return gBooks.slice(fromBookIdx - PAGE_SIZE, fromBookIdx);
    // }
}

function getBooks() {
    return gBooks;
}

function getBookById(bookId) {
    return gBooks.find(function(book) {
        return book.id === bookId;
    });
}

function deleteBook(bookId) {
    var bookIdx = gBooks.findIndex(function(book) {
        return book.id === bookId;
    });
    gBooks.splice(bookIdx, 1);
    saveToStorage(KEY_BOOKS, gBooks);
}

function addBook(book) {
    gBooks.push(book);
    saveToStorage(KEY_BOOKS, gBooks);
}

function updateBook(bookId, newPrice) {
    var bookIdx = gBooks.findIndex(function(book) {
        return book.id === bookId;
    });
    gBooks[bookIdx].price = newPrice;
    saveToStorage(KEY_BOOKS, gBooks);
}

function deleteBook(bookId) {
    var bookIdx = gBooks.findIndex(function(book) {
        return book.id === bookId;
    });
    gBooks.splice(bookIdx, 1);
    saveToStorage(KEY_BOOKS, gBooks);
}

function goNextPage() {
    gPrevPageNo = gCurrPageNo;
    gCurrPageNo++;
}

function goPrevPage() {
    gPrevPageNo = gCurrPageNo;
    gCurrPageNo--;
}

function checkForBooks() {
    if (Array.isArray(getFromStorage('booksList')))
        gBooks = getFromStorage('booksList');
    else {
        createBooks();
        saveToStorage('booksList', gBooks);
    }
}

function updateBookRating(bookId, rate) {
    var book = getBookById(bookId);
    book.rate.rate += rate;
    book.rate.ratesCount++;
    var rateAvg = book.rate.rate / book.rate.ratesCount;
    $('#total-book-rate').html(`Rate: ${rateAvg}`);
    saveToStorage(KEY_BOOKS, gBooks);
    console.log(book.rate);
}

function setPageToView(pageNo) {
    gPrevPageNo = pageNo;
    gCurrPageNo = pageNo - 1;
}

function sortUsersBy(sortby) {
    var books = books ? books : gBooks;
    books.sort(function(a, b) {
        return a[sortby] > b[sortby] ? 1 : b[sortby] > a[sortby] ? -1 : 0;
    });
    // if (sortby === 'title') books.reverse();
    renderBooksTable();
    // viewUsersBy(undefined, books);
}
