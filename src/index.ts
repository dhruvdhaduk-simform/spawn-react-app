#!/usr/bin/env node

import { promptUser } from './utils/promptUser';

promptUser().then((response) => console.log(response));
