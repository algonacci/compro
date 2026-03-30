import "./index.css";
import {Composition} from "remotion";
import {OmniflowVideo} from "./Video";

export const RemotionRoot: React.FC = () => {
	return (
		<Composition
			id="OmniflowMain"
			component={OmniflowVideo}
			durationInFrames={1500}
			fps={30}
			width={1920}
			height={1080}
		/>
	);
};
