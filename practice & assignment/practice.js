////////feetToInch:

// function feetToInch(feet){
//     const inches = feet * 12;
//     return inches;
// };
// let inches = feetToInch(12);
// console.log(inches);


/////////centimeterToMeter:

// function centimeterToMeter(centimeter){
//     const meter = centimeter / 100;
//     return meter;
// }
// let meter = centimeterToMeter(12);
// console.log(meter);

//////countPaper:

function paperRequirements(pieceOfBook1, pieceOfBook2, pieceOfBook3,){
    
    for(let i = 0; i < paperRequirements.length; i++){
    const book1PaperNeed = 100;
    const book2PaperNeed = 200;
    const book3PaperNeed = 300;
    const yourBook1PaperNeeded = pieceOfBook1 * book1PaperNeed;
    const yourBook2PaperNeeded = pieceOfBook2 * book2PaperNeed;
    const yourBook3PaperNeeded = pieceOfBook3 * book3PaperNeed;
    const paperRequire = yourBook1PaperNeeded + yourBook2PaperNeeded + yourBook3PaperNeeded;
    return paperRequire;
    }
}
// let paperRequire = paperRequirements(2, 1, 2);
// console.log(paperRequire);


function onlyPositiveNumbers(numbers){
    let positiveNumbers = [];
    for(let i = 0; i < numbers.length; i++){
        const number = numbers[i];
        if(number < 0){
            break;
        }
        positiveNumbers.push(number)
    }
    return positiveNumbers;
}
// let arry = [45, 57, 32, 43, 54, -43, 21, 53];
// let positiveNumbers = onlyPositiveNumbers(arry);
// console.log(positiveNumbers);


///if the longest name is best friend then find the longest name:::: 
function bestFriend(names){
	let size = 0;
	let longWord = [];
	for(let i = 0; i < names.length; i++){
		const name = names [i];
		if(names[i].length >= size){
			size = names[i].length;
			if(longWord.length < names[i].length){
				longWord = [];
				longWord.push(names[i])
			}
		}
	}
	return longWord;
};
let givenNames = ["Robiul", "Mahfuja", "Myra", "Mun", "Robiul Islam"];
let longWord = bestFriend(givenNames);
console.log(longWord)


