import Table from "./Table";
import Input from "./Input";
import Search from "./search";
import Header from "./Header";
import "./App.css";
function App() {
  const bookings = "https://hotel-node3.onrender.com/booking";

  return (
    <div className="App">
      <Header />
      <div className="container">
        <Input />
        <Search />
        <Table bookings={bookings} />
      </div>
    </div>
  );
}

export default App;
