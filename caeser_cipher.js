export default function caeserCipher(text, shiftFactor){
    let result = "";
    for(let index = 0; index < text.length; index++){
        result += shiftLetter(text.charAt(index), shiftFactor);
    }

    return result;
}

function shiftLetter(letter, shiftFactor){
    if(letter === " ") return " ";

    if(letter === "!") return "!";

    // check for z
    if(letter === 'z' && shiftFactor > 0){
        return String.fromCharCode(96 + shiftFactor);
    }

    // check for Z
    if(letter === 'Z' && shiftFactor > 0){
        return String.fromCharCode(64 + shiftFactor);
    }

    let letterNum = letter.charCodeAt(0);
    let shiftedLetter = String.fromCharCode(letterNum + shiftFactor);

    return shiftedLetter;
}