import {Box, Grid, Menu, Typography} from "@mui/material";
import styles from "./megaMenu.module.css";
import {urlFor} from "../lib/client";
import Link from "next/link";

function MegaMenu(props) {
	const {navItems, anchorEl, handleClose} = props;
	return (
		<Menu
			PopoverClasses={{paper: styles.popoverPaper}}
			id="customized-menu"
			anchorEl={anchorEl}
			getcontentanchorel={null}
			open={Boolean(anchorEl)}
			onClose={handleClose}
		>
			<Grid container sx={{ padding: '0px 10px' }}>
				{navItems.map((item, i) => (
					<Grid item key={i} xs={12} md={4}>
						<Link href={item.slug}>
							<a style={{ color: "#000" }}>
								<Box display="flex" alignItems="center" onClick={handleClose}>
									{item.image && <img src={urlFor(item.image)} className={styles.menuImg} alt={item.title} />}
									<Typography variant="body1">{item.title}</Typography>
								</Box>
							</a>
						</Link>
					</Grid>
				))}
			</Grid>
		</Menu>
	);
}

export default MegaMenu;
