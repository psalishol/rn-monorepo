## React Native Monorepo

This is a monorepo built for React Native with support for mobile, macOS, Windows, and web using TypeScript. The monorepo structure enables shared code, improved build performance, and consistent development practices.

### Project Structure

The project structure of the monorepo is as follows:

```
├── apps
│   ├── macos
│   ├── mobile
│   ├── web
│   └── windows
├── packages
│   ├── lib
│   └── shared
├── tsconfig.base.json
├── .eslintrc
└── package.json
```

- `apps`: Contains the native code for each specific platform: `macos`, `mobile`, `web`, and `windows`.
- `packages`: Contains the `lib` and `shared` subfolders.
  - `lib`: Used for a library or scoped code for reuse in other projects.
  - `shared`: Contains code to be shared among all platforms.
- `tsconfig.base.json`: Contains the base configuration for TypeScript that all packages extend.
- `.eslintrc`: Contains linting rules for the monorepo.
- `package.json`: Contains the dependencies and scripts for the monorepo.

### TypeScript Configuration

TypeScript is enabled in all packages, with project references used to improve build times. Types are shared between packages using the `types` property in the `package.json` file.

### Linting and Formatting

The monorepo includes linting and formatting tools to ensure consistency across the codebase. For TypeScript, ESLint, TSLint, and Prettier are used.

### Getting Started

To get started with the monorepo, follow these steps:

1. Clone the repo: `git clone git@github.com:psalishol/react-native-monorepo.git`
2. Install dependencies: `cd react-native-monorepo && yarn`
3. Build the packages: `npm run build`
4. Start the development server: `npm run start`


### Running the Project

#### macOS

To start the macOS Metro server, run:

`yarn macos:start`

To build the macOS app, run:

`yarn macos`


#### Mobile

To start the Metro server for mobile, run:

`yarn mobile:start`


To build the app for Android, run:

`yarn run android`

To build the app for iOS, run:

`yarn ios`


#### Web

To start the Next.js server for web, run:

`yarn next:start`


#### Windows

To start the Metro server for Windows, run:

`yarn windows:start`


To build the app for Windows, run:

`yarn windows`


### Contributing

Contributions to the monorepo are welcome! To contribute, fork the repo and create a new branch for your changes. Once you're done, create a pull request for review.

### Resources

For more information on how to build a monorepo for React Native, please refer to the following resources:

- [Running React Native Everywhere](https://mmazzarolo.com/blog/2021-09-11-running-react-native-everywhere/)
- [TypeScript Project References](https://www.typescriptlang.org/docs/handbook/project-references.html)
- [ESLint](https://eslint.org/)
- [TSLint](https://palantir.github.io/tslint/)
- [Prettier](https://prettier.io/)
