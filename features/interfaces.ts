//An interface creates a new type, describing the property names and value types of an object

interface Vehicle {
    name: string;
    year: number;
    broken: boolean;
    summary(): string;
}

interface Summary {
    summary(): string;
}

const oldCivic = {
    name: 'civic',
    year: 2000,
    broken: true,
    summary(): string {
        return `Name: ${this.name}`
    },
    //can have more  properties than the interface without error
    color: "green"
};

const printVehicleOldest = (vehicle: {name: string, year: number, broken: boolean}): void => {
    console.log(`Name ${vehicle.name}`)
}

const printVehicleOlder = (vehicle: Vehicle): void => {
    console.log(vehicle.summary())
}
const printSummary = (item: Summary): void => {
    console.log(item.summary())
}

const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary(): string {
        return `My drink has ${this.sugar} grams of sugar`
    }
}

//same interface even though objects are quite different because they both at least contain the properties contained in the Summary interface
printSummary(oldCivic)
printSummary(drink)
