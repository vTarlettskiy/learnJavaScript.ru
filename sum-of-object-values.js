function sumSalaries(salaries) {
    let sum = 0;
    for (let item of Object.values(salaries)) {
        sum += item
    }
    return sum
}