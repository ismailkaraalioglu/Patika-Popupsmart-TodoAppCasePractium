import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { FiSun } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { userLogout } from "../redux/auth/authSlice";
import { changeDarkMode } from "../redux/event/eventSlice";

function Header() {
  const user = useSelector((state) => state.auth.user);
  const darkMode = useSelector((state) => state.events.darkMode);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogoutUser = () => {
    dispatch(userLogout());
    navigate("/login");
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const handleDarkMode = () => {
    dispatch(changeDarkMode());
  };

  return (
    <header className="headerContainer">
      <div className="headerContent">
        <div className="headerAppName">Popupsmart TodoApp</div>

        <div className="headerUserEventContent">
          <div className="headerUserContent">
            <FaUserCircle size={24} />
            <div>
              Hi, <span className="headerUserName">{user}</span>
            </div>
          </div>

          <div className="headerEventContent">
            <button onClick={handleDarkMode}>
              {darkMode ? (
                <FiSun size={22} />
              ) : (
                <BsFillMoonStarsFill size={22} />
              )}
            </button>

            <button className="headerLogoutButton" onClick={handleLogoutUser}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
