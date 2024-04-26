import "./App.css";
import HelmetComponent1 from "./HelmetComponent1";
import HelmetComponent2 from "./HelmetComponent2";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/1" element={<HelmetComponent1 />} />
          <Route exact path="/2" element={<HelmetComponent2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
