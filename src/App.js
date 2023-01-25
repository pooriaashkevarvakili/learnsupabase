import { BrowserRouter, Route, Routes } from "react-router-dom";
import Create from "./components/Create";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Update from "./components/Update";


function App() {
  return (
    <BrowserRouter>

      <Navbar />
      <Routes>



        <Route path="/" element={<Home />} />
        <Route path='/create' element={<Create />} />
        <Route path='/:id' element={<Update />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
