let findAccountById = (accounts, id) => {
  return accounts.find((account) => account.id == id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((accA, accB) => accA.name.last.toLowerCase() < accB.name.last.toLowerCase() ? -1 : 1);
}

const getTotalNumberOfBorrows = (account, books) => {
  return books.reduce((acc, book) => {
    const count = book.borrows.reduce((borrowAcc, borrow) => {
      return borrow.id === account.id ? borrowAcc+1 : borrowAcc
    }, 0)
    return acc + count
  }, 0)
  /*
  let count = 0;
  for (let book of books) {
    let borrows = book.borrows;
    for (let borrow of borrows) {
      if (borrow.id == account.id) {
        count ++;
      }
    } 
  }
  return count;*/
}

const getBooksPossessedByAccount = (account, books, authors) => {
  //iterate over books
  return books.filter((book) => {
    const recent = book.borrows[0];
    return !recent.returned && recent.id === account.id
  })
  .map((book) => {
    const author = authors.find((author) => author.id === book.authorId)
    return {...book, author}
  })
  //look at borrows array for each book
  //look at borrows array for user's id and compare to account id
  //check if book's authorId is the same as an author's id
  //
  /*const id = account.id;
  //need to search for all books checked out by account
  //need to return those books into an array
  let results = []
  for (let book of books) {
    for (let borrow of book.borrows) {
      if (borrow.id === id && borrow.returned == false) {
        results.push(book);
      }
    }
  }
  for (let result of results) {
    for (let author of authors) {
      if (result.authorId === author.id) {
        result.author = author;
      }
    }
  }
  
  return results;*/

}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
