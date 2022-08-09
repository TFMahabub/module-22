//phone array-
let phone = [ 
    {company: "walton", camera: "15mp", price: 12000, storage: "32GB"},
    {company: "simphoney", camera: "12mp", price: 10000, storage: "24GB"},
    {company: "iphone", camera: "10mp", price: 45000, storage: "28GB"},
    {company: "HTC", camera: "18mp", price: 34000, storage: "22GB"},
    {company: "pixel", camera: "16mp", price: 18000, storage: "18GB"},
    {company: "itel", camera: "20mp", price: 9000, storage: "16GB"},
]

function cheapestPhone(phone){
    let lowestCamera = phone[0];
    for(let i=0; i<phone.length; i++){
        phoneIndex = phone[i];
        if (phoneIndex.camera < lowestCamera.camera){
            lowestCamera = phoneIndex;
        }
    }
    return lowestCamera;
}
result = cheapestPhone(phone);
console.log(result);


