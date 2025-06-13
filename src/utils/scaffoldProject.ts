import type { UserPrompts } from '../interfaces';
import fs from 'fs';
import path from 'path';

import { renderIndexHtml } from '../templates/indexHTML';
import { renderPackageJson } from '../templates/packageJson';
import { renderReadme } from '../templates/readme';
import { renderViteConfigTs } from '../templates/viteConfig';
import { renderIndexCSS } from '../templates/indexCSS';
import { renderComponentsJson, renderSrcLibUtils } from '../templates/shadcn';
import { renderRouterTsx } from '../templates/router';
import { renderMainTsx } from '../templates/mainTsx';
import { renderAppTsx } from '../templates/appTsx';
import { renderEslintConfig } from '../templates/eslintConfig';
import {
    renderStore,
    renderUseAppDispatch,
    renderUseAppSelector,
} from '../templates/redux';

import { logSuccess } from './logger';

export function scaffoldProject(userPrompts: UserPrompts): void {
    const projectDir = path.join(process.cwd(), userPrompts.projectName);

    const viteTemplateDir = path.join(__dirname, '../../vite-react-ts');

    if (fs.existsSync(projectDir)) {
        throw new Error('The directory you specified already exists.');
    }

    fs.cpSync(viteTemplateDir, projectDir, { recursive: true });
    fs.renameSync(
        path.join(projectDir, '_gitignore'),
        path.join(projectDir, '.gitignore')
    );
    fs.renameSync(
        path.join(projectDir, '_prettierrc'),
        path.join(projectDir, '.prettierrc')
    );

    const srcDir = path.join(projectDir, 'src');

    fs.mkdirSync(srcDir, { recursive: true });

    fs.writeFileSync(
        path.join(projectDir, 'index.html'),
        renderIndexHtml(userPrompts.projectName)
    );
    fs.writeFileSync(
        path.join(projectDir, 'package.json'),
        renderPackageJson(
            userPrompts.projectName,
            userPrompts.tailwind,
            userPrompts.shadcn,
            userPrompts.router,
            userPrompts.redux
        )
    );
    fs.writeFileSync(
        path.join(projectDir, 'README.md'),
        renderReadme(userPrompts.projectName)
    );
    fs.writeFileSync(
        path.join(projectDir, 'vite.config.ts'),
        renderViteConfigTs(userPrompts.tailwind)
    );
    fs.writeFileSync(
        path.join(srcDir, 'index.css'),
        renderIndexCSS(userPrompts.tailwind, userPrompts.shadcn)
    );

    if (userPrompts.shadcn) {
        fs.writeFileSync(
            path.join(projectDir, 'components.json'),
            renderComponentsJson()
        );

        const libDir = path.join(projectDir, 'src', 'lib');
        fs.mkdirSync(libDir, { recursive: true });

        fs.writeFileSync(path.join(libDir, 'utils.ts'), renderSrcLibUtils());
    }

    fs.writeFileSync(
        path.join(srcDir, 'main.tsx'),
        renderMainTsx(userPrompts.router, userPrompts.redux)
    );
    fs.writeFileSync(
        path.join(srcDir, 'App.tsx'),
        renderAppTsx(userPrompts.router)
    );

    if (userPrompts.router) {
        fs.writeFileSync(path.join(srcDir, 'router.tsx'), renderRouterTsx());
    }

    fs.writeFileSync(
        path.join(projectDir, 'eslint.config.js'),
        renderEslintConfig(userPrompts.redux)
    );

    if (userPrompts.redux) {
        const appDir = path.join(srcDir, 'app');
        const hooksDir = path.join(srcDir, 'hooks');

        fs.mkdirSync(appDir, { recursive: true });
        fs.mkdirSync(hooksDir, { recursive: true });

        fs.writeFileSync(path.join(appDir, 'store.ts'), renderStore());
        fs.writeFileSync(
            path.join(hooksDir, 'useAppDispatch.ts'),
            renderUseAppDispatch()
        );
        fs.writeFileSync(
            path.join(hooksDir, 'useAppSelector.ts'),
            renderUseAppSelector()
        );
    }

    logSuccess(`Initialized your React project at ${projectDir}`);
    console.log();
    console.log('  Now run :');
    console.log(`    cd ${userPrompts.projectName}`);
    console.log('    npm install');
    console.log('    npm run dev');
}
