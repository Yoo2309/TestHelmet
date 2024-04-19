import "./App.css";
import HelmetComponent1 from "./HelmetComponent1";
import HelmetComponent2 from "./HelmetComponent2";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/1"
            element={
              <HelmetComponent1
                imageUrl={"http://i.imgur.com/T2hGPCv.png"}
                description={"đây là component 1"}
                url={"https://test-helmet-eight.vercel.app/1"}
                title={"Trang chủ"}
                imageAlt={"lỗi ảnh"}
              />
            }
          />
          <Route
            exact
            path="/2"
            element={
              <HelmetComponent2
                imageUrl={"http://i.imgur.com/o4d1BnE.png"}
                description={"đây là component 2"}
                url={"https://test-helmet-eight.vercel.app/2"}
                title={"Trang chi tiết"}
                imageAlt={"lỗi ảnh"}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
