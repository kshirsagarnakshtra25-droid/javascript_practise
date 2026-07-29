
// Q1

// function analyzeNumber(num) {
//     if (num === 0) {
//         return "Zero";
//     } 
//     else if (num < 0) {
//         return "Negative";
//     } 
//     else if (num % 2 === 0) {
//         return "Positive Even";
//     } 
//     else {
//         return "Positive Odd";
//     }
// }

// // Example
// console.log(analyzeNumber(0));   // Zero
// console.log(analyzeNumber(-5));  // Negative
// console.log(analyzeNumber(8));   // Positive Even
// console.log(analyzeNumber(7));   // Positive Odd

// Q2

// function getTicketPrice(age) {
//     if (typeof age !== "number" || age < 0) {
//         return "Invalid age";
//     } 
//     else if (age < 12) {
//         return "$8";
//     } 
//     else if (age <= 59) {
//         return "$15";
//     } 
//     else {
//         return "$10";
//     }
// }


// console.log(getTicketPrice(-5));  
// console.log(getTicketPrice(8));   
// console.log(getTicketPrice(25));  
// console.log(getTicketPrice(60));  
// console.log(getTicketPrice("20")); 


// Q3. Leap Year Identifier
//  function isLeapYear(year)
//   {
//     if (year % 400 === 0)
//          {
//            return true;
//          }
//           else if (year % 100 === 0)
//            {
//              return false;
//            }
//             else if (year % 4 === 0)
//                  {
//                    return true;
//                 }
//                  else
//                      {
//                        return false;
//                        }
// }


// console.log(isLeapYear(2000)); 
// console.log(isLeapYear(1900)); 
// console.log(isLeapYear(2024)); 



// Q4. Simple Calculator using Switch
// function calculate(a, b, operator) {
//     switch (operator) {
//         case "+":
//             return a + b;

//         case "-":
//             return a - b;

//         case "*":
//             return a * b;

//         case "/":
//             if (b === 0) {
//                 return "Cannot divide by zero";
//             }
//             return a / b;

//         default:
//             return "Invalid Operator";
//     }
// }


// console.log(calculate(10, 5, "+")); 
// console.log(calculate(10, 5, "-")); 
// console.log(calculate(10, 5, "*")); 
// console.log(calculate(10, 5, "/")); 
// console.log(calculate(10, 0, "/")); 


//Q5. E-commerce Discount & Shipping Calculator

// function calculateTotal(orderAmount, isVIPMember) {
//     let discount = 0;
//     let shipping = 0;

//     if (orderAmount >= 100) {
//         if (isVIPMember) {
//             discount = 20;
//         } else {
//             discount = 10;
//         }
//         shipping = 0;
//     } else {
//         if (isVIPMember) {
//             discount = 10;
//             shipping = 5;
//         } else {
//             discount = 0;
//             shipping = 10;
//         }
//     }

//     let total = orderAmount - (orderAmount * discount / 100);
//     total = total + shipping;

//     return total;
// }

// // Example
// console.log(calculateTotal(150, true));   // 120
// console.log(calculateTotal(150, false));  // 135
// console.log(calculateTotal(80, true));    // 77
// console.log(calculateTotal(80, false));   // 90


// Q6. User Display Name Resolver
function getUserDisplayName(user) {

    if (user == null) {
        return "Guest User";
    }

    if (user.nickname && user.nickname !== "") {
        return user.nickname;
    }

    if (user.fullName && user.fullName !== "") {
        return user.fullName;
    }

    return "Guest User";
}

// Example
console.log(getUserDisplayName({ nickname: "Sam", fullName: "Samuel Roy" }));
// Sam

console.log(getUserDisplayName({ fullName: "Samuel Roy" }));
// Samuel Roy

console.log(getUserDisplayName({}));
// Guest User

console.log(getUserDisplayName(null));
// Guest User