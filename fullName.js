"use strict";


//const fullName = "Peter Heronimous Lind";
const fullName = "ka tr in mar dottir";


//const firstName = fullName.substring(0, fullName.indexOf(' '));
//console.log(`the first name of ${fullName} is _${firstName}_`);

////const middleName = fullName.substring(fullName.indexOf(' ')+1,fullName.lastIndexOf(' '));
//console.log(`the second name of ${fullName} is _${middleName}_`);

//const lastName = fullName.substring(fullName.lastIndexOf(' '));
//console.log(`the second name of ${fullName} is _${lastName}_`);

//variable sem ég læt vera functionið

const name = getNameParts(fullName);
console.log(name);
function getNameParts (fullName)    {
   
    const firstName = fullName.substring(0, fullName.indexOf(' '));
    const middleName = fullName.substring(fullName.indexOf(' ')+1,fullName.lastIndexOf(' '));
    const lastName = fullName.substring(fullName.lastIndexOf(' '));

    return {firstName,middleName,lastName};

}

