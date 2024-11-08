import Button from "./Button";
import Grid from "./Grid";
import feature from "./feature.module.scss";

export default () => (
	<Grid>
		<div
			className={[feature.major, feature.left, feature.image].join(" ")}
			style={{ backgroundImage: `url("/assets/donate.jpg")` }}
		/>
		<div className={[feature.minor, feature.right].join(" ")}>
			<h2>Donate</h2>
			<p>
				If you would like to donate to Victoria Park Community Church,
				please email us at{" "}
				<a href="mailto:ben@vpcc.church">ben@vpcc.church</a>.
			</p>
			<a href="mailto:ben@vpcc.church">
				<Button>Email us</Button>
			</a>
		</div>
	</Grid>
);
