import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
