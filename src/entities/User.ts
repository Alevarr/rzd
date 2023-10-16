import Option from "./Option";

export default interface User {
    name: string,
    email: string,
    options: {[key : string] : Option},
    age: number,
    sex: "m" | "f",
    class: number,
    numberOfTrips: number
}