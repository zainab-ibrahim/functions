var fruitName = "mango";
console.log(fruitName);
function logFruitName() {
    console.log(fruitName);
}
logFruitName();
var fruitName1 = "banana";
function logFruitName1() {
    console.log(fruitName1);
}
logFruitName1();
var carName = "Toyota";
function logCarName() {
    console.log(carName);
}
logCarName();
//example1
var productName = "Inkpen";
function logproductName() {
    console.log(productName);
}
logproductName();
//example 02
// HalfFry
// 1Egg, 1.5 Butter ,2 salt
function halfFry(salt, butter) {
    var coocked = salt + butter + 1;
    return coocked;
}
console.log(halfFry(5, 8));
halfFry(1, 2);
halfFry(3, 5);
//example 03
// let dishesNames = "biryani", ""
function logDishesNames(desi, chinese, BBQ) {
    console.log(desi, chinese, BBQ);
}
logDishesNames("biryani", "chowmien", "malaiBoti");
