import React, { useState } from "react";
const Search = ({ search }) => {
  const [date, setDate] = useState("");
  const [term, setTerm] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    search({ term, date });
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
    </div>
  );
};

export default Search;
