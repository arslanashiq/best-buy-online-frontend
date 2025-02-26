/* eslint-disable no-unused-vars */
import { useEffect, useMemo, useState } from "react";
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
import { UseAppContext } from "../../context/AppContext";
import { update_balance, update_remaining_task_count } from "../../DAL/user";
import { USER_PRIZE_LIST } from "./utilities/constant";

function RollPage() {
  const { userData, fetchUserDetails, updateUserDetails } = UseAppContext();

  const slotsList = ["slot_1", "slot_2", "slot_3"];
  const imagesList = [
    "https://bestbuyonlines.com/public/NorthernStar/dist/grab/20240623_222816.png",
    "https://bestbuyonlines.com/public/NorthernStar/dist/grab/6631336b2f25d1714500459.jpg",
    "https://bestbuyonlines.com/public/NorthernStar/dist/grab/663135f1d733d1714501105.jpg",
    "https://bestbuyonlines.com/public/NorthernStar/dist/grab/663136503553b1714501200.jpg",
  ];

  const [openModal, setOpenModal] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const selectedPrize = useMemo(() => {
    const randomNumber = Math.floor(Math.random() * USER_PRIZE_LIST.length);
    const commission = Math.floor(Math.random() * (50 - 5 + 1)) + 5;

    return { ...USER_PRIZE_LIST[randomNumber], commission };
  }, [USER_PRIZE_LIST, userData?.remaining_tasks]);

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  function spinImages() {
    update_remaining_task_count(userData?._id).then((response) => {
      updateUserDetails(response?.data);
    });
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
  const handleClickProcessing = async () => {
    setIsProcessing(true);
    update_balance(userData?._id, {
      balance_amount:
        Number(userData?.balance_amount || 0) +
        Number(selectedPrize.commission),
    }).then((response) => {
      setIsProcessing(false);
      handleCloseModal();
      updateUserDetails(response?.data);
    });
  };

  useEffect(() => {
    if (!userData) {
      fetchUserDetails();
    }
  }, []);
  return (
    <div className="container-fluid">
      <Dialog
        open={openModal}
        // onClose={handleCloseModal}
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
                src={selectedPrize.image}
                alt=""
              />
            </Box>
            <Stack spacing={1}>
              <div>
                <h2>{selectedPrize?.name}</h2>
                <p>Price: ${selectedPrize.price}</p>
                <p>Quantity: {selectedPrize.quantity}X</p>
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
                <div>${selectedPrize.commission}</div>
              </div>
            </Stack>
          </Stack>
          <Stack className="w-100" direction="row" justifyContent="center">
            <Button
              variant="contained"
              sx={{ backgroundColor: "white", color: "black" }}
              className="text-capitalize fw-bold"
              onClick={handleClickProcessing}
            >
              {isProcessing ? "processing..." : "Received Now"}
            </Button>
          </Stack>
        </Stack>
      </Dialog>
      <div className="row">
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
              <button
                className="spin-button"
                disabled={userData?.remaining_tasks === 0}
                onClick={spinImages}
              >
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
              <p>{userData?.remaining_tasks}</p>
            </div>
            <div className="centerItem">
              <img
                src="https://bestbuyonlines.com/css/roll/static_2022/image_24/BALANCE.png"
                alt=""
                style={{ width: "25px", height: "25px" }}
              />
              <div>Account Balance</div>
              <p>${userData?.balance_amount}</p>
            </div>
          </div>
        </div>

        <Footer active={2} />
      </div>
    </div>
  );
}

export default RollPage;
