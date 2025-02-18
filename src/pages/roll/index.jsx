/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Footer from "../../components/footer/Footer";
import Topbar from "../../components/Topbar";

//styles
import "./roll.css";
import SpinnerImages from "./components/SpinnerImages";
import {
  Box,
  Button,
  Dialog,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { Close } from "@mui/icons-material";

function RollPage() {
  const slotsList = ["slot_1", "slot_2", "slot_3"];
  const imagesList = [
    "https://bestbuyonlines.com/public/NorthernStar/dist/grab/20240623_222816.png",
    "https://bestbuyonlines.com/public/NorthernStar/dist/grab/6631336b2f25d1714500459.jpg",
    "https://bestbuyonlines.com/public/NorthernStar/dist/grab/663135f1d733d1714501105.jpg",
    "https://bestbuyonlines.com/public/NorthernStar/dist/grab/663136503553b1714501200.jpg",
  ];

  const [openModal, setOpenModal] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  function spinImages() {
    slotsList.forEach((slot) => {
      document.querySelector(`.${slot}`).classList.add("spin");
      setTimeout(() => {
        document.querySelector(`.${slot}`).classList.remove("spin");
      }, 4000);
      setTimeout(() => {
        const randomNumber = Math.floor(Math.random() * 3) + 1;

        document.querySelector(`.${slot}_image_0`).src =
          imagesList[randomNumber];
      }, 3000);
      setTimeout(() => {
        setOpenModal(true);
      }, 5000);
    });
  }
  return (
    <div className="container-fluid">
      <div className="row">
        <Dialog
          open={openModal}
          onClose={handleCloseModal}
          maxWidth="md"
          fullWidth
        >
          <Stack p={1} sx={{ backgroundColor: "#a5e296" }}>
            <div className="modal-title text-center fw-bold">
              Order Grabing Success
            </div>
            <Stack direction="row" justifyContent="center" alignItems="center">
              <Box>
                <img
                  style={{ width: "100%", height: 250, objectFit: "contain" }}
                  src="https://bestbuyonlines.com/public/upload/product/1737556732YcS.png"
                  alt=""
                />
              </Box>
              <Stack spacing={1}>
                <div>
                  <h2>CD 70</h2>
                  <p>Price: $630.00</p>
                  <p>Quantity: 1X</p>
                </div>
                <div
                  className="profit_amount "
                  style={{
                    borderRadius: 5,
                    border: "2px solid red",
                    padding: 5,
                  }}
                >
                  <div>Total Commmission</div>
                  <div>$2.00</div>
                </div>
              </Stack>
            </Stack>
            <Stack className="w-100" direction="row" justifyContent="center">
              <Button
                variant="contained"
                sx={{ backgroundColor: "white", color: "black" }}
                className="text-capitalize fw-bold"
                onClick={() => {
                  setIsProcessing(true);
                  setTimeout(() => {
                    handleCloseModal();
                  }, 2000);
                }}
              >
                {isProcessing ? "processing..." : "Received Now"}
              </Button>
            </Stack>
          </Stack>
        </Dialog>
        <Topbar />
        <div className="scroll-container">
          <img
            src="https://bestbuyonlines.com/css/roll/static_2022/image_24/rot-order.jpg"
            alt="Scrolling Image"
          />
          <img
            src="https://bestbuyonlines.com/css/roll/static_2022/image_24/rot-order.jpg"
            alt="Scrolling Image"
          />
        </div>

        {/*  Spin */}

        <div className="container">
          <div className="row  justify-content-center align-items-center pt-5">
            {slotsList.map((slot, index) => (
              <div key={slot} className="col-2">
                <SpinnerImages
                  index={index}
                  name={slot}
                  imagesList={imagesList}
                />
              </div>
            ))}
          </div>

          {/* <div className="w-100 d-flex justify-content-center"> */}
          <div className="row justify-content-center">
            <div className="col-6 col-md-5 col-lg-3">
              <button className="spin-button" onClick={spinImages}>
                Start Grab
              </button>
            </div>
          </div>
          {/* </div> */}
        </div>

        <div className="container">
          <div className="info_msg">
            <div className="centerItem">
              <img
                src="https://bestbuyonlines.com/css/roll/static_2022/image_24/PROFIT.png"
                alt=""
                style={{ width: "25px", height: "25px" }}
              />
              <div>Today tasks</div>
              <p>21</p>
            </div>
            <div className="centerItem">
              <img
                src="https://bestbuyonlines.com/css/roll/static_2022/image_24/BALANCE.png"
                alt=""
                style={{ width: "25px", height: "25px" }}
              />
              <div>Account Balance</div>
              <p>$20,322.00</p>
            </div>
          </div>
        </div>

        <Footer active={2} />
      </div>
    </div>
  );
}

export default RollPage;
