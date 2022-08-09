
function getSomeName(){
    const passcode = [];
    for(let i=1; i<=50; i++){
        let numbers = i;
        if (numbers % 3 === 0 && numbers % 5 === 0){
            passcode.push(numbers, "foo & bar")
        }
        else if(numbers % 3 === 0){
            passcode.push(numbers, "foo");
        }
        else if (numbers % 5 === 0){
            passcode.push(numbers, "bar")
        }
    }
    return passcode;
}

const result = getSomeName();
console.log(result);





