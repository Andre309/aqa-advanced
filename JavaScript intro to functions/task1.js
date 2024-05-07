// function declaration

function sum(width, height) { 
    return width * height
}

console.log(sum(5,10));

//function expression

const sum1 = function(width, height) { 
    return width * height
    }
    
    console.log(sum1(4,10));


//arrow function,

const sum2 = (width, height) => {
    return width * height 
}

console.log(sum2(3,10));