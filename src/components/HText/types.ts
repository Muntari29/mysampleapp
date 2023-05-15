import { ReactNode } from 'react';

export type TypeHText = 'h1' | 'h2' | 'h3';

export interface HTextProps {
	/**
	 * defatul h3 Tag
	 */
	type?: TypeHText;
	children: ReactNode;
	className?: string;
}
