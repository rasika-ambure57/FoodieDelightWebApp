import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import { Button, DialogContent } from "@mui/material";
import "../styles/AddRestaurant.css";
import CloseIcon from "@mui/icons-material/Close";
import {Typography } from "@mui/material";

export default function AddRestaurant(props) {
  const { title, children, openPopup, setOpenPopup } = props;

  return (
    <div>
      <Dialog
        open={openPopup}
        maxWidth="md"
        classes={{ paper: "dialogWrapper" }}
      >
        <DialogTitle>
          <div style={{ display: "flex" }}>
            <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
              {title}
            </Typography>
            <Button
              color= "secondary"
              onClick={() => {
                setOpenPopup(false);
              }}
            >
              <CloseIcon />
            </Button>
          </div>
        </DialogTitle>
        <DialogContent>
          <div>Content goes Here</div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
