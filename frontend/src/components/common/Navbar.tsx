import type React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

export const Navbar: React.FC = () => {
	return (
		<div className='w-full align-middle h-12 justify-between flex p-2 border-b border-gray-300'>
			<h2 className='place-self-center'>Dashboard</h2>
			<Avatar className=''>
				<AvatarImage src='https://github.com/shadcn.png' />
				<AvatarFallback>CN</AvatarFallback>
			</Avatar>
		</div>
	);
};
