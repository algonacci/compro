import {interpolate, spring, useCurrentFrame, useVideoConfig} from "remotion";
import {Container} from "../components/Container";
import {Title} from "../components/Title";

const tools = ["Spreadsheet", "POS", "Accounting", "HR"];

export const Scene2Problem: React.FC = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	return (
		<Container align="left" accent="rgba(96, 165, 250, 0.18)">
			<Title maxWidth={900}>Too many tools</Title>
			<div style={grid}>
				{tools.map((tool, index) => {
					const entrance = spring({
						frame: frame - index * 8,
						fps,
						config: {
							damping: 14,
							stiffness: 130,
						},
					});

					return (
						<div
							key={tool}
							style={{
								...card,
								opacity: entrance,
								transform: `translateY(${interpolate(entrance, [0, 1], [40, 0])}px) scale(${0.92 + entrance * 0.08})`,
							}}
						>
							<span style={label}>Disconnected</span>
							<span>{tool}</span>
						</div>
					);
				})}
			</div>
		</Container>
	);
};

const grid: React.CSSProperties = {
	display: "grid",
	gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
	gap: 24,
	marginTop: 48,
	width: "100%",
	maxWidth: 980,
};

const card: React.CSSProperties = {
	borderRadius: 28,
	padding: "32px 36px",
	border: "1px solid rgba(148, 163, 184, 0.16)",
	background: "rgba(15, 23, 42, 0.78)",
	display: "flex",
	flexDirection: "column",
	gap: 14,
	fontSize: 42,
	fontWeight: 600,
	color: "#f8fafc",
	boxShadow: "0 24px 80px rgba(2, 6, 23, 0.35)",
};

const label: React.CSSProperties = {
	fontSize: 18,
	textTransform: "uppercase",
	letterSpacing: "0.24em",
	color: "rgba(148, 163, 184, 0.9)",
};
