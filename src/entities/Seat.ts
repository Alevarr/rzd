import User from "./User";

export default interface Seat {
    price: number,
    isBooked: boolean,
    userBooked: User | null
}