//Horse One//
let horseOneName = " Brandy ";
let horseOneAge = 8;
let isHorseInside = true;
let horseOneTraits = horseOneName + " is " + horseOneAge + " yearsold ";
let horseOneNickname = "Bibi"
let monthlyFee = 250; 
let lateFee = monthlyFee * 0.2;
let horseOneFavoriteSnack ="Oreo";

let welcomeMessage = "Welcome to my stables!";

let latePaymentMessage = " Your payment for " + 
horseOneName+ " is late! You owe $ " +
(monthlyFee + lateFee) + " ,or else ";

console.log(latePaymentMessage);
console.log(horseOneName + " is my first horse" + " and " + " his nickname is " + horseOneNickname + "!");
console.log(horseOneTraits + " Next year, he will be " + horseOneAge + 1);

//Horse Two//

let horseTwoName = "Garfield";
let horseTwoObj = {
  name: "Garfield",
  age: 9,
  nickname: "Fatty",
  favoriteSnack: "KitKat",
  location: isHorseInside,
  color: "brown",
  rent: monthlyFee,
};

let ishorseTwoinside = true;
let horseTwomonthBoarded = 4;
let boardingFeeMonthly = 200;
let latepaymentfee = " It will cost " + (boardingFeeMonthly*0.2) + 
  " for a late payment.";

console.log(horseTwoName + " is my second horse. ");
console.log(horseTwoObj);
console.log(" The board monthly fee will cost " + boardingFeeMonthly);
console.log(latepaymentfee);

//Horse Three//

let horseThreeName = "Patrick";
let ishorseThreeoutside = false;
let horseThreeFeemonthly = 400;
let horseThreeArr = ["Patrick", 7, "Patty"];

let horseThreeObj = {
  name: "Patrick",
  age: 7,
  nickname: "Patty",
  favoriteSnack: "Pringles",
  color: "pink",
  isInside: true,
  rent: monthlyFee,

}

console.log(" My third horse is " + horseThreeArr[0] +
  "," + "his age is " + horseThreeArr[1] + " yearsold " +
  " and his nickname is " + horseThreeArr[2]
);
console.log(horseThreeObj);

let Favoritesnack = ["Oreo", "KitKat", "Pringles"];
let horseIntro = "All horse's favorite snacks are in the fridge:" + 
  (Favoritesnack[0]) + "," + (Favoritesnack[1]) + " and " + (Favoritesnack[2]);

console.log(horseIntro);

let newHores = {
  name: "Taylor",
  nickname: "tt",
  age: 6,
  isInside: false,
  snacks: m&m,
  rent: 150,
  color: black,
  style: wearing white socks,
  
}

// Week 4 // INDEX start at 0, ARRAY always []

//let horseThreeName ="Lasagna";

//let horseNames = ["Brandy", "Mushroom", "Lasagna"];
//let horseAges = ["8", "9", "10"]

//console.log(horseNames.length);
//console.log(horseNames[2]); =

//let horseOne = ["Brandy", 8];

//console.log(
  //" My horse is named " + 
  //horseOne[0] + 
  //" and they are " + 
  //horseOne[1] + 
  //" years old! Next year will be " + 
  //(horseOne[1] + 1 + "." )
//)

//OBJECT for multiple things// EX: key:value = name:"blah" // 

//let horseArr = ["Garfield", 8, "Fatty"];

//let horseObj = {
  //name: "Garfield",
  //age: 8,
  //nickname: "Fatty"
//};

//console.log(horseObj.name); //prefer this type//

//horseObj.favoriteSnack = "Lays";
//horseObj["monthlyRent"] = 125;

//console.log(
  //" My horse is named " +
  //horseObj.name + 
  //" and they are " +
  //horseObj.age +
  //" years old!"
//);

