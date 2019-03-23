const AllSentences = (props) => {
	var sentences = props.sentences.map((sentence) => {
		return (
			<div key={sentence.id}>
				<EverySentence sentence={sentence} handleUpDate={props.handleUpDate}/>
			</div>
		)
	})
	return(
		<div>
  			{sentences}
		</div>
	)
}