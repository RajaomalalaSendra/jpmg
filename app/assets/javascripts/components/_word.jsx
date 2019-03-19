class Word extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
            editable: false
		};
		this.handleEdit = this.handleEdit.bind(this);
	}
	handleEdit(){
		if(this.state.editable){
	      let japanese = this.japanese.value;
	      let romanji = this.romanji.value;
	      let malagasy = this.malagasy.value;
	      let id = this.props.word.id;
	      let word = {id: id, japanese: japanese, romanji: romanji, malagasy: malagasy}
	      this.props.handleUpDate(word)
    	}
        this.setState({
          editable: !this.state.editable
        })
    }

	render(){
		let japanese = this.state.editable ? <input type='text' ref={input => this.japanese = input} defaultValue={this.props.word.japanese} className="form-control"/>:<h5>{this.props.word.japanese}</h5>
        let romanji = this.state.editable ? <input type='text' ref={input => this.romanji = input} defaultValue={this.props.word.romanji} className="form-control"/>:<h5>{this.props.word.romanji}</h5>
        let malagasy = this.state.editable ? <input type='text' ref={input => this.malagasy = input} defaultValue={this.props.word.malagasy} className="form-control"/>:<h5>{this.props.word.malagasy}</h5>
		return (
			<div className="row">
			    <div className="col-3">{japanese}</div>
		        <div className="col-3">{romanji}</div>
		        <div className="col-3">{malagasy}</div>
		        <div className="col-3"><button className="btn btn-default" onClick = {() => this.handleEdit()}>{this.state.editable? 'Submit' : 'Edit'}</button>
		        <button onClick={() => this.props.handleDelete(this.props.word.id)} className="btn btn-danger">Delete</button></div>
			</div>
		)
	}
}