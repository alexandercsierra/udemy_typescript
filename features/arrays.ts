//in TypeScript should keep items within an array a consistent type

//type inference says string[]
const carMakers: string[] = ['ford', 'toyota', 'chevy'];

//without values, TS cannot make an inference, so def add type in this case
const anyCarMakers = [];

//for 2D array, type starts with values of inner array, then two sets of brackets - string[][]
const carsByMake = [
    ['f150'],
    ['corolla'],
    ['camaro']
]

//TS can infer type when accessing item in a typed array
const car = carMakers[0]
const myCar = carMakers.pop();

//prevent incompatible values
// carMakers.push(100);

//help with map and related methods
carMakers.map((car: string): string => {
    return car.toUpperCase();
})

//Flexible types
const importantDates: (Date | string)[] = [new Date(), '2030-10-10']

export {}