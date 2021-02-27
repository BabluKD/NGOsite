import React from "react";
import Table from "react-bootstrap/Table";

import "./styles/afterlogin.style.css";
import whatsapp from "../images/icons/whatsapp.png";

const dummyData = [
  {
    id: "001",
    fullName: "Bablu Kumar",
    namePrinted: "Bablu Kumar",
    email: "bablu@gmail.com",
    whatsappNumber: "8935806098",
    socialAccount: "Facebook",
    username: "bablu_kd",
    Order: "1-2,2-5,3-0,4-0",
  },
  {
    id: "002",
    fullName: "Ganesh Kumar",
    namePrinted: "Ganesh Kumar",
    email: "Ganesh@gmail.com",
    whatsappNumber: "9876543210",
    socialAccount: "Instagram",
    username: "ganesh123",
    Order: "1-2,2-5,3-0,4-0",
  },
  {
    id: "003",
    fullName: "Bablu Kumar",
    namePrinted: "Bablu Kumar",
    email: "bablu@gmail.com",
    whatsappNumber: "8935806098",
    socialAccount: "Facebook",
    username: "bablu_kd",
    Order: "1-2,2-5,3-0,4-0",
  },
];

const tableData = dummyData.map((item) => (
  <tr key={item.id}>
    <td>{item.id}</td>
    <td>{item.fullName}</td>
    <td>{item.namePrinted}</td>
    <td>{item.email}</td>
    <td>
      <span>
        {item.whatsappNumber}
        <a href={`https://wa.me/91${item.whatsappNumber}?text=Thank%20you%20for%20your%20order!We%20will%20get%20back%20to%20you%20soon.`}>
          <img src={whatsapp} className="whatsapp-svg" alt="whatsapp" />
        </a>
      </span>
    </td>
    <td>{item.socialAccount}</td>
    <td>{item.username}</td>
    <td>{item.Order}</td>
  </tr>
));

function AfterLogin() {
  return (
    <div className="col-md-10 mx-auto mt-4">
      <Table striped borderless hover responsive>
        <thead>
          <tr style={{ backgroundColor: "#ffc107" }}>
            <th>ID</th>
            <th>Full Name</th>
            <th>Name to be Printed</th>
            <th>Email</th>
            <th>Whatsapp Number</th>
            <th>Social Account</th>
            <th>Username</th>
            <th>Order</th>
          </tr>
        </thead>
        <tbody>{tableData}</tbody>
      </Table>
    </div>
  );
}

export default AfterLogin;
