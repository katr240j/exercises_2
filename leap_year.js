"use strict";


let year = 2010;
function isLeapYear(year)   {
    if (year % 100 ==0) {
        if(year % 400 == 0)  {  
            return true;
    }else   {
        return false;
    }
} else  {
   if(year % 4 == 0)  {
       return true;
} else  {
    return false;
}
}
}

const LeapYear = isLeapYear(year);
console.log(`${year} is a leap year: ${LeapYear}`);

    

//solution with the flag :

let leapFlag = false;
const yearFlag = 2003;

if ( yearFlag % 100 == 0)   {
    if( yearFlag % 400 == 0)   {
        leapFlag = true;
    } 
} else if (yearFlag % 4 == 0)   {
    leapFlag = true;
}

console.log(`${yearFlag} is ${leapFlag? "" : "NOT"} a leap year`);