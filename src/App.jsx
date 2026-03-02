import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/LandingPage/Home";
import Dashboard from "./Components/Admin/Dashboard";
import Layout from "./Components/Admin/Layout";
import Courses from "./Components/Admin/Courses";
import Branch from "./Components/Admin/Branch";
import Semester from "./Components/Admin/Semester";
import ExamYear from "./Components/Admin/ExamYear";
import QuestionPaper from "./Components/Admin/QuestionPaper";
import Solution from "./Components/Admin/Solution";
import Setting from "./Components/Admin/Setting";
import "remixicon/fonts/remixicon.css";
import 'animate.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="courses" element={<Courses />} />
          <Route path="branch" element={<Branch />} />
          <Route path="semester" element={<Semester />} />
          <Route path="exam-year" element={<ExamYear />} />
          <Route path="question-paper" element={<QuestionPaper />} />
          <Route path="Solution" element={<Solution />} />
          <Route path="setting" element={<Setting />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
