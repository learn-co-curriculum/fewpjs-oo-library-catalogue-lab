# Library Catalog

## Learning Goals

- Create a multi-class application
- Write methods that utilize indirectly related classes

## Introduction

In this lab, we're going to practice creating complex class relationships by
building a library catalog.

## Instructions

Follow the steps below and use `learn` to track your progress through the tests.

### Genre

Create a `Genre` class that has one property, `_name`.

### Author

Create an `Author` class that has one property, `_name` and a getter, `name`.

### Book

Create a `Book` class that has `_title`, `_author`, and `_genre` properties,
and getters for each.

### Catalog

Create a `Catalog` class that takes in a library name and assigns it to a
`_libraryName` property. A `Catalog` instance should also start with a second
property, `_books`, that starts off as an empty array.

- Create a `books` getter that returns all `Book` instances
- Create a `books` setter that sets `_books` to whatever is passed in as a
  parameter
- Create an `authors` getter that returns all `Author` instances in the catalog.
  There should be no duplicate entries
- Create a `genres` getter that returns all `Genre` instances in the catalog.
  There should be no duplicate entries
- Create a `searchByGenre` _method_ that takes in a `Genre` instance and returns
  all books with that genre
- Create a `searchByBookTitle` method that takes in a String and returns all
  books with a match to the String in their title
- Create a `searchByAuthor` method that takes in a String and returns all
  books with a match to the String in the author's name

Run `learn` as you work through the classes to make sure each class is
functioning before moving on to the next.

## Conclusion

With this catalog, we've created a basic interface. We can imagine now how an
app might look - a user might directly or indirectly use the search
functionality of our `Catalog` class to look for a particular book.
