import React from 'react';
import '../App.css';
import Badge from 'react-badges'
import FlashMessage from 'react-flash-message';
import {Link} from 'react-router-dom';
import {CartList} from './../redux/actions/TicketBookingAction';
import {useDispatch, useSelector} from 'react-redux';


const Header = () => {
    const[counter, setCounter] = React.useState(Math.floor(Math.random() * (60 - 30 + 1)) + 30);
    const[seatleft, setSeatleft] = React.useState(Math.floor(Math.random() * (15 - 5 + 1)) + 5)
    const dispatch = useDispatch();
    React.useEffect(() => {
        if(counter > 0){
         setTimeout(() => setCounter(counter - 1), 1000);
        }
        else{
            setCounter(Math.floor(Math.random() * (60 - 30 + 1)) + 30)
            setSeatleft(Math.floor(Math.random() * (15 - 5 + 1)) + 5)
        }


        dispatch(CartList())
      }, [counter]);

    const cart = useSelector((state)=>{
        return state.TicketBookReducer.cart
    });
    

    return (
        <div>
        <center>
        {/* <FlashMessage duration={5000}>
        <div id="flash_tag">
        <p id="flash_msg" style={{color:"white"}}>I will disapper in 5 seconds!</p>
        </div>
        </FlashMessage> */}
        </center>

        <div style={{textAlign:"right"}}>
            <Link to="/cart">
            <i className="fa fa-shopping-cart fa-2x"></i>
            <Badge>{cart.length}</Badge>
            </Link>
        </div>

        <div className="row">
            <div className="col-sm-12">
            <h5>Time Left : {counter} sec</h5>
            <h3 style={{color:"#AF7F28"}}>Claim Your Free Trial Class</h3>
            </div>
        </div>

        <div className="row">
            <div className="col-sm-6">
            <h3>Class Schedule</h3>
            </div>

            <div className="col-sm-6" style={{textAlign:"right"}}>
            <h3>Free Seats left {seatleft}</h3>
            </div>
        </div>
        </div>
    )
}

export default Header;