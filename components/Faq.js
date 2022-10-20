import styles from "./HomePage/homePage.module.css";
import {Box, Grid, Typography, Accordion, AccordionSummary, AccordionDetails} from "@mui/material";
import {ChevronDownCircleOutline} from "mdi-material-ui";

function Faq({data, title}) {
	return (
		<Box sx={{mt: 2}}>
		<Typography variant="h6" gutterBottom className='serializerTitle' id="faq">{title} FAQ</Typography>
			{data.map((item, i) => (
				<Accordion key={i} sx={{background: "rgba(0,0,0,.03)"}}>
					<AccordionSummary expandIcon={<ChevronDownCircleOutline />}>
						<Typography variant="body1" sx={{fontSize: "18px"}}>
							{item.question}
						</Typography>
					</AccordionSummary>
					<AccordionDetails sx={{background: "#fff"}}>
						<div className={styles.faqPTag} dangerouslySetInnerHTML={{__html: item.answer}} />
					</AccordionDetails>
				</Accordion>
			))}
		</Box>
	);
}

export default Faq;
