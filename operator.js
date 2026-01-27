// * 3 type of operator
// * 1. arithmetic operator: +,-,*,/,%
// * 2. comperison operator: ==,===,>,<,>=,<=,<=,!=,!==
// * 3. logical operator: &&, ||, !

// arithmetic opertor
// let bangla = 90;
// let english = 70;

// console.log(bangla + english);
// console.log(bangla - english);
// console.log(bangla * english);
// console.log(bangla % english);
// console.log((bangla / english).toFixed(3));

// comparison operator: ***** always get boolean output
// let physics = 77
// let math = "77"
// == check only value
// console.log(phasics == math);

// === check value and  data type both
// console.log(physics===math);

// >, <, >=, <=, !=, !==
// let biology = 55;
// let ict = "55";
// console.log(biology<ict);
// console.log(biology>ict);
// console.log(biology<=ict)
// console.log(biology>=ict)

// console.log(biology != ict)
// console.log(biology !== ict)


// let oderAmount = 900;
// if(oderAmount>1000){
//     console.log("free delivery");
// } else{
//     console.log("delivery charge 80");
// }
let balance = 2000;
// let withdrawAmount =1500;
let withdrawAmount =2500;

if (withdrawAmount <= balance) {
    if (withdrawAmount % 500 == 0) {
        console.log("withdraw successful");
    }else {
        console.log("emter amount multiple of 500");
    }
} else {
    console.log("insufficient balance");
}
        
    

