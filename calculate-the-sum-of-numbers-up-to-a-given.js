function sumTo1(n) {
    let sum = 0
    for (i = n; i >= 1; i--) {
        sum += i
    }
    return sum
}

function sumTo2(n) {
    if (n == 1) {
        return n
    } else {
        return n + sumTo(n - 1)
    }
}
