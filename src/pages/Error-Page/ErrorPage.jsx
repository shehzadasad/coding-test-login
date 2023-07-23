import React, { useState, useEffect } from "react";
import LightThemeImage from "../../assets/images/light-theme.png";
import DarkThemeImage from "../../assets/images/dark-theme.png";
import LightThemeLogo from "../../assets/images/light-theme-logo.png";
import DarkThemeLogo from "../../assets/images/dark-theme-logo.png";
import LightThemeToggle from "../../assets/images/light-toggle.png";
import DarkThemeToggle from "../../assets/images/dark-toggle.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ErrorPage.css";

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
        className={`grid grid-cols-3 ${
          isDarkMode ? "dark:bg-custom-dark" : "bg-white"
        } min-h-screen transition-slow`}
      >
        <div
          className={`hidden xl:block col-span-1 p-4 ${
            isDarkMode ? "dark:bg-custom-dark" : "bg-white"
          } transition-slow`}
        >
          <div className="flex justify-center items-center h-full">
            <div className="rounded-md relative">
              <img
                src={isDarkMode ? DarkThemeImage : LightThemeImage}
                className="rounded-md object-cover transition-slow"
                alt=""
              />
              <div className="absolute top-0 left-0 xl:mt-[15%] xl:ml-[10%] w-[80%] xl:w-[80%]">
                <p
                  className={`${
                    isDarkMode ? "text-[#DBDBDB]" : "text-[#FFF]"
                  } xl:text-3xl text-lg font-bold transition-slow`}
                >
                  One Stop, Many Solution
                </p>
                <p
                  className={`${
                    isDarkMode ? "text-[#ACACAC]" : "text-[#FFF]"
                  } xl:w-[100%] mt-2 text-base transition-slow`}
                >
                  One Solution that Speed up your Device Reports and Make
                  Efficient way to organize your data.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`xl:col-span-2 col-span-12 p-4 ${
            isDarkMode ? "dark:bg-custom-dark" : "bg-white"
          } transition-slow`}
          style={{ display: "grid", gridTemplateRows: "1fr auto" }}
        >
          <div className="grid h-20 grid-cols-1 gap-4 justify-center">
            <div className="flex flex-col items-end">
              <div className="m-2">
                <img
                  className="cursor-pointer transition-slow"
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
              marginBottom: "13%",
            }}
            className="grid grid-cols-1 xl:mt-0 mt-[-700pt] gap-4 justify-center items-center"
          >
            <>
              <div className="flex flex-col items-center justify-center text-center">
                <div className="xl:ml-[-35%] ">
                  <div className="justify-center flex xl:block">
                    <img
                      className="transition-slow object-cover"
                      src={isDarkMode ? DarkThemeLogo : LightThemeLogo}
                      alt=""
                    />
                  </div>
                  <p
                    className={`mt-10 mb-[45%] ${
                      isDarkMode ? "text-[#DBDBDB]" : "text-[#191A1B]"
                    } transition-slow`}
                  >
                    <span className="font-bold text-2xl">404 - Not Found!</span>
                  </p>
                </div>
              </div>
            </>
          </div>
          {/* Footer */}
          <div className="hidden xl:flex flex justify-center items-center xl:mb-3">
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
