function plusCalculation(num1, num2){
    if(typeof num1 !== "number" || typeof num2 !== "number"){
        return "Please Enter a number";
    }
    return num1+num2;
}
result = plusCalculation(15, 44);
console.log(result);



