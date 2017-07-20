// Goal:

 

// Demonstrate basic programming and JavaScript skills and understanding of objectives. Build familiarity with JavaScript syntax

// and conventions of basic programming.

 

// Assignment:

 

// Create a two dimensional array related to a subject that interests you. Output two of the items in sub-arrays to the console.

 

var myArray = [["Pele","Maradonna","Romario","El Primi"],["Offsides", "FreeKick", "Penalty", "Extra Time"]]

 

console.log(myArray[0][1]);

console.log(myArray[1][3]);

 

 

// Declare a function that takes a name as an argument, and returns a new string that compliments that person.

// For instance, passing it "Will" would return

// "I think that Will is a cool guy." Log the result to the console using 3 different names,

// but do not use console.log in the function, use the return value of the function instead!

 

function compliment(name){

                return "I think that " + name + " is a cool guy.";

}

 

 

 

// Print the classic "99 bottles of beer on the wall" song to the console, in its entirety, using a for loop.

// Then make a copy of that, and rewrite it to use a while loop instead. It should print out something like:

// > "99 bottles of beer on the wall, 99 bottles of beer..."

// > "Take one down, pass it around, 98 bottles of beer on the wall!"

// > "98 bottles of beer on the wall, 98 bottles of beer..."

// > "Take one down, pass it around, 97 bottles of beer on the wall!"

 

for (var beers = 99; beers > 0; beers--) {

                var lyrics = beers + " bottles of beer on the wall, "+ beers + " bottles of beer...\n" +

                "Take one down, pass it around, " + (beers - 1) + " bottles of beer on the wall!";

                console.log(lyrics);

}

 

var beers = 99;

 

while(beers > 0){

                var lyrics = beers + " bottles of beer on the wall, "+ beers + " bottles of beer...\n" +

                "Take one down, pass it around, " + (beers - 1) + " bottles of beer on the wall!";

 

                console.log(lyrics);

                beers--;

}

 

 

// Declare a function that takes in an array as an argument, and console logs out all of its elements backwards.

// Hint, for loops don't have to start with "for (var i = 0; i < array.length..."

// Grading criteria:

 

var arr = '0123456789'.split('');

 

function myFunc(arr) {

 

                for (var i = arr.length - 1; i >= 0; i--) {

                                console.log('this is the number',arr[i]);

                }

}