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
            message: 'Do you want ot use ShadCN ?',
            initial: true,
        });
        console.log();

        if (shadcnResponse.shadcn === undefined) {
            throw new Error('Aborted.');
        }

        useShadCN = shadcnResponse.shadcn;
    }

    return {
        projectName: projectNameResponse.projectName,
        tailwind: tailwindResponse.tailwind,
        shadcn: useShadCN,
    };
}
