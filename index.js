class Catalog {
  constructor( libraryName, books = [] ) {
    this._libraryName = libraryName
    this._books = books
  }

  set books( books ) {
    this._books = books
  }

  get books() {
    return this._books
  }

  get authors() {
    return [ ...new Set( this._books.map( book => book.author ) ) ]
  }

  get genres() {
    return [ ...new Set( this._books.map( book => book.genre ) ) ]
  }

  searchByAuthor( authorName ) {
    return this.books.filter( book => book.author.name.includes( authorName ) )
  }

  searchByGenre( genre ) {
    return this.books.filter( book => book.genre === genre )
  }

  searchByBookTitle( title ) {
    return this.books.filter( book => book.title.includes( title ) )
  }
}

class Book {
  constructor( title, author, genre ) {
    this._title = title
    this._author = author
    this._genre = genre
  }

  get author() {
    return this._author
  }

  get genre() {
    return this._genre
  }

  get title() {
    return this._title
  }
}

class Author {
  constructor( name ) {
    this._name = name
  }

  get name() {
    return this._name
  }
}

class Genre {
  constructor( name ) {
    this._name = name
  }
}