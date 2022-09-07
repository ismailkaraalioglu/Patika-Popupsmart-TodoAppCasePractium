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
    <header className="w-full h-16 bg-white dark:text-gray-300 dark:bg-zinc-800 bg-opacity-40 shadow backdrop-blur-xl border-b border-white dark:border-zinc-700">
      <div className="h-full max-w-7xl mx-auto flex items-center justify-between md:px-0 md:gap-x-0 px-2">
        <div className="font-bold md:text-xl text-base italic">Popupsmart TodoApp</div>

        <div className="flex items-center justify-center md:gap-x-10 gap-x-5">
          <div className="font-semibold flex items-center gap-x-1.5 md:text-base text-sm">
            <FaUserCircle size={24} />
            <div>
              Hi, <span className="font-bold">{user}</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-x-5 md:gap-x-6">
            <button onClick={handleDarkMode}>
              {darkMode ? (
                <FiSun size={22} />
              ) : (
                <BsFillMoonStarsFill size={22} />
              )}
            </button>

            <button
              className="bg-red-400 dark:bg-red-600 px-3 md:px-8 py-3 md:py-3 text-sm font-bold rounded-lg hover:bg-red-500 dark:hover:bg-red-700"
              onClick={handleLogoutUser}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
