let buyProducts = [
    {name: "shirt", price: 1300},
    {name: "pant", price: 1800},
    {name: "shoes", price: 2200},
    {name: "balt", price: 700},
];

function totalCost(buyProducts){
    sumPrice = 0;
    for(let i=0; i<buyProducts.length; i++){
        singleProduct = buyProducts[i];
        sumPrice = sumPrice + singleProduct.price;
    }
    return sumPrice;
}
let result = totalCost(buyProducts);
console.log(result);


