// We saw how much easier and lesser code we wrote to create new users.
// Now we will talk about creating methods for users.
// We define the methods inside the class but not inside the constructor()
// Constructor is just for properties

class User {
  constructor(name, email){
    this.name = name;
    this.email = email;
    this.score = 0;
  }
  login(){
    // we have access to the 'this' here
    // because it's the instance of a particular user
    console.log(this.name,' logged in');
    return this;   // we are returning the instance for method chaining.
  }
  logout(){
    console.log(this.name,' logged out');
    return this;
  }
  // Method chaining
  updateScore(){
    this.score++;
    console.log(this.name, ' score is ', this.score);
    return this;
  }
}

var userOne = new User('Harry', 'harry@hogwarts.wiz');
var userTwo = new User('Ron', 'ron@hogwarts.wiz');

// method chaining
userOne.login().updateScore().updateScore().logout();
