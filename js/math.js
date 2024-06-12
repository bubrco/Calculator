var expression = 0;

function executeOperation(value1, operation, value2){
    switch(operation) {
            case 'x':
                return value1*value2;
                
            case '-':
                return value1-value2;
                
            case '+':
                return value1+value2;
                
            case '/':
                return value1/value2;
            
        }
    throw new Error('Operation not availiable');
}

function interpretExpression(exp){
    let exprCharArr = exp.split('');
    let result;
    
    let previousValue, previousChar = NaN, storedValue;
    let operation = null;
    let signal = 1;
    exprCharArr.forEach((char) => {
        if(!isNaN(char)){ // if it is a number
            if(!isNaN(previousChar)){ // if last char was a number
                let temp = previousValue.toString().split('');
                temp.push(char);
                previousValue = parseInt(temp.join(''))

                previousChar = char;
                return;
            }
            previousValue = parseInt(char) * signal
            previousChar = char;
            signal = 1;
            
            return;
        } 
        
        storedValue = previousValue;
        
        if(isNaN(previousChar)){ // first character is an operation
            if(char != '-') return;
            signal = -1;
            return;
        }

        if(operation != null){   //reached a digit without finishing operation
            console.log(storedValue + " " + operation + ' ' + previousValue)
            storedValue = executeOperation(storedValue, operation, previousValue);
            operation = null;
            previousValue = 0;console.log('cheguei em um digito mas n terminei, fiz: ' + storedValue + " antes:" + previousValue)
        } 

        operation = char;

        previousValue = 0
        previousChar = char;
        
});

    if(operation != null)
        result = executeOperation(storedValue, operation, previousValue);
    else
        result = previousValue
    return result;
}

function addToExpression(value){
    if(expression === 0) {writeOutput(value); return}
    
    writeOutput(expression+(''+value));
}

function writeOutput(value){
    let output = document.getElementById("output");
    expression = value;
    output.innerHTML = value;
}

function delFromExpression(){
    if(expression === 0) return;

    let result
    if(expression.length === 1) result = 0;
    else
    result = expression.slice(0,expression.length-1)
   
    writeOutput(result)
}

function resolveExpression(){
    writeOutput(interpretExpression(expression));   
}

