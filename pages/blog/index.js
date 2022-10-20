import {Box, Card, Grid, Typography, CardMedia, CardContent} from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import {urlFor} from "../../lib/client";
import styles from './blog.module.css';
const apiHost = process.env.NEXT_PUBLIC_API_HOST;

function index(props) {
	const {data} = props;
	const [finalData, setFinalData] = useState(data);
	const [selectedCat, setSelectedCat] = useState("All");
	
	const category = [];
	category.push("All")
	data.forEach((item) => {
		item.blogCategory !== undefined && category.push(item.blogCategory)
	})
	const removedDuplicates = Array.from(new Set(category));

	const changeData = (category) => {
		setSelectedCat(category)
		if(category === "All") {
			setFinalData(data)
		} else {
			let findData = data.filter((item) => item.blogCategory === category);
			setFinalData(findData)
		}
	}

	return (
		<>
			<Grid container>
				<Grid item xs={12} className="globalTitleBg">
					<h1>Blog</h1>
				</Grid>
			</Grid>
			<Box className={styles.categoryMainContainer}>
				<Box display="flex" alignItems="center" justifyContent="space-between" className={styles.categoryContainer} sx={{ mt: 2 }}>
					{removedDuplicates.map((item, i) => {
						return (
							item && <Typography variant="body1" className={styles.categoryTitle} sx={{ color: selectedCat == item ? "#71e2b3" : "#000", fontWeight: selectedCat == item ? 500 : 400 }} onClick={() => changeData(item)} key={i}>{item}</Typography>
						);
					})}
				</Box>
			</Box>
			<Box className="page-container" sx={{ margin: '15px auto 15px auto !important' }}>
				<Grid container spacing={2}>
					{finalData.map((item, i) => {
						return (
							<Grid item xs={12} md={4} key={i}>
								<Link href={item.slug.current}>
									<a>
										<Card sx={{ position:'relative' }}>
											<CardMedia component="img" src={urlFor(item.bannerImage)} alt={data.title} />
											<CardContent>
												<Typography variant="h4" sx={{ fontWeight: 500, color: '#000', transition: '.3s', fontSize: '18px' }}>{item.title}</Typography>
											</CardContent>
											{item.blogCategory && <Typography variant="body2" className={styles.badge}>{item.blogCategory}</Typography>}
										</Card>
									</a>
								</Link>
							</Grid>
						);
					})}
				</Grid>
			</Box>
		</>
	);
}

export async function getServerSideProps() {
	const query = encodeURIComponent(`*[ _type == "pages" && isBlog == true]`);
	const url = apiHost + query;
	const result = await fetch(url).then((res) => res.json());
	const data = result.result;

	if (!data) {
		return {
			notFound: true,
		};
	} else {
		return {
			props: {
				data,
			},
		};
	}
}

export default index;
