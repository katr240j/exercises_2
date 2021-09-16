"use strict";



/* function doSomethingWithName (name) {


    if(typeof name === "number")     {
return "error"
    
}
    //takes whatever first letter to uppercase 
    return name[0].toUpperCase();

    console.log("this will never happen");
}
 */

const rightName = "kAtrin"; 
const name = getNameRight(rightName);
console.log(name);

function getNameRight(rightName){

 

let upperName = rightName[0].toUpperCase(); 
let lowerName = rightName.substring(1).toLowerCase();
return {upperName,lowerName}; 

}


