// Find the maximum occurring character in given string...

// Hello World
// Output => 1

function getCharString(str){
    let counter = {}
    str.split("").forEach(element => {
       counter[element] = counter[element] ? counter[element] + 1 : 1;
    });
    
    let max = 0;
    let char;
    for(let n in counter){
        if(counter[n] > max){
            max = counter[n];
            char = n;
        }
    }

    return {char,max};
}

const result = getCharString("Hello World");
console.log("Maximum occurrance is:",result['char'],"and number of times:",result['max'])