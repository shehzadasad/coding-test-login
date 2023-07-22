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
import HashLoader from "react-spinners/HashLoader";

const Login = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showLoginPage, setShowLoginPage] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(true);

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
    let lUserName = localStorage.getItem("userName");
    let lPassword = localStorage.getItem("password");
    console.log(theme, lUserName, lPassword);
    if (theme && theme === "light") {
      setIsDarkMode(false);
      setLoading(false);
    } else {
      setLoading(false);
    }
    if (theme && theme === "dark") {
      setIsDarkMode(true);
      setLoading(false);
    } else {
      setLoading(false);
    }
    if (
      lUserName &&
      lUserName !== "null" &&
      lPassword &&
      lPassword !== "null"
    ) {
      setUserName(lUserName);
      setPassword(atob(lPassword));
      setShowLoginPage(true);
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      userName === "" ||
      password === "" ||
      userName.trim() === "" ||
      password.trim() === ""
    ) {
      toast.error("Invalid Input Data!");
    } else {
      if (userName === password) {
        localStorage.setItem("userName", userName);
        localStorage.setItem("password", btoa(password));
        toast.success("Logged In Successfully!");
        setShowLoginPage(true);
      } else {
        toast.error("Invalid Credentials!");
      }
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  useEffect(() => {
    if (password !== "" && password.trim() !== "") {
      setShowPassword(false);
    }
  }, [password]);

  return (
    <>
      {loading ? (
        <>
          <div
            style={{ width: "100vw", height: "100vh" }}
            className={`${
              isDarkMode ? "dark:bg-custom-dark" : "bg-white"
            } flex justify-center items-center`}
          >
            <div className="mt-[-30%] md:mt-0">
              <HashLoader size={100} color="#66B127" />
            </div>
          </div>
        </>
      ) : (
        <>
          <ToastContainer />
          <div
            className={`grid grid-cols-3 gap-4 ${
              isDarkMode ? "dark:bg-custom-dark" : "bg-white"
            } min-h-screen`}
          >
            <div
              className={`hidden xl:block col-span-1 p-4 ${
                isDarkMode ? "dark:bg-custom-dark" : "bg-white"
              }`}
            >
              <div className="flex justify-center items-center h-full">
                <div className="rounded-md relative">
                  <img
                    src={isDarkMode ? DarkThemeImage : LightThemeImage}
                    className="rounded-md object-cover"
                    alt=""
                  />
                  <div className="absolute top-0 left-0 xl:mt-[15%] xl:ml-[10%] w-[80%] xl:w-[80%]">
                    <p
                      className={`${
                        isDarkMode ? "text-[#DBDBDB]" : "text-[#FFF]"
                      } xl:text-3xl text-lg font-bold`}
                    >
                      One Stop, Many Solution
                    </p>
                    <p
                      className={`${
                        isDarkMode ? "text-[#ACACAC]" : "text-[#FFF]"
                      } xl:w-[100%] mt-2 text-base`}
                    >
                      One Solution that Speed up your Device Reports and Make
                      Efficient way to organize your data.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`col-span-12 xl:col-span-2 p-4 ${
                isDarkMode ? "dark:bg-custom-dark" : "bg-white"
              }`}
              style={{ display: "grid", gridTemplateRows: "1fr auto" }}
            >
              <div className="grid h-20 grid-cols-1 gap-4 justify-center">
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
                  overflowY: "auto",
                  maxWidth: "100%",
                  width: "100%",
                }}
                className="grid grid-cols-1 gap-4 xl:mb-[13%] mt-[-700pt] xl:mt-0 justify-center items-center"
              >
                {showLoginPage === true ? (
                  <>
                    <div className="flex flex-col items-center">
                      <div className=" xl:ml-[-35%] m-2">
                        <img
                          src={isDarkMode ? DarkThemeLogo : LightThemeLogo}
                          alt=""
                        />
                        <p
                          className={`mt-10 mb-10 ${
                            isDarkMode ? "text-[#DBDBDB]" : "text-[#191A1B]"
                          }`}
                        >
                          Hi <span className="font-bold">{userName}</span>
                          , Welcome to our portal!
                          <br />
                          Your Presence means a lot to us - Enjoy!
                        </p>
                      </div>
                      <div className="m-2 mt-0">
                        <Button
                          variant="contained"
                          onClick={() => {
                            localStorage.removeItem("userName");
                            localStorage.removeItem("password");
                            toast.success("Logged Out Successfully!");
                            setUserName("");
                            setPassword("");
                            setShowLoginPage(false);
                          }}
                          sx={{
                            paddingX: "40pt",
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
                      <div className="xl:ml-[-41.5%] m-2">
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
                      <div className="xl:ml-[-7%] m-2 mt-0">
                        <form onSubmit={handleSubmit} onKeyDown={handleKeyDown}>
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
                            onClick={handleSubmit}
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
                        </form>
                      </div>
                    </div>
                  </>
                )}
              </div>
              {/* Footer */}
              <div className="hidden md:flex flex justify-center items-center mb-3 mt-7">
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
      )}
    </>
  );
};

export default Login;
