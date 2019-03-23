const Menu = (props) => {
	return(
		<div>
			<nav className="navbar navbar-expand-lg bg-primary">
              <div className="container">
                <div className="navbar-translate">
                  <a className="navbar-brand">JPMG</a>
                </div>
                <div className="collapse navbar-collapse">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                      <a className="nav-link">
                        <p>Discover</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link">
                        <p>Profile</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link">
                        <p>Settings</p>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
    </div>
	)
}