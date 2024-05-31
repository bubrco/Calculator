var expression = 0;

function executeOperation(value1, operation, value2){
    switch(operation) {
            case 'x':
                return value1*value2;
                
                break;
            case '-':
                return value1-value2;
                
                break;
            case '+':
                return value1+value2;
                
                
                break;
        }
        throw new Error('Operation not availiable');
}

function interpretExpression(exp){
    let exprCharArr = exp.split('');
    let result;
    
    let previousValue, previousChar = NaN, storedValue;
    let operation = null;
    let opIndex = 0, signal = 1;
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
            previous = executeOperation(storedValue, operation, previousValue);
            operation = null;
            storedValue = 0;
        } 

        switch(char) {
            case 'x':
                operation = 'x'
                break;
            case '-':
                operation = '-'
                break;
            case '+':
                operation = '+'
                break;
        }
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

function resolveExpression(){
    writeOutput(interpretExpression(expression));   
}

