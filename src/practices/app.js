// let konutKredileri = ["Konut Kredisi", "Emlak Konut Kredisi", "Kamu Konut Kredisi"];

// konutKredileri.forEach(element => {
//     console.log(element);
// });

// for(let i = 0; i < konutKredileri.length; i++) {
//     console.log(konutKredileri[i])
// }


let student = { id: 1, name: "Tarık" }

let students = ["First Student", "Middle Student", "Last Student"]

function save(puan = 10, ogrenci) {
    // console.log(ogrenci.name + " : " + puan);
}

// If we sent undefined data to the save function, it means "Ben aslında yohum!" => I'm not even exist so, if we have a default value, then the value is gonna take this default value. 
save(undefined, student);
// console.log(students);

let students2 = [student, students];
// console.log(students2);