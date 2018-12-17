describe( "index.js", () => {
  let horror
  let scifi
  before( () => {
    horror = new Genre( "Horror" )
    scifi = new Genre( "Sci-Fi" )
  } )

  describe( "Genre", () => {
    it( "has a private `_name` property", () => {
      expect( horror._name ).to.equal( "Horror" )
      expect( scifi._name ).to.equal( "Sci-Fi" )
    } )
  } )

  describe( "Author", () => {
    let cormac
    let scifi
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


  describe( "Book", () => {
    let allThePrettyHorses
    let cormac
    let fiction
    before( () => {
      cormac = new Author( "Cormac McCarthy" )
      fiction = new Genre( "Fiction" )
      allThePrettyHorses = new Book( "All the Pretty Horses", cormac, fiction )
    } )

    it( "has a private `_title` property", () => {
      expect( allThePrettyHorses._title ).to.eql( "All the Pretty Horses" )
    } )
    it( "has a private `_author` property", () => {
      expect( allThePrettyHorses._author ).to.eql( cormac )
    } )
    it( "has a private `_genre` property", () => {
      expect( allThePrettyHorses._genre ).to.eql( fiction )
    } )

    it( "has an `author` getter that returns `this._author`", () => {
      expect( allThePrettyHorses.author ).to.eql( cormac )
    } )

    it( "has a `title` getter that returns `this._title`", () => {
      expect( allThePrettyHorses.title ).to.equal( "All the Pretty Horses" )
    } )

    it( "has an `genre` getter that returns `this._genre`", () => {
      expect( allThePrettyHorses.genre ).to.eql( fiction )
    } )
  } )

  describe( "Catalog", () => {
    let nyPublic
    let allThePrettyHorses
    let noCountryForOldMen
    let trainDreams
    let cormac
    let fiction
    let historicalFiction
    before( () => {
      nyPublic = new Catalog( "New York Public Library" )
      cormac = new Author( "Cormac McCarthy" )
      denis = new Author( "Denis Johnson" )
      fiction = new Genre( "Fiction" )
      historicalFiction = new Genre( "Historical Fiction" )
      allThePrettyHorses = new Book( "All the Pretty Horses", cormac, fiction )
      noCountryForOldMen = new Book( "No Country For Old Men", cormac, fiction )
      trainDreams = new Book( "Train Dreams", denis, historicalFiction )
      nyPublic.books = [ ...nyPublic.books, allThePrettyHorses, noCountryForOldMen, trainDreams ]

    } )

    it( "has a private `_libraryName` property", () => {
      expect( nyPublic._libraryName ).to.eql( "New York Public Library" )
    } )

    it( "has a private `_books` property", () => {
      expect( nyPublic._books ).to.include( allThePrettyHorses, noCountryForOldMen )
    } )

    it( "has an `books` getter that returns `this._books`", () => {
      expect( nyPublic.books ).to.include( allThePrettyHorses, noCountryForOldMen )
    } )

    it( "has an `authors` getter that returns all authors of all books in the catalog", () => {
      expect( nyPublic.authors ).to.eql( [ cormac, denis ] )
    } )

    it( "has an `genres` getter that returns all genres of all books in the catalog", () => {
      expect( nyPublic.genres ).to.include( fiction, historicalFiction )
    } )

    it( "does does not include duplicate genres when using the `genres` getter", () => {
      expect( nyPublic.genres ).to.eql( [ fiction, historicalFiction ] )
    } )

    it( "has a searchByGenre method that takes in a Genre instance and returns all books with the same genre", () => {
      expect( nyPublic.searchByGenre( fiction ) ).to.eql( [ allThePrettyHorses, noCountryForOldMen ] )
      expect( nyPublic.searchByGenre( historicalFiction ) ).to.eql( [ trainDreams ] )
    } )

    it( "has a searchByBookTitle method that takes in a String and returns all books with a matching title", () => {
      expect( nyPublic.searchByBookTitle( "All" ) ).to.eql( [ allThePrettyHorses ] )
      expect( nyPublic.searchByBookTitle( "No" ) ).to.eql( [ noCountryForOldMen ] )
      expect( nyPublic.searchByBookTitle( "or" ) ).to.eql( [ allThePrettyHorses, noCountryForOldMen ] )
      expect( nyPublic.searchByBookTitle( "s" ) ).to.eql( [ allThePrettyHorses, trainDreams ] )
    } )

    it( "has a searchByAuthor method that takes in a String and returns all books with a matching author name ", () => {
      expect( nyPublic.searchByAuthor( "Cormac" ) ).to.eql( [ allThePrettyHorses, noCountryForOldMen ] )
      expect( nyPublic.searchByAuthor( "Johnson" ) ).to.eql( [ trainDreams ] )
    } )
  } )
} )