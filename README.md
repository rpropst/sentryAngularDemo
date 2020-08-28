## Sentry Angular Demo

This project shows how to include Sentry in an Angular project

The important files to note are:
./src/main.ts - added the primary code to initialize the Sentry library and configure to handle errors
./src/app.module.ts - add Sentry as a provider for ErrorHandler
./src/app.component.ts - updated to call a function that doesn't exist so you can test the error

Also note that I changed the main app template to add the button that calls the function that doesn't exist
./src/app.component.html

## Run project

$ ng serve --open
