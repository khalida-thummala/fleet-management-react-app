import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("isAuth");
    navigate("/login");
  };

  return (
    <div className="navbar">
      <h2>Fleet Admin</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Navbar;
