class EveryDeutch extends React.Component{
	constructor(props) {
		super(props);
	}
	render(){
		let english = <h5>{this.props.deutch.english}</h5>
        let german = <h5>{this.props.deutch.german}</h5>
        let malagasy = <h5>{this.props.deutch.malagasy}</h5>
		return (
			<div className="row">
			    <div className="col-3">{english}</div>
		        <div className="col-3">{german}</div>
		        <div className="col-3">{malagasy}</div>
			</div>
		)
	}
}