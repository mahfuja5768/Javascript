///assignment ::::

// /1. radianToDegree:::

function radianToDegree(radianValue){
    if(typeof radianValue !== 'number'){
        return 'Please enter only numbers !'
    }
    else{
    const piValue = Math.PI;
    const convertedToDegree = radianValue * (180 / piValue);
    return convertedToDegree;
    }
    };
// let convertedToDegree = radianToDegree(0.344);
// console.log(convertedToDegree);


// 2. isJavaScriptFile true or false?

function isJavaScriptFile(fileName){
    if(typeof fileName !== 'number'){
        console.log('Please enter only strings!')
    }
     else{
        const splitWord = fileName.split(".");
        if(fileName.includes(".js")){
            console.log(true)
          }
          else{
              console.log(false)
          }
     }   
    }

// let fileName = "assignment.js";
// isJavaScriptFile(fileName);


// 3. calculate the total oil price that i have to pay::::
function oilPrice(amountOfDiesel, amountOfPetrol, amountOfOctane,){
    for(let i = 0; i < oilPrice.length; i++){
        const perLiterDiesel = 114;
        const perLiterPetrol = 130;
        const perLiterOctane = 135;
        const yourDieselCost = amountOfDiesel * perLiterDiesel;
        const yourPetrolCost = amountOfPetrol * perLiterPetrol;
        const yourOctaneCost = amountOfOctane * perLiterOctane;
        const totalOilPrice = yourDieselCost + yourPetrolCost + yourOctaneCost;
        return totalOilPrice;
        }
}
// let totalOilPrice = oilPrice(2, 1, 2);
// console.log(totalOilPrice);



// 4 . public bus fare::::

function publicBusFare(picnicGoingPerson){
    if(typeof picnicGoingPerson !== 'number'){
        return 'Please enter only numbers!'
    }
    else{
    const personGoingByBus = 50;
    const personGoingByMicroBus = 11;
    const personGoingByPublicBus = picnicGoingPerson - (personGoingByBus + personGoingByMicroBus);
    const publicBusFare = 250;
    const publicBusCost = personGoingByPublicBus * publicBusFare;
    return publicBusCost;
    }
};
// let publicBusCost = publicBusFare(65);
// console.log(publicBusCost);



// 5 . is best friend::::
let person1 = {name: 'Tom', friend: 'Rock'}
let person2 = {name: 'Rock', friend: 'Tom'}
function isBestFriend(person1, person2){
    if(person1['name'] === person2['friend'] && person2['name'] === person1['friend']){
        return true;
    }
    else{
        return false;
    }
}
let answer = isBestFriend(person1, person2);
console.log(answer)



