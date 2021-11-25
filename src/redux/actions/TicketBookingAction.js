import TicketBookingService from './../../services/TicketBooking.Service';
export const GET_TICKET_LIST = "GET_TICKET_LIST";
export const TICKET_BOOK = "TICKET_BOOK";
export const TICKET_REMOVE = "TICKET_REMOVE";
export const CART_LIST_LOAD = "CART_LIST_LOAD";
export const TICKET_BOOK_CART_ID = "TICKET_BOOK_CART_ID";


export const TicketBookingList = () => async(dispatch) => {
    try {
        const res = await TicketBookingService.get_ticket_list();
        dispatch({
          type: GET_TICKET_LIST,
          payload: res.data.data,
        });

      } catch (err) {
        console.log(err);
      }
    };

export const TicketBook = (payload) => async(dispatch) => {
    try {
      const Cart= localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
      const Cartid= localStorage.getItem('cart_id') ? JSON.parse(localStorage.getItem('cart_id')) : [];
    
      Cart.push(payload)
      localStorage.setItem('cart',JSON.stringify(Cart))
    
    
      Cartid.push(payload._id)
      localStorage.setItem('cart_id',JSON.stringify(Cartid))

        const res = await TicketBookingService.ticket_remove(payload._id);
        
        dispatch({
          type:TICKET_BOOK,
          payload:Cart
        });

        dispatch({
          type:TICKET_BOOK_CART_ID,
          payload:Cartid
        });

      } catch (err) {
        console.log(err);
      }
}


export const RemoveTicket = (id) => async(dispatch) => {
  try {
    const Cart= localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
    const Cartid= localStorage.getItem('cart_id') ? JSON.parse(localStorage.getItem('cart_id')) : [];
    
    const newCart = [];
    const newCartid = [];
          Cart.map((value)=>{
              if(value._id!=id){
                  newCart.push(value)
              }
          })
  
    localStorage.setItem('cart',JSON.stringify(newCart)) 
  
      Cartid.map((value)=>{
              if(value!=id){
                  newCartid.push(value)
              }
          })
    
      const res = await TicketBookingService.ticket_book(id);
      dispatch({
        type:TICKET_REMOVE,
        payload:newCart
      });
     
      return Promise.resolve(Cart);
    } catch (err) {
      console.log(err);
    }
}


export const CartList = () => dispatch => {
     const Cart= localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
        dispatch({
          type: CART_LIST_LOAD,
          payload: Cart,
        });       
}