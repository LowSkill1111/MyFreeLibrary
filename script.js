// Create a constructor function called Book that takes in the following parameters: title, author, pages, and read. The function should assign these parameters to properties of the same name on the object being created. If any of the parameters are not provided, they should default to "unknown" for title and author, 0 for pages, and false for read. Additionally, add a method called info to the Book prototype that returns a string containing the book's information in the following format: "title by author, pages pages, read/not read yet". Finally, create three instances of the Book constructor with different values and log their info to the console.


function Book(title = 'unknown', author = 'unknown', pages = 'unknown', read = false) {
  this.title = String(title).trim() || 'unknown';
  this.author = String(author).trim() || 'unknown';

  const parsedPages = Number(pages);
  this.pages = !isNaN(parsedPages) ? parsedPages : 0;

  this.read = Boolean('read');
}
Book.prototype.info = function () {
  return `${this.title} by ${this.author}, ${this.pages === 0 ? 'unknown' : this.pages} pages, ${this.read ? 'finished' : 'not read yet'}`;
};
const v = 10;
const firstBook = new Book(null, 'me', 'efwsf', true);
const secondBook = new Book(15, '', '3');
const thirdBook = new Book();

console.log(firstBook.info());
console.log(secondBook.info());
console.log(thirdBook.info());

class Athlete {}
console.log(typeof Athlete); // "function "
