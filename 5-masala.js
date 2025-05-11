function elementlarniAlmashtirish(arr, i, j) {
    const first = arr[i]
    arr[i] = arr[j]
    arr[j] = first

    console.log(arr)
}

elementlarniAlmashtirish([1, 2, 3, 4, 5], 1, 3); // Natija: [1, 4, 3, 2, 5]