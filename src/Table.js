import React, { useEffect, useState } from "react";
import Input from "./Input";
import Search from "./Search";

const Table = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://hotel-node3.onrender.com/bookings")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);
  const handlerDeleteClick = (id) => {
    fetch(`https://hotel-node3.onrender.com/bookings/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  };
  const addCustomer = async (input) => {
    // Send a POST request to the API with the input value
    const response = await fetch("https://hotel-node3.onrender.com/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input),
    });

    // Handle the response
    const data = await response.json();
    setData(data);
  };
  const search = (input) => {
    fetch(
      `https://hotel-node3.onrender.com/bookings/search?term=${input.term}&date=${input.date}`
    )
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  };

  return (
    <>
      <Input addCustomer={addCustomer} />
      <Search search={search} />
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>First Name</th>
            <th>Surname</th>
            <th>Email</th>
            <th>Room ID</th>
            <th>Check in Date</th>
            <th>Check out Date</th>
            <th>Delete Booking</th>
          </tr>
        </thead>
        <tbody>
          {data.map((booking) => (
            <tr key={booking.id}>
              <td>{booking.id}</td>
              <td>{booking.title}</td>
              <td>{booking.firstName}</td>
              <td>{booking.surname}</td>
              <td>{booking.email}</td>
              <td>{booking.roomId}</td>
              <td>{booking.checkInDate}</td>
              <td>{booking.checkOutDate}</td>
              <td>
                <button onClick={() => handlerDeleteClick(booking.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
