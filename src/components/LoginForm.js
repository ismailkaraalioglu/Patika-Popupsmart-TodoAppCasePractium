import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLogin } from "../redux/auth/authSlice";

function LoginForm() {
  const [userName, setUserName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLoginUser = (e) => {
    e.preventDefault();
    if (userName !== "") {
      dispatch(userLogin(userName));
      navigate("/");
    }
  };

  return (
    <form className="mt-10 w-80 mx-auto" onSubmit={handleLoginUser}>
      <input
        className="rounded-xl p-4 w-full placeholder:font-medium placeholder:text-sm outline-none"
        placeholder="Enter username"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button className="w-full py-4 mt-7 bg-rose-500 bg-opacity-80 text-white rounded-xl hover:bg-opacity-100">
        Login
      </button>
    </form>
  );
}

export default LoginForm;
