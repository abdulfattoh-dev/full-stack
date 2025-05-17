// 1.1
// function findMinNum(arr: number[]): number {
//     return Math.min(...arr)
// }
// console.log(findMinNum([2, 1, 3]))
// 1.2
// function conStrs(arr: string[]): string {
//     return arr.join(', ')
// }
// console.log(conStrs(['hello', 'Umar', 'aka']))
// 1.3
// function login(tuple: [string, Date, boolean]): string {
//     const [username, loginTime, isLoggedIn] = tuple
//     console.log(tuple)
//     if (isLoggedIn) {
//         return `Foydalanuvchi ${loginTime} da tizimga kirgan`
//     } else {
//         return `Foydalanuvchi tizimga kirmagan`
//     }
// }
// console.log(login(['Abdulfattoh', new Date(), false]))
// console.log(login(['Umar aka', new Date(), true]))
// 2.1
// type Phone = {
//     brand: string;
//     model: string;
//     price: number;
// };
// const phones: Phone[] = [
//     {
//         brand: "first",
//         model: "first",
//         price: 1
//     },
//     {
//         brand: "third",
//         model: "third",
//         price: 3
//     },
//     {
//         brand: "second",
//         model: "second",
//         price: 2
//     }
// ]
// const theMostExpPhone: Phone = {
//     brand: "second",
//     model: "second",
//     price: 2
// }
// function findTheMostExpPhone(arr: Phone[]): Phone {
//     for (const el of tuple) {
//         if (el.price > theMostExpPhone.price) {
//             theMostExpPhone.brand = el.brand
//             theMostExpPhone.model = el.model
//             theMostExpPhone.price = el.price
//         }
//     }
//     return theMostExpPhone
// }
// console.log(findTheMostExpPhone(phones))
// 2.2
// type Student = {
//     name: string,
//     grade: number,
//     isActive: boolean
// }
// const students: Student[] = [
//     {
//         name: 'Shodiyor aka',
//         grade: 5,
//         isActive: true
//     },
//     {
//         name: 'Bahodir',
//         grade: 3,
//         isActive: false
//     },
//     {
//         name: 'Shagshigeldi',
//         grade: 4,
//         isActive: true
//     }
// ]
// const activeStudents: Student[] = []
// function isActive(arr: Student[]): Student[] {
//     for (const el of arr) {
//         if (el.isActive) {
//             activeStudents.push(el)
//         }
//     }
//     return activeStudents
// }
// console.log(isActive(students))
// 3.1
// function price(params: string | number): number {
//     if (typeof params == "string") {
//         return +params
//     } else {
//         return params
//     }
// }
// console.log(price(2000))
// console.log(price('2000'))
// 3.2
// function input(params: boolean | string): boolean | number {
//     if (typeof params == "boolean") {
//         return params
//     } else {
//         return params.length
//     }
// }
// console.log(input(false))
// console.log(input('Umar aka'))
// 4.1
// function isAdult(age:number): boolean {
//     if (age >= 18) {
//         return true
//     } else {
//         return false
//     }
// }
// console.log(isAdult(17))
// console.log(isAdult(19))
// 4.2
// function isInputName(name: string | null | undefined): string {
//     if (typeof name == "string") {
//         return name
//     } else {
//         return 'Mehmon'
//     }
// }
// console.log(isInputName('Umar aka'))
// console.log(isInputName(null))
// console.log(isInputName(undefined))
// 5.1
// function welcome(name: string): void {
//     console.log(`Xush kelibsiz, ${name}`)
// }
// welcome('Umar aka')
// 5.2
// function err(): never {
//     throw new Error("Xatolik yuz berdi");
// }
// console.log(err())
// BONUS
// 6.1
function fibo(num) {
    if (num <= 0) {
        return [];
    }
    else if (num == 1) {
        return [0];
    }
    else if (num == 2) {
        return [0, 1];
    }
    var result = [0, 1];
    for (var i = 2; i < num; i++) {
        result.push(result[i - 1] + result[i - 2]);
    }
    return result;
}
console.log(fibo(5));
// 6.2
// interface Product {
//     id: number,
//     name: string,
//     price: number,
//     inStock: boolean
// }
// const products: Product[] = [
//     {
//         id: 1,
//         name: 'first',
//         price: 101,
//         inStock: true
//     },
//     {
//         id: 3,
//         name: 'third',
//         price: 30,
//         inStock: true
//     },
//     {
//         id: 2,
//         name: 'second',
//         price: 200,
//         inStock: false
//     }
// ]
// function filterByPrice(): Product[] {
//     return products.filter(product => product.price > 100)
// }
// console.log(filterByPrice())
