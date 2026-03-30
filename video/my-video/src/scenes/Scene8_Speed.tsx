import {interpolate, useCurrentFrame} from "remotion";
import {Container} from "../components/Container";
import {Subtitle} from "../components/Subtitle";
import {Title} from "../components/Title";

export const Scene8Speed: React.FC = () => {
	const frame = useCurrentFrame();
	const indicatorX = interpolate(frame, [0, 120], [0, 540], {
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
	});

	return (
		<Container accent="rgba(34, 197, 94, 0.2)">
			<Title highlight>Go live in weeks, not months</Title>
			<Subtitle maxWidth={780}>
				Fast onboarding, focused rollout, measurable value from day one.
			</Subtitle>
			<div style={track}>
				<div style={marker} />
				<div style={{...indicator, transform: `translateX(${indicatorX}px)`}} />
			</div>
		</Container>
	);
};

const track: React.CSSProperties = {
	marginTop: 56,
	width: 720,
	height: 16,
	borderRadius: 999,
	background: "rgba(15, 23, 42, 0.96)",
	border: "1px solid rgba(148, 163, 184, 0.14)",
	position: "relative",
	overflow: "hidden",
};

const marker: React.CSSProperties = {
	position: "absolute",
	inset: 0,
	background:
		"linear-gradient(90deg, rgba(56, 189, 248, 0.2) 0%, rgba(56, 189, 248, 0.75) 55%, rgba(34, 197, 94, 0.95) 100%)",
	transformOrigin: "left center",
};

const indicator: React.CSSProperties = {
	position: "absolute",
	top: -8,
	width: 34,
	height: 34,
	borderRadius: "50%",
	background: "#f8fafc",
	boxShadow: "0 0 36px rgba(248, 250, 252, 0.35)",
};
