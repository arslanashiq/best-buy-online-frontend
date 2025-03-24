/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from "react";
import { Toolbar } from "@mui/material";
import { useNavigate } from "react-router-dom";
//components
import Topbar from "../../components/Topbar";
import BackgroundImage from "../../components/BackgroundImage";
//styles
import { UseAppContext } from "../../context/AppContext";
import BackdropComponent from "../../components/BackdropComponent";
//styles
import "./profile.css";
import { logout_user } from "../../DAL/auth";

function ProfilePage() {
  const { userData, fetchUserDetails, setUserData } = UseAppContext();
  const navigate = useNavigate();

  const [openBackdrop, setOpenBackdrop] = useState(false);

  const handleNavigate = (link) => {
    navigate(link);
  };

  const handleLogout = async () => {
    handleNavigate("/login");
    localStorage.clear();
    setUserData(null);
    logout_user();
  };

  useEffect(() => {
    if (!userData) {
      fetchUserDetails();
    }
  }, []);

  return (
    <>
      <BackgroundImage>
        <Topbar />
        <Toolbar
          sx={{
            minHeight: { xs: "48px", sm: "48px" }, // Override the min-height set by MUI
          }}
        />

        <div style={{ height: 40 }} bis_skin_checked={1} />
        <div className="firstBox" bis_skin_checked={1}>
          <div className="infoBox" bis_skin_checked={1}>
            <img
              className="infoBoxImg"
              src="https://bestbuyonlines.com/css/profile/static_2022/image_24/avatar.png"
              alt=""
            />
            <div className="contentInfo" bis_skin_checked={1}>
              <div className="contentInfoName" bis_skin_checked={1}>
                {userData?.phone_number}
              </div>
            </div>
            <input type="hidden" name="task" defaultValue={25} />
            <div className="contentInfoMoney" bis_skin_checked={1}>
              <div
                className="contentInfoItem"
                style={{ borderRight: "1px solid #bdbdbd4d" }}
                bis_skin_checked={1}
              >
                <div className="value" bis_skin_checked={1}>
                  {userData?.remaining_tasks}
                </div>
                <div className="name" bis_skin_checked={1}>
                  Today Orders
                </div>
              </div>
              <div className="contentInfoItem" bis_skin_checked={1}>
                <div className="value" bis_skin_checked={1}>
                  ${userData?.balance_amount}
                </div>
                <div className="name" bis_skin_checked={1}>
                  Account Balance
                </div>
              </div>
            </div>
            {/* 信誉分 */}
          </div>
          {/* 列表 */}
          <div className="menuBox" bis_skin_checked={1}>
            <div className="menuBoxItem" bis_skin_checked={1}>
              <div
                className="classBox"
                bis_skin_checked={1}
                onClick={() => handleNavigate("/deposit")}
              >
                <div className="menuBoxImage" bis_skin_checked={1}>
                  <img
                    src="https://bestbuyonlines.com/css/profile/static_2022/image_24/menu_10001.png"
                    alt=""
                    style={{ height: 30, width: 30 }}
                  />
                </div>
                <div className="menuBoxFont" bis_skin_checked={1}>
                  <span>Top Up</span>
                </div>
              </div>
            </div>
            <div className="menuBoxItem" bis_skin_checked={1}>
              <div
                className="classBox"
                bis_skin_checked={1}
                onClick={() => handleNavigate("/withdraw")}
              >
                <div className="menuBoxImage" bis_skin_checked={1}>
                  <img
                    src="https://bestbuyonlines.com/css/profile/static_2022/image_24/menu_10002.png"
                    alt=""
                    style={{ height: 30, width: 30 }}
                  />
                </div>
                <div className="menuBoxFont" bis_skin_checked={1}>
                  <span>Withdraw</span>
                </div>
              </div>
            </div>
            <div className="menuBoxItem" bis_skin_checked={1}>
              <div
                className="classBox"
                bis_skin_checked={1}
                onClick={() => handleNavigate("/personal")}
              >
                <div className="menuBoxImage" bis_skin_checked={1}>
                  <img
                    src="https://bestbuyonlines.com/css/profile/static_2022/image_24/menu_10003.png"
                    alt=""
                    style={{ height: 30, width: 30 }}
                  />
                </div>
                <div className="menuBoxFont" bis_skin_checked={1}>
                  <span>Personal Info</span>
                </div>
              </div>
            </div>
            <div className="menuBoxItem" bis_skin_checked={1}>
              <div
                className="classBox"
                bis_skin_checked={1}
                onClick={() => handleNavigate("/add-bank")}
              >
                <div className="menuBoxImage" bis_skin_checked={1}>
                  <img
                    src="https://bestbuyonlines.com/css/profile/static_2022/image_24/menu_10005.png"
                    alt=""
                    style={{ height: 30, width: 30 }}
                  />
                </div>
                <div className="menuBoxFont" bis_skin_checked={1}>
                  <span>Bank Information</span>
                </div>
              </div>
            </div>
            <div className="menuBoxItem" bis_skin_checked={1}>
              <div
                className="classBox"
                bis_skin_checked={1}
                onClick={() => setOpenBackdrop(true)}
              >
                <div className="menuBoxImage" bis_skin_checked={1}>
                  <img
                    src="https://bestbuyonlines.com/css/profile/static_2022/image_24/menu_10006.png"
                    alt=""
                    style={{ height: 30, width: 30 }}
                  />
                </div>
                <div className="menuBoxFont" bis_skin_checked={1}>
                  <span>Customer Service</span>
                </div>
              </div>
              <BackdropComponent
                openBackdrop={openBackdrop}
                setOpenBackdrop={setOpenBackdrop}
              />
            </div>
            <div
              className="menuBoxItem"
              onClick={handleLogout}
              bis_skin_checked={1}
            >
              <div className="classBox" bis_skin_checked={1}>
                <div className="menuBoxImage" bis_skin_checked={1}>
                  <img
                    src="https://bestbuyonlines.com/css/profile/static_2022/image_24/menu_10008.png"
                    alt=""
                    style={{ height: 30, width: 30 }}
                  />
                </div>
                <div className="menuBoxFont" bis_skin_checked={1}>
                  <span style={{ color: "rgb(209, 95, 89)" }}>Logout</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottomText" bis_skin_checked={1}>
          <span>Copyright © 2024 BEST BUY All Rights Reserved.</span>
        </div>
        <div className="start-date" bis_skin_checked={1} />
      </BackgroundImage>
    </>
  );
}

export default ProfilePage;
