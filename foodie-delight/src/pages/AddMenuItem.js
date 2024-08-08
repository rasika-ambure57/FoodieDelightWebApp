import React from "react";
import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import {
  Button,
  DialogContent,
} from "@mui/material";
import "../styles/AddRestaurant.css";
import { Typography } from "@mui/material";
import Close from "@mui/icons-material/Close";

export default function AddMenuItem(props) {
  const { title, openPopup, setOpenPopup } = props;
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image: null,
    price: "",
  });

  const initialFormData = {
    name: "",
    description: "",
    image: null,
    price: ""
  };

  const [errors, setErrors] = useState({});

  const handleChange = (field) => (event) => {
    const value =
      field === "image" ? event.target.files[0] : event.target.value;
    setFormData({ ...formData, [field]: value });

    // Validate inputs on change
    validateField(field, value);
  };

  const validateField = (field, value) => {
    let errorMsg = "";

    switch (field) {
      case "name":
        if (value.length > 100)
          errorMsg = "Name must be less than 100 characters";
        break;
      case "description":
        if (value.length > 500)
          errorMsg = "Description must be less than 500 characters";
        break;
      case "price":
        if (!/^\d+$/.test(value)) errorMsg = "Price must be a number";
        break;
      case "discount":
        if (!/^\d+%$/.test(value))
          errorMsg = "Discount must be in the format of a number followed by %";
        break;
      default:
        break;
    }

    setErrors({ ...errors, [field]: errorMsg });
  };

  function closePopup() {
    window.alert("Menu Item Not Added");
    setOpenPopup(false);
    resetForm();
  }

  const resetForm = () => {
    setFormData(initialFormData);
    setErrors({});
  };

  const handleSubmit = () => {
    // Validate all fields before submission
    const newErrors = {};
    Object.keys(formData).forEach((field) => {
      validateField(field, formData[field]);
    });

    if (Object.values(newErrors).every((error) => !error)) {
      console.log("Form submitted", formData);
      setOpenPopup(false);
      window.alert("Menu Item added successfully!");
      resetForm();
      // Submit form data
    } else {
      setErrors(newErrors);
    }
  };

  const isFormValid = () => {
    return (
      formData.name &&
      formData.description &&
      formData.image &&
      formData.price &&
      Object.values(errors).every((error) => !error)
    );
  };

  return (
    <div>
      <Dialog
        open={openPopup}
        maxWidth="md"
        classes={{ paper: "dialogWrapper" }}
      >
        <div onClick={closePopup}>
          <Close />
        </div>
        <DialogTitle>
          <div style={{ display: "flex" }}>
            <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
              {title}
            </Typography>
          </div>
        </DialogTitle>
        <DialogContent className="scrollableContent">
          <div className="inputWrapper">
            <label>
              Name:
              <input
                type="text"
                value={formData.name}
                onChange={handleChange("name")}
                placeholder="Menu Item Name"
              />
              {errors.name && <div className="error">{errors.name}</div>}
            </label>
            <label>
              Description:
              <textarea
                value={formData.description}
                onChange={handleChange("description")}
                placeholder="Description"
              ></textarea>
              {errors.description && (
                <div className="error">{errors.description}</div>
              )}
            </label>
            <label>
              Image:
              <input
                type="file"
                onChange={handleChange("image")}
                accept="image/*"
              />
              {errors.image && <div className="error">{errors.image}</div>}
            </label>
            <label>
              Price:
              <input
                type="number"
                value={formData.price}
                onChange={handleChange("price")}
                placeholder="Price"
              />
              {errors.price && <div className="error">{errors.price}</div>}
            </label>
          </div>
        </DialogContent>
        <div className="centerButton">
          <Button onClick={handleSubmit} disabled={!isFormValid()}>
            Submit
          </Button>
        </div>
      </Dialog>
    </div>
  );
}
