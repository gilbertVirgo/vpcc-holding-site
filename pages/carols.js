import CarolsInfo from "@/components/CarolsInfo";
import ContactInfo from "@/components/ContactInfo";
import DoctrinalBasisInfo from "@/components/DoctrinalBasisInfo";
import DonateInfo from "@/components/DonateInfo";
import Footer from "@/components/Footer";
import Head from "next/head";
import MeetingPlaceInfo from "@/components/MeetingPlaceInfo";
import { NextSeo } from "next-seo";
import Section from "@/components/Section";

const SEOTitle = "Carols | Victoria Park Community Church",
	SEODescription = "You're invited to this year's carol service!";

export default () => {
	return (
		<>
			<NextSeo
				title={SEOTitle}
				description={SEODescription}
				openGraph={{
					url: "https://vpcc.church",
					title: SEOTitle,
					description: SEODescription,
					images: [
						{
							url: "/meta/opengraph.jpg",
							width: 1200,
							height: 630,
							alt: SEOTitle,
							type: "image/jpeg",
						},
						{
							url: "/meta/whatsapp.jpg",
							width: 1200,
							height: 400,
							alt: SEOTitle,
							type: "image/jpeg",
						},
					],
					siteName: SEOTitle,
				}}
			/>
			<Head>
				<title>Carols | Victoria Park Community Church</title>
			</Head>

			<Section>
				<CarolsInfo />
			</Section>
			<Footer />
		</>
	);
};
