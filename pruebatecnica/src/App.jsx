import { useState } from "react";
import Login from "./components/Login/Login";
import Home from "./pages/Home/Home";
import NavBar from "./components/NavBar/Navbar";
const App = () => {
  const [loginPage, setLoginPage] = useState(false);
  const [loginStatus, setLoginStatus] = useState(false);
  return (
    <>
      <NavBar loginPage={loginPage} setLoginPage={setLoginPage} />
      {loginPage ? (
        <Login loginStatus={loginStatus} setLoginStatus={setLoginStatus} />
      ) : (
        <Home />
      )}
    </>
  );
};

export default App;
