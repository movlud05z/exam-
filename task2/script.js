function swapCase(string) {
    var swapped = '';
    for (var i = 0; i < string.length; i++) {
        var char = string.charAt(i);
        if (char === char.toUpperCase()) {
            swapped += char.toLowerCase();
        } else {
            swapped += char.toUpperCase();
        }
    }
    return swapped;
}


console.log(swapCase("aBcD"));        
console.log(swapCase("jAvaScRIPt"));  
console.log(swapCase("jeDAcAdemY"));  
