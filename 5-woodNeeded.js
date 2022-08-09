function getThePrice(chearQuantity, tableQuantity, bedQuantity){
    const chearWoodNeed = 3;
    const tableWoodNeed = 5;
    const bedWoodNeed = 8;

    sumWoodForChear = chearWoodNeed * chearQuantity;
    sumWoodFortable = tableWoodNeed * tableQuantity;
    sumWoodForbed   = bedWoodNeed   * bedQuantity;

    return [sumWoodForChear, sumWoodFortable, sumWoodForbed]
}


// Quantity-
let result = getThePrice(3, 5, 2);
console.log(result);

