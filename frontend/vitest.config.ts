import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		globals: true, // allows using describe, expect, etc. without importing them
		environment: 'jsdom', // simulates a browser (DOM) environment
		setupFiles: './src/setupTests.ts', // allows global imports (see Step 3)
	},
});
