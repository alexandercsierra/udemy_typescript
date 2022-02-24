//A tuple is an array-like structure where each element represents some property of a record (multiple properties to describe one thing, vs arrays with many things)

const drink = {
    color: "brown",
    carbonated: true,
    sugar: 40
}

//consistent ordering of elements important for a tuple
type Drink = [string, boolean, number] // type alias
const pepsi: Drink = ["brown", true, 40];
const sprite: Drink = ["clear", true, 40];

//will error because first element should be a string
// pepsi[0] = 40;

//tuples are rarely used and can be difficult to understand
const carSpecsTuple: [number, number] = [400, 3354];
const carSpecsObject = {
    horsepower: 400,
    weight: 3354
}