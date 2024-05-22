#!/bin/bash

#!/bin/bash

# Run the NestJS build command and capture error logs, stripping ANSI escape codes
npx nest build 2>&1 | sed -r 's/\x1b\[[0-9;]*m//g' > error.log

