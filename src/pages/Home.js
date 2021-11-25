import React, { useEffect, useState } from 'react';
import Header  from './Header';
import {TicketBookingList, TicketBook} from './../redux/actions/TicketBookingAction';
import {useDispatch, useSelector} from 'react-redux';

const Home = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(TicketBookingList());
    },[]);

    const data = useSelector((state)=>{
        return state.TicketBookReducer
    })
    const booknow = (id) => {
        dispatch(TicketBook(id))
    }

    return(
        <div className="container-fluid">
            <Header />
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
                {data.list.map((value, index)=>(
                    <tr>
                        <td key={index}>{value.Subject}</td>
                        <td>{value.Date}</td>
                        <td>{value.Time}</td>
                        <td>{value.Availability}</td>
                        <td>
                            {
                            value.Availability==0 ?
                           <button style={{backgroundColor:"#C03C32", color:"white", cursor:"pointer"}} className="form-control">Full</button> :

                           <button onClick={()=>booknow(value)} style={{backgroundColor:"orange", color:"white", cursor:"pointer"}} className="form-control">
                              Book Now
                           </button> 

                            }
                        </td>
                    </tr>
                    ))}
                </tbody>
               
            </table>
        </div>
    )
}

export default Home;