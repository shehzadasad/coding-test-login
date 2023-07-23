import React, { useState, useEffect } from "react";
import LightThemeImage from "../../assets/images/light-theme.png";
import DarkThemeImage from "../../assets/images/dark-theme.png";
import LightThemeLogo from "../../assets/images/light-theme-logo.png";
import DarkThemeLogo from "../../assets/images/dark-theme-logo.png";
import LightThemeToggle from "../../assets/images/light-toggle.png";
import DarkThemeToggle from "../../assets/images/dark-toggle.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HashLoader from "react-spinners/HashLoader";
import "./ErrorPage.css";

const ErrorPage = () => {
  // Use States
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);

  // Functions
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
  }, []);

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
              className={`col-span-12 xl:col-span-2 p-4 ${
                isDarkMode ? "dark:bg-custom-dark" : "bg-white"
              } transition-slow flex flex-col justify-center items-center`}
              style={{ height: "100%" }}
            >
              <div className="flex flex-col items-end w-full">
                <div className="m-2">
                  <img
                    className="cursor-pointer transition-slow"
                    onClick={() => toggleMode()}
                    src={isDarkMode ? DarkThemeToggle : LightThemeToggle}
                    alt=""
                  />
                </div>
              </div>

              <div className="flex flex-col items-center w-full h-full xl:justify-center mt-[10%] xl:mt-0">
                <>
                  <div className="flex flex-col items-center justify-center">
                    <div className="text-center xl:text-left">
                      <img
                        className="transition-slow mx-auto xl:mx-0"
                        src={isDarkMode ? DarkThemeLogo : LightThemeLogo}
                        alt=""
                      />
                      <p
                        className={`mt-10 mb-10 ${
                          isDarkMode ? "text-[#DBDBDB]" : "text-[#191A1B]"
                        } transition-slow text-center xl:text-left`}
                      >
                        <span className="font-bold">404 - Page Not Found!</span>
                      </p>
                    </div>
                  </div>
                </>
              </div>
              {/* Footer */}
              <div className="flex flex-row justify-center items-center w-full pb-6 text-center">
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

export default ErrorPage;
