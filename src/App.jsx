import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import About from "./Pages/About";
import Profile from "./Pages/Profile";
import Header from "./Components/Header";

function App() {
  return (
    <>
      <BrowserRouter>

      <Header />
        {/* Tailwind wala div Routes ke bahar hona chahiye
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <h1 className="text-3xl font-bold text-blue-600">Tailwind is working!</h1>
        </div> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
