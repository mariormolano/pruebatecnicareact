import "./NavBar.css";

const NavBar = ({ loginPage, setLoginPage }) => {
  return (
    <nav>
      <button onClick={() => setLoginPage(!loginPage)}>Login</button>
    </nav>
  );
};

export default NavBar;
