export function renderMainTsx(useRouter?: boolean, useRedux?: boolean) {

    return (
`import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';${useRouter ? `\nimport { RouterProvider } from 'react-router';` : ''}${useRedux ? `\nimport { Provider } from 'react-redux';` : ''}
${useRouter ? `import { router } from '@/router';` : `import App from '@/App.tsx';`}${useRedux ? `\nimport { store } from '@/app/store';` : ''}
import '@/index.css';

createRoot(document.getElementById('root')!).render(
    <StrictMode>${useRedux ? `\n        <Provider store={store}>` : ''}
        ${useRedux ? '    ' : ''}${useRouter ? `<RouterProvider router={router} />` : `<App />`}${useRedux ? `\n        </Provider>` : ''}
    </StrictMode>
);
`)

}