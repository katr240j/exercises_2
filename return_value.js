"use strict";

function greeting(firstName)    {
    return `Hello ${firstName}`;
}


greeting("Peter");

console.log("Hi there!");

const result = greeting ("klaus");

console.log(result);

let someStuff = greeting("Pluto");

console.log(someStuff);

console.log(greeting("pluto"));

console.log(greeting()); 

const txt = `Greeting is ${greeting("a name")}`;
console.log(txt);

greeting("Is it me ?");

console.log(greeting("hi"));

Math.floor(Math.random()* greeting("is it me you are looking for?").indexOf("me"));

