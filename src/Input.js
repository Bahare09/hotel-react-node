import React, { useState } from "react";

const Input = () => {
  const [title, setTitle] = useState("");
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [roomId, setRoomId] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newBooking = {
      title,
      firstName,
      surname,
      email,
      checkInDate,
      checkOutDate,
      roomId,
    };

    // Send a POST request to the API with the input value
    const response = await fetch("https://hotel-node3.onrender.com/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBooking),
    });

    // Handle the response
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="form-container">
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />

          <input
            type="text"
            name="firstName"
            placeholder="FirstName"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
          <input
            type="text"
            name="surname"
            placeholder="Surname"
            value={surname}
            onChange={(event) => setSurname(event.target.value)}
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            type="text"
            name="roomId"
            placeholder="RoomId"
            value={roomId}
            onChange={(event) => setRoomId(event.target.value)}
          />

          <input
            type="date"
            name="checkInDate"
            placeholder="Check-In-Date"
            value={checkInDate}
            onChange={(event) => {
              //change date format to YYYY-DD
              const date = new Date(event.target.value);
              const formattedDate = date.toISOString().split("T")[0];
              setCheckInDate(formattedDate);
            }}
          />
          <input
            type="date"
            name="checkOutDate"
            placeholder="Check-Out-Date"
            value={checkOutDate}
            onChange={(event) => {
              const date = new Date(event.target.value);
              const formattedDate = date.toISOString().split("T")[0];
              setCheckOutDate(formattedDate);
            }}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Input;
