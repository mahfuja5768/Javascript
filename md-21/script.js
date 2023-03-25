  //convert to upper case && lower case::::

  const userName = 'myra islam';
  const userInput = 'myra Islam';
//   if(userName.toUpperCase() === userInput.toUpperCase()){
//     console.log('valid user')
//   }
//   else{
//     console.log('Invalid user')
//   }

///search: includes / indexOf / startsWith /endsWith

const alphabet = 'a, b, c, d, e, f, g';
// console.log(alphabet.includes('d'));

// console.log(alphabet.indexOf('b'));  ////indexOf

if(alphabet.indexOf('y') !== -1){
//     console.log('It exists inside the string.')
// }
// else{
//     console.log(`Sorry! can't find it!`)
}
 
    // console.log(alphabet.startsWith('a')); /////startsWith   
    // console.log(alphabet.endsWith('g')); /////endsWith



    ////slice /// split /// substring // lastIndexOf // concate || join

// const sentence = 'A quick brown fox jumps over the lazy dog';
// console.log(sentence.split(' ')); /// split by space
// console.log(sentence.split('')); /// split by empty
// console.log(sentence.slice(2, 7)); /// slice
// console.log(sentence.substring(2, 7)); /// substring
// console.log(sentence.lastIndexOf('dog')); /// lastIndexOf

// const sentence = ['A quick brown fox jumps', 'over the lazy dog'];
// console.log(sentence.join(' '));   /// substring

const sentence1 = 'A quick brown fox jumps';
const sentence2 = 'over the lazy dog';
const sentence = sentence1.concat(sentence2)
// console.log(sentence); //////// concat

const result = Math.pow(8, 2); //////// maaaaaaaaaath
// console.log(result);

const age1 = 25;
const age2 = 45;

const gap =Math.abs(age1-age2); ///////Math.abs
// console.log(gap);
// if(gap < 5){
//   console.log(`you guys should marry immedietly!`)
// }
// else{
//   console.log(`you guys should be apart!`)
// }


// const num = 2.5444;
// console.log(Math.round(num)); //////Math.round

// const num = 2.3444;
// console.log(Math.ceil(num)); //////Math.ceil

// const num = 2.5444;
// console.log(Math.floor(num)); //////Math.floor


// for(let i = 0; i < 20; i++){
//   const random = Math.round(Math.random()*6);
// //   console.log(random);
  
// // }


//swap::::
let first = 5;
let second = 7;

// let temp = first; /////temporary
// first = second;
// second = temp;
// console.log(first, second);
// [first, second] = [second, first] ////destructuring
// console.log(first, second);


/////who will get the cake:1
// let jim = 69;
// let dela = 97;
// if(jim > dela){
//   console.log(`jim will get the cake.`)
// }
// else{
//   console.log(`dela will get the cake.`)
// }


// /////who will get the cake:2
// let jim = 84;
// let dela = 99;
// let chinku = 177;

// if(jim > dela && jim > chinku){
//   console.log(`jim will get the cake.`)
// }
// else if(dela > jim && dela > chinku){
//   console.log(`dela will get the cake.`)
// }
// else{
//   console.log(`chinku will get the cake.`)
// };


/////who will get the cake:3 by function

// function getMax(numbers){
//   let maxNumber = numbers[0];
//   for(let i = 0; i <numbers.length; i++){
//     const index = i;
//     const element = numbers[index];
//     if(element > maxNumber){
//       maxNumber = element;
//     }
// //   }
//   // return maxNumber;
// // };

// let jim = 84;
// let dela = 99;
// let chinku = 177;
// let inputNums = [84, 99, 117];
// let maxNumber = getMax(inputNums);
// console.log(maxNumber);

let results = Math.max(84, 99, 177);
// console.log(results);
function getMax(jim, dela , chinku){
    
  if(jim > dela && jim > chinku){
  console.log(`jim will get the cake.`)
}
else if(dela > jim && dela > chinku){
  console.log(`dela will get the cake.`)
}
else{
  console.log(`chinku will get the cake.`)
};
  };
  
  let jim = 84;
  let dela = 99;
  let chinku = 177;
  // let inputNums = [84, 99, 117];
  // let maxNumber = getMax(inputNums);
  

// let inputNums = [84, 99, 117];
// console.log(Math.max(inputNums));



//find the largest number::::
// function getfattestOne(weights){
//   let fatBoy = weights[0];
//   for(let i = 0; i < weights.length; i++){ 
//     const index = i;
//     const element = weights[index];
//     if(element > fatBoy){
//       fatBoy = element;
//     }
//   };
//   return fatBoy;
// }
// let fatBoyweights = [60, 74, 54, 80, 75];
// let fattestBoy = getfattestOne(fatBoyweights);
// console.log(`the fattest boy's weight is : `, fattestBoy);


//find the lowest number::::
// function getSkinnitestOne(weights){
//   let skinnyBoy = weights[0];
//   for(let i = 0; i < weights.length; i++){ 
//     const index = i;
//     const element = weights[index];
//     if(element < skinnyBoy){
//       skinnyBoy = element;
//     }
//   };
//   return skinnyBoy;
// }
// let skinnyBoyWeights = [60, 74, 54, 40, 80, 75];
// let skinnyBoy = getSkinnitestOne(skinnyBoyWeights);
// console.log(`the skinny boy's weight is : `, skinnyBoy);

///reverse character::::
// function reverseString(text){
  
//   for(let i = text.length-1; i >= 0; i--){
//     const index = i;
//     const element = text[index];
//     console.log(element);
//   }
// }

// const myString = 'I am a good girl';
// reverseString(myString);


// ///reverse string::::
// function reverseString(text){
//   let reserved = '';
//   for(let i = text.length-1; i >= 0; i--){
//     const element = text[i];
//     reserved = reserved + element;
//     console.log(element, reserved);
//   }
//   return reserved;
// }

// const myString = 'I am a good girl';
// let reserved = reverseString(myString);
// console.log('reserved output is :', reserved);

///reverse word::::
function reverseString(text){
   const words = text.split(' ');
  //  console.log(words); ans::  [ 'I', 'am', 'a', 'good', 'girl' ]

     const result = [];
   for(let i = words.length-1; i >= 0; i--){
      const element = words[i];
      result.push(element);
   };
   const reserved = result.join(' ');
   return reserved;
}

// const myString = 'I am a good girl';
// let reserved = reverseString(myString);
// console.log('reserved output is :', reserved);



///fibonacci(dhara)::::

//[0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]//

// const fibo = [0, 1];
// for(let i = 2; i <= 12; i++){
//   fibo[i] = fibo[i-1] + fibo[i-2];
// };
// // console.log(fibo)
// // console.log(Array.isArray(fibo)) /////cheacking array(Array.isArray)
// console.log(fibo.includes(23)) /////includes
// console.log(fibo.indexOf(23)) /////indexOf



