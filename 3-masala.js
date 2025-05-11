function elementQidirish(arr, el) {
    for (const i in arr) {
        if (arr[i] == el) {
            return i
        }
    }

    return -1
}

console.log(elementQidirish([10, 20, 30, 40, 50], 30)); // Natija: 2
console.log(elementQidirish([10, 20, 30, 40, 50], 60)); // Natija: -1