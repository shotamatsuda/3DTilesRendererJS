import { GroupProps } from '@react-three/fiber';
import { FC } from 'react';

export type CompassGizmoMode = '3d' | '2d'

export interface CompassGizmoProps extends GroupProps {
  overrideRenderLoop? : boolean;
  mode? : CompassGizmoMode;
  margin? : number;
  scale? : number;
  visible? : boolean;
}

export const CompassGizmo : FC< CompassGizmoProps >;
