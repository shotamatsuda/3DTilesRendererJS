import { Vector3 } from 'three';
import { EnvironmentControls } from './EnvironmentControls';
import { Ellipsoid } from './math/Ellipsoid';

export class GlobeControls extends EnvironmentControls {

	readonly ellipsoid : Ellipsoid | null;
	readonly tilesGroup : TilesGroup | null;

	nearMargin : number;
	farMargin : number;

	getVectorToCenter( target: Vector3 ): Vector3;
	getDistanceToCenter(): number;

}
