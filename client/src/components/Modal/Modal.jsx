import React, { useState } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { Button, Grid } from "@mui/material";
import "./style.css"

export default function Modal() {
 

  const [topRightModal, setTopRightModal] = useState(false);

  const toggleShow = () => setTopRightModal(!topRightModal);
  return (
    <div>
      <MDBBtn onClick={toggleShow}>Top right</MDBBtn>

      <MDBModal
        animationDirection="right"
        show={topRightModal}
        tabIndex="-1"
        setShow={setTopRightModal}
      
      >
        <MDBModalDialog position="top-right" side >
          <MDBModalContent>
            <MDBModalHeader className="bg-info text-white bg-dark bg-gradient" >
              <MDBModalTitle >CART</MDBModalTitle>
              <MDBBtn
                color="none"
                className="btn-close btn-close-white"
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <Grid container>
                <Grid item xs={12}>
                  {/* {
                    cartItems.length === 0 ? <div>Cart empty</div> : <p>not empty</p>
                  } */}
                  <div className="my-cart">
                    <div className="item">
                      <p>Item</p>
                    </div>
                    <div className="qty">
                      <p>QTY</p>
                      
                      <div className="box-qty">
                        <button>-</button>
                        <p>0</p>
                        <button>+</button>
                      </div>
                    </div>
                    <div className="price">
                      <p>Price</p>
            
                    </div>
                  </div>
                  {/* {cartItems.map((item) => (
                    <div key={item.id} className='row'>
                      <div>{item.name}</div>
                      <div className="box-qty">
                        <button onClick={()=> onRemove(item)}>-</button>
                        <p>{item.qty}</p>
                        <button onClick={()=> onAdd(item)}>+</button>
                   
                      </div> 
                      <div>

                      <p>$ {item.price.toFixed(2)}</p>
                      </div>

                      
                    </div>
                  ))} */}
                </Grid>
              </Grid>
              <div className='row'>
            
              

                <div className='col-9'>
                  <p>Do you need more time to make a purchase decision?</p>
                  <p>No pressure, your product will be waiting for you in the cart.</p>
                </div>
              </div>
            </MDBModalBody>
            <MDBModalFooter>
              <Link to="/cart">
                <Button variant="contained">Go to the cart</Button>
              </Link>
              <Button variant="outlined" onClick={toggleShow}>
                Close
              </Button>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </div>
  );
}
