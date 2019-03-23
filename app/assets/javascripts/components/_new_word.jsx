const NewWord = (props) => {
	let formFields = {};
	return (
        <form onSubmit={ (e) => { props.handleFormSubmit(formFields.japanese.value, formFields.romanji.value, formFields.malagasy.value); e.target.reset();}}>
            <div className="row">
	            <div className="col"><input ref={input => formFields.japanese = input} placeholder='日本語' className="form-control"/></div>
	            <div className="col"><input ref={input => formFields.romanji = input} placeholder='The Romanji' className="form-control"/></div>
	            <div className="col"><input ref={input => formFields.malagasy = input} placeholder='Ny teny Malagasy' className="form-control"/></div>
	            <div className="col"><button className="btn btn-success">Submit</button></div>
            </div>
        </form>
	)
}