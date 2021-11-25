import {
    TICKET_BOOK,
    TICKET_REMOVE,
    TICKET_BOOK_CART_ID,
    GET_TICKET_LIST,
    CART_LIST_LOAD
  } from "../actions/TicketBookingAction";
  
  const initialState = {
    list:[],
    cart:[],
    cart_id:[]
  };
  
  const TicketBookReducer = (state = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case GET_TICKET_LIST:
        return {...state, list:payload};
  
      case TICKET_BOOK:
        return {...state, cart:payload};
  
      case TICKET_REMOVE:
        return {...state, cart:payload};

      case CART_LIST_LOAD:
        return {...state, cart:payload};

      case TICKET_BOOK_CART_ID:
        return{...state, cart_id:payload}
  
      default:
        return state;
    }
  };
  
  export default TicketBookReducer;