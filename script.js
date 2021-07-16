// JAVASCRIPT


// var list = document.getElementById("framework").options;
// var list2 = document.getElementById("framework2");


// // for (let i = 0; i < list.length; i++) {
// //   console.log(list[i]);             //log the value
// // }

//  console.log (list)
// console.log(list2)

// A

const superheroes = [
  { name: "Batman", alter_ego: "Bruce Wayne" },
  { name: "Superman", alter_ego: "Clark Kent" },
  { name: "Spiderman", alter_ego: "Peter Parker" }]

// Hier komt jouw functie

const findSpiderMan = superheroes.find((item) =>{ 
return item.name === "Spiderman"

 }); 

console.log(findSpiderMan)
  // Find Spiderman
  // result should be: {name: "Spiderman", alter_ego: "Peter Parker"}


// B

const doubleArrayValues = function (array) {
  let newArray = [];
  array.forEach(number => {
    newArray.push(number * 2);
  });
  return newArray;
};

console.log("double", doubleArrayValues([1, 2, 3 ]));

// doubleArrayValues([1, 2, 3])
// result should be [2, 4, 6]

// C

const test1 = ([1, 4, 3, 6, 9, 7, 11])
// result should be true
const test2 = ([1, 2, 1, 2, 1, 2])
// result should be false

const containsNumberBiggerThan101 = test1.some((item) => { return item > 10 

});

console.log (containsNumberBiggerThan101);

const containsNumberBiggerThan102 = test2.some((item) => {
  return item > 10

});

console.log(containsNumberBiggerThan102);

// D

const test3 = (['Canada', 'France', 'Germany', 'Italy', 'Japan', 'United Kingdom', 'United States'])

const isItalyInTheGreat7 = test3.some ((item) => { return item === "Italy"

});

console.log (isItalyInTheGreat7);
// result should be true

// E


const tenfold = function (item) {
  let tenfold1 = [];
  item.forEach (number => { tenfold1.push(number*10);
  });
  return tenfold1;
};

console.log("tenfold", tenfold([1, 4, 3, 6, 9, 7, 11]));

  // result should be [10, 40, 30, 60, 90, 70, 110]

  // F

const test5 = ([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98])

const isBelow100 = test5.every((item) => { return item > 100  });

console.log(isBelow100)
  // result should be: false

  // G

const test6 = ([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234])

const total = test6.reduce ((currentTotal, item ) => { return item + currentTotal } , 0 )

console.log(total)
  // result should be 1118