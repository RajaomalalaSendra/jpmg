const MenuLink = (props) => {
	return(
		<div>
			<div className="col-md-8 card" style={{marginLeft: "400px"}}>
				<div className="row">
					<div className="col-md-6">
						<img src="1.png" alt="|picture for thesaurus|" style={{width: "75%"}}/>
					</div>
					<div className="col-md-6">
						<a href="/menu/thesaurus" alt="|this is the link for thesaurus|">
							<h1 style={{marginTop: "50px"}}>THESAURUS</h1>
							<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
							quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
							consequat.
							</p>
						</a>
					</div>
				</div>
			</div>
			<div className="col-md-8 card" style={{marginLeft: "100px"}}>
				<div className="row">
					<div className="col-md-6">
						<img src="2.png" alt="|picture for proverbs|" style={{width: "75%"}}/>
					</div>
					<div className="col-md-6">
						<a href="/menu/proverbs" alt="|this is the link for proverbs|">
							<h1 style={{marginTop: "50px"}}>PROVERBS</h1>
							<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
							quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
							consequat.
							</p>
						</a>
					</div>
				</div>
			</div>
			<div className="col-md-8 card" style={{marginLeft: "400px"}}>
				<div className="row">
					<div className="col-md-6">
						<img src="3.png" alt="|picture for machinetranslation|" style={{width: "75%"}}/>
					</div>
					<div className="col-md-6">
						<a href="/menu/machinetranslation" alt="|this is the link for machinetranslation|">
							<h1 style={{marginTop: "50px"}}>MACHINETRANSLATION</h1>
							<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
							quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
							consequat.
							</p>
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}