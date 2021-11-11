// function makeSum(a, b) {
//     const result = a + b
//     return result
// }
//
// console.log(makeSum(1))

// function printNames(str1, str2 = "111", str3 = "222") {
//     console.log(str1)
//     console.log(str2)
//     console.log(str3)
// }
//
// printNames()
// printNames("AAA")
// printNames("AAA", "BBB")
// printNames("AAA", "BBB", "CCC")

function calc(a, b, fn) {
    // a, b는 숫자
    console.log("A: " + a)
    console.log("B: " + b)

    const result = fn(a + 1, b + 1)

    return result
}

console.log(calc(10, 20, (x, y) => x + y))

console.log(calc(10, 20, (x, y) => x - y))