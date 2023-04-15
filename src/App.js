import Table from "./Table";
import Search from "./search";
import Header from "./Header";
import "./App.css";
function App() {
  const bookings = "https://hotel-node3.onrender.com/booking";

  return (
    <div className="App">
      <Header />
      <div className="container">
        <Search />
        <Table />
      </div>
    </div>
  );
}

export default App;
