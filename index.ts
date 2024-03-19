const exampleBook = {
  name: "Design Patterns",
  author: "Erich Gamma",
  year: 1994,
  read: false,
  getInfo() {
    return `the book name is ${this.name}, 
    the author is ${this.author}, 
    the year it came out was ${this.year} 
    and ${this.read}`;
  },
};

const myLibrary = [exampleBook];

console.log(exampleBook.getInfo());

function Createbook(
  bookname: string,
  author: string,
  year: number,
  read: boolean
) {
  return {
    name: bookname,
    author: author,
    year: year,
    read: read,
    getInfo() {
      return `the book name is ${this.name}, the author is ${this.author}, the year it came out was ${this.year} and ${this.read}`;
    },
  };
}

function addBook() {}

// function haveRead(this.read) {
//     if (this.read = false) {
//         return "haven't read it"
//     } else {
//         return "have read it"
//     }
// }
