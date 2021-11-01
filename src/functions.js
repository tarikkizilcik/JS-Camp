function addToCart(productName = "Elma", quantity = 5) {
    console.log(quantity + " adet " + productName + " sepete eklendi!");
}

// addToCart();
// addToCart("Armut", 10);
// addToCart("Çilek", 5);

// two different usage of function
let sayHello = () => {
    console.log("Hello World!")
}
// sayHello();

let sayHello2 = function () {
    console.log("Hello World2!")
}
// sayHello2();

function addToCart2(productName, quantity, unitPrice) {

}
addToCart2("Elma", 5, 10)
addToCart2("Armut", 2, 20)
addToCart2("Limon", 3, 15)

let product1 = { productName: "Elma", unitPrice: 10, quantity: 5 };
let product2 = { productName: "Armut", unitPrice: 20, quantity: 2 };

product1 = product2;
product1.productName = "Karpuz";
// console.log(product2.productName);

function addToCart3(product) {
    console.log("Ürün: " + product.productName + "\nBirim Fiyati: " + product.unitPrice + "\nAdet: " + product.quantity);
}

// addToCart3(product1)
// addToCart3(product2)

function addToCart4(x) {
    console.log(products)
}
let products = [
    { productName: "Elma", unitPrice: 10, quantity: 5 },
    { productName: "Armut", unitPrice: 20, quantity: 2 },
    { productName: "Çilek", unitPrice: 30, quantity: 10 }
]
// addToCart4(products)

//If we have more than one parameters, then we should write to the end of our parameters.
function add(sth, ...numbers) { //rest
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        // console.log(numbers[i]);
        total = total + numbers[i];

    }
    console.log(total);
    console.log(sth);
}

// add(20, 30)
// add(20, 30, 40)
// add(20, 30, 40, 50)

let numbers = [20, 30, 50, 100]
// console.log(Math.max(...numbers))

let [icAnadolu, marmara, karadeniz, [icAnadoluSehirleri]] = [
    { name: "İç Anadolu", population: "20M" },
    { name: "Marmara", population: "30M" },
    { name: "Karadeniz", population: "10M" },
    [
        ["Ankara", "Konya"],
        ["İstanbul", "Bursa"],
        ["Sinop", "Trabzon"]
    ]
]

// console.log(icAnadolu.name + " " + icAnadolu.population);
// console.log(marmara);
// console.log(icAnadoluSehirleri);

let newProductName, newUnitPrice, newQuantity

({ productName: newProductName, unitPrice: newUnitPrice, quantity: newQuantity } = { productName: "Elma", unitPrice: 10, quantity: 5 })

console.log(newProductName);
console.log(newUnitPrice);
console.log(newQuantity);