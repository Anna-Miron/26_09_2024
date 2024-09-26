console.log("Hello World!");

// variabila declarata si apoi atribuita valoare
let userName;
userName = "Monica";
console.log(userName);
userName = "_monica_";
console.log(userName);

// variabila declarata si initiata cu o valoare intr-o linie
let email = "user@test.com";
console.log(email);

// constanta declarata cu valoarea
const pi = 3.14;
// pi = 3.12; - interzis re-atribuirea de valori undei constante
console.log(pi);

// Operatii aritmetice
const sumResult = 12 + 32;
console.log("sumResult: ", sumResult);

//  Scadere
const differenceResult = 33 - 71; 
console.log("diferenta: ", differenceResult);

// inmultire
const a = 13; 
const b = 44;
const multiplyResult = a * b;
// facem string interpolation
//  3 moduri de a face asta: gilimelele de pe tasta tilda, ghilimele duple si simple
console.log(`rezultat inmultire dintre ${a} si ${b} este ${multiplyResult}`);

// impartire 
const divisionResult = 12 / 5;
console.log("division result: ", divisionResult);

// rest impartire (modulo)
const rest = 12 % 5;
console.log("rest impartire: ", rest);

// Tipuri de date
// Number
let myNumber = 123;
myNumber = myNumber + 1;
console.log("number: ", myNumber);
// valoarea maxima safe pt un nr de tip Number
console.log("Max safe integer is: ", Number.MAX_SAFE_INTEGER);
console.log("Max number: ", Number.MAX_VALUE);

// BigInt
let bigNumber = 19123456789876543n;
console.log("big number: ", bigNumber);

// String
let password = "secret";
console.log("password: ", password);

// accesarea unui caracter dintr-un string 
let secondLetterOfPassword = password[1];
console.log("a doua litera: ", secondLetterOfPassword);

//  concatenare stringurri: 
let firstName = "Ion";
let lastName = "Craiu";

let fullName = firstName + " " + lastName;
console.log("full name: ", fullName);

// lungimea stringului
let myString = "hello people";
let myStringLenght = myString.length;
// lenght e o proprietate si nu o methoda pt ca nu are paranteze dupa
console.log("myString: ", myString);
console.log("lenght: ", myStringLenght);

// metoda string
let baseString = "Base";
let upper = baseString.toUpperCase();
let lower = baseString.toLowerCase();
console.log("base: ", baseString);
console.log("upper case: ", upper);
console.log("lower case: ", lower);

let substringOfBase = baseString.substring(0, 2);
console.log("substringOfBase: ", substringOfBase);
console.log("substringOfBase.charAt(0): ", substringOfBase.charAt(0));

