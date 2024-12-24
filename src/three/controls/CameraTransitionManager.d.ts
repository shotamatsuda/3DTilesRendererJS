import { EventDispatcher, OrthographicCamera, PerspectiveCamera } from 'three';

export type CameraTransitionMode = 'perspective' | 'orthographic';

export class CameraTransitionManager extends EventDispatcher {

	readonly animating : boolean;
	readonly camera : PerspectiveCamera | OrthographicCamera;

	mode : CameraTransitionMode;

	constructor( perspectiveCamera? : PerspectiveCamera, orthographicCamera? : OrthographicCamera );

	toggle(): void;
	update(): void;
	syncCameras(): void;

}
