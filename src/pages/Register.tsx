import { Link } from "react-router-dom";
// import "./register.css";

export default function Register() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Social Media</h3>
          <span className="loginDesc">
            Connect with Friends around the world on Social Media
          </span>
        </div>

        <div className="loginRight">
          <div className="loginBox">
            <input type="text" placeholder="Username" className="loginInput" />
            <input type="text" placeholder="Email" className="loginInput" />
            <input
              type="password"
              placeholder="Password"
              className="loginInput"
            />
            <input
              type="password"
              placeholder="Rewrite Password"
              className="loginInput"
            />
            <Link className="link" to="/login">
              <button className="loginButton">Sign Up</button>
              <button className="loginRegisterButton">
                Login your account
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
