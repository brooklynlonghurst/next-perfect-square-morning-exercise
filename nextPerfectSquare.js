//i.e. the number 95's next square would be 100 because that is 10 squared.

//take the square root of a number, add one, and then square it. 

//if parameter is not perfect square then -1 should be returned. 

function perfectSquare(num){
    let sqrtNum = Math.sqrt(num)
    if(Math.floor(sqrtNum) === sqrtNum){
        sqrtNum++
        let squareNum = sqrtNum * sqrtNum
        return squareNum
    } else {
        return -1 
    }
}

console.log(perfectSquare(3000))