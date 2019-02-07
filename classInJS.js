/*
    Now we will be tackling how to create multiple objects.
    ex: var userTwo =  new User();

    We will be using the es6 syntactical sugar called classes.

    We can achieve that using the prototype model in JS but with the es6
    we can use classes.

    JS doesn't have classes as such it's just a syntical.

    It's easier to write using classes than the
    prototype, but in the background it's essentially the same thing.

    Classes allows to create instances of the object.
    Ex: A car has color associated with it(red, blue, green, etc.)
    With car class we can create instances of those cars with color property.

*/

class User {
  /* First thing we need to do in our classes is to
    create a constructor function
    Constructor Definition- constructor functions creates/constructs
      the new objects. If we want to create a new user Constructor
      function isresponsible for creating that new object.
  */
  constructor(name, email){
    // here we are attaching this to the properties of the object.
    this.name = name;
    this.email = email;
    console.log('creating new user', name);
  }

  // The new keyword
  // --> Creates new empty object.
  // --> sets the value of this to be the new empty object.
  // --> calls the constructor method.
var userOne = new User('Harry', 'harry@wiz.com');
var userTwo = new User('Ron', 'ron@wiz.com');
var userThree = new USer(); // This creates an instance with undefined properties
