import React  from 'react'
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';

import { MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
  } from 'mdb-react-ui-kit';

export default function ModalConf({toggleShow,basicModal,setBasicModal}) {


  return (
    <div>
        <>
        
    <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
      <MDBModalDialog className='modal-dialog modal-dialog-centered'>
        <MDBModalContent>
          <MDBModalHeader>
            <MDBModalTitle style={{color:"rgb(34, 27, 80)", textAlign:"center"}}>Thank you for your purchase !!!
            <InsertEmoticonIcon sx={{marginLeft:"20px", marginTop:"-2px"}}/>
            </MDBModalTitle>
            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
          </MDBModalHeader>
          <MDBModalBody style={{color:"rgb(34, 27, 80)"}}>We've received your order, and your parcel will soon be on it's way ! Please check your email for updates and order tracking</MDBModalBody>

    
        </MDBModalContent>
      </MDBModalDialog>
    </MDBModal>
        </>
    </div>
  )
}
