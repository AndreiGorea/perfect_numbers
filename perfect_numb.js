let n = +(prompt('Enter a positive number: '));
let sum = 0;
if (n < 1)
    console.log(`The number ${n} is not a positive number`);
else {
    for (let i = 1; i < n; i++) {
        if (n % i === 0)
            sum += i;
    }
    if (sum === n) { console.log(`The number ${n} is perfect`); }
    else { console.log(`The number ${n} is not perfect`); }
}