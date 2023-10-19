export default function analyzeArray(arr){
    return {
        average : avg(arr),
        min : min(arr),
        max : max(arr),
        length : length(arr)
    }
}

function avg(arr){
    let sum = arr.reduce((prev, current) => prev + current, 0);
    return sum / arr.length;
}

function min(arr){
    let min = arr[0];
    for(let num of arr){
        if(num < min){
            min = num;
        }
    }
    return min;
}

function max(arr){
    let max = arr[0];
    for(let num of arr){
        if(num > max){
            max = num;
        }
    }
    return max;
}

function length(arr){
    return arr.length;
}