import policies from "@/policies";
import styles from "./footer.module.scss";

export default (props) => (
	<footer className={styles.footer} {...props}>
		{policies.map(([title, url]) => {
			return (
				<p>
					<a href={url}>{title.split(" ").join(" ")}</a>
				</p>
			);
			// Non breaking space
		})}
	</footer>
);
