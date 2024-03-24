import Grid from "../Grid";
import feature from "../feature.module.scss";

export default () => (
	<Grid>
		
		<div className={[feature.minor, feature.right].join(" ")}>
			<h2>Hot Cross Buns</h2>
			<p>
				You're invited to meet the local community and, together, enjoy hot cross buns.
			</p>
			<p>
				When?—Good Friday, March 29, 11-1pm (click <a href="https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NHFvZDQyb2t1bW84bWNlNHJyZzhjbXVjYmEgY18zNzQ3NTNiMzdlZjlkYzViZDI1Y2RlMmZhYjk0MTZkNzJhMmQ3MWMyNmY5NzBiNjk4ZmQ5ZjJkMzAxOGU1MTE4QGc&tmsrc=c_374753b37ef9dc5bd25cde2fab9416d72a2d71c26f970b698fd9f2d3018e5118%40group.calendar.google.com" target="_blank">here</a> to add to your calendar).<br/>
				Where?—<a href="https://maps.app.goo.gl/YaSvCRsB2RmiuYb16">17 Lark Row, E2 9JA</a>
			</p>
		</div>
		<div
			className={[feature.major, feature.left, feature.image].join(" ")}
			style={{ backgroundImage: `url("/assets/hot-cross-buns.jpg")` }}
		/>
	</Grid>
);
