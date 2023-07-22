import React, { useState, useEffect } from "react";
import LightThemeImage from "../../assets/images/light-theme.png";
import DarkThemeImage from "../../assets/images/dark-theme.png";
import LightThemeLogo from "../../assets/images/light-theme-logo.png";
import DarkThemeLogo from "../../assets/images/dark-theme-logo.png";
import LightThemeToggle from "../../assets/images/light-toggle.png";
import DarkThemeToggle from "../../assets/images/dark-toggle.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ErrorPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

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
              <>
                <div className="flex flex-col items-center">
                  <div className=" ml-[-35%] m-2">
                    <img
                      src={isDarkMode ? DarkThemeLogo : LightThemeLogo}
                      alt=""
                    />
                    <p
                      className={`mt-10 mb-[45%] ${
                        isDarkMode ? "text-[#DBDBDB]" : "text-[#191A1B]"
                      }`}
                    >
                      <span className="font-bold text-3xl">Page Doesn't Exist!</span>
                    </p>
                  </div>
                </div>
              </>
           
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

export default ErrorPage;
