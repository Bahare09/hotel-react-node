import React, { useState } from "react";
const Search = () => {
  const [date, setDate] = useState("");
  const [term, setTerm] = useState("");
  const [data, setData] = useState([]);
  const handleSubmit = () => {
    fetch(
      `https://hotel-node3.onrender.com/bookings/search?date=${date}&term=${term}`
    )
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="term"
          placeholder="Search"
          value={term}
          onChange={(event) => setTerm(event.target.value)}
        />

        <input
          type="date"
          name="date"
          placeholder="Search Date"
          value={date}
          onChange={(event) => {
            const date = new Date(event.target.value);
            const formattedDate = date.toISOString().split("T")[0];
            setDate(formattedDate);
          }}
        />
        <button type="submit">Search</button>
      </form>
      <table bookings={data} />
    </div>
  );
};

export default Search;
