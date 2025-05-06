import type { UserPrompts } from '../interfaces';
import prompts from 'prompts';

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
    if (languageResponse.language !== 'TypeScript') {
        console.log(
            '\u001b[31m Wrong answer. Using TypeScript instead.\u001b[0m'
        );
        console.log();
    }

    return {
        projectName: projectNameResponse.projectName,
    };
}
