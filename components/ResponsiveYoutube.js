function ResponsiveYoutube({data}) {
	return (
		data.map((item, i) => (
			<div className="container" key={i}>
				<iframe className="responsive-iframe" src={`https://www.youtube.com/embed/${item.embedId}`}></iframe>
			</div>
		))
	)
}

export default ResponsiveYoutube