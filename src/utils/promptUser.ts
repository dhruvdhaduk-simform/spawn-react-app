import type { UserPrompts } from '../interfaces';
import prompts from 'prompts';
import { logError } from './logger';

export async function promptUser(): Promise<UserPrompts> {
    const projectNameResponse = await prompts({
        type: 'text',
        name: 'projectName',
        message: 'What is the name of your project ?',
        validate: (value: string) => {
            if (value.trim().length < 3)
                return 'Project name should have at least 3 characters.';

            return true;
        },
    });

    if (typeof projectNameResponse.projectName !== 'string') {
        throw new TypeError('Please provide the project name.');
    }

    console.log();

    const languageResponse = await prompts({
        type: 'select',
        name: 'language',
        message: 'Which language will you be using for your project ?',
        choices: [
            { title: 'TypeScript', value: 'TypeScript' },
            { title: 'JavaScript', value: 'JavaScript' },
        ],
    });

    console.log();

    if (!languageResponse.language) {
        throw new Error('Aborted');
    }

    if (languageResponse.language !== 'TypeScript') {
        logError('Wrong answer. Using TypeScript instead.');
        console.log();
    }

    const tailwindResponse = await prompts({
        type: 'confirm',
        name: 'tailwind',
        message: 'Do you want to use TailwindCSS ?',
        initial: true,
    });

    console.log();

    if (tailwindResponse.tailwind === undefined) {
        throw new Error('Aborted.');
    }

    let useShadCN = false;

    if (tailwindResponse.tailwind) {
        const shadcnResponse = await prompts({
            type: 'confirm',
            name: 'shadcn',
            message: 'Do you want to use ShadCN ?',
            initial: true,
        });
        console.log();

        if (shadcnResponse.shadcn === undefined) {
            throw new Error('Aborted.');
        }

        useShadCN = shadcnResponse.shadcn;
    }

    const routerResponse = await prompts({
        type: 'confirm',
        name: 'router',
        message: 'Do you want to use React Router ?',
        initial: true,
    });
    console.log();

    if (routerResponse.router === undefined) {
        throw new Error('Aborted.');
    }

    const redirect: UserPrompts['redirect'] = {
        netlify: false,
        vercel: false,
    };

    if (routerResponse.router) {
        const redirectResponse = await prompts({
            type: 'multiselect',
            name: 'redirect',
            message:
                'Select platforms for which you want to add Redirect Rules :',
            choices: [
                { title: 'Netlify', value: 'netlify' },
                { title: 'Vercel', value: 'vercel' },
            ],
            instructions: false,
            hint: '- Space to select. Return to submit',
        });
        console.log();

        if (redirectResponse.redirect === undefined) {
            throw new Error('Aborted.');
        }

        if (
            Array.isArray(redirectResponse.redirect) &&
            redirectResponse.redirect.every((item) => typeof item === 'string')
        ) {
            if (redirectResponse.redirect.includes('netlify')) {
                redirect.netlify = true;
            }
            if (redirectResponse.redirect.includes('vercel')) {
                redirect.vercel = true;
            }
        }
    }

    const reduxResponse = await prompts({
        type: 'confirm',
        name: 'redux',
        message: 'Do you want to use Redux Toolkit ?',
        initial: true,
    });
    console.log();

    if (reduxResponse.redux === undefined) {
        throw new Error('Aborted.');
    }

    return {
        projectName: projectNameResponse.projectName,
        tailwind: tailwindResponse.tailwind,
        shadcn: useShadCN,
        router: routerResponse.router,
        redux: reduxResponse.redux,
        redirect,
    };
}
