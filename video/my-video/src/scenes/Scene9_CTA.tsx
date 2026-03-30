import {Img, staticFile} from "remotion";
import {Container} from "../components/Container";
import {Subtitle} from "../components/Subtitle";
import {Title} from "../components/Title";

export const Scene9CTA: React.FC = () => {
	return (
		<Container accent="rgba(56, 189, 248, 0.24)">
			<Img src={staticFile("logo.png")} style={logo} />
			<Title highlight>Omniflow.id</Title>
			<Subtitle maxWidth={620}>Book a demo</Subtitle>
		</Container>
	);
};

const logo: React.CSSProperties = {
	width: 96,
	height: 96,
	marginBottom: 24,
	borderRadius: 24,
};
