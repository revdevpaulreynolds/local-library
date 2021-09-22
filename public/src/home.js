let getTotalBooksCount = books => books.length

let getTotalAccountsCount = accounts => accounts.length

let getBooksBorrowedCount = books => {
  // set counter and iterate through books
  // look at first item in books.borrowed array and iterate counter if
  // book is checked out
  return books.reduce((acc, book) => {
    return !book.borrows[0].returned ? acc+1 : acc
    
  }, 0)
  
}


//for these 3, look at the IDs, they give access to all the data
function getMostCommonGenres(books) {}

function getMostPopularBooks(books) {}

function getMostPopularAuthors(books, authors) {}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
