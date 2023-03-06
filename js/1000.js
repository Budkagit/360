let N = 1000
    let k ="Mon"
for (let i = 2; i <= N; i++) {
    k = "Mon"
    for (A = 2; A < i; A++) {
        if (i % A === 0){
            k = "bish"
        break
        }
    }
if (k) {
    console.log(i)
}
}
