//Расширение объектных литералов
//Воссоединение - Реструктуризация
const brand = 'Mercedes Benz',
    price = '20000';

function show() {
    console.log(`Auto ${this.brand} is $${this.price}`);
}
function changePrice(newPrice) {
    this.price = newPrice;
    console.log(`Price is changed. New price is ${this.price}`);
}


const car = {
    brand,
    price,
    show,
    changePrice
};
// const car = {
//     brand: brand,
//     price: price,
//     show: function () {
//         console.log(`Auto ${this.brand} is $${this.price}`);
//     },
//     changePrice: changePrice
// };
console.log(car);
car.show();
car.changePrice(33000);
car.show();