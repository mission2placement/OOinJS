/*
  Writing Our first object
  Explaining encapsulation. Our user object will encapsulate every thing.
*/

var userOne = {
    name: 'James',
    email: 'james.potter@hogwarts.wiz',
    /* we can write the functions inside an object.
      login: function(){}, but with es6 this can be shortend and we will write
    */
    login() {
        /*
          'this' refers to the object it is being used in, here the user object,
          if we write 'this' outside it would refer tothe window object.
        */
        console.log(this.name, 'Logged In');
      },
    logout() {
      console.log(this.name, 'Logged out');
    }
}

// Lets see if we can access the properties.
console.log(userOne.name);

// Now if we wanted to update the user at certain time in my code.
/* we can update them by following ways:
    --> dot notation: userOne.name = 'newName'
    --> square brackets: userOne['email'] -- talks about usage of this.
  we can also add a property and functions to the object.

  Now what would we do if we want to have multiple users.
  We can't create user objects everytime.
  We will use the new feature of ES6 called classes.
*/
var userTwo = {
    name: 'Lily',
    email: 'lily.potter@hogwarts.wiz',
    /* we can write the functions inside an object.
      login: function(){}, but with es6 this can be shortend and we will write
    */
    login() {
        /*
          'this' refers to the object it is being used in, here the user object,
          if we write 'this' outside it would refer to the window object.
        */
        console.log(this.name, 'Logged In');
      },
    logout() {
      console.log(this.name, 'Logged out');
    }
}

var userThree = {
    name: 'Snape',
    email: 'snape.potter@hogwarts.wiz',
    /* we can write the functions inside an object.
      login: function(){}, but with es6 this can be shortend and we will write
    */
    login() {
        /*
          'this' refers to the object it is being used in, here the user object,
          if we write 'this' outside it would refer to the window object.
        */
        console.log(this.name, 'Logged In');
      },
    logout() {
      console.log(this.name, 'Logged out');
    }
}
