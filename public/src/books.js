const findAuthorById = (authors, id) => authors.find((author) => author.id == id)

const findBookById = (books, id) => books.find((book) => book.id == id)

function partitionBooksByBorrowedStatus(books) {
  // let result = [[], []];
  // result[0].push((books) => books.filter((book) => book.borrows((borrow) => borrow.returned == false)))
  // result[1].push((books) => books.filter((book) => book.borrows((borrow) => borrow.returned == true)))
  // console.log(result);
  return books.reduce((acc, book) => {
    const [borrowed, returned] = acc
    const recent = book.borrows[0]
    if (recent.returned) returned.push(book)
    else borrowed.push(book)
    return acc
  }, [[], []])
}

function getBorrowersForBook(book, accounts) {
  // iterate over all accounts to pull ids
  const idsByAccount = accounts.reduce((acc, account) => {
    acc[account.id] = account
    return acc
  }, {})
  return book.borrows.map(({id, returned}) => ({
    ...idsByAccount[id],
    returned
  }))
  .slice(0, 10)
  // pull accounts that match book.borrowed[].id
  // add the borrowed.returned value to the object
  // return first 10
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
