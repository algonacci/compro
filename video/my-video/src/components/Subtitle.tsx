import {interpolate, useCurrentFrame} from "remotion";

type SubtitleProps = {
	children: React.ReactNode;
	maxWidth?: number;
};

export const Subtitle: React.FC<SubtitleProps> = ({children, maxWidth = 920}) => {
	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [8, 24], [0, 1], {
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
	});

	return (
		<p
			style={{
				maxWidth,
				fontSize: 34,
				lineHeight: 1.5,
				letterSpacing: "-0.02em",
				margin: 0,
				marginTop: 28,
				color: "rgba(191, 219, 254, 0.82)",
				opacity,
				transform: `translateY(${interpolate(opacity, [0, 1], [20, 0])}px)`,
			}}
		>
			{children}
		</p>
	);
};
