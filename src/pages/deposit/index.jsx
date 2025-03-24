/* eslint-disable react/no-unknown-property */
import { Box, Toolbar } from "@mui/material";
// import { useNavigate } from "react-router-dom";
//components
import TopbarWithWhiteBackground from "../../components/TopbarWithWhiteBackground";
//styles
import "./deposit.css";
import { useState } from "react";
import BackdropComponent from "../../components/BackdropComponent";
function DepositPage() {
  // const navigate = useNavigate();
  const [amount, setAmount] = useState("");
  const [openBackdrop, setOpenBackdrop] = useState(false);
  const handleSelectAmount = (e) => {
    const value = e.target.getAttribute("data-val") || 0;
    [...document.querySelectorAll(".recharge_num_item")].map((button) => {
      button.removeAttribute("active", "");
    });
    e.target.setAttribute("active", "");
    setAmount(value);
  };
  // const handleNaigate = (link) => {
  //   navigate(link);
  // };
  const handleChangeAmount = (e) => {
    setAmount(e.target.value);
  };
  return (
    <Box sx={{ backgroundColor: "#E1E2E2" }}>
      <TopbarWithWhiteBackground title="Top Up" />
      <Toolbar
        sx={{
          minHeight: { xs: "48px", sm: "48px" }, // Override the min-height set by MUI
        }}
      />

      {/* 标签栏 */}
      <div className="list_title">
        <div className="title__wrapper__nav">
          <div active="" className="title__wrapper__item">
            <span>Top Up Now</span>
          </div>
          <div
            className="title__wrapper__item"
            // onClick={() => handleNaigate("/history")}
          >
            <span>Top Up History</span>
          </div>
        </div>
      </div>
      <div className="backTop">
        <div style={{ fontSize: 10 }}>Account Balance</div>
        <div style={{ fontSize: 17, fontWeight: 700, marginTop: 10 }}>
          $20,324.00
        </div>
      </div>
      <div className="page_box">
        <div className="recharge_msg">
          <div className="recharge_title">Top Up Amount</div>
        </div>
        <div className="recharge_num">
          <div
            className="recharge_num_item"
            data-val={200}
            onClick={handleSelectAmount}
          >
            <div className="item_amount">$ 200.00</div>
          </div>
          <div
            className="recharge_num_item"
            data-val={500}
            onClick={handleSelectAmount}
          >
            <div className="item_amount">$ 500.00</div>
          </div>
          <div
            className="recharge_num_item"
            data-val={1000}
            onClick={handleSelectAmount}
          >
            <div className="item_amount">$ 1000.00</div>
          </div>
          <div
            className="recharge_num_item"
            data-val={3000}
            onClick={handleSelectAmount}
          >
            <div className="item_amount">$ 3000.00</div>
          </div>
        </div>
        {/* 输入框 */}
        <div className="recharge_input">
          <div className="num_input">
            <span style={{ fontSize: 13 }}>Top Up Amount</span>
            <input
              value={amount}
              onChange={handleChangeAmount}
              type="number"
              placeholder="Type Here"
              className="input_box"
            />
          </div>
        </div>
        <div className="recharge_btn">
          <button
            className="btn_submit"
            onClick={() => {
              setOpenBackdrop(true);
            }}
          >
            Customer Service
          </button>
        </div>
        <BackdropComponent
          openBackdrop={openBackdrop}
          setOpenBackdrop={setOpenBackdrop}
        />
      </div>
    </Box>
  );
}

export default DepositPage;
