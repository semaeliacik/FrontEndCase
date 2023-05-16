import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Oturumu kapatma işlemini yaptım
    // Oturum sonlandıktan sonra kullanıcıyı login sayfasına yönlendirdim
    navigate("/");
  };

  return (
    <div className="dashboard">
      <Link to="/customers" className="card">
        <h3>Customers Menu</h3>
      </Link>
      <Link to="/users" className="card">
        <h3>Users Menu</h3>
      </Link>
      <Link to="/devices" className="card">
        <h3>Devices Menu</h3>
      </Link>
      <button onClick={handleLogout} className="logout-button">
        Logout
      </button>
    </div>
  );
}
//tıklanan butona göre url yönlendirmesi yaptım componenetler ile daha iyi bir yönwtim sağlayabilmek için
export default Home;
