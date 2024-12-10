//jaascript variables and data types

// three  ways to  delare a variable var let const

//Data types 
//string:TEST ATA, WORS AN  SENTENCES
//Nuber
//Boolen {TRUE FALSE}
//Null:absence o any value
// undiined: a variable without any value
//json: javascript object notation
//Object:
//array:...its..a..group..o..variables


// let name = "uche"
// console.log(typeof name)    //note  Name an name is not same
// let age = 36

// let anotherAge = "20"
// console.log(anotherAge)
// console.log(typeof anotherAge)
// let house = "10"
// console.log("uche house type",typeof house)

// let UchesPlace = (house) 
// console.log("uches house number is", house + typeof UchesPlace + UchesPlace)

// console.log("concatination" + UchesPlace, house)


//boolen
// let isAvailable = true
// let isAnotherAgeNumber = false
// let isEaten = false

// console.log(isAvailable)
// console.log(typeof isAvailable)
// console.log(isEaten)


// let car = null
// console.log(typeof car)


//Jaascript Operators

// var a = 6
// var b = 4

// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a / b)
// console.log(a % b) //in Mathematics this function is called modulo or modulus, its used to find remender after diviing a number with a perticuler number...this good or supermarket or ecomas to calculate and know customers balance ater payment


//Modulos
//taalking BOUT Modulous or modulo when 1st number is smaller than second number it wwont divide but  return 1st answer
//tooverride this ine-comerce we write logic example

// let priceOfGoods = 120
// let customerPaid = 130

// console.log("your balance is", priceOfGoods % customerPaid) //this will return his answer as--- your balance is 120
// //to oerride this problem lets write a logic


// //function to oeride module by swapping less to higher logic
// function overideModulo (priceOfGoods , customerPaid){
//     if(priceOfGoods < customerPaid) {
//         [priceOfGoods, customerPaid] = [customerPaid , priceOfGoods]; //swaps the value
//     }

//     return priceOfGoods % customerPaid //perform modulo with the swapped value
// }

// customersGrossBalance = overideModulo(priceOfGoods , customerPaid);
// console.log("you balnce", customersGrossBalance);//expected behavior and answer is 10

// let ageUche = 25
// let houseNum = "56"

// console.log(ageUche * houseNum)

// let combine = ageUche * houseNum //type..wil..be..string..because

// let combine = ageUche * houseNum // type..will..be..number..because..ot..was..conerted..autoaticaly.to..number..because..of aition..NodeIterator..this.AbortController.toString..not..ading..but..geting..the..dirwct..DATA
// console.log(typeof combine)  //concatination

// let x = 6
// x += 5   //this..logic..means..add the alue of 5 to x whih is 6 total will be 11
// x -= 5  //this will be minusing 5 rom x which is 6an thswer will be 1
// console.log(x)


//comparism opeerato

let a = 7
let b = 4
let c = "7"
let d = 3

console.log(a > b)
console.log(a < b)
console.log(a == b) //equality
console.log(a == c) //equality
console.log(a === c) //equality checks both data value an atatype
console.log(a === d)
console.log(b != d) //not equaL operator //here != sign declared that b is not equal to d but  they are so the answer is no which is false if the  value changes it will be true because it wont be equal
console.log( typeof b)


//i can use it for pasword conifirmation etc

let enterpassword = "user12";
let confirmPassword = "user123";

if(enterpassword !== confirmPassword){
    console.log("try again");
}else{
    console.log("successul");
};


//using for store / ecommerce
// Object representing the available goods in the shop
// let availableGoods = {
//     Rice: { quantity: 100, pricePerUnit: 2 },
//     Beans: { quantity: 50, pricePerUnit: 1.5 },
//     Tomatoes: { quantity: 20, pricePerUnit: 0.5 }
// };

// // Example of a requested goods order
// let requestedGoods = {
//     Rice: 200, // number of units requested
//     Beans: 60,
//     Tomatoes: 25
// };

//using !== which  is or statement is wrong because you will checking direct keyword and value not as comparism..
//In JavaScript, comparing objects directly using !== or === checks if the references (memory locations) of the objects are the same, not their actual contents. Even if two objects have identical properties, they are not considered equal unless they refer to the same instance in memory
//Logic of the Condition: The !== operator here is checking if requestedGoods and availableGoods are different objects in memory, which they are. This means the condition will always be true, and your code will always print "your goods is available"


// if(requestedGoods !== availableGoods){
//     console.log("your goods is available")
// }else{
//     console.log("not available")
// }

//Solution:
//we use loop 'for' loop
//To check if all requested goods are available and in sufficient quantities, you need to loop through requestedGoods and verify each item against availableGoods


// Function to check if all requested goods are available in sufficient quantity
let availableGoods = {
    Rice: { quantity: 100, pricePerUnit: 2 },
    Beans: { quantity: 50, pricePerUnit: 1.5 },
    Tomatoes: { quantity: 20, pricePerUnit: 0.5 }
};

// Example of a requested goods order
let requestedGoods = {
    Rice: 10, // number of units requested
    Beans: 20,
    Tomatoes: 25
};
// Function to check if all requested goods are available in sufficient quantity
//in..tis..code..checkaailability..is..an..obect
//RICE,BEANS,ETC..are..keys
//quantity..and..price..are..properties
function checkAvailability(available, requested) {
    for (let item in requested) {
        // Check if the item exists in availableGoods and if the quantity is sufficient
        if (!available[item] || requested[item] > available[item].quantity) {
            console.log(`Not enough stock or item ${item} is unavailable.`);
            console.log(`we only have ${available [item]? available[item].quantity:0} ${item} in stock`)

            return false; // Exit the function if any item is not available or has insufficient stock
        }
    }
    console.log("Your goods are available.");
    return true; // All items are available in sufficient quantity
}

// Call the function
checkAvailability(availableGoods, requestedGoods);


//logical operators

// let p =true
// let q = false
// let r = false
// let s = true
// let t = false

// console.log(p && q) //false
// console.log(p || q)//true

// console.log(p && q && s)//false

// console.log(p || r || t)//true

// console.log(!p)//false
// console.log(!r)//true

// //conditional statement
// //IF else IF SWITCH

// let agex = 12

// if(agex = 18){
//     console.log("you are an auult")
// }else{
//     console.log("you are a teenager")
// }

// let ages = 12

// if(ages = 17){
//     console.log("you are an auult")
// }else if(ages < 18){
//     console.log("you are a teenager")
// }


// //note..when..one..coniton,,is..alse...all..turns..alse
// let agez = 12

// if(agez = 18){
//     console.log("you are an auult")
// }else if(agez < 18 && agez >= 13){
//     console.log("you are a teenager")
// }else{
//     console.log("you are a child")
// }


// let ageo = 12

// if(ageo = 18){
//     console.log("you are an auult")
// }else if(ageo < 18 || ageo >= 13){
//     console.log("you are a teenager")
// }else{
//     console.log("you are a child")
// }


// //switch statement
// let day = 5
// let dayName 

// switch (day){
//     case 1:
//         dayName = "Monday";
//         break;
//         case 2:
//             dayName = "Tuesay";
//             break;
//             case 3:
//                 dayName = "Wednesday";
//                 break;
//                 case 4:
//                     dayName = "Thurday";
//                     break;
//                     case 5:
//                     dayName = "Friday";
//                     break;
//                     case 6:
//                     dayName = "Saturday";
//                     break;
//                     case 7:
//                     dayName = "sunday";
//                     break;
                    
// }

// console.log(dayName)

// //LOOPS

// //Forloop
// //WHILE LOOP
// //DO..while loop

// //Forloop....it has three part
// //i..condition not eet o increement/decrement

// //example
// //this logic saya let i = 0
// //on the second run bc its a loop itwill repeat ++ by 1 process so i will become 1
// //now is 1 less than 6 yes ++ by 1 agaon to increase to 2
// //continues till it prints to 5
// //so the last one will say is 1 which  + 5 equal  to  6 yes then it stops runing 
// for(let i = 0; i < 6; i++){
//     console.log(i)
// } 



// for(let i = 0; i < 7; i++){
//     console.log(i)
// } 

// for(let i = 0; i <= 7; i++){
//     console.log(i)
// } 

// //WHILE loop

// let i = 0

// while(i < 5){
//     console.log(i)
//     i++
// }