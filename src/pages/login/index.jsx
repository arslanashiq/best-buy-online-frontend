import { useEffect, useState } from "react";
import BackgroundImage from "../../components/BackgroundImage";
import { useNavigate } from "react-router-dom";
import { Checkbox, IconButton, InputAdornment, TextField } from "@mui/material";
//icons
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { login_user } from "../../DAL/auth";
//styles
import "react-phone-number-input/style.css";

import PhoneInput from "react-phone-number-input";
import { enqueueSnackbar } from "notistack";

function LoginPage() {
  const navigate = useNavigate();
  const handleClickSignupBtn = () => {
    navigate("/register");
  };

  const [inputs, setinputs] = useState({
    phone_number: "",
    login_password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setinputs({ ...inputs, [name]: value });
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    login_user(inputs)
      .then((response) => {
        if (response?.data?.user) {
          localStorage.setItem("token", response?.data?.token);
          localStorage.setItem("user", JSON.stringify(response?.data?.user));
          navigate("/home");
        }
      })
      .catch((error) => {
        enqueueSnackbar(error.message, { variant: "error" });
      });
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/home", {
        replace: true,
      });
    }
  }, []);

  return (
    <BackgroundImage>
      <div className="container-fluid">
        <div
          className="row "
          style={{
            marginTop: "20vh",
          }}
        >
          <form onSubmit={handleSubmitForm}>
            <div className="row justify-content-center">
              <div className="col-12 row justify-content-center">
                <div className="col-sm-10 col-md-8 col-lg-6 col-xl-4">
                  <h6 style={{ color: "white" }}> Hi! Welcome</h6>
                </div>
              </div>
              <div className="col-sm-10 col-md-8 col-lg-6 col-xl-4">
                <div className="card position-relative">
                  <div className="card-body">
                    <div className="row justify-content-between align-items-center">
                      <div className="col">
                        <h5 className="card-title">Login</h5>
                      </div>

                      <div className="col d-flex justify-content-end">
                        <p
                          onClick={handleClickSignupBtn}
                          className="link fw-bold cursor-pointer"
                          style={{ fontSize: 12 }}
                        >
                          Register now
                        </p>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-12 mt-2">
                        <PhoneInput
                          placeholder="Phone Number"
                          value={inputs.phone_number}
                          onChange={(value) => {
                            handleChangeInput({
                              target: {
                                value,
                                name: "phone_number",
                              },
                            });
                          }}
                          name="phone_number"
                        />
                      </div>
                      <div className="col-12 mt-4">
                        <TextField
                          variant="standard"
                          type={showPassword ? "text" : "password"}
                          placeholder="Password"
                          name="login_password"
                          value={inputs.login_password}
                          onChange={handleChangeInput}
                          autoComplete="off"
                          className="w-100"
                          slotProps={{
                            input: {
                              endAdornment: (
                                <InputAdornment position="end">
                                  <IconButton
                                    onClick={() =>
                                      setShowPassword(!showPassword)
                                    }
                                  >
                                    {showPassword ? (
                                      <Visibility />
                                    ) : (
                                      <VisibilityOff />
                                    )}
                                  </IconButton>
                                </InputAdornment>
                              ),
                            },
                          }}
                        />
                      </div>

                      <div className="col-12 mt-3 d-flex justify-content-between align-items-center">
                        <p className="d-flex align-items-center">
                          <Checkbox size="small" />
                          Remember Me
                        </p>

                        <p
                          onClick={handleClickSignupBtn}
                          className="link fw-light cursor-pointer"
                          style={{ fontSize: 12 }}
                        >
                          Forgot Password?
                        </p>
                      </div>

                      <button
                        className="border border-none"
                        style={{
                          outline: "none",
                          position: "absolute",
                          bottom: -25,
                          right: "50%",
                          width: 50,
                          height: 50,
                          borderRadius: "50%",
                          backgroundColor: "rgb(90,50,143)",
                        }}
                        type="submit"
                      >
                        <ArrowForwardIcon style={{ color: "white" }} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </BackgroundImage>
  );
}

export default LoginPage;
