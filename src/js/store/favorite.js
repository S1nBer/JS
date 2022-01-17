class Favorite {
  constructor(ticket) {
    this.ticket = ticket;
    this.storeOfTickets = {};
  }

  addToFavorite(ticket) {
    if (
      !Object.keys(this.storeOfTickets).some(
        (el) => +el === ticket.flight_number
      )
    ) {
      this.storeOfTickets[ticket.flight_number] = ticket;
    }
  }

  removeFromFavorite(ticket) {
    if (
      Object.keys(this.storeOfTickets).some(
        (el) => +el === ticket.flight_number
      )
    ) {
      delete this.storeOfTickets[ticket.flight_number];
    }
  }
}

const favorite = new Favorite();

export default favorite;
