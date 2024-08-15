import { Head, Html, Main, NextScript } from "next/document";

import Nav from "@/components/Nav";
import Section from "@/components/Section";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/assets/favicon.svg" />
				<meta name="theme-color" content="#7221FF" />

				<link
					rel="stylesheet"
					href="https://use.typekit.net/qba0dfg.css"
				/>
			</Head>
			<body>
				<Section>
					<Nav />
				</Section>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
