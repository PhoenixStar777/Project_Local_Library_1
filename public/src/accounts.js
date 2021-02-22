
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

function sortAccountsByLastName(accounts) {
  //will use sort to sort by last name
  /*Example:  parks.sort((parkA, parkB) => 
  (parkA.rating > parkB.rating ? 1 : -1));
*/
//assign variable and state what to sort
const assortedAccounts = accounts.sort((accountA, accountB) => { 
  //return the info on how to assort the last name value
return accountA.name.last < accountB.name.last ? -1 : 1});
//return variable with the answer *accts sorted by last name
return assortedAccounts;
}





function numberOfBorrows(account, books) {
  /*returns a _number_ that represents the number of times the account's 
  ID has appeared in a book's `borrow` array.
  */
 //to get each time an acct id appears in books borrow array
 //array of books objects
 //books[i].borrows
 //iterate over books and books borrows or
 //pull out borrows and then iterate
 let results = books.reduce((accumulator, element, index, array) =>{
   return accumulator.concat(element.borrows)
 },[]);
//console.log(results);
let count = 0;
for (let i = 0; i < results.length; i++){
  if (results[i].id === account.id){
    count++
  }
}

return count;
 

 


  
  
   
  
 


}

function getBooksPossessedByAccount(account, books, authors) {
   //use forEach on books make array
  //identify accts with books checked out
  //run forEach and an object of objects of the authors
  //if author.id === authors.id
  //push author object in new books array
  //will need map and consider using find w/map
  //try find author
  let booksOutList = [];
  let authorList = [];

  books.forEach(book => {
   // console.log(book);
    if (book.borrows[0].returned === false &&
        book.borrows[0].id === account.id) {
          //console.log(book);
          authors.forEach(author => {
            if (author.id === book.authorId){
              let result = {
                "author": {"name": author.name },
                "title": book.title,
              };
              //console.log(result);
              booksOutList.push(result);
            }  
          })        
    }    
  });
  //console.log(booksOutList);
  return booksOutList;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  getBooksPossessedByAccount,
};
