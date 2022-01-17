import currencyUI from "./currency";
import favorite from "../store/favorite";

class TicketsUI {
  constructor(currency) {
    this.container = document.querySelector(".tickets-sections .row");
    this.getCurrencySymbol = currency.getCurrencySymbol.bind(currency);
    this.favContainer = document.querySelector(".dropdown-content");
  }

  renderTickets(tickets) {
    this.clearContainer();

    if (!tickets.length) {
      this.showEmptyMsg();
      return;
    }

    let fragment = "";
    const currency = this.getCurrencySymbol();

    tickets.forEach((ticket, i) => {
      const template = TicketsUI.ticketTemplate(ticket, currency, i);
      fragment += template;
    });

    this.container.insertAdjacentHTML("afterbegin", fragment);
    this.container.childNodes.forEach((el) => {
      const favBtn = el.querySelector(".add-favorite");
      favBtn.addEventListener("click", (e) => {
        const ticket = tickets[el.id];
        favorite.addToFavorite(ticket);
        this.renderFavoriteTickets(favorite.storeOfTickets);
      });
    });
  }

  clearContainer() {
    this.container.innerHTML = "";
  }

  clearFavContainer() {
    this.favContainer.innerHTML = "";
  }

  showEmptyMsg() {
    const template = TicketsUI.emptyMsgTemplates();
    this.container.insertAdjacentHTML("afterbegin", template);
  }

  showFavEmptyMsg() {
    const template = TicketsUI.favoriteEmptyTickets();
    this.favContainer.insertAdjacentHTML("afterbegin", template);
  }

  renderFavoriteTickets(tickets) {
    this.clearFavContainer();

    if (!Object.keys(tickets).length) {
      this.showFavEmptyMsg();
      return;
    }

    let fragment = "";
    const currency = this.getCurrencySymbol();

    Object.values(tickets).forEach((ticket, i) => {
      const template = TicketsUI.favoriteTicketTemplate(ticket, currency, i);
      fragment += template;
    });

    this.favContainer.insertAdjacentHTML("afterbegin", fragment);
    this.favContainer.childNodes.forEach((el) => {
      const deleteBtn = el.querySelector(".delete-favorite");
      deleteBtn.addEventListener("click", (e) => {
        const ticket = tickets[el.id];
        favorite.removeFromFavorite(ticket);
        this.renderFavoriteTickets(favorite.storeOfTickets);
      });
    });
  }

  static emptyMsgTemplates() {
    return `<div class="tickets-empty-res-msg">
      По вашему запросу билетов не найдено.
    </div>`;
  }

  static favoriteEmptyTickets() {
    return `<div class="favorite-item  d-flex align-items-start pl">
      <p>К сожалению, в данный момент у вас нет избранных билетов</p>
    </div>`;
  }

  static ticketTemplate(ticket, currency, index) {
    return `<div class="col s12 m6" id="${index}">
        <div class="card ticket-card">
        <div class="ticket-airline d-flex align-items-center">
            <img
            src="${ticket.airline_logo}"
            class="ticket-airline-img"
            />
            <span class="ticket-airline-name"
            >${ticket.airline_name}</span
            >
        </div>
        <div class="ticket-destination d-flex align-items-center">
            <div class="d-flex align-items-center mr-auto">
            <span class="ticket-city">${ticket.origin_name} </span>
            <i class="medium material-icons">flight_takeoff</i>
            </div>
            <div class="d-flex align-items-center">
            <i class="medium material-icons">flight_land</i>
            <span class="ticket-city">${ticket.destination_name}</span>
            </div>
        </div>
        <div class="ticket-time-price d-flex align-items-center">
            <span class="ticket-time-departure">${ticket.departure_at}</span>
            <span class="ticket-price ml-auto">${currency}${ticket.price}</span>
        </div>
        <div class="ticket-additional-info">
            <span class="ticket-transfers">Пересадок: ${ticket.transfers}</span>
            <span class="ticket-flight-number">Номер рейса: ${ticket.flight_number}</span>
        </div>
        <a
          class="waves-effect waves-light btn-small green darken-1 add-favorite ml-auto"
          >Add to favorites</a
        >
        </div>
    </div>`;
  }

  static favoriteTicketTemplate(ticket, currency, index) {
    return `<div class="favorite-item  d-flex align-items-start" id="${ticket.flight_number}">
    <img
      src="${ticket.airline_logo}"
      class="favorite-item-airline-img"
    />
    <div class="favorite-item-info d-flex flex-column">
      <div
        class="favorite-item-destination d-flex align-items-center"
      >
        <div class="d-flex align-items-center mr-auto">
          <span class="favorite-item-city">${ticket.origin_name} </span>
          <i class="medium material-icons">flight_takeoff</i>
        </div>
        <div class="d-flex align-items-center">
          <i class="medium material-icons">flight_land</i>
          <span class="favorite-item-city">${ticket.destination_name}</span>
        </div>
      </div>
      <div class="ticket-time-price d-flex align-items-center">
        <span class="ticket-time-departure">${ticket.departure_at}</span>
        <span class="ticket-price ml-auto">${currency}${ticket.price}</span>
      </div>
      <div class="ticket-additional-info">
        <span class="ticket-transfers">Пересадок: ${ticket.transfers}</span>
        <span class="ticket-flight-number">Номер рейса: ${ticket.flight_number}</span>
      </div>
      <a
        class="waves-effect waves-light btn-small pink darken-1 delete-favorite ml-auto"
        >Delete</a
      >
    </div>
  </div>`;
  }
}

const ticketsUI = new TicketsUI(currencyUI);

export default ticketsUI;
