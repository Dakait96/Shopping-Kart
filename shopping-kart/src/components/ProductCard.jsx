import React from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol
} from 'mdb-react-ui-kit';
import { useSelector,useDispatch } from 'react-redux';
import { addToCart } from '../feature/cartSlice';

export default function ProductCard() {
    const dispatch = useDispatch();

    const items = useSelector((state)=>state.allCart.items)
    // console.log('Items:',items)
    return (
        <div>
        <MDBContainer>
        <MDBRow>
        
       {items.map((item)=>(<MDBCol key={item.id} size='3'> <MDBCard  className='mt-3'>
       <MDBCardImage src={item.img} position='top' alt='...' />
       <MDBCardBody>
           <MDBCardTitle>{item.title}</MDBCardTitle>
           <MDBCardText>
               {item.price}
           </MDBCardText>
           <MDBBtn onClick={()=>dispatch(addToCart(item))}>Add to kart</MDBBtn>
       </MDBCardBody>
   </MDBCard>
   
   </MDBCol>
   ))
}
</MDBRow>
           
            </MDBContainer>
        </div>
    );
}