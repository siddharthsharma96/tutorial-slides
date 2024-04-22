let prices = [10, 20, 25, 50, 60];
let copiedPrices = [...prices]

// prices.push(200)
// copiedPrices.push(2000)
// console.log(prices, copiedPrices)

let userDetails = {
    name: 'Rahul',
    age: 23,
    designation: 'SDE',
    company: 'GeeksforGeeks'
}

// let { name, age, ...rest } = userDetails
let [ first, second, ...rest ] = prices
console.log(first, second, rest)

// console.log({
//     name,
//     age,
//     rest
// })

// let adjustedPrices = []

// prices.forEach((element, index, prices) => {
//     // console.log(element, index, prices)
//     adjustedPrices.push(element * 1.5)
// });

// adjustedPrices = prices.map((element, index, prices) => {
//     return {
//         index,
//         price: element * 1.5
//     }
// })

// console.log(adjustedPrices, prices)