import fs from 'fs';
import path from 'path';
import ejs from 'ejs';

export function renderIndexHtml(projectName?: string): string {
    const indexHtmlTemplate = fs
        .readFileSync(path.join(__dirname, '../../templates/index.html.ejs'))
        .toString();

    const indexHtml = ejs.render(indexHtmlTemplate, {
        data: { projectName },
    });

    return indexHtml;
}

export function renderPackageJson(projectName?: string): string {
    const packageJsonTemplate = fs
        .readFileSync(path.join(__dirname, '../../templates/package.json.ejs'))
        .toString();

    const packageJson = ejs.render(packageJsonTemplate, {
        data: { projectName },
    });

    return packageJson;
}

export function renderReadme(projectName?: string): string {
    const readmeTemplate = fs
        .readFileSync(path.join(__dirname, '../../templates/README.md.ejs'))
        .toString();

    const readme = ejs.render(readmeTemplate, {
        data: { projectName },
    });

    return readme;
}
