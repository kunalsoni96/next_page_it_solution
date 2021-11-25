import React, { useEffect } from 'react';
import {TicketBookingList, CartList ,RemoveTicket} from './../redux/actions/TicketBookingAction';
import {useDispatch, useSelector} from 'react-redux';


const Cart = () => {
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(CartList())
    },[])


    const cart = useSelector((state)=>{
        return state.TicketBookReducer.cart
    });

    const removecart = (id) => {
        dispatch(RemoveTicket(id))
    }

    console.log(cart)

    return(
        <div className="container-fluid">
            <h2><b>Cart</b></h2>
                <table className="table">
            <thead>
                    <tr>
                        <th style={{borderTopLeftRadius:10}}>Subject</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Availability</th>
                        <th style={{borderTopRightRadius:10}}>Action</th>
                    </tr>
                </thead>
                <tbody>
                {cart.map((value)=>(
                    <tr>
                        <td>{value.Subject}</td>
                        <td>{value.Date}</td>
                        <td>{value.Time}</td>
                        <td>{value.Availability}</td>
                        <td>
                           <button onClick={()=>removecart(value._id)} style={{backgroundColor:"#E53906", color:"white", cursor:"pointer"}} className="form-control">Cancel</button> 
                        </td>
                    </tr>
                    ))}
                </tbody>
               
            </table>
        </div>
    )
}

export default Cart;