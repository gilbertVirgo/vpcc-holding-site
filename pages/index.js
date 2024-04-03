import ContactInfo from "@/components/ContactInfo";
import DoctrinalBasisInfo from "@/components/DoctrinalBasisInfo";
import Head from "next/head";
import MeetingPlaceInfo from "@/components/MeetingPlaceInfo";
import Section from "@/components/Section";

export default function Home() {
	return (
		<>
			<Head>
				<title>Home | Victoria Park Community Church</title>
			</Head>
			{/* Sections */}
			{[MeetingPlaceInfo, ContactInfo, DoctrinalBasisInfo].map(
				(Element) => (
					<Section>{<Element />}</Section>
				)
			)}
		</>
	);
}
