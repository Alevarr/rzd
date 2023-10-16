import Carriage from "./Carriage";

export default interface TrainRoute {
    _id: string,
    departureDate: number,
    arrivalDate: number,
    departureStation: string,
    arrivalStation: string,
    trainName: string,
    features: [string],
    carriages: Carriage[]
}