class Movie {
  constructor( director, genre, rating, cast, releaseDate, length ) {
    this._director = director
    this._genre = genre
    this._rating = rating
    this._cast = cast
    this._releaseDate = releaseDate
    this._length = length
  }

  get director() {
    return this._director
  }

  get genre() {
    return this._genre
  }

  get rating() {
    return this._rating
  }

  get cast() {
    return this._cast
  }

  get releaseDate() {
    return this._releaseDate
  }

  get length() {
    return this._length
  }
}