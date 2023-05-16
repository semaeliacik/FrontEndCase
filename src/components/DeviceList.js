import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Table, Input, Button } from "antd";

const { Search } = Input;

const columns = [
  {
    title: "Device",
    dataIndex: "name",
    key: "name",
    render: (text, record) => <Link to={`/devices/${record.id}`}>{text}</Link>,
  },
  {
    title: "macAddress",
    dataIndex: "macAddress",
    key: "macAddress",
  },
  {
    title: "modelNumber",
    dataIndex: "modelNumber",
    key: "modelNumber",
  },
  {
    title: "serialNumber",
    dataIndex: "serialNumber",
    key: "serialNumber",
  },
  {
    title: "status",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "softwareVersion",
    dataIndex: "softwareVersion",
    key: "softwareVersion",
  },
  {
    title: "ipAddress",
    dataIndex: "ipAddress",
    key: "ipAddress",
  },
  {
    title: "customerId",
    dataIndex: "customerId",
    key: "customerId",
  },
  {
    title: "customerName",
    dataIndex: "customerName",
    key: "customerName",
  },
];
//tablo için dizi oluşturdum

const DeviceList = () => {
  const [devices, setDevices] = useState([]);
  const [filteredDevices, setFilteredDevices] = useState([]);

  useEffect(() => {
    const mockData = [
      {
        id: 1,
        name: "cihaz1",
        macAddress: "00:11:22:33:44:55",
        modelNumber: "Model A",
        serialNumber: "1234",
        status: "Active",
        softwareVersion: "1.0",
        ipAddress: "192.168.0.1",
        customerId: 1,
        customerName: "müşteri1",
      },
      {
        id: 2,
        name: "cihaz2",
        macAddress: "AA:BB:CC:DD:EE:FF",
        modelNumber: "Model B",
        serialNumber: "5678",
        status: "Inactive",
        softwareVersion: "2.0",
        ipAddress: "192.168.0.2",
        customerId: 2,
        customerName: "müşteri2",
      },
    ];
    setDevices(mockData);
    setFilteredDevices(mockData);
  }, []);
  //cihaz verilerini ayarladım
  const handleSearch = (value) => {
    const filtered = devices.filter(
      (device) =>
        device.name.toLowerCase().includes(value.toLowerCase()) ||
        device.customerName.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredDevices(filtered);
  };
  //filtreleme

  return (
    <div>
      <h1>Devices</h1>
      <Search
        placeholder="Search by device or customer name"
        onSearch={handleSearch}
        style={{ marginBottom: 16 }}
      />
      <Table columns={columns} dataSource={filteredDevices} rowKey="id" />
    </div>
  );
};

export default DeviceList;
