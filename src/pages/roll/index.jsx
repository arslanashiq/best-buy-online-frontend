/* eslint-disable no-unused-vars */
import { useEffect, useMemo, useState } from "react";
import Footer from "../../components/footer/Footer";
import Topbar from "../../components/Topbar";

//icons
import CloseIcon from "@mui/icons-material/Close";
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

  const [openCommissionModal, setOpenCommissionModal] = useState(false);
  const [openValidationModal, setOpenValidationModal] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const selectedPrize = useMemo(() => {
    const randomNumber = Math.floor(Math.random() * USER_PRIZE_LIST.length);
    let prize = USER_PRIZE_LIST[randomNumber];
    if (userData?.greater_task_number === userData?.remaining_tasks) {
      prize = {
        ...prize,
        price: Number(userData?.balance_amount) + 100,
      };
    }

    return { ...prize };
  }, [USER_PRIZE_LIST, userData]);

  const handleCloseCommissionModal = () => {
    setOpenCommissionModal(false);
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
        setOpenCommissionModal(true);
      }, 5000);
    });
  }

  const handleClickProcessing = async () => {
    setIsProcessing(true);
    if (Number(userData?.balance_amount) >= Number(selectedPrize?.price)) {
      update_balance(userData?._id, {
        balance_amount:
          Number(userData?.balance_amount || 0) +
          Number(selectedPrize.commission),
      }).then((response) => {
        setIsProcessing(false);
        handleCloseCommissionModal();
        updateUserDetails(response?.data);
      });
    } else {
      setIsProcessing(false);
      setOpenValidationModal(true);
    }
  };
  console.log(userData);

  const handleDisableButton = () => {
    if (!userData?.is_active) {
      return true;
    }
    if (userData?.remaining_tasks === 0) {
      return true;
    }
    if (Number(userData?.balance_amount) === 0) {
      return true;
    }
    return false;
  };
  useEffect(() => {
    if (!userData) {
      fetchUserDetails();
    }
  }, []);
  return (
    <div className="container-fluid">
      <Dialog
        open={openCommissionModal}
        // onClose={handleCloseModal}
        maxWidth="md"
        fullWidth
      >
        <Stack p={1} sx={{ backgroundColor: "#a5e296", position: "relative" }}>
          <IconButton
            onClick={handleCloseCommissionModal}
            sx={{ position: "absolute", top: 10, right: 10 }}
          >
            <CloseIcon />
          </IconButton>
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
                <p>Price: ${selectedPrize?.price}</p>
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
              className="text-capitalize fw-bold mt-2"
              onClick={handleClickProcessing}
            >
              {isProcessing ? "processing..." : "Received Now"}
            </Button>
          </Stack>
        </Stack>
      </Dialog>
      <Dialog open={openValidationModal} maxWidth="sm" fullWidth>
        <Stack p={1} sx={{ backgroundColor: "white", position: "relative" }}>
          <IconButton
            onClick={() => setOpenValidationModal(false)}
            sx={{ position: "absolute", top: 10, right: 10 }}
          >
            <CloseIcon />
          </IconButton>
          <div className="modal-title text-center fw-bold">
            Insufficient Balance
          </div>
          <Stack direction="row" justifyContent="center" alignItems="center">
            <Stack spacing={1} justifyContent="center" alignItems="center">
              <Typography>
                you do not have sufficient balance to recieve this commission.
                please contact customer support
              </Typography>
              <Button
                variant="contained"
                className=" fw-bold text-capitalize"
                color="primary"
                sx={{
                  borderRadius: 2,

                  color: "white",
                }}
                onClick={() => {
                  window.open("https://t.me/BestbuyCustomerService1", "blank");
                }}
              >
                Customer Service
              </Button>
            </Stack>
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
                disabled={handleDisableButton()}
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
