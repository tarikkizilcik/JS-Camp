//Rest (geriye kalan parametres)
// let showProducts = function (id, test, ...Tarık) {
//     console.log(id);
//     console.log(test);
//     console.log(Tarık);
// }

// showProducts(10, ["Elma", "Armut", "Karpuz"], [1,2,3], [4,5,6,7]);

// console.log(typeof test);
// let test = (1,2,3);
//taking the bigges number
// console.log(Math.max(test))

//Spread
// let points = [1, 2, 3, 4, 50, 4, 60, 14];
// console.log(...points);
// console.log(Math.max(...points));
// console.log(..."ABC", "D", ..."EFG", "H");

//Destructuring => Assigning array elements to variables


let populations = [10000, 20000, 30000, [40000, 100000]];

// let [small, medium, high, [veryHigh, maximum]] = populations

// console.log(...populations);
// console.log(medium)
// console.log(high)
// console.log(veryHigh)
// console.log(maximum)

// function someFunction([small1, small2], number) {
//     console.log(small1, small2);
// }


// let category = [
//     { id: 1, name: "Kola" },
//     { id: 2, name: "Su" }];

// let category = { id: 1, name: "İçecek", test: "123", Tarık: "456" }
// console.log(category[0].name)
// console.log(category[1].name)
// console.log(category["name"])
// console.log(category[1])

// console.log(category[1].id)
// console.log(category.id)

// let { test, Tarık } = category;

// console.log(test, Tarık)

function findWord(word) {
    //let splitWord = word.split('');
    let splitWord = [...word];

    let findK = splitWord.find(word => word === "k");

    if (findK) {
        splitWord[0] = "k";
        console.log(splitWord);
    }
    else
        return console.log("there is no k in this word.");
}

findWord("Test");