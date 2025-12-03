export default function Header() {
  return (
    <header className="header">
      <div className="top-header">
        <div className="title"><span style={{color : "#ED1D25"}}>Personal</span><span className="separator">|</span><span style={{color: "#151515"}}>Institutional</span></div>
        <div className="header-text"><span className="dark-text">WebTrader</span><span className="separator">|</span><span className="dark-text">Support</span><span className="separator">|</span><span className="dark-text">Open Demo</span></div>
      </div>
      <div className="bottom-header">
        <img src="/logoDark.svg" alt="Main logo" />
        <div className="nav-bar">
          <p className="nav-item">Trading</p>
          <p className="nav-item">Discover</p>
          <p className="nav-item">Promotions</p>
          <p className="nav-item">Company</p>
          <p className="nav-item">Partner with us</p>
        </div>
        <div className="register-login">
          <button className="register-button">Register</button>
          <button className="user-button"><img src="/user.svg"/></button>
        </div>
      </div>
    </header>
  );
}