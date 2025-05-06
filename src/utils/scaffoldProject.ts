import type { UserPrompts } from '../interfaces';
import fs from 'fs';
import path from 'path';
import {
    renderIndexHtml,
    renderPackageJson,
    renderReadme,
} from './renderTemplates';

export function scaffoldProject(userPrompts: UserPrompts): void {
    const projectDir = path.join(process.cwd(), userPrompts.projectName);

    const viteTemplateDir = path.join(__dirname, '../../vite-react-ts');

    if (fs.existsSync(projectDir)) {
        throw new Error('The directory you specified already exists.');
    }

    fs.cpSync(viteTemplateDir, projectDir, { recursive: true });

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

    console.log();
    // console.log(`Initialized your React project at ${projectDir}`);
    console.log(
        `\u001b[32m Initialized your React project at ${projectDir} \u001b[0m`
    );
}
