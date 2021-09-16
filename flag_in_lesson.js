"use strict";


// let areAllLessonsDone = true;
// console.log("areAllLessonsDone", areAllLessonsDone);
// const lessons = [
//     { sub: "french", done: true},
//     { sub: "patterns", done: true},
//     { sub: "french algorithms", done: false}
// ];

// //this searches if some lesssons are false, property.done is false
// //this tells us if one of the lessons is not done
// //if one of the lessons is false, then it changes every lesson to be false
// if (lessons,some((lesson)=>lessons.done === false) ) {

// areAllLessonsDone = false;


// }
// //^^ it is a simple way of using the flag
// //we set the variable, check if the variable... and set all the variables to smth...


let isItAleap = false;
let myNum = 2020;

if(myNum < 4)   {
    if(myNum % 4 == 0)  {
        isItAleap = true;
    } 
}
    


if(isItAleap)   {
    console.log(`${myNum} is under four and dividable 2`);
} else  {
    console.log(`${myNum} is NOT under four and dividable 2`);

}