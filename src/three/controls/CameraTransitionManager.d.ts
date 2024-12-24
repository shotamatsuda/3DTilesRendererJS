import { EventDispatcher, OrthographicCamera, PerspectiveCamera } from 'three';

export type CameraTransitionMode = 'perspective' | 'orthographic';

export class CameraTransitionManager extends EventDispatcher {

	get animating(): boolean;
	get camera(): PerspectiveCamera | OrthographicCamera;

	accessor mode : CameraTransitionMode;

	constructor( perspectiveCamera?: PerspectiveCamera, orthographicCamera?: OrthographicCamera );

	toggle(): void;
	update(): void;
	syncCameras(): void;

}
