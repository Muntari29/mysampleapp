import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<meta
					name="description"
					content="Muntari Blog"
				/>
				{process.env.NODE_ENV === 'production' && (
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1.0"
					/>
				)}
				{/* keywords는 예전만큼 중요하지 않음, 페이지 내에서 특정 키워드를 적절하게 사용하는것이 SEO에 유리함 */}
				<meta
					name="keywords"
					content="Muntari"
				/>
				<link
					rel="icon"
					href="/favicon.ico"
				/>
			</Head>
			<body className="before:fixed before:w-full before:h-2 before:top-0 before:left-0 before:bg-dark-primary dark:before:bg-white">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
