import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

//styles
import "./footer.css";

function Footer({ active = 1 }) {
  const navigate = useNavigate();
  const handleNavigate = (link) => {
    navigate(link);
  };
  return (
    <div className="footer-wrap">
      <div className="footer">
        <div className="content">
          <div className="footer_item">
            <p
              onClick={() => handleNavigate("/home")}
              className={`footer_item_btn  cursor-pointer ${
                active === 1 && "active"
              }`}
            >
              <img
                src={
                  active === 1
                    ? "https://bestbuyonlines.com/css/h/static_2022/image_24/HOME2.png"
                    : "https://bestbuyonlines.com/css/roll/static_2022/image_24/HOME.png"
                }
                alt=""
              />
              <span style={{ color: "white" }}>Home</span>
            </p>
          </div>
          <div className="footer_item">
            <p
              onClick={() => handleNavigate("/roll")}
              className={`footer_item_btn  cursor-pointer ${
                active === 2 && "active"
              }`}
            >
              <img
                src={
                  active === 2
                    ? "https://bestbuyonlines.com/css/roll/static_2022/image_24/starting2.png"
                    : "https://bestbuyonlines.com/css/h/static_2022/image_24/starting.png"
                }
                alt=""
              />
              <span style={{ color: "white" }}>Starting</span>
            </p>
          </div>
          <div className="footer_item">
            <p
              // onClick={() => handleNavigate("/history")}
              className={`footer_item_btn  cursor-pointer p-2 ${
                active === 3 && "active"
              }`}
            >
              <img
                src={
                  "https://bestbuyonlines.com/css/h/static_2022/image_24/RECORD.png"
                }
                alt=""
              />
              <span style={{ color: "white" }}>Records</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

Footer.propTypes = {
  active: PropTypes.number,
};

export default Footer;
