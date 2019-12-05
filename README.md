to start project:

# available commands

`yarn install`

install root level dependencies

`yarn bootstrap --scope=[packages]`

install local and external dependencies, symlinking pacakge dependencies to root node_modules and hoisting shared external packages to the root repo.

`yarn start:npm`

start local npm registry for versioning purposes

NOTE: lerna.json.commands.publish.registry = URL_NPM_REGISTRY, should be local during dev and should be remote npm during ci.

`yarn start --scope=[packages]`

run `yarn start` in all packages that have this command. runs in parallel and streams logs to single terminal
