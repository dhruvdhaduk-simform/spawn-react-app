export function renderMainTsx(useRouter?: boolean) {
    if (!useRouter) {
        return (
`import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from '@/App.tsx';
import '@/index.css';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>
);
`);
    }

    return (
`import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { router } from '@/router';
import '@/index.css';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
`);

}