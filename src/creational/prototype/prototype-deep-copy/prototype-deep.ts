export interface Prototype {
    clone(): Prototype;
}

export class Address implements Prototype {
    constructor(public street: string, public number: number) { }

    clone(): Address {
        return new Address(this.street, this.number);
    }
}

export class Person implements Prototype {
    public addresses: Address[] = [];

    constructor(public name: string, public age: number) { }

    clone(): Person {
        const newObject = new Person(this.name, this.age);
        newObject.addresses = this.addresses.map(item => item.clone());
        return newObject;
    }

    addAddress(address: Address): void {
        this.addresses.push(address)
    }
}

const address1 = new Address('Av Brasil', 15);
const person1 = new Person("Luiz", 30);
person1.addAddress(address1);
const person2 = person1.clone();

person1.addresses[0].street = 'Bla Bla Bla';

person2.name = 'Person2';
console.log(person2);
console.log(person2.addresses);
console.log('\n');
console.log(person1);
console.log(person1.addresses);