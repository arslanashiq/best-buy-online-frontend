import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, Stack } from "@mui/material";
import DrawerComponent from "./drawer-component/Drawer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Topbar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };
  return (
    <>
      <DrawerComponent open={open} toggleDrawer={toggleDrawer} />
      <AppBar position="fixed" sx={{ padding: 0, backgroundColor: "black" }}>
        <Toolbar
          sx={{
            minHeight: { xs: "48px", sm: "48px" }, // Override the min-height set by MUI
          }}
        >
          <Stack
            direction="row"
            className="w-100"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <IconButton
                edge="start"
                color="inherit"
                size="small"
                onClick={() => toggleDrawer()}
              >
                <MenuIcon />
              </IconButton>
              <img
                src="https://bestbuyonlines.com/css/h/static_2022/image_24/site-logo.png"
                style={{ width: "130px", objectFit: "contain" }}
              />
            </Box>

            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              className="cursor-pointer"
              onClick={() => navigate("/profile")}
            >
              <img
                src="https://bestbuyonlines.com/css/h/static_2022/image_24/profile.png"
                style={{ height: 20, width: 20, objectFit: "contain" }}
              />
              <Typography className="link fw-bold" variant="body2">
                My Profile
              </Typography>
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Topbar;
