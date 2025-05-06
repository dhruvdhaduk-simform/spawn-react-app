import type { UserPrompts } from '../interfaces';
import fs from 'fs';
import path from 'path';

export function scaffoldProject(userPrompts: UserPrompts): void {
    const projectDir = path.join(process.cwd(), userPrompts.projectName);

    const viteTemplateDir = path.join(__dirname, '../../vite-react-ts');

    if (fs.existsSync(projectDir)) {
        throw new Error('The directory you specified already exists.');
    }

    fs.cpSync(viteTemplateDir, projectDir, { recursive: true });

    console.log();
    // console.log(`Initialized your React project at ${projectDir}`);
    console.log(
        `\u001b[32m Initialized your React project at ${projectDir} \u001b[0m`
    );
}
