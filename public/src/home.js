function totalBooksCount(books) {
  //try reduce
  return books.length;
}

function totalAccountsCount(accounts) {
  //try reduce
  return accounts.length;
}

function booksBorrowedCount(books) {
/*
{
    id: "5f447132d487bd81da01e25e",
    title: "sit eiusmod occaecat eu magna",
    genre: "Science",
    authorId: 8,
    borrows: [
      {
        id: "5f446f2e2cfa3e1d234679b9",
        returned: false,
      },
*/
//filter for total currently borrowed
let borrowed =  books.filter((book) => book.borrows[0].returned === false);
let borrowedBooks = borrowed.length;
return borrowedBooks;


}

function getMostCommonGenres(books) {
  //empty object
  let genres = {};
  //loop throw books
  books.forEach(book => {
    //checking if there is a matching genre
    if (genres[book.genre]){
      //if exist, going to increment it
      genres[book.genre]++;
      
    }else{//if genre not +1
      genres[book.genre] = 1;
   

    }
      })//convert genres into array
    return Object.entries(genres).map(([name, count]) => {
      return {name, count};

    }).sort((a,b) => b.count - a.count).splice(0,5);


 
    /*
  [
    { name: "Nonfiction", count: 9 },
    { name: "Historical Fiction", count: 7 },
    { name: "Thriller", count: 7 },
    ...
  ]
*/
//sort by count descending order
//then splice for 5 objects and return
/*

*/






}

function getMostPopularBooks(books) {
  //*******close but wrong check error
  //change map to return an array
    //empty object
    let titles = {};
    //loop throw books
    books.forEach(book => {
      //checking if there is a matching title
      if (titles[book.title]){
        //if exist, going to increment it
        titles[book.title] += book.borrows.length;
        
      }else{//if title not +1
        titles[book.title] = book.borrows.length;
     
  
      }
        })//convert titles into array
      return Object.entries(titles).map(([name, count]) => {
        return {name, count};
  
      }).sort((a,b) => b.count - a.count).splice(0,5);
  }





function getMostPopularAuthors(books,authors) {
  //assign empty array 
  let returnArr = [];
  authors.forEach(author => {
    //get the authors' first name and last name with count
    let returnAuthor = {
      name: `${author.name.first} ${author.name.last}`,
      count:  0
    }
    //loop and match authorID with author.id and get length
    books.forEach(book => {
      if (book.authorId === author.id) {
       returnAuthor.count += book.borrows.length;
        
      }
      //console.log(returnAuthor); 
      //{ name: '$(author.name.first) ${author.name.last}', count: 0 }
      

    })
    returnArr.push(returnAuthor);
    
  })
  
  return returnArr.sort((a,b) => b.count - a.count).slice(0,5);
     
  
  

      
    }
    
  
  
  /*review requirements:
  const authors = [
  {
    id: 0,
    name: {
      first: "Lucia",
      last: "Moreno",
    },
  },
const books = [
  {
    id: "5f447132d487bd81da01e25e",
    title: "sit eiusmod occaecat eu magna",
    genre: "Science",
    authorId: 8,
    borrows: [
      {
        id: "5f446f2e2cfa3e1d234679b9",
        returned: false,
      



    Steps/Data
//data needed
//authors.id is a number - convert to name
//authors.name.first - authors.name.last
//if books.author.id = 
//borrows.id = a book by number

//first find out the books.id top five
//need top 5 books and authors names


*/ 
      

module.exports = {
  totalBooksCount,
  totalAccountsCount,
  booksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
