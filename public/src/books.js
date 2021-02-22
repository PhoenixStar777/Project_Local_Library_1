//helper functions

function findAccountById(accounts, id) { 
  //do a find to find the id
  //arr.find(callback(element[, index[, array]])[, thisArg])
  //id = accounts.id or accounts[0]
  //accounts.find((account) => account.id === id);
  //returns the account object that has the matching ID.

  //make empty array
  
  const foundAccount = accounts.find((account) => account.id === id);
  return foundAccount;
  
  
}
function findAuthorById(authors, id) {
   //use find and return author
  /*
const authors = [
  {
    id: 0,
    name: {
      first: "Lucia",
      last: "Moreno",
    },
  */
 //

//To find author object if authors.id is the same as searched id
return authors.find((author) => author.id === id);

  

  }

function findBookById(books, id) {
  //use find to search for books by id
  //an object of the book will result
  return books.find((book) => id === book.id);
  

}

function partitionBooksByBorrowedStatus(books) {
   
//Brainstoming below
//should return a list of borrowed books and returned books
//borrowed books:  books[i].borrows.returned === false
//make an object that isolates all books borrowed/literals
//use filter!! => books.borrows[0].returned === false
//if above condition is met, return 
//filter which are true and the other false
//then return both with square brackets
//let borrowed = filter
//let notBorrowed = filter
//then return both at the end
//array.filter(function(currentValue, index, arr), thisValue)
let borrowed =  books.filter((book) => book.borrows[0].returned === false);
let returned = books.filter((book) => book.borrows[0].returned === true);
const bookRentalReport = [borrowed, returned];
return bookRentalReport;









      }

/*should return an array of all the transactions
from book's `borrows` key. each transaction should 
include the related account information and the `returned` key.
*/ 
function getBorrowersForBook(book, accounts) {

  //may need requires - verified can't use
//array book's 'borrow's key:  
//refer to accts with the spread operator:  {...registered}
//for each reference but modify variables
//how to get all transactions from book's `borrows` key
//use the account object and push borrower's info in it
const result = [...book.borrows];
//do forEach to iterate through result
//do forEach first array.forEach(function(currentValue, index, arr), thisValue)
/*
  [
    {
      id: "5f446f2e4eff1030e7316861",
      returned: true,
      picture: "https://api.adorable.io/avatars/75/barber.waters@kegular.biz",
      age: 37,
      name: {
        first: "Barber",
        last: "Waters",
      },
      company: "KEGULAR",
      email: "barber.waters@kegular.biz",
      registered: "Tuesday, April 14, 2020 9:15 PM",
    },
    {
      id: "5f446f2ecc5c4787c403f844",
      returned: true,
      picture: "https://api.adorable.io/avatars/75/dyer.trevino@slax.io",
      age: 34,
      name: {
        first: "Dyer",
        last: "Trevino",
      },
      company: "SLAX",
      email: "dyer.trevino@slax.io",
      registered: "Saturday, August 1, 2015 8:13 PM",
    },
  ]
*/
/*
const accounts = [
  {
    id: "5f446f2ecfaf0310387c9603",
    picture: "https://api.adorable.io/avatars/75/esther.tucker@zillacon.me",
    age: 25,
    name: {
      first: "Esther",
      last: "Tucker",
    },
*/

result.forEach((element, index) => {
  //calling function to identify accts and element.id
  //return acct obj with associated id
  let acctInfo = findAccountById(accounts, element.id);
  //used spread operator to join objects
  result[index] = {...element, ...acctInfo};

 
});
    //made sure no more than 10 results returned
    result.splice(10);
    return result;
 
  
  
  }










module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
