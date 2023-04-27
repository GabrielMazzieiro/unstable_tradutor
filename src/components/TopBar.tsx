
const TopBar = () => {
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary" >
        <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="navbar-itens collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav nav-underline me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://github.com/GabrielMazzieiro/unstable_tradutor">Github</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Jogos
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
                <li className="nav-item">
                  <a className="nav-link" href="http://unstablegameswiki.com/">Wiki</a>
                </li>
                
              </ul>
            </div>

            <a className="navbar-brand  mx-auto d-block text-center order-0 order-md-1 w-25" href="/">
              <img src={require("../assets/tradutor_logo.png")} alt="Bootstrap" width="120" height="60"/>
            </a>
            
            {/* <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Nome da Carta" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}
          

        </div>
      </nav>
      )
}

export default TopBar