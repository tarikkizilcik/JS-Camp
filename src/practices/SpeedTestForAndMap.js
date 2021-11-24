// speed test between for and map functions

//Eleman sayısı 10000 olan ve 0 ile 10000 arasında rastgele sayılardan oluşan bir dizi oluşturup; dizi içinde tek sayı olan elamanın yerine ‘tek’, çift sayı olan elemanın yerine ‘çift’ yazalım. ([5,46,13] →[‘tek’, ‘çift’, ‘tek’]). Aynı işlemi ‘for’ döngüsü ile yapıp hız testi yapalım.

const randomNumbers = Array.from({ length: 10000 },
    () => Math.floor(Math.random() * 10000))

let t1 = performance.now();

let tempNumbers = randomNumbers.map(number => {
    return number % 2 == 0 ? 'Even' : 'Odd'
})

let t2 = performance.now();
console.log("map sonuç süre:" + (t2 - t1).toFixed(5));

tempNumbers = [];
t1 = performance.now();
for (const x of randomNumbers) {
    tempNumbers.push(x % 2 === 0 ? 'Even' : 'Odd');
}

t2 = performance.now();
console.log("for sonuç süre:" + (t2 - t1).toFixed(5));

// console.log(tempNumbers);

// randomNumbers array'imizi manipüle ederek iki farklı fonksiyon ile 
// yeniden oluşturup aralarında ki zamana bakıyoruz.