

let car = {

  make: 'Ford',
  model: 'Ranger',
  type: 'Truck',
  needsFuel: true,
  numberOfWheels: 4,
  "cup holders": 5

};

let key = 'needsFuel';

console.log(car.make);

console.log(car.numberOfWheels);

console.log(car["cup holders"])

car.needsFuel = false;

car["needsFuel"] = true;

console.log(car.needsFuel);

car['interior'] = 'leather';

console.log(car.interior);

console.log('this is using the variable key, ', car[key]);

console.log(car.key);
