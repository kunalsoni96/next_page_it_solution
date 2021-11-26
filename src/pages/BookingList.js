import React from "react";


const BookingList = (props) => {
    const [btntext, setBtntext] = React.useState('Book Now');
    
    return( 
            <tr>
                <td key={props.index}>{props.Subject}</td>
                <td>{props.Date}</td>
                <td>{props.Time}</td>
                <td>{props.Availability}</td>
                <td>
                    {
                    props.Availability==0 ?
                   <button style={{backgroundColor:"#C03C32", color:"white", cursor:"pointer"}} className="form-control">Full</button> :

                   <button onClick={props.myClick} style={{backgroundColor:"orange", color:"white", cursor:"pointer"}} className="form-control">
                     {btntext}
                   </button> 

                    }
                </td>
            </tr>
            
    )
}

export default BookingList