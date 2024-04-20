import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import Wrapper from "../assets/wrappers/ThemeToggle";
import { useContext } from "react";
import DashboardContext from "../context/DashboardContext";

const ThemeToggle = () => {
  const { isDarkTheme, _fn } = useContext(DashboardContext);
  return (
    <Wrapper onClick={_fn.toggleDarkTheme}>
      {isDarkTheme ? (
        <BsFillSunFill className="toggle-icon" />
      ) : (
        <BsFillMoonFill />
      )}
    </Wrapper>
  );
};

export default ThemeToggle;
