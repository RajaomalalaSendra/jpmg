class BeforeBody extends React.Component{
	constructor(props) {
		super(props);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
		this.addNewWord = this.addNewWord.bind(this);
	}
	handleFormSubmit(japanese,romanji,malagasy){
	    let body = JSON.stringify({word: {japanese: japanese, romanji: romanji, malagasy: malagasy}});
        fetch(`http://localhost:3000/api/v001/words`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: body,
        }).then((response) => {return response.json()})
        .then((word)=>{
           this.addNewWord(word)
        })
    }

    addNewWord(word){
      this.setState({
        words: this.state.words.concat(word)
      })
    }
	render(){
		return(
			<div>
				<Menu />
				<Show />
				<div className="col-md-10" style={{marginTop: '-100px', marginLeft:'200px'}}>
					<div className="container bg-light">
						<h2>日本語好きです。NIHONGO SUKI DESU. Tiako ny teny Japoney.</h2> 
						<NewWord  handleFormSubmit={this.handleFormSubmit}/>
						<div className="row">
							<div className="col-3"><h2>日本語</h2></div>
							<div className="col-3"><h2>ROMANJI</h2></div>
							<div className="col-3"><h2>MALAGASY</h2></div>
						</div>
		            	<Body />
		            </div>
		        </div>
	            <Footer />
	        </div>
		)
	}
}