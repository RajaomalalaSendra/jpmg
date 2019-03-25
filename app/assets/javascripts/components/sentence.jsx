class Sentence extends React.Component{
	constructor(props) {
		super(props);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
		this.addNewSentence = this.addNewSentence.bind(this);
	}
	handleFormSubmit(english,french,malagasy){
	    let body = JSON.stringify({sentence: {english: english, french: french, malagasy: malagasy}});
        fetch(`/menu/thesaurus/api/v002/sentences`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: body,
        }).then((response) => {return response.json()})
        .then((sentence)=>{
           this.addNewSentence(sentence)
        })
    }

    addNewSentence(sentence){
      this.setState({
        words: this.state.sentences.concat(sentence)
      })
    }
	render(){
		return(
	        <div>
	    		<Menu />
				<Show />
				<div className="col-md-10" style={{marginTop: '-100px', marginLeft:'240px'}}>
					<div className="container bg-light">
						<h2>We Love ENglish-J'aime le FRancais-Tiako ny teny MalaGasy</h2>
						<NewSentence handleFormSubmit={this.handleFormSubmit}/> 
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
}