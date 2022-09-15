
// Static type cheker
 let b: number;
//  b = "s" error

// type inference
let a = 5;
// a = "5" error

// Union types
let c: number | string;
c = 4;
c = "4"
// c = true error

// Literal types
let d: "gauche" | "droite"
// d = "haut" error

// Types inssertion
const btn = <HTMLButtonElement>document.querySelector(".btn")

//Liste des interfaces : "https://developper.mozilla.org/en-US/docs/Web/API"

// Arrays
let myArray: number[];
myArray = [1,2,3]

// Tupels
let complexArray: [number, string, true]
complexArray = [2,"num",true]

let multiArray: (number | string)[];
multiArray = [ 4, 5, "john", 4]

// Object
let myObject: {a: number , b: any};
myObject = {
    a: 5,
    b: "bob"
}

// Any || Unknown

let myAny: any;
myAny.trim();

let myUnknown: unknown;
// myknown.trim() error

// interfaces
interface User {
    readonly name: string;
    age: number;
    employed?: boolean
}

let john : User = {
    name: "john",
    age: 30
}

interface UserVip extends User {
    isVip : true;
}

let bob: UserVip = {
    name : "bob",
    age: 34,
    isVip : true
}

// Type Aliases
type myBoolean = true | false;
type stringOrNum = string | number;
let x : stringOrNum;
x = "3"
x = 8

// Generics 
interface Box<Type> {
    a: Type
}

let myBox: Box<number> = {
    a: 9
}

// Function
function add (a: number, b: number):void{
    console.log(a + b);
}
add( 5, 6)

// :void ne retourne rien.

function echo<T>(x: T):T{
    return x
}
echo(5)

// Classe
class UserAccount {
    constructor(private name: string, private id: number){}
}
const newUser = new UserAccount("ana", 32);