const validArguments = (a, b) => {
    if(typeof a !== 'number' || typeof b !== 'number') return false;
    else return true;
}

const add = (a, b) => {
    if(validArguments(a,b)){
        return a + b;
    }
    return null;
}

const subtract = (a, b) => {
    if(validArguments(a,b)){
        return a - b;
    }
    return null;
}

const multiply = (a, b) => {
    if(validArguments(a,b)){
        return a * b;
    }
    return null;
}

const divide = (a, b) => {
    if(validArguments(a,b)){
        return a / b;
    }
    return null;
}

const calculator = {
    add,
    subtract,
    multiply,
    divide
}

export default calculator;