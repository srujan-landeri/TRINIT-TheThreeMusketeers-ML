import { Route, Routes } from "react-router-dom";
import {HomePage} from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = "/"  element={<HomePage/>} exact/>
      </Routes>
    </div>
  );
}

export default App;
