import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import Navbar from "./components/Header/Navbar";
import Cards from "./pages/Cards";
import Credies from "./pages/Credies";
import Ipotecs from "./pages/Ipotecs";
import Deposits from "./pages/Deposits";
import Transfer from "./pages/Transfer";
import Services from "./pages/Services";
import Campains from "./pages/Campains";
import PersonalBank from "./pages/PersonalBank";
import FooterUp from "./components/Footer/FooterUp";
import FooterBottom from "./components/Footer/FooterBottom";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/credies" element={<Credies />} />
        <Route path="/ipotecs" element={<Ipotecs />} />
        <Route path="/deposits" element={<Deposits />} />
        <Route path="/transfer" element={<Transfer />} />
        <Route path="/services" element={<Services />} />
        <Route path="/campains" element={<Campains />} />
        <Route path="/personal-banking" element={<PersonalBank />} />
        <Route />
        <Route />
      </Routes>
      <FooterUp />
      <FooterBottom />
    </div>
  );
}

export default App;
