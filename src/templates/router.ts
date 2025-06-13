export function renderRouterTsx() {
    return (
`import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from 'react-router';
import App from '@/App';

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route index element={<p>This is Home Page</p>} />
            <Route path="about" element={<p>This is About Page</p>} />
            <Route path="*" element={<p>404 Not Found</p>} />
        </Route>
    )
);
`)
}