#!/usr/bin/env node

import { promptUser } from './utils/promptUser';
import { scaffoldProject } from './utils/scaffoldProject';

promptUser()
    .then((response) => {
        scaffoldProject(response);
    })
    .catch((err: unknown) => {
        if (err instanceof Error) {
            console.error(err.message);
        } else {
            console.error(err);
        }
    });
