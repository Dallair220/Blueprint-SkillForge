import { create } from 'zustand';

interface Store {
	error: { active: boolean; message: string };
	setError: (val: { active: boolean; message: string }) => void;
}

export const useStore = create<Store>()((set) => ({
	error: { active: false, message: '' },
	setError(val) {
		set(() => ({ error: val }));
	},
}));
