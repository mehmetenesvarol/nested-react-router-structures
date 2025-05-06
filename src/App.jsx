import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFoundPage from "./pages/NotFoundPage";
import Header from "./components/Header";
import Employees from "./pages/Employees";
import CompanyAbout from "./pages/CompanyAbout";
import Managers from "./pages/Managers"
import TeamLeaders from "./pages/TeamLeaders"
import Developers from "./pages/Developers"

function App() {
  return (
    <>
      <div>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}>
            <Route path="employees" element={<Employees/>}>
              <Route path="managers" element={<Managers/>}/>
              <Route path="teamLeaders" element={<TeamLeaders/>}/>
              <Route path="developers" element={<Developers/>}/>
            </Route>
            <Route path="company" element={<CompanyAbout/>}/>
          </Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
