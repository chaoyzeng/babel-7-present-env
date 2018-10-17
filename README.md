This repo is used for reproducing a preset-env bug with useBuiltIns: usage.

Run this by running yarn install followed by

npm run debug

and visiting localhost:8080/

replace .babelrc with .babelrc-with-excludes (by renaming the latter) to see the same files built but with the array builtins excluded