function removeDuplicates(duplicateArr) {
    const uniqueArr = []
    for (let i = 0; i< duplicateArr.length; i++) {
        item = duplicateArr[i].toLowerCase();
        if (!(uniqueArr.includes(item))) {
            uniqueArr.push(item); 
        }
    }
    return uniqueArr
}

console.log(removeDuplicates(["apple", "Apple", "BANANA", "banana"]))