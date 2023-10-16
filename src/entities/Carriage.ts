import Seat from "./Seat";

export default interface Carriage {
    number: number,
    type: string,
    typeSlug: string,
    seats: [Seat]
}