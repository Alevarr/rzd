import SeatsPageUser from "./SeatUser";

export default interface Seat {
    price: number,
    isBooked: boolean,
    userBooked: SeatsPageUser | null
}