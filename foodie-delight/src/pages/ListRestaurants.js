import React from "react";
import { restaurantList } from "../data/restaurantData";
import Layout from "./../components/Layout/Layout";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
} from "@mui/material";
import AddRestaurant from "../pages/AddRestaurant";
import { useState } from "react";
import Edit from "@mui/icons-material/Edit";
import Delete from "@mui/icons-material/Delete";

const Menu = () => {
  const [openPopup, setopenPopup] = useState(false);
  function openPopupNow() {
    setopenPopup(true);
  }
  const handleEdit = () => {
    setopenPopup(true);
  };

  const handleDelete = () => {
    window.alert("Restaurant deleted!");
  };
  return (
    <>
      <Layout>
        <div className="headerContainer">
          <button onClick={openPopupNow}>Add Restaurant</button>
        </div>
        <Box
          sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
        >
          {restaurantList.map((menu) => (
            <Card sx={{ maxWidth: "390px", display: "flex", m: 2 }}>
              <CardActionArea>
                <CardMedia
                  sx={{ minHeight: "400px" }}
                  component={"img"}
                  src={menu.image}
                  alt={menu.name}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom component={"div"}>
                    {menu.name}
                    <div
                      style={{
                        display: "flex",
                        gap: "8px", // Space between icons
                      }}
                    >
                      <IconButton onClick={handleEdit}>
                        <Edit />
                      </IconButton>
                      <IconButton onClick={handleDelete}>
                        <Delete />
                      </IconButton>
                    </div>
                  </Typography>
                  <Typography variant="body2">
                    Location: {menu.location}
                  </Typography>
                  <Typography variant="body2">
                    Price for 2: {menu.price}
                  </Typography>
                  <Typography variant="body2">
                    Discount: {menu.discount}
                  </Typography>
                  <Typography variant="body2">{menu.description}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Box>
      </Layout>
      <AddRestaurant
        title="Add Restaurant"
        openPopup={openPopup}
        setOpenPopup={setopenPopup}
      ></AddRestaurant>
    </>
  );
};

export default Menu;
