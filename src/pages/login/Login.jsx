import "./login.css";
export default function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <p className="loginLogo">Social Media</p>
          <p className="loginDesc">
            Connect with Friends around the world on Social Media
          </p>
        </div>

        <div className="loginRight">
          <div className="loginBox">
            <input type="text" placeholder="Email" className="loginInput" />
            <input
              type="password"
              placeholder="Password"
              className="loginInput"
            />
            <button className="loginButton">Login</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              Create a new account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
