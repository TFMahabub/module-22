// Remove duplicate index from an array-
function removeDuplicate(index){
    let unique = [];
    for(let i=0; i<index.length; i++){
        elements = index[i];
        if(unique.includes(elements) === false){
            unique.push(elements);
        }
    }
    return unique;
}

numbers = [14, 15, 13, 13, 16, 17, 18, 12, 16, 15, 16, 17];
result = removeDuplicate(numbers);
console.log(result);



