const exampleBook = {
  name: "Design Patterns",
  author: "Erich Gamma",
  year: 1994,
  read: false,
  getInfo() {
    return `the book name is ${this.name}, 
    the author is ${this.author}, 
    the year it came out was ${this.year} 
    and ${haveRead(this.read)}`;
  },
};

const myLibrary = [exampleBook];

console.log(exampleBook.getInfo())

function haveRead(this.read) {
    if (this.read == false) {
        return "haven't read it"
    } else {
        return "have read it"
    }
}
function Book(bookname: string, author: string, year: number, read: boolean) {
  this.name = bookname;
  this.author = author;
  this.year = year;
  this.read = read;
}

function addBook() {}
