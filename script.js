//1

for ( let i = 100; i <= 100; i++) {
    console.log(i);
}

//2

let i =0;
 while (i <= 50) {
    console.log(i);
    i++;
 }

 //3 

 let kindergartenChildren = ['Ia', 'Beqa', 'Giorgi', 'Nino', 'Aleqsandre',]; 
 kindergartenChildren.pop();
 console.log(kindergartenChildren);

 kindergartenChildren.push('Sandro');
 console.log(kindergartenChildren);

 kindergartenChildren.shift('ia');
 console.log(kindergartenChildren);

 kindergartenChildren.unshift('Kato');
 console.log(kindergartenChildren);

 //4
 let Array = [];

for (let i = 0; i <= 10000; i++) {
  newArray.push( i*i);
  console.log(newArray);     
}


//5
let numbers = [59, 10, 75, 298, 25]; 
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i]; 
}
console.log(sum); 


//6

let number = 6;
if(number % 2 !===0) {
    console.log('true') {
        else {
            console.log('false')
        }
    }
}


//7
function convertToLowerCase(upperCase) {
    return upperCaseString.toLowerCase();
  }
  let upperCase = 'MY NAME IS JOHN';
  let lowerCase = convertToLowerCase(upperCase);
  console.log(lowerCase); 
