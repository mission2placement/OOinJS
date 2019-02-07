// Now we want to create a user with special methods not avaialble for all users
// We can write a new class similar to user but it's inefficient.
// We use inheritence which helps to use the properties of the existing class.

class User {
  constructor(name, email){
    this.name = name;
    this.email = email;
    this.score = 0;
  }
  login(){
    console.log(this.name,' logged in');
    return this;
  }
  logout(){
    console.log(this.name,' logged out');
    return this;
  }
}

class Admin extends User {
  // We are not creating a constructor here so it will take the User constructor.
  deleteUser(user){
      users = users.filter(u => {
        return u.email != user.email
      });
  }
}

var userOne = new User('Harry', 'harry@hogwarts.wiz');
var userTwo = new User('Malfoy', 'malfoy@hogwarts.wiz');
// // Creating a admin user
var admin = new Admin('Dumbledore','dumbledore@hogwarts.wiz');

var users = [userOne, userTwo];

console.log(users);
// Now this admin has the deleteUser access whereas userOne and userTwo doesn't.
admin.deleteUser(userTwo);
console.log(users);
