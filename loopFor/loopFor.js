
const arr = [
    ["молоко", "хлеб", "яйца"],
    ["сок", "мороженное"],
    ["корм для кота", "шампунь"]
]

for(let i=0; i < arr.length; i++) {
    let subArray = arr[i]
    for (let j = 0; j < subArray.length; j++){
        console.log(subArray[j])
    }
}