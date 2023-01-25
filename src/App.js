import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Create from "./components/Create";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Update from "./components/Update";
import supabase from "./config/supabaseClient";

function App() {
  return (
    <BrowserRouter>
      <Auth supabaseClient={supabase} appearance={ThemeSupa}>

        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />


          <Route path="/" element={<Home />} />
          <Route path='/create' element={<Create />} />
          <Route path='/:id' element={<Update />} />
        </Routes>
      </Auth>
    </BrowserRouter>
  );
}

export default App;
