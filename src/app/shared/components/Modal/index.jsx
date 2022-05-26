import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { Button } from "@mui/material";
import { style } from "./style";
import { Close } from "@mui/icons-material";

export default function ModalComponent(props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button onClick={handleOpen} >{props.buttonName}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box style={style}>
          <Button
            variant="outlined"
            onClick={handleClose}
            sx={{ position: "absolute", right: "0" }}
          >
            <Close />
          </Button>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ textAlign: "center", marginTop: "16px" }}
          >
            {props.title}
          </Typography>

          {props.content}
        </Box>
      </Modal>
    </>
  );
}
