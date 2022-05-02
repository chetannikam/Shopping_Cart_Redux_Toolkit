import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Navbar.css'
const NavBar=()=>{
    let count = useSelector(state => state.cart.count)
    return(
        <div className='navHead'>
            <p className='nav_head'>Shopping Cart</p>
            <div className='cart_div'>
           <Link to='/cart'><i className="fa-solid fa-cart-shopping cart"></i></Link> 
            <span className='countItem'>{count}</span>
            </div>
        </div>
    )
    }
    export default NavBar;