function Faq({data}) {
	return (
		<div>
			{
				data.map((item, i) => (
					<div className="faq" key={i}>
						<h5>{item.question}</h5>
						<div dangerouslySetInnerHTML={{__html: item.answer}} />
					</div>
				))
			}
		</div>
	)
}

export default Faq