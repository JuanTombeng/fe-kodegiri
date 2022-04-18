const fibonacci = (n) => {
    let temp1 = 0
    let temp2 = 1
    let sum = 0
    for (let i = 1; i < n; i++) {
        console.log(temp1)
        sum = temp1 + temp2
        temp1 = temp2
        temp2 = sum
    }
    return temp1
}

console.log(fibonacci(20))