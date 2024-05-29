import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Overview from "./pages/Overview";
import Footer from "./components/Footer";
import TheaterInfomation from "./TheaterInfomation/TheaterInfomation";
import PaymentLayout from "./Payment/PaymentLayout";
import BookingLayout from "./Booking/BookingLayout";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/theaters" element={<TheaterInfomation />} />
        <Route path="/booking/:id/payment" element={<PaymentLayout />} />
        <Route path="/booking/:id" element={<BookingLayout />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
