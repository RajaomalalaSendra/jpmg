class EverySentence extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
            editable: false
		};
		this.handleEdit = this.handleEdit.bind(this);
	}
	handleEdit(){
		if(this.state.editable){
	      let english = this.english.value;
	      let french = this.french.value;
	      let malagasy = this.malagasy.value;
	      let id = this.props.sentence.id;
	      let sentence = {id: id, english: english, french: french, malagasy: malagasy}
	      this.props.handleUpDate(sentence)
    	}
        this.setState({
          editable: !this.state.editable
        })
    }

	render(){
		let english = this.state.editable ? <input type='text' ref={input => this.english = input} defaultValue={this.props.sentence.english} className="form-control"/>:<h5>{this.props.sentence.english}</h5>
        let french = this.state.editable ? <input type='text' ref={input => this.french = input} defaultValue={this.props.sentence.french} className="form-control"/>:<h5>{this.props.sentence.french}</h5>
        let malagasy = this.state.editable ? <input type='text' ref={input => this.malagasy = input} defaultValue={this.props.sentence.malagasy} className="form-control"/>:<h5>{this.props.sentence.malagasy}</h5>
		return (
			<div className="row">
			    <div className="col-3">{english}</div>
		        <div className="col-3">{french}</div>
		        <div className="col-3">{malagasy}</div>
		        <div className="col-3"><button className="btn btn-default" onClick = {() => this.handleEdit()}>{this.state.editable? 'Submit' : 'Edit'}</button>
		        <button className="btn btn-danger" onClick = {() => this.handleDelete()}>{this.props.sentence.id}</button></div>
			</div>
		)
	}
}