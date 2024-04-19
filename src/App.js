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
                description={"đây là component 1"}
                imageUrl={"https://toeic.workon.space/"}
                title={"Trang chủ"}
                url={"https://i.imgur.com/d2waE9z.png"}
                imageAlt={"lỗi ảnh"}
              />
            }
          />
          <Route
            exact
            path="/2"
            element={
              <HelmetComponent2
                description={"đây là component 2"}
                imageUrl={
                  "https://toeic.workon.space/test/result/a15a6df3-2c6b-46bc-a8d8-7ded00085e92"
                }
                title={"Trang chi tiết"}
                url={"https://i.imgur.com/OxfKelV.png"}
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
