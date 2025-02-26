import PropTypes from "prop-types";
import Drawer from "@mui/material/Drawer";

import { Box } from "@mui/material";
//styles
import "./drawer.css";
import { useNavigate } from "react-router-dom";
import { UseAppContext } from "../../context/AppContext";
import { useEffect } from "react";

export default function DrawerComponent({ open, toggleDrawer }) {
  const { userData, fetchUserDetails } = UseAppContext();
  const navigate = useNavigate();
  const handleNavigate = (link) => {
    navigate(link);
    toggleDrawer();
  };

  useEffect(() => {
    if (!userData) {
      fetchUserDetails();
    }
  }, []);
  return (
    <Drawer open={open} onClose={() => toggleDrawer()}>
      <Box sx={{ width: 260 }}>
        <div
          className="popupLeftDrawer"
          style={{ transform: "translateX(0%)" }}
        >
          <div className="imgTop">
            <img
              className=""
              src="https://bestbuyonlines.com/css/h/static_2022/image_24/site-logo.png"
              alt=""
            />
          </div>
          <div className="popupLeftContent">
            <div className="itemsCenter">
              <img
                className="itemsCenterImage"
                src="https://bestbuyonlines.com/css/h/static_2022/image_24/avatar.png"
                alt=""
              />
              <div className="itemsCenterText">
                <div className="rightBox">
                  <span>Zeni Zuni</span>
                  <img
                    src="https://bestbuyonlines.com/css/h/upload/base_file/9fe69abf4e4129cf/935554b488e9b651.png"
                    alt=""
                    style={{ width: 25, height: 25, marginLeft: 4 }}
                  />
                </div>
                <div className="text">Account Balance</div>
                <div className="text">${userData?.balance_amount}</div>
              </div>
            </div>
            {/* invite */}
            {/*<div class="copybottomText" onclick="copyed('241536')">*/}
            {/*    <span>Invitation Code: 241536</span>*/}
            {/*    <img src="/static_2022/image_24/COPY.png" alt="" style="width:20px;height:20px;"/>*/}
            {/*</div>*/}
          </div>
          <div className="contentList">
            <div
              className="contentListItem"
              onClick={() => handleNavigate("/deposit")}
            >
              <img
                className="menuImg"
                src="https://bestbuyonlines.com/css/h/static_2022/image_24/menu_10001.png"
                alt=""
              />
              <div className="menuTitle">
                <span>Top Up</span>
              </div>
            </div>
            <div
              className="contentListItem"
              onClick={() => handleNavigate("/withdraw")}
            >
              <img
                className="menuImg"
                src="https://bestbuyonlines.com/css/h/static_2022/image_24/menu_10002.png"
                alt=""
              />
              <div className="menuTitle">
                <span>Withdraw</span>
              </div>
            </div>
            <div
              className="contentListItem"
              onClick={() => handleNavigate("/personal")}
            >
              <img
                className="menuImg"
                src="https://bestbuyonlines.com/css/h/static_2022/image_24/menu_10003.png"
                alt=""
              />
              <div className="menuTitle">
                <span>Personal Info</span>
              </div>
            </div>
            <div
              className="contentListItem"
              onClick={() => handleNavigate("/add-bank")}
            >
              <img
                className="menuImg"
                src="https://bestbuyonlines.com/css/h/static_2022/image_24/menu_WALLET.png"
                alt=""
              />
              <div className="menuTitle">
                <span>Bank Information</span>
              </div>
            </div>
            <div
              className="contentListItem"
              onClick={() => handleNavigate("/terms")}
            >
              <img
                className="menuImg"
                src="https://bestbuyonlines.com/css/h/static_2022/image_24/menu_T_C.png"
                alt=""
              />
              <div className="menuTitle">
                <span>Terms Of Use</span>
              </div>
            </div>
            <div
              className="contentListItem"
              onClick={() => handleNavigate("/member")}
            >
              <img
                className="menuImg"
                src="https://bestbuyonlines.com/css/h/static_2022/image_24/menu_FAQ.png"
                alt=""
              />
              <div className="menuTitle">
                <span>Member Description</span>
              </div>
            </div>
            <div
              className="contentListItem"
              onClick={() => handleNavigate("/about")}
            >
              <img
                className="menuImg"
                src="https://bestbuyonlines.com/css/h/static_2022/image_24/nav-ABOUT.png"
                alt=""
              />
              <div className="menuTitle">
                <span>About Us</span>
              </div>
            </div>
            <div
              className="contentListItem"
              onClick={() => handleNavigate("/home")}
            >
              <img
                className="menuImg"
                src="https://bestbuyonlines.com/css/h/static_2022/image_24/menu_homes.png"
                alt=""
              />
              <div className="menuTitle">
                <span>Home</span>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </Drawer>
  );
}

DrawerComponent.propTypes = {
  open: PropTypes.bool,
  toggleDrawer: PropTypes.func,
};
