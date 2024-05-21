import { defineConfig } from 'vite';
// import fs from 'vite-plugin-fs';
// vite.config.js

// export default defineConfig(({ mode }) => {
//   const isProduction = mode === 'production';
//   const cdnDomain = isProduction ? process.env.VITE_CDN_DOMAIN : '/';

//   return {
//     base: cdnDomain,
//     plugins: [
//       cdnImport({
//         include: ['**/*.vue', '**/*.js'],
//         exclude: []
//       })
//     ]
//   };
// });
export default defineConfig(({ mode }) => {
	const isProduction = mode === 'production';
	const cdnDomain = isProduction ? process.env.VITE_CDN_DOMAIN : '/';
	//scene-base.ts
	return {
		plugins: [
		],
		server: {
			host: '0.0.0.0',
			port: 8000,
			proxy: {
				// '/images': {
				// 	target: 'https://b.pokerogue.cn/dist/images',
				// 	changeOrigin: true,
				// 	rewrite: (path) => path.replace(/^\/images/, '')
				// },
				// '/audio': {
				// 	target: 'https://b.pokerogue.cn/dist/audio',
				// 	changeOrigin: true,
				// 	rewrite: (path) => path.replace(/^\/audio/, '')
			},
			clearScreen: false,
			build: {
				minify: 'esbuild',
				sourcemap: false
			},
			esbuild: {
				pure: mode === 'production' ? ['console.log'] : [],
				keepNames: true,
			},
		}
	}
})
