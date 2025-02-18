import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useNavigate } from "react-router-dom";

function VIPLevelCard() {
  const navigate = useNavigate();
  return (
    <div className="contentBox">
      <div className="contentBoxTop">
        <span style={{ fontSize: "18px", fontWeight: "600" }}>VIP Level</span>
        <div
          className="contentBoxRight"
          onClick={() => {
            navigate("/vip");
          }}
        >
          <span>View More</span>
          <KeyboardArrowRightIcon />
        </div>
      </div>

      <input type="hidden" name="task" value="20" />
      <div className="vipItemList">
        <div className="vipItem ">
          <img
            src="https://bestbuyonlines.com/css/h/upload/base_file/9fe69abf4e4129cf/935554b488e9b651.png"
            alt=""
            style={{ width: "50px", height: "50px" }}
          />
        </div>
        <div className="vipItem ">
          <img
            src="https://bestbuyonlines.com/css/h/upload/base_file/b0ca03e0ea42aeec/daca9b5a123848b0.png"
            alt=""
            style={{ width: "50px", height: "50px" }}
          />
        </div>
        <div className="vipItem ">
          <img
            src="https://bestbuyonlines.com/css/h/upload/base_file/c389574fe3a9e215/a13485deafd1365d.png"
            alt=""
            style={{ width: "50px", height: "50px" }}
          />
        </div>
        <div className="vipItem ">
          <img
            src="https://bestbuyonlines.com/css/h/upload/base_file/aa0175e5491f7d73/921ffe17f975df91.png"
            alt=""
            style={{ width: "50px", height: "50px" }}
          />
        </div>
      </div>
      <div className="contentCon" style={{ fontSize: "10px", color: "#000" }}>
        <div className="title">My Level</div>
        <div className="text">● Available :20</div>
        <div className="text">● 5&nbsp;Orders Task a Day</div>
        <div className="text">● 25: All Grabbed</div>
      </div>
    </div>
  );
}

export default VIPLevelCard;
