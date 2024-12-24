import { FC, RefAttributes } from 'react';
import { Camera, Object3D } from 'three';
import { TilesRenderer } from '../../three/TilesRenderer';
import { EnvironmentControls as EnvironmentControlsImpl } from '../../three/controls/EnvironmentControls';
import { GlobeControls as GlobeControlsImpl } from '../../three/controls/GlobeControls';

interface ControlsBaseComponentProps {
	domElement? : HTMLCanvasElement | null;
	scene? : Object3D | null;
	camera? : Camera | null;
	tilesRenderer? : TilesRenderer | null;
}

export interface EnvironmentControlsProps extends ControlsBaseComponentProps, Partial< EnvironmentControlsImpl > {}

export const EnvironmentControls : FC< EnvironmentControlsProps & RefAttributes< EnvironmentControlsImpl > >;

export interface GlobeControlsProps extends ControlsBaseComponentProps, Partial< GlobeControlsImpl > {}

export const GlobeControls : FC< GlobeControlsProps & RefAttributes< GlobeControlsImpl > >;
