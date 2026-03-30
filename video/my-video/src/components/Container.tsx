import {AbsoluteFill, spring, useCurrentFrame, useVideoConfig} from "remotion";

type ContainerProps = {
	children: React.ReactNode;
	accent?: string;
	align?: "center" | "left";
};

export const Container: React.FC<ContainerProps> = ({
	children,
	accent = "rgba(56, 189, 248, 0.22)",
	align = "center",
}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const lift = spring({
		frame,
		fps,
		config: {
			damping: 18,
			stiffness: 120,
			mass: 0.9,
		},
	});

	return (
		<AbsoluteFill style={shell}>
			<div
				style={{
					...panel,
					boxShadow: `0 0 120px ${accent}, inset 0 1px 0 rgba(255,255,255,0.06)`,
					transform: `translateY(${40 - lift * 40}px) scale(${0.94 + lift * 0.06})`,
					textAlign: align,
					alignItems: align === "center" ? "center" : "flex-start",
				}}
			>
				{children}
			</div>
		</AbsoluteFill>
	);
};

const shell: React.CSSProperties = {
	justifyContent: "center",
	alignItems: "center",
	padding: 72,
};

const panel: React.CSSProperties = {
	width: "100%",
	height: "100%",
	borderRadius: 40,
	padding: "88px 96px",
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	border: "1px solid rgba(148, 163, 184, 0.16)",
	background:
		"linear-gradient(180deg, rgba(15, 23, 42, 0.92) 0%, rgba(2, 6, 23, 0.9) 100%)",
	backdropFilter: "blur(16px)",
	position: "relative",
	overflow: "hidden",
};
