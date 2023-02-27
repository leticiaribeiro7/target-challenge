function reverseString(str) {
    let newString = "";
    let i = str.length - 1;
    
    for (i; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

console.log(reverseString('string'));