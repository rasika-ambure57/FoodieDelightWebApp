import React from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
const Header = () => {
  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
          <Toolbar>
            <Typography>Welcome To My Restaurant</Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Header;
