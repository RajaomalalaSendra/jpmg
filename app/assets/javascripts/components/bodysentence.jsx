class BodySentence extends React.Component{
  	constructor(props) {
    	super(props);
        	this.state = {
        	sentences: []
      	};
      	this.handleDelete = this.handleDelete.bind(this);
		this.deleteSentence = this.deleteSentence.bind(this);
      	this.handleUpDate = this.handleUpDate.bind(this);
		this.updateSentence = this.updateSentence.bind(this);
   	}
   	handleDelete(id){
   		 fetch(`/menu/thesaurus/api/v002/sentences/${id}`, 
    	{
      	method: 'DELETE',
      	headers: {
        'Content-Type': 'application/json'
      	}
      }).then((response) => { 
        this.deleteSentence(id);
      })
 	}
   	handleUpDate(sentence){
	    fetch(`/menu/thesaurus/api/v002/sentences/${sentence.id}`, 
	    {
	      method: 'PUT',
	      body: JSON.stringify({sentence: sentence}),
	      headers: {
	        'Content-Type': 'application/json'
	      }
	    }).then((response) => { 
	        this.updateSentence(sentence);
	      })
	}
	updateSentence(sentence){
	    let newSentences = this.state.sentences.filter((s) => s.id !== sentence.id)
	    newSentences.push(sentence)
	    this.setState({
	      sentences: newSentences
	    })
	 }
	deleteSentence(id){
 		newSentences = this.state.sentences.filter((sentence) => sentence.id !== id)
        this.setState({
            sentences: newSentences
        })
 	}
   	componentDidMount(){
   		fetch('/menu/thesaurus/api/v002/sentences.json')
      		.then((response) => {return response.json()})
      		.then((data) => {this.setState({ sentences: data }) });
 	}
	render(){
		return(
			<div>
				<AllSentences sentences={this.state.sentences} handleDelete={this.handleDelete} handleUpDate={this.handleUpDate}/>
			</div>
		)
	}
}