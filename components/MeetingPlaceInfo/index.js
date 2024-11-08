import Button from "../Button";
import Grid from "../Grid";
import feature from "../feature.module.scss";

export default () => (
	<Grid>
		<div className={[feature.left, feature.minor].join(" ")}>
			<h2>What, When, Where?</h2>
			<p>We are Victoria Park Community Church.</p>
			<p>
				We meet on <strong>Sundays</strong>, from{" "}
				<strong>3:00pm-4:30pm</strong> at{" "}
				<strong>
					Victoria Park Baptist Church, 186 Grove Road, London E3 5TG
				</strong>
				.
			</p>
			<p>
				The closest Underground station to our building is Mile End.
				Coming out of Mile End, walk north up Grove Road. We'll be on
				your right before you reach Victoria Park.
			</p>
			<a href="https://maps.app.goo.gl/Jj89o5MYRdTkiqYy8" target="_blank">
				<Button>Get directions →</Button>
			</a>
		</div>

		<div
			className={[feature.right, feature.major, feature.iframe].join(" ")}
		>
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9927.962060665068!2d-0.0403245!3d51.5317338!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761d2546e5467b%3A0xc63bbf7f98534bcd!2sVictoria%20Park%20Baptist%20Church!5e0!3m2!1sen!2suk!4v1712162146793!5m2!1sen!2suk"
				width="100%"
				height="100%"
				style={{ border: 0 }}
				allowFullScreen={false}
				loading="lazy"
				referrerPolicy="no-referrer-when-downgrade"
			></iframe>
		</div>
	</Grid>
);
