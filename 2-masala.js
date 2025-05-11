function juftVaToq(arr) {
    const juft = []
    const toq = []

    arr.forEach(element => {
        switch (true) {
            case element === 0:
                break;
            case element % 2 === 0:
                juft.push(element);
                break;
            case element % 2 === 1:
                toq.push(element);
                break;
            default:
                break;
        }
    });

    console.log(`Juft: ${juft}\nToq: ${toq}`);
}

juftVaToq([0, 1, 2, 3, 4, 5]);