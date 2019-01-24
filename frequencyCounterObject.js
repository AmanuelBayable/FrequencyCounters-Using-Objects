//write a function that takes two sets of numbers, compares each value in the first set with the other and return true 

//if the first set contains the square root of all the values in the second set and no more
//input two sets of numbers
//[1,3,9] [1,4,7]
//edge
//what if the first set contains extra numbers
//what if the second set contains extra numbers

//what if the values are alphabets or numbers
//what if the first set containes two values that are the square root of one value in the second set
//what if the values are sets of alphabets
//output
//1,3,9 1,9,81 true
//1,3,9 1,4,5 false
//how
//check if setA and setB are equal
//for each value in set A, assign a key/value as value being key and frequency being value in ObjA
//{1:1,3:1,9:1} {1:1,9:1,81:1}
//for each value in set A, assign a key/value as value being key and frequency being value in ObjB
// for all values in ObjA
//if value in ObjA for keyA == value in ObjB for keyA Squared
//return true

function compareFrequnency(setA, setB) {
    var objA = {}
    var objB = {};
    if (setA.length !== setB.length) {
        return false
    };

    for (x of setA) {
        (objA[x] >= 1) ? objA[x]++: objA[x] = 1;
    }
    for (x of setB) {
        (objB[x] >= 1) ? objB[x]++: objB[x] = 1;
    }

    for (x in objA) {
        if (!(x ** 2 in objB)) {
            return false;
        }
        if (objB[x ** 2] !== objA[x]) {
            return false;
        }
    }
    console.log("Win");

}

// compareFrequnency([5, 5, 2, 3, 3], [25, 9,9, 4]);


//write a function that takes in two string inputs and determines if they have equal freq of words
//input strings - "iceman","cinema"
//numbers,empty set, emptystring
//output - return true

//how
function validAnagram(stringA, stringB) {
    //do something
    let objA = {};
    let objB = {};
    //return false if the strings are not equal, length wise
    if (stringA.length !== stringB.length) {
        return false;
    }
    //create an object for both strings, key/value would correspond to letter/freq for that string
    for (x of stringA) {
        (objA[x] >= 1) ? objA[x]++: objA[x] = 1;
    }
    for (x of stringB) {
        (objB[x] >= 1) ? objB[x]++: objB[x] = 1;
    }
    for (x in objA) {
        if (objA[x] !== objB[x]) {
            return false;
        }
    }
    console.log("an Anagram!!!");
    return true;
}
// take one object, loop over it
//for every key of a
// compare value of a with value of a as key in b
// if not equal return false
//else after loop return true and console(success)

//validAnagram("oy", "yo")

// write a function that takes in a sorted array of numbers that finds the first pair of numbers that sum to zero. return those numbers
// else return underfined is those terms don't exist.


//define
//take a sorted array, find a pair in the array that adds to zero, array is sorted
//input
//[-2,-1,0,1]
//output
//-1 and 1 add to zero
//how
//create pointers that shift from the far left and right
//start adding the values that are being pointed
//if the current values equals to zero, then console.log that
//else if the results yield a positve number it means (since its sorted) thier would be no number on the left that can sum to zero
//for the right pointer value, thus move the right pointer one step to the left and repeat process , if the sum comes up again to be
// negative then move left pointer up then repeat process
//sum constantly


// implement a function which takes in a sorted array and finds the number of unique values in the array, negative numbers can be in the array


//write a function that takes two sets of digits (numbers) and returns true if they have same freq.

//input 281 812 
//output true
//define
//
//turn into string
//compare the length of each digit/if not equal then return not
//have two objects for each input, divide each input to single numbers, and assign key/value with key being the digit and val being freq
//take objectA's key compare the value if objectA to objectB with same key
//loop over all key in objectA
//if all values are euqual return sameFreq else return not
//how

function sameFreq(A, B) {
    //doSomething
    var stringA = A.toString();
    var stringB = B.toString();
    if (stringA.length !== stringB.length) {
        console.log("diff length");
        return false;
    }
    var objA = {}
    var objB = {}
    for (var a of stringA) {
        objA[a] ? objA[a]++ : objA[a] = 1;
    }
    for (var b of stringB) {
        objB[b] ? objB[b]++ : objB[b] = 1;
    }

    for (var c in objA) {
        if (objA[c] !== objB[c]) {
            console.log("diff freq");
            return false;
        }
    }
    console.log("same frequency");
    return true;
}

//sameFreq(3333454,3454333)


//create a function called areTheirDuplicates which takes in a variable of arguements, and checks whether thier are duplicates

//input (1,2,3,3,'a');
//output false no duplicate
//define
//write a function that takes in several arguments and notifes if thier are any duplicates
//how
//create a funciton that takes in multiple arguments create an object, insert in the object a k/v corresponing to arguemnt/frequency
//for every key in objec if thier exist a value higher than one, return duplicate otherelse return false 

function areThierDuplicates(...args) {
    var objA = {};
    for (x of args) {
        objA[x] ? objA[x]++ : objA[x] = 1;
    }
    for (x in objA) {
        if (objA[x] > 1) {
            return true;
        }
    }
    return false
}
//areThierDuplicates('a', 1, 2, 3);
