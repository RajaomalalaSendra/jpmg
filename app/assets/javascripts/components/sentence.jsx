const Sentence =  () => {
	return(
        <div>
    		<Menu />
			<Show />
			<div className="col-md-10" style={{marginTop: '-100px', marginLeft:'240px'}}>
				<div className="container bg-light">
					<h2>We Love ENglish-J'aime le FRancais-Tiako ny teny MalaGasy</h2> 
					<div className="row">
						<div className="col-3"><h2>ENGLISH</h2></div>
						<div className="col-3"><h2>FRENCH</h2></div>
						<div className="col-3"><h2>MALAGASY</h2></div>
					</div>
	            	<BodySentence />
	            </div>
	        </div>
            <Footer />
        </div>
	)
}