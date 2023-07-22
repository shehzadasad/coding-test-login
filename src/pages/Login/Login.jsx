import React, { useState, useEffect } from "react";
import LightThemeImage from "../../assets/images/light-theme.png";
import DarkThemeImage from "../../assets/images/dark-theme.png";
import LightThemeLogo from "../../assets/images/light-theme-logo.png";
import DarkThemeLogo from "../../assets/images/dark-theme-logo.png";
import LightThemeToggle from "../../assets/images/light-toggle.png";
import DarkThemeToggle from "../../assets/images/dark-toggle.png";
import { TextField, Button, FormControlLabel, Checkbox } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InputAdornment from "@mui/material/InputAdornment";
import PersonIcon from "@mui/icons-material/Person";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const Login = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showLoginPage, setShowLoginPage] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode === true) {
      toast.success("Light Mode Enabled!");
      localStorage.setItem("theme", "light");
    }
    if (isDarkMode === false) {
      toast.success("Dark Mode Enabled!");
      localStorage.setItem("theme", "dark");
    }
  };

  useEffect(() => {
    let theme = localStorage.getItem("theme");
    if (theme && theme === "light") {
      setIsDarkMode(false);
    }
    if (theme && theme === "dark") {
      setIsDarkMode(true);
    }
  }, []);

  const handleSubmit = () => {
    if (
      userName === "" ||
      password === "" ||
      userName.trim() === "" ||
      password.trim() === ""
    ) {
      toast.error("Invalid Input Data!");
    } else {
      if (userName === password) {
        toast.success("Logged In Successfully!");
        setShowLoginPage(true);
      } else {
        toast.error("Invalid Credentials!");
      }
    }
  };

  useEffect(() => {
    if (password !== "" && password.trim() !== "") {
      setShowPassword(false);
    }
  }, [password]);

  return (
    <>
      <ToastContainer />
      <div
        className={`grid grid-cols-3 gap-4 ${
          isDarkMode ? "dark:bg-custom-dark" : "bg-white"
        } min-h-screen`}
      >
        <div
          className={`col-span-1 p-4 ${
            isDarkMode ? "dark:bg-custom-dark" : "bg-white"
          }`}
        >
          <div className="flex justify-center items-center h-full">
            <div className="rounded-md">
              <img
                src={isDarkMode ? DarkThemeImage : LightThemeImage}
                className="rounded-md object-cover"
                alt=""
              />
              <div className="absolute top-0 left-0 mt-[100px] ml-[75px]">
                <p
                  className={`${
                    isDarkMode ? "text-[#DBDBDB]" : "text-[#FFF]"
                  } text-3xl font-bold`}
                >
                  One Stop, Many Solution
                </p>
                <p
                  className={`${
                    isDarkMode ? "text-[#ACACAC]" : "text-[#FFF]"
                  } w-[400px] mt-2 text-base`}
                >
                  One Solution that Speed up your Device Reports and Make
                  Efficient way to organize your data.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`col-span-2 p-4 ${
            isDarkMode ? "dark:bg-custom-dark" : "bg-white"
          }`}
          style={{ display: "grid", gridTemplateRows: "1fr auto" }}
        >
          <div className="grid grid-cols-1 gap-4 justify-center">
            <div className="flex flex-col items-end">
              <div className="m-2">
                <img
                  className="cursor-pointer"
                  onClick={() => toggleMode()}
                  src={isDarkMode ? DarkThemeToggle : LightThemeToggle}
                  alt=""
                />
              </div>
            </div>
          </div>

          <div
            style={{
              marginTop: "-10%",
              overflowY: "auto",
              marginBottom: "13%",
            }}
            className="grid grid-cols-1 gap-4 justify-center items-center"
          >
            {showLoginPage === true ? (
              <>
                <div className="flex flex-col items-center">
                  <div className=" ml-[-35%] m-2">
                    <img
                      src={isDarkMode ? DarkThemeLogo : LightThemeLogo}
                      alt=""
                    />
                    <p
                      className={`mt-10 mb-10 ${
                        isDarkMode ? "text-[#DBDBDB]" : "text-[#191A1B]"
                      }`}
                    >
                      Hi <span className="font-bold">{userName}</span>, Welcome
                      to our portal!
                      <br />
                      Your Presence means a lot to us - Enjoy!
                    </p>
                  </div>
                  <div className="ml-[-7%] m-2 mt-0">
                    <Button
                      variant="contained"
                      onClick={() => {
                        toast.success("Logged Out Successfully!");
                        setUserName("");
                        setPassword("");
                        setShowLoginPage(false);
                      }}
                      sx={{
                        marginBottom: "50%",
                        justifyContent: "center",
                        marginTop: "24px",
                        width: "100%",
                        backgroundColor: "#66B127",
                        "&:hover": {
                          backgroundColor: `${
                            isDarkMode ? "#66B127" : "#66B127"
                          }`,
                        },
                      }}
                    >
                      Logout
                    </Button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="flex flex-col items-center">
                  <div className=" ml-[-41.5%] m-2">
                    <img
                      src={isDarkMode ? DarkThemeLogo : LightThemeLogo}
                      alt=""
                    />
                    <p
                      className={`mt-10 mb-10 ${
                        isDarkMode ? "text-[#DBDBDB]" : "text-[#191A1B]"
                      }`}
                    >
                      Sign in to your account
                    </p>
                  </div>
                  <div className="ml-[-7%] m-2 mt-0">
                    <TextField
                      label="Username"
                      InputLabelProps={{
                        style: {
                          color: `${isDarkMode ? "#ACACAC" : ""}`,
                          border: `${isDarkMode ? "#ACACAC" : ""}`,
                        },
                      }}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <PersonIcon
                              sx={{
                                color: isDarkMode ? "#ACACAC" : "",
                              }}
                              edge="end"
                            />
                          </InputAdornment>
                        ),
                      }}
                      variant="outlined"
                      value={userName}
                      onChange={(e) => {
                        setUserName(e.target.value);
                      }}
                      sx={{
                        width: "100%",
                        "& .MuiOutlinedInput-root": {
                          color: isDarkMode ? "#ACACAC" : "",
                        },
                        "& .MuiInputBase-input": {
                          color: isDarkMode ? "#ACACAC" : "",
                          "&::placeholder": {
                            color: isDarkMode ? "#ACACAC" : "",
                          },
                        },
                      }}
                    />
                    <TextField
                      label="Password"
                      InputLabelProps={{
                        style: {
                          color: `${isDarkMode ? "#ACACAC" : ""}`,
                          border: `${isDarkMode ? "#ACACAC" : ""}`,
                        },
                      }}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            {showPassword &&
                            password !== "" &&
                            password.trim() !== "" ? (
                              <VisibilityOffIcon
                                sx={{
                                  color: isDarkMode ? "#ACACAC" : "",
                                }}
                                onClick={() => {
                                  setShowPassword(false);
                                }}
                                className="cursor-pointer"
                                edge="end"
                              />
                            ) : (
                              <VisibilityIcon
                                sx={{
                                  color: isDarkMode ? "#ACACAC" : "",
                                }}
                                className="cursor-pointer"
                                onClick={() => {
                                  if (
                                    password !== "" &&
                                    password.trim() !== ""
                                  ) {
                                    setShowPassword(true);
                                  } else {
                                    setShowPassword(false);
                                  }
                                }}
                                edge="end"
                              />
                            )}
                          </InputAdornment>
                        ),
                      }}
                      variant="outlined"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      sx={{
                        marginTop: "24px",
                        width: "100%",
                        "& .MuiOutlinedInput-root": {
                          color: isDarkMode ? "#ACACAC" : "",
                        },
                        "& .MuiInputBase-input": {
                          color: isDarkMode ? "#ACACAC" : "",
                          "&::placeholder": {
                            color: isDarkMode ? "#ACACAC" : "",
                          },
                        },
                      }}
                    />
                    <div className="flex justify-between items-center mt-2">
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={rememberMe}
                            onChange={() => setRememberMe(!rememberMe)}
                            sx={{
                              color: isDarkMode ? "#ACACAC" : "#ACACAC",
                            }}
                          />
                        }
                        label="Remember Me"
                        sx={{
                          color: isDarkMode ? "#ACACAC" : "#191A1B",
                        }}
                      />
                      <a
                        className={`text-sm ${
                          isDarkMode ? "text-[#409F47]" : "text-[#409F47]"
                        } cursor-pointer`}
                      >
                        Forgot Password?
                      </a>
                    </div>
                    <Button
                      variant="contained"
                      onClick={() => {
                        handleSubmit();
                      }}
                      sx={{
                        color: isDarkMode ? "#0D0D0D" : "#FFF",
                        justifyContent: "center",
                        marginTop: "24px",
                        width: "100%",
                        backgroundColor: "#66B127",
                        "&:hover": {
                          backgroundColor: `${
                            isDarkMode ? "#66B127" : "#66B127"
                          }`,
                        },
                      }}
                    >
                      Login
                    </Button>
                  </div>
                </div>
              </>
            )}
          </div>
          {/* Footer */}
          <div className="flex justify-center items-center mb-3">
            <p className={`text-sm text-[#949494] cursor-pointer`}>
              2023 All Right Reserved
            </p>
            <p className={`text-sm text-[#949494] cursor-pointer ml-10`}>
              Privacy & Policy
            </p>
            <p className={`text-sm text-[#949494] cursor-pointer ml-10`}>
              Terms & Conditions
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
