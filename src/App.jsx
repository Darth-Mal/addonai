import Addonai from "./pages/addonai";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Addonai />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
