function bahoTahlili(arr) {
    let sum = arr[0]
    let max = arr[0]
    let min = arr[0]

    for (let i = 1; i < arr.length; i++) {
        sum += arr[i]

        if (arr[i] > max) {
            max = arr[i]
        }

        if (arr[i] < min) {
            min = arr[i]
        }
    }

    let avg = sum / arr.length
    avg = avg.toFixed(2)

    console.log(`O'rtacha baho: ${avg}\nEng yuqori baho: ${max}\nEng past baho: ${min}`)
}

bahoTahlili([85, 92, 78, 65, 88, 72, 90, 60, 96, 55, 78, 82]);