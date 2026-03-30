import {AbsoluteFill, interpolate, useCurrentFrame} from "remotion";
import {Container} from "../components/Container";
import {Title} from "../components/Title";

export const Scene7AI: React.FC = () => {
	const frame = useCurrentFrame();
	const orbit = interpolate(frame, [0, 150], [-140, 140], {
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
	});

	return (
		<Container accent="rgba(14, 165, 233, 0.22)">
			<AbsoluteFill style={orbitalLayer}>
				<div style={{...orb, transform: `translateX(${orbit}px)`}} />
				<div style={{...orb, ...secondaryOrb, transform: `translateX(${-orbit}px)`}} />
			</AbsoluteFill>
			<Title highlight>AI-powered automation</Title>
		</Container>
	);
};

const orbitalLayer: React.CSSProperties = {
	justifyContent: "center",
	alignItems: "center",
};

const orb: React.CSSProperties = {
	position: "absolute",
	width: 260,
	height: 260,
	borderRadius: "50%",
	background: "rgba(56, 189, 248, 0.2)",
	filter: "blur(70px)",
};

const secondaryOrb: React.CSSProperties = {
	background: "rgba(59, 130, 246, 0.16)",
};
