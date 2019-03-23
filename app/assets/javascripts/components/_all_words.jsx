const AllWords = (props) => {
	var words = props.words.map((word) => {
		return (
			<div key={word.id}>
				<Word word={word} handleDelete={props.handleDelete} handleUpDate={props.handleUpDate}/>
			</div>
		)
	})
	return(
		<div>
  			{words}
		</div>
	)
}