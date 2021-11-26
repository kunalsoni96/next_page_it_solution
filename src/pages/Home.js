import React, { useEffect, useState } from 'react';
import Header  from './Header';
import {TicketBookingList, TicketBook} from './../redux/actions/TicketBookingAction';
import {useDispatch, useSelector} from 'react-redux';
import BookingList from './BookingList';
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
                    <BookingList  myClick={() => booknow(value)}   index={index} Subject={value.Subject} Date={value.Date} Time={value.Time} Availability={value.Availability}  />
                ))}
                </tbody>
               
            </table>
        </div>
    )
}

export default Home;