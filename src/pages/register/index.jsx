import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-number-input";
import { IconButton, InputAdornment, TextField } from "@mui/material";

//icons
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
//components
import BackgroundImage from "../../components/BackgroundImage";
//styles
import "react-phone-number-input/style.css";
import "./register.css";
import { add_user } from "../../DAL/user";
import { enqueueSnackbar } from "notistack";

function RegisterPage() {
  const navigate = useNavigate();
  const handleClickSignupBtn = () => {
    navigate("/login");
  };

  const [inputs, setinputs] = useState({
    phone_number: "",
    user_name: "",
    login_password: "",
    withdrawl_passowrd: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showWithDrawlPassword, setShowWithDrawlPassword] = useState(false);
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setinputs({ ...inputs, [name]: value });
  };
  const handleLogin = () => {
    navigate("/login");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    add_user(inputs)
      .then((response) => {
        if (response?.code === 201) {
          handleLogin();
        } else {
          enqueueSnackbar(response?.message || "Somthing Went Wrong", {
            variant: "error",
          });
        }
      })
      .catch((error) => {
        enqueueSnackbar(error?.message || "Somthing Went Wrong", {
          variant: "error",
        });
      });
  };
  return (
    <BackgroundImage>
      <div className="container-fluid">
        <div
          className="row "
          style={{
            marginTop: "20vh",
          }}
        >
          <form onSubmit={handleSubmit}>
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
                        <h5 className="card-title">Register</h5>
                      </div>
                      <div className="col d-flex justify-content-end">
                        <p
                          onClick={handleClickSignupBtn}
                          className="link fw-bold cursor-pointer"
                          style={{ fontSize: 12 }}
                        >
                          Back to Login
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
                      <div className="col-12 mt-2">
                        <TextField
                          className="w-100"
                          variant="standard"
                          placeholder="Usernamer"
                          name="user_name"
                          autoComplete="off"
                          value={inputs.user_name}
                          onChange={handleChangeInput}
                        />
                      </div>

                      <div className="col-12 mt-4">
                        <TextField
                          variant="standard"
                          type={showPassword ? "text" : "password"}
                          placeholder="Login Password"
                          name="login_password"
                          onChange={handleChangeInput}
                          autoComplete="off"
                          className="w-100"
                          value={inputs.login_password}
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
                      <div className="col-12 mt-4 mb-5">
                        <TextField
                          variant="standard"
                          type={showWithDrawlPassword ? "text" : "password"}
                          placeholder="Withdrawl Password"
                          name="withdrawl_passowrd"
                          onChange={handleChangeInput}
                          autoComplete="off"
                          className="w-100"
                          value={inputs.withdrawl_passowrd}
                          slotProps={{
                            input: {
                              endAdornment: (
                                <InputAdornment position="end">
                                  <IconButton
                                    onClick={() =>
                                      setShowWithDrawlPassword(
                                        !showWithDrawlPassword
                                      )
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
                      {/* <div className="col-12 mt-2">
                        <TextField
                          className="w-100"
                          variant="standard"
                          placeholder="Invite Code"
                          name="invite_code"
                          autoComplete="off"
                          value={inputs.invite_code}
                          onChange={handleChangeInput}
                        />
                      </div> */}

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

export default RegisterPage;
