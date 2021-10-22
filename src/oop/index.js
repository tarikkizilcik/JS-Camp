class Customer {
    constructor(id, customerNumber) {
        this.id = id;
        this.customerNumber = customerNumber;
    }
}

let customer = new Customer(1, "12345");
//prototyping
customer.name = "Tarık Kızılcık";
console.log(customer.name);

//static
Customer.bisey = "Test";
console.log(Customer.bisey)

console.log(customer.customerNumber);

//inheritence
class IndividualCustomer extends Customer {
    constructor(firstName, id, customerNumber) {
        super(id, customerNumber)
        this.firstName = firstName;
    }
}

class CorporateCustomer extends Customer {
    constructor(companyName, id, customerNumber) {
        super(id, customerNumber)
        this.companyName = companyName;
    }
}

let products = [
    { id: 1, name: "Acer Laptop", unitPrice: 15000 },
    { id: 2, name: "Asus Laptop", unitPrice: 16000 },
    { id: 3, name: "Hp Laptop", unitPrice: 13000 },
    { id: 4, name: "Dell Laptop", unitPrice: 12000 },
    { id: 5, name: "Casper Laptop", unitPrice: 17000 },
]

// console.log("<ul>")
// products.map(product => console.log(`<li>${product.name}</li>`))
// console.log("</ul>")

let filteredProducts = products.filter(product => product.unitPrice > 15000);

filteredProducts.map(product => console.log(product.name));

// console.log(filteredProducts);

let totalUnitPrice = products.reduce((total, product) => total + product.unitPrice, 0)

console.log(totalUnitPrice);

let totalUnitPriceWithKDV = products
    .filter(p => p.unitPrice > 13000)
    .map(p => {
        p.unitPrice = p.unitPrice * 1.18
        return p
    })
    .reduce((total, p) => total + p.unitPrice, 0);

console.log(totalUnitPriceWithKDV);

let MovieList = [
    { id: 0, name: "Lord of the Rings ", category: "Fantastic" },
    { id: 1, name: "Harry Potter ", category: "Fantastic" },
    { id: 2, name: "Kolpacino ", category: "Comedy" },
    { id: 3, name: "Last Vegas ", category: "Horror" },
    { id: 4, name: "Matrix ", category: "Science Fiction" },
    { id: 5, name: "Fast and Furious ", category: "Action" },
]

//Same result with different usage for filter and forEach
let firstFilteredMovieList = MovieList.filter(movie => movie.category == "Fantastic")
console.log(firstFilteredMovieList);

let secondFilteredMovieList = MovieList.forEach(movie => {
    if (movie.category == "Fantastic") {
        console.log(movie);
    }
});