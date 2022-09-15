"use strict";
// Static type cheker
let b;
//  b = "s" error
// type inference
let a = 5;
a = 5;
// Union types
let c;
c = 4;
c = "4";
// c = true error
// Literal types
let d;
// d = "haut" error
// Types inssertion
const btn = document.querySelector(".btn");
//Liste des interfaces : "https://developper.mozilla.org/en-US/docs/Web/API"
// Arrays
let myArray;
myArray = [1, 2, 3];
// Tupels
let complexArray;
complexArray = [2, "num", true];
let multiArray;
multiArray = [4, 5, "john", 4];
// Object
let myObject;
myObject = {
    a: 5,
    b: "bob"
};
// Any || Unknown
let myAny;
myAny.trim();
let myUnknown;
let john = {
    name: "john",
    age: 30
};
let bob = {
    name: "bob",
    age: 34,
    isVip: true
};
let x;
x = "3";
x = 8;
let myBox = {
    a: 9
};
// Function
function add(a, b) {
    console.log(a + b);
}
add(5, 6);
// :void ne retourne rien.
function echo(x) {
    return x;
}
echo(5);
// Classe
class UserAccount {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}
const newUser = new UserAccount("ana", 32);
