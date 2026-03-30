import {interpolate, spring, useCurrentFrame, useVideoConfig} from "remotion";

type TitleProps = {
	children: React.ReactNode;
	highlight?: boolean;
	maxWidth?: number;
};

export const Title: React.FC<TitleProps> = ({
	children,
	highlight = false,
	maxWidth = 1200,
}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const progress = spring({
		frame,
		fps,
		config: {
			damping: 16,
			stiffness: 140,
		},
	});

	return (
		<h1
			style={{
				maxWidth,
				fontSize: 94,
				lineHeight: 1.02,
				letterSpacing: "-0.05em",
				margin: 0,
				fontWeight: 700,
				color: highlight ? "#f8fafc" : "#e2e8f0",
				opacity: interpolate(progress, [0, 1], [0, 1]),
				transform: `translateY(${interpolate(progress, [0, 1], [24, 0])}px)`,
			}}
		>
			{children}
		</h1>
	);
};
