const words = ["apple", "banana", "strawberry", "grape"];
const final = words.reduce((current , longest) =>{
    return current.length > longest.length ? current :longest
    

},"")
console.log(final)
