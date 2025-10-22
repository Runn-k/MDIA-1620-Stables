//--------------------------------------- Assignment1 -----------------------------------------//

//HORSE ONE//
let horseOneObj={
  name: "Brandy",
  age: 8,
  nickname: "Bibi",
  color: black,
  favoriteSnack: "Oreo",
  isInside: true,
  rent: monthlyFee,
  lateFee: 300,
}

//HORSE TWO//
let horseTwoObj = {
  name: "Garfield",
  age: 9,
  nickname: "Fatty",
  color: "brown",
  favoriteSnack: "KitKat",
  isInside: true,
  rent: monthlyFee,
  lateFee: 200,
}

//HORSE THREE//
let horseThreeObj = {
  name: "Patrick",
  age: 7,
  nickname: "Patty",
  color: "pink",
  favoriteSnack: "Pringles",
  rent: "300",
  isInside: false,
  rent: monthlyFee,
  lateFee: 250,
}

//HORSE FOUR//
let horseFourObj = {
  name: "Taylor",
  age: 6,
  nickname: "tt",
  color: "brown",
  favoriteSnack: "Sourpatch",
  isInside: false,
  rent: monthlyFee,
  lateFee: 250,
}

//--------------------------------------- Assignment2 -----------------------------------------//

let numberOfStalls = 5;
let horseInStable = 4 
function printStallsAvailable(numberOfStalls, horseInStable) {
  console.log(
    " There are " + (numberOfStalls - horseInStable) + 
    " stalls that still available in the stables "
  );
}
printStallsAvailable(numberOfStalls, horseInStable);

function printLateFee(horse,rent,lateFee,) {
  let paidLate = rent + lateFee;
  console.log(horse.name + " is late, You owe " + paidLate + " dollars! ");
}

printLateFee(horseTwoObj, monthlyFee,lateFee);

function giveNickname(horse){
  return horse.nickname;
}


// TODO
// - move all the class work into a separate, and only keep the stables work (homework) in this file
// - tidy (make sure nothing extra)
// - open terminal in vscode (terminal menu, new)
// do a git status
// do git add stables.js
// do a git commit -m"updating stables with lab 2"
// do a git push
// submit a link to github through d2l