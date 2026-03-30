import {Img, staticFile} from "remotion";
import {Container} from "../components/Container";
import {Subtitle} from "../components/Subtitle";
import {Title} from "../components/Title";

export const Scene4Solution: React.FC = () => {
	return (
		<Container accent="rgba(34, 197, 94, 0.18)">
			<Img src={staticFile("logo.png")} style={logo} />
			<Title highlight>Meet Omniflow</Title>
			<Subtitle maxWidth={760}>AI-Native ERP</Subtitle>
		</Container>
	);
};

const logo: React.CSSProperties = {
	width: 112,
	height: 112,
	marginBottom: 28,
	borderRadius: 28,
	boxShadow: "0 24px 80px rgba(37, 99, 235, 0.25)",
};
