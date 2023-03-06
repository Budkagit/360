let n = 12
let r = 0
let A = n
while (n > 0) {
    A = n % 10;
    r = r * 10 + A //asuult
    n = Math.floor(n / 10);
}
console.log(r);