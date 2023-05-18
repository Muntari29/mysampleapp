import { ReactNode } from 'react';

export type TypeHText = 'h1' | 'h2' | 'h3' | 'h4' | 'h5';

export interface HTextProps {
	/**
	 * defatul h1 Tag
	 */
	type?: TypeHText;
	children: ReactNode;
	className?: string;
}
