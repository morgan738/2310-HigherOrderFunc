const arr = [1,2,3,4,5,7]

// arr.forEach(function (element, idx) {
//     console.log(element)
// })

// arr.forEach((element, idx) => {
//     console.log(element)
// })

// for(let i = 4; i < arr.length/2; i+= 2){
//     console.log(arr[i], i)
// }

const mappedArr = arr.map(function (element) {
    return element * 2
})

const arrowMap = arr.map((element) => {
    
    const newElement = element * 5
    return newElement + 123
})  
const newArrow = arr.map(element => element * 5)

const strArr = ["test", "apple", "bad apple", "note"]
console.log(strArr.sort())
const result = strArr.find((word) => {
    return word.includes("apple")
})

const filt = strArr.filter((word) => {
    return word.length > 3
})

//console.log(arr)

const sum = arr.reduce((accumulator, current) => {
    // console.log("acc -> ", accumulator)
    // console.log("current -> ", current)
    // console.log("result -> ", accumulator + current)

    accumulator = accumulator + current

    return accumulator
})

const evenOdd = arr.reduce((acc, curr) => {
    if(curr%2 === 0){
        acc.even.push(curr)
    }else{
        acc.odd.push(curr)
    }

    return acc
}, {even:[], odd: []} )


const sortedArr = [32, 346, 2, 100, 10, 10000, 543, 23]
//[2, 10, 23, 32, 100, 346, 543, 10000]
// console.log(sortedArr.sort((a, b) => {
//     return a - b
// }))
