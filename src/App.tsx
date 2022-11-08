import { Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";

import Login from "./pages/auth/login/Login";
import Home from "./pages/home/Home";
import { store } from "./store/store";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="home" element={<Home />}></Route>
          <Route path="login" element={<Login />}></Route>
        </Routes>
      </Provider>
    </>
  );
};

export default App;
