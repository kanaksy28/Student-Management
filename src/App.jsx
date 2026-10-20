import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import StudentList from "./pages/StudentList";
import StudentDetails from "./pages/StudentDetails";
import AddStudent from "./pages/AddStudent";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/students" element={<StudentList />} />

        <Route path="/students/:id" element={<StudentDetails />} />

        <Route path="/add-student" element={<AddStudent />} />

        <Route path="*" element={<NotFound />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;