import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../App.css";

const CustomerDetail = () => {
  const { id } = useParams();
  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    const storedCustomers = JSON.parse(localStorage.getItem("users"));
    if (storedCustomers) {
      const selectedCustomer = storedCustomers.find(
        (customer) => customer.id === parseInt(id)
      );
      setCustomer(selectedCustomer);
    }
  }, [id]);
  //localStorage'dan "users" anahtarına sahip veriyi alıp id değeriyle eşleşen müşteriyi buldum
  if (!customer) {
    return <div>Loading...</div>;
  }

  return (
    <div className="detail">
      <h1>User Details</h1>
      <p>Name: {customer.name}</p>
      <p>Email: {customer.email}</p>
      <p>Phone: {customer.phone}</p>
    </div>
  );
};

export default CustomerDetail;
