export function renderIndexCSS(useTailwind?: boolean) {
    return (
`${useTailwind ? "@import 'tailwindcss';\n" : ''}`);
}