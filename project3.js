const input = require('sync-input');

let name = input("Enter name:");
let surname = input("Enter surname");
let message = input("Enter message");
let repeat = input("Enter number of repeats:");


for (let i = 0; i != repeat; i++) {
    console.log("This is " + name + " " + surname + " and " + message);
}

