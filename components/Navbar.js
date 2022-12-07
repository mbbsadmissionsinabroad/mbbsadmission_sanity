import {Box, Grid, Typography, List, ListItem, ListItemText, Drawer, Collapse} from "@mui/material";
import Image from "next/image";
import TopBar from "./TopBar";
import {useState} from "react";
import MegaMenu from "./MegaMenu";
import {MenuDown, Menu, ChevronUp, ChevronDown, Phone} from "mdi-material-ui";
import Link from "next/link";
import {urlFor} from "../lib/client";
import styles from "./megaMenu.module.css";

const logo = require("../public/assests/New-Lyf Logo.png");

function Navbar({headerData}) {
	const [anchorEl, setAnchorEl] = useState(null);
	const [navItems, setNavItems] = useState([]);
	const [openMobileMenu, setOpenMobileMenu] = useState();
	const [drawerOpen, setDrawerOpen] = useState(false);
	const [mobileMenuKey, setMobileMenuKey] = useState();

	const handleMobileMenu = (e, item) => {
		const data = headerData.find((data) => data._id === item._id);
		setOpenMobileMenu(!openMobileMenu);
		setMobileMenuKey(item._id);
		setNavItems(data.navItems);
	};

	const toggleDrawer = () => {
		setDrawerOpen(!drawerOpen);
	};

	const handleMenu = (event, navItems) => {
		setAnchorEl(event.currentTarget);
		setNavItems(navItems);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const sortedData = () => {
		let finalData = headerData.sort((a, b) => (a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1));
		return finalData;
	};

	return (
		<Box>
			<TopBar />
			<Grid container sx={{padding: "15px"}} alignItems="center" className="navBar">
				<Grid item xs={6} md={3}>
					<Link href="/">
						<a>
							<Image src={logo} width={130} height={60} />
							<Typography variant="body2" sx={{fontStyle: "italic", fontWeight: 500, color: "#000", cursor: "pointer"}}>
								Make a Lyf with New-Lyf...
							</Typography>
						</a>
					</Link>
				</Grid>
				<Grid
					item
					xs={6}
					md={9}
					sx={{display: "flex", alignItems: "center", justifyContent: "flex-end"}}
					className="desktop-menu"
				>
					<Link href="/">
						<a>
							<Typography variant="body1" sx={{padding: "5px", fontWeight: 500, color: "#000", cursor: "pointer"}}>
								Home
							</Typography>
						</a>
					</Link>
					{sortedData().map((item, i) => (
						<Typography
							variant="body1"
							key={i}
							sx={{padding: "5px", fontWeight: 500, display: "flex", alignItems: "center", cursor: "pointer"}}
							onClick={(e) => handleMenu(e, item.navItems)}
						>
							{item.title} <MenuDown />
						</Typography>
					))}
					<Link href="/learn-german-language-course-in-bangalore">
						<a>
							<Typography variant="body1" sx={{padding: "5px", fontWeight: 500, color: "#000", cursor: "pointer"}}>
							Learn German
							</Typography>
						</a>
					</Link>
					<Link href="/contact">
						<a>
							<Typography variant="body1" sx={{padding: "5px", fontWeight: 500, color: "#000", cursor: "pointer"}}>
								Contact
							</Typography>
						</a>
					</Link>
				</Grid>
				<Grid item xs={6} className="mobile-menu">
					<Menu sx={{float: "right", fontSize: "30px", marginRight: "15px"}} onClick={toggleDrawer} />
				</Grid>
			</Grid>
			<MegaMenu anchorEl={anchorEl} navItems={navItems} handleClose={handleClose} />
			<Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
				<Box className="mainDiv" sx={{width: "250px"}}>
					<List>
						<Link href="/" passHref>
							<ListItem>
								<ListItemText
									button="true"
									primary={
										<>
											<Typography variant="body1" sx={{fontWeight: 500}}>
												Home
											</Typography>
										</>
									}
								/>
							</ListItem>
						</Link>
						{sortedData().map((item, i) => {
							return (
								<>
									<ListItem onClick={(e) => handleMobileMenu(e, item)} key={item._id + "title"}>
										<ListItemText
											button="true"
											primary={
												<>
													<Typography variant="body1" sx={{fontWeight: 500}}>
														{item.title}
													</Typography>
												</>
											}
										/>
										{openMobileMenu ? <ChevronUp /> : <ChevronDown />}
									</ListItem>
									<Collapse
										in={mobileMenuKey === item._id}
										timeout="auto"
										key={item._id}
										unmountOnExit
										sx={{paddingLeft: "10px"}}
									>
										{navItems.map((item, i) => (
											<List component="div" disablePadding key={item._id}>
												<Link href={item.slug}>
													<a style={{color: "#000"}}>
														<Box display="flex" alignItems="center" onClick={handleClose} sx={{mb: 1}}>
															{item.image && (
																<img src={urlFor(item.image)} className={styles.menuImg} alt={item.title} />
															)}
															<Typography variant="body1">{item.title}</Typography>
														</Box>
													</a>
												</Link>
											</List>
										))}
									</Collapse>
								</>
							);
						})}
						<Link href="/learn-german-language-course-in-bangalore" passHref>
							<ListItem>
								<ListItemText
									button="true"
									primary={
										<>
											<Typography variant="body1" sx={{fontWeight: 500}}>
												Learn German
											</Typography>
										</>
									}
								/>
							</ListItem>
						</Link>
						<Link href="/contact" passHref>
							<ListItem>
								<ListItemText
									button="true"
									primary={
										<>
											<Typography variant="body1" sx={{fontWeight: 500}}>
												Contact
											</Typography>
										</>
									}
								/>
							</ListItem>
						</Link>
					</List>
				</Box>
			</Drawer>
			<Box className={styles.secondaryMobileBar}>
				<Box display="flex" alignItems="center" sx={{ a: {color: "#fff"} }}>
					<Phone />
					<a href="tel:9341666667" target="_blank">
						<Typography variant="body1" sx={{fontWeight: 500}}>
							+91 (934) 166-6667
						</Typography>
					</a>
				</Box>
				<Box display="flex" alignItems="center" sx={{ a: {color: "#fff"} }}>
					<Phone />
					<a href="tel:9343787475" target="_blank">
						<Typography variant="body1" sx={{fontWeight: 500}}>
							+91 (934) 378-7475
						</Typography>
					</a>
				</Box>
			</Box>
		</Box>
	);
}

export default Navbar;
