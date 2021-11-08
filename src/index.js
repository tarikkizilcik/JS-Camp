class Customer {
    constructor(id, customerNumber) {
        this.id = id;
        this.customerNumber = customerNumber;
    }
}

let customer = new Customer(1, "123");
//prototyping
customer.name = "Tarık Kızılcık";
// console.log(customer.name);

//static
Customer.test = "Test";
// console.log(Customer.test)

// console.log(customer.customerNumber);

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

let vatanBilgisayar = [
    { id: 1, name: "Acer Laptop", unitPrice: 15000 },
    { id: 2, name: "Asus Laptop", unitPrice: 16000 },
    { id: 3, name: "Hp Laptop", unitPrice: 13000 },
    { id: 4, name: "Dell Laptop", unitPrice: 12000 },
    { id: 5, name: "Casper Laptop", unitPrice: 17000 },
]

// vatanBilgisayar.map(laptop => console.log("Ürün Id: " + laptop.id + "\n" + "Ürün Etiket Fiyatı: " + laptop.unitPrice))

let filteredProducts = vatanBilgisayar.filter(laptop => laptop.unitPrice > 15000);

// filteredProducts.map(laptop => console.log(laptop.name));

// console.log(filteredProducts);

let totalUnitPrice = vatanBilgisayar.reduce((toplam, laptop) => toplam + laptop.unitPrice, 0)

// console.log(totalUnitPrice);

let kdvliTutar = vatanBilgisayar
    .filter(laptop => laptop.unitPrice > 13000 && laptop.unitPrice != 15000 && laptop.unitPrice != 17000)
    .map(laptop => {
        laptop.unitPrice = laptop.unitPrice * 1.18
        return laptop
    })
    .reduce((total, laptop) => total + laptop.unitPrice, 0);

// console.log(kdvliTutar);

// let MovieList = [
//     { id: 0, name: "Lord of the Rings ", category: "Fantastic" },
//     { id: 1, name: "Harry Potter ", category: "Fantastic" },
//     { id: 2, name: "Kolpacino ", category: "Comedy" },
//     { id: 3, name: "Last Vegas ", category: "Horror" },
//     { id: 4, name: "Matrix ", category: "Science Fiction" },
//     { id: 5, name: "Fast and Furious ", category: "Action" },
// ]

//Same result with different usage for filter and forEach
// let firstFilteredMovieList = MovieList.filter(movie => movie.category == "Fantastic")
// console.log(firstFilteredMovieList);

// let secondFilteredMovieList = MovieList.forEach(movie => {
//     if (movie.category == "Fantastic") {
//         console.log(movie);
//     }
// });


// let MovieList = [
//     { id: 0, name: "Lord of the Rings ", category: "Fantastic" },
//     { id: 1, name: "Harry Potter ", category: "Fantastic" },
//     { id: 2, name: "Kolpacino ", category: "Comedy" },
//     { id: 3, name: "Last Vegas ", category: "Horror" },
//     { id: 4, name: "Matrix ", category: "Science Fiction" },
//     { id: 5, name: "Fast and Furious ", category: "Action" },
// ]

// let Movifilter = MovieList.find(film => film.id == 2)
// console.log(Movifilter)

// console.log(class1);

// console.log(küme);

// let totalPrice = vatanBilgisayar.reduce((total, laptop) => total + laptop.unitPrice, 0)
// console.log(totalPrice);


var a = 1;
var a = 2;
let b = 2;
// let b = 6;
{
    a = 3;
    b = 4;
    var c = 5;

}


// console.log(a, b, c);

