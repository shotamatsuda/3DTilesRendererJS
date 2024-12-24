import { Context, FC, ReactNode, RefAttributes } from 'react';
import { GroupProps } from '@react-three/fiber';
import { TilesRenderer as TilesRendererImpl } from '../../three/TilesRenderer';

export const TilesRendererContext : Context< TilesRendererImpl | null >;

export interface EastNorthUpFrameProps {
	lat? : number;
	lon? : number;
	height? : number;
	az? : number;
	el? : number;
	roll? : number;
	children? : ReactNode;
}

export const EastNorthUpFrame : FC< EastNorthUpFrameProps >;

export type TilesPluginProps<
	Plugin extends new ( ...args : any[] ) => any,
	Params extends {} = ConstructorParameters< Plugin >[ 0 ] extends {} ? ConstructorParameters< Plugin >[ 0 ] : {}
> = Partial< Params > & {
	plugin : Plugin;
	args? : Params | [ Params ];
}

export function TilesPlugin<
	Plugin extends new ( ...args : any[] ) => any,
	Params extends {} = ConstructorParameters< Plugin >[ 0 ] extends {} ? ConstructorParameters< Plugin >[ 0 ] : {}
>(
	props: TilesPluginProps < Plugin, Params > & RefAttributes< Plugin >
) : JSX.Element;

export type TilesRendererProps = {
	url? : string;
	group? : GroupProps;
	children? : ReactNode;
} & Partial< TilesRendererImpl >;

export const TilesRenderer : FC< TilesRendererProps & RefAttributes< TilesRendererImpl > >;
