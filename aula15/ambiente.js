let num = [3, 5, 4, 10]

num.sort((a, b) => a - b)

console.log(`${num}`)

for (c in num) {
    console.log(num[c])
}