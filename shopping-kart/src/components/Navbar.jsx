import React, { useEffect } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn,  
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { getCartTotal } from '../feature/cartSlice';

export default function Navbar() {
  const dispatch = useDispatch()
  const {cart,totalQuantity} = useSelector((state)=>state.allCart)
  useEffect(()=>{

    dispatch(getCartTotal())
},[cart])
  return (
    <MDBNavbar light bgColor='light' className='sticky-top'>
      <MDBContainer fluid>
        <MDBNavbarBrand>Navbar</MDBNavbarBrand>
        <Link to='/'>
        <span>All Products</span></Link>
        <Link to='/cart'>
        <MDBBtn outline>Cart({totalQuantity})</MDBBtn>
        </Link>         
        
      </MDBContainer>
    </MDBNavbar>
  );
}