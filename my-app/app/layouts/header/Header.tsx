export default function Header() {
  return (
    <header className="header">
      <div className="top-header">
        <div className="title"><span style={{color : "#ED1D25"}}>Personal</span><span className="separator">|</span><span style={{color: "#151515"}}>Institutional</span></div>
        <div className="header-text"><span className="dark-text">WebTrader</span><span className="separator">|</span><span className="dark-text">Support</span><span className="separator">|</span><span className="dark-text">Open Demo</span><span className="separator">|</span><img style={{width: "30px", height: "30px"}} src="/language.png" /><span className="dark-text">EN</span></div>
      </div>
      <div className="bottom-header">
        <img src="/logoDark.svg" alt="Main logo" />
        <div className="nav-bar">
          <div className="nav-element"><p className="nav-item">Trading</p><img src="/chevron.svg"/></div>
          <div className="nav-element"><p className="nav-item">Discover</p><img src="/chevron.svg"/></div>
          <div className="nav-element"><p className="nav-item">Promotions</p><img src="/chevron.svg"/></div>
          <div className="nav-element"><p className="nav-item">Company</p><img src="/chevron.svg"/></div>
          <div className="nav-element" style={{color: '#ED1D25'}}><p className="nav-item">Partner with us  </p><img src="/arrowRight.svg"/></div>
        </div>
        <div className="register-login">
          <button className="register-button">Register</button>
          <button className="user-button"><img src="/user.svg"/></button>
        </div>
      </div>
    </header>
  );
}