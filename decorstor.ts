// 1. Class decorator yozing:

function Component(constructor: Function) {
    console.log("Class name: ", constructor.name);
}

// 2. Method decorator yozing:

function LogMethod(target: any, methodName: string, descriptor: PropertyDescriptor) {
    console.log('Method name:', methodName);
    console.log('Target:', target);
    console.log('Descriptor:', descriptor);
    console.log("\n------------------------\n");
}

// 3. Property decorator yozing:

function LogProperty(target: any, propertyKey: string) {
    console.log("Property name:", propertyKey);
    console.log("\n------------------------\n");
}

// 4. Accessor decorator yozing:

function LogAccessor(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log("Accessor name:", name);
    console.log("\n------------------------\n");
}

// 5. Parameter decorator yozing:

function LogParam(target: any, methodName: string, parameterIndex: number) {
    console.log('Method name:', methodName);
    console.log('Parameter index:', parameterIndex);
    console.log("\n------------------------\n");
}

@Component
class UmarAka {

    @LogProperty
    balance: number = 0;

    constructor(balance: number) {
        this.balance = balance;
    }

    @LogMethod
    instruct(@LogParam name: string = "Umar aka") {
        console.log(`${name} instruct us`);
    }

    @LogAccessor
    get getBalance(): number {
        return this.balance;
    }

    @LogAccessor
    public set setBalance(@LogParam amount: number) {
        this.balance += amount;
    }
}



