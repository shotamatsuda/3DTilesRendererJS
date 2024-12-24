import { FC, RefAttributes } from 'react';
import { CameraTransitionManager } from '3d-tiles-renderer';
import { OrthographicCamera, PerspectiveCamera } from 'three';

export interface CameraTransitionProps extends Partial< InstanceType< CameraTransitionManager > > {
  mode? : CameraTransitionMode;
  perspectiveCamera? : PerspectiveCamera;
  orthographicCamera? : OrthographicCamera;
}

export const CameraTransition : FC< CameraTransitionProps & RefAttributes< CameraTransitionManager > >;
