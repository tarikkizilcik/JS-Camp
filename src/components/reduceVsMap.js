// -- Reduce vs Map -----
// Using reduce
const sampleReduce = [1, 2, 3, 4, 5].reduce(function (acc, current) {
    acc.push(current*current);
    return acc;
 }, [])

 console.log(sampleReduce)

 // Using map
 const sampleMap = [1, 2, 3, 4, 5].map(x => x * x)

 console.log(sampleMap);