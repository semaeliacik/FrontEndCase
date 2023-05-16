import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../App.css";

const DevicesDetail = () => {
  const { id } = useParams();
  const [devices, setDevices] = useState(null);

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
    //  mock data tanımladım

    // API isteği için  bekleme süresi
    setTimeout(() => {
      const selectedDevice = mockData.find(
        (device) => device.id === parseInt(id)
      );

      if (selectedDevice) {
        setDevices(selectedDevice);
      }
    }, 1000);
  }, [id]);

  if (!devices) {
    return <div>Loading...</div>;
  }

  return (
    <div className="detail">
      <h1>Devices Details</h1>
      <p>Name: {devices.name}</p>
      <p>Mac Address: {devices.macAddress}</p>
      <p>Model Number: {devices.modelNumber}</p>
      <p>Serial Number: {devices.serialNumber}</p>
      <p>Status: {devices.status}</p>
      <p>Software Version: {devices.softwareVersion}</p>
      <p>IP Address: {devices.ipAddress}</p>
      <p>Customer ID: {devices.customerId}</p>
      <p>Customer Name: {devices.customerName}</p>
    </div>
  );
  //tabloyu görüntüledim
};

export default DevicesDetail;
