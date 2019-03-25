class Body extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			words: []
		};
		this.handleDelete = this.handleDelete.bind(this);
		this.deleteWord = this.deleteWord.bind(this);
		this.handleUpDate = this.handleUpDate.bind(this);
		this.updateWord = this.updateWord.bind(this);
	}
	handleDelete(id){
   		 fetch(`/menu/thesaurus/api/v001/words/${id}`, 
    	{
      	method: 'DELETE',
      	headers: {
        'Content-Type': 'application/json'
      	}
      }).then((response) => { 
        this.deleteWord(id);
      })
 	}
 	handleUpDate(word){
	    fetch(`/menu/thesaurus/api/v001/words/${word.id}`, 
	    {
	      method: 'PUT',
	      body: JSON.stringify({word: word}),
	      headers: {
	        'Content-Type': 'application/json'
	      }
	    }).then((response) => { 
	        this.updateWord(word);
	      })
	}
 	deleteWord(id){
 		newWords = this.state.words.filter((word) => word.id !== id)
        this.setState({
            words: newWords
        })
 	}
 	updateWord(word){
	    let newWords = this.state.words.filter((w) => w.id !== word.id)
	    newWords.push(word)
	    this.setState({
	      words: newWords
	    })
	 }
	componentDidMount(){
		fetch('/menu/thesaurus/api/v001/words.json')
		.then((response) => {return response.json()})
		.then((data) => {this.setState({ words: data }) })
	}
	render(){
		return(
			<div>
			    <AllWords words={this.state.words} handleDelete={this.handleDelete} handleUpDate={this.handleUpDate}/>
			</div>
			)
	}
}