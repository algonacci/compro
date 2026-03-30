import {interpolate, spring, useCurrentFrame, useVideoConfig} from "remotion";
import {Container} from "../components/Container";
import {Title} from "../components/Title";

const items = ["Run operations", "finance", "people", "in one platform"];

export const Scene5Value: React.FC = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	return (
		<Container accent="rgba(59, 130, 246, 0.2)">
			<div style={stack}>
				{items.map((item, index) => {
					const entrance = spring({
						frame: frame - index * 7,
						fps,
						config: {
							damping: 16,
							stiffness: 150,
						},
					});

					return (
						<div
							key={item}
							style={{
								opacity: entrance,
								transform: `translateY(${interpolate(entrance, [0, 1], [18, 0])}px)`,
							}}
						>
							<Title highlight={index === 0 || index === items.length - 1} maxWidth={1100}>
								{item}
							</Title>
						</div>
					);
				})}
			</div>
		</Container>
	);
};

const stack: React.CSSProperties = {
	display: "flex",
	flexDirection: "column",
	gap: 10,
	alignItems: "center",
};
