#!/usr/bin/env node

import { promptUser } from './utils/promptUser';

promptUser().then((response) => console.log(response)).catch((err: unknown) => {
    if (err instanceof Error) {
        console.error(err.message);
    }
    else {
        console.error(err);
    }
});
