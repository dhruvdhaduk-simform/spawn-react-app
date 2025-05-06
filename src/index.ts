#!/usr/bin/env node

import { logError } from './utils/logger';
import { promptUser } from './utils/promptUser';
import { scaffoldProject } from './utils/scaffoldProject';

async function main() {
    try {
        const response = await promptUser();
        scaffoldProject(response);
    } catch (err: unknown) {
        if (err instanceof Error) logError(`[ERROR]: ${err.message}`);
        else logError(`[ERROR]: ${err}`);
    }
}

main();
