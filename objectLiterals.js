// Objects are entities which has a property and can do things(methods)
/*
  Ex: var cars = ['porsche', 'lamborghini', 'mclaren']
  car is an array object.
  It has a property called length (cars.length)
  If you try this in console you will have associated methods with the array object.
  We write functions to define methods for the user defined objects

  the dataTypes like null boolean is not objects as they don't have property.
  But JS internally turns primitive dataTypes into objects and we can use those the methods.
  Ex: var name = 'Edward' --> JS converts them into objects and we can then use methods
    var name = new String('Edward'); --> This is a string object.
    name._proto_  // We will talk about it when we use this for now to check the methods.
*/

/* If we are to code everything like this.
  It would be a mess and nothing is centralized and together
  This is spagetthi code.

  This code is pretty unmanageable so what we do is we create objects
  with properties and and methods specific to the user.
  We need to  encapsulate this user so that everything specific
  to this user is available.

  Check ObjectOriented.js code
*/

var userOneName = 'James';
var userOneEmail = 'james@hogwarts.wiz';
var userOneFriends = ['Lily'];
//
var userTwoName = 'Harry';
var userTwoEmail = 'harry@hogwarts.wiz';
var userTwoFriends = ['Ginny'];
// //
var userThreeName = 'Snape';
var userThreeEmail = 'snape@hogwarts.wiz';
var userThreeFriends = ['Lily'];

function login(name) {
  console.log(name, ' has logged In');
}

function logout(name) {
  console.log(name, ' has logged out');
}

function findFriends(friends){
  friends.forEach(friend => {
    console.log(friend);
  })
}

login(userOneName);
logout(userOneName);
// login(userTwoName);
// login(userThreeName);
