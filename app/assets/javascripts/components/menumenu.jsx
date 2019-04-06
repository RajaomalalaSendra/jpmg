const MenuMenu = (props) => {
	return(
		<div>
			<nav className="navbar navbar-expand-lg bg-primary">
              <div className="container">
                <div className="navbar-translate">
                  <a className="navbar-brand">JPMG Menu</a>
                </div>
                <div className="collapse navbar-collapse">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                      <a className="nav-link" href="/">
                        <p>Home</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/about">
                        <p>About</p>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
		</div>
	)
}