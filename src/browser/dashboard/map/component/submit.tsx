import type { FunctionComponent } from "react";

import { useReplicant } from "../../../use-replicant";

import styles from "../css/submit.module.css";

const mapRep = nodecg.Replicant("splatoon3Map");

type Props = {
	map?: {
		name: string;
		image: string;
	};
};
const Component: FunctionComponent<Props> = (props) => {
	const map = props.map;
	const current = useReplicant("splatoon3Map");

	return (
		<div className={styles["submit"]}>
			<button
				disabled={map?.name === current?.name}
				onClick={() => (mapRep.value = map)}
			>
				送信
			</button>
		</div>
	);
};

export default Component;
