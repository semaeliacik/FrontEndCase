import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import CustomerList from "./components/CustomerList";
import UserList from "./components/UserList";
import DeviceList from "./components/DeviceList";
import DeviceDetail from "./components/DeviceDetail";
import UserDetail from "./components/UserDetail";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/customers" element={<CustomerList />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/devices" element={<DeviceList />} />
          <Route path="/user/:id" element={<UserDetail />} />
          <Route path="/devices/:id" element={<DeviceDetail />} />
        </Routes>
      </div>
    </Router>
    //Router kullanarak linkden componenet yönlendirmesi yaptım
    ///devices/:id ve /user/:id tıklandığında id ye göre ink alacak ve gerekli componenetlere iletilecek
  );
}

export default App;
