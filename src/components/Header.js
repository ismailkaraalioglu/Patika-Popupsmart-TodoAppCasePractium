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

  const handleDarkMode = () => {
    dispatch(changeDarkMode());
  };

  return (
    <header className="bg-gray-200 w-full h-16">
      <div className="h-full max-w-7xl mx-auto flex items-center justify-between">
        <div className="font-bold text-xl italic">Popupsmart TodoApp</div>

        <div className="flex items-center justify-center gap-x-10">
          <div className="font-semibold flex items-center gap-x-1.5">
            <FaUserCircle size={24} />
            <div>
              Hi, <span className="font-bold">{user}</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-x-6">
            <button onClick={handleDarkMode}>
              {darkMode ? (
                <FiSun size={22} />
              ) : (
                <BsFillMoonStarsFill size={22} />
              )}
            </button>

            <button
              className="bg-red-300 px-8 py-3 text-sm font-bold rounded-lg hover:bg-red-400"
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
