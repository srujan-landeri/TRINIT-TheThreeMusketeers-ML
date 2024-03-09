import { Route, Routes } from "react-router-dom";

import {HomePage} from "./Pages/HomePage";
import {LoginPage} from "./Pages/LoginPage";
import {UserPage} from "./Pages/UserPage";

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = "/"  element={<HomePage/>} exact/>
        <Route path = "/login" element={<LoginPage/>}></Route>
        <Route path = "/user" element={<UserPage/>}></Route>
      </Routes>

      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="dark"
      />

    </div>
  );
}

export default App;
