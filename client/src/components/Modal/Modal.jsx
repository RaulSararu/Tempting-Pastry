import React, { useContext, useState } from "react";
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

import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { Button, Grid } from "@mui/material";
import "./style.css";
import { MyContext } from "../Context";

export default function Modal({ topRightModal, toggleShow, setTopRightModal }) {
  const { cart, addToCart, removeItem, itemsPrice } = useContext(MyContext);

  console.log("Cart", cart);

  return (
    <div className="Modal" style={{ color: "black" }}>
      <MDBModal
        animationDirection="right"
        show={topRightModal}
        tabIndex="-1"
        setShow={setTopRightModal}
      >
        <MDBModalDialog position="top-right" side>
          <MDBModalContent>
            <MDBModalHeader className="bg-info text-white bg-dark bg-gradient">
              <MDBModalTitle>CART</MDBModalTitle>
              <MDBBtn
                color="none"
                className="btn-close btn-close-white"
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <Grid container>
                <Grid item xs={12}>
                  {cart.length === 0 ? (
                    <div>CART EMPTY !!!</div>
                  ) : (
                    <MDBContainer>
                      <MDBRow>
                        <MDBCol size="7" className="col-example">
                          Item
                        </MDBCol>
                        <MDBCol size="3" className="col-example">
                          QTY
                        </MDBCol>
                        <MDBCol size="2" className="col-example">
                          Price
                        </MDBCol>
                      </MDBRow>
                      <MDBRow>
                        <div className="cartItem">
                          {cart.map((item) => (
                            <div className="cart-container">
                              <div className="imageandname">
                                <div className="image">
                                  <img src={item.image} alt="" />
                                </div>
                                <div className="cartname">{item.name}</div>
                              </div>
                              <div className="box-qty">
                                <button onClick={() => removeItem(item)}>
                                  -
                                </button>
                                <p>{item.qty}</p>
                                <button onClick={() => addToCart(item)}>
                                  +
                                </button>
                              </div>
                              <div className="cartprice">
                                <span>{item.qty * item.price} $</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </MDBRow>
                    </MDBContainer>
                  )}
                </Grid>
              </Grid>
              <div className="row">
                <div className="col-9">
                  <p>Do you need more time to make a purchase decision?</p>
                  <p>
                    No pressure, your product will be waiting for you in the
                    cart.
                  </p>
                </div>
              </div>
            </MDBModalBody>
            <MDBModalFooter>
              <Link to="/cart">
                <Button sx={{ fontFamily: "sans-serif" }} variant="contained">
                  Go to the cart
                </Button>
              </Link>
              <Button
                sx={{ fontFamily: "sans-serif" }}
                variant="outlined"
                onClick={toggleShow}
              >
                Close
              </Button>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </div>
  );
}
