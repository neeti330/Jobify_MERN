import { useState } from "react";
import { Outlet } from "react-router-dom";
import Wrapper from "../assets/wrappers/Dashboard";
import { BigSidebar, Navbar, SmallSidebar } from "../components";
import DashboardContext from "../context/DashboardContext";
import { checkDefaultTheme } from "../App";

const user = { name: "John" };

const DashboardLayout = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [isDarkTheme, setDarkTheme] = useState(checkDefaultTheme());

  const _fn = {
    toggleDarkTheme: () => {
      const newDarkTheme = !isDarkTheme;
      setDarkTheme(newDarkTheme);
      document.body.classList.toggle("dark-theme", newDarkTheme);
      localStorage.setItem("darkTheme", newDarkTheme);
    },
    toggleSidebar: () => {
      setShowSidebar(!showSidebar);
    },
    logoutUser: async () => {
      console.log("logout user");
    },
  };

  return (
    <DashboardContext.Provider
      value={{
        user,
        showSidebar,
        isDarkTheme,
        _fn,
      }}
    >
      <Wrapper>
        <main className="dashboard">
          <SmallSidebar />
          <BigSidebar />
          <div>
            <Navbar />
            <div className="dashboard-page">
              <Outlet />
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  );
};

export default DashboardLayout;
