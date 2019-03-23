const MenuHome = (props) => {
	return(
		<div>
			<nav className="navbar navbar-expand-lg bg-primary">
	          <div className="container">
	            <div className="navbar-translate">
	              <a className="navbar-brand">JPMG HOME</a>
	            </div>
	            <div className="collapse navbar-collapse">
	              <ul className="navbar-nav ml-auto">
	                <li className="nav-item active">
	                  <a className="nav-link" href="/menu">
	                    <p>Menu</p>
	                  </a>
	                </li>
	                <li className="nav-item">
	                  <a className="nav-link" href="/about">
	                    <p>About</p>
	                  </a>
	                </li>
	                <li className="nav-item">
	                  <a className="nav-link" href="/users/sign_in">
	                    <p>Sign In</p>
	                  </a>
	                  <a className="nav-link" href="/users/sign_out">
	                    <p>Sign Out</p>
	                  </a>
	                </li>
	              </ul>
	            </div>
	          </div>
	        </nav>
		</div>
	)
}