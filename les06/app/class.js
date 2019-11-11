class Human {
    constructor(name = 'Ilon',
        surname = 'Mask',
        fatherName = 'Johnovich') {
        this.name = name;
        this.surname = surname;
        this.fatherName = fatherName;
        this.count = function () {
            return this.age + 100;
        }
    }
    hello(name = 'Inkognito') { /* методы */
        console.log(`Hello, ${name}, my name is ${this.name}`);
    }
    get fio() {
        return `${this.surname} ${this.name} ${this.fatherName}`;
    }
    get age() {
        return (new Date()).getFullYear() - this._dob.getFullYear();
    }
    set dob(str) {
        this._dob = new Date(str);
    }
    get dob() {
        return 'ничего';
    }
    get _name() {
        return this.name;
    }
}

const vitia = new Human('Vitia');
console.log(vitia);
console.log(vitia.hello());
console.log(vitia.myName);
console.log(vitia.fio);
vitia.dob = '1.1.2007';
console.log(vitia.age);
console.log(vitia.dob);
// console.log(vitia._fio);
console.log(vitia.count());