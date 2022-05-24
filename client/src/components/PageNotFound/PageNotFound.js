import * as React from "react";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import Modal from "@mui/material/Modal";
import VideoNotFound from "../../assets/video/notFound.mp4"
import "../PageNotFound/PageNotFound.css"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  height: "60%",
  bgcolor: "background.paper",
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
         <div className='mainDivNotFound'>
            <div className='leftDivNotFound'>
              <video className='videoNotFound' src={VideoNotFound} autoPlay loop muted></video>
            </div>
            <div className='rightDivNotFound'>
              <h1 className="h1NotFound">Oops...</h1>
              <h2 className="h2NotFound">The Page You're Looking For Was Not Found</h2>
                <div className="backDivNotFound">
                  <ArrowBackIcon 
                    fontSize="large"
                  /><Link className="linkHomeNotFound" to="/">Back to the homepage...</Link>
                  
                </div>
            </div>
        
          </div>
        </Box>
      </Modal>
    </div>
  );
}

