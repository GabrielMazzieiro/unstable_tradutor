
const TopBar = () => {
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary" >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Unstable Tradutor</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav nav-underline me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">Home</a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li> */}
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Games
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/uu">Unstable Unicorns</a></li>
                  <li><a className="dropdown-item" href="/hts">Here to Slay</a></li>
                  <li><a className="dropdown-item" href="/hld">Happy Little Dinoussaurs</a></li>
                  <li><a className="dropdown-item" href="/llu">Llamas Unleashed</a></li>
                  <li><a className="dropdown-item" href="/wp">Wrong Party</a></li>
                  <li><a className="dropdown-item" href="/ttko">Tic Tac K.O</a></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Type Card Name" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
      )
}

export default TopBar