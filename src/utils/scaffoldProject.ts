import type { UserPrompts } from '../interfaces';
import fs from 'fs';
import path from 'path';

import { renderIndexHtml } from '../templates/indexHTML';
import { renderPackageJson } from '../templates/packageJson';
import { renderReadme } from '../templates/readme';
import { renderViteConfigTs } from '../templates/viteConfig';
import { renderIndexCSS } from '../templates/indexCSS';

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

    fs.writeFileSync(
        path.join(projectDir, 'index.html'),
        renderIndexHtml(userPrompts.projectName)
    );
    fs.writeFileSync(
        path.join(projectDir, 'package.json'),
        renderPackageJson(userPrompts.projectName, userPrompts.tailwind)
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
        path.join(projectDir, 'src', 'index.css'),
        renderIndexCSS(userPrompts.tailwind)
    );

    logSuccess(`Initialized your React project at ${projectDir}`);
    console.log();
    console.log('  Now run :');
    console.log(`    cd ${userPrompts.projectName}`);
    console.log('    npm install');
    console.log('    npm run dev');
}
