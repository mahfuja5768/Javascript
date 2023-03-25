// function  startFan(){
//     console.log('go there')
//     console.log('press the switch')
// };
// startFan();
// console.log('give me a glass of water')
// startFan();

// function bringMango(money){
//     console.log('give me one kg Mango');
//     console.log('here is', money , 'taka')
// }
// bringMango(500);

function add(num1, num2){
    console.log('going to add:' , num1, num2);
}
// add(1, 4);


function add(num1, num2){
    console.log(num1, num2);
    var sum = num1 + num2;
    return sum;
    // console.log(sum);
}
// var total = add(5, 7);
// console.log(total);

function result(chem, math, eng){
    const total = chem + math + eng;
    const avarege = total / 3
    return avarege;
};

// var a = result(80, 80, 80);
// console.log(`your total avarege mark is :`, a );


// multiple objects:
var person = {
    name: 'Myra',
    job: 'std',
    country: 'bangladesh',
    mobile: 'realme'
};
// person.job = 'bla bla' //propertiese set
// console.log(person);

// console.log(person.job); //propertiese get 1

// var phn = person['mobile'];
// console.log(phn); //propertiese get 2

// var propertiese = Object.keys(person); //keys name
// console.log(propertiese);

// var propertiese = Object.values(person); //values name
// console.log(propertiese);

// object looping:

// var person = {
//     name: 'Myra',
//     job: 'std',
//     country: 'bangladesh',
//     mobile: 'realme'
// // };
// var keys = Object.keys(person); //keys name
// console.log(keys);

// var values = Object.values(person); //values name
// console.log(values);

// for(var propertyName in person){    ////* for in */
//     const value = person[propertyName];
//     console.log(propertyName, value);
// }

// switch:

// const color ='red'
// switch(color){
//     case 'green':
//         console.log('Wow the nature is green!');
//         break;
//     case 'blue':
//         console.log('Wow the sky is blue!');
//         break;    
//     case 'red':
//         console.log('Wow my dress is red!');
//         break;    
//     case 'gray':
//         console.log('my fav color is gray!');
//         break;    
//     case 'black':
//         console.log('my phn is black!');
//         break;    
//     default:
//         console.log('sorry!');
// }

// function foo(){
//     console.log(foo());
//     bar()
// };
// function bar(){

// }
// foo()


var arry = [11, 22, 3];


function makeAvg(array){
    var total = 0;
    var count = 0;

    array.forEach(function(item, index){
        total += item;
        count++;
//     });
//     return total / count;
// };
// // console.log(makeAvg(arry));



