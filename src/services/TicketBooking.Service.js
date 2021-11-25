import http from "./../config/http-common";

class TicketBookingService {
  get_ticket_list() {
    return http.get("/getList");
  }

  ticket_book(id) {
    return http.post(`/remove/${id}`);
  }

  ticket_remove(id) {
    return http.post(`/store/${id}`);
  }
}

export default new TicketBookingService();