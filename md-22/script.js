////slice, splice:
// const num = [0, 1, 2, 3, 4, 5, 6, 54, 75, 3, 53];
// // console.log(num.slice(2, 5)); // 2 er age cut bosabe r 5 er age cut bosabe index 0 theke count//orginal array k chng kore na
// // console.log(num)
// console.log(num.splice(2, 5, 100, 200))///will chng the orginal array// element add o kora jay
// // console.log(num)


///remove duplicate number::::::

// const names = ['abul', 'gbul', 'babul', 'babul','makbul', 'gbul', 'abul','abul', 'makbul'];
// function removeDuplicate(names){
//   let finalNames =[];
//   for(let i = 0; i < names.length; i++){
//      const name = names[i];
//      if(finalNames.includes(name) === false){
//       finalNames.push(name)
//      }
//   }
//   return finalNames;
// }
// let finalNames= removeDuplicate(names);
// console.log(finalNames)


 /* pblm::::
 1.show output from: 1-50, 
 2.if the number is disible by 3 then imstead of the number show foo
 3.if the number is disible by 5 then imstead of the number show bar
 3.if the number is disible by 3 & 5 then imstead of the number show foobar
 */

//  for(let i = 1; i <= 50; i++){
// //     if(i % 3 === 0 && i % 5 === 0){
// //         console.log("foobar")
// //     }
// //     else if(i % 3 === 0){
// //         console.log("foo")
// //     }
// //     else if(i % 5 === 0){
// //         console.log("bar")
// //     }
// //     else{
// //         console.log(i)
// //     }
// //  }



///find the expensive phn:::::
// let phones = [
//     {name: 'samsung', price: 36000},
//     {name: 'nokia', price: 44000},
//     {name: 'iphone', price: 82000},
//     {name: 'walton', price: 22000},
//     {name: 'xoami', price: 52000},
// ];

// function expensivePhon(phones){
//     let expensive = phones[0];
//     for(let i = 0; i < phones.length; i++){
//         const phone = phones[i];
//         if(phone.price > expensive.price){
//             expensive = phone;
//         }
//     }
//     return expensive;
// }
// let expensive = expensivePhon(phones);
// console.log(expensive)

// ///count the price of phns:::::
// let phones = [
//     {name: 'samsung', price: 36000},
//     {name: 'nokia', price: 44000},
//     {name: 'iphone', price: 82000},
//     {name: 'walton', price: 22000},
//     {name: 'xoami', price: 52000},
// ];
// function priceOfPhones(phones){
//     let sum = 0;
//     for(let i = 0; i < phones.length; i++){
//         const phone = phones[i];
//         sum += phone.price;
//         console.log(phone)
//     }
//     return sum;
// }
// let sum = priceOfPhones(phones);
// console.log('the total price is:', sum)


///count the price of phns:::::
let phones = [
    {name: 'samsung', price: 36000 , quantity: 2},
    {name: 'nokia', price: 44000   , quantity: 4},
    {name: 'iphone', price: 82000  , quantity: 1},
    {name: 'walton', price: 22000  , quantity: 2},
    {name: 'xoami', price: 52000   , quantity: 5},
];
function priceOfPhones(phones){
    let sum = 0;
    for(let i = 0; i < phones.length; i++){
        const phone = phones[i];
        const priceTotal = phone.price * phone.quantity;
        sum += priceTotal;
        console.log(phone)
    }
    return sum;
}
let sum = priceOfPhones(phones);
console.log('the total price is:', sum)