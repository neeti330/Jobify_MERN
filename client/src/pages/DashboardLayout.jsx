import { useState } from "react";
import { Outlet, redirect, useLoaderData, useNavigate } from "react-router-dom";
import Wrapper from "../assets/wrappers/Dashboard";
import { BigSidebar, Navbar, SmallSidebar } from "../components";
import DashboardContext from "../context/DashboardContext";
import { checkDefaultTheme } from "../App";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";

export const loader = async () => {
  try {
    const { data } = await customFetch.get("/users/current-user");
    return data;
  } catch (error) {
    return redirect("/");
  }
};

const DashboardLayout = () => {
  const { user } = useLoaderData();
  const navigate = useNavigate();

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
      navigate("/");
      await customFetch.get("/auth/logout");
      toast.success("Logging out...");
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
              <Outlet context={{ user }} />
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  );
};

export default DashboardLayout;
