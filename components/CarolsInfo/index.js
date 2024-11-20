import Button from "../Button";
import Grid from "../Grid";
import feature from "../feature.module.scss";

export default () => (
	<Grid>
		<div className={[feature.right, feature.minor].join(" ")}>
			<h2>Community Carols</h2>
			<p>Our annual carol service is just round the corner!</p>
			<p>
				Join us on <strong>Sunday 8th December</strong>, from{" "}
				<strong>5:00pm-6:00pm</strong> at our normal building:{" "}
				<strong>
					Victoria Park Baptist Church, 186 Grove Road, London E3 5TG
				</strong>
				.
			</p>
			<p>
				Expect carol singing, a short Bible talk, activities for kids,
				festive drinks and mince pies!
			</p>
			<a href="https://maps.app.goo.gl/Jj89o5MYRdTkiqYy8" target="_blank">
				<Button>Get directions →</Button>
			</a>
		</div>

		<div
			className={[feature.major, feature.left, feature.image].join(" ")}
			style={{ backgroundImage: `url("/assets/carols.jpg")` }}
		/>
	</Grid>
);
