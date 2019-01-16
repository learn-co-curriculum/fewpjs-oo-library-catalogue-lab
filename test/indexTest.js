describe( "index.js", () => {

  describe( "Author", () => {
    let cormac
    before( () => {
      cormac = new Author( "Cormac McCarthy" )
    } )


    it( "has a private `_name` property", () => {
      expect( cormac._name ).to.equal( "Cormac McCarthy" )
    } )

    it( "has a `name` getter that returns `this._name`", () => {
      expect( cormac.name ).to.equal( "Cormac McCarthy" )
    } )

  } )

  describe( "Genre", () => {
    let horror
    let scifi
    before( () => {
      horror = new Genre( "Horror" )
      scifi = new Genre( "Sci-Fi" )
    } )

    it( "has a private `_title` property", () => {
      expect( horror._title ).to.equal( "Horror" )
      expect( scifi._title ).to.equal( "Sci-Fi" )
    } )

    it( "has a `title` getter that returns `this._title`", () => {
      expect( horror.title ).to.equal( "Horror" )
      expect( scifi.title ).to.equal( "Sci-Fi" )
    } )
  } )



  describe( "PublishingInfo", () => {
    let title
    let date
    let publisher
    let info
    before( () => {
      title = "Sutree"
      date = '1979'
      publisher = 'Random House'
      info = new PublishingInfo( title, date, publisher )
    } )

    it( "has a private `_title` property", () => {
      expect( info._title ).to.equal( "Sutree" )
    } )

    it( "has a private `_date` property", () => {
      expect( info._date ).to.equal( "1979" )
    } )

    it( "has a private `_publisher` property", () => {
      expect( info._publisher ).to.equal( "Random House" )
    } )

    it( "has a `title` getter that returns `this._title`", () => {
      expect( info.title ).to.equal( "Sutree" )
    } )

    it( "has a `date` getter that returns `this._date`", () => {
      expect( info.date ).to.equal( "1979" )
    } )

    it( "has a `publisher` getter that returns `this._publisher`", () => {
      expect( info.publisher ).to.equal( "Random House" )
    } )
  } )

  describe( "Book", () => {
    let publishingInfo
    let cormac
    let fiction
    before( () => {
      cormac = new Author( "Cormac McCarthy" )
      fiction = new Genre( "Fiction" )
      publishingInfo = new PublishingInfo( "All The Pretty Horses", "1992", "Alfred A. Knopf" )
      book = new Book( cormac, fiction, publishingInfo )
    } )

    it( "has a private `_author` property", () => {
      expect( book._author ).to.eql( cormac )
    } )
    it( "has a private `_genre` property", () => {
      expect( book._genre ).to.eql( fiction )
    } )
    it( "has a private `_publishingInfo` property", () => {
      expect( book._publishingInfo ).to.eql( publishingInfo )
    } )

    it( "has an `author` getter that returns `this._author`", () => {
      expect( book.author ).to.eql( cormac )
    } )
    it( "has a `genre` getter that returns `this._genre`", () => {
      expect( book.genre ).to.eql( fiction )
    } )
    it( "has an `info getter that returns `this._publishingInfo`", () => {
      expect( book.info ).to.eql( publishingInfo )
    } )
  } )

  describe( "Catalog", () => {
    let publishingInfo
    let publishingInfo2
    let publishingInfo3
    let cormac
    let king
    let fiction
    let catalog
    before( () => {
      cormac = new Author( "Cormac McCarthy" )
      king = new Author( "Stephen King" )
      fiction = new Genre( "Fiction" )
      publishingInfo = new PublishingInfo( "All The Pretty Horses", "1992", "Alfred A. Knopf" )
      publishingInfo2 = new PublishingInfo( "Sutree", "1979", "Random House" )
      publishingInfo3 = new PublishingInfo( "Under the Dome", "2009", "Charles Scribner's Sons" )
      book = new Book( cormac, fiction, publishingInfo )
      book2 = new Book( cormac, fiction, publishingInfo2 )
      book3 = new Book( king, fiction, publishingInfo3 )
      catalog = new Catalog( [ book, book2 ] )
    } )

    it( "has a private `_books` property", () => {
      expect( catalog._books ).to.eql( [ book, book2 ] )
    } )

    it( "has an `books` getter that returns `this._books`", () => {
      expect( catalog.books ).to.eql( [ book, book2 ] )
    } )

    it( "has an `books` setter that reassigns the `_books``", () => {
      catalog.books = [ book, book2, book3 ]
      expect( catalog.books ).to.eql( [ book, book2, book3 ] )
    } )
  } )

  describe( "Library", () => {
    let publishingInfo
    let publishingInfo2
    let publishingInfo3
    let cormac
    let king
    let fiction
    let catalog
    before( () => {
      cormac = new Author( "Cormac McCarthy" )
      king = new Author( "Stephen King" )
      fiction = new Genre( "Fiction" )
      horror = new Genre( "Horror" )
      publishingInfo = new PublishingInfo( "All The Pretty Horses", "1992", "Alfred A. Knopf" )
      publishingInfo2 = new PublishingInfo( "Sutree", "1979", "Random House" )
      publishingInfo3 = new PublishingInfo( "Under the Dome", "2009", "Charles Scribner's Sons" )
      publishingInfo4 = new PublishingInfo( "Cell", "2006", "Scribner" )
      book = new Book( cormac, fiction, publishingInfo )
      book2 = new Book( cormac, fiction, publishingInfo2 )
      book3 = new Book( king, fiction, publishingInfo3 )
      book4 = new Book( king, horror, publishingInfo4 )
      catalog = new Catalog( [ book, book2, book3, book4 ] )
      library = new Library( catalog )
    } )

    it( "has a private `_catalog` property", () => {
      expect( library._catalog ).to.eql( catalog )
    } )

    it( "has an `catalog` getter that returns `this._catalog`", () => {
      expect( library.catalog ).to.eql( catalog )
    } )

    it( "has an `authors` getter that returns an array of all author instances in the catalog", () => {
      expect( library.authors ).to.include( cormac, king )
      expect( library.authors.length ).to.eql( 2 )
    } )

    it( "has an `genres` getter that returns all genres of all books in the catalog", () => {
      expect( library.genres ).to.include( fiction, horror )
    } )

    it( "does does not include duplicate genres when using the `genres` getter", () => {
      expect( library.genres ).to.eql( [ fiction, horror ] )
    } )

    it( "has a searchByAuthor method that takes in a String and returns all books with a matching author name ", () => {
      expect( library.searchByAuthor( "Cormac" ) ).to.eql( [ book, book2 ] )
      expect( library.searchByAuthor( "Kin" ) ).to.eql( [ book3, book4 ] )
      expect( library.searchByAuthor( "Johsnon" ) ).to.eql( [] )
    } )

    it( "has a searchByGenre method that takes in a Genre instance and returns all books with the same genre", () => {
      expect( library.searchByGenre( fiction ) ).to.eql( [ book, book2, book3 ] )
      expect( library.searchByGenre( horror ) ).to.eql( [ book4 ] )
    } )

    it( "has a searchByBookTitle method that takes in a String and returns all books with a matching title", () => {
      expect( library.searchByBookTitle( "All" ) ).to.eql( [ book ] )
      expect( library.searchByBookTitle( "t" ) ).to.eql( [ book, book2, book3 ] )
      expect( library.searchByBookTitle( "s" ) ).to.eql( [ book, book2 ] )
      expect( library.searchByBookTitle( "ll" ) ).to.eql( [ book, book4 ] )
    } )


  } )
} )