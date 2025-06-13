export function renderNetlifyRedirect() {
    return (
`/*    /index.html   200
`);
}


export function renderVercelRedirect() {
    return (
`{
    "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
`);
}