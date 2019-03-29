class German extends React.Component{
	constructor(props) {
		super(props);
	}
	render() {
		return(
			<div>
				<Menu />
				<Show />
				<div>
					<div className="col-md-10" style={{marginTop: '-100px', marginLeft:'240px'}}>
						<div className="container bg-light">
							<h2>We Love ENglish-..............-Tiako ny teny MalaGasy</h2>
							<div className="row">
								<div className="col-3"><h2>ENGLISH</h2></div>
								<div className="col-3"><h2>GERMAN</h2></div>
								<div className="col-3"><h2>MALAGASY</h2></div>
							</div>
			            	<BodyGerman />
			            </div>
			        </div>
				</div>
				<Footer />
			</div>
		)
	}
}