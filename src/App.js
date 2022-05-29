import { Route, Routes } from "react-router-dom";
import AttendeeForm from "./components/AttendeeForm";
import Contact from "./components/Contact";
import Home from "./components/Home";

function App() {
  return (
    <div className="container mx-auto px-4 bg-slate-300 ">
 
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Add-Attendee" element={<AttendeeForm/>}/>
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
