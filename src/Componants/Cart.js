import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { removeItem} from '../Redux/Slices/CartList'
import { useLocation } from 'react-router-dom';
import Store from '../Redux/Store';
import './Cart.css'
import { useDispatch } from 'react-redux';

const Cart = (props) => {
    // const { cart } = Store.getState()
    let dispatch=useDispatch()
    let count = useSelector(state => state.cart.count)
    let cart_copy = useSelector(state => state.cart.cartlist)
    const HandleRemove=(index)=>{
        dispatch(removeItem(index))
    }
    return (
        <div>
            <p className='you_have_ordered'>You have ordered:</p>
           {
               
           (count!=0)&&<div className='cart_parent'>
                {
                    
                   cart_copy.map((product,index) => (<div className='cart_child' key={index}>
                        <div className='imageicon'>
                            <img src={product.image} className='styleImage'/>
                        </div>
                        <div className='c_info'>
                            <p className='c_title'>{product.title}</p>
                            <p className='c_des'>{product.description}</p>
                            <p className='c_price'>{product.price}</p>
                        </div>
                        <div className='remove-btn'>
                            <button className='btn' onClick={()=>HandleRemove(index)}>Remove</button>
                        </div>
                    </div>

                    ))
                }

            </div>
            }
            {
               
                (count===0)&&<div className='cart_empty'><h1>Cart Empty!! Please Add Some Products</h1></div>
            }
        </div>

    )
}
export default Cart;