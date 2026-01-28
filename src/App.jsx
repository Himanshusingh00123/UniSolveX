import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'remixicon/fonts/remixicon.css'

import Home from "./Components/LandingPage/Home";
import Dashboard from "./Components/Admin/Dashboard";
import Layout from "./Components/Admin/Layout";
import Courses from "./Components/Admin/Courses";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="courses" element={<Courses />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
