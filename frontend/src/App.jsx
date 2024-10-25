import LoginSignup from "./pages/LoginSignup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginSignup />}></Route>
        <Route path="/home" element={<Homepage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
