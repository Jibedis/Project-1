const input = require('sync-input');

console.log("Earned ammount:");
console.log("Bubblegum: $202");
console.log("Toffee: $118");
console.log("Ice cream: $2250");
console.log("Milk chocolate: $1680");
console.log("Doughnut: $1075");
console.log("Pancake: $80");
console.log("");
let income = 202 + 118 + 2250 + 1680 + 1075 + 80;

console.log("Income: " + income);

let user1 = Number(input("Staff expenses: "));
let user2= Number(input("Other expenses: "));

let totalExpanse = user1 + user2;

let result = income - (totalExpanse);

console.log("Net income: $" + result);