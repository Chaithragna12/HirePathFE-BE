import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
// import Jobs from "./pages/Jobs";
// import SavedJobs from "./pages/SavedJobs";
// import Applications from "./pages/Applications";
// import Profile from "./pages/Profile";
// import About from "./pages/About";
// import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/savedJobs" element={<SavedJobs />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>

      {/* <Footer /> */}
    </>
  );
}

export default App;