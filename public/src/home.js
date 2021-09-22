let getTotalBooksCount = books => books.length

let getTotalAccountsCount = accounts => accounts.length

const getBooksBorrowedCount = books => {
  // set counter and iterate through books
  // look at first item in books.borrowed array and iterate counter if
  // book is checked out
  return books.reduce((acc, book) => {
    return !book.borrows[0].returned ? acc+1 : acc
  }, 0)  
}
 function _objectSortedValues(obj) {
   const keys = Object.keys(obj);
   return keys.sort((keyA, keyB) => {
     if(obj[keyA] > obj[keyB]) {
       return -1;
     } else if(obj[keyB] > obj[keyA]) {
       return 1;
     } else {
       return 0;
     }
   })
 }

//for these 3, look at the IDs, they give access to all the data
const getMostCommonGenres = books => {
  //search along books, counting up number of times a genre occurs
  //return an array with five or fewer objects (slice)
  //each object has a key and a count
  let count = books.reduce((acc, { genre }) => {
    if (acc[genre]) {
      acc[genre] += 1
    } else {
      acc[genre] = 1
    }
    return acc;
  }, {})
  const sortedGenres = _objectSortedValues(count);
  return sortedGenres.map((name) =>({ 
    name,
    count: count[name]
  })).slice(0, 5);
  // genreList.sort((genA, genB) => genA)
  // console.log(genreList);
  // return result.slice(0, 5);
}

let getMostPopularBooks = books => {
  const sortedBooks = books.sort((bookA, bookB) => bookA.borrows.length < bookB.borrows.length ? 1 : -1)
  return popularBooks = sortedBooks.map(book => {
    return {
      name: book.title, 
      count: book.borrows.length
    }}).slice(0,5);
}
// function getMostPopularBooks(books) {  
//   //reduce - good function to create object showing how many times each book as been borrowed  
//   const groupById = books.reduce((acc, book)=>{      
//     acc[book.id] = book.borrows.length;      
//     return acc;  
//   }, {});
//   //Sort this object by number of times each book has been borrowed  
//   const keys = Object.keys(groupById);  
//   let sorted = keys.sort((keyA, keyB)=>{      
//     if(groupById[keyA]> groupById[keyB]){        
//       return -1      
//     } else if(groupById[keyB]> groupById[keyA]){        
//       return 1;      
//     }      
//     return 0;  
//   });
//   let newArr = sorted.map((id)=>{      
//     let book = books.find(book=>book.id === id);      
//     let count = groupById[id];      
//     return {
//       name: book.title, 
//       count: count
//     };  
//   });
//   return newArr.slice(0,5);
// }
// const getMostPopularBooks = books => {
//   const result = books.map((book) => {
//     const popularity = {
//       name: book.title,
//       count: book.borrows.length,
//     };
//     return popularity;
//   });
//   return result.sort((titleA, titleB) => titleB.count - titleA.count).slice(0, 5)
// }

const getMostPopularAuthors = (books, authors) => {
  // iterate books to look at "authorId, borrows" to count
    // push authorId w/ borrows.length
  const count = books.reduce((acc, { authorId, borrows }) => {
    if(acc[authorId]){
      acc[authorId].push(borrows.length);
    } else {
      acc[authorId] = [borrows.length];
    }
    return acc;
  }, {})

  // iterate over "count variable"
  for (let id in count) {
    // add up sum of author[id]
    const sum = count[id].reduce((aaa, bbb) => aaa + bbb);
    count[id] = sum;
  }

  // sort obj
  const sorted = _objectSortedValues(count)

  // iterate sorted obj and build out obj
  const result = sorted.map(currentId => {
    const currentAuthor = authors.find((author) => author.id == currentId)
    let firstName = currentAuthor.name.first;
    let lastName = currentAuthor.name.last;
    return {name: `${firstName} ${lastName}`,
      count: count[currentId] };
 
  })
  return result.slice(0, 5);
  // display first five
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
