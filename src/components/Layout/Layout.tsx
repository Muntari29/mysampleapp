import Head from 'next/head';
import { type LayoutProps } from './types';
import Header from '../Header/Header';

const Layout = ({ children }: LayoutProps) => {
	return (
		<>
			<Header />
			<div className="min-h-screen px-2 py-2 w-full m-auto max-w-[70%]">
				{children}
			</div>
		</>
	);
};

export default Layout;
