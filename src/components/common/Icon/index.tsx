import React, { HTMLAttributes } from 'react';
import * as icons from './svgr';

export type IconVariant = keyof typeof icons;

type IconProps = HTMLAttributes<SVGElement> & {
	variant: IconVariant;
	size?: number;
	className?: string;
};

function Icon({ variant, size = 20, ...props }: IconProps) {
	const IconComp = icons[variant] as
		| React.FC<React.SVGProps<SVGSVGElement>>
		| undefined;

	if (!IconComp) {
		throw new TypeError(`Not found icon [${variant}]`);
	}

	return (
		<IconComp
			style={{
				width: size,
				height: size,
			}}
			{...props}
		/>
	);
}

export default Icon;
