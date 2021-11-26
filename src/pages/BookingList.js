import React from "react";


const BookingList = (props) => {
    const [btntext, setBtntext] = React.useState('Book Now');
    const[btndisabled, setBtndisabled] = React.useState(false);
    const [availability, setAvailability] = React.useState(props.Availability);
    const booknow = () => {
        setBtntext('Booked Now')
        props.myClick()
        setBtndisabled(true)
        setAvailability(props.Availability-1)
    }
    return( 
            <tr>
                <td key={props.index}>{props.Subject}</td>
                <td>{props.Date}</td>
                <td>{props.Time}</td>
                <td>{availability}</td>
                <td>
                    {
                    props.Availability==0 ?
                   <button style={{backgroundColor:"#C03C32", color:"white", cursor:"pointer"}} className="form-control">Full</button> :

                   <button disabled={btndisabled} onClick={()=>booknow()} style={{backgroundColor:"orange", color:"white", cursor:"pointer"}} className="form-control">
                     {btntext}
                   </button> 

                    }
                </td>
            </tr>
            
    )
}

export default BookingList