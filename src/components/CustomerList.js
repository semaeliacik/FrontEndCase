import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Table } from "antd";

const columns = [
  {
    title: "Customer Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Phone",
    dataIndex: "phone",
    key: "phone",
  },
];
//tablo için dizi oluşturdum

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    //  mock data tanımladım
    const mockData = [
      { id: 1, name: "Müşteri A", address: "adres A", phone: "0544444444" },
      { id: 2, name: "Müşteri B", address: "adres B", phone: "0555555555" },
    ];
    setCustomers(mockData);
  }, []);

  return (
    <div>
      <h1>Customers</h1>
      <Table columns={columns} dataSource={customers} rowKey="id" />
    </div>
  );
  //tabloyu görüntüledim
};

export default CustomerList;
