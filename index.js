// function person(name, email) {
//   this.name = name;
//   this.email = email;
//   this.print = function () {
//     console.log(`Name:${this.name} Email:${this.email} `);
//   };
// }

// var person1 = new person('Mehedi-Hasan', 'mehedi11@gmail.com');
// var person2 = new person('Rakibul-Hasan', 'rakibul123@gmail.com');

// console.log(person1, person2);
// var people = [person1, person2];

// console.log(people);

// people.forEach(function (person) {
//   // console.log(`Email:${person.email}`);
//   person.print();
// });

// for (var props in person1) {
//   console.log(`properties = ${props} `);
// }

// function Book(name, author, price) {
//   this.name = name;
//   this.author = author;
//   this.price = price;
// }

// var book = new Book('FUnctional Js', 'Michale Fogus', 350);
// console.log(book.constructor);

// var obj = {
//   name: 'Mehedi-Hasan',
//   print: function () {
//     console.log(this);
//   },
// };
// obj.print();
// function myFunction() {
//   function inner() {
//     console.log(this);
//   }
//   new inner()
// }
// myFunction()

// var person = {
//   name: 'Mehedi-Hasan',
//   print: function () {
//     console.log(this);
//     console.log(`Hello ${this.name}`);
//   },
};
// person.print();

// var myName = person.name;
// console.log(myName);

// var myPrint = function () {
//   // console.log(this);
//   console.log(`Hello ${this.name}`);
// }
// var myPrint = person.print.bind(person);
// console.log(myPrint);
// myPrint();

// function add(num) {
//   console.log(this);
//   return this.value + num;
// }
// var obj = {
//   value: 10,
// };
// var obj2 = {
//   value: 100,
// };
// var binded = add.bind(obj);
// var result = binded(40);

// console.log(result);

// var person = {
//   name: 'mehedi',
//   print: function () {
//     setTimeout(function () {
//       console.log(`Hello ${this.name}`);
//     }, 2000);
//   },
// };

const p1 = {
  fullName: function(){
    return this.fName + ' ' + this.lName;
  }
}

const p2={
  fName:"Mehedi-Hasan",
  lName:"Milton"
}

console.log(p1.fullName.bind(p2))