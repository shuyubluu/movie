import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Overview from "./pages/Overview";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/overview" element={<Overview />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
