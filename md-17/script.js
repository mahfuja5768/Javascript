// var friendsAge = [11, 33, 16, 32];
// console.log(friendsAge.length);

// var friendsAge = [11, 33, 16, 32]; //index element
// console.log(friendsAge[3]);

// var friendsAge = [11, 33, 16, 32]; // set element by index
// friendsAge[3] = 92;
// console.log(friendsAge);


// var friendsAge = [11, 33, 16, 32]; // find index position of element

// console.log(friendsAge.indexOf(16));


// var friendsAge = [11, 33, 16, 32];
// // friendsAge.push(100);// element push
// var removeElement = friendsAge.pop(); // element pop //seser ta remove kore
// // console.log(friendsAge);
// console.log(removeElement);

// var friendsAge = [11, 33, 16, 32]; //shift & unshift
// // friendsAge.unshift(10); // push first element
// // console.log(friendsAge);

// friendsAge.shift();  //remove first element
// console.log(friendsAge);


// console.log(5 < 6); //comparision
// console.log(5 == 6); 
// console.log(5 != 6); 
// console.log(5 != 5); 
// console.log(5 <= 6); 
// console.log(5 >= 2); 

// var dressPrice = 5000; //if else condition
// var myBudget = 5500;

// if(myBudget > dressPrice){
//     console.log(`I will buy the dress!!`)
// }else{
//     console.log(`I have not enough money to buy this dress!`)
// }



// var isGraduated = true; //multiple conditions
// var salary = 60000;
// var car = 0;

// if(isGraduated == true && salary >= 60000 || car >=1){
//     console.log(`You will able to marry Myra!`)
// }else{
//     console.log(`Sorry! you will not able to marry Myra!!`)
// }


// practice pblm::::

///1:
var fruits = [`apple`, `banana`, `orange`];
// var position = fruits.indexOf(`banana`);
// console.log(position);

// fruits[1] = `mango`; //replace
// console.log(fruits);

// var remove = fruits.pop();
// console.log(fruits); //remove

// var add = fruits.push(`watermelon`);
// console.log(fruits); //remove

 
// pblm:2:

// var score = 40;

// if(score >= 80){
//     console.log(`Congratulation! your grade is A`)
// }
// else if(score >= 60){
//     console.log(`Congratulation! your grade is B`)
// }
// else if(score >= 50){
//     console.log(`Congratulation! your grade is C`)
// }
// else if(score >= 40){
//     console.log(`Congratulation! your grade is D`)
// }
// else if(score <= 39){
//     console.log(`Congratulation! your grade is F`)
// }


// pblm:3:

// var num1 = 9;
// var num2 = 8;
// var num3 = 9;

// if(num1 == num2 || num2 == num3 || num3 == num1){
//     console.log(`The triangle is Isosceles!`)
// }


// pblm:4:find the largest number:

var num1 = 13;
var num2 = 79;
var num3 = 45;

if(num1 > num2){
    if(num1 > num3){
        console.log(num1)
    }else{
        console.log(num3);
    }
}
else{
    if(num2 > num3){
        console.log(num2)
    }else{
        console.log(num3)
    }
}
