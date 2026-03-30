import {Container} from "../components/Container";
import {Subtitle} from "../components/Subtitle";
import {Title} from "../components/Title";

export const Scene1Hook: React.FC = () => {
	return (
		<Container accent="rgba(14, 165, 233, 0.24)">
			<div style={eyebrow}>Modern operations, without the chaos</div>
			<Title highlight>Running your business shouldn't be complicated</Title>
			<Subtitle>
				One system for finance, people, and frontline operations, designed with
				a clean AI-native workflow.
			</Subtitle>
		</Container>
	);
};

const eyebrow: React.CSSProperties = {
	fontSize: 24,
	textTransform: "uppercase",
	letterSpacing: "0.32em",
	color: "#38bdf8",
	marginBottom: 28,
};
