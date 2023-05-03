import logo from "./logo.svg";
import "./App.css";
import Login from "./Login";
import Teacher from "./Pages/Teacher";
import Class from "./Pages/Class";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import TeacherNew from "./Pages/TeacherNew";
import { useState } from "react";
import TeacherNewData from "./Pages/TeacherNewData";
import ForgotPassword from "./Pages/ForgotPassword";
import Nav from "./Components/Nav";
import Attendance from "./Pages/Attendance";

function App() {
  // const [superSearch,setSuperSearch] = useState({});
  // const [selectedNews, setSelectedNews] = useState({});

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Attendance />}></Route>
        {/* <Route exact path='/teacher' element={<Teacher/>}></Route> */}{" "}
        {/*orignal */}
        {/* <Route exact path='/teacher' element={<TeacherNew setSelectedNews={setSelectedNews}/>}></Route>  new */}
        <Route exact path="/teacher" element={<TeacherNewData />}></Route>
        <Route exact path="/class/:publishedAt" element={<Class />}></Route>
        <Route
          exact
          path="/forgotPassword"
          element={<ForgotPassword />}
        ></Route>
      </Routes>7b9
    </BrowserRouter>
   
    // <Attendance/>
    
  );
}

export default App;
