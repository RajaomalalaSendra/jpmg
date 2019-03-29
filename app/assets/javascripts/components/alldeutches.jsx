const AllDeutches = (props) => {
	var deutches = props.deutches.map((deutch) => {
		return (
			<div key={deutch.id}>
				<EveryDeutch deutch={deutch}/>
			</div>
		)
	})
	return(
		<div>
  			{deutches}
		</div>
	)
}