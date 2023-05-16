import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Table, Form, Input, Button } from "antd";
import "../App.css";

const { TextArea } = Input;

const columns = [
  {
    title: "User List",
    dataIndex: "name",
    key: "name",
    render: (text, record) => <Link to={`/user/${record.id}`}>{text}</Link>,
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Phone",
    dataIndex: "phone",
    key: "phone",
  },
];

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")); //Tarayıcının yerel depolama alanından "users" anahtarına sahip verileri alır ve bunları JavaScript nesnesine dönüştürür
    if (storedUsers) {
      setUsers(storedUsers);
    } else {
      const mockData = [
        { id: 1, name: "isim1", email: "isim1@gmail.com", phone: "0544444444" },
        { id: 2, name: "isim2", email: "isim2@gmail.com", phone: "0555555555" },
        { id: 3, name: "isim3", email: "isim3@gmail.com", phone: "0544444444" },
        { id: 4, name: "isim4", email: "isim4@gmail.com", phone: "0544444444" },
      ];
      setUsers(mockData);
      localStorage.setItem("users", JSON.stringify(mockData));
    }
  }, []);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleSubmit = (values) => {
    const newUser = {
      id: Date.now(),
      name: values.name,
      email: values.email,
      phone: values.phone,
    };

    setUsers((prevUsers) => {
      const updatedUsers = [...prevUsers, newUser];
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      return updatedUsers;
    });
    //güncellenmiş liste

    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <div>
      <h1>Users</h1>
      <Table columns={columns} dataSource={users} rowKey="id" />

      <h2 className="form1">Add Customer</h2>
      <Form className="form1" layout="vertical" onFinish={handleSubmit}>
        <Form.Item label="Name" name="name">
          <Input value={name} onChange={handleNameChange} />
        </Form.Item>
        <Form.Item label="Email" name="email">
          <Input value={email} onChange={handleEmailChange} />
        </Form.Item>
        <Form.Item label="Phone" name="phone">
          <Input value={phone} onChange={handlePhoneChange} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default UserList;
