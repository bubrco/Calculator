var expression = 'Type your math';

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
    
    let previousValue, previousChar, storedValue;
    let operation = null;
    let opIndex = 0;
    exprCharArr.forEach((char) => {
        if(!isNaN(char)){
            if(!isNaN(previousChar)){
                let temp = previousValue.toString().split('');
                temp.push(char);
                previousValue = parseInt(temp.toString())
                return;
            }
            previousValue = parseInt(char)
            return;
        } 
        
        storedValue = previousValue;
let num = 22
console.log(num.toString().split('').push(3) + ' sores')
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
    });

    if(operation != null)
        result = executeOperation(storedValue, operation, previousValue);
    else
        result = previousValue
console.log(result  )
    return result;
}

function addToExpression(value){
    if(expression === 'Type your math'){
        writeOutput(value);
        return;
    }
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

