import { useState } from "react";
import {
  Box,
  Dialog,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
//icons
import { Close } from "@mui/icons-material";
//components

import Topbar from "../../components/Topbar";
import Greeting from "./components/Greeting";
import VIPLevelCard from "./components/VIPLevelCard";
import BackgroundImage from "../../components/BackgroundImage";
//styles
import "./home.css";
import Footer from "../../components/footer/Footer";
import Slider from "./components/Slider";
import { useNavigate } from "react-router-dom";
import BackdropComponent from "../../components/BackdropComponent";

function HomePage() {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(true);
  const [openBackdrop, setOpenBackdrop] = useState(false);

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleNavigate = (link) => {
    navigate(link);
  };

  return (
    <>
      <BackdropComponent
        openBackdrop={openBackdrop}
        setOpenBackdrop={setOpenBackdrop}
      />
      <Dialog open={openModal} onClose={handleCloseModal} maxWidth="sm">
        <Stack spacing={3} p={1}>
          <Stack
            direction="row"
            justifyContent="space-between"
            className="w-100"
          >
            <Box>
              <Typography variant="subtitle1" className="fw-medium">
                Dear users:
              </Typography>
            </Box>
            <Box>
              <IconButton
                onClick={handleCloseModal}
                size="small"
                sx={{ backgroundColor: "rgb(59,184,185)" }}
                disableRipple
              >
                <Close sx={{ fontSize: 20, color: "white" }} />
              </IconButton>
            </Box>
          </Stack>

          <Typography variant="caption">
            In this special event launched by the company, couples are in luck!
            From now on, as long as you open a couple account, you can easily
            get a generous reward of 28 US dollars, let love and surprise
            accompany you!
          </Typography>
        </Stack>
      </Dialog>
      <BackgroundImage>
        <Topbar />
        <Toolbar
          sx={{
            minHeight: { xs: "48px", sm: "48px" }, // Override the min-height set by MUI
          }}
        />

        <Slider />

        <Greeting />
        <div className="page_more">
          <div className="more_list">
            <div className="more_item" onClick={() => handleNavigate("/roll")}>
              <img
                className="more_item_img"
                src="https://bestbuyonlines.com/css/h/static_2022/image_24/nav-starting.png"
                alt=""
              />
              <p className="more_item_txt">Starting</p>
            </div>
            <div
              className="more_item"
              onClick={() => handleNavigate("/statement")}
            >
              <img
                className="more_item_img"
                src="https://bestbuyonlines.com/css/h/static_2022/image_24/nav-CERT.png"
                alt=""
              />
              <p className="more_item_txt">Financial Statement</p>
            </div>
            <div
              className="more_item"
              onClick={() => handleNavigate("/withdraw")}
            >
              <img
                className="more_item_img"
                src="https://bestbuyonlines.com/css/h/static_2022/image_24/nav-WITHDRAWAL.png"
                alt=""
              />
              <p className="more_item_txt">Withdrawal</p>
            </div>
            <div
              className="more_item"
              onClick={() => {
                setOpenBackdrop(true);
              }}
            >
              <img
                className="more_item_img"
                src="https://bestbuyonlines.com/css/h/static_2022/image_24/nav_WITHDRAWAL.png"
                alt=""
              />
              <p className="more_item_txt">Customer Service</p>
            </div>
            <div className="more_item" onClick={() => handleNavigate("/terms")}>
              <img
                className="more_item_img"
                src="https://bestbuyonlines.com/css/h/static_2022/image_24/nav-T_C.png"
                alt=""
              />
              <p className="more_item_txt">Terms Of Use</p>
            </div>
            <div
              className="more_item"
              onClick={() => handleNavigate("/revenue")}
            >
              <img
                className="more_item_img"
                src="https://bestbuyonlines.com/css/h/static_2022/image_24/nav-LATEST.png"
                alt=""
              />
              <p className="more_item_txt">Revenue Simulation</p>
            </div>
            <div
              className="more_item"
              onClick={() => handleNavigate("/member")}
            >
              <img
                className="more_item_img"
                src="https://bestbuyonlines.com/css/h/static_2022/image_24/nav-FAQ.png"
                alt=""
              />
              <p className="more_item_txt">Member Description</p>
            </div>
            <div className="more_item" onClick={() => handleNavigate("/about")}>
              <img
                className="more_item_img"
                src="https://bestbuyonlines.com/css/h/static_2022/image_24/nav-ABOUT.png"
                alt=""
              />
              <p className="more_item_txt">About Us</p>
            </div>
          </div>
        </div>

        <VIPLevelCard />
        <Footer />
      </BackgroundImage>
    </>
  );
}

export default HomePage;
