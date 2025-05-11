function diapazondagiElementlar(arr, min, max) {
    const newArr = []

    for (const el of arr) {
        if (el >= min && el <= max) {
            newArr.push(el)
        }
    }

    console.log(newArr)
}

diapazondagiElementlar([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3, 7); // Natija: [3, 4, 5, 6, 7]