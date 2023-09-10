const { EventEmitter } = require('events');

const birthdayEventListener = ({name}) => {
    console.log(`Happi birthday ${name}!`);
}

const myEventEmitter = new EventEmitter();

myEventEmitter.on('birthday', birthdayEventListener);

myEventEmitter.emit('birthday', {name: 'dihanto'});


// const { EventEmitter } = require('events');
 
// const myEventEmitter = new EventEmitter();

// const makeCoffee = (name ) => {
//     console.log(`kopi ${name} berhasil dibuat`);
// }

// const makeBill = (price ) => {
//     console.log(`Bill sebesar ${price} telah dibuat`);
// }

// const onOrderCoffeeListener = ({ name, price }) => {
//     makeCoffee(name);
//     makeBill(price);
// }

// myEventEmitter.on('coffee-order', onOrderCoffeeListener);

// myEventEmitter.emit('coffee-order', { name: 'golda' , price: 20000 });
