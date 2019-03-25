const NewSentence = (props) => {
	let formFields = {};
	return(
		<form onSubmit={ (e) => { props.handleFormSubmit(formFields.english.value, formFields.french.value, formFields.malagasy.value); e.target.reset();}}>
            <div className="row">
	            <div className="col"><input ref={input => formFields.english = input} placeholder='english' className="form-control"/></div>
	            <div className="col"><input ref={input => formFields.french = input} placeholder='french' className="form-control"/></div>
	            <div className="col"><input ref={input => formFields.malagasy = input} placeholder='malagasy' className="form-control"/></div>
	            <div className="col"><button className="btn btn-success">Submit</button></div>
            </div>
        </form>
	)
}