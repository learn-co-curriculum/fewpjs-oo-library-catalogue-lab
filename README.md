# Library Catalog

## Learning Goals

- Create a group of classes that are highly cohesive and weakly coupled
- Create a set of methods that use these classes to query and filter content

## Introduction

In this lab, we're going to practice applying what we've learned so far about
coupling, cohesion and Object Oriented design to create a set of classes
representing a library's book [catalog][catalog].

While creating these classes, your task is to maintain weak coupling while still
maintaining relationships and being able to access all related data.

## Instructions

Follow the steps below and use `learn` to track your progress through the tests.

#### Author

Create an `Author` class that takes in a name when initialized and assigns it to a private `_name` property. Include a getter for `name` to access this property.

#### Genre

Create an `Genre` class that takes in a title when initialized and assigns it to a private `_title` property. Include a getter for `title` to access this property.

#### PublishingInfo

Create an `PublishingInfo` class that takes in a title, date and publisher (all `String`s) when initialized and assigns them to appropriate private properties. Include getters for `title`, `date` and `publisher` to access these properties.

#### Book

Create a `Book` class that is comprised of `Author`, `Genre` and `PublishingInfo`
instances. A `Book` should be initialized with one of each and have private
properties for each.

Create `author`, `genre` and `info` getters that return the associated
`Author`, `Genre` and `PublishingInfo` instances.

#### Catalog

Create a `Catalog` class to contain all `Book` instances. It should be
initialized with an array of `Book` instances or default to an empty array.

Create getter and setter methods for `book` - remember when using a setter,
the method behaves like a pseudo-property, so if we were adding a `Book` instance
to an existing set of books, we can't just _push_ the new `Book`, but instead
must _set_ the pseudo-property to equal its previous array plus the additional
instance.

#### Library

For the purposes of this lab, we will use a `Library` class to act as our
main interface.

Create a `Library` class that takes in a `Catalog` instance and assigns it to
a `_catalog` property.

- Write a `catalog` getter to return `_catalog`
- Write an `authors` getter that returns all `Author` instances that exist in the catalog
- Write an `genres` getter that returns all `Genre` instances that exist in the catalog
- Write a `searchByAuthor` method that takes in a `String` and returns all books
  with an author name that matches the input
- Write a `searchByGenre` method that takes in an instance of `Genre` and returns
  all books that are of that genre
- Write a `searchByBookTitle` method that takes in a `String` and returns all
  books with an author name that matches the input

**Note:** You may find yourself thinking _this doesn't seem like we're following
the single responsibility principle_. You're correct! We will address this
problem in the upcoming lessons on interfaces.

## Conclusion

With this catalog, we've created a basic interface for querying information.
Note that although our `Author`, `Genre` and `PublishingInfo` classes do not
have any knowledge of each other or how they are connected, by using a `Book`
class, we're able to establish their relationships and treat the classes as a
group.

[catalog]: https://en.wikipedia.org/wiki/Library_catalog
