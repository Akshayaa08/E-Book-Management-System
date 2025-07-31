import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SubscriptionPlan from "./components/SubscriptionPlan";
import Payment from "./components/Payment";
import BookBrowsing from "./components/BookBrowsing";
import Login from "./components/Login";
import BookDetail from "./components/BookDetail";
import MyBooks from "./components/MyBooks"; // Import MyBooks

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/subscription" element={<SubscriptionPlan />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/browse" element={<BookBrowsing />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/book/:isbn" element={<BookDetail />} />
        <Route path="/my-books" element={<MyBooks />} /> {/* Route for MyBooks */}
      </Routes>
    </Router>
  );
}
