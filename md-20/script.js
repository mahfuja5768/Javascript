//  function inchToFeet(inches){
//     const feet = inches / 12;
//     return feet;
//   };
//   console.log('my height is',inchToFeet(144) , 'feet')



// function isEven(num){ // even or odd number
//     const reminder = num % 2;
//     // console.log(reminder)
//     if(reminder === 0){
//         // console.log('number is even')
//         return true;
//     }
//     else{
// //         console.log('number is odd')
// //     }
// // }
// const isMyNumberIsEven = isEven(32);
// console.log(isMyNumberIsEven);


// is the year is leap year::::::

function isLeapYear(year){
    const reminder = year % 4;
    if(reminder === 0){
        console.log('Yes! the', year , 'is a leap year..')
    }
    else{
        console.log('No! the', year , 'is not a leap year..')
    }
};
// isLeapYear(1600);


function getSumOfAnArray(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        sum += element;
        console.log( index, element, sum)
    }
    return sum;
}
// const myNums = [2, 4, 5, 3, 6, 7];
// getSumOfAnArray(myNums);


function getOddNumOfAnArray(nums){
    const oddNums = [];
    for(let i = 0; i < nums.length; i++){
        const index = i;
        const element = nums[index];
        if(element % 2 !== 0){  /// odd nums
            console.log(index, element);
            oddNums.push(element)
        }
    }
    return oddNums;
}

// const myNums = [2, 4, 5, 3, 6, 7];
// const oddNums = getOddNumOfAnArray(myNums);
// console.log(oddNums);
// const oddNumSum = getSumOfAnArray(oddNums);

// console.log('odd number sum:', oddNumSum );


// let sum = 0;
// for(let i = 1; i <= 7; i ++ ){
//     sum += i;
    // console.log(i, sum)
// };

// 1*2*3*4*5*6*7

// function factorial(number){
//     let result = 1;
//     for(let i = number; i >=1; i--){
//         result *= i;
//         console.log(i);
//     };
//     return result;
// };
// const number = 7;
// const fact = factorial(number);

// console.log ('factorial of:', number, 'is', fact);

// function factorial(number){
//     let i = number;
//     let result = 1;
//     while(i >=1){
//         result *= i;
//         console.log(i);
//         i--;
//     };
//     return result;
// // };
// const number = 7;
// const fact = factorial(number);

// console.log ('factorial of:', number, 'is', fact);

/////pblm: 1//////

// function findLeapYear(years){
//     let leapYears = [];
//     for(let i = 0; i < years.length; i++){
//         const index = i;
//         const year = years[index];
//         if(year % 4 === 0){
//             console.log(i, index, year);
//             leapYears.push(year)
//         };
//     };
// //     return leapYears;
// // };

// // const randomYears = [2023, 2024, 2025, 2028, 2030];
// // const leapYears = findLeapYear(randomYears);
// // console.log('Leap years are:', leapYears);


//pblm:2/////
function convertHourToMinutes(hours){
    const convertToMinutes = hours * 60;
    return convertToMinutes;
 };
let givenHour = 2;
let convertedMinutes = convertHourToMinutes(givenHour);
console.log(givenHour, 'hour contains', convertedMinutes, 'minutes');

