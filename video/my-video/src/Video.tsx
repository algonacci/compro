import {AbsoluteFill, Audio, Sequence} from "remotion";
import dubMp3 from "./assets/dub.mp3";
import bgMp3 from "./assets/nastelbom-technology-422298.mp3";
import sfxSwoosh from "./assets/mixkit-vacuum-swoosh-transition-1465.wav";
import sfxClick from "./assets/mixkit-fast-double-click-on-mouse-275.wav";
import sfxBuzzer from "./assets/mixkit-wrong-answer-bass-buzzer-948.wav";
import sfxTone from "./assets/mixkit-correct-answer-tone-2870.wav";
import sfxImpact from "./assets/mixkit-cinematic-whoosh-deep-impact-1143.mp3";
import sfxPop from "./assets/mixkit-hard-pop-click-2364.wav";
import sfxSciFi from "./assets/mixkit-sci-fi-click-900.wav";
import sfxSuccess from "./assets/mixkit-fantasy-game-success-notification-270.wav";
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
			<Audio src={bgMp3} volume={0.2} />
			<Audio src={dubMp3} volume={1} />

			{/* Scene 1 — intro swoosh */}
			<Sequence from={0} durationInFrames={60}>
				<Audio src={sfxSwoosh} volume={0.6} />
			</Sequence>

			{/* Scene 2 — 4 cards muncul tiap 8 frame (mulai frame 150) */}
			{[0, 8, 16, 24].map((offset) => (
				<Sequence key={offset} from={150 + offset} durationInFrames={30}>
					<Audio src={sfxClick} volume={0.5} />
				</Sequence>
			))}
			{/* Scene 2 — "All disconnected" near end */}
			<Sequence from={285} durationInFrames={60}>
				<Audio src={sfxBuzzer} volume={0.5} />
			</Sequence>

			{/* Scene 3 — metric muncul */}
			<Sequence from={360} durationInFrames={60}>
				<Audio src={sfxTone} volume={0.4} />
			</Sequence>

			{/* Scene 4 — "Meet Omniflow" impact */}
			<Sequence from={480} durationInFrames={90}>
				<Audio src={sfxImpact} volume={0.7} />
			</Sequence>

			{/* Scene 6 — 3 module cards tiap 8 frame (mulai frame 840+10) */}
			{[0, 8, 16].map((offset) => (
				<Sequence key={offset} from={850 + offset} durationInFrames={30}>
					<Audio src={sfxPop} volume={0.5} />
				</Sequence>
			))}

			{/* Scene 7 — AI orbital */}
			<Sequence from={1050} durationInFrames={60}>
				<Audio src={sfxSciFi} volume={0.5} />
			</Sequence>

			{/* Scene 9 — CTA logo reveal */}
			<Sequence from={1350} durationInFrames={90}>
				<Audio src={sfxSuccess} volume={0.6} />
			</Sequence>
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
