import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateCart,countCart} from '../Redux/Slices/CartList'
import Products from '../Products'
import { useState } from 'react'
import { useEffect } from 'react'
import NavBar from './NavBar'
import Cart from './Cart'
import { Link } from 'react-router-dom'
import './Homepage.css'

import Store from '../Redux/Store'
export default function App() {
  let cart = useSelector(state => state.cart.cartlist)
  const dispatch = useDispatch()
  const [productList,setProducts]=useState([])
  useEffect(()=>{
    if(productList.length!=0)
    {
        dispatch(updateCart(productList))
    }
    

    console.log('hiii',cart);

  },[productList])
  const HandleProduct=(product)=>{

    setProducts((prev)=>([...prev,product]))
    dispatch(countCart())
  }
    return (
      <div className='parent'>
      {
          Products.map((product,index)=><div key={index} className='child'>
          <img src={product.image} className='imageCard'/>
          <p className='title'>{product.title}</p>
          <p className='des'>{product.description}</p>
          <p className='price'>Price: {product.price}
          <span className='total'>{product.total}</span>
          </p>
           <button className='add_to_cart' onClick={()=>HandleProduct(product)}>ADD TO CART</button> 
          </div>) 
  
      }
      
</div>
  )
}