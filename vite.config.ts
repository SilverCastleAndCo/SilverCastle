import {defineConfig, loadEnv} from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(({mode}) => {
    const env = loadEnv(mode, process.cwd());

    return {
        plugins: [react(), tsconfigPaths()],
        server: {
            port: parseInt(env.VITE_PORT, 10) || 3000,
        },
        define: {

            'process.env': {
                ...Object.keys(env).reduce((acc, key) => {
                    acc[key] = env[key];
                    return acc;
                }, {}),
            },
        },
        build: {
            outDir: 'dist',
        },
    };
});
