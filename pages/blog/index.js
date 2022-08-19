import Link from 'next/link';
import { urlFor } from '../../lib/client';
const apiHost = process.env.NEXT_PUBLIC_API_HOST;

function index(props) {
	const { data } = props;
	return (
		data.map((item, i) => {
			return (
				<div key={i}>
					<Link href={item.slug.current}>
						<a>
							<img src={urlFor(item.bannerImage)} alt={data.title} />
							<h3>{item.title}</h3>
						</a>
					</Link>
				</div>
			)
		})
	)
}

export async function getServerSideProps() {
	const query = encodeURIComponent(`*[ _type == "pages" && isBlog == true]`);
  const url = apiHost + query;
  const result = await fetch(url).then(res => res.json());
	const data = result.result;

	if (!data) {
    return {
      notFound: true
    }
  } else {
    return {
      props: {
        data
      }
    }
  }
}

export default index