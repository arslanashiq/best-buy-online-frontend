import { Box, Toolbar } from "@mui/material";
//components
import TopbarWithWhiteBackground from "../../components/TopbarWithWhiteBackground";
//styles
import "./vip.css";

function VipPage() {
  return (
    <Box sx={{ backgroundColor: "#E1E2E2" }}>
      <TopbarWithWhiteBackground title="Top Up" />
      <Toolbar
        sx={{
          minHeight: { xs: "48px", sm: "48px" }, // Override the min-height set by MUI
        }}
      />

      <div className="page_box">
        <div className="list_item">
          <div className="list_item_info">
            <img
              className="infoImage"
              src="https://bestbuyonlines.com/public/upload/package/1737212865D9T.png"
              alt=""
            />
            <div className="flex_left">
              <span>Vip 1</span>
              <div
                // onclick="window.location.href='https://bestbuyonlines.com/vip/details/4'"
                className="infoLabel button"
              >
                Upgrade Level
              </div>
            </div>
          </div>
          <div className="conText">
            <div className="textP">Vip 1 ORDINARY</div>
            <div className="text">● $500.00</div>
            <div className="text">● 40&nbsp;Orders Task a Day</div>
            <div className="text">● $80.00;Profit From an Items per day</div>
          </div>
        </div>
        <div className="list_item">
          <div className="list_item_info">
            <img
              className="infoImage"
              src="https://bestbuyonlines.com/public/upload/package/17372130278fg.png"
              alt=""
            />
            <div className="flex_left">
              <span>Vip 2</span>
              <div
                // onclick="window.location.href='https://bestbuyonlines.com/vip/details/24'"
                className="infoLabel button"
              >
                Upgrade Level
              </div>
            </div>
          </div>
          <div className="conText">
            <div className="textP">Vip 2 ORDINARY</div>
            <div className="text">● $1,000.00</div>
            <div className="text">● 60&nbsp;Orders Task a Day</div>
            <div className="text">● $120.00;Profit From an Items per day</div>
          </div>
        </div>
        <div className="list_item">
          <div className="list_item_info">
            <img
              className="infoImage"
              src="https://bestbuyonlines.com/public/upload/package/1737213102YS7.png"
              alt=""
            />
            <div className="flex_left">
              <span>Vip 3</span>
              <div
                // onclick="window.location.href='https://bestbuyonlines.com/vip/details/25'"
                className="infoLabel button"
              >
                Upgrade Level
              </div>
            </div>
          </div>
          <div className="conText">
            <div className="textP">Vip 3 ORDINARY</div>
            <div className="text">● $3,000.00</div>
            <div className="text">● 90&nbsp;Orders Task a Day</div>
            <div className="text">● $180.00;Profit From an Items per day</div>
          </div>
        </div>
        <div className="list_item">
          <div className="list_item_info">
            <img
              className="infoImage"
              src="https://bestbuyonlines.com/public/upload/package/1737213510w7r.png"
              alt=""
            />
            <div className="flex_left">
              <span>Vip 4</span>
              <div
                // onclick="window.location.href='https://bestbuyonlines.com/vip/details/26'"
                className="infoLabel button"
              >
                Upgrade Level
              </div>
            </div>
          </div>
          <div className="conText">
            <div className="textP">Vip 4 ORDINARY</div>
            <div className="text">● $5,000.00</div>
            <div className="text">● 120&nbsp;Orders Task a Day</div>
            <div className="text">● $240.00;Profit From an Items per day</div>
          </div>
        </div>
        <div className="list_item">
          <div className="list_item_info">
            <img
              className="infoImage"
              src="https://bestbuyonlines.com/public/upload/package/1737558130Ahi.jpeg"
              alt=""
            />
            <div className="flex_left">
              <span>Vip 5</span>
              <div
                // onclick="window.location.href='https://bestbuyonlines.com/vip/details/44'"
                className="infoLabel button"
              >
                Upgrade Level
              </div>
            </div>
          </div>
          <div className="conText">
            <div className="textP">Vip 5 ORDINARY</div>
            <div className="text">● $10,000.00</div>
            <div className="text">● 160&nbsp;Orders Task a Day</div>
            <div className="text">● $320.00;Profit From an Items per day</div>
          </div>
        </div>
      </div>
    </Box>
  );
}

export default VipPage;
