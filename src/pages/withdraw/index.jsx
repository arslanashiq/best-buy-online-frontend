/* eslint-disable react/no-unknown-property */

import { useState } from "react";
import { Box, Toolbar } from "@mui/material";

import { useNavigate } from "react-router-dom";
import BackdropComponent from "../../components/BackdropComponent";

import "./withdraw.css";
import TopbarWithWhiteBackground from "../../components/TopbarWithWhiteBackground";

function WithDrawPage() {
  const navigate = useNavigate();

  const [openBackdrop, setOpenBackdrop] = useState(false);

  const handleNavigate = (link) => {
    navigate(link);
  };
  return (
    <Box>
      <TopbarWithWhiteBackground title="Withdraw" />
      <Toolbar
        sx={{
          minHeight: { xs: "48px", sm: "48px" }, // Override the min-height set by MUI
        }}
      />
      <input
        type="hidden"
        name="_token"
        defaultValue="pb38dYNAf8zikybrf9u43YmJEOW8dwVY2GbJ5WFf"
      />

      {/* 标签栏 */}
      <div className="list_title">
        <div className="title__wrapper__nav">
          <div className="title__wrapper__item" active="">
            <span>Withdraw Now</span>
          </div>
          <div
            className="title__wrapper__item"
            onClick={() => handleNavigate("/history")}
          >
            <span>Withdraw History</span>
          </div>
        </div>
      </div>
      <div className="backTop">
        <div style={{ fontSize: 10 }}>Account Balance</div>
        <div style={{ fontSize: 16, fontWeight: 700 }}>$20324</div>
      </div>
      <div className="page_box">
        <div className="DepositAmount">Withdrawal Method</div>
        <div className="Withdrawal">
          Please Confirm Withdrawal to Customer Service
        </div>
        {/* 选择提款账户 */}
        <div className="deposit">
          <div className="depositText">
            <div className="lebal">Withdrawal method</div>
            <span
              className="input_box"
              id="withdrawType"
              style={{ color: "rgb(118, 118, 118)" }}
            >
              Bank Alfalah
            </span>
          </div>
          <div className="depositText">
            <div className="lebal">Withdrawal Amount</div>
            <input
              type="number"
              name="amount"
              defaultValue=""
              placeholder="Enter the Withdrawal Amount"
              autoComplete="off"
              className="input_box withdraw_money"
            />
            <div className="input_all">All</div>
          </div>
          <div className="depositText">
            <div className="lebal">Withdraw Password</div>
            <input
              type="password"
              name="password"
              defaultValue=""
              placeholder="Type Here"
              autoComplete="off"
              className="input_box fund_pwd"
            />
          </div>
        </div>
        <div className="recharge_btn">
          <button className="btn_submit bottomButton depositSub">
            Confirm
          </button>
          <button
            className="btn_submit bottomButton"
            onClick={() => {
              setOpenBackdrop(true);
            }}
          >
            Online customer service
          </button>
        </div>
      </div>
      <BackdropComponent
        openBackdrop={openBackdrop}
        setOpenBackdrop={setOpenBackdrop}
      />
    </Box>
  );
}

export default WithDrawPage;
