[![Angular Logo](https://www.vectorlogo.zone/logos/angular/angular-icon.svg)](https://angular.io/) [![Electron Logo](https://www.vectorlogo.zone/logos/electronjs/electronjs-icon.svg)](https://electronjs.org/)

# BBBoilerplate

BattleBuddy Electron Boilerplate

Currently runs with:

- Angular v9.0.2
- Electron v8.0.1
- Electron Builder v22.3.2

/!\ Hot reload only pertains to the renderer process. The main electron process is not able to be hot reloaded, only restarted.

/!\ Angular 9.x CLI needs Node 10.13 or later to work correctly. I am usign Node v12.3.1 (npm v6.9.0)

## Getting Started

Clone this repository locally :

```bash
git clone https://github.com/robincrorie/BBBoilerplate.git
```

Install dependencies with npm :

```bash
npm install
```

There is an issue with `yarn` and `node_modules` when the application is built by the packager. Just use `npm` as dependencies manager.

If you want to generate Angular components with Angular-cli , you **MUST** install `@angular/cli` in npm global context.
Follow [Angular-cli documentation](https://github.com/angular/angular-cli) if you had installed a previous version of `angular-cli`.

```bash
npm install -g @angular/cli
```

## Build for development

- **in a terminal window** -> npm start

Voila! You can use the Angular + Electron app in a local development environment with hot reload !

The application code is managed by `main.ts`. The app runs with a simple Angular App (http://localhost:4200) and an Electron window.
You can disable "Developer Tools" by commenting `win.webContents.openDevTools();` in `main.ts`.

## Commands

| Command                    | Description                                                                                                 |
| -------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `npm run ng:serve:web`     | Execute the app in the browser                                                                              |
| `npm run build`            | Build the app. Your built files are in the /dist folder.                                                    |
| `npm run build:prod`       | Build the app with Angular aot. Your built files are in the /dist folder.                                   |
| `npm run electron:local`   | Builds your application and start electron                                                                  |
| `npm run electron:linux`   | Builds your application and creates an app consumable on linux system                                       |
| `npm run electron:windows` | On a Windows OS, builds your application and creates an app consumable in windows 32/64 bit systems         |
| `npm run electron:mac`     | On a MAC OS, builds your application and generates a `.app` file of your application that can be run on Mac |

**The BB application will be optimised. Only /dist folder and node dependencies are included in the executable.**

## Browser mode

Maybe you want to execute the application in the browser with hot reload ? Just run `npm run ng:serve:web`.
**Note that you can't use Electron or NodeJS native libraries in this case.** Please check `providers/electron.service.ts` to watch how conditional import of electron/Native libraries is done.
