let cart = [
    { id: 1, productName: "Telefon", quantity: 3, unitPrice: 4000 },
    { id: 2, productName: "Bardak", quantity: 2, unitPrice: 30 },
    { id: 3, productName: "Kalem", quantity: 1, unitPrice: 20 },
    { id: 4, productName: "Sarj Cihazı", quantity: 2, unitPrice: 100 },
    { id: 5, productName: "Kitap", quantity: 3, unitPrice: 30 },
    { id: 6, productName: "Pot", quantity: 5, unitPrice: 150 }
]
// cart.map(product => {
//     console.log(product.productName + " : " + product.unitPrice * product.quantity)
// });

const square = x => x * x
// console.log([1, 2, 3, 4, 5].map(square))

let quantityOver2 = cart.filter(product => product.quantity > 2);

// console.log(quantityOver2)

let total = cart.reduce((acc, product) => acc + product.unitPrice * product.quantity, 0)
// console.log(total);


// console.log(cart);

function addToCart(sepet) {
    sepet.push({ id: 7, productName: "Ruhsat", quantity: 1, unitPrice: 20 })
}

addToCart(cart);

// console.log(cart);

let sayi = 10;

function sayiTopla(number) {
    number += 1
}
sayiTopla(sayi);
// console.log(sayi)


// --------------------------

let vatanBilgisayar = [
    { id: 1, name: "Acer Laptop", unitPrice: 15000, quantity: 5 },
    { id: 2, name: "Asus Laptop", unitPrice: 16000, quantity: 4 },
    { id: 3, name: "Hp Laptop", unitPrice: 13000, quantity: 3 },
    { id: 4, name: "Dell Laptop", unitPrice: 12000, quantity: 2 },
    { id: 5, name: "Casper Laptop", unitPrice: 17000, quantity: 1 },
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

// MAP ORNEK 
// const kisiler = [
//     { id: 1, adi: 'Ahmet', soyadi: 'Yüksekseslekonuşma', yas: 15, cinsiyet: 'Erkek', unvan: 'Öğrenci', puan: 65 },
//     { id: 2, adi: 'Sultan', soyadi: 'Hayvanlarısev', yas: 32, cinsiyet: 'Kadın', unvan: 'Öğretmen', puan: 75 },
//     { id: 3, adi: 'Hatiçe', soyadi: 'Çimenlerebasma', yas: 26, cinsiyet: 'Kadın', unvan: 'Doktor', puan: 85 },
//     { id: 4, adi: 'Ali', soyadi: 'Yerleretükürme', yas: 26, cinsiyet: 'Erkek', unvan: 'İşçi', puan: 75 },
//     { id: 4, adi: 'Kamuran', soyadi: 'Kurallarauy', yas: 52, cinsiyet: 'Kadın', unvan: 'Hemşilre', puan: 85 }
// ];

// getAges(kisiler);

// const oddNumbers = sayilar.filter(sayi => sayi % 2 == 1)

const persons = [
    { id: 0, name: 'Ahmet', surname: 'As', age: 29, job: 'Developer' },
    { id: 1, name: 'Emirhan', surname: 'Aydin', age: 28, job: 'Team Lead' },
    { id: 3, name: 'Tarik', surname: 'Kizilcik', age: 27, job: 'Developer' }
]
// ---------
//map()
// if job is developer then change it as a coder

// const sample = persons.map(({id, name}) => ({id, name})) (Destructuring)

// const sayilar = Array.from({length: 10}, (v,k) => k * 10)

// const sample = sayilar.map(sayi => ({sayi, cift: sayi % 2 == 0}) )

// const changer = (kisiler) => {
//     console.log(kisiler.map(person => {
//         person.job == 'Developer' ? person.job = 'Coder' : person.job = person.job;

//         return person.job;
//     }))
// }
// changer(persons);

// const newPersons = (kisiler) => {
//     console.log(
//         kisiler.map(person => ({id: person.id, surname: person.surname}))
//     )
// }
// console.log(persons)
// newPersons(persons);
// ---------
// filter()
// if age > 27 return this.element

// const filterAge = (kisiler) => {
//     console.log(
//         kisiler.filter(person => person.age > 27)
//         .map(person2 => {
//             person2.age = 25;

//             return person2;
//         })
//         .reduce((total, person) => {
//             return total += person.age
//         }, 0)
//     )
// }

// filterAge(persons)

//------
//reduce()
// sum of person's ages

// const sumOfPersonsAges = (kisiler) => {
//     console.log(
//         kisiler.reduce((total, person) => {
//             return total += person.age
//         }, 0)
//     )
// }

// sumOfPersonsAges(persons)

// sample(persons)

// const digits = Array.from({ length: 100 },
//     () => Math.floor(Math.random() * 100));

// console.log(digits)

const digits = Array.from({length: 100}, () => Math.floor(Math.random() * 100))

// console.log(digits)

const changer = (sayilar) => {
    console.log(
        sayilar.filter(number => number % 2 == 0)
        .reduce((total, number) => total += number, 0)
    )
    const temp = () => "ss"
    console.log(temp());
}
changer(digits)