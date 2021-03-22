// FUNCTIONAL PROGRAMMING

// ARRAY of INTEGERS QUESTIONS

const numberArray = [1,2,3,4,5,6,7,8,9,10,20,65,30];

// 1 sum of all odd numbers

const sumOfOdd = (acc , curr) => {
    if(curr%2 !== 0 ) {
        acc += curr
    }
    return acc;
}
console.log('sum of odd integers are : - ',numberArray.reduce(sumOfOdd , 0))

//2 sum of all integer at odd indices

const sumOfIntegersAtOddIndices = (acc , curr , index) => {
        if(index%2 !== 0) {
            acc+=curr
        }
        return acc
}
console.log('sum at odd indices : - ', numberArray.reduce(sumOfIntegersAtOddIndices , 0))

//3 biggest number in the array

const biggestNumberInArray = (acc , curr) => acc > curr ? acc : curr;
console.log(`biggest number in the arrays is : - ${numberArray.reduce(biggestNumberInArray)}`)


//4 numbers divisible by 10
const numDivisibleBy10 = (curr) => curr%10 === 0;
console.log('number divisible by 10 are : - ' , ...numberArray.filter(numDivisibleBy10))

//5 Array of number where odd = odd+1 and even = even-1

const oddIncrementEvenDecrement = (curr) => curr % 2 === 0 ? curr = curr-1 : curr = curr+1;
console.log('updated array is' , numberArray.map(oddIncrementEvenDecrement))

//6 object with odd sum and even sum

const oddSumEvenSumObject = (acc , curr) => curr%2 === 0 ? {...acc , even : acc.even +curr} : {...acc , odd : acc.odd +curr};
console.log('odd sum even sum is : - ' , numberArray.reduce(oddSumEvenSumObject , {odd : 0 , even : 0}))


// ARRAY of STRINGS QUESTIONS
