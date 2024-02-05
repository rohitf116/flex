import { useSelector } from "react-redux";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../features/userSlice";
import { useNavigate } from "react-router-dom";
const NavBar = () => {
  let user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const handleLogOut = async () => {
    dispatch(logout());
  };
  return (
    <div className="nav-bar-container">
      <button className="name-nav-bar">
        Hii {user?.user?.name || "Guest"}
      </button>
      {user?.user?.name ? (
        <>
          <button className="name-nav-bar" onClick={() => navigate("addbook")}>
            Add book
          </button>
          <button className="name-nav-bar" onClick={handleLogOut}>
            Logout
          </button>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default NavBar;
