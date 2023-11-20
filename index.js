const items = [
    { id: 1, name: 'foo', price: 7 },
    { id: 2, name: 'bar', price: 6 },
    { id: 3, name: 'bazz', price: 9 },
    { id: 3, name: 'quq', price: 13 }
  ];

//   const name = window.prompt("Enter item name", "foo")

//   const found = items.find((item) => {
    
//     if(name === item.name){
//         return true
//     }else {
//         return false
//     }
//   })

//   if(found){
//     console.log(found)
//   }else{
//     console.log("Item not found")
//   }

// const search = window.prompt("Enter search term")

// const foundItems = items.filter((item) => {
//     if(item.name.includes(search)) {
//         return true
//     }else{
//         return false
//     }
// })

// console.log(foundItems)

// const keyForMapping = window.prompt("Enter id, name, or price")
// const mappedArr = items.map((item) => {
//     return item[keyForMapping]
// })

// console.log(mappedArr)

const sumPrompt = window.prompt("Add up all id or price?")

const sum = items.reduce((acc, curr) => {
    acc = acc + curr[sumPrompt]
    return acc
}, 0)

console.log(sum)