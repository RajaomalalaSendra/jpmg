class BodyGerman extends React.Component{
  	constructor(props) {
    	super(props);
        	this.state = {
        	deutches: []
      	};
   	}
   	componentDidMount(){
   		fetch('/menu/thesaurus/api/v001/deutches.json')
      		.then((response) => {return response.json()})
      		.then((data) => {this.setState({ deutches: data }) });
 	}
	render(){
		return(
			<div>
				<AllDeutches deutches={this.state.deutches}/>
			</div>
		)
	}
}