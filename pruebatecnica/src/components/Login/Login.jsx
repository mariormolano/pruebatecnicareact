import "./Login.css";

const Login = ({ loginStatus, setLoginStatus }) => {
  const handleclick = (event) => {
    event.prevetDefault();
  };
  return (
    <>
      <form action={() => handleclick()}>
        <div>
          <label htmlFor="username">Nombre de Usuario</label>
          <input type="text" id="username" autoComplete="username" />
        </div>
        <br />
        <div>
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            autoComplete="current-password"
          />
        </div>
        <br />
        <input type="submit" />
      </form>
    </>
  );
};
export default Login;
