"use strict";



const animals = [
    {
        name: "Mandu",
        type: "cat"
    },
    {
        name: "Mia",
        type: "cat"
    },
    {
        name: "Leeloo",
        type: "dog"
    },
    {
        name: "Scoobody",
        type: "dog"
    }
];

function compareName (a,b)   {
    if ( a.name < b.name )  {
        return -1;
    } else {
        return 1;
    }
}

function compareAnimals (a,b)   {
    if(a.name < b.name) {
        return -1;
    } else if (a.name === b.name ){
if(a.type < b.type) {
    return -1;
}
    } 
    return 1;
}

animals.sort( compareAnimals );
console.log(animals);
animals.sort( compareName );
console.log(animals);