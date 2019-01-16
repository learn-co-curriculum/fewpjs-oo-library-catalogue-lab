class Library {
  constructor( catalog ) {
    this._catalog = catalog
  }

  get catalog() {
    return this._catalog
  }

  get authors() {
    return [ ...new Set( this.catalog.books.map( book => book.author ) ) ]
  }

  get genres() {
    return [ ...new Set( this.catalog.books.map( book => book.genre ) ) ]
  }


  searchByAuthor( authorName ) {
    return this.catalog.books.filter( book => book.author.name.includes( authorName ) )
  }

  searchByGenre( genre ) {
    return this.catalog.books.filter( book => book.genre === genre )
  }

  searchByBookTitle( title ) {
    return this.catalog.books.filter( book => book.info.title.toLowerCase().includes( title.toLowerCase() ) )
  }
}

class Catalog {
  constructor( books = [] ) {
    this._books = books
  }

  set books( books ) {
    this._books = books
  }

  get books() {
    return this._books
  }

}

class Book {
  constructor( author, genre, publishingInfo ) {
    this._author = author
    this._genre = genre
    this._publishingInfo = publishingInfo
  }

  get author() {
    return this._author
  }

  get genre() {
    return this._genre
  }

  get info() {
    return this._publishingInfo
  }
}

class PublishingInfo {
  constructor( title, date, publisher ) {
    this._title = title
    this._date = date
    this._publisher = publisher
  }

  get title() {
    return this._title
  }

  get publisher() {
    return this._publisher
  }

  get date() {
    return this._date
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
  constructor( title ) {
    this._title = title
  }

  get title() {
    return this._title
  }
}