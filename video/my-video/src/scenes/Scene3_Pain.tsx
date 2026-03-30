import {AbsoluteFill, interpolate, useCurrentFrame} from "remotion";
import {Container} from "../components/Container";
import {Title} from "../components/Title";

export const Scene3Pain: React.FC = () => {
	const frame = useCurrentFrame();
	const barWidth = interpolate(frame, [0, 110], [12, 88], {
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
	});

	return (
		<Container accent="rgba(248, 113, 113, 0.14)">
			<Title highlight>Manual work slows growth</Title>
			<AbsoluteFill style={overlay}>
				<div style={progressTrack}>
					<div style={{...progressFill, width: `${barWidth}%`}} />
				</div>
				<div style={metric}>Time lost to repetitive admin</div>
			</AbsoluteFill>
		</Container>
	);
};

const overlay: React.CSSProperties = {
	justifyContent: "flex-end",
	alignItems: "center",
	paddingBottom: 110,
	gap: 20,
};

const progressTrack: React.CSSProperties = {
	width: 780,
	height: 18,
	borderRadius: 999,
	background: "rgba(30, 41, 59, 0.95)",
	overflow: "hidden",
	border: "1px solid rgba(148, 163, 184, 0.18)",
};

const progressFill: React.CSSProperties = {
	height: "100%",
	borderRadius: 999,
	background: "linear-gradient(90deg, #38bdf8 0%, #2563eb 100%)",
	boxShadow: "0 0 32px rgba(56, 189, 248, 0.45)",
};

const metric: React.CSSProperties = {
	fontSize: 28,
	color: "rgba(191, 219, 254, 0.78)",
};
