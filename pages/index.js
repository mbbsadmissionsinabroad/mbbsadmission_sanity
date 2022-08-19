import Link from 'next/link';

function index() {
	return (
		<div className="home-container">
			<Link href="/mbbs-admission-in-austria-for-indian-students">
				<a>
					<h2>MBBS in Austria</h2>
				</a>
			</Link>
			<Link href="/blog">
				<a>
					<h2>Blog</h2>
				</a>
			</Link>
			<Link href="/why-is-mbbs-cheap-in-russia">
				<a>
					<h2>Why MBBS is cheap in Russia</h2>
				</a>
			</Link>
		</div>
	)
}

export default index