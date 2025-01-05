import CarolsInfo from "@/components/CarolsInfo";
import ContactInfo from "@/components/ContactInfo";
import DoctrinalBasisInfo from "@/components/DoctrinalBasisInfo";
import DonateInfo from "@/components/DonateInfo";
import Footer from "@/components/Footer";
import Head from "next/head";
import MeetingPlaceInfo from "@/components/MeetingPlaceInfo";
import { NextSeo } from "next-seo";
import Section from "@/components/Section";

const SEOTitle = "Victoria Park Community Church | Welcome",
	SEODescription =
		"New church plant near Victoria Park. Gospel-centred & Christ-focused. Reaching the community as a community.";

export default function Home() {
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
				<title>Victoria Park Community Church</title>
			</Head>
			{/* Sections */}
			{[
				MeetingPlaceInfo,
				ContactInfo,
				DoctrinalBasisInfo,
				DonateInfo,
			].map((Element) => (
				<Section>{<Element />}</Section>
			))}
			<Footer />
		</>
	);
}
