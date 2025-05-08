import type { UserPrompts } from '../interfaces';
import fs from 'fs';
import path from 'path';
import {
    renderIndexHtml,
    renderPackageJson,
    renderReadme,
} from './renderTemplates';
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

    fs.writeFileSync(
        path.join(projectDir, 'index.html'),
        renderIndexHtml(userPrompts.projectName)
    );
    fs.writeFileSync(
        path.join(projectDir, 'package.json'),
        renderPackageJson(userPrompts.projectName)
    );
    fs.writeFileSync(
        path.join(projectDir, 'README.md'),
        renderReadme(userPrompts.projectName)
    );

    logSuccess(`Initialized your React project at ${projectDir}`);
    console.log();
    console.log('  Now run :');
    console.log(`    cd ${userPrompts.projectName}`);
    console.log('    npm install');
    console.log('    npm run dev');
}
