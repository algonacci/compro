import {interpolate, spring, useCurrentFrame, useVideoConfig} from "remotion";
import {Container} from "../components/Container";
import {Subtitle} from "../components/Subtitle";
import {Title} from "../components/Title";

const modules = [
	{name: "HRIS", accent: "#38bdf8"},
	{name: "Accounting", accent: "#818cf8"},
	{name: "POS", accent: "#22c55e"},
];

export const Scene6Modules: React.FC = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	return (
		<Container align="left" accent="rgba(129, 140, 248, 0.16)">
			<Title highlight>Core modules that move together</Title>
			<Subtitle maxWidth={780}>
				HRIS, Accounting, and POS stay connected in one shared workflow.
			</Subtitle>
			<div style={row}>
				{modules.map((module, index) => {
					const entrance = spring({
						frame: frame - 10 - index * 8,
						fps,
						config: {
							damping: 14,
							stiffness: 130,
						},
					});

					return (
						<div
							key={module.name}
							style={{
								...moduleCard,
								opacity: entrance,
								transform: `translateY(${interpolate(entrance, [0, 1], [32, 0])}px) scale(${0.9 + entrance * 0.1})`,
							}}
						>
							<div style={{...moduleGlow, background: module.accent}} />
							<div style={moduleName}>{module.name}</div>
						</div>
					);
				})}
			</div>
		</Container>
	);
};

const row: React.CSSProperties = {
	display: "grid",
	gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
	gap: 26,
	marginTop: 52,
	width: "100%",
};

const moduleCard: React.CSSProperties = {
	position: "relative",
	padding: "34px 30px",
	borderRadius: 28,
	border: "1px solid rgba(148, 163, 184, 0.14)",
	background: "rgba(15, 23, 42, 0.8)",
	minHeight: 230,
	justifyContent: "flex-end",
	display: "flex",
	overflow: "hidden",
};

const moduleGlow: React.CSSProperties = {
	position: "absolute",
	width: 220,
	height: 220,
	borderRadius: "50%",
	top: -60,
	right: -40,
	filter: "blur(70px)",
	opacity: 0.35,
};

const moduleName: React.CSSProperties = {
	fontSize: 42,
	fontWeight: 650,
	color: "#f8fafc",
	letterSpacing: "-0.04em",
};
