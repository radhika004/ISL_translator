import "./Navbar.css";
function Navbar() {
  return (
    <>
      <nav>
        <a  href="/" className="logo">
          ISL
        </a>
        <div>
          <ul className="navbar">
          <li>
              <a href="/">Sign to Text</a>
            </li>
            <li>
              <a href="/texttosign">Text to Sign</a>
            </li>
            <li>
              <a href="/learnmodule">Learn Gestures</a>
            </li>
            <li>
              <a href="/auth/registration">Account</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;