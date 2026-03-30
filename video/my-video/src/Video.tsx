import {AbsoluteFill, Sequence} from "remotion";
import {Scene1Hook} from "./scenes/Scene1_Hook";
import {Scene2Problem} from "./scenes/Scene2_Problem";
import {Scene3Pain} from "./scenes/Scene3_Pain";
import {Scene4Solution} from "./scenes/Scene4_Solution";
import {Scene5Value} from "./scenes/Scene5_Value";
import {Scene6Modules} from "./scenes/Scene6_Modules";
import {Scene7AI} from "./scenes/Scene7_AI";
import {Scene8Speed} from "./scenes/Scene8_Speed";
import {Scene9CTA} from "./scenes/Scene9_CTA";

const scenes = [
	{Component: Scene1Hook, duration: 150},
	{Component: Scene2Problem, duration: 180},
	{Component: Scene3Pain, duration: 150},
	{Component: Scene4Solution, duration: 180},
	{Component: Scene5Value, duration: 180},
	{Component: Scene6Modules, duration: 210},
	{Component: Scene7AI, duration: 150},
	{Component: Scene8Speed, duration: 150},
	{Component: Scene9CTA, duration: 150},
] as const;

export const OmniflowVideo: React.FC = () => {
	let startFrom = 0;

	return (
		<AbsoluteFill style={baseBackground}>
			{scenes.map(({Component, duration}, index) => {
				const currentStart = startFrom;
				startFrom += duration;

				return (
					<Sequence key={index} from={currentStart} durationInFrames={duration}>
						<Component />
					</Sequence>
				);
			})}
		</AbsoluteFill>
	);
};

const baseBackground: React.CSSProperties = {
	background:
		"radial-gradient(circle at top, rgba(37, 99, 235, 0.18), transparent 38%), linear-gradient(135deg, #020617 0%, #06111f 45%, #020617 100%)",
};
