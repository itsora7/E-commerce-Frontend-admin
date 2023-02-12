import "./App.css";
import { BrowserRouter as Browser, Route, Routes } from "react-router-dom";
import Registration from "./pages/register/Registration";
import LoginPage from "./pages/login/LoginPage";
function App() {
  return (
    <div className="">
      <Browser>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<Registration />} />
        </Routes>
      </Browser>
    </div>
  );
}

export default App;
