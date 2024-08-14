import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import SignIn from "./pages/login2";
import Register from "./pages/register";
import Home from "./pages/home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login2" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
