import React from "react";
import { MenuList } from "../data/data";
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
import { Link } from "react-router-dom";
import { useState } from "react";
import Edit from "@mui/icons-material/Edit";
import Delete from "@mui/icons-material/Delete";
import AddRestaurant from "../pages/AddMenuItem";
import AddMenuItem from "../pages/AddMenuItem";

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
          <Link to="/menu" className="button-link">
            <button onClick={openPopupNow}>Add Menu Item</button>
          </Link>
        </div>
        <Box
          sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
        >
          {MenuList.map((menu) => (
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
                  </Typography>
                  <IconButton onClick={handleEdit}>
                    <Edit />
                  </IconButton>
                  <IconButton onClick={handleDelete}>
                    <Delete />
                  </IconButton>
                  <Typography variant="body2">Price : {menu.price}</Typography>
                  <Typography variant="body2">{menu.description}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Box>
      </Layout>
      <AddMenuItem
        title="Add Restaurant"
        openPopup={openPopup}
        setOpenPopup={setopenPopup}
      ></AddMenuItem>
    </>
  );
};

export default Menu;
