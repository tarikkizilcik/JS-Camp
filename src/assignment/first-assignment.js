// ------- Task #1 -------

let findPrime = (...number) => {
    number.forEach(number => {
        if (number <= 1) {
            console.log(number + " is not a prime number.")
            return;
        }
        else {
            for (let i = 2; i < number; i++) {
                if (number % i == 0) {
                    console.log(number + " is not a prime number.")
                    return;
                }
            }
            console.log(number + " is a prime number.")
        }
    })
}
findPrime(1, 5, 6, 7, 13, 8);
findPrime(0);

console.log("-------")

// ------- Task #1 End -------

// ------- Task #2 -------

let findFriendsNumber = (friendNumbers) => {
    let toplam = 0;
    let toplamArray = [];
    for (let i = 0; i < friendNumbers.length; i++) {
        for (let x = 1; x < friendNumbers[i]; x++) {
            if (friendNumbers[i] % x == 0) {
                toplam = toplam + x;
            }
        }
        toplamArray.push(toplam);
    }
    let firstNumber = friendNumbers[0];
    let secondNumber = friendNumbers[1];

    if (toplamArray[0] == secondNumber && toplamArray[1] - toplamArray[0] == firstNumber) {
        console.log(firstNumber + " ve " + secondNumber + " durun siz kardessiniz!");
    }
    else {
        console.log(firstNumber + " ve " + secondNumber + " kardes sayi degilsiniz!");
    }
}
let friendNumbers = [220, 284];

findFriendsNumber(friendNumbers);

console.log("-------")
// ------- Task #2 End -------

// ------- Task #3 -------

let checkPerfect = () => {
    for (let i = 1; i < 1000; i++) {
        let total = 0;
        for (let z = 1; z < i; z++) {
            if (i % z == 0) {
                total += z;
            }
        }
        if (total == i) {
            console.log(i + " is a perfect number.");
        }

    }
}

checkPerfect();

console.log("-------")
// ------- Task #3 End -------

// ------- Task #4 -------

let numbers = [];
let getNumbers = (numbers) => {
    for (let i = 0; i <= 1000; i++) {
        numbers.push(i);
    }
    return numbers;
}
getNumbers(numbers);

let checkPrime = (number) => {
    if (number <= 1) {
        return false;
    }
    else {
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                return false;
            }
        }
        return true;
    }
}
checkPrime(numbers);

numbers.forEach(number => {
    let isPrime = checkPrime(number);

    if (isPrime) {
        console.log(number + " is a prime number.")
    }
})

// ------- Task #4 End -------