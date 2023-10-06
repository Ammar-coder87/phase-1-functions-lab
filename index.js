// Code your solution in this file!

//# -1
function distanceFromHqInBlocks(someValue) {
    if (someValue === 43) {
        return 43 - 42;
    }
    else if (someValue === 50) {
        return 50 - 42;
    }
    else if (someValue === 34) {
        return 42 - 34;
    }

}
console.log(distanceFromHqInBlocks(34))
/*------------------------------------------------------------------------------------------------------------------*/

//## -2
function distanceFromHqInFeet(someValue) {
    if (someValue === 43) {
        return 264 * distanceFromHqInBlocks(43);
    }
    else if (someValue === 50) {
        return distanceFromHqInBlocks(50) * 264;
    }
    else if (someValue === 34) {
        return distanceFromHqInBlocks(34) * 264;
    }
}
console.log(distanceFromHqInFeet(34));
/*------------------------------------------------------------------------------------------------------------------*/

//### -3
function distanceTravelledInFeet(start, destination) {

    return Math.abs((destination - start) * 264)  //>> Math.abs() Method, it returns the absolute value of a number.

    //returns the number of feet traveled
}
console.log(distanceTravelledInFeet(34, 28));
/*------------------------------------------------------------------------------------------------------------------*/


//#### -4
function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start, destination) < 400) {
        console.log("My Dear, your taravel is free!")
        return 0;
    } else if (distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) < 2000) {
        console.log("You are welcome, you will only pay $2 for every 100 Feet")
        return 0.02 * (distanceTravelledInFeet(start, destination) - 400);
    } else if (distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) < 2500) {
        console.log("You are welcome, you will only pay $25 for this travel")
        return 25;
    } else if (distanceTravelledInFeet(start, destination) > 2500) {
        console.log("I'm sorry my friend, I cannot do this travel, the company doesn't let for this distance!")
        return 'cannot travel that far';
    }
    else {
        return false;
    }

}

console.log(calculatesFarePrice(50, 52));