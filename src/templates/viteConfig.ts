export function renderViteConfigTs(useTailwind?: boolean) {
    return (
`import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
${useTailwind ? `import tailwindcss from '@tailwindcss/vite';\n` : ''}
// https://vite.dev/config/
export default defineConfig({
    plugins: [react()${useTailwind ? ', tailwindcss()' : ''}],
    resolve: {
        alias: {
            '@': '/src',
        },
    },
});
`);
}