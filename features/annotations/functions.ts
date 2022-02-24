//type inference for functions only works on the return value, but good to add in manually anyway

const add = (a: number, b: number): number => {
    return a + b;
};

//assumes void because forgot to return, but doesn't cause error because we didn't specify a type for the return value
const subtract = (a: number, b: number) => {
    a - b;
}

//alternate syntaxes
function divide(a: number, b: number): number {
    return a / b;
}

const multiply = function(a: number, b: number): number {
    return a * b;
}

//void return type can be nothing, undefined, or null
const logger = (message: string): void => {
    console.log(message)
}

//will never reach end of function, will throw error before reaching the end
const throwError = (message: string): never => {
    throw new Error(message)
}

//still has return type of string even though may throw error and end early
const throwConditionalError = (message: string): string => {
    if(!message) throw new Error(message);
    return message
}

const forecast = {
    date: new Date(),
    weather: "sunny"
}

const logWeather = (forecast: {date: Date, weather: string}): void => {
    console.log(forecast.date)
    console.log(forecast.weather)
}

const destructuredLogWeather = ({date, weather}: {date: Date, weather: string}): void => {
    console.log(date)
    console.log(weather)
}

