import { Route, Routes } from "react-router-dom";

import Login from "./pages/auth/login/login";
import Home from "./pages/home/Home";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="home" element={<Home />}></Route>
        <Route path="login" element={<Login />}></Route>
      </Routes>
    </>
  );
};

export default App;
