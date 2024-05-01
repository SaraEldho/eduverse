import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home/Home";
import Auth from "./Pages/Auth";
import Dashboard from "./Pages/Dashboard";
import User from "./Pages/User";
import Content from "./Pages/Content";
import Courses from "./Pages/Courses";
import { Navigate } from "react-router-dom";
import About from "./Pages/About/About";
import Team from "./Pages/Team";
import Contact from "./Pages/Contact";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/login"} element={<Auth />} />
        <Route path={"/register"} element={<Auth register />} />
        <Route path={"/dashboard"} element={<Dashboard />} />
        <Route path={"/content"} element={<Content />} />
        <Route path={"/team"} element={<Team />} />
        <Route path={"/courses"} element={<Courses />} />
        <Route path={"/contact"} element={<Contact />} />
        <Route path={"/user"} element={<User />} />
        <Route path={"*"} element={<Navigate to={"/"} />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
