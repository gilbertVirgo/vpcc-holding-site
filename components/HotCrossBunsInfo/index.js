import Grid from "../Grid";
import feature from "../feature.module.scss";

export default () => (
	<Grid>
		<div
			className={[feature.major, feature.left, feature.image].join(" ")}
			style={{ backgroundImage: `url("/assets/hot-cross-buns.jpg")` }}
		/>
		<div className={[feature.minor, feature.right].join(" ")}>
			<h2>Hot Cross Buns</h2>
			<p>
				You're invited to meet the local community and, together, enjoy hot cross buns.
			</p>
			<p>
				When?—Good Friday, March 29, 11-1pm (click <a href="https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=MWtjbnExdWxudHV0M2F2Z2Q5NGUwNmE0ODIgZ2lsQHZwY2MuY2h1cmNo&tmsrc=gil%40vpcc.church" target="_blank">here</a> to add to your calendar).<br/>
				Where?—<a href="https://maps.app.goo.gl/YaSvCRsB2RmiuYb16">17 Lark Row, E2 9JA</a>
			</p>
		</div>
		
	</Grid>
);
